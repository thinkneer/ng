// Paper builder for exam mode. Pure functions (no DOM), so the build script and tests can use them too.
//
// A numbered paper (P-01, P-02 …) is built from three things:
//   1. the subject's pattern  (data/patterns/<class>/<subject>.json: sections, count × marks, type mix, internal choices)
//   2. the unit weightage      (subject.json units[].marks; units sharing a marks_group share one total)
//   3. the question bank       (every chapter's questions.json)
// Papers are built in order P-01, P-02 … with a seeded random generator, preferring questions used least in
// the papers before, so consecutive papers repeat as little as the bank allows. Same bank + same number =
// the same paper on every device, so a teacher can say "everyone sit P-07".

export const TYPE_ORDER = ['la5', 'case', 'sa3', 'vsa2', 'ar', 'mcq']; // fill big questions first
export const TYPE_NAME = { mcq: 'MCQ', ar: 'Assertion–Reason', case: 'Case-based', vsa2: 'Short answer', sa3: 'Short answer', la5: 'Long answer' };

/* ---------- seeded random ---------- */
function hashSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^= h >>> 16) >>> 0;
}
export function rng(seed) {
  let a = hashSeed(String(seed));
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const pickWeighted = (items, weight, r) => {
  const ws = items.map(weight); const sum = ws.reduce((a, b) => a + b, 0);
  if (sum <= 0) return items[Math.floor(r() * items.length)];
  let x = r() * sum;
  for (let i = 0; i < items.length; i++) { x -= ws[i]; if (x <= 0) return items[i]; }
  return items[items.length - 1];
};

/** Short code naming the exact questions of a paper (changes if the bank changes the paper). */
export function paperCode(paper) {
  const refs = paper.sections.flatMap((s) => s.items.map((i) => `${i.ref}|${i.or || ''}`)).join(',');
  const A = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'; // no 0/O, 1/I/L: easy to copy from a sheet
  let h = hashSeed(refs), out = '';
  for (let i = 0; i < 4; i++) { out += A[h % A.length]; h = Math.floor(h / A.length); }
  return out;
}
export const paperId = (n) => `P-${String(n).padStart(2, '0')}`;
export const paperNumber = (id) => { const m = /^P-(\d{1,3})$/.exec(id || ''); return m ? Number(m[1]) : null; };

/** Can this pattern be built automatically? (English Core is not a count × marks grid.) */
export function canBuild(pattern) {
  return !!pattern?.sections?.length && pattern.sections.every((s) => s.count && s.marks_each && s.types?.length);
}

/** Slots of one paper, in paper order. ORs: the last `internal_choice` slots of a section (case ORs sit inside parts, so none). */
export function slotsOf(pattern) {
  const slots = [];
  for (const sec of pattern.sections) {
    const types = sec.mix ? Object.entries(sec.mix).flatMap(([t, n]) => Array(n).fill(t)) : Array(sec.count).fill(sec.types[0]);
    const orCount = types[0] === 'case' ? 0 : Math.min(sec.internal_choice || 0, types.length);
    types.forEach((type, i) => slots.push({ section: sec.id, type, marks: sec.marks_each, or: i >= types.length - orCount }));
  }
  return slots;
}

/** Unit-weightage targets: { groupKey: marks }. Units in one marks_group share a single total. */
export function targetsOf(subject) {
  const t = {};
  for (const u of subject.units || []) { const g = u.marks_group || u.id; if (!(g in t)) t[g] = Number(u.marks) || 0; }
  return t;
}
export function groupOfChapter(subject) {
  const m = {}; const order = {};
  let k = 0;
  for (const u of subject.units || []) for (const c of u.chapters || []) { m[c.id] = u.marks_group || u.id; order[c.id] = k++; }
  return { group: m, order };
}

/** bank entries: { q, chapter } → adds group + order. */
export function prepareBank(subject, entries) {
  const { group, order } = groupOfChapter(subject);
  return entries.filter((e) => group[e.chapter] != null).map((e) => ({ ...e, group: group[e.chapter], order: order[e.chapter], ref: `${e.chapter}/${e.q.id}` }));
}

/** How many questions each paper needs per type (with ORs) and how many fresh papers the bank gives. */
export function bankCheck(pattern, bank) {
  const need = {}; const have = {};
  for (const s of slotsOf(pattern)) need[s.type] = (need[s.type] || 0) + (s.or ? 2 : 1);
  for (const b of bank) if (b.q.marks === marksFor(pattern, b.q.type)) have[b.q.type] = (have[b.q.type] || 0) + 1;
  const rows = Object.keys(need).map((t) => ({ type: t, need: need[t], have: have[t] || 0, papers: Math.floor((have[t] || 0) / need[t]) }));
  const fresh = rows.length ? Math.min(...rows.map((r) => r.papers)) : 0;
  const short = rows.filter((r) => r.have < need[r.type]);
  return { rows, fresh, ok: !short.length && rows.every((r) => r.have > 0), short };
}
function marksFor(pattern, type) { const s = pattern.sections.find((x) => (x.mix ? type in x.mix : x.types.includes(type))); return s ? s.marks_each : null; }

/**
 * Build papers 1..upTo. Returns [{ id, number, sections:[{ id, name, marks_each, items:[{ n, ref, or? }] }], total, groups, notes }].
 */
export function buildPapers({ subject, pattern, bank, upTo = 20, tries = 24 }) {
  if (!canBuild(pattern)) return [];
  const slots = slotsOf(pattern);
  const targets = targetsOf(subject);
  const targetSum = Object.values(targets).reduce((a, b) => a + b, 0);
  const weighted = targetSum === pattern.total_marks; // only trust unit marks that add up to the paper
  const usage = new Map(bank.map((b) => [b.ref, 0]));
  const byType = {};
  for (const b of bank) if (b.q.marks === marksFor(pattern, b.q.type)) (byType[b.q.type] ||= []).push(b);
  const papers = [];

  for (let n = 1; n <= upTo; n++) {
    let best = null;
    for (let t = 0; t < tries; t++) {
      const r = rng(`${subject.id}|${n}|${t}`);
      const cand = attempt({ slots, targets, weighted, byType, usage, r });
      if (!best || cand.score < best.score) best = cand;
    }
    for (const it of best.items) { usage.set(it.main.ref, usage.get(it.main.ref) + 1); if (it.alt) usage.set(it.alt.ref, usage.get(it.alt.ref) + 1); }
    papers.push(shape({ n, pattern, slots, picked: best.items, targets, weighted }));
  }
  return papers;
}

function attempt({ slots, targets, weighted, byType, usage, r }) {
  const remaining = { ...targets };
  const used = new Set(); const chapterHits = {};
  const order = slots.map((s, i) => ({ s, i })).sort((a, b) => TYPE_ORDER.indexOf(a.s.type) - TYPE_ORDER.indexOf(b.s.type) || a.i - b.i);
  const items = new Array(slots.length);
  let usageCost = 0, missing = 0;
  const choose = (pool, preferGroup) => {
    if (!pool.length) return null;
    const minUse = Math.min(...pool.map((b) => usage.get(b.ref)));
    let fresh = pool.filter((b) => usage.get(b.ref) === minUse);
    if (preferGroup) { const g = fresh.filter((b) => b.group === preferGroup); if (g.length) fresh = g; }
    const minCh = Math.min(...fresh.map((b) => chapterHits[b.chapter] || 0));
    fresh = fresh.filter((b) => (chapterHits[b.chapter] || 0) === minCh);
    return fresh[Math.floor(r() * fresh.length)];
  };
  for (const { s, i } of order) {
    const pool = (byType[s.type] || []).filter((b) => !used.has(b.ref));
    if (!pool.length) { missing++; items[i] = { slot: s, main: null }; continue; }
    let group = null;
    if (weighted) {
      const groups = [...new Set(pool.map((b) => b.group))];
      const fits = groups.filter((g) => remaining[g] >= s.marks);
      group = fits.length ? pickWeighted(fits, (g) => remaining[g] ** 1.5, r) : groups.sort((a, b) => remaining[b] - remaining[a])[0];
    }
    const main = choose(group ? pool.filter((b) => b.group === group) : pool);
    used.add(main.ref); chapterHits[main.chapter] = (chapterHits[main.chapter] || 0) + 1; usageCost += usage.get(main.ref);
    if (weighted) remaining[main.group] -= s.marks;
    let alt = null;
    if (s.or) {
      const altPool = pool.filter((b) => !used.has(b.ref));
      alt = choose(altPool, main.group);
      if (alt) { used.add(alt.ref); chapterHits[alt.chapter] = (chapterHits[alt.chapter] || 0) + 1; usageCost += usage.get(alt.ref); }
    }
    items[i] = { slot: s, main, alt };
  }
  const deviation = weighted ? Object.values(remaining).reduce((a, v) => a + Math.abs(v), 0) : 0;
  return { items, score: missing * 1000 + deviation * 10 + usageCost, deviation };
}

function shape({ n, pattern, slots, picked, targets, weighted }) {
  const sections = pattern.sections.map((sec) => ({ id: sec.id, name: sec.name, marks_each: sec.marks_each, note: sec.note || null, items: [] }));
  const groups = Object.fromEntries(Object.entries(targets).map(([g, t]) => [g, { target: t, got: 0 }]));
  const notes = [];
  // within a section keep type blocks (MCQs, then A–R), and chapter order inside each block, like a CBSE paper
  for (const sec of sections) {
    const its = picked.filter((p) => p.slot.section === sec.id);
    const typeRank = [...new Set(slots.filter((s) => s.section === sec.id).map((s) => s.type))];
    its.sort((a, b) => typeRank.indexOf(a.slot.type) - typeRank.indexOf(b.slot.type) || (a.main?.order ?? 999) - (b.main?.order ?? 999) || (a.slot.or ? 1 : 0) - (b.slot.or ? 1 : 0));
    sec.items = its.map((p) => ({ type: p.slot.type, marks: p.slot.marks, ref: p.main?.ref || null, ...(p.alt ? { or: p.alt.ref } : {}) }));
    for (const p of its) if (p.main && groups[p.main.group]) groups[p.main.group].got += p.slot.marks;
    const missing = its.filter((p) => !p.main).length;
    if (missing) notes.push(`Section ${sec.id}: ${missing} question${missing > 1 ? 's' : ''} short in the bank`);
    const noAlt = its.filter((p) => p.slot.or && p.main && !p.alt).length;
    if (noAlt) notes.push(`Section ${sec.id}: ${noAlt} internal choice${noAlt > 1 ? 's' : ''} left out (bank too small)`);
  }
  let k = 0;
  for (const sec of sections) for (const it of sec.items) it.n = ++k;
  const total = sections.reduce((a, s) => a + s.items.filter((i) => i.ref).reduce((b, i) => b + i.marks, 0), 0);
  if (weighted) for (const [g, v] of Object.entries(groups)) if (v.got !== v.target) notes.push(`Unit ${g}: ${v.got} marks (blueprint ${v.target})`);
  return { id: paperId(n), number: n, sections, total, groups: weighted ? groups : null, notes };
}

/** A fixed paper file (content/…/papers/<id>.json) in the same shape as a built one. */
export function shapeFixed(file, bankByRef) {
  let k = 0;
  const sections = file.sections.map((s) => ({
    id: s.id, name: s.name, note: s.note || null,
    items: s.questions.map((x) => { const q = bankByRef.get(x.ref)?.q; return { n: ++k, ref: x.ref, type: q?.type || null, marks: q?.marks ?? 0, ...(x.or ? { or: x.or } : {}) }; }),
  }));
  const total = sections.reduce((a, s) => a + s.items.reduce((b, i) => b + i.marks, 0), 0);
  return { id: file.id, title: file.title || null, fixed: true, sections, total, notes: [] };
}

/** Suggested pace: 15 min kept for checking; Section A at ~1.2 min a question; the rest by marks. */
export function paceOf(paper, minutes = 180) {
  const secs = paper.sections.map((s) => ({ id: s.id, n: s.items.length, marks: s.items.reduce((a, i) => a + i.marks, 0), one: s.items.every((i) => i.marks === 1) }));
  let left = minutes - 15;
  const out = {};
  for (const s of secs) if (s.one) { out[s.id] = Math.round(s.n * 1.2); left -= out[s.id]; }
  const rest = secs.filter((s) => !s.one); const restMarks = rest.reduce((a, s) => a + s.marks, 0) || 1;
  for (const s of rest) out[s.id] = Math.round((s.marks / restMarks) * left / 5) * 5;
  return out;
}
