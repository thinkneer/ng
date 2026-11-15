# Practical · Quadrat study: density and frequency

Two experiments in the 2026–27 list use the same field method: **population density** and **population frequency** of plants by the quadrat method. They link to Ch 11 (population attributes), and you can do both from one set of counts.

## Aim and principle

**Aims.** (i) To study the population density of plants by the quadrat method. (ii) To study the population frequency of plants by the quadrat method.

**Principle.** We cannot count every plant in a large area, so we count them in a few small, equal **sample plots** called **quadrats**, placed **at random**, and scale up. A quadrat for herbs is usually **1 m × 1 m**.
- **Density** tells us **how many** individuals of a species there are per unit area (per quadrat).
- **Frequency** tells us **how widely spread** a species is: in what percentage of the quadrats it occurs.

**In one breath:** Count plants in a few random 1 m × 1 m quadrats. Density = how many per quadrat; frequency = in what percentage of quadrats the species turns up.

## Materials

- Four nails or pegs and a string (or a ready 1 m × 1 m frame); a metre scale or measuring tape
- Notebook and pencil; a hand lens to identify small plants
- A field, lawn or open ground with several kinds of herbs

**In one breath:** A string-and-peg quadrat of 1 m², tape, notebook and a patch of ground with mixed herbs.

## Procedure

```ng-steps
id: quadrat-procedure
title: Quadrat method, step by step
step: Choose the study area; **mark a 1 m × 1 m quadrat** with four pegs and string.
step: Place quadrats **at random** in the area, at least **10 quadrats** (throw a marker over your shoulder, or use random numbers).
step: In each quadrat **identify the species** (A, B, C …) present.
step: **Count the individuals** of each species in each quadrat; a plant on the boundary counts only if more than half of it is inside.
step: Record the counts in the observation table.
step: Work out **density** and **frequency** for each species.
```

```ng-figure
id: quadrat-plot
title: A 1 m quadrat
svg:
<svg viewBox="0 0 300 200" role="img" aria-label="A one-metre quadrat with plants of three species" fill="none" stroke="currentColor">
<rect class="u" x="20" y="20" width="160" height="160" stroke-width="2.4"/>
<path stroke-opacity="0.3" stroke-dasharray="3 3" d="M60,20V180M100,20V180M140,20V180M20,60H180M20,100H180M20,140H180"/>
<g fill="currentColor" stroke="none"><circle cx="40" cy="44" r="4"/><circle cx="76" cy="90" r="4"/><circle cx="120" cy="36" r="4"/><circle cx="150" cy="120" r="4"/><circle cx="60" cy="160" r="4"/><circle cx="110" cy="150" r="4"/></g>
<g fill="#E0B400" stroke="none"><path d="M92,60l6,10h-12z"/><path d="M160,52l6,10h-12z"/><path d="M38,110l6,10h-12z"/></g>
<path stroke-width="2" d="M128,96l8,8M136,96l-8,8M162,160l8,8M170,160l-8,8"/>
<circle cx="182" cy="100" r="4" fill="currentColor" stroke="none"/>
<g fill="currentColor" stroke="none" font-size="10"><text x="40" y="196">1 m</text><text x="4" y="100" transform="rotate(-90 10 100)">1 m</text><text x="204" y="44">● species A</text><text x="204" y="64">▲ species B</text><text x="204" y="84">✕ species C</text><text x="196" y="116">on the line:</text><text x="196" y="130">count only if more</text><text x="196" y="144">than half is inside</text></g>
</svg>
caption: Plants of three species inside one 1 m × 1 m quadrat; boundary plants are counted only if more than half lies inside. Our simplified drawing.
part: 100, 100 | Quadrat | Square sample plot, 1 m × 1 m for herbs.
part: 40, 44 | Species A | Count every individual of A in this quadrat.
part: 92, 64 | Species B | A second species, counted separately.
part: 132, 100 | Species C | A third species.
part: 182, 100 | Boundary plant | Counted only if more than half is inside the quadrat.
```

```ng-draw
id: quadrat-draw
title: Draw a quadrat with plants
svg: ref: notes#quadrat-plot
time: 2
```

```ng-mnemonic
id: quadrat-random
title: How to place quadrats
trick: **Throw, don't choose**
meaning: Quadrats are placed at random, so the sample is not biased towards thick or thin patches.
prompt: Why are quadrats placed at random?
```

**In one breath:** Mark 1 m² quadrats, place at least ten at random, identify and count each species (boundary plants only if more than half inside), record, then calculate.

## Observation table and calculation

Record one row per species and one column per quadrat (Q1 … Q10), then two totals:

| Species | Total individuals | Quadrats with it |
|---|---|---|
| A | | |
| B | | |
| C | | |

(Keep the count for each quadrat, Q1 to Q10, in your notebook; the table holds the totals.)

:::formula Population density
$$\text{Density}=\frac{\text{total individuals}}{\text{quadrats studied}}$$
:::

:::formula Population frequency
$$\begin{aligned}&\text{Frequency (\%)}\\&=\frac{\text{quadrats with it}}{\text{quadrats studied}}\times100\end{aligned}$$
:::

:::skeleton Worked example (3 marks)
*In 10 quadrats a species had 4, 0, 3, 5, 0, 2, 6, 0, 1, 3 individuals. Find its density and frequency.*<br>
Total individuals $=24$; quadrats studied $=10$ [½]<br>
Density $=24\div10=$ **2.4 per m²** [1]<br>
Quadrats with the species $=7$ [½]<br>
Frequency $=\dfrac{7}{10}\times100=$ **70%** [1]
:::

```ng-numerical
id: quadrat-density
title: Density from quadrat counts
question: In {{q}} quadrats of 1 m² a student counted {{n}} plants of *Parthenium* in all. Find the population density.
var: q | 5 | 20 | 1
var: n | 10 | 120 | 2
answer: n/q
unit: plants per m²
dp: 2
tol: 1
step: Density $=\dfrac{\text{total individuals}}{\text{quadrats studied}}=\dfrac{ {{n}} }{ {{q}} }$.
step: $=$ **{{n/q:2}} plants per m²**.
```

```ng-numerical
id: quadrat-frequency
title: Frequency from quadrat counts
question: A grass species was found in {{k}} out of {{q}} quadrats. Find its frequency.
var: q | 10 | 20 | 2
var: k | 1 | 10 | 1
answer: k/q*100
unit: %
dp: 1
tol: 1
step: Frequency $=\dfrac{ {{k}} }{ {{q}} }\times100$.
step: $=$ **{{k/q*100:1}}%**.
```

```ng-compare
id: quadrat-density-vs-frequency
title: Density vs frequency
cols: Density | Frequency
row: Tells you | how many individuals per unit area | how widely the species is spread
row: Formula | total individuals ÷ quadrats studied | quadrats with species ÷ quadrats studied × 100
row: Unit | individuals per m² | per cent
```

```ng-mnemonic
id: quadrat-heads-boxes
title: Density or frequency?
trick: **Density counts heads, frequency counts boxes**
meaning: Density: total plants (heads) ÷ quadrats. Frequency: quadrats (boxes) where the species occurs ÷ total quadrats × 100.
prompt: Which one uses the number of quadrats in which the species occurred?
```

**In one breath:** Density = total individuals ÷ quadrats studied (per m²). Frequency = quadrats with the species ÷ quadrats studied × 100. A species can be dense in a few quadrats yet have low frequency.

## Result and precautions

**Result.** The density and frequency of each species are as calculated in the table; the species with the highest frequency is the most widely distributed, and the one with the highest density is the most numerous.

**Precautions**
1. Place quadrats **at random**; do not pick "good" patches.
2. Keep all quadrats the **same size**.
3. Identify species **carefully** and count each individual **only once**.
4. Count a boundary plant only if **more than half** of it lies inside.
5. Study **enough quadrats** (at least 10) for a reliable average.

**In one breath:** Result from the table. Precautions: random, equal-size quadrats; careful identification; each plant once; the boundary rule; at least ten quadrats.
