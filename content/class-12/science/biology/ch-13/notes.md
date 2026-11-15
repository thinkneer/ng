# Ch 13 · Biodiversity and Conservation

Life on Earth is astonishingly varied, and that variety is disappearing fast. This chapter asks four questions: how much biodiversity there is and how it is spread across the planet, why it matters, why we are losing it, and how we can conserve it. It is a fact-rich chapter: numbers, examples and the species–area equation come up again and again.

## Levels of biodiversity

The term **biodiversity** was popularised by the sociobiologist **Edward Wilson** to describe the combined diversity at all levels of biological organisation. The most important levels are:

- **Genetic diversity**: a single species can show high diversity at the genetic level over its range. The medicinal plant ***Rauwolfia vomitoria*** growing in different Himalayan ranges varies in the potency and concentration of the active chemical (**reserpine**) it makes. India has more than **50,000** genetically different strains of **rice** and **1,000** varieties of **mango**.
- **Species diversity**: diversity at the species level. The **Western Ghats** have a greater amphibian species diversity than the **Eastern Ghats**.
- **Ecological diversity**: diversity at the ecosystem level. India, with deserts, rain forests, mangroves, coral reefs, wetlands, estuaries and alpine meadows, has greater ecosystem diversity than a Scandinavian country like Norway.

**How many species are there?** According to the IUCN (2004), slightly more than **1.5 million** plant and animal species have been described. Many more remain undiscovered, especially insects and microbes. Using species–area relationships, **Robert May** estimated the global species diversity at about **7 million**. Of all recorded species, more than **70% are animals**, and plants (including algae, fungi, bryophytes, gymnosperms and angiosperms) make up no more than **22%**. Among animals, **insects** are the most species-rich group, making up more than **70%**: of every 10 animals, 7 are insects. The number of fungal species is more than the combined total of fishes, amphibians, reptiles and mammals.

India has only **2.4%** of the world's land area but **8.1%** of its species diversity, which makes it one of the **12 mega-diversity countries**. Nearly **45,000** plant species and twice as many animal species have been recorded here.

```ng-fill
id: ch13-levels
title: Three levels of biodiversity
cols: Level | NCERT example
row: Genetic | [[*Rauwolfia vomitoria*: reserpine varies across the Himalaya; 50,000 rice strains, 1,000 mango varieties]]
row: Species | [[Western Ghats have more amphibian species than the Eastern Ghats]]
row: Ecological | [[India (deserts to coral reefs) vs Norway]]
```

```ng-mnemonic
id: ch13-india-numbers
title: India's share of the world
trick: **2.4 land, 8.1 life**
meaning: India has **2.4%** of the world's land but **8.1%** of its species: one of **12** mega-diversity countries.
prompt: What share of global species diversity does India hold?
```

**In one breath:** Biodiversity (term popularised by Edward Wilson) exists at genetic (*Rauwolfia vomitoria* reserpine; 50,000 rice strains, 1,000 mango varieties), species (Western Ghats amphibians) and ecological levels. About 1.5 million species described, about 7 million estimated (Robert May); over 70% animals, insects over 70% of animals. India: 2.4% of land, 8.1% of species, a mega-diversity country.

## Patterns of biodiversity

**Latitudinal gradients.** Species diversity generally **decreases from the equator towards the poles**. Tropics (23.5° N to 23.5° S) harbour more species than temperate or polar areas. Colombia, near the equator, has nearly **1,400** species of birds, New York at 41° N has **105** and Greenland at 71° N only **56**. India, largely in the tropics, has more than **1,200** species of birds. The largely tropical **Amazonian rain forest** has the greatest biodiversity on Earth: more than 40,000 species of plants, 3,000 of fishes, 1,300 of birds, 427 of mammals, 427 of amphibians, 378 of reptiles and more than 1,25,000 invertebrates.

Why are the tropics so rich? Ecologists offer three explanations:

1. **Speciation is a function of time.** Temperate regions were subjected to frequent glaciations in the past, while tropical latitudes remained relatively undisturbed for millions of years, giving a long evolutionary time for diversification.
2. Tropical environments are **less seasonal**, relatively **more constant and predictable**, which promotes niche specialisation and greater species diversity.
3. More **solar energy** is available in the tropics, which contributes to higher productivity and, indirectly, greater diversity.

**Species–area relationships.** During his explorations of South American jungles, the German naturalist and geographer **Alexander von Humboldt** observed that within a region, **species richness increases with explored area, but only up to a limit**. The relationship between species richness and area for many taxa (angiosperms, birds, bats, freshwater fishes) turns out to be a **rectangular hyperbola**. On a logarithmic scale, it is a **straight line**:

:::formula Species–area relationship
$\log S = \log C + Z \log A$, or $S = CA^Z$ (S = species richness, A = area, Z = slope / regression coefficient, C = Y-intercept)
:::

Ecologists found that **Z** lies in the range **0.1 to 0.2** regardless of the taxonomic group or region. But when the relationship is analysed for **very large areas like entire continents**, the slope is much steeper, with **Z between 0.6 and 1.2**. For frugivorous (fruit-eating) birds and mammals in the tropical forests of different continents, Z is **1.15**.

```ng-graph
id: ch13-species-area-graph
title: Species–area line on log–log axes
x: log A | 0 | 4
y: log S | 0 | 6
curve: log S | log(C) + Z*x
slider: C | $C$ (intercept) | 1 | 100 | 1 | 10
slider: Z | $Z$ (slope) | 0.1 | 1.2 | 0.05 | 0.15
preset: Most regions | Z=0.15
preset: Whole continents | Z=0.9
preset: Frugivorous birds and mammals | Z=1.15
note: On log–log axes $S=CA^Z$ is a straight line of slope $Z$ and intercept $\log C$. Steeper lines (bigger $Z$) mean area matters far more.
```

```ng-numerical
id: ch13-area-increase
title: How many more species in a bigger area?
question: For a group with $Z={{Z}}$, the area surveyed is increased {{k}} times. By what factor does species richness increase?
var: Z | 0.10 | 0.20 | 0.01
var: k | 2 | 100 | 2
answer: k^Z
unit: times
dp: 2
tol: 2
step: $S=CA^Z$, so $\dfrac{S_2}{S_1}=\left(\dfrac{A_2}{A_1}\right)^Z={{k}}^{ {{Z}} }$.
step: $=$ **{{k^Z:2}} times**: a big rise in area gives only a modest rise in species.
```

```ng-figure
id: ch13-species-area
title: Species–area relationship
svg:
<svg viewBox="0 0 330 150" role="img" aria-label="Species–area curve and its log–log straight line">
<path fill="none" stroke="currentColor" stroke-width="1.2" d="M30,130V12M30,130H150M190,130V12M190,130H310"/>
<path class="u" fill="none" stroke-width="2" d="M32,128C40,70,70,40,148,30"/>
<path class="u" fill="none" stroke-width="2" d="M196,118L304,30"/>
<g font-size="9" fill="currentColor"><text x="80" y="144">Area (A)</text><text x="230" y="144">log A</text><text x="4" y="72" transform="rotate(-90 12 72)">Species (S)</text><text x="168" y="72" transform="rotate(-90 176 72)">log S</text><text x="250" y="96">slope = Z</text><text x="58" y="112">rectangular hyperbola</text></g>
</svg>
caption: Species richness rises with area and levels off (left); on log–log axes it becomes a straight line whose slope is Z (right).
part: 80, 44 | Species–area curve | Rectangular hyperbola: richness rises with area, then levels off.
part: 250, 74 | Log–log line | log S = log C + Z log A: a straight line.
part: 300, 34 | Slope = Z | Usually 0.1–0.2; 0.6–1.2 for whole continents.
part: 196, 118 | Intercept (log C) | Where the line meets the log S axis.
```

```ng-fill
id: ch13-latitudinal-birds
title: Bird species and latitude
cols: Place | Latitude | Bird species
row: Colombia | near the equator | [[about 1,400]]
row: New York | 41° N | [[105]]
row: Greenland | 71° N | [[56]]
row: India | largely tropical | [[more than 1,200]]
```

```ng-mnemonic
id: ch13-tropics-rich
title: Why the tropics are so rich
trick: **T**ime, **S**teady, **S**unshine
meaning: Long undisturbed **t**ime for speciation (no glaciations); **s**teady, less seasonal climate (niche specialisation); more **s**olar energy (higher productivity).
prompt: Give three reasons why the tropics have more species.
```

```ng-draw
id: ch13-draw-species-area
title: Draw the species–area curve and its log–log line
svg: ref: notes#ch13-species-area
time: 3
```

**In one breath:** Diversity falls from equator to poles (Colombia 1,400 birds, New York 105, Greenland 56); tropics are rich because of long undisturbed time, constant environments and more solar energy. Humboldt: $\log S = \log C + Z\log A$; Z = 0.1–0.2 normally, 0.6–1.2 for continents (1.15 for frugivorous birds and mammals).

## Importance of species diversity

Does the number of species matter for an ecosystem? For many decades ecologists believed that communities with more species tend to be more stable than those with fewer. A stable community should not show too much variation in productivity from year to year; it must be resistant or resilient to occasional disturbances and resistant to invasion by alien species.

**David Tilman**'s long-term ecosystem experiments in outdoor plots found that plots with **more species showed less year-to-year variation in total biomass**. He also showed that increased diversity contributed to **higher productivity**.

The Stanford ecologist **Paul Ehrlich** explained why losing species matters with the **rivet popper hypothesis**. In an airplane (the ecosystem), all parts are joined by thousands of rivets (species). If every passenger pops a rivet to take home, the plane may not be affected at first, but as more rivets are removed it becomes dangerously weak. Losing rivets on the wings (key species that drive major ecosystem functions) is a more serious threat to flight safety than losing a few rivets on the seats or windows.

```ng-steps
id: ch13-rivet-popper
title: Ehrlich's rivet popper hypothesis
step: The **airplane** is an ecosystem; its thousands of **rivets** are species.
step: Each passenger pops a rivet and takes it home: at first the plane flies on (**redundancy**).
step: As more rivets go, the plane becomes **dangerously weak** over time.
step: Losing rivets on the **wings** (key species driving major ecosystem functions) is far more serious than losing seats' rivets.
```

**In one breath:** Richer communities are more stable and productive (Tilman's plots). Ehrlich's rivet popper hypothesis: each species is a rivet; losing key "wing" rivets endangers the whole ecosystem.

## Loss of biodiversity

The colonisation of tropical Pacific islands by humans is said to have led to the extinction of more than 2,000 species of native birds. The **IUCN Red List (2004)** documents the extinction of **784 species** (338 vertebrates, 359 invertebrates and 87 plants) in the last 500 years. Recent extinctions include the **dodo** (Mauritius), **quagga** (Africa), **thylacine** (Australia), **Steller's sea cow** (Russia) and three subspecies of **tiger** (Bali, Javan, Caspian). The last twenty years alone saw the disappearance of 27 species. Currently, more than 15,500 species worldwide face the threat of extinction; **12% of all bird species, 23% of mammals, 32% of amphibians and 31% of gymnosperms** are threatened. Current extinction rates are estimated to be **100 to 1,000 times faster** than in pre-human times, and humans are largely responsible: some ecologists warn that we are in the middle of a **sixth extinction**.

Loss of biodiversity in a region may lead to a **decline in plant production**, **lowered resistance to environmental perturbations** such as drought, and **increased variability** in certain ecosystem processes such as plant productivity, water use and pest and disease cycles.

**Causes: "The Evil Quartet".**

1. **Habitat loss and fragmentation**, the most important cause. Tropical rain forests once covered more than **14%** of the Earth's land surface; now they cover **no more than 6%**. The **Amazon rain forest**, so huge it is called the "**lungs of the planet**", is being cut and cleared for cultivating **soya beans** or converting to grasslands for raising **beef cattle**. When large habitats are broken into small fragments, mammals and birds that need large territories, and animals with migratory habits, are badly affected.
2. **Over-exploitation**. When "need" turns to "greed", natural resources are over-exploited. Many species extinct in the last 500 years, such as **Steller's sea cow** and the **passenger pigeon**, were over-exploited by humans. Many marine fish populations are over-harvested today.
3. **Alien species invasions**. Some introduced species turn invasive and cause decline or extinction of native species. The **Nile perch** introduced into **Lake Victoria** in East Africa led to the extinction of an ecologically unique assemblage of more than **200 species of cichlid fish**. Invasive weeds such as **carrot grass (*Parthenium*)**, ***Lantana*** and **water hyacinth (*Eichhornia*)** threaten native species. The illegal introduction of the **African catfish *Clarias gariepinus*** for aquaculture threatens the indigenous catfishes in our rivers.
4. **Co-extinctions**. When a species becomes extinct, the plant and animal species associated with it obligatorily also become extinct. When a host fish species becomes extinct, its unique assemblage of parasites meets the same fate. Another example is a co-evolved plant–pollinator mutualism, where extinction of one invariably leads to the extinction of the other.

:::tip The Evil Quartet
Habitat loss and fragmentation (most important), over-exploitation, alien species invasions and co-extinctions. Pair each with its NCERT example.
:::

```ng-fill
id: ch13-evil-quartet
title: The Evil Quartet and its examples
cols: Cause | NCERT example
row: Habitat loss and fragmentation | [[rain forests 14% → 6% of land; Amazon cleared for soya and beef cattle]]
row: Over-exploitation | [[Steller's sea cow, passenger pigeon]]
row: Alien species invasions | [[Nile perch in Lake Victoria (200+ cichlids lost); *Parthenium*, *Lantana*, water hyacinth; *Clarias gariepinus*]]
row: Co-extinctions | [[host fish and its parasites; plant and its co-evolved pollinator]]
```

```ng-mnemonic
id: ch13-hoac
title: The four causes of biodiversity loss
trick: **HOAC**: "**H**ow **O**ur **A**nimals **C**ollapse"
meaning: **H**abitat loss and fragmentation (most important), **O**ver-exploitation, **A**lien species invasions, **C**o-extinctions.
prompt: Name the four causes in the Evil Quartet.
```

```ng-mnemonic
id: ch13-recent-extinctions
title: Recent extinctions
trick: **D**o **Q**uiet **T**igers **S**leep?
meaning: **D**odo (Mauritius), **Q**uagga (Africa), **T**hylacine (Australia), **S**teller's sea cow (Russia), plus three **tiger** subspecies (Bali, Javan, Caspian).
prompt: Name four recently extinct animals and where they lived.
```

**In one breath:** IUCN (2004): 784 extinctions in 500 years (dodo, quagga, thylacine, Steller's sea cow, three tiger subspecies); extinction now 100–1,000 times faster: a sixth extinction. Evil Quartet: habitat loss (rain forests 14% → 6%; Amazon), over-exploitation (sea cow, passenger pigeon), alien invasions (Nile perch, *Parthenium*, *Lantana*, water hyacinth, *Clarias gariepinus*) and co-extinctions.

## Why and how to conserve biodiversity

**Why?** The reasons fall into three groups:

- **Narrowly utilitarian**: humans get countless direct benefits: food (cereals, pulses, fruits), firewood, fibre, construction material, industrial products (tannins, lubricants, dyes, resins, perfumes) and medicines. More than **25%** of the drugs sold worldwide come from plants, and **25,000** plant species contribute to traditional medicines used by native peoples. Exploring molecular, genetic and species-level diversity for products of economic importance is **bioprospecting**.
- **Broadly utilitarian**: biodiversity provides ecosystem services. The **Amazon forest** is estimated to produce, through photosynthesis, about **20% of the total oxygen** in the Earth's atmosphere. Pollination by bees, bumblebees, birds and bats is another service without which plants cannot give us fruits or seeds. There are also intangible benefits: the aesthetic pleasures of walking through thick woods, watching spring flowers or waking up to a bulbul's song.
- **Ethical**: every species has an intrinsic value, even if it is not of economic value to us. We have a moral duty to care for their well-being and pass on our biological legacy in good order to future generations.

**How?** When we conserve and protect a whole ecosystem, its biodiversity at all levels is protected.

**In situ conservation (on site).** Some areas have very high levels of species richness and a high degree of **endemism** (species found only there). These are **biodiversity hotspots**. Initially 25 were identified; now there are **34** hotspots worldwide. **Three** cover India's exceptionally rich regions: the **Western Ghats and Sri Lanka**, **Indo-Burma** and the **Himalaya**. Together the hotspots cover **less than 2%** of the Earth's land area, but they hold a very high number of species, and strict protection could reduce the ongoing mass extinctions by almost **30%**. In India, ecologically unique and biodiversity-rich regions are legally protected as **biosphere reserves**, **national parks** and **wildlife sanctuaries** (NCERT figures: 14 biosphere reserves, 90 national parks and 448 wildlife sanctuaries). India also has a history of religious and cultural traditions that emphasise protecting nature: tracts of forest are set aside and all trees and wildlife within them are venerated. Such **sacred groves** are found in the **Khasi and Jaintia Hills** in Meghalaya, the **Aravalli Hills** of Rajasthan, the **Western Ghats** regions of Karnataka and Maharashtra, and the **Sarguja, Chanda and Bastar** areas of Madhya Pradesh. In Meghalaya, sacred groves are the last refuges for a large number of rare and threatened plants. Wetlands of international importance are also protected as **Ramsar sites** under the Ramsar Convention.

**Ex situ conservation (off site).** Threatened animals and plants are taken out of their natural habitat and placed in special settings where they can be protected and given special care: **zoological parks, botanical gardens and wildlife safari parks**. Many animals that have become extinct in the wild continue to be maintained in zoos. Gametes of threatened species can be preserved in viable and fertile condition for long periods by **cryopreservation**; eggs can be fertilised **in vitro** and plants propagated by **tissue culture**. Seeds of commercially important plants can be kept for long periods in **seed banks**.

**International efforts.** Biodiversity knows no political boundaries, so conservation is a collective responsibility. The historic **Convention on Biological Diversity** ("**The Earth Summit**") held in **Rio de Janeiro in 1992** called on all nations to take measures for conservation and sustainable use of biodiversity. At the **World Summit on Sustainable Development** in **Johannesburg, South Africa, in 2002**, **190 countries** pledged to achieve, by **2010**, a significant reduction in the current rate of biodiversity loss.

:::tip Protected-area numbers
In the board answer, write the NCERT figures (14 biosphere reserves, 90 national parks, 448 wildlife sanctuaries); the real numbers have grown since.
:::

```ng-compare
id: ch13-in-situ-vs-ex-situ
title: In situ vs ex situ conservation
cols: In situ (on site) | Ex situ (off site)
row: Where | in the natural habitat | outside it, in special settings
row: Protects | the whole ecosystem, all levels of biodiversity | chosen threatened species
row: Examples | hotspots, biosphere reserves, national parks, sanctuaries, sacred groves, Ramsar sites | zoos, botanical gardens, safari parks, cryopreservation, seed banks
```

```ng-fill
id: ch13-why-conserve
title: Three reasons to conserve
cols: Reason | Idea and example
row: Narrowly utilitarian | [[direct products: food, fibre, medicines (25% of drugs from plants); bioprospecting]]
row: Broadly utilitarian | [[ecosystem services: Amazon ≈ 20% of oxygen; pollination; aesthetic pleasure]]
row: Ethical | [[every species has intrinsic value; duty to future generations]]
```

```ng-mnemonic
id: ch13-indian-hotspots
title: India's three hotspots
trick: **W**e **I**ndians **H**ave three
meaning: **W**estern Ghats and Sri Lanka, **I**ndo-Burma, **H**imalaya. All 34 hotspots cover under 2% of Earth's land.
prompt: Name the three biodiversity hotspots that cover India.
```

**In one breath:** Conserve for narrowly utilitarian (food, medicines, bioprospecting), broadly utilitarian (Amazon ≈ 20% of oxygen, pollination) and ethical reasons. In situ: 34 hotspots (3 in India), biosphere reserves, national parks, sanctuaries, sacred groves, Ramsar sites. Ex situ: zoos, botanical gardens, safari parks, cryopreservation, seed banks. Rio Earth Summit 1992; Johannesburg 2002 (190 countries, target 2010).
