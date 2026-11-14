# Class 12 Science · Maths — status

_Last updated 14 Nov 2026 (Maths chat, batches 1–3: all 13 chapters are on the site)._ Board paper: 9 Mar 2027. Boards only.

## Done on the site
**Batch 1 — Unit III Calculus (35 marks): ch-05 to ch-09.** Each chapter has all five files.

| Chapter | Read (notes.md) | Must know | Formulas | Practice |
|---|---|---|---|---|
| ch-05 Continuity and Differentiability | 7 sections, 8 worked examples, 1 figure (corner of \|x − 1\|) | 15 titled formula cards, 5 skeletons, 5 titled traps | ready | 12 questions |
| ch-06 Application of Derivatives | 5 sections, 6 worked examples, 2 figures (sign line, open box) | 15 titled formula cards (incl. 7 standard optimisation results) | ready | 12 questions |
| ch-07 Integrals | 7 sections, 9 worked examples | 21 titled formula cards (every standard integral and property) | ready | 12 questions |
| ch-08 Application of Integrals | 5 sections, 5 worked examples, 4 figures (strip, ellipse, \|x + 3\|, circle with line) | 10 titled formula cards | ready | 12 questions |
| ch-09 Differential Equations | 5 sections, 5 worked examples | 15 titled formula cards (incl. ready integrating factors) | ready | 12 questions |

**Batch 2 — Units I–II (18 marks): ch-01 to ch-04.** Each chapter has all five files.

| Chapter | Read (notes.md) | Must know | Formulas | Practice |
|---|---|---|---|---|
| ch-01 Relations and Functions | 4 sections, 5 worked examples, 1 figure (arrow diagrams: one-one vs onto) | 7 titled formula cards (counting results) | ready | 12 questions |
| ch-02 Inverse Trigonometric Functions | 6 sections, 5 worked examples, 1 figure (graph of sin⁻¹x) | 13 titled formula cards | ready | 12 questions (no 5-marker; see below) |
| ch-03 Matrices | 4 sections, 5 worked examples | 10 titled formula cards | ready | 12 questions |
| ch-04 Determinants | 5 sections, 5 worked examples | 13 titled formula cards | ready | 12 questions |

**Batch 3 — Units IV–VI (27 marks): ch-10 to ch-13.** Each chapter has all five files.

| Chapter | Read (notes.md) | Must know | Formulas | Practice |
|---|---|---|---|---|
| ch-10 Vector Algebra | 4 sections, 6 worked examples, 1 figure (parallelogram and cross product) | 13 titled formula cards | ready | 12 questions |
| ch-11 Three Dimensional Geometry (lines only) | 5 sections, 6 worked examples, 1 figure (foot of perpendicular and image) | 10 titled formula cards | ready | 12 questions |
| ch-12 Linear Programming | 5 sections, 4 worked examples, 3 feasible-region figures (bounded, unbounded, edge of optimal points) | 7 titled result cards | ready | 12 questions |
| ch-13 Probability | 5 sections, 6 worked examples, 1 figure (Bayes tree for three machines) | 10 titled formula cards | ready | 12 questions |

- Every questions.json has 12 questions: 4 MCQ, 2 A–R, 2 two-markers, 2 three-markers, 1 five-marker, 1 case study (1 + 1 + 2, with an OR written into part iii). Exception: ch-02 has 5 MCQ, 2 A–R, 3 two-markers, 1 three-marker and 1 case study, because the chapter carries about 3 marks and is not set as a 5-marker. 156 questions in all, ids `maths-ch-NN-qNN`.
- A–R uses the Maths wording of option D: "A is false, but R is true." Keys: ch-01 A, D · ch-02 D, A · ch-03 D, A · ch-04 A, C · ch-05 C, A · ch-06 D, B · ch-07 A, D · ch-08 D, A · ch-09 C, B · ch-10 A, D · ch-11 A, C · ch-12 A, C · ch-13 A, D.
- All questions are labelled `PYQ-style` or `NCERT-based`; none is labelled with a year. Stars are estimates.
- Every answer and every worked example was checked by computation (sympy). Every `$…$` expression in the Maths content was parsed with the site's KaTeX build (0 errors). `node scripts/build-index.mjs` passes with 0 warnings.
- `subject.json → not_in_syllabus` now lists the deleted topics chapter by chapter.

## How it was written
- The earlier Maths PDFs (formula sheet, answer-writing guide, must-have notes Ch 1–13, Part 1 practice sets) were **not attached** to this chat. The content was written from the Maths chat's own earlier work in the same conversation and board knowledge, following `claude/maths-notes.md` in the project. The Calculus questions are the Part 1 practice sets, re-cut to 12 per chapter. The Ch 1–4 and Ch 10–13 questions are new, built on NCERT exercise types.
- Read layer: concept in plain words, then worked examples in board layout inside `:::skeleton` with step marks; each trap as a `:::tip` at the point of error; every section ends with **In one breath:**. Figures are inline SVG generated from the actual curves (not traced).
- Must-know layer: the six §4b headings; one result per titled `:::formula` box so each becomes a recall card; one fact per line, written "prompt: answer". Lines whose answer was too short to split into a card were lengthened.

## Syllabus and pattern calls used (checked 14 Nov 2026; reconfirm on cbseacademic.nic.in)
- Theory 80 + internal assessment 20 (periodic tests 10, maths activities 10).
- Unit marks: I Relations & Functions 8, II Algebra 10, III Calculus 35, IV Vectors & 3D 14, V Linear Programming 5, VI Probability 8.
- Paper (2026–27 sample paper, unchanged from 2026): 38 questions. A: 18 MCQ + 2 A–R (20×1). B: 5×2. C: 6×3. D: 4×5. E: 3 case studies (1+1+2). Internal choice in 2 of B, 3 of C, 2 of D, and in the 2-mark part of case studies.
- Sample paper 2026–27 chapter marks (main options): Matrices 9, AOD 9, Integrals 9, 3D 9, Probability 8, Continuity & Differentiability 7, DE 5, Vectors 5, LPP 5, Relations & Functions 5, Application of Integrals 5, Inverse Trig 3, Determinants 1.
- Treated as not in boards: composite and invertible functions, binary operations; inverse-trig sum formulas; elementary operations on matrices; properties of determinants, Cramer's rule; Rolle's and mean value theorems; tangents/normals, approximations; integral as limit of a sum; ∫(px+q)√(ax²+bx+c) dx; area between two curves (as a listed topic); formation of differential equations; scalar triple product; planes; mathematical formulation of LPP word problems; variance of a random variable, Bernoulli trials and binomial distribution.
- **Not verified against the official CBSE PDF line by line.** The unit marks and pattern came from the sample-paper analysis and published syllabus summaries. `data/patterns/class-12/maths.json` should be checked against the official 2026–27 SQP before exams are built.

## Corrections
- none yet

## What's next (in this order)
All 13 chapters now have Read, Must know, formulas and 12 practice questions. What is left:
1. **Phone check of the pages** (not done from this chat; only the build, a KaTeX parse and SVG renders were run): figures in dark and sepia, long display equations, wide matrices and determinants in Ch 3–4 and Ch 10–11, tables inside worked examples in Ch 12–13.
2. **Second-pass polish of Must-know lines** once students have used Recall: shorten any card that reads badly as a flashcard.
3. **Verify the syllabus and pattern against the official CBSE 2026–27 PDFs** (see the note above) and check `data/patterns/class-12/maths.json` against the official SQP.
4. **More practice per chapter** if wanted: the bank has 12 per chapter; the next useful additions are a second case study each for Ch 6, 12 and 13, and Part 2/3 practice sets (Units I–II and IV–VI) in the style of the Calculus set. No full papers under `papers/` yet.
5. LPP graphs in model answers are described in words ("graph drawn, region shaded"); figures exist only in the Read layer.

## Notes for the next Maths chat
- Question banks are generated from small scripts (one per chapter) so that step marks are summed automatically; the scripts are not in the repo. Writing questions.json by hand is fine as long as the build passes.
- Keep answers after the colon at least a few words long in Must-know lines; very short answers ("$1$.") do not become recall cards.
- Use `\lvert x\rvert` inside Markdown tables (a bare `|` splits the cell).
