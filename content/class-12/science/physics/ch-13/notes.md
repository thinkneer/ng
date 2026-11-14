# Ch 13 · Nuclei

Chapter 12 found a tiny nucleus at the centre of every atom. This chapter looks inside it: what it is made of, how big and how dense it is, why it holds together at all when its protons repel each other, and how rearranging nuclei releases the enormous energy of nuclear reactors and the Sun.

## Composition and size of the nucleus

A nucleus contains **protons** (charge $+e$) and **neutrons** (no charge), together called **nucleons**. The atomic number $Z$ is the number of protons, the neutron number $N$ the number of neutrons, and the mass number $A=Z+N$ the total number of nucleons. A nucleus is written $^A_ZX$, for example $^{197}_{79}$Au.

Nuclear masses are measured in **atomic mass units**: 1 u is one-twelfth of the mass of a carbon-12 atom, $1.660539\times10^{-27}$ kg. A proton is 1.007276 u and a neutron 1.008665 u, slightly heavier.

Scattering experiments show that nuclei are roughly spherical, with a radius that grows as the cube root of the mass number.

:::formula Nuclear radius
$R=R_0A^{1/3}$, $R_0\approx1.2\times10^{-15}$ m $=1.2$ fm
:::

So the volume $\frac43\pi R^3$ is proportional to $A$. The mass is also proportional to $A$ (each nucleon about 1 u). Their ratio, the density, therefore does not depend on $A$ at all: every nucleus has about the same density, roughly $2.3\times10^{17}$ kg m⁻³, a hundred trillion times the density of water.

:::skeleton Answer skeleton: nuclear density is independent of A (2 marks)
Mass $\approx Am$ ($m$ = mass of a nucleon); volume $=\dfrac43\pi R_0^3A$ [1]

Density $\rho=\dfrac{Am}{\frac43\pi R_0^3A}=\dfrac{3m}{4\pi R_0^3}$, **independent of A** ($\approx2.3\times10^{17}$ kg m⁻³) [1]
:::

```ng-numerical
id: nuclear-radius
title: Radius of a nucleus
question: Find the radius of a nucleus of mass number {{A}}. ($R_0=1.2$ fm)
var: A | 8 | 216 | 1
answer: 1.2*A^(1/3)
unit: fm
dp: 2
step: $R=R_0A^{1/3}=1.2\times{{A}}^{1/3}$ fm
step: $R=$ **{{1.2*A^(1/3):2}} fm**
```

```ng-graph
id: radius-vs-a
title: Nuclear radius grows as the cube root of A
x: A | 1 | 240
y: R (fm) | 0 | 8
curve: R = 1.2 A^(1/3) | 1.2*x^(1/3)
note: Eight times the mass number only doubles the radius. Volume ∝ A and mass ∝ A, so the density is the same for every nucleus.
```

**In one breath:** A nucleus has $Z$ protons and $N$ neutrons ($A=Z+N$), radius $1.2A^{1/3}$ fm, and so the same enormous density, about $2.3\times10^{17}$ kg m⁻³, whatever its size.

## Mass–energy and mass defect

Einstein showed that mass is a form of energy: a mass $m$ is equivalent to energy $E=mc^2$. In nuclear physics it is convenient to remember that 1 u of mass corresponds to 931.5 MeV.

:::formula Mass–energy equivalence
$E=mc^2$;   1 u $\equiv931.5$ MeV
:::

Add up the masses of the separate protons and neutrons in a nucleus and compare with the measured mass of the nucleus: the nucleus is always **lighter**. The difference is the **mass defect**.

:::formula Mass defect and binding energy
$\Delta M=\left[Zm_p+(A-Z)m_n\right]-M_\text{nucleus}$

Binding energy $E_b=\Delta M\,c^2$ ($=\Delta M$ in u × 931.5 MeV)
:::

Where did the mass go? When nucleons come together to form a nucleus, energy is released, and that energy carries away the mass $\Delta M$. To pull the nucleus apart into separate nucleons you must put the same energy back. That is the **binding energy**: the energy needed to separate a nucleus completely into its nucleons. The larger it is, the more tightly bound the nucleus.

:::skeleton Worked example: binding energy
*Find the binding energy of $^{16}_8$O (nuclear mass 15.99053 u). Take $m_p=1.00728$ u, $m_n=1.00867$ u.*

$\Delta M=8\times1.00728+8\times1.00867-15.99053=16.12760-15.99053=0.13707$ u [1]

$E_b=0.13707\times931.5\approx$ **127.7 MeV**, about 7.98 MeV per nucleon [1]
:::

```ng-numerical
id: binding-energy-calc
title: Binding energy per nucleon
question: A nucleus has mass number {{A}} and a mass defect of {{dm}} u. Find its binding energy and its binding energy per nucleon.
var: A | 12 | 120 | 4
var: k | 7.6 | 9.4 | 0.2
let: dm = A*k/1000
let: Eb = dm*931.5
answer: Eb/A
unit: MeV per nucleon
dp: 2
step: $E_b=\Delta M\times931.5={{dm}}\times931.5={{Eb}}$ MeV
step: $\dfrac{E_b}{A}=\dfrac{ {{Eb}} }{ {{A}} }=$ **{{Eb/A:2}} MeV per nucleon**
```

```ng-mnemonic
id: one-u-931
title: Mass–energy conversion
trick: **"Ek u = 931.5 MeV: nau-teen-ek point paanch"**
meaning: Multiply a mass defect in u by 931.5 to get the binding energy in MeV.
meaning: 1 MeV $=1.6\times10^{-13}$ J.
prompt: How much energy, in MeV, is equivalent to 1 u?
```

**In one breath:** A nucleus is lighter than its separate nucleons; this mass defect times $c^2$ (or × 931.5 MeV per u) is the binding energy, the energy needed to pull it apart.

## Binding energy per nucleon

The binding energy of a big nucleus is bigger simply because it has more nucleons. To compare stability, we divide by $A$ and plot the **binding energy per nucleon** against mass number.

```ng-figure
id: ch13-bea
title: Binding energy per nucleon curve
svg:
<svg viewBox="0 0 400 182" role="img" aria-label="Binding energy per nucleon against mass number" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M40,160L380,160"/><path d="M380,160L375.4,162L375.4,158Z" fill="currentColor" stroke="none"/><path d="M40,160L40,15"/><path d="M40,15L42,19.6L38,19.6Z" fill="currentColor" stroke="none"/><path class="u" d="M41.4,160L42.7,143.5L44,121L45.4,53.9L48.1,80.5L49.5,76L56.2,44.8L61.6,40.3L67,39.6L80.5,32.5L115.6,28.8L148,29.5L202,32.5L256,36.2L310,41.5L361.3,46" stroke-width="2"/><path d="M40,130L44,130" stroke-width="0.8"/><path d="M40,100L44,100" stroke-width="0.8"/><path d="M40,70L44,70" stroke-width="0.8"/><path d="M40,40L44,40" stroke-width="0.8"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="380" y="173" text-anchor="end" font-style="italic">A</text><text x="36" y="19" text-anchor="end" font-style="italic"></text><text x="46" y="12" text-anchor="start" font-style="italic">B/A (MeV)</text><text x="36" y="134" text-anchor="end" font-size="10">2</text><text x="36" y="104" text-anchor="end" font-size="10">4</text><text x="36" y="74" text-anchor="end" font-size="10">6</text><text x="36" y="44" text-anchor="end" font-size="10">8</text><text x="107.5" y="173" font-size="10">50</text><text x="175" y="173" font-size="10">100</text><text x="242.5" y="173" font-size="10">150</text><text x="310" y="173" font-size="10">200</text><text x="121.6" y="22.8" text-anchor="start" font-size="11">Fe-56 (8.75)</text><text x="49.4" y="47.9" text-anchor="start" font-size="10">He-4</text><text x="69.7" y="107.5" text-anchor="start" font-size="10">fusion releases energy ←</text><text x="242.5" y="61" text-anchor="start" font-size="10">→ fission releases energy</text></g></svg>
caption: Binding energy per nucleon is about 8 MeV for most nuclei, peaks near A = 56 (iron) and falls for light and heavy nuclei. Joining light nuclei (fusion) or splitting heavy ones (fission) moves towards the peak and releases energy.
part: 115.6, 28.8 | Iron-56 peak | About 8.75 MeV: most stable.
part: 45.4, 53.9 | Helium-4 | Unusually stable light nucleus (7.07 MeV).
part: 361.3, 46 | Uranium-238 | About 7.6 MeV: fission moves towards the peak.
```

Features of the curve, all asked often:

- For most nuclei, from about $A=30$ to $A=170$, $E_b/A$ is nearly constant at about 8 MeV. This shows that the nuclear force **saturates**: each nucleon is bound only to its near neighbours, not to all the others.
- It peaks at about 8.75 MeV near $A=56$ (iron): these are the most stable nuclei.
- It is lower for light nuclei ($A<30$), with He-4, C-12 and O-16 standing out as unusually stable.
- It falls gradually for heavy nuclei (about 7.6 MeV for uranium), because the growing Coulomb repulsion between many protons loosens them.

The curve tells us where nuclear energy comes from. Splitting a heavy nucleus into two medium ones (**fission**), or joining two light nuclei into a heavier one (**fusion**), moves the nucleons towards the peak, to a more tightly bound state. The increase in total binding energy is released.

```ng-draw
id: draw-be-curve
title: Draw the binding energy per nucleon curve
svg: ref: notes#ch13-bea
time: 3
```

```ng-explain
id: explain-fission-fusion
prompt: In three lines, use the binding-energy curve to explain why both fission and fusion release energy.
lines: 3
```

**In one breath:** Binding energy per nucleon is about 8 MeV for most nuclei, peaks at iron-56 and falls for light and heavy nuclei; moving towards the peak, by fission of heavy or fusion of light nuclei, releases energy.

## The nuclear force

Protons in a nucleus are only a few femtometres apart, so their Coulomb repulsion is huge. Something much stronger must hold the nucleus together. That is the **nuclear force**, with some unusual properties:

- It is the **strongest** force known, much stronger than the Coulomb force at nuclear distances.
- It is **short-range**: strongly attractive at about 1 fm, negligible beyond a few femtometres. That is why it saturates.
- At very short distances, below about 0.8 fm, it becomes **repulsive**, so nucleons keep a minimum separation.
- It is **charge-independent**: the force between two protons, two neutrons, or a proton and a neutron is about the same.

```ng-figure
id: ch13-force
title: Nuclear potential energy
svg:
<svg viewBox="0 0 370 172" role="img" aria-label="Potential energy of a pair of nucleons against separation" font-family="sans-serif" font-size="12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M40,90L340,90"/><path d="M340,90L335.4,92L335.4,88Z" fill="currentColor" stroke="none"/><path d="M40,165L40,15"/><path d="M40,15L42,19.6L38,19.6Z" fill="currentColor" stroke="none"/><path class="u" d="M74,15 Q88,150 120,150 Q160,150 210,96 Q260,90 330,90" stroke-width="2"/><path d="M120,90L120,150" stroke-dasharray="4 3"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="340" y="104" text-anchor="end" font-style="italic">r (fm)</text><text x="36" y="20" text-anchor="end" font-style="italic">U</text><text x="120" y="84" font-size="10">≈0.8</text><text x="70" y="40" text-anchor="start" font-size="11">repulsive</text><text x="150" y="145" text-anchor="start" font-size="11">attractive</text><text x="230" y="80" text-anchor="start" font-size="11">range a few fm</text></g></svg>
caption: Nuclear force: strongly attractive at a separation of about 1 fm, repulsive below about 0.8 fm (minimum of U), and negligible beyond a few femtometres.
part: 120, 150 | Minimum near 0.8 fm | Nucleons sit about here.
part: 85, 60 | Repulsive region | Below about 0.8 fm.
part: 300, 90 | Beyond a few fm | The nuclear force is negligible.
```

```ng-mnemonic
id: nuclear-force-properties
title: Properties of the nuclear force
trick: **"S-S-C-S: Strongest, Short-range, Charge-independent, Saturating"**
meaning: Strongest of all forces; acts only over a few fm; same for n–n, p–p, n–p; each nucleon binds only its neighbours.
meaning: Repulsive below about 0.8 fm.
prompt: State four properties of the nuclear force.
```

```ng-draw
id: draw-nuclear-pe
title: Sketch the potential energy of two nucleons against separation
svg: ref: notes#ch13-force
time: 2
```

**In one breath:** The nuclear force is the strongest force, short-range (a few fm), attractive at about 1 fm and repulsive below 0.8 fm, and the same between any two nucleons.

## Nuclear energy: fission and fusion

**Fission.** When a slow neutron is absorbed by uranium-235, the nucleus becomes unstable and splits into two medium-mass fragments, releasing two or three neutrons and about 200 MeV of energy. A typical reaction is

$${}^{235}_{92}\text{U}+{}^{1}_{0}\text{n}\rightarrow{}^{236}_{92}\text{U}\rightarrow{}^{144}_{56}\text{Ba}+{}^{89}_{36}\text{Kr}+3\,{}^{1}_{0}\text{n}+\text{energy}$$

The energy appears mostly as kinetic energy of the fragments. Because each fission releases more neutrons, which can cause further fissions, a **chain reaction** is possible. In a nuclear reactor it is controlled so that, on average, exactly one neutron from each fission causes another.

**Fusion.** When two very light nuclei join to form a heavier one, energy is released too. In the Sun, a chain of reactions effectively turns four hydrogen nuclei into one helium nucleus, releasing about 26.7 MeV:

$$4\,{}^{1}_{1}\text{H}+2e^-\rightarrow{}^{4}_{2}\text{He}+2\nu+6\gamma+26.7\text{ MeV}$$

Fusion needs the nuclei to come close enough for the nuclear force to act, against their Coulomb repulsion. That requires enormous temperatures (around $10^7$ K, as in the core of the Sun and stars), so it is called **thermonuclear fusion**.

The energy released in a reaction, its **Q-value**, comes from the mass that disappears:

:::formula Q-value of a nuclear reaction
$Q=\left(\sum m_\text{reactants}-\sum m_\text{products}\right)c^2$

$Q>0$: energy released (exothermic). Equivalently, $Q$ = total binding energy of products − total binding energy of reactants.
:::

:::skeleton Worked example: energy from fission
*Each fission of U-235 releases about 200 MeV. How much energy is released by the complete fission of 1 g of U-235?*

Number of nuclei $=\dfrac{1}{235}\times6.02\times10^{23}=2.56\times10^{21}$ [½]

Energy $=2.56\times10^{21}\times200$ MeV $=5.1\times10^{23}$ MeV [½]

$=5.1\times10^{23}\times1.6\times10^{-13}$ J $\approx$ **$8.2\times10^{10}$ J** [1]
:::

:::tip Nucleons are conserved, mass is not
In a nuclear reaction the totals of $Z$ and $A$ balance on both sides. The **mass** does not: the small loss of mass is the energy released.
:::

```ng-steps
id: chain-reaction
title: A fission chain reaction
step: A slow neutron is absorbed by a U-235 nucleus, making unstable U-236.
step: U-236 splits into two medium nuclei (e.g. Ba and Kr), releasing about 200 MeV.
step: Two or three fast neutrons are released.
step: Each of these can split another U-235 nucleus, so the number of fissions can multiply.
step: In a reactor, control rods absorb extra neutrons so that on average exactly one neutron from each fission causes another.
```

```ng-numerical
id: fission-energy
title: Energy from fission of uranium
question: Each fission of U-235 releases about 200 MeV. How much energy, in joules, comes from the complete fission of {{m}} g of U-235?
var: m | 1 | 10 | 1
let: N = m/235*6.02e23
answer: N*200*1.6e-13
unit: J
step: Nuclei: $N=\dfrac{ {{m}} }{235}\times6.02\times10^{23}={{N}}$
step: $E=N\times200\times1.6\times10^{-13}$ J $=$ **{{N*200*1.6e-13}} J**
```

```ng-compare
id: fission-vs-fusion
title: Nuclear fission vs nuclear fusion
cols: Fission | Fusion
row: What happens | a heavy nucleus splits into two medium ones | light nuclei join into a heavier one
row: Condition | absorption of a slow neutron | very high temperature (about $10^7$ K)
row: Energy per reaction | about 200 MeV | about 26.7 MeV for 4 H → He (more per unit mass)
row: Example | nuclear reactor | the Sun and stars
```

**In one breath:** Fission splits heavy nuclei (U-235 + n → two fragments + 2–3 neutrons + ~200 MeV) and can chain-react; fusion joins light nuclei at enormous temperatures and powers the Sun; $Q$ is the mass lost times $c^2$.
