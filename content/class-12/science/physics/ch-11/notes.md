# Ch 11 · Dual Nature of Radiation and Matter

By 1900 light was firmly a wave: it interferes and diffracts. Then the photoelectric effect turned up results that no wave theory could explain, and Einstein solved them by treating light as a stream of particles, photons. A few years later de Broglie turned the idea around: if waves can behave like particles, particles should behave like waves. This chapter is about both halves of that "dual nature".

## Electron emission and the photoelectric effect

Metals have free electrons, but these cannot simply leave the surface: the positive ions hold them back. The minimum energy needed to pull an electron out of a metal is its **work function** $\phi_0$, usually quoted in electron volts (1 eV $=1.6\times10^{-19}$ J). Caesium has about 2.1 eV, zinc and copper around 4–5 eV. Electrons can get this energy by heating (thermionic emission), by a strong field (field emission) or from light (**photoelectric emission**).

Hertz first noticed that ultraviolet light helped sparks jump between electrodes; Hallwachs and Lenard then showed that light falling on a metal surface knocks out electrons.

```ng-figure
id: ch11-setup
title: Photoelectric apparatus
svg:
<svg viewBox="0 0 300 192" role="img" aria-label="Photoelectric effect apparatus" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="150" cy="70" rx="110" ry="50" fill="none"/><path d="M70,45L70,95" stroke-width="3"/><path d="M230,45L230,95" stroke-width="3"/><path class="u" d="M20,22L66,52" stroke-width="1.4"/><path class="uf" d="M66,52L61.1,51.2L63.3,47.8Z" stroke="none"/><path class="u" d="M20,40L66,70" stroke-width="1.4"/><path class="uf" d="M66,70L61.1,69.2L63.3,65.8Z" stroke="none"/><path class="u" d="M20,58L66,88" stroke-width="1.4"/><path class="uf" d="M66,88L61.1,87.2L63.3,83.8Z" stroke="none"/><path d="M80,58L140,58" stroke="#E0B400" stroke-width="1.4"/><path d="M140,58L136.3,59.6L136.3,56.4Z" fill="#E0B400" stroke="none"/><path d="M80,82L140,82" stroke="#E0B400" stroke-width="1.4"/><path d="M140,82L136.3,83.6L136.3,80.4Z" fill="#E0B400" stroke="none"/><path d="M70,120L70,165"/><path d="M230,120L230,165"/><path d="M70,165L110,165"/><g transform="translate(130,165) rotate(0)"><path d="M-20,0L-11,0"/><circle cx="0" cy="0" r="11"/><path d="M11,0L20,0"/></g><path d="M150,165L175,165"/><g transform="translate(190,165) rotate(0)"><path d="M-15,0L-3,0"/><path d="M-3,-5L-3,5" stroke-width="2.6"/><path d="M3,-11L3,11"/><path d="M3,0L15,0"/></g><path d="M205,165L230,165"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="70" y="108" font-weight="bold">C</text><text x="70" y="36" font-size="12.5">emitter</text><text x="230" y="108" font-weight="bold">A</text><text x="230" y="36" font-size="12.5">collector</text><text class="uf" x="14" y="18" text-anchor="start" font-size="12.5">light, ν</text><text x="110" y="72" font-size="12.5">e⁻</text><text x="130" y="169" font-size="12.5">µA</text><text x="190" y="186" font-size="12.5">battery: A positive or negative</text><text x="150" y="132" font-size="12.5">evacuated tube</text></g></svg>
caption: Light falls on the emitter C in an evacuated tube; emitted electrons are collected at A. The battery can make A positive (accelerating) or negative (retarding), and the microammeter reads the photocurrent.
part: 70, 70 | Emitter C | Light releases electrons from it.
part: 230, 70 | Collector A | Its potential can be positive or negative.
part: 40, 40 | Incident light | Frequency ν must exceed ν₀.
part: 130, 165 | Microammeter | Reads the photocurrent.
```

In the apparatus, light shines on the emitter C inside an evacuated tube, and the electrons are collected at A, giving a photocurrent read by a microammeter. The potential of A relative to C can be varied, positive or negative. The experiments gave these results:

- **Intensity**: for a given frequency, the photocurrent is proportional to the intensity of the light.
- **Potential**: as A is made more positive, the current rises to a **saturation** value when all emitted electrons are collected. Making A negative reduces the current, and at a certain negative potential, the **stopping potential** $V_0$, it falls to zero. Then even the fastest electrons are turned back, so $eV_0$ equals their maximum kinetic energy.
- **Frequency**: $V_0$ (so the maximum kinetic energy) depends on the frequency of the light but not on its intensity. It increases linearly with frequency.
- **Threshold**: for each metal there is a **threshold frequency** $\nu_0$ below which no electrons come out at all, however intense the light.
- **No delay**: emission starts instantly (within about $10^{-9}$ s), even with very dim light.

```ng-figure
id: ch11-iv
title: Photocurrent against collector potential
svg:
<svg viewBox="0 0 420 158" role="img" aria-label="Photocurrent against collector potential for different intensities and frequencies" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M70,120L175,120"/><path d="M175,120L170.4,122L170.4,118Z" fill="currentColor" stroke="none"/><path d="M70,120L70,20"/><path d="M70,20L72,24.6L68,24.6Z" fill="currentColor" stroke="none"/><path d="M10,120L70,120" stroke-width="0.8"/><path class="u" d="M30,120L34.7,105.5L39.3,93.6L44,83.9L48.7,75.9L53.3,69.4L58,64.1L62.7,59.7L67.3,56.2L72,53.2L76.7,50.8L81.3,48.9L86,47.3L90.7,45.9L95.3,44.9L100,44L104.7,43.3L109.3,42.7L114,42.2L118.7,41.8L123.3,41.5L128,41.2L132.7,41L137.3,40.8L142,40.7L146.7,40.5L151.3,40.4L156,40.4L160.7,40.3L165.3,40.2L170,40.2" stroke-width="2"/><path d="M30,120L34.7,110.9L39.3,103.5L44,97.4L48.7,92.5L53.3,88.4L58,85.1L62.7,82.3L67.3,80.1L72,78.3L76.7,76.8L81.3,75.5L86,74.5L90.7,73.7L95.3,73L100,72.5L104.7,72L109.3,71.7L114,71.4L118.7,71.1L123.3,70.9L128,70.7L132.7,70.6L137.3,70.5L142,70.4L146.7,70.3L151.3,70.3L156,70.2L160.7,70.2L165.3,70.2L170,70.1" stroke="#E0B400" stroke-width="2"/><path d="M290,120L395,120"/><path d="M395,120L390.4,122L390.4,118Z" fill="currentColor" stroke="none"/><path d="M290,120L290,20"/><path d="M290,20L292,24.6L288,24.6Z" fill="currentColor" stroke="none"/><path d="M210,120L290,120" stroke-width="0.8"/><path d="M260,120L264.5,109.3L269,100.2L273.5,92.5L278,85.9L282.5,80.4L287,75.8L291.5,71.8L296,68.5L300.5,65.6L305,63.2L309.5,61.2L314,59.5L318.5,58L323,56.8L327.5,55.7L332,54.9L336.5,54.1L341,53.5L345.5,53L350,52.5L354.5,52.1L359,51.8L363.5,51.5L368,51.3L372.5,51.1L377,50.9L381.5,50.8L386,50.7L390.5,50.6L395,50.5" stroke="#E0B400" stroke-width="2"/><path class="u" d="M230,120L235.5,109.3L241,100.2L246.5,92.5L252,85.9L257.5,80.4L263,75.8L268.5,71.8L274,68.5L279.5,65.6L285,63.2L290.5,61.2L296,59.5L301.5,58L307,56.8L312.5,55.7L318,54.9L323.5,54.1L329,53.5L334.5,53L340,52.5L345.5,52.1L351,51.8L356.5,51.5L362,51.3L367.5,51.1L373,50.9L378.5,50.8L384,50.7L389.5,50.6L395,50.5" stroke-width="2"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="175" y="133" text-anchor="end" font-style="italic">V</text><text x="66" y="24" text-anchor="end" font-style="italic">I</text><text x="30" y="134" font-size="12.5">−V₀</text><text class="uf" x="170" y="36" text-anchor="end" font-size="12.5">brighter</text><text x="100" y="148" font-size="12.5">same ν: same V₀</text><text x="395" y="133" text-anchor="end" font-style="italic">V</text><text x="286" y="24" text-anchor="end" font-style="italic">I</text><text x="260" y="134" font-size="12.5">−V₁</text><text x="226" y="134" font-size="12.5">−V₂</text><text class="uf" x="390" y="44" text-anchor="end" font-size="12.5">ν₂ &gt; ν₁</text><text x="300" y="148" font-size="12.5">same intensity: same saturation</text></g></svg>
caption: Left: brighter light (same frequency) gives a larger saturation current but the same stopping potential. Right: higher frequency (same intensity) needs a larger stopping potential; the saturation current is the same.
part: 30, 120 | Stopping potential −V₀ | Same for both intensities at the same ν.
part: 150, 40 | Higher saturation | Brighter light: more photons, more electrons.
part: 230, 120 | Larger stopping potential | Higher frequency ν₂.
part: 380, 50 | Same saturation | Same intensity for both frequencies.
```

**In one breath:** Light ejects electrons from a metal; the current grows with intensity, but the stopping potential (maximum kinetic energy) depends only on frequency, there is a threshold frequency, and there is no time lag.

## Why the wave picture fails

In the wave picture, light energy is spread evenly over the wavefront and its intensity is what matters. Then:

- Brighter light should give electrons more energy, so $V_0$ should depend on intensity. It does not.
- Any frequency, given enough intensity (or enough time to soak up energy), should eject electrons. There is no threshold in wave theory.
- With very dim light an electron would need minutes or hours to gather enough energy. In fact emission is instantaneous.

All three observations contradict the wave picture.

**In one breath:** A wave spreads energy smoothly, so it predicts intensity-dependent energies, no threshold and a time lag, all of which are wrong.

## Einstein's photoelectric equation

Einstein proposed that light energy comes in packets, **photons**, each carrying energy $h\nu$, where $h=6.63\times10^{-34}$ J s is Planck's constant. A photon gives all its energy to one electron in a single collision. Part of it, at least $\phi_0$, is used to get the electron out; the rest is kinetic energy. The fastest electrons are those that lose only $\phi_0$.

:::formula Einstein's photoelectric equation
$K_\text{max}=h\nu-\phi_0=eV_0$

Work function and threshold: $\phi_0=h\nu_0=\dfrac{hc}{\lambda_0}$
:::

Every observation now follows:

- If $h\nu<\phi_0$ no single photon can free an electron, however many arrive: that is the threshold, $\nu_0=\phi_0/h$.
- $K_\text{max}$ depends on $h\nu$, so on frequency, and rises linearly with it.
- More intense light means more photons per second, so more electrons and a bigger current, but each photon still has the same energy.
- One photon, one electron, at once: no time lag.

Rearranging, $V_0=\dfrac{h}{e}\nu-\dfrac{\phi_0}{e}$, a straight line.

```ng-figure
id: ch11-v0nu
title: Stopping potential against frequency
svg:
<svg viewBox="0 0 370 186" role="img" aria-label="Stopping potential against frequency" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M40,130L340,130"/><path d="M340,130L335.4,132L335.4,128Z" fill="currentColor" stroke="none"/><path d="M40,130L40,15"/><path d="M40,15L42,19.6L38,19.6Z" fill="currentColor" stroke="none"/><path class="u" d="M140,130L330,30" stroke-width="2.2"/><path class="u" d="M40,180L140,130" stroke-dasharray="4 3"/><circle cx="140" cy="130" r="2.2" fill="currentColor"/><path d="M240,72.1L300,72.1" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M300,72.1L300,40.5" stroke-width="0.8" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="340" y="143" text-anchor="end" font-style="italic">ν</text><text x="36" y="19" text-anchor="end" font-style="italic">V₀</text><text x="140" y="144">ν₀</text><text x="44" y="180" text-anchor="start" font-size="12.5">−φ₀/e</text><text x="306" y="60" text-anchor="start" font-size="12.5">slope = h/e</text></g></svg>
caption: Stopping potential rises linearly with frequency. The slope is h/e for every metal; the intercept on the frequency axis is the threshold frequency ν₀ of that metal.
part: 140, 130 | Threshold frequency ν₀ | Below it no electrons are emitted.
part: 300, 72 | Slope h/e | The same for every metal.
part: 44, 178 | Intercept −φ₀/e | Gives the work function.
```

The slope $h/e$ is the same for every metal, so Millikan used this graph to measure Planck's constant. The intercept on the frequency axis is $\nu_0$.

:::skeleton Worked example: stopping potential
*Light of wavelength 400 nm falls on a metal of work function 2.0 eV. Find the maximum kinetic energy of the photoelectrons and the stopping potential. ($hc=1240$ eV nm)*

Photon energy $E=\dfrac{hc}{\lambda}=\dfrac{1240}{400}=3.1$ eV [1]

$K_\text{max}=E-\phi_0=3.1-2.0=$ **1.1 eV** [½]

$V_0=\dfrac{K_\text{max}}{e}=$ **1.1 V** [½]
:::

:::tip Intensity versus frequency
Changing **intensity** changes the photocurrent (number of electrons) but not $V_0$. Changing **frequency** changes $V_0$ (energy of each electron); with the same intensity the saturation current stays roughly the same. Graph questions test exactly this.
:::

```ng-numerical
id: photoelectric-v0
title: Stopping potential with fresh numbers
question: Light of wavelength {{lam}} nm falls on a metal of work function {{phi}} eV. Find the maximum kinetic energy of the photoelectrons and the stopping potential. ($hc=1240$ eV nm)
var: lam | 200 | 450 | 25
var: phi | 1.8 | 2.6 | 0.2
let: E = 1240/lam
answer: E - phi
unit: V
dp: 2
step: $E=\dfrac{hc}{\lambda}=\dfrac{1240}{ {{lam}} }={{E:2}}$ eV
step: $K_\text{max}=E-\phi_0={{E:2}}-{{phi}}={{E - phi:2}}$ eV, so $V_0=$ **{{E - phi:2}} V**
```

```ng-graph
id: v0-nu-two-metals
title: Stopping potential against frequency for two metals
x: ν (×10¹⁴ Hz) | 0 | 15
y: V₀ (V) | 0 | 4
curve: metal 1 | max(0, 0.414*x - p1)
curve: metal 2 | max(0, 0.414*x - p2)
slider: p1 | $\phi_1$ (eV) | 1 | 4 | 0.1 | 2.1
slider: p2 | $\phi_2$ (eV) | 1 | 5 | 0.1 | 4.3
note: Parallel lines: the slope $h/e=4.14\times10^{-15}$ V s is the same for every metal. Each line starts at its own threshold frequency $\nu_0=\phi_0/h$.
```

```ng-mnemonic
id: intensity-vs-frequency
title: Intensity or frequency: what changes what?
trick: **"Intensity = Itne electrons (how many); Frequency = Force (how fast)"**
meaning: Brighter light → more photons → larger photocurrent; $V_0$ unchanged.
meaning: Higher frequency → more energetic photons → larger $K_\text{max}$ and $V_0$.
prompt: How do intensity and frequency each affect the photoelectric current and the stopping potential?
```

```ng-compare
id: wave-vs-photon
title: Wave theory vs photon picture of the photoelectric effect
cols: Wave theory predicts | Experiment (and photon picture)
row: $K_\text{max}$ | should grow with intensity | depends only on frequency: $h\nu-\phi_0$
row: Threshold frequency | none: any light works if bright enough | yes: no emission if $h\nu<\phi_0$
row: Time lag | dim light needs time to build up energy | instant: one photon, one electron
```

```ng-draw
id: draw-photocurrent-graphs
title: Sketch photocurrent against collector potential
svg: ref: notes#ch11-iv
time: 3
```

**In one breath:** Light comes as photons of energy $h\nu$; each frees one electron with $K_\text{max}=h\nu-\phi_0=eV_0$, which explains the threshold, the frequency dependence and the instant emission; $V_0$ against $\nu$ has slope $h/e$.

## Photons

Putting it together, a photon has these properties:

:::formula Photon energy and momentum
$E=h\nu=\dfrac{hc}{\lambda}$;   $p=\dfrac{h}{\lambda}=\dfrac{E}{c}$

Handy form: $E(\text{eV})=\dfrac{1240}{\lambda(\text{nm})}$
:::

- All photons of light of a given frequency have the same energy and momentum, whatever the intensity.
- Photons travel at $c$ in vacuum, have zero rest mass and are electrically neutral, so electric and magnetic fields do not deflect them.
- In a photon–particle collision, energy and momentum are conserved, but the number of photons need not be (they can be absorbed or created).
- A more intense beam has more photons crossing unit area per second, not more energetic ones.

```ng-numerical
id: photons-per-second
title: Photons per second from a source
question: A source of power {{P}} mW emits light of wavelength {{lam}} nm. How many photons does it emit per second?
var: P | 1 | 10 | 1
var: lam | 400 | 700 | 50
let: E = 6.63e-34*3e8/(lam*1e-9)
answer: P*1e-3/E
unit: per second
step: $E=\dfrac{hc}{\lambda}=\dfrac{6.63\times10^{-34}\times3\times10^8}{ {{lam}}\times10^{-9} }={{E}}$ J
step: $n=\dfrac{P}{E}=\dfrac{ {{P}}\times10^{-3} }{ {{E}} }=$ **{{P*1e-3/E}} photons per second**
```

**In one breath:** A photon carries energy $h\nu=hc/\lambda$ and momentum $h/\lambda$, travels at $c$, has no charge or rest mass; intensity counts photons, frequency fixes their energy.

## Matter waves: the de Broglie relation

Light behaves as a wave (interference, diffraction) and as particles (photoelectric effect). In 1924 de Broglie suggested that nature is symmetric: moving particles of matter should also have a wave nature. He proposed that a particle of momentum $p$ has a wavelength given by the same relation as a photon.

:::formula de Broglie wavelength
$\lambda=\dfrac{h}{p}=\dfrac{h}{mv}$

From kinetic energy $K$: $\lambda=\dfrac{h}{\sqrt{2mK}}$;   charge $q$ accelerated through $V$: $\lambda=\dfrac{h}{\sqrt{2mqV}}$

Electron through $V$ volts: $\lambda=\dfrac{1.227}{\sqrt V}$ nm
:::

For everyday objects $\lambda$ is absurdly small. A 0.12 kg ball at 20 m s⁻¹ has $\lambda\approx2.8\times10^{-34}$ m, far too small to detect, which is why we never see a cricket ball diffract. For an electron accelerated through 100 V, $\lambda\approx0.12$ nm, about the spacing of atoms in a crystal, so crystals can diffract electrons. Electron diffraction has been observed, confirming matter waves (the experimental details are not in the board syllabus).

:::skeleton Worked example: de Broglie wavelength of an electron
*An electron is accelerated from rest through 54 V. Find its de Broglie wavelength.*

$\lambda=\dfrac{1.227}{\sqrt V}$ nm [½]

$=\dfrac{1.227}{\sqrt{54}}=\dfrac{1.227}{7.35}=$ **0.167 nm** [½]
:::

Comparing particles: for the same accelerating voltage, $\lambda=h/\sqrt{2mqV}$, so a lighter particle (or one with less charge) has a longer wavelength: $\lambda_e>\lambda_p>\lambda_\alpha$. For the same kinetic energy, the lighter particle again has the longer wavelength; for the same momentum, all have the same wavelength.

:::tip Same what?
Read the question carefully: same **momentum** means same $\lambda$; same **kinetic energy** means $\lambda\propto1/\sqrt m$; same **voltage** means $\lambda\propto1/\sqrt{mq}$.
:::

```ng-numerical
id: electron-wavelength
title: de Broglie wavelength of an electron
question: An electron is accelerated from rest through {{V}} V. Find its de Broglie wavelength.
var: V | 25 | 400 | 25
answer: 1.227/sqrt(V)
unit: nm
step: $\lambda=\dfrac{1.227}{\sqrt V}$ nm $=\dfrac{1.227}{\sqrt{ {{V}} }}$ nm
step: $\lambda=$ **{{1.227/sqrt(V)}} nm**
```

```ng-graph
id: de-broglie-voltage
title: Electron wavelength against accelerating voltage
x: V (volts) | 10 | 500
y: λ (nm) | 0 | 0.4
curve: λ = 1.227/√V | 1.227/sqrt(x)
note: Four times the voltage halves the wavelength. Around 100 V, λ ≈ 0.12 nm, about an atomic spacing.
```

```ng-mnemonic
id: hp-printer
title: de Broglie wavelength
trick: **"λ = h/p — remember the HP printer"**
meaning: $\lambda=\dfrac hp=\dfrac{h}{mv}=\dfrac{h}{\sqrt{2mK}}$; through a voltage $V$: $\dfrac{h}{\sqrt{2mqV}}$.
prompt: Write the de Broglie relation and its form for a charge accelerated through V.
```

```ng-fill
id: same-what-lambda
title: Comparing de Broglie wavelengths
cols: Particles have the same … | λ depends on | So
row: momentum | nothing else | [[equal wavelengths]]
row: kinetic energy | [[$1/\sqrt m$]] | lighter particle has larger λ
row: accelerating voltage | $1/\sqrt{mq}$ | [[$\lambda_e>\lambda_p>\lambda_\alpha$]]
```

**In one breath:** Every moving particle has a wavelength $\lambda=h/p=h/\sqrt{2mK}$; it is tiny for everyday objects but about an atomic spacing for electrons accelerated through a hundred volts ($1.227/\sqrt V$ nm).
