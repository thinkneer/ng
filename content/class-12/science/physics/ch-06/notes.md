# Ch 6 · Electromagnetic Induction

If a current makes a magnetic field, can a magnetic field make a current? Faraday and Henry showed in the 1830s that it can, but only when the field is **changing**. That discovery, electromagnetic induction, is how every power station, transformer and induction cooker works. This chapter gives the two laws (Faraday's and Lenz's), applies them to a moving rod, and then looks at inductance: the way a coil reacts to changes in its own current or in a neighbour's.

## Magnetic flux

Faraday's experiments all come down to one quantity. The **magnetic flux** through a surface measures how much magnetic field passes through it, just as electric flux did in Chapter 1.

:::formula Magnetic flux
$\Phi_B=\vec B\cdot\vec A=BA\cos\theta$ ($\theta$ = angle between $\vec B$ and the normal to the area)

Unit: weber, 1 Wb = 1 T m²; flux is a scalar
:::

Flux through a coil can be changed in three ways: change $B$ (move a magnet, change a nearby current), change $A$ (stretch the loop, slide a rod), or change $\theta$ (rotate the coil).

**In one breath:** Magnetic flux $\Phi=BA\cos\theta$, in webers, counts the field through a loop; change $B$, $A$ or $\theta$ and you change it.

## Faraday's experiments and Faraday's law

Faraday connected a coil to a galvanometer. Pushing a magnet into the coil made the needle kick; holding the magnet still gave nothing; pulling it out gave a kick the other way. Faster motion gave a bigger kick. Replacing the magnet by a second coil, he found a kick at the moment its current was switched on or off, but none while the current stayed steady.

The common factor is a change in magnetic flux through the coil. The size of the induced emf depends on how fast the flux changes.

:::formula Faraday's law
$\varepsilon=-\dfrac{d\Phi_B}{dt}$; for a coil of $N$ turns $\varepsilon=-N\dfrac{d\Phi_B}{dt}$

Average form: $\varepsilon=-N\dfrac{\Delta\Phi}{\Delta t}$
:::

The minus sign carries the direction, and that is Lenz's law.

:::skeleton Worked example: emf from a changing field
*A coil of 100 turns and area 0.02 m² lies perpendicular to a field that falls uniformly from 0.5 T to zero in 0.1 s. Find the induced emf.*

$|\varepsilon|=N\dfrac{\Delta\Phi}{\Delta t}=N\dfrac{A\,\Delta B}{\Delta t}$ [½]

$=100\times\dfrac{0.02\times0.5}{0.1}=$ **10 V** [½]
:::

```ng-numerical
id: emf-changing-field
title: emf from a changing field
question: A coil of {{N}} turns and area {{A}} cm² lies perpendicular to a field that falls uniformly from {{B}} T to zero in {{t}} s. Find the induced emf.
var: N | 50 | 500 | 50
var: A | 10 | 100 | 10
var: B | 0.1 | 1 | 0.1
var: t | 0.1 | 1 | 0.1
answer: N*A*1e-4*B/t
unit: V
step: $|\varepsilon|=N\dfrac{\Delta\Phi}{\Delta t}=N\dfrac{A\,\Delta B}{\Delta t}=\dfrac{ {{N}}\times{{A}}\times10^{-4}\times{{B}} }{ {{t}} }$
step: $|\varepsilon|=$ **{{N*A*1e-4*B/t}} V**
```

**In one breath:** An emf is induced whenever the flux through a circuit changes, of size $N\,d\Phi/dt$; a steady flux, however large, induces nothing.

## Lenz's law and energy

**Lenz's law:** the induced current flows in the direction that **opposes the change** in flux that produced it.

```ng-figure
id: ch06-lenz
title: Lenz law with a magnet and coil
svg:
<svg viewBox="0 0 400 170" role="img" aria-label="Lenz law: north pole approaching a coil" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,80L120,80L120,110L20,110Z" stroke-width="2"/><path d="M70,80L70,110"/><path d="M60,128L110,128" stroke="#E0B400" stroke-width="2"/><path d="M110,128L104.5,130.4L104.5,125.6Z" fill="#E0B400" stroke="none"/><ellipse class="u" cx="170" cy="95" rx="8" ry="32" fill="none"/><ellipse class="u" cx="186" cy="95" rx="8" ry="32" fill="none"/><ellipse class="u" cx="202" cy="95" rx="8" ry="32" fill="none"/><ellipse class="u" cx="218" cy="95" rx="8" ry="32" fill="none"/><ellipse class="u" cx="234" cy="95" rx="8" ry="32" fill="none"/><path d="M170,127L170,160"/><path d="M234,127L234,160"/><path d="M170,160L234,160"/><g transform="translate(202.5,160) rotate(0)"><path d="M-17.5,0L-9,0"/><circle cx="0" cy="0" r="9"/><path d="M9,0L17.5,0"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="45" y="100" font-weight="bold">S</text><text x="95" y="100" font-weight="bold">N</text><text x="85" y="145" font-size="11">moved in</text><text x="202.5" y="164" font-size="11">G</text><text x="202" y="52" font-size="11">induced current</text><text class="uf" x="160" y="100" text-anchor="end" font-weight="bold">N</text><text x="268" y="80" text-anchor="start" font-size="11">near face becomes N:</text><text x="268" y="96" text-anchor="start" font-size="11">it repels the</text><text x="268" y="112" text-anchor="start" font-size="11">approaching N pole</text></g></svg>
caption: Push a north pole towards the coil and the induced current makes the near face a north pole, opposing the motion. You must do work, and that work becomes electrical energy.
part: 95, 95 | N pole moving in | The change in flux that the coil opposes.
part: 160, 100 | Near face of the coil | Becomes N and repels the magnet.
part: 202, 160 | Galvanometer | Deflects only while the magnet moves.
```

Push a north pole towards a coil. The flux through the coil (towards the coil) increases, so the induced current makes the near face of the coil a north pole, repelling the magnet. Pull the magnet away and the near face becomes a south pole, attracting it back. Either way you have to do work against the induced effect.

Lenz's law is really the law of conservation of energy. If the induced current helped the change instead (making the near face a south pole as the north pole approached), the magnet would be pulled in faster, inducing a bigger current, pulling harder, and so on: energy from nothing. The work you do against the opposing force is exactly what appears as electrical energy (and finally as heat in the circuit).

:::tip Opposes the change, not the field
The induced current opposes the **change** in flux. If the flux is decreasing, the induced field points the **same** way as the original field, to try to keep it up.
:::

```ng-steps
id: lenz-direction
title: Finding the direction of an induced current
step: Find the direction of the **original** field through the coil.
step: Decide whether the flux is **increasing** or **decreasing**.
step: Increasing: the induced field points **opposite** to the original. Decreasing: it points the **same** way.
step: Use the right-hand thumb rule on that induced field to get the direction of the current round the coil.
```

```ng-mnemonic
id: lenz-ladne-wala
title: What does Lenz's law say?
trick: **"Lenz = ladne wala"**: the induced current always fights the change
meaning: N pole comes in → near face becomes **N** (repels). N pole goes away → near face becomes **S** (attracts back).
meaning: It opposes the **change**, not the field; that is energy conservation.
prompt: State Lenz's law and the face polarity when a north pole approaches a coil.
```

```ng-draw
id: draw-lenz
title: Draw a magnet approaching a coil, showing the induced polarity
svg: ref: notes#ch06-lenz
time: 3
```

**In one breath:** The induced current always opposes the change that causes it (Lenz); that is energy conservation, because you must do work to keep the change going.

## Motional emf

A conducting rod of length $l$ moves with speed $v$ along a pair of rails, perpendicular to a uniform field $\vec B$. The rails are joined at one end through a resistor $R$, making a circuit whose area grows as the rod moves.

```ng-figure
id: ch06-rod
title: Rod sliding on rails
svg:
<svg viewBox="0 0 320 182" role="img" aria-label="Conducting rod sliding on rails in a magnetic field" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="u" d="M56.5,31.5L63.5,38.5" stroke-width="1"/><path class="u" d="M56.5,38.5L63.5,31.5" stroke-width="1"/><path class="u" d="M56.5,61.5L63.5,68.5" stroke-width="1"/><path class="u" d="M56.5,68.5L63.5,61.5" stroke-width="1"/><path class="u" d="M56.5,91.5L63.5,98.5" stroke-width="1"/><path class="u" d="M56.5,98.5L63.5,91.5" stroke-width="1"/><path class="u" d="M56.5,121.5L63.5,128.5" stroke-width="1"/><path class="u" d="M56.5,128.5L63.5,121.5" stroke-width="1"/><path class="u" d="M90.5,31.5L97.5,38.5" stroke-width="1"/><path class="u" d="M90.5,38.5L97.5,31.5" stroke-width="1"/><path class="u" d="M90.5,61.5L97.5,68.5" stroke-width="1"/><path class="u" d="M90.5,68.5L97.5,61.5" stroke-width="1"/><path class="u" d="M90.5,91.5L97.5,98.5" stroke-width="1"/><path class="u" d="M90.5,98.5L97.5,91.5" stroke-width="1"/><path class="u" d="M90.5,121.5L97.5,128.5" stroke-width="1"/><path class="u" d="M90.5,128.5L97.5,121.5" stroke-width="1"/><path class="u" d="M124.5,31.5L131.5,38.5" stroke-width="1"/><path class="u" d="M124.5,38.5L131.5,31.5" stroke-width="1"/><path class="u" d="M124.5,61.5L131.5,68.5" stroke-width="1"/><path class="u" d="M124.5,68.5L131.5,61.5" stroke-width="1"/><path class="u" d="M124.5,91.5L131.5,98.5" stroke-width="1"/><path class="u" d="M124.5,98.5L131.5,91.5" stroke-width="1"/><path class="u" d="M124.5,121.5L131.5,128.5" stroke-width="1"/><path class="u" d="M124.5,128.5L131.5,121.5" stroke-width="1"/><path class="u" d="M158.5,31.5L165.5,38.5" stroke-width="1"/><path class="u" d="M158.5,38.5L165.5,31.5" stroke-width="1"/><path class="u" d="M158.5,61.5L165.5,68.5" stroke-width="1"/><path class="u" d="M158.5,68.5L165.5,61.5" stroke-width="1"/><path class="u" d="M158.5,91.5L165.5,98.5" stroke-width="1"/><path class="u" d="M158.5,98.5L165.5,91.5" stroke-width="1"/><path class="u" d="M158.5,121.5L165.5,128.5" stroke-width="1"/><path class="u" d="M158.5,128.5L165.5,121.5" stroke-width="1"/><path class="u" d="M192.5,31.5L199.5,38.5" stroke-width="1"/><path class="u" d="M192.5,38.5L199.5,31.5" stroke-width="1"/><path class="u" d="M192.5,61.5L199.5,68.5" stroke-width="1"/><path class="u" d="M192.5,68.5L199.5,61.5" stroke-width="1"/><path class="u" d="M192.5,91.5L199.5,98.5" stroke-width="1"/><path class="u" d="M192.5,98.5L199.5,91.5" stroke-width="1"/><path class="u" d="M192.5,121.5L199.5,128.5" stroke-width="1"/><path class="u" d="M192.5,128.5L199.5,121.5" stroke-width="1"/><path class="u" d="M226.5,31.5L233.5,38.5" stroke-width="1"/><path class="u" d="M226.5,38.5L233.5,31.5" stroke-width="1"/><path class="u" d="M226.5,61.5L233.5,68.5" stroke-width="1"/><path class="u" d="M226.5,68.5L233.5,61.5" stroke-width="1"/><path class="u" d="M226.5,91.5L233.5,98.5" stroke-width="1"/><path class="u" d="M226.5,98.5L233.5,91.5" stroke-width="1"/><path class="u" d="M226.5,121.5L233.5,128.5" stroke-width="1"/><path class="u" d="M226.5,128.5L233.5,121.5" stroke-width="1"/><path class="u" d="M260.5,31.5L267.5,38.5" stroke-width="1"/><path class="u" d="M260.5,38.5L267.5,31.5" stroke-width="1"/><path class="u" d="M260.5,61.5L267.5,68.5" stroke-width="1"/><path class="u" d="M260.5,68.5L267.5,61.5" stroke-width="1"/><path class="u" d="M260.5,91.5L267.5,98.5" stroke-width="1"/><path class="u" d="M260.5,98.5L267.5,91.5" stroke-width="1"/><path class="u" d="M260.5,121.5L267.5,128.5" stroke-width="1"/><path class="u" d="M260.5,128.5L267.5,121.5" stroke-width="1"/><path class="u" d="M294.5,31.5L301.5,38.5" stroke-width="1"/><path class="u" d="M294.5,38.5L301.5,31.5" stroke-width="1"/><path class="u" d="M294.5,61.5L301.5,68.5" stroke-width="1"/><path class="u" d="M294.5,68.5L301.5,61.5" stroke-width="1"/><path class="u" d="M294.5,91.5L301.5,98.5" stroke-width="1"/><path class="u" d="M294.5,98.5L301.5,91.5" stroke-width="1"/><path class="u" d="M294.5,121.5L301.5,128.5" stroke-width="1"/><path class="u" d="M294.5,128.5L301.5,121.5" stroke-width="1"/><path d="M40,25L300,25" stroke-width="2"/><path d="M40,155L300,155" stroke-width="2"/><g transform="translate(40,90) rotate(-90)"><path d="M-65,0L-13,0"/><path d="M-13,0L-10.8,-5L-6.5,5L-2.2,-5L2.2,5L6.5,-5L10.8,5L13,0"/><path d="M13,0L65,0"/></g><path d="M210,20L210,160" stroke="#E0B400" stroke-width="4"/><path d="M216,90L262,90" stroke="#E0B400" stroke-width="2"/><path d="M262,90L256.5,92.4L256.5,87.6Z" fill="#E0B400" stroke="none"/><path d="M210,56L212.9,62.4L207.1,62.4Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="30" y="94" text-anchor="end" font-style="italic">R</text><text x="266" y="94" text-anchor="start" font-style="italic">v</text><text x="222" y="140" text-anchor="start" font-style="italic">l</text><text x="200" y="64" text-anchor="end" font-style="italic">I</text><text x="300" y="175" text-anchor="end" font-size="11">B into page</text></g></svg>
caption: Rod of length l moving at v across B (into page). The magnetic force on its free charges drives a current; the emf is Blv. The current flows up the rod, so it goes anticlockwise round the circuit, opposing the growing flux (Lenz).
part: 210, 140 | Rod of length l | emf Blv across its ends.
part: 240, 90 | Velocity v | Area of the circuit grows at the rate lv.
part: 40, 90 | Resistor R | Current I = Blv/R flows through it.
part: 100, 65 | Field B into the page | Flux through the circuit increases.
```

In time $dt$ the rod moves $v\,dt$ and the enclosed area grows by $lv\,dt$, so the flux grows at the rate $Blv$. By Faraday's law that is the emf. The same result comes from the Lorentz force: each free charge in the rod moves with velocity $\vec v$, feels $q\vec v\times\vec B$ along the rod, and is pushed from one end to the other.

:::formula Motional emf
$\varepsilon=Blv$ (rod, $\vec B$ and $\vec v$ mutually perpendicular)

Current $I=\dfrac{Blv}{R}$;   retarding force on the rod $F=IlB=\dfrac{B^2l^2v}{R}$
:::

The current in the rod feels a magnetic force $IlB$ opposite to $\vec v$ (Lenz again), so to keep the rod moving at steady speed you must push it with that force. The mechanical power you supply, $Fv=\dfrac{B^2l^2v^2}{R}$, equals the electrical power $I^2R$ dissipated in the resistor. Energy is conserved.

:::skeleton Answer skeleton: motional emf by flux (2 marks)
Area of the circuit $A=lx$; flux $\Phi=Blx$ [½]

$\varepsilon=-\dfrac{d\Phi}{dt}=-Bl\dfrac{dx}{dt}$ [½]

$|\varepsilon|=$ **$Blv$** [1]
:::

```ng-numerical
id: sliding-rod
title: Rod sliding on rails
question: A rod {{l}} cm long slides at {{v}} m/s on rails joined by a {{R}} Ω resistor, in a field of {{B}} T perpendicular to the rails. Find the current and the force needed to keep it moving.
var: l | 10 | 50 | 10
var: v | 1 | 10 | 1
var: R | 1 | 10 | 1
var: B | 0.1 | 1 | 0.1
let: emf = B*l/100*v
let: I = emf/R
answer: I*l/100*B
unit: N
step: $\varepsilon=Blv={{B}}\times{{l/100}}\times{{v}}={{emf}}$ V; $I=\varepsilon/R={{I}}$ A
step: $F=IlB={{I}}\times{{l/100}}\times{{B}}=$ **{{I*l/100*B}} N** (power $Fv=I^2R$)
```

```ng-mnemonic
id: right-for-generator
title: Fleming's right hand or left hand?
trick: **"Right hand for geneRator, Left hand for motor (Left = Lagao force)"**
meaning: Right-hand rule gives the direction of the **induced current** in a moving conductor.
meaning: Left-hand rule (FBI) gives the **force** on a current.
prompt: Which of Fleming's rules gives the direction of an induced current?
```

```ng-draw
id: draw-sliding-rod
title: Draw the rod-on-rails circuit
svg: ref: notes#ch06-rod
time: 3
```

**In one breath:** A rod cutting across a field gets emf $Blv$; the induced current feels a backward force $B^2l^2v/R$, and the work done against it becomes the electrical energy.

## Self-inductance

A coil carrying a current has its own magnetic flux through its own turns. Change the current and that flux changes, so an emf is induced in the coil itself, opposing the change. This is **self-induction**. The flux linkage is proportional to the current.

:::formula Self-inductance
$N\Phi_B=LI$;   induced emf $\varepsilon=-L\dfrac{dI}{dt}$

Unit: henry, 1 H = 1 Wb A⁻¹ = 1 V s A⁻¹
:::

So $L$ measures how strongly a coil opposes changes in its current. It plays the role of inertia (mass) for current: it does not stop a steady current, but it fights every attempt to start, stop or change one. This "back emf" is why a spark jumps when you switch off an inductive circuit.

For a long solenoid of length $l$, area $A$ and $n$ turns per unit length, the field inside is $B=\mu_0nI$. The total flux linkage is $(nl)(\mu_0nI)A$, so

:::formula Self-inductance of a long solenoid
$L=\mu_0n^2Al=\dfrac{\mu_0N^2A}{l}$; filled with a core of relative permeability $\mu_r$: $L=\mu_r\mu_0n^2Al$
:::

To build up a current $I$ in an inductor, work must be done against the back emf. At current $i$ the power needed is $\varepsilon i=Li\,\frac{di}{dt}$; adding this from 0 to $I$ gives the energy stored in the inductor's magnetic field.

:::formula Energy stored in an inductor
$U=\dfrac12LI^2$
:::

Compare $\tfrac12mv^2$: $L$ is the inertia, $I$ the velocity.

:::skeleton Worked example: back emf
*The current in a 0.2 H coil falls from 5 A to 1 A in 0.04 s. Find the self-induced emf.*

$|\varepsilon|=L\dfrac{\Delta I}{\Delta t}$ [½]

$=0.2\times\dfrac{4}{0.04}=$ **20 V**, in the direction that tries to keep the current flowing [½]
:::

```ng-numerical
id: solenoid-inductance
title: Self-inductance of a solenoid
question: A solenoid of {{N}} turns, length {{l}} cm and cross-section {{A}} cm² carries {{I}} A. Find its self-inductance and the energy stored.
var: N | 100 | 1000 | 100
var: l | 10 | 50 | 10
var: A | 1 | 10 | 1
var: I | 1 | 5 | 1
let: L = 4*pi*1e-7*N^2*A*1e-4/(l/100)
answer: 0.5*L*I^2
unit: J
step: $L=\dfrac{\mu_0N^2A}{l}=\dfrac{4\pi\times10^{-7}\times{{N}}^2\times{{A}}\times10^{-4}}{ {{l/100}} }={{L}}$ H
step: $U=\tfrac12LI^2=\tfrac12\times{{L}}\times{{I}}^2=$ **{{0.5*L*I^2}} J**
```

```ng-graph
id: inductor-energy
title: Energy stored in an inductor
x: I (A) | 0 | 10
y: U (J) | 0 | 10
curve: U = ½LI² | 0.5*L*x^2
slider: L | $L$ (H) | 0.05 | 1 | 0.05 | 0.2
note: Like $\tfrac12mv^2$: $L$ plays mass, $I$ plays velocity.
```

```ng-derive
id: derive-solenoid-inductance
title: Derive the self-inductance of a long solenoid
prompt: Define self-inductance. Derive an expression for the self-inductance of a long solenoid of length $l$, cross-section $A$ and $N$ turns.
time: 5
check: Definition: $N\Phi=LI$ (or $\varepsilon=-L\,dI/dt$); unit henry | 1
check: $B=\mu_0\dfrac{N}{l}I$ inside the solenoid | 0.5
check: Flux linkage $N\Phi=N\cdot\mu_0\dfrac NlI\cdot A$ | 0.5
check: $L=\dfrac{\mu_0N^2A}{l}$ | 1
```

**In one breath:** A coil opposes changes in its own current with emf $-L\,dI/dt$; a solenoid has $L=\mu_0n^2Al$, and an inductor stores $\tfrac12LI^2$.

## Mutual inductance

Two coils near each other: a changing current in coil 1 changes the flux through coil 2 and induces an emf there. This is **mutual induction**, the principle of the transformer.

:::formula Mutual inductance
$N_2\Phi_2=MI_1$;   $\varepsilon_2=-M\dfrac{dI_1}{dt}$ (and $M_{12}=M_{21}=M$)
:::

For two long coaxial solenoids of the same length $l$, the inner one of radius $r_1$ with $n_1$ turns per unit length and the outer with $n_2$: a current $I_2$ in the outer solenoid makes $B=\mu_0n_2I_2$ inside it. The inner solenoid's $n_1l$ turns each enclose area $\pi r_1^2$ of that field, so the flux linkage is $n_1l\,\pi r_1^2\,\mu_0n_2I_2$.

:::formula Mutual inductance of coaxial solenoids
$M=\mu_0n_1n_2\pi r_1^2l$ ($r_1$ = radius of the inner solenoid)
:::

$M$ depends on the geometry and relative position of the two coils and on the material between them. Winding both coils on a soft-iron core raises $M$ greatly.

:::skeleton Answer skeleton: mutual inductance of coaxial solenoids (3 marks)
Diagram: inner solenoid $S_1$ (radius $r_1$, $n_1$) inside $S_2$ ($n_2$), length $l$ [½]

Current $I_2$ in $S_2$: $B_2=\mu_0n_2I_2$ inside [½]

Flux linked with $S_1$: $N_1\Phi_1=(n_1l)(\pi r_1^2)(\mu_0n_2I_2)$ [1]

$M_{12}=\dfrac{N_1\Phi_1}{I_2}=$ **$\mu_0n_1n_2\pi r_1^2l$** [1]
:::

:::tip Use the inner radius
In $M=\mu_0n_1n_2\pi r_1^2l$ the area is that of the **inner** solenoid, because the field of the outer one exists everywhere inside it, but the inner one only encloses its own cross-section.
:::

```ng-numerical
id: coaxial-mutual
title: Mutual inductance of coaxial solenoids
question: Two coaxial solenoids are {{l}} cm long. The inner one has radius {{r}} cm and {{n1}} turns per cm; the outer one has {{n2}} turns per cm. Find their mutual inductance.
var: l | 20 | 100 | 10
var: r | 1 | 5 | 1
var: n1 | 5 | 20 | 5
var: n2 | 5 | 20 | 5
answer: 4*pi*1e-7*(n1*100)*(n2*100)*pi*(r/100)^2*(l/100)*1000
unit: mH
step: $M=\mu_0n_1n_2\pi r_1^2l=4\pi\times10^{-7}\times{{n1*100}}\times{{n2*100}}\times\pi\times({{r/100}})^2\times{{l/100}}$ H
step: $M=$ **{{4*pi*1e-7*(n1*100)*(n2*100)*pi*(r/100)^2*(l/100)*1000}} mH**
```

```ng-derive
id: derive-mutual-inductance
title: Derive the mutual inductance of two coaxial solenoids
prompt: Derive the mutual inductance of two long coaxial solenoids of length $l$, the inner of radius $r_1$ with $n_1$ turns per unit length and the outer with $n_2$.
time: 5
check: Diagram; current $I_2$ in the outer gives $B_2=\mu_0n_2I_2$ inside | 1
check: Flux linkage with the inner: $(n_1l)(\pi r_1^2)(\mu_0n_2I_2)$ | 1
check: $M=\mu_0n_1n_2\pi r_1^2l$ | 1
```

```ng-compare
id: self-vs-mutual
title: Self-induction vs mutual induction
cols: Self-induction | Mutual induction
row: Coils involved | one | two
row: emf is induced by | a change in the coil's **own** current | a change in the current of the **neighbouring** coil
row: Formula | $\varepsilon=-L\dfrac{dI}{dt}$ | $\varepsilon_2=-M\dfrac{dI_1}{dt}$
row: Example | spark when switching off a coil | transformer
```

**In one breath:** A changing current in one coil induces $-M\,dI/dt$ in its neighbour; for coaxial solenoids $M=\mu_0n_1n_2\pi r_1^2l$, the same either way round.
