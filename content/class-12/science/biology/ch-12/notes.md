# Ch 12 · Ecosystem

An ecosystem is a functional unit of nature in which living organisms interact among themselves and with their physical surroundings. This chapter looks at how an ecosystem is built and how it works: how much organic matter plants produce, how dead matter is broken down, how energy flows along food chains, and how ecological pyramids summarise it all. In the rationalised syllabus, **ecological succession, nutrient cycling (carbon and phosphorus cycles) and ecosystem services are not in boards**.

## Ecosystem: structure and function

Ecosystems range in size from a small pond to a large forest or a sea. Many ecologists regard the entire **biosphere** as a global ecosystem, made of all local ecosystems on Earth. Because the whole is too big to study at once, it is divided into two basic categories: **terrestrial** (forest, grassland, desert) and **aquatic** (pond, lake, wetland, river, estuary). Crop fields and aquariums are **man-made** ecosystems.

**Structure.** An ecosystem has biotic and abiotic components. Their interaction produces a physical structure that is characteristic of each ecosystem. The species composition and **stratification** (the vertical distribution of different species occupying different levels) are its key structural features. In a forest, trees occupy the top layer, shrubs the second, and herbs and grasses the bottom layers.

The components work as a unit when we look at four functions: **productivity**, **decomposition**, **energy flow** and **nutrient cycling**. A **pond** is a simple, self-sustaining example. Its abiotic part is water with dissolved inorganic and organic substances and the rich soil deposit at the bottom. Solar input, temperature cycles, day length and other climatic conditions regulate the rate of function of the whole pond. **Autotrophs** such as phytoplankton, some algae and floating, submerged and marginal plants are found at the edges. **Consumers** are zooplankton, free-swimming and bottom-dwelling forms. **Decomposers** are fungi, bacteria and flagellates, especially abundant at the bottom.

```ng-mnemonic
id: ch12-four-functions
title: Four functions of an ecosystem
trick: **P**ond **D**oes **E**verything **N**aturally
meaning: **P**roductivity, **D**ecomposition, **E**nergy flow, **N**utrient cycling.
prompt: Name the four functional aspects of an ecosystem.
```

**In one breath:** An ecosystem is a functional unit of living and non-living parts. Terrestrial or aquatic, natural or man-made; structure is species composition and stratification; function is productivity, decomposition, energy flow and nutrient cycling. A pond shows all of these.

## Productivity

A constant input of solar energy is the basic requirement for any ecosystem to function. **Primary production** is the amount of biomass or organic matter produced per unit area over a time period by plants during photosynthesis. It is expressed as weight (g m⁻²) or energy (kcal m⁻²). The **rate** of biomass production is **productivity**, expressed in g m⁻² yr⁻¹ or (kcal m⁻²) yr⁻¹, so that the productivity of different ecosystems can be compared.

Productivity has two parts:

- **Gross primary productivity (GPP)**: the rate of production of organic matter during photosynthesis.
- A considerable amount of GPP is used by plants in **respiration (R)**.
- **Net primary productivity (NPP)** is what remains: the biomass available for consumption by heterotrophs (herbivores and decomposers).

:::formula Net primary productivity
NPP = GPP − R
:::

**Secondary productivity** is the rate of formation of new organic matter by consumers.

Primary productivity depends on the plant species of an area, environmental factors, the availability of nutrients and the photosynthetic capacity of plants, so it varies from one ecosystem to another. The annual net primary productivity of the whole biosphere is about **170 billion tons (dry weight)** of organic matter. Despite occupying about **70%** of the surface, the **oceans** produce only about **55 billion tons**; the rest comes from land.

:::tip GPP is not the food supply
Herbivores and decomposers can use only NPP, what is left after plants' own respiration. GPP includes the part plants burn themselves.
:::

```ng-numerical
id: ch12-npp
title: Net primary productivity
question: A grassland has a gross primary productivity of {{G}} g m⁻² yr⁻¹. Plants use {{p}}% of it in respiration. Find the NPP.
var: G | 1000 | 5000 | 100
var: p | 20 | 60 | 5
let: R = G*p/100
answer: G - R
unit: g m⁻² yr⁻¹
dp: 0
tol: 1
step: $R={{p}}\%$ of ${{G}}={{R:0}}$ g m⁻² yr⁻¹.
step: NPP $=$ GPP $-$ R $={{G}}-{{R:0}}=$ **{{G-R:0}} g m⁻² yr⁻¹**.
```

```ng-compare
id: ch12-gpp-vs-npp
title: GPP vs NPP
cols: Gross primary productivity | Net primary productivity
row: Meaning | total rate of organic matter made in photosynthesis | what is left after plants' own respiration
row: Relation | GPP = NPP + R | NPP = GPP − R
row: Available to heterotrophs? | no, part is burnt by plants | yes, to herbivores and decomposers
```

**In one breath:** Primary production is biomass made by plants per unit area; productivity is its rate (g m⁻² yr⁻¹). NPP = GPP − R is what heterotrophs can use. Biosphere NPP ≈ 170 billion tons/year; oceans only ≈ 55 billion tons despite covering 70% of the surface.

## Decomposition

Earthworms are called the "farmer's friends" because they break down complex organic matter and loosen the soil. Similarly, **decomposers** break complex organic matter into inorganic substances like carbon dioxide, water and nutrients; this is **decomposition**. The raw material is **detritus**: dead plant remains (leaves, bark, flowers), dead remains of animals, and faecal matter.

The important steps are:

1. **Fragmentation**: **detritivores** (for example, earthworms) break detritus into smaller particles.
2. **Leaching**: water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts.
3. **Catabolism**: bacterial and fungal **enzymes** degrade detritus into simpler inorganic substances.
4. **Humification**: accumulation of a dark-coloured, amorphous substance called **humus**, which is highly resistant to microbial action and decomposes extremely slowly. Being colloidal, humus serves as a **reservoir of nutrients**.
5. **Mineralisation**: humus is further degraded by some microbes, releasing inorganic nutrients.

Fragmentation, leaching and catabolism happen simultaneously on the detritus; humification and mineralisation happen in the soil.

**What controls the rate?** Chemical composition of the detritus and climate. Decomposition is **slower** if detritus is rich in **lignin and chitin**, and **quicker** if it is rich in **nitrogen and water-soluble substances like sugars**. **Temperature and soil moisture** are the most important climatic factors: **warm and moist** conditions favour decomposition, while **low temperature and anaerobiosis** (lack of oxygen) inhibit it, so organic matter builds up.

:::tip Order of steps
Fragmentation → leaching → catabolism → humification → mineralisation. Humus decomposes very slowly; it is not quickly broken down.
:::

```ng-steps
id: ch12-decomposition
title: How detritus is decomposed
step: **Fragmentation**: detritivores such as earthworms break detritus into small pieces.
step: **Leaching**: water-soluble nutrients sink into the soil and precipitate as unavailable salts.
step: **Catabolism**: bacterial and fungal enzymes break detritus into simple inorganic substances.
step: **Humification**: dark, amorphous **humus** builds up; it resists microbes and is a colloidal nutrient reservoir.
step: **Mineralisation**: some microbes slowly degrade humus, releasing inorganic nutrients.
```

```ng-mnemonic
id: ch12-decomposition-order
title: Order of decomposition steps
trick: **F**riends **L**ike **C**hai on **H**ot **M**ornings
meaning: **F**ragmentation → **L**eaching → **C**atabolism → **H**umification → **M**ineralisation.
prompt: Put the five steps of decomposition in order.
```

```ng-compare
id: ch12-decomposition-rate
title: What speeds up or slows down decomposition
cols: Faster | Slower
row: Chemistry of detritus | rich in nitrogen and sugars | rich in lignin and chitin
row: Climate | warm and moist | cold
row: Oxygen | aerobic | anaerobic (organic matter builds up)
```

**In one breath:** Detritus → fragmentation (detritivores) → leaching → catabolism (enzymes) → humification (slow, colloidal nutrient reservoir) → mineralisation. Fast when rich in nitrogen and sugars and when warm and moist; slow with lignin, chitin, cold and no oxygen.

## Energy flow

Except for deep-sea hydrothermal ecosystems, the **Sun** is the only source of energy for all ecosystems on Earth. Of the incident solar radiation, less than 50% is **photosynthetically active radiation (PAR)**. Plants and photosynthetic bacteria capture only **2–10% of the PAR**, and this small amount sustains the entire living world.

Energy flows in one direction, **from the Sun to producers and then to consumers** (unidirectional). Ecosystems are not exempt from the second law of thermodynamics: they need a constant supply of energy to synthesise the molecules they need and to counteract the universal tendency towards increasing disorderliness. At each step, a large part of the energy is lost as heat.

**Producers** (green plants) are the first trophic level. All animals depend on plants, directly or indirectly, so they are **consumers** (heterotrophs). Herbivores, which feed on producers, are **primary consumers**; animals that eat other animals that eat plants are **secondary consumers**, and so on.

- A **grazing food chain (GFC)** starts with producers: grass → goat → man.
- A **detritus food chain (DFC)** begins with dead organic matter and is made of **decomposers**, heterotrophic organisms, mainly **fungi and bacteria**, also called **saprotrophs**. They secrete digestive enzymes that break detritus into simple inorganic materials, which they absorb.

In an **aquatic ecosystem**, the GFC is the **major conduit** for energy flow. In a **terrestrial ecosystem**, a much **larger fraction of energy flows through the detritus food chain** than through the GFC. The two chains are connected: some organisms of the DFC are prey to GFC animals. Natural interconnection of food chains makes a **food web**.

Each organism occupies a specific place in the food chain: its **trophic level**. Each trophic level has a certain mass of living material at a particular time, called the **standing crop**, measured as biomass or as number per unit area. The number of trophic levels in a grazing food chain is restricted because energy transfer follows the **10 per cent law**: only about **10%** of the energy is transferred to each trophic level from the level below.

:::skeleton Worked example: 10 per cent law
*Producers in a grassland fix 10,000 J of energy. How much reaches a tertiary consumer?*<br>
Primary consumer: 10% of 10,000 = 1,000 J [1]<br>
Secondary consumer: 10% of 1,000 = 100 J [1]<br>
Tertiary consumer: 10% of 100 = **10 J** [1]
:::

```ng-numerical
id: ch12-ten-percent
title: The 10 per cent law
question: Producers in an ecosystem fix {{E}} J of energy. How much energy reaches the consumer {{k}} step(s) up the food chain?
var: E | 1000 | 50000 | 1000
var: k | 1 | 4 | 1
answer: E*0.1^k
unit: J
dp: 1
tol: 1
step: Only about 10% passes to each next trophic level, so energy $=E\times(0.1)^k$.
step: $={{E}}\times(0.1)^{ {{k}} }=$ **{{E*0.1^k:1}} J**.
```

```ng-compare
id: ch12-gfc-vs-dfc
title: Grazing vs detritus food chain
cols: Grazing food chain | Detritus food chain
row: Starts with | living producers | dead organic matter (detritus)
row: First consumers | herbivores | decomposers (fungi, bacteria: saprotrophs)
row: Major in | aquatic ecosystems | terrestrial ecosystems
row: Example | grass → goat → man | dead leaves → fungi and bacteria
```

```ng-mnemonic
id: ch12-ten-ten
title: The 10 per cent law in numbers
trick: **10,000 → 1,000 → 100 → 10**: drop a zero at every step
meaning: About 10% of energy passes up each trophic level; the rest is lost, mostly as heat. So food chains rarely pass four or five levels.
prompt: If producers fix 10,000 J, how much reaches a secondary consumer?
```

**In one breath:** Sun → producers → consumers, one way only; plants catch 2–10% of PAR (PAR < 50% of sunlight). GFC starts with plants (major in water); DFC starts with detritus (major on land). Trophic levels and standing crop; only ≈ 10% of energy passes to each next level.

## Ecological pyramids

The relationship between producers and consumers at successive trophic levels can be drawn as a **pyramid**, with producers at the base and the top carnivore at the apex. There are three types: **pyramid of numbers**, **pyramid of biomass** and **pyramid of energy**. For accuracy, all organisms at each trophic level must be counted at the same time, as a "standing" state.

- In most ecosystems, all three pyramids are **upright**: producers outnumber and outweigh herbivores, which outnumber and outweigh carnivores; energy at a lower level is always more than at a higher level.
- The **pyramid of biomass in the sea** is generally **inverted**: the biomass of fishes far exceeds that of phytoplankton at any moment, because the small standing crop of phytoplankton multiplies very fast.
- The **pyramid of numbers** can be inverted too: a single large tree supports many insects (and fewer birds on them).
- The **pyramid of energy is always upright** and can never be inverted, because some energy is always lost as heat at each step.

```ng-figure
id: ch12-pyramids
title: Pyramid of energy and pyramid of biomass in the sea
svg:
<svg viewBox="0 0 330 150" role="img" aria-label="Upright pyramid of energy and inverted pyramid of biomass in the sea">
<g class="uf" fill-opacity="0.18" stroke="currentColor" stroke-width="1.2"><rect x="20" y="96" width="120" height="22"/><rect x="35" y="74" width="90" height="22"/><rect x="50" y="52" width="60" height="22"/><rect x="72" y="30" width="16" height="22"/><rect x="230" y="96" width="30" height="22"/><rect x="200" y="74" width="90" height="22"/><rect x="185" y="52" width="120" height="22"/></g>
<g font-size="8" fill="currentColor" text-anchor="middle"><text x="80" y="110">Producers</text><text x="80" y="88">Herbivores</text><text x="80" y="66">Carnivores</text><text x="80" y="24">Top</text><text x="245" y="132">Phytoplankton</text><text x="245" y="88">Zooplankton</text><text x="245" y="66">Fishes</text></g>
<g font-size="9" fill="currentColor" text-anchor="middle" font-weight="bold"><text x="80" y="144">Energy: always upright</text><text x="245" y="144">Biomass in sea: inverted</text></g>
</svg>
caption: Left: pyramid of energy, always upright (≈ 10% passes up each level). Right: biomass pyramid in the sea, inverted, because a small, fast-multiplying phytoplankton crop supports a larger biomass of fish.
part: 132, 107 | Producers | Base of the energy pyramid: most energy.
part: 117, 85 | Herbivores | Primary consumers: about 10% of the producers’ energy.
part: 102, 63 | Carnivores | Secondary consumers.
part: 80, 41 | Top carnivore | Least energy, at the apex.
part: 252, 107 | Phytoplankton | Small standing crop that multiplies very fast.
part: 282, 85 | Zooplankton | More biomass than the phytoplankton at any moment.
part: 297, 63 | Fishes | Largest biomass: the pyramid is inverted.
```

**Limitations of ecological pyramids**: they do not take into account the same species belonging to two or more trophic levels; they assume a simple food chain, which almost never exists in nature, and do not accommodate a food web; and **saprophytes are not given any place** in them, even though they play a vital role in the ecosystem.

:::tip Which pyramid can be inverted
Biomass (sea) and numbers (tree) can be inverted; energy never can.
:::

```ng-fill
id: ch12-pyramid-shapes
title: Which pyramids can be inverted?
cols: Pyramid | Usual shape | Inverted when
row: Numbers | upright | [[one large tree supports many insects]]
row: Biomass | upright | [[in the sea (phytoplankton < fishes)]]
row: Energy | [[always upright]] | [[never]]
```

```ng-mnemonic
id: ch12-energy-always-up
title: The pyramid that never flips
trick: **E**nergy is **E**ver upright · **B**iomass flips in the **B**lue sea · **N**umbers flip on a **N**eem tree
meaning: Energy is lost as heat at every step, so its pyramid can never be inverted. Biomass inverts in the sea; numbers invert for a single tree.
prompt: Which ecological pyramid can never be inverted, and why?
```

```ng-draw
id: ch12-draw-pyramids
title: Draw the energy pyramid and the sea biomass pyramid
svg: ref: notes#ch12-pyramids
time: 4
```

**In one breath:** Pyramids of number, biomass and energy have producers at the base. Biomass is inverted in the sea and numbers in a tree ecosystem; energy is always upright. Limits: a species may sit at two levels, food webs are ignored, and saprophytes have no place.
