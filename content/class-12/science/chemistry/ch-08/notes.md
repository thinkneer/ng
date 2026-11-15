# Ch 8 · Aldehydes, Ketones and Carboxylic Acids

Vanilla, cinnamon, the sharpness of vinegar, the sting of an ant: these smells and tastes come from compounds built around the carbonyl group, C=O. This chapter carries the highest marks in organic chemistry, and it looks long, but nearly everything in it follows from one picture: the carbon of C=O is short of electrons, so electron-rich species attack it. Aldehydes and ketones let the attacker *add*. Carboxylic acids have an –OH on the same carbon, which makes them acids and changes what the carbon will do.

## The carbonyl group

In an **aldehyde** the carbonyl carbon carries at least one hydrogen (R–CHO). In a **ketone** it carries two carbon groups (R–CO–R′). In a **carboxylic acid** it carries an –OH (R–COOH).

The carbonyl carbon is sp$^2$ hybridised, so the three atoms attached to it lie in a plane with angles of about 120°, and the C=O bond is one σ bond plus one π bond. Oxygen is much more electronegative than carbon and pulls the shared electrons, especially the loose π pair, towards itself. The result is a strongly polar bond: carbon is partially positive and an **electrophile**; oxygen is partially negative.

That polarity raises the boiling points of aldehydes and ketones above those of hydrocarbons and ethers of similar mass. But they have no O–H, so they cannot hydrogen-bond with each other and they boil below the corresponding alcohols. They can accept hydrogen bonds from water, so the small ones, methanal, ethanal and propanone, mix with water completely.

**In one breath:** The carbonyl carbon is flat, sp$^2$ and electron-poor; the polar C=O gives boiling points between ethers and alcohols and lets small aldehydes and ketones dissolve in water.

## Making aldehydes and ketones

Several methods are simply reactions you already know, read from the product end.

**Oxidation of alcohols.** A primary alcohol gives an aldehyde if a mild oxidant such as PCC is used; a secondary alcohol gives a ketone. Passing the vapour over hot copper does the same by dehydrogenation.

**From alkenes and alkynes.** Ozonolysis splits a double bond and gives aldehydes, ketones or both. Adding water to ethyne, with $\ce{HgSO4}$ and dilute sulphuric acid, gives ethanal; any other alkyne gives a ketone.

The remaining methods are named reactions, and the common thread for aldehydes is *stopping halfway*, because an aldehyde is easily taken further.

:::formula Named routes to aldehydes
**Rosenmund reduction:** $\ce{RCOCl + H2 ->[Pd/BaSO4] RCHO + HCl}$

**Stephen reaction:** $\begin{gathered}\ce{RCN + SnCl2 + HCl}\\ \ce{-> RCH=NH}\\ \ce{->[H3O+] RCHO}\end{gathered}$

**Etard reaction:** toluene + $\ce{CrO2Cl2}$ → chromium complex, then $\ce{H3O+}$ → benzaldehyde

**Gatterman–Koch reaction:** $\begin{gathered}\ce{C6H6 + CO + HCl}\\ \ce{->[anhyd. AlCl3/CuCl] C6H5CHO}\end{gathered}$
:::

In the Rosenmund reduction the palladium catalyst is deliberately weakened ("poisoned") by barium sulphate so that it reduces the acid chloride to the aldehyde and no further. Nitriles and esters can also be reduced to aldehydes with DIBAL-H. In the Etard reaction, chromyl chloride oxidises the methyl group of toluene only as far as the aldehyde.

Ketones have their own routes. An acid chloride reacts with a dialkylcadmium: $\begin{gathered}\ce{2RCOCl + R{'}2Cd}\\ \ce{-> 2RCOR{'} + CdCl2}\end{gathered}$. A nitrile treated with a Grignard reagent and then hydrolysed gives a ketone. And **Friedel–Crafts acylation** puts an acyl group on a benzene ring: $\begin{gathered}\ce{C6H6 + CH3COCl}\\ \ce{->[anhyd. AlCl3] C6H5COCH3}\\ \text{+ }\ce{HCl}\end{gathered}$, giving acetophenone.

```ng-fill
id: aldehyde-routes
title: Named routes to aldehydes
cols: Reaction | Starting compound | Reagent
row: Rosenmund | acid chloride | [[$\ce{H2}$, Pd/$\ce{BaSO4}$]]
row: Stephen | [[nitrile]] | $\ce{SnCl2}$ + HCl, then $\ce{H3O+}$
row: Etard | [[toluene]] | $\ce{CrO2Cl2}$, then $\ce{H3O+}$
row: Gatterman–Koch | benzene | [[CO + HCl, anhyd. $\ce{AlCl3}$/CuCl]]
```

```ng-mnemonic
id: rosenmund-stephen
title: Rosenmund or Stephen?
trick: **Ro**senmund **R**educes acid chlo**R**ides; **St**ephen **St**arts from a nitrile with **S**n
meaning: Rosenmund: $\ce{RCOCl}$ + $\ce{H2}$ over poisoned Pd. Stephen: $\ce{RCN}$ + $\ce{SnCl2}$/HCl, then water.
prompt: Which reaction turns a nitrile into an aldehyde?
```

**In one breath:** Aldehydes come from mild oxidation of 1° alcohols and from reductions stopped halfway (Rosenmund, Stephen); aromatic aldehydes from Etard and Gatterman–Koch; ketones from 2° alcohols, dialkylcadmium, nitriles with Grignard reagents and Friedel–Crafts acylation.

## Nucleophilic addition: the central reaction

Because the carbonyl carbon is electron-poor, a nucleophile attacks it. The mechanism is the same every time.

:::skeleton Mechanism: nucleophilic addition (HCN as the example)
Step 1, the base generates the nucleophile: $\ce{HCN + OH- <=> CN- + H2O}$ [½]

Step 2 (slow), $\ce{CN-}$ attacks the carbonyl carbon from above or below the plane; the π electrons move onto oxygen and the carbon becomes sp$^3$, giving a tetrahedral alkoxide intermediate [1]

Step 3 (fast), the alkoxide picks up a proton to give the cyanohydrin, with –OH and –CN on the same carbon [½]
:::

Pure HCN reacts very slowly because it is a weak acid and supplies few cyanide ions. A trace of base makes the far stronger nucleophile $\ce{CN-}$, and the reaction speeds up.

**Aldehydes are more reactive than ketones**, for two reasons. *Steric:* a ketone has two alkyl groups crowding the carbon, an aldehyde only one. *Electronic:* alkyl groups release electrons and reduce the positive charge on the carbon, and a ketone has two of them. So the order is methanal > ethanal > propanone. Benzaldehyde is less reactive than an aliphatic aldehyde, because resonance with the ring feeds electron density to the carbonyl carbon.

Other nucleophiles follow the same pattern:

- **Sodium hydrogensulphite** adds to aldehydes and methyl ketones to give crystalline solids. The aldehyde can be recovered with dilute acid or alkali, so this is a way to separate and purify carbonyl compounds.
- **Alcohols**, with dry HCl, add to aldehydes to give a hemiacetal and then an acetal. Ketones do the same with ethylene glycol to form cyclic ketals.
- **Grignard reagents** add to give alcohols after hydrolysis, as you saw in Chapter 7.

**Ammonia derivatives** add and then lose water, so the oxygen is replaced by a C=N bond. If the reagent is written $\ce{H2N-Z}$, the product is $\ce{{>}C=N-Z}$.

:::formula Products with ammonia derivatives
Hydroxylamine ($\ce{NH2OH}$) → oxime · hydrazine ($\ce{NH2NH2}$) → hydrazone · phenylhydrazine → phenylhydrazone · semicarbazide → semicarbazone

2,4-Dinitrophenylhydrazine (2,4-DNP) → yellow or orange precipitate: the general test for a carbonyl group
:::

These reactions are run in weakly acidic solution. A little acid protonates the carbonyl oxygen and makes the carbon more electrophilic, but too much would protonate the nitrogen nucleophile and switch it off.

```ng-figure
id: nucleophilic-addition
title: Nucleophilic addition of HCN
svg:
<svg viewBox="0 0 390 146" role="img" aria-label="Nucleophilic addition of HCN to an aldehyde" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M62.3,66.8 L62.3,41.2 M57.7,66.8 L57.7,41.2"/><path d="M53.8,80.2 L38.2,95.8"/><path d="M66.2,80.2 L81.8,95.8"/><path d="M24,58 Q36,52 52,70" stroke-width="1"/><path d="M47.3,68.4L52,70L51.0,65.1" stroke-width="1"/><path d="M66,54 Q80,48 68,36" stroke-width="1"/><path d="M72.8,37.3L68,36L69.3,40.8" stroke-width="1"/><path d="M108,76 H128" stroke-width="1"/><path d="M123.7,78.5L128,76L123.7,73.5" stroke-width="1"/><path d="M196.0,66.8 L196.0,43.2"/><path d="M189.8,82.2 L174.2,97.8"/><path d="M202.2,82.2 L217.8,97.8"/><path d="M187.2,76.0 L164.8,76.0"/><path d="M248,76 H268" stroke-width="1"/><path d="M263.7,78.5L268,76L263.7,73.5" stroke-width="1"/><path d="M336.0,66.8 L336.0,43.2"/><path d="M329.8,82.2 L314.2,97.8"/><path d="M342.2,82.2 L357.8,97.8"/><path d="M327.2,76.0 L304.8,76.0"/>
<g fill="currentColor" stroke="none"><text x="60" y="30" text-anchor="middle">O</text><text x="60" y="78" text-anchor="middle">C</text><text x="26" y="112" text-anchor="middle" font-size="10">R</text><text x="94" y="112" text-anchor="middle" font-size="10">H</text><text x="16" y="66" text-anchor="middle" font-size="10">CN⁻</text><text x="118" y="68" text-anchor="middle" font-size="8">slow</text><text x="196" y="30" text-anchor="middle">O⁻</text><text x="196" y="80" text-anchor="middle">C</text><text x="162" y="114" text-anchor="middle" font-size="10">R</text><text x="230" y="114" text-anchor="middle" font-size="10">H</text><text x="144" y="80" text-anchor="middle" font-size="10">NC</text><text x="196" y="138" text-anchor="middle" font-size="9">tetrahedral (sp³)</text><text x="258" y="68" text-anchor="middle" font-size="8">H⁺</text><text x="336" y="30" text-anchor="middle">OH</text><text x="336" y="80" text-anchor="middle">C</text><text x="302" y="114" text-anchor="middle" font-size="10">R</text><text x="370" y="114" text-anchor="middle" font-size="10">H</text><text x="284" y="80" text-anchor="middle" font-size="10">NC</text><text x="336" y="138" text-anchor="middle" font-size="9">cyanohydrin</text></g>
</svg>
caption: The nucleophile attacks the flat δ+ carbon; the π electrons go to oxygen; a proton then gives the cyanohydrin.
part: 16, 92 | Nucleophile, CN⁻ | Made from HCN by a trace of base; attacks the carbonyl carbon.
part: 82, 46 | π electrons move to O | Oxygen takes the pair and becomes O⁻.
part: 196, 100 | Tetrahedral intermediate | Carbon changes from sp² (flat) to sp³.
part: 336, 52 | Cyanohydrin | –OH and –CN on the same carbon.
```

```ng-steps
id: addition-steps
title: Nucleophilic addition, step by step
svg:
<svg viewBox="0 0 390 146" role="img" aria-label="Nucleophilic addition step by step" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<g data-step="1"><path d="M62.3,66.8 L62.3,41.2 M57.7,66.8 L57.7,41.2"/><path d="M53.8,80.2 L38.2,95.8"/><path d="M66.2,80.2 L81.8,95.8"/><path d="M24,58 Q36,52 52,70" stroke-width="1"/><path d="M47.3,68.4L52,70L51.0,65.1" stroke-width="1"/><path d="M66,54 Q80,48 68,36" stroke-width="1"/><path d="M72.8,37.3L68,36L69.3,40.8" stroke-width="1"/><g fill="currentColor" stroke="none"><text x="60" y="30" text-anchor="middle">O</text><text x="60" y="78" text-anchor="middle">C</text><text x="26" y="112" text-anchor="middle" font-size="10">R</text><text x="94" y="112" text-anchor="middle" font-size="10">H</text><text x="16" y="66" text-anchor="middle" font-size="10">CN⁻</text></g></g><g data-step="2"><path d="M108,76 H128" stroke-width="1"/><path d="M123.7,78.5L128,76L123.7,73.5" stroke-width="1"/><path d="M196.0,66.8 L196.0,43.2"/><path d="M189.8,82.2 L174.2,97.8"/><path d="M202.2,82.2 L217.8,97.8"/><path d="M187.2,76.0 L164.8,76.0"/><g fill="currentColor" stroke="none"><text x="118" y="68" text-anchor="middle" font-size="8">slow</text><text x="196" y="30" text-anchor="middle">O⁻</text><text x="196" y="80" text-anchor="middle">C</text><text x="162" y="114" text-anchor="middle" font-size="10">R</text><text x="230" y="114" text-anchor="middle" font-size="10">H</text><text x="144" y="80" text-anchor="middle" font-size="10">NC</text><text x="196" y="138" text-anchor="middle" font-size="9">tetrahedral (sp³)</text></g></g><g data-step="3"><path d="M248,76 H268" stroke-width="1"/><path d="M263.7,78.5L268,76L263.7,73.5" stroke-width="1"/><path d="M336.0,66.8 L336.0,43.2"/><path d="M329.8,82.2 L314.2,97.8"/><path d="M342.2,82.2 L357.8,97.8"/><path d="M327.2,76.0 L304.8,76.0"/><g fill="currentColor" stroke="none"><text x="258" y="68" text-anchor="middle" font-size="8">H⁺</text><text x="336" y="30" text-anchor="middle">OH</text><text x="336" y="80" text-anchor="middle">C</text><text x="302" y="114" text-anchor="middle" font-size="10">R</text><text x="370" y="114" text-anchor="middle" font-size="10">H</text><text x="284" y="80" text-anchor="middle" font-size="10">NC</text><text x="336" y="138" text-anchor="middle" font-size="9">cyanohydrin</text></g></g>
</svg>
step: A trace of base makes the nucleophile: $\ce{HCN + OH- <=> CN- + H2O}$. $\ce{CN-}$ attacks the electron-poor carbonyl carbon.
step: **Slow step:** the π electrons move onto oxygen, giving a tetrahedral alkoxide ion.
step: **Fast step:** the alkoxide picks up a proton: the product is a cyanohydrin.
```

```ng-draw
id: draw-addition
title: Draw the mechanism of addition of HCN to ethanal
svg: ref: notes#nucleophilic-addition
time: 4
```

```ng-fill
id: nh2z-products
title: H₂N–Z reagents and their products
cols: Reagent | Product with C=O
row: hydroxylamine, $\ce{NH2OH}$ | [[oxime]]
row: hydrazine, $\ce{NH2NH2}$ | [[hydrazone]]
row: phenylhydrazine | [[phenylhydrazone]]
row: semicarbazide | [[semicarbazone]]
row: 2,4-DNP | [[2,4-dinitrophenylhydrazone (orange-red precipitate)]]
```

**In one breath:** A nucleophile attacks the electron-poor carbon to give a tetrahedral intermediate, which is then protonated. Aldehydes beat ketones for steric and electronic reasons, and $\ce{H2N-Z}$ reagents add then lose water to give C=N products.

## Reduction, oxidation and the tests that tell them apart

**Reduction to alcohols** uses $\ce{NaBH4}$, $\ce{LiAlH4}$ or hydrogen with a catalyst. **Reduction all the way to a hydrocarbon**, turning C=O into $\ce{CH2}$, has two named methods.

:::formula Reduction of C=O to CH2
**Clemmensen reduction:** zinc amalgam and concentrated HCl

**Wolff–Kishner reduction:** hydrazine, then KOH in ethylene glycol with heating
:::

**Oxidation** is where aldehydes and ketones part company. An aldehyde has a hydrogen on the carbonyl carbon and is oxidised very easily to a carboxylic acid, even by mild reagents. A ketone has none; it resists, and only drastic conditions break it up. Two mild oxidants turn this difference into tests.

**Tollens' test.** Ammoniacal silver nitrate is reduced by any aldehyde to metallic silver, which coats the test tube as a mirror: $\begin{gathered}\ce{RCHO + 2[Ag(NH3)2]+}\\ \text{+ }\ce{3OH-}\\ \ce{-> RCOO- + 2Ag + 2H2O}\\ \text{+ }\ce{4NH3}\end{gathered}$. Ketones give nothing.

**Fehling's test.** An alkaline copper(II) tartrate solution is reduced by *aliphatic* aldehydes to a red-brown precipitate of copper(I) oxide: $\begin{gathered}\ce{RCHO + 2Cu^2+ + 5OH-}\\ \ce{-> RCOO- + Cu2O + 3H2O}\end{gathered}$. Aromatic aldehydes such as benzaldehyde do not respond.

**Iodoform test.** This one picks out a structure, not a family. Any compound with a $\ce{CH3CO-}$ group, or a $\ce{CH3CH(OH)-}$ group that can be oxidised to one, reacts with iodine and sodium hydroxide to give a yellow precipitate of iodoform, $\ce{CHI3}$. Ethanal, propanone, acetophenone, ethanol and propan-2-ol give it; methanal, propanal, pentan-3-one and benzaldehyde do not.

:::tip
Benzaldehyde gives Tollens' test but **not** Fehling's. That pair of results separates an aromatic aldehyde from an aliphatic one.
:::

:::skeleton Worked example: identifying a compound from tests
*A compound $\ce{C5H10O}$ gives a precipitate with 2,4-DNP and a yellow precipitate with iodine and NaOH, but does not reduce Tollens' reagent. Identify it.*

2,4-DNP positive: it contains a carbonyl group. Tollens' negative: it is a ketone, not an aldehyde. [1]

Iodoform positive: it has a $\ce{CH3CO-}$ group. [1]

A five-carbon methyl ketone with a straight chain: **pentan-2-one**, $\ce{CH3COCH2CH2CH3}$ (3-methylbutan-2-one also fits these tests). [1]
:::

```ng-compare
id: clemmensen-vs-wk
title: Clemmensen vs Wolff–Kishner
cols: Clemmensen | Wolff–Kishner
row: Reagent | Zn–Hg + conc. HCl | $\ce{NH2NH2}$, then KOH in ethylene glycol, heat
row: Medium | acid | base
row: Change | C=O → $\ce{CH2}$ | C=O → $\ce{CH2}$
row: Use when the molecule | is stable to acid | is stable to base
```

```ng-fill
id: carbonyl-tests
title: Tests that tell them apart
cols: Test | Given by | Observation
row: Tollens' reagent | [[all aldehydes]] | silver mirror
row: Fehling's solution | [[aliphatic aldehydes only]] | red-brown $\ce{Cu2O}$
row: 2,4-DNP | [[aldehydes and ketones]] | orange-red precipitate
row: Iodoform ($\ce{I2}$ + NaOH) | [[$\ce{CH3CO-}$ or $\ce{CH3CH(OH)-}$ compounds]] | yellow $\ce{CHI3}$
row: $\ce{NaHCO3}$ | [[carboxylic acids]] | brisk effervescence of $\ce{CO2}$
```

```ng-steps
id: identify-unknown
title: Identifying an unknown carbonyl compound
step: **2,4-DNP** positive? Then it has a C=O group.
step: **Tollens'** positive? Aldehyde. Negative? Ketone.
step: **Fehling's** positive too? Aliphatic aldehyde; negative with Tollens' positive means aromatic.
step: **Iodoform** positive? It has a $\ce{CH3CO-}$ group.
step: Match the molecular formula and write the structure and name.
```

```ng-mnemonic
id: iodoform-methyl
title: Who gives the iodoform test?
trick: **Methyl next door to the carbonyl says hello in yellow**
meaning: $\ce{CH3CO-}$ compounds (and $\ce{CH3CH(OH)-}$, which oxidise to them) give yellow iodoform. Ethanal and ethanol are the only aldehyde and primary alcohol that do.
prompt: Which group must a compound have to give the iodoform test?
```

**In one breath:** Clemmensen and Wolff–Kishner turn C=O into $\ce{CH2}$. Aldehydes are easily oxidised and give Tollens' (all) and Fehling's (aliphatic only); ketones do not; iodoform detects the $\ce{CH3CO-}$ group.

## The α-hydrogen: aldol and Cannizzaro

The carbon next to the carbonyl group is the α-carbon, and its hydrogens are unusually acidic. The carbonyl group pulls electrons away, and when a base removes an α-hydrogen the negative charge left behind is shared with the oxygen by resonance. This **enolate ion** is a carbon nucleophile, and it can attack another carbonyl molecule.

That is the **aldol reaction**. In dilute alkali, two molecules of an aldehyde or ketone *with* α-hydrogen join: the α-carbon of one bonds to the carbonyl carbon of the other. The product has both an –OH and a carbonyl group, a β-hydroxy aldehyde ("ald-ol") or ketone. On heating it loses water to give an α,β-unsaturated compound; the whole sequence is aldol condensation.

:::formula Aldol condensation
**Aldol condensation:** $\begin{gathered}\ce{2CH3CHO}\\ \ce{->[dil. NaOH] CH3CH(OH)CH2CHO}\\ \ce{->[heat] CH3CH=CHCHO}\\ \text{+ }\ce{H2O}\end{gathered}$

3-hydroxybutanal, then but-2-enal
:::

If two different carbonyl compounds are used and both have α-hydrogens, four products form (**cross aldol**), which is rarely useful. If only one of them has α-hydrogens, a single main product results: benzaldehyde and acetophenone give benzalacetophenone.

What if there is *no* α-hydrogen? Then aldol is impossible, and with concentrated alkali something else happens. One molecule of the aldehyde is oxidised to the acid salt while another is reduced to the alcohol. This self oxidation–reduction (disproportionation) is the **Cannizzaro reaction**.

:::formula Cannizzaro reaction
**Cannizzaro reaction:** $\begin{gathered}\ce{2HCHO + KOH(conc.)}\\ \ce{-> CH3OH + HCOOK}\end{gathered}$

$\begin{gathered}\ce{2C6H5CHO + NaOH(conc.)}\\ \ce{-> C6H5CH2OH + C6H5COONa}\end{gathered}$
:::

:::tip
α-Hydrogen present, dilute alkali: aldol. No α-hydrogen, concentrated alkali: Cannizzaro. Check for the α-hydrogen before you write anything.
:::

On a benzene ring, the –CHO and –CO– groups withdraw electrons, so aromatic aldehydes and ketones undergo electrophilic substitution slowly and at the **meta** position: nitration of benzaldehyde gives 3-nitrobenzaldehyde.

A few uses: a 40% solution of methanal, formalin, preserves biological specimens, and methanal is used to make bakelite; propanone and butanone are common solvents; benzaldehyde is used in perfumes and dyes.

```ng-compare
id: aldol-vs-cannizzaro
title: Aldol vs Cannizzaro
cols: Aldol | Cannizzaro
row: Needs | α-hydrogen | no α-hydrogen
row: Alkali | dilute | concentrated
row: Product | β-hydroxy aldehyde or ketone, then α,β-unsaturated on heating | alcohol + salt of the acid
row: Examples | ethanal, propanone | methanal, benzaldehyde
```

```ng-steps
id: aldol-steps
title: Aldol reaction, step by step
step: Dilute $\ce{OH-}$ removes an **α-hydrogen**, giving a resonance-stabilised enolate (carbanion).
step: The enolate carbon attacks the **carbonyl carbon** of a second molecule.
step: The alkoxide formed takes a proton: **3-hydroxybutanal** (aldol) from ethanal.
step: On **heating** it loses water: **but-2-enal**, an α,β-unsaturated aldehyde.
```

```ng-mnemonic
id: no-alpha-cannizzaro
title: Aldol or Cannizzaro?
trick: **No α-H? No Aldol: Cannizzaro Comes**
meaning: With α-hydrogen and dilute alkali: aldol. Without α-hydrogen and with concentrated alkali: Cannizzaro (alcohol + acid salt).
prompt: Benzaldehyde with concentrated NaOH: aldol or Cannizzaro?
```

**In one breath:** α-Hydrogens are acidic because the enolate is resonance-stabilised. With them, dilute alkali gives aldol addition then condensation; without them, concentrated alkali gives Cannizzaro's alcohol plus acid salt.

## Making carboxylic acids

Again, most routes are familiar reactions seen from the other end.

- **Oxidation.** Primary alcohols and aldehydes are oxidised to acids by acidified or alkaline potassium permanganate or by dichromate. An alkylbenzene is oxidised at its side chain: whatever its length, the whole chain becomes one –COOH, so toluene and propylbenzene both give benzoic acid. A tertiary alkyl group, with no hydrogen on the carbon next to the ring, is not oxidised.
- **Hydrolysis.** Nitriles and amides give acids on heating with acid or alkali. Esters, acid chlorides and anhydrides are hydrolysed too; hydrolysis of an ester with alkali gives the salt and is called saponification.
- **From Grignard reagents.** R–MgX attacks carbon dioxide (dry ice), and acid then gives R–COOH, an acid with one carbon more than the starting halide.

**In one breath:** Acids are made by oxidising 1° alcohols, aldehydes or the side chain of alkylbenzenes, by hydrolysing nitriles, amides and esters, and by adding a Grignard reagent to $\ce{CO2}$ (one extra carbon).

## Why carboxylic acids are acidic

Carboxylic acids have even higher boiling points than alcohols of similar mass. Each molecule can form two hydrogen bonds with a partner, and they pair up into dimers that survive even in the vapour.

Their defining property is acidity. They turn litmus red, react with metals and alkalis, and, unlike phenols, release carbon dioxide from sodium hydrogencarbonate. Why are they so much stronger than alcohols and phenols? Once more, look at the ion left behind.

In the **carboxylate ion** the negative charge is shared between two oxygen atoms through two resonance structures that are exactly equivalent. Both oxygens are electronegative and happy to carry the charge. In the phenoxide ion the resonance structures are not equivalent, and most of them put the charge on carbon, which is less able to hold it. So the carboxylate ion is the better stabilised, and the acid the stronger.

```ng-figure
id: carboxylate-resonance
title: Resonance in the carboxylate ion
svg:
<svg viewBox="0 0 400 136" role="img" aria-label="Resonance in the carboxylate ion" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M25.4,70.0 L46.6,70.0"/><path d="M63.2,65.0 L80.0,48.2 M60.0,61.8 L76.8,45.0"/><path d="M61.6,76.6 L78.4,93.4"/><path d="M112,70 H140" stroke-width="1"/><path d="M135.7,72.5L140,70L135.7,67.5" stroke-width="1"/><path d="M116.3,67.5L112,70L116.3,72.5" stroke-width="1"/><path d="M170.4,70.0 L191.6,70.0"/><path d="M206.6,63.4 L223.4,46.6"/><path d="M205.0,78.2 L221.8,95.0 M208.2,75.0 L225.0,91.8"/><path d="M310.4,70.0 L331.6,70.0"/><path d="M348.2,65.0 L365.0,48.2"/><path d="M345.0,61.8 L361.8,45.0" stroke-dasharray="3 2"/><path d="M345.0,78.2 L361.8,95.0"/><path d="M348.2,75.0 L365.0,91.8" stroke-dasharray="3 2"/>
<g fill="currentColor" stroke="none"><text x="17" y="74" text-anchor="middle">R</text><text x="55" y="74" text-anchor="middle">C</text><text x="91" y="38" text-anchor="middle">O</text><text x="91" y="108" text-anchor="middle">O⁻</text><text x="162" y="74" text-anchor="middle">R</text><text x="200" y="74" text-anchor="middle">C</text><text x="236" y="38" text-anchor="middle">O⁻</text><text x="236" y="108" text-anchor="middle">O</text><text x="268" y="74" text-anchor="middle" font-size="14">≡</text><text x="302" y="74" text-anchor="middle">R</text><text x="340" y="74" text-anchor="middle">C</text><text x="376" y="38" text-anchor="middle">O<tspan dy="-4" font-size="8">½−</tspan></text><text x="376" y="108" text-anchor="middle">O<tspan dy="-4" font-size="8">½−</tspan></text><text x="350" y="128" text-anchor="middle" font-size="9">hybrid</text></g>
</svg>
caption: Figure 8.1 Two equivalent structures put the charge on two oxygens; in the real ion both C–O bonds are equal and each O carries half the charge.
part: 91, 108 | Charge on an oxygen | In each structure one O carries the negative charge.
part: 126, 70 | Resonance arrow | The two structures are equivalent.
part: 370, 70 | Hybrid | Both C–O bonds are equal, between single and double.
part: 376, 40 | Half charge on each O | Charge shared by two electronegative atoms: very stable ion, so the acid is strong.
```

Substituents shift acid strength in a predictable way. An **electron-withdrawing** group pulls charge away from the carboxylate, spreads it out and stabilises it, so the acid is *stronger*. An **electron-releasing** group does the opposite. The effect grows with the number of such groups and fades with distance from –COOH.

:::formula Acid strength orders
$\ce{Cl3CCOOH}$ > $\ce{Cl2CHCOOH}$ > $\ce{ClCH2COOH}$ > $\ce{CH3COOH}$ (more withdrawing groups)

$\ce{FCH2COOH}$ > $\ce{ClCH2COOH}$ > $\ce{BrCH2COOH}$ (stronger withdrawal)

2-chlorobutanoic > 3-chlorobutanoic > 4-chlorobutanoic acid (closer to –COOH)

$\ce{HCOOH}$ > $\ce{CH3COOH}$ > $\ce{CH3CH2COOH}$ (alkyl groups release electrons)
:::

Benzoic acid is stronger than ethanoic acid, because the ring carbon attached to –COOH is sp$^2$ and more electron-withdrawing than a methyl group. On the ring, a nitro group increases the acidity of benzoic acid and a methyl or methoxy group reduces it.

```ng-draw
id: draw-carboxylate
title: Draw the resonance structures of the carboxylate ion
svg: ref: notes#carboxylate-resonance
time: 2
```

```ng-fill
id: acid-strength-fill
title: Which acid is stronger?
cols: Pair | Stronger acid | Reason
row: $\ce{CH3COOH}$ / $\ce{ClCH2COOH}$ | [[$\ce{ClCH2COOH}$]] | Cl withdraws electrons
row: $\ce{FCH2COOH}$ / $\ce{ClCH2COOH}$ | [[$\ce{FCH2COOH}$]] | F is more electronegative
row: $\ce{HCOOH}$ / $\ce{CH3COOH}$ | [[$\ce{HCOOH}$]] | no electron-releasing alkyl group
row: benzoic / 4-nitrobenzoic | [[4-nitrobenzoic]] | $\ce{-NO2}$ withdraws electrons
row: 2-chloro / 4-chlorobutanoic | [[2-chlorobutanoic]] | Cl is closer to –COOH
```

```ng-explain
id: why-acid-stronger-than-phenol
prompt: In three lines, explain why ethanoic acid is a stronger acid than phenol.
lines: 3
```

**In one breath:** The carboxylate ion shares its charge equally between two oxygens, which makes these acids stronger than phenols; electron-withdrawing groups strengthen the acid, more so when numerous and near.

## Reactions of carboxylic acids

Unlike aldehydes and ketones, carboxylic acids do not give addition reactions at the carbonyl group, and they do not react with 2,4-DNP. The lone pair on the –OH oxygen is shared with the carbonyl carbon by resonance, so that carbon is much less electron-poor.

What they do is exchange the –OH for something else.

:::formula Replacing the –OH of an acid
With alcohols: $\ce{RCOOH + R{'}OH <=>[H+] RCOOR{'} + H2O}$ (esterification)

With $\ce{SOCl2}$, $\ce{PCl5}$ or $\ce{PCl3}$: acid chloride, $\ce{RCOCl}$

With ammonia: ammonium salt, which on heating gives the amide, $\ce{RCONH2}$

Two molecules heated with a dehydrating agent ($\ce{P2O5}$): acid anhydride
:::

**Reduction** to a primary alcohol needs $\ce{LiAlH4}$ or diborane. Sodium borohydride is not strong enough.

**Decarboxylation** removes the carboxyl carbon. Heating the sodium salt with soda lime (NaOH and CaO) gives a hydrocarbon with one carbon *fewer*: $\begin{gathered}\ce{RCOONa + NaOH}\\ \ce{->[CaO, heat] RH}\\ \text{+ }\ce{Na2CO3}\end{gathered}$. Electrolysing a solution of the salt joins two alkyl groups instead (Kolbe electrolysis).

**Halogenation at the α-carbon** is the last named reaction of the chapter.

:::formula Hell–Volhard–Zelinsky reaction
**Hell–Volhard–Zelinsky (HVZ) reaction:** $\begin{gathered}\ce{RCH2COOH}\\ \ce{->[X2 / red P, then H2O] RCH(X)COOH}\end{gathered}$ (X = Cl, Br)
:::

It needs an α-hydrogen, and it puts the halogen on the α-carbon.

On a benzene ring, –COOH withdraws electrons: benzoic acid is nitrated and brominated at the **meta** position. It does not undergo Friedel–Crafts reactions, because the ring is deactivated and the catalyst, $\ce{AlCl3}$, binds to the carboxyl group.

:::skeleton Worked example: two conversions
*Convert (i) benzoic acid into benzaldehyde, (ii) bromoethane into propanoic acid.*

(i) $\begin{gathered}\ce{C6H5COOH}\\ \ce{->[SOCl2] C6H5COCl}\\ \ce{->[H2, Pd/BaSO4] C6H5CHO}\end{gathered}$ (acid chloride, then Rosenmund reduction) [1½]

(ii) $\begin{gathered}\ce{CH3CH2Br}\\ \ce{->[Mg, dry ether] CH3CH2MgBr}\\ \ce{->[CO2, then H3O+] CH3CH2COOH}\end{gathered}$ (Grignard reagent adds one carbon) [1½]
:::

Uses worth remembering: methanoic acid in rubber, textile and leather industries; ethanoic acid as vinegar and as a solvent; hexanedioic acid for nylon-6,6; sodium benzoate as a food preservative; and the higher fatty acids for soaps and detergents.

```ng-steps
id: conversion-strategy
title: Planning a conversion in the exam
step: Write the start and the target and **count the carbons**: same, one more, or one fewer?
step: One more carbon: go through a **nitrile** (KCN) or a **Grignard reagent + $\ce{CO2}$**.
step: One fewer carbon: **soda lime** decarboxylation or **Hoffmann bromamide** (Ch 9).
step: Same carbons: change the functional group (oxidise, reduce, $\ce{SOCl2}$, Rosenmund).
step: Write each step with reagent and conditions over the arrow.
```

**In one breath:** Resonance makes the acid's carbonyl carbon unreactive to addition; instead –OH is replaced to give esters, acid chlorides, amides and anhydrides. Soda lime removes a carbon, HVZ halogenates the α-carbon, and –COOH directs meta.
