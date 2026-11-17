# Ch 3 · Current Electricity

Chapters 1 and 2 dealt with charges at rest. Now the charges move. This chapter explains what an electric current really is inside a wire, why a wire resists it, what a cell does to keep it going, and the two rules (Kirchhoff's) that let you solve any circuit made of cells and resistors.

## Electric current and drift velocity

Current is the rate at which charge flows through a cross-section. If a net charge $\Delta q$ crosses in time $\Delta t$:

:::formula Electric current
$I=\dfrac{\Delta q}{\Delta t}$ (or $I=\dfrac{dq}{dt}$); unit ampere, 1 A = 1 C s⁻¹

Direction: that of positive charge flow, so opposite to the electrons' motion. Current is a scalar.
:::

Inside a copper wire there are about $10^{29}$ free electrons per cubic metre, rushing about at random with speeds near $10^5$ m s⁻¹. With no battery, their random velocities average to zero and no current flows. Apply a voltage and a field $\vec E$ appears along the wire. Each electron is now accelerated opposite to $\vec E$ at $a=eE/m$, but only until it collides with a vibrating ion and loses its extra velocity. On average it gains velocity for the **relaxation time** $\tau$ between collisions (around $10^{-14}$ s), so the whole electron cloud picks up a small average velocity, the **drift velocity**.

:::formula Drift velocity and mobility
$\vec v_d=-\dfrac{e\vec E}{m}\tau$, so $v_d=\dfrac{eE\tau}{m}$ (opposite to $\vec E$ for electrons)

Mobility $\mu=\dfrac{v_d}{E}=\dfrac{e\tau}{m}$; unit m² V⁻¹ s⁻¹
:::

Now count how much charge crosses a section. In time $\Delta t$, every free electron within a length $v_d\Delta t$ of the section gets across.

```ng-figure
id: ch03-drift
title: Drift of electrons through a wire
svg:
<svg viewBox="0 0 340 130" role="img" aria-label="Electrons drifting through a conductor of cross-section A" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="60" cy="65" rx="12" ry="30" fill="none"/><path d="M60,35L300,35"/><path d="M60,95L300,95"/><path d="M300,35 A12,30 0 0 1 300,95"/><ellipse class="u" cx="170" cy="65" rx="12" ry="30" fill="none"/><ellipse class="u" cx="250" cy="65" rx="12" ry="30" fill="none" stroke-dasharray="4 3"/><circle cx="195" cy="50" r="2.4" fill="currentColor"/><circle cx="215" cy="75" r="2.4" fill="currentColor"/><circle cx="235" cy="58" r="2.4" fill="currentColor"/><circle cx="205" cy="85" r="2.4" fill="currentColor"/><circle cx="225" cy="45" r="2.4" fill="currentColor"/><circle cx="240" cy="80" r="2.4" fill="currentColor"/><path d="M150,65L120,65"/><path d="M120,65L124.6,63L124.6,67Z" fill="currentColor" stroke="none"/><path d="M170,112L250,112"/><path d="M250,112L246.3,113.6L246.3,110.4Z" fill="currentColor" stroke="none"/><path d="M170,112L173.7,110.4L173.7,113.6Z" fill="currentColor" stroke="none"/><path d="M260,18L310,18" stroke="#E0B400" stroke-width="2"/><path d="M310,18L304.5,20.4L304.5,15.6Z" fill="#E0B400" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="135" y="58" font-size="11">e⁻ drift</text><text x="210" y="126" font-style="italic">v<tspan font-size="8" dy="3">d</tspan><tspan dy="-3"> Δt</tspan></text><text x="170" y="27">area A</text><text x="315" y="22" text-anchor="start" font-style="italic">E, I</text></g></svg>
caption: In time Δt every free electron within a length $v_{d}$ Δt of the shaded section crosses it. Electrons drift opposite to E; conventional current I is along E.
part: 170, 65 | Cross-section A | Count the electrons crossing it in time Δt.
part: 210, 112 | Length $v_{d}$ Δt | Every electron within it crosses the section in Δt.
part: 215, 75 | Free electrons | n per m³; they drift opposite to E.
part: 290, 18 | Field and current | Conventional current flows along E.
```

That cylinder has volume $Av_d\Delta t$ and holds $nAv_d\Delta t$ electrons, so the charge crossing is $neAv_d\Delta t$.

:::formula Current and drift velocity
$I=neAv_d$; current density $j=\dfrac{I}{A}=nev_d$
:::

Drift speeds are tiny, about $10^{-4}$ m s⁻¹, so an electron takes hours to crawl a metre. Yet a bulb lights the instant you press the switch, because the field is set up along the whole wire almost at the speed of light and all the electrons start drifting together.

:::skeleton Worked example: drift speed
*A copper wire of cross-section $2.0\times10^{-6}$ m² carries 3.4 A; $n=8.5\times10^{28}$ m⁻³. Find the drift speed.*

$v_d=\dfrac{I}{neA}$ [½]

$=\dfrac{3.4}{8.5\times10^{28}\times1.6\times10^{-19}\times2\times10^{-6}}=$ **$1.25\times10^{-4}$ m s⁻¹** [½]
:::

```ng-numerical
id: drift-speed
title: Drift speed with fresh numbers
question: A copper wire of cross-section {{A}} mm² carries {{I}} A. Copper has $8.5\times10^{28}$ free electrons per m³. Find the drift speed.
var: A | 1 | 5 | 0.5
var: I | 1 | 10 | 1
answer: I/(8.5e28*1.6e-19*A*1e-6)*1000
unit: mm/s
step: $v_d=\dfrac{I}{neA}=\dfrac{ {{I}} }{8.5\times10^{28}\times1.6\times10^{-19}\times{{A}}\times10^{-6}}$ m/s
step: $v_d=$ **{{I/(8.5e28*1.6e-19*A*1e-6)*1000}} mm/s**: tiny, as expected
```

```ng-draw
id: draw-drift
title: Draw the figure for $I=neAv_d$
svg: ref: notes#ch03-drift
time: 2
```

**In one breath:** A field makes free electrons drift slowly against it, $v_d=eE\tau/m$; the current is $I=neAv_d$, and the signal travels fast even though the electrons don't.

## Ohm's law, resistance and resistivity

Combine the two results above: $I=neAv_d=neA\dfrac{eE\tau}{m}$. Along a wire of length $l$ the field is $E=V/l$, so

$I=\dfrac{ne^2\tau A}{ml}V$, which is **Ohm's law**: $V=IR$, with $R=\dfrac{m}{ne^2\tau}\dfrac{l}{A}$.

So Ohm's law follows from the drift picture, and the resistance splits into a part set by the material and a part set by the shape.

:::formula Resistance and resistivity
$V=IR$;   $R=\rho\dfrac{l}{A}$;   $\rho=\dfrac{m}{ne^2\tau}$ (Ω m);   conductivity $\sigma=\dfrac1\rho$

Vector form: $\vec j=\sigma\vec E$
:::

Resistivity depends only on the material (through $n$ and $\tau$) and its temperature, not on the length or thickness of the sample. Metals have tiny resistivities ($10^{-8}$ Ω m), insulators enormous ones, and semiconductors sit in between.

Ohm's law is not universal. It fails when the $V$–$I$ graph is not a straight line through the origin (a bulb filament as it heats), when the current depends on the direction of $V$ (a diode), or when the same current occurs at more than one voltage (GaAs).

:::tip Stretching a wire
If a wire is stretched to $n$ times its length, its volume stays the same, so $A$ drops to $A/n$ and $R$ becomes $n^2R$. Resistivity does not change at all.
:::

```ng-mnemonic
id: virat
title: Ohm's law
trick: **"V = IR — think VIRat"**
meaning: $V=IR$, with $R=\rho\dfrac lA$ and $\rho=\dfrac{m}{ne^2\tau}$.
prompt: Write Ohm's law and the expression for resistivity from the drift model.
```

```ng-derive
id: derive-resistivity
title: Derive ρ = m/ne²τ from drift velocity
prompt: Starting from the drift velocity of free electrons, show that the resistivity of a conductor is $\rho=\dfrac{m}{ne^2\tau}$.
time: 5
check: $a=\dfrac{eE}{m}$, so $v_d=\dfrac{eE\tau}{m}$ | 1
check: $I=neAv_d=\dfrac{ne^2A\tau}{m}E$ with $E=V/l$ | 0.5
check: $R=\dfrac{V}{I}=\dfrac{m}{ne^2\tau}\dfrac{l}{A}$ | 0.5
check: Compare with $R=\rho l/A$: $\rho=\dfrac{m}{ne^2\tau}$ | 0.5
check: Metals: $\tau$ falls as $T$ rises, so $\rho$ rises | 0.5
```

**In one breath:** Ohm's law $V=IR$ comes out of the drift model with $R=\rho l/A$ and $\rho=m/ne^2\tau$; resistivity belongs to the material and its temperature, not to the shape.

## How resistivity changes with temperature

For most metals resistivity rises steadily with temperature over a wide range.

:::formula Temperature dependence
$\rho_T=\rho_0\left[1+\alpha(T-T_0)\right]$, $\alpha$ = temperature coefficient of resistivity (K⁻¹)
:::

```ng-figure
id: ch03-rho-t
title: Resistivity against temperature
svg:
<svg viewBox="0 0 400 135" role="img" aria-label="Resistivity against temperature for a metal and a semiconductor" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M30,120L190,120"/><path d="M190,120L185.4,122L185.4,118Z" fill="currentColor" stroke="none"/><path d="M30,120L30,20"/><path d="M30,20L32,24.6L28,24.6Z" fill="currentColor" stroke="none"/><path class="u" d="M30,102L36,99.7L42.1,97.3L48.1,94.9L54.2,92.4L60.2,89.9L66.2,87.3L72.3,84.7L78.3,82L84.4,79.3L90.4,76.5L96.5,73.6L102.5,70.8L108.5,67.8L114.6,64.8L120.6,61.8L126.7,58.7L132.7,55.5L138.8,52.3L144.8,49.1L150.8,45.8L156.9,42.4L162.9,39L169,35.5L175,32" stroke-width="2"/><path d="M225,120L385,120"/><path d="M385,120L380.4,122L380.4,118Z" fill="currentColor" stroke="none"/><path d="M225,120L225,20"/><path d="M225,20L227,24.6L223,24.6Z" fill="currentColor" stroke="none"/><path class="u" d="M225,27L231,40L237.1,51.1L243.1,60.4L249.2,68.4L255.2,75.1L261.2,80.7L267.3,85.5L273.3,89.6L279.4,93L285.4,95.9L291.5,98.4L297.5,100.5L303.5,102.3L309.6,103.8L315.6,105L321.7,106.1L327.7,107L333.8,107.8L339.8,108.4L345.8,109L351.9,109.4L357.9,109.8L364,110.2L370,110.4" stroke-width="2"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="190" y="133" text-anchor="end" font-style="italic">T</text><text x="26" y="24" text-anchor="end" font-style="italic">ρ</text><text x="100" y="45" text-anchor="start" font-size="11">metal</text><text x="385" y="133" text-anchor="end" font-style="italic">T</text><text x="221" y="24" text-anchor="end" font-style="italic">ρ</text><text x="285" y="80" text-anchor="start" font-size="11">semiconductor</text></g></svg>
caption: Metal: ρ rises with T (shorter relaxation time) and stays non-zero near 0 K. Semiconductor: ρ falls steeply because the number of carriers rises.
part: 102, 71 | Metal | ρ rises with T because the relaxation time falls.
part: 254, 74 | Semiconductor | ρ falls steeply because the number of carriers rises.
```

The reason is in $\rho=m/ne^2\tau$. In a metal $n$ hardly changes with temperature, but the ions vibrate more strongly, collisions become more frequent and $\tau$ falls, so $\rho$ rises. In a semiconductor $\tau$ also falls, but far more carriers are freed as temperature rises, so $n$ increases sharply and $\rho$ falls: semiconductors have a negative temperature coefficient.

Alloys such as nichrome, manganin and constantan have very small $\alpha$, so their resistance barely changes with temperature. That makes manganin and constantan good for standard resistors. Nichrome is used for heater elements because of its high resistivity and its high melting point.

```ng-graph
id: rho-temperature
title: Resistivity of a metal against temperature
x: T (°C) | 0 | 500
y: ρ (×10⁻⁸ Ω m) | 0 | 6
curve: ρ = ρ₀[1 + α(T − 0)] | r0*(1 + a*0.001*x)
slider: r0 | $\rho_0$ at 0 °C (×10⁻⁸ Ω m) | 1 | 3 | 0.1 | 1.7
slider: a | $\alpha$ (×10⁻³ K⁻¹) | 0.1 | 6 | 0.1 | 4.3
preset: Copper | r0=1.7, a=4.3
preset: Nichrome-like | r0=3, a=0.4
note: A small α (nichrome, manganin) gives an almost flat line: resistance hardly changes with temperature.
```

**In one breath:** Metals: $\tau$ falls with temperature, so $\rho$ rises. Semiconductors: $n$ rises much faster, so $\rho$ falls. Low-$\alpha$ alloys make stable standard resistors.

## Power and resistors in combination

When charge $q$ falls through potential difference $V$ it gives up energy $qV$. In a resistor this becomes heat (Joule heating).

:::formula Electrical power
$P=VI=I^2R=\dfrac{V^2}{R}$; heat in time $t$: $H=I^2Rt$
:::

Resistors combine the opposite way to capacitors:

:::formula Resistors in series and parallel
Series: $R=R_1+R_2+\dots$ (same current)

Parallel: $\dfrac1R=\dfrac1{R_1}+\dfrac1{R_2}+\dots$ (same voltage)
:::

Power is transmitted at high voltage because the loss in the line is $I^2R$, and for the same power $P=VI$ a higher voltage means a smaller current.

```ng-fill
id: series-parallel-resistors
title: Series vs parallel resistors
cols: Feature | Series | Parallel
row: What is common | [[current]] | [[voltage]]
row: Equivalent resistance | $R_1+R_2+\dots$ | [[$\frac1R=\frac1{R_1}+\frac1{R_2}+\dots$]]
row: Equivalent compared with each | [[larger than the largest]] | smaller than the smallest
```

**In one breath:** Power $P=VI=I^2R=V^2/R$; series resistors add, parallel resistors add as reciprocals.

## EMF, internal resistance and cells

A cell keeps a current going by pushing charge "uphill" inside itself, from its negative to its positive terminal, using chemical energy. The **emf** $\varepsilon$ is the potential difference between its terminals when no current flows (open circuit). But a real cell's electrolyte has resistance too, its **internal resistance** $r$.

```ng-figure
id: ch03-cell
title: Cell with internal resistance
svg:
<svg viewBox="0 0 300 118" role="img" aria-label="Cell of emf epsilon and internal resistance r driving current through R" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M48,12L172,12L172,50L48,50Z" stroke-dasharray="4 3"/><g transform="translate(82.5,30) rotate(0)"><path d="M-22.5,0L-3,0"/><path d="M-3,-5L-3,5" stroke-width="2.6"/><path d="M3,-11L3,11"/><path d="M3,0L22.5,0"/></g><g transform="translate(132.5,30) rotate(0)"><path d="M-27.5,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L27.5,0"/></g><path d="M160,30L250,30"/><path d="M250,30L250,105"/><g transform="translate(155,105) rotate(180)"><path d="M-95,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L95,0"/></g><path d="M60,105L60,30"/><path d="M250,60L250,75" stroke="#E0B400" stroke-width="2"/><path d="M250,75L247.6,69.5L252.4,69.5Z" fill="#E0B400" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="110" y="64" font-size="11">cell (ε, r)</text><text x="82" y="20" font-style="italic">ε</text><text x="132" y="22" font-style="italic">r</text><text x="155" y="98" font-style="italic">R</text><text x="258" y="72" text-anchor="start" font-style="italic">I</text></g></svg>
caption: Inside the cell some voltage, Ir, is used up by the internal resistance, so the terminal voltage is V = ε − Ir.
part: 82, 30 | emf ε | Open-circuit voltage of the cell.
part: 132, 30 | Internal resistance r | Uses up a voltage Ir inside the cell.
part: 155, 105 | External resistor R | I = ε/(R + r).
part: 250, 68 | Current I | Terminal voltage V = ε − Ir.
```

With an external resistor $R$, the total resistance is $R+r$. Part of the emf is used up driving current through $r$, so the voltage at the terminals is less than $\varepsilon$.

:::formula Terminal voltage
$I=\dfrac{\varepsilon}{R+r}$;   discharging: $V=\varepsilon-Ir$;   charging: $V=\varepsilon+Ir$

$r=R\left(\dfrac{\varepsilon}{V}-1\right)$
:::

The largest current a cell can give is $\varepsilon/r$, when its terminals are shorted. A car battery has a very small $r$, so it can deliver the large current a starter motor needs.

Cells can be grouped. In series the emfs and internal resistances both add. In parallel, two cells give an equivalent emf weighted by the other cell's resistance.

:::formula Combination of cells
Series: $\varepsilon_\text{eq}=\varepsilon_1+\varepsilon_2$, $r_\text{eq}=r_1+r_2$ (subtract an emf that is reversed)

Parallel: $\varepsilon_\text{eq}=\dfrac{\varepsilon_1r_2+\varepsilon_2r_1}{r_1+r_2}$, $\dfrac1{r_\text{eq}}=\dfrac1{r_1}+\dfrac1{r_2}$
:::

:::skeleton Worked example: cells in parallel
*Cells of 1.5 V (1 Ω) and 2.0 V (2 Ω) are joined in parallel, positive to positive. Find the equivalent emf and internal resistance.*

$\varepsilon_\text{eq}=\dfrac{\varepsilon_1r_2+\varepsilon_2r_1}{r_1+r_2}$, $r_\text{eq}=\dfrac{r_1r_2}{r_1+r_2}$ [1]

$\varepsilon_\text{eq}=\dfrac{1.5\times2+2\times1}{3}=$ **1.67 V** [½];   $r_\text{eq}=$ **0.67 Ω** [½]
:::

:::tip emf is not a force
Despite the name, emf is a potential difference (in volts), not a force. And the terminal voltage equals the emf only when no current is drawn.
:::

```ng-graph
id: terminal-voltage
title: Terminal voltage falls as you draw more current
x: I (A) | 0 | 5
y: V (volts) | 0 | 12
curve: V = ε − Ir | E0 - r*x
slider: E0 | $\varepsilon$ (V) | 1 | 12 | 0.5 | 6
slider: r | $r$ (Ω) | 0.1 | 3 | 0.1 | 1
note: The line cuts the V-axis at $\varepsilon$ (no current) and its slope is $-r$.
```

```ng-graph
id: power-in-load
title: Power delivered to a load resistor
x: R (Ω) | 0 | 10
y: P (W) | 0 | 40
curve: P = ε²R/(R + r)² | E0^2*x/(x + r)^2
slider: E0 | $\varepsilon$ (V) | 2 | 12 | 1 | 6
slider: r | $r$ (Ω) | 0.5 | 4 | 0.5 | 1
note: The power peaks when $R=r$; that is why matching the load to the source matters.
```

```ng-numerical
id: cells-parallel
title: Two cells in parallel
question: Cells of emf {{E1}} V (internal resistance {{r1}} Ω) and {{E2}} V (internal resistance {{r2}} Ω) are joined in parallel, positive to positive. Find the emf of the equivalent cell.
var: E1 | 1 | 3 | 0.5
var: E2 | 1 | 3 | 0.5
var: r1 | 1 | 4 | 1
var: r2 | 1 | 4 | 1
answer: (E1*r2 + E2*r1)/(r1 + r2)
unit: V
dp: 2
step: $\varepsilon_\text{eq}=\dfrac{\varepsilon_1r_2+\varepsilon_2r_1}{r_1+r_2}=\dfrac{ {{E1}}\times{{r2}}+{{E2}}\times{{r1}} }{ {{r1}}+{{r2}} }$
step: $\varepsilon_\text{eq}=$ **{{(E1*r2 + E2*r1)/(r1 + r2):2}} V**, $r_\text{eq}={{r1*r2/(r1 + r2):2}}$ Ω
```

```ng-compare
id: emf-vs-terminal
title: emf vs terminal voltage
cols: emf (ε) | Terminal voltage (V)
row: Meaning | p.d. across the terminals when no current flows | p.d. across the terminals when current flows
row: Depends on the external circuit | no | yes: $V=\varepsilon-Ir$
row: Comparison | the larger (when discharging) | less than ε while discharging
```

**In one breath:** A cell's emf is its open-circuit voltage; with current flowing the terminal voltage drops to $\varepsilon-Ir$. Series cells add emfs and resistances; parallel cells average emfs weighted by resistance.

## Kirchhoff's rules

Series and parallel formulas are not enough for circuits with several loops and several cells. Kirchhoff's two rules work for any circuit.

**Junction rule.** At any junction, the total current entering equals the total current leaving. Charge cannot pile up at a point in a steady current: this is conservation of charge.

**Loop rule.** Round any closed loop, the algebraic sum of the changes in potential is zero. A charge that goes round and comes back has the same potential energy it started with: this is conservation of energy.

Sign convention for the loop rule: going through a resistor in the direction of the current, the potential falls by $IR$ (write $-IR$); going through a cell from $-$ to $+$, it rises by $\varepsilon$ (write $+\varepsilon$).

```ng-figure
id: ch03-kirchhoff
title: Two-loop circuit for Kirchhoff
svg:
<svg viewBox="0 0 300 188" role="img" aria-label="Two-loop circuit with 12 volt and 6 volt cells" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M50,30L250,30"/><path d="M50,168L250,168"/><path d="M50,168L50,145"/><g transform="translate(50,130) rotate(-90)"><path d="M-15,0L-3,0"/><path d="M-3,-5L-3,5" stroke-width="2.6"/><path d="M3,-11L3,11"/><path d="M3,0L15,0"/></g><path d="M50,115L50,100"/><g transform="translate(50,77.5) rotate(-90)"><path d="M-22.5,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L22.5,0"/></g><path d="M50,55L50,30"/><g transform="translate(150,99) rotate(90)"><path d="M-69,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L69,0"/></g><path d="M250,30L250,50"/><g transform="translate(250,72.5) rotate(90)"><path d="M-22.5,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L22.5,0"/></g><path d="M250,95L250,115"/><g transform="translate(250,130) rotate(-90)"><path d="M-15,0L-3,0"/><path d="M-3,-5L-3,5" stroke-width="2.6"/><path d="M3,-11L3,11"/><path d="M3,0L15,0"/></g><path d="M250,145L250,168"/><path d="M68,120L68,98" stroke="#E0B400" stroke-width="2"/><path d="M68,98L70.4,103.5L65.6,103.5Z" fill="#E0B400" stroke="none"/><path d="M132,60L132,82" stroke="#E0B400" stroke-width="2"/><path d="M132,82L129.6,76.5L134.4,76.5Z" fill="#E0B400" stroke="none"/><path d="M232,120L232,98" stroke="#E0B400" stroke-width="2"/><path d="M232,98L234.4,103.5L229.6,103.5Z" fill="#E0B400" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="38" y="134" text-anchor="end">12 V</text><text x="38" y="81" text-anchor="end">2 Ω</text><text x="162" y="103" text-anchor="start">4 Ω</text><text x="262" y="76" text-anchor="start">2 Ω</text><text x="262" y="134" text-anchor="start">6 V</text><text x="150" y="22">A</text><text x="150" y="182">B</text><text x="74" y="112" text-anchor="start">I₁</text><text x="127" y="72" text-anchor="end">I₂</text><text x="227" y="112" text-anchor="end">I₃</text></g></svg>
caption: Both cells have their positive terminal (long plate) towards junction A. Current directions are guesses; a negative answer just means the real current is the other way.
part: 50, 130 | 12 V cell | Positive terminal towards junction A.
part: 150, 99 | 4 Ω middle branch | Carries I₂ = I₁ + I₃.
part: 250, 130 | 6 V cell | The answer shows it is being charged.
part: 150, 30 | Junction A | Currents in = currents out.
```

:::skeleton Worked example: a two-loop circuit
*Use the circuit in the figure (12 V with 2 Ω on the left, 4 Ω in the middle, 6 V with 2 Ω on the right). Find the current in each branch.*

Junction A: $I_2=I_1+I_3$ [½]

Left loop: $12-2I_1-4I_2=0$; right loop: $6-2I_3-4I_2=0$ [1]

Solving: **$I_1=2.4$ A, $I_2=1.8$ A, $I_3=-0.6$ A** [1]

$I_3$ is negative, so 0.6 A actually flows down through the 6 V cell: that cell is being charged [½]
:::

:::tip A negative current is not an error
Guess any direction for each current. If the answer comes out negative, the current simply flows the other way; don't go back and change your equations.
:::

```ng-steps
id: kirchhoff-method
title: Solving any circuit with Kirchhoff's rules
step: **Mark a current** in every branch with a guessed direction.
step: **Junction rule** at the junctions: currents in = currents out. This cuts down the unknowns.
step: **Loop rule** for each independent loop: along the current through a resistor write $-IR$; through a cell from − to + write $+\varepsilon$.
step: **Solve** the equations together.
step: **Read the signs**: a negative current just flows opposite to your guess. Never redraw and start again.
```

```ng-mnemonic
id: kirchhoff-hooks
title: What each Kirchhoff rule conserves
trick: **"Junction pe charge, loop pe energy"**
meaning: **Junction rule** = conservation of **charge**: no charge piles up at a point.
meaning: **Loop rule** = conservation of **energy**: back at the start, back to the same potential.
prompt: Which conservation law does each of Kirchhoff's rules express?
```

**In one breath:** Junction rule (charge conservation): currents in equal currents out. Loop rule (energy conservation): potential changes round a loop add to zero. Guess directions and let the signs decide.

## The Wheatstone bridge

Four resistors $P$, $Q$, $R$, $S$ form a diamond, with a cell across one diagonal and a galvanometer across the other.

```ng-figure
id: ch03-wheatstone
title: Wheatstone bridge
svg:
<svg viewBox="0 0 300 208" role="img" aria-label="Wheatstone bridge with resistances P, Q, R, S and galvanometer G" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(100,60) rotate(-35)"><path d="M-61,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L61,0"/></g><g transform="translate(200,60) rotate(35)"><path d="M-61,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L61,0"/></g><g transform="translate(100,130) rotate(35)"><path d="M-61,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L61,0"/></g><g transform="translate(200,130) rotate(-35)"><path d="M-61,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L61,0"/></g><g transform="translate(150,95) rotate(90)"><path d="M-70,0L-10,0"/><circle cx="0" cy="0" r="10"/><path d="M10,0L70,0"/></g><path d="M50,95L18,95"/><path d="M18,95L18,192"/><path d="M18,192L60,192"/><g transform="translate(77.5,192) rotate(0)"><path d="M-17.5,0L-3,0"/><path d="M-3,-5L-3,5" stroke-width="2.6"/><path d="M3,-11L3,11"/><path d="M3,0L17.5,0"/></g><path d="M95,192L282,192"/><path d="M282,192L282,95"/><path d="M282,95L250,95"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="150" y="99" font-size="11">G</text><text x="42" y="88" text-anchor="end">A</text><text x="150" y="16">B</text><text x="258" y="88" text-anchor="start">C</text><text x="160" y="178" text-anchor="start">D</text><text x="88" y="52" text-anchor="end" font-style="italic">P</text><text x="212" y="52" text-anchor="start" font-style="italic">Q</text><text x="88" y="144" text-anchor="end" font-style="italic">R</text><text x="212" y="144" text-anchor="start" font-style="italic">S</text></g></svg>
caption: Wheatstone bridge: P and Q on the upper side, R and S on the lower side, galvanometer between B and D, cell across A and C.
part: 100, 60 | P (arm AB) | Balance: P/Q = R/S.
part: 200, 60 | Q (arm BC) | Same current as P when balanced.
part: 100, 130 | R (arm AD) | Same current as S when balanced.
part: 200, 130 | S (arm DC) | Unknown resistance S = RQ/P.
part: 150, 95 | Galvanometer G | Reads zero at balance: B and D at the same potential.
```

The bridge is **balanced** when the galvanometer shows no current. Then B and D are at the same potential, the current $I_1$ through $P$ also flows through $Q$, and $I_2$ through $R$ also flows through $S$.

:::skeleton Answer skeleton: balance condition (3 marks)
Diagram with $P$ (AB), $Q$ (BC), $R$ (AD), $S$ (DC), G across BD, cell across AC [½]

Balanced: $I_g=0$, so $I_1$ flows through $P$ and $Q$, $I_2$ through $R$ and $S$ [½]

Loop ABDA: $-I_1P+I_2R=0$; loop BCDB: $-I_1Q+I_2S=0$ [1]

Divide: **$\dfrac PQ=\dfrac RS$** [1]
:::

:::formula Wheatstone bridge balance
$\dfrac{P}{Q}=\dfrac{R}{S}$, so an unknown resistance $S=R\dfrac{Q}{P}$
:::

The balance condition does not involve the cell or the galvanometer resistance, which is why the bridge measures resistance accurately. The metre bridge used in the practical lab is a Wheatstone bridge in which a uniform wire supplies the ratio $P/Q=l/(100-l)$.

```ng-numerical
id: wheatstone-unknown
title: Balancing a Wheatstone bridge
question: A Wheatstone bridge is balanced with $P={{P}}\ \Omega$, $Q={{Q}}\ \Omega$ and $R={{R}}\ \Omega$. Find the unknown resistance $S$.
var: P | 2 | 20 | 2
var: Q | 2 | 20 | 2
var: R | 1 | 30 | 1
answer: R*Q/P
unit: Ω
dp: 2
step: Balance: $\dfrac PQ=\dfrac RS$, so $S=R\dfrac QP$
step: $S={{R}}\times\dfrac{ {{Q}} }{ {{P}} }=$ **{{R*Q/P:2}} Ω**
```

```ng-derive
id: derive-wheatstone
title: Derive the balance condition of a Wheatstone bridge
prompt: Using Kirchhoff's rules, derive the condition for a Wheatstone bridge to be balanced.
time: 5
check: Labelled bridge: P (AB), Q (BC), R (AD), S (DC), galvanometer BD, cell AC | 0.5
check: At balance $I_g=0$: $I_1$ flows through P and Q, $I_2$ through R and S | 0.5
check: Loop ABDA: $-I_1P+I_2R=0$; loop BCDB: $-I_1Q+I_2S=0$ | 1
check: Divide: $\dfrac PQ=\dfrac RS$ | 1
```

```ng-draw
id: draw-wheatstone
title: Draw the Wheatstone bridge
svg: ref: notes#ch03-wheatstone
time: 3
```

**In one breath:** At balance no current flows in the galvanometer, B and D are at the same potential, and $P/Q=R/S$; it is a null method, so it is accurate.
