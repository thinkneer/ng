# Ch 4 · Moving Charges and Magnetism

In 1820 Oersted noticed that a compass needle swung when a nearby wire carried current. That one observation joined electricity and magnetism: moving charges create magnetic fields, and magnetic fields push on moving charges. This chapter covers both directions. First, the force a magnetic field exerts on a moving charge and on a wire. Then, the field a current produces (Biot–Savart and Ampère). Finally, the torque on a current loop, which is how a galvanometer works.

## The magnetic force on a moving charge

A charge at rest feels no magnetic force. A moving charge in a magnetic field $\vec B$ feels a force that depends on its speed and direction, and is always perpendicular to both $\vec v$ and $\vec B$.

:::formula Magnetic force on a moving charge
$\vec F=q(\vec v\times\vec B)$, magnitude $F=qvB\sin\theta$

Zero when $\vec v$ is parallel or antiparallel to $\vec B$; maximum $qvB$ when perpendicular.

Unit of $B$: tesla, 1 T = 1 N A⁻¹ m⁻¹ (1 gauss = $10^{-4}$ T)
:::

With an electric field present too, the total is the **Lorentz force**, $\vec F=q(\vec E+\vec v\times\vec B)$.

Because the magnetic force is always perpendicular to the velocity, **it does no work**: it can change the direction of motion but never the speed or kinetic energy.

The direction comes from the cross product: point the fingers of your right hand along $\vec v$, curl them towards $\vec B$, and your thumb gives $\vec F$ for a positive charge. For an electron, reverse it.

```ng-mnemonic
id: fleming-left-hand
title: Direction of the force on a current
trick: **Fleming's left hand = "FBI"**: Thumb = **F**orce, First finger = **B** (field), middle finger = **I** (current)
meaning: Hold the three at right angles; the thumb gives the force on a current-carrying wire (or a positive charge's motion along I).
meaning: For an electron, the force is the other way.
prompt: Which rule gives the force on a current in a magnetic field, and what does each finger show?
```

**In one breath:** A magnetic field pushes a moving charge with $q\vec v\times\vec B$, perpendicular to both; it never changes the speed, only the direction.

## Motion of a charge in a uniform magnetic field

If a charge enters a uniform field with $\vec v\perp\vec B$, the force $qvB$ always points at right angles to its motion, exactly like the string on a whirled stone. The charge moves in a circle, with the magnetic force supplying the centripetal force.

```ng-figure
id: ch04-circle
title: Charge circling in a magnetic field
svg:
<svg viewBox="0 0 310 200" role="img" aria-label="Positive charge moving in a circle in a magnetic field into the page" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M26.5,18.5L33.5,25.5" stroke-width="1"/><path d="M26.5,25.5L33.5,18.5" stroke-width="1"/><path d="M26.5,52.5L33.5,59.5" stroke-width="1"/><path d="M26.5,59.5L33.5,52.5" stroke-width="1"/><path d="M26.5,86.5L33.5,93.5" stroke-width="1"/><path d="M26.5,93.5L33.5,86.5" stroke-width="1"/><path d="M26.5,120.5L33.5,127.5" stroke-width="1"/><path d="M26.5,127.5L33.5,120.5" stroke-width="1"/><path d="M26.5,154.5L33.5,161.5" stroke-width="1"/><path d="M26.5,161.5L33.5,154.5" stroke-width="1"/><path d="M60.5,18.5L67.5,25.5" stroke-width="1"/><path d="M60.5,25.5L67.5,18.5" stroke-width="1"/><path d="M60.5,52.5L67.5,59.5" stroke-width="1"/><path d="M60.5,59.5L67.5,52.5" stroke-width="1"/><path d="M60.5,86.5L67.5,93.5" stroke-width="1"/><path d="M60.5,93.5L67.5,86.5" stroke-width="1"/><path d="M60.5,120.5L67.5,127.5" stroke-width="1"/><path d="M60.5,127.5L67.5,120.5" stroke-width="1"/><path d="M60.5,154.5L67.5,161.5" stroke-width="1"/><path d="M60.5,161.5L67.5,154.5" stroke-width="1"/><path d="M94.5,18.5L101.5,25.5" stroke-width="1"/><path d="M94.5,25.5L101.5,18.5" stroke-width="1"/><path d="M94.5,52.5L101.5,59.5" stroke-width="1"/><path d="M94.5,59.5L101.5,52.5" stroke-width="1"/><path d="M94.5,86.5L101.5,93.5" stroke-width="1"/><path d="M94.5,93.5L101.5,86.5" stroke-width="1"/><path d="M94.5,120.5L101.5,127.5" stroke-width="1"/><path d="M94.5,127.5L101.5,120.5" stroke-width="1"/><path d="M94.5,154.5L101.5,161.5" stroke-width="1"/><path d="M94.5,161.5L101.5,154.5" stroke-width="1"/><path d="M128.5,18.5L135.5,25.5" stroke-width="1"/><path d="M128.5,25.5L135.5,18.5" stroke-width="1"/><path d="M128.5,52.5L135.5,59.5" stroke-width="1"/><path d="M128.5,59.5L135.5,52.5" stroke-width="1"/><path d="M128.5,86.5L135.5,93.5" stroke-width="1"/><path d="M128.5,93.5L135.5,86.5" stroke-width="1"/><path d="M128.5,120.5L135.5,127.5" stroke-width="1"/><path d="M128.5,127.5L135.5,120.5" stroke-width="1"/><path d="M128.5,154.5L135.5,161.5" stroke-width="1"/><path d="M128.5,161.5L135.5,154.5" stroke-width="1"/><path d="M162.5,18.5L169.5,25.5" stroke-width="1"/><path d="M162.5,25.5L169.5,18.5" stroke-width="1"/><path d="M162.5,52.5L169.5,59.5" stroke-width="1"/><path d="M162.5,59.5L169.5,52.5" stroke-width="1"/><path d="M162.5,86.5L169.5,93.5" stroke-width="1"/><path d="M162.5,93.5L169.5,86.5" stroke-width="1"/><path d="M162.5,120.5L169.5,127.5" stroke-width="1"/><path d="M162.5,127.5L169.5,120.5" stroke-width="1"/><path d="M162.5,154.5L169.5,161.5" stroke-width="1"/><path d="M162.5,161.5L169.5,154.5" stroke-width="1"/><path d="M196.5,18.5L203.5,25.5" stroke-width="1"/><path d="M196.5,25.5L203.5,18.5" stroke-width="1"/><path d="M196.5,52.5L203.5,59.5" stroke-width="1"/><path d="M196.5,59.5L203.5,52.5" stroke-width="1"/><path d="M196.5,86.5L203.5,93.5" stroke-width="1"/><path d="M196.5,93.5L203.5,86.5" stroke-width="1"/><path d="M196.5,120.5L203.5,127.5" stroke-width="1"/><path d="M196.5,127.5L203.5,120.5" stroke-width="1"/><path d="M196.5,154.5L203.5,161.5" stroke-width="1"/><path d="M196.5,161.5L203.5,154.5" stroke-width="1"/><path d="M230.5,18.5L237.5,25.5" stroke-width="1"/><path d="M230.5,25.5L237.5,18.5" stroke-width="1"/><path d="M230.5,52.5L237.5,59.5" stroke-width="1"/><path d="M230.5,59.5L237.5,52.5" stroke-width="1"/><path d="M230.5,86.5L237.5,93.5" stroke-width="1"/><path d="M230.5,93.5L237.5,86.5" stroke-width="1"/><path d="M230.5,120.5L237.5,127.5" stroke-width="1"/><path d="M230.5,127.5L237.5,120.5" stroke-width="1"/><path d="M230.5,154.5L237.5,161.5" stroke-width="1"/><path d="M230.5,161.5L237.5,154.5" stroke-width="1"/><path d="M264.5,18.5L271.5,25.5" stroke-width="1"/><path d="M264.5,25.5L271.5,18.5" stroke-width="1"/><path d="M264.5,52.5L271.5,59.5" stroke-width="1"/><path d="M264.5,59.5L271.5,52.5" stroke-width="1"/><path d="M264.5,86.5L271.5,93.5" stroke-width="1"/><path d="M264.5,93.5L271.5,86.5" stroke-width="1"/><path d="M264.5,120.5L271.5,127.5" stroke-width="1"/><path d="M264.5,127.5L271.5,120.5" stroke-width="1"/><path d="M264.5,154.5L271.5,161.5" stroke-width="1"/><path d="M264.5,161.5L271.5,154.5" stroke-width="1"/><circle class="u" cx="165" cy="100" r="60" stroke-width="2"/><circle class="u" cx="165" cy="40" r="7"/><path class="u" d="M161,40L169,40"/><path class="u" d="M165,36L165,44"/><path d="M156,40L107,40" stroke="#E0B400" stroke-width="2"/><path d="M107,40L112.5,37.6L112.5,42.4Z" fill="#E0B400" stroke="none"/><path d="M165,49L165,82" stroke="#E0B400" stroke-width="2"/><path d="M165,82L162.6,76.5L167.4,76.5Z" fill="#E0B400" stroke="none"/><circle cx="165" cy="100" r="2.2" fill="currentColor"/><path d="M165,100L214.5,133.9" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="105" y="32" text-anchor="end" font-style="italic">v</text><text x="171" y="74" text-anchor="start">F = qvB</text><text x="195" y="112" font-style="italic">r</text><text x="286" y="192" text-anchor="end" font-size="11">B into page</text></g></svg>
caption: B into the page (×): a positive charge goes round anticlockwise. The force qv×B is always perpendicular to v, so it bends the path into a circle without changing the speed.
part: 165, 40 | Positive charge | Moves anticlockwise when B is into the page.
part: 130, 40 | Velocity v | Always tangent to the circle.
part: 165, 72 | Force qvB | Always towards the centre; does no work.
part: 165, 100 | Centre of the circle | Radius r = mv/qB.
```

Setting $qvB=mv^2/r$ gives the radius. The time for one turn is $2\pi r/v$, and the $v$ cancels out.

:::formula Circular motion in a magnetic field
$r=\dfrac{mv}{qB}=\dfrac{p}{qB}=\dfrac{\sqrt{2mK}}{qB}$

Period $T=\dfrac{2\pi m}{qB}$, frequency $\nu=\dfrac{qB}{2\pi m}$ (independent of speed and radius)
:::

If the velocity has a component along $\vec B$ as well, that component is unaffected, and the charge moves in a **helix** around the field lines.

When an electric field and a magnetic field are crossed (perpendicular to each other and to $\vec v$), the electric and magnetic forces can be opposite. They cancel when $qE=qvB$, so only particles with speed $v=E/B$ go through undeflected. This **velocity selector** picks out one speed from a beam.

:::skeleton Worked example: radius of the path
*A proton ($m=1.67\times10^{-27}$ kg) moves at $2\times10^6$ m s⁻¹ perpendicular to a field of 0.5 T. Find the radius of its path.*

$r=\dfrac{mv}{qB}$ [½]

$=\dfrac{1.67\times10^{-27}\times2\times10^6}{1.6\times10^{-19}\times0.5}=$ **$4.2\times10^{-2}$ m (about 4.2 cm)** [½]
:::

:::tip The period does not depend on speed
A faster particle moves in a bigger circle, but it takes exactly the same time per turn. Questions that double $v$ and ask about $T$ expect "unchanged".
:::

```ng-numerical
id: radius-in-field
title: Radius of a proton's circle
question: A proton moves at {{v}} × 10⁶ m/s perpendicular to a uniform field of {{B}} T. Find the radius of its path. ($m_p=1.67\times10^{-27}$ kg)
var: v | 1 | 5 | 0.5
var: B | 0.1 | 1 | 0.1
answer: 1.67e-27*v*1e6/(1.6e-19*B)*100
unit: cm
dp: 2
step: $r=\dfrac{mv}{qB}=\dfrac{1.67\times10^{-27}\times{{v}}\times10^6}{1.6\times10^{-19}\times{{B}} }$ m
step: $r=$ **{{1.67e-27*v*1e6/(1.6e-19*B)*100:2}} cm**; the period $2\pi m/qB$ would not change with $v$
```

**In one breath:** Perpendicular to $\vec B$ a charge circles with $r=mv/qB$ and period $2\pi m/qB$ independent of speed; crossed $E$ and $B$ pass only $v=E/B$.

## Force on a current-carrying conductor

A current in a wire is a stream of drifting charges, so a wire in a magnetic field feels the sum of the forces on them. For a straight wire of length $l$ carrying current $I$:

:::formula Force on a current-carrying wire
$\vec F=I\,\vec l\times\vec B$, magnitude $F=IlB\sin\theta$ ($\vec l$ along the current)
:::

Use Fleming's left-hand rule or the cross product for the direction. A wire along the field feels no force.

**In one breath:** A wire carrying current $I$ in a field feels $I\vec l\times\vec B$, the total of the forces on its drifting charges.

## The Biot–Savart law

Now the other direction: how does a current make a field? Biot and Savart found that a small element $d\vec l$ of a wire carrying current $I$ produces at a point a distance $r$ away a field proportional to $I\,dl$, to $\sin\theta$ (the angle between $d\vec l$ and the line to the point), and to $1/r^2$.

:::formula Biot–Savart law
$d\vec B=\dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec l\times\hat r}{r^2}$, magnitude $dB=\dfrac{\mu_0}{4\pi}\dfrac{I\,dl\sin\theta}{r^2}$

$\mu_0=4\pi\times10^{-7}$ T m A⁻¹ (permeability of free space)
:::

Compare it with Coulomb's law: both fall as $1/r^2$. But the source here is a current element, a vector, and the field is perpendicular to both $d\vec l$ and $\hat r$. There is no field along the line of the element itself ($\theta=0$).

**In one breath:** Each current element gives $dB=\frac{\mu_0}{4\pi}\frac{I\,dl\sin\theta}{r^2}$, perpendicular to $d\vec l$ and $\hat r$; add up all the elements to get the field.

## Field on the axis of a circular loop

Take a circular loop of radius $R$ carrying current $I$, and a point P on its axis at distance $x$ from the centre. Every element $d\vec l$ is perpendicular to the line joining it to P, which has length $r=\sqrt{R^2+x^2}$, so each gives $dB=\frac{\mu_0}{4\pi}\frac{I\,dl}{R^2+x^2}$.

```ng-figure
id: ch04-loop
title: Field on the axis of a loop
svg:
<svg viewBox="0 0 400 160" role="img" aria-label="Field on the axis of a circular current loop" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse class="u" cx="80" cy="110" rx="16" ry="62" fill="none"/><path class="uf" d="M78,48L83.5,45.6L83.5,50.4Z" stroke="none"/><path d="M80,110L380,110" stroke-dasharray="4 3"/><circle cx="80" cy="110" r="2.2" fill="currentColor"/><path d="M80,48L230,110" stroke-dasharray="4 3"/><path d="M80,110L80,48" stroke-width="1"/><circle cx="230" cy="110" r="2.2" fill="currentColor"/><path d="M80,140L230,140"/><path d="M230,140L226.3,141.6L226.3,138.4Z" fill="currentColor" stroke="none"/><path d="M80,140L83.7,138.4L83.7,141.6Z" fill="currentColor" stroke="none"/><path d="M230,110L256.7,45.3" stroke="#E0B400" stroke-width="2"/><path d="M256.7,45.3L256.9,51.3L252.4,49.4Z" fill="#E0B400" stroke="none"/><path class="u" d="M230,110L256.7,110" stroke-width="2.4"/><path class="uf" d="M256.7,110L251.3,112.4L251.3,107.6Z" stroke="none"/><path d="M256.7,45.3L256.7,110" stroke-width="1" stroke-dasharray="4 3"/><path d="M230,110L230,45.3" stroke-width="1" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="72" y="42" text-anchor="end" font-style="italic">I</text><text x="74" y="126" text-anchor="end">O</text><text x="150" y="66" font-style="italic">r</text><text x="86" y="80" text-anchor="start" font-style="italic">R</text><text x="230" y="128">P</text><text x="155" y="154" font-style="italic">x</text><text x="262.7" y="45.3" text-anchor="start">dB</text><text x="226" y="49.3" text-anchor="end" font-size="11">cancels round the loop</text><text class="uf" x="262.7" y="104" text-anchor="start" font-size="11">adds</text></g></svg>
caption: Each element dl gives a dB perpendicular to the line joining it to P. Round the loop the components perpendicular to the axis cancel; the axial components add.
part: 80, 48 | Current element dl | Perpendicular to the line joining it to P.
part: 80, 110 | Centre O | B = μ₀I/2R here, the largest value.
part: 230, 110 | Axial point P | At distance x from the centre.
part: 256, 45 | dB from one element | Perpendicular to r; tilted from the axis.
part: 256, 110 | Axial component | These add up round the loop.
```

The direction of each $d\vec B$ is perpendicular to that line, tilted at angle $\phi$ to the axis. Elements on opposite sides of the loop give components perpendicular to the axis that cancel in pairs. Only the components along the axis survive, each $dB\sin\phi$ with $\sin\phi=R/\sqrt{R^2+x^2}$. Adding them over the whole circumference ($\oint dl=2\pi R$):

$B=\dfrac{\mu_0I}{4\pi(R^2+x^2)}\cdot\dfrac{R}{\sqrt{R^2+x^2}}\cdot2\pi R$

:::formula Field of a circular loop
On the axis: $B=\dfrac{\mu_0IR^2}{2(R^2+x^2)^{3/2}}$ (for $N$ turns multiply by $N$)

At the centre ($x=0$): $B=\dfrac{\mu_0NI}{2R}$
:::

The direction along the axis follows the **right-hand thumb rule**: curl your fingers with the current, and your thumb points along $\vec B$. Seen from one side, an anticlockwise current makes that face a north pole.

:::skeleton Answer skeleton: field on the axis of a loop (3 marks)
Diagram: loop of radius $R$, element $d\vec l$, point P at distance $x$, $r=\sqrt{R^2+x^2}$ [½]

Biot–Savart: $dB=\dfrac{\mu_0}{4\pi}\dfrac{I\,dl}{R^2+x^2}$ (since $d\vec l\perp\hat r$) [½]

Perpendicular components cancel in pairs; axial components $dB\sin\phi$ add, $\sin\phi=\dfrac{R}{\sqrt{R^2+x^2}}$ [1]

$B=\dfrac{\mu_0IR}{4\pi(R^2+x^2)^{3/2}}\oint dl=$ **$\dfrac{\mu_0IR^2}{2(R^2+x^2)^{3/2}}$**, along the axis [1]
:::

```ng-graph
id: loop-axis-field
title: Field along the axis of a circular coil
x: x, distance from the centre (cm) | -30 | 30
y: B (µT) | 0 | 200
curve: B on the axis | 62.83*N*I*R^2/(R^2 + x^2)^1.5
slider: N | $N$ (turns) | 1 | 50 | 1 | 10
slider: I | $I$ (A) | 0.5 | 5 | 0.5 | 1
slider: R | $R$ (cm) | 2 | 20 | 1 | 10
note: The field is largest at the centre, $\mu_0NI/2R$, and falls away on both sides; with $N=10$, $I=1$ A, $R=10$ cm it is 62.8 µT.
```

```ng-derive
id: derive-loop-axis
title: Derive the field on the axis of a circular loop
prompt: Use the Biot–Savart law to find the magnetic field at a point on the axis of a circular loop of radius $R$ carrying current $I$, at distance $x$ from the centre.
time: 6
check: Diagram with $d\vec l$, P, $r=\sqrt{R^2+x^2}$; note $d\vec l\perp\hat r$ | 0.5
check: $dB=\dfrac{\mu_0}{4\pi}\dfrac{I\,dl}{R^2+x^2}$ | 0.5
check: Perpendicular components cancel; axial parts $dB\sin\phi$ add, $\sin\phi=R/\sqrt{R^2+x^2}$ | 1
check: $B=\dfrac{\mu_0IR^2}{2(R^2+x^2)^{3/2}}$ along the axis | 1
```

```ng-draw
id: draw-loop-axis
title: Draw the figure for the field on a loop's axis
svg: ref: notes#ch04-loop
time: 3
```

**In one breath:** On the axis of a loop the sideways parts cancel and the axial parts add to $\mu_0IR^2/2(R^2+x^2)^{3/2}$, which is $\mu_0I/2R$ at the centre.

## Ampère's circuital law and a long straight wire

For symmetric currents there is a shortcut, like Gauss's law for charges. Take any closed loop (an "Amperian loop") and add up $\vec B\cdot d\vec l$ all the way round.

:::formula Ampère's circuital law
$\displaystyle\oint\vec B\cdot d\vec l=\mu_0I_\text{enclosed}$
:::

For an infinitely long straight wire, symmetry says $\vec B$ circles the wire and has the same size at the same distance. Choose a circle of radius $r$ round the wire: $\vec B$ is along $d\vec l$ everywhere, so $\oint\vec B\cdot d\vec l=B\times2\pi r=\mu_0I$.

```ng-figure
id: ch04-ampere
title: Wire field and parallel currents
svg:
<svg viewBox="0 0 380 180" role="img" aria-label="Field lines round a straight wire, and two parallel currents attracting" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle class="u" cx="90" cy="90" r="7"/><circle class="u uf" cx="90" cy="90" r="1.8"/><circle class="u" cx="90" cy="90" r="25"/><path class="uf" d="M115,90L117,94.6L113,94.6Z" stroke="none"/><path class="uf" d="M65,90L63,85.4L67,85.4Z" stroke="none"/><circle class="u" cx="90" cy="90" r="45" stroke-dasharray="4 3"/><path class="uf" d="M135,90L137,94.6L133,94.6Z" stroke="none"/><path class="uf" d="M45,90L43,85.4L47,85.4Z" stroke="none"/><circle class="u" cx="90" cy="90" r="65"/><path class="uf" d="M155,90L157,94.6L153,94.6Z" stroke="none"/><path class="uf" d="M25,90L23,85.4L27,85.4Z" stroke="none"/><path d="M250,20L250,160" stroke-width="2.2"/><path d="M330,20L330,160" stroke-width="2.2"/><path d="M250,22L252.9,28.4L247.1,28.4Z" fill="currentColor" stroke="none"/><path d="M330,22L332.9,28.4L327.1,28.4Z" fill="currentColor" stroke="none"/><path d="M256,95L284,95" stroke="#E0B400" stroke-width="2"/><path d="M284,95L278.5,97.4L278.5,92.6Z" fill="#E0B400" stroke="none"/><path d="M324,95L296,95" stroke="#E0B400" stroke-width="2"/><path d="M296,95L301.5,92.6L301.5,97.4Z" fill="#E0B400" stroke="none"/><path d="M250,140L330,140"/><path d="M330,140L326.3,141.6L326.3,138.4Z" fill="currentColor" stroke="none"/><path d="M250,140L253.7,138.4L253.7,141.6Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="95" y="172" font-size="11">I out of page → B anticlockwise</text><text x="140" y="52" text-anchor="start" font-size="11">Amperian loop</text><text x="244" y="40" text-anchor="end">I₁</text><text x="336" y="40" text-anchor="start">I₂</text><text x="290" y="82" font-style="italic">F</text><text x="290" y="154" font-style="italic">d</text><text x="290" y="172" font-size="11">like currents attract</text></g></svg>
caption: Left: field lines round a long straight wire are circles (right-hand thumb rule); a circle of radius r is the Amperian loop. Right: parallel currents in the same direction attract.
part: 90, 90 | Current out of the page | Field lines are circles round it.
part: 135, 90 | Amperian loop | B × 2πr = μ₀I gives B = μ₀I/2πr.
part: 250, 90 | Wire 1, current I₁ | Makes field μ₀I₁/2πd at wire 2.
part: 290, 95 | Force between the wires | μ₀I₁I₂/2πd per metre; like currents attract.
```

:::formula Field of a long straight wire
$B=\dfrac{\mu_0I}{2\pi r}$, in circles round the wire (right-hand thumb rule)
:::

A long **solenoid** (a closely wound coil much longer than its radius) has a strong, uniform field inside along its axis, and almost no field outside. Ampère's law gives $B=\mu_0nI$ inside, where $n$ is the number of turns per unit length. At the board you only need this result and the qualitative picture: the solenoid's field pattern looks like that of a bar magnet.

:::formula Field inside a long solenoid
$B=\mu_0nI$, $n$ = turns per unit length (uniform, along the axis); about half this at the ends
:::

```ng-graph
id: wire-field-graph
title: Field round a long straight wire
x: r (cm) | 1 | 20
y: B (µT) | 0 | 200
curve: B = μ₀I/2πr | 20*I/x
slider: I | $I$ (A) | 1 | 20 | 1 | 5
note: $B\propto1/r$: twice as far, half the field. 5 A at 1 cm gives 100 µT.
```

**In one breath:** Ampère's law $\oint\vec B\cdot d\vec l=\mu_0I$ gives $\mu_0I/2\pi r$ round a long wire; a long solenoid has a uniform $\mu_0nI$ inside.

## Force between two parallel currents and the ampere

Two parallel wires a distance $d$ apart carry currents $I_1$ and $I_2$. Wire 1 makes a field $B_1=\mu_0I_1/2\pi d$ at wire 2, and a length $L$ of wire 2 feels a force $I_2LB_1$.

:::formula Force between parallel currents
$\dfrac{F}{L}=\dfrac{\mu_0I_1I_2}{2\pi d}$ (newtons per metre)

Currents in the same direction attract; in opposite directions they repel.
:::

This defines the ampere: one ampere is the current which, flowing in two infinitely long, straight, parallel wires of negligible cross-section one metre apart in vacuum, produces between them a force of $2\times10^{-7}$ N per metre of length.

:::tip Like currents attract
For charges, like repels. For currents, like (parallel) currents **attract**. Students mix the two up under exam pressure.
:::

```ng-numerical
id: parallel-wire-force
title: Force between two parallel wires
question: Two long parallel wires {{d}} cm apart carry {{I1}} A and {{I2}} A in the same direction. Find the force per metre between them.
var: I1 | 1 | 10 | 1
var: I2 | 1 | 10 | 1
var: d | 2 | 20 | 2
answer: 2e-7*I1*I2/(d/100)
unit: N/m
step: $\dfrac FL=\dfrac{\mu_0I_1I_2}{2\pi d}=\dfrac{2\times10^{-7}\times{{I1}}\times{{I2}} }{ {{d/100}} }$
step: $\dfrac FL=$ **{{2e-7*I1*I2/(d/100)}} N/m**, attractive (same direction)
```

```ng-mnemonic
id: currents-are-friends
title: Do parallel currents attract or repel?
trick: **"Ek hi disha, pakke dost"** (same direction, close friends)
meaning: Currents in the **same** direction **attract**; opposite currents repel.
meaning: It is the reverse of charges, where like charges repel.
prompt: Do two parallel wires carrying current in the same direction attract or repel?
```

**In one breath:** Parallel wires exert $\mu_0I_1I_2/2\pi d$ per metre on each other; same-direction currents attract, and this force defines the ampere.

## Torque on a current loop: the magnetic dipole

Put a rectangular loop (sides $a$ and $b$, $N$ turns) carrying current $I$ in a uniform field $\vec B$. The forces on opposite sides are equal and opposite, so the **net force is zero**. But the two sides perpendicular to the field get forces along different lines, forming a couple. With $\theta$ the angle between the field and the normal to the loop, the torque is $\tau=NIAB\sin\theta$.

This looks exactly like the electric dipole: define the loop's **magnetic dipole moment**, and the torque takes the same form $\vec m\times\vec B$.

:::formula Magnetic moment and torque of a loop
$\vec m=NI\vec A$ (direction by the right-hand thumb rule; unit A m²)

$\vec\tau=\vec m\times\vec B$, $\tau=NIAB\sin\theta$; potential energy $U=-\vec m\cdot\vec B$
:::

An electron going round a nucleus is a tiny current loop too. Its current is $e/T=ev/2\pi r$ and its area $\pi r^2$, so its magnetic moment is $\mu_l=evr/2$. Writing the angular momentum as $l=m_evr$ gives $\mu_l=\frac{e}{2m_e}l$. With Bohr's $l=nh/2\pi$, the smallest value ($n=1$) is the **Bohr magneton**, $\mu_B=\frac{eh}{4\pi m_e}=9.27\times10^{-24}$ A m².

**In one breath:** In a uniform field a current loop feels no net force but a torque $\vec m\times\vec B$ with $m=NIA$, the magnetic twin of the electric dipole; an orbiting electron has $\mu=evr/2$.

## The moving coil galvanometer

A galvanometer detects and measures small currents using that torque. A rectangular coil of $N$ turns, on a soft-iron core, can turn between concave pole pieces of a magnet. A spring (or suspension fibre) provides a restoring torque $k\phi$ when the coil turns through angle $\phi$.

```ng-figure
id: ch04-mcg
title: Moving coil galvanometer
svg:
<svg viewBox="0 0 340 195" role="img" aria-label="Moving coil galvanometer: concave pole pieces and soft iron core give a radial field" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="u" d="M40,40 L110,40 A60,60 0 0 0 110,160 L40,160 Z"/><path class="u" d="M300,40 L230,40 A60,60 0 0 1 230,160 L300,160 Z"/><circle cx="170" cy="100" r="34"/><path d="M121.9,64.2L141.1,78.5"/><path d="M141.1,78.5L137.2,77.6L139.2,75Z" fill="currentColor" stroke="none"/><path d="M198.9,78.5L218.1,64.2"/><path d="M218.1,64.2L216.2,67.7L214.2,65Z" fill="currentColor" stroke="none"/><path d="M113,81.1L135.8,88.7"/><path d="M135.8,88.7L131.8,89.1L132.9,86Z" fill="currentColor" stroke="none"/><path d="M204.2,88.7L227,81.1"/><path d="M227,81.1L224,83.8L223,80.7Z" fill="currentColor" stroke="none"/><path d="M110,100L134,100"/><path d="M134,100L130.3,101.6L130.3,98.4Z" fill="currentColor" stroke="none"/><path d="M206,100L230,100"/><path d="M230,100L226.3,101.6L226.3,98.4Z" fill="currentColor" stroke="none"/><path d="M113,118.9L135.8,111.3"/><path d="M135.8,111.3L132.9,114L131.8,110.9Z" fill="currentColor" stroke="none"/><path d="M204.2,111.3L227,118.9"/><path d="M227,118.9L223,119.3L224,116.2Z" fill="currentColor" stroke="none"/><path d="M121.9,135.8L141.1,121.5"/><path d="M141.1,121.5L139.2,125L137.2,122.4Z" fill="currentColor" stroke="none"/><path d="M198.9,121.5L218.1,135.8"/><path d="M218.1,135.8L214.2,135L216.2,132.3Z" fill="currentColor" stroke="none"/><path d="M122,70L122,130" stroke="#E0B400" stroke-width="3"/><path d="M218,70L218,130" stroke="#E0B400" stroke-width="3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="70" y="104" font-weight="bold">N</text><text x="270" y="104" font-weight="bold">S</text><text x="170" y="104" font-size="11">soft iron</text><text x="122" y="62" font-size="11">coil</text><text x="170" y="188" font-size="11">radial field: B ∥ plane of coil in every position</text></g></svg>
caption: Concave pole pieces and a soft-iron core make the field radial, so the plane of the coil is always along B and the torque NIAB does not depend on the angle.
part: 70, 100 | Concave N pole | Shaped to make the field radial.
part: 270, 100 | Concave S pole | Radial field: coil plane always along B.
part: 170, 100 | Soft-iron core | Makes the field radial and stronger.
part: 122, 100 | Coil side | Deflecting torque NIAB, balanced by kφ.
```

The concave poles and the iron core make the field **radial**: whichever way the coil turns, its plane stays along the field lines, so $\sin\theta=1$ and the deflecting torque is simply $NIAB$. The soft-iron core also makes the field stronger. In equilibrium the deflecting torque equals the restoring torque.

:::formula Galvanometer
$NIAB=k\phi\Rightarrow\phi=\dfrac{NAB}{k}I$ (deflection proportional to current)

Current sensitivity $\dfrac{\phi}{I}=\dfrac{NAB}{k}$;   voltage sensitivity $\dfrac{\phi}{V}=\dfrac{NAB}{kG}$ ($G$ = coil resistance)
:::

Doubling the number of turns doubles the current sensitivity, but it also doubles the coil's resistance, so the voltage sensitivity stays the same.

A galvanometer is converted into an **ammeter** by connecting a small resistance (shunt) in parallel, so most of the current bypasses the coil. It becomes a **voltmeter** with a large resistance in series, so it draws very little current.

:::formula Conversion to ammeter and voltmeter
Ammeter (range $I$): shunt $S=\dfrac{I_gG}{I-I_g}$ in parallel

Voltmeter (range $V$): series resistance $R=\dfrac{V}{I_g}-G$
:::

:::skeleton Worked example: making an ammeter
*A galvanometer of resistance 15 Ω gives full-scale deflection at 4 mA. What shunt converts it into an ammeter of range 6 A?*

$S=\dfrac{I_gG}{I-I_g}$ [½]

$=\dfrac{4\times10^{-3}\times15}{6-0.004}\approx$ **$1.0\times10^{-2}$ Ω, in parallel** [½]
:::

:::tip Ideal meters
An ideal ammeter has zero resistance and an ideal voltmeter infinite resistance, so neither disturbs the circuit. A shunt goes in parallel; a voltmeter resistance goes in series.
:::

```ng-steps
id: galvanometer-working
title: How a moving coil galvanometer measures current
step: Current $I$ flows through the coil of $N$ turns, area $A$, in the radial field $B$.
step: The two vertical sides feel equal and opposite forces: a **deflecting torque** $NIAB$ (the radial field keeps $\sin\theta=1$).
step: As the coil turns, the spring twists and gives a **restoring torque** $k\phi$.
step: The coil stops where they balance: $NIAB=k\phi$, so $\phi=\dfrac{NAB}{k}I$ and the pointer reading is proportional to the current.
```

```ng-numerical
id: shunt-resistance
title: Converting a galvanometer into an ammeter
question: A galvanometer of resistance {{G}} Ω gives full-scale deflection at {{Ig}} mA. What shunt converts it into an ammeter of range {{I}} A?
var: G | 10 | 100 | 10
var: Ig | 1 | 10 | 1
var: I | 1 | 10 | 1
answer: Ig*1e-3*G/(I - Ig*1e-3)
unit: Ω
step: $S=\dfrac{I_gG}{I-I_g}=\dfrac{ {{Ig}}\times10^{-3}\times{{G}} }{ {{I}}-{{Ig/1000}} }$
step: $S=$ **{{Ig*1e-3*G/(I - Ig*1e-3)}} Ω**, connected in parallel
```

```ng-compare
id: ammeter-vs-voltmeter
title: Ammeter vs voltmeter from a galvanometer
cols: Ammeter | Voltmeter
row: Extra resistance | small shunt $S=\dfrac{I_gG}{I-I_g}$ | large $R=\dfrac{V}{I_g}-G$
row: Connected to the galvanometer | in parallel | in series
row: Connected in the circuit | in series | in parallel
row: Ideal resistance | zero | infinite
```

```ng-mnemonic
id: ammeter-shunt
title: Where does the extra resistance go?
trick: **"Ammeter ko chhota shunt, Voltmeter ko bada resistor"**
meaning: Ammeter: a **small** resistance in **parallel** (shunt).
meaning: Voltmeter: a **large** resistance in **series**.
prompt: How is a galvanometer converted into an ammeter and into a voltmeter?
```

```ng-derive
id: derive-galvanometer
title: Theory of the moving coil galvanometer
prompt: Explain the principle of a moving coil galvanometer, why the field is made radial, and obtain its current sensitivity.
time: 6
check: Labelled diagram: coil, concave pole pieces, soft-iron core, spring | 1
check: Radial field keeps the coil's plane along B, so deflecting torque $=NIAB$ | 1
check: Balance with restoring torque: $NIAB=k\phi$ | 0.5
check: Current sensitivity $\dfrac{\phi}{I}=\dfrac{NAB}{k}$ | 0.5
```

```ng-draw
id: draw-galvanometer
title: Draw the moving coil galvanometer (top view)
svg: ref: notes#ch04-mcg
time: 3
```

**In one breath:** A radial field makes the galvanometer's deflection proportional to current ($NIAB=k\phi$); a small parallel shunt makes an ammeter, a large series resistance a voltmeter.
