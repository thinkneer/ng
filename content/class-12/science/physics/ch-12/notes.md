# Ch 12 · Atoms

What does an atom look like inside? Thomson's model pictured a ball of positive charge with electrons stuck in it, like seeds in a watermelon. One experiment, Rutherford's alpha-particle scattering, overturned that and showed a tiny dense nucleus. But Rutherford's atom had a fatal flaw, and Bohr fixed it with a bold new rule that also explained the sharp lines of the hydrogen spectrum. This chapter follows that story.

## Alpha-particle scattering and the nuclear atom

In 1911 Geiger and Marsden, working with Rutherford, fired a narrow beam of alpha particles (helium nuclei, charge $+2e$, energy about 5.5 MeV) at a very thin gold foil. A movable zinc sulphide screen and microscope counted the alpha particles scattered at each angle.

The results were startling:

- Most alpha particles went straight through, or were deflected by only a degree or so.
- About 0.14% were scattered by more than 1°.
- Roughly 1 in 8000 was deflected by more than 90°, and some bounced almost straight back.

Rutherford said it was as if you fired a shell at tissue paper and it came back and hit you. A spread-out positive charge (Thomson's model) could never turn an alpha particle back. The conclusions:

- Most of the atom is **empty space**, which is why most alpha particles pass through.
- All the positive charge and almost all the mass are concentrated in a tiny central **nucleus**, about $10^{-15}$ to $10^{-14}$ m across, some 10 000 to 100 000 times smaller than the atom. Only an alpha particle heading almost straight at it comes close enough to feel a huge repulsion and bounce back.
- Electrons move round the nucleus, like planets round the Sun, held by electrostatic attraction.

```ng-figure
id: ch12-scatter
title: Alpha-particle scattering paths
svg:
<svg viewBox="0 0 400 200" role="img" aria-label="Alpha particle trajectories near a nucleus for different impact parameters" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15,30L15.2,30L17.2,30L19.2,30L21.2,30L23.2,30L25.2,30L27.2,30L29.2,30L31.2,30L33.2,30L35.2,30L37.2,30L39.1,30L41.1,30L43.1,30L45.1,29.9L47.1,29.9L49,29.9L51,29.9L53,29.9L55,29.9L56.9,29.9L58.9,29.9L60.9,29.9L62.8,29.8L64.8,29.8L66.7,29.8L68.7,29.8L70.7,29.8L72.6,29.8L74.6,29.8L76.5,29.7L78.5,29.7L80.4,29.7L82.3,29.7L84.3,29.6L86.2,29.6L88.2,29.6L90.1,29.6L92,29.5L94,29.5L95.9,29.5L97.8,29.4L99.7,29.4L101.6,29.4L103.6,29.3L105.5,29.3L107.4,29.3L109.3,29.2L111.2,29.2L113.1,29.1L115,29.1L116.9,29L118.8,29L120.7,28.9L122.5,28.9L124.4,28.8L126.3,28.7L128.2,28.7L130,28.6L131.9,28.6L133.8,28.5L135.6,28.4L137.5,28.3L139.3,28.3L141.2,28.2L143,28.1L144.9,28L146.7,27.9L148.5,27.8L150.3,27.7L152.2,27.6L154,27.5L155.8,27.4L157.6,27.3L159.4,27.1L161.2,27L163,26.9L164.8,26.7L166.6,26.6L168.4,26.5L170.1,26.3L171.9,26.1L173.7,26L175.4,25.8L177.2,25.6L178.9,25.4L180.7,25.3L182.4,25.1L184.2,24.9L185.9,24.6L187.6,24.4L189.4,24.2L191.1,24L192.8,23.7L194.5,23.5L196.2,23.2L197.9,22.9L199.6,22.6L201.3,22.4L203,22.1L204.7,21.8L206.4,21.4L208.1,21.1L209.7,20.8L211.4,20.4L213.1,20.1L214.8,19.7L216.4,19.3L218.1,18.9L219.8,18.5L221.5,18.1L223.1,17.7L224.8,17.3L226.5,16.9L228.1,16.4L229.8,16L231.4,15.5L233.1,15L234.8,14.5L236.4,14L238.1,13.5L239.8,13L241.4,12.5L243.1,12L244.8,11.4L246.5,10.9L248.1,10.3L249.8,9.8L251.5,9.2L253.2,8.6L254.8,8L256.5,7.4L258.2,6.8L259.9,6.2L261.6,5.6L263.3,5L263.5,4.9" stroke-width="1.5"/><path d="M90,30L85.4,32L85.4,28Z" fill="currentColor" stroke="none"/><path d="M15,60L15.2,60L17.2,60L19.2,60L21.2,60L23.2,60L25.2,60L27.2,60L29.2,60L31.2,60L33.2,60L35.2,60L37.2,60L39.1,60L41.1,60L43.1,60L45.1,60L47,60L49,60L51,59.9L53,59.9L54.9,59.9L56.9,59.9L58.9,59.9L60.8,59.9L62.8,59.9L64.7,59.9L66.7,59.9L68.6,59.9L70.6,59.9L72.5,59.9L74.5,59.8L76.4,59.8L78.4,59.8L80.3,59.8L82.2,59.8L84.2,59.8L86.1,59.7L88,59.7L89.9,59.7L91.8,59.7L93.8,59.7L95.7,59.7L97.6,59.6L99.5,59.6L101.4,59.6L103.3,59.6L105.2,59.5L107.1,59.5L109,59.5L110.9,59.4L112.7,59.4L114.6,59.4L116.5,59.3L118.3,59.3L120.2,59.3L122.1,59.2L123.9,59.2L125.8,59.1L127.6,59.1L129.4,59.1L131.3,59L133.1,59L134.9,58.9L136.7,58.8L138.5,58.8L140.3,58.7L142.1,58.7L143.9,58.6L145.7,58.5L147.5,58.4L149.3,58.4L151,58.3L152.8,58.2L154.5,58.1L156.3,58L158,57.9L159.7,57.8L161.4,57.7L163.1,57.6L164.8,57.5L166.5,57.3L168.2,57.2L169.9,57.1L171.5,56.9L173.2,56.8L174.8,56.6L176.4,56.4L178,56.2L179.6,56L181.2,55.8L182.8,55.6L184.4,55.4L185.9,55.2L187.5,54.9L189,54.7L190.5,54.4L192,54.1L193.5,53.8L195,53.5L196.5,53.2L197.9,52.8L199.4,52.5L200.8,52.1L202.2,51.7L203.7,51.2L205.1,50.8L206.5,50.3L207.8,49.9L209.2,49.4L210.6,48.8L211.9,48.3L213.3,47.7L214.6,47.1L216,46.5L217.3,45.9L218.6,45.2L219.9,44.6L221.3,43.9L222.6,43.2L223.9,42.4L225.2,41.7L226.5,40.9L227.8,40.1L229.1,39.3L230.4,38.5L231.7,37.6L233,36.7L234.3,35.8L235.6,34.9L236.9,34L238.3,33.1L239.6,32.2L240.9,31.2L242.2,30.2L243.5,29.2L244.8,28.2L246.2,27.2L247.5,26.2L248.8,25.1L250.2,24.1L251.5,23L252.8,22L254.2,20.9L255.5,19.8L256.9,18.7L258.2,17.6L259.6,16.5L260.9,15.4L262.3,14.2L263.6,13.1L265,11.9L266.4,10.8L267.7,9.6L269.1,8.5L270.5,7.3L271.9,6.1L273.2,4.9L273.2,4.9" stroke-width="1.5"/><path d="M90,60L85.4,62L85.4,58Z" fill="currentColor" stroke="none"/><path d="M15,82L15.2,82L17.2,82L19.2,82L21.2,82L23.2,82L25.2,82L27.2,82L29.2,82L31.2,82L33.2,82L35.2,82L37.2,82L39.1,82L41.1,82L43.1,82L45.1,82L47,82L49,82L51,82L52.9,82L54.9,82L56.9,82L58.8,82L60.8,82L62.7,82L64.7,81.9L66.7,81.9L68.6,81.9L70.5,81.9L72.5,81.9L74.4,81.9L76.4,81.9L78.3,81.9L80.2,81.9L82.2,81.9L84.1,81.9L86,81.9L87.9,81.9L89.9,81.9L91.8,81.9L93.7,81.8L95.6,81.8L97.5,81.8L99.4,81.8L101.3,81.8L103.2,81.8L105.1,81.8L106.9,81.8L108.8,81.7L110.7,81.7L112.6,81.7L114.4,81.7L116.3,81.7L118.1,81.7L120,81.6L121.8,81.6L123.7,81.6L125.5,81.6L127.3,81.6L129.2,81.5L131,81.5L132.8,81.5L134.6,81.5L136.4,81.4L138.2,81.4L139.9,81.4L141.7,81.3L143.5,81.3L145.2,81.3L147,81.2L148.7,81.2L150.4,81.1L152.1,81.1L153.9,81L155.6,81L157.2,80.9L158.9,80.9L160.6,80.8L162.2,80.8L163.9,80.7L165.5,80.6L167.1,80.6L168.7,80.5L170.2,80.4L171.8,80.3L173.4,80.2L174.9,80.1L176.4,80L177.9,79.9L179.3,79.7L180.8,79.6L182.2,79.5L183.6,79.3L185,79.2L186.3,79L187.7,78.8L189,78.6L190.2,78.4L191.5,78.2L192.7,77.9L193.9,77.6L195,77.3L196.1,77L197.2,76.7L198.2,76.4L199.3,76L200.2,75.6L201.2,75.1L202.1,74.7L203,74.2L203.8,73.6L204.6,73.1L205.4,72.5L206.1,71.8L206.8,71.1L207.5,70.4L208.1,69.7L208.7,68.9L209.3,68L209.9,67.2L210.4,66.2L210.9,65.3L211.4,64.3L211.9,63.3L212.3,62.2L212.8,61.1L213.2,60L213.6,58.8L214,57.6L214.4,56.4L214.8,55.1L215.1,53.8L215.5,52.5L215.8,51.2L216.2,49.8L216.5,48.4L216.8,47L217.1,45.6L217.5,44.1L217.8,42.6L218.1,41.1L218.4,39.6L218.7,38.1L219,36.5L219.3,34.9L219.6,33.4L219.9,31.8L220.1,30.2L220.4,28.5L220.7,26.9L221,25.2L221.3,23.6L221.6,21.9L221.8,20.2L222.1,18.5L222.4,16.8L222.7,15.1L222.9,13.4L223.2,11.6L223.5,9.9L223.8,8.2L224,6.4L224.3,4.8" stroke="#E0B400" stroke-width="1.5"/><path d="M90,82L85.4,84L85.4,80Z" fill="#E0B400" stroke="none"/><path d="M15,93L15.2,93L17.2,93L19.2,93L21.2,93L23.2,93L25.2,93L27.2,93L29.2,93L31.2,93L33.2,93L35.2,93L37.2,93L39.1,93L41.1,93L43.1,93L45.1,93L47,93L49,93L51,93L52.9,93L54.9,93L56.9,93L58.8,93L60.8,93L62.7,93L64.7,93L66.6,93L68.6,93L70.5,93L72.5,93L74.4,93L76.4,93L78.3,93L80.2,93L82.2,93L84.1,93L86,93L87.9,92.9L89.8,92.9L91.7,92.9L93.7,92.9L95.6,92.9L97.5,92.9L99.4,92.9L101.3,92.9L103.1,92.9L105,92.9L106.9,92.9L108.8,92.9L110.7,92.9L112.5,92.9L114.4,92.9L116.2,92.9L118.1,92.9L119.9,92.9L121.8,92.9L123.6,92.8L125.4,92.8L127.3,92.8L129.1,92.8L130.9,92.8L132.7,92.8L134.5,92.8L136.3,92.8L138.1,92.8L139.8,92.8L141.6,92.7L143.4,92.7L145.1,92.7L146.8,92.7L148.6,92.7L150.3,92.7L152,92.6L153.7,92.6L155.4,92.6L157,92.6L158.7,92.6L160.4,92.5L162,92.5L163.6,92.5L165.2,92.4L166.8,92.4L168.4,92.4L169.9,92.3L171.5,92.3L173,92.3L174.5,92.2L175.9,92.2L177.4,92.1L178.8,92.1L180.2,92L181.6,92L182.9,91.9L184.3,91.8L185.6,91.8L186.8,91.7L188,91.6L189.2,91.5L190.4,91.4L191.5,91.3L192.5,91.1L193.5,91L194.5,90.9L195.4,90.7L196.3,90.5L197.1,90.4L197.9,90.2L198.6,89.9L199.2,89.7L199.8,89.4L200.3,89.2L200.8,88.8L201.2,88.5L201.5,88.2L201.8,87.8L202,87.4L202.1,86.9L202.2,86.4L202.2,85.9L202.1,85.4L202,84.8L201.8,84.2L201.6,83.6L201.3,83L200.9,82.3L200.5,81.5L200.1,80.8L199.6,80L199.1,79.2L198.5,78.4L197.9,77.5L197.2,76.6L196.6,75.7L195.8,74.8L195.1,73.8L194.3,72.8L193.5,71.8L192.7,70.8L191.9,69.8L191,68.7L190.1,67.6L189.2,66.5L188.2,65.4L187.3,64.3L186.3,63.2L185.3,62L184.4,60.9L183.3,59.7L182.3,58.5L181.3,57.3L180.2,56.1L179.2,54.9L178.1,53.7L177,52.4L175.9,51.2L174.8,49.9L173.7,48.7L172.6,47.4L171.5,46.1L170.3,44.8L169.2,43.5L168,42.2L166.9,40.9L165.7,39.6L164.5,38.3L163.4,37L162.2,35.6L161,34.3L159.8,33L158.6,31.6L157.4,30.3L156.2,28.9L155,27.6L153.8,26.2L152.5,24.8L151.3,23.5L150.1,22.1L148.8,20.7L147.6,19.3L146.4,18L145.1,16.6L143.9,15.2L142.6,13.8L141.4,12.4L140.1,11L138.8,9.6L137.6,8.2L136.3,6.8L135,5.3L134.7,5" stroke="#E0B400" stroke-width="1.5"/><path d="M90,93L85.4,95L85.4,91Z" fill="#E0B400" stroke="none"/><path d="M15,100L194,100" stroke-width="1.5"/><path d="M120,100L115.4,102L115.4,98Z" fill="currentColor" stroke="none"/><path d="M194,104L40,104" stroke="#E0B400" stroke-width="1.5"/><path d="M60,104L64.6,102L64.6,106Z" fill="#E0B400" stroke="none"/><circle class="u uf" cx="230" cy="100" r="4.5"/><path d="M150,30L150,100"/><path d="M150,100L148.4,96.3L151.6,96.3Z" fill="currentColor" stroke="none"/><path d="M150,30L151.6,33.7L148.4,33.7Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text class="uf" x="238" y="118" text-anchor="start" font-size="11">nucleus</text><text x="145" y="70" text-anchor="end" font-style="italic">b</text></g></svg>
caption: Alpha particles passing far from the nucleus are hardly deflected; those aimed nearly head-on (small impact parameter b) are scattered through large angles, and a head-on one bounces straight back.
part: 230, 100 | Nucleus | Tiny, dense, positively charged.
part: 150, 65 | Impact parameter b | Large b: small deflection.
part: 100, 104 | Head-on particle | b = 0: bounces straight back (180°).
```

The perpendicular distance between the initial line of motion of an alpha particle and the centre of the nucleus is the **impact parameter** $b$. A large $b$ means a small deflection; a small $b$ means a large one; $b=0$ (head-on) means the particle stops and returns along its path ($\theta=180^\circ$).

For a head-on collision, the alpha particle slows down until all its kinetic energy has become electrostatic potential energy. That point is the **distance of closest approach** $r_0$, which gives an upper limit on the size of the nucleus.

:::formula Distance of closest approach
$K=\dfrac{1}{4\pi\varepsilon_0}\dfrac{(2e)(Ze)}{r_0}\Rightarrow r_0=\dfrac{1}{4\pi\varepsilon_0}\dfrac{2Ze^2}{K}$
:::

:::skeleton Worked example: closest approach
*An alpha particle of kinetic energy 5 MeV approaches a gold nucleus ($Z=79$) head-on. Estimate the distance of closest approach.*

$r_0=\dfrac{1}{4\pi\varepsilon_0}\dfrac{2Ze^2}{K}=\dfrac{9\times10^9\times2\times79\times(1.6\times10^{-19})^2}{5\times1.6\times10^{-13}}$ [1]

$\approx$ **$4.5\times10^{-14}$ m** (about 45 fm) [1]
:::

```ng-steps
id: alpha-scattering-steps
title: From observation to the nuclear atom
step: **Most** alpha particles pass straight through the gold foil → the atom is mostly **empty space**.
step: **A few** are deflected through large angles → there is a strong repelling charge somewhere in the atom.
step: About **1 in 8000** bounces back (beyond 90°) → that positive charge and nearly all the mass are packed into a tiny **nucleus**.
step: Only a particle aimed almost head-on (small impact parameter) gets close enough to be turned back.
```

```ng-numerical
id: closest-approach
title: Distance of closest approach
question: An alpha particle of kinetic energy {{K}} MeV moves head-on towards a nucleus of atomic number {{Z}}. Find the distance of closest approach.
var: K | 2 | 10 | 1
var: Z | 20 | 90 | 10
answer: 9e9*2*Z*(1.6e-19)^2/(K*1.6e-13)
unit: m
step: $r_0=\dfrac{1}{4\pi\varepsilon_0}\dfrac{2Ze^2}{K}=\dfrac{9\times10^9\times2\times{{Z}}\times(1.6\times10^{-19})^2}{ {{K}}\times1.6\times10^{-13} }$
step: $r_0=$ **{{9e9*2*Z*(1.6e-19)^2/(K*1.6e-13)}} m**
```

```ng-draw
id: draw-scattering
title: Sketch alpha-particle paths near a nucleus
svg: ref: notes#ch12-scatter
time: 3
```

**In one breath:** Most alpha particles pass straight through gold foil, a very few bounce back, so the atom is mostly empty with a tiny, dense, positive nucleus; small impact parameter means large deflection.

## Why Rutherford's model is not enough

An electron orbiting a nucleus is accelerating (circular motion), and classical electromagnetism says an accelerated charge radiates energy. So the electron should lose energy continuously, spiral inward and crash into the nucleus in about $10^{-8}$ s. Atoms would not be stable. And as the orbit shrank, the frequency of the emitted light would change smoothly, giving a continuous spectrum. But atoms are stable, and each element emits light only at certain sharp wavelengths (a **line spectrum**). Rutherford's model explains neither.

**In one breath:** An orbiting electron should radiate, spiral in and give a continuous spectrum; real atoms are stable and give line spectra, so Rutherford's model fails.

## Bohr's model of the hydrogen atom

In 1913 Bohr kept Rutherford's nucleus and orbits but added three postulates:

1. **Stationary orbits.** An electron can revolve in certain stable orbits without radiating energy. Each has a definite energy.
2. **Quantum condition.** The allowed orbits are those for which the angular momentum of the electron is a whole-number multiple of $h/2\pi$: $mvr=\dfrac{nh}{2\pi}$, $n=1,2,3,\dots$ ($n$ is the principal quantum number).
3. **Frequency condition.** The atom emits (or absorbs) radiation only when the electron jumps from one allowed orbit to another; the photon carries away the energy difference: $h\nu=E_i-E_f$.

Combine the quantum condition with the force balance for a circular orbit, $\dfrac{mv^2}{r}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2}$. Eliminating $v$ gives the radius of the $n$th orbit; putting that back gives the speed and the energy (kinetic $+$ potential).

:::formula Bohr orbits in hydrogen
Radius $r_n=\dfrac{n^2h^2\varepsilon_0}{\pi me^2}=n^2a_0$, with $a_0=0.529$ Å (Bohr radius)

Speed $v_n=\dfrac{e^2}{2\varepsilon_0nh}$ ($v_n\propto1/n$; $v_1\approx2.2\times10^6$ m s⁻¹)

Energy $E_n=-\dfrac{me^4}{8\varepsilon_0^2n^2h^2}=-\dfrac{13.6}{n^2}$ eV

$K=-E$, $U=2E$ (kinetic energy is positive, potential energy negative and twice as large)
:::

The negative sign means the electron is bound: energy must be supplied to free it. The ground state ($n=1$) has $-13.6$ eV, so the **ionisation energy** of hydrogen is 13.6 eV. Lifting the electron from $n=1$ to $n=2$ needs $13.6-3.4=10.2$ eV, the **first excitation energy**.

:::skeleton Answer skeleton: radius and energy of the nth orbit (5 marks)
Force balance: $\dfrac{mv^2}{r}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2}$ [½]; Bohr's condition $mvr=\dfrac{nh}{2\pi}$ [½]

Eliminate $v$: **$r_n=\dfrac{n^2h^2\varepsilon_0}{\pi me^2}$**, so $r_n\propto n^2$ [1½]

$K=\tfrac12mv^2=\dfrac{e^2}{8\pi\varepsilon_0r}$, $U=-\dfrac{e^2}{4\pi\varepsilon_0r}$ [1]

$E=K+U=-\dfrac{e^2}{8\pi\varepsilon_0r_n}=$ **$-\dfrac{me^4}{8\varepsilon_0^2n^2h^2}=-\dfrac{13.6}{n^2}$ eV** [1½]
:::

:::tip Energy is negative
$E_n$ is negative, and it **increases** (towards zero) as $n$ increases. An electron moving to a higher orbit gains energy even though $|E_n|$ gets smaller.
:::

```ng-graph
id: bohr-energy-curve
title: Energy of the hydrogen electron against n
x: n | 1 | 6
y: E (eV) | -14 | 0
curve: E = −13.6/n² | -13.6/x^2
note: Only whole-number values of $n$ are allowed: −13.6, −3.4, −1.51, −0.85 eV … crowding towards 0 (the free electron).
```

```ng-numerical
id: bohr-orbit
title: Radius and energy of a Bohr orbit
question: For the orbit $n={{n}}$ of hydrogen, find the radius and the total energy.
var: n | 1 | 6 | 1
answer: -13.6/n^2
unit: eV
dp: 2
step: $r_n=0.529\,n^2$ Å $=0.529\times{{n}}^2={{0.529*n^2}}$ Å
step: $E_n=-\dfrac{13.6}{n^2}=$ **{{-13.6/n^2:2}} eV**; kinetic energy $={{13.6/n^2:2}}$ eV, potential energy $={{-27.2/n^2:2}}$ eV
```

```ng-derive
id: derive-bohr
title: Bohr radius and energy of the nth orbit
prompt: Using Bohr's postulates, derive the radius of the $n$th orbit of the hydrogen atom and show that its energy is $E_n=-13.6/n^2$ eV.
time: 8
check: $\dfrac{mv^2}{r}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2}$ and $mvr=\dfrac{nh}{2\pi}$ | 1
check: Eliminate $v$: $r_n=\dfrac{n^2h^2\varepsilon_0}{\pi me^2}$ | 1.5
check: $K=\dfrac{e^2}{8\pi\varepsilon_0r}$, $U=-\dfrac{e^2}{4\pi\varepsilon_0r}$ | 1
check: $E_n=-\dfrac{me^4}{8\varepsilon_0^2n^2h^2}=-\dfrac{13.6}{n^2}$ eV | 1.5
```

```ng-mnemonic
id: u-do-guna
title: Kinetic, potential and total energy in an orbit
trick: **"K seedha, U do guna ulta"** (K straight, U twice and reversed)
meaning: $K=-E=+\dfrac{13.6}{n^2}$ eV; $U=2E=-\dfrac{27.2}{n^2}$ eV; $E=K+U$.
prompt: How are the kinetic and potential energies related to the total energy in a Bohr orbit?
```

**In one breath:** Bohr allowed only orbits with $mvr=nh/2\pi$, which do not radiate; this gives $r_n=0.529n^2$ Å and $E_n=-13.6/n^2$ eV, with light emitted only in jumps, $h\nu=E_i-E_f$.

## Energy levels and the hydrogen spectrum

The allowed energies are best shown as an **energy level diagram**: horizontal lines at $-13.6$, $-3.4$, $-1.51$, $-0.85$ eV and so on, crowding together towards 0 eV (the electron free).

```ng-figure
id: ch12-levels
title: Hydrogen energy levels
svg:
<svg viewBox="0 0 410 200" role="img" aria-label="Energy level diagram of hydrogen with the Lyman, Balmer and Paschen series" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M60,178L350,178" stroke-width="1.6"/><path d="M60,92L350,92" stroke-width="1"/><path d="M60,60L350,60" stroke-width="1"/><path d="M60,40L350,40" stroke-width="1"/><path d="M60,18L350,18" stroke-dasharray="4 3"/><path class="u" d="M85,92L85,178"/><path class="uf" d="M85,178L83.4,174.3L86.6,174.3Z" stroke="none"/><path class="u" d="M101,60L101,178"/><path class="uf" d="M101,178L99.4,174.3L102.6,174.3Z" stroke="none"/><path class="u" d="M117,40L117,178"/><path class="uf" d="M117,178L115.4,174.3L118.6,174.3Z" stroke="none"/><path d="M190,60L190,92" stroke="#E0B400"/><path d="M190,92L188.4,88.3L191.6,88.3Z" fill="#E0B400" stroke="none"/><path d="M206,40L206,92" stroke="#E0B400"/><path d="M206,92L204.4,88.3L207.6,88.3Z" fill="#E0B400" stroke="none"/><path d="M295,40L295,60"/><path d="M295,60L293.4,56.3L296.6,56.3Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="55" y="182" text-anchor="end" font-size="11">n = 1</text><text x="355" y="182" text-anchor="start" font-size="10">-13.6 eV</text><text x="55" y="96" text-anchor="end" font-size="11">n = 2</text><text x="355" y="96" text-anchor="start" font-size="10">-3.4 eV</text><text x="55" y="64" text-anchor="end" font-size="11">n = 3</text><text x="355" y="64" text-anchor="start" font-size="10">-1.51 eV</text><text x="55" y="44" text-anchor="end" font-size="11">n = 4</text><text x="355" y="44" text-anchor="start" font-size="10">-0.85 eV</text><text x="55" y="22" text-anchor="end" font-size="11">n = ∞</text><text x="355" y="22" text-anchor="start" font-size="10">0 eV</text><text class="uf" x="101" y="194" font-size="11">Lyman (UV)</text><text x="198" y="108" font-size="11">Balmer (visible)</text><text x="300" y="76" font-size="11">Paschen (IR)</text></g></svg>
caption: Hydrogen energy levels (not to scale), $E_{n}$ = −13.6/n² eV. Jumps down to n = 1 give the Lyman series (UV), to n = 2 the Balmer series (visible), to n = 3 the Paschen series (infrared).
part: 200, 178 | n = 1, −13.6 eV | Ground state; ionisation energy 13.6 eV.
part: 200, 92 | n = 2, −3.4 eV | First excited state; 10.2 eV above n = 1.
part: 200, 18 | n = ∞, 0 eV | Electron just free.
part: 101, 135 | Lyman series | Jumps down to n = 1: ultraviolet.
part: 198, 76 | Balmer series | Jumps down to n = 2: visible.
```

When an electron drops from level $n_i$ to a lower level $n_f$, it emits one photon of energy $E_{n_i}-E_{n_f}$. Writing this in terms of wavelength:

:::formula Hydrogen spectrum
$\dfrac1\lambda=R\left(\dfrac{1}{n_f^2}-\dfrac{1}{n_i^2}\right)$, Rydberg constant $R=1.097\times10^7$ m⁻¹

$h\nu=E_{n_i}-E_{n_f}=13.6\left(\dfrac1{n_f^2}-\dfrac1{n_i^2}\right)$ eV
:::

Lines sharing the same lower level form a **series**:

```ng-fill
id: hydrogen-series
title: Spectral series of hydrogen
cols: Series | Lower level $n_f$ | Upper levels $n_i$ | Region
row: Lyman | 1 | 2, 3, 4, … | [[ultraviolet]]
row: Balmer | [[2]] | 3, 4, 5, … | [[visible]]
row: Paschen | 3 | [[4, 5, 6, …]] | infrared
row: Brackett | [[4]] | 5, 6, … | infrared
row: Pfund | 5 | 6, 7, … | [[infrared]]
```

```ng-mnemonic
id: lucknow-to-pune
title: Lower level of each hydrogen series
trick: **"Lucknow, Bareilly, Patna, Bhopal, Pune"** → Lyman 1, Balmer 2, Paschen 3, Brackett 4, Pfund 5
meaning: The order of the cities gives $n_f$ = 1, 2, 3, 4, 5.
meaning: Only Lyman is UV and only Balmer is visible; the rest are infrared.
prompt: Name the hydrogen series in order of their lower level $n_f$.
```

The longest wavelength in a series comes from the smallest jump ($n_i=n_f+1$), the shortest (the **series limit**) from $n_i=\infty$. The first Balmer line, red H$_\alpha$ at 656 nm, is the $3\to2$ jump.

An atom can also **absorb** a photon whose energy exactly matches a jump upward, which is why a cool gas shows dark lines at the same wavelengths it emits when hot.

:::skeleton Worked example: a spectral line
*Find the wavelength of the photon emitted when a hydrogen electron falls from $n=3$ to $n=2$. Which series does it belong to?*

$E=E_3-E_2=-1.51-(-3.4)=1.89$ eV [½]

$\lambda=\dfrac{1240}{1.89}\ \text{nm}\approx$ **656 nm** [1]

Ends on $n=2$: **Balmer series (visible, red)** [½]
:::

```ng-numerical
id: hydrogen-line
title: Wavelength of a hydrogen line
question: A hydrogen electron falls from $n={{ni}}$ to $n=2$. Find the wavelength of the emitted photon. ($hc=1240$ eV nm)
var: ni | 3 | 7 | 1
let: dE = 13.6*(1/4 - 1/ni^2)
answer: 1240/dE
unit: nm
dp: 0
step: $\Delta E=13.6\left(\dfrac1{2^2}-\dfrac1{ {{ni}}^2 }\right)={{dE}}$ eV
step: $\lambda=\dfrac{1240}{\Delta E}=$ **{{1240/dE:0}} nm** (Balmer series)
```

```ng-draw
id: draw-energy-levels
title: Draw the hydrogen energy-level diagram with three series
svg: ref: notes#ch12-levels
time: 4
```

**In one breath:** Jumps down the energy ladder emit photons with $1/\lambda=R(1/n_f^2-1/n_i^2)$; ending on $n=1$ gives Lyman (UV), $n=2$ Balmer (visible), $n=3$ Paschen (IR).

## De Broglie's explanation of Bohr's condition

Why should angular momentum be quantised? De Broglie's matter waves give a neat answer. An electron in orbit is a wave running round the circle. For it to be stable, the wave must join up with itself after one turn, forming a standing wave: the circumference must hold a whole number of wavelengths.

$2\pi r_n=n\lambda$, and with $\lambda=\dfrac{h}{mv}$ this gives $mvr_n=\dfrac{nh}{2\pi}$, exactly Bohr's second postulate.

Bohr's model works beautifully for hydrogen and hydrogen-like ions (He⁺, Li²⁺). It cannot handle atoms with more than one electron, does not explain the relative intensities of spectral lines, and was later replaced by full quantum mechanics.

**In one breath:** If the orbit holds a whole number of electron wavelengths, $2\pi r=n\lambda$, Bohr's $mvr=nh/2\pi$ follows; the model works only for one-electron atoms.
