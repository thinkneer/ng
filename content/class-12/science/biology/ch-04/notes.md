# Ch 4 · Principles of Inheritance and Variation

Why do you look like your parents, but not exactly like either of them? **Inheritance** is how characters pass from parents to offspring; **variation** is how offspring differ from their parents. This chapter starts with Mendel's peas, builds the rules, then shows where the rules bend: incomplete dominance, co-dominance, linkage, sex-linked genes and genetic disorders. Crosses are the heart of it, so set out every cross the same way: parents, gametes, Punnett square, ratio.

## Mendel and his experiments

Gregor Mendel worked on garden peas for seven years (1856–1863). Peas were a good choice: they have clear contrasting forms of many characters, they naturally self-pollinate, and they can be cross-pollinated by hand. He started with **true-breeding lines**, which give the same trait generation after generation of self-pollination, and studied **seven pairs** of contrasting traits, such as tall vs dwarf stem, round vs wrinkled seed, yellow vs green seed and violet vs white flower. He used large samples and counted carefully. He was the first to apply statistics and mathematical logic to a problem in biology.

**In one breath:** Mendel used true-breeding pea lines and seven pairs of contrasting traits, counted large samples, and treated inheritance mathematically.

## Inheritance of one gene

Mendel crossed tall and dwarf true-breeding plants. All the first-generation (**F1**) plants were tall; no dwarf or intermediate plants appeared. When he let F1 plants self-pollinate, the second generation (**F2**) had tall and dwarf plants in a **3 : 1** ratio. The dwarf trait had not been lost in F1; it was hidden and came back unchanged in F2.

He explained this with "factors" passed unchanged from parent to offspring; we call them **genes**. Different forms of the same gene are **alleles**. A plant has two alleles for each character. If both are the same it is **homozygous** (TT or tt); if they differ it is **heterozygous** (Tt). The genetic make-up is the **genotype**; the visible trait is the **phenotype**. In Tt, the allele that shows (T, tall) is **dominant** and the one that is hidden (t, dwarf) is **recessive**.

The two alleles separate when gametes form, so each gamete gets only one. In the F1 (Tt), half the gametes carry T and half carry t. The British geneticist Reginald Punnett drew a grid to show the fusions, now called the **Punnett square**:

```ng-figure
id: ch04-monohybrid-cross
title: Monohybrid cross: tall × dwarf
svg:
<svg viewBox="0 0 340 226" role="img" aria-label="Monohybrid cross chart from parents to F2 Punnett square" fill="none" stroke="currentColor">
<path stroke-width="1.6" d="M110,110H230V210H110ZM170,110V210M110,160H230"/>
<rect class="uf" x="171" y="161" width="58" height="48" fill-opacity="0.25" stroke="none"/>
<path stroke-width="0.8" d="M100,24L148,40M240,24L192,40M160,54V64M180,54V64M170,84V96"/>
<circle cx="160" cy="46" r="9"/><circle cx="180" cy="46" r="9"/>
<g fill="currentColor" stroke="none" font-size="11"><text x="4" y="20">P</text><text x="60" y="20">TT (tall)</text><text x="160" y="20">×</text><text x="210" y="20">tt (dwarf)</text><text x="4" y="50">Gametes</text><text x="156" y="50">T</text><text x="177" y="50">t</text><text x="4" y="80">F1</text><text x="146" y="80">Tt (all tall)</text><text x="4" y="164">F2</text><text x="40" y="164">Tt × Tt</text><text x="136" y="105">T</text><text x="197" y="105">t</text><text x="96" y="140">T</text><text x="96" y="190">t</text><text x="128" y="140">TT</text><text x="190" y="140">Tt</text><text x="128" y="190">Tt</text><text x="192" y="190">tt</text><text x="240" y="132">3 tall : 1 dwarf</text><text x="240" y="152">1 TT : 2 Tt : 1 tt</text></g>
</svg>
caption: Monohybrid cross: F1 is all tall; selfing F1 gives F2 3 tall : 1 dwarf (phenotype) and 1 TT : 2 Tt : 1 tt (genotype).
part: 38, 16 | Parents (P) | True-breeding tall TT and dwarf tt.
part: 208, 46 | Gametes | Each parent gives one allele per gamete: T or t (segregation).
part: 232, 76 | F1 generation | All Tt and tall: the law of dominance.
part: 216, 200 | Dwarf in F2 | tt: the recessive trait reappears in a quarter of F2.
part: 290, 174 | F2 ratios | Phenotype 3 : 1, genotype 1 : 2 : 1.
```

Phenotypic ratio **3 tall : 1 dwarf**; genotypic ratio **1 TT : 2 Tt : 1 tt**.

```ng-fill
id: ch04-punnett-monohybrid
title: Fill the Punnett square for Tt × Tt
cols: ♀ \ ♂ | T | t
row: **T** | [[TT (tall)]] | [[Tt (tall)]]
row: **t** | [[Tt (tall)]] | [[tt (dwarf)]]
```

To find out whether a tall plant is TT or Tt, cross it with the recessive parent (tt). This is a **test cross**. If all offspring are tall, the plant was TT; if half are dwarf, it was Tt (ratio 1 : 1).

These results gave two laws:

- **Law of dominance**: characters are controlled by discrete units (factors) that occur in pairs; in a dissimilar pair, one member (dominant) masks the other (recessive). It explains why F1 shows only one parent's trait and why F2 gives 3 : 1.
- **Law of segregation**: the two alleles of a pair do not blend; they separate during gamete formation, so each gamete receives only one of the two. A homozygote makes one kind of gamete; a heterozygote makes two kinds in equal proportion.

:::skeleton Model answer: monohybrid cross with test cross (3 marks)
Parents: TT (tall) × tt (dwarf) → gametes T and t → F1: all Tt, tall [1]<br>
F1 selfed: Tt × Tt → Punnett square → F2 3 tall : 1 dwarf; genotypes 1 TT : 2 Tt : 1 tt [1]<br>
Test cross: tall plant × tt → all tall means TT; 1 tall : 1 dwarf means Tt [1]
:::

```ng-numerical
id: ch04-f2-dwarf
title: Counting dwarf plants in F2
question: A cross between true-breeding tall (TT) and dwarf (tt) pea plants gives tall F1 plants, which are selfed. If {{N}} F2 plants are raised, how many are expected to be dwarf?
var: N | 400 | 1200 | 40
answer: N/4
unit: plants
dp: 0
tol: 1
step: F2 phenotypic ratio = 3 tall : 1 dwarf, so dwarf = $\tfrac14$ of F2.
step: Dwarf $=\tfrac14\times{{N}}=$ **{{N/4:0}} plants**; tall $={{3*N/4:0}}$.
```

```ng-draw
id: ch04-draw-monohybrid
title: Write out the monohybrid cross chart
svg: ref: notes#ch04-monohybrid-cross
time: 4
```

**In one breath:** F1 shows the dominant trait; F2 gives 3 : 1 (phenotype) and 1 : 2 : 1 (genotype). Law of dominance and law of segregation; a test cross with the recessive parent reveals an unknown genotype (1 : 1 if heterozygous).

## When dominance is not complete

Dominance is not a property of the allele alone; it depends on the gene product and the phenotype we look at.

**Incomplete dominance.** In the snapdragon (dog flower, *Antirrhinum*), red (RR) × white (rr) gives pink (Rr) F1. Selfing F1 gives F2 **1 red : 2 pink : 1 white**. Here the phenotypic ratio equals the genotypic ratio, because the heterozygote looks different from both homozygotes. One allele is not completely dominant over the other.

What does "dominant" mean chemically? A gene codes for a product, often an enzyme. A modified allele may make a normal, a less efficient or no product. If one normal copy makes enough enzyme for the normal phenotype, the normal allele looks dominant and the faulty one recessive. Even the same gene can show different dominance for different traits: in peas, one gene controls starch grain size and seed shape. For seed shape (round vs wrinkled), round is dominant; for **starch grain size**, the heterozygote has intermediate grains, so it shows incomplete dominance.

**Co-dominance.** In co-dominance, the F1 shows **both** parental traits fully. The human **ABO blood groups** are the classic case. The gene *I* has **three alleles**, $I^A$, $I^B$ and $i$. $I^A$ and $I^B$ make slightly different sugar polymers on the red cell surface; $i$ makes none. $I^A$ and $I^B$ are both dominant over $i$, but when they are together, both are expressed: **$I^AI^B$ gives group AB**. A person carries only two of the three alleles, so a gene with more than two alleles in the population is an example of **multiple alleles**.

```ng-fill
id: ch04-abo
title: ABO genotypes and blood groups
cols: Genotype | Blood group
row: $I^AI^A$, $I^Ai$ | [[A]]
row: $I^BI^B$, $I^Bi$ | [[B]]
row: [[$I^AI^B$]] | AB
row: $ii$ | [[O]]
```

Six genotypes, four phenotypes.

:::tip Incomplete dominance vs co-dominance
Incomplete dominance blends to a new intermediate (pink snapdragon); co-dominance shows both traits side by side (blood group AB).
:::

```ng-compare
id: ch04-incomplete-vs-co
title: Incomplete dominance vs co-dominance
cols: Incomplete dominance | Co-dominance
row: F1 looks like | a new intermediate (blend) | both parents, side by side
row: Example | snapdragon: red × white → pink | ABO: $I^AI^B$ → blood group AB
row: F2 phenotype ratio | 1 : 2 : 1 (same as genotype) | 1 : 2 : 1 for $I^AI^B \times I^AI^B$
```

**In one breath:** Incomplete dominance gives an intermediate heterozygote and a 1 : 2 : 1 F2 (snapdragon); co-dominance expresses both alleles (AB blood group). ABO is controlled by three alleles: multiple alleles, six genotypes, four groups.

## Inheritance of two genes

Next Mendel followed two characters at once: seed colour (yellow Y dominant over green y) and seed shape (round R dominant over wrinkled r). He crossed round yellow (RRYY) with wrinkled green (rryy). F1 was all round yellow (RrYy). F1 makes four kinds of gametes in equal numbers, RY, Ry, rY and ry, and selfing gives a 16-box Punnett square with the F2 phenotypic ratio **9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green**.

Look at one character at a time and each still gives 3 : 1 (12 round : 4 wrinkled; 12 yellow : 4 green). The two characters sort out independently. This is the **law of independent assortment**: when two pairs of traits are combined in a hybrid, the segregation of one pair is independent of the other pair.

A dihybrid test cross, RrYy × rryy, gives four kinds of offspring in a **1 : 1 : 1 : 1** ratio.

Mendel published in 1865, but his work was ignored until **1900**, when de Vries, Correns and von Tschermak independently rediscovered it. Reasons for the neglect: communication was slow, his idea of discrete "factors" did not fit the belief in continuous variation, and he could not show the factors physically.

```ng-steps
id: ch04-dihybrid
title: The dihybrid cross, step by step
step: **P**: round yellow (RRYY) × wrinkled green (rryy); gametes RY and ry.
step: **F1**: all round yellow (RrYy).
step: F1 forms **four kinds of gametes** in equal numbers: RY, Ry, rY, ry (independent assortment).
step: A 4 × 4 Punnett square gives **16 combinations**.
step: **F2**: 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green.
```

```ng-numerical
id: ch04-f2-dihybrid
title: Counting a class in a dihybrid F2
question: Round yellow (RRYY) peas are crossed with wrinkled green (rryy), and F1 is selfed. Out of {{N}} F2 seeds, how many are expected to be round and green?
var: N | 320 | 1600 | 16
answer: 3*N/16
unit: seeds
dp: 0
tol: 1
step: F2 ratio 9 RY : 3 Ry : 3 rY : 1 ry, so round green = $\tfrac{3}{16}$.
step: Round green $=\tfrac{3}{16}\times{{N}}=$ **{{3*N/16:0}} seeds**.
```

**In one breath:** Dihybrid F2 = 9 : 3 : 3 : 1 because each gene segregates independently (law of independent assortment); dihybrid test cross = 1 : 1 : 1 : 1. Mendel's work was rediscovered in 1900.

## Chromosomes, linkage and recombination

By 1900 microscopes showed chromosomes in pairs, separating at meiosis. Walter **Sutton** and Theodor **Boveri** noticed that chromosomes behave exactly like Mendel's factors: they occur in pairs, separate at gamete formation, and pairs sort independently. Their **chromosomal theory of inheritance** says genes sit on chromosomes and their pairing and separation explain Mendel's laws.

Thomas Hunt **Morgan** tested this with the fruit fly *Drosophila melanogaster*, a near-perfect organism for genetics: it is easy to grow on simple synthetic medium, completes its life cycle in about **two weeks**, a single mating gives many offspring, males and females are easy to tell apart, and it has many easily seen hereditary variations.

Morgan crossed flies for two genes on the X chromosome and found that the F2 ratios deviated strongly from 9 : 3 : 3 : 1. When two genes were on the same chromosome, the parental combinations appeared much more often than new ones. He called the physical association of genes on a chromosome **linkage**, and the formation of non-parental combinations **recombination**. Genes that are tightly linked show little recombination (for example, white eye and yellow body: about **1.3%**); loosely linked genes show more (white eye and miniature wing: about **37.2%**). His student Alfred **Sturtevant** used recombination frequency as a measure of the distance between genes to draw the first **genetic maps** of chromosomes.

**In one breath:** Sutton and Boveri: genes are on chromosomes. Morgan (*Drosophila*): genes on one chromosome are linked; recombination makes new combinations, rarely for tight linkage (1.3%) and often for loose linkage (37.2%); Sturtevant mapped genes by recombination frequency.

## Polygenic inheritance and pleiotropy

Mendel's traits came in two clear forms. Many human traits do not: height and skin colour range smoothly. These are **polygenic traits**, controlled by **three or more genes**, with the environment also playing a part. In a simple model of skin colour with three genes (A, B, C), each dominant allele adds a little pigment. AABBCC is darkest, aabbcc lightest, and AaBbCc in between; the effect of each allele adds up.

The reverse also happens: one gene can affect several phenotypes. This is **pleiotropy**. Usually the gene affects a metabolic pathway that feeds many traits. In **phenylketonuria**, a single gene mutation causes intellectual disability and also reduced hair and skin pigmentation.

```ng-compare
id: ch04-polygenic-vs-pleiotropy
title: Polygenic inheritance vs pleiotropy
cols: Polygenic inheritance | Pleiotropy
row: Genes : traits | many genes → one trait | one gene → many traits
row: Variation | continuous, environment adds to it | several distinct effects
row: Example | human skin colour, height | phenylketonuria
```

**In one breath:** Polygenic: several genes (plus environment) add up to one continuous trait (skin colour). Pleiotropic: one gene, many effects (phenylketonuria).

## Sex determination

In 1891 **Henking** saw that, during spermatogenesis in some insects, half the sperms received a particular nuclear structure and half did not. He called it the X body; later it was recognised as the **X chromosome**. Chromosomes involved in sex are **sex chromosomes** (allosomes); the rest are **autosomes**.

```ng-fill
id: ch04-sex-determination
title: Sex determination in four organisms
cols: Organism | Female | Male | Who decides sex
row: Grasshopper | XX | [[XO]] | male: sperms with or without X
row: Humans, *Drosophila* | XX | [[XY]] | [[male (male heterogamety)]]
row: Birds | [[ZW]] | ZZ | [[female (female heterogamety)]]
row: Honey bee | fertilised egg (2n = 32) | [[unfertilised egg (n = 16)]] | haplodiploid system
```

In humans, 22 pairs are autosomes and one pair is the sex chromosomes. Males make X and Y sperms in equal numbers; all ova carry X. So each pregnancy has an equal chance of a boy or a girl, and the sperm decides.

In the **honey bee**, a fertilised egg becomes a female (queen or worker) and an unfertilised egg becomes a male (drone) by parthenogenesis. Males are haploid, so they make sperms by **mitosis**; they have **no father** (and so no sons) but have a grandfather and can have grandsons.

```ng-mnemonic
id: ch04-zw-birds
title: Which sex is heterogametic in birds?
trick: **W** for **W**oman bird
meaning: Birds: female **ZW**, male ZZ, so the **egg** decides the sex. Humans: male XY, so the sperm decides.
prompt: In birds, which parent decides the sex of the chick?
```

**In one breath:** XO (grasshopper) and XY (humans, *Drosophila*) are male heterogamety; ZW birds are female heterogamety; honey bees are haplodiploid (drones are haploid, from unfertilised eggs, and make sperms by mitosis).

## Mutation and pedigree analysis

A **mutation** is a change in the DNA sequence that changes the genotype and phenotype. Changes to whole chromosomes, such as deletion or duplication of a segment, are **chromosomal aberrations**; they are common in cancer cells. A change in a single base pair is a **point mutation**, as in sickle-cell anaemia. Deletions and insertions of bases are **frameshift mutations**. Chemical and physical factors that cause mutations, such as UV radiation, are **mutagens**.

We cannot do controlled crosses in humans, so we study family records. A **pedigree analysis** traces a trait through several generations of a family, using standard symbols, to work out whether it is dominant or recessive and whether it is on an autosome or the X chromosome.

```ng-figure
id: ch04-pedigree-symbols
title: Pedigree symbols
svg:
<svg viewBox="0 0 345 135" role="img" aria-label="Standard pedigree symbols">
<g fill="none" stroke="currentColor" stroke-width="1.4"><rect x="10" y="12" width="18" height="18"/><circle cx="19" cy="60" r="9"/><circle cx="19" cy="104" r="9"/><path d="M19,95V113" stroke-width="2"/><rect class="uf" x="118" y="12" width="18" height="18" fill-opacity="0.6"/><circle class="uf" cx="127" cy="60" r="9" fill-opacity="0.6"/><rect x="118" y="95" width="18" height="18"/><path d="M118,113L136,95M228,21H256M228,58H256M228,62H256M230,84H270M250,84V94M236,94H264M236,94V100M264,94V100"/><rect x="227" y="100" width="18" height="18"/><circle cx="264" cy="109" r="9"/></g>
<g font-size="9" fill="currentColor"><text x="34" y="25">Male</text><text x="34" y="64">Female</text><text x="34" y="108">Carrier</text><text x="142" y="25">Affected male</text><text x="142" y="64">Affected female</text><text x="142" y="108">Dead</text><text x="260" y="25">Mating</text><text x="260" y="58">Mating between</text><text x="260" y="69">relatives</text><text x="278" y="106">Parents and</text><text x="278" y="117">offspring</text></g>
</svg>
caption: Common pedigree symbols. A double line marks a mating between relatives; a dot or half-shading marks a carrier.
part: 19, 21 | Male | An open square.
part: 19, 60 | Female | An open circle.
part: 19, 104 | Carrier | Marked with a dot or half-shading (here a line through the circle).
part: 127, 21 | Affected male | Shaded square.
part: 127, 60 | Affected female | Shaded circle.
part: 127, 104 | Dead | Symbol with a diagonal line through it.
part: 242, 21 | Mating | A single horizontal line.
part: 242, 60 | Consanguineous mating | A double line: mating between relatives.
part: 250, 89 | Parents and offspring | Vertical line from the mating to a line joining the children.
```

**In one breath:** Mutation = change in DNA sequence (point, frameshift, chromosomal aberration), caused by mutagens like UV. Pedigree analysis follows a trait through a family tree to decide dominant or recessive, autosomal or X-linked.

## Genetic disorders

**Mendelian disorders** come from a mutation in a single gene and follow Mendel's patterns, so pedigrees can trace them. They may be dominant or recessive, autosomal or X-linked.

- **Haemophilia** (X-linked recessive): a protein in the blood-clotting cascade is affected, so a small cut keeps bleeding. Heterozygous females are **carriers**; the disease is much commoner in males. A daughter is affected only if her mother is at least a carrier and her father is affected. Queen Victoria was a carrier, and several of her descendants had the disease.
- **Sickle-cell anaemia** (autosomal recessive): only $Hb^SHb^S$ people have the disease; $Hb^AHb^S$ are unaffected carriers who pass the allele with 50% probability. A **point mutation** in the β-globin gene changes codon GAG to **GUG**, so **glutamic acid is replaced by valine** at the **sixth position** of the β-globin chain. At low oxygen, the mutant haemoglobin polymerises and red cells become long, sickle-shaped.
- **Phenylketonuria** (autosomal recessive): the person lacks the enzyme that converts phenylalanine to tyrosine. Phenylalanine and its derivatives build up, causing intellectual disability; they are also excreted in urine.
- **Thalassaemia** (autosomal recessive): reduced synthesis of one globin chain gives abnormal haemoglobin and anaemia. **α-thalassaemia** involves the genes HBA1 and HBA2 on **chromosome 16**; **β-thalassaemia** involves the single gene HBB on **chromosome 11**. Thalassaemia is a **quantitative** problem (too few globin molecules), while sickle-cell anaemia is a **qualitative** one (a faulty globin).
- **Colour blindness** (X-linked recessive): a defect in the red or green cone pigments. It affects about **8% of males** and only about **0.4% of females**, because a female needs the allele on both X chromosomes.

**Chromosomal disorders** come from too many, too few or rearranged chromosomes. Failure of chromatids to separate in cell division gives a gain or loss of a chromosome, **aneuploidy**. Failure of cytokinesis after telophase gives a whole extra set of chromosomes, **polyploidy**, common in plants.



:::tip Who gets X-linked recessive disorders
A son gets his X from his mother, so an affected son usually has a carrier mother. A daughter is affected only if her father is affected and her mother carries the allele.
:::

```ng-steps
id: ch04-sickle-cell
title: From one base change to sickle cells
step: A **point mutation** in the β-globin gene changes codon **GAG** to **GUG**.
step: At the **sixth** position of the β-globin chain, **glutamic acid** is replaced by **valine**.
step: The changed haemoglobin **polymerises at low oxygen tension**.
step: Red blood cells bend from biconcave discs into **sickle shapes**.
step: Only $Hb^SHb^S$ people are ill; $Hb^AHb^S$ carriers pass the allele to half their gametes.
```

```ng-fill
id: ch04-chromosomal-disorders
title: Chromosomal disorders
cols: Disorder | Chromosomes | Key features
row: Down's syndrome | [[trisomy of 21 (47)]] | short, small round head, furrowed tongue, broad palm with a crease, delayed development
row: Klinefelter's syndrome | [[XXY (47)]] | [[male, some feminine development (gynaecomastia), sterile]]
row: Turner's syndrome | [[XO (45)]] | [[female, sterile, rudimentary ovaries]]
```

```ng-mnemonic
id: ch04-chromosomal-hooks
title: Down, Klinefelter, Turner
trick: **Down to 21** · **Kline-fella has an eXtra X** · **Turner turns up with One X**
meaning: Down's: trisomy 21. Klinefelter's: XXY, a sterile male. Turner's: XO, a sterile female.
prompt: What is the karyotype in Klinefelter's and in Turner's syndrome?
```

```ng-mnemonic
id: ch04-x-linked
title: X-linked recessive disorders
trick: **H**ey **C**olour-blind **H**ero: **H**aemophilia and **C**olour blindness
meaning: Both are X-linked recessive: commoner in males; the son gets the allele from his carrier mother.
prompt: Name two X-linked recessive disorders.
```

**In one breath:** Mendelian disorders: haemophilia and colour blindness (X-linked recessive), sickle-cell (Glu → Val at position 6 of β-globin), phenylketonuria, thalassaemia (α on chromosome 16, β on 11). Chromosomal: Down's (trisomy 21), Klinefelter's (XXY), Turner's (XO).
