# Ch 7 · Alcohols, Phenols and Ethers

Ethanol in sanitiser, phenol in antiseptics, ether as a solvent: three families built around one oxygen atom. An **alcohol** has an –OH group on an sp$^3$ carbon. A **phenol** has –OH directly on a benzene ring. An **ether** has an oxygen joined to two carbon groups, R–O–R′. The questions to keep in mind as you read are simple. What does the O–H hydrogen do? What does the C–O bond do? And how does a benzene ring next to the oxygen change both?

## Three families and their shapes

Alcohols are classed as primary, secondary or tertiary by the carbon that carries the –OH, and as monohydric, dihydric or trihydric by the number of –OH groups. Ethers are simple (both groups the same, as in ethoxyethane) or mixed (different groups, as in methoxybenzene, known as anisole).

In all three the oxygen is sp$^3$ hybridised with two lone pairs, so the molecules are bent. In methanol the C–O–H angle is 108.9°, a little less than the tetrahedral angle because the lone pairs push the bonds together. In an ether the two bulky alkyl groups push apart, opening the angle to about 111.7°. In phenol the C–O bond is shorter than in an alcohol: the carbon is sp$^2$, and a lone pair on oxygen is partly shared with the ring, giving the bond some double-bond character. That sharing explains most of phenol's special behaviour.

**In one breath:** Alcohols have –OH on sp$^3$ carbon, phenols have it on the ring, ethers have C–O–C; in phenol the oxygen lone pair is shared with the ring, shortening and strengthening the C–O bond.

## Making alcohols

**From alkenes.** Water adds across a double bond in the presence of acid, following Markovnikov's rule, so propene gives propan-2-ol. The mechanism has three steps and is worth knowing.

:::skeleton Mechanism: acid-catalysed hydration of ethene
Step 1, protonation of the alkene to give a carbocation: $\ce{CH2=CH2 + H3O+ -> CH3-CH2+ + H2O}$ [1]

Step 2, water attacks the carbocation: $\ce{CH3-CH2+ + H2O -> CH3-CH2-OH2+}$ [1]

Step 3, loss of a proton gives the alcohol: $\ce{CH3-CH2-OH2+ + H2O -> CH3CH2OH + H3O+}$ [1]
:::

To get the *other* alcohol, use **hydroboration–oxidation**. Diborane adds to the alkene, and the product is oxidised with hydrogen peroxide in alkali. The net result is addition of water the anti-Markovnikov way, in excellent yield: propene gives propan-1-ol.

:::tip
Same alkene, two alcohols: acid and water give the Markovnikov product (propan-2-ol from propene); hydroboration–oxidation gives the anti-Markovnikov one (propan-1-ol).
:::

**From carbonyl compounds.** Reduction adds hydrogen across C=O. Aldehydes give primary alcohols and ketones give secondary alcohols, using hydrogen with a catalyst, $\ce{NaBH4}$ or $\ce{LiAlH4}$. Carboxylic acids need the stronger $\ce{LiAlH4}$ and give primary alcohols.

**From Grignard reagents.** The carbon of R–MgX attacks the carbonyl carbon, and water then releases the alcohol. This builds a bigger carbon skeleton, and the choice of carbonyl compound fixes the class of alcohol: methanal gives a primary alcohol, any other aldehyde a secondary alcohol, and a ketone a tertiary alcohol.

```ng-compare
id: hydration-two-ways
title: Two ways to add water to propene
cols: Acid-catalysed hydration | Hydroboration–oxidation
row: Reagents | $\ce{H2O}$, $\ce{H+}$ | $\ce{B2H6}$, then $\ce{H2O2}$/$\ce{OH-}$
row: Rule | Markovnikov | anti-Markovnikov
row: Product from propene | propan-2-ol | propan-1-ol
row: Goes through | a carbocation | no carbocation
```

**In one breath:** Alcohols come from alkenes (acid hydration, or hydroboration for the anti-Markovnikov product), from reduction of aldehydes, ketones and acids, and from Grignard reagents with carbonyl compounds.

## Making phenol

Phenol cannot be made by simply treating chlorobenzene with dilute alkali; as you saw in Chapter 6, the aryl C–Cl bond is too strong. Four routes work.

- **From chlorobenzene**, by brute force: fuse with NaOH at 623 K and 300 atm, then acidify.
- **From benzenesulphonic acid**, by fusing its sodium salt with NaOH and acidifying.
- **From a diazonium salt**, by warming with water: $\ce{C6H5N2+Cl- + H2O -> C6H5OH + N2 + HCl}$.
- **From cumene**, the industrial method. Cumene (isopropylbenzene) is oxidised by air to cumene hydroperoxide, which dilute acid converts to phenol. The by-product is acetone, itself valuable, which is why this route dominates.

```ng-steps
id: cumene-steps
title: Cumene process for phenol
step: Make **cumene** (isopropylbenzene) from benzene and propene.
step: Oxidise with **air** to cumene hydroperoxide.
step: Treat with **dilute acid**: it splits into **phenol** and **acetone** (a valuable by-product).
```

**In one breath:** Phenol is made from chlorobenzene under drastic conditions, from benzenesulphonic acid, from diazonium salts with warm water, and industrially from cumene, with acetone as a useful by-product.

## Hydrogen bonding decides the physical properties

An O–H group can form hydrogen bonds, and that single fact explains the boiling points and solubilities of all three families.

Alcohols and phenols boil far higher than hydrocarbons, haloalkanes or ethers of similar molar mass, because their molecules are held together by intermolecular hydrogen bonds. Ethanol boils at 351 K; methoxymethane, with the same formula, boils at 248 K. Ethers have no O–H, cannot hydrogen-bond with each other, and boil at about the same temperature as alkanes.

Solubility in water is a different story. Both alcohols and ethers can hydrogen-bond *with water*, the ether through its oxygen. So small alcohols and small ethers dissolve to a similar extent. In both families solubility falls as the hydrocarbon part grows.

**In one breath:** O–H···O hydrogen bonds between molecules give alcohols and phenols high boiling points; ethers lack them and boil like alkanes, yet dissolve in water about as well as alcohols because their oxygen can accept hydrogen bonds.

## How acidic is the O–H hydrogen?

Alcohols and phenols both react with sodium to give hydrogen, so both are acids of a sort. But they differ enormously in strength.

**Alcohols** are weaker acids than water. An alkyl group pushes electron density towards the oxygen, making the O–H bond less polar and the alkoxide ion less stable. More alkyl groups make it worse, so acidity falls from primary to secondary to tertiary.

**Phenol** is about a million times more acidic than ethanol. It dissolves in sodium hydroxide, which alcohols do not. The reason is what happens *after* the proton leaves. In the phenoxide ion the negative charge is not stuck on oxygen; it is spread over the ring by resonance. A delocalised charge is a stabilised charge, so phenol gives up its proton far more readily. An ethoxide ion has no such option.

```ng-figure
id: phenoxide-resonance
title: Resonance in the phenoxide ion
svg:
<svg viewBox="0 0 400 136" role="img" aria-label="Resonance structures of the phenoxide ion" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M48.0,60.0 L67.1,71.0 L67.1,93.0 L48.0,104.0 L28.9,93.0 L28.9,71.0 Z"/><path d="M63.6,75.1 L63.6,88.9"/><path d="M46.1,99.0 L34.3,92.1"/><path d="M34.3,71.9 L46.1,65.0"/><path d="M48.0,60.0 V42.0"/><path d="M148.0,60.0 L167.1,71.0 L167.1,93.0 L148.0,104.0 L128.9,93.0 L128.9,71.0 Z"/><path d="M163.6,75.1 L163.6,88.9"/><path d="M146.1,99.0 L134.3,92.1"/><path d="M145.8,60.0 V42.0 M150.2,60.0 V42.0"/><path d="M248.0,60.0 L267.1,71.0 L267.1,93.0 L248.0,104.0 L228.9,93.0 L228.9,71.0 Z"/><path d="M232.4,88.9 L232.4,75.1"/><path d="M263.6,75.1 L263.6,88.9"/><path d="M245.8,60.0 V42.0 M250.2,60.0 V42.0"/><path d="M348.0,60.0 L367.1,71.0 L367.1,93.0 L348.0,104.0 L328.9,93.0 L328.9,71.0 Z"/><path d="M332.4,88.9 L332.4,75.1"/><path d="M361.7,92.1 L349.9,99.0"/><path d="M345.8,60.0 V42.0 M350.2,60.0 V42.0"/><path d="M80,82 H116" stroke-width="1"/><path d="M111.7,84.5L116,82L111.7,79.5" stroke-width="1"/><path d="M84.3,79.5L80,82L84.3,84.5" stroke-width="1"/><path d="M180,82 H216" stroke-width="1"/><path d="M211.7,84.5L216,82L211.7,79.5" stroke-width="1"/><path d="M184.3,79.5L180,82L184.3,84.5" stroke-width="1"/><path d="M280,82 H316" stroke-width="1"/><path d="M311.7,84.5L316,82L311.7,79.5" stroke-width="1"/><path d="M284.3,79.5L280,82L284.3,84.5" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="48" y="38" text-anchor="middle" font-size="11">O⁻</text><text x="148" y="38" text-anchor="middle" font-size="11">O</text><text x="120.3" y="70.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">−</text><text x="248" y="38" text-anchor="middle" font-size="11">O</text><text x="248.0" y="118.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">−</text><text x="348" y="38" text-anchor="middle" font-size="11">O</text><text x="375.7" y="70.0" text-anchor="middle" font-weight="700" style="fill:#E0B400">−</text><text x="148" y="128" text-anchor="middle" font-size="9">ortho</text><text x="248" y="128" text-anchor="middle" font-size="9">para</text><text x="348" y="128" text-anchor="middle" font-size="9">ortho</text></g>
</svg>
caption: Figure 7.1 The negative charge is spread from oxygen onto the ortho and para carbons, which stabilises the ion and makes phenol acidic.
part: 48, 82 | Charge on oxygen | The ion as first formed: O⁻ on the ring.
part: 134, 70 | Charge at ortho carbon | O forms C=O and the ring π electrons push the charge to an ortho carbon.
part: 248, 112 | Charge at para carbon | The charge moves on to the para position.
part: 98, 82 | Resonance arrow | The real ion is a hybrid of all these structures.
```

Substituents on the ring shift the balance. An electron-withdrawing group such as $\ce{-NO2}$ spreads the charge further and *increases* acidity, most strongly from the ortho and para positions; 2,4,6-trinitrophenol (picric acid) is a strong acid. An electron-releasing group such as $\ce{-CH3}$ concentrates the charge and *decreases* acidity, so the cresols are slightly weaker than phenol.

:::formula Acid strength of phenols and alcohols
Acid strength: nitrophenols > phenol > cresols > water > alcohols (1° > 2° > 3°)

A smaller p$K_a$ means a stronger acid: phenol 10.0, ethanol 15.9.
:::

:::tip
Phenol is acidic enough to react with NaOH but not with sodium hydrogencarbonate. Only carboxylic acids release $\ce{CO2}$ from $\ce{NaHCO3}$; that is the test that separates them from phenols.
:::

:::skeleton Worked example: arranging by acid strength
*Arrange in increasing order of acid strength, with reasons: phenol, ethanol, 4-nitrophenol, 4-methylphenol.*

ethanol < 4-methylphenol < phenol < 4-nitrophenol [1]

Phenols are stronger than ethanol because the phenoxide ion is stabilised by resonance. [½]

$\ce{-NO2}$ withdraws electrons and stabilises the phenoxide further; $\ce{-CH3}$ releases electrons and destabilises it. [½]
:::

```ng-draw
id: draw-phenoxide
title: Draw the resonance structures of the phenoxide ion
svg: ref: notes#phenoxide-resonance
time: 4
```

```ng-fill
id: acid-order-fill
title: Acid strength: fill the gaps
cols: Compound | Stronger or weaker than phenol? | Why
row: 4-nitrophenol | [[stronger]] | $\ce{-NO2}$ withdraws electrons and stabilises the phenoxide ion
row: 4-methylphenol (p-cresol) | [[weaker]] | $\ce{-CH3}$ releases electrons
row: ethanol | [[weaker]] | ethoxide has no resonance; alkyl group releases electrons
row: picric acid | [[much stronger]] | three $\ce{-NO2}$ groups at ortho and para
```

```ng-explain
id: why-phenol-acidic
prompt: In three lines, explain why phenol is acidic but ethanol is almost neutral.
lines: 3
```

**In one breath:** Phenol is far more acidic than alcohols because the phenoxide ion's charge is delocalised into the ring; electron-withdrawing groups raise acidity, electron-releasing ones lower it.

## Reactions of alcohols

An alcohol can react in two ways: by breaking the O–H bond, where it acts as a nucleophile, or by breaking the C–O bond, where the –OH is replaced or lost.

**Esterification (O–H breaks).** Alcohols and phenols react with carboxylic acids, acid chlorides and anhydrides to form esters. With an acid the reaction is reversible and needs a little concentrated sulphuric acid. With an acid chloride a base such as pyridine is added to mop up the HCl. Aspirin is made this way, by acetylating salicylic acid with acetic anhydride.

**With hydrogen halides (C–O breaks).** This gives haloalkanes, and the speed depends on the class of alcohol. The **Lucas test** uses it: with concentrated HCl and $\ce{ZnCl2}$, a tertiary alcohol turns cloudy at once, a secondary alcohol in about five minutes, and a primary alcohol not at all at room temperature. The cloudiness is the insoluble chloroalkane.

**Dehydration (C–O breaks).** Heated with concentrated sulphuric acid at 443 K, ethanol loses water to give ethene. The mechanism is the hydration mechanism run backwards.

:::skeleton Mechanism: dehydration of ethanol to ethene
Step 1, protonation of the alcohol (fast): $\ce{CH3CH2OH + H+ -> CH3CH2OH2+}$ [1]

Step 2, loss of water to give a carbocation (slow, rate-determining): $\ce{CH3CH2OH2+ -> CH3CH2+ + H2O}$ [1]

Step 3, loss of a proton to give the alkene: $\ce{CH3CH2+ -> CH2=CH2 + H+}$ [1]
:::

Since the slow step forms a carbocation, tertiary alcohols dehydrate most easily, then secondary, then primary.

**Oxidation.** Oxidation removes hydrogen from the C–OH carbon. A primary alcohol gives an aldehyde, which is easily oxidised further to a carboxylic acid. To stop at the aldehyde, use a mild reagent, pyridinium chlorochromate (PCC). A secondary alcohol gives a ketone. A tertiary alcohol has no hydrogen on that carbon and resists oxidation. Passing alcohol vapour over copper at 573 K does the same job by dehydrogenation: primary gives aldehyde, secondary gives ketone, but tertiary gives an alkene by losing water.

```ng-fill
id: lucas-fill
title: Lucas test (conc. HCl + anhydrous ZnCl₂)
cols: Alcohol | Result at room temperature
row: tertiary, e.g. 2-methylpropan-2-ol | [[turbidity at once]]
row: secondary, e.g. propan-2-ol | [[turbidity in about 5 minutes]]
row: primary, e.g. propan-1-ol | [[no turbidity]]
```

```ng-mnemonic
id: lucas-twinkle
title: Lucas test timings
trick: **T**ertiary in a **T**winkle, **S**econdary in **S**ome minutes, **P**rimary **P**lays dead
meaning: 3° turns cloudy at once, 2° in about five minutes, 1° not at all at room temperature.
prompt: Which alcohol gives turbidity at once with Lucas reagent?
```

```ng-fill
id: oxidation-products
title: What does oxidation give?
cols: Alcohol | With PCC or Cu at 573 K | With strong oxidant ($\ce{KMnO4}$)
row: primary | [[aldehyde]] | [[carboxylic acid]]
row: secondary | [[ketone]] | ketone
row: tertiary | [[no reaction (Cu gives alkene)]] | resists oxidation
```

**In one breath:** Alcohols form esters through the O–H bond; through the C–O bond they give halides (fastest for 3°, the Lucas test) and alkenes on dehydration. Oxidation takes 1° to aldehyde then acid, 2° to ketone, and leaves 3° alone.

## Reactions of the phenol ring

The –OH group pushes electron density into the ring, especially to the ortho and para positions. So phenol undergoes electrophilic substitution much more readily than benzene, and the incoming group goes ortho and para.

**Nitration.** With dilute nitric acid at room temperature phenol gives a mixture of ortho- and para-nitrophenol. The two can be separated by steam distillation. In the ortho isomer the –OH and $\ce{-NO2}$ are close enough to hydrogen-bond *within* one molecule, so molecules do not stick together and it is volatile in steam. The para isomer hydrogen-bonds *between* molecules and stays behind. With concentrated nitric acid all three positions react, giving picric acid.

**Bromination.** In a non-polar solvent such as $\ce{CS2}$ at low temperature, phenol gives monobromophenols. With bromine water the ring is so activated that all three positions react at once, giving a white precipitate of 2,4,6-tribromophenol. No Lewis acid is needed.

Two named reactions put a carbon group on the ring, ortho to the –OH.

:::formula Kolbe and Reimer–Tiemann reactions
**Kolbe's reaction:** sodium phenoxide + $\ce{CO2}$ (400 K, 4–7 atm), then acid → 2-hydroxybenzoic acid (salicylic acid)

**Reimer–Tiemann reaction:** phenol + $\ce{CHCl3}$ + aqueous NaOH (340 K), then acid → 2-hydroxybenzaldehyde (salicylaldehyde)
:::

Kolbe's reaction works because the phenoxide ion is even more reactive than phenol, enough to be attacked by the weak electrophile $\ce{CO2}$.

Two more reactions to know: heating phenol with zinc dust removes the oxygen and gives benzene, and oxidation with chromic acid gives benzoquinone.

:::tip
Kolbe gives the *acid* (salicylic acid); Reimer–Tiemann gives the *aldehyde* (salicylaldehyde). They are swapped in answers more often than any other pair in this chapter.
:::

```ng-compare
id: kolbe-vs-rt
title: Kolbe vs Reimer–Tiemann
cols: Kolbe's reaction | Reimer–Tiemann reaction
row: Starting material | sodium phenoxide | phenol
row: Reagent | $\ce{CO2}$, 400 K, 4–7 atm, then $\ce{H+}$ | $\ce{CHCl3}$ + aqueous NaOH, 340 K, then $\ce{H+}$
row: Group added at ortho | –COOH | –CHO
row: Product | salicylic acid | salicylaldehyde
```

```ng-mnemonic
id: kolbe-k
title: Kolbe or Reimer–Tiemann?
trick: **Kolbe** puts in the **COOH** (both have a hard K/C sound); **R**eimer–**T**iemann gets an alde**H**yde from c**H**loroform
meaning: Kolbe: $\ce{CO2}$ in, salicylic **acid** out. Reimer–Tiemann: chloroform in, salicyl**aldehyde** out.
prompt: Which reaction makes salicylaldehyde?
```

```ng-mnemonic
id: ortho-own-bond
title: Why o-nitrophenol is steam-volatile
trick: **O**rtho keeps its hydrogen bond at h**O**me
meaning: In o-nitrophenol the H-bond is inside one molecule (intramolecular), so molecules do not stick together and it distils with steam; the para isomer H-bonds to its neighbours.
prompt: Why can o-nitrophenol be steam-distilled but not p-nitrophenol?
```

**In one breath:** –OH activates the ring at ortho and para: dilute nitric acid gives separable nitrophenols, bromine water gives the tribromo precipitate, Kolbe adds –COOH and Reimer–Tiemann adds –CHO at the ortho position.

## Two alcohols made on a large scale

**Methanol**, once called wood spirit, is made by hydrogenating carbon monoxide at 200–300 atm and 573–673 K over a $\ce{ZnO-Cr2O3}$ catalyst: $\ce{CO + 2H2 -> CH3OH}$. It is a solvent for paints and varnishes and the starting material for methanal. It is also highly poisonous: a small amount causes blindness and a larger amount death.

**Ethanol** is made by fermenting sugars. In molasses or fruit juice, the enzyme invertase splits sucrose into glucose and fructose, and zymase then converts these to ethanol and carbon dioxide. Both enzymes come from yeast, and the process runs without air. Industrial ethanol is made unfit to drink by adding copper sulphate, for colour, and pyridine, for a foul smell; it is then called **denatured alcohol**.

**In one breath:** Methanol comes from CO and hydrogen over a catalyst and is very toxic; ethanol comes from fermentation by yeast enzymes, and is denatured with copper sulphate and pyridine for industrial use.

## Making ethers

**By dehydrating alcohols.** The same reagents that gave ethene at 443 K give an ether at the lower temperature of 413 K, with the alcohol in excess. Here one protonated alcohol molecule is attacked by a second alcohol molecule in an S$_\text{N}$2 step, and water leaves. Temperature decides between the two products. The method suits only primary alcohols; secondary and tertiary ones give alkenes.

**Williamson synthesis.** This is the general laboratory method and the one that makes mixed ethers. A sodium alkoxide attacks an alkyl halide in an S$_\text{N}$2 reaction.

:::formula Williamson synthesis
**Williamson synthesis:** $\ce{R-X + R{'}-ONa -> R-O-R{'} + NaX}$
:::

Because it is S$_\text{N}$2, the alkyl *halide* must be unhindered, ideally primary. The alkoxide can be as bulky as you like. Get this the wrong way round and you make an alkene, since alkoxides are strong bases and a tertiary halide will eliminate.

:::skeleton Worked example: choosing the reactants
*Which pair should be used to prepare tert-butyl methyl ether: (a) $\ce{(CH3)3C-ONa + CH3Br}$ or (b) $\ce{(CH3)3C-Br + CH3ONa}$?*

Pair **(a)**: bromomethane is unhindered, so the bulky alkoxide attacks it by S$_\text{N}$2 and gives the ether, $\ce{(CH3)3C-O-CH3}$. [1]

Pair (b) fails: with a tertiary halide the strong base $\ce{CH3O-}$ causes elimination, giving 2-methylpropene instead. [1]
:::

```ng-steps
id: williamson-steps
title: Choosing reactants for Williamson synthesis
step: Split the ether R–O–R′ into two pieces: an **alkoxide** and an **alkyl halide**.
step: Make the **alkyl halide the less crowded piece** (methyl or primary): the reaction is S$_\text{N}$2.
step: Put any bulky (tertiary) group on the **alkoxide** side.
step: Check: a tertiary halide with a strong base would give an alkene by elimination instead.
```

**In one breath:** Alcohols give ethers at 413 K (alkenes at 443 K); Williamson synthesis joins an alkoxide to an alkyl halide by S$_\text{N}$2, so the halide must be primary.

## Reactions of ethers

Ethers are the least reactive of the three families, which is why they are used as solvents. Their one important reaction is **cleavage by hydrogen halides**, with reactivity HI > HBr > HCl.

The ether oxygen is protonated first, and a halide ion then attacks one of the carbons. Which one? For ethers with primary or secondary groups the attack is S$_\text{N}$2, so the halide goes to the *smaller*, less crowded group. If one group is tertiary, the bond breaks by S$_\text{N}$1 through the stable tertiary carbocation, and the halide ends up on the *tertiary* carbon: $\ce{(CH3)3C-O-CH3 + HI -> (CH3)3C-I + CH3OH}$.

Aryl alkyl ethers always split one way. In anisole the bond between oxygen and the ring has partial double-bond character and will not break, so the products are phenol and iodomethane: $\ce{C6H5-O-CH3 + HI -> C6H5OH + CH3I}$.

:::tip
Anisole with HI never gives iodobenzene. The O–aryl bond stays intact; the methyl group is the one that leaves.
:::

On the ring, the alkoxy group behaves like a milder –OH: it activates and directs ortho and para. Anisole undergoes bromination (mainly para, even without a catalyst), nitration and Friedel–Crafts alkylation and acylation, each giving ortho and para products with para the major one.

```ng-fill
id: ether-cleavage
title: Ether + HI: which pieces?
cols: Ether | Products with HI | Why
row: $\ce{CH3-O-C2H5}$ | [[$\ce{CH3I}$ + $\ce{C2H5OH}$]] | I⁻ attacks the smaller group (S$_\text{N}$2)
row: $\ce{(CH3)3C-O-CH3}$ | [[$\ce{(CH3)3C-I}$ + $\ce{CH3OH}$]] | stable tertiary carbocation (S$_\text{N}$1)
row: anisole | [[$\ce{C6H5OH}$ + $\ce{CH3I}$]] | the O–aryl bond never breaks
```

**In one breath:** HX cleaves ethers: the halide takes the smaller group by S$_\text{N}$2, or the tertiary group by S$_\text{N}$1; anisole always gives phenol plus the alkyl halide, and its ring substitutes at ortho and para.
