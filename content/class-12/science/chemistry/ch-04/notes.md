# Ch 4 · The d- and f-Block Elements

Iron, copper, silver, gold, chromium, titanium: the metals people actually build and trade with sit in the middle of the periodic table. This chapter explains why they behave so differently from the metals of groups 1 and 2: why they show several oxidation states, why their compounds are coloured, why they are magnetic and why they make good catalysts. Almost every answer comes back to one fact, the presence of partly filled d orbitals. Hold on to that and the chapter stops being a list to memorise. It ends with two compounds you will meet in the lab, and a short look at the f-block.

*Read alongside NCERT Chemistry Part I, Unit 4 (in your textbook, or [ncert.nic.in/textbook/pdf/lech104.pdf](https://ncert.nic.in/textbook/pdf/lech104.pdf)). Each section below names the NCERT section, tables, figures and questions it explains.*

## Where they sit and what "transition" means

*NCERT 4.1–4.2 · Table 4.1 · Example 4.1 · Intext 4.1*

The d-block is the set of groups 3 to 12, where the d orbitals of the shell *below* the outermost one are being filled. There are four rows: 3d (Sc to Zn), 4d (Y to Cd), 5d (La, then Hf to Hg) and 6d. The general outer configuration is $(n-1)d^{1-10}\,ns^{1-2}$.

Two members of the 3d row break the expected pattern. Chromium is $3d^5\,4s^1$, not $3d^4\,4s^2$, and copper is $3d^{10}\,4s^1$, not $3d^9\,4s^2$. The 3d and 4s levels are very close in energy, and a half-filled or completely filled d subshell is especially stable, so one electron shifts across.

Why do the 4s electrons fill first but also leave first? In the neutral atom 4s is slightly lower in energy, so it fills before 3d. Once the 3d orbitals hold electrons, they sit closer to the nucleus on average and drop below 4s, so 4s is now the outermost, highest-energy level and its electrons are the first to go.

A **transition element** is defined as one that has an incompletely filled d subshell in its atom or in any of its common oxidation states. By this test zinc, cadmium and mercury are not transition elements: they are $d^{10}$ in the atom and stay $d^{10}$ in their only common ion ($\ce{Zn^2+}$). Copper passes, because although the atom is $3d^{10}$, the common ion $\ce{Cu^2+}$ is $3d^9$. The same test settles two favourite questions: scandium counts, because its atom is $3d^1$ (a partly filled d subshell), even though $\ce{Sc^3+}$ is $d^0$; and silver counts, because in its +2 state it is $4d^9$.

:::tip
When a transition metal forms an ion, the **4s electrons leave first**, then 3d. So $\ce{Fe^2+}$ is $3d^6$ (not $3d^4\,4s^2$) and $\ce{Fe^3+}$ is $3d^5$.
:::

```ng-mnemonic
id: first-row-3d
title: The first transition series in order
trick: **Sc**hool **Ti**me: **V**ery **Cr**azy **M**o**n**day, **Fe**w **Co**ld **Ni**ghts, **Cu**ddly **Z**ebras
meaning: Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn (atomic numbers 21 to 30).
prompt: List the 3d series from Sc to Zn.
```

```ng-figure
id: dblock-position
title: Where the d- and f-blocks sit
svg:
<svg viewBox="0 0 310 176" role="img" aria-label="Position of the d- and f-blocks in the periodic table" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<rect x="10" y="20" width="36" height="96" rx="3"/><rect x="50" y="52" width="150" height="64" rx="3" stroke="#E0B400" stroke-width="2.5"/><rect x="204" y="20" width="96" height="96" rx="3"/><rect x="50" y="138" width="150" height="30" rx="3" class="u"/><path d="M50,68 H200" stroke-width="0.6"/><path d="M50,84 H200" stroke-width="0.6"/><path d="M50,100 H200" stroke-width="0.6"/><path d="M50,153 H200" stroke-width="0.6"/>
<g fill="currentColor" stroke="none"><text x="28" y="72" text-anchor="middle" font-size="12">s</text><text x="125" y="46" text-anchor="middle" font-size="10">d-block (groups 3–12)</text><text x="252" y="72" text-anchor="middle" font-size="12">p</text><text x="125" y="157" text-anchor="middle" font-size="11">f-block</text><text x="56" y="64" font-size="9">3d</text><text x="56" y="80" font-size="9">4d</text><text x="56" y="96" font-size="9">5d</text><text x="56" y="112" font-size="9">6d</text><text x="206" y="150" font-size="9">4f lanthanoids</text><text x="206" y="163" font-size="9">5f actinoids</text></g>
</svg>
caption: The d-block fills the middle of the table (four rows: 3d to 6d); the f-block sits below as two rows.
part: 185, 60 | d-block | Groups 3–12: the $(n-1)d$ subshell is filling.
part: 185, 153 | f-block | 4f (lanthanoids) and 5f (actinoids): inner transition elements.
part: 28, 100 | s-block | Groups 1–2: only $ns$ electrons, one fixed oxidation state.
part: 120, 60 | 3d row | Sc to Zn: the series this chapter studies most.
```

```ng-numerical
id: unpaired-from-z
title: Configuration and unpaired electrons, fresh numbers
question: An element of the 3d series has atomic number {{Z}}. Its ion is $\text{M}^{ {{q}}+}$. How many unpaired electrons does the ion have? (Remove 4s electrons first.)
var: Z | 22 | 30 | 1
var: q | 2 | 3 | 1
let: d = Z - 18 - q
answer: min(d, 10 - d)
unit: unpaired electrons
dp: 0
step: Ion configuration: $[\text{Ar}]\,3d^{ {{d}} }$ (the two 4s electrons go first, then {{q-2}} from 3d)
step: Fill five d orbitals singly first (Hund's rule), then pair
step: Unpaired electrons $=$ **{{min(d,10-d)}}**
```

**In one breath:** d-block elements fill the inner d subshell; a transition element has a partly filled d subshell in the atom or a common ion, so Zn, Cd and Hg do not qualify. Cr and Cu take one 4s electron for a half-filled or full d subshell.

## Hard, high-melting metals

*NCERT 4.3.1 · Fig. 4.1, 4.2 · Example 4.2 · Intext 4.2*

Transition metals are hard, dense and high-melting, and they conduct well. The reason is the strength of their metallic bonding. In sodium only one electron per atom takes part; in a transition metal the $ns$ electrons *and* the $(n-1)d$ electrons can all join in.

The more unpaired d electrons an atom can contribute, the stronger the bonding. So melting points and enthalpies of atomisation rise to a maximum near the middle of each row, around $d^5$, and fall away again as the electrons pair up. Two metals fall out of line. Manganese melts lower than its neighbours because its stable $3d^5$ arrangement holds on to its d electrons. Zinc has the lowest enthalpy of atomisation in the row because it has no unpaired d electrons to offer at all; for the same reason mercury is a liquid.

Metals of the 4d and 5d rows have higher enthalpies of atomisation than their 3d partners. Their larger d orbitals overlap better, giving stronger metal–metal bonds, which is part of why the heavier transition metals are so unreactive.

```ng-figure
id: melting-points-3d
title: Melting points across the 3d series
svg:
<svg viewBox="0 0 310 180" role="img" aria-label="Melting points of the 3d metals" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M44,20 V160 H302"/><path d="M46.5,24.3L44,20L41.5,24.3" stroke-width="1"/><path d="M297.7,162.5L302,160L297.7,157.5" stroke-width="1"/><path d="M56.0,65.1 L81.1,55.9 L106.2,38.4 L131.3,38.7 L156.4,86.4 L181.6,65.3 L206.7,68.4 L231.8,71.3 L256.9,98.0 L282.0,146.1" stroke="#E0B400" stroke-width="2.5"/><circle cx="56.0" cy="65.1" r="3" fill="currentColor"/><circle cx="81.1" cy="55.9" r="3" fill="currentColor"/><circle cx="106.2" cy="38.4" r="3" fill="currentColor"/><circle cx="131.3" cy="38.7" r="3" fill="currentColor"/><circle cx="156.4" cy="86.4" r="3" fill="currentColor"/><circle cx="181.6" cy="65.3" r="3" fill="currentColor"/><circle cx="206.7" cy="68.4" r="3" fill="currentColor"/><circle cx="231.8" cy="71.3" r="3" fill="currentColor"/><circle cx="256.9" cy="98.0" r="3" fill="currentColor"/><circle cx="282.0" cy="146.1" r="3" fill="currentColor"/><path d="M42,51.7 H46 M42,123.9 H46" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="56" y="173" text-anchor="middle" font-size="9">Sc</text><text x="81.11" y="173" text-anchor="middle" font-size="9">Ti</text><text x="106.2" y="173" text-anchor="middle" font-size="9">V</text><text x="131.3" y="173" text-anchor="middle" font-size="9">Cr</text><text x="156.4" y="173" text-anchor="middle" font-size="9">Mn</text><text x="181.6" y="173" text-anchor="middle" font-size="9">Fe</text><text x="206.7" y="173" text-anchor="middle" font-size="9">Co</text><text x="231.8" y="173" text-anchor="middle" font-size="9">Ni</text><text x="256.9" y="173" text-anchor="middle" font-size="9">Cu</text><text x="282" y="173" text-anchor="middle" font-size="9">Zn</text><text x="40" y="54.67" text-anchor="end" font-size="8">2000</text><text x="40" y="126.9" text-anchor="end" font-size="8">1000</text><text x="12" y="95" text-anchor="middle" transform="rotate(-90 12 95)" font-size="10">melting point (K)</text></g>
</svg>
caption: High in the middle of the row, a dip at Mn and a sharp fall to Zn: the pattern of unpaired d electrons available for metallic bonding.
part: 109, 38 | Maximum near V and Cr | Most unpaired d electrons join the metallic bonding.
part: 162, 82 | Dip at manganese | Stable $3d^5$ holds on to its d electrons.
part: 294, 137 | Zinc lowest | $3d^{10}$: no unpaired d electrons to share.
```

```ng-compare
id: tm-vs-s-block
title: Transition metal vs s-block metal
cols: Transition metal (e.g. Fe) | s-block metal (e.g. Na)
row: Bonding electrons | $ns$ + $(n-1)d$ | $ns$ only
row: Hardness, m.p. | hard, high m.p. | soft, low m.p.
row: Oxidation states | several, in steps of one | one fixed state
row: Compounds | often coloured, magnetic | colourless
row: Catalysts, complexes | common | rare
```

**In one breath:** Both s and d electrons take part in metallic bonding, so strength peaks mid-row where unpaired d electrons are most numerous; Zn, with none, is the weakest.

## Size and ionisation enthalpy

*NCERT 4.3.2–4.3.3 · Fig. 4.3 · Table 4.2 · Intext 4.5*

Across a row the atoms get a little smaller, because nuclear charge increases while the added electrons go into an inner d subshell. But the change is slight, and towards the end the radii level off. The d electrons shield the outer electrons from the nucleus fairly well, so the extra pull is largely cancelled. Since mass rises while size barely changes, density increases from titanium to copper.

Going *down* a group you would expect atoms to get bigger, and from the 3d to the 4d row they do. From 4d to 5d they do not: zirconium (160 pm) and hafnium (159 pm) are almost identical. The explanation is the **lanthanoid contraction**, met later in this chapter: fourteen elements with poorly shielding 4f electrons come before hafnium and shrink it.

Ionisation enthalpies rise across the row, but only gradually and irregularly, again because of d-electron shielding. The irregularities make sense once you look at what configuration is being broken. The second ionisation enthalpies of chromium and copper are unusually high, because the second electron has to come out of a stable $d^5$ or $d^{10}$ core. The third ionisation enthalpy of manganese is very high for the same reason: $\ce{Mn^2+}$ is $3d^5$.

```ng-figure
id: radii-3d-4d-5d
title: Atomic radii of the three series
svg:
<svg viewBox="0 0 310 192" role="img" aria-label="Metallic radii of the 3d, 4d and 5d series" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M44,20 V160 H302"/><path d="M46.5,24.3L44,20L41.5,24.3" stroke-width="1"/><path d="M297.7,162.5L302,160L297.7,157.5" stroke-width="1"/><path d="M56.0,80.4 L81.1,108.0 L106.2,127.5 L131.3,137.2 L156.4,124.2 L181.6,142.1 L206.7,143.8 L231.8,143.8 L256.9,138.9 L282.0,124.2" stroke-width="2"/><path d="M56.0,54.4 L81.1,86.9 L106.2,109.6 L131.3,121.0 L156.4,125.9 L181.6,129.1 L206.7,129.1 L231.8,124.2 L256.9,112.9 L282.0,96.6" class="u" stroke-width="2"/><path d="M56.0,43.0 L81.1,88.5 L106.2,109.6 L131.3,121.0 L156.4,124.2 L181.6,127.5 L206.7,125.9 L231.8,121.0 L256.9,112.9 L282.0,91.8" stroke="#E0B400" stroke-dasharray="5 3" stroke-width="2"/>
<g fill="currentColor" stroke="none"><text x="56" y="173" text-anchor="middle" font-size="9">3</text><text x="81.11" y="173" text-anchor="middle" font-size="9">4</text><text x="106.2" y="173" text-anchor="middle" font-size="9">5</text><text x="131.3" y="173" text-anchor="middle" font-size="9">6</text><text x="156.4" y="173" text-anchor="middle" font-size="9">7</text><text x="181.6" y="173" text-anchor="middle" font-size="9">8</text><text x="206.7" y="173" text-anchor="middle" font-size="9">9</text><text x="231.8" y="173" text-anchor="middle" font-size="9">10</text><text x="256.9" y="173" text-anchor="middle" font-size="9">11</text><text x="282" y="173" text-anchor="middle" font-size="9">12</text><text x="175" y="186" text-anchor="middle" font-size="9">group number →</text><text x="231.8" y="157.8" text-anchor="middle" font-size="9">3d</text><text x="62" y="48.38" font-size="9">4d ≈ 5d</text><text x="40" y="57.38" text-anchor="end" font-size="8">180</text><text x="40" y="138.6" text-anchor="end" font-size="8">130</text><text x="12" y="95" text-anchor="middle" transform="rotate(-90 12 95)" font-size="10">metallic radius (pm)</text></g>
</svg>
caption: Radii fall then level off across each row; the 4d and 5d curves almost coincide because of the lanthanoid contraction.
part: 82, 82 | Zr and Hf | 160 and 159 pm: almost the same size.
part: 188, 134 | 3d row levels off | d electrons shield the growing nuclear charge.
part: 294, 117 | Rise at the end | Radii grow slightly as the d subshell fills (Zn 137 pm).
```

**In one breath:** Radii and ionisation enthalpies change only slowly across a row because d electrons shield well; 4d and 5d metals are nearly the same size, and breaking a $d^5$ or $d^{10}$ arrangement always costs extra.

## Many oxidation states

*NCERT 4.3.4, 4.3.7 · Tables 4.3, 4.5, 4.6 · Example 4.3, 4.5 · Intext 4.3, 4.6*

Sodium is always +1 and magnesium always +2. Manganese shows every state from +2 to +7. The difference is that in a transition metal the $(n-1)d$ and $ns$ electrons are so close in energy that both sets can be used in bonding, a few at a time.

The pattern across the 3d row is tidy. The highest oxidation state rises from +3 at scandium to +7 at manganese, where all the 4s and 3d electrons are in use, and then falls as the d electrons pair up and become harder to remove. Scandium shows only +3 and zinc only +2.

Three more points are worth knowing. First, the states differ by one unit ($\ce{Fe^2+}$, $\ce{Fe^3+}$), unlike p-block elements where they usually differ by two. Second, the highest states appear in compounds with oxygen and fluorine, the smallest and most electronegative elements. Oxygen does even better than fluorine because it can form multiple bonds to the metal: manganese reaches +7 in $\ce{Mn2O7}$ but only +4 in its highest fluoride, $\ce{MnF4}$. Third, down a group the higher states become *more* stable: Cr(VI) in dichromate is a strong oxidising agent, while Mo(VI) and W(VI) are quite stable.

Halides show the same idea. The highest halides are $\ce{TiX4}$, $\ce{VF5}$ and $\ce{CrF6}$, each reached only with fluorine, which stabilises high states through high lattice energy or strong bonds. At the other end, low states can be unstable: copper(II) iodide does not exist, because $\ce{Cu^2+}$ oxidises iodide, $\ce{2Cu^2+ + 4I-}$ $\ce{-> Cu2I2 + I2}$.

Oxidation state also controls the character of an oxide. The higher the state, the more covalent and more acidic the oxide: $\ce{MnO}$ is basic, $\ce{MnO2}$ amphoteric and $\ce{Mn2O7}$ acidic; $\ce{CrO}$ is basic, $\ce{Cr2O3}$ amphoteric and $\ce{CrO3}$ acidic.

```ng-figure
id: oxidation-states-3d
title: Oxidation states of the 3d metals
svg:
<svg viewBox="0 0 310 206" role="img" aria-label="Oxidation states of the 3d metals" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,18 V168 H302" stroke-width="1"/><path d="M40,148 H302" stroke-width="0.4" stroke-dasharray="2 3"/><path d="M40,128 H302" stroke-width="0.4" stroke-dasharray="2 3"/><path d="M40,108 H302" stroke-width="0.4" stroke-dasharray="2 3"/><path d="M40,88 H302" stroke-width="0.4" stroke-dasharray="2 3"/><path d="M40,68 H302" stroke-width="0.4" stroke-dasharray="2 3"/><path d="M40,48 H302" stroke-width="0.4" stroke-dasharray="2 3"/><path d="M40,28 H302" stroke-width="0.4" stroke-dasharray="2 3"/><circle cx="58" cy="108" r="6" fill="#E0B400" stroke="none"/><circle cx="83" cy="128" r="6" stroke-width="1.5"/><circle cx="83" cy="108" r="6" stroke-width="1.5"/><circle cx="83" cy="88" r="6" fill="#E0B400" stroke="none"/><circle cx="108" cy="128" r="6" stroke-width="1.5"/><circle cx="108" cy="108" r="6" stroke-width="1.5"/><circle cx="108" cy="88" r="6" fill="#E0B400" stroke="none"/><circle cx="108" cy="68" r="6" fill="#E0B400" stroke="none"/><circle cx="133" cy="128" r="6" stroke-width="1.5"/><circle cx="133" cy="108" r="6" fill="#E0B400" stroke="none"/><circle cx="133" cy="88" r="6" stroke-width="1.5"/><circle cx="133" cy="68" r="6" stroke-width="1.5"/><circle cx="133" cy="48" r="6" fill="#E0B400" stroke="none"/><circle cx="158" cy="128" r="6" fill="#E0B400" stroke="none"/><circle cx="158" cy="108" r="6" stroke-width="1.5"/><circle cx="158" cy="88" r="6" fill="#E0B400" stroke="none"/><circle cx="158" cy="68" r="6" stroke-width="1.5"/><circle cx="158" cy="48" r="6" stroke-width="1.5"/><circle cx="158" cy="28" r="6" fill="#E0B400" stroke="none"/><circle cx="183" cy="128" r="6" fill="#E0B400" stroke="none"/><circle cx="183" cy="108" r="6" fill="#E0B400" stroke="none"/><circle cx="183" cy="88" r="6" stroke-width="1.5"/><circle cx="183" cy="48" r="6" stroke-width="1.5"/><circle cx="208" cy="128" r="6" fill="#E0B400" stroke="none"/><circle cx="208" cy="108" r="6" fill="#E0B400" stroke="none"/><circle cx="208" cy="88" r="6" stroke-width="1.5"/><circle cx="233" cy="128" r="6" fill="#E0B400" stroke="none"/><circle cx="233" cy="108" r="6" stroke-width="1.5"/><circle cx="233" cy="88" r="6" stroke-width="1.5"/><circle cx="258" cy="148" r="6" fill="#E0B400" stroke="none"/><circle cx="258" cy="128" r="6" fill="#E0B400" stroke="none"/><circle cx="283" cy="128" r="6" fill="#E0B400" stroke="none"/>
<g fill="currentColor" stroke="none"><text x="34" y="152" text-anchor="end" font-size="9">+1</text><text x="34" y="132" text-anchor="end" font-size="9">+2</text><text x="34" y="112" text-anchor="end" font-size="9">+3</text><text x="34" y="92" text-anchor="end" font-size="9">+4</text><text x="34" y="72" text-anchor="end" font-size="9">+5</text><text x="34" y="52" text-anchor="end" font-size="9">+6</text><text x="34" y="32" text-anchor="end" font-size="9">+7</text><text x="58" y="182" text-anchor="middle" font-size="9">Sc</text><text x="83" y="182" text-anchor="middle" font-size="9">Ti</text><text x="108" y="182" text-anchor="middle" font-size="9">V</text><text x="133" y="182" text-anchor="middle" font-size="9">Cr</text><text x="158" y="182" text-anchor="middle" font-size="9">Mn</text><text x="183" y="182" text-anchor="middle" font-size="9">Fe</text><text x="208" y="182" text-anchor="middle" font-size="9">Co</text><text x="233" y="182" text-anchor="middle" font-size="9">Ni</text><text x="258" y="182" text-anchor="middle" font-size="9">Cu</text><text x="283" y="182" text-anchor="middle" font-size="9">Zn</text><text x="170" y="200" text-anchor="middle" font-size="9">filled dot = most common state</text></g>
</svg>
caption: The number of states rises to manganese (+2 to +7) and falls again; Sc and Zn show only one.
part: 178, 10 | Mn +7 | All 4s and 3d electrons used, as in $\ce{MnO4-}$.
part: 62, 73 | Sc +3 only | Loses all three outer electrons to reach the argon core.
part: 302, 110 | Zn +2 only | Keeps the full $3d^{10}$ set.
part: 277, 130 | Cu +1 | $3d^{10}$, but disproportionates in water.
```

```ng-fill
id: oxide-character
title: Oxidation state and the nature of the oxide
cols: Oxide | Oxidation state | Character
row: $\ce{MnO}$ | +2 | [[basic]]
row: $\ce{MnO2}$ | +4 | [[amphoteric]]
row: $\ce{Mn2O7}$ | [[+7]] | acidic
row: $\ce{CrO}$ | +2 | [[basic]]
row: $\ce{Cr2O3}$ | [[+3]] | amphoteric
row: $\ce{CrO3}$ | +6 | [[acidic]]
```

```ng-mnemonic
id: base-camp-acid-peak
title: Higher oxidation state, more acidic oxide
trick: Manganese climbs from **Base camp** ($\ce{MnO}$) to the **Acid peak** ($\ce{Mn2O7}$)
meaning: Low oxidation state → ionic, basic oxide; high oxidation state → covalent, acidic oxide; in between → amphoteric.
prompt: Is $\ce{Mn2O7}$ basic, amphoteric or acidic?
```

**In one breath:** d and s electrons are close in energy, so both are used: oxidation states vary in steps of one, peak at Mn (+7), reach their highest in oxides and fluorides, and higher states give more acidic oxides.

## Reading the electrode potentials

*NCERT 4.3.5–4.3.8 · Fig. 4.4 · Table 4.4 · Examples 4.4, 4.6, 4.7, 4.9 · Intext 4.4, 4.7, 4.9*

Standard electrode potentials tell you which oxidation state is stable in water. They depend on three energy terms: the enthalpy of atomisation and the ionisation enthalpy, which cost energy, and the hydration enthalpy of the ion, which pays it back.

For $\ce{M^2+/M}$, the values are negative for every 3d metal except copper, and become less negative across the row. Copper alone is positive (+0.34 V): its high enthalpy of atomisation and ionisation enthalpy are not repaid by hydration. That is why copper does not release hydrogen from acids, though it does dissolve in oxidising acids such as nitric acid. Every other 3d metal is electropositive enough to release hydrogen from dilute acids, though some (Ti, Cr) are protected by a thin oxide layer. Manganese and zinc are more negative than the trend predicts because of the stability of $d^5$ ($\ce{Mn^2+}$) and $d^{10}$ ($\ce{Zn^2+}$).

For $\ce{M^3+/M^2+}$ the same idea explains three favourite questions:

- $\ce{Mn^3+/Mn^2+}$ is very high (+1.57 V). Reduction gives stable $d^5$ $\ce{Mn^2+}$, so $\ce{Mn^3+}$ is a strong **oxidising** agent.
- $\ce{Cr^3+/Cr^2+}$ is negative (−0.41 V). Oxidation gives $\ce{Cr^3+}$ with its stable half-filled $t_{2g}^3$ set, so $\ce{Cr^2+}$ is a strong **reducing** agent.
- $\ce{Fe^3+/Fe^2+}$ is modest (+0.77 V), because $\ce{Fe^3+}$ is itself $d^5$ and fairly content.

Notice that $\ce{Cr^2+}$ and $\ce{Mn^3+}$ are both $d^4$, yet one reduces and the other oxidises; what matters is where each ends up.

One more case. $\ce{Cu+}$ is not stable in water: it disproportionates, $\ce{2Cu+ -> Cu^2+ + Cu}$. Forming $\ce{Cu^2+}$ costs a second ionisation enthalpy, but the small, doubly charged ion has a much more negative hydration enthalpy, which more than makes up for it.

```ng-figure
id: e-m2-m
title: E° (M²⁺/M) across the 3d series
svg:
<svg viewBox="0 0 310 192" role="img" aria-label="Standard electrode potentials of M2+/M for the 3d metals" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M44,40 H306" stroke-width="1"/><rect x="80" y="40.0" width="14" height="89.6" class="uf" stroke="none"/><rect x="105" y="40.0" width="14" height="64.9" class="uf" stroke="none"/><rect x="130" y="40.0" width="14" height="49.5" class="uf" stroke="none"/><rect x="155" y="40.0" width="14" height="64.9" class="uf" stroke="none"/><rect x="180" y="40.0" width="14" height="24.2" class="uf" stroke="none"/><rect x="205" y="40.0" width="14" height="15.4" class="uf" stroke="none"/><rect x="230" y="40.0" width="14" height="13.8" class="uf" stroke="none"/><rect x="255" y="21.3" width="14" height="18.7" fill="#E0B400" stroke="none"/><rect x="280" y="40.0" width="14" height="41.8" class="uf" stroke="none"/>
<g fill="currentColor" stroke="none"><text x="40" y="43" text-anchor="end" font-size="9">0</text><text x="40" y="125.5" text-anchor="end" font-size="9">−1.5</text><text x="40" y="26.5" text-anchor="end" font-size="9">+0.3</text><text x="87" y="141.6" text-anchor="middle" font-size="9">−1.63</text><text x="87" y="34" text-anchor="middle" font-size="9">Ti</text><text x="112" y="116.9" text-anchor="middle" font-size="9">−1.18</text><text x="112" y="34" text-anchor="middle" font-size="9">V</text><text x="137" y="101.5" text-anchor="middle" font-size="9">−0.90</text><text x="137" y="34" text-anchor="middle" font-size="9">Cr</text><text x="162" y="116.9" text-anchor="middle" font-size="9">−1.18</text><text x="162" y="34" text-anchor="middle" font-size="9">Mn</text><text x="187" y="76.2" text-anchor="middle" font-size="9">−0.44</text><text x="187" y="34" text-anchor="middle" font-size="9">Fe</text><text x="212" y="67.4" text-anchor="middle" font-size="9">−0.28</text><text x="212" y="34" text-anchor="middle" font-size="9">Co</text><text x="237" y="65.75" text-anchor="middle" font-size="9">−0.25</text><text x="237" y="34" text-anchor="middle" font-size="9">Ni</text><text x="262" y="16.3" text-anchor="middle" font-size="9">+0.34</text><text x="262" y="52" text-anchor="middle" font-size="9">Cu</text><text x="287" y="93.8" text-anchor="middle" font-size="9">−0.76</text><text x="287" y="34" text-anchor="middle" font-size="9">Zn</text><text x="160" y="184" text-anchor="middle" font-size="9">E° (M²⁺/M) in volts; only copper is positive</text></g>
</svg>
caption: Negative for every metal except copper; Mn and Zn dip below the trend because of stable $d^5$ and $d^{10}$ ions.
part: 240, 12 | Copper, +0.34 V | High atomisation and ionisation enthalpy, not repaid by hydration: no H₂ from dilute acids.
part: 162, 134 | Mn dips | $\ce{Mn^2+}$ is a stable $d^5$ ion.
part: 287, 111 | Zn dips | $\ce{Zn^2+}$ is a stable $d^{10}$ ion.
part: 87, 159 | Ti most negative | The strongest reducing metal of the row.
```

```ng-explain
id: why-cu-plus-unstable
prompt: In three lines, explain why $\ce{Cu+}$ is unstable in water even though $\ce{Cu+}$ is $3d^{10}$.
lines: 3
```

**In one breath:** $E^\circ$ balances atomisation and ionisation against hydration; stable $d^5$ and $d^{10}$ ions explain the odd values, so $\ce{Mn^3+}$ oxidises, $\ce{Cr^2+}$ reduces and $\ce{Cu+}$ disproportionates.

## Magnetism and colour

*NCERT 4.3.9–4.3.10 · Tables 4.7, 4.8 · Fig. 4.5 · Example 4.8 · Intext 4.8*

Both properties come from the d electrons.

A substance with unpaired electrons is **paramagnetic**: it is pulled into a magnetic field. With all electrons paired it is **diamagnetic** and weakly repelled. Each unpaired electron behaves like a tiny magnet, and for 3d ions the size of the effect depends, to a good approximation, only on how many there are.

:::formula Spin-only magnetic moment
Spin-only magnetic moment: $\mu=\sqrt{n(n+2)}$ BM, where $n$ = number of unpaired electrons

$n$ = 1, 2, 3, 4, 5 gives 1.73, 2.83, 3.87, 4.90, 5.92 BM
:::

:::skeleton Worked example: magnetic moment
*Calculate the spin-only magnetic moment of $\ce{Co^2+}$ (Z = 27).*

Co: $[\text{Ar}]\,3d^7\,4s^2$, so $\ce{Co^2+}$ is $[\text{Ar}]\,3d^7$ [½]

Seven electrons in five d orbitals: two pairs and three unpaired, $n=3$ [½]

$\mu=\sqrt{n(n+2)}=\sqrt{15}=$ **3.87 BM** [1]
:::

Colour needs a partly filled d subshell too. In a compound the five d orbitals no longer have the same energy (the next chapter explains why). An electron can jump from a lower d orbital to a higher one by absorbing light, and the energy gap happens to match visible light. The ion absorbs one colour and we see what is left, the complementary colour. $\ce{Cu^2+}$ absorbs in the red and looks blue.

It follows that ions with no d electrons or a full set cannot do this. $\ce{Sc^3+}$ and $\ce{Ti^4+}$ ($d^0$) and $\ce{Zn^2+}$ and $\ce{Cu+}$ ($d^{10}$) are colourless.

:::tip
Permanganate (purple) and dichromate (orange) are $d^0$, so their colour is *not* from d–d transitions. It comes from charge transfer between oxygen and the metal. Do not quote them as examples of d–d colour.
:::

```ng-numerical
id: spin-only
title: Spin-only magnetic moment
question: An ion has {{n}} unpaired electrons. Calculate its spin-only magnetic moment.
var: n | 1 | 5 | 1
answer: sqrt(n*(n+2))
unit: BM
dp: 2
step: $\mu=\sqrt{n(n+2)}$ BM with $n={{n}}$
step: $\mu=\sqrt{ {{n}}\times{{n+2}} }=\sqrt{ {{n*(n+2)}} }=$ **{{sqrt(n*(n+2)):2}} BM**
```

```ng-fill
id: ion-moments
title: Configurations and magnetic moments of 3d ions
cols: Ion | Configuration | $\mu$ (BM)
row: $\ce{Sc^3+}$ | $3d^0$ | [[0, colourless]]
row: $\ce{Ti^3+}$ | $3d^1$ | [[1.73]]
row: $\ce{Cr^3+}$ | [[$3d^3$]] | 3.87
row: $\ce{Mn^2+}$ | $3d^5$ | [[5.92]]
row: $\ce{Fe^2+}$ | [[$3d^6$]] | 4.90
row: $\ce{Cu+}$ | $3d^{10}$ | [[0, colourless]]
```

```ng-numerical
id: moment-from-z
title: Magnetic moment from atomic number
question: Calculate the spin-only magnetic moment of $\text{M}^{ {{q}}+}$ for a 3d element with $Z={{Z}}$.
var: Z | 22 | 29 | 1
var: q | 2 | 3 | 1
let: d = Z - 18 - q
let: n = min(d, 10 - d)
answer: sqrt(n*(n+2))
unit: BM
dp: 2
step: $\text{M}^{ {{q}}+}$: $[\text{Ar}]\,3d^{ {{d}} }$, so $n={{n}}$ unpaired electrons
step: $\mu=\sqrt{n(n+2)}=\sqrt{ {{n*(n+2)}} }=$ **{{sqrt(n*(n+2)):2}} BM**
```

```ng-figure
id: dd-transition
title: Why transition-metal ions are coloured
svg:
<svg viewBox="0 0 330 204" role="img" aria-label="A d–d transition: an electron jumps between split d levels by absorbing light" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M30,120 H110" stroke-width="1"/><path d="M150,70 H200 M210,70 H260" stroke-width="2"/><path d="M140,140 H180 M190,140 H230 M240,140 H280" stroke-width="2"/><path d="M110,120 L150,70 M110,120 L140,140" stroke-dasharray="3 3" stroke-width="1"/><path d="M200,134 V80" stroke="#E0B400" stroke-width="2"/><path d="M202.5,84.3L200,80L197.5,84.3" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="80" y="136" text-anchor="middle" font-size="8">free-ion d orbitals</text><text x="205" y="62" text-anchor="middle" font-size="9">higher d orbitals</text><text x="210" y="158" text-anchor="middle" font-size="9">lower d orbitals</text><text x="160" y="138" text-anchor="middle" font-size="13">↑</text><text x="205" y="68" text-anchor="middle"></text><text x="216" y="108" font-size="8">absorbs one colour</text><text x="160" y="182" text-anchor="middle" font-size="9">we see the complementary colour</text><text x="160" y="195" text-anchor="middle" font-size="9">Cu²⁺ absorbs red, looks blue</text></g>
</svg>
caption: In a compound the d orbitals split; an electron jumps up by absorbing visible light, and we see the colour that is left.
part: 30, 120 | Free-ion d orbitals | All five at the same energy before ligands surround the ion.
part: 262, 140 | Lower d orbitals | Hold the electron before the jump.
part: 200, 106 | Absorbed light | Energy gap matches one colour of visible light.
part: 300, 188 | Complementary colour | What reaches the eye: Cu²⁺ absorbs red and looks blue.
```

```ng-steps
id: colour-steps
title: How a d–d transition gives colour
svg:
<svg viewBox="0 0 330 196" role="img" aria-label="d–d transition step by step" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<g data-step="1"><path d="M30,120 H110" stroke-width="1"/><g fill="currentColor" stroke="none"><text x="80" y="136" text-anchor="middle" font-size="8">free-ion d orbitals</text></g></g><g data-step="2"><path d="M150,70 H200 M210,70 H260" stroke-width="2"/><path d="M140,140 H180 M190,140 H230 M240,140 H280" stroke-width="2"/><path d="M110,120 L150,70 M110,120 L140,140" stroke-dasharray="3 3" stroke-width="1"/><g fill="currentColor" stroke="none"><text x="205" y="62" text-anchor="middle" font-size="9">higher d orbitals</text><text x="210" y="158" text-anchor="middle" font-size="9">lower d orbitals</text><text x="160" y="138" text-anchor="middle" font-size="13">↑</text></g></g><g data-step="3"><path d="M200,134 V80" stroke="#E0B400" stroke-width="2"/><path d="M202.5,84.3L200,80L197.5,84.3" stroke-width="1"/><g fill="currentColor" stroke="none"><text x="216" y="108" font-size="8">absorbs one colour</text></g></g><g data-step="4"><g fill="currentColor" stroke="none"><text x="160" y="186" text-anchor="middle" font-size="9">we see the complementary colour</text></g></g>
</svg>
step: In the free ion all five d orbitals have the **same energy**.
step: Surrounding ions or molecules **split** them into lower and higher sets.
step: An electron in a lower orbital **absorbs one colour** of visible light and jumps up (a d–d transition).
step: The light that is **not absorbed** reaches the eye: the complementary colour. $d^0$ and $d^{10}$ ions cannot do this, so they are colourless.
```

**In one breath:** Unpaired d electrons make an ion paramagnetic, with $\mu=\sqrt{n(n+2)}$; a partly filled d subshell allows d–d transitions and colour, so $d^0$ and $d^{10}$ ions are colourless and diamagnetic.

## Complexes, catalysts, interstitial compounds and alloys

*NCERT 4.3.11–4.3.14*

Four more characteristic properties, each with a one-line reason.

**Complex formation.** Transition-metal ions are small and highly charged, and they have vacant d orbitals of suitable energy to accept electron pairs from surrounding ions or molecules. Hence $\ce{[Fe(CN)6]^4-}$, $\ce{[Cu(NH3)4]^2+}$ and thousands more; Chapter 5 is about them.

**Catalysis.** Transition metals and their compounds catalyse many reactions: iron in the Haber process, $\ce{V2O5}$ in the Contact process, nickel in hydrogenation. Two abilities lie behind this. They can switch between oxidation states, so they can take part in a reaction and be regenerated. And they can bind reactant molecules, on a solid surface or in a complex, bringing them together with weakened bonds. Iron(III) speeding up the reaction between iodide and persulphate shows the first: $\ce{2Fe^3+ + 2I-}$ $\ce{-> 2Fe^2+ + I2}$, then $\ce{2Fe^2+ + S2O8^2-}$ $\ce{-> 2Fe^3+ + 2SO4^2-}$.

**Interstitial compounds.** Small atoms such as H, C and N can fit into the gaps of the metal lattice, giving compounds like $\ce{TiC}$, $\ce{Mn4N}$ and $\ce{Fe3H}$. Their formulas are usually non-stoichiometric. They are very hard, melt even higher than the pure metal, still conduct, and are chemically inert.

**Alloys.** Because transition metals have similar atomic radii, the atoms of one can replace those of another in the lattice. Brass (copper–zinc), bronze (copper–tin) and the steels are examples.

```ng-figure
id: interstitial-lattice
title: Interstitial compound
svg:
<svg viewBox="0 0 330 150" role="img" aria-label="Small atoms in the holes of a metal lattice" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<circle cx="50" cy="40" r="18" stroke-width="1.5"/><circle cx="94" cy="40" r="18" stroke-width="1.5"/><circle cx="138" cy="40" r="18" stroke-width="1.5"/><circle cx="182" cy="40" r="18" stroke-width="1.5"/><circle cx="50" cy="84" r="18" stroke-width="1.5"/><circle cx="94" cy="84" r="18" stroke-width="1.5"/><circle cx="138" cy="84" r="18" stroke-width="1.5"/><circle cx="182" cy="84" r="18" stroke-width="1.5"/><circle cx="50" cy="128" r="18" stroke-width="1.5"/><circle cx="94" cy="128" r="18" stroke-width="1.5"/><circle cx="138" cy="128" r="18" stroke-width="1.5"/><circle cx="182" cy="128" r="18" stroke-width="1.5"/><circle cx="72" cy="62" r="5" fill="#E0B400" stroke="none"/><circle cx="116" cy="62" r="5" fill="#E0B400" stroke="none"/><circle cx="160" cy="62" r="5" fill="#E0B400" stroke="none"/><circle cx="72" cy="106" r="5" fill="#E0B400" stroke="none"/><circle cx="116" cy="106" r="5" fill="#E0B400" stroke="none"/><circle cx="160" cy="106" r="5" fill="#E0B400" stroke="none"/><path d="M236,44 L208,40" stroke-width="1"/><path d="M236,106 L166,106" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="240" y="48" font-size="10">metal atoms</text><text x="240" y="110" font-size="10">H, C or N</text><text x="240" y="123" font-size="10">in the holes</text></g>
</svg>
caption: Small atoms (H, C, N) sit in the holes between metal atoms, making the metal harder and higher-melting.
part: 182, 40 | Metal atom | The lattice itself is unchanged.
part: 160, 106 | Small atom in a hole | H, C or N: formulas like TiC, Mn₄N, Fe₃H are non-stoichiometric.
```

```ng-steps
id: fe-catalysis-steps
title: How iron(III) catalyses the iodide–persulphate reaction
step: The direct reaction between two negative ions, $\ce{I-}$ and $\ce{S2O8^2-}$, is slow: they repel each other.
step: $\ce{Fe^3+}$ oxidises iodide: $\ce{2Fe^3+ + 2I-}$ $\ce{-> 2Fe^2+ + I2}$.
step: Persulphate oxidises the iron back: $\ce{2Fe^2+ + S2O8^2-}$ $\ce{-> 2Fe^3+ + 2SO4^2-}$.
step: Iron ends as it began: switching between +2 and +3 is what makes it a catalyst.
```

**In one breath:** Small, highly charged ions with vacant d orbitals form complexes; variable oxidation states and surface binding make catalysts; small atoms fit in lattice gaps; similar sizes allow alloys.

## Potassium dichromate

*NCERT 4.4 (potassium dichromate)*

$\ce{K2Cr2O7}$ is made from chromite ore, $\ce{FeCr2O4}$, in three steps. The ore is fused with sodium carbonate in air, which oxidises chromium to yellow sodium chromate. Acid converts chromate to orange dichromate. Adding potassium chloride then gives the less soluble potassium salt, which crystallises out.

:::formula Preparation of potassium dichromate
$\ce{4FeCr2O4 + 8Na2CO3}$ $\ce{+ 7O2}$ $\ce{-> 8Na2CrO4 + 2Fe2O3}$ $\ce{+ 8CO2}$

$\ce{2Na2CrO4 + 2H+}$ $\ce{-> Na2Cr2O7 + 2Na+}$ $\ce{+ H2O}$

$\ce{Na2Cr2O7 + 2KCl}$ $\ce{-> K2Cr2O7 + 2NaCl}$
:::

Chromate and dichromate are two forms of the same oxidation state (+6), linked by pH: $\ce{2CrO4^2- + 2H+}$ $\ce{<=> Cr2O7^2- + H2O}$. Acid pushes it to orange dichromate; alkali pulls it back to yellow chromate. The chromate ion is tetrahedral, and dichromate is two such tetrahedra sharing one oxygen corner, with a Cr–O–Cr angle of about 126°.

In acid, dichromate is a strong oxidising agent. Each chromium goes from +6 to +3, so one dichromate ion takes six electrons.

:::formula Dichromate as an oxidising agent
$\ce{Cr2O7^2- + 14H+ + 6e-}$ $\ce{-> 2Cr^3+ + 7H2O}$ ($E^\circ=1.33$ V)

With iron(II): $\ce{Cr2O7^2- + 14H+ + 6Fe^2+}$ $\ce{-> 2Cr^3+ + 6Fe^3+}$ $\ce{+ 7H2O}$

With iodide: $\ce{Cr2O7^2- + 14H+ + 6I-}$ $\ce{-> 2Cr^3+ + 3I2 + 7H2O}$
:::

It also oxidises tin(II) to tin(IV) and hydrogen sulphide to sulphur. Because it can be obtained very pure, it is used as a primary standard in volumetric analysis.

```ng-steps
id: make-dichromate
title: Making potassium dichromate from chromite ore
step: **Fuse** chromite ore with sodium carbonate in air: $\ce{4FeCr2O4 + 8Na2CO3}$ $\ce{+ 7O2}$ $\ce{-> 8Na2CrO4 + 2Fe2O3}$ $\ce{+ 8CO2}$ (yellow sodium chromate).
step: **Acidify** with sulphuric acid: $\ce{2Na2CrO4 + 2H+}$ $\ce{-> Na2Cr2O7 + 2Na+}$ $\ce{+ H2O}$ (orange sodium dichromate).
step: **Add KCl:** $\ce{Na2Cr2O7 + 2KCl}$ $\ce{-> K2Cr2O7 + 2NaCl}$; the less soluble potassium dichromate crystallises out.
```

```ng-figure
id: dichromate-structure
title: Structure of the dichromate ion
svg:
<svg viewBox="0 0 320 190" role="img" aria-label="Structure of the dichromate ion" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M91.9,87.6 L68.4,73.6 M89.6,91.4 L66.1,77.4"/><path d="M90.4,102.3 L70.3,124.7 M93.7,105.3 L73.6,127.7"/><path d="M99.6,106.3 L104.1,134.3 M103.9,105.7 L108.4,133.7"/><path d="M230.4,91.4 L253.9,77.4 M228.1,87.6 L251.6,73.6"/><path d="M226.3,105.3 L246.4,127.7 M229.6,102.3 L249.7,124.7"/><path d="M216.1,105.7 L211.6,133.7 M220.4,106.3 L215.9,134.3"/><path d="M115.0,86.75 L146.8,69.25999999999999" stroke="#E0B400" stroke-width="2.5"/><path d="M205.0,86.75 L173.2,69.25999999999999" stroke="#E0B400" stroke-width="2.5"/><path d="M146,74 Q160,84 174,74" stroke-width="1"/><path d="M20,30 V165 M20,30 H28 M20,165 H28 M300,30 V165 M300,30 H292 M300,165 H292" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="58" y="74" text-anchor="middle" font-size="11">O</text><text x="64" y="139" text-anchor="middle" font-size="11">O</text><text x="108" y="149" text-anchor="middle" font-size="11">O</text><text x="100" y="99" text-anchor="middle" font-size="11">Cr</text><text x="262" y="74" text-anchor="middle" font-size="11">O</text><text x="256" y="139" text-anchor="middle" font-size="11">O</text><text x="212" y="149" text-anchor="middle" font-size="11">O</text><text x="220" y="99" text-anchor="middle" font-size="11">Cr</text><text x="160" y="66" text-anchor="middle" font-size="11">O</text><text x="160" y="98" text-anchor="middle" font-size="10">126°</text><text x="306" y="34" font-size="11">2−</text><text x="160" y="182" text-anchor="middle" font-size="10">two CrO₄ tetrahedra sharing one O</text></g>
</svg>
caption: Two tetrahedra share one oxygen; the Cr–O–Cr angle is about 126°.
part: 100, 95 | Chromium (+6) | Each Cr sits at the centre of a tetrahedron of four O atoms.
part: 160, 34 | Bridging oxygen | Shared by the two tetrahedra.
part: 160, 120 | Cr–O–Cr angle | About 126°.
part: 58, 70 | Terminal oxygen | Six terminal Cr–O bonds, all equal in length.
```

```ng-draw
id: draw-dichromate
title: Draw the structure of the dichromate ion
svg: ref: notes#dichromate-structure
time: 2
```

```ng-numerical
id: dichromate-fe
title: Dichromate titration with fresh numbers
question: How many mL of {{c}} M $\ce{K2Cr2O7}$ are needed to oxidise {{n}} mmol of $\ce{Fe^2+}$ in acid solution?
var: c | 0.01 | 0.05 | 0.01
var: n | 1.2 | 6.0 | 0.6
answer: n/(6*c)
unit: mL
dp: 1
step: $\ce{Cr2O7^2- + 6Fe^2+ + 14H+}$ $\ce{-> 2Cr^3+ + 6Fe^3+}$ $\ce{+ 7H2O}$: 1 mol dichromate for 6 mol $\ce{Fe^2+}$
step: mmol of dichromate $=\dfrac{ {{n}} }{6}={{n/6:3}}$
step: $V=\dfrac{\text{mmol}}{c}=\dfrac{ {{n/6:3}} }{ {{c}} }=$ **{{n/(6*c):1}} mL**
```

```ng-compare
id: chromate-vs-dichromate
title: Chromate vs dichromate
cols: Chromate | Dichromate
row: Formula | $\ce{CrO4^2-}$ | $\ce{Cr2O7^2-}$
row: Colour | yellow | orange
row: Favoured in | alkali | acid
row: Shape | tetrahedral | two tetrahedra, one shared O
row: State of Cr | +6 | +6 (no redox)
```

**In one breath:** Chromite → chromate → dichromate → potassium salt; chromate (yellow) and dichromate (orange) interconvert with pH; in acid $\ce{Cr2O7^2-}$ takes six electrons and becomes $\ce{2Cr^3+}$.

## Potassium permanganate

*NCERT 4.4 (potassium permanganate)*

$\ce{KMnO4}$ is made from pyrolusite, $\ce{MnO2}$. Fusing the ore with potassium hydroxide in air gives green potassium manganate (Mn +6). In neutral or acidic solution manganate disproportionates into purple permanganate (Mn +7) and $\ce{MnO2}$. Industrially the manganate is oxidised electrolytically instead.

:::formula Preparation of potassium permanganate
$\ce{2MnO2 + 4KOH + O2}$ $\ce{-> 2K2MnO4 + 2H2O}$

$\ce{3MnO4^2- + 4H+}$ $\ce{-> 2MnO4- + MnO2}$ $\ce{+ 2H2O}$
:::

Manganate is green and paramagnetic (one unpaired electron); permanganate is purple and diamagnetic. Both ions are tetrahedral. Potassium permanganate forms dark purple crystals that are only moderately soluble in water; heated to 513 K it decomposes: $\ce{2KMnO4}$ $\ce{-> K2MnO4 + MnO2 + O2}$.

What permanganate is reduced *to* depends on the medium, and this decides how many electrons it takes.

:::formula Permanganate as an oxidising agent
Acidic: $\ce{MnO4- + 8H+ + 5e-}$ $\ce{-> Mn^2+ + 4H2O}$ ($E^\circ=1.52$ V) — 5 electrons

Neutral or faintly alkaline: $\ce{MnO4- + 2H2O + 3e-}$ $\ce{-> MnO2 + 4OH-}$ — 3 electrons
:::

In acid it oxidises iron(II) to iron(III), oxalate to carbon dioxide, iodide to iodine, sulphide to sulphur, sulphite to sulphate and nitrite to nitrate. You do not need to memorise each equation if you can build them. Count electrons: permanganate takes 5; find how many the other species gives; cross-multiply; then balance oxygen with water and hydrogen with $\ce{H+}$.

:::skeleton Worked example: building an ionic equation
*Write the balanced ionic equation for the oxidation of oxalate ion by acidified permanganate.*

Reduction: $\ce{MnO4- + 8H+ + 5e-}$ $\ce{-> Mn^2+ + 4H2O}$ [½]

Oxidation: $\ce{C2O4^2- -> 2CO2 + 2e-}$ [½]

Multiply the first by 2 and the second by 5 to cancel 10 electrons:

$\ce{2MnO4- + 5C2O4^2-}$ $\ce{+ 16H+}$ $\ce{-> 2Mn^2+ + 10CO2}$ $\ce{+ 8H2O}$ [1]

Check the charge: left $-2-10+16=+4$; right $+4$. Balanced.
:::

These reactions are the basis of the titrations in your practical course, against oxalic acid and Mohr's salt. Permanganate is its own indicator: the first drop in excess leaves a permanent pale pink.

:::skeleton Worked example: titration arithmetic
*How many moles of $\ce{Fe^2+}$ are oxidised by 25.0 mL of 0.020 M $\ce{KMnO4}$ in acid?*

$\ce{MnO4- + 5Fe^2+ + 8H+}$ $\ce{-> Mn^2+ + 5Fe^3+ + 4H2O}$: 1 mol $\ce{MnO4-}$ reacts with 5 mol $\ce{Fe^2+}$ [1]

Moles of $\ce{MnO4-}=0.020\times0.0250=5.0\times10^{-4}$ mol [½]

Moles of $\ce{Fe^2+}=5\times5.0\times10^{-4}=$ **$2.5\times10^{-3}$ mol** [½]
:::

:::tip
Permanganate titrations are acidified with dilute **sulphuric** acid, never hydrochloric: permanganate would oxidise the chloride to chlorine and spoil the result.
:::

```ng-steps
id: make-permanganate
title: Making potassium permanganate from pyrolusite
step: **Fuse** $\ce{MnO2}$ with KOH in air (or with $\ce{KNO3}$): $\ce{2MnO2 + 4KOH + O2}$ $\ce{-> 2K2MnO4 + 2H2O}$ (green potassium manganate).
step: **Disproportionate** the manganate in neutral or acid solution: $\ce{3MnO4^2- + 4H+}$ $\ce{-> 2MnO4- + MnO2}$ $\ce{+ 2H2O}$ (purple permanganate).
step: **Industry** does the second step by electrolytic oxidation: $\ce{MnO4^2- -> MnO4- + e-}$.
```

```ng-figure
id: permanganate-structure
title: Structure of the permanganate ion
svg:
<svg viewBox="0 0 320 190" role="img" aria-label="Structure of the permanganate ion" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M162.2,79.2 L162.2,44.6 M157.8,79.2 L157.8,44.6"/><path d="M142.8,101.3 L107.0,119.4 M144.7,105.2 L109.0,123.4"/><path d="M175.3,105.2 L211.0,123.4 M177.2,101.3 L213.0,119.4"/><path d="M163.75,108.75 L172.0,139.0" stroke-dasharray="3 2"/><path d="M60,20 V165 M60,20 H68 M60,165 H68 M260,20 V165 M260,20 H252 M260,165 H252" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="160" y="36" text-anchor="middle" font-size="11">O</text><text x="95" y="132" text-anchor="middle" font-size="11">O</text><text x="225" y="132" text-anchor="middle" font-size="11">O</text><text x="175" y="154" text-anchor="middle" font-size="11">O⁻</text><text x="160" y="99" text-anchor="middle" font-size="11">Mn</text><text x="160" y="182" text-anchor="middle" font-size="10">tetrahedral; Mn in +7 state</text><text x="266" y="24" font-size="12">−</text></g>
</svg>
caption: Tetrahedral, with Mn in the +7 state; manganate has the same shape.
part: 160, 95 | Manganese (+7) | At the centre of the tetrahedron; $d^0$, so the colour comes from charge transfer.
part: 160, 32 | Mn=O bond | Three π-bonded oxygens and one O⁻ share the charge.
part: 175, 150 | O⁻ | Carries the single negative charge.
```

```ng-numerical
id: permanganate-oxalate
title: Permanganate and oxalic acid, fresh numbers
question: {{V}} mL of {{c}} M $\ce{KMnO4}$ exactly oxidises the oxalic acid in a flask (acid medium). How many millimoles of oxalic acid were present?
var: V | 10 | 25 | 0.5
var: c | 0.01 | 0.04 | 0.005
answer: 2.5*V*c
unit: mmol
dp: 3
step: $\ce{2MnO4- + 5C2O4^2-}$ $\ce{+ 16H+}$ $\ce{-> 2Mn^2+ + 10CO2}$ $\ce{+ 8H2O}$
step: mmol $\ce{MnO4-}$ $={{V}}\times{{c}}={{V*c:4}}$
step: mmol oxalate $=\dfrac52\times{{V*c:4}}=$ **{{2.5*V*c:3}} mmol**
```

```ng-mnemonic
id: five-and-six
title: Electrons taken in acid
trick: **Permanganate takes a handful (5), dichromate takes an over (6)**
meaning: $\ce{MnO4-}$ gains **5** electrons in acid ($\ce{Mn^7+ -> Mn^2+}$): five fingers of a hand.
meaning: $\ce{Cr2O7^2-}$ gains **6** electrons ($\ce{2Cr^6+ -> 2Cr^3+}$): six balls in a cricket over.
prompt: How many electrons do permanganate and dichromate each gain in acid?
```

**In one breath:** Pyrolusite → green manganate → purple permanganate. $\ce{MnO4-}$ takes 5 electrons in acid (to $\ce{Mn^2+}$) and 3 in neutral solution (to $\ce{MnO2}$); build every equation by balancing electrons.

## The lanthanoids

*NCERT 4.5 · Table 4.9 · Fig. 4.6*

The f-block sits apart at the bottom of the table. In the **lanthanoids**, cerium (58) to lutetium (71), the 4f orbitals are being filled: $[\text{Xe}]\,4f^{1-14}\,5d^{0-1}\,6s^2$. These 4f electrons lie deep inside the atom and take almost no part in bonding, so the fourteen elements are chemically very alike. Their common oxidation state is +3.

A few show +2 or +4, and the reason is again a stable configuration. $\ce{Ce^4+}$ has the xenon core ($4f^0$); $\ce{Eu^2+}$ is $4f^7$ and $\ce{Yb^2+}$ is $4f^{14}$. But +3 remains the preferred state, so $\ce{Ce^4+}$ tends to drop back to +3 and is a good oxidising agent, while $\ce{Eu^2+}$ tends to climb to +3 and is a good reducing agent.

The most important idea here is the **lanthanoid contraction**: the steady decrease in atomic and ionic radii from lanthanum to lutetium. Each step adds one proton and one 4f electron. The 4f orbitals are diffuse and shield each other from the nucleus very poorly, so the effective nuclear charge keeps growing and pulls the whole atom in.

It has three consequences. The elements that follow, in the 5d row, are much smaller than expected and match their 4d partners in size, so pairs like Zr and Hf occur together in nature and are very hard to separate. The lanthanoids themselves are hard to separate from one another. And as the ions shrink, their hydroxides become less ionic, so basic strength falls from $\ce{La(OH)3}$ to $\ce{Lu(OH)3}$.

The metals are silvery and reactive: they burn in oxygen to give $\ce{Ln2O3}$, release hydrogen from dilute acids, and combine with carbon and hydrogen on heating. Their main use is in alloy steels. **Mischmetall**, about 95% lanthanoid metal and 5% iron with traces of S, C, Ca and Al, is alloyed with magnesium for bullets, shells and lighter flints.

```ng-mnemonic
id: four-f-feeble
title: Cause of lanthanoid contraction
trick: **4f is a feeble shield**
meaning: Each added 4f electron shields the next one poorly from the growing nuclear charge, so radii shrink steadily from La to Lu.
prompt: What causes lanthanoid contraction?
```

```ng-figure
id: lanthanoid-radii
title: Lanthanoid contraction
svg:
<svg viewBox="0 0 320 172" role="img" aria-label="Ionic radii of the lanthanoid ions" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M44,20 V150 H312"/><path d="M46.5,24.3L44,20L41.5,24.3" stroke-width="1"/><path d="M307.7,152.5L312,150L307.7,147.5" stroke-width="1"/><path d="M54.0,41.4 L71.3,47.1 L88.6,64.3 L105.9,68.3 L123.1,75.7 L140.4,82.6 L157.7,88.9 L175.0,94.0 L192.3,102.6 L209.6,108.9 L226.9,115.1 L244.1,121.4 L261.4,127.1 L278.7,134.0 L296.0,138.0" class="u" stroke-width="2.5"/><circle cx="54.0" cy="41.4" r="2.5" fill="currentColor"/><circle cx="71.3" cy="47.1" r="2.5" fill="currentColor"/><circle cx="88.6" cy="64.3" r="2.5" fill="currentColor"/><circle cx="105.9" cy="68.3" r="2.5" fill="currentColor"/><circle cx="123.1" cy="75.7" r="2.5" fill="currentColor"/><circle cx="140.4" cy="82.6" r="2.5" fill="currentColor"/><circle cx="157.7" cy="88.9" r="2.5" fill="currentColor"/><circle cx="175.0" cy="94.0" r="2.5" fill="currentColor"/><circle cx="192.3" cy="102.6" r="2.5" fill="currentColor"/><circle cx="209.6" cy="108.9" r="2.5" fill="currentColor"/><circle cx="226.9" cy="115.1" r="2.5" fill="currentColor"/><circle cx="244.1" cy="121.4" r="2.5" fill="currentColor"/><circle cx="261.4" cy="127.1" r="2.5" fill="currentColor"/><circle cx="278.7" cy="134.0" r="2.5" fill="currentColor"/><circle cx="296.0" cy="138.0" r="2.5" fill="currentColor"/>
<g fill="currentColor" stroke="none"><text x="54" y="163" text-anchor="middle" font-size="9">La</text><text x="71.29" y="163" text-anchor="middle" font-size="9">Ce</text><text x="88.57" y="163" text-anchor="middle" font-size="9">Pr</text><text x="105.9" y="163" text-anchor="middle" font-size="9">Nd</text><text x="123.1" y="163" text-anchor="middle" font-size="9">Pm</text><text x="140.4" y="163" text-anchor="middle" font-size="9">Sm</text><text x="157.7" y="163" text-anchor="middle" font-size="9">Eu</text><text x="175" y="163" text-anchor="middle" font-size="9">Gd</text><text x="192.3" y="163" text-anchor="middle" font-size="9">Tb</text><text x="209.6" y="163" text-anchor="middle" font-size="9">Dy</text><text x="226.9" y="163" text-anchor="middle" font-size="9">Ho</text><text x="244.1" y="163" text-anchor="middle" font-size="9">Er</text><text x="261.4" y="163" text-anchor="middle" font-size="9">Tm</text><text x="278.7" y="163" text-anchor="middle" font-size="9">Yb</text><text x="296" y="163" text-anchor="middle" font-size="9">Lu</text><text x="40" y="61.57" text-anchor="end" font-size="9">100</text><text x="40" y="118.7" text-anchor="end" font-size="9">90</text><text x="68" y="31.43" font-size="9">La³⁺ 103 pm</text><text x="282" y="114" text-anchor="end" font-size="9">Lu³⁺ 86 pm</text><text x="12" y="90" text-anchor="middle" transform="rotate(-90 12 90)" font-size="10">Ln³⁺ radius (pm)</text></g>
</svg>
caption: The Ln³⁺ radius falls steadily from 103 pm (La) to 86 pm (Lu).
part: 54, 41 | La³⁺, largest | 103 pm.
part: 296, 138 | Lu³⁺, smallest | 86 pm: about 17 pm smaller after fourteen steps.
part: 175, 94 | Smooth fall | Each added 4f electron shields poorly, so the effective nuclear charge rises.
```

```ng-draw
id: draw-lanthanoid-radii
title: Sketch the trend in Ln³⁺ radii and label the two ends
svg: ref: notes#lanthanoid-radii
time: 2
```

```ng-explain
id: consequences-contraction
prompt: In three lines, give the consequences of lanthanoid contraction.
lines: 3
```

**In one breath:** Lanthanoids fill 4f, are mostly +3 and very similar. Poor shielding by 4f electrons shrinks them steadily (lanthanoid contraction), making 4d and 5d metals the same size and the hydroxides less basic.

## The actinoids, and how they differ

*NCERT 4.6 · Tables 4.10, 4.11 · Example 4.10 · Intext 4.10*

The **actinoids**, thorium (90) to lawrencium (103), fill the 5f orbitals. All of them are radioactive, and the later ones exist only in tiny amounts with short half-lives, which makes them hard to study.

Their chemistry is more varied than that of the lanthanoids. The 5f, 6d and 7s levels are close in energy, so more electrons can be used: +3 is common, but uranium reaches +6 and neptunium and plutonium +7. There is an **actinoid contraction** too, and it is larger from element to element, because 5f electrons shield even more poorly than 4f.

The comparison comes down to the orbitals. 4f electrons are buried; 5f electrons extend further out and can take part in bonding. So actinoids show more oxidation states, form complexes and oxo-cations such as $\ce{UO2^2+}$ more readily, and have more complicated magnetic behaviour. Among the lanthanoids only promethium is radioactive; among the actinoids all are.

```ng-compare
id: lanthanoids-vs-actinoids
title: Lanthanoids vs actinoids
cols: Lanthanoids | Actinoids
row: Orbitals filling | 4f | 5f
row: Oxidation states | mainly +3 | +3 and many others (up to +7)
row: Radioactive | only Pm | all
row: Complex formation | weaker | stronger
row: Contraction | smooth, smaller | larger (5f shields worse)
row: Oxo ions | do not form | form them, e.g. $\ce{UO2^2+}$
```

**In one breath:** Actinoids fill 5f, are all radioactive and show more oxidation states than lanthanoids because 5f, 6d and 7s are close in energy; their contraction is greater because 5f shields worse.

## Where d- and f-block elements are used

*NCERT 4.7*

Most questions here are one-liners, so learn each use with its reason. Iron and steel in construction; $\ce{TiO2}$ as a white pigment; $\ce{MnO2}$ in dry cells; zinc and nickel–cadmium in batteries; copper, silver and gold as coinage metals; $\ce{TiCl4}$ with $\ce{Al(CH3)3}$ (the Ziegler catalyst) for polythene; $\ce{PdCl2}$ in the Wacker process for ethanal; and silver bromide in photography. Behind every one of them is a property from this chapter: strength from metallic bonding, catalysis from variable oxidation states, colour from the d electrons.

**In one breath:** Iron and steel build, $\ce{TiO2}$ whitens, $\ce{MnO2}$ powers dry cells, Ziegler ($\ce{TiCl4}$ + $\ce{Al(CH3)3}$) makes polythene and $\ce{PdCl2}$ (Wacker) makes ethanal.
