// Exam mode: sit a full board paper on a phone, write on paper.
// Routes (per subject):
//   …/<subject>/exam                 papers list: next paper, numbered papers P-01…, fixed papers
//   …/<subject>/exam/<paper>         before-you-start page, or the running paper when this paper is in progress
//   …/<subject>/exam/<paper>/review  model answers and step marks, one question per screen
// Nothing the student writes is recorded: answers go on paper and the sheet is handed to the teacher.
// The running paper (questions, clock, flags, position) is saved on the device, so a refresh or a dead
// battery does not reset the clock. Papers sat are kept in progress.papers.
import { html, raw, icon, esc, emptyState, largeTitle, openSheet, toast, haptic, ensureCss, fmtDate, ring } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { canBuild, prepareBank, buildPapers, bankCheck, shapeFixed, paceOf, paperNumber, paperId, paperCode, slotsOf, TYPE_NAME } from '../exam-builder.js';

const LIST_PAPERS = 20;
const ALERTS = [[60, '1 hour left'], [30, '30 minutes left'], [10, '10 minutes left · start checking'], [5, '5 minutes left']];
const KEYS = 'ABCDEF';
const MIN = 60000;

/* ---------- data ---------- */
const bankCache = new Map();
async function loadBank(sub) {
  const key = `${sub.path}|${data.allChapters(sub).map((c) => c.questions || 0).join(',')}`;
  if (bankCache.has(key)) return bankCache.get(key);
  const p = (async () => {
    const chapters = data.allChapters(sub).filter((c) => c.items?.questions);
    const lists = await Promise.all(chapters.map((c) => data.questions(sub, c.id).then((qs) => qs.map((q) => ({ q, chapter: c.id, ch: c }))).catch(() => [])));
    const bank = prepareBank(sub, lists.flat());
    return { bank, byRef: new Map(bank.map((b) => [b.ref, b])) };
  })();
  bankCache.set(key, p);
  p.catch(() => bankCache.delete(key));
  return p;
}
const paperCache = new Map(); // bank key → papers built so far (P-01 … P-n); later papers extend the list
async function builtPapers(cls, sub, upTo) {
  const pattern = await data.pattern(cls.id, sub.id).catch(() => null);
  if (!canBuild(pattern)) return { pattern, papers: [] };
  const { bank } = await loadBank(sub);
  const key = `${sub.id}|${bank.length}`;
  const have = paperCache.get(key) || [];
  if (have.length < upTo) paperCache.set(key, buildPapers({ subject: sub, pattern, bank, upTo }));
  return { pattern, papers: (paperCache.get(key) || []).slice(0, upTo), check: bankCheck(pattern, bank), bankSize: bank.length };
}
async function getPaper(cls, sub, id) {
  const n = paperNumber(id);
  if (n) { const { pattern, papers } = await builtPapers(cls, sub, n); return { pattern, paper: papers[n - 1] || null }; }
  const meta = (sub.papers || []).find((p) => p.id === id);
  if (!meta) return { paper: null };
  const [file, { byRef }, pattern] = await Promise.all([fetch(meta.path, { cache: 'no-cache' }).then((r) => r.json()), loadBank(sub), data.pattern(cls.id, sub.id).catch(() => null)]);
  return { pattern, paper: shapeFixed(file, byRef) };
}

/** A built paper's outline straight from the pattern (no bank needed), so pages paint before the papers are built. */
function outlineOf(pattern, n) {
  let k = 0;
  const slots = slotsOf(pattern);
  return { id: paperId(n), number: n, title: null, total: pattern.total_marks, notes: [],
    sections: pattern.sections.map((sec) => ({ id: sec.id, name: sec.name, items: slots.filter((x) => x.section === sec.id).map((x) => ({ n: ++k, marks: x.marks, type: x.type, ...(x.or ? { or: true } : {}) })) })) };
}

/* ---------- the running paper (one per device) ---------- */
const phaseOf = (s, now = Date.now()) => (s.endedAt ? 'over' : now < s.writingAt ? 'reading' : now < s.endsAt ? 'writing' : 'over');
/** A paper whose time ran out while the app was closed: record it and clear it. Returns it once. */
function settle() {
  const s = store.examSession();
  if (!s || phaseOf(s) !== 'over') return null;
  const end = s.endedAt || s.endsAt;
  store.recordPaper({ subject: s.subject, id: s.paper, minutes: Math.max(0, Math.round((end - s.writingAt) / MIN)), early: !!s.early, code: s.code, refs: s.sections.flatMap((x) => x.items.map((i) => [i.ref, i.or].filter(Boolean))) });
  store.setExamSession(null);
  return { ...s, endedAt: end };
}
const clockText = (ms) => {
  const t = Math.max(0, Math.ceil(ms / 1000)); const h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), sec = t % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`;
};
const hm = (min) => (min < 1 ? 'under a minute' : min >= 60 ? `${Math.floor(min / 60)} h ${min % 60 ? `${min % 60} min` : ''}`.trim() : `${min} min`);
const countOf = (paper) => paper.sections.reduce((a, s) => a + s.items.length, 0);
const isTeacher = () => ['admin', 'teacher'].includes(store.get('session', null)?.role);
/** The paper exactly as sat (refs saved at pens down), so answers line up even after the bank grows. */
function asSat(paper, sitting) {
  if (!sitting?.refs?.length || sitting.code === paperCode(paper) || sitting.refs.length !== countOf(paper)) return paper;
  let k = 0;
  return { ...paper, sections: paper.sections.map((sec) => ({ ...sec, items: sec.items.map((it) => { const [ref, or] = sitting.refs[k++]; const o = { ...it, ref }; if (or) o.or = or; else delete o.or; return o; }) })) };
}

/* ---------- routing ---------- */
export async function examRoute({ cls, stream, sub, paperId: id, extra }) {
  const pattern = await data.pattern(cls.id, sub.id).catch(() => null);
  const css = ensureCss('styles/exam.css'); // the list and intro pages use shared styles; the full-screen views wait for it
  const home = routeFor(cls.id, stream.id, sub.id, 'exam');
  if (!id) return examHome({ cls, stream, sub, home, pattern });
  const num = paperNumber(id);
  if (num && !extra && canBuild(pattern) && data.allChapters(sub).some((c) => c.items?.questions)) {
    // fast path: paint from the pattern; the paper itself is built while the student reads the page
    const base = `${home}/${id}`;
    settle();
    const s = store.examSession();
    if (s && s.subject === sub.id && s.paper === id) { await css; return running({ sub, home, base }, s); }
    return intro({ cls, stream, sub, home, pattern, base, paper: outlineOf(pattern, num), ready: new Promise((ok) => setTimeout(ok, 50)).then(() => getPaper(cls, sub, id)).then((r) => r.paper) });
  }
  const { paper } = await getPaper(cls, sub, id);
  if (!paper) return { title: 'Paper not found', tab: 'subjects', back: home, html: emptyState({ icon: 'alert', title: 'No such paper', action: `<a class="btn btn--secondary" href="${home}">All papers</a>` }) };
  await css;
  const ctx = { cls, stream, sub, home, pattern, paper, base: `${home}/${paper.id}` };
  if (extra === 'review') return review(ctx);
  if (extra?.startsWith('marks=')) return marksPage(ctx, extra.slice(6));
  settle();
  const s = store.examSession();
  if (s && s.subject === sub.id && s.paper === paper.id) return running(ctx, s);
  return intro(ctx);
}

/* ---------- papers list ---------- */
async function examHome({ cls, stream, sub, home, pattern }) {
  const justEnded = settle();
  const running = store.examSession();
  const papers = canBuild(pattern) && data.allChapters(sub).some((c) => c.items?.questions) ? Array.from({ length: LIST_PAPERS }, (_, i) => outlineOf(pattern, i + 1)) : [];
  const fixed = sub.papers || [];
  const done = new Map(store.papersDone(sub.id).map((p) => [p.id, p]));
  const next = papers.find((p) => !done.has(p.id));
  const back = routeFor(cls.id, stream.id, sub.id);
  const last = (id) => store.lastSitting(sub.id, id);
  const row = (id, title, subline) => {
    const d = last(id);
    const info = d ? [d.marks ? `<strong>${d.score} / ${d.out_of}</strong>` : 'Sat, not marked yet', fmtDate(d.at.slice(0, 10)), d.minutes != null ? hm(d.minutes) + (d.early ? ' (early)' : '') : ''].filter(Boolean).join(' · ') : esc(subline);
    return `<div class="list__item has-leading pressable row-link">
      <span class="list__leading" style="--unit:#${sub.colour}">${d ? icon('check') : icon('paper')}</span>
      <a class="list__body row-link__main" href="${home}/${id}"><span class="list__title">${esc(title)}</span><span class="list__sub">${info}</span></a>
      <span class="list__trailing">${d ? `<a class="btn btn--plain btn--sm ex-answers" href="${home}/${id}/review">Answers</a>` : icon('chevronRight', { class: 'chev' })}</span></div>`;
  };
  const marked = store.papersDone(sub.id).filter((p) => p.marks).slice(-5);
  if (!papers.length && !fixed.length) {
    return { title: 'Exam mode', tab: 'subjects', back, backLabel: sub.name, unitColour: sub.colour,
      html: html`${largeTitle('Exam mode', { eyebrow: `${sub.name} · 3-hour paper` })}${emptyState({ icon: 'timer', title: 'Full papers are on their way', text: canBuild(pattern) ? 'Papers are built from the chapter question banks, which are still being written.' : `${sub.name} papers do not fit a fixed grid (reading passages, writing tasks, extracts), so they come as complete set papers. They will appear here as they are written.`, action: `<a class="btn btn--secondary" href="${back}">Back to ${esc(sub.name)}</a>` })}` };
  }
  return {
    title: 'Exam mode', largeTitle: true, tab: 'subjects', back, backLabel: sub.name, unitColour: sub.colour,
    html: html`${largeTitle('Exam mode', { eyebrow: `${sub.name} · ${pattern?.total_marks || sub.theory_marks} marks · 3 hours` })}
      ${justEnded ? raw(`<div class="notice mb-4">${icon('check')}<div><strong>Time’s up on ${esc(justEnded.paper)}.</strong> Hand in your answer sheet to your teacher. <a href="${routeFor(cls.id, stream.id, justEnded.subject, 'exam')}/${esc(justEnded.paper)}/review">Check answers</a></div></div>`) : ''}
      ${running ? raw(resumeCard(running)) : ''}
      ${marked.length ? raw(`<div class="stats mb-4">${marked.map((p) => `<a class="stat" href="${home}/${esc(p.id)}/review" style="text-decoration:none;color:inherit"><div class="stat__value tnum" style="color:#${sub.colour}">${p.score}<span class="t-3" style="font-size:.55em">/${p.out_of}</span></div><div class="stat__label">${esc(p.id)} · ${fmtDate(p.at.slice(0, 10), { day: 'numeric', month: 'short' })}</div></a>`).join('')}</div>`) : ''}
      <p class="t-subhead t-2 mb-4">Sit a full paper the way the board runs it: 15 minutes to read, then 3 hours on the clock. One question per screen. Write every answer on paper.</p>
      ${next && !(running && running.subject === sub.id) ? raw(`<a class="card continue pressable mb-4" href="${home}/${next.id}" style="--unit:#${sub.colour}"><span class="list__leading">${icon('timer')}</span><span class="continue__main"><span class="continue__title">Next: Paper ${next.id}</span><span class="continue__sec" style="color:var(--text-2);font-weight:500">${countOf(next)} questions · ${next.total} marks · 3 h + 15 min reading</span></span>${icon('chevronRight', { class: 'chev', size: 20 })}</a>`) : ''}
      ${fixed.length ? raw(`<div class="list__header"><span>Set papers</span><span class="count">${fixed.length}</span></div><div class="list">${fixed.map((p) => row(p.id, p.title, 'Complete paper')).join('')}</div>`) : ''}
      ${papers.length ? raw(`<div class="list__header"><span>Built papers</span><span class="count">${done.size ? `${[...done.keys()].filter((k) => paperNumber(k)).length} sat` : ''}</span></div><div class="list">${papers.map((p) => row(p.id, `Paper ${p.id}`, `${countOf(p)} questions · ${p.total} marks`)).join('')}</div>
        <button class="btn btn--plain btn--block mt-6" type="button" data-paste>${raw(icon('download'))} Add marks from your teacher</button>
        <p class="t-footnote t-3 mt-4">Every paper follows the CBSE 2026–27 sample-paper pattern and the unit weightage. Same number, same paper on every phone, so a teacher can set “${esc(sub.name)} P-07 on Sunday”. <span data-bank></span> More questions arrive every week.</p>`) : ''}`,
    async mount(el) {
      const bankNote = el.querySelector('[data-bank]');
      if (bankNote) setTimeout(() => builtPapers(cls, sub, 0).then(({ check, bankSize }) => { bankNote.textContent = `Built from ${bankSize} questions${check?.fresh ? `; about ${check.fresh} paper${check.fresh === 1 ? '' : 's'} before questions start to repeat in new mixes` : ''}.`; }).catch(() => {}), 50);
      el.querySelector('[data-paste]')?.addEventListener('click', () => {
        const sh = openSheet({ title: 'Add marks', content: `<p class="t-subhead t-2">Paste the marks link your teacher sent. (Tapping the link works too; on iPhone, if the app opens in Safari instead, paste it here.)</p><input type="url" class="mt-4" placeholder="Paste the marks link" aria-label="Marks link" autocomplete="off" style="width:100%"><button class="btn btn--block mt-4" type="button" data-go>Open</button><p class="t-footnote mt-2" style="color:var(--danger)" data-err hidden>That doesn’t look like a marks link.</p>` });
        const input = sh.body.querySelector('input');
        const go = () => {
          const m = /#(\/[^\s]*\/exam\/[^/\s]+\/marks=[0-9A-Za-z]{4}:[0-9.,]+)/.exec(input.value.trim());
          if (!m) { sh.body.querySelector('[data-err]').hidden = false; return; }
          sh.close(); location.hash = m[1];
        };
        sh.body.querySelector('[data-go]').addEventListener('click', go);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
      });
    },
  };
}
function resumeCard(s) {
  const left = phaseOf(s) === 'reading' ? 'reading time' : `${clockText(s.endsAt - Date.now())} left`;
  return `<a class="card continue pressable mb-4" href="${esc(s.route)}" style="--unit:var(--danger)"><span class="list__leading">${icon('clock')}</span><span class="continue__main"><span class="continue__title">Resume ${esc(s.subjectName)} ${esc(s.paper)}</span><span class="continue__sec">Running · ${left}</span></span>${icon('chevronRight', { class: 'chev', size: 20 })}</a>`;
}

/* ---------- before you start ---------- */
function intro({ cls, stream, sub, home, pattern, paper, base, ready = Promise.resolve(paper) }) {
  const pace = paceOf(paper, pattern?.duration_minutes || 180);
  const reading = pattern?.reading_time_minutes ?? 15;
  const running = store.examSession();
  const sat = store.papersDone(sub.id).find((p) => p.id === paper.id);
  const secRows = paper.sections.map((s) => {
    const marks = [...new Set(s.items.map((i) => i.marks))];
    const types = {}; for (const i of s.items) if (i.type) types[i.type] = (types[i.type] || 0) + 1;
    const ors = s.items.filter((i) => i.or).length;
    const sub2 = [Object.entries(types).length > 1 ? Object.entries(types).map(([t, n]) => `${n} ${TYPE_NAME[t]}`).join(' · ') : (TYPE_NAME[Object.keys(types)[0]] || ''), ors ? `${ors} with an internal choice` : '', pace[s.id] ? `aim for about ${pace[s.id]} min` : ''].filter(Boolean).join(' · ');
    return `<div class="list__item has-leading"><span class="list__leading" style="--unit:#${sub.colour}">${esc(s.id)}</span><span class="list__body"><span class="list__title">${s.items.length} question${s.items.length === 1 ? '' : 's'} × ${marks.length === 1 ? `${marks[0]} mark${marks[0] === 1 ? '' : 's'}` : 'mixed marks'}</span><span class="list__sub">${esc(sub2)}</span></span></div>`;
  }).join('');
  return {
    title: `Paper ${paper.id}`, tab: 'subjects', back: home, backLabel: 'Papers', unitColour: sub.colour,
    html: html`${largeTitle(paper.title || `Paper ${paper.id}`, { eyebrow: `${sub.name} · ${paper.total} marks · 3 hours` })}
      ${sat ? raw(`<div class="notice mb-4">${icon('check')}<div>You sat this paper on ${fmtDate(sat.at.slice(0, 10))}. <a href="${base}/review">Check answers</a></div></div>`) : ''}
      <div class="card ex-rules">
        <div class="t-headline">Before you start</div>
        <ul>
          <li>Paper, pen, a quiet desk. Put the phone on <strong>Do Not Disturb</strong>.</li>
          <li><strong>${reading} minutes reading time</strong> first: read the whole paper, don’t write.</li>
          <li>Then <strong>3 hours</strong>. The clock keeps running if you leave the app or the phone locks, like the real exam.</li>
          <li>Write every answer on paper. Nothing is typed here. Number each answer exactly as in the paper.</li>
          <li>When time is up, hand your answer sheet to your teacher. Model answers unlock after that.</li>
        </ul>
      </div>
      <div class="list__header"><span>The paper</span><span class="count">${countOf(paper)} questions</span></div>
      <div class="list">${raw(secRows)}</div>
      <p class="t-footnote t-3 mt-2">Leave about 15 minutes at the end to check your answers.</p>
      <p class="t-footnote t-3 mt-2" data-notes></p>
      <button class="btn btn--block ex-start mt-6" type="button" data-start>${raw(icon('play'))} ${sat ? 'Sit it again' : 'Start'} · ${reading} min reading first</button>
      ${running ? raw(`<p class="t-footnote t-2 mt-2 center">Starting ends the running ${esc(running.subjectName)} ${esc(running.paper)}.</p>`) : ''}
      ${isTeacher() ? raw(`<div class="card mt-8"><div class="t-headline">For teachers · marking with Claude</div><p class="t-footnote t-2 mt-2">Copy the marking kit (questions, model answers, step marks and instructions), paste it into a Claude chat with photos of the student’s answer sheet. Claude sends back marks and a marks link; send the link to the student on WhatsApp. Tapping it saves the marks in their papers list.</p><button class="btn btn--secondary btn--block mt-4" type="button" data-kit>${icon('copy')} Copy marking kit<span data-code></span></button></div>`) : ''}`,
    mount(el) {
      ready.then((real) => {
        if (!real) return;
        const notes = el.querySelector('[data-notes]'); if (notes) notes.textContent = real.notes.join(' · ');
        const code = el.querySelector('[data-code]'); if (code) code.textContent = ` · code ${paperCode(real)}`;
      }).catch(() => {});
      el.querySelector('[data-kit]')?.addEventListener('click', async () => {
        const text = await markingKit({ sub, paper: await ready, base });
        let copied = false;
        try { await navigator.clipboard.writeText(text); copied = true; } catch { /* show it instead */ }
        if (copied) { toast('Marking kit copied · paste it into a Claude chat with the answer-sheet photos'); haptic('success'); return; }
        const sh = openSheet({ title: 'Marking kit', content: `<p class="t-footnote t-2">Select all and copy.</p><textarea class="mt-2" rows="12" style="width:100%;font-size:13px" readonly></textarea>` });
        const ta = sh.body.querySelector('textarea'); ta.value = text; ta.focus(); ta.select();
      });
      el.querySelector('[data-start]').addEventListener('click', async () => {
        const btn = el.querySelector('[data-start]'); btn.disabled = true;
        const paper = await ready.finally(() => { btn.disabled = false; });
        if (!paper) { toast('This paper could not be built. Check your connection.'); return; }
        const go = () => {
          const now = Date.now();
          const writingAt = now + reading * MIN;
          store.setExamSession({
            v: 1, subject: sub.id, subjectName: sub.name, paper: paper.id, code: paperCode(paper), route: base,
            sections: paper.sections.map((s) => ({ id: s.id, name: s.name, items: s.items.map((i) => ({ n: i.n, ref: i.ref, marks: i.marks, type: i.type, ...(i.or ? { or: i.or } : {}) })) })),
            total: paper.total, startedAt: now, writingAt, endsAt: writingAt + (pattern?.duration_minutes || 180) * MIN,
            flags: [], pos: 0, hideClock: false, alerts: [],
          });
          haptic('success');
          if (location.hash === base) window.dispatchEvent(new HashChangeEvent('hashchange')); // same hash: re-render as the running paper
          else location.hash = base;
        };
        if (!running) return go();
        const sh = openSheet({ title: 'Start a new paper?', content: `<p class="t-subhead">${esc(running.subjectName)} ${esc(running.paper)} is still running. Starting this one ends it.</p><div class="row mt-4" style="gap:var(--s-3)"><button class="btn btn--secondary grow" data-close>Keep it</button><button class="btn grow" data-go>End it and start</button></div>` });
        sh.body.querySelector('[data-go]').addEventListener('click', () => { const s = store.examSession(); if (s) { store.setExamSession({ ...s, endedAt: Date.now(), early: true }); settle(); } sh.close(); go(); });
      });
    },
  };
}

/* ---------- one question (shared by the running paper and the answers) ---------- */
async function renderQuestion(host, item, entry, { answers, colour, alt }) {
  const { renderMarkdown } = await import('../markdown.js');
  const md = async (s, h) => { const n = await renderMarkdown(String(s || ''), { unitColour: colour, eager: true }); n.classList.add('rc__md'); h.appendChild(n); return n; };
  const q = entry?.q;
  const wrap = document.createElement('div'); wrap.className = alt ? 'ex__q ex__q--or' : 'ex__q';
  host.appendChild(wrap);
  if (!q) { wrap.innerHTML = '<p class="t-2">This question was taken out of the bank after the paper was made. Skip it.</p>'; return; }
  if (answers) wrap.insertAdjacentHTML('beforeend', `<div class="ex__ans-meta"><span class="chip chip--unit">${esc(entry.ch?.title || '')}</span><span class="t-footnote t-3"><span class="stars">${'★'.repeat(q.stars || 1)}</span> · ${esc(q.label)}</span></div>`);
  const stem = document.createElement('div'); stem.className = 'pq__stem'; wrap.appendChild(stem);
  await md(q.stem, stem);
  if (q.options?.length) {
    const ol = document.createElement('div'); ol.className = 'ex__opts'; wrap.appendChild(ol);
    for (const [k, o] of q.options.entries()) {
      const row = document.createElement('div'); row.className = 'ex__opt' + (answers && (q.answer || '').trim().toUpperCase().startsWith(KEYS[k]) ? ' is-right' : '');
      row.innerHTML = `<span class="pq__key">${KEYS[k]}</span><div class="pq__opt-body"></div>`;
      ol.appendChild(row); await md(o, row.querySelector('.pq__opt-body'));
    }
  }
  for (const [k, p] of (q.parts || []).entries()) {
    const row = document.createElement('div'); row.className = 'pq__part';
    row.innerHTML = `<span class="pq__part-key">(${esc(p.id || String.fromCharCode(105 + k))})</span><div class="grow"></div><span class="marks-tag">${p.marks}</span>`;
    wrap.appendChild(row);
    await md(p.stem + (p.options?.length ? '\n\n' + p.options.map((o, j) => `(${KEYS[j]}) ${o}`).join('  \n') : ''), row.querySelector('.grow'));
  }
  if (!answers) return;
  const scheme = q.scheme?.length ? q.scheme : (q.parts || []).flatMap((p, k) => (p.scheme?.length ? p.scheme.map((s) => ({ ...s, step: `(${p.id || k + 1}) ${s.step}` })) : [{ step: `(${p.id || k + 1}) ${p.answer ? `Answer: ${p.answer}` : p.model_answer || ''}`, marks: p.marks }]));
  const box = document.createElement('div'); box.className = 'box box--skeleton ex__model';
  box.innerHTML = `<div class="box__label">${q.options?.length ? `Answer: ${esc((q.answer || '').trim().slice(0, 1))}` : 'Model answer'}</div><div></div>`;
  wrap.appendChild(box);
  await md(q.model_answer || (q.parts || []).map((p, k) => `**(${p.id || k + 1})** ${p.answer ? `(${p.answer}) ` : ''}${p.model_answer || ''}`).join('<br>'), box.lastElementChild);
  if (scheme.length && !q.options?.length) {
    const sc = document.createElement('div'); sc.className = 'pq__scheme';
    sc.innerHTML = `<div class="list__header" style="padding-left:0">Step marks <span class="count tnum">${q.marks}</span></div>` + scheme.map(() => '<div class="pq__step"><span class="pq__step-text"></span><span class="marks-tag"></span></div>').join('');
    wrap.appendChild(sc);
    for (const [k, s] of scheme.entries()) { const r = sc.querySelectorAll('.pq__step')[k]; r.querySelector('.marks-tag').textContent = s.marks; await md(s.step, r.querySelector('.pq__step-text')); }
  }
}

/* ---------- shared frame: one question per screen, Previous / Next, swipe, question grid ---------- */
function frame({ colour, close, closeLabel, centre, right }) {
  return html`<div class="rc ex" id="ex" style="--unit:#${colour}">
    <header class="rc__top">
      ${raw(close)}
      <div class="rc__title ex__centre">${raw(centre)}</div>
      ${raw(right)}
    </header>
    <div class="rc__track"><span id="ex-bar"></span></div>
    <main class="rc__stage" id="ex-stage" aria-live="polite"></main>
    <footer class="rc__foot" id="ex-foot"></footer>
  </div>`;
}
const flat = (sections) => sections.flatMap((s) => s.items.map((it) => ({ ...it, section: s })));

function gridSheet({ items, pos, flags, title, onPick, extra, legend }) {
  const bySec = [];
  for (const [k, it] of items.entries()) { let g = bySec.find((x) => x.s === it.section); if (!g) bySec.push(g = { s: it.section, list: [] }); g.list.push({ it, k }); }
  const sh = openSheet({ title, content: `<div class="ex-grid">${bySec.map((g) => `<div class="list__header" style="padding-left:0">${esc(g.s.name)}</div><div class="ex-grid__row">${g.list.map(({ it, k }) => `<button type="button" class="ex-grid__n tnum${k === pos ? ' is-here' : ''}${flags.includes(it.n) ? ' is-flag' : ''}" data-k="${k}" aria-label="Question ${it.n}${flags.includes(it.n) ? ', flagged' : ''}">${it.n}</button>`).join('')}</div>`).join('')}${legend ? '<p class="t-footnote t-3 mt-4"><span class="ex-grid__dot"></span> flagged to come back to</p>' : ''}${extra || ''}</div>` });
  sh.body.addEventListener('click', (e) => { const b = e.target.closest('[data-k]'); if (b) { sh.close(); onPick(Number(b.dataset.k)); } });
  return sh;
}

function pager({ el, items, startAt, show, onMove }) {
  let pos = Math.min(Math.max(0, startAt || 0), items.length - 1);
  const go = (k) => { if (k < 0 || k >= items.length || k === pos) return; pos = k; haptic(); onMove?.(pos); show(pos); };
  const stage = el.querySelector('#ex-stage');
  let t0 = null;
  stage.addEventListener('touchstart', (e) => { if (e.touches.length !== 1 || e.target.closest('.katex-display, pre, table, .fig, .prose-scroll')) { t0 = null; return; } t0 = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() }; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (!t0) return; const dx = e.changedTouches[0].clientX - t0.x, dy = e.changedTouches[0].clientY - t0.y;
    if (Math.abs(dx) > 70 && Math.abs(dx) > 2 * Math.abs(dy) && Date.now() - t0.t < 700) go(pos + (dx < 0 ? 1 : -1));
    t0 = null;
  }, { passive: true });
  return { go, get pos() { return pos; } };
}

/* ---------- the running paper ---------- */
function running({ sub, home, base }, s0) {
  const items = flat(s0.sections);
  return {
    title: `${sub.name} ${s0.paper}`, tab: 'subjects', fullscreen: true, unitColour: sub.colour,
    html: frame({ colour: sub.colour,
      close: `<button class="icon-btn" type="button" data-leave aria-label="Leave the paper">${icon('x')}</button>`,
      centre: `<button class="ex__clock" type="button" data-clock aria-label="Time left. Tap to hide or show"><span class="ex__clock-label" id="ex-phase"></span><span class="ex__time tnum" id="ex-time"></span></button>`,
      right: `<button class="icon-btn" type="button" data-grid aria-label="All questions">${icon('menu')}</button>` }),
    async mount(el) {
      const { byRef } = await loadBank(sub);
      const stage = el.querySelector('#ex-stage'), foot = el.querySelector('#ex-foot'), bar = el.querySelector('#ex-bar');
      const timeEl = el.querySelector('#ex-time'), phaseEl = el.querySelector('#ex-phase'), clockBtn = el.querySelector('[data-clock]');
      let s = store.examSession();
      const save = (patch) => { s = { ...store.examSession(), ...patch }; store.setExamSession(s); };
      let lastPhase = phaseOf(s);
      let finished = false;

      // screen stays awake while the paper runs
      let wake = null;
      const keepAwake = async () => { try { if ('wakeLock' in navigator && document.visibilityState === 'visible') wake = await navigator.wakeLock.request('screen'); } catch { wake = null; } };
      const onVis = () => { if (document.visibilityState === 'visible') { keepAwake(); tick(); } };
      keepAwake(); document.addEventListener('visibilitychange', onVis);

      const show = async (k) => {
        const it = items[k];
        stage.innerHTML = '';
        if (phaseOf(s) === 'reading') stage.insertAdjacentHTML('beforeend', `<div class="ex__reading">${icon('eye')}<span class="grow"><strong>Reading time.</strong> Read the paper, don’t write yet.</span><button class="btn btn--sm btn--plain" type="button" data-write>Start writing</button></div>`);
        const card = document.createElement('div'); card.className = 'rc__card ex__card';
        const prevSec = items[k - 1]?.section;
        card.innerHTML = `<div class="ex__meta"><span class="ex__sec">${esc(it.section.name)}</span><span class="ex__qno tnum">Q ${it.n} <span class="t-3">of ${items.length}</span></span><span class="marks-tag ex__marks">${it.marks} mark${it.marks === 1 ? '' : 's'}</span></div>${prevSec !== it.section ? `<p class="ex__secnote">${esc(sectionNote(it.section))}</p>` : ''}`;
        stage.appendChild(card);
        await renderQuestion(card, it, byRef.get(it.ref), { colour: sub.colour });
        if (it.or) { card.insertAdjacentHTML('beforeend', '<div class="ex__or"><span>OR</span></div>'); await renderQuestion(card, it, byRef.get(it.or), { colour: sub.colour, alt: true }); }
        stage.scrollTop = 0;
        footer();
      };
      const sectionNote = (sec) => {
        const n = sec.items.length, ors = sec.items.filter((i) => i.or).length;
        const marks = [...new Set(sec.items.map((i) => i.marks))];
        return `${n} question${n === 1 ? '' : 's'}${marks.length === 1 ? ` of ${marks[0]} mark${marks[0] === 1 ? '' : 's'} each` : ''}.${ors ? ` ${ors} ${ors === 1 ? 'has' : 'have'} an internal choice: answer one of the two.` : ''}`;
      };
      const footer = () => {
        const k = nav.pos, flagged = s.flags.includes(items[k].n);
        foot.innerHTML = `<div class="ex__nav">
          <button class="btn btn--plain" type="button" data-prev ${k === 0 ? 'disabled' : ''}>${icon('chevronLeft')} Previous</button>
          <button class="icon-btn ex__flag${flagged ? ' is-on' : ''}" type="button" data-flag aria-pressed="${flagged}" aria-label="${flagged ? 'Remove flag' : 'Flag to come back to'}">${icon('flag')}</button>
          ${k < items.length - 1 ? `<button class="btn" type="button" data-next>Next ${icon('chevronRight')}</button>` : `<button class="btn" type="button" data-grid>All questions</button>`}
        </div>`;
      };
      const nav = pager({ el, items, startAt: s.pos, show, onMove: (pos) => save({ pos }) });

      const startWriting = () => { save({ writingAt: Date.now(), endsAt: Date.now() + (s.endsAt - s.writingAt) }); tick(); show(nav.pos); };
      const handIn = (early) => { if (early) save({ endedAt: Date.now(), early: true }); tick(); };

      const tick = () => {
        if (finished) return;
        s = store.examSession() || s;
        const now = Date.now(), ph = phaseOf(s, now);
        if (ph === 'over') return pensDown();
        if (ph !== lastPhase) { lastPhase = ph; if (ph === 'writing') { toast('Writing time starts now · 3 hours'); haptic('success'); show(nav.pos); } }
        const left = ph === 'reading' ? s.writingAt - now : s.endsAt - now;
        phaseEl.textContent = ph === 'reading' ? 'Reading time' : s.hideClock ? '' : 'Time left';
        timeEl.textContent = s.hideClock && ph === 'writing' ? 'Show time' : clockText(left);
        clockBtn.classList.toggle('is-hidden', !!s.hideClock && ph === 'writing');
        clockBtn.classList.toggle('is-low', ph === 'writing' && left <= 10 * MIN);
        bar.style.width = `${Math.min(100, ((now - s.startedAt) / (s.endsAt - s.startedAt)) * 100).toFixed(2)}%`;
        if (ph === 'writing') {
          const fired = new Set(s.alerts || []); let changed = false;
          for (const [m, msg] of ALERTS) if (!fired.has(m) && left <= m * MIN) { fired.add(m); changed = true; if (left > (m - 1) * MIN) { toast(msg, { duration: 6000 }); haptic('medium'); } }
          if (changed) save({ alerts: [...fired] });
        }
      };
      const pensDown = () => {
        finished = true;
        const ended = settle() || { ...s, endedAt: s.endedAt || s.endsAt };
        const mins = Math.max(0, Math.round((ended.endedAt - ended.writingAt) / MIN));
        haptic('success');
        clockBtn.classList.remove('is-hidden', 'is-low'); phaseEl.textContent = ended.early ? 'Handed in' : 'Time’s up'; timeEl.textContent = '0:00'; bar.style.width = '100%';
        el.querySelector('[data-grid]')?.remove();
        stage.innerHTML = `<div class="rc__card ex__done">
            <div class="ex__done-title">Pens down.</div>
            <p class="t-subhead t-2 mt-2">${ended.early ? `Handed in after ${hm(mins)}.` : 'Three hours are up.'} ${esc(sub.name)} ${esc(ended.paper)} · ${ended.total} marks.</p>
            <ol class="ex__steps">
              <li>Check every answer is numbered as in the paper.</li>
              <li>Write your nickname and “${esc(sub.name)} ${esc(ended.paper)} · code ${esc(ended.code || '')}” on the first page.</li>
              <li>Hand in your answer sheet to your teacher, the way they asked (on paper or as photos).</li>
            </ol>
          </div>`;
        foot.innerHTML = `<div class="rc__btns"><a class="btn btn--plain" href="${base}/review">Check answers</a><a class="btn" href="${home}">Done</a></div>`;
      };

      el.addEventListener('click', (e) => {
        if (finished) return;
        if (e.target.closest('[data-prev]')) nav.go(nav.pos - 1);
        else if (e.target.closest('[data-next]')) nav.go(nav.pos + 1);
        else if (e.target.closest('[data-write]')) startWriting();
        else if (e.target.closest('[data-flag]')) { const n = items[nav.pos].n; save({ flags: s.flags.includes(n) ? s.flags.filter((x) => x !== n) : [...s.flags, n] }); haptic(); footer(); }
        else if (e.target.closest('[data-clock]')) { if (phaseOf(s) === 'writing') { save({ hideClock: !s.hideClock }); tick(); } }
        else if (e.target.closest('[data-grid]')) {
          const sh = gridSheet({ items, pos: nav.pos, flags: s.flags, title: 'All questions', legend: true, onPick: (k) => nav.go(k),
            extra: `<div class="row mt-6" style="gap:var(--s-3)">${phaseOf(s) === 'reading' ? '<button class="btn btn--secondary grow" type="button" data-sh-write>Start writing now</button>' : ''}<button class="btn btn--secondary grow" type="button" data-sh-hand>Hand in early</button></div>` });
          sh.body.querySelector('[data-sh-write]')?.addEventListener('click', () => { sh.close(); startWriting(); });
          sh.body.querySelector('[data-sh-hand]').addEventListener('click', () => { sh.close(); confirmHandIn(); });
        } else if (e.target.closest('[data-leave]')) {
          const sh = openSheet({ title: 'Leave the paper?', content: `<p class="t-subhead">The clock keeps running, like the real exam. Come back any time from ${esc(sub.name)} → Exam mode.</p><div class="stack mt-4" style="display:grid;gap:var(--s-3)"><button class="btn" data-close>Keep writing</button><a class="btn btn--secondary" href="${home}">Leave · clock keeps running</a><button class="btn btn--plain" data-hand>Hand in now</button></div>` });
          sh.body.querySelector('[data-hand]').addEventListener('click', () => { sh.close(); confirmHandIn(); });
        }
      });
      const confirmHandIn = () => {
        const left = Math.max(0, Math.round((s.endsAt - Date.now()) / MIN));
        const sh = openSheet({ title: 'Hand in early?', content: `<p class="t-subhead">${left ? `${hm(left)} still on the clock. In the real exam, spare minutes go on checking.` : 'Hand in now?'}</p><div class="row mt-4" style="gap:var(--s-3)"><button class="btn btn--secondary grow" data-close>Keep going</button><button class="btn grow" data-yes>Hand in</button></div>` });
        sh.body.querySelector('[data-yes]').addEventListener('click', () => { sh.close(); handIn(true); });
      };
      const onKey = (e) => {
        if (finished || /^(input|textarea|select)$/i.test(e.target.tagName) || document.querySelector('dialog[open]')) return;
        if (e.key === 'ArrowRight') nav.go(nav.pos + 1);
        else if (e.key === 'ArrowLeft') nav.go(nav.pos - 1);
        else if (e.key === 'f') el.querySelector('[data-flag]')?.click();
        else if (e.key === 'g') el.querySelector('[data-grid]')?.click();
      };
      document.addEventListener('keydown', onKey);

      tick();
      if (!finished) await show(nav.pos);
      const timer = setInterval(tick, 1000);
      return () => { clearInterval(timer); document.removeEventListener('keydown', onKey); document.removeEventListener('visibilitychange', onVis); wake?.release?.(); };
    },
  };
}

/* ---------- answers after the paper ---------- */
function review({ sub, home, paper: built, base }) {
  const sitting = store.lastSitting(sub.id, built.id);
  const paper = asSat(built, sitting);
  const items = flat(paper.sections);
  const mine = sitting?.marks?.length === items.length ? sitting.marks : null;
  return {
    title: `Answers · ${paper.id}`, tab: 'subjects', fullscreen: true, unitColour: sub.colour,
    html: frame({ colour: sub.colour,
      close: `<a class="icon-btn" href="${home}" aria-label="Close">${icon('x')}</a>`,
      centre: `<span>Answers · ${esc(paper.id)}</span>`,
      right: `<button class="icon-btn" type="button" data-grid aria-label="All questions">${icon('menu')}</button>` }),
    async mount(el) {
      const { byRef } = await loadBank(sub);
      const stage = el.querySelector('#ex-stage'), foot = el.querySelector('#ex-foot'), bar = el.querySelector('#ex-bar');
      const show = async (k) => {
        const it = items[k];
        bar.style.width = `${(((k + 1) / items.length) * 100).toFixed(1)}%`;
        stage.innerHTML = '';
        const card = document.createElement('div'); card.className = 'rc__card ex__card';
        card.innerHTML = `<div class="ex__meta"><span class="ex__sec">${esc(it.section.name)}</span><span class="ex__qno tnum">Q ${it.n} <span class="t-3">of ${items.length}</span></span><span class="marks-tag ex__marks">${it.marks} mark${it.marks === 1 ? '' : 's'}</span></div>${mine ? `<div class="ex__mine${mine[k] < it.marks ? ' is-lost' : ''}">Your mark <strong class="tnum">${mine[k]} / ${it.marks}</strong></div>` : ''}`;
        stage.appendChild(card);
        await renderQuestion(card, it, byRef.get(it.ref), { colour: sub.colour, answers: true });
        if (it.or) { card.insertAdjacentHTML('beforeend', '<div class="ex__or"><span>OR</span></div>'); await renderQuestion(card, it, byRef.get(it.or), { colour: sub.colour, answers: true, alt: true }); }
        stage.scrollTop = 0;
        foot.innerHTML = `<div class="ex__nav"><button class="btn btn--plain" type="button" data-prev ${k === 0 ? 'disabled' : ''}>${icon('chevronLeft')} Previous</button><span></span>${k < items.length - 1 ? `<button class="btn" type="button" data-next>Next ${icon('chevronRight')}</button>` : `<a class="btn" href="${home}">Done</a>`}</div>`;
      };
      const nav = pager({ el, items, startAt: 0, show });
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-prev]')) nav.go(nav.pos - 1);
        else if (e.target.closest('[data-next]')) nav.go(nav.pos + 1);
        else if (e.target.closest('[data-grid]')) gridSheet({ items, pos: nav.pos, flags: [], title: 'Jump to', onPick: (k) => nav.go(k) });
      });
      const onKey = (e) => { if (document.querySelector('dialog[open]')) return; if (e.key === 'ArrowRight') nav.go(nav.pos + 1); else if (e.key === 'ArrowLeft') nav.go(nav.pos - 1); };
      document.addEventListener('keydown', onKey);
      await show(0);
      return () => document.removeEventListener('keydown', onKey);
    },
  };
}

/* ---------- marking with Claude: the kit (teachers) and the marks link (students) ---------- */
const plain = (t) => String(t || '').replace(/<br\s*\/?>/g, '\n').replace(/<figure[\s\S]*?<\/figure>/g, '[diagram]').replace(/<[^>]+>/g, '').trim();
async function markingKit({ sub, paper, base }) {
  const { byRef } = await loadBank(sub);
  const code = paperCode(paper), n = countOf(paper);
  const link = `${location.origin}${location.pathname}${base}/marks=${code}:`;
  const L = [];
  L.push(`# Marking kit: ${sub.name} ${paper.id} (code ${code}) · ${paper.total} marks · CBSE Class 12, 2026–27 pattern`, '');
  L.push('## Instructions for the marker', '');
  L.push('Attached are photos of one student’s handwritten answer sheet for this paper (answers numbered as in the paper). Mark it the way a CBSE board examiner would:');
  L.push('1. Mark question by question against the model answer and step-mark scheme below. Give step marks for correct working even when the final answer is wrong. Half marks (0.5) only where the scheme splits a step.');
  L.push('2. MCQ and Assertion–Reason: full mark for the correct option only, no part marks.');
  L.push('3. Internal choice (OR): mark the alternative the student attempted. If both are attempted, keep the one with more marks.');
  L.push('4. Accept a correct answer in other words or by another valid method. Deduct for a missing unit or a missing labelled diagram only where the scheme has a step for it.');
  L.push('5. Not attempted, or unreadable: 0. List any unreadable answers so the teacher can check them.');
  L.push('6. Never give more than a question’s maximum. If the sheet names a different paper or code, say so before marking.', '');
  L.push('## What to send back', '');
  L.push('1. A table: Q | marks awarded | out of | one line on where marks were lost.');
  L.push(`2. Section totals and the total out of ${paper.total}.`);
  L.push('3. The three things this student should fix first before the board exam.');
  L.push(`4. On its own line, the marks link with exactly ${n} numbers, one per question in order Q1 to Q${n} (0 when not attempted), separated by commas, no spaces:`);
  L.push(`MARKS LINK: ${link}<Q1>,<Q2>,…,<Q${n}>`, '');
  L.push('## The paper, with model answers and step marks', '');
  const KEY = 'ABCDEF';
  const qText = (q, tag) => {
    const out = [`**${tag}**`, plain(q.stem)];
    if (q.options?.length) out.push(q.options.map((o, j) => `(${KEY[j]}) ${plain(o)}`).join('  '));
    for (const [k, p] of (q.parts || []).entries()) {
      out.push(`(${p.id || String.fromCharCode(105 + k)}) [${p.marks}] ${plain(p.stem)}${p.options?.length ? '  ' + p.options.map((o, j) => `(${KEY[j]}) ${plain(o)}`).join('  ') : ''}`);
      if (p.answer) out.push(`   Answer: ${p.answer}`);
      if (p.model_answer) out.push(`   Model answer: ${plain(p.model_answer)}`);
      for (const st of p.scheme || []) out.push(`   - [${st.marks}] ${plain(st.step)}`);
    }
    if (q.answer) out.push(`Answer: ${q.answer.trim().slice(0, 1)}`);
    if (q.model_answer) out.push(`Model answer: ${plain(q.model_answer)}`);
    if (q.scheme?.length) { out.push('Step marks:'); for (const st of q.scheme) out.push(`- [${st.marks}] ${plain(st.step)}`); }
    return out.join('\n');
  };
  for (const sec of paper.sections) {
    L.push(`### ${sec.name}`, '');
    for (const it of sec.items) {
      const q = byRef.get(it.ref)?.q;
      L.push(q ? qText(q, `Q${it.n} · ${it.marks} mark${it.marks === 1 ? '' : 's'}${it.type ? ' · ' + (TYPE_NAME[it.type] || it.type) : ''}`) : `**Q${it.n}** (question no longer in the bank)`, '');
      if (it.or) { const alt = byRef.get(it.or)?.q; if (alt) L.push('OR', '', qText(alt, `Q${it.n} (OR)`), ''); }
    }
  }
  return L.join('\n');
}

function marksPage({ sub, home, paper: built, base }, given) {
  const m = /^([0-9A-Z]{4}):([0-9.,]+)$/i.exec(given.trim());
  const sitting = store.lastSitting(sub.id, built.id);
  const paper = asSat(built, sitting);
  const items = flat(paper.sections);
  const marks = m ? m[2].split(',').filter((x) => x !== '').map(Number) : [];
  const bad = !m || marks.length !== items.length || marks.some((x, k) => !Number.isFinite(x) || x < 0 || x > items[k].marks || Math.round(x * 2) !== x * 2);
  if (bad) return { title: 'Marks', tab: 'subjects', back: home, html: emptyState({ icon: 'alert', title: 'This marks link is incomplete', text: `It needs ${items.length} marks, one per question. Ask your teacher to send it again.`, action: `<a class="btn btn--secondary" href="${home}">Exam mode</a>` }) };
  const code = m[1].toUpperCase();
  const score = Math.round(marks.reduce((a, b) => a + b, 0) * 2) / 2;
  const sitCode = sitting?.code || paperCode(paper);
  const secRows = paper.sections.map((sec) => { const got = sec.items.reduce((a, it) => a + marks[it.n - 1], 0); const max = sec.items.reduce((a, it) => a + it.marks, 0); return `<div class="list__item has-leading"><span class="list__leading" style="--unit:#${sub.colour}">${esc(sec.id)}</span><span class="list__body"><span class="list__title">${esc(sec.name)}</span></span><span class="list__trailing tnum"><strong>${got}</strong>&nbsp;/ ${max}</span></div>`; }).join('');
  return {
    title: `Marks · ${paper.id}`, tab: 'subjects', back: home, backLabel: 'Papers', unitColour: sub.colour,
    html: html`${largeTitle(`Paper ${paper.id}`, { eyebrow: `${sub.name} · marked by your teacher` })}
      <div class="mb-4" style="--unit:#${sub.colour};display:flex;justify-content:center">${ring((score / paper.total) * 100, `${score}`, `of ${paper.total}`, '9rem')}</div>
      ${code !== sitCode ? raw(`<div class="notice notice--warn mb-4">${icon('alert')}<div>These marks are for code ${esc(code)}, but your ${esc(paper.id)} was code ${esc(sitCode)}. The questions may not line up; check with your teacher.</div></div>`) : ''}
      <div class="list">${raw(secRows)}</div>
      <button class="btn btn--block ex-start mt-6" type="button" data-save>${raw(icon('check'))} Save to my papers</button>
      <a class="btn btn--plain btn--block mt-2" href="${base}/review">See answers</a>`,
    mount(el) {
      el.querySelector('[data-save]').addEventListener('click', () => {
        store.saveMarks({ subject: sub.id, id: paper.id, code, marks, total: paper.total });
        haptic('success'); toast(`Saved · ${score} / ${paper.total}`);
        location.hash = home;
      });
    },
  };
}

/** For the subject page / Practice tab: the running paper, if any. */
export function runningPaper() { settle(); return store.examSession(); }
export { resumeCard, paperId };
