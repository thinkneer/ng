# Ch 4 · Principles of Inheritance and Variation

Why do you look like your parents, but not exactly like either of them? **Inheritance** is how characters pass from parents to offspring; **variation** is how offspring differ from their parents. This chapter starts with Mendel's peas, builds the rules, then shows where the rules bend: incomplete dominance, co-dominance, linkage, sex-linked genes and genetic disorders. Crosses are the heart of it, so set out every cross the same way: parents, gametes, Punnett square, ratio.

## Mendel and his experiments

Gregor Mendel worked on garden peas for seven years (1856–1863). Peas were a good choice: they have clear contrasting forms of many characters, they naturally self-pollinate, and they can be cross-pollinated by hand. He started with **true-breeding lines**, which give the same trait generation after generation of self-pollination, and studied **seven pairs** of contrasting traits, such as tall vs dwarf stem, round vs wrinkled seed, yellow vs green seed and violet vs white flower. He used large samples and counted carefully. He was the first to apply statistics and mathematical logic to a problem in biology.

**In one breath:** Mendel used true-breeding pea lines and seven pairs of contrasting traits, counted large samples, and treated inheritance mathematically.

## Inheritance of one gene

Mendel crossed tall and dwarf true-breeding plants. All the first-generation (**F1**) plants were tall; no dwarf or intermediate plants appeared. When he let F1 plants self-pollinate, the second generation (**F2**) had tall and dwarf plants in a **3 : 1** ratio. The dwarf trait had not been lost in F1; it was hidden and came back unchanged in F2.

He explained this with "factors" passed unchanged from parent to offspring; we call them **genes**. Different forms of the same gene are **alleles**. A plant has two alleles for each character. If both are the same it is **homozygous** (TT or tt); if they differ it is **heterozygous** (Tt). The genetic make-up is the **genotype**; the visible trait is the **phenotype**. In Tt, the allele that shows (T, tall) is **dominant** and the one that is hidden (t, dwarf) is **recessive**.

The two alleles separate when gametes form, so each gamete gets only one. In the F1 (Tt), half the gametes carry T and half carry t. The British geneticist Reginald Punnett drew a grid to show the fusions, now called the **Punnett square**:

| ♀ \ ♂ | T | t |
|---|---|---|
| **T** | TT (tall) | Tt (tall) |
| **t** | Tt (tall) | tt (dwarf) |

Phenotypic ratio **3 tall : 1 dwarf**; genotypic ratio **1 TT : 2 Tt : 1 tt**.

To find out whether a tall plant is TT or Tt, cross it with the recessive parent (tt). This is a **test cross**. If all offspring are tall, the plant was TT; if half are dwarf, it was Tt (ratio 1 : 1).

These results gave two laws:

- **Law of dominance**: characters are controlled by discrete units (factors) that occur in pairs; in a dissimilar pair, one member (dominant) masks the other (recessive). It explains why F1 shows only one parent's trait and why F2 gives 3 : 1.
- **Law of segregation**: the two alleles of a pair do not blend; they separate during gamete formation, so each gamete receives only one of the two. A homozygote makes one kind of gamete; a heterozygote makes two kinds in equal proportion.

:::skeleton Model answer: monohybrid cross with test cross (3 marks)
Parents: TT (tall) × tt (dwarf) → gametes T and t → F1: all Tt, tall [1]<br>
F1 selfed: Tt × Tt → Punnett square → F2 3 tall : 1 dwarf; genotypes 1 TT : 2 Tt : 1 tt [1]<br>
Test cross: tall plant × tt → all tall means TT; 1 tall : 1 dwarf means Tt [1]
:::

**In one breath:** F1 shows the dominant trait; F2 gives 3 : 1 (phenotype) and 1 : 2 : 1 (genotype). Law of dominance and law of segregation; a test cross with the recessive parent reveals an unknown genotype (1 : 1 if heterozygous).

## When dominance is not complete

Dominance is not a property of the allele alone; it depends on the gene product and the phenotype we look at.

**Incomplete dominance.** In the snapdragon (dog flower, *Antirrhinum*), red (RR) × white (rr) gives pink (Rr) F1. Selfing F1 gives F2 **1 red : 2 pink : 1 white**. Here the phenotypic ratio equals the genotypic ratio, because the heterozygote looks different from both homozygotes. One allele is not completely dominant over the other.

What does "dominant" mean chemically? A gene codes for a product, often an enzyme. A modified allele may make a normal, a less efficient or no product. If one normal copy makes enough enzyme for the normal phenotype, the normal allele looks dominant and the faulty one recessive. Even the same gene can show different dominance for different traits: in peas, one gene controls starch grain size and seed shape. For seed shape (round vs wrinkled), round is dominant; for **starch grain size**, the heterozygote has intermediate grains, so it shows incomplete dominance.

**Co-dominance.** In co-dominance, the F1 shows **both** parental traits fully. The human **ABO blood groups** are the classic case. The gene *I* has **three alleles**, $I^A$, $I^B$ and $i$. $I^A$ and $I^B$ make slightly different sugar polymers on the red cell surface; $i$ makes none. $I^A$ and $I^B$ are both dominant over $i$, but when they are together, both are expressed: **$I^AI^B$ gives group AB**. A person carries only two of the three alleles, so a gene with more than two alleles in the population is an example of **multiple alleles**.

| Genotype | Blood group |
|---|---|
| $I^AI^A$, $I^Ai$ | A |
| $I^BI^B$, $I^Bi$ | B |
| $I^AI^B$ | AB |
| $ii$ | O |

Six genotypes, four phenotypes.

:::tip Incomplete dominance vs co-dominance
Incomplete dominance blends to a new intermediate (pink snapdragon); co-dominance shows both traits side by side (blood group AB).
:::

**In one breath:** Incomplete dominance gives an intermediate heterozygote and a 1 : 2 : 1 F2 (snapdragon); co-dominance expresses both alleles (AB blood group). ABO is controlled by three alleles: multiple alleles, six genotypes, four groups.

## Inheritance of two genes

Next Mendel followed two characters at once: seed colour (yellow Y dominant over green y) and seed shape (round R dominant over wrinkled r). He crossed round yellow (RRYY) with wrinkled green (rryy). F1 was all round yellow (RrYy). F1 makes four kinds of gametes in equal numbers, RY, Ry, rY and ry, and selfing gives a 16-box Punnett square with the F2 phenotypic ratio **9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green**.

Look at one character at a time and each still gives 3 : 1 (12 round : 4 wrinkled; 12 yellow : 4 green). The two characters sort out independently. This is the **law of independent assortment**: when two pairs of traits are combined in a hybrid, the segregation of one pair is independent of the other pair.

A dihybrid test cross, RrYy × rryy, gives four kinds of offspring in a **1 : 1 : 1 : 1** ratio.

Mendel published in 1865, but his work was ignored until **1900**, when de Vries, Correns and von Tschermak independently rediscovered it. Reasons for the neglect: communication was slow, his idea of discrete "factors" did not fit the belief in continuous variation, and he could not show the factors physically.

**In one breath:** Dihybrid F2 = 9 : 3 : 3 : 1 because each gene segregates independently (law of independent assortment); dihybrid test cross = 1 : 1 : 1 : 1. Mendel's work was rediscovered in 1900.

## Chromosomes, linkage and recombination

By 1900 microscopes showed chromosomes in pairs, separating at meiosis. Walter **Sutton** and Theodor **Boveri** noticed that chromosomes behave exactly like Mendel's factors: they occur in pairs, separate at gamete formation, and pairs sort independently. Their **chromosomal theory of inheritance** says genes sit on chromosomes and their pairing and separation explain Mendel's laws.

Thomas Hunt **Morgan** tested this with the fruit fly *Drosophila melanogaster*, a near-perfect organism for genetics: it is easy to grow on simple synthetic medium, completes its life cycle in about **two weeks**, a single mating gives many offspring, males and females are easy to tell apart, and it has many easily seen hereditary variations.

Morgan crossed flies for two genes on the X chromosome and found that the F2 ratios deviated strongly from 9 : 3 : 3 : 1. When two genes were on the same chromosome, the parental combinations appeared much more often than new ones. He called the physical association of genes on a chromosome **linkage**, and the formation of non-parental combinations **recombination**. Genes that are tightly linked show little recombination (for example, white eye and yellow body: about **1.3%**); loosely linked genes show more (white eye and miniature wing: about **37.2%**). His student Alfred **Sturtevant** used recombination frequency as a measure of the distance between genes to draw the first **genetic maps** of chromosomes.

**In one breath:** Sutton and Boveri: genes are on chromosomes. Morgan (*Drosophila*): genes on one chromosome are linked; recombination makes new combinations, rarely for tight linkage (1.3%) and often for loose linkage (37.2%); Sturtevant mapped genes by recombination frequency.

## Polygenic inheritance and pleiotropy

Mendel's traits came in two clear forms. Many human traits do not: height and skin colour range smoothly. These are **polygenic traits**, controlled by **three or more genes**, with the environment also playing a part. In a simple model of skin colour with three genes (A, B, C), each dominant allele adds a little pigment. AABBCC is darkest, aabbcc lightest, and AaBbCc in between; the effect of each allele adds up.

The reverse also happens: one gene can affect several phenotypes. This is **pleiotropy**. Usually the gene affects a metabolic pathway that feeds many traits. In **phenylketonuria**, a single gene mutation causes intellectual disability and also reduced hair and skin pigmentation.

**In one breath:** Polygenic: several genes (plus environment) add up to one continuous trait (skin colour). Pleiotropic: one gene, many effects (phenylketonuria).

## Sex determination

In 1891 **Henking** saw that, during spermatogenesis in some insects, half the sperms received a particular nuclear structure and half did not. He called it the X body; later it was recognised as the **X chromosome**. Chromosomes involved in sex are **sex chromosomes** (allosomes); the rest are **autosomes**.

| Organism | Female | Male | Who decides sex |
|---|---|---|---|
| Grasshopper | XX | **XO** (one X, no partner) | male: sperms with or without X |
| Humans, *Drosophila* | XX | **XY** | male: X or Y sperm (male heterogamety) |
| Birds | **ZW** | ZZ | female: Z or W egg (female heterogamety) |
| Honey bee | fertilised egg (2n = 32) | unfertilised egg (n = 16) | haplodiploid system |

In humans, 22 pairs are autosomes and one pair is the sex chromosomes. Males make X and Y sperms in equal numbers; all ova carry X. So each pregnancy has an equal chance of a boy or a girl, and the sperm decides.

In the **honey bee**, a fertilised egg becomes a female (queen or worker) and an unfertilised egg becomes a male (drone) by parthenogenesis. Males are haploid, so they make sperms by **mitosis**; they have **no father** (and so no sons) but have a grandfather and can have grandsons.

**In one breath:** XO (grasshopper) and XY (humans, *Drosophila*) are male heterogamety; ZW birds are female heterogamety; honey bees are haplodiploid (drones are haploid, from unfertilised eggs, and make sperms by mitosis).

## Mutation and pedigree analysis

A **mutation** is a change in the DNA sequence that changes the genotype and phenotype. Changes to whole chromosomes, such as deletion or duplication of a segment, are **chromosomal aberrations**; they are common in cancer cells. A change in a single base pair is a **point mutation**, as in sickle-cell anaemia. Deletions and insertions of bases are **frameshift mutations**. Chemical and physical factors that cause mutations, such as UV radiation, are **mutagens**.

We cannot do controlled crosses in humans, so we study family records. A **pedigree analysis** traces a trait through several generations of a family, using standard symbols, to work out whether it is dominant or recessive and whether it is on an autosome or the X chromosome.

<figure class="fig">
<svg viewBox="0 0 345 135" role="img" aria-label="Standard pedigree symbols">
<g fill="none" stroke="currentColor" stroke-width="1.4"><rect x="10" y="12" width="18" height="18"/><circle cx="19" cy="60" r="9"/><circle cx="19" cy="104" r="9"/><path d="M19,95V113" stroke-width="2"/><rect x="118" y="12" width="18" height="18" fill="#6A3FA0" fill-opacity="0.6"/><circle cx="127" cy="60" r="9" fill="#6A3FA0" fill-opacity="0.6"/><rect x="118" y="95" width="18" height="18"/><path d="M118,113L136,95M228,21H256M228,58H256M228,62H256M230,84H270M250,84V94M236,94H264M236,94V100M264,94V100"/><rect x="227" y="100" width="18" height="18"/><circle cx="264" cy="109" r="9"/></g>
<g font-size="9" fill="currentColor"><text x="34" y="25">Male</text><text x="34" y="64">Female</text><text x="34" y="108">Carrier</text><text x="142" y="25">Affected male</text><text x="142" y="64">Affected female</text><text x="142" y="108">Dead</text><text x="260" y="25">Mating</text><text x="260" y="58">Mating between</text><text x="260" y="69">relatives</text><text x="278" y="106">Parents and</text><text x="278" y="117">offspring</text></g>
</svg>
<figcaption>Common pedigree symbols. A double line marks a mating between relatives; a dot or half-shading marks a carrier.</figcaption>
</figure>

**In one breath:** Mutation = change in DNA sequence (point, frameshift, chromosomal aberration), caused by mutagens like UV. Pedigree analysis follows a trait through a family tree to decide dominant or recessive, autosomal or X-linked.

## Genetic disorders

**Mendelian disorders** come from a mutation in a single gene and follow Mendel's patterns, so pedigrees can trace them. They may be dominant or recessive, autosomal or X-linked.

- **Haemophilia** (X-linked recessive): a protein in the blood-clotting cascade is affected, so a small cut keeps bleeding. Heterozygous females are **carriers**; the disease is much commoner in males. A daughter is affected only if her mother is at least a carrier and her father is affected. Queen Victoria was a carrier, and several of her descendants had the disease.
- **Sickle-cell anaemia** (autosomal recessive): only $Hb^SHb^S$ people have the disease; $Hb^AHb^S$ are unaffected carriers who pass the allele with 50% probability. A **point mutation** in the β-globin gene changes codon GAG to **GUG**, so **glutamic acid is replaced by valine** at the **sixth position** of the β-globin chain. At low oxygen, the mutant haemoglobin polymerises and red cells become long, sickle-shaped.
- **Phenylketonuria** (autosomal recessive): the person lacks the enzyme that converts phenylalanine to tyrosine. Phenylalanine and its derivatives build up, causing intellectual disability; they are also excreted in urine.
- **Thalassaemia** (autosomal recessive): reduced synthesis of one globin chain gives abnormal haemoglobin and anaemia. **α-thalassaemia** involves the genes HBA1 and HBA2 on **chromosome 16**; **β-thalassaemia** involves the single gene HBB on **chromosome 11**. Thalassaemia is a **quantitative** problem (too few globin molecules), while sickle-cell anaemia is a **qualitative** one (a faulty globin).
- **Colour blindness** (X-linked recessive): a defect in the red or green cone pigments. It affects about **8% of males** and only about **0.4% of females**, because a female needs the allele on both X chromosomes.

**Chromosomal disorders** come from too many, too few or rearranged chromosomes. Failure of chromatids to separate in cell division gives a gain or loss of a chromosome, **aneuploidy**. Failure of cytokinesis after telophase gives a whole extra set of chromosomes, **polyploidy**, common in plants.

| Disorder | Chromosomes | Key features |
|---|---|---|
| Down's syndrome | trisomy of **21** (47) | short, small round head, furrowed tongue, partly open mouth, broad palm with a characteristic crease, delayed physical, psychomotor and mental development (described by Langdon Down, 1866) |
| Klinefelter's syndrome | **XXY** (47) | male, overall masculine but with some feminine development (gynaecomastia), sterile |
| Turner's syndrome | **XO** (45) | female, sterile with rudimentary ovaries, lack of secondary sexual characters |

:::tip Who gets X-linked recessive disorders
A son gets his X from his mother, so an affected son usually has a carrier mother. A daughter is affected only if her father is affected and her mother carries the allele.
:::

**In one breath:** Mendelian disorders: haemophilia and colour blindness (X-linked recessive), sickle-cell (Glu → Val at position 6 of β-globin), phenylketonuria, thalassaemia (α on chromosome 16, β on 11). Chromosomal: Down's (trisomy 21), Klinefelter's (XXY), Turner's (XO).
