# Class 12 Science · Physics — status

Boards only. Board paper: **Tue 16 Feb 2027** (first paper of the season). Practical window 1 Jan–13 Feb.

## Syllabus calls used (checked Nov 2026; reconfirm on cbseacademic.nic.in if in doubt)
- CBSE marks: I+II 16, III+IV 17, V+VI 18, VII+VIII 12, IX 7 (theory 70, practical 30). Paper: A 16×1, B 5×2, C 7×3, D 2×4 case, E 3×5. The official 2026–27 SQP says there is no change in design ([SQP](https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/Physics-SQP.pdf), linked from `subject.json`).
- Board only: YDSE fringe width as final expression (no derivation); solenoid qualitative; bar magnet as equivalent solenoid, dipole field and torque on a bar magnet qualitative; single-slit width of central maximum qualitative; metre bridge in practicals only.
- Not in boards (listed in `subject.json → not_in_syllabus`): Van de Graaff, potentiometer, colour code, cyclotron, toroid, Earth's magnetism, hysteresis, eddy currents, LC oscillations, polarisation (Malus, Brewster), Davisson–Germer, radioactivity and decay law, special-purpose diodes (Zener, LED, photodiode, solar cell), transistors, logic gates.
- A–R options used in `questions.json`: (A) both true, R explains A · (B) both true, R does not explain · (C) A true, R false · (D) **both false** (the wording in recent Physics SQPs; Chemistry files use "A false, R true"). Check the option wording on the day.

## Done

**All 14 chapters are on the site (14 Nov 2026; 145 questions after the 15 Nov refresh): 52 figures.**


### On the site (`content/class-12/science/physics/`)
| Chapter | notes.md (Read) | mustknow.md | formulas.md | questions.json | SVG figures |
|---|---|---|---|---|---|
| 1 Electric Charges and Fields | ready | ready | ready | 13 | 4 |
| 2 Electrostatic Potential and Capacitance | ready | ready | ready | 13 | 4 |
| 3 Current Electricity | ready | ready | ready | 13 | 5 |
| 4 Moving Charges and Magnetism | ready | ready | ready | 9 | 4 |
| 5 Magnetism and Matter | ready | ready | ready | 9 | 2 |
| 6 Electromagnetic Induction | ready | ready | ready | 9 | 2 |
| 7 Alternating Current | ready | ready | ready | 9 | 5 |
| 8 Electromagnetic Waves | ready | ready | ready | 8 | 3 |
| 9 Ray Optics and Optical Instruments | ready | ready | ready | 10 | 7 |
| 10 Wave Optics | ready | ready | ready | 9 | 4 |
| 11 Dual Nature of Radiation and Matter | ready | ready | ready | 9 | 3 |
| 12 Atoms | ready | ready | ready | 9 | 2 |
| 13 Nuclei | ready | ready | ready | 8 | 2 |
| 14 Semiconductor Electronics | ready | ready | ready | 9 | 5 |

- **notes.md**: written fresh as the Read layer (CLAUDE.md §4a): NCERT order, "why" before "what", titled `:::formula` boxes introduced in the text, one worked numerical per concept in `:::skeleton` with step marks, `:::tip` traps where the mistake happens, **In one breath** at the end of every section, inline SVG figures (`currentColor`, unit colour, `#E0B400` highlight). No stars or PYQ tags.
- **mustknow.md**: the six §4b headings; one fact per line as "**Term:** definition"; every formula box and trap titled (they become Recall cards).
- **formulas.md**: the chapter's section of the 2026–27 formula sheet (project file `physics-formula-sheet-source.tex`) with every JEE/NEET tag and entrance box dropped.
- **questions.json**: Ch 4–14 = 8–10 new `PYQ-style` questions each (3 MCQ, 1–2 A–R, 1 case with four 1-mark parts, 2-, 3- and 5-markers; Ch 5 has no 5-marker, as it is qualitative for boards). Ch 1–3 = the 13-question practice sets (5 MCQ, 2 A–R, 1 case with four 1-mark parts, 2 × 2-mark, 2 × 3-mark, 1 × 5-mark), all `PYQ-style` or `NCERT-based`, hints, model answers and step-mark schemes that add up (build check). Every numerical recomputed by script.
- **subject.json**: `not_in_syllabus` filled; `links.sample_paper` points at the official 2026–27 SQP.
- **Read-layer length:** prose runs about 1 050–2 850 words per chapter (plus figures). The short, low-mark chapters (5, 8, 11, 12, 13) sit under 1 500 words of prose; expand them if students ask for more depth.
- **Figures:** drawn from code (`currentColor`, unit colour, `#E0B400` highlight); optics ray diagrams and the alpha-scattering paths are computed, so they are to scale.
- **Source note:** the 30-page must-have notes exist only as a PDF that was not available to this chat. The Must-know files follow its structure (repeated questions with stars, must-know lines, formulas, skeletons, 1-mark facts, traps) and are written from board knowledge; stars are estimates.

## Interactive pass (CLAUDE.md §4c)
| Chapter | cards.json | ng-figure (with parts) | other blocks |
|---|---|---|---|
| 1 | 12 | 4 | steps, compare, 3 numerical, 3 graph, 3 mnemonic, derive, fill, 2 draw, explain |
| 2 | 11 | 4 | 4 numerical, 3 graph, 2 mnemonic, derive, compare, fill, 2 draw |
| 3 | 12 | 5 | 4 numerical, 3 graph, 2 mnemonic, 2 derive, steps, compare, fill, 2 draw |
| 4 | 12 | 4 | 3 numerical, 2 graph, 3 mnemonic, 2 derive, steps, compare, 2 draw |
| 5 | 9 | 2 | 2 numerical, graph, 2 fill (replace the two tables), 3 mnemonic, steps, draw, explain |
| 6 | 10 | 2 | 5 numerical, graph, 3 mnemonic, 2 derive, steps, compare, 2 draw |
| 7 | 13 | 5 | 4 numerical, 2 graph, 2 mnemonic, 2 derive, steps, 2 fill, 3 draw, explain |
| 8 | 9 | 3 | 2 numerical, graph, 2 mnemonic, steps, compare, fill (replaces the spectrum table), draw |
| 9 | 13 | 7 | 6 numerical, 2 graph, 2 mnemonic, derive, steps, 2 fill, 2 compare, 6 draw |
| 10 | 10 | 4 | 3 numerical, 2 graph, 2 mnemonic, derive, steps, compare (replaces the table), 2 draw, explain |
| 11 | 9 | 3 | 3 numerical, 2 graph, 2 mnemonic, compare, fill, draw |
| 12 | 8 | 2 | 3 numerical, graph, 2 mnemonic, derive, steps, fill (replaces the series table), 2 draw |
| 13 | 8 | 2 | 3 numerical, graph, 2 mnemonic, steps, compare, 2 draw, explain |
| 14 | 9 | 5 | numerical, graph, 2 mnemonic, 2 steps, fill, 2 compare, 5 draw |

**Interactive pass complete for all 14 chapters (15 Nov 2026): 145 cards, 52 ng-figures, 241 blocks in all.** `bank-check` reports 14/14 decks.

- Every figure in notes.md is now an `ng-figure` with labelled parts (ids = the figure names, e.g. `ch01-dipole`; never rename). Unit colour now comes from `class="u"` / `class="uf"`, not hard-coded hex.
- The block maths has no inverse trig, so angle graphs plot $\sin c=1/n$ and the thin-prism line $\delta=(n-1)A$ (no full δ–i curve).
- Numerical templates show 3 significant figures (no fixed decimals), so tiny SI answers never print as 0.000.
- Numericals use fresh numbers; each answer expression was checked by hand against one random draw.

## Corrections
- Charge at a cube corner → flux through the whole cube is $q/8\varepsilon_0$ ($q/24\varepsilon_0$ through each of the 3 far faces). An early formula-sheet version said $q/24\varepsilon_0$ for the whole cube; the site files carry the correct value (Ch 1 notes, must-know trap, formulas).

## What's next
1. **Exam bank** (`node scripts/bank-check.mjs physics`, 15 Nov 2026 after the weekly refresh): the bank fills **2 fresh papers**; the target is 4. Add **5-mark +12** (thinnest IX 1, VII–VIII 2, V–VI 3), **3-mark +8** (thinnest V–VI 5, III–IV 7, IX 3) and **2-mark +4** (thinnest IX 1, VII–VIII 4). MCQ, A–R and case questions are already enough.
2. **Derivation drill** (Must-know/Practice material): collect every board derivation as a step skeleton; most already exist as `mustknow.md` Answer skeletons and `ng-derive` blocks. Still missing as ng-derive: equatorial dipole field, potential of a dipole, energy stored in a capacitor, I = neAv_d, motional emf, Einstein/photoelectric, nuclear density.
3. **Practicals** (internal 30 marks; window 1 Jan–13 Feb): confirm the 2026–27 list on cbseacademic.nic.in, then aim, formula, observation table, result line and 5 viva questions each.
4. Polish: expand the short Read layers (Ch 5, 8, 11–13) if students want more depth; recheck stars against recent paper analyses.

## Weekly refresh log
- 2026-11-15 · content-check FAIL/WARN for the whole subject 13/133 → 0/82 (touched chapters 0 FAIL) · card fixes: 13 legend symbols too wide, ch 2, 4, 5, 6, 7, 8, 10, 11, 13, 14 · must-know: 35 one-word recall fronts made two-word, 3 lines over 15 words shortened, 10 missing hints (ch 4, 5, 6), ch 13 fission equation stacked · questions added: 5-mark +3 (ch 10, 12, 14), 3-mark +3 (ch 2, 9, 14), 2-mark +2 (ch 6, 7), all answer-script style · fresh papers 1 → 2 (target 4) · left out: wide tables in Read and the formula sheet (ch 1, 3, 7, 8, 9, 12, 14), drawings with labels outside their viewBox (ch 4, 8, 14), missing hints in ch 13 and 14 (the run stops at 10), older written answers not yet in script style (INFO), ch 1 one-word fronts (not touched this run).
