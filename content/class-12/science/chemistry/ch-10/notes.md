# Ch 10 · Biomolecules

A living cell is built from non-living molecules: carbohydrates for energy and structure, proteins for almost every job, nucleic acids for information, and vitamins and hormones in tiny amounts to keep it all regulated. This chapter is different from the other organic chapters. There are few reactions and no mechanisms. What you need is a clear picture of how each molecule is put together, the vocabulary to describe it, and the reason each structural fact is believed. Read it as a story of small units joining into large ones.

## Carbohydrates: what they are and how they are sorted

Carbohydrates are the sugars, starch and cellulose. Chemically they are **optically active polyhydroxy aldehydes or ketones**, or compounds that give these on hydrolysis. The old idea, "hydrates of carbon" with formula $\ce{C_x(H2O)_y}$, does not hold up: ethanoic acid, $\ce{C2H4O2}$, fits the formula and is no carbohydrate, while the sugar rhamnose, $\ce{C6H12O5}$, does not fit it.

They are sorted by what hydrolysis does to them.

- **Monosaccharides** cannot be hydrolysed to anything simpler: glucose, fructose, ribose.
- **Oligosaccharides** give two to ten monosaccharide units. The important ones are **disaccharides**: sucrose, maltose, lactose.
- **Polysaccharides** give a very large number of units: starch, cellulose, glycogen. They are not sweet and are called non-sugars.

A second sorting is by behaviour. A **reducing sugar** reduces Tollens' reagent and Fehling's solution. All monosaccharides are reducing sugars, whether they are aldoses or ketoses.

Monosaccharides are named by their carbonyl group and number of carbons. One with an aldehyde group is an **aldose**; one with a ketone group is a **ketose**. Glucose, with six carbons and –CHO, is an aldohexose. Fructose, with six carbons and C=O, is a ketohexose.

**In one breath:** Carbohydrates are polyhydroxy aldehydes or ketones, sorted by hydrolysis into mono-, oligo- and polysaccharides; sugars that reduce Tollens' and Fehling's reagents are reducing sugars, and all monosaccharides are.

## Glucose: building its structure from evidence

Glucose is made by boiling sucrose with dilute acid, which gives glucose and fructose in equal amounts, or commercially by boiling starch with dilute sulphuric acid at 393 K under pressure.

Its molecular formula is $\ce{C6H12O6}$. The open-chain structure was worked out from a handful of reactions, and each one settles one feature. This reasoning is asked often, so learn the pairs.

:::formula Evidence for the structure of glucose
Prolonged heating with HI → *n*-hexane: **six carbons in a straight chain**

$\ce{NH2OH}$ → oxime; HCN → cyanohydrin: **a carbonyl group**

Bromine water (mild oxidant) → gluconic acid: **the carbonyl is an aldehyde, –CHO**

Acetic anhydride → glucose pentaacetate: **five –OH groups**, on different carbons since the compound is stable

Nitric acid → saccharic acid (dicarboxylic): **a primary alcohol, $\ce{-CH2OH}$, at the other end**
:::

Put together: $\ce{CHO-(CHOH)4-CH2OH}$, a chain with an aldehyde at C1, secondary –OH groups on C2 to C5, and a primary –OH at C6.

Glucose is written **D-(+)-glucose**. The two labels mean different things. The (+) says it rotates plane-polarised light to the right, an experimental fact. The **D** describes configuration: with the chain drawn vertically and –CHO at the top, the –OH on the lowest asymmetric carbon (C5) is on the right, as it is in D-glyceraldehyde.

:::tip
D and L are about the arrangement of groups, not the direction of rotation. A D-sugar can be dextrorotatory or laevorotatory: D-glucose is (+), D-fructose is (−).
:::

```ng-fill
id: glucose-evidence
title: Evidence for the open-chain structure of glucose
cols: Reaction | Product | What it proves
row: HI, prolonged heating | n-hexane | [[six carbons in a straight chain]]
row: $\ce{NH2OH}$ | oxime | [[a carbonyl group]]
row: bromine water | gluconic acid | [[the carbonyl is an aldehyde, –CHO]]
row: acetic anhydride | pentaacetate | [[five –OH groups]]
row: nitric acid | saccharic acid | [[a primary –CH₂OH at the other end]]
```

**In one breath:** Five reactions give glucose's open chain: HI (six carbons in a row), oxime and cyanohydrin (carbonyl), bromine water (aldehyde), acetylation (five –OH), nitric acid (primary alcohol). D refers to configuration, (+) to rotation.

## The ring: why the open chain is not the whole story

The open-chain structure explains a great deal, but three facts contradict it.

1. Glucose has an aldehyde group on paper, yet it does not give Schiff's test and does not form an addition product with sodium hydrogensulphite.
2. Glucose pentaacetate does not react with hydroxylamine, so it has no free –CHO at all.
3. Glucose exists in two crystalline forms, α and β, with different melting points and rotations.

All three are explained if the aldehyde group is not free. The –OH on C5 adds across the C1 aldehyde, inside the same molecule, to form a hemiacetal. The result is a six-membered ring of five carbons and one oxygen, called a **pyranose** ring.

Ring closure makes C1 a new asymmetric carbon, so the –OH on it can point two ways. These are the two forms: **α-D-glucose**, with the C1 –OH below the plane of the ring in the usual drawing, and **β-D-glucose**, with it above. Isomers that differ only in configuration at C1 are **anomers**, and C1 is the anomeric carbon.

```ng-figure
id: haworth-glucose
title: α- and β-D-glucose (Haworth)
svg:
<svg viewBox="0 0 340 140" role="img" aria-label="Haworth structures of alpha and beta D-glucose" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M126.0,70.0 L104.0,90.0" stroke-width="3"/><path d="M104.0,90.0 L60.0,90.0" stroke-width="3"/><path d="M60.0,90.0 L38.0,70.0" stroke-width="3"/><path d="M38.0,70.0 L60.0,54.0" stroke-width="1.5"/><path d="M60.0,54.0 L94.3,54.0" stroke-width="1.5"/><path d="M126.0,70.0 L108.8,57.5" stroke-width="1.5"/><path d="M126.0,70.0 V53.0" stroke-width="1"/><path d="M126.0,70.0 V87.0" stroke-width="1"/><path d="M104.0,90.0 V78.0" stroke-width="1"/><path d="M104.0,90.0 V107.0" stroke-width="1"/><path d="M60.0,90.0 V78.0" stroke-width="1"/><path d="M60.0,90.0 V107.0" stroke-width="1"/><path d="M38.0,70.0 V53.0" stroke-width="1"/><path d="M38.0,70.0 V87.0" stroke-width="1"/><path d="M60.0,54.0 V37.0" stroke-width="1"/><path d="M294.0,70.0 L272.0,90.0" stroke-width="3"/><path d="M272.0,90.0 L228.0,90.0" stroke-width="3"/><path d="M228.0,90.0 L206.0,70.0" stroke-width="3"/><path d="M206.0,70.0 L228.0,54.0" stroke-width="1.5"/><path d="M228.0,54.0 L262.3,54.0" stroke-width="1.5"/><path d="M294.0,70.0 L276.8,57.5" stroke-width="1.5"/><path d="M294.0,70.0 V53.0" stroke-width="1"/><path d="M294.0,70.0 V87.0" stroke-width="1"/><path d="M272.0,90.0 V78.0" stroke-width="1"/><path d="M272.0,90.0 V107.0" stroke-width="1"/><path d="M228.0,90.0 V78.0" stroke-width="1"/><path d="M228.0,90.0 V107.0" stroke-width="1"/><path d="M206.0,70.0 V53.0" stroke-width="1"/><path d="M206.0,70.0 V87.0" stroke-width="1"/><path d="M228.0,54.0 V37.0" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="104" y="58" text-anchor="middle" font-size="11">O</text><text x="126" y="50" text-anchor="middle" font-size="10">H</text><text x="126.0" y="97.0" text-anchor="middle" font-size="10" font-weight="700" style="fill:#E0B400">OH</text><text x="104" y="75" text-anchor="middle" font-size="10">H</text><text x="104" y="117" text-anchor="middle" font-size="10">OH</text><text x="60" y="75" text-anchor="middle" font-size="10">OH</text><text x="60" y="117" text-anchor="middle" font-size="10">H</text><text x="38" y="50" text-anchor="middle" font-size="10">H</text><text x="38" y="97" text-anchor="middle" font-size="10">OH</text><text x="60" y="34" text-anchor="middle" font-size="10">CH₂OH</text><text x="82" y="132" text-anchor="middle" font-size="10">α-D-glucopyranose</text><text x="272" y="58" text-anchor="middle" font-size="11">O</text><text x="294.0" y="50.0" text-anchor="middle" font-size="10" font-weight="700" style="fill:#E0B400">OH</text><text x="294" y="97" text-anchor="middle" font-size="10">H</text><text x="272" y="75" text-anchor="middle" font-size="10">H</text><text x="272" y="117" text-anchor="middle" font-size="10">OH</text><text x="228" y="75" text-anchor="middle" font-size="10">OH</text><text x="228" y="117" text-anchor="middle" font-size="10">H</text><text x="206" y="50" text-anchor="middle" font-size="10">H</text><text x="206" y="97" text-anchor="middle" font-size="10">OH</text><text x="228" y="34" text-anchor="middle" font-size="10">CH₂OH</text><text x="250" y="132" text-anchor="middle" font-size="10">β-D-glucopyranose</text></g>
</svg>
caption: Figure 10.1 The two anomers differ only at C1: –OH below the ring in α, above in β.
part: 126, 92 | C1 –OH in α | Below the plane of the ring.
part: 294, 48 | C1 –OH in β | Above the plane of the ring.
part: 104, 54 | Ring oxygen | The –OH on C5 joined C1: a six-membered pyranose ring.
part: 60, 46 | CH₂OH on C5 | Above the ring in D-sugars.
part: 82, 92 | Thick front edge | Haworth convention: the ring is flat and seen edge-on.
```

**Fructose**, $\ce{C6H12O6}$, is a ketohexose with its C=O at C2. It also cyclises, the –OH on C5 adding to the C2 ketone, to give a five-membered ring of four carbons and one oxygen: a **furanose** ring. Its anomeric carbon is C2.

```ng-steps
id: ring-closure
title: How glucose forms its ring
step: The –OH on **C5** swings round to the **aldehyde at C1**.
step: It adds across C=O, forming a **hemiacetal**: a six-membered ring of five C and one O (pyranose).
step: C1 becomes a new chiral centre, so its –OH can point **down (α)** or **up (β)**: the two anomers.
step: With no free –CHO, glucose fails Schiff's test and the $\ce{NaHSO3}$ test.
```

```ng-draw
id: draw-haworth
title: Draw the Haworth structures of α- and β-D-glucose
svg: ref: notes#haworth-glucose
time: 4
```

**In one breath:** Glucose fails Schiff's and $\ce{NaHSO3}$ tests and has α and β forms because C1 and the C5 –OH close a six-membered pyranose ring; the two forms differ only at C1 and are anomers. Fructose forms a five-membered furanose ring.

## Disaccharides: two units, one linkage

Two monosaccharides join when an –OH of one reacts with an –OH of the other and water is lost. The oxygen bridge between them is a **glycosidic linkage**.

Whether a disaccharide is a reducing sugar depends on one thing: is an anomeric carbon left free? A free anomeric –OH lets the ring open to show the carbonyl group, and the sugar reduces Tollens' and Fehling's reagents. If both anomeric carbons are used up in the linkage, neither ring can open.

:::formula Disaccharides and their linkages
**Sucrose** = α-D-glucose + β-D-fructose, linked C1 (glucose) to C2 (fructose): **non-reducing**

**Maltose** = two α-D-glucose, linked C1 to C4: **reducing**

**Lactose** = β-D-galactose + β-D-glucose, linked C1 (galactose) to C4 (glucose): **reducing**
:::

Sucrose is the odd one out: its linkage joins the two anomeric carbons to each other.

Sucrose is dextrorotatory. Hydrolysis gives an equal mixture of glucose (+52.5°) and fructose (−92.4°). Fructose turns light to the left more strongly than glucose turns it to the right, so the mixture is laevorotatory. The sign of rotation has inverted, and the product is called **invert sugar**.

:::tip
Sucrose is the standard example of a non-reducing sugar. Maltose and lactose both reduce, because the second unit keeps its anomeric carbon free.
:::

```ng-fill
id: disaccharide-fill
title: Disaccharides at a glance
cols: Sugar | Units | Reducing?
row: sucrose | α-D-glucose + β-D-fructose (C1–C2) | [[no]]
row: maltose | [[two α-D-glucose (C1–C4)]] | yes
row: lactose | [[β-D-galactose + β-D-glucose (C1–C4)]] | yes
```

```ng-mnemonic
id: sucrose-shy
title: Which disaccharide is non-reducing?
trick: **Sucrose holds hands at both ends**
meaning: In sucrose the glycosidic link joins C1 of glucose to C2 of fructose: both anomeric carbons are used, no ring can open, so it cannot reduce Tollens' or Fehling's reagent.
prompt: Why is sucrose a non-reducing sugar?
```

**In one breath:** A glycosidic linkage joins two sugar units with loss of water. Sucrose (glucose + fructose, C1–C2) is non-reducing and gives invert sugar; maltose (C1–C4, two glucose) and lactose (galactose + glucose) are reducing.

## Polysaccharides: storage and structure

**Starch** is the energy store of plants. It is a polymer of α-glucose with two components. **Amylose**, about 15–20%, is water-soluble: a long *unbranched* chain of 200–1000 units joined C1–C4. **Amylopectin**, about 80–85%, is insoluble and *branched*: the chains are C1–C4 and the branches are attached through C1–C6 linkages.

**Cellulose** is the structural material of plant cell walls and the most abundant organic substance on Earth. It is a straight chain made only of **β**-glucose, joined C1–C4. That one difference, β in place of α, changes everything: the chains pack into strong fibres, and human enzymes, which fit the α linkage, cannot digest it.

**Glycogen** is the energy store of animals, found in liver, muscle and brain. Its structure is like amylopectin but more highly branched, and it is sometimes called animal starch. When the body needs glucose, enzymes break glycogen down.

```ng-compare
id: starch-vs-cellulose
title: Starch vs cellulose
cols: Starch | Cellulose
row: Unit | α-D-glucose | β-D-glucose
row: Chains | amylose (unbranched) + amylopectin (branched, C1–C6) | straight, unbranched
row: Role | energy store in plants | cell walls of plants
row: Digested by humans? | yes | no (we lack the enzyme for β-links)
```

**In one breath:** Starch (plants) is α-glucose as unbranched amylose plus branched amylopectin; glycogen (animals) is like amylopectin but more branched; cellulose is straight-chain β-glucose, which is why it is fibrous and indigestible to us.

## Amino acids

Proteins are polymers of **α-amino acids**: compounds with an amino group and a carboxyl group on the same carbon, $\ce{R-CH(NH2)-COOH}$. About twenty of them occur in proteins, differing only in the side chain R.

They are classed in two ways. By the balance of groups: **neutral** if amino and carboxyl groups are equal in number, **acidic** with more carboxyl groups, **basic** with more amino groups. And by diet: **non-essential** amino acids can be made in the body; **essential** amino acids cannot and must come from food. Valine, leucine and lysine are essential; glycine and alanine are not.

Amino acids behave more like salts than like simple amines or acids: they are colourless crystalline solids, high-melting and water-soluble. The reason is that in water the carboxyl group loses a proton and the amino group gains one, giving a dipolar ion with both charges in one molecule.

:::formula Zwitterion
**Zwitterion:** $\ce{H3N+-CHR-COO-}$, neutral overall, but carrying both a positive and a negative charge
:::

As a zwitterion an amino acid can react with both acids and bases; it is **amphoteric**.

Every α-amino acid except glycine has four different groups on the α-carbon and is optically active. Glycine has two hydrogens there. Most naturally occurring amino acids have the L configuration.

**In one breath:** α-Amino acids carry $\ce{-NH2}$ and –COOH on one carbon and exist as zwitterions, which makes them salt-like and amphoteric; essential ones must come from the diet; all but glycine are optically active, mostly L.

## Proteins: four levels of structure

Amino acids join when the carboxyl group of one reacts with the amino group of the next, losing water. The amide bond formed, –CO–NH–, is a **peptide bond**. Two amino acids give a dipeptide (one peptide bond), three a tripeptide (two bonds), many a polypeptide. A polypeptide of more than about a hundred residues, with a molar mass above 10 000 u, is called a protein.

By overall shape there are two kinds. **Fibrous proteins** have chains lying side by side, held by hydrogen and disulphide bonds; they are insoluble in water. Keratin in hair and myosin in muscle are examples. **Globular proteins** have chains folded into a compact, roughly spherical shape and are usually soluble. Insulin and albumin are examples.

The structure is described at four levels.

- **Primary:** the sequence of amino acids in the chain. Change one and it is a different protein.
- **Secondary:** the regular shape a chain takes because of hydrogen bonds between C=O and N–H groups of the backbone. In the **α-helix** one chain coils into a right-handed spiral, each N–H bonded to a C=O further along the same chain. In the **β-pleated sheet** chains lie stretched out side by side, hydrogen-bonded to their neighbours.
- **Tertiary:** the overall folding of the whole chain, which produces the fibrous or globular shape. It is held by hydrogen bonds, disulphide links, van der Waals forces and electrostatic attraction.
- **Quaternary:** the arrangement of two or more polypeptide chains (subunits) relative to one another.

```ng-figure
id: protein-secondary
title: Secondary structure of proteins
svg:
<svg viewBox="0 0 320 150" role="img" aria-label="Alpha-helix and beta-pleated sheet" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M92.0,22.0 L91.7,24.7 L90.9,27.4 L89.6,30.0 L87.8,32.5 L85.6,34.8 L82.9,36.9 L80.0,38.8 L76.8,40.3 L73.4,41.7 L70.0,42.7 L66.6,43.4 L63.2,43.8 L60.0,44.0 L57.1,43.8 L54.4,43.5 L52.2,42.9 L50.4,42.2 L49.1,41.3 L48.3,40.3 L48.0,39.3 L48.3,38.3 L49.1,37.4 L50.4,36.5 L52.2,35.7 L54.4,35.2 L57.1,34.8 L60.0,34.7 L63.2,34.9 L66.6,35.3 L70.0,36.0 L73.4,37.0 L76.8,38.3 L80.0,39.9 L82.9,41.8 L85.6,43.8 L87.8,46.1 L89.6,48.6 L90.9,51.2 L91.7,53.9 L92.0,56.7 L91.7,59.4 L90.9,62.1 L89.6,64.7 L87.8,67.2 L85.6,69.5 L82.9,71.6 L80.0,73.4 L76.8,75.0 L73.4,76.3 L70.0,77.3 L66.6,78.1 L63.2,78.5 L60.0,78.6 L57.1,78.5 L54.4,78.2 L52.2,77.6 L50.4,76.8 L49.1,76.0 L48.3,75.0 L48.0,74.0 L48.3,73.0 L49.1,72.0 L50.4,71.2 L52.2,70.4 L54.4,69.8 L57.1,69.5 L60.0,69.4 L63.2,69.5 L66.6,69.9 L70.0,70.7 L73.4,71.7 L76.8,73.0 L80.0,74.6 L82.9,76.4 L85.6,78.5 L87.8,80.8 L89.6,83.3 L90.9,85.9 L91.7,88.6 L92.0,91.3 L91.7,94.1 L90.9,96.8 L89.6,99.4 L87.8,101.9 L85.6,104.2 L82.9,106.2 L80.0,108.1 L76.8,109.7 L73.4,111.0 L70.0,112.0 L66.6,112.7 L63.2,113.1 L60.0,113.3 L57.1,113.2 L54.4,112.8 L52.2,112.3 L50.4,111.5 L49.1,110.6 L48.3,109.7 L48.0,108.7 L48.3,107.7 L49.1,106.7 L50.4,105.8 L52.2,105.1 L54.4,104.5 L57.1,104.2 L60.0,104.0 L63.2,104.2 L66.6,104.6 L70.0,105.3 L73.4,106.3 L76.8,107.7 L80.0,109.2 L82.9,111.1 L85.6,113.2 L87.8,115.5 L89.6,118.0 L90.9,120.6 L91.7,123.3 L92.0,126.0" class="u" stroke-width="2"/><path d="M88,30 V48" stroke-dasharray="2 2" stroke-width="1"/><path d="M88,64 V82" stroke-dasharray="2 2" stroke-width="1"/><path d="M88,98 V116" stroke-dasharray="2 2" stroke-width="1"/><path d="M184,22 L196,35 L184,48 L196,61 L184,74 L196,87 L184,100 L196,113 L184,126" stroke-width="2"/><path d="M224,22 L236,35 L224,48 L236,61 L224,74 L236,87 L224,100 L236,113 L224,126" stroke-width="2"/><path d="M264,22 L276,35 L264,48 L276,61 L264,74 L276,87 L264,100 L276,113 L264,126" stroke-width="2"/><path d="M196,35 H224" stroke-dasharray="2 2" stroke-width="1"/><path d="M236,35 H264" stroke-dasharray="2 2" stroke-width="1"/><path d="M196,61 H224" stroke-dasharray="2 2" stroke-width="1"/><path d="M236,61 H264" stroke-dasharray="2 2" stroke-width="1"/><path d="M196,87 H224" stroke-dasharray="2 2" stroke-width="1"/><path d="M236,87 H264" stroke-dasharray="2 2" stroke-width="1"/><path d="M196,113 H224" stroke-dasharray="2 2" stroke-width="1"/><path d="M236,113 H264" stroke-dasharray="2 2" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="70" y="144" text-anchor="middle" font-size="10">α-helix</text><text x="230" y="144" text-anchor="middle" font-size="10">β-pleated sheet</text></g>
</svg>
caption: Figure 10.2 Both shapes are held by hydrogen bonds between C=O and N–H groups of the backbone (dotted).
part: 48, 70 | α-helix | One chain coiled into a right-handed spiral.
part: 88, 56 | H-bonds along the helix | Between turns of the same chain.
part: 230, 60 | β-pleated sheet | Stretched chains lying side by side.
part: 210, 61 | H-bonds between chains | Link neighbouring strands.
```

**Denaturation.** Heat, or a change in pH, breaks the hydrogen bonds that hold the folded shape. The helix uncoils, the globule unfolds, and the protein loses its biological activity. The secondary and tertiary structures are destroyed, but the **primary structure remains intact**: the peptide bonds are not broken. The coagulation of egg white on boiling and the curdling of milk are everyday examples.

:::tip
In denaturation the primary structure survives. Writing that "the protein breaks into amino acids" describes hydrolysis, not denaturation, and loses the mark.
:::

```ng-draw
id: draw-protein
title: Sketch the α-helix and the β-pleated sheet
svg: ref: notes#protein-secondary
time: 3
```

```ng-compare
id: fibrous-vs-globular
title: Fibrous vs globular proteins
cols: Fibrous | Globular
row: Shape | long chains side by side | chains folded into a sphere
row: Held by | H-bonds and disulphide links | H-bonds, disulphide links, van der Waals
row: Water | insoluble | usually soluble
row: Examples | keratin, myosin | insulin, albumin
```

```ng-steps
id: denaturation-steps
title: What happens when an egg is boiled
step: Heat (or a pH change) breaks the **hydrogen bonds** holding the folded shape.
step: The helix uncoils and the globule unfolds: **secondary and tertiary** structure is lost.
step: The **peptide bonds stay intact**: primary structure survives, but biological activity is lost (denaturation).
```

**In one breath:** Peptide bonds (–CO–NH–) link amino acids. Primary structure is the sequence, secondary the α-helix or β-sheet from backbone hydrogen bonds, tertiary the overall fold, quaternary the assembly of subunits. Denaturation destroys all but the primary.

## Enzymes

Enzymes are the catalysts of living cells, and almost all of them are globular proteins. Without them the reactions of life would be far too slow at body temperature. They work by lowering the activation energy of a reaction, as any catalyst does.

What sets them apart is how **specific** they are. Each enzyme acts on one reaction or one type of substrate: maltase hydrolyses maltose to glucose and nothing else. They are needed only in very small amounts, and they work best at a particular temperature and pH. Enzymes are usually named after the substrate or the reaction, with the ending *-ase*; those that catalyse oxidation of one substrate with reduction of another are oxidoreductases.

**In one breath:** Enzymes are globular proteins that catalyse biological reactions by lowering activation energy; they are highly specific, needed in tiny amounts and work best at an optimum temperature and pH.

## Vitamins

Vitamins are organic compounds needed in the diet in small amounts for particular biological functions. The body cannot make most of them, and a shortage of any one causes a specific deficiency disease.

They are classed by solubility, and the classification has a practical consequence. **Fat-soluble** vitamins, **A, D, E and K**, are stored in the liver and in fatty tissue. **Water-soluble** vitamins, the **B group and C**, are readily excreted in urine and cannot be stored, so they must be supplied regularly. Vitamin $\ce{B12}$ is the exception: it is water-soluble but is stored.

:::formula Vitamins and deficiency diseases
A: night blindness, xerophthalmia · $\ce{B1}$: beriberi · $\ce{B2}$: cheilosis · $\ce{B6}$: convulsions · $\ce{B12}$: pernicious anaemia

C: scurvy (bleeding gums) · D: rickets in children, osteomalacia in adults · E: fragile red blood cells, muscular weakness · K: slow clotting of blood
:::

```ng-fill
id: vitamin-fill
title: Vitamins and deficiency diseases
cols: Vitamin | Deficiency disease
row: A | [[night blindness, xerophthalmia]]
row: $\ce{B1}$ | [[beriberi]]
row: $\ce{B12}$ | [[pernicious anaemia]]
row: C | [[scurvy (bleeding gums)]]
row: D | [[rickets (children), osteomalacia (adults)]]
row: K | [[slow clotting of blood]]
```

```ng-mnemonic
id: adek-deck
title: Which vitamins are fat-soluble?
trick: **ADEK sounds like "a deck"**: kept in the drawer (stored in fat)
meaning: A, D, E, K are fat-soluble and stored in liver and fatty tissue; B and C are water-soluble and must be eaten regularly (except $\ce{B12}$).
prompt: Name the fat-soluble vitamins.
```

**In one breath:** Vitamins A, D, E, K are fat-soluble and stored; B and C are water-soluble and must be eaten regularly (except $\ce{B12}$); each deficiency gives a named disease, such as scurvy for C and rickets for D.

## Nucleic acids

Nucleic acids carry heredity. **DNA** stores the genetic information; **RNA** helps turn it into proteins. Both are long chains of **nucleotides**.

Each nucleotide has three parts: a pentose sugar, a nitrogen-containing base, and a phosphate group. A sugar joined to a base alone is a **nucleoside**; add phosphate at C5′ of the sugar and it becomes a nucleotide. Nucleotides link up through **phosphodiester linkages** between C5′ of one sugar and C3′ of the next, giving a sugar–phosphate backbone with the bases sticking out.

DNA and RNA differ in three ways.

:::formula DNA and RNA
**DNA:** sugar β-D-2-deoxyribose · bases A, G, C, **T** · double helix

**RNA:** sugar β-D-ribose · bases A, G, C, **U** · single strand
:::

In DNA two strands wind round each other in a **double helix**, held together by hydrogen bonds between bases. The pairing is strict: adenine pairs with thymine through two hydrogen bonds, and cytosine pairs with guanine through three. So the sequence of one strand fixes the sequence of the other; the strands are **complementary**. RNA is single-stranded and comes in three types with different jobs: messenger RNA (m-RNA), ribosomal RNA (r-RNA) and transfer RNA (t-RNA).

```ng-figure
id: dna-helix
title: DNA double helix
svg:
<svg viewBox="0 0 320 150" role="img" aria-label="DNA double helix with base pairs" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M20.0,75.0 L22.0,78.6 L24.0,82.1 L26.0,85.6 L28.0,89.1 L30.0,92.4 L32.0,95.5 L34.0,98.5 L36.0,101.3 L38.0,103.9 L40.0,106.3 L42.0,108.4 L44.0,110.2 L46.0,111.8 L48.0,113.0 L50.0,114.0 L52.0,114.6 L54.0,115.0 L56.0,115.0 L58.0,114.6 L60.0,114.0 L62.0,113.0 L64.0,111.8 L66.0,110.2 L68.0,108.4 L70.0,106.3 L72.0,103.9 L74.0,101.3 L76.0,98.5 L78.0,95.5 L80.0,92.4 L82.0,89.1 L84.0,85.6 L86.0,82.1 L88.0,78.6 L90.0,75.0 L92.0,71.4 L94.0,67.9 L96.0,64.4 L98.0,60.9 L100.0,57.6 L102.0,54.5 L104.0,51.5 L106.0,48.7 L108.0,46.1 L110.0,43.7 L112.0,41.6 L114.0,39.8 L116.0,38.2 L118.0,37.0 L120.0,36.0 L122.0,35.4 L124.0,35.0 L126.0,35.0 L128.0,35.4 L130.0,36.0 L132.0,37.0 L134.0,38.2 L136.0,39.8 L138.0,41.6 L140.0,43.7 L142.0,46.1 L144.0,48.7 L146.0,51.5 L148.0,54.5 L150.0,57.6 L152.0,60.9 L154.0,64.4 L156.0,67.9 L158.0,71.4 L160.0,75.0 L162.0,78.6 L164.0,82.1 L166.0,85.6 L168.0,89.1 L170.0,92.4 L172.0,95.5 L174.0,98.5 L176.0,101.3 L178.0,103.9 L180.0,106.3 L182.0,108.4 L184.0,110.2 L186.0,111.8 L188.0,113.0 L190.0,114.0 L192.0,114.6 L194.0,115.0 L196.0,115.0 L198.0,114.6 L200.0,114.0 L202.0,113.0 L204.0,111.8 L206.0,110.2 L208.0,108.4 L210.0,106.3 L212.0,103.9 L214.0,101.3 L216.0,98.5 L218.0,95.5 L220.0,92.4 L222.0,89.1 L224.0,85.6 L226.0,82.1 L228.0,78.6 L230.0,75.0 L232.0,71.4 L234.0,67.9 L236.0,64.4 L238.0,60.9 L240.0,57.6 L242.0,54.5 L244.0,51.5 L246.0,48.7 L248.0,46.1 L250.0,43.7 L252.0,41.6 L254.0,39.8 L256.0,38.2 L258.0,37.0 L260.0,36.0 L262.0,35.4 L264.0,35.0 L266.0,35.0 L268.0,35.4 L270.0,36.0 L272.0,37.0 L274.0,38.2 L276.0,39.8 L278.0,41.6 L280.0,43.7 L282.0,46.1 L284.0,48.7 L286.0,51.5 L288.0,54.5 L290.0,57.6 L292.0,60.9 L294.0,64.4 L296.0,67.9 L298.0,71.4 L300.0,75.0" stroke-width="2.5"/><path d="M20.0,75.0 L22.0,71.4 L24.0,67.9 L26.0,64.4 L28.0,60.9 L30.0,57.6 L32.0,54.5 L34.0,51.5 L36.0,48.7 L38.0,46.1 L40.0,43.7 L42.0,41.6 L44.0,39.8 L46.0,38.2 L48.0,37.0 L50.0,36.0 L52.0,35.4 L54.0,35.0 L56.0,35.0 L58.0,35.4 L60.0,36.0 L62.0,37.0 L64.0,38.2 L66.0,39.8 L68.0,41.6 L70.0,43.7 L72.0,46.1 L74.0,48.7 L76.0,51.5 L78.0,54.5 L80.0,57.6 L82.0,60.9 L84.0,64.4 L86.0,67.9 L88.0,71.4 L90.0,75.0 L92.0,78.6 L94.0,82.1 L96.0,85.6 L98.0,89.1 L100.0,92.4 L102.0,95.5 L104.0,98.5 L106.0,101.3 L108.0,103.9 L110.0,106.3 L112.0,108.4 L114.0,110.2 L116.0,111.8 L118.0,113.0 L120.0,114.0 L122.0,114.6 L124.0,115.0 L126.0,115.0 L128.0,114.6 L130.0,114.0 L132.0,113.0 L134.0,111.8 L136.0,110.2 L138.0,108.4 L140.0,106.3 L142.0,103.9 L144.0,101.3 L146.0,98.5 L148.0,95.5 L150.0,92.4 L152.0,89.1 L154.0,85.6 L156.0,82.1 L158.0,78.6 L160.0,75.0 L162.0,71.4 L164.0,67.9 L166.0,64.4 L168.0,60.9 L170.0,57.6 L172.0,54.5 L174.0,51.5 L176.0,48.7 L178.0,46.1 L180.0,43.7 L182.0,41.6 L184.0,39.8 L186.0,38.2 L188.0,37.0 L190.0,36.0 L192.0,35.4 L194.0,35.0 L196.0,35.0 L198.0,35.4 L200.0,36.0 L202.0,37.0 L204.0,38.2 L206.0,39.8 L208.0,41.6 L210.0,43.7 L212.0,46.1 L214.0,48.7 L216.0,51.5 L218.0,54.5 L220.0,57.6 L222.0,60.9 L224.0,64.4 L226.0,67.9 L228.0,71.4 L230.0,75.0 L232.0,78.6 L234.0,82.1 L236.0,85.6 L238.0,89.1 L240.0,92.4 L242.0,95.5 L244.0,98.5 L246.0,101.3 L248.0,103.9 L250.0,106.3 L252.0,108.4 L254.0,110.2 L256.0,111.8 L258.0,113.0 L260.0,114.0 L262.0,114.6 L264.0,115.0 L266.0,115.0 L268.0,114.6 L270.0,114.0 L272.0,113.0 L274.0,111.8 L276.0,110.2 L278.0,108.4 L280.0,106.3 L282.0,103.9 L284.0,101.3 L286.0,98.5 L288.0,95.5 L290.0,92.4 L292.0,89.1 L294.0,85.6 L296.0,82.1 L298.0,78.6 L300.0,75.0" class="u" stroke-width="2.5"/><path d="M30,92.4 L30,57.6" stroke-width="1"/><path d="M47,112.4 L47,37.6" stroke-width="1"/><path d="M64,111.8 L64,38.2" stroke-width="1"/><path d="M81,90.7 L81,59.3" stroke-width="1"/><path d="M98,60.9 L98,89.1" stroke-width="1"/><path d="M115,39.0 L115,111.0" stroke-width="1"/><path d="M132,37.0 L132,113.0" stroke-width="1"/><path d="M149,56.0 L149,94.0" stroke-width="1"/><path d="M166,85.6 L166,64.4" stroke-width="1"/><path d="M183,109.3 L183,40.7" stroke-width="1"/><path d="M200,114.0 L200,36.0" stroke-width="1"/><path d="M217,97.0 L217,53.0" stroke-width="1"/><path d="M234,67.9 L234,82.1" stroke-width="1"/><path d="M251,42.6 L251,107.4" stroke-width="1"/><path d="M268,35.4 L268,114.6" stroke-width="1"/><path d="M285,50.1 L285,99.9" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="50" y="79" font-size="8">A=T</text><text x="118" y="79" font-size="8">G≡C</text><text x="186" y="79" font-size="8">T=A</text><text x="271" y="79" font-size="8">C≡G</text><text x="160" y="144" text-anchor="middle" font-size="9">sugar–phosphate backbones with base pairs as rungs</text></g>
</svg>
caption: Figure 10.3 Two antiparallel strands twisted round each other; A pairs with T (two H-bonds), G with C (three).
part: 55, 40 | Sugar–phosphate backbone | Deoxyribose units linked by phosphodiester bonds.
part: 55, 112 | Second strand | Runs the opposite way and is complementary.
part: 47, 75 | Base pair | A=T (2 H-bonds) or G≡C (3 H-bonds) across the helix.
```

:::skeleton Worked example: the complementary strand
*One strand of DNA has the base sequence A T G C T T G A. Write the sequence of the complementary strand, and state the rule used.*

Rule: A pairs with T, and G pairs with C. [1]

Complementary strand: **T A C G A A C T** [1]
:::

Nucleic acids have two functions. **Replication:** before a cell divides, the two strands separate and each builds a new partner, so both daughter cells receive identical DNA. **Protein synthesis:** the message in DNA is copied onto RNA, and RNA directs the assembly of amino acids in the right order.

```ng-draw
id: draw-dna
title: Sketch the DNA double helix and label a base pair
svg: ref: notes#dna-helix
time: 3
```

```ng-compare
id: dna-vs-rna
title: DNA vs RNA
cols: DNA | RNA
row: Sugar | β-D-2-deoxyribose | β-D-ribose
row: Bases | A, G, C, T | A, G, C, U
row: Strands | double helix | single strand
row: Job | stores genetic information | protein synthesis (m-, r-, t-RNA)
```

```ng-numerical
id: chargaff
title: Base percentages from pairing
question: A sample of double-stranded DNA contains {{a}}% adenine. What percentage of its bases is guanine?
var: a | 15 | 35 | 1
answer: 50 - a
unit: %
dp: 0
step: A pairs with T, so T = A = {{a}}%
step: A + T = {{2*a}}%, so G + C = {{100-2*a}}%
step: G = C, so G = **{{50-a}}%**
```

```ng-mnemonic
id: pure-as-gold
title: Purines and pyrimidines
trick: **Pure As Gold** · **CUT the Py**
meaning: Purines (two rings): **A**denine and **G**uanine.
meaning: Pyrimidines (one ring): **C**ytosine, **U**racil, **T**hymine.
prompt: Which bases are purines?
```

**In one breath:** A nucleotide is sugar + base + phosphate, joined 5′ to 3′ by phosphodiester links. DNA has deoxyribose and thymine and is a double helix with A=T and G≡C pairing; RNA has ribose and uracil and is single-stranded.

## Hormones

Hormones are chemical messengers. They are made in the **endocrine glands**, released straight into the bloodstream, and carried to the organ where they act. Chemically they are a mixed group: **steroids** such as the sex hormones oestrogens and androgens; **polypeptides** such as insulin; and **amino acid derivatives** such as adrenaline and thyroxine.

Their job is to keep the body's activities in balance. **Insulin** and **glucagon**, both from the pancreas, hold blood glucose within a narrow range: insulin lowers it when it rises, glucagon raises it when it falls. **Adrenaline** and noradrenaline prepare the body to respond to stress. **Thyroxine**, made in the thyroid gland, contains iodine. Too little of it, hypothyroidism, causes lethargy and weight gain, and lack of iodine in the diet enlarges the thyroid gland (goitre); that is why table salt is iodised. Too much, hyperthyroidism, speeds everything up.

**In one breath:** Hormones are messengers from endocrine glands carried by blood: steroids, polypeptides or amino acid derivatives. Insulin and glucagon balance blood glucose; thyroxine contains iodine, and its shortage is linked to hypothyroidism and goitre.
