# Ch 1 · Electric Charges and Fields

Comb your hair on a dry day and the comb picks up bits of paper. Pull off a woollen sweater in the dark and you hear crackles and see tiny sparks. Behind both is the same thing: electric charge, and the force one charge exerts on another. This chapter answers three questions in order. What is charge and how does it behave? How strong is the force between two charges (Coulomb's law)? And how do we describe that force without always naming the other charge (the electric field, and Gauss's law for working it out quickly)?

## Electric charge and how bodies get charged

Rub a glass rod with silk and it attracts small things. Rub a second glass rod and hang it near the first: they repel. A plastic rod rubbed with fur attracts the glass rod. Experiments like these show there are exactly **two kinds of charge**, which Benjamin Franklin named **positive** (glass rubbed with silk) and **negative** (plastic rubbed with fur). Like charges repel; unlike charges attract.

What actually moves during rubbing is electrons. Atoms are neutral, with equal numbers of protons and electrons. When glass is rubbed with silk, some electrons pass from the glass to the silk. The glass is left short of electrons, so it is positive; the silk has extra electrons, so it is equally negative. Protons never move in rubbing: they are locked in nuclei.

Materials differ in how freely they let charge move. In **conductors** (metals, the human body, the earth, salty water) some electrons are free to move through the whole material, so charge placed on them spreads over the surface. In **insulators** (glass, plastic, dry wood) charge stays where it is put. Connecting a charged conductor to the earth so that it loses its charge is called **earthing** or grounding.

There are three ways to charge a body: friction (rubbing), conduction (touching a charged body) and **induction**. Induction needs no contact. Bring a charged rod near a metal sphere on an insulating stand: the free electrons shift, leaving the near side oppositely charged and the far side with the same sign as the rod. Earth the far side, remove the earth connection, then take the rod away, and the sphere keeps a charge opposite to the rod. This is also why a charged comb attracts neutral paper: it induces opposite charge on the near side of the paper, and the attraction to the near side beats the repulsion from the far side.

Charge has three basic properties:

- **Additivity.** Charge is a scalar, so the total charge of a body is the algebraic sum: $+2q$, $-5q$ and $+q$ together make $-2q$.
- **Conservation.** Charge is neither created nor destroyed in an isolated system; it only moves from one body to another. Even when particles are created (an electron–positron pair from a gamma photon), the total charge stays the same.
- **Quantisation.** Every free charge is a whole-number multiple of the electron's charge $e$.

:::formula Quantisation of charge
$q=\pm ne$, where $n=1,2,3,\dots$ and $e=1.6\times10^{-19}$ C

1 C of charge corresponds to about $6.25\times10^{18}$ electrons.
:::

Quantisation is easy to forget because $e$ is so small. A charge of 1 µC holds about $10^{13}$ electrons, so at everyday scales charge looks continuous.

:::tip Charge cannot be fractional
A charge like $2.4\times10^{-19}$ C is impossible for a body, because it is $1.5e$. Divide by $1.6\times10^{-19}$ and check you get a whole number.
:::

**In one breath:** There are two kinds of charge; rubbing and induction only move electrons. Charge adds as a scalar, is conserved, and always comes in whole multiples of $e$.

## Coulomb's law

How strong is the force between two charges? In 1785 Coulomb measured it with a torsion balance and found that for two point charges it is proportional to the product of the charges and inversely proportional to the square of the distance between them. It acts along the line joining them.

:::formula Coulomb's law
$F=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$, with $\dfrac{1}{4\pi\varepsilon_0}=9\times10^{9}$ N m² C⁻²

$\varepsilon_0=8.854\times10^{-12}$ C² N⁻¹ m⁻² is the permittivity of free space.

Vector form: $\vec F_{21}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r_{21}^2}\,\hat r_{21}$ (force on 2 due to 1, $\hat r_{21}$ pointing from 1 to 2)
:::

The vector form carries the sign automatically: for like charges $q_1q_2>0$ and the force on 2 points away from 1 (repulsion). It also shows that $\vec F_{12}=-\vec F_{21}$, so Coulomb forces obey Newton's third law.

In a medium the force is weaker. The medium becomes polarised and partly shields each charge from the other. The ratio by which the force drops is the **dielectric constant** $K$ (also called relative permittivity $\varepsilon_r=\varepsilon/\varepsilon_0$). Water has $K\approx80$, which is why salts fall apart into ions in water.

:::formula Coulomb's law in a medium
$F_\text{medium}=\dfrac{1}{4\pi\varepsilon_0K}\dfrac{q_1q_2}{r^2}=\dfrac{F_\text{vacuum}}{K}$
:::

When more than two charges are present, the **principle of superposition** applies: the force on any one charge is the vector sum of the forces from each of the others taken one at a time, as if the rest were absent.

:::skeleton Worked example: force from two charges
*Charges $+2$ µC at A, $-2$ µC at B and $+1$ µC at C sit at the corners of an equilateral triangle of side 10 cm. Find the net force on the charge at C.*

$F_{CA}=F_{CB}=\dfrac{9\times10^9\times2\times10^{-6}\times1\times10^{-6}}{(0.1)^2}=1.8$ N [1]

$F_{CA}$ points from A towards C (repulsion); $F_{CB}$ points from C towards B (attraction); the angle between them is 120° [½]

$F=\sqrt{F^2+F^2+2F^2\cos120^\circ}=F$ [1]

**Net force = 1.8 N, parallel to AB, from A towards B** [½]
:::

:::tip Forgetting the direction
Force is a vector. A numerical that asks for "the force" wants magnitude **and** direction; the direction alone is usually worth ½ mark.
:::

**In one breath:** The force between point charges goes as $q_1q_2/r^2$ along the line joining them, drops by a factor $K$ in a medium, and with many charges you add the forces as vectors.

## The electric field

Coulomb's law describes a force between two charges at a distance. A more useful picture is that a charge changes the space around it, setting up an **electric field**, and any other charge placed there feels a force from the field at its own location. The field exists whether or not you put a test charge there.

The field at a point is the force per unit positive charge placed at that point. We imagine a very small test charge $q_0$ so that it does not disturb the charges that make the field.

:::formula Electric field
$\vec E=\lim_{q_0\to0}\dfrac{\vec F}{q_0}$, so $\vec F=q\vec E$ on any charge $q$

Point charge: $E=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r^2}$, radially outward for $+q$, inward for $-q$

Unit: N C⁻¹ (equivalently V m⁻¹)
:::

The field of several charges is again found by superposition: $\vec E=\vec E_1+\vec E_2+\dots$

A neat way to see a field is to draw **electric field lines**: curves whose tangent at every point gives the direction of $\vec E$, drawn closer together where the field is stronger.

<figure class="fig">
<svg viewBox="0 0 400 172" role="img" aria-label="Field lines of a positive charge and of an electric dipole" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M73,85L115,85"/><path d="M115,85L110.4,87L110.4,83Z" fill="currentColor" stroke="none"/><path d="M69.2,94.2L98.9,123.9"/><path d="M98.9,123.9L94.2,122.1L97.1,119.2Z" fill="currentColor" stroke="none"/><path d="M60,98L60,140"/><path d="M60,140L58,135.4L62,135.4Z" fill="currentColor" stroke="none"/><path d="M50.8,94.2L21.1,123.9"/><path d="M21.1,123.9L22.9,119.2L25.8,122.1Z" fill="currentColor" stroke="none"/><path d="M47,85L5,85"/><path d="M5,85L9.6,83L9.6,87Z" fill="currentColor" stroke="none"/><path d="M50.8,75.8L21.1,46.1"/><path d="M21.1,46.1L25.8,47.9L22.9,50.8Z" fill="currentColor" stroke="none"/><path d="M60,72L60,30"/><path d="M60,30L62,34.6L58,34.6Z" fill="currentColor" stroke="none"/><path d="M69.2,75.8L98.9,46.1"/><path d="M98.9,46.1L97.1,50.8L94.2,47.9Z" fill="currentColor" stroke="none"/><circle cx="60" cy="85" r="9"/><path d="M56,85L64,85"/><path d="M60,81L60,89"/><path d="M210,85L330,85"/><path d="M273,85L268.4,87L268.4,83Z" fill="currentColor" stroke="none"/><path d="M206,78 Q270,40 334,78"/><path d="M273,59L268.4,61L268.4,57Z" fill="currentColor" stroke="none"/><path d="M206,92 Q270,130 334,92"/><path d="M273,111L268.4,113L268.4,109Z" fill="currentColor" stroke="none"/><path d="M206,78 Q270,-10 334,78"/><path d="M273,34L268.4,36L268.4,32Z" fill="currentColor" stroke="none"/><path d="M206,92 Q270,180 334,92"/><path d="M273,136L268.4,138L268.4,134Z" fill="currentColor" stroke="none"/><path d="M190,85L158,85"/><path d="M158,85L162.6,83L162.6,87Z" fill="currentColor" stroke="none"/><path d="M193,78L172,52"/><path d="M172,52L176.5,54.3L173.3,56.8Z" fill="currentColor" stroke="none"/><path d="M193,92L172,118"/><path d="M172,118L173.3,113.2L176.5,115.7Z" fill="currentColor" stroke="none"/><path d="M395,85L351,85"/><path d="M351,85L355.6,83L355.6,87Z" fill="currentColor" stroke="none"/><path d="M372,52L348,77"/><path d="M348,77L349.7,72.3L352.6,75.1Z" fill="currentColor" stroke="none"/><path d="M372,118L348,93"/><path d="M348,93L352.6,94.9L349.7,97.7Z" fill="currentColor" stroke="none"/><circle cx="200" cy="85" r="9" stroke="#1F5FAD"/><path d="M196,85L204,85" stroke="#1F5FAD"/><path d="M200,81L200,89" stroke="#1F5FAD"/><circle cx="340" cy="85" r="9" stroke="#1F5FAD"/><path d="M336,85L344,85" stroke="#1F5FAD"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="64" y="163" font-size="11">isolated +q: lines go out</text><text x="270" y="163">dipole: + to −, never crossing</text></g></svg>
<figcaption>Field lines start on positive charge and end on negative charge. Where they crowd together the field is strong.</figcaption>
</figure>

Field lines follow a few rules that are asked again and again:

- They start on positive charges and end on negative charges (or go to infinity).
- Two field lines never cross: at a crossing point the field would have two directions, which is impossible.
- In electrostatics they never form closed loops, because the electrostatic field is conservative.
- Their density shows the strength: lines spread out as $1/r^2$ around a point charge, just like the field.

:::skeleton Worked example: where is the field zero?
*Charges $+4$ µC and $+1$ µC are 30 cm apart. Find the point on the line joining them where the field is zero.*

Both charges are positive, so the fields cancel only **between** them, nearer the smaller charge [½]

$\dfrac{k(4\text{ µC})}{x^2}=\dfrac{k(1\text{ µC})}{(0.3-x)^2}\Rightarrow\dfrac{2}{x}=\dfrac{1}{0.3-x}$ [1]

$x=0.2$ m: **20 cm from the $+4$ µC charge** (10 cm from $+1$ µC) [½]
:::

**In one breath:** A charge fills space with a field $\vec E=\vec F/q_0$; for a point charge $E=kq/r^2$. Field lines run from $+$ to $-$, never cross, never close, and crowd where $E$ is strong.

## The electric dipole

Many molecules, such as water, have their positive and negative charge centres slightly apart. The simplest model is an **electric dipole**: charges $+q$ and $-q$ a small distance $2a$ apart. Its strength is measured by the **dipole moment**.

:::formula Dipole moment
$\vec p=q\times2\vec a$, directed from $-q$ to $+q$ along the axis

Unit: C m
:::

The total charge of a dipole is zero, but its field is not, because the two charges are at different places. Far away the two fields nearly cancel, so a dipole's field falls off faster than a point charge's: as $1/r^3$ instead of $1/r^2$.

<figure class="fig">
<svg viewBox="0 0 400 182" role="img" aria-label="Field of a dipole at an axial point P and an equatorial point Q" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20,130L385,130" stroke-dasharray="4 3"/><circle cx="60" cy="130" r="9"/><path d="M56,130L64,130"/><circle cx="140" cy="130" r="9"/><path d="M136,130L144,130"/><path d="M140,126L140,134"/><circle cx="100" cy="130" r="2.2" fill="currentColor"/><path d="M80,114L122,114" stroke="#1F5FAD"/><path d="M122,114L117.4,116L117.4,112Z" fill="#1F5FAD" stroke="none"/><circle cx="300" cy="130" r="2.2" fill="currentColor"/><path d="M300,130L375,130" stroke="#E0B400" stroke-width="2"/><path d="M375,130L369.5,132.4L369.5,127.6Z" fill="#E0B400" stroke="none"/><path d="M300,130L272,130" stroke-width="2"/><path d="M272,130L277.5,127.6L277.5,132.4Z" fill="currentColor" stroke="none"/><path d="M100,164L300,164"/><path d="M300,164L296.3,165.6L296.3,162.4Z" fill="currentColor" stroke="none"/><path d="M100,164L103.7,162.4L103.7,165.6Z" fill="currentColor" stroke="none"/><path d="M60,130L100,46" stroke-dasharray="4 3"/><path d="M140,130L100,46" stroke-dasharray="4 3"/><circle cx="100" cy="46" r="2.2" fill="currentColor"/><path d="M100,46L85.4,15.3"/><path d="M85.4,15.3L89.2,18.5L85.5,20.3Z" fill="currentColor" stroke="none"/><path d="M100,46L85.4,76.7"/><path d="M85.4,76.7L85.5,71.7L89.2,73.5Z" fill="currentColor" stroke="none"/><path d="M100,46L70.8,46" stroke="#E0B400" stroke-width="2"/><path d="M70.8,46L76.2,43.6L76.2,48.4Z" fill="#E0B400" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="60" y="154">A (−q)</text><text x="140" y="154">B (+q)</text><text x="100" y="154">O</text><text x="100" y="108" fill="#1F5FAD" font-style="italic">p</text><text x="300" y="146">P</text><text x="352" y="123" font-size="11">E (+q)</text><text x="268" y="123" text-anchor="end" font-size="11">E (−q)</text><text x="200" y="176" font-style="italic">r (from centre O)</text><text x="108" y="50" text-anchor="start">Q</text><text x="60" y="42" text-anchor="end" font-size="11">net E</text><text x="170" y="40" text-anchor="start" font-size="11">equatorial point: net E opposite to p</text><text x="200" y="100" text-anchor="start" font-size="11">axial point: net E along p</text></g></svg>
<figcaption>Axial point P: the nearer charge wins, so E points along p. Equatorial point Q: the two fields add to a resultant opposite to p.</figcaption>
</figure>

**On the axis.** At a point P on the axis, at distance $r$ from the centre on the side of $+q$, the field of $+q$ (distance $r-a$) points away from the dipole along $\vec p$, and the field of $-q$ (distance $r+a$) points back towards the dipole. The nearer charge wins:

$E=\dfrac{kq}{(r-a)^2}-\dfrac{kq}{(r+a)^2}=\dfrac{kq\cdot4ar}{(r^2-a^2)^2}$

**On the equatorial line.** At a point Q on the perpendicular bisector, both charges are at the same distance $\sqrt{r^2+a^2}$, so the two fields have equal size. Their components perpendicular to the axis cancel; the components along the axis add, and both point from $+q$ towards $-q$, opposite to $\vec p$.

:::formula Field of a dipole
Axial point: $E=\dfrac{1}{4\pi\varepsilon_0}\dfrac{2pr}{(r^2-a^2)^2}\approx\dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{r^3}$, along $\vec p$

Equatorial point: $E=\dfrac{1}{4\pi\varepsilon_0}\dfrac{p}{(r^2+a^2)^{3/2}}\approx\dfrac{1}{4\pi\varepsilon_0}\dfrac{p}{r^3}$, opposite to $\vec p$

Short dipole ($r\gg a$): $E_\text{axial}=2E_\text{equatorial}$ at the same distance
:::

:::skeleton Worked example: field on the axis
*A dipole has charges $\pm2$ nC 2 mm apart. Find the field on its axis 10 cm from the centre.*

$p=q\times2a=2\times10^{-9}\times2\times10^{-3}=4\times10^{-12}$ C m [½]

$r=0.1$ m is much larger than $a=1$ mm, so use the short-dipole form $E=\dfrac{2kp}{r^3}$ [½]

$E=\dfrac{2\times9\times10^9\times4\times10^{-12}}{(0.1)^3}$ [½]

**$E=72$ N C⁻¹, along $\vec p$** [½]
:::

:::tip Measuring r from the wrong point
In the dipole formulas $r$ is measured from the **centre** of the dipole, not from one of the charges. And $2a$ is the full separation, so $a$ is half of it.
:::

**In one breath:** A dipole is $\pm q$ separated by $2a$, with $p=2qa$ from $-$ to $+$. Its field falls as $1/r^3$: $2kp/r^3$ along $\vec p$ on the axis and $kp/r^3$ opposite $\vec p$ on the equatorial line.

## A dipole in a uniform field

Put a dipole in a uniform field $\vec E$ with $\vec p$ at angle $\theta$ to $\vec E$. The $+q$ end feels a force $q\vec E$ along the field and the $-q$ end feels $-q\vec E$. The two forces are equal and opposite, so the **net force is zero**. But they act along different lines, so they form a couple that turns the dipole.

<figure class="fig">
<svg viewBox="0 0 320 172" role="img" aria-label="Electric dipole at angle theta in a uniform electric field" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15,25L300,25" stroke-dasharray="4 3"/><path d="M305,25L300.4,27L300.4,23Z" fill="currentColor" stroke="none"/><path d="M15,55L300,55" stroke-dasharray="4 3"/><path d="M305,55L300.4,57L300.4,53Z" fill="currentColor" stroke="none"/><path d="M15,85L300,85" stroke-dasharray="4 3"/><path d="M305,85L300.4,87L300.4,83Z" fill="currentColor" stroke="none"/><path d="M15,115L300,115" stroke-dasharray="4 3"/><path d="M305,115L300.4,117L300.4,113Z" fill="currentColor" stroke="none"/><path d="M15,145L300,145" stroke-dasharray="4 3"/><path d="M305,145L300.4,147L300.4,143Z" fill="currentColor" stroke="none"/><path d="M123.1,110.8L196.9,59.2" stroke-width="2"/><circle cx="196.9" cy="59.2" r="9" stroke="#1F5FAD"/><path d="M192.9,59.2L200.9,59.2" stroke="#1F5FAD"/><path d="M196.9,55.2L196.9,63.2" stroke="#1F5FAD"/><circle cx="123.1" cy="110.8" r="9" stroke="#1F5FAD"/><path d="M119.1,110.8L127.1,110.8" stroke="#1F5FAD"/><path d="M206.9,59.2L256.9,59.2" stroke="#E0B400" stroke-width="2"/><path d="M256.9,59.2L251.4,61.6L251.4,56.7Z" fill="#E0B400" stroke="none"/><path d="M113.1,110.8L63.1,110.8" stroke="#E0B400" stroke-width="2"/><path d="M63.1,110.8L68.6,108.4L68.6,113.3Z" fill="#E0B400" stroke="none"/><path d="M184,85 A24,24 0 0 0 179.7,71.2"/><path d="M160,85L200,85" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="305" y="16" text-anchor="end" font-style="italic">E</text><text x="258.9" y="53.2" text-anchor="start">+qE</text><text x="61.1" y="104.8" text-anchor="end">−qE</text><text x="190" y="81" text-anchor="start" font-style="italic">θ</text><text x="160" y="165" font-size="11">equal and opposite forces → no net force, but a couple</text></g></svg>
<figcaption>The forces +qE and −qE are equal and opposite but act along different lines, so they form a couple of torque pE sin θ that turns p towards E.</figcaption>
</figure>

The torque is one force times the perpendicular distance between the two lines of action: $\tau=qE\times2a\sin\theta=pE\sin\theta$.

:::formula Torque on a dipole
$\vec\tau=\vec p\times\vec E$, magnitude $\tau=pE\sin\theta$

Maximum $pE$ at $\theta=90^\circ$; zero at $\theta=0^\circ$ and $180^\circ$
:::

The torque tries to line $\vec p$ up with $\vec E$. At $\theta=0^\circ$ the dipole is in stable equilibrium; at $180^\circ$ it is in equilibrium too, but unstable: nudge it and it swings round.

In a **non-uniform** field the forces on the two ends are no longer equal, so the dipole feels a net force as well as a torque. That is why a charged comb pulls on bits of paper: the paper's induced dipoles sit in the comb's non-uniform field.

:::skeleton Worked example: torque
*A dipole of moment $4\times10^{-9}$ C m is at 30° to a uniform field of $5\times10^4$ N C⁻¹. Find the torque.*

$\tau=pE\sin\theta$ [½]

$=4\times10^{-9}\times5\times10^{4}\times\sin30^\circ$ = **$1\times10^{-4}$ N m** [½]
:::

**In one breath:** In a uniform field a dipole feels no net force but a torque $\vec p\times\vec E$ that aligns it with the field; in a non-uniform field it also feels a net force.

## Continuous charge and electric flux

Real charged objects are not points; charge is spread along wires, over sheets or through volumes. We describe it with charge densities:

:::formula Charge densities
Linear $\lambda=\dfrac{dq}{dl}$ (C m⁻¹) · surface $\sigma=\dfrac{dq}{dA}$ (C m⁻²) · volume $\rho=\dfrac{dq}{dV}$ (C m⁻³)
:::

To handle such shapes quickly we need one more idea, **electric flux**. Think of field lines as something flowing through a surface: the flux counts how many lines pass through it. For a small flat area $\Delta S$ with its outward normal at angle $\theta$ to $\vec E$, only the component of $\vec E$ along the normal counts.

:::formula Electric flux
$\Delta\phi=\vec E\cdot\Delta\vec S=E\,\Delta S\cos\theta$; over a surface $\phi=\oint\vec E\cdot d\vec S$

Unit: N m² C⁻¹ (scalar). Outward lines count positive, inward lines negative.
:::

:::skeleton Worked example: flux through a square
*$\vec E=3\times10^3\,\hat i$ N C⁻¹. Find the flux through a 10 cm square (a) parallel to the yz-plane, (b) with its normal at 60° to the x-axis.*

$\phi=EA\cos\theta$, $A=10^{-2}$ m²

(a) $\theta=0$: $\phi=3\times10^3\times10^{-2}=$ **30 N m² C⁻¹** [1]

(b) $\theta=60^\circ$: $\phi=30\times\tfrac12=$ **15 N m² C⁻¹** [1]
:::

**In one breath:** Spread-out charge is described by $\lambda$, $\sigma$, $\rho$. Flux $\vec E\cdot\vec S$ measures how much field passes through a surface; it is a scalar, positive outward.

## Gauss's law

Here is the big result. Take any **closed** surface. The total flux out of it depends only on the charge enclosed inside it, and nothing else.

:::formula Gauss's law
$\displaystyle\oint\vec E\cdot d\vec S=\dfrac{q_\text{enclosed}}{\varepsilon_0}$
:::

Why is it true? For a single charge at the centre of a sphere of radius $r$, $E=kq/r^2$ is the same everywhere on the sphere and points straight out, so the flux is $E\times4\pi r^2=q/\varepsilon_0$, independent of $r$. The $1/r^2$ of the field exactly cancels the $r^2$ of the area. Change the shape of the surface and the same field lines still cross it, so the flux is unchanged. A charge outside sends in as many lines as it sends out, so it adds nothing.

Keep three consequences straight:

- The flux depends only on charge **inside**. But the field at any point of the surface depends on **all** charges, inside and outside.
- A closed surface around a dipole, or around equal and opposite charges, has zero total flux.
- Shape and size of the closed surface do not matter.

:::tip Charge at the corner of a cube
A charge $q$ at the **centre** of a cube gives $q/\varepsilon_0$ through the cube and $q/6\varepsilon_0$ through each face. A charge at a **corner** is shared by 8 cubes that meet there, so the flux through one cube is $q/8\varepsilon_0$, and $q/24\varepsilon_0$ through each of the three far faces (the three faces that touch the corner get none).
:::

**In one breath:** Total flux out of any closed surface is $q_\text{enclosed}/\varepsilon_0$, whatever its shape; charges outside contribute zero net flux, though they still affect the field.

## Using Gauss's law: wire, sheet and shell

Gauss's law always holds, but it gives the field easily only when symmetry tells you the direction of $\vec E$ and that its size is the same over parts of a cleverly chosen surface. The board asks three cases.

<figure class="fig">
<svg viewBox="0 0 420 175" role="img" aria-label="Gaussian surfaces for a line charge, a plane sheet and a spherical shell" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M60,12L60,158" stroke="#1F5FAD" stroke-width="2.6"/><ellipse cx="60" cy="45" rx="30" ry="8" fill="none" stroke-dasharray="4 3"/><ellipse cx="60" cy="125" rx="30" ry="8" fill="none" stroke-dasharray="4 3"/><path d="M30,45L30,125" stroke-dasharray="4 3"/><path d="M90,45L90,125" stroke-dasharray="4 3"/><path d="M90,85L118,85" stroke="#E0B400" stroke-width="2"/><path d="M118,85L112.5,87.4L112.5,82.6Z" fill="#E0B400" stroke="none"/><path d="M30,85L6,85" stroke="#E0B400" stroke-width="2"/><path d="M6,85L11.5,82.6L11.5,87.4Z" fill="#E0B400" stroke="none"/><path d="M100,45L100,125"/><path d="M100,125L98.4,121.3L101.6,121.3Z" fill="currentColor" stroke="none"/><path d="M100,45L101.6,48.7L98.4,48.7Z" fill="currentColor" stroke="none"/><path d="M195,18L230,38L230,152L195,132Z" stroke="#1F5FAD"/><ellipse cx="180" cy="85" rx="6" ry="16" fill="none" stroke-dasharray="4 3"/><ellipse cx="245" cy="85" rx="6" ry="16" fill="none" stroke-dasharray="4 3"/><path d="M180,69L245,69" stroke-dasharray="4 3"/><path d="M180,101L245,101" stroke-dasharray="4 3"/><path d="M251,85L282,85" stroke="#E0B400" stroke-width="2"/><path d="M282,85L276.5,87.4L276.5,82.6Z" fill="#E0B400" stroke="none"/><path d="M174,85L143,85" stroke="#E0B400" stroke-width="2"/><path d="M143,85L148.5,82.6L148.5,87.4Z" fill="#E0B400" stroke="none"/><circle cx="355" cy="85" r="32" stroke="#1F5FAD" stroke-width="2"/><circle cx="355" cy="85" r="50" stroke-dasharray="4 3"/><path d="M390.4,120.4L401.7,131.7" stroke="#E0B400" stroke-width="2"/><path d="M401.7,131.7L397,129.9L399.9,127Z" fill="#E0B400" stroke="none"/><path d="M319.6,120.4L308.3,131.7" stroke="#E0B400" stroke-width="2"/><path d="M308.3,131.7L310.1,127L313,129.9Z" fill="#E0B400" stroke="none"/><path d="M319.6,49.6L308.3,38.3" stroke="#E0B400" stroke-width="2"/><path d="M308.3,38.3L313,40.1L310.1,43Z" fill="#E0B400" stroke="none"/><path d="M390.4,49.6L401.7,38.3" stroke="#E0B400" stroke-width="2"/><path d="M401.7,38.3L399.9,43L397,40.1Z" fill="#E0B400" stroke="none"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="75" y="80" font-style="italic">r</text><text x="108" y="110" text-anchor="start" font-style="italic">l</text><text x="66" y="20" text-anchor="start" font-style="italic">λ</text><text x="60" y="168">line: cylinder</text><text x="232" y="30" text-anchor="start" font-style="italic">σ</text><text x="212" y="168">sheet: pillbox</text><text x="355" y="89" font-size="11">E = 0</text><text x="355" y="168">shell: sphere</text></g></svg>
<figcaption>Pick the surface that matches the symmetry: a coaxial cylinder for a line, a pillbox through a sheet, a concentric sphere for a shell. Dashed = Gaussian surface.</figcaption>
</figure>

**Infinitely long straight wire** (charge $\lambda$ per metre). By symmetry the field points radially outward and has the same size at the same distance $r$. Choose a coaxial cylinder of radius $r$ and length $l$. On the flat ends $\vec E$ lies along the surface, so their flux is zero. On the curved surface $\vec E$ is along the normal everywhere, so the flux is $E\times2\pi rl$. The charge enclosed is $\lambda l$. So $E\,2\pi rl=\lambda l/\varepsilon_0$.

**Infinite plane sheet** (charge $\sigma$ per m²). The field is perpendicular to the sheet on both sides. Choose a pillbox (cylinder) of end area $A$ that pierces the sheet. Only the two ends carry flux, $2EA$, and the enclosed charge is $\sigma A$. So $2EA=\sigma A/\varepsilon_0$. The answer does not depend on distance: the field of an infinite sheet is uniform.

**Thin spherical shell** (charge $q$, radius $R$). The field is radial. A concentric sphere of radius $r>R$ encloses $q$, so $E\times4\pi r^2=q/\varepsilon_0$: outside, the shell acts as if all its charge were at the centre. A sphere with $r<R$ encloses no charge, so $E=0$ everywhere inside.

:::formula Fields from Gauss's law
Long straight wire: $E=\dfrac{\lambda}{2\pi\varepsilon_0r}$ (radial)

Infinite plane sheet: $E=\dfrac{\sigma}{2\varepsilon_0}$ (perpendicular, independent of distance)

Two parallel sheets $+\sigma$ and $-\sigma$: $E=\dfrac{\sigma}{\varepsilon_0}$ between, zero outside

Thin spherical shell: $E=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r^2}$ for $r\ge R$; $E=0$ for $r<R$
:::

:::skeleton Answer skeleton: field of a long wire (3 marks)
Draw the wire and a coaxial Gaussian cylinder of radius $r$, length $l$ [½]

Flat ends: $\vec E\perp d\vec S$, so their flux is zero [½]

Curved surface: $\phi=E\cdot2\pi rl$ [½]; charge enclosed $=\lambda l$ [½]

$E\cdot2\pi rl=\dfrac{\lambda l}{\varepsilon_0}\Rightarrow$ **$E=\dfrac{\lambda}{2\pi\varepsilon_0 r}$**, radially outward for $\lambda>0$ [½]

Graph: $E$ against $r$ is a hyperbola, $E\propto1/r$ [½]
:::

:::tip Using a Gaussian surface without the diagram
The board gives ½ mark for drawing and labelling the Gaussian surface. Always draw it, and say why the flux through each part is what you claim.
:::

**In one breath:** Choose a surface that matches the symmetry: a cylinder gives $\lambda/2\pi\varepsilon_0r$ for a wire, a pillbox gives $\sigma/2\varepsilon_0$ for a sheet, and a sphere gives $kq/r^2$ outside a shell and zero inside.
