# Class 9 · Social Science — status

_School annual exam (no board exam in Class 9): theory 80, 3 hours, set by the school on the CBSE syllabus; internal assessment 20. Syllabus 2026–27._

## Syllabus and book
- **New NCERT book from 2026–27: *Understanding Society: India and Beyond*** (NCF-SE 2023). It replaces the four old books (India and the Contemporary World – I, Contemporary India – I, Democratic Politics – I, Economics); those chapters are listed in `subject.json → not_in_syllabus`.
- Part 1 (9 chapters) = our ch-01 … ch-09. Part 2 (released 29–30 Sep 2026, 6 chapters) = our ch-10 … ch-15 (book numbers 1–6). Chapter list checked 15 Nov 2026 against several published chapter lists; **recheck titles against ncert.nic.in** when convenient (the official site was not reachable from the chat).
- Units are by discipline: Foundations (ch-01), Geography (ch-02, 03, 10, 11), History (ch-04, 05, 12), Political Science (ch-06, 07, 13), Economics (ch-08, 09, 14, 15).
- **Marks are placeholders.** CBSE had not published theme-wise weightage or a question paper design for the new book (15 Nov 2026). `subject.json` uses 20 per discipline, 0 for Foundations (so ch-01 questions appear in chapter practice but not in numbered papers). `data/patterns/class-9/social-science.json` is a provisional 80-mark layout (20 × 1, 4 × 2, 5 × 3, 5 × 5, 3 × 4 case). Replace both when CBSE publishes.

## Conventions used in this subject
- Question ids `sst9-<chapter number>-qNN`; labels `NCERT-based` (new book, no past papers). Stars = our estimate of likelihood in school papers; the Must-know legend says so.
- Block ids `ch<NN>-<name>`.
- `formulas.md` holds titled `:::formula` fact boxes plus one summary table (Drill formulas uses the boxes).
- No `ng-graph` / `ng-numerical` / `ng-derive` in Ch 1–2 (no formulas or numericals). Economics chapters (ch-08, 09, 14) should get `ng-graph` (demand/supply curves) and `ng-numerical` (opportunity cost, budgets, simple interest) where the book has them.

## Done
- **Setup (15 Nov 2026):** Class 9 and Social Science marked live in `data/classes.json`; `subject.json` with all 15 chapters; provisional pattern.
- **ch-01 Understanding Social Science:** all six files. Read: 6 sections, figure "one drought, four lenses", sources figure, roti-journey steps, compare, fill, explain, 3 mnemonics. 11 cards. 17 questions (8 MCQ/A–R, 3 × 2, 3 × 3, 2 × 5, 1 case).
- **ch-02 Shaping of the Earth's Surface:** all six files. Read: 9 sections; Earth's interior figure + draw, convection steps, plate-boundary figure, oxbow-lake steps, cave→arch→stack steps, karst cave figure, GLOF steps, 2 compares, 2 fills, explain, 3 mnemonics. 13 cards. 20 questions (10 MCQ/A–R, 3 × 2, 3 × 3, 2 × 5, 2 case).
- `node scripts/build-index.mjs` passes with no warnings; `node scripts/content-check.mjs social-science` 0 FAIL, 0 WARN.

## Corrections
- none yet

## What's next (in this order)
1. **ch-03 Atmosphere and Climate** (composition and layers, temperature, pressure belts, winds, humidity and rainfall, factors of climate, climate and human activity). Needs layer and pressure-belt figures.
2. ch-04 Early Humans and Beginning of Civilisation · ch-05 State and Society up to 1000 CE.
3. ch-06 Democracy · ch-07 Elections.
4. ch-08 Building Blocks in Economics: The Problem of Choice · ch-09 The Price Puzzle: What Drives the Market (demand/supply graphs).
5. Part 2: ch-10 Oceans and Life · ch-11 Life on Earth · ch-12 Resistance and Resilience: 1000–1700 CE · ch-13 Governance and Public Policy · ch-14 Managing Your Personal Finances · ch-15 From Ideas to Startups.
6. Map work (outline maps of India and the world) once the book's map list is confirmed.
- Bank target for numbered papers: 16 MCQ + 4 A–R + 4 × 2 + 5 × 3 + 5 × 5 + 3 case per paper, spread over the four disciplines.

## Site-chat notes (not done here: app/tooling code)
- Fixed 15 Nov 2026: `scripts/bank-check.mjs` now covers every live class (`node scripts/bank-check.mjs social-science`, or `--class 9` if another class gets the same subject); exam mode no longer crashes when the bank is too thin to fill a paper (it shows "short in the bank" notes instead). Current bank: 0 fresh papers; add MCQ +51, 5-mark +36, 3-mark +22, 2-mark +18, A–R +11, case +9 as chapters are written.
- With two classes live, Join now shows a class picker; existing Class 12 members are unaffected (each member's class comes from their profile).
