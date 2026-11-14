# Ch 5 · Magnetism and Matter

Chapter 4 showed that currents make magnetic fields. This short chapter turns to magnets themselves and to materials. It explains why a bar magnet behaves exactly like a current-carrying solenoid, how a magnet sits in a field, and why some materials are pulled into a field, some are pushed out, and iron is grabbed strongly. For the board, most of this chapter is **qualitative**: know the ideas, the comparisons and the examples.

## The bar magnet and its field lines

Sprinkle iron filings around a bar magnet and they trace out its field lines. The pattern has a few features that matter:

- Field lines are **closed loops**. Outside the magnet they run from the north pole to the south pole; inside, from south back to north.
- They never cross, because the field has one direction at each point.
- Their density shows the strength of the field: crowded near the poles, spread out far away.

<figure class="fig">
<svg viewBox="0 0 380 195" role="img" aria-label="Field lines of a bar magnet forming closed loops" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M130,80L250,80L250,110L130,110Z" stroke-width="2"/><path d="M190,80L190,110"/><path d="M250,88 Q190,40 130,88" stroke="#6A3FA0"/><path d="M187,64L191.6,62L191.6,66Z" fill="#6A3FA0" stroke="none"/><path d="M250,102 Q190,150 130,102" stroke="#6A3FA0"/><path d="M187,126L191.6,124L191.6,128Z" fill="#6A3FA0" stroke="none"/><path d="M250,88 Q190,0 130,88" stroke="#6A3FA0"/><path d="M187,44L191.6,42L191.6,46Z" fill="#6A3FA0" stroke="none"/><path d="M250,102 Q190,190 130,102" stroke="#6A3FA0"/><path d="M187,146L191.6,144L191.6,148Z" fill="#6A3FA0" stroke="none"/><path d="M250,88 Q190,-40 130,88" stroke="#6A3FA0"/><path d="M187,24L191.6,22L191.6,26Z" fill="#6A3FA0" stroke="none"/><path d="M250,102 Q190,230 130,102" stroke="#6A3FA0"/><path d="M187,166L191.6,164L191.6,168Z" fill="#6A3FA0" stroke="none"/><path d="M138,95L242,95" stroke="#6A3FA0" stroke-width="1" stroke-dasharray="4 3"/><path d="M242,95L237.4,97L237.4,93Z" fill="#6A3FA0" stroke="none"/><path d="M250,95L330,95" stroke="#6A3FA0"/><path d="M293,95L288.4,97L288.4,93Z" fill="#6A3FA0" stroke="none"/><path d="M50,95L130,95" stroke="#6A3FA0"/><path d="M93,95L88.4,97L88.4,93Z" fill="#6A3FA0" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="160" y="100" font-weight="bold">S</text><text x="220" y="100" font-weight="bold">N</text><text x="190" y="186" font-size="11">outside N → S, inside S → N: closed loops</text></g></svg>
<figcaption>Magnetic field lines are closed loops: outside the magnet they run from N to S, inside from S to N. A current-carrying solenoid has the same pattern.</figcaption>
</figure>

Electric field lines start on positive charges and end on negative ones. Magnetic field lines never start or end, because there are no isolated magnetic poles (no "magnetic monopoles"). Break a bar magnet in half and you get two smaller magnets, each with its own north and south pole. This fact is written as Gauss's law for magnetism: the net magnetic flux through any closed surface is zero.

:::formula Gauss's law for magnetism
$\displaystyle\oint\vec B\cdot d\vec S=0$ (as many field lines leave a closed surface as enter it)
:::

The poles are named for how a freely hanging magnet settles: its north pole points roughly towards geographic north. Like poles repel and unlike poles attract.

**In one breath:** A bar magnet's field lines are closed loops, N to S outside and S to N inside; there are no monopoles, so the flux through any closed surface is zero.

## A bar magnet is an equivalent solenoid

Compare the field-line pattern of a bar magnet with that of a current-carrying solenoid of the same size: they are practically identical. Outside, both look like the field of a magnetic dipole; inside, both have a nearly uniform field along the axis.

The reason is that a solenoid is a stack of current loops, each a small magnetic dipole, and a bar magnet is built from countless atomic current loops (electrons orbiting and spinning) lined up together. So a bar magnet has a magnetic dipole moment $\vec m$, pointing from its S pole to its N pole, just like a solenoid with $m=NIA$.

Far from a short magnet, its field has the same form as the field of an electric dipole, with $\mu_0/4\pi$ in place of $1/4\pi\varepsilon_0$ and $m$ in place of $p$. The board treats this qualitatively, but the forms help you remember the pattern.

:::formula Field of a short bar magnet (for comparison)
Axial point: $B=\dfrac{\mu_0}{4\pi}\dfrac{2m}{r^3}$ (along $\vec m$) · equatorial point: $B=\dfrac{\mu_0}{4\pi}\dfrac{m}{r^3}$ (opposite to $\vec m$)
:::

| Electric dipole | Magnetic dipole (bar magnet) |
|---|---|
| $\vec p$, from $-q$ to $+q$ | $\vec m$, from S to N |
| $\frac{1}{4\pi\varepsilon_0}$ | $\frac{\mu_0}{4\pi}$ |
| torque $\vec p\times\vec E$ | torque $\vec m\times\vec B$ |
| energy $-\vec p\cdot\vec E$ | energy $-\vec m\cdot\vec B$ |
| field lines start and end on charges | field lines are closed loops |

**In one breath:** A bar magnet behaves like a solenoid because both are made of aligned current loops; its moment $\vec m$ points S to N, and its far field has the dipole form with $\mu_0/4\pi$.

## A magnet in a uniform field

Place a magnet (or any magnetic dipole) in a uniform field. The forces on its two poles are equal and opposite, so there is **no net force**, but they form a couple. The magnet is turned until $\vec m$ points along $\vec B$, exactly as a compass needle swings to line up with the field.

:::formula Torque and energy of a magnetic dipole
$\vec\tau=\vec m\times\vec B$, $\tau=mB\sin\theta$;   $U=-\vec m\cdot\vec B=-mB\cos\theta$

Stable equilibrium at $\theta=0^\circ$ ($U=-mB$); unstable at $\theta=180^\circ$ ($U=+mB$)
:::

Unit of magnetic moment: A m² (equivalently J T⁻¹).

**In one breath:** In a uniform field a magnet feels a torque $\vec m\times\vec B$ that lines it up with the field, but no net force; it is most stable along the field.

## Magnetisation, H and susceptibility

When a material is placed in a magnetising field, its atomic magnetic moments respond, and the material itself becomes magnetised. We need a few quantities to describe this.

- **Magnetisation** $\vec M$: the net magnetic moment per unit volume of the material (unit A m⁻¹).
- **Magnetic intensity** $\vec H$: the part of the field due to the external currents, $H=B_0/\mu_0$ (unit A m⁻¹). Inside a solenoid, $H=nI$.
- The total field inside the material comes from both: $\vec B=\mu_0(\vec H+\vec M)$.

For most materials $\vec M$ is proportional to $\vec H$. The constant is the **magnetic susceptibility** $\chi$, a pure number that measures how readily the material is magnetised.

:::formula Magnetic susceptibility and permeability
$\vec M=\chi\vec H$;   $\vec B=\mu_0(1+\chi)\vec H=\mu\vec H$

Relative permeability $\mu_r=\dfrac{\mu}{\mu_0}=1+\chi$
:::

**In one breath:** A material in a field gets a magnetisation $M=\chi H$; the field inside is $\mu_0(H+M)=\mu H$ with $\mu_r=1+\chi$.

## Diamagnetism, paramagnetism and ferromagnetism

Materials are sorted by the sign and size of $\chi$.

<figure class="fig">
<svg viewBox="0 0 400 168" role="img" aria-label="Field lines through diamagnetic, paramagnetic and ferromagnetic samples" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="75" cy="80" r="26" stroke="#6A3FA0" stroke-width="1.6"/><path d="M20,40 Q75,22 130,40"/><path d="M130,40L126.3,41.6L126.3,38.4Z" fill="currentColor" stroke="none"/><path d="M20,60 Q75,42 130,60"/><path d="M130,60L126.3,61.6L126.3,58.4Z" fill="currentColor" stroke="none"/><path d="M20,80 Q75,80 130,80"/><path d="M20,100 Q75,118 130,100"/><path d="M130,100L126.3,101.6L126.3,98.4Z" fill="currentColor" stroke="none"/><path d="M20,120 Q75,138 130,120"/><path d="M130,120L126.3,121.6L126.3,118.4Z" fill="currentColor" stroke="none"/><circle cx="205" cy="80" r="26" stroke="#6A3FA0" stroke-width="1.6"/><path d="M150,40 Q205,54.0 260,40"/><path d="M260,40L256.3,41.6L256.3,38.4Z" fill="currentColor" stroke="none"/><path d="M150,60 Q205,67.0 260,60"/><path d="M260,60L256.3,61.6L256.3,58.4Z" fill="currentColor" stroke="none"/><path d="M150,80 Q205,80.0 260,80"/><path d="M260,80L256.3,81.6L256.3,78.4Z" fill="currentColor" stroke="none"/><path d="M150,100 Q205,93.0 260,100"/><path d="M260,100L256.3,101.6L256.3,98.4Z" fill="currentColor" stroke="none"/><path d="M150,120 Q205,106.0 260,120"/><path d="M260,120L256.3,121.6L256.3,118.4Z" fill="currentColor" stroke="none"/><circle cx="335" cy="80" r="26" stroke="#6A3FA0" stroke-width="1.6"/><path d="M280,40 Q335,70.0 390,40"/><path d="M390,40L386.3,41.6L386.3,38.4Z" fill="currentColor" stroke="none"/><path d="M280,60 Q335,75.0 390,60"/><path d="M390,60L386.3,61.6L386.3,58.4Z" fill="currentColor" stroke="none"/><path d="M280,80 Q335,80.0 390,80"/><path d="M390,80L386.3,81.6L386.3,78.4Z" fill="currentColor" stroke="none"/><path d="M280,100 Q335,85.0 390,100"/><path d="M390,100L386.3,101.6L386.3,98.4Z" fill="currentColor" stroke="none"/><path d="M280,120 Q335,90.0 390,120"/><path d="M390,120L386.3,121.6L386.3,118.4Z" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="75" y="160" font-size="11">diamagnetic</text><text x="205" y="160" font-size="11">paramagnetic</text><text x="335" y="160" font-size="11">ferromagnetic</text></g></svg>
<figcaption>A diamagnetic sample pushes field lines out; a paramagnetic sample draws them in slightly; a ferromagnetic sample concentrates them strongly.</figcaption>
</figure>

**Diamagnetic** materials have atoms with no net magnetic moment. An external field induces a small moment **opposite** to the field (a consequence of the induced change in the orbital motion of electrons). So $\chi$ is small and negative, $\mu_r$ is slightly less than 1, field lines are pushed out of the sample, and it moves from stronger to weaker parts of a field. Examples: bismuth, copper, lead, silicon, water, nitrogen, sodium chloride. A **superconductor** is a perfect diamagnet: it expels the field completely ($\chi=-1$), the **Meissner effect**.

**Paramagnetic** materials have atoms with permanent magnetic moments, but thermal agitation keeps them pointing randomly. An external field lines them up a little. So $\chi$ is small and positive, $\mu_r$ slightly more than 1, field lines are drawn in slightly, and the material is weakly attracted towards stronger field. Examples: aluminium, sodium, calcium, oxygen, copper chloride. Heat randomises the moments, so the susceptibility falls as temperature rises: **Curie's law**, $\chi=C\mu_0/T$.

**Ferromagnetic** materials (iron, cobalt, nickel, gadolinium) also have permanent atomic moments, but neighbouring moments spontaneously line up in small regions called **domains**, each fully magnetised. Without a field the domains point in different directions. An external field makes domains aligned with it grow and others rotate, giving a huge magnetisation. So $\chi$ and $\mu_r$ are very large (thousands), field lines crowd strongly into the sample, and it is strongly attracted. Above a certain temperature, the **Curie temperature** $T_c$, the domain order is destroyed and the material becomes paramagnetic.

| Property | Dia | Para | Ferro |
|---|---|---|---|
| $\chi$ | small, negative | small, positive | very large, positive |
| $\mu_r$ | slightly < 1 | slightly > 1 | ≫ 1 |
| In a non-uniform field | moves to weaker field | moves to stronger field (weakly) | strongly attracted |
| Field lines | pushed out | drawn in slightly | strongly concentrated |
| Effect of temperature | almost none | $\chi\propto1/T$ | becomes para above $T_c$ |

:::tip Diamagnetism is universal
Every material has a diamagnetic response; in para- and ferromagnets it is simply swamped by the much larger effect of the permanent moments.
:::

:::tip Which way does it move?
A diamagnetic liquid in a U-tube between magnet poles is pushed **down** in the arm in the field; a paramagnetic one rises. A diamagnetic rod hung between poles turns **across** the field; a paramagnetic rod lines up along it.
:::

**In one breath:** Dia: $\chi<0$, pushed out, unaffected by temperature (superconductor $\chi=-1$). Para: small $\chi>0$, weakly pulled in, $\chi\propto1/T$. Ferro: domains give huge $\chi$, lost above the Curie temperature.
