# Ch 7 · Alternating Current

The mains supply in your home is not steady DC: its voltage swings back and forth fifty times a second. Alternating current won because its voltage can be stepped up and down easily with transformers, so power can travel long distances at high voltage with little loss. This chapter explains how to measure an alternating current, how resistors, inductors and capacitors behave in an AC circuit, what resonance is, how much power is actually used, and how generators and transformers work.

## AC voltage and rms values

An AC source gives a voltage that varies as a sine wave, and the current through a resistor follows it.

:::formula Alternating voltage and current
$v=v_m\sin\omega t$;   $i=i_m\sin\omega t$ (in a resistor), with $\omega=2\pi\nu$

Indian mains: $\nu=50$ Hz
:::

Over a full cycle the current is positive half the time and negative half the time, so its average is zero. But the heating it produces is not zero: power $i^2R$ is always positive. So we describe AC by the steady DC current that would produce the same heating, the **root mean square** (rms) or effective value. The average of $\sin^2\omega t$ over a cycle is $\tfrac12$, so $\overline{i^2}=i_m^2/2$.

:::formula rms values
$I=I_\text{rms}=\dfrac{i_m}{\sqrt2}=0.707\,i_m$;   $V=V_\text{rms}=\dfrac{v_m}{\sqrt2}$

Average power in a resistor: $P=I^2R=VI$
:::

AC meters read rms values. "220 V mains" is the rms voltage; the peak is $220\sqrt2\approx311$ V.

**In one breath:** AC averages to zero, so we use the rms value $i_m/\sqrt2$, the DC equivalent for heating; meters and "220 V" are rms.

## Resistor, inductor and capacitor in AC

**Resistor.** $v=iR$ at every instant, so current and voltage are **in phase**: they peak together.

**Inductor.** A pure inductor opposes changes in current. With $v=v_m\sin\omega t$ applied, $L\frac{di}{dt}=v$, which gives $i=-\frac{v_m}{\omega L}\cos\omega t=i_m\sin(\omega t-\pi/2)$. The current **lags** the voltage by $\pi/2$ (a quarter cycle), and its size is set by the **inductive reactance** $X_L=\omega L$.

<figure class="fig">
<svg viewBox="0 0 400 158" role="img" aria-label="Voltage and current in a pure inductor: current lags by a quarter cycle" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M30,80L390,80"/><path d="M390,80L385.4,82L385.4,78Z" fill="currentColor" stroke="none"/><path d="M30,80L35.7,72.2L41.3,64.5L47,57.3L52.7,50.6L58.3,44.6L64,39.5L69.7,35.4L75.3,32.4L81,30.6L86.7,30L92.3,30.6L98,32.4L103.7,35.4L109.3,39.5L115,44.6L120.7,50.6L126.3,57.3L132,64.5L137.7,72.2L143.3,80L149,87.8L154.7,95.5L160.3,102.7L166,109.4L171.7,115.4L177.3,120.5L183,124.6L188.7,127.6L194.3,129.4L200,130L205.7,129.4L211.3,127.6L217,124.6L222.7,120.5L228.3,115.4L234,109.4L239.7,102.7L245.3,95.5L251,87.8L256.7,80L262.3,72.2L268,64.5L273.7,57.3L279.3,50.6L285,44.6L290.7,39.5L296.3,35.4L302,32.4L307.7,30.6L313.3,30L319,30.6L324.7,32.4L330.3,35.4L336,39.5L341.7,44.6L347.3,50.6L353,57.3L358.7,64.5L364.3,72.2L370,80" stroke="#C2571A" stroke-width="2"/><path d="M30,110L35.7,109.6L41.3,108.5L47,106.7L52.7,104.3L58.3,101.2L64,97.6L69.7,93.6L75.3,89.3L81,84.7L86.7,80L92.3,75.3L98,70.7L103.7,66.4L109.3,62.4L115,58.8L120.7,55.7L126.3,53.3L132,51.5L137.7,50.4L143.3,50L149,50.4L154.7,51.5L160.3,53.3L166,55.7L171.7,58.8L177.3,62.4L183,66.4L188.7,70.7L194.3,75.3L200,80L205.7,84.7L211.3,89.3L217,93.6L222.7,97.6L228.3,101.2L234,104.3L239.7,106.7L245.3,108.5L251,109.6L256.7,110L262.3,109.6L268,108.5L273.7,106.7L279.3,104.3L285,101.2L290.7,97.6L296.3,93.6L302,89.3L307.7,84.7L313.3,80L319,75.3L324.7,70.7L330.3,66.4L336,62.4L341.7,58.8L347.3,55.7L353,53.3L358.7,51.5L364.3,50.4L370,50" stroke="#E0B400" stroke-width="2"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="390" y="94" text-anchor="end" font-style="italic">ωt</text><text x="76" y="22" fill="#C2571A" font-style="italic">v</text><text x="126" y="42" fill="#E0B400" font-style="italic">i</text><text x="210" y="150" font-size="11">pure inductor: i lags v by π/2</text></g></svg>
<figcaption>In a pure inductor the current reaches its peak a quarter cycle after the voltage. In a pure capacitor it is the other way round: current leads by π/2.</figcaption>
</figure>

**Capacitor.** The capacitor's charge follows the voltage, $q=Cv$, and the current is $dq/dt=C\frac{dv}{dt}=\omega Cv_m\cos\omega t=i_m\sin(\omega t+\pi/2)$. The current **leads** the voltage by $\pi/2$, with **capacitive reactance** $X_C=1/\omega C$.

:::formula Reactance
$X_L=\omega L=2\pi\nu L$ (current lags $V$ by $\pi/2$)

$X_C=\dfrac{1}{\omega C}=\dfrac{1}{2\pi\nu C}$ (current leads $V$ by $\pi/2$)

Both in ohms; $i_m=\dfrac{v_m}{X}$
:::

$X_L$ grows with frequency: an inductor passes DC ($\omega=0$, $X_L=0$) freely and chokes high frequencies. $X_C$ falls with frequency: a capacitor blocks DC ($X_C=\infty$) and passes high frequencies easily.

In a pure inductor or a pure capacitor the average power over a cycle is zero: energy is stored for a quarter cycle and handed back in the next.

:::tip Who leads?
Remember "**ELI the ICE man**": in an inductor (L), E (voltage) comes before I; in a capacitor (C), I comes before E.
:::

**In one breath:** In R, current and voltage are in phase. In L the current lags by $\pi/2$ with $X_L=\omega L$; in C it leads by $\pi/2$ with $X_C=1/\omega C$. Pure L or C use no average power.

## Series LCR circuit and phasors

Connect a resistor, an inductor and a capacitor in series with an AC source. The same current flows through all three, but the voltages across them are out of step, so they cannot simply be added. We use **phasors**: rotating arrows whose lengths are the peak values and whose angles show the phase.

<figure class="fig">
<svg viewBox="0 0 320 210" role="img" aria-label="Phasor diagram of a series LCR circuit" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M60,150L290,150"/><path d="M290,150L285.4,152L285.4,148Z" fill="currentColor" stroke="none"/><path d="M60,150L210,150" stroke="#C2571A" stroke-width="2.4"/><path d="M210,150L204.5,152.4L204.5,147.6Z" fill="#C2571A" stroke="none"/><path d="M60,150L60,20" stroke="#C2571A" stroke-width="2"/><path d="M60,20L62.4,25.5L57.6,25.5Z" fill="#C2571A" stroke="none"/><path d="M66,150L66,200" stroke="#C2571A" stroke-width="2"/><path d="M66,200L63.6,194.5L68.4,194.5Z" fill="#C2571A" stroke="none"/><path d="M60,150L60,70" stroke="#E0B400" stroke-width="3"/><path d="M60,70L62.4,75.5L57.6,75.5Z" fill="#E0B400" stroke="none"/><path d="M60,150L210,70" stroke="#E0B400" stroke-width="2.4"/><path d="M210,70L206.3,74.7L204,70.4Z" fill="#E0B400" stroke="none"/><path d="M210,150L210,70" stroke-dasharray="4 3"/><path d="M60,70L210,70" stroke-dasharray="4 3"/><path d="M100,150 A40,40 0 0 0 95.3,131.2"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="295" y="154" text-anchor="start" font-style="italic">I</text><text x="210" y="166">V<tspan font-size="9" dy="3">R</tspan><tspan dy="-3">&#8203;</tspan> = IR</text><text x="54" y="30" text-anchor="end">V<tspan font-size="9" dy="3">L</tspan><tspan dy="-3">&#8203;</tspan></text><text x="72" y="196" text-anchor="start">V<tspan font-size="9" dy="3">C</tspan><tspan dy="-3">&#8203;</tspan></text><text x="54" y="74" text-anchor="end" font-size="11">V<tspan font-size="9" dy="3">L</tspan><tspan dy="-3">&#8203;</tspan> − V<tspan font-size="9" dy="3">C</tspan><tspan dy="-3">&#8203;</tspan></text><text x="216" y="66" text-anchor="start" font-style="italic" font-weight="bold">V</text><text x="108" y="142" text-anchor="start" font-style="italic">φ</text></g></svg>
<figcaption>Series LCR (here V_L > V_C): the same I flows through all three. V_R is in phase with I, V_L leads by 90°, V_C lags by 90°. The resultant V leads I by φ.</figcaption>
</figure>

Draw the current phasor along the x-axis. Then $V_R=IR$ lies along it, $V_L=IX_L$ points 90° ahead (up), and $V_C=IX_C$ points 90° behind (down). $V_L$ and $V_C$ are opposite, so they partly cancel, leaving $V_L-V_C$. The source voltage is the vector sum, by Pythagoras:

$V^2=V_R^2+(V_L-V_C)^2=I^2\left[R^2+(X_L-X_C)^2\right]$

:::formula Impedance of a series LCR circuit
$Z=\sqrt{R^2+(X_L-X_C)^2}$;   $I=\dfrac{V}{Z}$

Phase angle: $\tan\phi=\dfrac{X_L-X_C}{R}$ ($V$ leads $I$ if $X_L>X_C$, lags if $X_C>X_L$)
:::

:::skeleton Answer skeleton: impedance by phasors (3 marks)
Phasor diagram: $I$ reference, $V_R$ along $I$, $V_L$ ahead by 90°, $V_C$ behind by 90° [1]

$V=\sqrt{V_R^2+(V_L-V_C)^2}=I\sqrt{R^2+(X_L-X_C)^2}$ [1]

**$Z=\sqrt{R^2+(X_L-X_C)^2}$, $\tan\phi=\dfrac{X_L-X_C}{R}$** [1]
:::

**In one breath:** In series LCR the same current flows; $V_L$ and $V_C$ point opposite ways on the phasor diagram, so $Z=\sqrt{R^2+(X_L-X_C)^2}$ and $\tan\phi=(X_L-X_C)/R$.

## Resonance

$X_L$ rises with frequency and $X_C$ falls, so at one particular frequency they are equal. There they cancel, the impedance is just $R$ (its smallest value) and the current is largest. This is **resonance**.

:::formula Resonance in series LCR
$X_L=X_C\Rightarrow\omega_0=\dfrac{1}{\sqrt{LC}}$, $\nu_0=\dfrac{1}{2\pi\sqrt{LC}}$

At resonance $Z=R$, $I_\text{max}=V/R$, $\phi=0$ (current in phase with voltage)
:::

<figure class="fig">
<svg viewBox="0 0 390 150" role="img" aria-label="Current against angular frequency in a series LCR circuit for two resistances" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M30,135L360,135"/><path d="M360,135L355.4,137L355.4,133Z" fill="currentColor" stroke="none"/><path d="M30,135L30,15"/><path d="M30,15L32,19.6L28,19.6Z" fill="currentColor" stroke="none"/><path d="M46.5,133.2L51.5,132.6L56.4,132L61.4,131.5L66.3,130.8L71.2,130.2L76.2,129.5L81.1,128.8L86.1,128.1L91,127.3L96,126.5L100.9,125.5L105.9,124.5L110.8,123.5L115.8,122.3L120.7,120.9L125.7,119.4L130.6,117.7L135.6,115.8L140.5,113.6L145.5,110.9L150.4,107.8L155.4,104L160.3,99.3L165.3,93.4L170.2,85.9L175.2,76.1L180.1,63.5L185.1,48.3L190,33.6L195,27L200,33.2L204.9,46.5L209.8,60L214.8,71.1L219.7,79.8L224.7,86.6L229.7,92L234.6,96.2L239.5,99.7L244.5,102.6L249.5,105.1L254.4,107.2L259.4,108.9L264.3,110.5L269.2,111.9L274.2,113.1L279.1,114.2L284.1,115.1L289,116L294,116.8L299,117.5L303.9,118.2L308.8,118.8L313.8,119.4L318.7,119.9L323.7,120.4L328.7,120.8L333.6,121.2L338.5,121.6L343.5,122" stroke="#C2571A" stroke-width="2"/><path d="M46.5,132L51.5,131L56.4,130.1L61.4,129.1L66.3,128.1L71.2,127.1L76.2,126L81.1,124.9L86.1,123.7L91,122.4L96,121.1L100.9,119.7L105.9,118.2L110.8,116.6L115.8,114.9L120.7,113L125.7,111L130.6,108.8L135.6,106.4L140.5,103.8L145.5,101L150.4,98.1L155.4,94.9L160.3,91.5L165.3,88.1L170.2,84.8L175.2,81.6L180.1,78.9L185.1,76.8L190,75.4L195,75L200,75.4L204.9,76.6L209.8,78.3L214.8,80.4L219.7,82.7L224.7,85L229.7,87.4L234.6,89.7L239.5,91.8L244.5,93.9L249.5,95.8L254.4,97.5L259.4,99.1L264.3,100.6L269.2,102L274.2,103.3L279.1,104.5L284.1,105.6L289,106.7L294,107.6L299,108.5L303.9,109.4L308.8,110.1L313.8,110.9L318.7,111.6L323.7,112.2L328.7,112.8L333.6,113.4L338.5,114L343.5,114.5" stroke="#E0B400" stroke-width="2"/><path d="M195,135L195,27" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="360" y="148" text-anchor="end" font-style="italic">ω</text><text x="26" y="19" text-anchor="end" font-style="italic">I</text><text x="195" y="148" font-style="italic">ω₀</text><text x="223" y="35" text-anchor="start" fill="#C2571A" font-size="11">small R (sharp)</text><text x="265" y="90" text-anchor="start" font-size="11">large R</text></g></svg>
<figcaption>Current peaks at ω₀ = 1/√(LC). A smaller resistance gives a taller, sharper peak.</figcaption>
</figure>

The smaller the resistance, the taller and sharper the peak. Radio and TV tuners use this: turning the dial changes $C$ so that the circuit resonates with one station's frequency and responds strongly only to it. Resonance needs both $L$ and $C$; an RL or RC circuit has no resonance.

At resonance the voltages across $L$ and $C$ can each be much larger than the source voltage, though they cancel each other.

:::skeleton Worked example: resonant frequency
*Find the resonant frequency of a series circuit with $L=0.5$ H and $C=20$ µF.*

$\nu_0=\dfrac{1}{2\pi\sqrt{LC}}$ [½]

$=\dfrac{1}{2\pi\sqrt{0.5\times20\times10^{-6}}}=\dfrac{1}{2\pi\times3.16\times10^{-3}}\approx$ **50 Hz** [½]
:::

**In one breath:** At $\omega_0=1/\sqrt{LC}$ the reactances cancel, $Z=R$ and the current peaks; a small $R$ gives a sharp peak, which is how tuning works.

## Power in AC circuits and power factor

With voltage $v=v_m\sin\omega t$ and current $i=i_m\sin(\omega t-\phi)$, the average of their product over a cycle works out to:

:::formula Average power and power factor
$P=V_\text{rms}I_\text{rms}\cos\phi=I^2Z\cos\phi$

Power factor $\cos\phi=\dfrac{R}{Z}$
:::

- Pure resistor: $\phi=0$, $\cos\phi=1$, all the supplied power is used.
- Pure inductor or capacitor: $\phi=\pm90^\circ$, $\cos\phi=0$, no average power even though a current flows. Such a current is called **wattless**.
- At resonance in LCR: $\cos\phi=1$, maximum power.

The current can be split into two components: $I\cos\phi$ in phase with the voltage, which carries the power, and $I\sin\phi$ at 90° to it, the **wattless current**, which carries none.

Power companies want a power factor close to 1. A low power factor means a larger current (and larger $I^2R$ losses in the lines) for the same useful power, so capacitors are added in factories with many motors to bring $\cos\phi$ up.

:::skeleton Worked example: power factor
*A series circuit has $R=30$ Ω, $X_L=80$ Ω and $X_C=40$ Ω on a 200 V rms supply. Find the current, the power factor and the average power.*

$Z=\sqrt{30^2+(80-40)^2}=50$ Ω, so $I=\dfrac{200}{50}=$ **4 A** [1]

$\cos\phi=\dfrac{R}{Z}=\dfrac{30}{50}=$ **0.6** [½]

$P=VI\cos\phi=200\times4\times0.6=$ **480 W** (check: $I^2R=16\times30=480$ W) [½]
:::

:::tip Only the resistor uses power
Average power is always $I^2R$. Using $VI$ without the $\cos\phi$ gives the "apparent power", which is wrong unless the circuit is purely resistive.
:::

**In one breath:** Average power is $VI\cos\phi$ with $\cos\phi=R/Z$; pure L or C draws wattless current, and a power factor near 1 keeps line losses low.

## The AC generator

An AC generator turns mechanical energy into electrical energy by rotating a coil in a magnetic field.

<figure class="fig">
<svg viewBox="0 0 380 220" role="img" aria-label="AC generator: a coil rotating in a uniform magnetic field" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M30,40 L90,40 A70,70 0 0 0 90,170 L30,170 Z" stroke="#C2571A"/><path d="M350,40 L290,40 A70,70 0 0 1 290,170 L350,170 Z" stroke="#C2571A"/><path d="M140,75L240,55L240,150L140,170Z" stroke-width="2.2"/><path d="M190,112L190,112"/><path d="M190,30L190,195" stroke-dasharray="4 3"/><path d="M205,22 A15,6 0 1 1 175,22" stroke="#E0B400"/><path d="M205,22L203,17.4L207,17.4Z" fill="#E0B400" stroke="none"/><path d="M100,70L280,70" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M285,70L281.3,71.6L281.3,68.4Z" fill="currentColor" stroke="none"/><path d="M100,95L280,95" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M285,95L281.3,96.6L281.3,93.4Z" fill="currentColor" stroke="none"/><path d="M100,120L280,120" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M285,120L281.3,121.6L281.3,118.4Z" fill="currentColor" stroke="none"/><path d="M100,145L280,145" stroke-width="0.8" stroke-dasharray="4 3"/><path d="M285,145L281.3,146.6L281.3,143.4Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="55" y="110" font-weight="bold">N</text><text x="325" y="110" font-weight="bold">S</text><text x="198" y="192" text-anchor="start" font-size="11">axis</text><text x="214" y="18" text-anchor="start" font-style="italic">ω</text><text x="190" y="214" font-size="11">coil turning in B: Φ = NBA cos ωt</text></g></svg>
<figcaption>A coil of N turns and area A turns at ω in field B. The flux through it changes as cos ωt, so the induced emf is NBAω sin ωt. Slip rings and brushes take the AC out.</figcaption>
</figure>

A coil of $N$ turns and area $A$ spins at angular speed $\omega$ in a uniform field $B$. If the normal to the coil makes angle $\theta=\omega t$ with the field, the flux linkage is $NBA\cos\omega t$. Faraday's law gives the emf:

$\varepsilon=-\dfrac{d}{dt}(NBA\cos\omega t)=NBA\omega\sin\omega t$

:::formula AC generator
$\varepsilon=NBA\omega\sin\omega t=\varepsilon_0\sin\omega t$, peak $\varepsilon_0=NBA\omega$
:::

The emf is greatest when the plane of the coil is parallel to the field (flux zero but changing fastest) and zero when the plane is perpendicular (flux greatest but momentarily not changing). The current is taken out through slip rings and brushes.

:::skeleton Worked example: peak emf
*A coil of 100 turns and area 0.1 m² rotates at 50 revolutions per second in a field of 0.01 T. Find the peak emf.*

$\varepsilon_0=NBA\omega$, $\omega=2\pi\times50=314$ rad s⁻¹ [½]

$\varepsilon_0=100\times0.01\times0.1\times314=$ **31.4 V** [½]
:::

**In one breath:** A coil turning at $\omega$ in field $B$ has flux $NBA\cos\omega t$, so emf $NBA\omega\sin\omega t$: peak when the coil's plane lies along the field.

## The transformer

A transformer changes an AC voltage up or down using mutual induction. Two coils, the primary ($N_p$ turns) and the secondary ($N_s$ turns), are wound on a common laminated soft-iron core.

<figure class="fig">
<svg viewBox="0 0 380 200" role="img" aria-label="Step-up transformer: primary and secondary coils on a laminated core" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M80,30L300,30L300,170L80,170Z" stroke-width="3"/><path d="M120,65L260,65L260,135L120,135Z" stroke-width="2"/><ellipse cx="100" cy="50" rx="22" ry="6" fill="none" stroke="#C2571A"/><ellipse cx="100" cy="72" rx="22" ry="6" fill="none" stroke="#C2571A"/><ellipse cx="100" cy="94" rx="22" ry="6" fill="none" stroke="#C2571A"/><ellipse cx="100" cy="116" rx="22" ry="6" fill="none" stroke="#C2571A"/><ellipse cx="100" cy="138" rx="22" ry="6" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="42" rx="22" ry="5" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="57" rx="22" ry="5" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="72" rx="22" ry="5" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="87" rx="22" ry="5" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="102" rx="22" ry="5" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="117" rx="22" ry="5" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="132" rx="22" ry="5" fill="none" stroke="#C2571A"/><ellipse cx="280" cy="147" rx="22" ry="5" fill="none" stroke="#C2571A"/><path d="M78,50L40,50"/><path d="M78,138L40,138"/><path d="M302,42L340,42"/><path d="M302,147L340,147"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="100" y="192" font-size="11">primary, N<tspan font-size="9" dy="3">p</tspan><tspan dy="-3">&#8203;</tspan></text><text x="280" y="192" font-size="11">secondary, N<tspan font-size="9" dy="3">s</tspan><tspan dy="-3">&#8203;</tspan></text><text x="190" y="104" font-size="11">laminated soft-iron core</text></g></svg>
<figcaption>Step-up transformer (N_s > N_p). The changing flux of the primary threads the secondary through the soft-iron core; the secondary emf is N_s/N_p times the primary voltage.</figcaption>
</figure>

An alternating current in the primary makes an alternating flux in the core, and nearly all of it threads the secondary. Each turn of either coil has the same emf $d\Phi/dt$, so the voltages are in the ratio of the turns. For an ideal transformer (no losses) the power in equals the power out, so the currents are in the inverse ratio.

:::formula Ideal transformer
$\dfrac{V_s}{V_p}=\dfrac{N_s}{N_p}=\dfrac{I_p}{I_s}$

Step-up: $N_s>N_p$ (voltage up, current down). Step-down: $N_s<N_p$.
:::

A transformer works only on AC: a steady current gives a steady flux and no induced emf.

Real transformers lose some energy:

- **Flux leakage:** not all the primary flux links the secondary. Reduced by winding the coils one over the other.
- **Resistance of the windings (copper loss):** $I^2R$ heating. Reduced by using thick copper wire.
- **Eddy currents in the core:** reduced by making the core of thin insulated sheets (laminations).
- **Hysteresis:** the core is magnetised back and forth every cycle. Reduced by using soft iron.

Power is sent over long distances at very high voltage, stepped up at the power station and stepped down near homes. For the same power, high voltage means low current, so the $I^2R$ loss in the lines is small.

:::skeleton Worked example: step-down transformer
*A transformer steps 2200 V down to 220 V and delivers 4.4 kW. Find the turns ratio and the currents (assume it is ideal).*

$\dfrac{N_s}{N_p}=\dfrac{V_s}{V_p}=\dfrac{220}{2200}=$ **1 : 10** [½]

$I_s=\dfrac{P}{V_s}=\dfrac{4400}{220}=$ **20 A**;   $I_p=\dfrac{4400}{2200}=$ **2 A** [½]
:::

**In one breath:** A transformer uses mutual induction on a common core: $V_s/V_p=N_s/N_p=I_p/I_s$, AC only; laminations, soft iron and thick wire cut its losses, and high-voltage transmission cuts line losses.
