# Ch 9 · Amines

Replace the hydrogens of ammonia with carbon groups and you get amines. They are the organic bases: the lone pair on nitrogen that makes ammonia a base is still there, and almost everything in this chapter is that lone pair at work. It accepts protons (basicity), it attacks electron-poor carbon (nucleophilicity), and when the nitrogen sits on a benzene ring, the ring borrows it. The second half of the chapter is about diazonium salts, which turn an aromatic amine into almost any other benzene derivative.

## Structure, classes and names

Amines are classed by how many hydrogens of ammonia have been replaced. One replaced gives a **primary** (1°) amine, $\ce{R-NH2}$; two give a **secondary** (2°) amine, $\ce{R2NH}$; three give a **tertiary** (3°) amine, $\ce{R3N}$.

:::tip
The class of an amine counts the carbon groups on **nitrogen**, not the type of carbon. $\ce{(CH3)3C-NH2}$ has a tertiary carbon but is a *primary* amine.
:::

Nitrogen is sp$^3$ hybridised. Three orbitals make bonds and the fourth holds the lone pair, so the molecule is a pyramid, with bond angles a little under the tetrahedral value (about 108° in trimethylamine).

In IUPAC names the "e" of the alkane is replaced by "amine": $\ce{CH3CH2NH2}$ is ethanamine. Groups on nitrogen are shown with *N*: $\ce{CH3NHCH2CH3}$ is *N*-methylethanamine. The simplest aromatic amine, $\ce{C6H5NH2}$, is aniline (benzenamine).

**In one breath:** Amines are ammonia with one, two or three hydrogens replaced by carbon groups (1°, 2°, 3°, counted on nitrogen); nitrogen is sp$^3$ and pyramidal, with a lone pair that drives all its chemistry.

## Making amines

**Reduction of nitro compounds.** This is the main route to aromatic amines. Nitrobenzene is reduced to aniline by hydrogen over a metal catalyst, or by a metal in acid. Iron scrap with hydrochloric acid is preferred in industry, because the $\ce{FeCl2}$ formed is hydrolysed and regenerates the acid, so only a little acid is needed to start.

**Ammonolysis of alkyl halides.** Ammonia is a nucleophile and displaces halide from an alkyl halide. The trouble is that the amine formed is a nucleophile too, and it attacks more alkyl halide. The result is a mixture of primary, secondary and tertiary amines and a quaternary ammonium salt. Using a large excess of ammonia favours the primary amine.

**Reduction of nitriles and amides.** $\ce{LiAlH4}$ or catalytic hydrogenation turns a nitrile into a primary amine with the same number of carbons as the nitrile, which is one more than the alkyl halide it was made from: $\ce{R-CN -> R-CH2NH2}$. This is a way to step *up* the chain. $\ce{LiAlH4}$ also reduces an amide to an amine with the same number of carbons: $\ce{RCONH2 -> RCH2NH2}$.

Two named reactions give *only* primary amines.

:::formula Routes that give only primary amines
**Gabriel phthalimide synthesis:** phthalimide + KOH → potassium phthalimide; + $\ce{R-X}$ → *N*-alkylphthalimide; hydrolysis with NaOH(aq) → $\ce{R-NH2}$

**Hoffmann bromamide degradation:** $\begin{gathered}\ce{RCONH2 + Br2 + 4NaOH}\\ \ce{-> RNH2 + Na2CO3 + 2NaBr}\\ \text{+ }\ce{2H2O}\end{gathered}$
:::

In the Gabriel synthesis the nitrogen of phthalimide can be alkylated only once, so no secondary or tertiary amine can form. It cannot make aniline, though: the step that attaches the carbon group is nucleophilic substitution, and aryl halides do not undergo it.

In the Hoffmann reaction the alkyl group migrates from the carbonyl carbon to nitrogen and the carbonyl carbon is lost as carbonate. The amine has one carbon *fewer* than the amide. This is a way to step *down* the chain.

:::skeleton Worked example: one carbon up, one carbon down
*Convert (i) chloroethane into propan-1-amine, (ii) propanamide into ethanamine.*

(i) $\begin{gathered}\ce{CH3CH2Cl}\\ \ce{->[KCN] CH3CH2CN}\\ \ce{->[LiAlH4] CH3CH2CH2NH2}\end{gathered}$ (the nitrile adds a carbon) [1]

(ii) $\begin{gathered}\ce{CH3CH2CONH2}\\ \ce{->[Br2/NaOH] CH3CH2NH2}\end{gathered}$ (Hoffmann bromamide degradation removes a carbon) [1]
:::

```ng-steps
id: gabriel-steps
title: Gabriel phthalimide synthesis
step: Treat **phthalimide** with alcoholic KOH: potassium phthalimide.
step: Heat with an **alkyl halide** R–X: N-alkylphthalimide (N is alkylated only once).
step: Hydrolyse with aqueous NaOH: **pure primary amine** R–NH₂. Aryl halides fail, so aniline cannot be made this way.
```

```ng-mnemonic
id: hoffmann-hacks
title: Hoffmann bromamide degradation
trick: **Hoffmann hacks off a carbon**
meaning: Amide + $\ce{Br2}$ + 4 NaOH gives a primary amine with **one carbon fewer** (the C=O carbon leaves as carbonate).
prompt: Does the Hoffmann reaction add or remove a carbon?
```

**In one breath:** Amines come from reducing nitro compounds, nitriles and amides, and from ammonia with alkyl halides (a mixture). Gabriel gives pure 1° aliphatic amines; Hoffmann bromamide gives a 1° amine with one carbon fewer.

## Physical properties

The lower aliphatic amines are gases with a fishy smell. Aniline is a colourless liquid that darkens on standing, because air slowly oxidises it.

Primary and secondary amines have N–H bonds and form intermolecular hydrogen bonds; tertiary amines have none. So among isomeric amines the boiling points run 1° > 2° > 3°. Nitrogen is less electronegative than oxygen, so the N–H···N hydrogen bond is weaker than O–H···O, and amines boil *below* alcohols of similar mass, though above alkanes.

Small amines dissolve in water by hydrogen bonding with it. Solubility falls as the hydrocarbon part grows; aniline, with its large ring, is almost insoluble.

**In one breath:** Hydrogen bonding through N–H gives boiling points 1° > 2° > 3° among isomers, lower than alcohols because N–H···N bonds are weaker; small amines dissolve in water, aniline hardly at all.

## How strong a base?

An amine is a base because its lone pair accepts a proton: $\ce{RNH2 + H2O <=> RNH3+ + OH-}$. Base strength is measured by $K_b$, or more conveniently by p$K_b$.

:::formula pKb and base strength
p$K_b = -\log K_b$. A **smaller** p$K_b$ means a **stronger** base.
:::

The rule for predicting strength is the one you have used for acids, turned round: anything that makes the lone pair more available, or the cation formed more stable, makes the base stronger.

**Alkylamines against ammonia.** An alkyl group pushes electron density towards nitrogen. The lone pair becomes more available and the positive charge on the ammonium ion is better spread. So alkylamines are stronger bases than ammonia.

**Gas phase.** With no solvent, only this electron-pushing effect counts, and more alkyl groups mean a stronger base: 3° > 2° > 1° > $\ce{NH3}$.

**In water** the order changes, because the cation formed is stabilised by hydrogen bonding with water, and that depends on how many N–H hydrogens it has. A primary ammonium ion has three, a secondary two, a tertiary only one. So solvation favours 1° > 2° > 3°, the reverse of the electron-pushing order. Crowding around nitrogen by bulky alkyl groups also matters. The observed order is a compromise between these effects, and it differs for methyl and ethyl groups.

:::formula Basicity orders in water
Aqueous solution, methyl: $\ce{(CH3)2NH}$ > $\ce{CH3NH2}$ > $\ce{(CH3)3N}$ > $\ce{NH3}$

Aqueous solution, ethyl: $\ce{(C2H5)2NH}$ > $\ce{(C2H5)3N}$ > $\ce{C2H5NH2}$ > $\ce{NH3}$
:::

The secondary amine is strongest in both. The primary and tertiary swap places.

**Aniline** is a much weaker base than ammonia (p$K_b$ 9.38 against 4.75). Its lone pair is delocalised into the benzene ring by resonance, so it is less available for a proton. And there is a second reason: aniline has five resonance structures, but the anilinium ion, with no lone pair left, has only two. Protonation throws away resonance stabilisation.

```ng-figure
id: aniline-resonance
title: Resonance in aniline
svg:
<svg viewBox="0 0 400 138" role="img" aria-label="Resonance structures of aniline" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M48.0,62.0 L67.1,73.0 L67.1,95.0 L48.0,106.0 L28.9,95.0 L28.9,73.0 Z"/><path d="M63.6,77.1 L63.6,90.9"/><path d="M46.1,101.0 L34.3,94.1"/><path d="M34.3,73.9 L46.1,67.0"/><path d="M48.0,62.0 V44.0"/><path d="M148.0,62.0 L167.1,73.0 L167.1,95.0 L148.0,106.0 L128.9,95.0 L128.9,73.0 Z"/><path d="M163.6,77.1 L163.6,90.9"/><path d="M146.1,101.0 L134.3,94.1"/><path d="M145.8,62.0 V44.0 M150.2,62.0 V44.0"/><path d="M248.0,62.0 L267.1,73.0 L267.1,95.0 L248.0,106.0 L228.9,95.0 L228.9,73.0 Z"/><path d="M232.4,90.9 L232.4,77.1"/><path d="M263.6,77.1 L263.6,90.9"/><path d="M245.8,62.0 V44.0 M250.2,62.0 V44.0"/><path d="M348.0,62.0 L367.1,73.0 L367.1,95.0 L348.0,106.0 L328.9,95.0 L328.9,73.0 Z"/><path d="M332.4,90.9 L332.4,77.1"/><path d="M361.7,94.1 L349.9,101.0"/><path d="M345.8,62.0 V44.0 M350.2,62.0 V44.0"/><path d="M80,84 H116" stroke-width="1"/><path d="M111.7,86.5L116,84L111.7,81.5" stroke-width="1"/><path d="M84.3,81.5L80,84L84.3,86.5" stroke-width="1"/><path d="M180,84 H216" stroke-width="1"/><path d="M211.7,86.5L216,84L211.7,81.5" stroke-width="1"/><path d="M184.3,81.5L180,84L184.3,86.5" stroke-width="1"/><path d="M280,84 H316" stroke-width="1"/><path d="M311.7,86.5L316,84L311.7,81.5" stroke-width="1"/><path d="M284.3,81.5L280,84L284.3,86.5" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="48" y="40" text-anchor="middle" font-size="11">NH₂</text><text x="148" y="40" text-anchor="middle" font-size="11">NH₂⁺</text><text x="120.3" y="72.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">−</text><text x="248" y="40" text-anchor="middle" font-size="11">NH₂⁺</text><text x="248.0" y="120.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">−</text><text x="348" y="40" text-anchor="middle" font-size="11">NH₂⁺</text><text x="375.7" y="72.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">−</text><text x="148" y="130" text-anchor="middle" font-size="9">ortho</text><text x="248" y="130" text-anchor="middle" font-size="9">para</text><text x="348" y="130" text-anchor="middle" font-size="9">ortho</text></g>
</svg>
caption: Figure 9.1 The nitrogen lone pair spreads into the ring, making ortho and para electron-rich and leaving the lone pair less available for a proton.
part: 48, 84 | Lone pair on N | In the first structure the lone pair sits on nitrogen.
part: 148, 34 | N becomes positive | Sharing its pair with the ring, N carries a + charge.
part: 248, 114 | Negative charge at para | Ring positions ortho and para become electron-rich.
part: 98, 84 | Resonance arrow | The real molecule is a hybrid; protonation would destroy this stabilisation.
```

Ring substituents shift this as you would expect. Electron-releasing groups such as $\ce{-CH3}$ and $\ce{-OCH3}$ make aniline a stronger base; electron-withdrawing groups such as $\ce{-NO2}$ make it weaker.

:::skeleton Worked example: arranging by base strength
*Arrange in increasing order of basic strength in aqueous solution, with reasons: $\ce{C6H5NH2}$, $\ce{NH3}$, $\ce{C2H5NH2}$, $\ce{(C2H5)2NH}$.*

$\ce{C6H5NH2}$ < $\ce{NH3}$ < $\ce{C2H5NH2}$ < $\ce{(C2H5)2NH}$ [1]

Aniline is weakest: its lone pair is delocalised into the ring. [½]

Ethyl groups release electrons, so both ethylamines beat ammonia; the 2° amine has the best balance of electron release and solvation. [½]
:::

```ng-draw
id: draw-aniline
title: Draw the resonance structures of aniline
svg: ref: notes#aniline-resonance
time: 4
```

```ng-numerical
id: pkb-ratio
title: Comparing base strength from pKb
question: Base X has p$K_b$ = {{a}} and base Y has p$K_b$ = {{b}}. How many times stronger a base is X than Y?
var: a | 3.0 | 4.0 | 0.1
var: b | 4.5 | 9.5 | 0.5
answer: 10^(b-a)
unit: times
dp: 0
tol: 2
step: Smaller p$K_b$ = stronger base, so X is stronger
step: $\dfrac{K_b(\text{X})}{K_b(\text{Y})}=10^{\,\text{p}K_b(\text{Y})-\text{p}K_b(\text{X})}=10^{ {{b-a:1}} }$
step: X is about **{{10^(b-a):0}} times** stronger
```

```ng-fill
id: basicity-fill
title: Arrange by basic strength (in water)
cols: Set | Order, strongest first
row: methylamines | [[$\ce{(CH3)2NH}$ > $\ce{CH3NH2}$ > $\ce{(CH3)3N}$ > $\ce{NH3}$]]
row: ethylamines | [[$\ce{(C2H5)2NH}$ > $\ce{(C2H5)3N}$ > $\ce{C2H5NH2}$ > $\ce{NH3}$]]
row: gas phase | [[3° > 2° > 1° > $\ce{NH3}$]]
row: aniline vs ammonia | [[$\ce{NH3}$ > $\ce{C6H5NH2}$]]
```

```ng-mnemonic
id: do-ek-teen
title: Basicity orders in water
trick: **Methyl: Do–Ek–Teen; Ethyl: Do–Teen–Ek**
meaning: Methylamines: 2° > 1° > 3° > $\ce{NH3}$ (do, ek, teen).
meaning: Ethylamines: 2° > 3° > 1° > $\ce{NH3}$ (do, teen, ek). The secondary amine is always strongest.
prompt: Order the ethylamines by basicity in water.
```

**In one breath:** A smaller p$K_b$ is a stronger base. Alkyl groups strengthen the base; in water, solvation and crowding make 2° the strongest. Aniline is far weaker than ammonia because its lone pair is shared with the ring.

## The lone pair as a nucleophile

**Alkylation.** Amines attack alkyl halides, each step adding one more alkyl group until a quaternary ammonium salt is reached, as in ammonolysis.

**Acylation.** Primary and secondary amines react with acid chlorides and anhydrides, replacing an N–H hydrogen with an acyl group to give an amide: $\begin{gathered}\ce{C2H5NH2 + CH3COCl}\\ \ce{-> C2H5NHCOCH3 + HCl}\end{gathered}$. A base stronger than the amine, usually pyridine, is added to remove the HCl and pull the reaction forward. Tertiary amines have no N–H hydrogen and are not acylated. With benzoyl chloride the reaction is called benzoylation.

**Carbylamine reaction.** This is the test for a primary amine.

:::formula Carbylamine reaction
**Carbylamine reaction:** $\begin{gathered}\ce{R-NH2 + CHCl3 + 3KOH}\\ \ce{->[heat] R-NC + 3KCl}\\ \text{+ }\ce{3H2O}\end{gathered}$
:::

The isocyanide (carbylamine) formed has an unmistakably foul smell. Both aliphatic and aromatic primary amines give it; secondary and tertiary amines do not.

**With nitrous acid.** Nitrous acid is unstable and is made in the flask from $\ce{NaNO2}$ and HCl. A primary *aliphatic* amine gives a diazonium salt that falls apart at once, releasing nitrogen gas and forming an alcohol: $\ce{RNH2 + HNO2 -> ROH + N2 + H2O}$. A primary *aromatic* amine at 273–278 K gives a diazonium salt stable enough to use, which is the subject of the last two sections.

**Hinsberg's test.** Benzenesulphonyl chloride, $\ce{C6H5SO2Cl}$, tells the three classes apart.

- A **primary** amine gives a sulphonamide that still has one hydrogen on nitrogen. The sulphonyl group makes that hydrogen acidic, so the product **dissolves in alkali**.
- A **secondary** amine gives a sulphonamide with no hydrogen on nitrogen. It is **insoluble in alkali**.
- A **tertiary** amine **does not react**.

:::tip
Hinsberg in three words: 1° soluble, 2° insoluble, 3° nothing. The reason is the acidic N–H, which only the primary product has.
:::

```ng-fill
id: hinsberg-fill
title: Hinsberg's test (benzenesulphonyl chloride)
cols: Amine | Product | In alkali
row: primary, $\ce{RNH2}$ | $\ce{C6H5SO2NHR}$ | [[dissolves (acidic N–H)]]
row: secondary, $\ce{R2NH}$ | $\ce{C6H5SO2NR2}$ | [[insoluble (no N–H)]]
row: tertiary, $\ce{R3N}$ | [[no reaction]] | —
```

```ng-mnemonic
id: hinsberg-sells
title: Hinsberg's results
trick: **One Sells (soluble), Two Sinks (insoluble), Three Sleeps (no reaction)**
meaning: Primary amine: product dissolves in alkali. Secondary: insoluble product. Tertiary: does not react.
prompt: What does a secondary amine give in Hinsberg's test?
```

```ng-compare
id: tests-for-amines
title: Two tests for amines
cols: Carbylamine test | Hinsberg test
row: Reagent | $\ce{CHCl3}$ + alcoholic KOH, heat | benzenesulphonyl chloride
row: Positive for | primary amines only (aliphatic and aromatic) | tells 1°, 2° and 3° apart
row: Sign | foul smell of isocyanide | solubility of the product in alkali
```

**In one breath:** Amines are alkylated and (1° and 2° only) acylated. Carbylamine's foul smell detects 1° amines, Hinsberg's reagent separates 1°, 2° and 3°, and nitrous acid turns 1° aliphatic amines into alcohols with loss of nitrogen.

## Aniline's ring: too reactive for its own good

The $\ce{-NH2}$ group pushes its lone pair into the ring and makes the ortho and para positions very electron-rich. Aniline is so reactive towards electrophiles that the problem is stopping the reaction.

**Bromination.** Bromine water at room temperature gives a white precipitate of 2,4,6-tribromoaniline at once. All three positions react.

**Nitration.** Two things go wrong. Nitric acid is an oxidising agent and gives tarry oxidation products. And in the strongly acidic mixture aniline is protonated to the anilinium ion, whose $\ce{-NH3+}$ group has no lone pair and is meta-directing. So nitration gives a surprising amount of the meta product (about 47%) along with para (51%) and very little ortho (2%).

**The fix: protect the amino group.** Acetylate it first with acetic anhydride to give acetanilide. The lone pair on nitrogen is now shared with the neighbouring C=O as well, so less of it goes into the ring. The group still directs ortho and para but activates mildly. After the substitution, hydrolysis removes the acetyl group.

:::skeleton Worked example: aniline to 4-bromoaniline
*Convert aniline into 4-bromoaniline.*

Step 1, protect: $\begin{gathered}\ce{C6H5NH2}\\ \ce{->[(CH3CO)2O, pyridine] C6H5NHCOCH3}\end{gathered}$ (acetanilide) [1]

Step 2, brominate: acetanilide + $\ce{Br2}$ in $\ce{CH3COOH}$ → 4-bromoacetanilide (major) [1]

Step 3, deprotect: hydrolysis with $\ce{H+}$ or $\ce{OH-}$ → 4-bromoaniline [1]
:::

The same three steps with nitric and sulphuric acids in place of bromine give 4-nitroaniline.

**Sulphonation.** Aniline and concentrated sulphuric acid form anilinium hydrogensulphate, which on heating at 453–473 K gives 4-aminobenzenesulphonic acid (sulphanilic acid). It exists as a **zwitterion**, with $\ce{-NH3+}$ and $\ce{-SO3-}$ in the same molecule.

:::tip
Aniline does **not** undergo Friedel–Crafts alkylation or acylation. It is a base and forms a salt with the Lewis acid catalyst $\ce{AlCl3}$; the nitrogen becomes positive and deactivates the ring.
:::

```ng-steps
id: protect-aniline
title: Making 4-bromoaniline: protect, react, deprotect
step: **Protect:** acetylate aniline with acetic anhydride to give acetanilide; the N lone pair is now shared with C=O.
step: **React:** brominate acetanilide; the milder –NHCOCH₃ group gives mainly the **para** product.
step: **Deprotect:** hydrolyse with acid or alkali to free the –NH₂: 4-bromoaniline.
```

**In one breath:** $\ce{-NH2}$ activates the ring so strongly that bromine water gives the tribromo product and nitration gives mixed products including meta; acetylating to acetanilide tames it. No Friedel–Crafts, because aniline binds $\ce{AlCl3}$.

## Diazonium salts: making them

When aniline is treated with nitrous acid in the cold, the product is benzenediazonium chloride. The reaction is **diazotisation**.

:::formula Diazotisation
**Diazotisation:** $\begin{gathered}\ce{C6H5NH2 + NaNO2 + 2HCl}\\ \ce{->[273-278 K] C6H5N2+Cl-}\\ \text{+ }\ce{NaCl + 2H2O}\end{gathered}$
:::

Why is this salt stable when the aliphatic ones are not? The positive charge of the $\ce{-N2+}$ group is delocalised into the benzene ring by resonance. Even so the stability is limited: the salt decomposes on warming and can explode when dry, so it is never isolated. It is made in ice-cold solution and used immediately.

:::tip
The temperature, 273–278 K (0–5 °C), is part of the answer. Above it the diazonium salt reacts with water and you get phenol.
:::

```ng-steps
id: diazotisation-steps
title: Diazotisation in the lab
step: Dissolve aniline in dilute **HCl** and cool in ice to **273–278 K**.
step: Add cold **sodium nitrite** solution slowly: $\ce{NaNO2 + HCl}$ makes nitrous acid in the flask.
step: Benzenediazonium chloride forms; **use it at once** in the cold (it decomposes to phenol if warmed).
```

**In one breath:** A primary aromatic amine with $\ce{NaNO2}$ and HCl at 273–278 K gives a diazonium salt, stabilised by resonance with the ring but used at once in cold solution.

## Diazonium salts: using them

The $\ce{-N2+}$ group is an excellent leaving group, since it leaves as nitrogen gas. Its reactions fall into two kinds.

**Reactions in which nitrogen is lost.** The group is replaced by something else.

:::formula Replacing the diazonium group
**Sandmeyer reaction:** $\ce{ArN2+X- ->[CuCl/HCl] ArCl}$ · $\ce{->[CuBr/HBr] ArBr}$ · $\ce{->[CuCN/KCN] ArCN}$

**Gattermann reaction:** $\ce{ArN2+X- ->[Cu/HCl] ArCl}$ · $\ce{->[Cu/HBr] ArBr}$ (copper powder; lower yield)

Iodide: $\ce{ArN2+Cl- + KI -> ArI + KCl + N2}$

Fluoride: $\begin{gathered}\ce{ArN2+Cl- + HBF4}\\ \ce{-> ArN2+BF4-}\\ \ce{->[heat] ArF + BF3 + N2}\end{gathered}$

Hydroxyl: $\begin{gathered}\ce{ArN2+Cl- + H2O}\\ \ce{->[warm] ArOH + N2 + HCl}\end{gathered}$

Hydrogen: $\begin{gathered}\ce{ArN2+Cl- + H3PO2 + H2O}\\ \ce{-> ArH + N2 + H3PO3}\\ \text{+ }\ce{HCl}\end{gathered}$ (ethanol also works)
:::

The Sandmeyer reaction uses a copper(I) salt; the Gattermann reaction uses copper powder with the acid. Replacement by hydrogen looks pointless but is very useful: an amino group can be put on a ring to direct other groups into position and then removed.

**Reactions in which nitrogen is kept: coupling.** The diazonium ion is a weak electrophile. It attacks very electron-rich rings, phenol or aniline, at the para position, and the two rings end up joined through an –N=N– (azo) bond. The products are brightly coloured **azo dyes**, because the long conjugated system absorbs visible light.

:::formula Coupling reactions
**Coupling:** $\ce{C6H5N2+Cl-}$ + phenol (in NaOH) → 4-hydroxyazobenzene, orange

$\ce{C6H5N2+Cl-}$ + aniline (weakly acidic) → 4-aminoazobenzene, yellow
:::

Coupling is also the test for a primary aromatic amine: diazotise in the cold, add alkaline 2-naphthol, and an orange-red dye appears.

The wider point is that diazonium salts let you put groups on a ring that cannot be introduced directly, such as –F, –I and –CN, or place groups in positions that direct substitution would not give.

:::skeleton Worked example: a route through a diazonium salt
*Convert aniline into benzoic acid.*

Step 1: $\begin{gathered}\ce{C6H5NH2}\\ \ce{->[NaNO2}\\ \text{+ }\ce{HCl, 273-278 K] C6H5N2+Cl-}\end{gathered}$ (diazotisation) [1]

Step 2: $\begin{gathered}\ce{C6H5N2+Cl-}\\ \ce{->[CuCN/KCN] C6H5CN}\end{gathered}$ (Sandmeyer reaction) [1]

Step 3: $\ce{C6H5CN ->[H3O+, heat] C6H5COOH}$ (hydrolysis of the nitrile) [1]
:::

```ng-fill
id: diazonium-fill
title: What replaces the –N₂⁺ group?
cols: Reagent | Product
row: CuCl/HCl (Sandmeyer) | [[chlorobenzene]]
row: CuCN/KCN | [[benzonitrile]]
row: KI | [[iodobenzene]]
row: $\ce{HBF4}$, then heat | [[fluorobenzene]]
row: warm water | [[phenol]]
row: $\ce{H3PO2}$ or ethanol | [[benzene]]
row: phenol in alkali | [[p-hydroxyazobenzene (orange dye)]]
```

```ng-steps
id: coupling-steps
title: Making an azo dye
step: Diazotise aniline in ice: benzenediazonium chloride.
step: Dissolve phenol in **NaOH** (or aniline in weak acid) and cool.
step: Add the diazonium solution: it attacks the **para** position and an orange (or yellow) azo dye separates.
```

**In one breath:** $\ce{-N2+}$ leaves as nitrogen and can be replaced by Cl, Br, CN (Sandmeyer), I, F, OH or H; with phenol or aniline it couples at the para position to give coloured azo dyes.
