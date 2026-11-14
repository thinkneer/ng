# Ch 10 · Wave Optics

Ray optics explains mirrors and lenses but not why light passing through two slits makes stripes, or why the edge of a shadow is never perfectly sharp. For that, light must be treated as a wave. This chapter starts with Huygens' picture of how a wave moves forward, uses it to re-derive the laws of reflection and refraction, and then explains interference (Young's double slit) and diffraction (a single slit).

## Wavefronts and Huygens' principle

Drop a stone in a pond and circular ripples spread out. Every point on one ripple is moving up and down in step with every other point on it. A surface joining points that vibrate in the same phase is a **wavefront**. The direction in which the wave travels, the ray, is always perpendicular to the wavefront.

```ng-figure
id: ch10-wavefronts
title: Plane and spherical wavefronts
svg:
<svg viewBox="0 0 380 180" role="img" aria-label="Plane and spherical wavefronts with rays perpendicular to them" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="u" d="M30,30L30,150" stroke-width="1.6"/><path class="u" d="M55,30L55,150" stroke-width="1.6"/><path class="u" d="M80,30L80,150" stroke-width="1.6"/><path class="u" d="M105,30L105,150" stroke-width="1.6"/><path d="M18,55L130,55"/><path d="M130,55L125.4,57L125.4,53Z" fill="currentColor" stroke="none"/><path d="M18,90L130,90"/><path d="M130,90L125.4,92L125.4,88Z" fill="currentColor" stroke="none"/><path d="M18,125L130,125"/><path d="M130,125L125.4,127L125.4,123Z" fill="currentColor" stroke="none"/><circle cx="220" cy="90" r="2.2" fill="currentColor"/><path class="u" d="M233.5,69 A25,25 0 0 1 233.5,111" stroke-width="1.6"/><path class="u" d="M247,47.9 A50,50 0 0 1 247,132.1" stroke-width="1.6"/><path class="u" d="M260.5,26.9 A75,75 0 0 1 260.5,153.1" stroke-width="1.6"/><path d="M220,90L289.7,18.3"/><path d="M289.7,18.3L288,23L285,20.1Z" fill="currentColor" stroke="none"/><path d="M220,90L320,90"/><path d="M320,90L315.4,92L315.4,88Z" fill="currentColor" stroke="none"/><path d="M220,90L289.7,161.7"/><path d="M289.7,161.7L285,159.9L288,157Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="75" y="172" font-size="11">plane wavefront</text><text x="214" y="84" text-anchor="end">S</text><text x="265" y="172" font-size="11">spherical wavefront</text></g></svg>
caption: A wavefront joins points vibrating in the same phase; rays are always perpendicular to it. A point source gives spherical wavefronts; far away they become plane.
part: 55, 90 | Plane wavefront | From a distant source.
part: 110, 55 | Ray | Always perpendicular to the wavefront.
part: 220, 90 | Point source | Sends out spherical wavefronts.
part: 270, 90 | Spherical wavefront | Points on it vibrate in the same phase.
```

A point source sends out **spherical** wavefronts. Far from the source, a small part of a huge sphere is practically flat, so light from a distant source (the Sun, a star) arrives as **plane** wavefronts. A line source (a slit) gives cylindrical wavefronts.

**Huygens' principle** tells us how a wavefront moves on:

1. Every point on a wavefront acts as a source of secondary wavelets, which spread out in all directions with the speed of the wave.
2. The new wavefront a short time later is the surface that touches all these wavelets in the forward direction (their forward envelope).

The backward wavelets are ignored; a full wave theory shows their effect cancels.

**In one breath:** A wavefront joins points in the same phase, with rays perpendicular to it; by Huygens' principle every point on it sends out wavelets, and their forward envelope is the next wavefront.

## Refraction and reflection by Huygens' construction

Let a plane wavefront AB meet the boundary between two media at an angle $i$, with speed $v_1$ in the first medium and $v_2$ in the second.

```ng-figure
id: ch10-huygens
title: Huygens construction for refraction
svg:
<svg viewBox="0 0 380 200" role="img" aria-label="Huygens construction for refraction of a plane wavefront" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="uf" d="M10,110L10,195L370,195L370,110Z" stroke="none" fill-opacity="0.07"/><path d="M10,110L370,110" stroke-width="1.6"/><path class="u" d="M100,110L180,30" stroke-width="2"/><path class="u" d="M260,110L135.5,176.5" stroke-width="2"/><path d="M50,60L100,110L135.5,176.5" stroke-width="1.3"/><path d="M50,60L100,110" stroke-width="0.01"/><path d="M77.1,87.1L72.5,85.3L75.3,82.5Z" fill="currentColor" stroke="none"/><path d="M100,110L135.5,176.5" stroke-width="0.01"/><path d="M119.2,145.9L115.2,142.8L118.8,140.9Z" fill="currentColor" stroke="none"/><path d="M150,0L180,30L260,110L278.9,145.3" stroke-width="1.3"/><path d="M150,0L180,30" stroke-width="0.01"/><path d="M167.1,17.1L162.5,15.3L165.3,12.5Z" fill="currentColor" stroke="none"/><path d="M260,110L278.9,145.3" stroke-width="0.01"/><path d="M270.8,130.3L266.9,127.2L270.5,125.3Z" fill="currentColor" stroke="none"/><path d="M175.4,110 A75.4,75.4 0 0 1 77.4,181.9" stroke-dasharray="4 3"/><path d="M100,65L100,190" stroke-width="0.8" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="186" y="30" text-anchor="start">B</text><text x="94" y="106" text-anchor="end">A</text><text x="266" y="106" text-anchor="start">C</text><text x="129.5" y="186.5" text-anchor="end">E</text><text x="86" y="84" font-style="italic">i</text><text x="110" y="150" font-style="italic">r</text><text x="225" y="62" font-style="italic">v₁τ</text><text x="80" y="160" font-style="italic">v₂τ</text><text x="360" y="100" text-anchor="end" font-size="11">rarer (v₁)</text><text x="360" y="186" text-anchor="end" font-size="11">denser (v₂)</text></g></svg>
caption: While B travels v₁τ to C, the wavelet from A grows to radius v₂τ in the denser medium. The refracted wavefront CE is the tangent from C to that wavelet; triangles ABC and AEC give sin i / sin r = v₁/v₂.
part: 100, 110 | A | Wavelet from A grows to radius v₂τ.
part: 180, 30 | B | Travels v₁τ to C in the same time.
part: 260, 110 | C | Tangent from C gives the refracted wavefront.
part: 135, 176 | E | CE is the refracted wavefront; sin i/sin r = v₁/v₂.
```

Point A touches the surface first. In the time $\tau$ that the edge B takes to travel $BC=v_1\tau$ to the surface, the wavelet from A spreads into the second medium to a radius $AE=v_2\tau$. The refracted wavefront CE is the tangent drawn from C to this wavelet.

In triangle ABC, $\sin i=\dfrac{BC}{AC}=\dfrac{v_1\tau}{AC}$. In triangle AEC, $\sin r=\dfrac{AE}{AC}=\dfrac{v_2\tau}{AC}$. Dividing:

:::formula Snell's law from wave theory
$\dfrac{\sin i}{\sin r}=\dfrac{v_1}{v_2}=n_{21}$, and since $n=\dfrac cv$: $n_1\sin i=n_2\sin r$
:::

This is Snell's law, with a bonus: it shows light travels **slower** in the denser medium ($v_2<v_1$ when $r<i$), the opposite of what Newton's particle theory predicted. Experiments agree with Huygens.

For **reflection**, the wavelet from A grows in the same medium, so its radius $AE$ equals $BC=v\tau$. The two right-angled triangles ABC and AEC share the hypotenuse AC and have equal sides, so they are congruent, and the angle of incidence equals the angle of reflection.

The frequency does not change on refraction, because it is set by the source. Since $v=\nu\lambda$, the wavelength shortens in a denser medium: $\lambda_2=\lambda_1v_2/v_1$.

:::skeleton Answer skeleton: Snell's law using Huygens (3 marks)
Diagram: incident wavefront AB, surface AC, wavelet of radius $v_2\tau$ about A, refracted wavefront CE, angles $i$ and $r$ marked [1]

$BC=v_1\tau$, $AE=v_2\tau$; $\sin i=\dfrac{v_1\tau}{AC}$, $\sin r=\dfrac{v_2\tau}{AC}$ [1]

**$\dfrac{\sin i}{\sin r}=\dfrac{v_1}{v_2}=n_{21}$** (Snell's law) [1]
:::

```ng-steps
id: huygens-refraction-steps
title: Huygens' construction for refraction, step by step
step: A plane wavefront AB meets the surface; end A touches it first.
step: In time $\tau$, end B travels $BC=v_1\tau$ in the first medium to reach the surface at C.
step: In the same time, the wavelet from A spreads into the second medium to radius $AE=v_2\tau$.
step: Draw the tangent from C to this wavelet: CE is the refracted wavefront.
step: Triangles ABC and AEC give $\sin i=\dfrac{v_1\tau}{AC}$ and $\sin r=\dfrac{v_2\tau}{AC}$, so $\dfrac{\sin i}{\sin r}=\dfrac{v_1}{v_2}=n_{21}$.
```

```ng-derive
id: derive-snell-huygens
title: Verify Snell's law with Huygens' principle
prompt: Use Huygens' principle to verify Snell's law of refraction for a plane wavefront passing from a rarer to a denser medium. Draw the diagram.
time: 6
check: Diagram: AB, surface AC, wavelet of radius $v_2\tau$ about A, tangent CE; $i$ and $r$ marked | 1
check: $BC=v_1\tau=AC\sin i$; $AE=v_2\tau=AC\sin r$ | 1
check: $\dfrac{\sin i}{\sin r}=\dfrac{v_1}{v_2}=n_{21}$, and $v_2<v_1$ in the denser medium | 1
```

```ng-draw
id: draw-huygens
title: Draw the Huygens construction for refraction
svg: ref: notes#ch10-huygens
time: 4
```

**In one breath:** Huygens' construction gives $\sin i/\sin r=v_1/v_2$, which is Snell's law and shows light is slower in a denser medium; for reflection the congruent triangles give $i=r$.

## Coherent sources and interference

When two waves overlap, the resulting displacement at each point is the sum of the individual ones (**superposition**). Where crest meets crest the waves reinforce (**constructive interference**, bright); where crest meets trough they cancel (**destructive interference**, dark).

Whether a point is bright or dark depends on the **path difference** $\Delta x$ from the two sources, which sets the phase difference $\phi$.

:::formula Conditions for interference
Phase difference $\phi=\dfrac{2\pi}{\lambda}\Delta x$

Constructive (bright): $\Delta x=n\lambda$, $\phi=2n\pi$ · destructive (dark): $\Delta x=\left(n+\tfrac12\right)\lambda$, $\phi=(2n+1)\pi$

Resultant intensity: $I=I_1+I_2+2\sqrt{I_1I_2}\cos\phi$; for equal sources $I=4I_0\cos^2\dfrac\phi2$
:::

For a steady pattern the phase difference at each point must stay the same in time. Sources that keep a **constant phase difference** are **coherent**. Two separate bulbs are not: the light from each comes from billions of atoms emitting at random, so the phase difference changes about $10^8$ times a second and the pattern averages out to uniform brightness. Coherent sources are made by taking two parts of the light from a single source, as Young did with two slits.

Conditions for a sustained interference pattern: the sources must be coherent, of the same wavelength, of nearly equal amplitude (so the dark fringes are really dark), and close together.

```ng-numerical
id: resultant-intensity
title: Intensity where two equal waves meet
question: Two coherent waves, each of intensity $I_0$, meet with a path difference of $\lambda/{{k}}$. Find the resultant intensity as a multiple of $I_0$.
var: k | 3 | 8 | 1
let: phi = 2*pi/k
answer: 4*cos(phi/2)^2
unit: × I₀
dp: 2
step: $\phi=\dfrac{2\pi}{\lambda}\cdot\dfrac{\lambda}{ {{k}} }={{phi:3}}$ rad
step: $I=4I_0\cos^2\dfrac{\phi}{2}=$ **{{4*cos(phi/2)^2:2}} $I_0$**
```

**In one breath:** Waves add: path difference $n\lambda$ gives bright, $(n+\frac12)\lambda$ gives dark; a steady pattern needs coherent sources, which come from splitting light from one source.

## Young's double-slit experiment

Young passed light from one slit S through two narrow slits S₁ and S₂, a small distance $d$ apart, onto a screen a distance $D$ away. The two slits act as coherent sources, and the screen shows alternate bright and dark bands (fringes).

```ng-figure
id: ch10-ydse
title: Young's double slit
svg:
<svg viewBox="0 0 380 210" role="img" aria-label="Young's double-slit set-up" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="100" r="2.2" fill="currentColor"/><path d="M90,20L90,88" stroke-width="2.4"/><path d="M90,96L90,104" stroke-width="2.4"/><path d="M90,112L90,180" stroke-width="2.4"/><path class="u" d="M41.2,91.6 A14,14 0 0 1 41.2,108.4" stroke-width="1"/><path class="u" d="M54.0,82.0 A30,30 0 0 1 54.0,118.0" stroke-width="1"/><path class="u" d="M66.80000000000001,72.4 A46,46 0 0 1 66.80000000000001,127.6" stroke-width="1"/><path d="M300,20L300,180" stroke-width="2.4"/><path d="M300,32L312,32L312,40L300,40Z" fill="#E0B400" stroke="none"/><path d="M300,48L312,48L312,56L300,56Z" fill="#E0B400" stroke="none"/><path d="M300,64L312,64L312,72L300,72Z" fill="#E0B400" stroke="none"/><path d="M300,80L312,80L312,88L300,88Z" fill="#E0B400" stroke="none"/><path d="M300,96L312,96L312,104L300,104Z" fill="#E0B400" stroke="none"/><path d="M300,112L312,112L312,120L300,120Z" fill="#E0B400" stroke="none"/><path d="M300,128L312,128L312,136L300,136Z" fill="#E0B400" stroke="none"/><path d="M300,144L312,144L312,152L300,152Z" fill="#E0B400" stroke="none"/><path d="M300,160L312,160L312,168L300,168Z" fill="#E0B400" stroke="none"/><path d="M90,92L300,68" stroke-width="1"/><path d="M90,108L300,68" stroke-width="1"/><path d="M90,100L300,100" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M90,192L300,192"/><path d="M300,192L296.3,193.6L296.3,190.4Z" fill="currentColor" stroke="none"/><path d="M90,192L93.7,190.4L93.7,193.6Z" fill="currentColor" stroke="none"/><path d="M78,92L78,108" stroke-width="0.8"/><path d="M330,92L330,108"/><path d="M330,108L328.8,105.3L331.2,105.3Z" fill="currentColor" stroke="none"/><path d="M330,92L331.2,94.7L328.8,94.7Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="30" y="116">S</text><text x="98" y="90" text-anchor="start" font-size="11">S₁</text><text x="98" y="120" text-anchor="start" font-size="11">S₂</text><text x="306" y="186" text-anchor="start" font-size="11">screen</text><text x="318" y="64" text-anchor="start" font-size="11">P</text><text x="195" y="204" font-style="italic">D</text><text x="74" y="104" text-anchor="end" font-style="italic">d</text><text x="345" y="104" font-style="italic" font-weight="bold">β</text></g></svg>
caption: Young's experiment: two narrow slits S₁ and S₂, a distance d apart, lit by the same source, act as coherent sources. Bright and dark fringes of equal width β appear on a screen at distance D.
part: 30, 100 | Source S | One source split into two coherent ones.
part: 90, 100 | Slits S₁ and S₂ | Separation d.
part: 300, 68 | Point P on the screen | Path difference yd/D.
part: 306, 100 | Central bright fringe | Zero path difference; fringe width λD/d.
```

For a point P at height $y$ above the centre, with $D\gg d$, the path difference is $S_2P-S_1P\approx\dfrac{yd}{D}$. Bright fringes are where this is $n\lambda$, dark ones where it is $(n+\tfrac12)\lambda$. The distance between two neighbouring bright (or dark) fringes is the **fringe width** $\beta$. For the board you need the result, not the derivation.

:::formula Young's double slit
Fringe width $\beta=\dfrac{\lambda D}{d}$

Bright fringes at $y_n=\dfrac{n\lambda D}{d}$; dark fringes at $y_n=\left(n+\tfrac12\right)\dfrac{\lambda D}{d}$

Angular fringe width $\theta=\dfrac{\lambda}{d}$
:::

Features of the pattern: all fringes have equal width and equal brightness, and the centre (path difference zero) is bright. The fringes are wider for longer wavelength (red wider than blue), for a larger screen distance and for slits closer together. In a medium of refractive index $n$, $\lambda$ becomes $\lambda/n$, so $\beta$ shrinks to $\beta/n$. With white light, the central fringe is white and the others are coloured.

:::skeleton Worked example: fringe width
*In Young's experiment the slits are 0.28 mm apart and the screen is 1.4 m away. The fringe width is 3 mm. Find the wavelength.*

$\beta=\dfrac{\lambda D}{d}\Rightarrow\lambda=\dfrac{\beta d}{D}$ [½]

$=\dfrac{3\times10^{-3}\times0.28\times10^{-3}}{1.4}$ [1]

**$\lambda=6\times10^{-7}$ m = 600 nm** [½]
:::

:::tip YDSE is final expression only
The 2026–27 board syllabus asks for the fringe-width expression, not its derivation. Know $\beta=\lambda D/d$ and how $\beta$ changes when $\lambda$, $D$, $d$ or the medium changes.
:::

```ng-graph
id: ydse-pattern
title: Young's fringes: change λ, d and D
x: y on the screen (mm) | -6 | 6
y: I / I₀ | 0 | 4.2
curve: I = 4I₀ cos²(πyd/λD) | 4*cos(pi*x*d*1e3/(lam*D))^2
slider: lam | $\lambda$ (nm) | 400 | 700 | 10 | 600
slider: d | $d$ (mm) | 0.2 | 1 | 0.05 | 0.5
slider: D | $D$ (m) | 0.5 | 2 | 0.1 | 1
note: Fringe width $\beta=\lambda D/d$: 600 nm, 0.5 mm and 1 m give 1.2 mm. Increase $d$ and the fringes crowd together.
```

```ng-numerical
id: fringe-width
title: Fringe width with fresh numbers
question: In Young's experiment, light of wavelength {{lam}} nm falls on slits {{d}} mm apart; the screen is {{D}} m away. Find the fringe width.
var: lam | 400 | 700 | 50
var: d | 0.2 | 1 | 0.1
var: D | 0.5 | 2 | 0.5
answer: lam*1e-9*D/(d*1e-3)*1000
unit: mm
step: $\beta=\dfrac{\lambda D}{d}=\dfrac{ {{lam}}\times10^{-9}\times{{D}} }{ {{d}}\times10^{-3} }$ m
step: $\beta=$ **{{lam*1e-9*D/(d*1e-3)*1000}} mm**
```

```ng-mnemonic
id: beta-lambda-d
title: Fringe width in YDSE
trick: **"β = λD/d: λ aur D upar, chhota d neeche"** (λ and D on top, small d below)
meaning: Longer wavelength or farther screen → wider fringes; slits farther apart → narrower fringes.
meaning: In a medium of index $n$: $\beta'=\beta/n$.
prompt: Write the fringe width in YDSE and say how it changes with $\lambda$, $D$ and $d$.
```

```ng-draw
id: draw-ydse
title: Draw the set-up of Young's double-slit experiment
svg: ref: notes#ch10-ydse
time: 3
```

**In one breath:** Two coherent slits give equally spaced, equally bright fringes of width $\beta=\lambda D/d$, with a bright centre; $\beta$ grows with $\lambda$ and $D$, shrinks with $d$, and divides by $n$ in a medium.

## Diffraction at a single slit

Light passing through a single narrow slit also spreads out and forms a pattern on a distant screen: a broad bright central band with weaker bands on either side. This bending of waves around edges into the geometrical shadow is **diffraction**.

Huygens' principle explains it. Treat every point of the slit (width $a$) as a source of wavelets. At the centre of the screen they all arrive in phase, so it is bright. Now look at a direction $\theta$ where the path difference between the two edges is $a\sin\theta=\lambda$. Split the slit into two halves: for every point in the upper half there is a point in the lower half whose wavelet is half a wavelength behind, so the pairs cancel and the screen is dark. In the same way there is darkness wherever $a\sin\theta$ is a whole number of wavelengths.

:::formula Single-slit diffraction
Minima (dark): $a\sin\theta=n\lambda$ ($n=\pm1,\pm2,\dots$)

Central maximum: angular width $\dfrac{2\lambda}{a}$; linear width on a screen at distance $D$: $\dfrac{2\lambda D}{a}$
:::

```ng-figure
id: ch10-patterns
title: Double slit vs single slit pattern
svg:
<svg viewBox="0 0 400 104" role="img" aria-label="Intensity patterns: double slit versus single slit" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,80L190,80" stroke-width="0.8"/><path class="u" d="M20,25L21.4,28.7L22.8,38.8L24.2,52.5L25.7,66.3L27.1,76.3L28.5,80L29.9,76.3L31.3,66.2L32.8,52.5L34.2,38.7L35.6,28.7L37,25L38.4,28.7L39.8,38.7L41.2,52.5L42.7,66.3L44.1,76.3L45.5,80L46.9,76.3L48.3,66.3L49.8,52.5L51.2,38.7L52.6,28.7L54,25L55.4,28.7L56.8,38.8L58.2,52.5L59.7,66.2L61.1,76.3L62.5,80L63.9,76.3L65.3,66.2L66.8,52.5L68.2,38.8L69.6,28.7L71,25L72.4,28.7L73.8,38.8L75.2,52.5L76.7,66.2L78.1,76.3L79.5,80L80.9,76.3L82.3,66.2L83.8,52.5L85.2,38.7L86.6,28.7L88,25L89.4,28.7L90.8,38.7L92.2,52.5L93.7,66.3L95.1,76.3L96.5,80L97.9,76.3L99.3,66.3L100.8,52.5L102.2,38.7L103.6,28.7L105,25L106.4,28.7L107.8,38.7L109.2,52.5L110.7,66.3L112.1,76.3L113.5,80L114.9,76.3L116.3,66.3L117.8,52.5L119.2,38.7L120.6,28.7L122,25L123.4,28.7L124.8,38.7L126.2,52.5L127.7,66.3L129.1,76.3L130.5,80L131.9,76.3L133.3,66.3L134.8,52.5L136.2,38.7L137.6,28.7L139,25L140.4,28.7L141.8,38.7L143.2,52.5L144.7,66.3L146.1,76.3L147.5,80L148.9,76.3L150.3,66.2L151.8,52.5L153.2,38.8L154.6,28.7L156,25L157.4,28.7L158.8,38.8L160.2,52.5L161.7,66.2L163.1,76.3L164.5,80L165.9,76.3L167.3,66.2L168.8,52.5L170.2,38.8L171.6,28.7L173,25L174.4,28.7L175.8,38.8L177.2,52.5L178.7,66.2L180.1,76.3L181.5,80L182.9,76.3L184.3,66.2L185.8,52.5L187.2,38.8L188.6,28.7L190,25" stroke-width="1.8"/><path d="M210,80L380,80" stroke-width="0.8"/><path class="u" d="M210,79.9L211.1,79.9L212.3,79.8L213.4,79.7L214.5,79.6L215.7,79.6L216.8,79.5L217.9,79.5L219.1,79.5L220.2,79.5L221.3,79.6L222.5,79.6L223.6,79.7L224.7,79.8L225.9,79.9L227,79.9L228.1,80L229.3,80L230.4,80L231.5,79.9L232.7,79.8L233.8,79.7L234.9,79.5L236.1,79.4L237.2,79.2L238.3,79.1L239.5,79L240.6,79L241.7,79L242.9,79.1L244,79.2L245.1,79.3L246.3,79.5L247.4,79.7L248.5,79.8L249.7,79.9L250.8,80L251.9,80L253.1,79.9L254.2,79.6L255.3,79.3L256.5,79L257.6,78.6L258.7,78.2L259.9,77.8L261,77.4L262.1,77.2L263.3,77.1L264.4,77.1L265.5,77.3L266.7,77.7L267.8,78.1L268.9,78.7L270.1,79.2L271.2,79.7L272.3,79.9L273.5,80L274.6,79.6L275.7,78.8L276.9,77.5L278,75.5L279.1,72.9L280.3,69.6L281.4,65.7L282.5,61.3L283.7,56.4L284.8,51.2L285.9,45.8L287.1,40.4L288.2,35.2L289.3,30.4L290.5,26.2L291.6,22.7L292.7,20.1L293.9,18.5L295,18L296.1,18.5L297.3,20.1L298.4,22.7L299.5,26.2L300.7,30.4L301.8,35.2L302.9,40.4L304.1,45.8L305.2,51.2L306.3,56.4L307.5,61.3L308.6,65.7L309.7,69.6L310.9,72.9L312,75.5L313.1,77.5L314.3,78.8L315.4,79.6L316.5,80L317.7,79.9L318.8,79.7L319.9,79.2L321.1,78.7L322.2,78.1L323.3,77.7L324.5,77.3L325.6,77.1L326.7,77.1L327.9,77.2L329,77.4L330.1,77.8L331.3,78.2L332.4,78.6L333.5,79L334.7,79.3L335.8,79.6L336.9,79.9L338.1,80L339.2,80L340.3,79.9L341.5,79.8L342.6,79.7L343.7,79.5L344.9,79.3L346,79.2L347.1,79.1L348.3,79L349.4,79L350.5,79L351.7,79.1L352.8,79.2L353.9,79.4L355.1,79.5L356.2,79.7L357.3,79.8L358.5,79.9L359.6,80L360.7,80L361.9,80L363,79.9L364.1,79.9L365.3,79.8L366.4,79.7L367.5,79.6L368.7,79.6L369.8,79.5L370.9,79.5L372.1,79.5L373.2,79.5L374.3,79.6L375.5,79.6L376.6,79.7L377.7,79.8L378.9,79.9L380,79.9" stroke-width="1.8"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="105" y="96" font-size="11">double slit: equal fringes</text><text x="295" y="96" font-size="11">single slit: wide central max</text></g></svg>
caption: Interference (two slits): many fringes of equal width and equal brightness. Diffraction (one slit): a central maximum twice as wide as the others, with much fainter secondary maxima.
part: 105, 25 | Double-slit fringes | Equal width and equal brightness.
part: 295, 18 | Single-slit central maximum | Twice as wide as the others; width 2λD/a.
```

The central maximum is twice as wide as the others, and the secondary maxima get much fainter. A narrower slit gives a **wider** central maximum.

```ng-compare
id: interference-vs-diffraction
title: Interference vs diffraction
cols: Interference (double slit) | Diffraction (single slit)
row: Cause | superposition of waves from two coherent sources | superposition of wavelets from different parts of one wavefront
row: Fringe width | all equal | central maximum twice the others
row: Intensity | all bright fringes equally bright | falls off rapidly away from the centre
row: Dark fringes | perfectly dark | not perfectly dark
```

```ng-numerical
id: central-maximum
title: Width of the central maximum
question: Light of wavelength {{lam}} nm falls on a slit of width {{a}} mm; the screen is {{D}} m away. Find the width of the central maximum.
var: lam | 400 | 700 | 50
var: a | 0.1 | 0.5 | 0.05
var: D | 1 | 3 | 0.5
answer: 2*lam*1e-9*D/(a*1e-3)*1000
unit: mm
step: Width $=\dfrac{2\lambda D}{a}=\dfrac{2\times{{lam}}\times10^{-9}\times{{D}} }{ {{a}}\times10^{-3} }$ m
step: Width $=$ **{{2*lam*1e-9*D/(a*1e-3)*1000}} mm**
```

```ng-graph
id: single-slit-pattern
title: Single-slit pattern: change the slit width
x: y on the screen (mm) | -12 | 12.1
y: I / I₀ | 0 | 1.05
curve: I = I₀(sin u / u)² | (sin(pi*a*x*1000/(lam*D))/(pi*a*x*1000/(lam*D)))^2
slider: a | $a$ (mm) | 0.1 | 0.6 | 0.05 | 0.2
slider: lam | $\lambda$ (nm) | 400 | 700 | 10 | 600
slider: D | $D$ (m) | 1 | 3 | 0.5 | 2
note: The first minima sit at $y=\pm\lambda D/a$; a narrower slit spreads the central maximum. Defaults: 600 nm, 0.2 mm, 2 m give a central maximum 12 mm wide.
```

```ng-mnemonic
id: inter-vs-di
title: Interference or diffraction?
trick: **"Inter = do (two) sources ke beech; Di-ffraction = ek (one) slit ka mudna"**
meaning: Interference: waves from **two** coherent sources.
meaning: Diffraction: wavelets from **one** wavefront bending round an edge.
prompt: What is the basic difference between interference and diffraction?
```

```ng-explain
id: explain-coherent
prompt: In three lines, explain why two separate bulbs cannot produce a steady interference pattern.
lines: 3
answer: Light from each bulb comes from billions of atoms emitting at random, so the phase difference between the two bulbs changes about $10^8$ times a second. The bright and dark positions shift so fast that the eye sees only uniform brightness. Coherent sources need a constant phase difference.
```

**In one breath:** Light through one slit gives a wide central maximum of angular width $2\lambda/a$ with fainter side bands, dark where $a\sin\theta=n\lambda$; unlike interference fringes, the bands are unequal.
