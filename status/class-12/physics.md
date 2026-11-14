# Class 12 Science · Physics — status

Boards only. Board paper: **Tue 16 Feb 2027** (first paper of the season). Practical window 1 Jan–13 Feb.

## Syllabus calls used (checked Nov 2026; reconfirm on cbseacademic.nic.in if in doubt)
- CBSE marks: I+II 16, III+IV 17, V+VI 18, VII+VIII 12, IX 7 (theory 70, practical 30). Paper: A 16×1, B 5×2, C 7×3, D 2×4 case, E 3×5. The official 2026–27 SQP says there is no change in design ([SQP](https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/Physics-SQP.pdf), linked from `subject.json`).
- Board only: YDSE fringe width as final expression (no derivation); solenoid qualitative; bar magnet as equivalent solenoid, dipole field and torque on a bar magnet qualitative; single-slit width of central maximum qualitative; metre bridge in practicals only.
- Not in boards (listed in `subject.json → not_in_syllabus`): Van de Graaff, potentiometer, colour code, cyclotron, toroid, Earth's magnetism, hysteresis, eddy currents, LC oscillations, polarisation (Malus, Brewster), Davisson–Germer, radioactivity and decay law, special-purpose diodes (Zener, LED, photodiode, solar cell), transistors, logic gates.
- A–R options used in `questions.json`: (A) both true, R explains A · (B) both true, R does not explain · (C) A true, R false · (D) **both false** (the wording in recent Physics SQPs; Chemistry files use "A false, R true"). Check the option wording on the day.

## Done

**All 14 chapters are on the site (14 Nov 2026): 137 questions, 51 inline SVG figures.**


### On the site (`content/class-12/science/physics/`)
| Chapter | notes.md (Read) | mustknow.md | formulas.md | questions.json | SVG figures |
|---|---|---|---|---|---|
| 1 Electric Charges and Fields | ready | ready | ready | 13 | 4 |
| 2 Electrostatic Potential and Capacitance | ready | ready | ready | 13 | 4 |
| 3 Current Electricity | ready | ready | ready | 13 | 4 |
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

- Every figure in notes.md is now an `ng-figure` with labelled parts (ids = the figure names, e.g. `ch01-dipole`; never rename). Unit colour now comes from `class="u"` / `class="uf"`, not hard-coded hex.
- Numericals use fresh numbers; each answer expression was checked by hand against one random draw.

## Corrections
- Charge at a cube corner → flux through the whole cube is $q/8\varepsilon_0$ ($q/24\varepsilon_0$ through each of the 3 far faces). An early formula-sheet version said $q/24\varepsilon_0$ for the whole cube; the site files carry the correct value (Ch 1 notes, must-know trap, formulas).

## What's next
1. **Derivation drill** (Must-know/Practice material, not a new layer): every board derivation as a numbered step skeleton with the diagram to draw and where step marks go. Most skeletons already exist in each chapter's `mustknow.md → Answer skeletons`; the drill would collect and complete them (e.g. equatorial dipole field, potential of a dipole, Ampère for a solenoid is qualitative only).
2. **Practicals** (internal 30 marks; practical window 1 Jan–13 Feb): confirm the 2026–27 experiment and activity list on cbseacademic.nic.in, then aim, formula, observation table, result line and the 5 most-asked viva questions for each.
3. Polish later: a second round of questions per chapter (target 15+ each, with internal-choice pairs); review stars against recent papers once 2026 paper analyses are checked.

## Exam mode (Site chat, 15 Nov 2026)
- Live: Subject → Exam mode builds numbered 3-hour papers (P-01, P-02 …) from this subject's questions.json files, to `data/patterns/class-12/physics.json` and the unit marks in subject.json. Every question in the bank can appear; nothing extra is needed per question.
- Bank check: 5-markers are the bottleneck: 9 in the bank, a paper needs 6 (3 + their ORs). For 3 fresh papers add about 9 `la5` and 2 `sa3`; spread the 5-markers over Units III–VIII. More questions = more papers before repeats; each type must keep its pattern marks (MCQ/A–R 1, vsa2 2, sa3 3, case 4, la5 5).
- Fixed set papers (e.g. an SQP-style paper) go in `papers/<id>.json` as references to bank questions (CLAUDE.md §11).

