# Class 12 Science · English Core — status

_Paper: 5 March 2027 (CBSE date sheet of 6 Nov 2026; recheck cbse.gov.in). Theory 80 = Reading 22 + Writing 18 + Literature 40; internal 20._

## Syllabus and pattern
- Rationalised CBSE 2026–27; units, marks and chapter list in `content/class-12/science/english-core/subject.json`.
- Paper pattern in `data/patterns/class-12/english-core.json` (verify against the official 2026–27 SQP before building exams).
- Deleted texts (`not_in_syllabus`): An Elementary School Classroom in a Slum · Should Wizard Hit Mommy? · Evans Tries an O-Level.
- Copyright rule for this subject: no passages, no lines of poems, no paragraphs from Flamingo/Vistas. Summaries, analysis and our own model answers only; extracts in questions are *described*, not quoted; the two Reading passages are our own. Texts link to ncert.nic.in.

## Conventions used in this subject
- 4-mark writing tasks (notice, invitation) are `type: "case"` with a single 4-mark part so the build's type/marks check stays clean; 5-mark letters/articles/reports are `la5`; 40–50-word literature answers `vsa2`; 120–150-word answers `la5`; extract-based items are `case` with 1-mark parts (prose 4, poetry and Vistas 6); the Reading passages are one `case` each (12 and 10 marks).
- Scheme steps for writing follow the CBSE split: format / content / expression.
- `formulas.md` holds titled `:::formula` boxes of value points (Drill formulas turns them into prompts).
- Question ids: `eng-<short>-qNN` — wn notice, wi invitation, wl letter, war article/report, ru reading-unseen, rc reading-case; literature uses the chapter id (`eng-flamingo-01-q01`, `eng-poem-02-q03`, `eng-vistas-04-q07`).

## Done (all 25 chapters, 14 Nov 2026)
- **Writing skills (4/4):** writing-notice, writing-invitation, writing-letter, writing-article-report — annotated `:::skeleton` models, format checklists, marks split; 6 questions each (24).
- **Flamingo prose (8/8):** The Last Lesson · Lost Spring · Deep Water · The Rattrap · Indigo · Poets and Pancakes · The Interview · Going Places; 8 questions each (64).
- **Poems (5/5):** My Mother at Sixty-six · Keeping Quiet · A Thing of Beauty · A Roadside Stand · Aunt Jennifer's Tigers; devices and themes in our words; 7 questions each (35).
- **Vistas (6/6):** The Third Level · The Tiger King · Journey to the End of the Earth · The Enemy · On the Face of It · Memories of Childhood; 8 questions each (48).
- **Reading (2/2):** reading-unseen (method + original passage "The Quiet Return of the Public Library", 12-mark case) and reading-case (method + original survey passage with table, 10-mark case); 3 questions each (6).
- Every chapter: chapter.json, notes.md (Read), mustknow.md (six §4b headings), formulas.md, questions.json. 177 questions in all.
- **Interactive pass (all 25 chapters, 15 Nov 2026):** `cards.json` in every chapter (6–9 cards: for literature a who-is-who figure, a plot-in-six-beats timeline, key-event scenes, key-learning/theme cards and one "line to remember" with a short recognisable phrase; for writing, format cards; for reading, method cards). Blocks in every notes.md: one `ng-figure` with parts (character map / image map / layout / passage or table anatomy), one `ng-steps` (plot or procedure, with a data-step timeline), two `ng-mnemonic`, one `ng-compare`, one `ng-fill`, one `ng-explain`; writing chapters add a second fill where useful. All drawings are our own SVG in one poster style (filled silhouettes, iconic motifs, #E0B400 highlight), generated from a small library kept outside the repo; cards reuse the notes figures with `ref: notes#<id>`. No `ng-graph`/`ng-numerical`/`ng-derive`/`ng-draw`: English has no formulas, numericals or derivations, and no diagram students must reproduce. `node scripts/build-index.mjs` passes with no English warnings or errors.

## Corrections
- none yet (first student round pending)

## What's next
1. A fixed full paper under `papers/` following the 2026–27 SQP (Section A passages must again be our own).
2. Polish after the first student round: Must-know line wording for Recall, extra extract-based cases per chapter (currently one each), a second Reading passage of each kind.
3. Internal assessment (20): a short guide to ASL (listening/speaking) and project work — not on the site yet.

## Exam mode (Site chat, 15 Nov 2026)
- English Core does not fit a count × marks grid, so exam mode shows only fixed set papers for it. Until one exists, Subject → Exam mode is hidden for English and the papers page says they are coming.
- To publish one: the reading passages now exist as case questions in `reading-unseen` / `reading-case`; add `papers/<id>.json` (e.g. `papers/sqp-style-1.json`) listing bank questions by `<chapter>/<question-id>`, with `or` for internal choices, adding up to 80 marks and following the 2026–27 SQP sections (CLAUDE.md §11). build-index checks the references and the total.

## Weekly refresh log
- 2026-11-15 · content-check FAIL 0 → 0, WARN 324 → 224 · fixed (all warnings cleared): flamingo-05, flamingo-08, poem-01, vistas-02, vistas-04 — one-word recall fronts named in two or more words, must-know lines cut to 15 words, card backs shortened, drawings widened to their viewBox · questions added (PYQ-style, 182 in total): poem-02 case (6 one-mark parts), poem-02 la5, poem-03 la5, poem-04 la5, poem-05 vsa2 · decks topped up to 8: reading-unseen, reading-case, writing-invitation, writing-notice, writing-letter, writing-article-report, poem-01 · fixed paper skipped: cbseacademic.nic.in was not reachable in this run (fetch not permitted), and the secondary article confirmed only the section totals 22/18/40 and 80 marks, not per-question marks · left out: about 220 WARN in other chapters (recall fronts, long backs, drawings, and tables wider than a phone in the writing and reading pages); poem-02 to poem-05 still carry their older warnings; card tk-satire in vistas-02 has the title 'Operation successful — Maharaja dead', which looks misplaced — not changed, check with the admin.
