# Ch 11 · Areas Related to Circles

A slice of pizza, the part of a clock face swept by the minute hand, the region a tied goat can graze: each is a **sector** of a circle. This chapter finds the area and the arc length of a sector, and the area of a **segment**, the piece cut off by a chord. One idea runs through all of it: a sector is a fraction of the whole circle, and the fraction is $\dfrac{\theta}{360}$.

## Cutting a circle into slices

More than 2 200 years ago Archimedes is credited with a neat way of seeing why the area of a circle is $\pi r^2$. Cut the circle into many thin slices, like a pizza, and arrange them alternately point-up and point-down. They form a shape very close to a rectangle whose height is the radius $r$ and whose length is half the circumference, $\pi r$. Its area is $\pi r\times r=\pi r^2$.

Each of those slices is a sector. Engineers use the same pieces today: the area wiped by a windscreen wiper, the metal in a fan blade, the land covered by a rotating sprinkler are all sectors or differences of sectors.

**In one breath:** A circle can be cut into slices called sectors. A sector's share of the circle is decided only by its angle at the centre.

## Sector, arc and segment: the words

```ng-figure
id: sector-figure
title: Sector of a circle
svg:
<svg viewBox="0 0 300 190" role="img" aria-label="A circle with centre O; radii OA and OB cut off a minor sector and a major sector" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M150,98 L195.0,44.4 A70,70 0 0 0 105.0,44.4 Z" fill="#E0B400" fill-opacity="0.3" stroke="none"/><circle cx="150" cy="98" r="70"/><path d="M195.0,44.4 L150,98 L105.0,44.4" class="u" stroke-width="2"/><path d="M160.3,85.7 A16,16 0 0 0 139.7,85.7" stroke-width="1.2"/><text x="150" y="112" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">O</text><text x="205" y="40" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="95" y="40" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="150" y="76" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">θ</text><text x="150" y="56" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">minor sector</text><text x="150" y="146" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">major sector</text><text x="150" y="20" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">arc AB</text></svg>
caption: Two radii OA and OB cut the circle into a minor sector (shaded) and a major sector.
part: 150, 98 | Centre O | The angle of the sector is measured here.
part: 150, 76 | Angle θ | The angle of the sector, in degrees.
part: 150, 56 | Minor sector | The smaller region between the two radii and the arc.
part: 150, 146 | Major sector | The rest of the circle; its angle is 360° − θ.
part: 150, 28 | Arc AB | The curved edge of the sector.
```

<figure class="fig" id="segment-figure">
<svg viewBox="0 0 300 190" role="img" aria-label="A circle with chord AB; the minor segment lies between the chord and the minor arc" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M207.3,57.8 A70,70 0 0 0 92.7,57.8 Z" fill="#E0B400" fill-opacity="0.3" stroke="none"/><circle cx="150" cy="98" r="70"/><path d="M207.3,57.8 L92.7,57.8" class="u" stroke-width="2"/><path d="M207.3,57.8 L150,98 L92.7,57.8" stroke-dasharray="5 4" stroke-width="1"/><text x="150" y="112" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">O</text><text x="217" y="62" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="83" y="62" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="150" y="48" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">minor segment</text><text x="150" y="150" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">major segment</text><text x="150" y="90" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">θ</text></svg>
<figcaption>A chord AB cuts the circle into a minor segment (shaded) and a major segment.</figcaption>
</figure>

```ng-compare
id: sector-vs-segment
title: Sector or segment?
cols: Sector | Segment
row: Bounded by | two radii and an arc | a chord and an arc
row: Looks like | a slice of pizza | the crust end cut straight across
row: Area | a fraction of the circle | sector minus triangle
```

```ng-mnemonic
id: sector-slice-segment-sliver
title: Sector or segment?
trick: **Sector = slice, Segment = sliver**
meaning: A **sector** is a slice that reaches the **centre** (two radii). A **segment** is a sliver cut off by a **chord**; it does not reach the centre.
prompt: Which region is bounded by a chord and an arc: a sector or a segment?
```

**In one breath:** Sector: two radii and an arc. Segment: a chord and an arc. "Minor" is the smaller piece, "major" the rest.

## Area of a sector and length of an arc

A full turn is 360° and has area $\pi r^2$. A sector of angle $\theta$ is $\dfrac{\theta}{360}$ of the full turn, so it has that fraction of the area, and its arc is that fraction of the circumference.

:::formula Area of a sector
$$\text{Area}=\frac{\theta}{360}\times\pi r^2$$
:::

:::formula Length of an arc
$$\text{Arc length}=\frac{\theta}{360}\times2\pi r$$
:::

```ng-derive
id: derive-sector-area
title: Derive the area of a sector
prompt: Using the unitary method, show that the area of a sector of angle $\theta$ of a circle of radius $r$ is $\dfrac{\theta}{360}\times\pi r^2$.
time: 3
check: Angle 360° at the centre ↔ area $\pi r^2$ | 1
check: Angle 1° ↔ area $\dfrac{\pi r^2}{360}$ | 0.5
check: Angle $\theta$ ↔ area $\dfrac{\theta}{360}\times\pi r^2$ | 0.5
```

```ng-mnemonic
id: fraction-of-the-circle
title: One fraction does everything
trick: **θ over 360 is your share of the circle**
meaning: Multiply the share $\dfrac{\theta}{360}$ by the **area** $\pi r^2$ for a sector, or by the **circumference** $2\pi r$ for an arc.
prompt: What fraction of a circle is a sector of angle θ?
```

```ng-fill
id: fill-angle-fractions
title: Common angles as fractions of a circle
cols: Angle θ | Fraction of the circle
row: 90° (quadrant) | [[1/4]]
row: 60° | [[1/6]]
row: 120° | [[1/3]]
row: 45° | [[1/8]]
row: 30° | [[1/12]]
row: 180° (semicircle) | [[1/2]]
```

:::skeleton Worked example: sector and arc (3 marks)
*Find the area of a sector of a circle of radius 21 cm and angle 60°. Also find the length of its arc. (Use $\pi=\tfrac{22}{7}$)*

Area $=\dfrac{60}{360}\times\dfrac{22}{7}\times21\times21$ [1]

$=\dfrac16\times1386=\boxed{231\ \text{cm}^2}$ [1]

Arc $=\dfrac{60}{360}\times2\times\dfrac{22}{7}\times21=\dfrac16\times132=\boxed{22\ \text{cm}}$ [1]
:::

Three things follow at once:

- **Major sector** = area of circle − minor sector (its angle is $360^\circ-\theta$).
- **Perimeter of a sector** = arc length + $2r$ (do not forget the two radii).
- **Clock hands:** the minute hand turns 360° in 60 minutes, that is **6° per minute**. The hour hand turns 360° in 12 hours, that is **30° per hour**.

:::skeleton Worked example: the minute hand (2 marks)
*The minute hand of a clock is 7 cm long. Find the area it sweeps in 15 minutes.*

Angle swept $=15\times6^\circ=90^\circ$ [1]

Area $=\dfrac{90}{360}\times\dfrac{22}{7}\times7\times7=\boxed{38.5\ \text{cm}^2}$ [1]
:::

:::tip Which π?
Use the value the question gives. If none is given, use $\dfrac{22}{7}$, which cancels neatly when the radius is a multiple of 7.
:::

```ng-graph
id: graph-sector-area
title: Sector area grows in step with the angle
x: angle θ (degrees) | 0 | 360
y: area (cm²) | 0 | 700
curve: area of sector | x/360*pi*r^2
slider: r | radius $r$ (cm) | 3 | 14 | 1 | 7
preset: r = 7 cm | r=7
preset: r = 14 cm | r=14
note: A straight line through the origin: double the angle, double the area. At 360° it reaches the whole circle, $\pi r^2$.
```

```ng-numerical
id: num-sector-area
title: Area of a sector
question: Find the area of a sector of a circle of radius {{r}} cm whose angle is {{t}}°. Use π = 3.14.
var: r | 4 | 20 | 2
var: t | 30 | 150 | 15
answer: t/360*3.14*r^2
unit: cm²
dp: 2
tol: 1
step: Area $=\dfrac{\theta}{360}\times\pi r^2=\dfrac{ {{t}} }{360}\times3.14\times{{r}}^2$
step: $=$ **{{t/360*3.14*r^2:2}} cm²**
```

```ng-numerical
id: num-arc-length
title: Length of an arc
question: Find the length of the arc of a circle of radius {{r}} cm that subtends an angle of {{t}}° at the centre. Use π = 3.14.
var: r | 5 | 30 | 5
var: t | 30 | 180 | 30
answer: t/360*2*3.14*r
unit: cm
dp: 2
tol: 1
step: Arc $=\dfrac{\theta}{360}\times2\pi r=\dfrac{ {{t}} }{360}\times2\times3.14\times{{r}}$
step: $=$ **{{t/360*2*3.14*r:2}} cm**
```

**In one breath:** Sector area is $\dfrac{\theta}{360}$ of $\pi r^2$; arc length is $\dfrac{\theta}{360}$ of $2\pi r$. A sector's perimeter also includes its two radii.

## Area of a segment

A segment is what is left of a sector when you remove the triangle formed by the two radii and the chord.

:::formula Area of a minor segment
$$\text{Segment}=\text{sector}-\text{triangle }OAB$$
:::

The only work is the area of triangle $OAB$. For the three angles that are asked, it is quick:

| Angle θ | Triangle OAB | Its area |
|---|---|---|
| 90° | right-angled, legs $r$ and $r$ | $\dfrac12r^2$ |
| 60° | equilateral, side $r$ | $\dfrac{\sqrt3}{4}r^2$ |
| 120° | isosceles; drop a perpendicular from $O$ | $\dfrac{\sqrt3}{4}r^2$ |

For 120°, the perpendicular $OM$ from $O$ to $AB$ makes two $30^\circ$–$60^\circ$–$90^\circ$ triangles: $OM=\dfrac r2$ and $AB=\sqrt3\,r$, so the area is $\dfrac12\times\sqrt3\,r\times\dfrac r2=\dfrac{\sqrt3}{4}r^2$, the same as for 60°.

```ng-steps
id: steps-segment-area
title: Area of a segment in four steps
step: **Sector:** find $\dfrac{\theta}{360}\times\pi r^2$.
step: **Triangle:** find the area of triangle $OAB$ ($\tfrac12r^2$ for 90°; $\tfrac{\sqrt3}{4}r^2$ for 60° or 120°).
step: **Subtract:** minor segment = sector − triangle.
step: **Major segment** (if asked) = area of the circle − minor segment.
```

:::skeleton Worked example: segment with a right angle (3 marks)
*A chord of a circle of radius 14 cm subtends a right angle at the centre. Find the area of the minor segment and of the major segment. (Use $\pi=\tfrac{22}{7}$)*

Sector $=\dfrac{90}{360}\times\dfrac{22}{7}\times14\times14=154$ cm² [1]

Triangle $=\dfrac12\times14\times14=98$ cm²; minor segment $=154-98=\boxed{56\ \text{cm}^2}$ [1]

Circle $=\dfrac{22}{7}\times14\times14=616$ cm²; major segment $=616-56=\boxed{560\ \text{cm}^2}$ [1]
:::

:::skeleton Worked example: segment with 60° (3 marks)
*A chord of a circle of radius 6 cm subtends an angle of 60° at the centre. Find the area of the minor segment. (Use $\pi=3.14$, $\sqrt3=1.73$)*

Sector $=\dfrac{60}{360}\times3.14\times36=18.84$ cm² [1]

Triangle $OAB$ is equilateral: area $=\dfrac{\sqrt3}{4}\times36=9\times1.73=15.57$ cm² [1]

Minor segment $=18.84-15.57=\boxed{3.27\ \text{cm}^2}$ [1]
:::

:::tip Segment is not sector
The most common slip in this chapter is to stop at the sector. If the question says *segment*, subtract the triangle.
:::

```ng-draw
id: draw-segment
title: Draw a circle with a minor segment
svg: ref: notes#segment-figure
time: 2
```

```ng-explain
id: explain-segment-area
prompt: In two lines, explain how to find the area of a minor segment and of the major segment.
lines: 2
```

**In one breath:** Segment = sector − triangle. The triangle is $\tfrac12r^2$ for 90° and $\tfrac{\sqrt3}{4}r^2$ for 60° and 120°. Major segment = circle − minor segment.

## Everyday problems

Word problems only disguise the sector. Find the centre, the radius and the angle.

:::skeleton Worked example: the tethered goat (3 marks)
*A goat is tied with a 7 m rope to a peg at one corner of a square field of side 20 m. Find the area it can graze. If the rope were 14 m long, how much more area could it graze? (Use $\pi=\tfrac{22}{7}$)*

The corner of a square is 90°, so the grazed region is a quadrant of radius 7 m. [1]

Area $=\dfrac14\times\dfrac{22}{7}\times7\times7=\boxed{38.5\ \text{m}^2}$ [1]

With 14 m: $\dfrac14\times\dfrac{22}{7}\times14\times14=154$ m²; increase $=154-38.5=\boxed{115.5\ \text{m}^2}$ [1]
:::

| Situation | Centre and radius | Angle |
|---|---|---|
| Animal tied at a corner | the peg; the rope | the angle of the corner |
| Clock hand | centre of the clock; the hand | 6° per minute (minute hand) |
| Wiper, fan blade, slice | the pivot; the blade | given, or 360° ÷ number of equal parts |

**In one breath:** In a word problem, find the centre, the radius and the angle; then it is a sector (or a segment) like any other.

## What is not in boards

The revision of perimeter and area of a full circle as a separate section, and "areas of combinations of plane figures", are not in the current book. Questions are on sectors, arcs and segments.

**In one breath:** Sectors, arcs and segments only; no long combined-figure problems.
