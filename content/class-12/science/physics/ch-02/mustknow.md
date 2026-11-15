# Ch 2 · Electrostatic Potential and Capacitance — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ most years · ★★ often · ★ sometimes. Type: `Dv` derivation · `N` numerical · `Df` definition · `G` graph/diagram · `R` reason.

1. ★★★ `Dv` Capacitance of a parallel-plate capacitor, with and without a dielectric slab. [3–5]
2. ★★★ `Dv` `N` Energy stored in a capacitor; energy density $\tfrac12\varepsilon_0E^2$; energy lost in sharing. [2–3]
3. ★★★ `N` Series–parallel networks: equivalent $C$, charge and voltage on each. [2–3]
4. ★★ `N` Effect of a dielectric with the battery connected / disconnected on $C$, $Q$, $V$, $E$, $U$. [1–3]
5. ★★ `Dv` Potential of a point charge or a dipole; potential energy of a system of charges. [2–3]
6. ★★ `G` `R` Equipotential surfaces (point charge, uniform field); why $E\perp$ equipotentials; conductor properties. [1–2]

## Must-know lines and definitions

- **Electric potential:** work done per unit positive charge in bringing it from infinity.
- **SI unit of potential:** 1 J of work per coulomb of charge.
- **Equipotential surface:** surface on which every point has the same potential.
- **Field and equipotentials:** field is always perpendicular to equipotential surfaces.
- **Electrostatic shielding:** field inside a cavity of a conductor is zero.
- **Inside a conductor:** $E=0$, $V$ constant, no net charge.
- **Excess charge on a conductor:** resides on the outer surface, densest at sharp points.
- **Polar molecule:** has a permanent dipole moment, e.g. H₂O, HCl.
- **Non-polar molecule:** centres of + and − charge coincide, e.g. O₂, H₂.
- **Dielectric polarisation:** dipole moment per unit volume of a dielectric.
- **Dielectric constant:** $K=\varepsilon/\varepsilon_0$; factor by which a dielectric reduces the field.
- **Capacitance of a capacitor:** ratio of charge on a plate to the potential difference, $C=Q/V$.
- **SI unit of capacitance:** capacitance that stores 1 C per volt.

## Key formulas

:::formula Potential of a point charge
$V=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r}$; many charges: add $V$'s as scalars with signs.
:::

:::formula Potential of a dipole
$V=\dfrac{1}{4\pi\varepsilon_0}\dfrac{p\cos\theta}{r^2}$; zero on the equatorial line.
:::

:::formula Field from potential
$E=-\dfrac{dV}{dr}$; uniform field $E=V/d$.
:::

:::formula Potential energy of two charges
$U=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r}$; sum over every pair for a system.
:::

:::formula Dipole energy in a uniform field
$U=-\vec p\cdot\vec E=-pE\cos\theta$; work to turn $\theta_1\to\theta_2$: $pE(\cos\theta_1-\cos\theta_2)$.
:::

:::formula Parallel-plate capacitor
$C=\dfrac{\varepsilon_0A}{d}$; with dielectric $C=\dfrac{K\varepsilon_0A}{d}$.
:::

:::formula Capacitor with a slab
$C=\dfrac{\varepsilon_0A}{d-t\left(1-\frac1K\right)}$; metal slab: $\dfrac{\varepsilon_0A}{d-t}$.
:::

:::formula Capacitors in series and parallel
Series $\dfrac1C=\sum\dfrac1{C_i}$ (same $Q$); parallel $C=\sum C_i$ (same $V$).
:::

:::formula Energy in a capacitor
$U=\dfrac{Q^2}{2C}=\dfrac12CV^2=\dfrac12QV$; energy density $u=\dfrac12\varepsilon_0E^2$.
:::

## Answer skeletons

:::skeleton Dv · Parallel-plate capacitor (2 marks)
Field between plates $E=\sigma/\varepsilon_0=Q/A\varepsilon_0$ (sheets add inside, cancel outside) [½] → $V=Ed=Qd/A\varepsilon_0$ [½] → $C=Q/V=\varepsilon_0A/d$ [1]
:::

:::skeleton Dv · Energy stored (3 marks)
At charge $q$, $V=q/C$; $dW=(q/C)dq$ [1] → $U=\int_0^Q (q/C)\,dq=Q^2/2C=\tfrac12CV^2$ [1] → $C=\varepsilon_0A/d$, $V=Ed$, volume $Ad$: $u=\tfrac12\varepsilon_0E^2$ [1]
:::

:::skeleton Dv · Potential of a point charge (2 marks)
Work to move test charge $dr$ against the field: $dW=-\dfrac{kQ}{r^2}dr$ [½] → $V=-\int_\infty^r\dfrac{kQ}{r^2}dr$ [½] → $V=\dfrac{kQ}{r}$ [1]
:::

:::skeleton N · Network (3 marks)
Reduce parallel groups → reduce series → $C_\text{eq}$ [1] → $Q=C_\text{eq}V$ through series parts [1] → split voltage, then charge in each parallel branch; energy if asked [1]
:::

## Quick 1-mark facts (MCQ, A–R)

- **Work along an equipotential:** zero.
- **Equipotentials of a point charge:** concentric spheres, farther apart outward.
- **Two equipotentials:** never intersect.
- **Equatorial line of a dipole:** $V=0$ but $E\neq0$.
- **Electrostatic force:** conservative, so work round a closed path is zero.
- **Dielectric in, battery connected:** $C$, $Q$, $U$ × K; $E$ unchanged.
- **Dielectric in, battery removed:** $C$ × K; $V$, $E$, $U$ ÷ K.
- **n identical capacitors:** series $C/n$, parallel $nC$; ratio $n^2$.
- **Capacitor in a DC circuit (steady state):** no current flows through it.
- **Metal slab filling the gap:** capacitance becomes infinite (plates shorted).

## Mark-losing traps

:::tip Potential is a scalar
Add potentials with signs; never resolve them into components.
:::

:::tip Missing pair in system energy
Three charges have 3 pairs, four charges have 6; include every pair once.
:::

:::tip Series capacitors share charge
In series the charge is the same on each, not the voltage; split $V$ in inverse ratio of $C$.
:::

:::tip Units in capacitance
Convert µF, pF, cm² and mm to SI before using $C=\varepsilon_0A/d$.
:::

:::tip Energy in charge sharing
Charge is conserved when capacitors are joined; energy is not.
:::
