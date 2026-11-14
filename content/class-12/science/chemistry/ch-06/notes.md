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

**Figure 6.1 (S$_\text{N}$2 mechanism):** $\ce{HO-}$ approaching a carbon from the left with Br on the right; a transition state with the three H atoms in a plane and partial bonds to both O and Br; then the product with OH on the left and the three H atoms flipped to the right, like an umbrella turned inside out.

Because the nucleophile must reach the back of the carbon, bulky groups get in its way. That gives the reactivity order.

:::formula Reactivity in SN2
S$_\text{N}$2 reactivity: $\ce{CH3X}$ > 1° > 2° > 3° (less crowding, faster attack)
:::

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

**In one breath:** S$_\text{N}$1 goes through a carbocation in two steps, with rate depending on the halide alone, so 3° > 2° > 1°, the reverse of S$_\text{N}$2. Allylic and benzylic halides are fast because of resonance.

## What happens in space: stereochemistry

The two mechanisms leave different fingerprints on the shape of the product. To see them you need **chirality**.

A carbon with four *different* groups attached is an **asymmetric (chiral) carbon**. A molecule containing one cannot be superimposed on its mirror image, just as your left hand cannot be superimposed on your right. The two mirror-image forms are **enantiomers**. They have the same melting point, boiling point and solubility, but they rotate the plane of plane-polarised light in opposite directions: one to the right (dextrorotatory, +), the other to the left (laevorotatory, −). Such compounds are **optically active**. Butan-2-ol and 2-bromobutane are chiral; propan-2-ol is not, because its carbon carries two identical methyl groups.

A mixture of equal amounts of the two enantiomers has zero rotation, since each cancels the other. It is called a **racemic mixture**, and the process of forming one is racemisation.

Now the fingerprints. In S$_\text{N}$2 the nucleophile enters from the back while the leaving group departs from the front, so the configuration is turned inside out: **inversion**. Optically active (−)-2-bromooctane with hydroxide gives (+)-octan-2-ol with the opposite configuration. In S$_\text{N}$1 the carbocation intermediate is flat, sp$^2$ hybridised, and the nucleophile can attack either face with equal ease. Both enantiomers form, and the product is **racemic**.

:::tip
S$_\text{N}$2 gives inversion; S$_\text{N}$1 gives racemisation. Students often write these the wrong way round, so tie each to its picture: backside attack, flat carbocation.
:::

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

**In one breath:** Resonance and sp$^2$ carbon make the aryl C–X bond strong, so haloarenes resist nucleophiles unless nitro groups sit at ortho or para; on the ring, halogens slow electrophilic substitution but send it ortho and para.

## Polyhalogen compounds

A few compounds with more than one halogen are important enough to know by name, mostly for their uses and their harm.

**Dichloromethane**, $\ce{CH2Cl2}$, is a solvent, paint remover and propellant; it harms the central nervous system. **Chloroform**, $\ce{CHCl3}$, is a solvent for fats and was once an anaesthetic. In air and light it slowly oxidises to phosgene, a very poisonous gas: $\ce{2CHCl3 + O2 ->[light] 2COCl2 + 2HCl}$. That is why it is stored in dark bottles filled to the brim. **Iodoform**, $\ce{CHI3}$, was used as an antiseptic because it releases iodine. **Tetrachloromethane**, $\ce{CCl4}$, was used in refrigerants and as a cleaning solvent; in the upper atmosphere it damages the ozone layer.

**Freons** are chlorofluorocarbons such as $\ce{CCl2F2}$ (freon-12). They are so stable and unreactive that they were ideal for refrigerators and aerosol cans, but the same stability lets them drift up to the stratosphere, where they break down and destroy ozone. **DDT** was the first chlorinated insecticide and hugely effective against malaria-carrying mosquitoes. It does not break down, builds up in the fatty tissue of animals, and insects became resistant to it, so many countries have banned it.

**In one breath:** Chloroform turns to phosgene in light and air; freons and $\ce{CCl4}$ destroy ozone; DDT persists and accumulates in fat. Their usefulness and their harm come from the same stability.
