# Ch 9 · Biotechnology: Principles and Processes

Biotechnology uses living organisms, or enzymes from them, to make products and processes useful to humans. This chapter is about the toolkit of modern biotechnology: cutting DNA with restriction enzymes, separating fragments, carrying genes in vectors, putting them into host cells, copying them by PCR and growing the hosts in large bioreactors. Learn the sequence of steps and the names of the tools; the pBR322 map and the PCR cycle are the favourite diagrams.

## What biotechnology is

The European Federation of Biotechnology defines biotechnology as the integration of natural science and organisms, cells, parts of them and molecular analogues for products and services. Two core techniques made modern biotechnology possible: **genetic engineering**, which alters the chemistry of the genetic material (DNA or RNA) and introduces it into a host to change the host's phenotype, and **bioprocess engineering**, which keeps a sterile, contamination-free environment so that only the desired microbe or cell grows in large numbers.

Traditional hybridisation mixes many genes, desirable and undesirable together. Genetic engineering moves **only the desired genes**. But a piece of DNA put into a cell on its own will not multiply; it must be part of a chromosome or of a DNA molecule with an **origin of replication (ori)**, a sequence from where replication starts. So genes are linked to an ori-containing carrier.

The first recombinant DNA was made in **1972** by **Stanley Cohen and Herbert Boyer**, who cut a piece of DNA carrying an **antibiotic-resistance gene** and linked it to the native plasmid of ***Salmonella typhimurium***. Cutting was done by a restriction enzyme ("molecular scissors") and joining by **DNA ligase**. When this recombinant plasmid was put into *E. coli*, it replicated using the host's DNA polymerase and made many copies: the resistance gene was **cloned**.

Making a genetically modified organism has three basic steps: (1) identifying DNA with the desirable genes, (2) introducing it into the host, and (3) maintaining it in the host and transferring it to the progeny.

**In one breath:** Biotechnology rests on genetic engineering and sterile bioprocess engineering. DNA needs an ori to multiply. Cohen and Boyer (1972) made the first recombinant DNA using a *Salmonella typhimurium* plasmid; restriction enzymes cut, ligase joins.

## Restriction enzymes

In **1963**, two enzymes responsible for restricting the growth of bacteriophages in *E. coli* were isolated: one added methyl groups to DNA, the other cut DNA. The cutting one is a **restriction endonuclease**. The first restriction endonuclease studied, **Hind II**, always cut DNA at a particular point by recognising a specific sequence of **six base pairs**, its **recognition sequence**. Today more than 900 restriction enzymes are known, from over 230 strains of bacteria.

**Naming.** The first letter comes from the genus and the next two from the species of the bacterium; then comes the strain, and a Roman numeral gives the order of isolation. In **EcoRI**: *E* = *Escherichia*, *co* = *coli*, *R* = strain RY13, *I* = first enzyme isolated from that strain.

Nucleases are of two kinds: **exonucleases** remove nucleotides from the ends of DNA; **endonucleases** cut at specific positions within the DNA. Each restriction endonuclease inspects the whole DNA and binds where it finds its recognition sequence, which is a **palindrome**: a base sequence that reads the same on the two strands when both are read in the same direction (5′→3′). For EcoRI:

5′ — G A A T T C — 3′<br>
3′ — C T T A A G — 5′

Restriction enzymes cut each strand a little away from the centre of the palindrome, between the same two bases on both strands (for EcoRI, between G and A). This leaves single-stranded overhangs at the ends, called **sticky ends**, because they form hydrogen bonds with complementary cut ends. When the vector and the source DNA are cut with the **same enzyme**, they get the same kind of sticky ends and can be joined end-to-end by **DNA ligase**.

:::tip Same enzyme for both
Vector and foreign DNA must be cut with the same restriction enzyme so that their sticky ends match.
:::

**In one breath:** Restriction endonucleases recognise palindromes (EcoRI: GAATTC) and cut to leave sticky ends; naming = genus, species, strain, order (EcoRI). Cut vector and insert with the same enzyme, then seal with DNA ligase.

## Separating DNA: gel electrophoresis

Cutting DNA gives fragments of different sizes, which are separated by **agarose gel electrophoresis**. DNA is negatively charged, so in an electric field it moves towards the **anode** (positive electrode). Agarose, a natural polymer extracted from **sea weeds**, acts as a sieve: **smaller fragments move farther**. The separated DNA is made visible by staining with **ethidium bromide** and exposing to UV light; DNA shows as **bright orange bands**. The band of interest is cut out of the gel and the DNA extracted from it (**elution**). Purified fragments are then used to make recombinant DNA.

**In one breath:** DNA (negative) runs towards the anode through agarose (from sea weed); small fragments go farther; ethidium bromide + UV shows orange bands, which are cut out and eluted.

## Cloning vectors and pBR322

Plasmids and bacteriophages replicate inside bacterial cells independently of the chromosome, so they make good vectors: an inserted gene is copied along with them. A cloning vector needs:

- **Origin of replication (ori)**: where replication starts; it also controls the **copy number** of the linked DNA.
- **Selectable marker**: a gene that lets us identify and eliminate **non-transformants** and keep **transformants**. Genes for resistance to antibiotics such as **ampicillin, chloramphenicol, tetracycline or kanamycin** are used in *E. coli*.
- **Cloning sites**: recognition sites for restriction enzymes, preferably **single** sites, since several sites would cut the vector into many pieces.
- **Small size**, for easy handling.

**pBR322** is a commonly used *E. coli* plasmid vector. It has an **ori**, a **rop** gene (codes for proteins involved in plasmid replication), and two antibiotic-resistance genes, **ampᴿ** and **tetᴿ**, with several restriction sites (EcoRI, ClaI, HindIII, BamHI, SalI, PvuII, PstI, PvuI).

<figure class="fig">
<svg viewBox="0 0 330 200" role="img" aria-label="Plasmid pBR322 map">
<circle cx="110" cy="95" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
<path fill="none" stroke="#1F5FAD" stroke-width="7" d="M125.5,37A60,60,0,0,1,166.4,115.5"/>
<path fill="none" stroke="#E0B400" stroke-width="7" d="M53.6,115.5A60,60,0,0,1,75.6,45.9"/>
<path fill="none" stroke="currentColor" stroke-width="7" stroke-opacity="0.5" d="M99.6,154.1A60,60,0,0,1,75.6,144.1"/>
<path fill="none" stroke="currentColor" stroke-width="7" stroke-opacity="0.25" d="M144.4,144.1A60,60,0,0,1,115.2,154.8"/>
<path stroke="currentColor" stroke-width="1" d="M110,39V29M122.5,36.3L123.7,30.4M135.4,40.6L137.9,35.2M159.1,60.6L164,57.1M169.1,84.6L175,83.5M140,147L143,152.2M50.2,89.8L44.2,89.2M58,67L52.8,62"/>
<g font-size="9" fill="currentColor"><text x="106" y="24" text-anchor="end">EcoRI</text><text x="124" y="22">ClaI</text><text x="142" y="34">HindIII</text><text x="168" y="56">BamHI</text><text x="179" y="86">SalI</text><text x="146" y="164">PvuII</text><text x="40" y="92" text-anchor="end">PstI</text><text x="48" y="60" text-anchor="end">PvuI</text><text x="132" y="82">tetᴿ</text><text x="64" y="84">ampᴿ</text><text x="84" y="138">ori</text><text x="118" y="140">rop</text><text x="110" y="98" text-anchor="middle" font-weight="bold">pBR322</text></g>
<g font-size="9" fill="currentColor"><text x="214" y="120">BamHI, SalI → in tetᴿ</text><text x="214" y="134">PstI, PvuI → in ampᴿ</text><text x="214" y="148">ori: replication start</text><text x="214" y="162">rop: replication proteins</text></g>
</svg>
<figcaption>pBR322: two resistance genes (ampᴿ, tetᴿ) carrying restriction sites, ori and rop. Inserting DNA at BamHI or SalI inactivates tetᴿ; at PstI or PvuI inactivates ampᴿ.</figcaption>
</figure>

**Selecting recombinants.** Suppose foreign DNA is ligated at the **BamHI** site of tetᴿ. Recombinant plasmids lose tetracycline resistance but keep ampicillin resistance. Cells are first grown on ampicillin (only transformants survive), then **replica-plated** onto tetracycline: recombinants **do not grow** there, non-recombinants do. Losing a gene's function because foreign DNA has been inserted into it is **insertional inactivation**.

A simpler method uses a gene for **β-galactosidase** as the insertion site. Non-recombinant colonies make the enzyme and turn **blue** on a medium with a chromogenic substrate; recombinants, whose gene is inactivated, stay **colourless (white)**. This lets recombinants be picked out on a single plate.

**Vectors for plants and animals.** *Agrobacterium tumefaciens*, a plant pathogen, transfers a piece of DNA called **T-DNA** from its **Ti plasmid** (tumour-inducing) into dicot plant cells, turning them into tumour cells. Scientists have **disarmed** the Ti plasmid so it no longer causes tumours but still delivers genes of interest. Similarly, **retroviruses**, which transform normal animal cells into cancerous ones, are disarmed and used to deliver genes into animal cells.

**In one breath:** A vector needs ori (copy number), a selectable marker (antibiotic resistance), single cloning sites and small size. pBR322 has ampᴿ, tetᴿ, ori and rop. Insertional inactivation (tetᴿ at BamHI, or blue–white β-galactosidase) picks out recombinants. Disarmed Ti plasmids and retroviruses carry genes into plants and animals.

## Getting DNA into a host

DNA is hydrophilic and cannot pass through cell membranes, so host cells must be made **competent** to take it up.

- **Chemical method**: bacterial cells are treated with a specific concentration of a **divalent cation such as calcium**, which increases the efficiency of DNA entry through pores in the cell wall. Cells are incubated with the recombinant DNA **on ice**, given a brief **heat shock at 42 °C**, and returned to ice.
- **Micro-injection**: recombinant DNA is injected directly into the **nucleus of an animal cell**.
- **Biolistics (gene gun)**: plant cells are bombarded with high-velocity **micro-particles of gold or tungsten** coated with DNA.
- **Disarmed pathogen vectors**: when allowed to infect a cell, they transfer the recombinant DNA into the host.

**In one breath:** Competence by Ca²⁺ treatment with ice–heat shock (42 °C)–ice; micro-injection for animal nuclei; gene gun with gold or tungsten particles for plants; disarmed pathogens as carriers.

## The process of recombinant DNA technology

**1. Isolating DNA.** DNA is enclosed in membranes, so cells are broken open with enzymes: **lysozyme** (bacteria), **cellulase** (plant cells), **chitinase** (fungi). RNA is removed with **ribonuclease** and proteins with **protease**. Adding **chilled ethanol** precipitates purified DNA as a collection of fine threads in suspension.

**2. Cutting DNA at specific locations.** Purified DNA is incubated with the restriction enzyme at optimal conditions; agarose gel electrophoresis checks the digestion. The vector is cut with the same enzyme.

**3. Amplifying the gene of interest by PCR.** **PCR** (polymerase chain reaction) makes many copies of a gene in a test tube using two sets of **primers** (small, chemically synthesised oligonucleotides complementary to the ends of the target region) and a DNA polymerase. Each cycle has three steps:

- **Denaturation**: heating separates the two DNA strands.
- **Annealing**: on cooling, the primers bind to their complementary sites on the single strands.
- **Extension**: DNA polymerase extends the primers, using the nucleotides provided and the strand as template.

Repeated many times, PCR amplifies a DNA segment about **a billion times**. The enzyme used is **Taq polymerase**, isolated from the bacterium ***Thermus aquaticus***, which stays active at the high temperatures used to separate the strands.

<figure class="fig">
<svg viewBox="0 0 330 150" role="img" aria-label="Three steps of one PCR cycle">
<g font-size="9" fill="currentColor" text-anchor="middle" font-weight="bold"><text x="55" y="14">1 Denaturation</text><text x="165" y="14">2 Annealing</text><text x="275" y="14">3 Extension</text></g>
<g font-size="8" fill="currentColor" text-anchor="middle"><text x="55" y="26">heat (about 94 °C)</text><text x="165" y="26">cool; primers bind</text><text x="275" y="26">Taq polymerase</text></g>
<path fill="none" stroke="currentColor" stroke-width="2" d="M10,66H40Q60,66,100,44M10,74H40Q60,74,100,96M120,50H210M120,94H210M230,50H320M230,94H320"/>
<path stroke="#E0B400" stroke-width="4" d="M190,58H210M120,86H140M300,58H320M230,86H250"/>
<path fill="none" stroke="#1F5FAD" stroke-width="2" d="M298,58H246M252,86H304"/>
<path fill="#1F5FAD" d="M244,58l6,-4v8zM306,86l-6,-4v8z"/>
<g font-size="8" fill="currentColor"><text x="12" y="112">strands separate</text><text x="146" y="74">primers (yellow)</text><text x="246" y="74">grow 5′→3′</text><text x="40" y="136">Repeat about 30 cycles → the target DNA is amplified about a billion times</text></g>
</svg>
<figcaption>One PCR cycle: denature, anneal primers, extend with thermostable Taq polymerase; each cycle roughly doubles the target DNA.</figcaption>
</figure>

**4. Inserting recombinant DNA into the host.** Competent cells take up the recombinant DNA. If it carries an antibiotic-resistance gene (say, ampicillin), only transformed cells grow on ampicillin plates, so they can be selected.

**5. Obtaining the foreign gene product.** When the foreign gene is expressed under suitable conditions, the host makes a **recombinant protein**. To get large amounts, cells are grown in large volumes. In a **continuous culture** system, used medium is drained from one side while fresh medium is added from the other, keeping cells in their **physiologically most active log (exponential) phase** and yielding more biomass and product.

**In one breath:** Isolate DNA (lysozyme, cellulase, chitinase; RNase, protease; chilled ethanol) → cut with restriction enzyme → amplify by PCR (denature, anneal, extend; Taq polymerase from *Thermus aquaticus*; about a billion copies) → insert into competent host and select → express the recombinant protein, ideally in continuous culture.

## Bioreactors and downstream processing

Large-scale production needs **bioreactors**: vessels of **100–1000 litres** in which raw materials are converted biologically into products. A bioreactor provides optimal conditions: temperature, pH, substrate, salts, vitamins and oxygen.

The commonest is the **stirred-tank bioreactor**: usually cylindrical or with a curved base to help mix the contents. A **stirrer** mixes evenly and spreads oxygen. In a **sparged** stirred-tank bioreactor, sterile air is bubbled through to increase the area for oxygen transfer. A bioreactor has an **agitator system**, an **oxygen delivery system**, a **foam control** system, a **temperature control** system, a **pH control** system and **sampling ports** to withdraw small volumes of culture periodically.

After biosynthesis, the product goes through **downstream processing** before it can be marketed: **separation and purification**, then **formulation** with suitable preservatives. For drugs, the formulation must pass clinical trials, and strict **quality control** testing is needed for each product.

**In one breath:** Bioreactors (100–1000 L), mostly stirred-tank (sparged for better oxygen), control temperature, pH, foam and oxygen and have sampling ports. Downstream processing = separation, purification, formulation and quality control (clinical trials for drugs).
