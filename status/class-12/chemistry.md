# Class 12 Science · Chemistry — status

Boards only. Board paper: **Sat 27 Feb 2027** (date sheet of 6 Nov 2026; gap days 17–26 Feb after Physics on 16 Feb).

**Status (14 Nov 2026): all 10 chapters have all four files, polished for recall.** Read notes written, Must know rewritten as flashcards, first set of inline SVG figures drawn, question bank topped up to 125 questions. No PDFs and no LaTeX in the repo; the old LaTeX sources stay in the Claude project as history only.

## Syllabus calls used (checked 14 Nov 2026; reconfirm on cbseacademic.nic.in)
- 10 units, theory 70: Solutions 7 · Electrochemistry 9 · Chemical Kinetics 7 · d- and f-Block 7 · Coordination Compounds 7 · Haloalkanes & Haloarenes 6 · Alcohols, Phenols & Ethers 6 · Aldehydes, Ketones & Carboxylic Acids 8 · Amines 6 · Biomolecules 7. Physical 23 / Inorganic 14 / Organic 33.
- Not in board theory: Solid State, Surface Chemistry, Isolation of Elements, p-Block, Polymers, Chemistry in Everyday Life. The syllabus says some of these are assessed only formatively in school.
- Unit 4 includes: position, configuration, general properties, important compounds (K2Cr2O7, KMnO4), lanthanoids, actinoids, applications. Unit 5 includes: Werner, definitions, nomenclature, isomerism, bonding (VBT, CFT), metal carbonyls, importance and applications.
- Units 6–10 as listed in the 2026–27 syllabus: Ch 6 includes polyhalogen compounds; Ch 7 includes commercially important alcohols; Ch 8 includes uses of aldehydes, ketones and acids; Ch 9 includes diazonium salts (preparation, properties, reactions, importance); Ch 10 = carbohydrates, proteins, enzymes, vitamins, nucleic acids, hormones.
- Paper (no change for 2026–27, per the official SQP): 33 Qs, 3 h. A: 16 × 1 (12 MCQ + 4 A–R) · B: 5 × 2 · C: 7 × 3 · D: 2 × 4 case-based · E: 3 × 5. Internal choice in about 33% (one Q in B and one in C, part III of each case, all three in E). Weightage: remember/understand 40%, apply 30%, analyse/evaluate 30%.
- Practical 30: volumetric 8 · salt analysis 8 · content-based experiment 6 · project 4 · record and viva 4. Volumetric = KMnO4 vs oxalic acid and vs Mohr's salt.
- Official sample paper 2026–27: https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/Chemistry-SQP.pdf (linked from `subject.json → links.sample_paper`; not copied into the repo).

## Done

| Chapter | notes.md (Read) | mustknow.md | formulas.md | questions.json |
|---|---|---|---|---|
| 1 Solutions | ready, 3 figures | ready | ready | 11 (6 MCQ/A–R, 1 case) |
| 2 Electrochemistry | ready, 3 figures | ready | ready | 13 (6 MCQ/A–R, 1 case) |
| 3 Chemical Kinetics | ready, 5 figures | ready | ready | 10 (6 MCQ/A–R, 1 case) |
| 4 d- and f-Block Elements | ready, 0 figures | ready | ready | 12 (6 MCQ/A–R, 1 case) |
| 5 Coordination Compounds | ready, 2 figures | ready | ready | 12 (6 MCQ/A–R, 1 case) |
| 6 Haloalkanes and Haloarenes | ready, 0 figures | ready | ready | 11 (6 MCQ/A–R, 1 case) |
| 7 Alcohols, Phenols and Ethers | ready, 0 figures | ready | ready | 13 (6 MCQ/A–R, 1 case) |
| 8 Aldehydes, Ketones and Carboxylic Acids | ready, 0 figures | ready | ready | 19 (8 MCQ/A–R, 1 case) |
| 9 Amines | ready, 0 figures | ready | ready | 14 (6 MCQ/A–R, 1 case) |
| 10 Biomolecules | ready, 0 figures | ready | ready | 10 (6 MCQ/A–R, 1 case) |

### Read layer (`notes.md`)
- Ten chapters, 2 450–3 600 words each, NCERT order, one idea per `##`, every section ends with **In one breath:**. Worked examples in `:::skeleton` with step marks; traps as `:::tip` where the mistake happens.
- Every `:::formula` box has a title (14 Nov).
- Organic chapters explain mechanisms in order (S$_\text{N}$1/S$_\text{N}$2, hydration and dehydration, nucleophilic addition) with named reactions boxed.
- **Detailed pilot, Ch 4 (15 Nov, admin's test of "how good it can get"):** students read NCERT from the book; the app explains it. Each `##` opens with an *NCERT map* line (sections, tables, figures, examples, intext questions it explains) and the chapter links the official PDF. Added: deeper "why" passages (4s fills first but leaves first; Sc and Ag as transition elements; fluorides and the highest halides; why CuI₂ does not exist; KMnO₄ on heating), a new last section *Where d- and f-block elements are used* (NCERT 4.7), eight own line drawings as `ng-figure` with parts (block position, 3d melting points, radii of 3d/4d/5d, oxidation-state dot chart, E°(M²⁺/M) bars, d–d colour, interstitial lattice, lanthanoid radii), and blocks: `unpaired-from-z` and `moment-from-z` numericals, `tm-vs-s-block` and `chromate-vs-dichromate` compares, `oxide-character` fill, `base-camp-acid-peak` mnemonic, `colour-steps` and `fe-catalysis-steps`, `draw-lanthanoid-radii`, three explains, and an `oxidation-states-3d` card. Prose 3 150 words. Long reactions in Ch 4 notes, Must know and answers are wrapped for 360 px (content-check: 0 FAIL, 0 WARN). **Approved by the admin (15 Nov): the model for every chapter of every subject; the admin will supply each NCERT chapter PDF (otherwise ask, or fetch it from ncert.nic.in).**
- **Detailed pass, Ch 5 (15 Nov, from NCERT lech105):** NCERT map line per section; sections now in NCERT order (stereoisomerism before structural); added Werner's colours and conductivity (1:3, 1:2, 1:1), primary = ionic / secondary = covalent, σ-only rule for coordination number, formula-writing rules, cis/trans of $\ce{[MX2L4]}$, only-cis chirality for $\ce{[PtCl2(en)2]^2+}$ and $\ce{[CrCl2(ox)2]^3-}$, sp³d (CN 5), the d⁴–d⁶ magnetic complications, emerald, square-pyramidal Mn(CO)₅, gold extraction with Zn, chelate therapy. Eleven own drawings as `ng-figure` (coordination polyhedra, chelate ring, isomerism map, cis/trans octahedra, **fac/mer**, **VBT boxes for Co(III) and Ni(II)**, high/low spin d⁴, colour wheel, carbonyl shapes, synergic bonding); new blocks `werner-table`, `werner-ions`, `ligand-names`, `magnetic-pairs`, `moment-to-n`, `strong-pairs-inside`, `colour-absorbed`, `ni-en-colour`, `gold-extraction`, `draw-fac-mer`, `draw-vbt-co`, `draw-synergic`, three explains; card `vbt-boxes-co` (15 cards). content-check: 0 FAIL, 0 WARN.

### Must-know layer (`mustknow.md`), rewritten 14 Nov for Recall
- Exactly the six §4b headings. The old "Case-based angles" heading is gone from all ten files.
- **Must-know lines** and **Quick 1-mark facts**: one fact per line as "**Term:** definition" or "prompt: answer", 15 words or fewer. Lines that held two facts were split.
- **Key formulas**: one titled box per formula or named reaction (6–11 per chapter) with when to use, units and the common slip. The title is the Drill-formulas question.
- **Mark-losing traps**: one titled `:::tip` per trap (6–8 per chapter), so each becomes a recall card.
- **Most-repeated board questions**: cut to the top six lines per chapter (§4b says 3–6), stars and marks only. The old type codes (Df, N, R, Eq, Cmp, MCQ, G …) and `SQP 26–27` markers are removed everywhere.
- **Answer skeletons** kept as they were (code prefixes removed from titles), including the "Why/reason answers" lists. These are reading material, not cards.
- All files are 1 100–1 370 words (build cap 1 400).

### Diagrams (inline SVG, own drawings, `currentColor` + one highlight)
| Chapter | Drawn (in notes.md, and in formulas.md where a placeholder stood) |
|---|---|
| 1 | Fig 1.1 ideal solution (p against x); Fig 1.2 positive and negative deviation; Fig 1.3 elevation of boiling point (p against T) |
| 2 | Fig 2.1 Daniell cell; Fig 2.2 electrolytic cell (molten NaCl), new; Fig 2.3 Λm against √c |
| 3 | Fig 3.2 zero-order plot; Fig 3.3 first-order plots (two); Fig 3.4 energy profile with catalyst; Fig 3.5 distribution of energies at T and T + 10; Fig 3.6 Arrhenius plot; four-plot summary on the formula sheet |
| 5 | Fig 5.1 cis and trans [Pt(NH₃)₂Cl₂]; Fig 5.3 crystal-field splitting, octahedral and tetrahedral |

No "(to be added as SVG)" placeholders remain in any file.

### Practice (`questions.json`), 125 questions
- 98 from Expert Q&A Sheets 1–5 (ids `chem-s…`), plus 27 added 14 Nov (ids `chem-cNN-…`): 22 MCQ/A–R so that every chapter has at least 6 objective questions for live quizzes, and 5 case questions (Ch 1 desalination, Ch 2 corrosion, Ch 4 permanganate titration, Ch 7 fermentation and methanol, Ch 9 azo dyes) written from the old case-based angles. Every chapter now has one case question.
- Every written and case question has a `hint`.
- All labelled `PYQ-style` (own wording; none verified against a year). Step marks are estimates of the usual CBSE split and add up (build check). The one new numerical (Ch 1 case, π = 4.93 atm) was computed by script.
- Stars were assigned by matching each question to the star rating of its question type; estimates.

### Board answers, topper style (started 14 Nov)
- Six questions per chapter (2 × 2-mark, 2 × 3-mark, one 4-mark case, one 5-mark), ids `chem-tNN-qNN`, `topic: "Board answer, topper style"`, in `questions.json` so they appear in Practice with self-marking.
- Each model answer opens with **How much to write** (lines or words and minutes), is written the way a full-marks script looks (given, formula, steps, units, boxed answer, marks in brackets) and ends with **Where marks are lost**. Case questions carry the length line in the stem and the mark-loss note in the hint.
- Own questions on board patterns, labelled `PYQ-style`; no CBSE paper or marking-scheme text. Every numerical computed by script.
- **Answer-script style (15 Nov, after admin review):** answers must read like a real full-marks script, not a list of marked steps. Layout: *How much to write* line in italics → **Given / To find / Formula / Solution** on separate lines, key equations as display maths, boxed final answer → <u>underline</u> on the keywords examiners look for, <mark>highlight</mark> on the one statement or value that wins the mark → labelled inline SVG sketch where a diagram earns marks → a yellow `:::tip Your answer must contain` checklist → one line **Marks are lost for**. Step marks live only in `scheme` (the Mark-yourself ticks), not in the answer text. Case questions get a full top-level `model_answer` as well as `parts`.
- **Phone layout rules (found on review):** one relation per display line; long reaction equations broken after the arrow (`aligned`); chains of "=" stacked with `aligned`; boxed answer on its own line; long fraction labels shortened (obs/calc); `<br>` before **To find:** so it does not run into the Given line.
- **Done in the new style:** all 11 written answers in Ch 1 (the six `chem-t01` plus the older `chem-s1-q09/13/14/21` and the `chem-c01-q04` case), with sketches: U-tube osmosis, reverse osmosis, ideal-solution graph, deviation graphs. **Ch 2–3 converted (15 Nov):** all 23 written answers (sheet questions, the corrosion case, `chem-t02/t03`), with the Λm graph and the catalyst energy profile reused as sketches. **Ch 4–10:** still in the older marked-steps style. **Next:** Ch 4–5, Ch 6–7, Ch 8, Ch 9–10.

### Cards and interactive blocks (CLAUDE.md §4c; decks required from 1 Dec 2026)
| Chapter | cards.json | Blocks in notes.md |
|---|---|---|
| 1 Solutions | 13 cards | figures with parts: ideal solution, deviations, boiling-point elevation, freezing-point depression (new drawing), osmosis (new in Read); 3 draw; 2 graphs (Raoult, make-it-non-ideal); 7 numericals; osmosis steps; compare (positive vs negative deviation); fill (van't Hoff i); 3 mnemonics; 1 explain |
| 2 Electrochemistry | 12 cards (demo, Site chat) | done by the Site chat as the worked demo |
| 3 Chemical Kinetics | 12 cards | figures with parts: concentration–time (new drawing), energy profile, energy distribution; ids on the zero-order, first-order and Arrhenius plots; 3 draw; 2 graphs (zero vs first order, Arrhenius); 5 numericals; 2 steps (order from data, effective collision); compare (order vs molecularity); fill (zero vs first order); 2 derive (zero and first order); 3 mnemonics |
| 4 d- and f-Block | 10 cards | figures with parts: dichromate and permanganate structures (new drawings); draw dichromate; 2 steps (making K₂Cr₂O₇, making KMnO₄); 3 numericals (dichromate–Fe²⁺, permanganate–oxalate, spin-only μ); fill (3d ions and μ); compare (lanthanoids vs actinoids); 3 mnemonics |
| 5 Coordination Compounds | 11 cards | figures with parts: cis/trans [Pt(NH₃)₂Cl₂], isomers of [CoCl₂(en)₂]⁺ (new drawing), crystal-field splitting; 3 draw; 2 steps (naming, VBT answer); 2 numericals (Werner AgCl, Δt); compare (double salt vs complex); fill (hybridisation and shape); 3 mnemonics (incl. the full spectrochemical series) |
| 6 Haloalkanes and Haloarenes | 11 cards | figures with parts: SN2 mechanism (new drawing, also as a 3-stage steps animation), enantiomers of butan-2-ol (new); 2 draw; steps for SN1 and Grignard; fill (which product from KCN/AgCN, KNO₂/AgNO₂, aq/alc KOH); compare (SN1 vs SN2, haloalkane vs haloarene); 3 mnemonics |
| 7 Alcohols, Phenols and Ethers | 11 cards | figure with parts: phenoxide resonance (new drawing); draw it; compare (two hydrations, Kolbe vs Reimer–Tiemann); steps (cumene process, choosing Williamson reactants); 4 fills (acid strength, Lucas test, oxidation products, ether + HI); 3 mnemonics; 1 explain |
| 8 Aldehydes, Ketones, Acids | 12 cards | figures with parts: nucleophilic addition of HCN (new drawing, also as 3-stage steps), carboxylate resonance (new); 2 draw; steps (aldol, identifying an unknown, planning conversions); 4 fills (aldehyde routes, H₂N–Z products, tests, acid strength); compare (Clemmensen vs Wolff–Kishner, aldol vs Cannizzaro); 3 mnemonics; 1 explain |
| 9 Amines | 11 cards | figure with parts: aniline resonance (new drawing); draw it; 6 steps (Gabriel, protecting aniline, diazotisation, azo dye…); pKb numerical; 3 fills (basicity orders, Hinsberg, diazonium replacements); compare (carbylamine vs Hinsberg); 3 mnemonics (do–ek–teen, One Sells/Two Sinks/Three Sleeps, Hoffmann hacks off a carbon) |
| 10 Biomolecules | 13 cards | figures with parts: Haworth α/β-glucose, α-helix and β-sheet, DNA double helix (all new drawings); 3 draw; steps (ring closure, denaturation); Chargaff numerical; 3 fills (glucose evidence, disaccharides, vitamins); 4 compares (starch vs cellulose, fibrous vs globular, DNA vs RNA); 3 mnemonics |

**All 10 chapters now have a deck and interactive blocks.** 15 Nov (after admin review on a phone): every card face rechecked in a 390 px browser; long formulas and reactions split into stacked lines (`gathered`), legend symbols kept to short maths symbols (the site renders the part before `=` as TeX), 29 cards added (145 in all, 14–15 per chapter). Rule for future cards: each formula line ≤ about 22 characters, legend `symbol = meaning` with a real symbol.

- **Note for all subject chats:** block titles, card titles and ng-compare column names are shown as plain text, so they must not contain `$…$` maths (use SN1, H₂O and so on).

## Corrections
- **14 Nov: picric acid p$K_a$.** The value 0.5 could not be confirmed against the NCERT table (which lists the nitrophenols, phenol, cresols and ethanol), so the number was removed from Ch 7 Must know; the order is kept. `formulas.md` for Ch 7 still shows it: check and remove or confirm.
- **14 Nov: Ch 2 figure numbers.** The electrolytic cell is Fig 2.2, so the Λm plot became Fig 2.3.
- **14 Nov: Ch 1 Read.** Figure descriptions 1.4 and 1.5 were shortened and one caption trimmed to stay under the build's 3 600-word limit, because the build counts SVG markup as words (see "For the Site chat").
- **14 Nov (import):** the earlier organic PDFs had dropped α/β and garbled a few equations; the Markdown on the site was made from corrected sources.

## To verify
- `data/patterns/class-12/chemistry.json` says internal choice in 2 questions each of Sections B and C; the sample paper as read has one each. Confirm against the official SQP.
- How figures and boxes look on a phone in light, dark and sepia. Checked here: every formula renders with KaTeX/mhchem, every figure passes the Markdown parser intact, and each SVG was rendered to an image and looked at. Not checked in the app itself.
- Sheet 6 (own solutions to the 2026–27 sample paper, kept in the Claude project, not on the site): six answers tagged CHECK need the paper's figures; three need the official marking scheme.

## Still to draw (SVG to-dos)
- Ch 2: lead storage battery or fuel cell (optional); SHE.
- Ch 5: done 15 Nov (fac/mer and VBT box diagrams are now figures).
- Ch 6: SN1 planar carbocation (optional).
- Organic structures in general (benzene rings, mechanisms with curly arrows) are still condensed formulas and words.

## Practicals (30 marks): nothing on the site yet
Still to make, as content once the site has a place for practicals:
1. **Volumetric analysis (8):** KMnO₄ against oxalic acid and against Mohr's salt: procedure, observation table, calculation template, sources of error.
2. **Salt analysis (8):** scheme for one cation and one anion: preliminary tests, group separation table, confirmatory tests, how to write the record.
3. **Content-based experiment (6):** chromatography, preparation of a double salt or organic compound, tests for functional groups, tests for carbohydrates/fats/proteins: aim, steps, result.
4. **Project (4):** ten workable ideas with what to measure and how to present.
5. **Record and viva (4):** viva question bank by experiment (about 100 short questions with answers).

## For the Site chat (not done here: subject chats do not edit scripts or app code)
- `scripts/build-index.mjs` counts SVG markup as words in the notes length check, so a chapter with several figures can trip the 3 600-word warning. Suggest stripping `<figure>…</figure>` before counting.
- Recall cards built from titled traps show the mistake as the answer. If the card should show the fix, the trap bodies need a second sentence; say so and the chemistry traps can be extended.

## What's left, in order
1. Detailed NCERT-map + figures pass (done: Ch 4, Ch 5): Ch 1–3 and 6–10 as the admin sends each NCERT PDF.
2. Board answers in answer-script style: convert Ch 4–10 written answers (Ch 1–3 done), then new topper sets for Ch 4–10.
3. The remaining optional SVG to-dos above (SHE).
4. About 11 more `la5` (5-mark) questions so exam mode can build 3 papers without repeats; then more practice per chapter, especially numericals for Ch 1–3 and conversions for Ch 6–9 (most chapters have 10–14 questions; Ch 8 has 19).
5. Practical help (list above).
6. Past papers solved with verified `PYQ (year)` labels, and full-length timed papers under `papers/` for 17–26 Feb.
7. The items under "To verify", and the picric acid value in Ch 7 `formulas.md`.

## Exam mode (Site chat, 15 Nov 2026)
- Live: Subject → Exam mode builds numbered 3-hour papers (P-01, P-02 …) from this subject's questions.json files, to `data/patterns/class-12/chemistry.json` and the unit marks in subject.json. Every question in the bank can appear; nothing extra is needed per question.
- Bank check (weekly refresh, 22 Nov 2026): 156 questions. 5-markers 17 in the bank (a paper needs 6): 2 fresh papers now, target 4. Add next: 7 `la5`, then 4 `sa3`, 2 `mcq`. Each type must keep its pattern marks (MCQ/A–R 1, vsa2 2, sa3 3, case 4, la5 5).
- Fixed set papers (e.g. an SQP-style paper) go in `papers/<id>.json` as references to bank questions (CLAUDE.md §11).

## Weekly refresh log

- **2026-11-15 (weekly refresh, unattended):** content-check FAIL/WARN **19 / 175 → 0 / 49**. Fixed: 19 FAILs (reaction lines in the formula sheet too wide for the phone, stacked with `gathered`; raw maths in two Ch 6 headings; card legend and formula widths in Ch 8, 9; vitamins card in Ch 10). Chapters with stacked reactions: Ch 2, 3, 4, 6, 7, 8, 9, 10. One-word recall fronts renamed in Ch 1, 2, 3, 5, 6, 7, 9, 10; long must-know lines shortened in Ch 3, 5, 8. Questions added: 2 `la5` (Ch 6 S$_\text{N}$1/S$_\text{N}$2 and Ch 4 lanthanoid contraction), 2 `sa3` (Ch 5 [Co(NH₃)₆]Cl₃, Ch 10 sucrose), 2 `mcq` (Ch 1 boiling point, Ch 2 ΔG°). Bank 143 → 149 questions; fresh papers 2 → 2 (one new question per type does not yet make a fresh paper).
  - Left out this run: formula-sheet tables wider than the phone (16, mostly multi-column tables in Ch 2, 5, 6, 7, 8, 9); card backs over four lines (about 8); SVG labels under 9 px (Ch 2 Daniell card, Ch 6 SN2, Ch 7 phenoxide, Ch 8 HCN addition and carboxylate, Ch 9 aniline); a few tables in Read (Ch 3, 5, 6, 7). These need redrawn or re-laid tables, not stacking, so they wait for a session with time for the drawings.
  - Removed a stray legend on the Ch 9 basicity card (`CH₃ = methyl order 2° > 1° > 3° > NH₃`) which did not match the card's order. The card's own order (diethylamine > triethylamine > ethylamine > NH₃ in water) is kept. **To verify against NCERT before the next run.**
  - Ch 8 Rosenmund and Etard card legends shortened to a short symbol (Pd, Cr) so they fit the symbol column; meaning kept.
  - Still in the older marked-steps answer style: Ch 4–10 (INFO lines), as the board-answer plan says.
- **2026-11-22 (weekly refresh, unattended):** content-check FAIL/WARN **0 / 51 → 0 / 32** (whole subject). In the chapters touched (Ch 1–6, 8, 10) **0 FAIL, 7 WARN** are left (Ch 3 and Ch 6 tables, Ch 5 and Ch 10 drawing labels, see below). Fixed: card backs cut to 4 lines or fewer (Ch 1 ×3, Ch 2 ×2, Ch 8 ×2); SVG labels raised to 11 px (Ch 2 Daniell cell, Ch 6 SN2 transition state, Ch 8 HCN addition and carboxylate); Ch 2 cell-emf numerical stacked with `gathered`; Ch 1 van't Hoff formula shortened and stacked; Ch 6 haloarene table cell shortened. Questions added, all PYQ-style in answer-script style: `la5` ×2 (Ch 3 Arrhenius and $E_a$, Ch 5 $\ce{[Fe(CN)6]^4-}$ and $\ce{[FeF6]^3-}$), `sa3` ×2 (Ch 4 Cu⁺, Mn³⁺, Fe³⁺; Ch 6 products of 2° halide, 3° halide and Grignard), `mcq` ×2 (Ch 2 charge for Al³⁺, Ch 4 spin-only μ), `vsa2` ×1 (Ch 10 nucleoside and nucleotide). Bank 149 → 156 questions; fresh papers 2 → 2 (target 4). Checked by computation: $E_a$ = 53.6 kJ mol⁻¹ for 300 → 310 K; μ = √35 = 5.92 BM and √24 = 4.90 BM; 3 × 96 500 C = 2.895 × 10⁵ C; E°cell (Cu disproportionation) = 0.52 − 0.15 = +0.37 V. Left out, and why: 16 formula-sheet tables wider than the phone (multi-column, need re-laying, not stacking); Ch 6 SN1/SN2 and haloarene tables (about 310–336 px); Ch 3 Experiment table (368 px); SVG labels under 9 px in Ch 5 (coordination and crystal-field cards), Ch 7 and Ch 9 (resonance drawings) and Ch 10 (DNA helix), which need redrawn figures with larger text; Ch 9 coupling card back (6 lines); Ch 4–10 written answers still in the older style, as noted above.
