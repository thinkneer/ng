#!/usr/bin/env node
/**
 * bank-check.mjs: what a subject needs next, for the weekly subject runs.
 *   1. Exam bank: per question type, how many are in the bank, how many one numbered paper uses
 *      (with internal choices), how many fresh papers that gives, and how many to add for the target;
 *      for each short type, the units with the fewest such questions for their weight.
 *   2. Cards: chapters without cards.json, decks under 8 cards, days until cards are required.
 *
 * Usage:  node scripts/bank-check.mjs [subject …] [--target 4] [--json]
 *         (no subject = every live subject of Class 12 Science)
 * Reads data/index.json (run build-index first). Writes nothing.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canBuild, slotsOf, prepareBank, bankCheck, buildPapers } from '../app/exam-builder.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const JSON_OUT = args.includes('--json');
const ti = args.indexOf('--target');
const TARGET = ti >= 0 ? Number(args[ti + 1]) || 4 : 4;
const wanted = args.filter((a, i) => !a.startsWith('--') && !(ti >= 0 && i === ti + 1));
const CARDS_REQUIRED_FROM = '2026-12-01';
const today = process.env.NG_TODAY || new Date().toISOString().slice(0, 10);
const NAME = { mcq: 'MCQ', ar: 'A–R', vsa2: '2-mark', sa3: '3-mark', case: 'case (4)', la5: '5-mark' };

const read = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));
const idx = read('data/index.json');
const stream = idx.classes.find((c) => c.id === '12')?.streams.find((s) => s.id === 'science');
const subjects = stream.subjects.filter((s) => s.status === 'live' && (!wanted.length || wanted.includes(s.id)));
if (!subjects.length) { console.error(`No live subject matches ${wanted.join(', ')}`); process.exit(1); }

const out = [];
for (const sub of subjects) {
  const patPath = `data/patterns/class-12/${sub.id}.json`;
  const pattern = existsSync(join(ROOT, patPath)) ? read(patPath) : null;
  const chapters = sub.units.flatMap((u) => u.chapters.map((c) => ({ ...c, unit: u })));
  const entries = [];
  for (const c of chapters) {
    const p = join(sub.path, c.id, 'questions.json');
    if (existsSync(join(ROOT, p))) for (const q of read(p)) entries.push({ q, chapter: c.id });
  }
  const r = { subject: sub.id, name: sub.name, questions: entries.length };

  // ---- exam bank ----
  if (canBuild(pattern)) {
    const bank = prepareBank(sub, entries);
    const chk = bankCheck(pattern, bank);
    const groups = {}; // marks group → { marks, by type }
    for (const u of sub.units) { const g = u.marks_group || u.id; groups[g] ||= { marks: Number(u.marks) || 0, units: [], byType: {} }; groups[g].units.push(u.id); }
    for (const b of bank) groups[b.group].byType[b.q.type] = (groups[b.group].byType[b.q.type] || 0) + 1;
    r.exam = {
      mode: 'built', target: TARGET, fresh_papers: chk.fresh,
      types: chk.rows.map((row) => {
        const add = Math.max(0, TARGET * row.need - row.have);
        const per = Object.entries(groups).map(([g, v]) => ({ g, have: v.byType[row.type] || 0, ratio: (v.byType[row.type] || 0) / Math.max(1, v.marks) })).sort((a, b) => a.ratio - b.ratio);
        return { type: row.type, in_bank: row.have, per_paper: row.need, fresh_papers: row.papers, add_for_target: add, thinnest_units: add ? per.slice(0, 3).map((x) => `${x.g} (${x.have})`) : [] };
      }),
    };
    // sanity: P-01 adds up
    const p1 = buildPapers({ subject: sub, pattern, bank, upTo: 1, tries: 8 })[0];
    r.exam.p01 = { total: p1.total, of: pattern.total_marks, notes: p1.notes };
  } else {
    r.exam = { mode: sub.papers?.length ? 'fixed' : 'none', fixed_papers: (sub.papers || []).map((p) => p.id), note: 'Pattern is not a count × marks grid: exam mode uses fixed papers in papers/ only.' };
  }

  // ---- cards ----
  const withNotes = chapters.filter((c) => c.items?.notes);
  const missing = withNotes.filter((c) => !c.items?.cards).map((c) => c.id);
  const thin = chapters.filter((c) => c.items?.cards && (c.cards || 0) < 8).map((c) => `${c.id} (${c.cards})`);
  const daysLeft = Math.round((Date.parse(CARDS_REQUIRED_FROM) - Date.parse(today)) / 86400000);
  r.cards = { decks: withNotes.length - missing.length, of: withNotes.length, missing, under_8: thin, required_from: CARDS_REQUIRED_FROM, days_left: daysLeft };
  out.push(r);
}

if (JSON_OUT) { console.log(JSON.stringify(out, null, 2)); process.exit(0); }
for (const r of out) {
  console.log(`\n${r.name} · ${r.questions} questions`);
  if (r.exam.mode === 'built') {
    console.log(`  Exam bank: ${r.exam.fresh_papers} fresh paper(s) now · target ${r.exam.target} · P-01 = ${r.exam.p01.total}/${r.exam.p01.of}${r.exam.p01.notes.length ? ' · ' + r.exam.p01.notes.join('; ') : ''}`);
    console.log('  type        in bank  per paper  fresh  add for target  thinnest units (count)');
    for (const t of r.exam.types) console.log(`  ${NAME[t.type].padEnd(10)}  ${String(t.in_bank).padStart(7)}  ${String(t.per_paper).padStart(9)}  ${String(t.fresh_papers).padStart(5)}  ${String(t.add_for_target).padStart(14)}  ${t.thinnest_units.join(', ')}`);
    const next = r.exam.types.filter((t) => t.add_for_target).sort((a, b) => a.fresh_papers - b.fresh_papers || b.add_for_target - a.add_for_target);
    console.log(`  Add next: ${next.length ? next.map((t) => `${NAME[t.type]} +${t.add_for_target}`).join(' · ') : 'nothing; the bank meets the target'}`);
  } else console.log(`  Exam: ${r.exam.mode === 'fixed' ? `fixed papers ${r.exam.fixed_papers.join(', ')}` : 'no fixed paper yet'} (${r.exam.note})`);
  console.log(`  Cards: ${r.cards.decks}/${r.cards.of} chapters have cards.json · ${r.cards.days_left > 0 ? `${r.cards.days_left} days until missing decks fail the build` : 'missing decks now FAIL the build'}`);
  if (r.cards.missing.length) console.log(`  Missing decks (chapter order): ${r.cards.missing.join(', ')}`);
  if (r.cards.under_8.length) console.log(`  Decks under 8 cards: ${r.cards.under_8.join(', ')}`);
}
