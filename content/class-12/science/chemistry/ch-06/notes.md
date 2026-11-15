# Ch 6 · Haloalkanes and Haloarenes

Replace a hydrogen atom of a hydrocarbon with a halogen and you get one of the most useful families in organic chemistry. Haloalkanes are the starting point for making alcohols, ethers, amines, nitriles and longer carbon chains, because the halogen can be swapped for almost anything. This chapter is the first of five organic chapters, and it introduces ideas you will use in all of them: nucleophiles, leaving groups, carbocations and mechanisms. Learn *why* each reaction goes the way it does here and the later chapters become much lighter.

## Kinds of halides and the C–X bond

In a **haloalkane** (alkyl halide, R–X) the halogen is attached to an sp$^3$ carbon of an alkyl group. In a **haloarene** (aryl halide, Ar–X) it is attached directly to an sp$^2$ carbon of a benzene ring. That one difference, sp$^3$ against sp$^2$, controls most of the chemistry.

Haloalkanes are classed as primary (1°), secondary (2°) or tertiary (3°) by the number of carbons attached to the carbon bearing the halogen. Four special positions have names you must recognise:

- **Allylic:** halogen on the sp$^3$ carbon next to a C=C double bond, as in $\ce{CH2=CH-CH2Cl}$.
- **Benzylic:** halogen on the sp$^3$ carbon next to a benzene ring, as in $\ce{C6H5CH2Cl}$.
- **Vinylic:** halogen directly on a C=C carbon, as in $\ce{CH2=CHCl}$.
- **Aryl:** halogen directly on the ring.

Halogens are more electronegative than carbon, so the C–X bond is polar, with a partial positive charge on carbon. That positive carbon is what electron-rich reagents attack. Down the group the halogen atom gets bigger, so the bond gets longer and weaker: C–F is the shortest and strongest, C–I the longest and weakest.

**In one breath:** Haloalkanes have halogen on sp$^3$ carbon, haloarenes on sp$^2$ ring carbon; the C–X bond is polar with δ+ on carbon, and it weakens from C–F to C–I.

## Making haloalkanes

**From alcohols.** This is the most convenient route: replace –OH by –X. Hydrogen halides do it, with primary and secondary alcohols needing anhydrous zinc chloride as catalyst for HCl. Phosphorus halides and thionyl chloride work too.

:::formula Haloalkanes from alcohols
$\ce{R-OH + HX -> R-X + H2O}$ (with HCl: anhydrous $\ce{ZnCl2}$ for 1° and 2° alcohols)

$\ce{3R-OH + PCl3 -> 3R-Cl + H3PO3}$ and $\ce{R-OH + PCl5 -> R-Cl + POCl3 + HCl}$

$\ce{R-OH + SOCl2 -> R-Cl + SO2 + HCl}$
:::

Thionyl chloride is the preferred reagent, and the reason is practical: both by-products, $\ce{SO2}$ and HCl, are gases that escape, leaving pure chloroalkane behind.

**From alkenes.** An alkene adds HX across the double bond. With an unsymmetrical alkene the hydrogen goes to the carbon that already has more hydrogens (**Markovnikov's rule**), so propene and HBr give mainly 2-bromopropane. If a peroxide is present, HBr adds the other way round and gives 1-bromopropane.

:::tip
The peroxide effect works only with HBr. HCl and HI always follow Markovnikov's rule.
:::

**By halogen exchange.** Iodoalkanes and fluoroalkanes are best made by swapping one halogen for another.

:::formula Halogen exchange: Finkelstein and Swarts
**Finkelstein reaction:** $\ce{R-X + NaI ->[dry acetone] R-I + NaX}$ (X = Cl, Br)

**Swarts reaction:** $\ce{R-Br + AgF -> R-F + AgBr}$ (also $\ce{Hg2F2}$, $\ce{CoF2}$, $\ce{SbF3}$)
:::

Why dry acetone in the Finkelstein reaction? Sodium iodide dissolves in acetone but sodium chloride and bromide do not. They precipitate, and by Le Chatelier's principle that pulls the reaction forward.

**In one breath:** Haloalkanes come from alcohols (thionyl chloride is cleanest), from alkenes by adding HX (Markovnikov, except HBr with peroxide), and from other halides by Finkelstein (iodides) or Swarts (fluorides).

## Making haloarenes

Benzene does not add halogens the way alkenes do; it undergoes **substitution**. Chlorine or bromine reacts with benzene in the dark in the presence of a Lewis acid such as iron or $\ce{FeCl3}$, replacing a ring hydrogen: $\ce{C6H6 + Cl2 ->[FeCl3] C6H5Cl + HCl}$.

Fluorine reacts too violently for this, and iodination is reversible, so those two are made another way: from a **diazonium salt**, which you will meet properly in the Amines chapter. Aniline is converted to benzenediazonium chloride, and the $\ce{-N2+}$ group is then replaced.

:::formula Sandmeyer reaction
**Sandmeyer reaction:** $\ce{ArN2+X- ->[CuCl/HCl] ArCl + N2}$ (CuBr/HBr gives ArBr)

With potassium iodide: $\ce{ArN2+X- + KI -> ArI + N2 + KX}$
:::

**In one breath:** Chloro- and bromoarenes are made by substituting ring hydrogen using a Lewis acid catalyst; other aryl halides come from diazonium salts, as in the Sandmeyer reaction.

## Physical properties

Three trends, each with a reason.

**Boiling points** are higher than those of the parent hydrocarbons because the molecules are polar and heavier. For the same alkyl group the order is RI > RBr > RCl > RF, following size and mass. Among isomers, branching lowers the boiling point: a more compact molecule has less surface in contact with its neighbours.

**Melting points** of the dihalobenzenes hold a small surprise. The para isomer melts well above the ortho and meta isomers, because its symmetrical shape packs more tightly into a crystal lattice.

**Solubility in water** is very low, even though the molecules are polar. To dissolve, a haloalkane would have to break the hydrogen bonds between water molecules, and the weak attractions it can offer in return do not repay that energy. Haloalkanes dissolve readily in organic solvents instead.

**In one breath:** Boiling point rises with halogen size and falls with branching; para-dihalobenzenes melt highest because they pack best; haloalkanes barely dissolve in water because they cannot replace its hydrogen bonds.

## Nucleophilic substitution: the S$_\text{N}$2 path

The carbon bearing the halogen is slightly positive, so it attracts **nucleophiles**: species with a lone pair or negative charge seeking a positive centre. The nucleophile bonds to the carbon and the halide leaves, taking the bonding pair with it. The halide is the **leaving group**.

This one reaction makes many families. Aqueous KOH gives alcohols, sodium alkoxide gives ethers, ammonia gives amines, and $\ce{LiAlH4}$ gives alkanes. Two nucleophiles are **ambident**: they have two possible attacking atoms. Cyanide from KCN, which is ionic, attacks through carbon and gives a nitrile, R–CN; AgCN, which is covalent, leaves only nitrogen's lone pair free and gives an isocyanide, R–NC. In the same way $\ce{KNO2}$ gives an alkyl nitrite, R–ONO, and $\ce{AgNO2}$ a nitroalkane, $\ce{R-NO2}$.

*How* the swap happens matters, and there are two routes. Take bromomethane and hydroxide ion. Experiment shows the rate depends on both concentrations: rate $=k[\ce{CH3Br}][\ce{OH-}]$. So both species are involved in the slow step. The picture is a single step: the hydroxide approaches the carbon from the side *opposite* the bromine, and as the new C–O bond forms, the C–Br bond breaks. For an instant the carbon is partly bonded to five groups, a transition state. This is the **S$_\text{N}$2** mechanism: substitution, nucleophilic, bimolecular.

```ng-figure
id: sn2-mechanism
title: SN2 mechanism
svg:
<svg viewBox="0 0 400 150" role="img" aria-label="SN2 mechanism: backside attack, transition state, inversion" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M64,70 H86"/><path d="M54,63 L44,44"/><path d="M54,78 L44,98"/><path d="M51,70 L36,70" stroke-dasharray="2 2"/><path d="M20,60 Q36,38 52,58" stroke-width="1"/><path d="M47.7,55.5L52,58L52.0,53.0" stroke-width="1"/><path d="M75,64 Q86,52 96,62" stroke-width="1"/><path d="M91.7,59.5L96,62L96.0,57.0" stroke-width="1"/><path d="M108,70 H124" stroke-width="1"/><path d="M119.7,72.5L124,70L119.7,67.5" stroke-width="1"/><path d="M268,70 H282" stroke-width="1"/><path d="M277.7,72.5L282,70L277.7,67.5" stroke-width="1"/><path d="M140,26 H134 V122 H140 M252,26 H258 V122 H252" stroke-width="1"/><path d="M164,70 H184" stroke-dasharray="3 3"/><path d="M208,70 H228" stroke-dasharray="3 3"/><path d="M196,60 V40"/><path d="M192,80 L182,100"/><path d="M200,80 L210,100"/><path d="M304,70 H322"/><path d="M338,63 L348,44"/><path d="M338,78 L348,98"/><path d="M341,70 L356,70" stroke-dasharray="2 2"/>
<g fill="currentColor" stroke="none"><text x="14" y="74" text-anchor="middle">HO⁻</text><text x="58" y="74" text-anchor="middle">C</text><text x="98" y="74" text-anchor="middle">Br</text><text x="40" y="40" text-anchor="middle" font-size="10">H</text><text x="40" y="108" text-anchor="middle" font-size="10">H</text><text x="31" y="82" text-anchor="middle" font-size="10">H</text><text x="262" y="30" font-size="10">‡ −</text><text x="152" y="74" text-anchor="middle">HO</text><text x="196" y="74" text-anchor="middle">C</text><text x="240" y="74" text-anchor="middle">Br</text><text x="196" y="34" text-anchor="middle" font-size="10">H</text><text x="178" y="110" text-anchor="middle" font-size="10">H</text><text x="214" y="110" text-anchor="middle" font-size="10">H</text><text x="196" y="140" text-anchor="middle" font-size="9">transition state</text><text x="292" y="74" text-anchor="middle">HO</text><text x="332" y="74" text-anchor="middle">C</text><text x="352" y="40" text-anchor="middle" font-size="10">H</text><text x="352" y="108" text-anchor="middle" font-size="10">H</text><text x="362" y="82" text-anchor="middle" font-size="10">H</text><text x="370" y="132" text-anchor="middle" font-size="10">+ Br⁻</text></g>
</svg>
caption: Figure 6.1 One step: the nucleophile attacks from the back as bromide leaves, and the three H atoms flip like an umbrella in the wind.
part: 16, 92 | Nucleophile, HO⁻ | Attacks the δ+ carbon from the side opposite to Br.
part: 98, 92 | Leaving group | Br leaves with the bonding pair as Br⁻.
part: 196, 128 | Transition state | C partly bonded to both O and Br; the three H lie in one plane.
part: 322, 96 | Inverted product | The H atoms now point the other way: inversion of configuration.
```

Because the nucleophile must reach the back of the carbon, bulky groups get in its way. That gives the reactivity order.

:::formula Reactivity in SN2
S$_\text{N}$2 reactivity: $\ce{CH3X}$ > 1° > 2° > 3° (less crowding, faster attack)
:::

```ng-steps
id: sn2-steps
title: SN2, step by step
svg:
<svg viewBox="0 0 400 150" role="img" aria-label="SN2 mechanism step by step" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<g data-step="1"><path d="M64,70 H86"/><path d="M54,63 L44,44"/><path d="M54,78 L44,98"/><path d="M51,70 L36,70" stroke-dasharray="2 2"/><path d="M20,60 Q36,38 52,58" stroke-width="1"/><path d="M47.7,55.5L52,58L52.0,53.0" stroke-width="1"/><path d="M75,64 Q86,52 96,62" stroke-width="1"/><path d="M91.7,59.5L96,62L96.0,57.0" stroke-width="1"/><g fill="currentColor" stroke="none"><text x="14" y="74" text-anchor="middle">HO⁻</text><text x="58" y="74" text-anchor="middle">C</text><text x="98" y="74" text-anchor="middle">Br</text><text x="40" y="40" text-anchor="middle" font-size="10">H</text><text x="40" y="108" text-anchor="middle" font-size="10">H</text><text x="31" y="82" text-anchor="middle" font-size="10">H</text></g></g><g data-step="2"><path d="M108,70 H124" stroke-width="1"/><path d="M119.7,72.5L124,70L119.7,67.5" stroke-width="1"/><path d="M140,26 H134 V122 H140 M252,26 H258 V122 H252" stroke-width="1"/><path d="M164,70 H184" stroke-dasharray="3 3"/><path d="M208,70 H228" stroke-dasharray="3 3"/><path d="M196,60 V40"/><path d="M192,80 L182,100"/><path d="M200,80 L210,100"/><g fill="currentColor" stroke="none"><text x="262" y="30" font-size="10">‡ −</text><text x="152" y="74" text-anchor="middle">HO</text><text x="196" y="74" text-anchor="middle">C</text><text x="240" y="74" text-anchor="middle">Br</text><text x="196" y="34" text-anchor="middle" font-size="10">H</text><text x="178" y="110" text-anchor="middle" font-size="10">H</text><text x="214" y="110" text-anchor="middle" font-size="10">H</text><text x="196" y="140" text-anchor="middle" font-size="9">transition state</text></g></g><g data-step="3"><path d="M268,70 H282" stroke-width="1"/><path d="M277.7,72.5L282,70L277.7,67.5" stroke-width="1"/><path d="M304,70 H322"/><path d="M338,63 L348,44"/><path d="M338,78 L348,98"/><path d="M341,70 L356,70" stroke-dasharray="2 2"/><g fill="currentColor" stroke="none"><text x="292" y="74" text-anchor="middle">HO</text><text x="332" y="74" text-anchor="middle">C</text><text x="352" y="40" text-anchor="middle" font-size="10">H</text><text x="352" y="108" text-anchor="middle" font-size="10">H</text><text x="362" y="82" text-anchor="middle" font-size="10">H</text><text x="370" y="132" text-anchor="middle" font-size="10">+ Br⁻</text></g></g>
</svg>
step: The nucleophile ($\ce{HO-}$) approaches the carbon from the side **opposite** to the bromine.
step: In the **transition state** the C–O bond is forming while the C–Br bond is breaking; carbon is briefly bonded to five groups.
step: Bromide leaves; the other three groups are flipped: **inversion of configuration**. Rate $=k[\ce{RX}][\ce{OH-}]$.
```

```ng-draw
id: draw-sn2
title: Draw the SN2 mechanism for bromomethane and hydroxide
svg: ref: notes#sn2-mechanism
time: 4
```

```ng-fill
id: ambident-products
title: One reagent, which product?
cols: Haloalkane + reagent | Product
row: R–X + KCN | [[R–CN, nitrile]]
row: R–X + AgCN | [[R–NC, isocyanide]]
row: R–X + $\ce{KNO2}$ | [[R–O–N=O, alkyl nitrite]]
row: R–X + $\ce{AgNO2}$ | [[$\ce{R-NO2}$, nitroalkane]]
row: R–X + aqueous KOH | [[R–OH, alcohol]]
row: R–X + alcoholic KOH | [[alkene]]
```

```ng-mnemonic
id: k-karbon
title: KCN or AgCN?
trick: **K** attacks with **K**arbon; **Ag**ent silver goes through **N**itrogen
meaning: KCN is ionic, so $\ce{CN-}$ attacks through C and gives a nitrile, R–CN. AgCN is covalent, leaving only N free, so it gives an isocyanide, R–NC.
prompt: Which gives the nitrile: KCN or AgCN?
```

**In one breath:** A nucleophile attacks the δ+ carbon and the halide leaves. In S$_\text{N}$2 this happens in one step from the back, the rate depends on both reactants, and crowding slows it: methyl > 1° > 2° > 3°.

## The S$_\text{N}$1 path, and choosing between the two

Now take 2-bromo-2-methylpropane, a tertiary halide, with water. The rate depends only on the halide: rate $=k[\ce{(CH3)3CBr}]$. The nucleophile is not in the slow step at all.

Here the reaction goes in two steps. First the C–Br bond breaks by itself, slowly, giving a **carbocation** and a bromide ion. Then the nucleophile attacks the carbocation, fast. Only one molecule takes part in the slow step, so this is **S$_\text{N}$1**: substitution, nucleophilic, unimolecular.

The slow step is forming the carbocation, so anything that stabilises the carbocation speeds up the reaction. Alkyl groups push electron density towards the positive carbon, so a tertiary carbocation is the most stable.

:::formula Reactivity in SN1 and leaving groups
S$_\text{N}$1 reactivity: 3° > 2° > 1° > $\ce{CH3X}$ (more stable carbocation, faster ionisation)

Leaving group, both mechanisms: R–I > R–Br > R–Cl > R–F
:::

The two orders are exact opposites, which makes prediction easy: primary halides go by S$_\text{N}$2, tertiary by S$_\text{N}$1, and secondary can do either. S$_\text{N}$1 is helped by polar protic solvents such as water and alcohols, which stabilise the ions.

Allylic and benzylic halides are a special case. They look primary, yet they react very fast by S$_\text{N}$1, because their carbocations are stabilised by resonance with the neighbouring double bond or ring.

:::skeleton Worked example: which reacts faster?
*In each pair, which compound reacts faster by the mechanism named, and why? (i) S$_\text{N}$2: 1-bromobutane or 2-bromo-2-methylpropane. (ii) S$_\text{N}$1: $\ce{CH2=CH-CH2Cl}$ or $\ce{CH3CH2CH2Cl}$.*

(i) **1-Bromobutane.** It is primary, so the nucleophile can reach the back of the carbon; the tertiary halide is blocked by three methyl groups. [1]

(ii) **$\ce{CH2=CH-CH2Cl}$.** It ionises to the allyl carbocation, which is stabilised by resonance; the propyl carbocation has no such stabilisation. [1]
:::

```ng-steps
id: sn1-steps
title: SN1, step by step
step: **Slow:** the C–Br bond breaks on its own, giving a planar carbocation: $\ce{(CH3)3C-Br -> (CH3)3C+ + Br-}$.
step: **Fast:** the nucleophile attacks the flat carbocation from either face: $\ce{(CH3)3C+ + OH- -> (CH3)3C-OH}$.
step: Only the halide is in the slow step, so rate $=k[\ce{RX}]$; a chiral substrate gives a **racemic** product.
```

```ng-compare
id: sn1-vs-sn2
title: SN1 vs SN2
cols: SN1 | SN2
row: Steps | two, through a carbocation | one, concerted
row: Rate law | $k[\ce{RX}]$ | $k[\ce{RX}][\ce{Nu-}]$
row: Reactivity | 3° > 2° > 1° | $\ce{CH3X}$ > 1° > 2° > 3°
row: Stereochemistry | racemisation | inversion
row: Favoured by | polar protic solvent, stable carbocation | strong nucleophile, little crowding
```

```ng-mnemonic
id: sn2-saath
title: Remembering SN1 and SN2
trick: **S$_\text{N}$2 = saath-saath** (together); **S$_\text{N}$1 = one at a time**
meaning: S$_\text{N}$2: the new bond forms and the old bond breaks **together**, in one step, with two species in the slow step.
meaning: S$_\text{N}$1: the halide leaves **first**, alone, then the nucleophile arrives.
prompt: In which mechanism do bond-making and bond-breaking happen together?
```

**In one breath:** S$_\text{N}$1 goes through a carbocation in two steps, with rate depending on the halide alone, so 3° > 2° > 1°, the reverse of S$_\text{N}$2. Allylic and benzylic halides are fast because of resonance.

## What happens in space: stereochemistry

The two mechanisms leave different fingerprints on the shape of the product. To see them you need **chirality**.

A carbon with four *different* groups attached is an **asymmetric (chiral) carbon**. A molecule containing one cannot be superimposed on its mirror image, just as your left hand cannot be superimposed on your right. The two mirror-image forms are **enantiomers**. They have the same melting point, boiling point and solubility, but they rotate the plane of plane-polarised light in opposite directions: one to the right (dextrorotatory, +), the other to the left (laevorotatory, −). Such compounds are **optically active**. Butan-2-ol and 2-bromobutane are chiral; propan-2-ol is not, because its carbon carries two identical methyl groups.

A mixture of equal amounts of the two enantiomers has zero rotation, since each cancels the other. It is called a **racemic mixture**, and the process of forming one is racemisation.

Now the fingerprints. In S$_\text{N}$2 the nucleophile enters from the back while the leaving group departs from the front, so the configuration is turned inside out: **inversion**. Optically active (−)-2-bromooctane with hydroxide gives (+)-octan-2-ol with the opposite configuration. In S$_\text{N}$1 the carbocation intermediate is flat, sp$^2$ hybridised, and the nucleophile can attack either face with equal ease. Both enantiomers form, and the product is **racemic**.

:::tip
S$_\text{N}$2 gives inversion; S$_\text{N}$1 gives racemisation. Students often write these the wrong way round, so tie each to its picture: backside attack, flat carbocation.
:::

```ng-figure
id: butanol-enantiomers
title: Enantiomers of butan-2-ol
svg:
<svg viewBox="0 0 320 160" role="img" aria-label="Enantiomers of butan-2-ol" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M85,74 V44"/><path d="M79,84 L53,100"/><path d="M85,80 L115,112 L109,117 Z" fill="currentColor" stroke="none"/><path d="M91,82 L119,88" stroke-dasharray="3 2"/><path d="M235,74 V44"/><path d="M241,84 L267,100"/><path d="M235,80 L205,112 L211,117 Z" fill="currentColor" stroke="none"/><path d="M229,82 L201,88" stroke-dasharray="3 2"/><path d="M160,25 V140" stroke-dasharray="5 4" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="85" y="38" text-anchor="middle" font-size="10">OH</text><text x="41" y="106" text-anchor="middle" font-size="10">CH₃</text><text x="125" y="126" text-anchor="middle" font-size="10">C₂H₅</text><text x="129" y="92" text-anchor="middle" font-size="10">H</text><text x="85" y="84" text-anchor="middle" font-size="11">C</text><text x="235" y="38" text-anchor="middle" font-size="10">OH</text><text x="279" y="106" text-anchor="middle" font-size="10">CH₃</text><text x="195" y="126" text-anchor="middle" font-size="10">C₂H₅</text><text x="191" y="92" text-anchor="middle" font-size="10">H</text><text x="235" y="84" text-anchor="middle" font-size="11">C</text><text x="160" y="152" text-anchor="middle" font-size="9">mirror</text></g>
</svg>
caption: Mirror images that cannot be superimposed; they rotate plane-polarised light in opposite directions.
part: 85, 58 | Chiral carbon | Bonded to four different groups: OH, H, CH₃, C₂H₅.
part: 160, 60 | Mirror | The two forms are mirror images.
part: 101, 99 | Wedge | Bond coming towards you.
part: 124, 84 | Dashed bond | Bond going away from you.
```

```ng-draw
id: draw-enantiomers
title: Draw the two enantiomers of butan-2-ol
svg: ref: notes#butanol-enantiomers
time: 3
```

**In one breath:** A carbon with four different groups is chiral and gives mirror-image enantiomers that rotate polarised light oppositely. S$_\text{N}$2 inverts the configuration; S$_\text{N}$1, through a flat carbocation, gives a racemic mixture.

## Elimination, and reactions with metals

Change the conditions and a haloalkane does something different. Heated with *alcoholic* KOH it loses HX instead of swapping X: the base pulls a hydrogen off the carbon next door (the β-carbon), the halide leaves, and a double bond forms. This is **β-elimination** (dehydrohalogenation).

When there is a choice of β-hydrogens, **Zaitsev's rule** applies: the preferred product is the alkene with more alkyl groups on the double-bond carbons. So 2-bromobutane gives mainly but-2-ene, with a little but-1-ene.

Substitution and elimination compete. A primary halide with a good nucleophile prefers substitution; a tertiary halide, or a strong bulky base, prefers elimination.

:::tip
Aqueous KOH substitutes (gives the alcohol); alcoholic KOH eliminates (gives the alkene). The solvent word decides the answer.
:::

Haloalkanes also react with metals. With magnesium in dry ether they form **Grignard reagents**, R–Mg–X, in which the carbon is bonded to a metal and carries a partial *negative* charge. That makes it a powerful nucleophile, and Grignard reagents are among the most useful tools for building carbon chains. They are destroyed by anything that can supply a proton, even traces of water: $\ce{RMgX + H2O -> RH + Mg(OH)X}$. So the ether must be perfectly dry.

With sodium, two alkyl groups join.

:::formula Wurtz reaction
**Wurtz reaction:** $\ce{2R-X + 2Na ->[dry ether] R-R + 2NaX}$
:::

```ng-mnemonic
id: aq-alc-koh
title: Aqueous or alcoholic KOH?
trick: **Aq**ueous gives **Al**cohol; **Alc**oholic gives **Alk**ene
meaning: Aqueous KOH substitutes (–OH replaces –X); alcoholic KOH eliminates HX to form the more substituted alkene (Zaitsev).
prompt: What does alcoholic KOH do to a haloalkane?
```

```ng-steps
id: grignard-steps
title: Making and using a Grignard reagent
step: Haloalkane + Mg in **dry ether** → $\ce{R-MgX}$; carbon is now δ− and nucleophilic.
step: Keep everything dry: water destroys it, $\ce{RMgX + H2O -> RH + Mg(OH)X}$.
step: Use it to build carbon chains: with carbonyl compounds it gives alcohols (Ch 7), with $\ce{CO2}$ acids (Ch 8).
```

**In one breath:** Alcoholic KOH removes HX to give the more substituted alkene (Zaitsev). Magnesium in dry ether gives Grignard reagents, which water destroys; sodium couples two alkyl groups (Wurtz).

## Haloarenes behave differently

Chlorobenzene will not react with aqueous NaOH under conditions that convert chloroethane to ethanol in minutes. It takes 623 K and 300 atmospheres to make phenol from it. Four reasons combine:

1. **Resonance.** A lone pair on the halogen is delocalised into the ring, giving the C–X bond partial double-bond character. It is shorter and harder to break.
2. **Hybridisation.** The ring carbon is sp$^2$, which holds its electrons more tightly than sp$^3$ carbon, again strengthening the bond.
3. **No stable cation.** The phenyl cation that S$_\text{N}$1 would need is not stabilised by resonance.
4. **Repulsion.** The electron-rich ring repels an approaching nucleophile, and the ring itself blocks any attack from the back.

An electron-withdrawing nitro group at the ortho or para position makes substitution much easier, because it helps carry the negative charge of the intermediate. With one such group the reaction with NaOH goes at 443 K, with two at 368 K, and 2,4,6-trinitrochlorobenzene reacts with warm water. A nitro group at the meta position cannot do this and has little effect.

Haloarenes do take part in the reactions typical of benzene: **electrophilic substitution** on the ring. The halogen withdraws electrons through the bond, so the ring reacts more slowly than benzene. But its lone pair feeds electron density back to the ortho and para positions by resonance, so that is where the new group goes. Halogens are *deactivating but ortho- and para-directing*. Chlorination, nitration, sulphonation and Friedel–Crafts alkylation and acylation all give mixtures of ortho and para products, with para the major one.

Finally, aryl halides couple with sodium just as alkyl halides do.

:::formula Wurtz–Fittig and Fittig reactions
**Wurtz–Fittig reaction:** $\ce{Ar-X + R-X + 2Na ->[dry ether] Ar-R + 2NaX}$

**Fittig reaction:** $\ce{2Ar-X + 2Na ->[dry ether] Ar-Ar + 2NaX}$
:::

:::skeleton Worked example: a two-step conversion
*Convert benzene into biphenyl.*

Step 1: $\ce{C6H6 + Cl2 ->[anhyd. FeCl3] C6H5Cl + HCl}$ (chlorobenzene) [1]

Step 2: $\ce{2C6H5Cl + 2Na ->[dry ether] C6H5-C6H5 + 2NaCl}$ (Fittig reaction) [1]
:::

```ng-compare
id: haloalkane-vs-haloarene
title: Haloalkane vs haloarene
cols: Haloalkane (R–X) | Haloarene (Ar–X)
row: Carbon bearing X | $sp^3$ | $sp^2$
row: C–X bond | normal single bond | partial double bond (resonance), shorter
row: Nucleophilic substitution | easy (S$_\text{N}$1/S$_\text{N}$2) | very difficult (623 K, 300 atm for NaOH)
row: Ring reactions | none | electrophilic substitution at ortho and para (deactivating)
```

**In one breath:** Resonance and sp$^2$ carbon make the aryl C–X bond strong, so haloarenes resist nucleophiles unless nitro groups sit at ortho or para; on the ring, halogens slow electrophilic substitution but send it ortho and para.

## Polyhalogen compounds

A few compounds with more than one halogen are important enough to know by name, mostly for their uses and their harm.

**Dichloromethane**, $\ce{CH2Cl2}$, is a solvent, paint remover and propellant; it harms the central nervous system. **Chloroform**, $\ce{CHCl3}$, is a solvent for fats and was once an anaesthetic. In air and light it slowly oxidises to phosgene, a very poisonous gas: $\ce{2CHCl3 + O2 ->[light] 2COCl2 + 2HCl}$. That is why it is stored in dark bottles filled to the brim. **Iodoform**, $\ce{CHI3}$, was used as an antiseptic because it releases iodine. **Tetrachloromethane**, $\ce{CCl4}$, was used in refrigerants and as a cleaning solvent; in the upper atmosphere it damages the ozone layer.

**Freons** are chlorofluorocarbons such as $\ce{CCl2F2}$ (freon-12). They are so stable and unreactive that they were ideal for refrigerators and aerosol cans, but the same stability lets them drift up to the stratosphere, where they break down and destroy ozone. **DDT** was the first chlorinated insecticide and hugely effective against malaria-carrying mosquitoes. It does not break down, builds up in the fatty tissue of animals, and insects became resistant to it, so many countries have banned it.

**In one breath:** Chloroform turns to phosgene in light and air; freons and $\ce{CCl4}$ destroy ozone; DDT persists and accumulates in fat. Their usefulness and their harm come from the same stability.
