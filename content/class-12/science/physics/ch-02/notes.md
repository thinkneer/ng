# Ch 2 · Electrostatic Potential and Capacitance

In Chapter 1 we described charges with forces and fields, which are vectors. This chapter brings in an easier tool: **potential**, a scalar that tells you the energy story. It then uses that tool to understand conductors, insulators in a field, and the capacitor, a device that stores charge and energy and sits inside almost every circuit you use.

## Potential energy and potential

Lifting a stone against gravity stores energy in it; the work you do does not depend on the route you take. The electrostatic force behaves the same way: it is **conservative**, so the work done in moving a charge from one point to another depends only on the end points. That lets us define a potential energy, and from it a potential.

Bring a small positive test charge $q$ from infinity to a point P without speeding it up. The work done against the field, per unit charge, is the **electric potential** at P.

:::formula Electric potential
$V_P=\dfrac{W_{\infty\to P}}{q}$; unit volt, 1 V = 1 J C⁻¹

Potential difference: $V_B-V_A=\dfrac{W_{A\to B}}{q}$, and the work done on any charge is $W=q(V_B-V_A)$
:::

For a point charge $Q$, push the test charge in from infinity to distance $r$ against the Coulomb force and add up the work: the result is the potential of a point charge.

:::formula Potential of a point charge
$V=\dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r}$ (positive near $+Q$, negative near $-Q$, zero at infinity)

Many charges: $V=\dfrac{1}{4\pi\varepsilon_0}\sum\dfrac{q_i}{r_i}$, added as plain numbers with their signs
:::

Because potential is a scalar, adding potentials is just arithmetic. That is its great advantage over the field.

:::tip Adding potentials like vectors
Potential has no direction. Four charges $+q,+q,-q,-q$ at the corners of a square give $V=0$ at the centre, even though $E$ there is not zero.
:::

```ng-graph
id: potential-vs-field
title: Potential and field of a point charge
x: r (cm) | 1 | 20
y: value | 0 | 100
curve: V (kV) | 0.9*q*10/x
curve: E (kN/C) | 90*q/x^2
slider: q | $q$ (nC) | 1 | 10 | 1 | 5
note: $V$ falls as $1/r$, $E$ as $1/r^2$: the field falls off faster.
```

```ng-numerical
id: potential-and-work
title: Potential and work with fresh numbers
question: Find the potential at a point {{r}} cm from a charge of {{q}} nC, and the work done in bringing a charge of {{q0}} nC from infinity to that point.
var: q | 2 | 20 | 2
var: r | 5 | 30 | 5
var: q0 | 1 | 5 | 1
let: V = 9e9*q*1e-9/(r/100)
answer: q0*1e-9*V
unit: J
step: $V=\dfrac{kq}{r}=\dfrac{9\times10^9\times{{q}}\times10^{-9}}{ {{r/100}} }={{V:1}}$ V
step: $W=q_0V={{q0}}\times10^{-9}\times{{V:1}}=$ **{{q0*1e-9*V}} J**
```

**In one breath:** The electrostatic force is conservative, so we can define potential $V=W/q$ (work per unit charge from infinity). For a point charge $V=kQ/r$, and for many charges you add the $V$'s with their signs.

## Potential of a dipole, and the link between E and V

For a dipole, add the potentials of $+q$ and $-q$ at a point at distance $r$ from the centre, at angle $\theta$ to the axis. For $r\gg a$ the two distances are $r\mp a\cos\theta$, and the result simplifies neatly.

:::formula Potential of a dipole
$V=\dfrac{1}{4\pi\varepsilon_0}\dfrac{p\cos\theta}{r^2}$ (for $r\gg a$)

Axial point ($\theta=0$): $V=\dfrac{kp}{r^2}$ · equatorial point ($\theta=90^\circ$): $V=0$
:::

So a dipole's potential falls as $1/r^2$, one power faster than a point charge, and it depends on direction. Notice that on the equatorial line $V=0$ but $E\neq0$: zero potential does not mean zero field.

Field and potential are two descriptions of the same thing. The field points in the direction in which the potential falls fastest, and its size is how fast it falls with distance.

:::formula Field from potential
$E=-\dfrac{dV}{dr}$ (the minus sign: $E$ points from high to low potential)

Uniform field between points $d$ apart: $E=\dfrac{V}{d}$
:::

:::skeleton Worked example: field from a potential
*The potential in a region is $V=4x^2$ volt. Find the field at $x=1$ m.*

$E=-\dfrac{dV}{dx}=-8x$ [½]

At $x=1$ m: $E=-8$ V m⁻¹, i.e. **8 V m⁻¹ along $-x$** [½]
:::

**In one breath:** A dipole's potential is $kp\cos\theta/r^2$, zero on the equatorial line. The field is minus the slope of the potential, so it points from high to low $V$.

## Equipotential surfaces

An **equipotential surface** joins points at the same potential. Moving a charge along it needs no work, because $\Delta V=0$. That has a direct consequence: the field can have no component along the surface, so **the field is always perpendicular to an equipotential surface**.

```ng-figure
id: ch02-equipotentials
title: Equipotential surfaces
svg:
<svg viewBox="0 0 380 178" role="img" aria-label="Equipotential surfaces for a point charge and for a uniform field" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle class="u" cx="85" cy="85" r="20" stroke-dasharray="4 3"/><circle class="u" cx="85" cy="85" r="36" stroke-dasharray="4 3"/><circle class="u" cx="85" cy="85" r="58" stroke-dasharray="4 3"/><path d="M95.2,89.2L155.2,114.1"/><path d="M155.2,114.1L150.2,114.2L151.8,110.5Z" fill="currentColor" stroke="none"/><path d="M89.2,95.2L114.1,155.2"/><path d="M114.1,155.2L110.5,151.8L114.2,150.2Z" fill="currentColor" stroke="none"/><path d="M80.8,95.2L55.9,155.2"/><path d="M55.9,155.2L55.8,150.2L59.5,151.8Z" fill="currentColor" stroke="none"/><path d="M74.8,89.2L14.8,114.1"/><path d="M14.8,114.1L18.2,110.5L19.8,114.2Z" fill="currentColor" stroke="none"/><path d="M74.8,80.8L14.8,55.9"/><path d="M14.8,55.9L19.8,55.8L18.2,59.5Z" fill="currentColor" stroke="none"/><path d="M80.8,74.8L55.9,14.8"/><path d="M55.9,14.8L59.5,18.2L55.8,19.8Z" fill="currentColor" stroke="none"/><path d="M89.2,74.8L114.1,14.8"/><path d="M114.1,14.8L114.2,19.8L110.5,18.2Z" fill="currentColor" stroke="none"/><path d="M95.2,80.8L155.2,55.9"/><path d="M155.2,55.9L151.8,59.5L150.2,55.8Z" fill="currentColor" stroke="none"/><circle cx="85" cy="85" r="9"/><path d="M81,85L89,85"/><path d="M85,81L85,89"/><path class="u" d="M222,40L368,40" stroke-dasharray="4 3"/><path class="u" d="M222,70L368,70" stroke-dasharray="4 3"/><path class="u" d="M222,100L368,100" stroke-dasharray="4 3"/><path class="u" d="M222,130L368,130" stroke-dasharray="4 3"/><path d="M240,152L240,22"/><path d="M240,22L242,26.6L238,26.6Z" fill="currentColor" stroke="none"/><path d="M275,152L275,22"/><path d="M275,22L277,26.6L273,26.6Z" fill="currentColor" stroke="none"/><path d="M310,152L310,22"/><path d="M310,22L312,26.6L308,26.6Z" fill="currentColor" stroke="none"/><path d="M345,152L345,22"/><path d="M345,22L347,26.6L343,26.6Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="92" y="172" font-size="11">point charge: concentric spheres</text><text x="372" y="22" text-anchor="end" font-style="italic">E</text><text x="292" y="172" font-size="11">uniform field: equal spacing</text></g></svg>
caption: Dashed = equipotential surfaces, solid arrows = field lines. The field is always perpendicular to the equipotentials and points towards lower potential.
part: 85, 85 | Point charge | Its equipotentials are concentric spheres.
part: 121, 85 | Equipotential sphere | V = kq/r is the same everywhere on it.
part: 300, 70 | Equipotential plane | Perpendicular to the uniform field.
part: 345, 30 | Field line | Points from higher to lower potential.
```

For a point charge $V=kQ/r$ depends only on $r$, so the equipotentials are concentric spheres. For a uniform field they are equally spaced planes perpendicular to the field. Where equipotentials (drawn for equal steps of $V$) crowd together, the field is strong.

Two equipotential surfaces can never cross: at the crossing point there would be two different normals, so two directions of field.

```ng-draw
id: draw-equipotentials
title: Draw equipotentials for a point charge and a uniform field
svg: ref: notes#ch02-equipotentials
time: 3
```

**In one breath:** Equipotentials are surfaces of equal $V$; no work is done along them, the field meets them at right angles, and they never cross.

## Potential energy of a system of charges

The work needed to assemble a group of charges from infinity is stored as their **potential energy**. Bring $q_1$ in first: no work, since there is no field yet. Then bring $q_2$ to distance $r_{12}$ from it: work $kq_1q_2/r_{12}$. For three or more, add one term for every pair.

:::formula Potential energy of charges
Two charges: $U=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r_{12}}$ (positive for like charges, negative for unlike)

Many charges: $U=\dfrac{1}{4\pi\varepsilon_0}\sum_\text{all pairs}\dfrac{q_iq_j}{r_{ij}}$

Single charge in an external potential: $U=qV$
:::

A dipole in a uniform external field has potential energy that depends on how it points. Turning it from $\theta_1$ to $\theta_2$ against the torque $pE\sin\theta$ needs work $pE(\cos\theta_1-\cos\theta_2)$. Taking $U=0$ at $\theta=90^\circ$:

:::formula Dipole in a uniform field
$U=-\vec p\cdot\vec E=-pE\cos\theta$

Minimum $-pE$ at $\theta=0$ (stable); maximum $+pE$ at $\theta=180^\circ$ (unstable)
:::

:::tip Counting pairs
Three charges have three pairs, four charges have six. Missing one pair is the most common slip in "energy of the system" questions.
:::

```ng-numerical
id: pe-two-charges
title: Potential energy of two charges
question: Charges of $+{{q1}}\ \mu$C and $-{{q2}}\ \mu$C are {{r}} cm apart. Find the potential energy of the pair.
var: q1 | 1 | 9 | 1
var: q2 | 1 | 9 | 1
var: r | 10 | 60 | 10
answer: -9e9*q1*q2*1e-12/(r/100)
unit: J
step: $U=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r}=\dfrac{9\times10^9\times({{q1}}\times10^{-6})\times(-{{q2}}\times10^{-6})}{ {{r/100}} }$
step: $U=$ **{{-9e9*q1*q2*1e-12/(r/100)}} J** (negative: the pair attracts)
```

**In one breath:** The energy of a set of charges is $kq_iq_j/r_{ij}$ summed over every pair; a dipole in a uniform field has $U=-pE\cos\theta$, lowest when it lines up with the field.

## Conductors in electrostatics

A metal is full of free electrons. If any field existed inside it, they would move until it vanished. Once everything settles (electrostatic equilibrium), a conductor obeys a set of rules that are worth knowing word for word:

- The field **inside** the conductor is zero.
- Just outside, the field is **perpendicular** to the surface, with size $\sigma/\varepsilon_0$; otherwise charges would slide along the surface.
- Any excess charge sits on the **outer surface**; there is no net charge inside.
- The whole conductor, inside and surface, is at **one potential**.
- Surface charge density is greatest where the surface curves most sharply, which is why charge leaks from sharp points (the principle of the lightning conductor).

A hollow conductor shields its cavity: whatever charges sit outside, the field inside an empty cavity is zero. This is **electrostatic shielding**, and it is why the inside of a car is a safe place in a thunderstorm.

```ng-figure
id: ch02-shell-graphs
title: E and V for a charged shell
svg:
<svg viewBox="0 0 400 145" role="img" aria-label="E and V against distance for a charged spherical shell" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M30,125L190,125"/><path d="M190,125L185.4,127L185.4,123Z" fill="currentColor" stroke="none"/><path d="M30,125L30,17"/><path d="M30,17L32,21.6L28,21.6Z" fill="currentColor" stroke="none"/><path class="u" d="M30,125L80,125" stroke-width="2.4"/><path d="M80,125L80,35" stroke-dasharray="4 3"/><path class="u" d="M80,35L84.2,48.3L88.3,58.9L92.5,67.4L96.7,74.4L100.8,80.2L105,85L109.2,89.1L113.3,92.6L117.5,95.6L121.7,98.2L125.8,100.5L130,102.5L134.2,104.3L138.3,105.8L142.5,107.2L146.7,108.5L150.8,109.6L155,110.6L159.2,111.5L163.3,112.3L167.5,113.1L171.7,113.8L175.8,114.4L180,115" stroke-width="2"/><path d="M220,125L380,125"/><path d="M380,125L375.4,127L375.4,123Z" fill="currentColor" stroke="none"/><path d="M220,125L220,17"/><path d="M220,17L222,21.6L218,21.6Z" fill="currentColor" stroke="none"/><path class="u" d="M220,35L270,35" stroke-width="2"/><path d="M270,35L270,125" stroke-dasharray="4 3"/><path class="u" d="M270,35L274.2,41.9L278.3,47.9L282.5,53L286.7,57.5L290.8,61.5L295,65L299.2,68.2L303.3,71L307.5,73.6L311.7,75.9L315.8,78L320,80L324.2,81.8L328.3,83.5L332.5,85L336.7,86.4L340.8,87.8L345,89L349.2,90.2L353.3,91.2L357.5,92.3L361.7,93.2L365.8,94.1L370,95" stroke-width="2"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="190" y="138" text-anchor="end" font-style="italic">r</text><text x="26" y="21" text-anchor="end" font-style="italic">E</text><text x="80" y="138" font-style="italic">R</text><text x="130" y="53" text-anchor="start" font-size="11">E ∝ 1/r²</text><text x="380" y="138" text-anchor="end" font-style="italic">r</text><text x="216" y="21" text-anchor="end" font-style="italic">V</text><text x="270" y="138" font-style="italic">R</text><text x="224" y="29" text-anchor="start" font-size="11">constant inside</text><text x="325" y="77" text-anchor="start" font-size="11">V ∝ 1/r</text></g></svg>
caption: Charged shell (or any charged conductor) of radius R: E is zero inside and jumps at the surface; V is constant inside and equals its surface value.
part: 55, 125 | E inside | Zero everywhere inside the shell.
part: 80, 35 | E at the surface | Largest value, kq/R².
part: 245, 35 | V inside | Constant, equal to the surface value kq/R.
part: 330, 84 | V outside | Falls as 1/r.
```

**In one breath:** In equilibrium a conductor has zero field and constant potential inside, all excess charge on the outer surface, and a field just outside that is normal to the surface; a hollow conductor shields its cavity.

## Dielectrics and polarisation

Insulators have no free electrons, but their charges can still shift a little. In a **non-polar** molecule (O₂, H₂, CO₂) the positive and negative centres coincide; an external field pulls them apart slightly and creates an induced dipole. A **polar** molecule (H₂O, HCl, NH₃) already has a dipole moment, but the molecules point every which way; a field lines them up partly.

Either way the material becomes **polarised**: it acquires a dipole moment per unit volume, $\vec P$. The result is a thin layer of bound charge on each face of the slab, opposite in sign to the charges producing the field. That bound charge sets up a field opposing the applied one, so the field inside the dielectric is reduced.

:::formula Field in a dielectric
$E=\dfrac{E_0}{K}$, where $K$ (dielectric constant) $=\dfrac{\varepsilon}{\varepsilon_0}>1$

Polarisation $\vec P=\chi_e\varepsilon_0\vec E$, with $K=1+\chi_e$
:::

```ng-compare
id: polar-vs-nonpolar
title: Polar vs non-polar molecules
cols: Polar | Non-polar
row: Centres of + and − charge | do not coincide | coincide
row: Permanent dipole moment | yes | no
row: In an external field | dipoles partly line up | dipoles are induced
row: Examples | $\ce{H2O}$, $\ce{HCl}$, $\ce{NH3}$ | $\ce{O2}$, $\ce{H2}$, $\ce{CO2}$
```

**In one breath:** A field induces or aligns molecular dipoles in an insulator; the bound surface charge opposes the field and reduces it by the factor $K$.

## Capacitors and capacitance

A **capacitor** is two conductors separated by an insulator. Connect it to a battery and charge $+Q$ collects on one plate, $-Q$ on the other, with a potential difference $V$ between them. Doubling the charge doubles the voltage, so their ratio is fixed by the capacitor's geometry. That ratio is its **capacitance**.

:::formula Capacitance
$C=\dfrac{Q}{V}$; unit farad, 1 F = 1 C V⁻¹ (practical units µF, nF, pF)
:::

The most important example is the **parallel-plate capacitor**: two plates of area $A$ a small distance $d$ apart. Between the plates each sheet contributes $\sigma/2\varepsilon_0$ in the same direction, so $E=\sigma/\varepsilon_0=Q/A\varepsilon_0$; outside, the two fields cancel. Then $V=Ed=Qd/A\varepsilon_0$, and dividing $Q$ by $V$ gives the capacitance.

:::formula Parallel-plate capacitor
$C_0=\dfrac{\varepsilon_0A}{d}$ (air or vacuum); filled with a dielectric: $C=KC_0=\dfrac{K\varepsilon_0A}{d}$

Slab of thickness $t$ ($t<d$): $C=\dfrac{\varepsilon_0A}{d-t\left(1-\frac1K\right)}$ · metal slab: $C=\dfrac{\varepsilon_0A}{d-t}$
:::

Where does the slab formula come from? The dielectric reduces the field inside itself to $E_0/K$, so less voltage is needed for the same charge, and the capacitance goes up.

```ng-figure
id: ch02-slab
title: Capacitor with a dielectric slab
svg:
<svg viewBox="0 0 320 182" role="img" aria-label="Parallel-plate capacitor with a dielectric slab of thickness t" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="130" y="25" width="60" height="120" fill="#E0B400" fill-opacity="0.22" stroke="#E0B400"/><path d="M90,22L90,148" stroke-width="3"/><path d="M230,22L230,148" stroke-width="3"/><path d="M93,40L127,40"/><path d="M127,40L123.3,41.6L123.3,38.4Z" fill="currentColor" stroke="none"/><path d="M193,40L227,40"/><path d="M227,40L223.3,41.6L223.3,38.4Z" fill="currentColor" stroke="none"/><path d="M93,62L127,62"/><path d="M127,62L123.3,63.6L123.3,60.4Z" fill="currentColor" stroke="none"/><path d="M193,62L227,62"/><path d="M227,62L223.3,63.6L223.3,60.4Z" fill="currentColor" stroke="none"/><path d="M93,85L127,85"/><path d="M127,85L123.3,86.6L123.3,83.4Z" fill="currentColor" stroke="none"/><path d="M193,85L227,85"/><path d="M227,85L223.3,86.6L223.3,83.4Z" fill="currentColor" stroke="none"/><path d="M93,108L127,108"/><path d="M127,108L123.3,109.6L123.3,106.4Z" fill="currentColor" stroke="none"/><path d="M193,108L227,108"/><path d="M227,108L223.3,109.6L223.3,106.4Z" fill="currentColor" stroke="none"/><path d="M93,130L127,130"/><path d="M127,130L123.3,131.6L123.3,128.4Z" fill="currentColor" stroke="none"/><path d="M193,130L227,130"/><path d="M227,130L223.3,131.6L223.3,128.4Z" fill="currentColor" stroke="none"/><path d="M133,50L187,50" stroke-width="1"/><path d="M187,50L183.3,51.6L183.3,48.4Z" fill="currentColor" stroke="none"/><path d="M133,85L187,85" stroke-width="1"/><path d="M187,85L183.3,86.6L183.3,83.4Z" fill="currentColor" stroke="none"/><path d="M133,120L187,120" stroke-width="1"/><path d="M187,120L183.3,121.6L183.3,118.4Z" fill="currentColor" stroke="none"/><path d="M130,156L190,156"/><path d="M190,156L186.3,157.6L186.3,154.4Z" fill="currentColor" stroke="none"/><path d="M130,156L133.7,154.4L133.7,157.6Z" fill="currentColor" stroke="none"/><path d="M90,174L230,174"/><path d="M230,174L226.3,175.6L226.3,172.4Z" fill="currentColor" stroke="none"/><path d="M90,174L93.7,172.4L93.7,175.6Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="80" y="88" text-anchor="end">+Q</text><text x="240" y="88" text-anchor="start">−Q</text><text x="160" y="72" font-style="italic" font-weight="bold">K</text><text x="110" y="18" font-style="italic">E₀</text><text x="160" y="18" font-style="italic">E₀/K</text><text x="160" y="168" font-style="italic">t</text><text x="250" y="177" text-anchor="start" font-style="italic">d</text></g></svg>
caption: The slab is polarised, so the field inside it drops from E₀ to E₀/K. The air gaps still have E₀ = σ/ε₀.
part: 90, 30 | Positive plate +Q | Charge density σ = Q/A.
part: 230, 30 | Negative plate −Q | Equal and opposite charge.
part: 160, 100 | Dielectric slab, constant K | Field inside drops to E₀/K.
part: 110, 62 | Air gap | Field E₀ = σ/ε₀.
```

:::skeleton Answer skeleton: capacitor with a dielectric slab (3 marks)
In the air gaps $E_0=\dfrac{\sigma}{\varepsilon_0}=\dfrac{Q}{A\varepsilon_0}$ [½]; inside the slab $E=\dfrac{E_0}{K}$ [½]

$V=E_0(d-t)+\dfrac{E_0}{K}t=\dfrac{Q}{A\varepsilon_0}\left[d-t+\dfrac tK\right]$ [1]

$C=\dfrac QV=$ **$\dfrac{\varepsilon_0A}{d-t\left(1-\frac1K\right)}$** [1]

Check: $t=d$ gives $K\varepsilon_0A/d$, the fully filled capacitor.
:::

```ng-numerical
id: parallel-plate-c
title: Capacitance of a parallel-plate capacitor
question: A parallel-plate capacitor has plates of area {{A}} cm² separated by {{d}} mm. Find its capacitance in air, and with a dielectric of $K={{K}}$ filling the gap.
var: A | 50 | 500 | 50
var: d | 1 | 5 | 1
var: K | 2 | 8 | 1
let: C0 = 8.854e-12*A*1e-4/(d*1e-3)
answer: K*C0*1e12
unit: pF
step: $C_0=\dfrac{\varepsilon_0A}{d}=\dfrac{8.854\times10^{-12}\times{{A}}\times10^{-4}}{ {{d}}\times10^{-3}}={{C0*1e12}}$ pF
step: With the dielectric: $C=KC_0={{K}}\times{{C0*1e12}}=$ **{{K*C0*1e12}} pF**
```

```ng-graph
id: slab-capacitance
title: How a slab raises the capacitance
x: t/d (fraction of gap filled) | 0 | 1
y: C/C₀ | 1 | 10
curve: dielectric slab | 1/(1 - x*(1 - 1/K))
curve: metal slab | 1/(1 - min(x, 0.9))
slider: K | $K$ | 1 | 10 | 0.5 | 4
note: A full dielectric gives $C=KC_0$. A metal slab acts like $K\to\infty$ and shortens the gap to $d-t$.
```

```ng-derive
id: derive-slab-capacitance
title: Derive the capacitance with a dielectric slab
prompt: A parallel-plate capacitor (area $A$, separation $d$) has a dielectric slab of thickness $t$ and constant $K$ between its plates. Derive its capacitance.
time: 6
check: Field in the air gaps $E_0=\sigma/\varepsilon_0=Q/A\varepsilon_0$ | 0.5
check: Field inside the slab $E_0/K$ (polarisation reduces it) | 0.5
check: $V=E_0(d-t)+\dfrac{E_0}{K}t$ | 1
check: $C=\dfrac QV=\dfrac{\varepsilon_0A}{d-t\left(1-\frac1K\right)}$ | 1
```

```ng-draw
id: draw-slab-capacitor
title: Draw a capacitor with a dielectric slab
svg: ref: notes#ch02-slab
time: 3
```

**In one breath:** Capacitance $C=Q/V$ depends only on geometry and the insulator; for parallel plates $C=\varepsilon_0A/d$, multiplied by $K$ when filled with a dielectric.

## Combining capacitors

```ng-figure
id: ch02-combos
title: Series and parallel capacitors
svg:
<svg viewBox="0 0 360 112" role="img" aria-label="Capacitors in series and in parallel" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15,50L30,50"/><g transform="translate(55,50) rotate(0)"><path d="M-25,0L-3.5,0"/><path d="M-3.5,-10L-3.5,10" stroke-width="2"/><path d="M3.5,-10L3.5,10" stroke-width="2"/><path d="M3.5,0L25,0"/></g><g transform="translate(105,50) rotate(0)"><path d="M-25,0L-3.5,0"/><path d="M-3.5,-10L-3.5,10" stroke-width="2"/><path d="M3.5,-10L3.5,10" stroke-width="2"/><path d="M3.5,0L25,0"/></g><g transform="translate(155,50) rotate(0)"><path d="M-25,0L-3.5,0"/><path d="M-3.5,-10L-3.5,10" stroke-width="2"/><path d="M3.5,-10L3.5,10" stroke-width="2"/><path d="M3.5,0L25,0"/></g><path d="M180,50L195,50"/><g transform="translate(285,22) rotate(0)"><path d="M-45,0L-3.5,0"/><path d="M-3.5,-10L-3.5,10" stroke-width="2"/><path d="M3.5,-10L3.5,10" stroke-width="2"/><path d="M3.5,0L45,0"/></g><g transform="translate(285,50) rotate(0)"><path d="M-45,0L-3.5,0"/><path d="M-3.5,-10L-3.5,10" stroke-width="2"/><path d="M3.5,-10L3.5,10" stroke-width="2"/><path d="M3.5,0L45,0"/></g><g transform="translate(285,78) rotate(0)"><path d="M-45,0L-3.5,0"/><path d="M-3.5,-10L-3.5,10" stroke-width="2"/><path d="M3.5,-10L3.5,10" stroke-width="2"/><path d="M3.5,0L45,0"/></g><path d="M240,22L240,78"/><path d="M330,22L330,78"/><path d="M222,50L240,50"/><path d="M330,50L348,50"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="55" y="34" font-style="italic">C1</text><text x="105" y="34" font-style="italic">C2</text><text x="155" y="34" font-style="italic">C3</text><text x="105" y="95">series: same Q on each</text><text x="296" y="16" text-anchor="start" font-style="italic">C1</text><text x="296" y="44" text-anchor="start" font-style="italic">C2</text><text x="296" y="72" text-anchor="start" font-style="italic">C3</text><text x="285" y="105">parallel: same V on each</text></g></svg>
caption: Series: one path, so every plate gets the same charge Q. Parallel: every capacitor is connected across the same two points, so each has the same V.
part: 55, 50 | Series capacitor | Every capacitor in series carries the same charge Q.
part: 285, 22 | Parallel capacitor | Every capacitor in parallel has the same voltage V.
part: 240, 50 | Common junction | In parallel the charges add: C = C₁ + C₂ + C₃.
```

In **series**, the inner plates are isolated, so charge induced on them is equal and opposite: every capacitor carries the same $Q$, and the voltages add. In **parallel**, every capacitor is across the same two points, so each has the same $V$, and the charges add.

:::formula Series and parallel capacitors
Series: $\dfrac{1}{C}=\dfrac{1}{C_1}+\dfrac{1}{C_2}+\dots$ (same $Q$; $C$ is less than the smallest)

Parallel: $C=C_1+C_2+\dots$ (same $V$)
:::

Notice that capacitors combine the opposite way to resistors.

:::skeleton Worked example: a network
*$C_1=6$ µF in series with $C_2=2$ µF $\parallel$ $C_3=4$ µF, across 12 V. Find the equivalent capacitance and the charge on each.*

$C_2\parallel C_3=6$ µF; in series with 6 µF: **$C_\text{eq}=3$ µF** [1]

$Q=C_\text{eq}V=36$ µC on $C_1$; $V_1=36/6=6$ V, so the pair has 6 V: **$Q_2=12$ µC, $Q_3=24$ µC** [1]
:::

```ng-numerical
id: capacitor-network
title: A series–parallel network
question: A {{C1}} µF capacitor is in series with a parallel pair of {{C2}} µF and {{C3}} µF, across a {{V}} V battery. Find the charge on the {{C1}} µF capacitor.
var: C1 | 2 | 12 | 2
var: C2 | 1 | 6 | 1
var: C3 | 1 | 6 | 1
var: V | 6 | 24 | 6
let: Cp = C2 + C3
let: Ceq = C1*Cp/(C1 + Cp)
answer: Ceq*V
unit: µC
step: Parallel pair: $C_p={{C2}}+{{C3}}={{Cp}}$ µF
step: Series with $C_1$: $C_\text{eq}=\dfrac{ {{C1}}\times{{Cp}} }{ {{C1}}+{{Cp}} }={{Ceq}}$ µF
step: $Q=C_\text{eq}V={{Ceq}}\times{{V}}=$ **{{Ceq*V}} µC** (the same on $C_1$ and on the pair)
```

```ng-mnemonic
id: capacitor-opposite-resistor
title: Series and parallel for capacitors
trick: **"C is the ulta (opposite) of R"**
meaning: Capacitors in **series** add as reciprocals ($\frac1C=\frac1{C_1}+\frac1{C_2}$); in **parallel** they simply add.
meaning: Resistors do exactly the reverse.
prompt: How do capacitors combine in series and in parallel?
```

**In one breath:** Series capacitors share the same charge and combine as reciprocals; parallel capacitors share the same voltage and simply add.

## Energy stored in a capacitor

Charging a capacitor means moving charge from one plate to the other against the growing voltage between them. When the charge is $q$, the voltage is $q/C$, and moving a further $dq$ costs $dW=(q/C)\,dq$. Adding this from $0$ to $Q$ gives $Q^2/2C$. This work is stored as electrostatic energy.

:::formula Energy stored in a capacitor
$U=\dfrac{Q^2}{2C}=\dfrac12CV^2=\dfrac12QV$

Energy density of the field: $u=\dfrac12\varepsilon_0E^2$ (J m⁻³)
:::

For the parallel-plate capacitor the energy fills the volume $Ad$ between the plates. Put $C=\varepsilon_0A/d$ and $V=Ed$ into $\tfrac12CV^2$ and divide by $Ad$: you get $\tfrac12\varepsilon_0E^2$. So the energy can be thought of as stored in the field itself.

When a charged capacitor is joined to an uncharged one, charge is shared and conserved, but some energy is always lost as heat in the connecting wires.

:::skeleton Worked example: energy lost in sharing
*A 600 pF capacitor charged to 200 V is joined to an uncharged 600 pF capacitor. Find the energy lost.*

$U_i=\tfrac12\times600\times10^{-12}\times200^2=1.2\times10^{-5}$ J [½]

Charge conserved, capacitance doubled: common voltage 100 V [½]

$U_f=\tfrac12\times1200\times10^{-12}\times100^2=6\times10^{-6}$ J [½]

**Energy lost $=6\times10^{-6}$ J** [½]
:::

:::tip Battery on or off?
Dielectric inserted with the battery **connected** ($V$ fixed): $C$, $Q$ and $U$ all become $K$ times; $E$ between the plates is unchanged. Battery **removed** first ($Q$ fixed): $C$ becomes $K$ times, while $V$, $E$ and $U$ fall to $1/K$.
:::

```ng-graph
id: energy-vs-voltage
title: Energy stored grows as V²
x: V (volts) | 0 | 100
y: U (mJ) | 0 | 50
curve: U = ½CV² | 0.5*C*x^2/1000
slider: C | $C$ (µF) | 1 | 10 | 1 | 4
note: Double the voltage and the energy becomes four times; double $C$ and it doubles.
```

```ng-fill
id: dielectric-table
title: Dielectric slab inserted: what changes?
cols: Quantity | Battery connected (V fixed) | Battery removed (Q fixed)
row: Capacitance C | × K | [[× K]]
row: Charge Q | [[× K]] | same
row: Voltage V | same | [[÷ K]]
row: Field E | [[same]] | ÷ K
row: Energy U | [[× K]] | [[÷ K]]
```

```ng-mnemonic
id: jude-raho
title: Battery connected or removed?
trick: **"Jude raho to V wahi, tod do to Q wahi"** (stay connected: V same; cut off: Q same)
meaning: Connected: $V$ fixed, so $C$, $Q$, $U$ all × K.
meaning: Disconnected: $Q$ fixed, so $C$ × K while $V$, $E$, $U$ ÷ K.
prompt: When a dielectric is inserted with the battery disconnected, which quantity stays fixed?
```

**In one breath:** A capacitor stores $U=\tfrac12CV^2=Q^2/2C$, which lives in the field at $\tfrac12\varepsilon_0E^2$ per unit volume; decide first whether $Q$ or $V$ is held fixed.
