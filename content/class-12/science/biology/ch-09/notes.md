# Ch 9 · Biotechnology: Principles and Processes

Biotechnology uses living organisms, or enzymes from them, to make products and processes useful to humans. This chapter is about the toolkit of modern biotechnology: cutting DNA with restriction enzymes, separating fragments, carrying genes in vectors, putting them into host cells, copying them by PCR and growing the hosts in large bioreactors. Learn the sequence of steps and the names of the tools; the pBR322 map and the PCR cycle are the favourite diagrams.

## What biotechnology is

The European Federation of Biotechnology defines biotechnology as the integration of natural science and organisms, cells, parts of them and molecular analogues for products and services. Two core techniques made modern biotechnology possible: **genetic engineering**, which alters the chemistry of the genetic material (DNA or RNA) and introduces it into a host to change the host's phenotype, and **bioprocess engineering**, which keeps a sterile, contamination-free environment so that only the desired microbe or cell grows in large numbers.

Traditional hybridisation mixes many genes, desirable and undesirable together. Genetic engineering moves **only the desired genes**. But a piece of DNA put into a cell on its own will not multiply; it must be part of a chromosome or of a DNA molecule with an **origin of replication (ori)**, a sequence from where replication starts. So genes are linked to an ori-containing carrier.

The first recombinant DNA was made in **1972** by **Stanley Cohen and Herbert Boyer**, who cut a piece of DNA carrying an **antibiotic-resistance gene** and linked it to the native plasmid of ***Salmonella typhimurium***. Cutting was done by a restriction enzyme ("molecular scissors") and joining by **DNA ligase**. When this recombinant plasmid was put into *E. coli*, it replicated using the host's DNA polymerase and made many copies: the resistance gene was **cloned**.

Making a genetically modified organism has three basic steps: (1) identifying DNA with the desirable genes, (2) introducing it into the host, and (3) maintaining it in the host and transferring it to the progeny.

```ng-steps
id: ch09-gmo-steps
title: Three steps to a genetically modified organism
step: **Identify** the DNA carrying the desirable gene(s).
step: **Introduce** it into a suitable host, linked to a carrier with an **ori**.
step: **Maintain** it in the host and **transfer** it to the progeny.
```

**In one breath:** Biotechnology rests on genetic engineering and sterile bioprocess engineering. DNA needs an ori to multiply. Cohen and Boyer (1972) made the first recombinant DNA using a *Salmonella typhimurium* plasmid; restriction enzymes cut, ligase joins.

## Restriction enzymes

In **1963**, two enzymes responsible for restricting the growth of bacteriophages in *E. coli* were isolated: one added methyl groups to DNA, the other cut DNA. The cutting one is a **restriction endonuclease**. The first restriction endonuclease studied, **Hind II**, always cut DNA at a particular point by recognising a specific sequence of **six base pairs**, its **recognition sequence**. Today more than 900 restriction enzymes are known, from over 230 strains of bacteria.

**Naming.** The first letter comes from the genus and the next two from the species of the bacterium; then comes the strain, and a Roman numeral gives the order of isolation. In **EcoRI**: *E* = *Escherichia*, *co* = *coli*, *R* = strain RY13, *I* = first enzyme isolated from that strain.

Nucleases are of two kinds: **exonucleases** remove nucleotides from the ends of DNA; **endonucleases** cut at specific positions within the DNA. Each restriction endonuclease inspects the whole DNA and binds where it finds its recognition sequence, which is a **palindrome**: a base sequence that reads the same on the two strands when both are read in the same direction (5′→3′). For EcoRI:

5′ — G A A T T C — 3′<br>
3′ — C T T A A G — 5′

Restriction enzymes cut each strand a little away from the centre of the palindrome, between the same two bases on both strands (for EcoRI, between G and A). This leaves single-stranded overhangs at the ends, called **sticky ends**, because they form hydrogen bonds with complementary cut ends. When the vector and the source DNA are cut with the **same enzyme**, they get the same kind of sticky ends and can be joined end-to-end by **DNA ligase**.

```ng-figure
id: ch09-ecori-sticky-ends
title: EcoRI cuts a palindrome and leaves sticky ends
svg:
<svg viewBox="0 0 330 116" role="img" aria-label="EcoRI recognition sequence GAATTC cut to give sticky ends" fill="none" stroke="currentColor">
<rect class="uf" x="32" y="28" width="120" height="50" rx="6" fill-opacity="0.15" stroke="none"/>
<path stroke="#E0B400" stroke-width="2" stroke-dasharray="4 2" d="M51,22V54H131V84"/>
<path stroke-width="1.2" d="M168,56h18M180,52l6,4l-6,4"/>
<g fill="currentColor" stroke="none" font-size="13" font-family="monospace"><text x="36" y="45">G</text><text x="56" y="45">A</text><text x="76" y="45">A</text><text x="96" y="45">T</text><text x="116" y="45">T</text><text x="136" y="45">C</text><text x="36" y="73">C</text><text x="56" y="73">T</text><text x="76" y="73">T</text><text x="96" y="73">A</text><text x="116" y="73">A</text><text x="136" y="73">G</text><text x="196" y="45">G</text><text x="196" y="73">CTTAA</text><text x="262" y="45">AATTC</text><text x="302" y="73">G</text></g>
<g fill="currentColor" stroke="none" font-size="9"><text x="14" y="44">5′</text><text x="154" y="44">3′</text><text x="14" y="72">3′</text><text x="154" y="72">5′</text><text x="20" y="104">EcoRI cuts between G and A on each strand</text><text x="214" y="104">Sticky ends</text></g>
</svg>
caption: GAATTC reads the same 5′→3′ on both strands (a palindrome). EcoRI cuts between G and A on each strand, leaving single-stranded AATT overhangs.
part: 92, 18 | Recognition sequence | GAATTC: a six-base palindrome.
part: 51, 14 | Cut on the top strand | Between G and A.
part: 140, 84 | Cut on the bottom strand | Also between G and A, read 5′→3′.
part: 254, 66 | Sticky end (left fragment) | Single-stranded overhang that pairs with a matching cut end.
part: 282, 24 | Sticky end (right fragment) | AATT overhang; DNA ligase seals matching ends.
```

:::tip Same enzyme for both
Vector and foreign DNA must be cut with the same restriction enzyme so that their sticky ends match.
:::

```ng-fill
id: ch09-ecori-name
title: What each letter of EcoRI means
cols: Letters | Stand for
row: E | [[genus: *Escherichia*]]
row: co | [[species: *coli*]]
row: R | [[strain: RY13]]
row: I | [[first enzyme isolated from that strain]]
```

```ng-compare
id: ch09-exo-vs-endo
title: Exo­nuclease vs endonuclease
cols: Exo­nuclease | Endo­nuclease
row: Cuts | nucleo­tides off the ends of DNA | at specific positions inside DNA
row: Example | — | EcoRI, Hind II (restriction endonucleases)
```

```ng-draw
id: ch09-draw-ecori
title: Show EcoRI cutting GAATTC
svg: ref: notes#ch09-ecori-sticky-ends
time: 3
```

**In one breath:** Restriction endonucleases recognise palindromes (EcoRI: GAATTC) and cut to leave sticky ends; naming = genus, species, strain, order (EcoRI). Cut vector and insert with the same enzyme, then seal with DNA ligase.

## Separating DNA: gel electrophoresis

Cutting DNA gives fragments of different sizes, which are separated by **agarose gel electrophoresis**. DNA is negatively charged, so in an electric field it moves towards the **anode** (positive electrode). Agarose, a natural polymer extracted from **sea weeds**, acts as a sieve: **smaller fragments move farther**. The separated DNA is made visible by staining with **ethidium bromide** and exposing to UV light; DNA shows as **bright orange bands**. The band of interest is cut out of the gel and the DNA extracted from it (**elution**). Purified fragments are then used to make recombinant DNA.

```ng-steps
id: ch09-gel
title: Agarose gel electrophoresis
step: Load the DNA fragments into wells at the **cathode** end of an agarose gel.
step: Switch on the current: negatively charged DNA moves towards the **anode**.
step: The gel acts as a sieve: **smaller fragments travel farther**.
step: Stain with **ethidium bromide** and view under **UV**: bright **orange bands**.
step: **Elute**: cut out the band of interest and extract the DNA for cloning.
```

**In one breath:** DNA (negative) runs towards the anode through agarose (from sea weed); small fragments go farther; ethidium bromide + UV shows orange bands, which are cut out and eluted.

## Cloning vectors and pBR322

Plasmids and bacteriophages replicate inside bacterial cells independently of the chromosome, so they make good vectors: an inserted gene is copied along with them. A cloning vector needs:

- **Origin of replication (ori)**: where replication starts; it also controls the **copy number** of the linked DNA.
- **Selectable marker**: a gene that lets us identify and eliminate **non-transformants** and keep **transformants**. Genes for resistance to antibiotics such as **ampicillin, chloramphenicol, tetracycline or kanamycin** are used in *E. coli*.
- **Cloning sites**: recognition sites for restriction enzymes, preferably **single** sites, since several sites would cut the vector into many pieces.
- **Small size**, for easy handling.

**pBR322** is a commonly used *E. coli* plasmid vector. It has an **ori**, a **rop** gene (codes for proteins involved in plasmid replication), and two antibiotic-resistance genes, **ampᴿ** and **tetᴿ**, with several restriction sites (EcoRI, ClaI, HindIII, BamHI, SalI, PvuII, PstI, PvuI).

```ng-figure
id: ch09-pbr322
title: pBR322 cloning vector
svg:
<svg viewBox="0 0 330 200" role="img" aria-label="Plasmid pBR322 map">
<circle cx="110" cy="95" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
<path class="u" fill="none" stroke-width="7" d="M125.5,37A60,60,0,0,1,166.4,115.5"/>
<path fill="none" stroke="#E0B400" stroke-width="7" d="M53.6,115.5A60,60,0,0,1,75.6,45.9"/>
<path fill="none" stroke="currentColor" stroke-width="7" stroke-opacity="0.5" d="M99.6,154.1A60,60,0,0,1,75.6,144.1"/>
<path fill="none" stroke="currentColor" stroke-width="7" stroke-opacity="0.25" d="M144.4,144.1A60,60,0,0,1,115.2,154.8"/>
<path stroke="currentColor" stroke-width="1" d="M110,39V29M122.5,36.3L123.7,30.4M135.4,40.6L137.9,35.2M159.1,60.6L164,57.1M169.1,84.6L175,83.5M140,147L143,152.2M50.2,89.8L44.2,89.2M58,67L52.8,62"/>
<g font-size="9" fill="currentColor"><text x="106" y="24" text-anchor="end">EcoRI</text><text x="124" y="22">ClaI</text><text x="142" y="34">HindIII</text><text x="168" y="56">BamHI</text><text x="179" y="86">SalI</text><text x="146" y="164">PvuII</text><text x="40" y="92" text-anchor="end">PstI</text><text x="48" y="60" text-anchor="end">PvuI</text><text x="132" y="82">tetᴿ</text><text x="64" y="84">ampᴿ</text><text x="84" y="138">ori</text><text x="118" y="140">rop</text><text x="110" y="98" text-anchor="middle" font-weight="bold">pBR322</text></g>
<g font-size="9" fill="currentColor"><text x="214" y="120">BamHI, SalI → in tetᴿ</text><text x="214" y="134">PstI, PvuI → in ampᴿ</text><text x="214" y="148">ori: replication start</text><text x="214" y="162">rop: replication proteins</text></g>
</svg>
caption: pBR322: two resistance genes (ampᴿ, tetᴿ) carrying restriction sites, ori and rop. Inserting DNA at BamHI or SalI inactivates tetᴿ; at PstI or PvuI inactivates ampᴿ.
part: 168, 88 | tetᴿ | Tetracycline-resistance gene; has BamHI and SalI sites.
part: 62, 78 | ampᴿ | Ampicillin-resistance gene; has PstI and PvuI sites.
part: 88, 150 | ori | Origin of replication; controls copy number.
part: 130, 150 | rop | Codes for proteins involved in plasmid replication.
part: 110, 34 | EcoRI site | One of the single restriction sites outside the resistance genes.
part: 164, 59 | BamHI site | Insertion here inactivates tetᴿ.
```

**Selecting recombinants.** Suppose foreign DNA is ligated at the **BamHI** site of tetᴿ. Recombinant plasmids lose tetracycline resistance but keep ampicillin resistance. Cells are first grown on ampicillin (only transformants survive), then **replica-plated** onto tetracycline: recombinants **do not grow** there, non-recombinants do. Losing a gene's function because foreign DNA has been inserted into it is **insertional inactivation**.

A simpler method uses a gene for **β-galactosidase** as the insertion site. Non-recombinant colonies make the enzyme and turn **blue** on a medium with a chromogenic substrate; recombinants, whose gene is inactivated, stay **colourless (white)**. This lets recombinants be picked out on a single plate.

```ng-steps
id: ch09-insertional-inactivation
title: Picking recombinants by insertional inactivation
step: Insert foreign DNA at the **BamHI** site, inside **tetᴿ** of pBR322.
step: Transform *E. coli* and plate on **ampicillin**: only transformed cells (recombinant or not) grow.
step: **Replica-plate** onto **tetracycline**.
step: Colonies that **fail to grow** on tetracycline are the **recombinants** (tetᴿ inactivated).
```

```ng-compare
id: ch09-antibiotic-vs-blue-white
title: Antibiotic selection vs blue–white screening
cols: Two antibiotics | Blue–white
row: Insert goes into | an antibiotic-re­sistance gene | the β-galacto­sidase gene
row: Re­combinants | fail to grow on the 2nd antibiotic | stay white
row: Non-re­combinants | grow on both | turn blue
row: Plates | two (replica plating) | one
```

**Vectors for plants and animals.** *Agrobacterium tumefaciens*, a plant pathogen, transfers a piece of DNA called **T-DNA** from its **Ti plasmid** (tumour-inducing) into dicot plant cells, turning them into tumour cells. Scientists have **disarmed** the Ti plasmid so it no longer causes tumours but still delivers genes of interest. Similarly, **retroviruses**, which transform normal animal cells into cancerous ones, are disarmed and used to deliver genes into animal cells.

```ng-mnemonic
id: ch09-vector-features
title: Four features of a cloning vector
trick: **O**ur **S**chool **C**lub is **S**mall
meaning: **O**ri (copy number), **S**electable marker, **C**loning sites (single), **S**mall size.
prompt: List the features a good cloning vector needs.
```

```ng-compare
id: ch09-ti-vs-retrovirus
title: Disarmed vectors for plants and animals
cols: Plants | Animals
row: Pathogen | *Agro­bacterium tume­faciens* | retro­viruses
row: In nature | Ti plasmid sends T-DNA into dicot cells → tumours | turns normal cells cancerous
row: As a vector | disarmed Ti plasmid delivers the gene of interest | disarmed retrovirus delivers genes into animal cells
```

```ng-draw
id: ch09-draw-pbr322
title: Draw pBR322 and mark its sites
svg: ref: notes#ch09-pbr322
time: 5
```

**In one breath:** A vector needs ori (copy number), a selectable marker (antibiotic resistance), single cloning sites and small size. pBR322 has ampᴿ, tetᴿ, ori and rop. Insertional inactivation (tetᴿ at BamHI, or blue–white β-galactosidase) picks out recombinants. Disarmed Ti plasmids and retroviruses carry genes into plants and animals.

## Getting DNA into a host

DNA is hydrophilic and cannot pass through cell membranes, so host cells must be made **competent** to take it up.

- **Chemical method**: bacterial cells are treated with a specific concentration of a **divalent cation such as calcium**, which increases the efficiency of DNA entry through pores in the cell wall. Cells are incubated with the recombinant DNA **on ice**, given a brief **heat shock at 42 °C**, and returned to ice.
- **Micro-injection**: recombinant DNA is injected directly into the **nucleus of an animal cell**.
- **Biolistics (gene gun)**: plant cells are bombarded with high-velocity **micro-particles of gold or tungsten** coated with DNA.
- **Disarmed pathogen vectors**: when allowed to infect a cell, they transfer the recombinant DNA into the host.

```ng-steps
id: ch09-competence
title: Making E. coli take up DNA
step: Treat cells with a divalent cation, **Ca²⁺**: DNA can enter through pores in the wall.
step: Incubate the cells with recombinant DNA **on ice**.
step: Give a brief **heat shock at 42 °C**.
step: Put them **back on ice**. Some cells have now taken up the plasmid.
```

**In one breath:** Competence by Ca²⁺ treatment with ice–heat shock (42 °C)–ice; micro-injection for animal nuclei; gene gun with gold or tungsten particles for plants; disarmed pathogens as carriers.

## The process of recombinant DNA technology

**1. Isolating DNA.** DNA is enclosed in membranes, so cells are broken open with enzymes: **lysozyme** (bacteria), **cellulase** (plant cells), **chitinase** (fungi). RNA is removed with **ribonuclease** and proteins with **protease**. Adding **chilled ethanol** precipitates purified DNA as a collection of fine threads in suspension.

**2. Cutting DNA at specific locations.** Purified DNA is incubated with the restriction enzyme at optimal conditions; agarose gel electrophoresis checks the digestion. The vector is cut with the same enzyme.

**3. Amplifying the gene of interest by PCR.** **PCR** (polymerase chain reaction) makes many copies of a gene in a test tube using two sets of **primers** (small, chemically synthesised oligonucleotides complementary to the ends of the target region) and a DNA polymerase. Each cycle has three steps:

- **Denaturation**: heating separates the two DNA strands.
- **Annealing**: on cooling, the primers bind to their complementary sites on the single strands.
- **Extension**: DNA polymerase extends the primers, using the nucleotides provided and the strand as template.

Repeated many times, PCR amplifies a DNA segment about **a billion times**. The enzyme used is **Taq polymerase**, isolated from the bacterium ***Thermus aquaticus***, which stays active at the high temperatures used to separate the strands.

```ng-figure
id: ch09-pcr
title: One PCR cycle
svg:
<svg viewBox="0 0 330 150" role="img" aria-label="Three steps of one PCR cycle">
<g font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="bold"><text x="55" y="14">1 Denaturation</text><text x="165" y="14">2 Annealing</text><text x="275" y="14">3 Extension</text></g>
<g font-size="9.5" fill="currentColor" text-anchor="middle"><text x="55" y="26">heat (about 94 °C)</text><text x="165" y="26">cool; primers bind</text><text x="275" y="26">Taq polymerase</text></g>
<path fill="none" stroke="currentColor" stroke-width="2" d="M10,66H40Q60,66,100,44M10,74H40Q60,74,100,96M120,50H210M120,94H210M230,50H320M230,94H320"/>
<path stroke="#E0B400" stroke-width="4" d="M190,58H210M120,86H140M300,58H320M230,86H250"/>
<path class="u" fill="none" stroke-width="2" d="M298,58H246M252,86H304"/>
<path class="uf" d="M244,58l6,-4v8zM306,86l-6,-4v8z"/>
<g font-size="9.5" fill="currentColor"><text x="12" y="112">strands separate</text><text x="146" y="74">primers (yellow)</text><text x="246" y="74">grow 5′→3′</text></g><g font-size="9.5" fill="currentColor" text-anchor="middle"><text x="165" y="130">Repeat about 30 cycles</text><text x="165" y="144">→ the target DNA is amplified about a billion times</text></g>
</svg>
caption: One PCR cycle: denature, anneal primers, extend with thermostable Taq polymerase; each cycle roughly doubles the target DNA.
part: 55, 60 | Denaturation | Heat (about 94 °C) separates the two strands.
part: 200, 58 | Primer | Short synthetic oligonucleotide that binds the end of the target.
part: 165, 90 | Annealing | On cooling, primers bind their complementary sites.
part: 275, 58 | Extension | Taq polymerase extends the primers 5′→3′.
```

**4. Inserting recombinant DNA into the host.** Competent cells take up the recombinant DNA. If it carries an antibiotic-resistance gene (say, ampicillin), only transformed cells grow on ampicillin plates, so they can be selected.

**5. Obtaining the foreign gene product.** When the foreign gene is expressed under suitable conditions, the host makes a **recombinant protein**. To get large amounts, cells are grown in large volumes. In a **continuous culture** system, used medium is drained from one side while fresh medium is added from the other, keeping cells in their **physiologically most active log (exponential) phase** and yielding more biomass and product.

```ng-steps
id: ch09-rdna-process
title: Recombinant DNA technology, start to finish
step: **Isolate DNA**: lysozyme / cellulase / chitinase open the cells; RNase and protease clean it; **chilled ethanol** precipitates it.
step: **Cut** source DNA and vector with the **same restriction enzyme**.
step: **Amplify** the gene of interest by **PCR**.
step: **Ligate** the gene into the vector with DNA ligase.
step: **Insert** the recombinant DNA into competent host cells and **select** transformants.
step: **Express** the gene: grow the host on a large scale (continuous culture) and collect the recombinant protein.
```

```ng-numerical
id: ch09-pcr-copies
title: How fast PCR multiplies DNA
question: A PCR starts with {{M}} copies of a target DNA. Assuming perfect doubling, how many copies are there after {{c}} cycles?
var: M | 1 | 10 | 1
var: c | 10 | 30 | 1
answer: M*2^c
unit: copies
tol: 1
step: Each cycle doubles the target, so copies $=M\times2^{c}$.
step: $={{M}}\times2^{ {{c}} }=$ **{{M*2^c:0}} copies**.
```

```ng-fill
id: ch09-cell-wall-enzymes
title: Enzymes that open cells for DNA isolation
cols: Source | Enzyme
row: Bacteria | [[lysozyme]]
row: Plant cells | [[cellulase]]
row: Fungi | [[chitinase]]
row: Removes RNA | [[ribonuclease]]
row: Removes proteins | [[protease]]
```

```ng-mnemonic
id: ch09-pcr-steps
title: The three steps of a PCR cycle
trick: **D**on't **A**sk, **E**xtend: **D**-**A**-**E**
meaning: **D**enaturation (heat) → **A**nnealing (primers bind) → **E**xtension (Taq polymerase, from *Thermus aquaticus*).
prompt: Name the three steps of a PCR cycle in order.
```

```ng-mnemonic
id: ch09-lysis-enzymes
title: Which enzyme opens which cell?
trick: **B**ad **L**uck · **P**oor **C**hap · **F**unny **C**hap
meaning: **B**acteria–**L**ysozyme; **P**lants–**C**ellulase; **F**ungi–**C**hitinase.
prompt: Which enzyme is used to break fungal cells?
```

```ng-draw
id: ch09-draw-pcr
title: Draw one PCR cycle
svg: ref: notes#ch09-pcr
time: 4
```

**In one breath:** Isolate DNA (lysozyme, cellulase, chitinase; RNase, protease; chilled ethanol) → cut with restriction enzyme → amplify by PCR (denature, anneal, extend; Taq polymerase from *Thermus aquaticus*; about a billion copies) → insert into competent host and select → express the recombinant protein, ideally in continuous culture.

## Bioreactors and downstream processing

Large-scale production needs **bioreactors**: vessels of **100–1000 litres** in which raw materials are converted biologically into products. A bioreactor provides optimal conditions: temperature, pH, substrate, salts, vitamins and oxygen.

The commonest is the **stirred-tank bioreactor**: usually cylindrical or with a curved base to help mix the contents. A **stirrer** mixes evenly and spreads oxygen. In a **sparged** stirred-tank bioreactor, sterile air is bubbled through to increase the area for oxygen transfer. A bioreactor has an **agitator system**, an **oxygen delivery system**, a **foam control** system, a **temperature control** system, a **pH control** system and **sampling ports** to withdraw small volumes of culture periodically.

```ng-figure
id: ch09-bioreactor
title: Stirred-tank bioreactor
svg:
<svg viewBox="0 0 330 210" role="img" aria-label="Sparged stirred-tank bioreactor" fill="none" stroke="currentColor">
<rect x="110" y="40" width="110" height="150" rx="14" stroke-width="1.6"/>
<rect class="uf" x="111" y="74" width="108" height="115" rx="12" fill-opacity="0.2" stroke="none"/>
<rect x="102" y="64" width="126" height="118" rx="16" stroke-dasharray="4 3"/>
<rect x="150" y="10" width="30" height="18" stroke-width="1.3"/>
<path stroke-width="1.6" d="M165,28V170"/>
<path class="u" stroke-width="4" d="M141,118H189M141,158H189"/>
<path stroke-width="1.4" d="M40,184H200M120,40V22H70M206,40V104M220,150H258"/>
<g fill="#E0B400" stroke="none"><circle cx="140" cy="174" r="2.5"/><circle cx="160" cy="166" r="2.5"/><circle cx="182" cy="172" r="2.5"/><circle cx="150" cy="140" r="2.5"/><circle cx="176" cy="136" r="2.5"/></g>
<g fill="currentColor" stroke="none" font-size="10"><text x="188" y="22">Motor</text><text x="4" y="178">Sterile air in</text><text x="20" y="26">Exhaust gas</text><text x="232" y="72">pH and temperature</text><text x="232" y="84">probes</text><text x="262" y="154">Sampling</text><text x="262" y="166">port</text><text x="232" y="112">Heating/cooling</text><text x="232" y="124">jacket</text></g>
</svg>
caption: Sparged stirred-tank bioreactor: a motor turns the impellers; sterile air bubbles in from the sparger; probes and a jacket control pH and temperature; a sampling port lets culture be withdrawn. Our simplified drawing.
part: 165, 19 | Motor | Drives the stirrer shaft.
part: 165, 118 | Impellers (stirrer) | Mix the culture evenly and spread oxygen.
part: 120, 184 | Sparger | Bubbles sterile air into the culture for more oxygen transfer.
part: 206, 92 | Probes | Monitor and control pH and temperature.
part: 104, 140 | Jacket | Temperature control by heating or cooling.
part: 238, 150 | Sampling port | Withdraw small volumes of culture to check it.
part: 140, 92 | Culture | Cells growing in medium, kept in log phase.
```

After biosynthesis, the product goes through **downstream processing** before it can be marketed: **separation and purification**, then **formulation** with suitable preservatives. For drugs, the formulation must pass clinical trials, and strict **quality control** testing is needed for each product.

```ng-steps
id: ch09-downstream
title: Downstream processing
step: **Separation**: take the product out of the culture.
step: **Purification**: remove everything else.
step: **Formulation** with suitable preservatives.
step: **Clinical trials** (for drugs) and strict **quality control** before marketing.
```

```ng-draw
id: ch09-draw-bioreactor
title: Draw a stirred-tank bioreactor
svg: ref: notes#ch09-bioreactor
time: 5
```

**In one breath:** Bioreactors (100–1000 L), mostly stirred-tank (sparged for better oxygen), control temperature, pH, foam and oxygen and have sampling ports. Downstream processing = separation, purification, formulation and quality control (clinical trials for drugs).
