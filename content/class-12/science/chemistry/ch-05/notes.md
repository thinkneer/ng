# Ch 5 · Coordination Compounds

Haemoglobin carries oxygen with an iron atom held in a ring of nitrogen atoms. Chlorophyll does its work around magnesium, vitamin B$_{12}$ around cobalt. The blue of copper sulphate solution, the deep blue made when ammonia is added to it, and the anticancer drug cis-platin all belong to the same family: compounds in which a central metal is surrounded by a fixed number of ions or molecules attached to it. This chapter gives you the vocabulary for such compounds, the rules for naming them, the ways they form isomers, and two theories of the bonding that explain their shapes, magnetism and colour.

## Werner's idea: two kinds of valency

In the 1890s chemists were puzzled by a set of compounds of cobalt(III) chloride with ammonia. Their formulas, $\ce{CoCl3.6NH3}$, $\ce{CoCl3.5NH3}$ and $\ce{CoCl3.4NH3}$, looked alike, but they had different colours and behaved differently. With excess silver nitrate, one mole of the first gave three moles of silver chloride, the second gave two, and the third only one. Evidently not all the chloride was the same.

Alfred Werner explained this by proposing that a metal has two kinds of valency. The **primary valency** is the ordinary, ionisable one. It equals the oxidation state and is satisfied by negative ions. The **secondary valency** is non-ionisable. It is satisfied by neutral molecules or negative ions bound directly to the metal, its number is fixed for a given metal (we now call it the coordination number), and these groups point in definite directions in space, giving the compound its shape.

For cobalt(III) the secondary valency is six. So the three compounds are $\ce{[Co(NH3)6]Cl3}$, $\ce{[CoCl(NH3)5]Cl2}$ and $\ce{[CoCl2(NH3)4]Cl}$. Whatever is inside the square bracket is held firmly and does not ionise; only the chloride outside is free to be precipitated.

:::skeleton Worked example: Werner's theory
*One mole of $\ce{CrCl3.6H2O}$ gives two moles of AgCl with excess silver nitrate. Write the formula of the complex and the number of ions it gives in solution. (Coordination number of Cr = 6)*

Two moles of AgCl means two $\ce{Cl-}$ are outside the bracket and one is inside [1]

Six positions round Cr: one $\ce{Cl-}$ and five $\ce{H2O}$; the sixth water is outside: **$\ce{[CrCl(H2O)5]Cl2.H2O}$** [1]

In solution: $\ce{[CrCl(H2O)5]^2+ + 2Cl-}$, that is **3 ions** [1]
:::

This also separates a complex from a **double salt**. Mohr's salt, $\ce{FeSO4.(NH4)2SO4.6H2O}$, breaks up completely into simple ions in water and gives the tests for each. $\ce{K4[Fe(CN)6]}$ does not: the $\ce{[Fe(CN)6]^4-}$ ion stays intact, so the solution gives no test for $\ce{Fe^2+}$ or $\ce{CN-}$.

```ng-numerical
id: werner-agcl
title: Werner's experiment with fresh numbers
question: {{m}} mol of $\ce{[CoCl(NH3)5]Cl2}$ is treated with excess silver nitrate. How many moles of AgCl precipitate?
var: m | 0.01 | 0.10 | 0.01
answer: 2*m
unit: mol
dp: 2
step: Only the chlorides **outside** the bracket are ionisable: 2 per formula unit
step: moles of AgCl $=2\times{{m}}=$ **{{2*m:2}} mol**
```

```ng-compare
id: double-salt-vs-complex
title: Double salt vs complex
cols: Double salt | Complex
row: In water | breaks completely into simple ions | the complex ion stays intact
row: Tests | gives tests for every ion present | the metal and ligands in the bracket do not show their usual tests
row: Example | Mohr's salt, potash alum | $\ce{K4[Fe(CN)6]}$
```

**In one breath:** A metal has an ionisable primary valency (oxidation state) and a fixed, directional secondary valency (coordination number); groups inside the square bracket do not ionise.

## The vocabulary

A handful of terms describe every coordination compound. Take $\ce{K4[Fe(CN)6]}$ as the running example.

The **coordination entity** is the central metal with everything attached to it: $\ce{[Fe(CN)6]^4-}$. The **central atom or ion** ($\ce{Fe^2+}$) accepts electron pairs, so it is a Lewis acid. The **ligands** ($\ce{CN-}$) are the ions or molecules that donate those pairs. Everything in the square bracket is the **coordination sphere**; the ions outside ($\ce{K+}$) are **counter ions**.

Ligands are classified by how many donor atoms they use, their **denticity**. A **unidentate** ligand binds through one atom: $\ce{Cl-}$, $\ce{H2O}$, $\ce{NH3}$. A **didentate** ligand binds through two: ethane-1,2-diamine (en, $\ce{H2NCH2CH2NH2}$) uses both nitrogens, and oxalate ($\ce{C2O4^2-}$) two oxygens. EDTA$^{4-}$ is hexadentate. When a ligand grips the metal with two or more donor atoms it forms a ring, and the complex is called a **chelate**; chelates are more stable than similar complexes of unidentate ligands. An **ambidentate** ligand has two different possible donor atoms but uses one at a time: $\ce{NO2-}$ can bind through N or through O, and $\ce{SCN-}$ through S or N.

The **coordination number** is the number of donor *atoms* bonded directly to the metal. The **oxidation number** of the metal is the charge it would have if all ligands were removed with their electron pairs. A complex with only one kind of ligand is **homoleptic** ($\ce{[Co(NH3)6]^3+}$); with more than one kind it is **heteroleptic** ($\ce{[Co(NH3)4Cl2]+}$). The shape traced by the donor atoms is the **coordination polyhedron**: octahedral, tetrahedral or square planar.

:::formula Oxidation number of the metal
Oxidation number of metal + sum of ligand charges = charge on the complex

Coordination number = number of donor atoms (each en or oxalate counts as 2, EDTA as 6)
:::

:::skeleton Worked example: oxidation number and coordination number
*Find the oxidation number and coordination number of cobalt in $\ce{[CoCl2(en)2]Cl}$.*

The complex ion is $\ce{[CoCl2(en)2]+}$ (one $\ce{Cl-}$ outside) [½]

$x+2(-1)+2(0)=+1$, so $x=$ **+3** [1]

Donor atoms: 2 from two $\ce{Cl-}$ plus $2\times2$ from two en = **6** [½]
:::

:::tip
Coordination number counts donor atoms, not ligands. $\ce{[Co(en)3]^3+}$ has three ligands but a coordination number of six.
:::

**In one breath:** Ligands donate electron pairs to a central metal; denticity is how many donor atoms a ligand uses, coordination number is the total of donor atoms, and the oxidation number comes from balancing charges.

## Naming coordination compounds

The rules look fussy but there are only a few.

1. Name the cation first, then the anion, as for any salt.
2. Inside the complex, name the ligands first, in **alphabetical order**, then the metal.
3. Anionic ligands end in **-o** (chlorido, cyanido, hydroxido, oxalato). Neutral ligands keep their names, with four special ones: aqua ($\ce{H2O}$), ammine ($\ce{NH3}$), carbonyl (CO) and nitrosyl (NO).
4. Show how many of each ligand with di-, tri-, tetra-. If the ligand's own name already contains such a prefix, use bis-, tris-, tetrakis- and put the ligand in brackets: bis(ethane-1,2-diamine).
5. Give the oxidation state of the metal in Roman numerals in brackets.
6. If the complex is an **anion**, the metal's name ends in **-ate**, and some take their Latin form: ferrate (Fe), cuprate (Cu), argentate (Ag), aurate (Au).

Alphabetical order goes by the ligand name itself, ignoring the number prefix, so *tri*ammine comes before aqua, and *penta*ammine before chlorido. An ambidentate ligand is named by its donor atom: nitrito-N for $\ce{-NO2}$, nitrito-O for $\ce{-ONO}$.

:::skeleton Worked example: writing IUPAC names
*Name (i) $\ce{[CoCl(NH3)5]Cl2}$ and (ii) $\ce{K3[Fe(C2O4)3]}$.*

(i) Cation is the complex. Ligands alphabetically: ammine (5), chlorido (1). Cobalt: $x-1=+2$, so +3. **pentaamminechloridocobalt(III) chloride** [1]

(ii) Anion is the complex, so the metal takes -ate. Iron: $x-6=-3$, so +3. **potassium trioxalatoferrate(III)** [1]
:::

:::tip
Four spelling slips lose the mark: "amine" for ammine (two m's), "chloro" for chlorido, forgetting -ate for an anionic complex, and leaving out the Roman numeral.
:::

Going the other way, to write a formula from a name, put the metal first, then the ligands, enclose the whole entity in square brackets and work out the charge to find the counter ions. Tetraamminediaquacobalt(III) chloride is $\ce{[Co(NH3)4(H2O)2]Cl3}$.

```ng-steps
id: naming-steps
title: Naming a coordination compound
step: Name the **cation first**, then the anion (as in any salt).
step: Inside the complex, name the **ligands in alphabetical order** (ignore di, tri, bis…); anionic ligands end in -o (chlorido, cyanido), $\ce{NH3}$ is ammine, $\ce{H2O}$ aqua.
step: Give the number of each ligand: di, tri, tetra; bis, tris for names that already contain a number (ethane-1,2-diamine).
step: Name the **metal**, adding **-ate** if the complex is an anion (ferrate, cobaltate).
step: Put the metal's **oxidation state** in Roman numerals in brackets, e.g. (III).
```

```ng-mnemonic
id: naming-order
title: Order of a complex name
trick: **Lig**ands **A**lphabetically, then **M**etal, then **M**ood in brackets
meaning: Ligands in alphabetical order, then the metal (-ate if anionic), then its oxidation state in Roman numerals.
prompt: In what order are the parts of a complex name written?
```

**In one breath:** Cation before anion; inside the complex, ligands alphabetically, then the metal with its oxidation state in Roman numerals; anionic complexes end in -ate.

## Structural isomerism

Isomers have the same formula but different arrangements. In **structural** isomers the atoms are connected differently. There are four types, and each is easy to recognise from the pair of formulas.

**Ionisation isomerism:** a ligand and a counter ion change places. $\ce{[Co(NH3)5(SO4)]Br}$ and $\ce{[Co(NH3)5Br]SO4}$ give different ions in solution, so the first gives a precipitate with silver nitrate and the second with barium chloride.

**Linkage isomerism:** an ambidentate ligand binds through a different atom. $\ce{[Co(NH3)5(NO2)]Cl2}$, bonded through nitrogen, is yellow; $\ce{[Co(NH3)5(ONO)]Cl2}$, bonded through oxygen, is red.

**Coordination isomerism:** when both cation and anion are complexes, ligands are exchanged between the two metals, as in $\ce{[Co(NH3)6][Cr(CN)6]}$ and $\ce{[Cr(NH3)6][Co(CN)6]}$.

**Solvate (hydrate) isomerism:** water is either a ligand or merely water of crystallisation. $\ce{[Cr(H2O)6]Cl3}$ is violet and $\ce{[CrCl(H2O)5]Cl2.H2O}$ is grey-green.

**In one breath:** Structural isomers differ in what is bonded to what: ion in or out of the sphere (ionisation), donor atom (linkage), ligands swapped between two metals (coordination), or water in or out (solvate).

## Stereoisomerism

Stereoisomers have the same bonds but a different arrangement in space.

**Geometrical isomerism** arises when two like ligands can be either next to each other (*cis*) or opposite (*trans*). In a square planar complex such as $\ce{[Pt(NH3)2Cl2]}$, the two chlorides can sit at adjacent corners or at opposite corners.

```ng-figure
id: cis-trans-platin
title: cis and trans [Pt(NH₃)₂Cl₂]
svg:
<svg viewBox="0 0 320 140" role="img" aria-label="cis and trans isomers of diamminedichloridoplatinum(II)" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M74.36,69.36L55.36,50.36"/><path d="M95.64,69.36L114.6,50.36"/><path d="M74.36,90.64L55.36,109.6"/><path d="M95.64,90.64L114.6,109.6"/><path d="M229.4,69.36L210.4,50.36"/><path d="M250.6,69.36L269.6,50.36"/><path d="M229.4,90.64L210.4,109.6"/><path d="M250.6,90.64L269.6,109.6"/>
<g fill="currentColor" stroke="none"><text x="85" y="20" text-anchor="middle">cis</text><text x="85" y="84" text-anchor="middle" font-size="12">Pt</text><text x="45" y="46" text-anchor="end" style="fill:#E0B400" font-weight="bold">Cl</text><text x="125" y="46">NH<tspan dy="3" font-size="8">3</tspan></text><text x="45" y="122" text-anchor="end" style="fill:#E0B400" font-weight="bold">Cl</text><text x="125" y="122">NH<tspan dy="3" font-size="8">3</tspan></text><text x="240" y="20" text-anchor="middle">trans</text><text x="240" y="84" text-anchor="middle" font-size="12">Pt</text><text x="200" y="46" text-anchor="end" style="fill:#E0B400" font-weight="bold">Cl</text><text x="280" y="46">NH<tspan dy="3" font-size="8">3</tspan></text><text x="200" y="122" text-anchor="end">H<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">N</tspan></text><text x="280" y="122" style="fill:#E0B400" font-weight="bold">Cl</text></g>
</svg>
caption: Figure 5.1 Square planar [Pt(NH₃)₂Cl₂]: in the cis isomer the two Cl are neighbours (90° apart); in the trans isomer they are opposite (180° apart).
part: 66, 61 | cis: Cl neighbours | 90° apart. cis-platin is used against cancer.
part: 85, 102 | Pt(II), square planar | $dsp^2$ hybridised, diamagnetic.
part: 259, 99 | trans: Cl opposite | 180° apart.
part: 259, 61 | NH₃ | A neutral unidentate ligand.
```

Octahedral complexes of the type $\ce{[MX2L4]}$, such as $\ce{[Co(NH3)4Cl2]+}$, show the same cis–trans pair. Those of the type $\ce{[MX3L3]}$, such as $\ce{[Co(NH3)3(NO2)3]}$, have a **facial (fac)** isomer, with the three like ligands on one triangular face, and a **meridional (mer)** isomer, with them in a line around the middle. Tetrahedral complexes cannot show geometrical isomerism at all, because in a tetrahedron every position is next to every other.

**Optical isomerism** arises when a complex and its mirror image cannot be superimposed, like left and right hands. Such a pair are called *d* and *l* forms (dextro and laevo) because they rotate plane-polarised light in opposite directions. It is common in octahedral complexes with didentate ligands: $\ce{[Co(en)3]^3+}$ exists as a *d*, *l* pair.

The complex $\ce{[CoCl2(en)2]+}$ brings both ideas together. Its trans form has a plane of symmetry, so its mirror image is identical and it is optically inactive. Its cis form has no such plane and exists as a *d*, *l* pair. Three stereoisomers in all.

```ng-figure
id: coen-isomers
title: Isomers of [CoCl₂(en)₂]⁺
svg:
<svg viewBox="0 0 362 200" role="img" aria-label="Geometrical and optical isomers of dichloridobis(ethane-1,2-diamine)cobalt(III) ion" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<circle cx="68" cy="96" r="3" fill="currentColor"/><path d="M68,96 L68.0,52.8" stroke-width="1.2"/><path d="M68,96 L68.0,139.2" stroke-width="1.2"/><path d="M68,96 L32.8,96.0" stroke-width="1.2"/><path d="M68,96 L103.2,96.0" stroke-width="1.2"/><path d="M68,96 L50.4,116.8" stroke-width="1.2"/><path d="M68,96 L85.6,76.8" stroke-dasharray="3 2" stroke-width="1"/><path d="M24.0,96.0 Q14.5,117.1 46.0,122.0" class="u" stroke-width="2"/><path d="M112.0,96.0 Q121.7,76.5 90.0,72.0" class="u" stroke-width="2"/><circle cx="180" cy="96" r="3" fill="currentColor"/><path d="M180,96 L180.0,52.8" stroke-width="1.2"/><path d="M180,96 L180.0,139.2" stroke-width="1.2"/><path d="M180,96 L144.8,96.0" stroke-width="1.2"/><path d="M180,96 L215.2,96.0" stroke-width="1.2"/><path d="M180,96 L162.4,116.8" stroke-width="1.2"/><path d="M180,96 L197.6,76.8" stroke-dasharray="3 2" stroke-width="1"/><path d="M136.0,96.0 Q126.5,117.1 158.0,122.0" class="u" stroke-width="2"/><path d="M202.0,72.0 Q204.0,128.7 180.0,150.0" class="u" stroke-width="2"/><circle cx="296" cy="96" r="3" fill="currentColor"/><path d="M296,96 L296.0,52.8" stroke-width="1.2"/><path d="M296,96 L296.0,139.2" stroke-width="1.2"/><path d="M296,96 L260.8,96.0" stroke-width="1.2"/><path d="M296,96 L331.2,96.0" stroke-width="1.2"/><path d="M296,96 L278.4,116.8" stroke-width="1.2"/><path d="M296,96 L313.6,76.8" stroke-dasharray="3 2" stroke-width="1"/><path d="M340.0,96.0 Q349.7,76.5 318.0,72.0" class="u" stroke-width="2"/><path d="M274.0,122.0 Q279.2,157.2 296.0,150.0" class="u" stroke-width="2"/><path d="M238,30 V178" stroke-dasharray="5 4" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="68" y="16" text-anchor="middle" font-size="11">trans</text><text x="68.0" y="40.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="68.0" y="160.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="16.39" y="120.3" text-anchor="middle" font-size="9">en</text><text x="119.8" y="81.17" text-anchor="middle" font-size="9">en</text><text x="62" y="90" text-anchor="end" font-size="9">Co</text><text x="180" y="16" text-anchor="middle" font-size="11">cis (d)</text><text x="180.0" y="40.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="230.0" y="100.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="128.4" y="120.3" text-anchor="middle" font-size="9">en</text><text x="202.8" y="131.1" text-anchor="middle" font-size="9">en</text><text x="174" y="90" text-anchor="end" font-size="9">Co</text><text x="296" y="16" text-anchor="middle" font-size="11">cis (l)</text><text x="296.0" y="40.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="246.0" y="100.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="347.8" y="81.17" text-anchor="middle" font-size="9">en</text><text x="279.7" y="159.3" text-anchor="middle" font-size="9">en</text><text x="290" y="90" text-anchor="end" font-size="9">Co</text><text x="238" y="192" text-anchor="middle" font-size="9">mirror</text></g>
</svg>
caption: Figure 5.2 Trans has a mirror plane, so it is optically inactive; the cis form exists as two non-superimposable mirror images.
part: 68, 70 | trans: Cl opposite | 180° apart; the molecule has a plane of symmetry, so it is not chiral.
part: 180, 70 | cis: Cl adjacent | 90° apart; no plane of symmetry.
part: 238, 165 | Mirror | cis-d and cis-l are mirror images that cannot be superimposed: optical isomers.
part: 136, 114 | en (bidentate) | Each ethane-1,2-diamine spans two neighbouring corners.
```

:::tip
In an exam, draw the octahedron and place the ligands; a name alone rarely earns full marks. And say *why* the trans form is inactive: it has a plane of symmetry.
:::

```ng-draw
id: draw-cis-trans
title: Draw the cis and trans isomers of [Pt(NH₃)₂Cl₂]
svg: ref: notes#cis-trans-platin
time: 2
```

```ng-draw
id: draw-coen-isomers
title: Draw the three isomers of [CoCl₂(en)₂]⁺
svg: ref: notes#coen-isomers
time: 4
```

```ng-mnemonic
id: cis-sisters
title: cis or trans?
trick: **cis = sisters sit together; trans = strangers sit across**
meaning: In the cis isomer the two like ligands are neighbours (90°); in trans they are opposite (180°).
prompt: In a cis isomer, are the like ligands neighbours or opposite?
```

**In one breath:** Geometrical isomers are cis/trans (or fac/mer) arrangements, impossible in tetrahedral complexes; optical isomers are non-superimposable mirror images, common with didentate ligands in octahedral complexes.

## Bonding I: valence bond theory

Why are some complexes octahedral and others tetrahedral or square planar, some magnetic and others not? Valence bond theory (VBT) gives the first answer. The metal ion makes available empty orbitals, these **hybridise** to give a set of equivalent orbitals pointing in definite directions, and each one accepts an electron pair from a ligand.

:::formula Hybridisation and shape
Coordination number 4: $sp^3$ → tetrahedral; $dsp^2$ → square planar

Coordination number 6: $d^2sp^3$ (inner d orbitals) or $sp^3d^2$ (outer d orbitals) → octahedral
:::

The key question in any VBT problem is whether the ligands force the metal's d electrons to pair up. Compare two cobalt(III) complexes; $\ce{Co^3+}$ is $3d^6$.

In $\ce{[Co(NH3)6]^3+}$, ammonia makes the six d electrons pair into three orbitals. That frees two 3d orbitals, which hybridise with 4s and three 4p: $d^2sp^3$. The complex is octahedral and, with no unpaired electrons, **diamagnetic**. Because it uses inner (3d) orbitals it is called an **inner-orbital** or **low-spin** complex.

In $\ce{[CoF6]^3-}$, fluoride is a weak ligand and does not force pairing. The 3d electrons stay as they are, with four unpaired, and the ligands must use 4s, 4p and two *outer* 4d orbitals: $sp^3d^2$. The complex is again octahedral but **paramagnetic**: an **outer-orbital** or **high-spin** complex.

Nickel(II), $3d^8$, shows the same contrast for coordination number four. In $\ce{[NiCl4]^2-}$ the weak chloride causes no pairing: $sp^3$, tetrahedral, two unpaired electrons, paramagnetic. In $\ce{[Ni(CN)4]^2-}$ the strong cyanide pairs the electrons and empties one 3d orbital: $dsp^2$, square planar, diamagnetic. In $\ce{[Ni(CO)4]}$ nickel is in the zero oxidation state, $3d^8\,4s^2$; carbon monoxide pushes the 4s pair into 3d to give $3d^{10}$, leaving 4s and 4p for $sp^3$: tetrahedral and diamagnetic.

:::skeleton Worked example: a VBT answer
*Using VBT, predict the hybridisation, shape and magnetic behaviour of $\ce{[Fe(CN)6]^3-}$. (Fe: Z = 26)*

Iron: $x-6=-3$, so $\ce{Fe^3+}$, $[\text{Ar}]\,3d^5$ [½]

$\ce{CN-}$ is a strong-field ligand: the five d electrons pair into three orbitals (two pairs and one single), leaving two 3d orbitals empty [1]

Hybridisation $d^2sp^3$ (two 3d, one 4s, three 4p); shape **octahedral**; inner-orbital complex [1]

One unpaired electron: **paramagnetic**, $\mu=\sqrt{1(1+2)}=1.73$ BM [½]
:::

VBT works, but it has limits. It rests on assumptions, it does not explain colour, it gives no numbers for magnetic data or stability, it cannot predict whether a four-coordinate complex will be tetrahedral or square planar, and it has no way of telling a weak ligand from a strong one in advance.

```ng-steps
id: vbt-answer-steps
title: Answering a VBT question in five steps
step: Find the **oxidation state** of the metal and its d configuration.
step: Decide whether the ligand is **strong field** (pairs electrons: $\ce{CN-}$, CO, $\ce{NH3}$ with $\ce{Co^3+}$) or weak field ($\ce{F-}$, $\ce{Cl-}$, $\ce{H2O}$).
step: Draw the boxes: 3d, 4s, 4p (and 4d), placing the metal electrons and then the ligand pairs.
step: Read off the **hybridisation and shape**: $d^2sp^3$ inner orbital or $sp^3d^2$ outer orbital (octahedral), $dsp^2$ square planar, $sp^3$ tetrahedral.
step: State the **magnetic** character: count unpaired electrons, $\mu=\sqrt{n(n+2)}$.
```

```ng-fill
id: hybridisation-table
title: Hybridisation and shape
cols: Example | Hybridisation | Shape
row: $\ce{[NiCl4]^2-}$ | $sp^3$ | [[tetrahedral]]
row: $\ce{[Ni(CN)4]^2-}$ | [[$dsp^2$]] | square planar
row: $\ce{[Co(NH3)6]^3+}$ | [[$d^2sp^3$, inner orbital]] | octahedral
row: $\ce{[CoF6]^3-}$ | [[$sp^3d^2$, outer orbital]] | octahedral
```

**In one breath:** In VBT the metal hybridises empty orbitals to accept ligand pairs. Strong ligands pair the d electrons (inner-orbital, low spin, $d^2sp^3$ or $dsp^2$); weak ones do not (outer-orbital, high spin, $sp^3d^2$ or $sp^3$).

## Bonding II: crystal field theory

Crystal field theory (CFT) tackles what VBT could not, especially strong versus weak ligands and colour. It treats the ligands as point negative charges and asks what they do to the energies of the metal's five d orbitals.

In a free ion the five d orbitals have equal energy. Now bring six ligands in along the x, y and z axes to make an octahedron. Two of the d orbitals, $d_{x^2-y^2}$ and $d_{z^2}$, point straight at the ligands, and electrons in them are repelled strongly, so their energy rises. The other three, $d_{xy}$, $d_{yz}$ and $d_{xz}$, point between the axes and are repelled less. The d level splits in two: an upper pair called $e_g$ and a lower trio called $t_{2g}$. The gap between them is the **crystal field splitting**, $\Delta_o$.

```ng-figure
id: crystal-field-splitting
title: Crystal-field splitting
svg:
<svg viewBox="0 0 350 152" role="img" aria-label="Crystal field splitting of d orbitals in octahedral and tetrahedral fields" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M8,100L16,100" stroke-width="2"/><path d="M19,100L27,100" stroke-width="2"/><path d="M30,100L38,100" stroke-width="2"/><path d="M41,100L49,100" stroke-width="2"/><path d="M52,100L60,100" stroke-width="2"/><path d="M100,58L111,58" stroke-width="2"/><path d="M116,58L127,58" stroke-width="2"/><path d="M92,128L103,128" stroke-width="2"/><path d="M108,128L119,128" stroke-width="2"/><path d="M124,128L135,128" stroke-width="2"/><path d="M64,100L98,58" stroke-dasharray="4 3" stroke-width="1"/><path d="M64,100L90,128" stroke-dasharray="4 3" stroke-width="1"/><path d="M92,100L150,100" stroke-dasharray="4 3" stroke-width="1"/><path d="M155,59L155,127" stroke-width="1"/><path d="M152.5,122.7L155,127L157.5,122.7" stroke-width="1"/><path d="M157.5,63.3L155,59L152.5,63.3" stroke-width="1"/><path d="M182,100L190,100" stroke-width="2"/><path d="M193,100L201,100" stroke-width="2"/><path d="M204,100L212,100" stroke-width="2"/><path d="M215,100L223,100" stroke-width="2"/><path d="M226,100L234,100" stroke-width="2"/><path d="M266,84L277,84" stroke-width="2"/><path d="M282,84L293,84" stroke-width="2"/><path d="M298,84L309,84" stroke-width="2"/><path d="M274,124L285,124" stroke-width="2"/><path d="M290,124L301,124" stroke-width="2"/><path d="M238,100L264,84" stroke-dasharray="4 3" stroke-width="1"/><path d="M238,100L272,124" stroke-dasharray="4 3" stroke-width="1"/><path d="M266,100L322,100" stroke-dasharray="4 3" stroke-width="1"/><path d="M327,85L327,123" stroke-width="1"/><path d="M324.5,118.7L327,123L329.5,118.7" stroke-width="1"/><path d="M329.5,89.3L327,85L324.5,89.3" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="85" y="14" text-anchor="middle">Octahedral</text><text x="34" y="116" text-anchor="middle" font-size="9">d orbitals</text><text x="113" y="50" text-anchor="middle">e<tspan dy="3" font-size="8">g</tspan></text><text x="113" y="144" text-anchor="middle">t<tspan dy="3" font-size="8">2g</tspan></text><text x="159" y="97">Δ<tspan dy="3" font-size="8">o</tspan></text><text x="124" y="84" text-anchor="middle" font-size="8">+0.6 Δ<tspan dy="3" font-size="8">o</tspan></text><text x="124" y="117" text-anchor="middle" font-size="8">−0.4 Δ<tspan dy="3" font-size="8">o</tspan></text><text x="255" y="14" text-anchor="middle">Tetrahedral</text><text x="208" y="116" text-anchor="middle" font-size="9">d orbitals</text><text x="287" y="76" text-anchor="middle">t<tspan dy="3" font-size="8">2</tspan></text><text x="287" y="140" text-anchor="middle">e</text><text x="331" y="108">Δ<tspan dy="3" font-size="8">t</tspan></text></g>
</svg>
caption: Figure 5.3 Octahedral field: eg raised by 0.6 Δo, t2g lowered by 0.4 Δo. Tetrahedral field: the order is inverted and the gap is smaller, Δt = 4/9 Δo.
part: 34, 86 | Free-ion d orbitals | All five have the same energy before the ligands approach.
part: 113, 68 | $e_g$ | Point at the ligands, so they are raised by $0.6\Delta_o$.
part: 113, 118 | $t_{2g}$ | Point between the ligands, lowered by $0.4\Delta_o$.
part: 155, 93 | $\Delta_o$ | The octahedral splitting energy.
part: 287, 94 | $t_2$ (tetrahedral) | The order is inverted in a tetrahedral field.
part: 327, 104 | $\Delta_t$ | Smaller: $\Delta_t=\tfrac49\Delta_o$, so tetrahedral complexes are high spin.
```

How big $\Delta_o$ is depends on the ligand. Arranging ligands in order of the splitting they cause gives the **spectrochemical series**.

:::formula Spectrochemical series
$\ce{I-}$ < $\ce{Br-}$ < $\ce{SCN-}$ < $\ce{Cl-}$ < $\ce{S^2-}$ < $\ce{F-}$ < $\ce{OH-}$ < $\ce{C2O4^2-}$ < $\ce{H2O}$ < $\ce{NCS-}$ < edta$^{4-}$ < $\ce{NH3}$ < en < $\ce{CN-}$ < CO

Left: weak-field ligands (small $\Delta_o$). Right: strong-field ligands (large $\Delta_o$).
:::

Now fill in the electrons. The first three go singly into $t_{2g}$. The fourth has a choice: jump up to $e_g$, which costs $\Delta_o$, or pair up in $t_{2g}$, which costs the pairing energy $P$. It takes the cheaper option.

- If $\Delta_o<P$ (weak-field ligand), it goes up: $t_{2g}^3\,e_g^1$. Electrons stay unpaired: a **high-spin** complex.
- If $\Delta_o>P$ (strong-field ligand), it pairs: $t_{2g}^4\,e_g^0$. A **low-spin** complex.

The choice exists only for $d^4$ to $d^7$ ions. This is the same high-spin and low-spin distinction VBT described, but now with a reason.

In a tetrahedral complex the pattern is upside down, with the trio above the pair, and the splitting is smaller: $\Delta_t=\tfrac{4}{9}\Delta_o$. That is almost never enough to beat the pairing energy, so tetrahedral complexes are practically always high spin.

:::skeleton Worked example: high spin and low spin
*Write the d-electron configuration and the number of unpaired electrons in $\ce{[Mn(H2O)6]^2+}$ and $\ce{[Mn(CN)6]^4-}$.*

In both, manganese is $\ce{Mn^2+}$, $3d^5$ [½]

$\ce{H2O}$ is weak-field ($\Delta_o<P$): $t_{2g}^3\,e_g^2$, **5 unpaired** electrons (high spin) [¾]

$\ce{CN-}$ is strong-field ($\Delta_o>P$): $t_{2g}^5\,e_g^0$, **1 unpaired** electron (low spin) [¾]
:::

```ng-draw
id: draw-cfs
title: Draw the splitting of d orbitals in an octahedral field
svg: ref: notes#crystal-field-splitting
time: 3
```

```ng-numerical
id: delta-t
title: Tetrahedral splitting, fresh numbers
question: For a metal ion and a ligand, $\Delta_o={{d}}$ kJ mol⁻¹. Estimate $\Delta_t$ for the same metal and ligand in a tetrahedral complex.
var: d | 90 | 360 | 18
answer: 4/9*d
unit: kJ mol⁻¹
dp: 0
step: $\Delta_t=\tfrac49\Delta_o$
step: $\Delta_t=\tfrac49\times{{d}}=$ **{{4/9*d:0}} kJ mol⁻¹**: too small to force pairing, so tetrahedral complexes are high spin
```

```ng-mnemonic
id: spectrochemical-series
title: Spectrochemical series, weak to strong
trick: **I B**ought **S**ome **C**ool **S**ummer **F**rocks; **O**nly **O**ne **W**as **N**ice, **E**ven **N**ow **E**veryone **C**omplains **C**ost
meaning: $\ce{I-}$ < $\ce{Br-}$ < $\ce{SCN-}$ < $\ce{Cl-}$ < $\ce{S^2-}$ < $\ce{F-}$ < $\ce{OH-}$ < oxalate < $\ce{H2O}$ < $\ce{NCS-}$ < edta < $\ce{NH3}$ < en < $\ce{CN-}$ < CO
prompt: Recite the spectrochemical series from the weakest ligand.
```

**In one breath:** Six ligands split the d orbitals into lower $t_{2g}$ and upper $e_g$, a gap $\Delta_o$ apart. Strong-field ligands make $\Delta_o$ exceed the pairing energy and give low-spin complexes; weak-field ligands give high-spin ones.

## Colour, and where the theories stop

Crystal field splitting explains colour neatly. The gap $\Delta_o$ corresponds to the energy of visible light. An electron in $t_{2g}$ absorbs light of that energy and jumps to $e_g$, a **d–d transition**, and the complex shows the complementary colour of what it absorbed. $\ce{[Ti(H2O)6]^3+}$ has a single d electron; it absorbs blue-green light and looks violet.

Three observations follow directly.

Remove the ligands and the colour goes. Anhydrous copper sulphate is white because, with no water ligands, there is no splitting and no d–d transition; add water and it turns blue.

Change the ligand and the colour changes. Adding ethane-1,2-diamine to green $\ce{[Ni(H2O)6]^2+}$ replaces water with a stronger-field ligand step by step, the splitting grows, light of shorter wavelength is absorbed, and the solution goes from green through blue to violet.

No d electrons, or ten, means no colour, as you saw in Chapter 4. Even gemstones fit: ruby is aluminium oxide with a little $\ce{Cr^3+}$, and emerald is beryl with $\ce{Cr^3+}$.

CFT has its own weakness. If ligands were simply point charges, negatively charged ones should split the d orbitals most, yet the anions sit at the *weak* end of the series, below neutral water and ammonia. The theory also ignores the covalent character of the metal–ligand bond.

**In one breath:** Colour comes from an electron absorbing visible light to jump from $t_{2g}$ to $e_g$; no ligands, or no d–d possibility, means no colour, and a stronger ligand shifts absorption to shorter wavelengths.

## Metal carbonyls

Carbon monoxide forms compounds with metals in which the metal has an oxidation state of zero: $\ce{[Ni(CO)4]}$ is tetrahedral, $\ce{[Fe(CO)5]}$ trigonal bipyramidal and $\ce{[Cr(CO)6]}$ octahedral. Some have metal–metal bonds: in $\ce{[Mn2(CO)10]}$ two $\ce{Mn(CO)5}$ units are joined by an Mn–Mn bond, and $\ce{[Co2(CO)8]}$ has a Co–Co bond bridged by two CO groups.

The bonding has two parts that reinforce each other. Carbon donates its lone pair into an empty metal orbital, forming a σ bond. At the same time the metal donates electrons from a filled d orbital back into an empty antibonding π* orbital of CO, forming a π bond. The σ donation makes the metal richer in electrons and so better at giving them back; the back-donation makes CO a better σ donor. This mutual strengthening is called **synergic bonding**. It makes the metal–carbon bond stronger than a single bond, and slightly weakens the C–O bond.

**In one breath:** In carbonyls the metal is in the zero state; CO gives a σ pair to the metal and takes π electron density back, and the two effects strengthen each other (synergic bonding).

## Why coordination compounds matter

A short list of uses, each of which has appeared as a one-mark question.

- **Analysis:** nickel(II) gives a red precipitate with dimethylglyoxime. The hardness of water is measured by titrating with EDTA, which forms stable complexes with $\ce{Ca^2+}$ and $\ce{Mg^2+}$.
- **Metallurgy:** silver and gold are extracted as the soluble cyanide complexes $\ce{[Ag(CN)2]-}$ and $\ce{[Au(CN)2]-}$. Nickel is purified by forming and then decomposing $\ce{[Ni(CO)4]}$ (the Mond process).
- **Biology:** chlorophyll contains magnesium, haemoglobin iron and vitamin B$_{12}$ cobalt.
- **Catalysis:** Wilkinson's catalyst, $\ce{[(Ph3P)3RhCl]}$, hydrogenates alkenes.
- **Electroplating and photography:** silver and gold plate more smoothly from their cyanide complexes; in photography, hypo dissolves unexposed silver bromide as $\ce{[Ag(S2O3)2]^3-}$.
- **Medicine:** cis-platin treats some cancers, and EDTA is used in lead poisoning.

**In one breath:** Complexes are used to detect and estimate metals, extract and purify them, run biology (Mg, Fe, Co), catalyse reactions and treat disease.
