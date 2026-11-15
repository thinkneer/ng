# Ch 2 · Shaping of the Earth's Surface

The ground under your feet feels fixed, but it is moving: a few centimetres a year, far too slowly to notice. Over millions of years that slow movement has raised the Himalaya and opened oceans. On top of it, rain, rivers, ice, wind and waves keep wearing the land down and building it up somewhere else. This chapter is about those two sets of forces, the **landforms** they make, and what they mean for people, including disasters. Papers love the plate boundaries, river landforms, weathering vs erosion and "how landforms affect human life".

## A surface that never stops changing

A **landform** is a natural feature of the Earth's surface, such as a mountain, valley, plateau, plain, desert or coastal feature. Landforms are made by movements of the crust and by weathering, erosion and deposition.

Two sets of forces shape them:

- **Internal (endogenic) forces** come from heat deep inside the Earth. They work through **plate movement, earthquakes, volcanoes, folding and faulting**, and mostly **build up** the surface: they raise mountains and create ocean basins.
- **External (exogenic) forces** act on the surface: **weathering, erosion and deposition** by running water, waves, glaciers, wind and groundwater. They mostly **wear the surface down** and fill low areas.

One force raises the land, the other lowers it, and the landscape you see is the result of this tug of war.

```ng-compare
id: ch02-internal-vs-external
title: Internal vs external forces
cols: Internal (endogenic) | External (exogenic)
row: Source of energy | heat inside the Earth | the Sun, gravity, moving water, ice and wind
row: Works through | plate movement, earthquakes, volcanoes, folding, faulting | weathering, erosion, deposition
row: Main effect | builds up the surface: mountains, basins | wears down high land, fills low land
row: Speed | mostly slow; sudden in earthquakes | mostly slow and steady
```

**In one breath:** Landforms are natural surface features. Internal forces from the Earth's heat build the surface up; external forces of water, ice, wind and waves wear it down and fill it in.

## Inside the Earth

To see why the surface moves, look inside. The Earth has layers.

```ng-figure
id: ch02-earth-layers
title: The Earth's interior
svg:
<svg viewBox="0 76 340 140" role="img" aria-label="Cut-away of the Earth: crust, mantle, outer core, inner core" fill="none" stroke="currentColor" stroke-width="1.4">
<path d="M10,205A120,120 0 0 1 250,205Z" class="u" stroke-width="2"/>
<path d="M18,205A112,112 0 0 1 242,205"/>
<path d="M64,205A66,66 0 0 1 196,205" fill="#E0B400" fill-opacity="0.25"/>
<path d="M96,205A34,34 0 0 1 164,205Z" class="uf" fill-opacity="0.6"/>
<path d="M4,205H336"/>
<g stroke-width="1" stroke-dasharray="3 3"><path d="M231,147L262,118M207,160L262,148M173,180L262,178M140,197L262,205"/></g>
<g font-size="12" fill="currentColor" stroke="none"><text x="266" y="122">Crust</text><text x="266" y="152">Mantle</text><text x="266" y="182">Outer core</text><text x="266" y="200">Inner core</text></g>
</svg>
caption: Crust, mantle, outer core and inner core (not to scale; the crust is far thinner than shown).
part: 231, 147 | Crust | Thin, rocky outer layer: about 30–40 km under continents, 5–7 km under oceans.
part: 207, 160 | Mantle | Very thick, hot, mostly solid layer. Its upper part is partly molten (the asthenosphere).
part: 173, 180 | Outer core | Liquid (fluid), mainly iron and nickel.
part: 140, 197 | Inner core | Solid, extremely hot and the densest part of the Earth.
```

- The **crust** is the thin outermost layer, about **30–40 km thick under continents** and only **5–7 km under oceans**.
- The **mantle** below is very thick, hot and mostly solid.
- The **core** at the centre is extremely hot and dense: a **liquid outer core** (mainly iron and nickel) and a **solid inner core**.

Two more words you need. The **lithosphere** is the rigid crust *plus* the uppermost mantle, about **100 km** thick. Beneath it lies the **asthenosphere**, a hot, partly molten, slowly flowing layer. The lithosphere floats on it, and that is what lets plates move.

```ng-draw
id: ch02-draw-layers
title: Draw and label the Earth's interior
svg: ref: notes#ch02-earth-layers
time: 4
```

```ng-mnemonic
id: ch02-layers-trick
title: Layers from outside in
trick: **C**old **M**ilk, **O**range **I**ce-cream
meaning: **C**rust → **M**antle → **O**uter core (liquid) → **I**nner core (solid).
prompt: Name the Earth's layers from the surface to the centre.
```

:::tip Lithosphere is not just crust
Lithosphere = crust **+ upper mantle** (rigid, about 100 km). Writing "lithosphere = crust" loses the mark.
:::

**In one breath:** The Earth has a thin crust (30–40 km on land, 5–7 km under oceans), a thick mantle and a hot core (liquid outer, solid inner). The rigid lithosphere floats on the partly molten asthenosphere.

## Plate tectonics

The lithosphere is not one solid shell. It is broken into large and small pieces called **tectonic plates**, which move slowly, **a few centimetres a year**, over the asthenosphere. The idea that explains this is **plate tectonics**; the book links it to the geophysicist **W. J. Morgan**, one of several scientists who developed it in the 1960s.

- Plates can be **continental**, **oceanic** or **mixed** (carrying both).
- The major plates are the **Pacific, Eurasian, African, North American, South American, Indo-Australian and Antarctic** plates.

**What moves them?** Heat from the core sets up **convection currents** in the mantle: hot material rises, spreads sideways, cools and sinks, like water circulating in a pot on a stove. These currents push and pull the plates above them.

```ng-steps
id: ch02-convection
title: How convection moves the plates
svg:
<svg viewBox="0 0 320 170" role="img" aria-label="Convection currents in the mantle carry plates apart" fill="none" stroke="currentColor" stroke-width="1.5">
<rect x="10" y="40" width="140" height="18"/><rect x="170" y="40" width="140" height="18"/>
<path d="M10,160H310" stroke-width="2"/>
<g data-step="1"><path class="uf" d="M150,160Q160,145 170,160Z" fill-opacity="0.7"/><text x="160" y="152" font-size="11" fill="currentColor" stroke="none" text-anchor="middle">heat</text></g>
<g data-step="2"><path class="flow u" d="M160,145V66"/><path class="u" d="M155,72l5,-8l5,8"/></g>
<g data-step="3"><path class="flow u" d="M156,66H40M164,66H280"/><path class="u" d="M46,61l-8,5l8,5M274,61l8,5l-8,5"/></g>
<g data-step="4"><path class="flow" d="M30,72V140Q30,150 60,150H140M290,72V140Q290,150 260,150H180"/></g>
<g data-step="5" stroke="#E0B400" stroke-width="2"><path d="M100,32H60M220,32H260"/><path d="M66,27l-8,5l8,5M254,27l8,5l-8,5"/></g>
</svg>
step: **Heat from the core** warms the base of the mantle.
step: **Hot material rises** because it is lighter.
step: **It spreads sideways** under the lithosphere.
step: **It cools and sinks**, completing a loop (a convection current).
step: **The plates on top are dragged along**: here, apart, a few centimetres a year.
```

**In one breath:** The lithosphere is broken into tectonic plates (continental, oceanic or mixed; seven major ones) that move a few centimetres a year, pushed and pulled by convection currents in the mantle.

## Where plates meet

The action happens at **plate boundaries**, the edges where plates meet. There are three kinds.

```ng-figure
id: ch02-boundaries
title: Three kinds of plate boundary
svg:
<svg viewBox="0 0 340 150" role="img" aria-label="Convergent, divergent and transform plate boundaries" fill="none" stroke="currentColor" stroke-width="1.4">
<rect x="6" y="70" width="48" height="30"/><rect x="60" y="70" width="48" height="30"/><path class="u" stroke-width="2" d="M36,70L57,38L78,70"/>
<path d="M8,58H30M106,58H84"/><path fill="currentColor" d="M32,58l-7,-4v8zM82,58l7,-4v8z"/>
<rect x="118" y="70" width="46" height="30"/><rect x="176" y="70" width="46" height="30"/><path class="uf" d="M164,100L170,64L176,100Z"/>
<path d="M158,58H130M182,58H210"/><path fill="currentColor" d="M128,58l7,-4v8zM212,58l-7,-4v8z"/>
<rect x="234" y="40" width="48" height="64"/><rect x="286" y="40" width="48" height="64"/><path stroke="#E0B400" stroke-width="2" stroke-dasharray="4 3" d="M284,34V110"/>
<path d="M258,96V54M310,52V94"/><path fill="currentColor" d="M258,48l-4,7h8zM310,100l-4,-7h8z"/>
<g font-size="12" fill="currentColor" stroke="none" text-anchor="middle" font-weight="bold"><text x="57" y="124">Convergent</text><text x="170" y="124">Divergent</text><text x="284" y="124">Transform</text></g>
<g font-size="11" fill="currentColor" stroke="none" text-anchor="middle"><text x="57" y="140">Himalaya</text><text x="170" y="140">mid-ocean ridge</text><text x="284" y="140">San Andreas</text></g>
</svg>
caption: Plates collide, pull apart, or slide past each other (sides 1–2 seen from the side, 3 from above).
part: 57, 50 | Convergent: plates collide | Two continents → fold mountains (Himalaya). Ocean under continent → volcanoes and earthquakes.
part: 170, 82 | Divergent: plates separate | Magma rises and forms new crust: mid-ocean ridges such as the Mid-Atlantic Ridge.
part: 284, 72 | Transform: plates slide past | Crust neither made nor destroyed; frequent earthquakes (San Andreas Fault, USA).
```

1. **Convergent boundary: plates move towards each other.** When two continental plates collide, the crust crumples into **fold mountains**: the Indian plate pushing into the Eurasian plate raised the **Himalaya**, which are still rising. When an oceanic plate meets a continental plate, the heavier oceanic plate sinks below, causing **volcanoes and earthquakes**.
2. **Divergent boundary: plates move apart.** Magma rises into the gap, cools and forms **new crust**, building **mid-ocean ridges** such as the **Mid-Atlantic Ridge**.
3. **Transform boundary: plates slide past each other.** Crust is neither created nor destroyed, but the grinding causes frequent **earthquakes**, as along the **San Andreas Fault** in the USA.

```ng-mnemonic
id: ch02-boundaries-trick
title: Which boundary does what?
trick: **Con**verge = **co**llide · **Di**verge = **di**vide · **Trans**form = **tra**ffic sliding past
meaning: Converge → fold mountains, volcanoes (Himalaya). Diverge → new crust, ridges (Mid-Atlantic). Transform → earthquakes (San Andreas).
prompt: What happens at a divergent plate boundary?
```

**Effects of plate movement.** Plate movement explains mountains, valleys and ocean basins, the pattern of continents and oceans, and where earthquakes and volcanoes happen. Most of them occur **near plate boundaries**; the belt around the edge of the Pacific Ocean is so active it is called the **Ring of Fire**.

India feels this too. On **26 January 2001** a powerful earthquake struck **Kutch in Gujarat** (centred near Bhuj), killing thousands and destroying towns. On **Baratang Island** in the Andaman and Nicobar Islands there is a rare **mud volcano**, where underground gas and pressure push mud up to the surface.

:::tip Fold mountains come from convergence
Himalaya = **convergent** boundary (continent–continent collision). Students often write "divergent" because the word sounds like "rising". Divergent makes ridges and new crust.
:::

**In one breath:** At convergent boundaries plates collide (Himalaya; volcanoes where ocean meets continent), at divergent ones they part and make new crust (Mid-Atlantic Ridge), and at transform ones they slide past (San Andreas). Most earthquakes and volcanoes lie near boundaries, especially the Pacific Ring of Fire.

## Weathering and erosion

Now the forces that wear the land down.

**Weathering** is the **breaking down of rock in place**, without being carried away. It is of three types:

- **Physical weathering:** rock breaks into pieces because of heating and cooling, frost (water freezing and expanding in cracks) and wind.
- **Chemical weathering:** minerals change by reacting with water, air or acids, so the rock rots and crumbles.
- **Biological weathering:** plants, animals and microorganisms break rock, for example **roots growing in cracks** or animals burrowing.

Weathering is the first step in making **soil**.

**Erosion** is the **wearing away and carrying away** of rock and soil by agents such as running water, wind, glaciers and waves. The difference in one word: weathering *breaks*, erosion *breaks and moves*.

```ng-compare
id: ch02-weathering-vs-erosion
title: Weathering vs erosion
cols: Weathering | Erosion
row: What happens | rock breaks down | rock and soil are worn away and moved
row: Movement | none: stays in place | material is transported
row: Agents | temperature, frost, water, air, roots | running water, wind, glaciers, waves
row: Result | broken rock, the start of soil | valleys, cliffs, loss of topsoil
```

**Why erosion matters to people.** Losing fertile **topsoil** lowers farm output. River and coastal erosion eat into land, homes and roads. It makes construction and mining sites unstable and can hurt tourism and fishing. Farmers fight back with conservation methods:

- **Contouring:** ploughing or digging trenches along the contour lines of a slope so rainwater is held, erosion falls and groundwater is recharged.
- **Bunding:** low earthen embankments that slow runoff and let water soak in.
- **Terracing:** cutting a hillside into level steps.
- **Check dams:** small barriers across streams that slow the flow, trap sediment and recharge groundwater.

In **Nagaland**, the traditional **Zabo** system combines forest, water-harvesting ponds, animals and paddy fields, using earthen bunds to conserve soil and water.

```ng-explain
id: ch02-explain-weathering
prompt: In two lines, explain the difference between weathering and erosion using a rock on a hillside.
lines: 2
```

:::tip "Breaks" vs "breaks and moves"
If your answer on weathering mentions material being *carried away*, you have described erosion. Weathering happens **in place**.
:::

**In one breath:** Weathering breaks rock in place (physical, chemical, biological) and starts soil; erosion wears it away and moves it. Erosion strips topsoil and damages land, so people use contouring, bunding, terracing, check dams and traditional systems like Zabo.

## Running water: the busiest sculptor

The agents of **gradation** (running water, waves, glaciers, wind and groundwater) wear down high land, carry the material and deposit it in low land, slowly levelling the surface. Running water does the most work, and a river makes different landforms along its course.

```ng-fill
id: ch02-river-course
title: A river from mountain to sea
cols: Course | What the river does | Landforms
row: Upper (mountains) | steep slope, fast flow, cuts down | [[V-shaped valleys, waterfalls, rapids]]
row: Middle | erodes outer banks, deposits on inner | [[meanders, oxbow lakes, floodplains]]
row: Lower (near the sea) | slow flow, deposits load | [[deltas, levees, alluvial fans]]
```

- A **waterfall** forms where a band of hard rock lies over softer rock; the soft rock wears away faster and the river drops over the edge.
- A **meander** is a big loop in the river. Water flows faster on the outer bank and erodes it, and slower on the inner bank, where it drops sediment. A **floodplain** is the flat land built from silt that floods spread over the valley.
- A **levee** is a raised natural bank of silt along the river. A **delta** is a fan- or triangle-shaped deposit at the river's mouth; the **Sundarbans** in the Ganga–Brahmaputra delta is a famous example. Deltas are very fertile but flood-prone.

```ng-steps
id: ch02-oxbow
title: How an oxbow lake forms
svg:
<svg viewBox="0 0 340 130" role="img" aria-label="Four stages: river bend, erosion and deposition, narrow neck, oxbow lake cut off" fill="none" stroke-width="2" stroke="currentColor">
<g data-step="1"><path class="u" d="M42,8C42,30 76,30 76,55C76,80 42,80 42,104"/><text x="42" y="124" font-size="11" fill="currentColor" stroke="none" text-anchor="middle">1 Bend</text></g>
<g data-step="2" transform="translate(85,0)"><path class="u" d="M42,8C42,30 76,30 76,55C76,80 42,80 42,104"/><path stroke="#E0B400" d="M80,44V66"/><g fill="currentColor" stroke="none"><circle cx="56" cy="50" r="2"/><circle cx="60" cy="58" r="2"/><circle cx="54" cy="62" r="2"/></g><text x="42" y="124" font-size="11" fill="currentColor" stroke="none" text-anchor="middle">2 Wear, drop</text></g>
<g data-step="3" transform="translate(170,0)"><path class="u" d="M42,8V44C80,22 82,88 42,66V104"/><text x="42" y="124" font-size="11" fill="currentColor" stroke="none" text-anchor="middle">3 Neck</text></g>
<g data-step="4" transform="translate(255,0)"><path class="u" d="M42,8V104"/><path stroke="#E0B400" d="M50,44C82,26 82,86 50,66"/><text x="42" y="124" font-size="11" fill="currentColor" stroke="none" text-anchor="middle">4 Oxbow</text></g>
</svg>
step: **A bend forms.** The river swings into a loop (a meander).
step: **The outer bank wears away; the inner bank builds up.** Fast water erodes the outside of the bend (yellow), slow water drops silt on the inside (dots).
step: **The neck narrows.** The loop grows until only a thin strip of land separates its two ends.
step: **The river cuts through.** In a flood the river takes the short, straight path; the old loop is left behind as a curved **oxbow lake**.
```

**In one breath:** Agents of gradation level the land. A river cuts V-shaped valleys, waterfalls and rapids in its upper course, makes meanders, oxbow lakes and floodplains in its middle course, and builds deltas, levees and alluvial fans near the sea.

## Waves, glaciers, wind and groundwater

**Waves and currents (coasts).** Waves pound the shore and make **sea cliffs** and **wave-cut platforms** (flat rock at the foot of a cliff). Where they deposit sand and pebbles they build **beaches** and **sand bars**. A headland of rock goes through a famous sequence:

```ng-steps
id: ch02-coast
title: Cave → arch → stack
svg:
<svg viewBox="0 0 330 130" role="img" aria-label="A headland eroded into a cave, then an arch, then a stack" fill="none" stroke="currentColor" stroke-width="1.6">
<path class="u" d="M0,104q10,-5 20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t20,0t10,0"/>
<g data-step="1"><path d="M10,100V30H92V100"/><path class="uf" d="M64,100V82Q74,72 84,82V100Z" fill-opacity="0.5"/><text x="50" y="124" font-size="12" fill="currentColor" stroke="none" text-anchor="middle">Cave</text></g>
<g data-step="2"><path d="M120,100V30H212V100"/><path class="uf" d="M170,100V76Q187,62 204,76V100Z" fill-opacity="0.5"/><path stroke="#E0B400" d="M168,76Q187,58 206,76"/><text x="166" y="124" font-size="12" fill="currentColor" stroke="none" text-anchor="middle">Arch</text></g>
<g data-step="3"><path d="M230,100V30H270V100"/><path d="M296,100V48H314V100"/><path d="M276,100l4,-6l6,4l4,2" stroke-dasharray="2 3"/><text x="280" y="124" font-size="12" fill="currentColor" stroke="none" text-anchor="middle">Stack</text></g>
</svg>
step: **Cave:** waves attack a weak spot at the base of a headland and hollow out a cave.
step: **Arch:** caves on both sides meet and break through, leaving a rock arch.
step: **Stack:** the roof of the arch collapses, leaving an isolated pillar of rock standing in the sea.
```

**Glaciers.** A glacier is a slow river of ice. It grinds the land and turns V-shaped river valleys into wide, deep **U-shaped valleys**. It scoops bowl-shaped hollows called **cirques**; the knife-edge ridge between two cirques is an **arête**. A small side valley left high above the main one is a **hanging valley** (often with a waterfall), and a glacial valley drowned by the sea is a **fjord**. The rock, soil and debris a glacier drops are **moraines**: **lateral** (along the sides), **medial** (in the middle, where two glaciers join) and **terminal** (at the snout, where the glacier ends). Glaciers such as **Gangotri** are also great stores of fresh water that feed rivers like the Ganga.

**Wind.** In dry areas like the **Thar Desert**, strong winds lift and carry sand. Wind erosion leaves **yardangs** (streamlined rock ridges), **ventifacts** (rocks cut and polished by blowing sand), **deflation hollows** (dips where loose material was blown away) and **desert pavements** (stony surfaces left after fine particles are removed). Wind deposition builds **sand dunes**: **barchans** (crescent-shaped), **longitudinal**, **star** and **parabolic** dunes.

**Groundwater.** In limestone areas, water with a little acid dissolves the rock and makes **karst** landforms: caves, sinkholes and underground rivers. India has limestone caves such as the **Borra Caves** (Andhra Pradesh) and many caves in **Meghalaya**.

```ng-figure
id: ch02-karst
title: Inside a limestone (karst) cave
svg:
<svg viewBox="0 0 330 200" role="img" aria-label="Karst cave with sinkhole, stalactites, stalagmites, pillar and underground stream" fill="none" stroke="currentColor" stroke-width="1.5">
<path d="M6,30H120Q140,30 146,56Q152,30 172,30H324"/>
<path class="u" d="M20,70Q160,40 310,72Q326,120 300,160Q160,186 30,160Q8,120 20,70Z"/>
<g class="uf" fill-opacity="0.6" stroke="none"><path d="M70,62L76,96L82,60Z"/><path d="M110,54L115,84L120,53Z"/><path d="M226,56L232,92L238,58Z"/><path d="M70,164L76,128L82,165Z"/><path d="M226,166L232,134L238,165Z"/></g>
<path class="uf" fill-opacity="0.6" stroke="none" d="M178,52H194L190,100L194,162H178L182,100Z"/>
<path stroke="#E0B400" stroke-width="2.4" d="M40,150Q120,166 200,156T300,150"/>
<g font-size="12" fill="currentColor" stroke="none"><text x="152" y="22">sinkhole</text><text x="44" y="110">stalactite</text><text x="40" y="184" >stalagmite</text><text x="200" y="118">pillar</text><text x="232" y="192">stream</text></g>
</svg>
caption: Karst cave: stalactites hang from the roof, stalagmites rise from the floor, and they join as pillars.
part: 146, 50 | Sinkhole (doline) | The ground collapses into a hollow dissolved underneath.
part: 76, 78 | Stalactite | Hangs from the ceiling, built drop by drop as dripping water leaves lime behind.
part: 76, 146 | Stalagmite | Rises from the floor where the drops land.
part: 186, 100 | Pillar | A stalactite and a stalagmite that have joined.
part: 250, 154 | Underground river | Water flowing through the cave; a source of fresh water.
```

```ng-mnemonic
id: ch02-stalactite
title: Stalactite or stalagmite?
trick: stala**C**tite hangs from the **C**eiling; stala**G**mite grows from the **G**round
meaning: Stalactites point down from the roof; stalagmites point up from the floor; together they make a pillar.
prompt: Which hangs from the cave ceiling, a stalactite or a stalagmite?
```

```ng-fill
id: ch02-agents
title: Agent and its landforms
cols: Agent | Erosion makes | Deposition makes
row: Waves | [[cliffs, wave-cut platforms, caves, arches, stacks]] | [[beaches, sand bars]]
row: Glaciers | [[U-shaped valleys, cirques, arêtes, hanging valleys, fjords]] | [[moraines]]
row: Wind | [[yardangs, ventifacts, deflation hollows]] | [[sand dunes (barchans)]]
row: Groundwater | [[caves, sinkholes]] | [[stalactites, stalagmites, pillars]]
```

:::tip U for ice, V for rivers
Rivers cut **V-shaped** valleys; glaciers carve **U-shaped** valleys. A mixed-up letter costs a full mark in MCQs.
:::

**In one breath:** Waves make cliffs, caves, arches and stacks and build beaches; glaciers carve U-shaped valleys, cirques, arêtes and fjords and drop moraines; wind leaves yardangs and ventifacts and builds dunes; groundwater in limestone makes karst caves, sinkholes, stalactites and stalagmites.

## Landforms and people

Landforms decide where and how people live.

- **River plains** with fertile soil and water supported the earliest farming societies and cities, from the Indus and Ganga plains to the Nile.
- **Mountains** acted as barriers and protection, while **passes** (such as the **Khyber Pass**) let traders, travellers and ideas move across.
- **Deserts** limited big settlements but encouraged **trade routes** across them.
- **Coasts and harbours** supported fishing, trade, travel and contact between cultures.

Even today landforms shape settlements, occupations, transport, tourism, resources and culture.

**In one breath:** Fertile plains fed early civilisations, mountains protected while passes connected, deserts carried trade routes, and coasts opened the world to trade; landforms still shape how people live.

## When landforms turn dangerous

The same processes can become disasters.

- **Landslides:** masses of rock and soil slide down a slope. Causes: heavy rain, earthquakes, volcanic eruptions and steep or weak slopes, made worse by **deforestation, mining, road building, unplanned construction** and poor drainage.
- **Avalanches:** large masses of snow rush down steep slopes, triggered by heavy snowfall, warming, strong winds, earthquakes, vibrations or human activity.
- **Glacial lake outburst floods (GLOFs):** a lake formed by a melting glacier is held back by a weak natural dam of ice or debris. If the dam breaks (melting, heavy rain, an earthquake, an avalanche or landslide falling into the lake), the water rushes out as a sudden, destructive flood.
- **Sandstorms:** strong winds lift loose sand in dry areas, cutting visibility and damaging crops and health.

In **February 2021**, a huge rock-and-ice avalanche in **Chamoli, Uttarakhand** set off a flash flood down the valley that destroyed hydropower projects and took many lives, a reminder of how fragile young mountains like the Himalaya are.

**Being prepared:** identify hazard-prone areas and avoid unsafe construction there; protect vegetation and manage slopes and drainage; use monitoring, early-warning systems and evacuation plans; follow local disaster-management instructions and keep emergency supplies ready.

```ng-steps
id: ch02-glof
title: How a GLOF happens
svg:
<svg viewBox="0 0 320 140" role="img" aria-label="Glacier melts into a lake behind a debris dam, the dam breaks and a flood rushes down" fill="none" stroke="currentColor" stroke-width="1.5">
<path d="M6,30L70,60L130,80L190,96L250,112L314,128"/>
<g data-step="1"><path d="M6,30L6,20L60,40L70,60Z" fill="currentColor" fill-opacity="0.15"/><text x="10" y="14" font-size="11" fill="currentColor" stroke="none">glacier</text></g>
<g data-step="2"><path class="uf" fill-opacity="0.6" stroke="none" d="M72,60Q100,56 126,78L72,62Z"/><text x="80" y="50" font-size="11" fill="currentColor" stroke="none">lake</text></g>
<g data-step="3"><path d="M126,78L134,68L140,82Z" fill="currentColor"/><text x="130" y="60" font-size="11" fill="currentColor" stroke="none">debris dam</text></g>
<g data-step="4"><path stroke="#E0B400" stroke-width="3" class="flow" d="M140,84L300,124"/><text x="214" y="96" font-size="11" fill="currentColor" stroke="none">flood</text></g>
</svg>
step: **A glacier melts** as temperatures rise.
step: **Meltwater collects in a lake** at the glacier's snout.
step: **A weak natural dam** of ice, rock and debris holds the lake back.
step: **The dam bursts** (melting, heavy rain, an earthquake or a landslide into the lake) and a sudden flood rushes downstream.
```

:::tip Causes plus human factors
"Causes of landslides" answers score full marks only with **natural** causes (rain, earthquakes, steep slopes) **and human** ones (deforestation, mining, road building, construction).
:::

**In one breath:** Landslides, avalanches, GLOFs and sandstorms are landform-related disasters; human activities like deforestation and unplanned construction make them worse, and mapping hazards, early warning and evacuation plans reduce the damage.
