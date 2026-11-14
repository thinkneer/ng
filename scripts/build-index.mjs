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
import addFormats from 'ajv-formats';

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
            let counts = { notes: 0, formulas: 0, questions: 0, chapters: 0 };
            for (const unit of s.units) {
              const outUnit = { id: unit.id, name: unit.name, colour: unit.colour, marks: unit.marks, marks_group: unit.marks_group ?? null, chapters: [] };
              for (const ch of unit.chapters) {
                if (chapterIds.has(ch.id)) err(subjectJson, `duplicate chapter id ${ch.id}`);
                chapterIds.add(ch.id);
                counts.chapters++;
                const chDir = join(dir, ch.id);
                const outCh = { id: ch.id, number: ch.number, title: ch.title, unit: unit.id, items: {}, marks_hint: null, summary: null, pdfs: [], questions: 0, question_types: {} };
                if (existsSync(chDir) && statSync(chDir).isDirectory()) {
                  const chJsonPath = join(chDir, 'chapter.json');
                  if (existsSync(chJsonPath)) {
                    const c = readJSON(chJsonPath);
                    if (validate('chapter', chJsonPath, c)) {
                      if (c.id !== ch.id) err(chJsonPath, `id "${c.id}" does not match folder ${ch.id}`);
                      if (c.unit !== unit.id) err(chJsonPath, `unit "${c.unit}" but subject.json puts this chapter in unit "${unit.id}"`);
                      outCh.marks_hint = c.marks_hint ?? null;
                      outCh.summary = c.summary ?? null;
                      outCh.pdfs = c.pdfs ?? [];
                      outCh.diagrams = c.diagrams ?? [];
                      for (const p of outCh.pdfs) {
                        if (!existsSync(join(ROOT, p.path))) warn(chJsonPath, `pdf ${p.path} not found (it may be built by the Action)`);
                      }
                    }
                  } else {
                    warn(chDir, 'chapter folder without chapter.json');
                  }
                  for (const item of ['notes', 'formulas']) {
                    const p = join(chDir, `${item}.md`);
                    if (existsSync(p)) {
                      outCh.items[item] = true;
                      counts[item]++;
                      if (item === 'notes') checkNotesHeadings(p);
                    }
                  }
                  const qPath = join(chDir, 'questions.json');
                  if (existsSync(qPath)) {
                    const q = readJSON(qPath);
                    if (validate('questions', qPath, q)) {
                      checkQuestions(qPath, q, ch.id);
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
                if (p) outSubj.papers.push({ id: p.id ?? f.replace(/.*\//, '').replace('.json', ''), title: p.title ?? null, path: rel(f) });
              }
            }
            outSubj.counts = counts;
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

const REQUIRED_HEADINGS = [
  'Most-repeated board questions',
  'Must-know lines and definitions',
  'Key formulas',
  'Answer skeletons',
  'Quick 1-mark facts (MCQ, A–R)',
  'Case-based angles',
  'Mark-losing traps',
];
function checkNotesHeadings(path) {
  const text = readFileSync(path, 'utf8');
  const found = [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  for (const h of REQUIRED_HEADINGS) {
    if (!found.includes(h)) warn(path, `missing heading "## ${h}"`);
  }
  // directives must be balanced
  const opens = (text.match(/^:::(tip|formula|skeleton)\b/gm) || []).length;
  const closes = (text.match(/^:::\s*$/gm) || []).length;
  if (opens !== closes) err(path, `unbalanced ::: directives (${opens} open, ${closes} close)`);
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

// ---------- report & write ----------
for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);

const live = index.classes.flatMap((c) => c.streams.flatMap((s) => s.subjects.filter((x) => x.status === 'live')));
const totals = live.reduce((t, s) => {
  t.subjects++;
  t.chapters += s.counts?.chapters ?? 0;
  t.notes += s.counts?.notes ?? 0;
  t.formulas += s.counts?.formulas ?? 0;
  t.questionFiles += s.counts?.questions ?? 0;
  t.questions += s.units.flatMap((u) => u.chapters).reduce((a, c) => a + c.questions, 0);
  return t;
}, { subjects: 0, chapters: 0, notes: 0, formulas: 0, questionFiles: 0, questions: 0 });
console.log(`live subjects: ${totals.subjects} · chapters listed: ${totals.chapters} · notes: ${totals.notes} · formulas: ${totals.formulas} · question files: ${totals.questionFiles} (${totals.questions} questions)`);

if (errors.length) {
  console.error(`\n${errors.length} error(s). data/index.json not written.`);
  process.exit(1);
}
if (!CHECK_ONLY) {
  writeFileSync(join(ROOT, 'data', 'index.json'), JSON.stringify(index, null, 2) + '\n');
  console.log(`wrote data/index.json (${warnings.length} warning(s))`);
} else {
  console.log(`check passed (${warnings.length} warning(s))`);
}
