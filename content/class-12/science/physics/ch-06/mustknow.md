# Ch 6 · Electromagnetic Induction — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ most years · ★★ often · ★ sometimes. Type: `Dv` derivation · `N` numerical · `Df` definition · `G` diagram · `R` reason.

1. ★★★ `Df` `R` Faraday's and Lenz's laws; Lenz's law as energy conservation; direction of induced current. [1–3]
2. ★★★ `Dv` Mutual inductance of two long coaxial solenoids; self-inductance of a solenoid. [3]
3. ★★ `Dv` `N` Motional emf $Blv$ (flux method or Lorentz force); current, force, power. [2–3]
4. ★★ `N` Induced emf from a changing $B$, area or angle; charge through a coil. [2–3]
5. ★★ `Dv` Energy stored in an inductor $\tfrac12LI^2$. [2]
6. ★ `MCQ` Magnet falling through a coil: acceleration less than g; direction of current. [1]

## Must-know lines and definitions

- **Magnetic flux:** $\Phi=BA\cos\theta$; scalar; unit weber (T m²).
- **Electromagnetic induction:** emf produced in a circuit by a changing magnetic flux.
- **Faraday's law:** induced emf equals the rate of change of flux linkage.
- **Lenz's law:** induced current opposes the change in flux that produces it.
- **Lenz's law and energy:** it is a consequence of conservation of energy.
- **Motional emf:** emf $Blv$ across a conductor moving through a magnetic field.
- **Self-induction:** emf induced in a coil by a change in its own current.
- **Self-inductance:** flux linkage per unit current, $L=N\Phi/I$.
- **Henry:** inductance in which 1 A s⁻¹ change of current induces 1 V.
- **Mutual induction:** emf induced in one coil by a changing current in another.
- **Mutual inductance:** flux linkage in coil 2 per unit current in coil 1.
- **Inductance as inertia:** opposes changes in current, not the current itself.

## Key formulas

:::formula Faraday's law
$\varepsilon=-N\dfrac{d\Phi_B}{dt}$; $\Phi_B=BA\cos\theta$.
:::

:::formula Motional emf
$\varepsilon=Blv$; $I=Blv/R$; force needed $F=B^2l^2v/R$.
:::

:::formula Self-induced emf
$N\Phi=LI$; $\varepsilon=-L\dfrac{dI}{dt}$.
:::

:::formula Self-inductance of a solenoid
$L=\mu_0n^2Al=\dfrac{\mu_0N^2A}{l}$; with core multiply by $\mu_r$.
:::

:::formula Mutual inductance of coaxial solenoids
$M=\mu_0n_1n_2\pi r_1^2l$; $\varepsilon_2=-M\,dI_1/dt$.
:::

:::formula Energy stored in an inductor
$U=\dfrac12LI^2$.
:::

:::formula Charge through a coil
$q=\dfrac{N\,\Delta\Phi}{R}$ (independent of time taken).
:::

## Answer skeletons

:::skeleton Dv · Mutual inductance (3 marks)
Diagram of coaxial solenoids [½] → $B_2=\mu_0n_2I_2$ [½] → $N_1\Phi_1=n_1l\cdot\pi r_1^2\cdot\mu_0n_2I_2$ [1] → $M=\mu_0n_1n_2\pi r_1^2l$ [1]
:::

:::skeleton Dv · Motional emf (2 marks)
$\Phi=Blx$ [½] → $\varepsilon=-d\Phi/dt=-Bl\,dx/dt$ [½] → $|\varepsilon|=Blv$ [1]
:::

:::skeleton Dv · Energy in an inductor (2 marks)
Power against back emf $P=Li\,\frac{di}{dt}$ [½] → $dW=Li\,di$ [½] → $W=\int_0^I Li\,di=\tfrac12LI^2$ [1]
:::

:::skeleton R · Lenz and energy (2 marks)
If induced current aided the change, the magnet would accelerate with no work input [1] → energy from nothing violates conservation; so it must oppose, and work done appears as electrical energy [1]
:::

## Quick 1-mark facts (MCQ, A–R)

- **Steady current in a nearby coil:** no induced emf.
- **Loop moving in a uniform field, flux constant:** no emf.
- **Magnet dropped through a coil:** falls with acceleration less than g.
- **N pole approaching a coil:** near face of coil becomes N.
- **Doubling turns of a solenoid (same length):** L becomes four times.
- **Soft-iron core in a coil:** increases L (and M) by $\mu_r$.
- **Spark at switch-off:** large back emf $L\,dI/dt$ when current falls quickly.
- **$M_{12}$ vs $M_{21}$:** equal.
- **SI unit of inductance:** henry (Wb A⁻¹, V s A⁻¹).

## Mark-losing traps

:::tip Opposes change, not field
Decreasing flux: the induced field points the same way as the original field.
:::

:::tip Number of turns
Faraday's emf has a factor N for a coil; forgetting it is the commonest slip.
:::

:::tip Inner radius in M
Use the inner solenoid's cross-section $\pi r_1^2$ in $M=\mu_0n_1n_2\pi r_1^2l$.
:::

:::tip Angle in flux
$\theta$ is between $\vec B$ and the normal to the coil; a coil "in the plane of the field" has zero flux.
:::

:::tip Eddy currents are out
Eddy currents as a topic (damping, induction furnace) are not in boards; they appear only as a transformer loss.
:::
