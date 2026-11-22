# Class 10 · Mathematics — status

_Last updated 23 Nov 2026 (Class 10 Maths chat: Geometry ch-06 Triangles and ch-10 Circles added; ch-01, ch-07, Algebra ch-02 to ch-05 and Trigonometry ch-08, ch-09 done earlier)._ Board paper: **17 Feb 2027** (Mathematics Standard 041 and Basic 241, same day; CBSE date sheet of 6 Nov 2026 as reported by several news sites; recheck on cbse.gov.in).

## Why this subject was started
Admin decision, 22 Nov 2026: Maths notes for real students of Classes 9–12, written chapter by chapter, linked across classes by a strand map with "Go to basics" links. The map and build order are in the project doc `maths-9-12-continuity-map.md`; the link itself is a Site-chat job (`site-request-go-to-basics.md`). The pilot strand is Trigonometry: Class 10 ch 8–9 (done here) → Class 11 ch 3 → links from Class 12 ch 2, 5, 7.

## Syllabus, book and pattern
- **Book:** the existing NCERT Class 10 Mathematics book continues in 2026–27 (no new book this year; checked 22 Nov 2026 from news reports of NCERT's notice). 14 chapters; `subject.json` lists them all with our ids `ch-01` … `ch-14` in book order.
- **Units and marks** (CBSE 2026–27, from published copies of the syllabus, not the official PDF): I Number Systems 6 · II Algebra 20 · III Coordinate Geometry 6 · IV Geometry 15 · V Trigonometry 12 · VI Mensuration 10 · VII Statistics and Probability 11 = 80. Internal assessment 20.
- **Not in boards** (`subject.json → not_in_syllabus`): written from the rationalised book as remembered; **confirm each chapter's list against the book and the CBSE syllabus when that chapter is written.** For ch-08: ratios of complementary angles are out.
- **Pattern** `data/patterns/class-10/maths.json`: the Standard sample-paper layout (20 × 1 incl. 2 A–R, 5 × 2, 6 × 3, 4 × 5, 3 case studies); **not checked against the official 2026–27 SQP**. Internal-choice counts are an assumption.
- Standard and Basic share the syllabus. Content is written at Standard level; nothing is tagged Basic-only yet.

## Conventions
- Question ids `maths10-<chapter>-qNN`; labels `PYQ-style` or `NCERT-based` (no verified past-paper questions yet). Stars are estimates.
- Model answers in answer-script style; A–R option D "A is false, but R is true."
- Every chapter opens with a short story section (where the idea came from, where it is used) and a story card at the front of the deck (`hook-…`), as in Class 12 ch-07.
- Phone layout: tables at most 3 columns (a fourth column scrolls sideways on a 360 px screen).

## Done
| Chapter | Read | Must know | Practice | Cards |
|---|---|---|---|---|
| ch-08 Introduction to Trigonometry | 6 sections; story of the word "sine"; tap-to-label right triangle; special-triangles figure; 6 worked examples; graph of sin and cos; numerical; 2 mnemonics; fill tables; derive; explain | 9 titled formula cards | 16 questions (6 MCQ, 2 A–R, 3 × 2, 3 × 3, 1 × 5, 1 case) | 11 |
| ch-09 Some Applications of Trigonometry | 4 sections; how Everest was measured; tap-to-label elevation/depression figure; two more figures; 4 worked examples; steps; numerical; compare; derive; 2 draw blocks | 6 titled formula cards | 14 questions (5 MCQ, 2 A–R, 2 × 2, 2 × 3, 2 × 5, 1 case) | 10 |
| ch-02 Polynomials | 4 sections; tap-to-label parabola figure (zeros on the graph); graph with sliders; steps; fill; numerical; 2 mnemonics; draw; explain | titled formula cards | 13 questions (5 MCQ, 2 A–R, 2 × 2, 2 × 3, 1 × 5, 1 case) | 9 |
| ch-03 Pair of Linear Equations in Two Variables | three-cases-of-lines figure; graph with a moving line; substitution and elimination worked in board format; word problems as steps | titled formula cards | 13 questions (same split; the 5-mark graphical answer has its own drawing) | 9 |
| ch-04 Quadratic Equations | factorisation, quadratic formula, discriminant graph, nature of roots, word problems | titled formula cards | 13 questions (same split) | 10 |
| ch-05 Arithmetic Progressions | 5 sections; the Gauss story (told as a story); AP bars figure; 2 derive blocks (nth term, sum); 2 numericals; graph; fill; steps; 2 mnemonics; explain | 7 titled formula cards | 13 questions (same split) | 10 |
| ch-01 Real Numbers | 7 sections; the √2 legend (told as a legend); tap-to-label factor tree; HCF/LCM steps; compare (HCF or LCM?); proof of √2 as a derive block; numerical; fill; 2 mnemonics; draw; explain | 4 titled formula cards | 14 questions (5 MCQ, 2 A–R, 3 × 2, 2 × 3, 1 × 5, 1 case) | 10 |
| ch-07 Coordinate Geometry | 6 sections; the Descartes story (told as a story); tap-to-label distance and section figures; derive; numerical; steps; fill (shape tests); 2 mnemonics; draw; explain | 4 titled formula cards | 13 questions (5 MCQ, 2 A–R, 2 × 2, 2 × 3, 1 × 5, 1 case) | 11 |
| ch-06 Triangles | 6 sections; Thales and the pyramid (told as tradition); tap-to-label BPT figure; proof figure; BPT proof as skeleton + derive; 3 more figures; compare (congruent / similar); fill; steps; 2 numericals; 2 mnemonics; draw; explain | 4 titled formula cards | 13 questions (5 MCQ, 2 A–R, 2 × 2, 2 × 3, 1 × 5, 1 case); three model answers carry figures | 10 |
| ch-10 Circles | 5 sections; why a released stone flies along the tangent; tap-to-label figures for both theorems; both proofs as skeleton + derive; circumscribed quadrilateral and triangle figures; graph; numerical; compare; fill; steps; 2 mnemonics; draw; explain | 4 titled formula cards | 13 questions (same split); three model answers carry figures | 10 |

- A–R keys: ch-08 A, D · ch-09 A, D · ch-02 A, C · ch-03 A, D · ch-04 A, D · ch-05 A, D · ch-01 A, C · ch-07 A, B · ch-06 A, C · ch-10 A, D.
- Not in boards, as applied in this batch (from the rationalised book as remembered; still to confirm on the official syllabus): division algorithm for polynomials (ch-02); cross-multiplication and equations reducible to linear (ch-03); completing the square as a method (ch-04, added to `subject.json`); Euclid's division lemma and decimal expansions of rationals (ch-01); area of a triangle from coordinates (ch-07); ratio of areas of similar triangles and the proofs of the Pythagoras theorem (ch-06).
- Every answer checked by hand; all maths parses; build 0 warnings; content-check (Class 10 maths) 0 FAIL, 0 WARN. Not looked at on a real phone.
- History lines are worded cautiously ("is credited with"); keep them that way.

## What's next
1. **Go-to-basics links** once the Site chat ships the chip: from Class 12 ch-02, ch-05, ch-07 and ch-10 to ch-08 sections here ("The six trigonometric ratios", "Values at 0°, 30°, 45°, 60° and 90°", "The three identities").
2. **Class 11 ch-03 Trigonometric Functions** (the middle of the pilot strand) in a Class 11 Maths chat.
3. **Rest of Class 10 (4 chapters left):** ch-11 Areas Related to Circles · ch-12 Surface Areas and Volumes · ch-13 Statistics · ch-14 Probability. The board paper is on 17 Feb 2027, so the whole book should be up by mid-January.
4. Check the pattern and the unit marks against the official CBSE PDFs; decide whether Basic needs its own easier question tags.
5. `bank-check`: numbered papers are not usable until every chapter exists; run it when the book is complete and top up the thin question types.
