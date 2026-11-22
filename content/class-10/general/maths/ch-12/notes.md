# Ch 12 · Surface Areas and Volumes

A capsule is a cylinder with a hemisphere at each end. An ice-cream cone is a cone with a hemisphere on top. A tent is a cone on a cylinder. This chapter has no new formula: it takes the solids of Class 9 and **joins them**. The whole skill is deciding which surfaces to count.

## The sphere inside the cylinder

Archimedes, who lived in Sicily about 2 200 years ago, proved that a sphere takes up exactly two-thirds of the cylinder that just encloses it, and that its surface is two-thirds of that cylinder's total surface too. He is said to have been so proud of this result that he asked for a sphere inside a cylinder to be carved on his tomb; the Roman writer Cicero later reported finding a tomb with that figure.

The same thinking, comparing one solid with another and adding or removing pieces, is how a factory works out the metal in a gas cylinder, how a pharmacist knows the dose a capsule holds, and how a tent-maker orders canvas.

**In one breath:** Real objects are combinations of a few basic solids. Know the basic formulas, then add volumes and count only the visible surfaces.

## The basic solids: formulas to recall

Everything in this chapter is built from the following. $r$ = radius, $h$ = height, $l$ = slant height.

```ng-fill
id: fill-solid-formulas
title: Curved surface area and volume
cols: Solid | Curved surface area | Volume
row: Cylinder | [[$2\pi rh$]] | [[$\pi r^2h$]]
row: Cone | [[$\pi rl$]] | [[$\dfrac13\pi r^2h$]]
row: Sphere | [[$4\pi r^2$]] | [[$\dfrac43\pi r^3$]]
row: Hemisphere | [[$2\pi r^2$]] | [[$\dfrac23\pi r^3$]]
```

| Solid | Total surface area |
|---|---|
| Cuboid | $2(lb+bh+hl)$ |
| Cube | $6a^2$ |
| Cylinder | $2\pi r(r+h)$ |
| Cone | $\pi r(l+r)$ |
| Solid hemisphere | $3\pi r^2$ |

Volumes of a cuboid and a cube are $lbh$ and $a^3$.

<figure class="fig" id="cone-figure">
<svg viewBox="0 0 300 180" role="img" aria-label="A cone showing its radius r, height h and slant height l" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M150,22 L88,146 M150,22 L212,146"/><path d="M88,146 A62,13 0 0 0 212,146"/><path d="M88,146 A62,13 0 0 1 212,146" stroke-dasharray="4 3" stroke-width="1"/><path d="M150,22 V146 H212" stroke-dasharray="5 4" stroke-width="1" class="u"/><text x="142" y="96" font-size="13" text-anchor="end" fill="currentColor" stroke="none">h</text><text x="182" y="140" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">r</text><text x="196" y="84" font-size="13" fill="#E0B400" stroke="none">l</text><text x="60" y="40" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">l² = r² + h²</text></svg>
<figcaption>In a cone the radius, height and slant height form a right triangle.</figcaption>
</figure>

:::formula Slant height of a cone
$$l=\sqrt{r^2+h^2}$$
:::

```ng-mnemonic
id: cone-is-one-third
title: Cone and cylinder
trick: **A cone is one-third of its cylinder**
meaning: Same base and same height: volume of cone $=\dfrac13\times$ volume of cylinder. Three cones of water fill the cylinder.
prompt: How does the volume of a cone compare with a cylinder of the same base and height?
```

```ng-graph
id: graph-three-volumes
title: Cylinder, hemisphere and cone of the same radius (height = radius)
x: radius r (cm) | 0 | 6
y: volume (cm³) | 0 | 700
curve: cylinder | pi*x^3
curve: hemisphere | 2*pi*x^3/3
curve: cone | pi*x^3/3
note: With height equal to the radius the volumes are always in the ratio 3 : 2 : 1 (cylinder : hemisphere : cone).
```

**In one breath:** Cylinder $\pi r^2h$, cone one-third of that, sphere $\tfrac43\pi r^3$, hemisphere half the sphere. For a cone, $l^2=r^2+h^2$.

## Surface area of a combination

When two solids are joined, the faces that touch **disappear** inside the new solid. So the surface area of the combination is **not** the sum of the two total surface areas. Add only the surfaces you could touch or paint.

```ng-figure
id: toy-figure
title: A cone on a hemisphere
svg:
<svg viewBox="0 0 300 186" role="img" aria-label="A toy made of a cone standing on a hemisphere of the same radius" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M150,16 L96,104 M150,16 L204,104"/><path d="M96,104 A54,11 0 0 0 204,104"/><path d="M96,104 A54,11 0 0 1 204,104" stroke-dasharray="4 3" stroke-width="1"/><path d="M96,104 A54,54 0 0 0 204,104" class="u" stroke-width="2"/><path d="M150,104 H204" stroke-dasharray="5 4" stroke-width="1"/><text x="180" y="130" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">r</text><text x="224" y="62" font-size="11" text-anchor="start" fill="currentColor" stroke="none">cone</text><text x="224" y="140" font-size="11" text-anchor="start" fill="currentColor" stroke="none">hemisphere</text><text x="56" y="104" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">joined here:</text><text x="56" y="116" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">not counted</text></svg>
caption: The flat circular faces are glued together, so only the two curved surfaces are counted.
part: 150, 16 | Vertex of the cone | The height of the cone is measured from here to the flat joint.
part: 176, 60 | Curved surface of the cone | Area $\pi rl$; it is on the outside, so count it.
part: 150, 104 | The joint | Two equal circles glued together. Not part of the surface.
part: 150, 150 | Curved surface of the hemisphere | Area $2\pi r^2$; count it.
part: 180, 126 | Common radius r | The cone and the hemisphere have the same radius.
```

```ng-steps
id: steps-surface-of-combination
title: Surface area of a combined solid
step: **Sketch the solid** and name each part (cone, cylinder, hemisphere, cube).
step: **Find every dimension:** common radius, each height, slant height if there is a cone.
step: **List the visible surfaces only.** Cross out the faces where the solids are joined.
step: **Add the areas** of the visible surfaces, and write the unit (cm², m²).
```

:::skeleton Worked example: toy = cone + hemisphere (3 marks)
*A toy is a cone of radius 7 cm mounted on a hemisphere of the same radius. The total height of the toy is 31 cm. Find its total surface area. $\left(\pi=\tfrac{22}{7}\right)$*

Height of cone $=31-7=24$ cm; $l=\sqrt{7^2+24^2}=25$ cm [1]

TSA = CSA of cone + CSA of hemisphere $=\pi rl+2\pi r^2$ [1]

$=\dfrac{22}{7}\times7\times25+2\times\dfrac{22}{7}\times49=550+308=\boxed{858\ \text{cm}^2}$ [1]
:::

:::tip Total height is not the cone's height
When a hemisphere is attached, its height is its radius. Subtract it from the total height to get the height of the cone or cylinder.
:::

<figure class="fig" id="hollow-block-figure">
<svg viewBox="0 0 300 180" role="img" aria-label="A cube with a hemispherical hollow scooped out of its top face" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M70,60 H190 V160 H70 Z M70,60 L110,30 H230 L190,60 M230,30 V130 L190,160"/><ellipse cx="150" cy="45" rx="34" ry="9" class="u" stroke-width="2"/><path d="M118,48 A34,30 0 0 0 182,48" stroke-dasharray="4 3" stroke-width="1"/><text x="250" y="34" font-size="10" text-anchor="start" fill="currentColor" stroke="none">hollow</text></svg>
<figcaption>A hemisphere scooped out of a cube removes a circle from the top face and adds a curved bowl.</figcaption>
</figure>

:::skeleton Worked example: a hollow scooped out (3 marks)
*A hemispherical hollow of diameter 7 cm is cut out of one face of a cube of edge 10 cm. Find the surface area of the remaining solid. $\left(\pi=\tfrac{22}{7}\right)$*

Surface = 6 faces of the cube − circle removed + curved surface of the hollow [1]

$=6a^2-\pi r^2+2\pi r^2=6a^2+\pi r^2$ [1]

$=600+\dfrac{22}{7}\times3.5\times3.5=600+38.5=\boxed{638.5\ \text{cm}^2}$ [1]
:::

The same expression, $6a^2+\pi r^2$, comes out when a hemisphere is **placed on** the cube instead of scooped out: either way one circle is lost and one curved surface $2\pi r^2$ is gained.

```ng-fill
id: fill-visible-surfaces
title: What to count
cols: Solid | Surfaces to add
row: Cone on a hemisphere | [[$\pi rl+2\pi r^2$]]
row: Capsule (cylinder + 2 hemispheres) | [[$2\pi rh+4\pi r^2$]]
row: Tent (cone on a cylinder), canvas only | [[$\pi rl+2\pi rh$]]
row: Cylinder with a conical hole of the same base | [[$2\pi rh+\pi r^2+\pi rl$]]
row: Cube with a hemisphere on top or scooped out | [[$6a^2+\pi r^2$]]
```

```ng-numerical
id: num-capsule-surface
title: Surface area of a capsule
question: A capsule is a cylinder with a hemisphere at each end. The cylindrical part is {{h}} mm long and the radius is {{r}} mm. Find its surface area. Use π = 3.14.
var: r | 2 | 5 | 1
var: h | 6 | 14 | 2
answer: 2*3.14*r*h+4*3.14*r^2
unit: mm²
dp: 2
tol: 1
step: Visible surfaces: curved surface of the cylinder + two hemispheres $=2\pi rh+4\pi r^2$
step: $=2\times3.14\times{{r}}\times{{h}}+4\times3.14\times{{r}}^2=$ **{{2*3.14*r*h+4*3.14*r^2:2}} mm²**
```

```ng-draw
id: draw-toy
title: Draw a cone on a hemisphere and mark what is counted
svg: ref: notes#toy-figure
time: 3
```

**In one breath:** For surface area, add only the outside surfaces; the faces where solids are joined vanish. Find the slant height and the true heights before you start.

## Volume of a combination

Volume is simpler. Nothing disappears when solids are joined: **add the volumes**. When a piece is scooped out or drilled, **subtract** its volume.

```ng-compare
id: surface-vs-volume
title: Surface area or volume?
cols: Surface area | Volume
row: Question words | paint, polish, cover, canvas, wrap | capacity, holds, fills, material, air
row: When solids are joined | count only the visible surfaces | add the volumes
row: When a piece is removed | remove the lost face, add the new inner surface | subtract its volume
row: Unit | cm², m² | cm³, m³, litres
```

:::skeleton Worked example: volume of the toy (3 marks)
*Find the volume of the toy above (cone of radius 7 cm and height 24 cm on a hemisphere of radius 7 cm). $\left(\pi=\tfrac{22}{7}\right)$*

Volume = cone + hemisphere $=\dfrac13\pi r^2h+\dfrac23\pi r^3$ [1]

$=\dfrac13\times\dfrac{22}{7}\times49\times24+\dfrac23\times\dfrac{22}{7}\times343$ [1]

$=1232+718.67=\boxed{1950.67\ \text{cm}^3}$ [1]
:::

A useful shortcut: take out the common factor. Here the volume is $\dfrac13\pi r^2(h+2r)=\dfrac13\times\dfrac{22}{7}\times49\times38$, one multiplication instead of two.

```ng-mnemonic
id: paint-or-pour
title: Surface or volume?
trick: **Paint the outside, pour the inside**
meaning: If the question is about **painting, covering or wrapping**, it is surface area: count the outside only. If it is about **pouring, filling or holding**, it is volume: add every part.
prompt: A question asks how much water a vessel holds. Surface area or volume?
```

```ng-numerical
id: num-ice-cream-volume
title: Volume of a cone with a hemisphere on top
question: An ice-cream cone has radius {{r}} cm and height {{h}} cm, with a hemisphere of ice cream of the same radius on top. Find the total volume. Use π = 3.14.
var: r | 2 | 5 | 1
var: h | 8 | 14 | 2
answer: 3.14*r^2*h/3+2*3.14*r^3/3
unit: cm³
dp: 2
tol: 1
step: Volume $=\dfrac13\pi r^2h+\dfrac23\pi r^3=\dfrac13\pi r^2(h+2r)$
step: $=\dfrac13\times3.14\times{{r}}^2\times({{h}}+2\times{{r}})=$ **{{3.14*r^2*h/3+2*3.14*r^3/3:2}} cm³**
```

Units of capacity: $1\ \text{litre}=1000\ \text{cm}^3$ and $1\ \text{m}^3=1000$ litres.

```ng-explain
id: explain-joined-faces
prompt: In three lines, explain why the surface area of a cone joined to a hemisphere is not the sum of their total surface areas, but the volume is the sum of their volumes.
lines: 3
```

**In one breath:** Volumes add when solids are joined and subtract when a piece is removed. Watch the units: 1 litre = 1000 cm³.

## What is not in boards

**Conversion of a solid from one shape to another** (melting and recasting) and the **frustum of a cone** are not in the current book. Questions are on the surface area and volume of combinations of solids.

**In one breath:** Only combinations of solids: no melting-and-recasting, no frustum.
