# Ch 10 · Biotechnology and its Applications

Chapter 9 gave you the tools; this chapter shows what they build. Biotechnology now touches farming, medicine and industry: pest-resistant crops, human insulin made by bacteria, gene therapy, early diagnosis of disease and animals engineered to make useful proteins. It also raises questions about safety, ethics and ownership of biological resources. Expect questions on Bt cotton, RNA interference, insulin and gene therapy above all.

## Biotechnology in agriculture

Food production can be increased by agrochemical-based farming, organic farming, or **genetically engineered crop-based agriculture**. The Green Revolution tripled food supply, but it relied on agrochemicals that are costly and harmful. Plants, bacteria, fungi and animals whose genes have been altered by manipulation are **genetically modified organisms (GMOs)**.

GM plants have been useful in many ways:

- They are more **tolerant to abiotic stresses** (cold, drought, salt, heat).
- They **reduce reliance on chemical pesticides** (pest-resistant crops).
- They help **reduce post-harvest losses**.
- They **increase the efficiency of mineral use** by plants, preventing early exhaustion of soil fertility.
- They have **enhanced nutritional value**, for example **Golden rice**, which is rich in vitamin A.

GM is also used to create tailor-made plants that supply alternative resources (starch, fuels, pharmaceuticals) to industry.

```ng-mnemonic
id: ch10-gm-benefits
title: Five gains from GM plants
trick: **S**mart **P**lants **P**ay **M**ore **N**ow
meaning: **S**tress tolerance (abiotic), less **P**esticide, fewer **P**ost-harvest losses, better **M**ineral use, more **N**utrition (Golden rice, vitamin A).
prompt: List the advantages of GM crops.
```

**In one breath:** GM crops resist abiotic stress and pests, cut post-harvest losses, use minerals efficiently and can be more nutritious (Golden rice, vitamin A).

## Bt cotton

Some strains of the soil bacterium ***Bacillus thuringiensis*** (**Bt**) make proteins that kill certain insects: **lepidopterans** (tobacco budworm, armyworm), **coleopterans** (beetles) and **dipterans** (flies, mosquitoes). During a particular phase of its growth, *B. thuringiensis* forms protein crystals containing a toxic insecticidal protein.

Why doesn't the toxin kill the bacterium? Because the Bt toxin exists as an **inactive protoxin**. When an insect eats it, the **alkaline pH of the insect's gut** solubilises the crystals and converts the protoxin into an **active toxin**. The active toxin binds to the surface of the **midgut epithelial cells** and creates **pores**, causing the cells to swell and burst (**lysis**). The insect dies.

The toxin is coded by genes named ***cry***. The proteins coded by **cryIAc** and **cryIIAb** control **cotton bollworms**; the protein of **cryIAb** controls the **corn borer**. Specific Bt toxin genes isolated from *B. thuringiensis* have been put into crop plants such as cotton, making **Bt cotton**, which protects itself against bollworms without spraying insecticide. The choice of genes depends on the crop and the target pest, since most Bt toxins are insect-group specific.

:::tip Why the bacterium survives
The toxin is stored as an inactive protoxin in crystals; only the alkaline pH of the insect gut activates it.
:::

```ng-steps
id: ch10-bt-toxin
title: How Bt toxin kills an insect
step: *Bacillus thuringiensis* stores the toxin as an **inactive protoxin** in crystals, so the bacterium is safe.
step: An insect larva **eats** the crystals with the plant tissue.
step: The **alkaline pH** of the insect gut dissolves the crystals and turns protoxin into **active toxin**.
step: The toxin **binds midgut epithelial cells** and makes **pores**.
step: The cells **swell and burst (lyse)**; the insect dies.
```

```ng-fill
id: ch10-cry-genes
title: cry genes and their targets
cols: Gene | Controls
row: cryIAc | [[cotton bollworms]]
row: cryIIAb | [[cotton bollworms]]
row: cryIAb | [[corn borer]]
```

```ng-mnemonic
id: ch10-cry
title: Which cry gene for which pest?
trick: **Cotton cries twice, Corn cries once**
meaning: Cotton bollworm: **cryIAc** and **cryIIAb** (two genes). Corn borer: **cryIAb** (one gene).
prompt: Which cry gene protects corn against the corn borer?
```

```ng-figure
id: ch10-bt-diagram
title: How Bt toxin kills an insect
svg:
<svg viewBox="0 0 330 176" role="img" aria-label="Bt toxin: inactive protoxin crystal activated in the alkaline insect gut, making pores in midgut cells" fill="none" stroke="currentColor">
<rect x="14" y="40" width="72" height="26" rx="13" stroke-width="1.6"/>
<path fill="#E0B400" stroke="none" d="M50,44L58,53L50,62L42,53Z"/>
<path stroke-width="1.4" d="M92,53H112M106,48L112,53L106,58"/>
<path fill="#E0B400" fill-opacity="0.5" stroke="none" d="M132,52L138,58L132,64L126,58Z"/>
<g class="uf" stroke="none"><circle cx="156" cy="70" r="3.5"/><circle cx="170" cy="62" r="3.5"/><circle cx="186" cy="74" r="3.5"/><circle cx="212" cy="96" r="3.5"/><circle cx="236" cy="96" r="3.5"/><circle cx="258" cy="96" r="3.5"/></g>
<path stroke-width="1.2" d="M120,100H330M120,140H330"/>
<path stroke-width="1" d="M140,100V140M160,100V140M180,100V140M200,100V140M220,100V140M240,100V140M260,100V140M280,100V140"/>
<path stroke="currentColor" stroke-width="3" d="M207,100H217M229,100H243M251,100H265"/>
<path class="u" stroke-width="1.6" stroke-dasharray="4 3" d="M286,140C280,112,288,88,306,88C324,88,330,112,326,140"/>
<g fill="currentColor" stroke="none" font-size="9.5"><text x="10" y="30">Bt bacterium</text><text x="10" y="84">protoxin crystal</text><text x="10" y="96">(inactive)</text><text x="88" y="44">eaten</text><text x="120" y="40">alkaline gut pH</text><text x="136" y="88">active toxin</text><text x="130" y="156">midgut epithelial cells</text><text x="216" y="86">pores</text><text x="246" y="166">cell swells, lyses</text></g>
</svg>
caption: Inactive protoxin in the bacterium; active toxin in the alkaline insect gut; pores in midgut cells, which swell and lyse. Our simplified drawing.
part: 76, 53 | Bt bacterium | *Bacillus thuringiensis*, not harmed by its own toxin.
part: 50, 53 | Protoxin crystal | Inactive form of the toxin stored in the bacterium.
part: 132, 58 | Alkaline gut pH | Dissolves the crystal and turns protoxin into active toxin.
part: 170, 62 | Active toxin | Binds the surface of midgut epithelial cells.
part: 236, 100 | Pores | Made by the toxin in the cell membrane.
part: 306, 110 | Cell lysis | Cells swell and burst; the insect dies.
part: 170, 120 | Midgut epithelium | Lining of the insect gut.
```

```ng-draw
id: ch10-draw-bt
title: Draw how Bt toxin acts
svg: ref: notes#ch10-bt-diagram
time: 4
```

**In one breath:** *Bacillus thuringiensis* makes a crystal protoxin; alkaline insect gut pH activates it; the toxin binds midgut epithelium, makes pores, cells swell and lyse. cryIAc and cryIIAb control cotton bollworms; cryIAb controls corn borer. Bt cotton carries these genes.

## Pest-resistant plants through RNA interference

A nematode, ***Meloidogyne incognita***, infects the roots of tobacco plants and causes a great reduction in yield. A novel strategy to prevent this is based on **RNA interference (RNAi)**.

RNAi takes place in all eukaryotic organisms as a method of **cellular defence**. It involves **silencing of a specific mRNA** by a complementary **double-stranded RNA (dsRNA)** molecule, which binds to and prevents translation of the mRNA. In nature, the dsRNA may come from an infection by RNA viruses or from mobile genetic elements (transposons) that replicate via an RNA intermediate.

Using ***Agrobacterium* vectors**, **nematode-specific genes** were introduced into the host plant. The introduced DNA was designed to produce **both sense and anti-sense RNA** in the host cells. These two RNAs, being complementary, formed **dsRNA**, which started RNAi and silenced the specific mRNA of the nematode. As a result, the parasite **could not survive** in a transgenic host expressing the specific interfering RNA: the plant protected itself.

```ng-steps
id: ch10-rnai
title: RNAi protects tobacco from a nematode
step: The nematode ***Meloidogyne incognita*** infects tobacco roots and cuts yield.
step: **Nematode-specific genes** are put into tobacco using an ***Agrobacterium*** vector.
step: The transgene makes **sense and anti-sense RNA** in the plant's cells.
step: The two complementary RNAs pair into **dsRNA**, which starts **RNA interference**.
step: The nematode's specific **mRNA is silenced** (no translation); the parasite cannot survive.
```

```ng-figure
id: ch10-rnai-diagram
title: RNA interference in tobacco
svg:
<svg viewBox="0 0 330 184" role="img" aria-label="RNA interference: sense and antisense RNA form dsRNA, which silences the nematode mRNA" fill="none" stroke="currentColor">
<path class="u" stroke-width="2.4" d="M14,40C24,34,34,46,44,40S64,34,74,40S94,46,104,40"/>
<path stroke-width="2.4" d="M14,70C24,64,34,76,44,70S64,64,74,70S94,76,104,70"/>
<path stroke-width="1.4" d="M112,55H130M124,50L130,55L124,60"/>
<path class="u" stroke-width="2.4" d="M140,46H212"/>
<path stroke-width="2.4" d="M140,64H212"/>
<path stroke-opacity="0.55" d="M148,46V64M158,46V64M168,46V64M178,46V64M188,46V64M198,46V64M208,46V64"/>
<path stroke-width="1.4" d="M220,55H238M232,50L238,55L232,60"/>
<path stroke-width="2.4" d="M248,64H322"/>
<path class="u" stroke-width="2.4" d="M268,58H300"/>
<path stroke="#E0B400" stroke-width="2.4" d="M276,72L292,88M292,72L276,88"/>
<path stroke-width="5" stroke-linecap="round" stroke-opacity="0.7" d="M226,150C236,138,246,162,256,150S276,138,286,150S306,162,316,150"/>
<path stroke="#E0B400" stroke-width="2.4" d="M256,128L292,168M292,128L256,168"/>
<path stroke-width="1.2" d="M14,122H128V172H14Z"/><path stroke-width="1.2" d="M100,120V84M95,90L100,84L105,90"/>
<g fill="currentColor" stroke="none" font-size="9.5"><text x="14" y="26">sense RNA</text><text x="14" y="90">antisense RNA</text><text x="146" y="34">dsRNA</text><text x="144" y="82">starts RNAi</text><text x="246" y="46">nematode mRNA</text><text x="252" y="104">no translation</text><text x="20" y="138">tobacco cell with</text><text x="20" y="151">nematode genes</text><text x="20" y="164">(via Agrobacterium)</text><text x="210" y="182">nematode cannot survive</text></g>
</svg>
caption: Sense and antisense RNA from the nematode genes pair into dsRNA; RNAi silences the nematode mRNA, so the parasite cannot survive. Our simplified drawing.
part: 120, 130 | Transgenic tobacco cell | Nematode-specific genes introduced with an *Agrobacterium* vector.
part: 60, 40 | Sense RNA | One RNA made from the transgene.
part: 60, 70 | Antisense RNA | The complementary RNA.
part: 176, 55 | dsRNA | Sense + antisense pair up and start RNA interference.
part: 316, 64 | Nematode mRNA | Its specific mRNA is bound by complementary RNA.
part: 284, 80 | Silencing | The mRNA is not translated.
part: 240, 150 | *Meloidogyne incognita* | The nematode cannot survive in the transgenic host.
```

```ng-draw
id: ch10-draw-rnai
title: Draw RNA interference
svg: ref: notes#ch10-rnai-diagram
time: 4
```

**In one breath:** *Meloidogyne incognita* attacks tobacco roots. Nematode-specific genes put in via *Agrobacterium* make sense and anti-sense RNA → dsRNA → RNAi silences the nematode's mRNA → the parasite cannot survive.

## Biotechnology in medicine: genetically engineered insulin

Recombinant DNA technology has made it possible to mass-produce safe and more effective drugs that do not cause unwanted immune reactions, unlike similar products from non-human sources. About 30 recombinant therapeutics are approved worldwide, 12 of them marketed in India.

Adult-onset diabetes is managed by taking insulin regularly. Earlier, insulin was extracted from the **pancreas of slaughtered cattle and pigs**. This animal insulin caused **allergy** or other reactions in some patients.

Insulin is made of **two short polypeptide chains, A and B**, linked by **disulphide bridges**. In mammals, it is synthesised as a **pro-hormone** (pro-insulin) with an extra stretch called the **C peptide**, which is removed during maturation into insulin. The main challenge was to get insulin assembled into its mature form.

In **1983**, **Eli Lilly**, an American company, prepared **two DNA sequences corresponding to the A and B chains** of human insulin and introduced them into **plasmids of *E. coli*** to produce the two chains separately. The **A and B chains were then extracted and combined by creating disulphide bonds** to form human insulin, called **Humulin**.

```ng-figure
id: ch10-insulin
title: Pro-insulin to insulin
svg:
<svg viewBox="0 0 330 150" role="img" aria-label="Insulin A and B chains joined by disulphide bonds, with the C peptide removed" fill="none" stroke="currentColor">
<path class="u" stroke-width="9" stroke-linecap="round" stroke-dasharray="0 11" d="M40,50H182"/>
<path stroke-width="9" stroke-linecap="round" stroke-dasharray="0 11" d="M30,100H250"/>
<path stroke="#E0B400" stroke-width="2.4" d="M73,56V94M150,56V94M95,42Q117,24,139,42"/>
<path stroke-dasharray="4 3" stroke-opacity="0.6" stroke-width="1.6" d="M186,50C262,18,300,84,254,100"/>
<g fill="currentColor" stroke="none" font-size="10"><text x="8" y="54">A</text><text x="2" y="104">B</text><text x="80" y="79">S–S</text><text x="157" y="79">S–S</text><text x="256" y="34">C peptide</text><text x="246" y="46">(removed)</text><text x="40" y="132">Mature insulin = A + B chains held by disulphide bonds</text></g>
</svg>
caption: Insulin is made in the body as pro-insulin; the C peptide (dashed) is cut out, leaving A and B chains joined by disulphide bridges. Eli Lilly made A and B separately in E. coli and joined them.
part: 110, 50 | A chain | Shorter polypeptide; also has an internal disulphide bond.
part: 140, 100 | B chain | Longer polypeptide.
part: 68, 64 | Disulphide bridges | Hold the A and B chains together.
part: 282, 70 | C peptide | Extra stretch in pro-insulin; removed when insulin matures.
```

:::tip No C peptide
Recombinant insulin is made as separate A and B chains, so no C peptide has to be removed; the chains are joined by disulphide bonds afterwards.
:::

```ng-steps
id: ch10-humulin
title: How Eli Lilly made human insulin (1983)
step: Prepare two DNA sequences coding for the **A** and **B chains** of human insulin.
step: Put each into a **plasmid of *E. coli***.
step: Grow the bacteria: they make the **A and B chains separately**.
step: **Extract** both chains and **join them by disulphide bonds**: human insulin (**Humulin**), with no C peptide to remove.
```

```ng-draw
id: ch10-draw-insulin
title: Draw pro-insulin and mature insulin
svg: ref: notes#ch10-insulin
time: 3
```

**In one breath:** Animal (cattle, pig) insulin caused allergy. Insulin = A + B chains joined by disulphide bonds; made in the body as pro-insulin with a C peptide. Eli Lilly (1983) made A and B chains separately in *E. coli* and joined them: human insulin.

## Gene therapy and molecular diagnosis

**Gene therapy** is a collection of methods that allow correction of a gene defect diagnosed in a child or embryo. Genes are inserted into a person's cells and tissues to treat a disease: a normal gene is delivered to take over the function of the non-functional one.

The **first clinical gene therapy** was given in **1990** to a **four-year-old girl with adenosine deaminase (ADA) deficiency**. The ADA enzyme is crucial for the immune system to function; its deficiency comes from deletion of the gene. In some children ADA deficiency can be cured by bone marrow transplantation; in others by **enzyme replacement therapy** (injecting functional ADA). Neither is completely curative.

In gene therapy, **lymphocytes** from the patient's blood are grown in culture outside the body. A functional **ADA cDNA** is introduced into them using a **retroviral vector**, and the cells are returned to the patient. These cells are not immortal, so the patient needs **periodic infusions** of such engineered lymphocytes. If the gene isolated from marrow cells producing ADA is introduced into cells at **early embryonic stages**, it could be a **permanent cure**.

**Molecular diagnosis.** Conventional methods such as serum and urine analysis cannot detect disease early, when the pathogen count is still very low. Molecular techniques can:

- **PCR** amplifies very low amounts of a pathogen's DNA or RNA, so it can detect infections like **HIV** in suspected patients early, and find mutations in genes of suspected cancer patients.
- A **probe**, a single-stranded DNA or RNA tagged with a radioactive molecule, hybridises to its complementary DNA in a clone of cells, which is then detected by **autoradiography**. A clone with a mutated gene does not show up on the film, because the probe does not match.
- **ELISA** works on the principle of **antigen–antibody interaction**. Infection can be detected by the presence of antigens (proteins, glycoproteins) of the pathogen or of antibodies made against it.

```ng-steps
id: ch10-ada-gene-therapy
title: The first gene therapy (1990)
step: Patient: a **4-year-old girl with ADA deficiency** (gene deleted; immune system fails).
step: Take her **lymphocytes** and grow them in culture.
step: Introduce a functional **ADA cDNA** using a **retroviral vector**.
step: Return the engineered lymphocytes to her body.
step: These cells are mortal, so she needs **periodic infusions**. Gene transfer at an **early embryonic stage** could be a permanent cure.
```

```ng-fill
id: ch10-molecular-diagnosis
title: Three molecular diagnosis tools
cols: Tool | Principle and use
row: PCR | [[amplifies tiny amounts of pathogen DNA; finds HIV early and cancer mutations]]
row: Probe + autoradiography | [[labelled single strand pairs with its complement; a mutated gene does not show]]
row: ELISA | [[antigen–antibody interaction; detects pathogen antigens or antibodies]]
```

**In one breath:** First gene therapy (1990): a 4-year-old with ADA deficiency; her lymphocytes received functional ADA cDNA by retroviral vector and were returned; needs periodic infusions; a permanent cure would need gene transfer at an early embryonic stage. PCR, probes with autoradiography and ELISA (antigen–antibody) diagnose disease early.

## Transgenic animals

Animals whose DNA has been manipulated to carry and express an extra (foreign) gene are **transgenic animals**. Transgenic rats, rabbits, pigs, sheep, cows and fish have been made, but **over 95% of all existing transgenic animals are mice**. They are made for these reasons:

1. **Normal physiology and development**: to study how genes are regulated and how they affect body functions and development, for example the study of complex factors involved in growth such as **insulin-like growth factor**.
2. **Study of disease**: models for human diseases such as **cancer, cystic fibrosis, rheumatoid arthritis and Alzheimer's**, to investigate new treatments.
3. **Biological products**: medicines often need costly biological products. Transgenic animals can produce them, for example **human protein α-1-antitrypsin**, used to treat **emphysema**; attempts are on for phenylketonuria and cystic fibrosis. In **1997**, the first transgenic cow, **Rosie**, produced human protein-enriched milk (**2.4 grams per litre**). The milk contained the **human α-lactalbumin** and was nutritionally a more balanced product for human babies than natural cow milk.
4. **Vaccine safety**: transgenic mice are being developed to test the safety of vaccines before use on humans; they have been used to test the safety of the **polio vaccine**.
5. **Chemical safety testing (toxicity testing)**: animals made more sensitive to toxic substances than non-transgenic animals give results in less time.

```ng-fill
id: ch10-transgenic-uses
title: Why transgenic animals are made
cols: Use | Example
row: Normal physiology | [[insulin-like growth factor]]
row: Disease models | [[cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer's]]
row: Biological products | [[α-1-antitrypsin (emphysema); Rosie's milk with human α-lactalbumin]]
row: Vaccine safety | [[polio vaccine tested on transgenic mice]]
row: Toxicity testing | [[animals more sensitive to toxins, results faster]]
```

```ng-mnemonic
id: ch10-transgenic-hook
title: Five uses of transgenic animals
trick: **N**ice **D**octors **B**uild **V**accine **T**ests
meaning: **N**ormal physiology, **D**isease models, **B**iological products, **V**accine safety, **T**oxicity testing.
prompt: List five reasons for making transgenic animals.
```

**In one breath:** Over 95% of transgenic animals are mice. Uses: normal physiology (insulin-like growth factor), disease models, products (α-1-antitrypsin for emphysema; Rosie, 1997, milk with human α-lactalbumin, 2.4 g/L), vaccine safety (polio) and toxicity testing.

## Ethical issues, biopiracy and patents

Manipulating living organisms raises questions that society must answer. Moving genes across species may have unpredictable results. The **Indian Government** has set up organisations such as **GEAC (Genetic Engineering Approval Committee)**, which decides on the validity of GM research and the **safety of introducing GM organisms** for public services.

Companies have taken **patents** on products and technologies that use genetic materials, plants and other biological resources long identified, developed and used by farmers and indigenous people of a country. In **1997**, an American company got patent rights on **Basmati rice** through the US Patent and Trademark Office, allowing it to sell a "new" variety of Basmati in the US and abroad. This variety had actually been derived from **Indian farmers' varieties**: Indian Basmati was crossed with semi-dwarf varieties and claimed as an invention. India has about **200,000 varieties of rice**, of which **27 documented varieties are Basmati**. Other examples are attempts to patent uses, products and processes based on Indian traditional herbal medicines such as turmeric and neem.

**Biopiracy** is the use of bio-resources by multinational companies and other organisations without proper authorisation from the countries and people concerned, and **without compensatory payment**. Industrialised nations are rich financially but poor in biodiversity and traditional knowledge; developing and under-developed countries are rich in both. There is a growing realisation of the need for fair sharing of benefits. The **Indian Parliament** has recently cleared the **second amendment of the Indian Patents Bill**, which takes such issues into consideration, including patent terms, emergency provisions, and research and development initiatives.

```ng-compare
id: ch10-geac-vs-patents
title: GEAC vs biopiracy laws
cols: GEAC | Patent law amendment
row: What it does | judges validity of GM research and safety of releasing GMOs | protects against unauthorised exploitation of bio-resources
row: Answers | "Is this GMO safe to release?" | "Who owns traditional knowledge (e.g. Basmati, turmeric, neem)?"
```

**In one breath:** GEAC judges the validity of GM research and the safety of releasing GMOs. Biopiracy = using bio-resources and traditional knowledge without permission or compensation, as in the 1997 US patent on Basmati (India has 27 documented Basmati varieties). India responded with the second amendment of the Indian Patents Bill.
