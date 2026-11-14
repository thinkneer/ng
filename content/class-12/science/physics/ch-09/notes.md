# Ch 9 · Ray Optics and Optical Instruments

Ray optics treats light as rays travelling in straight lines, which works well whenever the objects are much bigger than the wavelength of light. With just two laws (reflection and refraction) and a sign convention, you can explain mirrors, lenses, prisms, sparkling diamonds and optical fibres, and design microscopes and telescopes. This is the highest-scoring chapter in the paper, so the formulas and ray diagrams here pay off directly.

## Mirrors and the sign convention

The laws of reflection: the angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal lie in one plane.

For spherical mirrors we use the **Cartesian sign convention**. Measure all distances from the pole P along the principal axis. Distances in the direction of the incident light are positive; distances against it are negative. Heights above the axis are positive, below are negative. With light coming from the left, the object distance $u$ is always negative, a concave mirror has negative $f$ and a convex mirror positive $f$.

For a mirror of radius of curvature $R$, rays close to the axis (paraxial rays) parallel to it meet at the focus, halfway to the centre of curvature: $f=R/2$.

:::formula Mirror formula
$\dfrac1v+\dfrac1u=\dfrac1f$,   $f=\dfrac R2$

Magnification $m=\dfrac{h'}{h}=-\dfrac vu$ (negative: real and inverted; positive: virtual and erect)
:::

```ng-figure
id: ch09-mirror
title: Concave mirror image
svg:
<svg viewBox="0 0 340 196" role="img" aria-label="Concave mirror forming a real inverted image of an object beyond C" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,100L330,100" stroke-width="0.8"/><path class="u" d="M290.5,30 A120,120 0 0 1 290.5,170" stroke-width="2.4"/><circle cx="180" cy="100" r="2.2" fill="currentColor"/><circle cx="240" cy="100" r="2.2" fill="currentColor"/><path d="M150,100L150,70" stroke-width="2"/><path d="M150,70L152.4,75.5L147.6,75.5Z" fill="currentColor" stroke="none"/><path class="u" d="M200,100L200,120" stroke-width="2"/><path class="uf" d="M200,120L197.6,114.5L202.4,114.5Z" stroke="none"/><path d="M150,70L296.2,70L200,120" stroke-width="1.3"/><path d="M150,70L296.2,70" stroke-width="0.01"/><path d="M226.1,70L221.5,72L221.5,68Z" fill="currentColor" stroke="none"/><path d="M296.2,70L200,120" stroke-width="0.01"/><path d="M245.4,96.4L248.5,92.5L250.4,96.1Z" fill="currentColor" stroke="none"/><path d="M150,70L298.3,120L200,120" stroke="#E0B400" stroke-width="1.3"/><path d="M150,70L298.3,120" stroke="#E0B400" stroke-width="0.01"/><path d="M227,96L222,96.4L223.3,92.6Z" fill="#E0B400" stroke="none"/><path d="M298.3,120L200,120" stroke="#E0B400" stroke-width="0.01"/><path d="M246.2,120L250.7,118L250.7,122Z" fill="#E0B400" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="180" y="115">C</text><text x="240" y="115">F</text><text x="308" y="115" text-anchor="start">P</text><text x="150" y="115">object</text><text class="uf" x="206" y="130" text-anchor="start">image</text><text x="300" y="190" text-anchor="end" font-size="11">object beyond C → real, inverted, diminished</text></g></svg>
caption: Concave mirror, object beyond C: a ray parallel to the axis reflects through F; a ray through F reflects parallel to the axis. They meet between F and C: real, inverted, diminished.
part: 180, 100 | C (centre of curvature) | R = 2f.
part: 240, 100 | F (focus) | Parallel rays reflect through it.
part: 150, 70 | Object (beyond C) | u is negative.
part: 200, 120 | Image | Real, inverted, diminished, between F and C.
```

To locate an image, draw two of the standard rays from the top of the object: one parallel to the axis (reflects through F), one through F (reflects parallel), or one through C (reflects back on itself).

:::skeleton Worked example: concave mirror
*An object is 15 cm in front of a concave mirror of focal length 10 cm. Find the position and nature of the image.*

$u=-15$ cm, $f=-10$ cm; $\dfrac1v=\dfrac1f-\dfrac1u=-\dfrac1{10}+\dfrac1{15}=-\dfrac1{30}$ [1]

$v=-30$ cm; $m=-\dfrac vu=-2$ [½]

**Image 30 cm in front of the mirror, real, inverted, twice the size** [½]
:::

:::tip Signs before substituting
Put the sign of every known quantity in first ($u$ negative, concave $f$ negative), then solve. The sign of your answer tells you the nature of the image.
:::

```ng-numerical
id: mirror-formula
title: Concave mirror with fresh numbers
question: An object is {{u}} cm in front of a concave mirror of focal length {{f}} cm. Find the image distance and magnification (take distances against the incident light as negative).
var: u | 25 | 60 | 5
var: f | 10 | 20 | 5
let: v = 1/(-1/f + 1/u)
answer: v
unit: cm
dp: 1
step: $u=-{{u}}$ cm, $f=-{{f}}$ cm; $\dfrac1v=\dfrac1f-\dfrac1u=-\dfrac1{ {{f}} }+\dfrac1{ {{u}} }$
step: $v=$ **{{v:1}} cm** (negative: real image in front); $m=-\dfrac vu={{v/u}}$ (inverted)
```

```ng-mnemonic
id: sign-convention
title: Cartesian sign convention
trick: **"Roshni ki disha mein plus"** (along the light, plus)
meaning: Measure from the pole; along the incident light is **+**, against it is **−**; above the axis **+**.
meaning: So $u$ is always negative; concave mirror and concave lens have negative $f$.
prompt: State the Cartesian sign convention for mirrors and lenses.
```

```ng-draw
id: draw-concave-mirror
title: Draw the ray diagram for a concave mirror, object beyond C
svg: ref: notes#ch09-mirror
time: 3
```

**In one breath:** With distances measured from the pole and the incident direction positive, $\frac1v+\frac1u=\frac1f$, $f=R/2$ and $m=-v/u$; the signs tell you real or virtual.

## Refraction and refractive index

When light passes from one medium to another, it changes speed and bends. **Snell's law**: $n_1\sin i=n_2\sin r$, with the refractive index $n=c/v$. Light bends **towards** the normal going into a denser medium (larger $n$) and away from it going into a rarer one. The frequency does not change, so the wavelength shrinks in a denser medium, $\lambda_\text{medium}=\lambda/n$.

:::formula Refraction
$n_1\sin i=n_2\sin r$;   $n_{21}=\dfrac{n_2}{n_1}=\dfrac{v_1}{v_2}$

Apparent depth $=\dfrac{\text{real depth}}{n}$ (viewed from above, near-normal)
:::

A coin in a glass of water looks raised because rays leaving the water bend away from the normal, so they appear to come from a point nearer the surface.

**In one breath:** Snell's law $n_1\sin i=n_2\sin r$ with $n=c/v$; light slows and bends towards the normal in a denser medium, keeping its frequency.

## Total internal reflection

Going from a denser to a rarer medium, light bends away from the normal. As the angle of incidence grows, the refracted ray swings towards the surface, until at the **critical angle** $c$ it grazes along the surface ($r=90^\circ$). For any larger angle no light is refracted at all: it is all reflected back. This is **total internal reflection** (TIR).

```ng-figure
id: ch09-tir
title: Total internal reflection
svg:
<svg viewBox="0 0 380 196" role="img" aria-label="Total internal reflection at a glass–air surface" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="uf" d="M10,90L10,190L370,190L370,90Z" stroke="none" fill-opacity="0.08"/><path d="M10,90L370,90" stroke-width="1.6"/><circle cx="300" cy="170" r="2.2" fill="currentColor"/><path d="M300,170L267.7,90" stroke-width="1.3"/><path d="M300,170L267.7,90" stroke-width="0.01"/><path d="M282.7,127.2L286.3,130.7L282.5,132.2Z" fill="currentColor" stroke="none"/><path d="M267.7,60L267.7,120" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M267.7,90L228.3,32.1" stroke-width="1.3"/><path d="M267.7,90L228.3,32.1" stroke-width="0.01"/><path d="M246.3,58.6L250.6,61.2L247.2,63.5Z" fill="currentColor" stroke="none"/><path d="M300,170L228.4,90" stroke="#E0B400" stroke-width="1.3"/><path d="M300,170L228.4,90" stroke="#E0B400" stroke-width="0.01"/><path d="M262.2,127.8L266.8,129.8L263.7,132.5Z" fill="#E0B400" stroke="none"/><path d="M228.4,60L228.4,120" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M228.4,90L138.4,89.5" stroke="#E0B400" stroke-width="1.3"/><path d="M228.4,90L138.4,89.5" stroke="#E0B400" stroke-width="0.01"/><path d="M180.4,89.7L185,87.7L185,91.8Z" fill="#E0B400" stroke="none"/><path class="u" d="M300,170L172,90" stroke-width="1.3"/><path class="u" d="M300,170L172,90" stroke-width="0.01"/><path class="uf" d="M233.4,128.4L238.4,129.1L236.2,132.6Z" stroke="none"/><path d="M172,60L172,120" stroke-width="0.8" stroke-dasharray="4 3"/><path class="u" d="M172,90L121.1,121.8" stroke-width="1.3"/><path class="u" d="M172,90L121.1,121.8" stroke-width="0.01"/><path class="uf" d="M144,107.5L146.8,103.3L148.9,106.8Z" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="20" y="80" text-anchor="start" font-size="11">air (rarer)</text><text x="20" y="182" text-anchor="start" font-size="11">glass (denser)</text><text x="308" y="174" text-anchor="start">O</text><text x="224.3" y="32.1" text-anchor="end" font-size="11">i &lt; c</text><text x="178.4" y="82" fill="#E0B400" font-size="11">i = c (grazes)</text><text class="uf" x="131.1" y="129.8" text-anchor="start" font-size="11">i &gt; c: TIR</text></g></svg>
caption: From glass towards air: a small angle refracts away from the normal; at the critical angle c the ray grazes the surface; beyond c all the light is reflected back (total internal reflection).
part: 300, 170 | Source in glass | Light goes from denser to rarer.
part: 267, 90 | i less than c | Refracts away from the normal.
part: 228, 90 | Critical angle c | Refracted ray grazes the surface; sin c = 1/n.
part: 172, 90 | i greater than c | All light reflected: TIR.
```

:::formula Critical angle
$\sin c=\dfrac{1}{n_{21}}=\dfrac{n_\text{rarer}}{n_\text{denser}}$ (glass–air: $c\approx42^\circ$; diamond: $c\approx24.4^\circ$)

TIR needs both: light going from denser to rarer, and $i>c$.
:::

Where it shows up:

- **Optical fibres**: thin glass fibres with a core of higher refractive index than the cladding around it. Light entering at a small angle hits the core–cladding boundary at more than the critical angle each time and is guided along by repeated TIR with almost no loss, even round bends. Used in communications and in endoscopes.
- **Totally reflecting prisms**: a right-angled glass prism bends light through 90° or 180° by TIR ($45^\circ>42^\circ$), used in binoculars and periscopes; better than a mirror because no light is lost.
- **Sparkle of a diamond**: its very small critical angle traps light by repeated TIR until it escapes through the top faces.
- **Mirage**: on a hot road, air near the ground is hotter and rarer, so light from the sky bending through the layers is totally reflected upward, looking like a reflection in water.

```ng-graph
id: critical-angle-graph
title: sin c against refractive index
x: n (relative to air) | 1 | 2.5
y: sin c | 0 | 1
curve: sin c = 1/n | 1/x
note: The denser the medium, the smaller the critical angle. Glass ($n=1.5$): $\sin c=0.67$, $c\approx42^\circ$. Diamond ($n=2.42$): $\sin c=0.41$, $c\approx24^\circ$.
```

```ng-fill
id: critical-angles
title: Critical angles worth knowing
cols: Medium (to air) | n | Critical angle
row: Water | 1.33 | [[about 49°]]
row: Glass | 1.5 | [[about 42°]]
row: Diamond | [[2.42]] | about 24°
```

```ng-draw
id: draw-tir
title: Draw rays at, below and above the critical angle
svg: ref: notes#ch09-tir
time: 3
```

**In one breath:** From denser to rarer beyond the critical angle ($\sin c=1/n$), all light reflects; optical fibres, reflecting prisms, diamonds and mirages all use TIR.

## Refraction at a spherical surface and lenses

For refraction at a single spherical surface of radius $R$ separating media $n_1$ (object side) and $n_2$, the same sign convention gives:

:::formula Refraction at a spherical surface
$\dfrac{n_2}{v}-\dfrac{n_1}{u}=\dfrac{n_2-n_1}{R}$
:::

A thin lens is two such surfaces back to back. Apply the formula at the first surface (its image becomes the object for the second), add the two results, and put $u=\infty$ to find the focal length. That gives the **lens maker's formula**, and with it the **thin lens formula**.

:::formula Lens maker's formula
$\dfrac1f=(n_{21}-1)\left(\dfrac{1}{R_1}-\dfrac{1}{R_2}\right)$, $n_{21}$ = index of the lens relative to the surroundings
:::

:::formula Thin lens formula
$\dfrac1v-\dfrac1u=\dfrac1f$;   magnification $m=\dfrac{h'}{h}=\dfrac vu$

Convex lens $f>0$; concave lens $f<0$
:::

```ng-figure
id: ch09-lens
title: Convex lens image
svg:
<svg viewBox="0 0 390 196" role="img" aria-label="Convex lens forming a real inverted image" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15,100L385,100" stroke-width="0.8"/><path class="u" d="M200,38 Q212,100 200,162 Q188,100 200,38Z" stroke-width="1.6"/><circle cx="140" cy="100" r="2.2" fill="currentColor"/><circle cx="260" cy="100" r="2.2" fill="currentColor"/><circle cx="80" cy="100" r="2.2" fill="currentColor"/><circle cx="320" cy="100" r="2.2" fill="currentColor"/><path d="M50,100L50,64" stroke-width="2"/><path d="M50,64L52.4,69.5L47.6,69.5Z" fill="currentColor" stroke="none"/><path class="u" d="M300,100L300,124" stroke-width="2"/><path class="uf" d="M300,124L297.6,118.5L302.4,118.5Z" stroke="none"/><path d="M50,64L200,64L300,124L330,142" stroke-width="1.3"/><path d="M50,64L200,64" stroke-width="0.01"/><path d="M128,64L123.4,66L123.4,62Z" fill="currentColor" stroke="none"/><path d="M200,64L300,124" stroke-width="0.01"/><path d="M252.6,95.5L247.6,94.9L249.7,91.4Z" fill="currentColor" stroke="none"/><path d="M50,64L300,124L330,131.2" stroke="#E0B400" stroke-width="1.3"/><path d="M50,64L300,124" stroke="#E0B400" stroke-width="0.01"/><path d="M177.9,94.7L173,95.6L174,91.7Z" fill="#E0B400" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="140" y="115">F</text><text x="260" y="115">F′</text><text x="80" y="115">2F</text><text x="320" y="115">2F′</text><text class="uf" x="300" y="150">image</text><text x="380" y="190" text-anchor="end" font-size="11">object beyond 2F → real, inverted, between F′ and 2F′</text></g></svg>
caption: Convex lens, object beyond 2F: the ray parallel to the axis passes through F′; the ray through the optical centre goes straight on. They meet between F′ and 2F′.
part: 200, 100 | Optical centre | Rays through it go straight on.
part: 260, 100 | F′ | Parallel rays converge here.
part: 50, 64 | Object (beyond 2F) | u is negative.
part: 300, 124 | Image | Real, inverted, between F′ and 2F′.
```

:::skeleton Answer skeleton: lens maker's formula (3 marks)
First surface: $\dfrac{n_2}{v_1}-\dfrac{n_1}{u}=\dfrac{n_2-n_1}{R_1}$ [1]

Image $I_1$ is the object for the second surface: $\dfrac{n_1}{v}-\dfrac{n_2}{v_1}=\dfrac{n_1-n_2}{R_2}$ [½]

Add: $\dfrac{n_1}{v}-\dfrac{n_1}{u}=(n_2-n_1)\left(\dfrac1{R_1}-\dfrac1{R_2}\right)$ [½]

Put $u=\infty$, $v=f$: **$\dfrac1f=(n_{21}-1)\left(\dfrac1{R_1}-\dfrac1{R_2}\right)$**; then $\dfrac1v-\dfrac1u=\dfrac1f$ [1]
:::

The **power** of a lens measures how strongly it converges or diverges light.

:::formula Power and combination of lenses
$P=\dfrac{1}{f}$ ($f$ in metres; unit dioptre, D)

Thin lenses in contact: $\dfrac1F=\dfrac1{f_1}+\dfrac1{f_2}+\dots$, $P=P_1+P_2+\dots$, $m=m_1m_2\cdots$
:::

:::skeleton Worked example: lens maker
*A biconvex lens of glass ($n=1.5$) has both radii 20 cm. Find its focal length and power.*

$\dfrac1f=(1.5-1)\left(\dfrac1{20}-\dfrac1{-20}\right)=0.5\times\dfrac{2}{20}$ [1]

**$f=20$ cm, $P=+5$ D** [1]
:::

:::tip A lens in a liquid
In $n_{21}$ use the index **relative to the surrounding medium**. A glass lens ($n=1.5$) in water ($n=1.33$) has a much longer focal length; in a liquid of the same index it behaves like a plain sheet ($f\to\infty$). If the liquid is denser, a convex lens diverges.
:::

```ng-numerical
id: lens-maker-numerical
title: Lens maker's formula
question: A biconvex lens of refractive index {{n}} has radii of curvature {{R1}} cm and {{R2}} cm. Find its focal length and power.
var: n | 1.4 | 1.7 | 0.1
var: R1 | 10 | 40 | 10
var: R2 | 10 | 40 | 10
let: f = 1/((n - 1)*(1/R1 + 1/R2))
answer: f
unit: cm
dp: 1
step: $\dfrac1f=(n-1)\left(\dfrac1{R_1}-\dfrac1{R_2}\right)=({{n}}-1)\left(\dfrac1{ {{R1}} }+\dfrac1{ {{R2}} }\right)$ ($R_2$ negative)
step: $f=$ **{{f:1}} cm**; $P=\dfrac{100}{f}={{100/f}}$ D
```

```ng-numerical
id: lens-image
title: Convex lens image
question: An object is {{u}} cm from a convex lens of focal length {{f}} cm. Find the image distance and magnification.
var: u | 30 | 80 | 5
var: f | 10 | 25 | 5
let: v = 1/(1/f - 1/u)
answer: v
unit: cm
dp: 1
step: $\dfrac1v=\dfrac1f+\dfrac1u=\dfrac1{ {{f}} }+\dfrac1{-{{u}} }$
step: $v=$ **{{v:1}} cm** (positive: real, on the other side); $m=\dfrac vu={{-v/u}}$ (inverted)
```

```ng-derive
id: derive-lens-maker
title: Derive the lens maker's formula
prompt: Using the relation for refraction at a spherical surface, derive the lens maker's formula for a thin double convex lens.
time: 7
check: Surface 1: $\dfrac{n_2}{v_1}-\dfrac{n_1}{u}=\dfrac{n_2-n_1}{R_1}$ | 1
check: $I_1$ is the object for surface 2: $\dfrac{n_1}{v}-\dfrac{n_2}{v_1}=\dfrac{n_1-n_2}{R_2}$ | 0.5
check: Add: $\dfrac{n_1}{v}-\dfrac{n_1}{u}=(n_2-n_1)\left(\dfrac1{R_1}-\dfrac1{R_2}\right)$ | 0.5
check: $u=\infty$, $v=f$: $\dfrac1f=(n_{21}-1)\left(\dfrac1{R_1}-\dfrac1{R_2}\right)$; and $\dfrac1v-\dfrac1u=\dfrac1f$ | 1
```

```ng-fill
id: mirror-vs-lens
title: Mirror formula vs lens formula
cols: Feature | Mirror | Lens
row: Formula | $\frac1v+\frac1u=\frac1f$ | [[$\frac1v-\frac1u=\frac1f$]]
row: Magnification | [[$m=-v/u$]] | $m=v/u$
row: Real image has | [[$v$ negative]] | $v$ positive
row: Converging one has | $f$ negative (concave) | [[$f$ positive (convex)]]
```

**In one breath:** Two refracting surfaces add up to the lens maker's formula $\frac1f=(n_{21}-1)(\frac1{R_1}-\frac1{R_2})$; then $\frac1v-\frac1u=\frac1f$, $m=v/u$, $P=1/f$, and powers in contact add.

## Refraction through a prism

A ray passing through a triangular prism is bent twice, both times towards the base. The angle between the incident and emergent directions is the **deviation** $\delta$.

```ng-figure
id: ch09-prism
title: Refraction through a prism
svg:
<svg viewBox="0 0 400 196" role="img" aria-label="Refraction through a prism at minimum deviation" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="u uf" d="M200,30L120,168.6L280,168.6Z" stroke-width="1.8" fill-opacity="0.06"/><path d="M44.8,146.7L153.8,110L246.2,110L355.2,146.7" stroke-width="1.8"/><path d="M44.8,146.7L153.8,110" stroke-width="0.01"/><path d="M102.2,127.4L98.5,130.8L97.2,126.9Z" fill="currentColor" stroke="none"/><path d="M153.8,110L246.2,110" stroke-width="0.01"/><path d="M203,110L198.4,112L198.4,108Z" fill="currentColor" stroke="none"/><path d="M246.2,110L355.2,146.7" stroke-width="0.01"/><path d="M303.5,129.3L298.5,129.8L299.8,125.9Z" fill="currentColor" stroke="none"/><path d="M123.5,92.5L179.8,125" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M276.5,92.5L220.2,125" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M153.8,110L296,62.2" stroke-width="0.8" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="127.8" y="120" font-style="italic">i</text><text x="272.2" y="120" font-style="italic">e</text><text x="200" y="52" font-style="italic">A</text><text x="283.8" y="60" font-style="italic" font-weight="bold">δ</text><text x="200" y="190" font-size="11">minimum deviation: i = e, ray inside parallel to base</text></g></svg>
caption: Ray through a prism with angle A: incidence i, emergence e, deviation δ between the incident direction (dashed) and the emergent ray. At minimum deviation i = e and the ray inside runs parallel to the base.
part: 200, 38 | Prism angle A | r₁ + r₂ = A.
part: 154, 110 | Entry point | Angle of incidence i.
part: 246, 110 | Exit point | Angle of emergence e.
part: 284, 60 | Deviation δ | i + e = A + δ; minimum when i = e.
```

From the geometry of the two normals, the angles of refraction inside add up to the prism angle, and the angles outside add up to $A+\delta$.

:::formula Prism
$r_1+r_2=A$;   $i+e=A+\delta$

Minimum deviation ($i=e$, $r_1=r_2=A/2$): $n=\dfrac{\sin\left(\frac{A+\delta_m}{2}\right)}{\sin\left(\frac A2\right)}$

Thin prism (small $A$): $\delta=(n-1)A$
:::

As $i$ increases, $\delta$ first falls, reaches a minimum $\delta_m$, then rises again: the $\delta$–$i$ graph is U-shaped. At minimum deviation the ray passes symmetrically, parallel to the base for an equilateral prism.

Different colours have different refractive indices ($n_\text{violet}>n_\text{red}$), so a prism deviates violet most and splits white light into a spectrum (dispersion).

:::skeleton Worked example: minimum deviation
*An equilateral glass prism gives a minimum deviation of 30°. Find its refractive index.*

$n=\dfrac{\sin\left(\frac{A+\delta_m}{2}\right)}{\sin\frac A2}=\dfrac{\sin45^\circ}{\sin30^\circ}$ [1]

$=\dfrac{0.707}{0.5}=$ **1.414 ($\sqrt2$)** [1]
:::

```ng-graph
id: thin-prism-deviation
title: Deviation by a thin prism
x: A (degrees) | 0 | 10
y: δ (degrees) | 0 | 8
curve: δ = (n − 1)A | (n - 1)*x
slider: n | $n$ | 1.3 | 1.8 | 0.05 | 1.5
note: For a thin prism the deviation is proportional to the prism angle; violet (larger $n$) deviates more than red.
```

```ng-numerical
id: prism-index
title: Refractive index from minimum deviation
question: A prism of angle {{A}}° gives a minimum deviation of {{d}}°. Find its refractive index.
var: A | 50 | 70 | 10
var: d | 30 | 50 | 5
answer: sin((A + d)/2*pi/180)/sin(A/2*pi/180)
dp: 3
step: $n=\dfrac{\sin\frac{A+\delta_m}{2}}{\sin\frac A2}=\dfrac{\sin{{(A + d)/2}}^\circ}{\sin{{A/2}}^\circ}$
step: $n=$ **{{sin((A + d)/2*pi/180)/sin(A/2*pi/180):3}}**
```

```ng-draw
id: draw-prism
title: Draw the path of a ray through a prism
svg: ref: notes#ch09-prism
time: 3
```

**In one breath:** A prism bends light twice towards its base: $r_1+r_2=A$, $i+e=A+\delta$; at minimum deviation the path is symmetric and $n=\sin\frac{A+\delta_m}{2}/\sin\frac A2$.

## Microscopes

How big something looks depends on the angle it makes at the eye. The nearest the eye can focus comfortably is the **near point**, $D=25$ cm.

A **simple microscope** is a convex lens of short focal length held close to the eye, with the object inside the focus so the image is virtual, erect and enlarged.

:::formula Simple microscope
Image at the near point: $m=1+\dfrac{D}{f}$;   image at infinity: $m=\dfrac Df$
:::

A **compound microscope** uses two convex lenses. The **objective** (short focal length, near the object) forms a real, inverted, magnified image; the **eyepiece** acts as a simple microscope on that image.

```ng-figure
id: ch09-microscope
title: Compound microscope
svg:
<svg viewBox="0 0 410 196" role="img" aria-label="Ray diagram of a compound microscope in normal adjustment" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15,100L405,100" stroke-width="0.8"/><path class="u" d="M90,70 Q102,100 90,130 Q78,100 90,70Z" stroke-width="1.6"/><path class="u" d="M254.3,45 Q266.3,100 254.3,155 Q242.3,100 254.3,45Z" stroke-width="1.6"/><path d="M58,100L58,88" stroke-width="2"/><path d="M58,88L60.4,93.5L55.6,93.5Z" fill="currentColor" stroke="none"/><path class="u" d="M204.3,100L204.3,142.9" stroke-width="2"/><path class="uf" d="M204.3,142.9L201.9,137.4L206.7,137.4Z" stroke="none"/><path d="M58,88L90,88L204.3,142.9" stroke-width="1.3"/><path d="M58,88L90,88" stroke-width="0.01"/><path d="M77,88L72.4,90L72.4,86Z" fill="currentColor" stroke="none"/><path d="M90,88L204.3,142.9" stroke-width="0.01"/><path d="M149.9,116.7L144.9,116.6L146.6,112.9Z" fill="currentColor" stroke="none"/><path d="M58,88L204.3,142.9" stroke="#E0B400" stroke-width="1.3"/><path d="M58,88L204.3,142.9" stroke="#E0B400" stroke-width="0.01"/><path d="M134,116.5L129,116.8L130.4,113Z" fill="#E0B400" stroke="none"/><path d="M204.3,142.9L254.3,142.9L400,17.9" stroke-width="1.3"/><path d="M204.3,142.9L254.3,142.9" stroke-width="0.01"/><path d="M232.3,142.9L227.7,144.9L227.7,140.9Z" fill="currentColor" stroke="none"/><path d="M254.3,142.9L400,17.9" stroke-width="0.01"/><path d="M329.4,78.4L327.3,83L324.6,79.9Z" fill="currentColor" stroke="none"/><path d="M204.3,142.9L400,-25" stroke="#E0B400" stroke-width="1.3"/><path d="M204.3,142.9L400,-25" stroke="#E0B400" stroke-width="0.01"/><path d="M304.4,57L302.3,61.5L299.6,58.4Z" fill="#E0B400" stroke="none"/><circle cx="115" cy="100" r="2.2" fill="currentColor"/><circle cx="204.3" cy="100" r="1.6" fill="currentColor"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="90" y="22" font-size="11">objective</text><text x="254.3" y="30" font-size="11">eyepiece</text><text x="52" y="114" text-anchor="end" font-size="11">object</text><text class="uf" x="204.3" y="160" font-size="11">real image</text><text x="115" y="93" font-size="11">F<tspan font-size="9" dy="3">o</tspan><tspan dy="-3">&#8203;</tspan></text><text x="400" y="190" text-anchor="end" font-size="11">image at F<tspan font-size="9" dy="3">e</tspan><tspan dy="-3">&#8203;</tspan> → parallel rays, final image at infinity</text></g></svg>
caption: Compound microscope: the objective forms a real, inverted, magnified image; the eyepiece, acting as a simple magnifier, makes the final image (here at infinity, normal adjustment).
part: 90, 100 | Objective | Short focal length; real, inverted, magnified image.
part: 254, 100 | Eyepiece | Acts as a simple magnifier.
part: 58, 94 | Object | Just beyond $F_{o}$.
part: 204, 140 | Intermediate image | At $F_{e}$ for normal adjustment.
```

:::formula Compound microscope
$m=m_om_e$;   normal adjustment (final image at infinity): $m=\dfrac{L}{f_o}\cdot\dfrac{D}{f_e}$

Final image at the near point: $m=\dfrac{L}{f_o}\left(1+\dfrac{D}{f_e}\right)$ ($L$ = tube length, the distance between the focal points)
:::

For high magnification both focal lengths should be short; the objective's is the shorter.

```ng-steps
id: microscope-stages
title: How a compound microscope magnifies in two stages
step: The object is placed just beyond $F_o$ of the objective (short focal length).
step: The objective forms a **real, inverted, magnified** image $A'B'$, magnification $m_o\approx L/f_o$.
step: $A'B'$ lies at (or just inside) $F_e$ of the eyepiece, which acts as a **simple magnifier**.
step: The eyepiece gives the final **virtual, magnified** image, at infinity (normal adjustment) or at $D$; total $m=m_om_e$.
```

```ng-numerical
id: microscope-magnification
title: Compound microscope magnification
question: A compound microscope has an objective of focal length {{fo}} cm and an eyepiece of focal length {{fe}} cm; the tube length is {{L}} cm. Find the magnifying power in normal adjustment.
var: fo | 0.5 | 2 | 0.5
var: fe | 2 | 6 | 1
var: L | 10 | 20 | 2
answer: (L/fo)*(25/fe)
dp: 0
step: $m=\dfrac{L}{f_o}\cdot\dfrac{D}{f_e}=\dfrac{ {{L}} }{ {{fo}} }\times\dfrac{25}{ {{fe}} }$
step: $m=$ **{{(L/fo)*(25/fe):0}}**
```

```ng-draw
id: draw-microscope
title: Draw the ray diagram of a compound microscope
svg: ref: notes#ch09-microscope
time: 5
```

**In one breath:** A simple magnifier gives $1+D/f$; a compound microscope multiplies the objective's real magnified image by the eyepiece, $m\approx\frac{L}{f_o}\frac{D}{f_e}$, so both focal lengths are short.

## Telescopes

A telescope makes distant objects look bigger by increasing the angle they make at the eye. In a **refracting (astronomical) telescope**, a large objective of long focal length forms a real image of the distant object at its focus, and the eyepiece magnifies that image. In normal adjustment the final image is at infinity and the two lenses are $f_o+f_e$ apart.

```ng-figure
id: ch09-telescope
title: Astronomical telescope
svg:
<svg viewBox="0 0 400 194" role="img" aria-label="Astronomical refracting telescope in normal adjustment" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10,100L395,100" stroke-width="0.8"/><path class="u" d="M40,50 Q52,100 40,150 Q28,100 40,50Z" stroke-width="1.6"/><path class="u" d="M280,62 Q292,100 280,138 Q268,100 280,62Z" stroke-width="1.6"/><path d="M10,73.8L40,78L220,125.3L280,141.1L390,94.7" stroke-width="1.3"/><path d="M10,73.8L40,78" stroke-width="0.01"/><path d="M28,76.3L23.2,77.7L23.7,73.7Z" fill="currentColor" stroke="none"/><path d="M280,141.1L390,94.7" stroke-width="0.01"/><path d="M337.8,116.7L334.3,120.4L332.8,116.6Z" fill="currentColor" stroke="none"/><path d="M10,95.8L40,100L220,125.3L280,133.7L390,87.4" stroke-width="1.3"/><path d="M10,95.8L40,100" stroke-width="0.01"/><path d="M28,98.3L23.2,99.7L23.7,95.7Z" fill="currentColor" stroke="none"/><path d="M280,133.7L390,87.4" stroke-width="0.01"/><path d="M337.8,109.4L334.3,113L332.8,109.3Z" fill="currentColor" stroke="none"/><path d="M10,117.8L40,122L220,125.3L280,126.4L390,80" stroke-width="1.3"/><path d="M10,117.8L40,122" stroke-width="0.01"/><path d="M28,120.3L23.2,121.7L23.7,117.7Z" fill="currentColor" stroke="none"/><path d="M280,126.4L390,80" stroke-width="0.01"/><path d="M337.8,102L334.3,105.7L332.8,101.9Z" fill="currentColor" stroke="none"/><path class="u" d="M220,100L220,125.3" stroke-width="2"/><path class="uf" d="M220,125.3L217.6,119.8L222.4,119.8Z" stroke="none"/><path d="M40,172L220,172"/><path d="M220,172L216.3,173.6L216.3,170.4Z" fill="currentColor" stroke="none"/><path d="M40,172L43.7,170.4L43.7,173.6Z" fill="currentColor" stroke="none"/><path d="M220,172L280,172"/><path d="M280,172L276.3,173.6L276.3,170.4Z" fill="currentColor" stroke="none"/><path d="M220,172L223.7,170.4L223.7,173.6Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="40" font-size="11">objective</text><text x="280" y="52" font-size="11">eyepiece</text><text x="130" y="186" font-style="italic">f<tspan font-size="9" dy="3">o</tspan><tspan dy="-3">&#8203;</tspan></text><text x="250" y="186" font-style="italic">f<tspan font-size="9" dy="3">e</tspan><tspan dy="-3">&#8203;</tspan></text><text x="390" y="30" text-anchor="end" font-size="11">eye sees angle β &gt; α</text></g></svg>
caption: Refracting telescope, normal adjustment: parallel rays from a distant object meet at the common focus; they leave the eyepiece parallel again but at a larger angle, so m = fo/fe and the tube length is fo + fe.
part: 40, 100 | Objective | Long focal length, large aperture.
part: 280, 100 | Eyepiece | Short focal length.
part: 220, 125 | Image at the common focus | Lenses $f_{o}$ + $f_{e}$ apart; m = $f_{o}$/$f_{e}$.
```

:::formula Astronomical telescope
Normal adjustment: $m=\dfrac{f_o}{f_e}$, length $L=f_o+f_e$

Final image at the near point: $m=\dfrac{f_o}{f_e}\left(1+\dfrac{f_e}{D}\right)$
:::

So the objective should have a long focal length and a large diameter (aperture), which collects more light and resolves finer detail; the eyepiece should have a short focal length. The final image is inverted, which does not matter for stars.

Large lenses are heavy, hard to make and suffer from chromatic aberration (colours focus at different points). Modern big telescopes are **reflecting telescopes**, using a concave mirror as the objective. In the **Cassegrain** design, the light reflects from the large concave primary to a small convex secondary and back through a hole in the primary to the eyepiece.

```ng-figure
id: ch09-cassegrain
title: Cassegrain telescope
svg:
<svg viewBox="0 0 390 204" role="img" aria-label="Cassegrain reflecting telescope" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="u" d="M318,22 A160,160 0 0 1 335,88" stroke-width="2.6"/><path class="u" d="M335,112 A160,160 0 0 1 318,178" stroke-width="2.6"/><path class="u" d="M205,80 A40,40 0 0 1 205,120" stroke-width="2.4"/><path d="M20,40L320,40L206,84L375,100" stroke-width="1.3"/><path d="M20,40L320,40" stroke-width="0.01"/><path d="M173,40L168.4,42L168.4,38Z" fill="currentColor" stroke="none"/><path d="M320,40L206,84" stroke-width="0.01"/><path d="M260.2,63.1L263.7,59.5L265.2,63.3Z" fill="currentColor" stroke="none"/><path d="M206,84L375,100" stroke-width="0.01"/><path d="M293.5,92.3L288.7,93.9L289.1,89.8Z" fill="currentColor" stroke="none"/><path d="M20,160L320,160L206,116L375,100" stroke-width="1.3"/><path d="M20,160L320,160" stroke-width="0.01"/><path d="M173,160L168.4,162L168.4,158Z" fill="currentColor" stroke="none"/><path d="M320,160L206,116" stroke-width="0.01"/><path d="M260.2,136.9L265.2,136.7L263.7,140.5Z" fill="currentColor" stroke="none"/><path d="M206,116L375,100" stroke-width="0.01"/><path d="M293.5,107.7L289.1,110.2L288.7,106.1Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text class="uf" x="330" y="196" text-anchor="end" font-size="11">primary (concave)</text><text class="uf" x="196" y="70" text-anchor="end" font-size="11">secondary (convex)</text><text x="386" y="124" text-anchor="end" font-size="11">eyepiece</text><text x="30" y="30" text-anchor="start" font-size="11">light from a distant star</text></g></svg>
caption: Cassegrain telescope: a large concave primary mirror reflects the light to a small convex secondary, which sends it back through a hole in the primary to the eyepiece.
part: 325, 45 | Concave primary mirror | Collects the light; no chromatic aberration.
part: 205, 100 | Convex secondary mirror | Sends light back through the hole.
part: 375, 100 | Eyepiece | Behind the hole in the primary.
```

Advantages of a reflecting telescope: no chromatic aberration (a mirror reflects all colours alike); a paraboloidal mirror removes spherical aberration; a mirror is much lighter than a lens of the same size and can be supported over its whole back; and the folded light path makes the tube shorter.

:::skeleton Worked example: telescope
*A telescope has an objective of focal length 150 cm and an eyepiece of 5 cm. Find its magnifying power and length in normal adjustment.*

$m=\dfrac{f_o}{f_e}=\dfrac{150}{5}=$ **30** [½]

$L=f_o+f_e=$ **155 cm** [½]
:::

:::tip Microscope versus telescope
Microscope: objective of **short** focal length, $f_o<f_e$. Telescope: objective of **long** focal length, $f_o\gg f_e$. Swapping them is a classic MCQ trap.
:::

```ng-numerical
id: telescope-magnification
title: Astronomical telescope
question: A telescope has an objective of focal length {{fo}} cm and an eyepiece of focal length {{fe}} cm. Find its magnifying power and length in normal adjustment.
var: fo | 50 | 200 | 25
var: fe | 2 | 10 | 1
answer: fo/fe
dp: 1
step: $m=\dfrac{f_o}{f_e}=\dfrac{ {{fo}} }{ {{fe}} }=$ **{{fo/fe:1}}**
step: Length $L=f_o+f_e={{fo + fe}}$ cm
```

```ng-compare
id: microscope-vs-telescope
title: Compound microscope vs astronomical telescope
cols: Compound microscope | Astronomical telescope
row: Used for | tiny objects nearby | distant objects
row: Objective | short focal length, small aperture | long focal length, large aperture
row: Focal lengths | $f_o<f_e$ (both short) | $f_o\gg f_e$
row: Magnifying power (normal adjustment) | $\dfrac{L}{f_o}\cdot\dfrac{D}{f_e}$ | $\dfrac{f_o}{f_e}$
```

```ng-compare
id: refracting-vs-reflecting
title: Refracting vs reflecting telescope
cols: Refracting | Reflecting (Cassegrain)
row: Objective | large convex lens | large concave mirror
row: Chromatic aberration | present | absent
row: Spherical aberration | present | removed with a paraboloidal mirror
row: Weight and support | heavy lens, held at the rim | lighter mirror, supported from behind
```

```ng-mnemonic
id: chhota-bada
title: Focal lengths in microscope and telescope
trick: **"Microscope: chhota-chhota; Telescope: bada-chhota"**
meaning: Microscope: both focal lengths short ($f_o<f_e$).
meaning: Telescope: objective long ($f_o$ big), eyepiece short.
prompt: Compare the focal lengths of the objective and eyepiece in a microscope and in a telescope.
```

```ng-draw
id: draw-telescope
title: Draw the ray diagram of an astronomical telescope
svg: ref: notes#ch09-telescope
time: 5
```

```ng-draw
id: draw-cassegrain
title: Draw the Cassegrain reflecting telescope
svg: ref: notes#ch09-cassegrain
time: 3
```

**In one breath:** A refracting telescope gives $m=f_o/f_e$ with length $f_o+f_e$ in normal adjustment; big telescopes use mirrors (Cassegrain), which avoid chromatic aberration and are lighter.
