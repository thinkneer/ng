# Ch 14 · Semiconductor Electronics — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ most years · ★★ often · ★ sometimes. Type: `Df` definition · `G` diagram/graph · `R` reason · `Cmp` compare.

1. ★★★ `G` Full-wave (centre-tap) rectifier: circuit, working, input/output waveforms; half-wave too. [3]
2. ★★★ `G` `R` Formation of the p-n junction: diffusion, drift, depletion region, barrier potential. [2–3]
3. ★★ `G` I–V characteristic in forward and reverse bias; dynamic resistance from a graph. [2–3]
4. ★★ `G` `Cmp` Energy band diagrams of conductor, insulator, semiconductor; n- and p-type. [2]
5. ★★ `MCQ` Effect of forward / reverse bias on depletion width and barrier; majority carriers in n- and p-type. [1]

## Must-know lines and definitions

- **Valence band:** band occupied by valence electrons; full at 0 K.
- **Conduction band:** band above the valence band; its electrons are free to conduct.
- **Energy gap:** forbidden energy range between valence and conduction bands.
- **Band gap:** over 3 eV means insulator; under 3 eV, semiconductor (Si 1.1 eV).
- **Intrinsic semiconductor:** pure semiconductor with $n_e=n_h$.
- **Hole in a semiconductor:** vacancy left by an electron in a covalent bond; acts as a positive carrier.
- **Doping of a semiconductor:** adding a tiny amount of impurity to raise conductivity.
- **n-type semiconductor:** doped with pentavalent donors (P, As, Sb); electrons are majority carriers.
- **p-type semiconductor:** doped with trivalent acceptors (B, Al, Ga, In); holes are majority carriers.
- **Depletion region:** layer near the junction with no mobile carriers, only fixed ions.
- **Barrier potential:** potential difference across the depletion region (Si ≈ 0.7 V, Ge ≈ 0.3 V).
- **Forward bias:** p to +, n to −; barrier and depletion width decrease.
- **Reverse bias:** p to −, n to +; barrier and depletion width increase.
- **Rectifier circuit:** circuit that converts AC to unidirectional (pulsating DC) current.

## Key formulas

:::formula Mass action law
$n_en_h=n_i^2$; intrinsic $n_e=n_h=n_i$.
:::

:::formula Dynamic resistance
$r_d=\dfrac{\Delta V}{\Delta I}$.
:::

:::formula Rectifier output frequency
Half-wave $f_\text{out}=f_\text{in}$; full-wave $f_\text{out}=2f_\text{in}$.
:::

## Answer skeletons

:::skeleton G · Full-wave rectifier (3 marks)
Circuit: centre-tap transformer, D₁, D₂, $R_L$ [1] → working in both half-cycles, current in $R_L$ same direction [1] → input and output waveforms [1]
:::

:::skeleton R · p-n junction formation (3 marks)
Diffusion of holes p→n and electrons n→p [1] → fixed ions left: depletion region [1] → field n→p, barrier potential; drift balances diffusion [1]
:::

:::skeleton G · I–V characteristic (2 marks)
Forward: negligible current up to ≈0.7 V, then steep (mA) [1] → reverse: tiny constant µA current, breakdown at high V [1]
:::

## Quick 1-mark facts (MCQ, A–R)

- **Charge of n-type crystal:** neutral.
- **Semiconductor heated:** conductivity increases.
- **Electrons vs holes:** electrons have higher mobility.
- **Donor energy level:** just below the conduction band.
- **Acceptor energy level:** just above the valence band.
- **Current in reverse bias:** due to minority carriers; µA.
- **Current in forward bias:** due to majority carriers; mA.
- **Output frequency, 50 Hz input:** half-wave 50 Hz, full-wave 100 Hz.
- **Capacitor across load:** filters (smooths) the rectified output.

## Mark-losing traps

:::tip Holes are not positrons
A hole is a missing electron in a bond, not a particle; it behaves like a positive charge.
:::

:::tip Field direction in the junction
The barrier field points from the n side (positive ions) to the p side (negative ions).
:::

:::tip Waveforms are required
Rectifier answers without input and output waveforms lose a full mark.
:::

:::tip Out of syllabus
Zener diode, LED, photodiode, solar cell, transistors and logic gates are not in the 2026–27 syllabus.
:::
