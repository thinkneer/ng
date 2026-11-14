# Ch 14 · Semiconductor Electronics: Materials, Devices and Simple Circuits

Every phone, computer and charger runs on semiconductors. This chapter explains why some solids conduct and others don't (energy bands), how adding a trace of impurity turns pure silicon into a useful material (doping), what happens where p-type and n-type silicon meet (the p-n junction), and how a junction diode converts AC into DC (rectifiers). It carries 7 marks, mostly from a small set of well-known diagrams and explanations.

## Energy bands: conductors, insulators and semiconductors

In an isolated atom, electrons occupy sharp energy levels. In a crystal, billions of atoms sit close together, and each level spreads into a **band** of very closely spaced levels. Two bands matter:

- The **valence band** holds the valence electrons. At absolute zero it is completely full.
- The **conduction band** is the next band above. Electrons in it are free to move and carry current.

Between them there may be a **forbidden energy gap** $E_g$ where no electron energy is allowed.

<figure class="fig">
<svg viewBox="0 0 400 176" role="img" aria-label="Energy bands of a conductor, an insulator and a semiconductor" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,40L120,40L120,95L20,95Z" fill="#5A5A5A" stroke="#5A5A5A" fill-opacity="0.15"/><path d="M20,80L120,80L120,140L20,140Z" fill="#5A5A5A" stroke="#5A5A5A" fill-opacity="0.35"/><path d="M150,30L250,30L250,60.0L150,60.0Z" fill="#5A5A5A" stroke="#5A5A5A" fill-opacity="0.15"/><path d="M150,120.0L250,120.0L250,150L150,150Z" fill="#5A5A5A" stroke="#5A5A5A" fill-opacity="0.35"/><path d="M235,62L235,118"/><path d="M235,118L233.8,115.3L236.2,115.3Z" fill="currentColor" stroke="none"/><path d="M235,62L236.2,64.7L233.8,64.7Z" fill="currentColor" stroke="none"/><path d="M280,30L380,30L380,79.0L280,79.0Z" fill="#5A5A5A" stroke="#5A5A5A" fill-opacity="0.15"/><path d="M280,101.0L380,101.0L380,150L280,150Z" fill="#5A5A5A" stroke="#5A5A5A" fill-opacity="0.35"/><path d="M365,81L365,99"/><path d="M365,99L363.8,96.3L366.2,96.3Z" fill="currentColor" stroke="none"/><path d="M365,81L366.2,83.7L363.8,83.7Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="70" y="60" font-size="11">CB</text><text x="70" y="125" font-size="11">VB</text><text x="70" y="89" font-size="10">overlap</text><text x="70" y="168" font-size="11">conductor</text><text x="200" y="49" font-size="11">CB</text><text x="200" y="139" font-size="11">VB</text><text x="230" y="94" text-anchor="end" font-size="10">E<tspan font-size="9" dy="3">g</tspan><tspan dy="-3">&#8203;</tspan> &gt; 3 eV</text><text x="200" y="168" font-size="11">insulator</text><text x="330" y="58.5" font-size="11">CB</text><text x="330" y="129.5" font-size="11">VB</text><text x="360" y="94" text-anchor="end" font-size="10">E<tspan font-size="9" dy="3">g</tspan><tspan dy="-3">&#8203;</tspan> &lt; 3 eV</text><text x="330" y="168" font-size="11">semiconductor</text></g></svg>
<figcaption>Conductor: valence and conduction bands overlap. Insulator: wide forbidden gap (over 3 eV). Semiconductor: small gap (Si 1.1 eV, Ge 0.7 eV), so some electrons cross it at room temperature.</figcaption>
</figure>

- **Conductors** (metals): the valence and conduction bands overlap (or the conduction band is partly filled), so plenty of electrons are free to move.
- **Insulators**: a wide gap, $E_g>3$ eV (diamond about 5.4 eV). Ordinary thermal energy cannot lift electrons across it, so there are practically no free carriers.
- **Semiconductors**: a small gap, $E_g<3$ eV (silicon 1.1 eV, germanium 0.7 eV). At 0 K they are insulators, but at room temperature some electrons gain enough thermal energy to jump into the conduction band, so they conduct a little. Heating them frees more carriers, which is why their resistance falls with temperature.

**In one breath:** In solids, levels spread into bands; conductors have overlapping bands, insulators a gap over 3 eV, semiconductors a small gap (Si 1.1 eV) that heat can bridge.

## Intrinsic semiconductors: electrons and holes

Pure silicon and germanium are **intrinsic semiconductors**. Each atom has four valence electrons and forms four covalent bonds with its neighbours. When thermal energy breaks a bond, an electron goes free and leaves behind a vacancy, a **hole**, which behaves like a positive charge. A neighbouring electron can jump into the hole, so the hole effectively moves, carrying current in the opposite direction to the electrons.

In a pure semiconductor every free electron leaves a hole, so the numbers are equal.

:::formula Carrier concentrations
Intrinsic: $n_e=n_h=n_i$

Doped (in equilibrium): $n_en_h=n_i^2$
:::

Under an applied field the current is the sum of the electron current and the hole current, $I=I_e+I_h$.

**In one breath:** In pure silicon, broken bonds give equal numbers of free electrons and holes; holes act as positive carriers, and both carry current.

## Extrinsic semiconductors: n-type and p-type

The tiny intrinsic conductivity is not much use. Adding a very small amount of a suitable impurity (**doping**, about one part per million) raises the conductivity enormously and lets us choose the main carrier.

**n-type.** Dope silicon with a **pentavalent** element (phosphorus, arsenic, antimony). Four of its five valence electrons form bonds; the fifth is so weakly held (about 0.01–0.05 eV) that it is set free almost at once. These impurity atoms are **donors**. Electrons become the **majority carriers**, holes the minority.

**p-type.** Dope silicon with a **trivalent** element (boron, aluminium, gallium, indium). It has only three valence electrons, so one bond is incomplete: a hole. Electrons from neighbouring bonds readily fill it, so the hole moves around. These atoms are **acceptors**. Holes are the majority carriers, electrons the minority.

In the band picture, donors add an energy level just below the conduction band, and acceptors a level just above the valence band.

:::tip Doped semiconductors are neutral
An n-type crystal has many free electrons but is **electrically neutral**: each free electron came from a donor atom that is left as a fixed positive ion. The same goes for p-type with negative acceptor ions.
:::

**In one breath:** Pentavalent donors (P, As, Sb) make n-type silicon with electrons as majority carriers; trivalent acceptors (B, Al, Ga, In) make p-type with holes as majority carriers; both stay neutral.

## The p-n junction

Now join p-type and n-type regions in one crystal. Across the junction there are many holes on the p side and many electrons on the n side, so they **diffuse**: holes into the n side, electrons into the p side, where they recombine.

<figure class="fig">
<svg viewBox="0 0 340 158" role="img" aria-label="p-n junction with depletion region" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M30,40L170,40L170,120L30,120Z" stroke="#5A5A5A"/><path d="M170,40L310,40L310,120L170,120Z" stroke="#5A5A5A"/><path d="M140,40L200,40L200,120L140,120Z" fill="#E0B400" stroke="#E0B400" fill-opacity="0.18"/><circle cx="50" cy="60" r="4"/><circle cx="80" cy="90" r="4"/><circle cx="110" cy="65" r="4"/><circle cx="60" cy="105" r="4"/><circle cx="100" cy="100" r="4"/><circle cx="220" cy="60" r="2.5" fill="currentColor"/><circle cx="250" cy="90" r="2.5" fill="currentColor"/><circle cx="280" cy="65" r="2.5" fill="currentColor"/><circle cx="230" cy="105" r="2.5" fill="currentColor"/><circle cx="270" cy="100" r="2.5" fill="currentColor"/><path d="M186,136L154,136" stroke="#5A5A5A" stroke-width="1.6"/><path d="M154,136L158.6,134L158.6,138Z" fill="#5A5A5A" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="85" y="32" font-size="11">p-type</text><text x="255" y="32" font-size="11">n-type</text><text x="170" y="32" font-size="10">depletion</text><text x="50" y="53" font-size="9">+</text><text x="80" y="83" font-size="9">+</text><text x="110" y="58" font-size="9">+</text><text x="60" y="98" font-size="9">+</text><text x="100" y="93" font-size="9">+</text><text x="220" y="54" font-size="10">−</text><text x="250" y="84" font-size="10">−</text><text x="280" y="59" font-size="10">−</text><text x="230" y="99" font-size="10">−</text><text x="270" y="94" font-size="10">−</text><text x="150" y="64" font-size="12">⊖</text><text x="150" y="89" font-size="12">⊖</text><text x="150" y="114" font-size="12">⊖</text><text x="190" y="64" font-size="12">⊕</text><text x="190" y="89" font-size="12">⊕</text><text x="190" y="114" font-size="12">⊕</text><text x="170" y="150" font-size="10">E (barrier field)</text><text x="70" y="140" font-size="10">holes (majority)</text><text x="270" y="140" font-size="10">electrons (majority)</text></g></svg>
<figcaption>Holes diffuse from p to n and electrons from n to p, leaving immobile negative ions on the p side and positive ions on the n side. This depletion layer has a field from n to p that opposes further diffusion: the barrier potential.</figcaption>
</figure>

Each electron that leaves the n side leaves behind a fixed positive donor ion; each hole that leaves the p side leaves a fixed negative acceptor ion. So a thin layer on either side of the junction loses its mobile carriers and keeps only these immobile ions. This is the **depletion region**, about a micrometre wide.

The ions set up an electric field pointing from the n side to the p side, and a potential difference across the junction, the **barrier potential** (about 0.7 V for silicon, 0.3 V for germanium). This field pushes minority carriers across the junction (a **drift** current) and opposes further diffusion. Equilibrium is reached when the diffusion current and drift current are equal and opposite, so no net current flows.

**In one breath:** At a p-n junction, diffusion of majority carriers leaves a depletion layer of fixed ions whose field (n to p) creates the barrier potential; equilibrium when drift balances diffusion.

## The junction diode: forward and reverse bias

A p-n junction with metal contacts is a **semiconductor diode**. How it behaves depends on which way a battery is connected.

**Forward bias**: p side to the positive terminal, n side to the negative. The applied voltage opposes the barrier, so the barrier height and the depletion width **decrease**. Once the applied voltage exceeds the barrier (the **threshold** or knee voltage, about 0.7 V for Si), majority carriers cross easily and the current rises steeply, in milliamperes.

**Reverse bias**: p side to negative, n side to positive. The applied voltage adds to the barrier, so the barrier and the depletion width **increase**. Majority carriers cannot cross; only the few minority carriers drift across, giving a tiny reverse current, in microamperes, almost independent of voltage. At a large reverse voltage the current suddenly rises sharply: **breakdown**.

<figure class="fig">
<svg viewBox="0 0 380 182" role="img" aria-label="I–V characteristic of a silicon p-n junction diode" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,100L360,100"/><path d="M360,100L355.4,102L355.4,98Z" fill="currentColor" stroke="none"/><path d="M180,175L180,15"/><path d="M180,15L182,19.6L178,19.6Z" fill="currentColor" stroke="none"/><path d="M180,100L183.8,99.9L187.5,99.8L191.2,99.7L195,99.6L198.8,99.5L202.5,99.3L206.2,99.1L210,98.9L213.8,98.6L217.5,98.3L221.2,97.9L225,97.5L228.8,97.1L232.5,96.5L236.2,95.9L240,95.1L243.8,94.2L247.5,93.2L251.2,92.1L255,90.7L258.8,89.1L262.5,87.3L266.2,85.1L270,82.6L273.8,79.7L277.5,76.4L281.2,72.5L285,68L288.8,62.7L292.5,56.6L296.2,49.5L300,41.2L303.8,31.6L307.5,20.5L311.2,7.5L315,-7.5L318.8,-25L322.5,-45.3L326.2,-68.9L330,-96.3" stroke="#5A5A5A" stroke-width="2"/><path d="M180,100L173.5,102.6L167,104.4L160.5,105.6L154,106.4L147.5,106.9L141,107.3L134.5,107.5L128,107.7L121.5,107.8L115,107.9L108.5,107.9L102,107.9L95.5,108L89,108L82.5,108L76,108L69.5,108L63,108L56.5,108L50,108" stroke="#5A5A5A" stroke-width="2"/><path d="M50,108 L30,170" stroke="#5A5A5A" stroke-width="2"/><path d="M308,100L308,96" stroke-width="1"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="360" y="114" text-anchor="end" font-style="italic">V</text><text x="176" y="20" text-anchor="end" font-size="10">I (mA)</text><text x="300" y="114" font-size="10">≈0.7 V (Si)</text><text x="110" y="128" font-size="10">µA</text><text x="30" y="182" font-size="10">breakdown</text><text x="300" y="40" font-size="11">forward bias</text><text x="70" y="40" font-size="11">reverse bias</text></g></svg>
<figcaption>Forward bias: almost no current until the threshold (about 0.7 V for Si), then a steep rise (mA). Reverse bias: a tiny, nearly constant current (µA) until breakdown.</figcaption>
</figure>

So a diode conducts easily in one direction and hardly at all in the other. Its resistance changes with voltage; we describe it by the **dynamic resistance**, the ratio of a small change in voltage to the resulting change in current.

:::formula Dynamic resistance of a diode
$r_d=\dfrac{\Delta V}{\Delta I}$ (small near and above the knee in forward bias; very large in reverse bias)
:::

:::skeleton Worked example: dynamic resistance
*In the forward characteristic of a diode, the current rises from 10 mA to 20 mA when the voltage rises from 0.70 V to 0.75 V. Find the dynamic resistance.*

$r_d=\dfrac{\Delta V}{\Delta I}=\dfrac{0.05}{10\times10^{-3}}$ [½]

**$r_d=5$ Ω** [½]
:::

:::tip Depletion width and bias
Forward bias: barrier and depletion layer get **thinner**. Reverse bias: both get **wider**. Many MCQs and A–R questions turn on this one fact.
:::

**In one breath:** Forward bias thins the barrier and above about 0.7 V (Si) gives a large mA current; reverse bias widens it and allows only a tiny µA minority current until breakdown.

## The diode as a rectifier

Because a diode conducts in only one direction, it can turn AC into a one-way current. This is **rectification**.

**Half-wave rectifier.** An AC supply (through a transformer) is connected to a diode in series with a load resistor $R_L$. In the half-cycle when the diode is forward biased, current flows and a voltage appears across $R_L$. In the other half-cycle the diode is reverse biased and no current flows. The output is a series of positive half-waves, one per cycle.

<figure class="fig">
<svg viewBox="0 0 400 118" role="img" aria-label="Half-wave rectifier circuit with input and output waveforms" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="40" cy="70" rx="7" ry="22" fill="none"/><ellipse cx="52" cy="70" rx="7" ry="22" fill="none"/><path d="M59,48L120,48"/><path d="M120,40L120,56L136,48Z" fill="currentColor"/><path d="M136,40L136,56" stroke-width="2"/><path d="M136,48L180,48"/><g transform="translate(180,70) rotate(90)"><path d="M-22,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L22,0"/></g><path d="M180,92L59,92"/><path d="M230,45L231.3,43.1L232.7,41.3L234,39.4L235.3,37.7L236.7,36L238,34.4L239.3,33L240.7,31.6L242,30.4L243.3,29.4L244.7,28.6L246,27.9L247.3,27.4L248.7,27.1L250,27L251.3,27.1L252.7,27.4L254,27.9L255.3,28.6L256.7,29.4L258,30.4L259.3,31.6L260.7,33L262,34.4L263.3,36L264.7,37.7L266,39.4L267.3,41.3L268.7,43.1L270,45L271.3,46.9L272.7,48.7L274,50.6L275.3,52.3L276.7,54L278,55.6L279.3,57L280.7,58.4L282,59.6L283.3,60.6L284.7,61.4L286,62.1L287.3,62.6L288.7,62.9L290,63L291.3,62.9L292.7,62.6L294,62.1L295.3,61.4L296.7,60.6L298,59.6L299.3,58.4L300.7,57L302,55.6L303.3,54L304.7,52.3L306,50.6L307.3,48.7L308.7,46.9L310,45L311.3,43.1L312.7,41.3L314,39.4L315.3,37.7L316.7,36L318,34.4L319.3,33L320.7,31.6L322,30.4L323.3,29.4L324.7,28.6L326,27.9L327.3,27.4L328.7,27.1L330,27L331.3,27.1L332.7,27.4L334,27.9L335.3,28.6L336.7,29.4L338,30.4L339.3,31.6L340.7,33L342,34.4L343.3,36L344.7,37.7L346,39.4L347.3,41.3L348.7,43.1L350,45L351.3,46.9L352.7,48.7L354,50.6L355.3,52.3L356.7,54L358,55.6L359.3,57L360.7,58.4L362,59.6L363.3,60.6L364.7,61.4L366,62.1L367.3,62.6L368.7,62.9L370,63L371.3,62.9L372.7,62.6L374,62.1L375.3,61.4L376.7,60.6L378,59.6L379.3,58.4L380.7,57L382,55.6L383.3,54L384.7,52.3L386,50.6L387.3,48.7L388.7,46.9L390,45" stroke-width="1.8"/><path d="M230,45L390,45" stroke-width="0.6"/><path d="M230,100L231.3,98.1L232.7,96.3L234,94.4L235.3,92.7L236.7,91L238,89.4L239.3,88L240.7,86.6L242,85.4L243.3,84.4L244.7,83.6L246,82.9L247.3,82.4L248.7,82.1L250,82L251.3,82.1L252.7,82.4L254,82.9L255.3,83.6L256.7,84.4L258,85.4L259.3,86.6L260.7,88L262,89.4L263.3,91L264.7,92.7L266,94.4L267.3,96.3L268.7,98.1L270,100L271.3,100L272.7,100L274,100L275.3,100L276.7,100L278,100L279.3,100L280.7,100L282,100L283.3,100L284.7,100L286,100L287.3,100L288.7,100L290,100L291.3,100L292.7,100L294,100L295.3,100L296.7,100L298,100L299.3,100L300.7,100L302,100L303.3,100L304.7,100L306,100L307.3,100L308.7,100L310,100L311.3,98.1L312.7,96.3L314,94.4L315.3,92.7L316.7,91L318,89.4L319.3,88L320.7,86.6L322,85.4L323.3,84.4L324.7,83.6L326,82.9L327.3,82.4L328.7,82.1L330,82L331.3,82.1L332.7,82.4L334,82.9L335.3,83.6L336.7,84.4L338,85.4L339.3,86.6L340.7,88L342,89.4L343.3,91L344.7,92.7L346,94.4L347.3,96.3L348.7,98.1L350,100L351.3,100L352.7,100L354,100L355.3,100L356.7,100L358,100L359.3,100L360.7,100L362,100L363.3,100L364.7,100L366,100L367.3,100L368.7,100L370,100L371.3,100L372.7,100L374,100L375.3,100L376.7,100L378,100L379.3,100L380.7,100L382,100L383.3,100L384.7,100L386,100L387.3,100L388.7,100L390,100" stroke="#5A5A5A" stroke-width="1.8"/><path d="M230,100L390,100" stroke-width="0.6"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="46" y="104" font-size="10">transformer</text><text x="128" y="34" font-size="11">D</text><text x="190" y="74" text-anchor="start" font-size="11">R<tspan font-size="9" dy="3">L</tspan><tspan dy="-3">&#8203;</tspan></text><text x="390" y="30" text-anchor="end" font-size="10">input</text><text x="390" y="85" text-anchor="end" font-size="10">output</text></g></svg>
<figcaption>Half-wave rectifier: the diode conducts only in the half-cycles when it is forward-biased, so only those halves appear across the load. Output frequency = input frequency (50 Hz).</figcaption>
</figure>

**Full-wave rectifier.** A centre-tap transformer feeds two diodes. In one half-cycle the top end of the secondary is positive: D₁ conducts and D₂ is reverse biased. In the next half-cycle the bottom end is positive: D₂ conducts. Both send current the **same way** through $R_L$, so every half-cycle appears at the output.

<figure class="fig">
<svg viewBox="0 0 400 145" role="img" aria-label="Full-wave centre-tap rectifier with input and output waveforms" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="40" cy="75" rx="7" ry="40" fill="none"/><ellipse cx="52" cy="75" rx="7" ry="40" fill="none"/><path d="M59,35L120,35"/><path d="M120,27L120,43L136,35Z" fill="currentColor"/><path d="M136,27L136,43" stroke-width="2"/><path d="M59,115L120,115"/><path d="M120,107L120,123L136,115Z" fill="currentColor"/><path d="M136,107L136,123" stroke-width="2"/><path d="M136,35L175,35"/><path d="M136,115L175,115"/><path d="M175,35L175,115"/><path d="M59,75L100,75"/><g transform="translate(130,75) rotate(0)"><path d="M-30,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L30,0"/></g><path d="M160,75L175,75"/><circle cx="59" cy="75" r="2.2" fill="currentColor"/><path d="M230,50L231.3,48.1L232.7,46.3L234,44.4L235.3,42.7L236.7,41L238,39.4L239.3,38L240.7,36.6L242,35.4L243.3,34.4L244.7,33.6L246,32.9L247.3,32.4L248.7,32.1L250,32L251.3,32.1L252.7,32.4L254,32.9L255.3,33.6L256.7,34.4L258,35.4L259.3,36.6L260.7,38L262,39.4L263.3,41L264.7,42.7L266,44.4L267.3,46.3L268.7,48.1L270,50L271.3,51.9L272.7,53.7L274,55.6L275.3,57.3L276.7,59L278,60.6L279.3,62L280.7,63.4L282,64.6L283.3,65.6L284.7,66.4L286,67.1L287.3,67.6L288.7,67.9L290,68L291.3,67.9L292.7,67.6L294,67.1L295.3,66.4L296.7,65.6L298,64.6L299.3,63.4L300.7,62L302,60.6L303.3,59L304.7,57.3L306,55.6L307.3,53.7L308.7,51.9L310,50L311.3,48.1L312.7,46.3L314,44.4L315.3,42.7L316.7,41L318,39.4L319.3,38L320.7,36.6L322,35.4L323.3,34.4L324.7,33.6L326,32.9L327.3,32.4L328.7,32.1L330,32L331.3,32.1L332.7,32.4L334,32.9L335.3,33.6L336.7,34.4L338,35.4L339.3,36.6L340.7,38L342,39.4L343.3,41L344.7,42.7L346,44.4L347.3,46.3L348.7,48.1L350,50L351.3,51.9L352.7,53.7L354,55.6L355.3,57.3L356.7,59L358,60.6L359.3,62L360.7,63.4L362,64.6L363.3,65.6L364.7,66.4L366,67.1L367.3,67.6L368.7,67.9L370,68L371.3,67.9L372.7,67.6L374,67.1L375.3,66.4L376.7,65.6L378,64.6L379.3,63.4L380.7,62L382,60.6L383.3,59L384.7,57.3L386,55.6L387.3,53.7L388.7,51.9L390,50" stroke-width="1.8"/><path d="M230,50L390,50" stroke-width="0.6"/><path d="M230,112L231.3,110.1L232.7,108.3L234,106.4L235.3,104.7L236.7,103L238,101.4L239.3,100L240.7,98.6L242,97.4L243.3,96.4L244.7,95.6L246,94.9L247.3,94.4L248.7,94.1L250,94L251.3,94.1L252.7,94.4L254,94.9L255.3,95.6L256.7,96.4L258,97.4L259.3,98.6L260.7,100L262,101.4L263.3,103L264.7,104.7L266,106.4L267.3,108.3L268.7,110.1L270,112L271.3,110.1L272.7,108.3L274,106.4L275.3,104.7L276.7,103L278,101.4L279.3,100L280.7,98.6L282,97.4L283.3,96.4L284.7,95.6L286,94.9L287.3,94.4L288.7,94.1L290,94L291.3,94.1L292.7,94.4L294,94.9L295.3,95.6L296.7,96.4L298,97.4L299.3,98.6L300.7,100L302,101.4L303.3,103L304.7,104.7L306,106.4L307.3,108.3L308.7,110.1L310,112L311.3,110.1L312.7,108.3L314,106.4L315.3,104.7L316.7,103L318,101.4L319.3,100L320.7,98.6L322,97.4L323.3,96.4L324.7,95.6L326,94.9L327.3,94.4L328.7,94.1L330,94L331.3,94.1L332.7,94.4L334,94.9L335.3,95.6L336.7,96.4L338,97.4L339.3,98.6L340.7,100L342,101.4L343.3,103L344.7,104.7L346,106.4L347.3,108.3L348.7,110.1L350,112L351.3,110.1L352.7,108.3L354,106.4L355.3,104.7L356.7,103L358,101.4L359.3,100L360.7,98.6L362,97.4L363.3,96.4L364.7,95.6L366,94.9L367.3,94.4L368.7,94.1L370,94L371.3,94.1L372.7,94.4L374,94.9L375.3,95.6L376.7,96.4L378,97.4L379.3,98.6L380.7,100L382,101.4L383.3,103L384.7,104.7L386,106.4L387.3,108.3L388.7,110.1L390,112" stroke="#5A5A5A" stroke-width="1.8"/><path d="M230,112L390,112" stroke-width="0.6"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="46" y="128" font-size="10">centre-tap</text><text x="128" y="21" font-size="11">D₁</text><text x="128" y="138" font-size="11">D₂</text><text x="130" y="68" font-size="11">R<tspan font-size="9" dy="3">L</tspan><tspan dy="-3">&#8203;</tspan></text><text x="390" y="30" text-anchor="end" font-size="10">input</text><text x="390" y="92" text-anchor="end" font-size="10">output</text></g></svg>
<figcaption>Full-wave rectifier: D₁ conducts in one half-cycle and D₂ in the other, both sending current the same way through the load. Every half-cycle appears at the output, so its frequency is 100 Hz.</figcaption>
</figure>

:::formula Rectifier output frequency
Half-wave: output frequency = input frequency (50 Hz for mains)

Full-wave: output frequency = 2 × input frequency (100 Hz)
:::

The output of either rectifier is unidirectional but pulsating. A capacitor connected across the load (a **filter**) charges up at each peak and discharges slowly between peaks, smoothing the output into a nearly steady DC.

:::skeleton Answer skeleton: full-wave rectifier (3 marks)
Labelled circuit: centre-tap transformer, diodes D₁ and D₂, load $R_L$ from the joined diode ends to the centre tap [1]

Working: first half-cycle D₁ forward biased, D₂ reverse; second half-cycle D₂ forward, D₁ reverse; current through $R_L$ in the same direction both times [1]

Input and output waveforms (output: every half-cycle positive; frequency 100 Hz for 50 Hz input) [1]
:::

**In one breath:** A diode passes only one half of each AC cycle (half-wave, output at 50 Hz); two diodes with a centre-tap transformer use both halves (full-wave, 100 Hz); a capacitor smooths the pulses.
