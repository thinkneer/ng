# Ch 11 · Organisms and Populations

Ecology studies how organisms interact with each other and with their surroundings. In the rationalised syllabus, this chapter is about **populations**: groups of individuals of one species living in an area. We look at what a population has that a single individual does not (birth rate, death rate, sex ratio, age structure), how populations grow, and how populations of different species interact. The first part of the NCERT chapter, "Organism and its environment" (abiotic factors, responses, adaptations), is **not in boards**.

## Population attributes

A single organism has a birth and a death, but a **population** has a **birth rate** and a **death rate**. These are expressed **per capita**, relative to the members of the population.

- **Birth rate**: if a pond had 20 lotus plants last year and 8 new plants were added by reproduction, the birth rate is 8 ÷ 20 = **0.4 offspring per lotus per year**.
- **Death rate**: if 4 of 40 fruit flies in a laboratory population die during a week, the death rate is 4 ÷ 40 = **0.1 individuals per fruit fly per week**.
- **Sex ratio**: an individual is male or female, but a population has a ratio, for example 60% females and 40% males.
- **Age distribution**: a population has individuals of different ages. Plotting the proportion in each age group gives an **age pyramid**. For human populations it shows pre-reproductive, reproductive and post-reproductive groups and tells us whether the population is **expanding**, **stable** or **declining**.

```ng-figure
id: ch11-age-pyramids
title: Age pyramids
svg:
<svg viewBox="0 0 330 140" role="img" aria-label="Age pyramids for expanding, stable and declining populations">
<g class="uf" fill-opacity="0.15" stroke="currentColor" stroke-width="1.2"><path d="M55,20L95,104H15Z"/><path d="M150,20L175,40L180,104H120L125,40Z"/><path d="M262,20L292,36L300,64L282,104H242L224,64L232,36Z"/></g>
<path stroke="currentColor" stroke-dasharray="3 2" stroke-width="0.8" d="M15,76H95M15,48H95M120,76H180M120,48H180M224,76H300M224,48H300"/>
<g font-size="9" fill="currentColor" text-anchor="middle" font-weight="bold"><text x="55" y="122">Expanding</text><text x="150" y="122">Stable</text><text x="262" y="122">Declining</text></g>
<g font-size="8" fill="currentColor" text-anchor="middle"><text x="55" y="134">broad base (triangle)</text><text x="150" y="134">bell-shaped</text><text x="262" y="134">narrow base (urn)</text></g>
</svg>
caption: Bands from bottom to top: pre-reproductive, reproductive, post-reproductive. A broad base of young people means an expanding population; similar bands mean a stable one; fewer young than adults means a declining one.
part: 55, 88 | Expanding population | Broad base: many pre-reproductive individuals (triangle).
part: 150, 88 | Stable population | Bands of similar width (bell-shaped).
part: 262, 88 | Declining population | Fewer young than adults (urn-shaped).
part: 55, 36 | Post-reproductive band | Top band of each pyramid.
part: 150, 62 | Reproductive band | Middle band of each pyramid.
```

**Population density (N)** is the size of a population. It does not always have to be a count: percentage cover or biomass can be better (one huge banyan tree and 200 carrot-grass plants in an area should not be compared by numbers). Sometimes only **relative density** is needed, for example the number of fish caught per trap. For tigers in a reserve, density is often estimated indirectly from **pugmarks and faecal pellets**.

```ng-numerical
id: ch11-per-capita-rate
title: Per capita birth rate
question: A pond had {{N}} lotus plants last year. This year {{b}} new plants were added by reproduction. Find the birth rate.
var: N | 20 | 100 | 5
var: b | 4 | 40 | 2
answer: b/N
unit: per plant per year
dp: 2
tol: 2
step: Birth rate $=\dfrac{\text{new individuals}}{\text{population}}=\dfrac{ {{b}} }{ {{N}} }$.
step: $=$ **{{b/N:2}} offspring per plant per year**.
```

```ng-fill
id: ch11-pyramid-shapes
title: Three age pyramids
cols: Shape | Young vs adults, and the future
row: Triangle (broad base) | [[many more young: expanding population]]
row: Bell | [[young ≈ adults: stable population]]
row: Urn (narrow base) | [[fewer young: declining population]]
```

```ng-mnemonic
id: ch11-pyramid-shapes-hook
title: Pyramid shapes
trick: **T**omorrow **B**etter or **U**h-oh: **T**riangle → **B**ell → **U**rn
meaning: **T**riangle = expanding; **B**ell = stable; **U**rn = declining.
prompt: Which age-pyramid shape shows a declining population?
```

```ng-draw
id: ch11-draw-pyramids
title: Draw the three age pyramids
svg: ref: notes#ch11-age-pyramids
time: 3
```

**In one breath:** Populations have birth and death rates (per capita), sex ratio and age distribution. Age pyramids show expanding (broad base), stable (bell) or declining (urn) populations. Density can be numbers, cover, biomass or relative counts; tigers are counted from pugmarks and faecal pellets.

## Population growth

Population density changes through four processes. **Natality (B)** and **immigration (I)** add individuals; **mortality (D)** and **emigration (E)** remove them. Immigration is individuals of the same species coming in from elsewhere; emigration is individuals leaving.

:::formula Population change
$N_{t+1} = N_t + [(B + I) - (D + E)]$
:::

Under normal conditions births and deaths matter most; immigration and emigration matter in special cases, such as a new habitat being colonised.

### Exponential growth

If resources (food and space) are **unlimited**, each species grows to its full potential. Let N be population size, b the per capita birth rate and d the per capita death rate. Then $dN/dt = (b - d) \times N$. Writing $r = b - d$:

:::formula Exponential growth
$\dfrac{dN}{dt} = rN$, integrated form $N_t = N_0\,e^{rt}$
:::

Here **r** is the **intrinsic rate of natural increase**, a key measure of the biotic potential of a population. Values from NCERT: Norway rat **0.015**, flour beetle **0.12**; for the human population of India in 1981, r was **0.0205**. Plotting N against time gives a **J-shaped curve**. Any species growing exponentially under unlimited resources can reach enormous numbers in a short time.

### Logistic growth

No natural population has unlimited resources forever. Resources are finite, so competition sets in and the "fittest" survive. Each habitat can support only a certain maximum number of a species: its **carrying capacity (K)**. A population growing in a habitat with limited resources shows an initial **lag phase**, then phases of **acceleration** and **deceleration**, and finally an **asymptote** when N reaches K. The curve is **sigmoid (S-shaped)**; this is **Verhulst–Pearl logistic growth**.

:::formula Logistic growth
$\dfrac{dN}{dt} = rN\left(\dfrac{K - N}{K}\right)$
:::

As N approaches K, the term (K − N)/K approaches 0 and growth stops. Since resources for most animals are finite, the logistic model is considered more realistic.

```ng-graph
id: ch11-growth-graph
title: Exponential vs logistic growth
x: time (t) | 0 | 60
y: population (N) | 0 | 1200
curve: exponential (J) | N0*exp(r*x)
curve: logistic (S) | K/(1+((K-N0)/N0)*exp(-r*x))
slider: r | $r$ (intrinsic rate) | 0.05 | 0.40 | 0.01 | 0.15
slider: K | $K$ (carrying capacity) | 200 | 1000 | 50 | 600
slider: N0 | $N_0$ (start) | 5 | 50 | 5 | 10
preset: Fast breeder | r=0.35, K=600, N0=10
preset: Slow breeder | r=0.08, K=600, N0=10
note: Both curves start together. The J-curve shoots up without limit; the S-curve bends over and levels off at $K$, where $(K-N)/K=0$.
```

```ng-figure
id: ch11-growth-curves
title: J-shaped and S-shaped growth curves
svg:
<svg viewBox="0 0 330 160" role="img" aria-label="Exponential J-shaped and logistic S-shaped growth curves">
<path fill="none" stroke="currentColor" stroke-width="1.2" d="M40,140V12M40,140H310"/>
<path fill="none" stroke="currentColor" stroke-dasharray="4 3" d="M40,44H310"/>
<path class="u" fill="none" stroke-width="2" d="M40,136C120,134,160,120,180,96S210,20,222,12"/>
<path fill="none" stroke="#E0B400" stroke-width="2" d="M40,136C110,134,140,110,165,80S220,46,310,45"/>
<g font-size="9" fill="currentColor"><text x="226" y="20">a: exponential (J)</text><text x="230" y="60">b: logistic (S)</text><text x="290" y="40">K</text><text x="10" y="70" transform="rotate(-90 14 70)">Population (N)</text><text x="160" y="154">Time (t)</text><text x="44" y="40">carrying capacity</text></g>
</svg>
caption: Curve a (J-shaped): unlimited resources. Curve b (S-shaped): limited resources; growth levels off at the carrying capacity K.
part: 205, 50 | Exponential (J) curve | Unlimited resources: dN/dt = rN.
part: 165, 80 | Logistic (S) curve | Limited resources: growth slows as N nears K.
part: 140, 44 | Carrying capacity (K) | Maximum population the habitat can support; the asymptote.
part: 90, 132 | Lag phase | Slow start before acceleration.
```

:::skeleton Worked example: per capita rates
*In a pond of 50 frogs, 10 tadpoles became frogs and 5 frogs died in a year. Find the birth rate, death rate and net change.*<br>
Birth rate = 10/50 = **0.2 per frog per year** [1]<br>
Death rate = 5/50 = **0.1 per frog per year** [1]<br>
Net increase = (10 − 5) = 5, so next year N = **55** (no migration) [1]
:::

```ng-numerical
id: ch11-logistic-rate
title: Growth rate in the logistic model
question: A population has $r={{r}}$ per year, carrying capacity $K={{K}}$ and present size $N={{N}}$. Find its growth rate $dN/dt$.
var: r | 0.1 | 0.5 | 0.05
var: K | 500 | 2000 | 100
var: N | 100 | 400 | 20
answer: r*N*(K-N)/K
unit: individuals per year
dp: 1
tol: 2
step: $\dfrac{dN}{dt}=rN\left(\dfrac{K-N}{K}\right)={{r}}\times{{N}}\times\dfrac{ {{K}}-{{N}} }{ {{K}} }$.
step: $={{r*N:1}}\times{{(K-N)/K:3}}=$ **{{r*N*(K-N)/K:1}} per year**.
```

```ng-compare
id: ch11-j-vs-s
title: Exponential vs logistic growth
cols: Exponential | Logistic
row: Resources | unlimited | limited
row: Equation | $dN/dt = rN$ | $dN/dt = rN(K-N)/K$
row: Curve | J-shaped | S-shaped (sigmoid)
row: Upper limit | none | carrying capacity K
row: Realistic? | rarely, for short periods | more realistic
```

```ng-mnemonic
id: ch11-bide
title: What changes population size
trick: **BIDE**: **B**irths and **I**mmigrants come in, **D**eaths and **E**migrants go out
meaning: $N_{t+1} = N_t + [(B + I) - (D + E)]$.
prompt: Write the equation for population change.
```

```ng-draw
id: ch11-draw-growth-curves
title: Draw the J and S growth curves
svg: ref: notes#ch11-growth-curves
time: 3
```

**In one breath:** $N_{t+1} = N_t + [(B + I) - (D + E)]$. Unlimited resources: $dN/dt = rN$, J-curve (r: Norway rat 0.015, flour beetle 0.12, India 1981 0.0205). Limited resources: $dN/dt = rN(K - N)/K$, S-curve levelling at carrying capacity K: more realistic.

## Life history variation

Populations evolve to **maximise their reproductive fitness** (Darwinian fitness, a high r) in their habitat. Under different selection pressures, organisms evolve different strategies. Some breed **only once in their lifetime**, like the Pacific salmon fish and bamboo; others breed **many times**, like most birds and mammals. Some produce a **large number of small-sized offspring**, like oysters and pelagic fishes; others produce a **small number of large-sized offspring**, like birds and mammals. Ecologists suggest that life history traits evolve in relation to the constraints of the abiotic and biotic environment.

**In one breath:** Life histories maximise reproductive fitness: breed once (Pacific salmon, bamboo) or many times (birds, mammals); many small offspring (oysters, pelagic fish) or few large ones (birds, mammals).

## Population interactions

No species lives alone; populations of different species interact. The interactions can be beneficial (+), detrimental (−) or neutral (0) to each partner.

```ng-fill
id: ch11-interactions
title: Population interactions
cols: Interaction | Signs | Example
row: Mutualism | [[+ / +]] | lichens; mycorrhiza; fig and wasp
row: Competition | [[− / −]] | flamingoes and fishes for zoo­plankton
row: Predation | + / [[−]] | tiger eating deer
row: Parasitism | + / − | [[*Cuscuta* on hedge plants]]
row: Commen­salism | + / [[0]] | [[orchid on mango; cattle egret]]
row: Amen­salism | [[− / 0]] | one harmed, other unaffected
```

Predation, parasitism and commensalism share a feature: the interacting species live closely together.

**Predation** is nature's way of transferring energy fixed by plants to higher trophic levels. Predators also **keep prey populations under control**. When the **prickly pear cactus** was introduced into Australia in the early 1920s, it spread rapidly over millions of hectares because it had no predators there; it was finally controlled by introducing a **cactus-feeding predator (a moth)** from its natural habitat. Biological control of pests rests on this ability. Predators also maintain **species diversity** by reducing competition among prey: when **Robert Paine** removed the starfish ***Pisaster*** from an intertidal community on the American Pacific coast, more than 10 species of invertebrates became extinct within a year, because of competition among them.

Prey have evolved defences. Some insects and frogs are **cryptically coloured (camouflaged)**. Some are poisonous: the **monarch butterfly** is distasteful to its predator, the bird, because of a chemical it acquires by feeding on a poisonous weed as a caterpillar. Plants defend themselves morphologically, with **thorns** (*Acacia*, cactus), and chemically: the **Calotropis** weed makes highly poisonous **cardiac glycosides**, so cattle and goats never browse it. Many chemicals we extract from plants, such as **nicotine, caffeine, quinine, strychnine and opium**, are defences against grazers and browsers.

**Competition** is commonest between closely related species competing for the same, limited resource, but unrelated species compete too: in some shallow South American lakes, visiting **flamingoes** and resident **fishes** compete for their common food, the **zooplankton**. Competition can occur even when resources are not limiting, through **interference**: one species reduces the feeding efficiency of another. When goats were introduced on the Galapagos Islands, the **Abingdon tortoise** became extinct within a decade, because goats were better browsers. A species whose distribution is restricted by a competitively superior species can expand its range dramatically when the competitor is removed: **competitive release**. In Scotland's rocky sea coasts, **Connell** showed that the larger, competitively superior barnacle ***Balanus*** dominates the intertidal area and excludes the smaller barnacle ***Chthamalus*** from that zone.

**Gause's competitive exclusion principle** states that two closely related species competing for the same resources cannot coexist indefinitely; the competitively inferior one is eliminated eventually. But species facing competition can evolve ways to coexist. **Resource partitioning** is one: **MacArthur** showed that five closely related species of **warblers** living on the same tree avoided competition and coexisted because of behavioural differences in their foraging activities.

**Parasitism.** Many parasites are **host-specific** (they can parasitise only one host species), so host and parasite tend to co-evolve. Parasites have special adaptations: **loss of unnecessary sense organs**, **adhesive organs or suckers** to cling to the host, **loss of the digestive system**, and **high reproductive capacity**. Life cycles can be complex: the **human liver fluke** depends on two intermediate hosts, a **snail and a fish**. **Ectoparasites** feed on the external surface of the host (lice on humans, ticks on dogs, copepods on marine fish, and ***Cuscuta***, a parasitic plant with no chlorophyll and no leaves, on hedge plants). **Endoparasites** live inside the host (in liver, kidney, lungs, red blood cells). In **brood parasitism**, the parasitic bird lays eggs in its host's nest and lets the host incubate them: the **cuckoo (koel)** lays eggs in a **crow's** nest, and its eggs have evolved to resemble the host's in size and colour.

**Commensalism**: one species benefits and the other is neither harmed nor benefited. An **orchid** growing as an epiphyte on a mango branch; **barnacles** growing on the back of a whale; the **cattle egret** foraging close to grazing **cattle**, catching insects stirred up by them; and the **clown fish** living among the stinging tentacles of a **sea anemone**, protected from predators.

**Mutualism**: both species benefit. **Lichens** are an intimate association between a **fungus** and photosynthesising **algae or cyanobacteria**. **Mycorrhizae** are associations between fungi and the roots of higher plants: the fungi help absorb nutrients from soil; the plant gives carbohydrates. Many plants offer rewards (nectar, fruits) to pollinators and seed dispersers. In the **fig and wasp** pair, each fig species is pollinated by only one partner wasp species; the female wasp uses the fig fruit for laying eggs and nourishing larvae, and pollinates the fig's flowers while searching for egg-laying sites. The **Mediterranean orchid *Ophrys*** uses **sexual deceit**: one petal looks like a female bee, so a male bee "pseudocopulates" with it and is dusted with pollen, which he carries to another flower.

:::tip Commensalism vs mutualism
Commensalism: +/0 (orchid on mango, cattle egret). Mutualism: +/+ (lichen, mycorrhiza, fig–wasp). Clown fish and sea anemone is listed by NCERT under commensalism.
:::

```ng-mnemonic
id: ch11-signs
title: Commensalism or amensalism?
trick: **Com**mensalism = "**Come** sit with me" · **A**mensalism = "**A**h, me hurt, you fine"
meaning: Commensalism **+/0**: the guest gains, the host is unaffected (orchid on mango). Amensalism **−/0**: one is harmed, the other unaffected.
prompt: What are the signs for commensalism and amensalism?
```

```ng-compare
id: ch11-commensalism-vs-mutualism
title: Commen­salism vs mutualism
cols: Commen­salism | Mutualism
row: Signs | + / 0 | + / +
row: Examples | orchid on mango; barnacles on whale; cattle egret and cattle; clown fish and sea anemone | lichen (fungus + alga); mycorrhiza; fig and wasp; Ophrys and bee
```

```ng-steps
id: ch11-prickly-pear
title: Biological control of prickly pear in Australia
step: Prickly pear cactus was **introduced into Australia** in the early 1920s.
step: With **no natural predators**, it spread over millions of hectares of rangeland.
step: A **cactus-feeding moth** was brought in from its natural habitat.
step: The moth (a predator) **brought the cactus under control**. Predators keep prey populations in check.
```

**In one breath:** Mutualism +/+, competition −/−, predation and parasitism +/−, commensalism +/0, amensalism −/0. Predators control prey (prickly pear and moth; Paine's *Pisaster*); prey defend with camouflage, distasteful chemicals and thorns. Gause's competitive exclusion, Connell's barnacles, MacArthur's warblers (resource partitioning). Parasites (liver fluke, *Cuscuta*, cuckoo); commensals (orchid on mango, cattle egret); mutualists (lichens, mycorrhiza, fig–wasp, *Ophrys*).
