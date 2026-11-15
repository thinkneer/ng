#!/usr/bin/env node
/**
 * build-index.mjs
 * Scans /content and /data, validates every JSON file against /schemas,
 * checks cross-references (chapter ids, unit ids, step marks, pattern totals)
 * and writes /data/index.json for the app.
 *
 * Usage:  node scripts/build-index.mjs            (writes index, exits 1 on any error)
 *         node scripts/build-index.mjs --check    (validate only, don't write)
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv from 'ajv';
import { refId, resolveRef, svgProblems, extractBlocks, validate as validateBlock } from '../app/blocks/parse.js';
import addFormats from 'ajv-formats';

// hoisted: used during the top-level scan below
const MUSTKNOW_HEADINGS = [
  'Most-repeated board questions',
  'Must-know lines and definitions',
  'Key formulas',
  'Answer skeletons',
  'Quick 1-mark facts (MCQ, A–R)',
  'Mark-losing traps',
];

// Cards: a chapter with notes but no cards.json is a warning until this date, then an error.
const CARDS_REQUIRED_FROM = '2026-12-01';
const TODAY = process.env.NG_TODAY || new Date().toISOString().slice(0, 10);
const missingCards = {}; // subject path → [chapter ids]
const cardMnemonics = [];
const memory = {}; // "<subject>/<chapter>" → memory tricks (ng-mnemonic blocks + mnemonic cards) → data/memory.json

/** Prose only: interactive blocks and inline SVG drawings don't count towards length or reading time. */
function proseOf(text) { return text.replace(/^```ng-[a-z]+[\s\S]*?^```\s*$/gm, ' ').replace(/<svg[\s\S]*?<\/svg>/g, ' '); }

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');
const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${rel(file)}: ${msg}`);
const warn = (file, msg) => warnings.push(`${rel(file)}: ${msg}`);
const rel = (p) => relative(ROOT, p).replace(/\\/g, '/');

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const schemas = {};
for (const f of readdirSync(join(ROOT, 'schemas'))) {
  if (!f.endsWith('.schema.json')) continue;
  const name = f.replace('.schema.json', '');
  schemas[name] = ajv.compile(readJSON(join(ROOT, 'schemas', f)));
}

function readJSON(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    err(path, `invalid JSON: ${e.message}`);
    return null;
  }
}

function validate(schemaName, path, data) {
  if (data == null) return false;
  const ok = schemas[schemaName](data);
  if (!ok) {
    for (const e of schemas[schemaName].errors) {
      err(path, `${e.instancePath || '/'} ${e.message}${e.params?.allowedValues ? ' (' + e.params.allowedValues.join(', ') + ')' : ''}`);
    }
  }
  return ok;
}

// ---------- data/classes.json ----------
const classesPath = join(ROOT, 'data', 'classes.json');
const classes = readJSON(classesPath);
validate('classes', classesPath, classes);

// ---------- data/exams, plans, patterns, users ----------
const exams = {};
for (const f of listJSON(join(ROOT, 'data', 'exams'))) {
  const d = readJSON(f);
  if (validate('exams', f, d)) exams[`${d.class}-${d.board_year}`] = { file: rel(f), ...d };
}
const plans = {};
for (const f of listJSON(join(ROOT, 'data', 'plans'))) {
  const d = readJSON(f);
  if (validate('plan', f, d)) {
    plans[`${d.class}-${d.board_year}`] = rel(f);
    if (!exams[`${d.class}-${d.board_year}`]) err(f, `no matching data/exams/class-${d.class}-${d.board_year}.json`);
  }
}
const patterns = {};
const patternsDir = join(ROOT, 'data', 'patterns');
if (existsSync(patternsDir)) {
  for (const cls of readdirSync(patternsDir)) {
    for (const f of listJSON(join(patternsDir, cls))) {
      const d = readJSON(f);
      if (validate('pattern', f, d)) {
        const total = d.sections.reduce((s, sec) => s + (sec.marks ?? sec.count * sec.marks_each), 0);
        if (Math.abs(total - d.total_marks) > 0.001) err(f, `sections add up to ${total}, total_marks is ${d.total_marks}`);
        patterns[`${d.class}/${d.subject}`] = rel(f);
      }
    }
  }
}
const usersPath = join(ROOT, 'data', 'users.json');
if (existsSync(usersPath)) {
  const u = readJSON(usersPath);
  if (validate('users', usersPath, u)) {
    const seen = new Set();
    for (const x of u.users) {
      const k = x.nickname.toLowerCase();
      if (seen.has(k)) err(usersPath, `duplicate nickname ${x.nickname}`);
      seen.add(k);
    }
  }
}
for (const f of listJSON(join(ROOT, 'data', 'progress'))) {
  validate('progress', f, readJSON(f));
}

// ---------- content ----------
const index = {
  generated: new Date().toISOString().slice(0, 10),
  classes: [],
  exams: Object.fromEntries(Object.entries(exams).map(([k, v]) => [k, v.file])),
  plans,
  patterns,
};

if (classes) {
  for (const cls of classes.classes) {
    const classDirName = `class-${cls.id}`;
    const outClass = { id: cls.id, name: cls.name, board_year: cls.board_year, status: cls.status, streams: [] };
    for (const stream of cls.streams) {
      const outStream = { id: stream.id, name: stream.name, status: stream.status, subjects: [] };
      for (const subj of stream.subjects) {
        const dir = join(ROOT, 'content', classDirName, stream.id, subj.id);
        const outSubj = { id: subj.id, name: subj.name, short: subj.short, code: subj.code, status: subj.status, path: null, units: [] };
        const subjectJson = join(dir, 'subject.json');
        if (subj.status === 'live' && !existsSync(subjectJson)) {
          err(classesPath, `subject ${cls.id}/${stream.id}/${subj.id} is "live" but ${rel(subjectJson)} does not exist`);
        }
        if (existsSync(subjectJson)) {
          const s = readJSON(subjectJson);
          if (validate('subject', subjectJson, s)) {
            if (s.id !== subj.id) err(subjectJson, `id "${s.id}" does not match folder/classes.json id "${subj.id}"`);
            if (s.class !== cls.id) err(subjectJson, `class "${s.class}" does not match folder class-${cls.id}`);
            if (s.stream !== stream.id) err(subjectJson, `stream "${s.stream}" does not match folder ${stream.id}`);
            outSubj.path = rel(dir);
            outSubj.colour = s.colour;
            outSubj.theory_marks = s.theory_marks;
            outSubj.internal_marks = s.internal_marks;
            outSubj.exam_date = s.exam_date ?? null;
            outSubj.syllabus_year = s.syllabus_year;
            outSubj.not_in_syllabus = s.not_in_syllabus ?? [];
            outSubj.links = s.links ?? {};
            const chapterIds = new Set();
            const qByRef = new Map(); // "<chapter>/<question id>" → question, for fixed papers
            let counts = { notes: 0, mustknow: 0, formulas: 0, questions: 0, chapters: 0 };
            // Subjects with named chapter ids (English: flamingo-01, writing-notice) number chapters within each unit,
            // the way the books do (The Last Lesson = 1, My Mother at Sixty-six = 1), not across the whole subject.
            const perUnit = s.units.some((u) => u.chapters.some((c) => !/^ch-\d+$/.test(c.id)));
            for (const unit of s.units) {
              const outUnit = { id: unit.id, name: unit.name, colour: unit.colour, marks: unit.marks, marks_group: unit.marks_group ?? null, chapters: [] };
              for (const [chIdx, ch] of unit.chapters.entries()) {
                if (chapterIds.has(ch.id)) err(subjectJson, `duplicate chapter id ${ch.id}`);
                chapterIds.add(ch.id);
                counts.chapters++;
                const chDir = join(dir, ch.id);
                const outCh = { id: ch.id, number: perUnit ? chIdx + 1 : ch.number, title: ch.title, unit: unit.id, items: {}, marks_hint: null, summary: null, questions: 0, question_types: {} };
                if (existsSync(chDir) && statSync(chDir).isDirectory()) {
                  const chJsonPath = join(chDir, 'chapter.json');
                  if (existsSync(chJsonPath)) {
                    const c = readJSON(chJsonPath);
                    if (validate('chapter', chJsonPath, c)) {
                      if (c.id !== ch.id) err(chJsonPath, `id "${c.id}" does not match folder ${ch.id}`);
                      if (c.unit !== unit.id) err(chJsonPath, `unit "${c.unit}" but subject.json puts this chapter in unit "${unit.id}"`);
                      outCh.marks_hint = c.marks_hint ?? null;
                      outCh.summary = c.summary ?? null;
                      outCh.diagrams = c.diagrams ?? [];
                    }
                  } else {
                    warn(chDir, 'chapter folder without chapter.json');
                  }
                  const blockIds = new Map();
                  for (const item of ['notes', 'mustknow', 'formulas']) {
                    const p = join(chDir, `${item}.md`);
                    if (existsSync(p)) {
                      outCh.items[item] = true;
                      counts[item]++;
                      if (item === 'mustknow') checkMustknow(p);
                      if (item === 'notes') checkNotes(p);
                      const bl = checkBlocks(p, blockIds);
                      for (const b of bl) if (b.type === 'mnemonic' && b.spec.id && b.spec.trick && !b.errors.length) (memory[`${subj.id}/${ch.id}`] ||= []).push({ id: b.spec.id, title: b.spec.title, trick: b.spec.trick, meaning: [].concat(b.spec.meaning || []), ...(b.spec.prompt ? { prompt: b.spec.prompt } : {}) });
                      if (bl.length) outCh.blocks = { ...(outCh.blocks || {}), ...Object.fromEntries(Object.entries(bl.reduce((a, b) => { a[b.type] = (a[b.type] || 0) + 1; return a; }, {})).map(([k, v]) => [k, (outCh.blocks?.[k] || 0) + v])) };
                      const text = proseOf(readFileSync(p, 'utf8'));
                      outCh.words = (outCh.words || 0) + (text.match(/\S+/g) || []).length;
                      if (item === 'notes') outCh.read_minutes = Math.max(1, Math.round((text.match(/\S+/g) || []).length / 200));
                    }
                  }
                  const cPath = join(chDir, 'cards.json');
                  if (existsSync(cPath)) {
                    const cards = readJSON(cPath);
                    if (validate('cards', cPath, cards)) {
                      checkCards(cPath, cards, join(chDir, 'notes.md'), subj.id);
                      cardMnemonics.push({ key: `${subj.id}/${ch.id}`, cards: cards.filter((c) => c.kind === 'mnemonic') });
                      outCh.items.cards = true;
                      outCh.cards = cards.length;
                    }
                  } else if (outCh.items.notes) {
                    (missingCards[rel(dir)] ||= []).push(ch.id);
                  }
                  const qPath = join(chDir, 'questions.json');
                  if (existsSync(qPath)) {
                    const q = readJSON(qPath);
                    if (validate('questions', qPath, q)) {
                      checkQuestions(qPath, q, ch.id);
                      for (const x of q) qByRef.set(`${ch.id}/${x.id}`, x);
                      outCh.items.questions = true;
                      outCh.questions = q.length;
                      for (const x of q) outCh.question_types[x.type] = (outCh.question_types[x.type] ?? 0) + 1;
                      counts.questions++;
                    }
                  }
                }
                outUnit.chapters.push(outCh);
              }
              outSubj.units.push(outUnit);
            }
            // fixed papers
            const papersDir = join(dir, 'papers');
            outSubj.papers = [];
            if (existsSync(papersDir)) {
              for (const f of listJSON(papersDir)) {
                const p = readJSON(f);
                if (!validate('paper', f, p)) continue;
                if (p.id !== f.replace(/.*\//, '').replace('.json', '')) err(f, `id "${p.id}" does not match the file name`);
                if (/^p-\d+$/.test(p.id)) err(f, `id "${p.id}" clashes with the numbered built papers (P-01 …); pick another id`);
                let total = 0;
                const pat = patterns[`${cls.id}/${subj.id}`] ? readJSON(join(ROOT, patterns[`${cls.id}/${subj.id}`])) : null;
                for (const sec of p.sections) for (const x of sec.questions) {
                  const q = qByRef.get(x.ref);
                  if (!q) { err(f, `question ${x.ref} not found in this subject's questions.json files`); continue; }
                  total += q.marks;
                  if (x.or) {
                    const alt = qByRef.get(x.or);
                    if (!alt) err(f, `internal choice ${x.or} not found`);
                    else if (alt.marks !== q.marks) err(f, `internal choice ${x.or} (${alt.marks}) and ${x.ref} (${q.marks}) differ in marks`);
                  }
                }
                if (pat && Math.abs(total - pat.total_marks) > 0.001) err(f, `questions add up to ${total} marks; the paper pattern says ${pat.total_marks}`);
                outSubj.papers.push({ id: p.id, title: p.title, path: rel(f) });
              }
            }
            outSubj.counts = counts;
            // exam mode: numbered papers need a count × marks pattern and a question bank; fixed papers always work
            {
              const patRel = patterns[`${cls.id}/${subj.id}`];
              const pat = patRel ? readJSON(join(ROOT, patRel)) : null;
              const grid = !!pat?.sections?.every((x) => x.count && x.marks_each && x.types?.length);
              outSubj.exam_mode = (grid && counts.questions > 0) ? 'built' : outSubj.papers.length ? 'fixed' : null;
            }
            // orphan chapter folders
            for (const entry of readdirSync(dir)) {
              const p = join(dir, entry);
              if (statSync(p).isDirectory() && entry !== 'papers' && !chapterIds.has(entry)) {
                err(p, `chapter folder "${entry}" is not listed in subject.json`);
              }
            }
            if (s.exam_date && exams[`${cls.id}-${new Date(s.exam_date).getFullYear()}`]) {
              const ex = exams[`${cls.id}-${new Date(s.exam_date).getFullYear()}`];
              const paper = ex.papers.find((p) => p.subject === subj.id);
              if (paper && paper.date !== s.exam_date) err(subjectJson, `exam_date ${s.exam_date} differs from ${ex.file} (${paper.date})`);
            }
          }
        }
        outStream.subjects.push(outSubj);
      }
      outClass.streams.push(outStream);
    }
    index.classes.push(outClass);
  }
}

// ---------- helpers ----------
function listJSON(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => join(dir, f)).sort();
}

function checkDirectives(path, text) {
  const opens = (text.match(/^:::(tip|formula|skeleton)\b/gm) || []).length;
  const closes = (text.match(/^:::\s*$/gm) || []).length;
  if (opens !== closes) err(path, `unbalanced ::: directives (${opens} open, ${closes} close)`);
}
function checkMustknow(path) {
  const text = readFileSync(path, 'utf8');
  const found = [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  for (const h of MUSTKNOW_HEADINGS) if (!found.includes(h)) warn(path, `mustknow: missing heading "## ${h}"`);
  checkDirectives(path, text);
  const words = (text.match(/\S+/g) || []).length;
  if (words > 1400) warn(path, `mustknow is ${words} words; the cap is about one screen per heading (~1200 words)`);
}
function checkNotes(path) {
  const text = proseOf(readFileSync(path, 'utf8'));
  checkDirectives(path, text);
  const h2 = (text.match(/^## /gm) || []).length;
  if (h2 < 2) warn(path, 'notes (Read layer): fewer than 2 "## " sections');
  if (/^## (Most-repeated board questions|Must-know lines and definitions|Quick 1-mark facts)/m.test(text)) warn(path, 'notes.md looks like a Must-know file; the Read layer should be explanatory prose (move this to mustknow.md)');
  if (/★/.test(text)) warn(path, 'notes (Read layer) contains ★ ratings; stars belong in mustknow.md / questions.json');
  const words = (text.match(/\S+/g) || []).length;
  if (words > 3600) warn(path, `notes is ${words} words; consider splitting the h2 groups (guide: 1500–3000)`);
}

/** Validate every ```ng-<type> block in a Markdown file; ids must be unique within the chapter. */
function checkBlocks(path, seen) {
  const src = readFileSync(path, 'utf8');
  const blocks = extractBlocks(src);
  for (const b of blocks) {
    const where = `line ${b.line} ng-${b.type}${b.spec.id ? ` "${b.spec.id}"` : ''}`;
    for (const e of validateBlock(b, { src })) err(path, `${where}: ${e}`);
    if (b.spec.id) { if (seen.has(b.spec.id)) err(path, `${where}: id also used at ${seen.get(b.spec.id)}`); else seen.set(b.spec.id, `${rel(path)} line ${b.line}`); }
  }
  // a fence that looks like a block but is misspelt
  for (const m of src.matchAll(/^```(ng[-_ ]?\S*)\s*$/gm)) if (!/^ng-[a-z]+$/.test(m[1])) err(path, `"\`\`\`${m[1]}" is not a block fence; write \`\`\`ng-<type>`);
  return blocks;
}

function checkCards(path, cards, notesPath, subjectId) {
  const notes = existsSync(notesPath) ? readFileSync(notesPath, 'utf8') : '';
  const ids = new Set();
  const [lo, hi] = subjectId === 'english-core' ? [6, 15] : [8, 15];
  if (cards.length < lo || cards.length > hi) warn(path, `${cards.length} cards; aim for ${lo}–${hi} per chapter`);
  cards.forEach((c, i) => {
    const where = `card[${i}] ${c.id}`;
    if (ids.has(c.id)) err(path, `${where}: duplicate id`);
    ids.add(c.id);
    if (c.svg) {
      const rid = refId(c.svg);
      if (rid) { if (!resolveRef(rid, notes)) err(path, `${where}: svg "ref: notes#${rid}" not found in notes.md (add id="${rid}" to the <figure>, or give an ng block that id)`); }
      else for (const p of svgProblems(c.svg)) err(path, `${where}: ${p}`);
    }
    if (c.legend && !c.tex) warn(path, `${where}: legend is only shown with tex`);
    if (c.kind === 'formula' && !c.tex) warn(path, `${where}: formula cards read best with "tex" (the formula big) + "legend"`);
    if (c.back.split('\n').filter((l) => l.trim()).length > 3) err(path, `${where}: back has more than 3 lines`);
  });
}

function checkQuestions(path, questions, chapterId) {
  const ids = new Set();
  questions.forEach((q, i) => {
    const where = `question[${i}] ${q.id}`;
    if (ids.has(q.id)) err(path, `${where}: duplicate id`);
    ids.add(q.id);
    if (q.chapter !== chapterId) err(path, `${where}: chapter "${q.chapter}" should be "${chapterId}"`);
    if (q.type === 'case') {
      const sum = q.parts.reduce((s, p) => s + p.marks, 0);
      if (Math.abs(sum - q.marks) > 0.001) err(path, `${where}: parts add up to ${sum}, marks is ${q.marks}`);
      for (const p of q.parts) {
        if (p.scheme) checkScheme(path, `${where} part ${p.id ?? ''}`, p.scheme, p.marks);
        if (p.options && !p.answer) err(path, `${where} part ${p.id ?? ''}: options without answer`);
      }
    } else if (q.scheme) {
      checkScheme(path, where, q.scheme, q.marks);
    }
    if (['mcq', 'ar'].includes(q.type)) {
      if (q.marks !== 1) warn(path, `${where}: ${q.type} is usually 1 mark`);
      if (q.options.length !== 4) warn(path, `${where}: ${q.options.length} options (CBSE uses 4)`);
      const key = q.answer.trim().toUpperCase();
      if (!/^[A-F]$/.test(key)) err(path, `${where}: answer must be an option letter (A–D), got "${q.answer}"`);
      else if (key.charCodeAt(0) - 65 >= q.options.length) err(path, `${where}: answer "${key}" has no matching option`);
    }
    const expectedMarks = { vsa2: 2, sa3: 3, la5: 5 }[q.type];
    if (expectedMarks && q.marks !== expectedMarks) warn(path, `${where}: type ${q.type} but marks ${q.marks}`);
  });
}
function checkScheme(path, where, scheme, marks) {
  const sum = scheme.reduce((s, x) => s + x.marks, 0);
  if (Math.abs(sum - marks) > 0.001) err(path, `${where}: scheme steps add up to ${sum}, marks is ${marks}`);
}

// ---------- memory tricks: blocks first, then mnemonic cards with a new id ----------
for (const { key, cards } of cardMnemonics) for (const c of cards) {
  const list = (memory[key] ||= []);
  if (!list.some((m) => m.id === c.id)) list.push({ id: c.id, title: c.title, trick: c.title, meaning: [c.back], card: true });
}
for (const cls of index.classes) for (const st of cls.streams) for (const sub of st.subjects) for (const u of sub.units) for (const ch of u.chapters) {
  const n = memory[`${sub.id}/${ch.id}`]?.length; if (n) ch.mnemonics = n;
}

// ---------- cards: chapters with notes but no deck ----------
for (const [dir, ids] of Object.entries(missingCards)) {
  const msg = `cards.json missing for ${ids.length} chapter(s) with notes: ${ids.join(', ')} (required from ${CARDS_REQUIRED_FROM}; see CLAUDE.md §4c)`;
  if (TODAY >= CARDS_REQUIRED_FROM) errors.push(`${dir}: ${msg}`); else warnings.push(`${dir}: ${msg}`);
}

// ---------- report & write ----------
for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);

const live = index.classes.flatMap((c) => c.streams.flatMap((s) => s.subjects.filter((x) => x.status === 'live')));
const totals = live.reduce((t, s) => {
  t.subjects++;
  t.chapters += s.counts?.chapters ?? 0;
  t.notes += s.counts?.notes ?? 0;
  t.mustknow += s.counts?.mustknow ?? 0;
  t.formulas += s.counts?.formulas ?? 0;
  t.questionFiles += s.counts?.questions ?? 0;
  t.questions += s.units.flatMap((u) => u.chapters).reduce((a, c) => a + c.questions, 0);
  return t;
}, { subjects: 0, chapters: 0, notes: 0, mustknow: 0, formulas: 0, questionFiles: 0, questions: 0 });
console.log(`live subjects: ${totals.subjects} · chapters listed: ${totals.chapters} · read notes: ${totals.notes} · must-know: ${totals.mustknow} · formulas: ${totals.formulas} · question files: ${totals.questionFiles} (${totals.questions} questions)`);

if (errors.length) {
  console.error(`\n${errors.length} error(s). data/index.json not written.`);
  process.exit(1);
}
if (!CHECK_ONLY) {
  writeFileSync(join(ROOT, 'data', 'index.json'), JSON.stringify(index, null, 2) + '\n');
  writeFileSync(join(ROOT, 'data', 'memory.json'), JSON.stringify(memory, null, 1) + '\n');
  console.log(`wrote data/index.json (${warnings.length} warning(s))`);
} else {
  console.log(`check passed (${warnings.length} warning(s))`);
}
