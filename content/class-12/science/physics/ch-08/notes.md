# Ch 8 · Electromagnetic Waves

Chapters 4 to 7 showed that a changing magnetic field makes an electric field (induction). Maxwell asked whether the reverse is true, and his answer led to one of the great predictions in physics: electric and magnetic fields can travel together through empty space as a wave, at the speed of light. Light, radio, X-rays and the rest are all such waves. This short chapter has three pieces: displacement current, the properties of EM waves, and the EM spectrum.

## Displacement current

Ampère's law says $\oint\vec B\cdot d\vec l=\mu_0I$, where $I$ is the current through any surface bounded by the loop. Maxwell spotted a problem with a charging capacitor.

```ng-figure
id: ch08-displacement
title: Displacement current
svg:
<svg viewBox="0 0 360 168" role="img" aria-label="Displacement current in the gap of a charging capacitor" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,90L140,90" stroke-width="1.8"/><path d="M220,90L340,90" stroke-width="1.8"/><path d="M140,40L140,140" stroke-width="3"/><path d="M220,40L220,140" stroke-width="3"/><path d="M60,80L100,80" stroke="#E0B400" stroke-width="2"/><path d="M100,80L94.5,82.4L94.5,77.6Z" fill="#E0B400" stroke="none"/><path d="M260,80L300,80" stroke="#E0B400" stroke-width="2"/><path d="M300,80L294.5,82.4L294.5,77.6Z" fill="#E0B400" stroke="none"/><path class="u" d="M146,55L214,55" stroke-dasharray="4 3"/><path class="uf" d="M214,55L210.3,56.6L210.3,53.4Z" stroke="none"/><path class="u" d="M146,75L214,75" stroke-dasharray="4 3"/><path class="uf" d="M214,75L210.3,76.6L210.3,73.4Z" stroke="none"/><path class="u" d="M146,105L214,105" stroke-dasharray="4 3"/><path class="uf" d="M214,105L210.3,106.6L210.3,103.4Z" stroke="none"/><path class="u" d="M146,125L214,125" stroke-dasharray="4 3"/><path class="uf" d="M214,125L210.3,126.6L210.3,123.4Z" stroke="none"/><ellipse cx="80" cy="90" rx="8" ry="26" fill="none" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="52" y="72" font-style="italic">i<tspan font-size="9" dy="3">c</tspan><tspan dy="-3">&#8203;</tspan></text><text x="280" y="72" font-style="italic">i<tspan font-size="9" dy="3">c</tspan><tspan dy="-3">&#8203;</tspan></text><text x="180" y="158" font-size="12.5">i<tspan font-size="9" dy="3">d</tspan><tspan dy="-3">&#8203;</tspan> = ε₀ dΦ<tspan font-size="9" dy="3">E</tspan><tspan dy="-3">&#8203;</tspan>/dt in the gap</text><text x="80" y="132" font-size="12.5">loop</text><text x="132" y="36" text-anchor="end">+q</text><text x="228" y="36" text-anchor="start">−q</text></g></svg>
caption: While the capacitor charges, conduction current $i_{c}$ flows in the wires but no charge crosses the gap. There the changing electric field acts as a displacement current $i_{d}$ equal to $i_{c}$, so the current is continuous.
part: 80, 90 | Conduction current $i_{c}$ | Flows in the wire while the capacitor charges.
part: 180, 90 | Gap between the plates | Changing E gives $i_d=\varepsilon_0\,d\Phi_E/dt$.
part: 140, 40 | Plate +q | Charge grows, so the field in the gap grows.
```

Take a small loop round the wire leading to one plate. For a flat surface bounded by the loop, the wire's current $i_c$ passes through it, so $\oint\vec B\cdot d\vec l=\mu_0i_c$. Now stretch the surface, keeping the same loop, into a pouch that passes between the plates. No charge crosses the gap, so the current through this surface is zero. Same loop, same $\oint\vec B\cdot d\vec l$, two different answers: the law as written cannot be right.

What does exist in the gap is a **changing electric field**. As the plates charge, $E=Q/\varepsilon_0A$ grows, and so does the electric flux $\Phi_E=EA=Q/\varepsilon_0$. Its rate of change is $\frac{d\Phi_E}{dt}=\frac{1}{\varepsilon_0}\frac{dQ}{dt}=\frac{i_c}{\varepsilon_0}$. So $\varepsilon_0\frac{d\Phi_E}{dt}$ is exactly equal to the current in the wire. Maxwell called this term the **displacement current** and added it to Ampère's law.

:::formula Displacement current
$i_d=\varepsilon_0\dfrac{d\Phi_E}{dt}$

Ampère–Maxwell law: $\displaystyle\oint\vec B\cdot d\vec l=\mu_0\left(i_c+\varepsilon_0\dfrac{d\Phi_E}{dt}\right)$
:::

Now the total current ($i_c+i_d$) is the same through every surface, and current is continuous: conduction current in the wires, displacement current in the gap. The displacement current produces a magnetic field just as a real current does, even though no charge flows.

The big consequence is symmetry. A changing magnetic field makes an electric field (Faraday), and a changing electric field makes a magnetic field (Maxwell). Each can keep regenerating the other, and the pair can travel through space on its own.

:::skeleton Worked example: displacement current
*A capacitor with circular plates is being charged by a current of 0.15 A. What is the displacement current between the plates?*

Displacement current in the gap equals the conduction current in the wires: $i_d=\varepsilon_0\dfrac{d\Phi_E}{dt}=\dfrac{dQ}{dt}$ [½]

**$i_d=0.15$ A** [½]
:::

```ng-numerical
id: displacement-current
title: Displacement current in a charging capacitor
question: A {{C}} µF capacitor is being charged so that its voltage rises at {{r}} × 10⁴ V/s. Find the displacement current between its plates.
var: C | 1 | 10 | 1
var: r | 1 | 10 | 1
answer: C*1e-6*r*1e4
unit: A
step: $i_d=i_c=\dfrac{dQ}{dt}=C\dfrac{dV}{dt}={{C}}\times10^{-6}\times{{r}}\times10^{4}$
step: $i_d=$ **{{C*1e-6*r*1e4}} A**
```

```ng-compare
id: conduction-vs-displacement
title: Conduction current vs displacement current
cols: Conduction | Displacement
row: Cause | flow of charges | changing flux
row: Where | in wires | in changing $E$ (capacitor gap)
row: Rate | $dq/dt$ | $\varepsilon_0\,d\Phi_E/dt$
row: Makes a B field | yes | yes
```

**In one breath:** A changing electric field acts like a current, $i_d=\varepsilon_0\,d\Phi_E/dt$; it makes current continuous through a charging capacitor and lets changing $E$ and $B$ sustain each other as a wave.

## Electromagnetic waves and their properties

A charge at rest has only an electric field. A charge moving steadily (a current) also has a magnetic field, but neither changes. An **accelerated** charge is different: its fields change, the changing fields create each other, and energy is radiated outward as an electromagnetic wave. A charge oscillating with frequency $\nu$ radiates an EM wave of the same frequency; that is how a radio aerial transmits.

```ng-figure
id: ch08-wave
title: Electromagnetic wave
svg:
<svg viewBox="-20 0 410 190" role="img" aria-label="Electromagnetic wave: E along y, B along z, travelling along x" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M62,95L380,95"/><path d="M380,95L375.4,97L375.4,93Z" fill="currentColor" stroke="none"/><path d="M62,95L62,25"/><path d="M62,25L64,29.6L60,29.6Z" fill="currentColor" stroke="none"/><path d="M62,95L18,125.4"/><path d="M18,125.4L20.6,121.1L22.9,124.5Z" fill="currentColor" stroke="none"/><path class="u" d="M62,95L66.7,85.8L71.4,77L76.1,68.8L80.8,61.4L85.4,55.2L90.1,50.3L94.8,47L99.5,45.2L104.2,45.2L108.9,46.8L113.6,50.1L118.2,54.8L122.9,61L127.6,68.3L132.3,76.4L137,85.2L141.7,94.4L146.4,103.5L151.1,112.4L155.8,120.7L160.4,128.1L165.1,134.4L169.8,139.4L174.5,142.8L179.2,144.7L183.9,144.9L188.6,143.3L193.2,140.2L197.9,135.5L202.6,129.5L207.3,122.3L212,114.1L216.7,105.4L221.4,96.2L226.1,87.1L230.8,78.2L235.4,69.8L240.1,62.3L244.8,56L249.5,50.9L254.2,47.3L258.9,45.4L263.6,45.1L268.2,46.5L272.9,49.5L277.6,54.1L282.3,60.1L287,67.2L291.7,75.3L296.4,84L301.1,93.2L305.8,102.3L310.4,111.3L315.1,119.6L319.8,127.2L324.5,133.7L329.2,138.8L333.9,142.5L338.6,144.5L343.2,144.9L347.9,143.6L352.6,140.7L357.3,136.2L362,130.4" stroke-width="2"/><path d="M62,95L61.7,98.5L61.5,101.8L61.6,105L62.3,107.8L63.6,110.1L65.6,112L68.4,113.2L72.1,113.9L76.8,113.9L82.4,113.3L88.8,112.1L96.2,110.3L104.2,107.9L112.9,105.2L122.1,102.1L131.6,98.7L141.4,95.2L151.1,91.8L160.6,88.4L169.9,85.2L178.7,82.4L186.8,80L194.2,78.1L200.8,76.8L206.5,76.1L211.3,76.1L215.2,76.6L218.1,77.8L220.2,79.6L221.6,81.9L222.3,84.6L222.5,87.7L222.4,91.1L222,94.5L221.7,98L221.5,101.4L221.6,104.6L222.2,107.4L223.3,109.8L225.2,111.8L228,113.1L231.6,113.9L236.1,114L241.6,113.4L247.9,112.3L255.1,110.5L263.1,108.3L271.7,105.6L280.9,102.5L290.3,99.2L300.1,95.7L309.8,92.2L319.4,88.8L328.7,85.6L337.5,82.8L345.8,80.3L353.3,78.4L360,77L365.8,76.2L370.7,76L374.7,76.5L377.8,77.6L380,79.3L381.4,81.6" stroke="#E0B400" stroke-width="2"/><path class="u" d="M82,95L82,59.6" stroke-width="0.9"/><path d="M82,95L62.6,108.4" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M102,95L102,45" stroke-width="0.9"/><path d="M102,95L74.5,114" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M122,95L122,59.6" stroke-width="0.9"/><path d="M122,95L102.6,108.4" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M162,95L162,130.4" stroke-width="0.9"/><path d="M162,95L181.4,81.6" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M182,95L182,145" stroke-width="0.9"/><path d="M182,95L209.5,76" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M202,95L202,130.4" stroke-width="0.9"/><path d="M202,95L221.4,81.6" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M242,95L242,59.6" stroke-width="0.9"/><path d="M242,95L222.6,108.4" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M262,95L262,45" stroke-width="0.9"/><path d="M262,95L234.5,114" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M282,95L282,59.6" stroke-width="0.9"/><path d="M282,95L262.6,108.4" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M322,95L322,130.4" stroke-width="0.9"/><path d="M322,95L341.4,81.6" stroke="#E0B400" stroke-width="0.9"/><path class="u" d="M342,95L342,145" stroke-width="0.9"/><path d="M342,95L369.5,76" stroke="#E0B400" stroke-width="0.9"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="382" y="95" text-anchor="start" font-style="italic">x</text><text x="62" y="19" font-style="italic">y (E)</text><text x="10.7" y="131.7" text-anchor="end" font-style="italic">z (B)</text><text class="uf" x="102" y="37" font-style="italic" font-weight="bold">E</text><text x="68.5" y="128" font-style="italic" font-weight="bold">B</text><text x="300" y="182" text-anchor="end" font-size="12.5">E ⊥ B ⊥ direction of travel; E and B in phase</text></g></svg>
caption: A plane EM wave travelling along x: E oscillates along y, B along z, in phase, and the wave moves in the direction of E × B.
part: 102, 45 | Electric field E | Oscillates along y.
part: 74.5, 114 | Magnetic field B | Oscillates along z, in phase with E.
part: 370, 95 | Direction of travel | Along E × B, at speed c.
```

For a plane wave travelling along $x$, the electric field oscillates along (say) $y$ and the magnetic field along $z$:

:::formula Plane electromagnetic wave
$E_y=E_0\sin(kx-\omega t)$,   $B_z=B_0\sin(kx-\omega t)$

$k=\dfrac{2\pi}{\lambda}$, $\omega=2\pi\nu$, $c=\nu\lambda=\dfrac{\omega}{k}$
:::

The properties to know:

- EM waves are **transverse**: $\vec E$ and $\vec B$ are perpendicular to each other and to the direction of travel, which is the direction of $\vec E\times\vec B$.
- $E$ and $B$ oscillate **in phase**, reaching their peaks together.
- They need **no medium**: they travel through vacuum.
- Their speed in vacuum is set by the constants of electricity and magnetism, and comes out equal to the measured speed of light. That is how Maxwell realised light is an EM wave.

:::formula Speed of EM waves
In vacuum $c=\dfrac{1}{\sqrt{\mu_0\varepsilon_0}}=3\times10^8$ m s⁻¹;   in a medium $v=\dfrac{1}{\sqrt{\mu\varepsilon}}$

Ratio of amplitudes: $\dfrac{E_0}{B_0}=c$
:::

- EM waves carry **energy** and **momentum**, so they exert a pressure on a surface (radiation pressure). Energy is shared equally between the electric and magnetic fields.

:::skeleton Worked example: amplitudes
*The magnetic field of an EM wave in vacuum has amplitude $B_0=4\times10^{-8}$ T. Find the amplitude of the electric field.*

$E_0=cB_0$ [½]

$=3\times10^8\times4\times10^{-8}=$ **12 V m⁻¹** [½]
:::

:::tip E and B are not out of phase
In an EM wave $E$ and $B$ peak at the same place and time. They are perpendicular in **direction**, not shifted in **phase**.
:::

```ng-steps
id: em-wave-production
title: How an oscillating charge sends out an EM wave
step: A charge oscillates (accelerates) at frequency $\nu$, so its electric field keeps changing.
step: The changing electric field produces a changing magnetic field (displacement current, Ampère–Maxwell).
step: The changing magnetic field produces a changing electric field (Faraday).
step: The pair keeps regenerating itself and travels outward at $c$, with $\vec E\perp\vec B\perp$ direction of travel, at the same frequency $\nu$.
```

```ng-numerical
id: e0-from-b0
title: Electric and magnetic amplitudes
question: The magnetic field of an EM wave in vacuum has amplitude {{B}} × 10⁻⁸ T and frequency {{f}} MHz. Find the amplitude of its electric field and its wavelength.
var: B | 1 | 9 | 1
var: f | 50 | 500 | 50
answer: 3e8*B*1e-8
unit: V/m
step: $E_0=cB_0=3\times10^8\times{{B}}\times10^{-8}=$ **{{3e8*B*1e-8}} V/m**
step: $\lambda=\dfrac{c}{\nu}=\dfrac{3\times10^8}{ {{f}}\times10^6 }={{300/f}}$ m
```

```ng-mnemonic
id: e-b-saath-saath
title: How are E and B related in an EM wave?
trick: **"E aur B saath saath, par ek doosre se tedhe"** (together in time, crossed in direction)
meaning: $E$ and $B$ are **in phase** and **perpendicular** to each other and to the direction of travel.
meaning: $E_0/B_0=c$.
prompt: State the phase and direction relation between E and B in an EM wave.
```

```ng-draw
id: draw-em-wave
title: Sketch an EM wave with E, B and the direction of travel
svg: ref: notes#ch08-wave
time: 3
```

**In one breath:** Accelerated charges radiate EM waves: transverse, $\vec E\perp\vec B\perp$ travel, in phase, needing no medium, moving at $c=1/\sqrt{\mu_0\varepsilon_0}$ with $E_0/B_0=c$, and carrying energy and momentum.

## The electromagnetic spectrum

All EM waves travel at $c$ in vacuum; they differ only in wavelength (and so frequency). Arranged in order they form the **electromagnetic spectrum**. There are no sharp boundaries; neighbouring regions overlap.

```ng-figure
id: ch08-spectrum
title: The EM spectrum
svg:
<svg viewBox="0 0 390 126" role="img" aria-label="The electromagnetic spectrum in order of frequency" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,40L70,40L70,80L20,80Z" fill="#8A8A8A" stroke="#8A8A8A" fill-opacity="0.25"/><path d="M70,40L120,40L120,80L70,80Z" fill="#6F8FB0" stroke="#6F8FB0" fill-opacity="0.25"/><path d="M120,40L170,40L170,80L120,80Z" fill="#B05A3C" stroke="#B05A3C" fill-opacity="0.25"/><path d="M170,40L220,40L220,80L170,80Z" fill="#E0B400" stroke="#E0B400" fill-opacity="0.25"/><path d="M220,40L270,40L270,80L220,80Z" fill="#7C4DB0" stroke="#7C4DB0" fill-opacity="0.25"/><path d="M270,40L320,40L320,80L270,80Z" fill="#4A7A9A" stroke="#4A7A9A" fill-opacity="0.25"/><path class="u uf" d="M320,40L370,40L370,80L320,80Z" fill-opacity="0.25"/><path d="M30,100L360,100"/><path d="M360,100L355.4,102L355.4,98Z" fill="currentColor" stroke="none"/><path d="M360,26L30,26"/><path d="M30,26L34.6,24L34.6,28Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="45" y="65" font-weight="bold">radio</text><text x="95" y="65" font-weight="bold">micro</text><text x="145" y="65" font-weight="bold">IR</text><text x="195" y="65" font-weight="bold">vis</text><text x="245" y="65" font-weight="bold">UV</text><text x="295" y="65" font-weight="bold">X</text><text x="345" y="65" font-weight="bold">γ</text><text x="195" y="118" font-size="12.5">frequency and photon energy increase →</text><text x="195" y="20" font-size="12.5">← wavelength increases</text></g></svg>
caption: Radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays: frequency rises and wavelength falls from left to right. All travel at c in vacuum.
part: 45, 60 | Radio waves | Longest wavelength, lowest frequency.
part: 195, 60 | Visible light | 700–400 nm.
part: 345, 60 | Gamma rays | Shortest wavelength, highest frequency.
```

```ng-fill
id: em-spectrum-table
title: The EM spectrum: wavelengths
cols: Wave | Wavelength (about)
row: Radio | > 0.1 m
row: Microwaves | 0.1 m – 1 mm
row: Infrared | 1 mm – 700 nm
row: Visible | [[700 – 400 nm]]
row: Ultraviolet | 400 – 1 nm
row: X-rays | [[1 – $10^{-3}$ nm]]
row: Gamma rays | < $10^{-3}$ nm
```

```ng-fill
id: em-source-table
title: The EM spectrum: what makes each wave
cols: Wave | Made by
row: Radio | accelerated charges in aerials
row: Microwaves | [[klystron, magnetron]]
row: Infrared | [[hot bodies]]
row: Visible | [[electrons changing levels]]
row: Ultraviolet | [[Sun, arc lamps]]
row: X-rays | [[fast electrons on a target]]
row: Gamma rays | [[radioactive nuclei]]
```

```ng-fill
id: em-uses-table
title: The EM spectrum: what each wave is used for
cols: Wave | Main uses
row: Radio | [[AM, FM, TV, mobile phones]]
row: Microwaves | [[radar, microwave ovens]]
row: Infrared | [[remote controls, physiotherapy, greenhouse effect]]
row: Visible | [[vision, photography]]
row: Ultraviolet | [[water purification, LASIK]]
row: X-rays | [[medical diagnosis]]
row: Gamma rays | [[cancer treatment]]
```

A few facts that come up in 1-mark questions:

- Microwave ovens heat food because microwaves at the right frequency are absorbed by water molecules.
- Infrared is sometimes called heat waves; it keeps the Earth warm through the greenhouse effect.
- The ozone layer absorbs most ultraviolet from the Sun; UV in large doses harms the skin and eyes.
- Order of increasing frequency: radio, microwave, infrared, visible, UV, X-rays, gamma. Wavelength runs the other way.

:::tip Remember the order
Use "**R**aging **M**artians **I**nvaded **V**enus **U**sing **X**-ray **G**uns": radio, microwave, infrared, visible, ultraviolet, X-rays, gamma (increasing frequency).
:::

```ng-mnemonic
id: spectrum-order
title: Order of the EM spectrum
trick: **"Raging Martians Invaded Venus Using X-ray Guns"**
meaning: Radio, Microwave, Infrared, Visible, Ultraviolet, X-rays, Gamma: increasing frequency, decreasing wavelength.
prompt: Arrange the EM spectrum in order of increasing frequency.
```

```ng-graph
id: wavelength-frequency
title: Wavelength against frequency, c = νλ
x: ν (MHz) | 1 | 1000
y: λ (m) | 0 | 50
curve: λ = c/ν | 300/x
note: FM radio near 100 MHz has λ ≈ 3 m; a 1000 MHz microwave has λ = 30 cm.
```

**In one breath:** From radio to gamma, frequency rises and wavelength falls; each band has its own source and uses, and all travel at $c$ in vacuum.
