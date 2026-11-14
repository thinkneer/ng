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
- Every chapter: chapter.json, notes.md (Read), mustknow.md (six §4b headings), formulas.md, questions.json. 177 questions in all. `node scripts/build-index.mjs` passes with no English warnings except the new cards one below.

## Corrections
- none yet (first student round pending)

## What's next
1. **cards.json per chapter** — new site requirement (commit `1c2a688`, 14 Nov; `schemas/cards.schema.json`, 6–15 cards for English, each with an SVG or `tex`; a warning per subject until **1 Dec 2026**, then a build error). None exist for English yet. Needs a decision on what English cards should be (e.g. character maps, plot-in-six-beats figures, writing-format skeletons as SVG) before 23 decks are drawn.
2. A fixed full paper under `papers/` following the 2026–27 SQP (Section A passages must again be our own).
3. Polish after the first student round: Must-know line wording for Recall, extra extract-based cases per chapter (currently one each), a second Reading passage of each kind.
4. Internal assessment (20): a short guide to ASL (listening/speaking) and project work — not on the site yet.
