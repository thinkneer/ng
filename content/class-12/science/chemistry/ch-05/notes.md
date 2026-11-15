# Ch 5 · Coordination Compounds

Haemoglobin carries oxygen with an iron atom held in a ring of nitrogen atoms. Chlorophyll does its work around magnesium, vitamin B$_{12}$ around cobalt. The blue of copper sulphate solution, the deep blue made when ammonia is added to it, and the anticancer drug cis-platin all belong to the same family: compounds in which a central metal is surrounded by a fixed number of ions or molecules attached to it. This chapter gives you the vocabulary for such compounds, the rules for naming them, the ways they form isomers, and two theories of the bonding that explain their shapes, magnetism and colour.

*Read alongside NCERT Chemistry Part I, Unit 5 (in your textbook, or [ncert.nic.in/textbook/pdf/lech105.pdf](https://ncert.nic.in/textbook/pdf/lech105.pdf)). Each section below names the NCERT section, tables, figures and questions it explains.*

## Werner's idea: two kinds of valency

*NCERT 5.1 · Table 5.1 · Example 5.1*

In the 1890s chemists were puzzled by a set of compounds of cobalt(III) chloride with ammonia. Their formulas, $\ce{CoCl3.6NH3}$, $\ce{CoCl3.5NH3}$ and $\ce{CoCl3.4NH3}$, looked alike, but they had different colours and behaved differently. With excess silver nitrate, one mole of the first gave three moles of silver chloride, the second gave two, and the third only one. Evidently not all the chloride was the same. Two of them, a green and a violet form of $\ce{CoCl3.4NH3}$, even shared one formula: an early sign of isomerism. Conductivity told the same story: their solutions behaved as 1:3, 1:2 and 1:1 electrolytes, that is four, three and two ions per formula unit.

Alfred Werner explained this by proposing that a metal has two kinds of valency. The **primary valency** is the ordinary, ionisable one. It equals the oxidation state and is satisfied by negative ions. The **secondary valency** is non-ionisable. It is satisfied by neutral molecules or negative ions bound directly to the metal, its number is fixed for a given metal (we now call it the coordination number), and these groups point in definite directions in space, giving the compound its shape. In today's language the primary valency is an ionic bond and the secondary valency a covalent (coordinate) bond.

For cobalt(III) the secondary valency is six. So the three compounds are $\ce{[Co(NH3)6]Cl3}$, $\ce{[CoCl(NH3)5]Cl2}$ and $\ce{[CoCl2(NH3)4]Cl}$. Whatever is inside the square bracket is held firmly and does not ionise; only the chloride outside is free to be precipitated.

```ng-fill
id: werner-table
title: Werner's cobalt(III) chloride–ammonia complexes
cols: Complex | AgCl / ions
row: $\ce{[Co(NH3)6]Cl3}$ | [[3 / 4]]
row: $\ce{[CoCl(NH3)5]Cl2}$ | [[2 / 3]]
row: $\ce{[CoCl2(NH3)4]Cl}$ | [[1 / 2]]
```

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

```ng-numerical
id: werner-ions
title: Ions in solution from the AgCl test
question: One mole of a cobalt(III) chloride–ammonia complex (coordination number 6) gives {{a}} mol of AgCl with excess silver nitrate. How many ions does one formula unit give in water?
var: a | 1 | 3 | 1
answer: a + 1
unit: ions
dp: 0
step: {{a}} chloride ions are outside the bracket; the rest are ligands
step: Formula: $[\text{CoCl}_{ {{3-a}} }(\text{NH}_3)_{ {{3+a}} }]\text{Cl}_{ {{a}} }$
step: Ions $=1$ complex ion $+\,{{a}}$ chloride $=$ **{{a+1}}**
```

**In one breath:** A metal has an ionisable primary valency (oxidation state) and a fixed, directional secondary valency (coordination number); groups inside the square bracket do not ionise.

## The vocabulary

*NCERT 5.2 · Fig. 5.1*

A handful of terms describe every coordination compound. Take $\ce{K4[Fe(CN)6]}$ as the running example.

The **coordination entity** is the central metal with everything attached to it: $\ce{[Fe(CN)6]^4-}$. The **central atom or ion** ($\ce{Fe^2+}$) accepts electron pairs, so it is a Lewis acid. The **ligands** ($\ce{CN-}$) are the ions or molecules that donate those pairs. Everything in the square bracket is the **coordination sphere**; the ions outside ($\ce{K+}$) are **counter ions**.

Ligands are classified by how many donor atoms they use, their **denticity**. A **unidentate** ligand binds through one atom: $\ce{Cl-}$, $\ce{H2O}$, $\ce{NH3}$. A **didentate** ligand binds through two: ethane-1,2-diamine (en, $\ce{H2NCH2CH2NH2}$) uses both nitrogens, and oxalate ($\ce{C2O4^2-}$) two oxygens. EDTA$^{4-}$ is hexadentate. When a ligand grips the metal with two or more donor atoms it forms a ring, and the complex is called a **chelate**; chelates are more stable than similar complexes of unidentate ligands. An **ambidentate** ligand has two different possible donor atoms but uses one at a time: $\ce{NO2-}$ can bind through N or through O, and $\ce{SCN-}$ through S or N.

The **coordination number** is the number of donor *atoms* bonded directly to the metal. Only σ bonds count: if a ligand also forms π bonds with the metal, as CO does, they add nothing to the coordination number. The **oxidation number** of the metal is the charge it would have if all ligands were removed with their electron pairs. A complex with only one kind of ligand is **homoleptic** ($\ce{[Co(NH3)6]^3+}$); with more than one kind it is **heteroleptic** ($\ce{[Co(NH3)4Cl2]+}$). The shape traced by the donor atoms is the **coordination polyhedron**: octahedral, tetrahedral or square planar.

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

```ng-figure
id: coordination-polyhedra
title: Shapes of coordination entities
svg:
<svg viewBox="0 0 340 252" role="img" aria-label="Common shapes of coordination entities" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M55,58 L55.0,22.0" stroke-width="1.3"/><path d="M55,58 L25.0,80.0" stroke-width="1.3"/><path d="M55,58 L85.0,84.0" stroke-width="1.3"/><path d="M55,58 L69.0,66.0" stroke-dasharray="3 2" stroke-width="1"/><circle cx="55" cy="22" r="2.5" fill="currentColor"/><circle cx="25" cy="80" r="2.5" fill="currentColor"/><circle cx="85" cy="84" r="2.5" fill="currentColor"/><circle cx="69" cy="66" r="2.5" fill="currentColor"/><path d="M170,58 L132.0,63.0" stroke-width="1.3"/><path d="M170,58 L208.0,53.0" stroke-width="1.3"/><path d="M170,58 L156.0,77.0" stroke-width="1.3"/><path d="M170,58 L184.0,39.0" stroke-dasharray="3 2" stroke-width="1"/><circle cx="132" cy="63" r="2.5" fill="currentColor"/><circle cx="208" cy="53" r="2.5" fill="currentColor"/><circle cx="156" cy="77" r="2.5" fill="currentColor"/><circle cx="184" cy="39" r="2.5" fill="currentColor"/><path d="M285,58 L285.0,22.0" stroke-width="1.3"/><path d="M285,58 L285.0,94.0" stroke-width="1.3"/><path d="M285,58 L247.0,63.0" stroke-width="1.3"/><path d="M285,58 L323.0,53.0" stroke-width="1.3"/><path d="M285,58 L271.0,77.0" stroke-width="1.3"/><path d="M285,58 L299.0,39.0" stroke-dasharray="3 2" stroke-width="1"/><circle cx="285" cy="22" r="2.5" fill="currentColor"/><circle cx="285" cy="94" r="2.5" fill="currentColor"/><circle cx="247" cy="63" r="2.5" fill="currentColor"/><circle cx="323" cy="53" r="2.5" fill="currentColor"/><circle cx="271" cy="77" r="2.5" fill="currentColor"/><circle cx="299" cy="39" r="2.5" fill="currentColor"/><path d="M110,170 L110.0,134.0" stroke-width="1.3"/><path d="M110,170 L110.0,206.0" stroke-width="1.3"/><path d="M110,170 L76.0,176.0" stroke-width="1.3"/><path d="M110,170 L144.0,176.0" stroke-width="1.3"/><path d="M110,170 L120.0,156.0" stroke-dasharray="3 2" stroke-width="1"/><circle cx="110" cy="134" r="2.5" fill="currentColor"/><circle cx="110" cy="206" r="2.5" fill="currentColor"/><circle cx="76" cy="176" r="2.5" fill="currentColor"/><circle cx="144" cy="176" r="2.5" fill="currentColor"/><circle cx="120" cy="156" r="2.5" fill="currentColor"/><path d="M235,170 L235.0,134.0" stroke-width="1.3"/><path d="M235,170 L199.0,178.0" stroke-width="1.3"/><path d="M235,170 L271.0,168.0" stroke-width="1.3"/><path d="M235,170 L223.0,190.0" stroke-width="1.3"/><path d="M235,170 L249.0,158.0" stroke-dasharray="3 2" stroke-width="1"/><circle cx="235" cy="134" r="2.5" fill="currentColor"/><circle cx="199" cy="178" r="2.5" fill="currentColor"/><circle cx="271" cy="168" r="2.5" fill="currentColor"/><circle cx="223" cy="190" r="2.5" fill="currentColor"/><circle cx="249" cy="158" r="2.5" fill="currentColor"/>
<g fill="currentColor" stroke="none"><text x="59" y="54" font-size="9">M</text><text x="55" y="116" text-anchor="middle" font-size="9">tetrahedral</text><text x="55" y="128" text-anchor="middle" font-size="8">CN 4: [Ni(CO)₄]</text><text x="174" y="54" font-size="9">M</text><text x="170" y="116" text-anchor="middle" font-size="9">square planar</text><text x="170" y="128" text-anchor="middle" font-size="8">CN 4: [PtCl₄]²⁻</text><text x="289" y="54" font-size="9">M</text><text x="285" y="116" text-anchor="middle" font-size="9">octahedral</text><text x="285" y="128" text-anchor="middle" font-size="8">CN 6: [Co(NH₃)₆]³⁺</text><text x="114" y="166" font-size="9">M</text><text x="110" y="228" text-anchor="middle" font-size="9">trigonal bipyramidal</text><text x="110" y="240" text-anchor="middle" font-size="8">CN 5: [Fe(CO)₅]</text><text x="239" y="166" font-size="9">M</text><text x="235" y="228" text-anchor="middle" font-size="9">square pyramidal</text><text x="235" y="240" text-anchor="middle" font-size="8">CN 5</text></g>
</svg>
caption: The donor atoms around M trace these shapes; octahedral, tetrahedral and square planar are the common ones.
part: 25, 32 | Tetrahedral | Four ligands at 109.5°: $[\text{Ni(CO)}_4]$, $[\text{NiCl}_4]^{2-}$.
part: 140, 32 | Square planar | Four ligands at 90° in one plane: $[\text{PtCl}_4]^{2-}$, $[\text{Ni(CN)}_4]^{2-}$.
part: 255, 32 | Octahedral | Six ligands: the most common shape for coordination number 6.
part: 80, 144 | Trigonal bipyramidal | Five ligands: $[\text{Fe(CO)}_5]$.
part: 205, 144 | Square pyramidal | Five ligands: each half of $[\text{Mn}_2(\text{CO})_{10}]$.
```

```ng-figure
id: chelate-ring
title: A chelate ring
svg:
<svg viewBox="0 0 320 160" role="img" aria-label="en forming a chelate ring with cobalt" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M108,74 L66,48" stroke-width="1.3"/><path d="M108,90 L66,116" stroke-width="1.3"/><path d="M132,72 L170,50" stroke="#E0B400" stroke-width="2.5"/><path d="M132,92 L170,114" stroke="#E0B400" stroke-width="2.5"/><path d="M188,46 L222,56" stroke="#E0B400" stroke-width="2.5"/><path d="M232,66 L232,98" stroke="#E0B400" stroke-width="2.5"/><path d="M222,108 L188,118" stroke="#E0B400" stroke-width="2.5"/>
<g fill="currentColor" stroke="none"><text x="120" y="85" text-anchor="middle" font-size="12">Co</text><text x="58" y="44" text-anchor="end" font-size="10">NH₃</text><text x="58" y="126" text-anchor="end" font-size="10">NH₃</text><text x="180" y="48" text-anchor="middle" font-size="11">N</text><text x="180" y="124" text-anchor="middle" font-size="11">N</text><text x="244" y="62" font-size="10">CH₂</text><text x="244" y="108" font-size="10">CH₂</text><text x="60" y="150" text-anchor="middle" font-size="9">unidentate: one bond each</text><text x="205" y="150" text-anchor="middle" font-size="9">en: two N grip, five-membered ring</text></g>
</svg>
caption: Ethane-1,2-diamine grips the metal with both nitrogens and closes a five-membered ring; chelates are more stable than complexes of similar unidentate ligands.
part: 60, 82 | Unidentate NH₃ | One donor atom, one bond.
part: 205, 82 | Chelate ring | Co, two N and two C: five atoms in a ring.
part: 150, 60 | Donor nitrogen | Each N of en gives one electron pair.
```

```ng-explain
id: why-chelates-stable
prompt: In two lines, explain what a chelate is and why EDTA is used to treat lead poisoning.
lines: 2
```

**In one breath:** Ligands donate electron pairs to a central metal; denticity is how many donor atoms a ligand uses, coordination number is the total of donor atoms, and the oxidation number comes from balancing charges.

## Naming coordination compounds

*NCERT 5.3 · Examples 5.2, 5.3 · Intext 5.1, 5.2*

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

Going the other way, to write a formula from a name, put the metal first, then the ligands in alphabetical order, with polyatomic ligands and abbreviations (en, ox) in round brackets. Enclose the whole entity in square brackets, write any charge outside as a superscript, and add counter ions to balance it. Tetraamminediaquacobalt(III) chloride is $\ce{[Co(NH3)4(H2O)2]Cl3}$.

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

```ng-fill
id: ligand-names
title: Ligand names inside a complex
cols: Ligand | Name
row: $\ce{Cl-}$ | [[chlorido]]
row: $\ce{CN-}$ | [[cyanido]]
row: $\ce{OH-}$ | [[hydroxido]]
row: $\ce{C2O4^2-}$ | [[oxalato]]
row: $\ce{CO3^2-}$ | [[carbonato]]
row: $\ce{-NO2}$ / $\ce{-ONO}$ | [[nitrito-N / nitrito-O]]
row: $\ce{-SCN}$ / $\ce{-NCS}$ | [[thiocyanato-S / thiocyanato-N]]
row: $\ce{H2O}$ | [[aqua]]
row: $\ce{NH3}$ | [[ammine]]
row: CO / NO | [[carbonyl / nitrosyl]]
row: en | [[ethane-1,2-diamine]]
```

:::skeleton Worked example: formula from a name
*Write the formulas of (i) potassium hexacyanidoferrate(III) and (ii) diamminesilver(I) dicyanidoargentate(I).*

(i) Six $\ce{CN-}$ round $\ce{Fe^3+}$: charge $+3-6=-3$, so three $\ce{K+}$: **$\ce{K3[Fe(CN)6]}$** [1]

(ii) Cation $\ce{[Ag(NH3)2]+}$, anion $\ce{[Ag(CN)2]-}$: **$\ce{[Ag(NH3)2][Ag(CN)2]}$** [1]
:::

**In one breath:** Cation before anion; inside the complex, ligands alphabetically, then the metal with its oxidation state in Roman numerals; anionic complexes end in -ate.

## Stereoisomerism

*NCERT 5.4.1–5.4.2 · Figs. 5.2–5.7 · Examples 5.4–5.6 · Intext 5.3*

Coordination compounds show isomerism of two broad kinds. In **stereoisomers** the same atoms are bonded to the same atoms, but the arrangement in space differs; in **structural isomers** the bonds themselves differ. The map below is worth copying into your notebook.

```ng-figure
id: isomerism-map
title: Types of isomerism
svg:
<svg viewBox="0 0 340 158" role="img" aria-label="Types of isomerism in coordination compounds" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M170,22 L92,42 M170,22 L252,42" stroke-width="1"/><path d="M92,62 V70 M252,62 L214,74 M252,62 L298,74" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="170" y="16" text-anchor="middle" font-size="11">Isomerism in complexes</text><text x="92" y="56" text-anchor="middle" font-size="11">Structural</text><text x="252" y="56" text-anchor="middle" font-size="11">Stereoisomerism</text><text x="92" y="84" text-anchor="middle" font-size="9">ionisation</text><text x="92" y="100" text-anchor="middle" font-size="9">linkage</text><text x="92" y="116" text-anchor="middle" font-size="9">coordination</text><text x="92" y="132" text-anchor="middle" font-size="9">solvate (hydrate)</text><text x="214" y="88" text-anchor="middle" font-size="9">geometrical</text><text x="214" y="101" text-anchor="middle" font-size="8">cis–trans, fac–mer</text><text x="298" y="88" text-anchor="middle" font-size="9">optical</text><text x="298" y="101" text-anchor="middle" font-size="8">d and l</text><text x="92" y="150" text-anchor="middle" font-size="8">different bonds</text><text x="252" y="124" text-anchor="middle" font-size="8">same bonds, different</text><text x="252" y="136" text-anchor="middle" font-size="8">arrangement in space</text></g>
</svg>
caption: Stereoisomers keep the same bonds; structural isomers change what is bonded to what.
part: 30, 108 | Structural isomers | Ionisation, linkage, coordination, solvate.
part: 166, 94 | Geometrical | Like ligands at 90° (cis) or 180° (trans); fac or mer.
part: 330, 94 | Optical | Non-superimposable mirror images, d and l.
```

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
caption: Square planar [Pt(NH₃)₂Cl₂]: in the cis isomer the two Cl are neighbours (90° apart); in the trans isomer they are opposite (180° apart).
part: 66, 61 | cis: Cl neighbours | 90° apart. cis-platin is used against cancer.
part: 85, 102 | Pt(II), square planar | $dsp^2$ hybridised, diamagnetic.
part: 259, 99 | trans: Cl opposite | 180° apart.
part: 259, 61 | NH₃ | A neutral unidentate ligand.
```

Octahedral complexes of the type $\ce{[MX2L4]}$, such as $\ce{[Co(NH3)4Cl2]+}$ or $\ce{[Fe(NH3)2(CN)4]-}$, show the same cis–trans pair: the two like ligands at 90° or at 180°. Those of the type $\ce{[MX3L3]}$, such as $\ce{[Co(NH3)3(NO2)3]}$, have a **facial (fac)** isomer, with the three like ligands on one triangular face, and a **meridional (mer)** isomer, with them in a line around the middle. Tetrahedral complexes cannot show geometrical isomerism at all, because in a tetrahedron every position is next to every other.

```ng-figure
id: ma4b2-cis-trans
title: cis and trans [Co(NH₃)₄Cl₂]⁺
svg:
<svg viewBox="0 0 320 150" role="img" aria-label="cis and trans isomers of tetraamminedichloridocobalt(III)" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M80,78 L80.0,42.0" stroke-width="1.3"/><path d="M80,78 L80.0,114.0" stroke-width="1.3"/><path d="M80,78 L42.0,83.0" stroke-width="1.3"/><path d="M80,78 L118.0,73.0" stroke-width="1.3"/><path d="M80,78 L66.0,97.0" stroke-width="1.3"/><path d="M80,78 L94.0,59.0" stroke-dasharray="3 2" stroke-width="1"/><path d="M42.0,83.0 L66.0,97.0 L118.0,73.0 L94.0,59.0 Z" stroke-width="0.5" stroke-dasharray="2 2"/><path d="M240,78 L240.0,42.0" stroke-width="1.3"/><path d="M240,78 L240.0,114.0" stroke-width="1.3"/><path d="M240,78 L202.0,83.0" stroke-width="1.3"/><path d="M240,78 L278.0,73.0" stroke-width="1.3"/><path d="M240,78 L226.0,97.0" stroke-width="1.3"/><path d="M240,78 L254.0,59.0" stroke-dasharray="3 2" stroke-width="1"/><path d="M202.0,83.0 L226.0,97.0 L278.0,73.0 L254.0,59.0 Z" stroke-width="0.5" stroke-dasharray="2 2"/>
<g fill="currentColor" stroke="none"><text x="75" y="74" text-anchor="end" font-size="9">Co</text><text x="80" y="29.88" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">Cl</text><text x="80" y="132.1" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">Cl</text><text x="26.04" y="88.1" text-anchor="middle" font-size="9">NH₃</text><text x="134" y="73.9" text-anchor="middle" font-size="9">NH₃</text><text x="60.12" y="108" text-anchor="middle" font-size="9">NH₃</text><text x="99.88" y="54.02" text-anchor="middle" font-size="9">NH₃</text><text x="80" y="14" text-anchor="middle" font-size="10">trans</text><text x="235" y="74" text-anchor="end" font-size="9">Co</text><text x="240" y="29.88" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">Cl</text><text x="240" y="132.1" text-anchor="middle" font-size="9">NH₃</text><text x="186" y="88.1" text-anchor="middle" font-size="9">NH₃</text><text x="294" y="73.9" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">Cl</text><text x="220.1" y="108" text-anchor="middle" font-size="9">NH₃</text><text x="259.9" y="54.02" text-anchor="middle" font-size="9">NH₃</text><text x="240" y="14" text-anchor="middle" font-size="10">cis</text></g>
</svg>
caption: In the trans isomer the two Cl are opposite (180°); in the cis isomer they are neighbours (90°).
part: 40, 40 | trans: Cl above and below | Opposite each other on the axis.
part: 200, 40 | cis: Cl neighbours | One on the axis, one in the square.
```

```ng-figure
id: fac-mer
title: fac and mer [Co(NH₃)₃(NO₂)₃]
svg:
<svg viewBox="0 0 320 150" role="img" aria-label="fac and mer isomers of triamminetrinitrocobalt(III)" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M80,78 L80.0,42.0" stroke-width="1.3"/><path d="M80,78 L80.0,114.0" stroke-width="1.3"/><path d="M80,78 L42.0,83.0" stroke-width="1.3"/><path d="M80,78 L118.0,73.0" stroke-width="1.3"/><path d="M80,78 L66.0,97.0" stroke-width="1.3"/><path d="M80,78 L94.0,59.0" stroke-dasharray="3 2" stroke-width="1"/><path d="M42.0,83.0 L66.0,97.0 L118.0,73.0 L94.0,59.0 Z" stroke-width="0.5" stroke-dasharray="2 2"/><path d="M240,78 L240.0,42.0" stroke-width="1.3"/><path d="M240,78 L240.0,114.0" stroke-width="1.3"/><path d="M240,78 L202.0,83.0" stroke-width="1.3"/><path d="M240,78 L278.0,73.0" stroke-width="1.3"/><path d="M240,78 L226.0,97.0" stroke-width="1.3"/><path d="M240,78 L254.0,59.0" stroke-dasharray="3 2" stroke-width="1"/><path d="M202.0,83.0 L226.0,97.0 L278.0,73.0 L254.0,59.0 Z" stroke-width="0.5" stroke-dasharray="2 2"/>
<g fill="currentColor" stroke="none"><text x="75" y="74" text-anchor="end" font-size="9">Co</text><text x="80" y="29.88" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">NO₂</text><text x="80" y="132.1" text-anchor="middle" font-size="9">NH₃</text><text x="26.04" y="88.1" text-anchor="middle" font-size="9">NH₃</text><text x="134" y="73.9" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">NO₂</text><text x="60.12" y="108" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">NO₂</text><text x="99.88" y="54.02" text-anchor="middle" font-size="9">NH₃</text><text x="80" y="14" text-anchor="middle" font-size="10">fac</text><text x="235" y="74" text-anchor="end" font-size="9">Co</text><text x="240" y="29.88" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">NO₂</text><text x="240" y="132.1" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">NO₂</text><text x="186" y="88.1" text-anchor="middle" font-size="9">NH₃</text><text x="294" y="73.9" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">NO₂</text><text x="220.1" y="108" text-anchor="middle" font-size="9">NH₃</text><text x="259.9" y="54.02" text-anchor="middle" font-size="9">NH₃</text><text x="240" y="14" text-anchor="middle" font-size="10">mer</text></g>
</svg>
caption: fac: the three NO₂ share one face of the octahedron. mer: they lie on a line round the middle, two of them opposite.
part: 40, 40 | fac | Three like ligands on one triangular face, all at 90°.
part: 200, 40 | mer | Three like ligands in one plane through the metal; two are at 180°.
```

```ng-draw
id: draw-fac-mer
title: Draw the fac and mer isomers of [Co(NH₃)₃(NO₂)₃]
svg: ref: notes#fac-mer
time: 3
```

**Optical isomerism** arises when a complex and its mirror image cannot be superimposed, like left and right hands. Such a pair are called *d* and *l* forms (dextro and laevo) because they rotate plane-polarised light in opposite directions. It is common in octahedral complexes with didentate ligands: $\ce{[Co(en)3]^3+}$ exists as a *d*, *l* pair.

The complex $\ce{[CoCl2(en)2]+}$ brings both ideas together. Its trans form has a plane of symmetry, so its mirror image is identical and it is optically inactive. Its cis form has no such plane and exists as a *d*, *l* pair. Three stereoisomers in all. The same test settles $\ce{[PtCl2(en)2]^2+}$ and $\ce{[CrCl2(ox)2]^3-}$: in each, only the cis form is chiral.

```ng-figure
id: coen-isomers
title: Isomers of [CoCl₂(en)₂]⁺
svg:
<svg viewBox="0 0 362 200" role="img" aria-label="Geometrical and optical isomers of dichloridobis(ethane-1,2-diamine)cobalt(III) ion" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<circle cx="68" cy="96" r="3" fill="currentColor"/><path d="M68,96 L68.0,52.8" stroke-width="1.2"/><path d="M68,96 L68.0,139.2" stroke-width="1.2"/><path d="M68,96 L32.8,96.0" stroke-width="1.2"/><path d="M68,96 L103.2,96.0" stroke-width="1.2"/><path d="M68,96 L50.4,116.8" stroke-width="1.2"/><path d="M68,96 L85.6,76.8" stroke-dasharray="3 2" stroke-width="1"/><path d="M24.0,96.0 Q14.5,117.1 46.0,122.0" class="u" stroke-width="2"/><path d="M112.0,96.0 Q121.7,76.5 90.0,72.0" class="u" stroke-width="2"/><circle cx="180" cy="96" r="3" fill="currentColor"/><path d="M180,96 L180.0,52.8" stroke-width="1.2"/><path d="M180,96 L180.0,139.2" stroke-width="1.2"/><path d="M180,96 L144.8,96.0" stroke-width="1.2"/><path d="M180,96 L215.2,96.0" stroke-width="1.2"/><path d="M180,96 L162.4,116.8" stroke-width="1.2"/><path d="M180,96 L197.6,76.8" stroke-dasharray="3 2" stroke-width="1"/><path d="M136.0,96.0 Q126.5,117.1 158.0,122.0" class="u" stroke-width="2"/><path d="M202.0,72.0 Q204.0,128.7 180.0,150.0" class="u" stroke-width="2"/><circle cx="296" cy="96" r="3" fill="currentColor"/><path d="M296,96 L296.0,52.8" stroke-width="1.2"/><path d="M296,96 L296.0,139.2" stroke-width="1.2"/><path d="M296,96 L260.8,96.0" stroke-width="1.2"/><path d="M296,96 L331.2,96.0" stroke-width="1.2"/><path d="M296,96 L278.4,116.8" stroke-width="1.2"/><path d="M296,96 L313.6,76.8" stroke-dasharray="3 2" stroke-width="1"/><path d="M340.0,96.0 Q349.7,76.5 318.0,72.0" class="u" stroke-width="2"/><path d="M274.0,122.0 Q279.2,157.2 296.0,150.0" class="u" stroke-width="2"/><path d="M238,30 V178" stroke-dasharray="5 4" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="68" y="16" text-anchor="middle" font-size="11">trans</text><text x="68.0" y="40.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="68.0" y="160.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="16.39" y="120.3" text-anchor="middle" font-size="10">en</text><text x="119.8" y="81.17" text-anchor="middle" font-size="10">en</text><text x="62" y="90" text-anchor="end" font-size="9">Co</text><text x="180" y="16" text-anchor="middle" font-size="11">cis (d)</text><text x="180.0" y="40.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="230.0" y="100.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="128.4" y="120.3" text-anchor="middle" font-size="10">en</text><text x="202.8" y="131.1" text-anchor="middle" font-size="10">en</text><text x="174" y="90" text-anchor="end" font-size="9">Co</text><text x="296" y="16" text-anchor="middle" font-size="11">cis (l)</text><text x="296.0" y="40.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="246.0" y="100.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">Cl</text><text x="347.8" y="81.17" text-anchor="middle" font-size="10">en</text><text x="279.7" y="159.3" text-anchor="middle" font-size="10">en</text><text x="290" y="90" text-anchor="end" font-size="9">Co</text><text x="238" y="192" text-anchor="middle" font-size="9">mirror</text></g>
</svg>
caption: Trans has a mirror plane, so it is optically inactive; the cis form exists as two non-superimposable mirror images.
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

## Structural isomerism

*NCERT 5.4.3–5.4.6 · Intext 5.3, 5.4*

Isomers have the same formula but different arrangements. In **structural** isomers the atoms are connected differently. There are four types, and each is easy to recognise from the pair of formulas.

**Ionisation isomerism:** a ligand and a counter ion change places. $\ce{[Co(NH3)5(SO4)]Br}$ and $\ce{[Co(NH3)5Br]SO4}$ give different ions in solution, so the first gives a precipitate with silver nitrate and the second with barium chloride.

**Linkage isomerism:** an ambidentate ligand binds through a different atom. $\ce{[Co(NH3)5(NO2)]Cl2}$, bonded through nitrogen, is yellow; $\ce{[Co(NH3)5(ONO)]Cl2}$, bonded through oxygen, is red.

**Coordination isomerism:** when both cation and anion are complexes, ligands are exchanged between the two metals, as in $\ce{[Co(NH3)6][Cr(CN)6]}$ and $\ce{[Cr(NH3)6][Co(CN)6]}$.

**Solvate (hydrate) isomerism:** water is either a ligand or merely water of crystallisation. $\ce{[Cr(H2O)6]Cl3}$ is violet and $\ce{[CrCl(H2O)5]Cl2.H2O}$ is grey-green.

**In one breath:** Structural isomers differ in what is bonded to what: ion in or out of the sphere (ionisation), donor atom (linkage), ligands swapped between two metals (coordination), or water in or out (solvate).

## Bonding I: valence bond theory

*NCERT 5.5.1–5.5.3 · Table 5.2 · Example 5.7 · Intext 5.5–5.8*

Why are some complexes octahedral and others tetrahedral or square planar, some magnetic and others not? Valence bond theory (VBT) gives the first answer. The metal ion makes available empty orbitals, these **hybridise** to give a set of equivalent orbitals pointing in definite directions, and each one accepts an electron pair from a ligand.

:::formula Hybridisation and shape
Coordination number 4: $sp^3$ → tetrahedral; $dsp^2$ → square planar

Coordination number 5: $sp^3d$ → trigonal bipyramidal

Coordination number 6: $d^2sp^3$ (inner d orbitals) or $sp^3d^2$ (outer d orbitals) → octahedral
:::

The key question in any VBT problem is whether the ligands force the metal's d electrons to pair up. Compare two cobalt(III) complexes; $\ce{Co^3+}$ is $3d^6$.

In $\ce{[Co(NH3)6]^3+}$, ammonia makes the six d electrons pair into three orbitals. That frees two 3d orbitals, which hybridise with 4s and three 4p: $d^2sp^3$. The complex is octahedral and, with no unpaired electrons, **diamagnetic**. Because it uses inner (3d) orbitals it is called an **inner-orbital** or **low-spin** complex.

In $\ce{[CoF6]^3-}$, fluoride is a weak ligand and does not force pairing. The 3d electrons stay as they are, with four unpaired, and the ligands must use 4s, 4p and two *outer* 4d orbitals: $sp^3d^2$. The complex is again octahedral but **paramagnetic**: an **outer-orbital** or **high-spin** complex.

```ng-figure
id: vbt-boxes-co
title: Box diagrams: two cobalt(III) complexes
svg:
<svg viewBox="0 0 270 170" role="img" aria-label="Valence bond box diagrams for cobalt(III) complexes" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<rect x="10" y="22" width="15" height="15" stroke-width="1"/><rect x="25" y="22" width="15" height="15" stroke-width="1"/><rect x="40" y="22" width="15" height="15" stroke-width="1"/><rect x="55" y="22" width="15" height="15" stroke-width="1"/><rect x="70" y="22" width="15" height="15" stroke-width="1"/><rect x="95" y="22" width="15" height="15" stroke-width="1"/><rect x="120" y="22" width="15" height="15" stroke-width="1"/><rect x="135" y="22" width="15" height="15" stroke-width="1"/><rect x="150" y="22" width="15" height="15" stroke-width="1"/><rect x="175" y="22" width="15" height="15" stroke-width="1"/><rect x="190" y="22" width="15" height="15" stroke-width="1"/><rect x="205" y="22" width="15" height="15" stroke-width="1"/><rect x="220" y="22" width="15" height="15" stroke-width="1"/><rect x="235" y="22" width="15" height="15" stroke-width="1"/><rect x="10" y="76" width="15" height="15" stroke-width="1"/><rect x="25" y="76" width="15" height="15" stroke-width="1"/><rect x="40" y="76" width="15" height="15" stroke-width="1"/><rect x="55" y="76" width="15" height="15" stroke-width="1"/><rect x="70" y="76" width="15" height="15" stroke-width="1"/><rect x="95" y="76" width="15" height="15" stroke-width="1"/><rect x="120" y="76" width="15" height="15" stroke-width="1"/><rect x="135" y="76" width="15" height="15" stroke-width="1"/><rect x="150" y="76" width="15" height="15" stroke-width="1"/><rect x="175" y="76" width="15" height="15" stroke-width="1"/><rect x="190" y="76" width="15" height="15" stroke-width="1"/><rect x="205" y="76" width="15" height="15" stroke-width="1"/><rect x="220" y="76" width="15" height="15" stroke-width="1"/><rect x="235" y="76" width="15" height="15" stroke-width="1"/><path d="M40,94 H165" stroke="#E0B400" stroke-width="2"/><rect x="10" y="130" width="15" height="15" stroke-width="1"/><rect x="25" y="130" width="15" height="15" stroke-width="1"/><rect x="40" y="130" width="15" height="15" stroke-width="1"/><rect x="55" y="130" width="15" height="15" stroke-width="1"/><rect x="70" y="130" width="15" height="15" stroke-width="1"/><rect x="95" y="130" width="15" height="15" stroke-width="1"/><rect x="120" y="130" width="15" height="15" stroke-width="1"/><rect x="135" y="130" width="15" height="15" stroke-width="1"/><rect x="150" y="130" width="15" height="15" stroke-width="1"/><rect x="175" y="130" width="15" height="15" stroke-width="1"/><rect x="190" y="130" width="15" height="15" stroke-width="1"/><rect x="205" y="130" width="15" height="15" stroke-width="1"/><rect x="220" y="130" width="15" height="15" stroke-width="1"/><rect x="235" y="130" width="15" height="15" stroke-width="1"/><path d="M95,148 H205" stroke="#E0B400" stroke-width="2"/>
<g fill="currentColor" stroke="none"><text x="10" y="16" font-size="9">Co³⁺ ion: 3d⁶</text><text x="17.5" y="33.5" text-anchor="middle" font-size="10">↑↓</text><text x="32.5" y="33.5" text-anchor="middle" font-size="10">↑</text><text x="47.5" y="33.5" text-anchor="middle" font-size="10">↑</text><text x="62.5" y="33.5" text-anchor="middle" font-size="10">↑</text><text x="77.5" y="33.5" text-anchor="middle" font-size="10">↑</text><text x="10" y="70" font-size="9">[Co(NH₃)₆]³⁺: d²sp³, inner orbital, 0 unpaired</text><text x="17.5" y="87.5" text-anchor="middle" font-size="10">↑↓</text><text x="32.5" y="87.5" text-anchor="middle" font-size="10">↑↓</text><text x="47.5" y="87.5" text-anchor="middle" font-size="10">↑↓</text><text x="62.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="77.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="102.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="127.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="142.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="157.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="10" y="124" font-size="9">[CoF₆]³⁻: sp³d², outer orbital, 4 unpaired</text><text x="17.5" y="141.5" text-anchor="middle" font-size="10">↑↓</text><text x="32.5" y="141.5" text-anchor="middle" font-size="10">↑</text><text x="47.5" y="141.5" text-anchor="middle" font-size="10">↑</text><text x="62.5" y="141.5" text-anchor="middle" font-size="10">↑</text><text x="77.5" y="141.5" text-anchor="middle" font-size="10">↑</text><text x="102.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="127.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="142.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="157.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="182.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="197.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="47.5" y="162" text-anchor="middle" font-size="9">3d</text><text x="102.5" y="162" text-anchor="middle" font-size="9">4s</text><text x="142.5" y="162" text-anchor="middle" font-size="9">4p</text><text x="212.5" y="162" text-anchor="middle" font-size="9">4d</text><text x="262" y="8" text-anchor="end" font-size="8">xx = pair from ligand</text></g>
</svg>
caption: NH₃ pairs the 3d electrons and frees two inner 3d orbitals (d²sp³); F⁻ does not, so the outer 4d orbitals are used (sp³d²).
part: 262, 30 | Co³⁺, 3d⁶ | Four unpaired electrons in the free ion.
part: 262, 84 | [Co(NH₃)₆]³⁺ | NH₃ forces pairing and frees two 3d orbitals; six ligand pairs fill d²sp³: octahedral, diamagnetic.
part: 262, 138 | [CoF₆]³⁻ | F⁻ cannot force pairing, so two outer 4d orbitals join: sp³d², 4 unpaired.
```

```ng-draw
id: draw-vbt-co
title: Draw the box diagrams for [Co(NH₃)₆]³⁺ and [CoF₆]³⁻
svg: ref: notes#vbt-boxes-co
time: 4
```

Nickel(II), $3d^8$, shows the same contrast for coordination number four. In $\ce{[NiCl4]^2-}$ the weak chloride causes no pairing: $sp^3$, tetrahedral, two unpaired electrons, paramagnetic. In $\ce{[Ni(CN)4]^2-}$ the strong cyanide pairs the electrons and empties one 3d orbital: $dsp^2$, square planar, diamagnetic. In $\ce{[Ni(CO)4]}$ nickel is in the zero oxidation state, $3d^8\,4s^2$; carbon monoxide pushes the 4s pair into 3d to give $3d^{10}$, leaving 4s and 4p for $sp^3$: tetrahedral and diamagnetic.

```ng-figure
id: vbt-boxes-ni
title: Box diagrams: two nickel(II) complexes
svg:
<svg viewBox="0 0 270 170" role="img" aria-label="Valence bond box diagrams for nickel(II) complexes" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<rect x="10" y="22" width="15" height="15" stroke-width="1"/><rect x="25" y="22" width="15" height="15" stroke-width="1"/><rect x="40" y="22" width="15" height="15" stroke-width="1"/><rect x="55" y="22" width="15" height="15" stroke-width="1"/><rect x="70" y="22" width="15" height="15" stroke-width="1"/><rect x="95" y="22" width="15" height="15" stroke-width="1"/><rect x="120" y="22" width="15" height="15" stroke-width="1"/><rect x="135" y="22" width="15" height="15" stroke-width="1"/><rect x="150" y="22" width="15" height="15" stroke-width="1"/><rect x="10" y="76" width="15" height="15" stroke-width="1"/><rect x="25" y="76" width="15" height="15" stroke-width="1"/><rect x="40" y="76" width="15" height="15" stroke-width="1"/><rect x="55" y="76" width="15" height="15" stroke-width="1"/><rect x="70" y="76" width="15" height="15" stroke-width="1"/><rect x="95" y="76" width="15" height="15" stroke-width="1"/><rect x="120" y="76" width="15" height="15" stroke-width="1"/><rect x="135" y="76" width="15" height="15" stroke-width="1"/><rect x="150" y="76" width="15" height="15" stroke-width="1"/><path d="M95,94 H165" stroke="#E0B400" stroke-width="2"/><rect x="10" y="130" width="15" height="15" stroke-width="1"/><rect x="25" y="130" width="15" height="15" stroke-width="1"/><rect x="40" y="130" width="15" height="15" stroke-width="1"/><rect x="55" y="130" width="15" height="15" stroke-width="1"/><rect x="70" y="130" width="15" height="15" stroke-width="1"/><rect x="95" y="130" width="15" height="15" stroke-width="1"/><rect x="120" y="130" width="15" height="15" stroke-width="1"/><rect x="135" y="130" width="15" height="15" stroke-width="1"/><rect x="150" y="130" width="15" height="15" stroke-width="1"/><path d="M70,148 H150" stroke="#E0B400" stroke-width="2"/>
<g fill="currentColor" stroke="none"><text x="10" y="16" font-size="9">Ni²⁺ ion: 3d⁸</text><text x="17.5" y="33.5" text-anchor="middle" font-size="10">↑↓</text><text x="32.5" y="33.5" text-anchor="middle" font-size="10">↑↓</text><text x="47.5" y="33.5" text-anchor="middle" font-size="10">↑↓</text><text x="62.5" y="33.5" text-anchor="middle" font-size="10">↑</text><text x="77.5" y="33.5" text-anchor="middle" font-size="10">↑</text><text x="10" y="70" font-size="9">[NiCl₄]²⁻: sp³, tetrahedral, 2 unpaired</text><text x="17.5" y="87.5" text-anchor="middle" font-size="10">↑↓</text><text x="32.5" y="87.5" text-anchor="middle" font-size="10">↑↓</text><text x="47.5" y="87.5" text-anchor="middle" font-size="10">↑↓</text><text x="62.5" y="87.5" text-anchor="middle" font-size="10">↑</text><text x="77.5" y="87.5" text-anchor="middle" font-size="10">↑</text><text x="102.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="127.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="142.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="157.5" y="87" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="10" y="124" font-size="9">[Ni(CN)₄]²⁻: dsp², square planar, 0 unpaired</text><text x="17.5" y="141.5" text-anchor="middle" font-size="10">↑↓</text><text x="32.5" y="141.5" text-anchor="middle" font-size="10">↑↓</text><text x="47.5" y="141.5" text-anchor="middle" font-size="10">↑↓</text><text x="62.5" y="141.5" text-anchor="middle" font-size="10">↑↓</text><text x="77.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="102.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="127.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="142.5" y="141" text-anchor="middle" font-size="8" style="fill:#E0B400" font-weight="700">xx</text><text x="47.5" y="162" text-anchor="middle" font-size="9">3d</text><text x="102.5" y="162" text-anchor="middle" font-size="9">4s</text><text x="142.5" y="162" text-anchor="middle" font-size="9">4p</text><text x="262" y="8" text-anchor="end" font-size="8">xx = pair from ligand</text></g>
</svg>
caption: Cl⁻ leaves the 3d electrons alone (sp³, tetrahedral); CN⁻ pairs them and empties one 3d orbital (dsp², square planar).
part: 190, 30 | Ni²⁺, 3d⁸ | Two unpaired electrons.
part: 190, 84 | [NiCl₄]²⁻ | 4s + three 4p: sp³, tetrahedral, paramagnetic.
part: 190, 138 | [Ni(CN)₄]²⁻ | CN⁻ pairs the electrons and empties one 3d orbital: dsp², square planar, diamagnetic.
```

Magnetic data test these pictures. Ions with one to three d electrons ($\ce{Ti^3+}$, $\ce{V^3+}$, $\ce{Cr^3+}$) always have two empty 3d orbitals, so their complexes are as magnetic as the free ions. From $d^4$ to $d^6$ an inner-orbital complex needs pairing, which would leave two, one or no unpaired electrons. Cyanide complexes match this, but halide complexes of the same metal stay highly magnetic: $\ce{[Mn(CN)6]^3-}$ has two unpaired electrons and $\ce{[MnCl6]^3-}$ four; $\ce{[Fe(CN)6]^3-}$ has one and $\ce{[FeF6]^3-}$ five. VBT explains the second of each pair only by switching to outer $sp^3d^2$ orbitals.

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
cols: Complex | Orbitals | Shape
row: $\ce{[NiCl4]^2-}$ | $sp^3$ | [[tetrahedral]]
row: $\ce{[Ni(CN)4]^2-}$ | [[$dsp^2$]] | square planar
row: $\ce{[Co(NH3)6]^3+}$ | [[$d^2sp^3$ (inner)]] | octahedral
row: $\ce{[CoF6]^3-}$ | [[$sp^3d^2$ (outer)]] | octahedral
```

```ng-fill
id: magnetic-pairs
title: Same metal, different ligand
cols: Complex | Unpaired e⁻ | Ligand
row: $\ce{[Mn(CN)6]^3-}$ | [[2]] | strong
row: $\ce{[MnCl6]^3-}$ | [[4]] | weak
row: $\ce{[Fe(CN)6]^3-}$ | [[1]] | strong
row: $\ce{[FeF6]^3-}$ | [[5]] | weak
row: $\ce{[CoF6]^3-}$ | [[4]] | weak
```

:::skeleton Worked example: shape from the magnetic moment
*The spin-only magnetic moment of $\ce{[NiCl4]^2-}$ is 2.83 BM. Is it tetrahedral or square planar? (Ni: Z = 28)*

$\ce{Ni^2+}$ is $3d^8$; coordination number 4, so $sp^3$ (tetrahedral) or $dsp^2$ (square planar) [½]

$\mu=\sqrt{n(n+2)}=2.83$ BM gives $n=2$ unpaired electrons [1]

$dsp^2$ would need pairing and leave none; two unpaired means no pairing: $sp^3$, **tetrahedral** [1½]
:::

```ng-numerical
id: moment-to-n
title: Unpaired electrons from a magnetic moment
question: A complex has a spin-only magnetic moment of {{sqrt(n*(n+2)):2}} BM. How many unpaired electrons does it have?
var: n | 1 | 5 | 1
answer: n
unit: unpaired electrons
dp: 0
step: $\mu=\sqrt{n(n+2)}$: try $n=1,2,3\ldots$ (1.73, 2.83, 3.87, 4.90, 5.92 BM)
step: $\sqrt{ {{n}}({{n}}+2)}={{sqrt(n*(n+2)):2}}$ BM, so $n=$ **{{n}}**
```

```ng-mnemonic
id: strong-pairs-inside
title: Strong ligand, paired and inside
trick: **Strong** ligands are strict parents: they make the electrons **pair up and stay inside**
meaning: Strong-field ligand → d electrons pair → inner (n−1)d orbitals used: $d^2sp^3$, low spin. Weak ligand → no pairing → outer nd orbitals: $sp^3d^2$, high spin.
prompt: Does a strong-field ligand give an inner- or outer-orbital complex?
```

**In one breath:** In VBT the metal hybridises empty orbitals to accept ligand pairs. Strong ligands pair the d electrons (inner-orbital, low spin, $d^2sp^3$ or $dsp^2$); weak ones do not (outer-orbital, high spin, $sp^3d^2$ or $sp^3$).

## Bonding II: crystal field theory

*NCERT 5.5.4 · Figs. 5.8, 5.9 · Intext 5.9, 5.10*

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
caption: Octahedral field: eg raised by 0.6 Δo, t2g lowered by 0.4 Δo. Tetrahedral field: the order is inverted and the gap is smaller, Δt = 4/9 Δo.
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

```ng-figure
id: high-low-spin
title: High spin and low spin for d⁴
svg:
<svg viewBox="0 0 330 160" role="img" aria-label="High-spin and low-spin d4 octahedral complexes" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M30,124 H50" stroke-width="2"/><path d="M58,124 H78" stroke-width="2"/><path d="M86,124 H106" stroke-width="2"/><path d="M44,88 H64" stroke-width="2"/><path d="M72,88 H92" stroke-width="2"/><path d="M194,134 H214" stroke-width="2"/><path d="M222,134 H242" stroke-width="2"/><path d="M250,134 H270" stroke-width="2"/><path d="M208,54 H228" stroke-width="2"/><path d="M236,54 H256" stroke-width="2"/><path d="M116,124 V88" stroke-width="1"/><path d="M118.0,91.5L116,88L114.0,91.5" stroke-width="1"/><path d="M114.0,120.5L116,124L118.0,120.5" stroke-width="1"/><path d="M280,134 V54" stroke-width="1"/><path d="M282.0,57.5L280,54L278.0,57.5" stroke-width="1"/><path d="M278.0,130.5L280,134L282.0,130.5" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="40" y="121" text-anchor="middle" font-size="11">↑</text><text x="68" y="121" text-anchor="middle" font-size="11">↑</text><text x="96" y="121" text-anchor="middle" font-size="11">↑</text><text x="54" y="85" text-anchor="middle" font-size="11">↑</text><text x="204" y="131" text-anchor="middle" font-size="11">↑↓</text><text x="232" y="131" text-anchor="middle" font-size="11">↑</text><text x="260" y="131" text-anchor="middle" font-size="11">↑</text><text x="121" y="110" font-size="9">Δₒ small</text><text x="285" y="98" font-size="9">Δₒ large</text><text x="18" y="128" text-anchor="end" font-size="9">t₂g</text><text x="36" y="92" text-anchor="end" font-size="9">e<tspan dy="3" font-size="7">g</tspan><tspan dy="-3"></tspan></text><text x="182" y="138" text-anchor="end" font-size="9">t₂g</text><text x="200" y="58" text-anchor="end" font-size="9">e<tspan dy="3" font-size="7">g</tspan><tspan dy="-3"></tspan></text><text x="70" y="16" text-anchor="middle" font-size="10">weak field: Δₒ < P</text><text x="70" y="30" text-anchor="middle" font-size="9">high spin t₂g³ e<tspan dy="3" font-size="7">g</tspan><tspan dy="-3"></tspan>¹</text><text x="232" y="16" text-anchor="middle" font-size="10">strong field: Δₒ > P</text><text x="232" y="30" text-anchor="middle" font-size="9">low spin t₂g⁴ e<tspan dy="3" font-size="7">g</tspan><tspan dy="-3"></tspan>⁰</text><text x="70" y="152" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">4 unpaired</text><text x="232" y="152" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">2 unpaired</text></g>
</svg>
caption: With a small Δₒ the fourth electron goes up to the eg level; with a large Δₒ it pairs in t₂g.
part: 100, 62 | Small gap | Δₒ < P: cheaper to go up than to pair.
part: 232, 94 | Large gap | Δₒ > P: cheaper to pair in t₂g.
part: 204, 100 | Paired electron | The fourth electron pairs: low spin.
```

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

```ng-explain
id: why-tetrahedral-high-spin
prompt: In two lines, explain why tetrahedral complexes are almost always high spin.
lines: 2
```

**In one breath:** Six ligands split the d orbitals into lower $t_{2g}$ and upper $e_g$, a gap $\Delta_o$ apart. Strong-field ligands make $\Delta_o$ exceed the pairing energy and give low-spin complexes; weak-field ligands give high-spin ones.

## Colour, and where the theories stop

*NCERT 5.5.5–5.5.6 · Table 5.3 · Figs. 5.10–5.12*

Crystal field splitting explains colour neatly. The gap $\Delta_o$ corresponds to the energy of visible light. An electron in $t_{2g}$ absorbs light of that energy and jumps to $e_g$, a **d–d transition**, and the complex shows the complementary colour of what it absorbed. $\ce{[Ti(H2O)6]^3+}$ has a single d electron; it absorbs blue-green light and looks violet.

Three observations follow directly.

Remove the ligands and the colour goes. Anhydrous copper sulphate is white because, with no water ligands, there is no splitting and no d–d transition; add water and it turns blue.

Change the ligand and the colour changes. Adding ethane-1,2-diamine to green $\ce{[Ni(H2O)6]^2+}$ replaces water with a stronger-field ligand step by step, the splitting grows, light of shorter wavelength is absorbed, and the solution goes from green through blue to violet.

No d electrons, or ten, means no colour, as you saw in Chapter 4. Even gemstones fit: ruby is aluminium oxide with about 0.5–1 % $\ce{Cr^3+}$ in octahedral sites. In emerald the same ion sits in beryl, its absorption moves to longer wavelengths (yellow-red and blue), and the stone lets green through.

CFT has its own weakness. If ligands were simply point charges, negatively charged ones should split the d orbitals most, yet the anions sit at the *weak* end of the series, below neutral water and ammonia. The theory also ignores the covalent character of the metal–ligand bond.

```ng-fill
id: colour-absorbed
title: Colour absorbed and colour seen
cols: Complex | Absorbs | Looks
row: $\ce{[Ti(H2O)6]^3+}$ | blue green | [[violet]]
row: $\ce{[Cu(H2O)4]^2+}$ | red | [[blue]]
row: $\ce{[Co(NH3)6]^3+}$ | blue | [[yellow orange]]
row: $\ce{[Co(CN)6]^3-}$ | UV | [[pale yellow]]
```

```ng-figure
id: colour-wheel
title: Complementary colours
svg:
<svg viewBox="0 0 220 202" role="img" aria-label="Colour wheel of complementary colours" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M110.0,34.0 L163.7,65.0 L163.7,127.0 L110.0,158.0 L56.3,127.0 L56.3,65.0 Z" stroke-width="1"/><path d="M110.0,34.0 L110.0,158.0" stroke-dasharray="3 3" stroke-width="1"/><path d="M163.7,65.0 L56.3,127.0" stroke="#E0B400" stroke-width="2.5"/><path d="M163.7,127.0 L56.3,65.0" stroke-dasharray="3 3" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="110" y="23" text-anchor="middle" font-size="10">red</text><text x="181" y="61" text-anchor="middle" font-size="10">orange</text><text x="181" y="137" text-anchor="middle" font-size="10">yellow</text><text x="110" y="175" text-anchor="middle" font-size="10">green</text><text x="38.99" y="137" text-anchor="middle" font-size="10">blue</text><text x="38.99" y="61" text-anchor="middle" font-size="10">violet</text><text x="110" y="196" text-anchor="middle" font-size="9">opposite colours are complementary</text></g>
</svg>
caption: A complex shows the colour opposite the one it absorbs: [Co(NH₃)₆]³⁺ absorbs blue and looks yellow-orange.
part: 137, 80 | Orange ↔ blue | Absorb blue, look orange (and the reverse).
part: 110, 60 | Red ↔ green | Absorb red, the green-blue side is seen.
part: 83, 80 | Violet ↔ yellow | Absorb yellow, look violet.
```

```ng-steps
id: ni-en-colour
title: Adding en to nickel(II), step by step
step: $\ce{[Ni(H2O)6]^2+}$ is **green**.
step: 1 en per Ni: $\ce{[Ni(H2O)6]^2+ + en}$ $\ce{-> [Ni(H2O)4(en)]^2+}$ $\ce{+ 2H2O}$, **pale blue**.
step: 2 en per Ni: $\ce{[Ni(H2O)2(en)2]^2+}$, **blue/purple**.
step: 3 en per Ni: $\ce{[Ni(en)3]^2+}$, **violet**. Each stronger-field en widens $\Delta_o$, so shorter wavelengths are absorbed.
```

```ng-explain
id: why-anhydrous-white
prompt: In two lines, explain why anhydrous copper sulphate is white but the pentahydrate is blue.
lines: 2
```

**In one breath:** Colour comes from an electron absorbing visible light to jump from $t_{2g}$ to $e_g$; no ligands, or no d–d possibility, means no colour, and a stronger ligand shifts absorption to shorter wavelengths.

## Metal carbonyls

*NCERT 5.6 · Figs. 5.13, 5.14*

Carbon monoxide forms compounds with metals in which the metal has an oxidation state of zero: $\ce{[Ni(CO)4]}$ is tetrahedral, $\ce{[Fe(CO)5]}$ trigonal bipyramidal and $\ce{[Cr(CO)6]}$ octahedral. Some have metal–metal bonds: in $\ce{[Mn2(CO)10]}$ two square pyramidal $\ce{Mn(CO)5}$ units are joined by an Mn–Mn bond, and $\ce{[Co2(CO)8]}$ has a Co–Co bond bridged by two CO groups.

The bonding has two parts that reinforce each other. Carbon donates its lone pair into an empty metal orbital, forming a σ bond. At the same time the metal donates electrons from a filled d orbital back into an empty antibonding π* orbital of CO, forming a π bond. The σ donation makes the metal richer in electrons and so better at giving them back; the back-donation makes CO a better σ donor. This mutual strengthening is called **synergic bonding**. It makes the metal–carbon bond stronger than a single bond, and slightly weakens the C–O bond.

```ng-figure
id: carbonyl-shapes
title: Shapes of metal carbonyls
svg:
<svg viewBox="0 0 340 140" role="img" aria-label="Shapes of three metal carbonyls" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M56,62 L56.0,30.0" stroke-width="1.3"/><path d="M56,62 L28.0,82.0" stroke-width="1.3"/><path d="M56,62 L84.0,86.0" stroke-width="1.3"/><path d="M56,62 L70.0,68.0" stroke-dasharray="3 2" stroke-width="1"/><path d="M172,62 L172.0,30.0" stroke-width="1.3"/><path d="M172,62 L172.0,94.0" stroke-width="1.3"/><path d="M172,62 L140.0,68.0" stroke-width="1.3"/><path d="M172,62 L204.0,68.0" stroke-width="1.3"/><path d="M172,62 L182.0,49.0" stroke-dasharray="3 2" stroke-width="1"/><path d="M286,62 L286.0,30.0" stroke-width="1.3"/><path d="M286,62 L286.0,94.0" stroke-width="1.3"/><path d="M286,62 L254.0,66.0" stroke-width="1.3"/><path d="M286,62 L318.0,58.0" stroke-width="1.3"/><path d="M286,62 L274.0,79.0" stroke-width="1.3"/><path d="M286,62 L298.0,45.0" stroke-dasharray="3 2" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="53" y="59" text-anchor="end" font-size="9">Ni</text><text x="56" y="18.6" text-anchor="middle" font-size="8">CO</text><text x="15.4" y="94" text-anchor="middle" font-size="8">CO</text><text x="96.6" y="99.8" text-anchor="middle" font-size="8">CO</text><text x="76.3" y="73.7" text-anchor="middle" font-size="8">CO</text><text x="56" y="128" text-anchor="middle" font-size="9">[Ni(CO)₄] tetrahedral</text><text x="169" y="59" text-anchor="end" font-size="9">Fe</text><text x="172" y="18.6" text-anchor="middle" font-size="8">CO</text><text x="172" y="111.4" text-anchor="middle" font-size="8">CO</text><text x="125.6" y="73.7" text-anchor="middle" font-size="8">CO</text><text x="218.4" y="73.7" text-anchor="middle" font-size="8">CO</text><text x="186.5" y="46.15" text-anchor="middle" font-size="8">CO</text><text x="172" y="128" text-anchor="middle" font-size="9">[Fe(CO)₅] trig. bipyramidal</text><text x="283" y="59" text-anchor="end" font-size="9">Cr</text><text x="286" y="17" text-anchor="middle" font-size="8">CO</text><text x="286" y="113" text-anchor="middle" font-size="8">CO</text><text x="238" y="71" text-anchor="middle" font-size="8">CO</text><text x="334" y="59" text-anchor="middle" font-size="8">CO</text><text x="268" y="90.5" text-anchor="middle" font-size="8">CO</text><text x="304" y="39.5" text-anchor="middle" font-size="8">CO</text><text x="286" y="128" text-anchor="middle" font-size="9">[Cr(CO)₆] octahedral</text></g>
</svg>
caption: The metal is in the zero oxidation state in all three.
part: 26, 30 | Tetracarbonylnickel(0) | Tetrahedral.
part: 142, 30 | Pentacarbonyliron(0) | Trigonal bipyramidal.
part: 256, 30 | Hexacarbonylchromium(0) | Octahedral.
```

```ng-figure
id: synergic-bonding
title: Synergic bonding in a carbonyl
svg:
<svg viewBox="0 0 320 160" role="img" aria-label="Synergic bonding in a metal carbonyl" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<circle cx="60" cy="80" r="16" stroke-width="1.5"/><path d="M76,80 H150" stroke-width="1.5"/><path d="M170,75 H210 M170,80 H210 M170,85 H210" stroke-width="1.2"/><path d="M152,64 Q112,24 80,62" stroke-width="1"/><path d="M80.9,57.1L80,62L84.7,60.3" stroke-width="1"/><path d="M80,98 Q140,142 192,96" stroke="#E0B400" stroke-width="2"/><path d="M190.4,100.7L192,96L187.1,97.0" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="60" y="84" text-anchor="middle" font-size="12">M</text><text x="160" y="85" text-anchor="middle" font-size="13">C</text><text x="222" y="85" text-anchor="middle" font-size="13">O</text><text x="150" y="18" text-anchor="middle" font-size="9">σ: lone pair on C → empty metal orbital</text><text x="150" y="152" text-anchor="middle" font-size="9" style="fill:#E0B400" font-weight="700">π: filled metal d → empty π* of CO</text></g>
</svg>
caption: σ donation from C to the metal and π back-donation from the metal to CO strengthen each other.
part: 112, 44 | σ donation | Lone pair on carbon → empty metal orbital.
part: 140, 128 | π back-donation | Filled metal d orbital → empty π* of CO; weakens C–O slightly.
part: 40, 110 | Metal | Gains electron density, then gives it back.
```

```ng-draw
id: draw-synergic
title: Draw the synergic bonding in a metal carbonyl
svg: ref: notes#synergic-bonding
time: 2
```

**In one breath:** In carbonyls the metal is in the zero state; CO gives a σ pair to the metal and takes π electron density back, and the two effects strengthen each other (synergic bonding).

## Why coordination compounds matter

*NCERT 5.7*

A short list of uses, each of which has appeared as a one-mark question.

- **Analysis:** coloured complexes with reagents such as EDTA, dimethylglyoxime (red precipitate with nickel(II)), α-nitroso-β-naphthol and cupron detect and estimate metals. Hardness of water is measured by titrating with $\ce{Na2EDTA}$; $\ce{Ca^2+}$ and $\ce{Mg^2+}$ can even be estimated separately because their EDTA complexes differ in stability.
- **Metallurgy:** silver and gold are extracted as the soluble cyanide complexes $\ce{[Ag(CN)2]-}$ and $\ce{[Au(CN)2]-}$. Nickel is purified by forming and then decomposing $\ce{[Ni(CO)4]}$ (the Mond process).
- **Biology:** chlorophyll contains magnesium, haemoglobin iron and vitamin B$_{12}$ cobalt; enzymes such as carboxypeptidase A and carbonic anhydrase also hold metal ions.
- **Catalysis:** Wilkinson's catalyst, $\ce{[(Ph3P)3RhCl]}$, hydrogenates alkenes.
- **Electroplating and photography:** silver and gold plate more smoothly from their cyanide complexes; in photography, hypo dissolves unexposed silver bromide as $\ce{[Ag(S2O3)2]^3-}$.
- **Medicine (chelate therapy):** D-penicillamine and desferrioxime B remove excess copper and iron, EDTA treats lead poisoning, and cis-platin inhibits tumour growth.

```ng-steps
id: gold-extraction
title: Extracting gold as a cyanide complex
step: Gold ore is treated with cyanide in air and water: $\ce{4Au + 8CN- + 2H2O + O2}$ $\ce{-> 4[Au(CN)2]- + 4OH-}$.
step: Zinc displaces gold from the soluble complex: $\ce{2[Au(CN)2]- + Zn}$ $\ce{-> [Zn(CN)4]^2- + 2Au}$.
```

**In one breath:** Complexes are used to detect and estimate metals, extract and purify them, run biology (Mg, Fe, Co), catalyse reactions and treat disease.
