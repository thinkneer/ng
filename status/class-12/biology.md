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
  - Batch B (Units VII–VIII): +4 la5 (sex determination + chromosomal disorders, transcription, DNA double helix with a new SVG + Chargaff, human evolution + drift), +4 sa3 (HIV, typhoid/pneumonia/filariasis, microbial products, biofertilisers), +1 vsa2 (cheese), +2 MCQ. Bank check after it: 2 fresh paper(s); next: 3-mark +12 · 5-mark +7 · MCQ +2 · 2-mark +1.
  - Batch C (Units VIII–IX): +4 la5 (cancer, biogas plant with SVG + biocontrol, rDNA steps + disarmed vectors, Bt cotton + GEAC), +4 sa3 (blue–white selection, DNA isolation, molecular diagnosis, gene therapy), +1 vsa2 (insulin maturation with SVG), +2 MCQ. Bank check after it: 3 fresh paper(s); next: 3-mark +8 · 5-mark +3.
  - Batch D (Units VI and X): +8 sa3 (pollen grain, outbreeding devices, sperm, seminiferous tubule, MTP, age pyramids, GFC vs DFC, hotspots + in/ex situ; four with SVGs), +3 la5 (microsporangium + apomixis, menstrual cycle with graph, latitudinal gradient + why conserve). Task 1 complete: 175 questions (48 MCQ, 26 A–R, 28 vsa2, 36 sa3, 13 case, 24 la5). Bank check after it: 4 fresh paper(s); next: nothing; the bank meets the target.
- **Missing board diagrams (15 Nov 2026).** Eight new `ng-figure` blocks with tappable parts, each with an `ng-draw` and a figure card (our own drawings): Ch 2 male reproductive system, female reproductive system, mammary gland; Ch 5 DNA double helix (antiparallel, 3.4 nm / 10 bp / 0.34 nm), nucleosomes, tRNA clover leaf; Ch 10 Bt toxin action, RNAi in tobacco. Ch 5 deck kept at 15 by folding the old nucleosome formula card into the new figure card. All blocks render (checked in headless Chrome).
- **Must-know recall fronts (15 Nov 2026).** Every Must-know line now has a prompt of at least two words in NCERT terms (154 one-word fronts rewritten, e.g. "Tapetum of anther:", "ZIFT method:", "Gross primary productivity:"); the two lines that held two facts (genotype/phenotype, exons/introns) are split; no line is over 15 words; abbreviations in Ch 3 ART lines now carry their full forms. Each file is 670–1,010 words (rereadable in about 5 minutes). Corrected GEAC to "Genetic Engineering Approval Committee" (Must know and Read). Rewritten lines start fresh in Recall (card ids follow the line text).
- **Answer-script conversion (15 Nov 2026).** Old-style written answers rewritten in answer-script style (length line, underlined keywords, one highlighted mark-winner, "Your answer must contain" checklist, "Marks are lost for"); every case question now has a hint and a full top-level model answer. Schemes unchanged.
  - Unit VI (Ch 1–3): 15 questions done (ovule answer now carries the labelled SVG; oogenesis as a stacked list, not wide maths).
  - Unit VII (Ch 4–6): 15 questions done (transcription-unit and lac-operon SVGs added to those answers; the pesticide case shows the selection graphs). All Punnett squares are now KaTeX arrays: the table-header style uppercased allele letters (r → R) and the dihybrid table was too wide for a phone.
  - Unit VIII (Ch 7–8): 10 questions done (antibody, Plasmodium and sewage SVGs added to those answers).
  - Unit IX (Ch 9–10): 10 questions done (EcoRI, PCR, pBR322, RNAi and insulin SVGs added to those answers).
  - Unit X (Ch 11–13): 15 questions done (growth-curve, pyramid and species–area SVGs added). Task complete: all 65 original written/case answers converted; all 13 case questions have hints; no written question lacks a hint.
- **Practicals (15 Nov 2026).** 2026–27 list confirmed from the CBSE curriculum PDF (Biology_SrSec_2026-27, via the KVS mirror of it; cbseacademic.nic.in itself was not reachable from the build machine — recheck there): 5 experiments + 11 study-and-observe (spotting) items; scheme: major experiment 5, minor 4, slide preparation 5, spotting 7, record + viva 4, project 5. Admin decision: a new **Practicals unit (id P, 0 theory marks)** in subject.json, so exam papers stay theory-only. Five chapters, each with notes (aim, principle, materials, procedure as `ng-steps`, observation table, result, precautions), mustknow (viva questions as the most-repeated list, answers as recall lines), formulas and cards (9–13):
  - `ch-14`: pollen germination (sucrose + boric acid), germinating-pollen `ng-figure` + `ng-draw`, % germination `ng-numerical`.
  - `ch-15`: density and frequency together; quadrat `ng-figure`, worked skeleton, two `ng-numerical`.
  - `ch-16`: onion root-tip squash (fix, 1N HCl at about 60 °C, aceto-carmine, squash); stages `ng-figure` + `ng-draw`; stage `ng-fill`; mitotic-index `ng-numerical`.
  - `ch-17`: detergent, salt, protease, chilled ethanol, spooling; set-up `ng-figure` + `ng-draw`; reagent-role `ng-fill`.
  - `ch-18`: all 11 items with identification points; blastula `ng-figure` + `ng-draw`; pollination-agents and testis-vs-ovary compares; pathogen and ratio fills.
- **Phone check clean (15 Nov 2026).** `node scripts/content-check.mjs biology` now reports **0 FAIL · 0 WARN** (it started at 84 FAIL · 47 WARN):
  - 78 card fronts restacked one step/item per line (`gathered`); one KaTeX error fixed (ch09-competence); 7 legend symbols shortened; 7 long card backs cut to ≤ 4 phone lines.
  - Wide tables: 3–4-option compares turned into 2-column `ng-fill` blocks with the same ids (pollination kinds, apomixis, biofertilisers, molecular diagnosis, age pyramids, why conserve, pollination agents, pathogens); 4-column fills merged to 3 (sex determination, ancestors, interactions); long single words given soft hyphens; the Ch 7 disease table, two answer tables and two formula-sheet tables became short lists; practical observation tables cut to 3 columns.
  - Practical display formulas stacked with `aligned`; female-system and biogas drawings now fit their viewBox (also in the bio-08 answer); 3 last one-word fronts renamed (HGP, spleen, Amazon).
- **Practicals: project, record and exam day (15 Nov 2026).** Sixth Practicals chapter `ch-19`: choosing a safe, finishable project (8 syllabus-linked ideas), running it as a fair test (`ng-steps`, change/measure/keep `ng-compare`), project-file and record order (`ng-fill`), viva advice, and the 3-hour exam-day sequence (`ng-steps`) with a what-to-carry list; 4 mnemonics, 9 cards. content-check clean.
- **Live-quiz depth (15 Nov 2026).** +17 A–R (2 each in Ch 1–3 and 11–13, 1 each in Ch 6–10); every chapter now has at least 7 MCQ/A–R, and answers are spread over all four options. Bank: 192 questions (48 MCQ, 43 A–R); still 4 fresh papers.

## Corrections
- Ch 1 pollen-grain germ-pore leader moved to an actual gap in the exine.
- Ch 1–3 interactive commit landed on main with the message "biology: rebuild index" (a rebase hiccup); content is correct.
- Practical chapters renamed from `prac-…` to `ch-14`–`ch-19` (15 Nov evening): a named chapter id makes build-index number chapters per unit, which turned Ch 7 into "Ch 1" on cards. Keep every Biology chapter id in the `ch-NN` form.

## What's next
1. **Practicals**: done for the 2026–27 list (5 experiments, 11 spots, project/record/exam day). Teachers decide locally which experiment is major and the project topic list; add any school-specific experiment as a new `prac-` chapter.
2. **More practice**: MCQ/A–R depth done (≥ 7 per chapter). Next: 2–3 more case questions per unit (each chapter has only one), so papers can vary their case section.
3. **Phone review pass**: content-check is clean; a human tap-through of *Label it yourself*, the decks and Recall on a real phone is still worth doing. Re-run `content-check.mjs biology` before every commit.
4. Optional diagrams: T.S. of a whole anther, pollen-tube growth into the ovule, human embryo/placenta, replication of a retrovirus.
5. A fixed SQP-style paper in `papers/` once the 2026–27 SQP is checked.

## Exam mode (Site chat, 15 Nov 2026)
- Live: Subject → Exam mode builds numbered 3-hour papers (P-01, P-02 …) from this subject's questions.json files, to `data/patterns/class-12/biology.json` and the unit marks in subject.json. Every question in the bank can appear; nothing extra is needed per question.
- Bank check: 3-markers are the bottleneck: 13 in the bank, a paper needs 9 (7 + 2 ORs). For 3 fresh papers add about 14 `sa3` and 5 `la5`. More questions = more papers before repeats; each type must keep its pattern marks (MCQ/A–R 1, vsa2 2, sa3 3, case 4, la5 5).
- Fixed set papers (e.g. an SQP-style paper) go in `papers/<id>.json` as references to bank questions (CLAUDE.md §11).

