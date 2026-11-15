# Class 12 Science · Biology — status

Paper: **Thu 25 Mar 2027** (date sheet of 6 Nov 2026). Biology-only days 10–24 Mar after Maths (9 Mar).

## Syllabus and pattern calls used (checked 14 Nov 2026; reconfirm on cbseacademic.nic.in)
- 5 units, 13 chapters, theory 70: VI Reproduction 16 · VII Genetics and Evolution 20 · VIII Biology and Human Welfare 12 · IX Biotechnology 12 · X Ecology 10. Practicals 30 (see `subject.json → internal_note`).
- Not in board theory: Reproduction in Organisms, Strategies for Enhancement in Food Production, Environmental Issues (formative only). Ecology part-deletions (organism and its environment / abiotic factors / adaptations, succession, nutrient cycling, ecosystem services) are left out of Ch 11–12.
- Unit VI is fully retained. ZIFT/GIFT are "elementary idea".
- Paper (no change for 2026–27, per SQP): 33 Qs · A 16 × 1 (12 MCQ + 4 A–R) · B 5 × 2 · C 7 × 3 · D 2 × 4 case · E 3 × 5; internal choice ≈ 33 %. Competency mix 50/30/20.
- MTP law is written as NCERT states it (MTP (Amendment) Act 2017: ≤ 12 weeks one RMP, 12–24 weeks two RMPs), with a tip telling students to write the NCERT version.
- Biology `formulas.md` = the few quantitative relations plus "facts to remember" tables; titled `:::formula` boxes are counts/rules students must reproduce.

## Done
- **Batch 1 — Unit VI (Ch 1–3), 14 Nov 2026.** All five files per chapter. Converted from the project's Batch-1 LaTeX notes (biology-notes-batch1-reproduction-source.tex) into the three layers.
  - Ch 1 Read: 5 inline SVGs (microsporangium T.S., pollen grain, anatropous ovule, embryo sac, dicot + monocot embryos). Ch 2 Read: 4 SVGs (seminiferous tubule, sperm, ovary follicle stages, 28-day hormone/endometrium graph). Ch 3: tables only.
  - Questions: 10 per chapter (3 MCQ, 2 A–R, 2 × 2-mark, 1 × 3-mark, 1 case 4-mark, 1 × 5-mark), all PYQ-style.

- **Batch 2 — Unit VII (Ch 4–6), 14 Nov 2026.** All five files per chapter, written from NCERT (rationalised) and board patterns.
  - Ch 4 Read: pedigree-symbols SVG; Punnett squares and ABO, sex-determination and chromosomal-disorder tables in Markdown. Ch 5 Read: replication-fork SVG and lac-operon SVG. Ch 6 Read: stabilising/directional/disruptive selection SVG; Hardy–Weinberg worked example.
  - formulas.md: Mendelian ratios, X-linked and autosomal recessive cross outcomes (Ch 4); DNA length, Chargaff, codons, Meselson–Stahl table (Ch 5); Hardy–Weinberg (Ch 6).

- **Batch 3 — Units VIII–IX (Ch 7–10), 14 Nov 2026.** All five files per chapter.
  - Ch 7 Read: Plasmodium life-cycle SVG and antibody (H₂L₂) SVG; disease/pathogen table. Ch 8 Read: sewage-treatment flow SVG; microbe → product table. Ch 9 Read: pBR322 map SVG and PCR-cycle SVG. Ch 10: tables only (cry genes, transgenic-animal uses).

- **Batch 4 — Unit X (Ch 11–13), 14 Nov 2026.** All five files per chapter. Deleted parts left out and flagged at the top of the Read and Must-know files: Ch 11 "Organism and its environment" (abiotic factors, responses, adaptations); Ch 12 succession, nutrient cycling, ecosystem services.
  - Ch 11 Read: age-pyramid SVG and J/S growth-curve SVG; interactions table. Ch 12 Read: energy/biomass pyramid SVG; decomposition steps; 10 % law example. Ch 13 Read: species–area SVG; Evil Quartet; NCERT protected-area figures with a tip that real numbers have grown.
- **All 13 chapters now have Read, Must know, formulas and 10 practice questions each (130 questions).** Checked: build-index passes with 0 warnings; every SVG rendered and inspected; chapter page checked in headless Chrome (390 px).

- **Interactive pass (CLAUDE.md §4c), 14 Nov 2026 — all 13 chapters done.** Each chapter has `cards.json` (10–13 cards: figure refs, formula tex + legend, process/compare chains, mnemonics) and blocks in notes.md placed where the idea is taught:
  - Ch 1: 5 `ng-figure` (microsporangium, pollen, ovule, embryo sac, embryos) + 4 `ng-draw`; `ng-steps` for microsporogenesis, embryo-sac development, hybridisation, pollen-tube path, double fertilisation, embryo stages; `ng-compare` (pollination kinds, dicot vs monocot embryo, albuminous seeds, apomixis/polyembryony/parthenocarpy); `ng-fill` ploidy; 6 mnemonics.
  - Ch 2: 4 `ng-figure` (tubule, sperm, ovary, 28-day cycle) + 3 `ng-draw`; steps for oogenesis, cycle phases, fertilisation→implantation, parturition; compare/fill tables; 5 mnemonics (SEVEN UP, IAI, Leydig–LH…).
  - Ch 3: new `ng-figure` fertile-window bar; fills (contraceptives, MTP rule), compares (vasectomy/tubectomy, ART); IVF–ET steps; 5 mnemonics.
  - Ch 4: new monohybrid-cross `ng-figure` (+ Punnett `ng-fill`, `ng-draw`), pedigree symbols `ng-figure`; `ng-numerical` F2 dwarf count and dihybrid class count; dihybrid and sickle-cell steps; fills (ABO, sex determination, chromosomal disorders); 4 mnemonics.
  - Ch 5: `ng-figure` replication fork, lac operon and a new transcription unit (each with `ng-draw`); `ng-numerical` Chargaff and DNA length; steps for Griffith, Hershey–Chase, Meselson–Stahl, hnRNA processing, translation, lac switch, fingerprinting; 6 mnemonics.
  - Ch 6: new Miller-apparatus `ng-figure` + `ng-draw`; selection curves `ng-figure` + `ng-draw`; `ng-numerical` carrier frequency; `ng-graph` p², 2pq, q² vs q; steps (Miller, peppered moth, human line); compares and ancestor `ng-fill`; 4 mnemonics.
  - Ch 7: Plasmodium life cycle and antibody as `ng-figure` (+ `ng-draw` each); disease table kept for reading + compact pathogen `ng-fill`; HIV replication steps; compares (innate/acquired, active/passive, humoral/CMI, benign/malignant); drugs `ng-fill`; 6 mnemonics.
  - Ch 8: sewage flow `ng-figure` + steps + `ng-draw`; new biogas-plant `ng-figure` + `ng-draw`; fills (industrial products, biocontrol), compares (primary/secondary treatment, distilled drinks, biofertilisers); curd and penicillin steps; 5 mnemonics.
  - Ch 9: new EcoRI sticky-ends `ng-figure`, pBR322 and PCR `ng-figure`, new stirred-tank bioreactor `ng-figure` (each with `ng-draw`); `ng-numerical` PCR copies ($N_0 2^n$); steps (GMO, gel, insertional inactivation, competence, rDNA process, downstream); fills (EcoRI name, lysis enzymes), compares (exo/endo, antibiotic vs blue–white, Ti plasmid vs retrovirus); 3 mnemonics.
  - Ch 10: new insulin (pro-insulin → A + B) `ng-figure` + `ng-draw`; steps (Bt toxin, RNAi, Humulin, ADA gene therapy); fills (cry genes, transgenic uses), compares (PCR/probe/ELISA, GEAC vs patents); 3 mnemonics.
  - Ch 11: age pyramids and J/S curves as `ng-figure` (+ `ng-draw` each); `ng-graph` exponential vs logistic with r, K, N₀ sliders and presets; `ng-numerical` per capita birth rate and logistic dN/dt; interactions `ng-fill`; compares (pyramid shapes, J vs S, commensalism vs mutualism); prickly-pear steps; 3 mnemonics.
  - Ch 12: energy/biomass pyramids `ng-figure` + `ng-draw`; `ng-numerical` NPP and 10 % law; decomposition steps; compares (GPP/NPP, decomposition rate, GFC/DFC); pyramid-shapes `ng-fill`; 4 mnemonics.
  - Ch 13: species–area `ng-figure` + `ng-draw`; `ng-graph` log S vs log A with C and Z sliders (presets Z = 0.15 / 0.9 / 1.15); `ng-numerical` k-fold area → $k^Z$ species; fills (levels, latitudinal birds, Evil Quartet), compares (in situ/ex situ, three reasons to conserve); rivet-popper steps; 5 mnemonics.
  - Totals: 143 cards; 223 blocks: 30 `ng-figure` (8 newly drawn: fertile window, monohybrid cross, transcription unit, Miller apparatus, biogas plant, EcoRI sticky ends, bioreactor, insulin; the other 22 converted from the earlier inline figures), 26 `ng-draw`, 40 `ng-steps`, 54 `ng-mnemonic`, 35 `ng-compare`, 24 `ng-fill`, 11 `ng-numerical`, 3 `ng-graph`. No `ng-derive` (Biology has no 5-mark derivations). Checked in headless Chrome: every block reaches "ready" (none fails) and every chapter deck opens.

- **Exam bank to 4 fresh papers (15 Nov 2026).** Answer-script model answers (CLAUDE.md §5), each written one with a hint; diagram questions carry a labelled SVG.
  - Batch A (Unit VII): +7 sa3 (snapdragon cross, colour-blind cross, Meselson–Stahl, genetic code, nucleosome with SVG, natural selection, selection graphs) and +5 MCQ. Bank check after it: 2 fresh paper(s); next: 3-mark +16 · 5-mark +11 · MCQ +4 · 2-mark +2.

## Corrections
- Ch 1 pollen-grain germ-pore leader moved to an actual gap in the exine.
- Ch 1–3 interactive commit landed on main with the message "biology: rebuild index" (a rebase hiccup); content is correct.

## What's next
1. **More practice**: raise each chapter to 6+ MCQ/A–R (live quizzes draw on them) and add 2–3 more case questions per unit.
2. **Practicals (30 marks)**: the experiments in the 2026–27 practical list (check the syllabus PDF; includes DNA isolation, quadrat study, pollen germination, onion root-tip mitosis), the spotting items and viva questions — not on the site yet.
3. **Diagram polish**: male and female reproductive systems, mammary gland, DNA double helix and nucleosome, tRNA clover leaf, Bt toxin action and RNAi are still described in words only. Draw them as `ng-figure` blocks (parts + `ng-draw`) and add a card for each.
4. **Review pass**: read every Must-know line on a phone in Recall mode; shorten any line over 15 words; make sure every `:::formula` and `:::tip` in mustknow.md has a title, so it becomes a recall card. On the phone, also tap through each chapter's *Label it yourself* and card deck.
5. Full-length timed paper on the 2026–27 pattern (papers/ folder) once a Site chat confirms the exam-mode format.

## Exam mode (Site chat, 15 Nov 2026)
- Live: Subject → Exam mode builds numbered 3-hour papers (P-01, P-02 …) from this subject's questions.json files, to `data/patterns/class-12/biology.json` and the unit marks in subject.json. Every question in the bank can appear; nothing extra is needed per question.
- Bank check: 3-markers are the bottleneck: 13 in the bank, a paper needs 9 (7 + 2 ORs). For 3 fresh papers add about 14 `sa3` and 5 `la5`. More questions = more papers before repeats; each type must keep its pattern marks (MCQ/A–R 1, vsa2 2, sa3 3, case 4, la5 5).
- Fixed set papers (e.g. an SQP-style paper) go in `papers/<id>.json` as references to bank questions (CLAUDE.md §11).

