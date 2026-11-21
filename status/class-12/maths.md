# Class 12 Science · Maths — status

_Last updated 21 Nov 2026 (Maths chat: ch-07 Integrals deepened before Pre-board 2; story opening and hook cards)._ Board paper: 9 Mar 2027. Boards only.

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

## Ch-07 Integrals deepened (21 Nov 2026, a student's request two days before the pre-board)
- **Read:** new opening section "Why integrals exist" (Archimedes' strips, Newton and Leibniz, the ∫ sign as a stretched S, where integrals are used) with our own drawing `ch07-strips`; new "Which method? Read the integrand first" (a six-step method ladder as `ng-steps`, a spot-the-method `ng-fill`); new "Trigonometric integrals" section (even and odd powers, product to sum, three tricks); six more worked examples (root of a quadratic, divide first, a lone log, the integral that comes back, finding f and f′, rewrite the angle); a "when to think of a property" tip; `ng-derive` for ∫ log(1 + tan x) and an `ng-explain`. Notes are now about 3 280 words (limit 3 500: split before adding more).
- **Must know:** six method-cue lines and two traps added.
- **Practice:** 21 new questions `maths-ch-07-q13` … `q33` (5 MCQ, 2 A–R, 4 two-mark, 6 three-mark, 3 five-mark, 1 case), all in answer-script style with hints, every result checked by differentiation or numerical integration. Chapter bank: 43.
- **Cards:** three story cards at the front of the deck (`hook-strips`, `hook-summa`, `hook-uses`); the deck is at the 15-card limit.
- **Hook slides for every chapter** (admin idea, 21 Nov): done here with what content can do today (an opening Read section + story cards at the front of the deck). A proper "Start here" intro before a chapter opens is a Site-chat feature; the request is in the project doc `site-request-chapter-hook-slides.md`. History in hook content must stay checkable and plain (no legends presented as fact).
- content-check maths ch-07: 0 FAIL, 0 WARN.

## Past papers (19 Nov 2026; admin decision: Past papers section for every subject)
- `papers/board-2026.json` and `papers/board-2025.json`: the CBSE board papers of 2026 and 2025 (set 65/1/1 each), rebuilt question by question in our own words, same order and marks (38 questions, 80 marks, internal choices kept), with our own answer-script answers and step marks. 90 new bank questions: `maths-pyq26-…` labelled `PYQ (2026)` and `maths-pyq25-…` labelled `PYQ (2025)` (45 each: 38 + 7 internal-choice alternatives). Both open under Exam mode → Set papers.
- **Source and checks.** The admin supplied one publisher's retyped copy of each paper (PDFs used for the questions only, not stored). Those copies had misprints, so every question was solved here and each one that did not work out was compared with other published copies (two more for 2026, one more for 2025). **Not checked against the official PDFs on cbse.gov.in.** Where the supplied copy was wrong or copies disagree, the question's `source_note` says "Adapted" and why:
  - 2026: Q4 (determinants, not matrices), Q12 (equation), Q16 (line is the x-axis), Q19 (Reason printed with ∪ or ∩), Q21(b) (√3 and the point), Q22 (angle π/6 or π/3), Q25(b) (tan or cot), Q27(a) (integral), Q28 (integrand), Q33(a) (first equation), Q17 (graph put in words), Q37(iii) (wording of "wins").
  - 2025: Q10, Q12, Q20 (k = 5/2, answer D), Q22, Q28(a), Q28(b), Q34(b), Q37(iii)(b) (R₂), and Q17, Q18 (graphs put in words).
- Every answer was worked here and checked by computation (sympy for the matrix, integral and vector questions). Model answers carry our own drawings where the graph earns marks: the two LPP regions (2026 Q30, 2025 Q27), the graph of |x + 3| (2025 Q31) and the two circles (2026 Q38).
- All questions are in the 2026–27 syllabus. Two overlap with existing bank questions (same lines as `maths-ch-11-q10` in 2026 Q35; same point and line as `maths-ch-11-q11` in 2025 Q34(a)); kept, since a past paper must be complete.
- Also fixed: seven card fronts that content-check flagged as wider than the card (ch-02, 03, 05, 09) now use two-line formulas. content-check maths: 0 FAIL.
- Bank after this: 253 questions, 4 fresh numbered papers (`bank-check`: nothing to add for the target).

## Cards and interactive blocks (15 Nov 2026, CLAUDE.md §4c)
All 13 chapters now have `cards.json` (136 cards) and interactive blocks in `notes.md` (112 blocks: compare 9, derive 10, draw 13, explain 3, fill 10, graph 4, mnemonic 27, numerical 19, steps 17).

| Chapter | Cards | Blocks in notes.md |
|---|---|---|
| ch-01 | 10 | compare 1, derive 1, draw 1, explain 1, fill 1, mnemonic 2, numerical 1, steps 1 |
| ch-02 | 10 | draw 1, fill 2, mnemonic 2, numerical 1, steps 1 |
| ch-03 | 10 | compare 1, derive 1, explain 1, mnemonic 2, numerical 1, steps 1 |
| ch-04 | 10 | derive 1, fill 1, mnemonic 2, numerical 2, steps 1 |
| ch-05 | 11 | compare 1, derive 1, draw 1, graph 1, mnemonic 2, numerical 1, steps 1 |
| ch-06 | 11 | compare 1, draw 2, graph 1, mnemonic 2, numerical 2, steps 2 |
| ch-07 | 12 | derive 1, fill 2, mnemonic 3, numerical 1, steps 2 |
| ch-08 | 10 | derive 1, draw 3, graph 1, mnemonic 2, numerical 2, steps 1 |
| ch-09 | 10 | compare 1, derive 1, fill 1, graph 1, mnemonic 2, numerical 1, steps 2 |
| ch-10 | 12 | compare 1, derive 1, draw 1, mnemonic 2, numerical 2, steps 1 |
| ch-11 | 10 | derive 1, draw 1, fill 1, mnemonic 2, numerical 2, steps 2 |
| ch-12 | 10 | compare 2, draw 2, explain 1, fill 1, mnemonic 2, numerical 1, steps 1 |
| ch-13 | 10 | compare 1, derive 1, draw 1, fill 1, mnemonic 2, numerical 2, steps 1 |

- Cards: every existing figure is a figure card (`svg: ref: notes#<id>`; the 16 figures now carry ids such as `ch08-ellipse`, `ch12-bounded-region`, `ch13-bayes-tree`); the rest are formula cards (`tex` + legend + a back line saying what the formula means or where marks are lost).
- Every chapter has at least two `ng-mnemonic` tricks (they also feed `data/memory.json`), at least one `ng-numerical` with fresh numbers (19 in all; each was simulated with random values and the worked steps read back), an `ng-steps` method, and a compare or fill table. `ng-graph`: ch-05 (movable corner), ch-06 (cubic with its derivative), ch-08 (area under a sine curve), ch-09 (family of solutions). `ng-derive` self-marked answers: ch-01, 03, 04, 05, 07, 08, 09, 10, 11, 13. `ng-draw` for every figure students draw in the exam (LPP regions, area sketches, Bayes tree).
- Not done: no `ng-figure` (tap-to-label) blocks. Maths figures are graphs rather than labelled diagrams, so they are plain figures with `ng-draw` practice. Say if the LPP regions should become tap-to-label figures.
- Card and block ids are final; do not rename them.

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
1. **Check the two past papers against the official CBSE PDFs** (cbse.gov.in → Question papers), above all the questions marked "Adapted" (list above). Older years (2024, 2023) or other sets need their papers from the admin.
2. **Mock papers 1 and 2** from the bank (as Biology has), with no question shared and none taken from the past papers.
3. **Phone check of the pages** (not done from a Maths chat; only the build, content-check, a KaTeX parse and SVG renders were run): the Solved view of the past papers once the Site chat ships it, card decks, wide matrices in Ch 3–4 and 10–11.
4. **Verify the syllabus and pattern against the official CBSE 2026–27 PDFs** and check `data/patterns/class-12/maths.json` against the official SQP.
5. **Answer-script style for the older bank:** the first 156 questions still show step marks inside the model answer; the past-paper and weekly questions are in script style. content-check still lists 59 WARN (one-word recall fronts in Must know, a few wide tables and formulas).
6. The exam builder may draw past-paper questions into numbered papers; if past papers should stay unseen until attempted, that is a Site-chat rule.

## Notes for the next Maths chat
- Question banks are generated from small scripts (one per chapter) so that step marks are summed automatically; the scripts are not in the repo. Writing questions.json by hand is fine as long as the build passes.
- Keep answers after the colon at least a few words long in Must-know lines; very short answers ("$1$.") do not become recall cards.
- Use `\lvert x\rvert` inside Markdown tables (a bare `|` splits the cell).

## Exam mode (Site chat, 15 Nov 2026)
- Live: Subject → Exam mode builds numbered 3-hour papers (P-01, P-02 …) from this subject's questions.json files, to `data/patterns/class-12/maths.json` and the unit marks in subject.json. Every question in the bank can appear; nothing extra is needed per question.
- Bank check (15 Nov 2026, after the weekly refresh): 163 questions; 2 fresh papers, target 4. Add next: `la5` +10, MCQ +16, `sa3` +9, `vsa2` +1 (a paper needs 18 MCQ, 6 `la5` with ORs, 9 `sa3` with ORs). More questions = more papers before repeats; each type must keep its pattern marks (MCQ/A–R 1, vsa2 2, sa3 3, case 4, la5 5).
- Fixed set papers (e.g. an SQP-style paper) go in `papers/<id>.json` as references to bank questions (CLAUDE.md §11).

## Weekly refresh log
- 2026-11-15 (unattended weekly run): content-check FAIL/WARN 30/79 → 7/66 (full maths run). Chapters touched: ch-01, ch-06, ch-07, ch-10, ch-11, ch-12, ch-13 (0 FAIL in each). Fixes: card formulas split with `gathered` (ch-06 ×4, ch-07 ×5, ch-10 ×2, ch-12 ×3, ch-01, ch-11, ch-13 ×2 cards), legend symbols shortened (ch-10, ch-11, ch-13), raw maths removed from table headers (ch-06, ch-10), a wide LPP table header shortened (ch-12), the by-parts formula aligned (ch-07), two-word recall fronts (ch-01, ch-06, ch-07 ×13, ch-11, ch-12). Card ids and question ids unchanged.
- Questions added: MCQ +3 (ch-01 `maths-w20261115-ch-01-02`, ch-10 `…-ch-10-01`, ch-11 `…-ch-11-01`); `la5` +2 (ch-01 `…-ch-01-01` equivalence relation mod 4; ch-13 `…-ch-13-01` Bayes, two bags); `sa3` +2 (ch-11 `…-ch-11-02` acute angle between two lines; ch-13 `…-ch-13-02` dice, conditional probability). All PYQ-style, answer-script model answers, scheme sums checked, answers verified by computation.
- Fresh papers 2 → 2 (MCQ in bank 53 → 56, `la5` 12 → 14, `sa3` 25 → 27).
- Left out: the 7 remaining card FAILs in ch-02, ch-03, ch-05, ch-09 (chapter cap for this run; next run starts there); card-back WARNs (ch-06, ch-07, ch-12, ch-13); Read-page WARNs for wide formulas in ch-11 and ch-13 (the Bayes-tree block and the total-probability aligned formulas); the ch-12 wide corner-point table (still 4 columns at 424 px); the `vsa2` +1 and the 6 'answers not yet in answer-script style' per chapter (not started); the `la5` and `sa3` bank gaps in Unit III and Unit IV.

