# Class 12 Science · Physics — status

Boards only. Board paper: **Tue 16 Feb 2027** (first paper of the season). Practical window 1 Jan–13 Feb.

## Syllabus calls used (checked Nov 2026; reconfirm on cbseacademic.nic.in if in doubt)
- CBSE marks: I+II 16, III+IV 17, V+VI 18, VII+VIII 12, IX 7 (theory 70, practical 30). Paper: A 16×1, B 5×2, C 7×3, D 2×4 case, E 3×5. The official 2026–27 SQP says there is no change in design ([SQP](https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/Physics-SQP.pdf), linked from `subject.json`).
- Board only: YDSE fringe width as final expression (no derivation); solenoid qualitative; bar magnet as equivalent solenoid, dipole field and torque on a bar magnet qualitative; single-slit width of central maximum qualitative; metre bridge in practicals only.
- Not in boards (listed in `subject.json → not_in_syllabus`): Van de Graaff, potentiometer, colour code, cyclotron, toroid, Earth's magnetism, hysteresis, eddy currents, LC oscillations, polarisation (Malus, Brewster), Davisson–Germer, radioactivity and decay law, special-purpose diodes (Zener, LED, photodiode, solar cell), transistors, logic gates.
- A–R options used in `questions.json`: (A) both true, R explains A · (B) both true, R does not explain · (C) A true, R false · (D) **both false** (the wording in recent Physics SQPs; Chemistry files use "A false, R true"). Check the option wording on the day.

## Done

### On the site (`content/class-12/science/physics/`)
| Chapter | notes.md (Read) | mustknow.md | formulas.md | questions.json | SVG figures |
|---|---|---|---|---|---|
| 1 Electric Charges and Fields | ready | ready | ready | 13 | 4 |
| 2 Electrostatic Potential and Capacitance | ready | ready | ready | 13 | 4 |
| 3 Current Electricity | ready | ready | ready | 13 | 4 |

- **notes.md**: written fresh as the Read layer (CLAUDE.md §4a): NCERT order, "why" before "what", titled `:::formula` boxes introduced in the text, one worked numerical per concept in `:::skeleton` with step marks, `:::tip` traps where the mistake happens, **In one breath** at the end of every section, inline SVG figures (`currentColor`, unit colour, `#E0B400` highlight). No stars or PYQ tags.
- **mustknow.md**: the six §4b headings; one fact per line as "**Term:** definition"; every formula box and trap titled (they become Recall cards).
- **formulas.md**: the chapter's section of the 2026–27 formula sheet (project file `physics-formula-sheet-source.tex`) with every JEE/NEET tag and entrance box dropped.
- **questions.json**: Ch 1–3 = the 13-question practice sets (5 MCQ, 2 A–R, 1 case with four 1-mark parts, 2 × 2-mark, 2 × 3-mark, 1 × 5-mark), all `PYQ-style` or `NCERT-based`, hints, model answers and step-mark schemes that add up (build check). Every numerical recomputed by script.
- **subject.json**: `not_in_syllabus` filled; `links.sample_paper` points at the official 2026–27 SQP.
- **Source note:** the 30-page must-have notes exist only as a PDF that was not available to this chat. The Must-know files follow its structure (repeated questions with stars, must-know lines, formulas, skeletons, 1-mark facts, traps) and are written from board knowledge; stars are estimates.

## Corrections
- Charge at a cube corner → flux through the whole cube is $q/8\varepsilon_0$ ($q/24\varepsilon_0$ through each of the 3 far faces). An early formula-sheet version said $q/24\varepsilon_0$ for the whole cube; the site files carry the correct value (Ch 1 notes, must-know trap, formulas).

## What's next
1. Units III–IV: Ch 4–7.
2. Units V–VI: Ch 8–10.
3. Units VII–IX: Ch 11–14.
4. Later: derivation drill (every board derivation as a step skeleton with diagram and step marks) and practicals (2026–27 experiment list, aim, formula, observation table, result, 5 viva questions each).
