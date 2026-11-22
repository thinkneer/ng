# Class 10 · Mathematics — status

_Last updated 23 Nov 2026 (Class 10 Maths chat: subject set up; pilot of the Trigonometry strand, ch-08 and ch-09)._ Board paper: **17 Feb 2027** (Mathematics Standard 041 and Basic 241, same day; CBSE date sheet of 6 Nov 2026 as reported by several news sites; recheck on cbse.gov.in).

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

- A–R keys: ch-08 A, D · ch-09 A, D.
- Every answer checked by hand; all maths parses; build 0 warnings; content-check (Class 10 maths) 0 FAIL, 0 WARN. Not looked at on a real phone.
- History lines are worded cautiously ("is credited with"); keep them that way.

## What's next
1. **Go-to-basics links** once the Site chat ships the chip: from Class 12 ch-02, ch-05, ch-07 and ch-10 to ch-08 sections here ("The six trigonometric ratios", "Values at 0°, 30°, 45°, 60° and 90°", "The three identities").
2. **Class 11 ch-03 Trigonometric Functions** (the middle of the pilot strand) in a Class 11 Maths chat.
3. **Rest of Class 10, feeder chapters first:** ch-04 Quadratic Equations, ch-03 Pair of Linear Equations, ch-07 Coordinate Geometry, ch-02 Polynomials; then the remaining ten. The board paper is on 17 Feb 2027, so the whole book should be up by mid-January.
4. Check the pattern and the unit marks against the official CBSE PDFs; decide whether Basic needs its own easier question tags.
5. `bank-check` (23 Nov): 30 questions, 0 fresh papers; numbered papers are not usable until most chapters exist.
