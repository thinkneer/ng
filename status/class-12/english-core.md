# Class 12 Science · English Core — status

_Paper: 5 March 2027 (CBSE date sheet of 6 Nov 2026; recheck cbse.gov.in). Theory 80 = Reading 22 + Writing 18 + Literature 40; internal 20._

## Syllabus and pattern
- Rationalised CBSE 2026–27; units, marks and chapter list in `content/class-12/science/english-core/subject.json`.
- Paper pattern in `data/patterns/class-12/english-core.json` (verify against the official 2026–27 SQP before building exams).
- Deleted texts (`not_in_syllabus`): An Elementary School Classroom in a Slum · Should Wizard Hit Mommy? · Evans Tries an O-Level.
- Copyright rule for this subject: no passages, no lines of poems, no paragraphs from Flamingo/Vistas. Summaries, analysis and our own model answers only; extracts in questions are *described*, not quoted. Texts link to ncert.nic.in.

## Conventions used in this subject
- 4-mark writing tasks (notice, invitation) are stored as `type: "case"` with a single 4-mark part so the build's type/marks check stays clean; 5-mark letters/articles/reports are `la5`; 40–50-word literature answers are `vsa2`; 120–150-word answers are `la5`; extract-based items are `case` with 1-mark MCQ/short parts.
- Scheme steps for writing follow the CBSE split: format / content / expression.
- `formulas.md` holds titled `:::formula` boxes of value points (Drill formulas turns them into prompts).
- Question ids: `eng-<chapter-short>-qNN` (wn = notice, wi = invitation, wl = letter, war = article/report; literature uses the chapter id, e.g. `eng-flamingo-01-q01`).

## Done
- subject.json (units, colours, marks, chapters).
- **Writing skills (4/4)** — 14 Nov 2026: writing-notice, writing-invitation, writing-letter, writing-article-report. All four files each (notes with annotated `:::skeleton` models, mustknow with six §4b headings, formulas value points, 6 questions each: 2 MCQ + 4 tasks with model answers and format/content/expression schemes).

## Corrections
- none yet

## What's next
1. Flamingo prose (flamingo-01…08) — notes, mustknow, formulas (value points), questions (MCQ, extract-based case, vsa2, la5).
2. Poems (poem-01…05).
3. Vistas (vistas-01…06).
4. Reading (reading-unseen, reading-case) with original practice passages.
5. Later: a fixed full paper under `papers/` following the 2026–27 SQP; polish Must-know lines after the first student round.
