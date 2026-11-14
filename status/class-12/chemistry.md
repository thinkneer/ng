# Class 12 Science · Chemistry — status
> **Policy change (14 Nov 2026, admin):** the site has **no PDFs**. The LaTeX sources and compiled PDFs were removed from the repo and `chapter.json → pdfs` was dropped. Everything below that says "see the PDF" is now a **to-do**: draw those graphs and diagrams as small inline SVGs next to `notes.md` and reference them from `chapter.json → diagrams`. Until then the "(graph: see the PDF)" placeholders in the Markdown should be replaced by a one-line description of the curve.


Boards only. Board paper: **Sat 27 Feb 2027** (gap days 17–26 Feb after Physics on 16 Feb).

**Status (14 Nov 2026): Phase 1 import done.** All 10 chapters have `chapter.json`, `notes.md`, `formulas.md` and `questions.json` (98 questions). LaTeX sources for the formula sheet (Parts 1–3), must-have notes (Batches 1–3) and Expert Q&A Sheets 1–6 are in `latex/class-12/chemistry/`.

## Syllabus calls used (checked 14 Nov 2026; reconfirm on cbseacademic.nic.in)
- 10 units, theory 70: Solutions 7 · Electrochemistry 9 · Chemical Kinetics 7 · d- and f-Block 7 · Coordination Compounds 7 · Haloalkanes & Haloarenes 6 · Alcohols, Phenols & Ethers 6 · Aldehydes, Ketones & Carboxylic Acids 8 · Amines 6 · Biomolecules 7. Physical 23 / Inorganic 14 / Organic 33.
- Not in board theory: Solid State, Surface Chemistry, Isolation of Elements, p-Block, Polymers, Chemistry in Everyday Life. The syllabus says some of these are assessed only formatively in school.
- Unit 4 includes: position, configuration, general properties, important compounds (K2Cr2O7, KMnO4), lanthanoids, actinoids, applications. Unit 5 includes: Werner, definitions, nomenclature, isomerism, bonding (VBT, CFT), metal carbonyls, importance and applications.
- Units 6–10 as listed in the 2026–27 syllabus: Ch 6 includes polyhalogen compounds; Ch 7 includes commercially important alcohols; Ch 8 includes uses of aldehydes, ketones and acids; Ch 9 includes diazonium salts (preparation, properties, reactions, importance); Ch 10 = carbohydrates, proteins, enzymes, vitamins, nucleic acids, hormones.
- Paper (no change for 2026–27, per the official SQP): 33 Qs, 3 h. A: 16 × 1 (12 MCQ + 4 A–R) · B: 5 × 2 · C: 7 × 3 · D: 2 × 4 case-based · E: 3 × 5. Internal choice in about 33% (one Q in B and one in C, part III of each case, all three in E). Weightage: remember/understand 40%, apply 30%, analyse/evaluate 30%.
- Practical 30: volumetric 8 · salt analysis 8 · content-based experiment 6 · project 4 · record and viva 4. Volumetric = KMnO4 vs oxalic acid and vs Mohr's salt.
- Official sample paper 2026–27: https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/Chemistry-SQP.pdf (linked from `subject.json → links.sample_paper`; not copied into the repo).

## Done

### On the site (`content/class-12/science/chemistry/ch-01 … ch-10`)
| Chapter | notes.md | formulas.md | questions.json |
|---|---|---|---|
| 1 Solutions | ready | ready | 7 |
| 2 Electrochemistry | ready | ready | 8 |
| 3 Chemical Kinetics | ready | ready | 7 |
| 4 d- and f-Block | ready | ready | 9 |
| 5 Coordination Compounds | ready | ready | 10 |
| 6 Haloalkanes and Haloarenes | ready | ready | 9 |
| 7 Alcohols, Phenols and Ethers | ready | ready | 10 |
| 8 Aldehydes, Ketones and Carboxylic Acids | ready | ready | 19 |
| 9 Amines | ready | ready | 11 |
| 10 Biomolecules | ready | ready | 8 |

- **notes.md**: converted from the must-have notes. Exact §4 headings; every star, type tag, mark and `SQP 26–27` tag kept. The "Why/reason" answers sit under *Answer skeletons* as a sub-section. The traps are one `:::tip` box.
- **formulas.md**: the chapter's section of the formula & facts sheet, plus its board checklist. Ch 1–3 also carry the constants and conversions list. Ch 6–10 carry their own named reactions (split by chapter from the master table) and the full shared organic revision tables (distinguishing tests, orders, conversion chains, top "give reason" answers), repeated in each of the five chapters.
- **questions.json**: from Expert Q&A Sheets 1–5 (22 + 19 + 19 + 19 + 19). All labelled `PYQ-style`. Model answers and step-mark schemes come straight from the answer sections; the build script confirms every scheme adds up. Sheet 1's numerical answers were re-computed by script when the sheet was written. `source_note` gives the sheet and question number.
- **chapter.json → pdfs**: notes batch and formula sheet part with the chapter's page, the organic revision page (Ch 6–10), the matching Q&A sheet, and the Sheet 6 solutions.

### Printable PDFs (`latex/class-12/chemistry/`, compiled by the Action to `pdfs/class-12/chemistry/`)
1. `chemistry-formula-sheet-part1-physical` (3 pages), `-part2-inorganic` (3 pages), `-part3-organic` (5 pages; page 4 = named reactions, tests, orders, conversions, reasons).
2. `chemistry-notes-batch1-physical` (8 pages), `-batch2-inorganic` (6 pages), `-batch3-organic` (12 pages). Each has a cover page (how to use, star legend, step-mark habits, "N that keep coming back") and a whole-subject progress tracker on the last page.
3. `chemistry-qa-sheet1-physical` (22 Qs, 50 marks, 90 min), `-sheet2-inorganic`, `-sheet3-organic-a` (Ch 6–7), `-sheet4-organic-b` (Ch 8), `-sheet5-organic-c` (Ch 9–10) (19 Qs, 42 marks, 75 min each). Questions first, answers with step marks on a separate page.
4. `chemistry-qa-sheet6-sqp-2026-27-solutions` (2 pages): our own solutions to the official 2026–27 sample paper, keyed to question numbers only (the one-line question reminders were removed for the repo). Both alternatives of every internal choice.
   - **Limits:** written from a text copy of the paper without figures. Answers tagged CHECK need the paper's figure, table or options: Q1 (exact options), Q5 (Fig. 1), Q19(I) (DNA strand), Q27A(I) (structure), Q29(II) (pKa graph), Q33A(I)(b) (concentration table).
   - **To verify against CBSE's marking scheme:** Q28(I) (exact Raoult gives 1.8 g/mol; dilute shortcut 3.6), Q31B(I)(b) (acid vs ester order), Q32A(II) ([Ni(CO)4] vs [Ni(H2O)6]2+ splitting).
- Shared preamble: `latex/class-12/preambles/chemistry-preamble.tex` (unit colours uI–uX, mhchem, TikZ `\minigraph`, boxes). The notes and Q&A sources define their extra macros at the top of each file (`\chapterhead`, `\st`, `\ty`, `skel`, `rqlist`, `\ob`, `\Q`, `\An`, `\secbar`).

### Labelling rules used
- Stars in the notes (★★★ / ★★ / ★) are estimates from recurring board and sample-paper patterns, not counts.
- `SQP 26–27` = question type in the official 2026–27 sample paper. Batches 2 and 3 of the notes carry no SQP tags (not re-verified).
- Q&A Sheets 1–5: every question is PYQ-style (own wording, no year labels). Step-mark splits are estimates of the usual CBSE scheme.
- **Stars in questions.json were assigned at import**, by matching each question to the star rating of its question type in the chapter's notes. The Q&A sheets themselves carry no stars. Review if the practice view sorts by stars.

## Not converted to the web (PDF only)
- **Graphs and diagrams (TikZ):** Ch 1 vapour-pressure curves (ideal, positive, negative deviation) and the p–T curve for boiling-point elevation; Ch 2 Λm vs √c; Ch 3 the four kinetics plots, energy profile with catalyst, Maxwell–Boltzmann curves; Ch 5 cis/trans drawing and crystal-field splitting diagrams. The Markdown shows "(graph: see the PDF)" at each spot; `chapter.json → pdfs` gives the page. No `diagrams[]` entries yet.
- **Orbital-box diagrams (Ch 5)** are written as text boxes (`[↑↓]`, `[××]` = ligand pair), not drawings.
- **Mechanisms and ring structures** are in words and condensed formulas, as in the sources; no structure drawings exist anywhere yet.
- **Notes cover pages and the progress tracker** (how to use, step-mark habits, time per question, "that keep coming back" lists).
- **Formula sheet headers** (unit marks, paper pattern, practical scheme): already held in `subject.json` and `data/patterns/class-12/chemistry.json`.
- **Q&A sheet extras:** the "where a 70/70 script wins marks" boxes and score boxes.
- **Sheet 6** has no web form (no `papers/` JSON): it is solutions to a paper we do not reproduce.

## Corrections
- **14 Nov 2026 (import): organic PDFs.** The earlier PDFs of formula sheet Part 3 and notes Batch 3 dropped every α and β (for example "α-H", "β-D-glucose") and garbled a few equations with `>C=O` or `R'`. The sources here are fixed and compile without errors; use the PDFs built from this repo, not the older copies.
- **14 Nov 2026 (import): Sheet 6** is now 2 pages (question reminders removed).
- **Tooling:** `scripts/build-index.mjs` crashed on the first `notes.md` (a constant was used before it was defined). Fixed in its own commit; no other tooling or app code was touched.

## To verify
- Picric acid pKa: formula sheet Part 3 and notes Ch 7 say 0.5; check against the NCERT table and correct both the `.tex` and the Markdown if needed.
- `data/patterns/class-12/chemistry.json` says internal choice in 2 questions each of Sections B and C; the sample paper as read has one each (Q17, Q27). Confirm against the official SQP.
- How the pages look on a phone: the Markdown was checked by rendering every formula with KaTeX/mhchem and every table with the site's Markdown parser, but not by eye in the app.

## What's next
1. **Practical sheet (30 marks):** salt analysis scheme, KMnO4 titrations (oxalic acid, Mohr's salt), content-based experiments, project ideas, viva questions.
2. **More questions per chapter:** Ch 1–7, 9 and 10 have 7–11 each; add chapter-wise practice sets, starting with Organic.
3. **Diagrams as SVG** for the items listed above, then fill `chapter.json → diagrams`.
4. **Sheet 6:** with the official SQP PDF and marking scheme in hand, finish the six CHECK answers and settle the three flagged ones.
5. **Past papers** (2025, 2026) solved with `PYQ (year)` labels, and full-length timed papers under `papers/` for the 17–26 Feb window.
