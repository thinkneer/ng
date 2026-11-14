# Ch 2 · Electrochemistry

A torch cell turns a chemical reaction into electric current. A plating bath does the reverse: it uses current to force a reaction that would not happen by itself. Electrochemistry is the study of both directions. This chapter first builds a cell and asks what decides its voltage, then looks at how solutions carry current, and finally puts the two together in electrolysis, batteries, fuel cells and rusting.

## Two kinds of cell

Dip a zinc rod in copper sulphate solution and the blue colour fades while copper deposits on the zinc. Zinc atoms are handing electrons directly to copper ions: $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$. The energy comes out as heat and is wasted.

Now separate the two halves. Put zinc in zinc sulphate solution in one beaker and copper in copper sulphate in another, join the metals by a wire and the solutions by a salt bridge. The electrons must now travel through the wire to get from zinc to copper ions, and that flow is a usable current. This is the **Daniell cell**, a **galvanic** (or voltaic) cell: it converts the chemical energy of a spontaneous redox reaction into electrical energy.

Each beaker is a **half-cell**. Oxidation happens at the **anode** (zinc, $\ce{Zn -> Zn^2+ + 2e-}$) and reduction at the **cathode** (copper, $\ce{Cu^2+ + 2e- -> Cu}$). Because the anode is where electrons are released, it is the *negative* terminal of a galvanic cell. The salt bridge, a tube of $\ce{KCl}$ or $\ce{KNO3}$ in agar, lets ions move so that neither solution builds up charge; without it the current stops almost at once.

<figure class="fig" id="daniell-cell">
<svg viewBox="0 0 350 236" role="img" aria-label="Daniell cell: zinc and copper half-cells joined by a wire and a salt bridge" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,105 V200 H140 V105"/><path d="M200,105 V200 H300 V105"/><path d="M40,125L140,125" stroke-width="1"/><path d="M200,125L300,125" stroke-width="1"/><rect x="62" y="60" width="14" height="125"/><rect x="264" y="60" width="14" height="125" stroke="#E0B400" stroke-width="2"/><path d="M118,185 V92 H222 V185" stroke-width="7" opacity="0.45"/><path d="M69,60 V34 H157"/><path d="M183,34 H271 V60"/><circle cx="170" cy="34" r="13"/><path d="M92,24L132,24" stroke-width="1"/><path d="M127.7,26.5L132,24L127.7,21.5" stroke-width="1"/><path d="M208,24L248,24" stroke-width="1"/><path d="M243.7,26.5L248,24L243.7,21.5" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="170" y="38" text-anchor="middle">V</text><text x="112" y="18" text-anchor="middle">e⁻</text><text x="228" y="18" text-anchor="middle">e⁻</text><text x="170" y="84" text-anchor="middle" font-size="9">salt bridge</text><text x="4" y="75">Zn</text><text x="4" y="88" font-size="9">anode (−)</text><text x="286" y="75">Cu</text><text x="286" y="88" font-size="9">cathode (+)</text><text x="90" y="214" text-anchor="middle">ZnSO<tspan dy="3" font-size="8">4</tspan><tspan dy="-3">(aq)</tspan></text><text x="250" y="214" text-anchor="middle">CuSO<tspan dy="3" font-size="8">4</tspan><tspan dy="-3">(aq)</tspan></text><text x="90" y="228" text-anchor="middle" font-size="9">Zn → Zn²⁺ + 2e⁻</text><text x="250" y="228" text-anchor="middle" font-size="9">Cu²⁺ + 2e⁻ → Cu</text></g>
</svg>
<figcaption>Figure 2.1 Daniell cell: zinc anode (−) on the left, copper cathode (+) on the right; electrons flow from zinc to copper through the wire.</figcaption>
</figure>

A cell is written in shorthand with the anode on the left: $\ce{Zn(s) | Zn^2+(aq) || Cu^2+(aq) | Cu(s)}$. A single line is a phase boundary and the double line is the salt bridge.

The Daniell cell gives 1.10 V. If you connect an outside source that pushes back with more than 1.10 V, the reaction runs backwards: copper dissolves and zinc deposits. The same apparatus is now an **electrolytic cell**, using electrical energy to drive a non-spontaneous reaction.

<figure class="fig" id="electrolytic-cell">
<svg viewBox="0 0 320 205" role="img" aria-label="Electrolytic cell: a battery drives the electrolysis of molten sodium chloride" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M80,100 V198 H240 V100"/><path d="M80,118L240,118" stroke-width="1"/><rect x="108" y="58" width="12" height="125"/><rect x="200" y="58" width="12" height="125"/><path d="M114,58 V30 H153"/><path d="M167,30 H206 V58"/><path d="M153,16L153,44"/><path d="M167,22L167,38" stroke-width="3"/><path d="M128,22L146,22" stroke-width="1"/><path d="M141.7,24.5L146,22L141.7,19.5" stroke-width="1"/><path d="M174,22L192,22" stroke-width="1"/><path d="M187.7,24.5L192,22L187.7,19.5" stroke-width="1"/><path d="M185,140L128,140" stroke-width="1"/><path d="M132.3,137.5L128,140L132.3,142.5" stroke-width="1"/><path d="M135,165L192,165" stroke-width="1"/><path d="M187.7,167.5L192,165L187.7,162.5" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="148" y="14" text-anchor="end">+</text><text x="172" y="14">−</text><text x="160" y="58" text-anchor="middle" font-size="9">battery</text><text x="120" y="18" text-anchor="middle" font-size="9">e⁻</text><text x="200" y="18" text-anchor="middle" font-size="9">e⁻</text><text x="76" y="72" text-anchor="end">anode (+)</text><text x="76" y="85" text-anchor="end" font-size="9">oxidation</text><text x="244" y="72">cathode (−)</text><text x="244" y="85" font-size="9">reduction</text><text x="160" y="134" text-anchor="middle">Cl⁻</text><text x="160" y="159" text-anchor="middle">Na⁺</text><text x="160" y="190" text-anchor="middle" font-size="9">molten NaCl</text></g>
</svg>
<figcaption>Figure 2.2 Electrolytic cell (molten NaCl): the battery forces the change. Anode (+): chloride ions are oxidised to chlorine. Cathode (−): sodium ions are reduced to sodium.</figcaption>
</figure>

:::tip
Oxidation is always at the anode, in both kinds of cell. What changes is the sign: the anode is negative in a galvanic cell and positive in an electrolytic cell.
:::

**In one breath:** A galvanic cell separates oxidation (anode, −) from reduction (cathode, +) so electrons flow through a wire; drive it backwards with a larger outside voltage and it becomes an electrolytic cell.

## Electrode potential and the standard hydrogen electrode

Why does the Daniell cell give 1.10 V and not some other value? Each metal dipped in a solution of its ions has a tendency to gain or lose electrons, and this sets up a potential difference between metal and solution called the **electrode potential**. When every species is at unit concentration (1 M, gases at 1 bar) it is the **standard electrode potential**, $E^\circ$. By convention we always quote *reduction* potentials.

A single electrode potential cannot be measured, because a half-cell cannot work alone; a voltmeter only reads differences. So chemists picked a reference: the **standard hydrogen electrode** (SHE), platinum coated with platinum black dipping in 1 M $\ce{H+}$ with hydrogen gas bubbling at 1 bar, written $\ce{Pt(s) | H2(g, 1 bar) | H+(aq, 1 M)}$. Its potential is taken as exactly zero. Couple any other half-cell with the SHE and the cell voltage is that half-cell's $E^\circ$.

The cell voltage (emf) is the potential difference between the electrodes when no current is drawn.

:::formula Standard cell potential
$E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}$ (both as reduction potentials; right minus left in the cell notation)

Daniell cell: $0.34-(-0.76)=1.10$ V
:::

Listing half-cells in order of $E^\circ$ gives the **electrochemical series**, and it tells you a great deal. A large positive $E^\circ$ means the species is easily reduced, so it is a strong oxidising agent; fluorine tops the list at +2.87 V. A large negative $E^\circ$ means the reduced form readily gives up electrons, so it is a strong reducing agent; lithium sits at −3.05 V. A metal lower in $E^\circ$ displaces one higher in $E^\circ$ from its salt solution, which is why zinc displaces copper, and why metals with negative $E^\circ$ liberate hydrogen from acids while copper (+0.34 V) does not.

:::skeleton Worked example: standard cell potential
*Write the cell reaction and find $E^\circ_\text{cell}$ for a cell made from zinc and silver electrodes. ($E^\circ_{\ce{Zn^2+/Zn}}=-0.76$ V, $E^\circ_{\ce{Ag+/Ag}}=+0.80$ V)*

Zinc has the lower $E^\circ$, so it is the anode: $\ce{Zn + 2Ag+ -> Zn^2+ + 2Ag}$ [1]

$E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}=0.80-(-0.76)=$ **1.56 V** [1]
:::

:::tip
The silver half-reaction is doubled to balance electrons, but its $E^\circ$ stays 0.80 V. Potential is an intensive property; never multiply it by a coefficient.
:::

**In one breath:** Electrode potentials are reduction potentials measured against the hydrogen electrode (0 V); cell voltage is cathode minus anode, and the series ranks oxidising and reducing strength.

## The Nernst equation

Standard potentials assume 1 M solutions, but real cells rarely oblige. As a Daniell cell runs, $\ce{Zn^2+}$ builds up and $\ce{Cu^2+}$ is used up, and the voltage falls. Le Chatelier's principle explains the direction: piling up product and removing reactant makes the forward reaction less eager. The **Nernst equation** gives the size of the effect.

:::formula Nernst equation
For a cell reaction with $n$ electrons transferred, at 298 K:

$E_\text{cell}=E^\circ_\text{cell}-\dfrac{0.059}{n}\log Q$ , where $Q=\dfrac{[\text{products}]}{[\text{reactants}]}$ with each concentration raised to its coefficient

General form: $E_\text{cell}=E^\circ_\text{cell}-\dfrac{RT}{nF}\ln Q$

Single electrode $\ce{M^n+ + ne- -> M}$: $E=E^\circ-\dfrac{0.059}{n}\log\dfrac{1}{[\ce{M^n+}]}$
:::

Pure solids and liquids are left out of $Q$, and gases enter as partial pressures in bar. The 0.059 comes from $2.303RT/F$ at 298 K.

:::skeleton Worked example: Nernst equation
*Find the emf at 298 K of $\ce{Zn(s) | Zn^2+(0.10 M) || Ag+(0.010 M) | Ag(s)}$, given $E^\circ_\text{cell}=1.56$ V.*

Cell reaction: $\ce{Zn + 2Ag+ -> Zn^2+ + 2Ag}$, so $n=2$ [½]

$E_\text{cell}=E^\circ_\text{cell}-\dfrac{0.059}{2}\log\dfrac{[\ce{Zn^2+}]}{[\ce{Ag+}]^2}$ [1]

$=1.56-0.0295\log\dfrac{0.10}{(0.010)^2}=1.56-0.0295\log10^{3}$ [1]

$=1.56-0.0885=$ **1.47 V** [½]
:::

:::tip
Two slips cost marks here: forgetting to square $[\ce{Ag+}]$ (the coefficient becomes the power), and writing $Q$ upside down. Write the balanced cell reaction first and read $Q$ and $n$ off it.
:::

**In one breath:** Cell voltage falls as products build up; $E=E^\circ-\frac{0.059}{n}\log Q$ at 298 K, with solids left out of $Q$.

## Cell potential, Gibbs energy and the equilibrium constant

Keep drawing current and $Q$ keeps rising until the voltage reaches zero. The cell is "dead", which simply means the reaction has reached equilibrium, and at that point $Q$ equals the equilibrium constant $K_c$. Put $E_\text{cell}=0$ into the Nernst equation and you get a direct link between $E^\circ$ and $K_c$.

There is a second link. The electrical work a cell can do is charge times voltage. For one mole of reaction the charge is $nF$, so the maximum work is $nFE$, and maximum useful work is exactly what the fall in Gibbs energy measures.

:::formula Gibbs energy and cell potential
$\Delta_rG=-nFE_\text{cell}$ and $\Delta_rG^\circ=-nFE^\circ_\text{cell}$ ($F=96487\approx96500$ C mol$^{-1}$; answer in joules)

$\log K_c=\dfrac{nE^\circ_\text{cell}}{0.059}$ at 298 K (from $\Delta_rG^\circ=-2.303RT\log K_c$)
:::

The signs agree with what you know: a positive cell voltage means a negative $\Delta G$, a spontaneous reaction. And unlike $E^\circ$, $\Delta G^\circ$ *is* extensive, so it does depend on how you balance the equation, through $n$.

:::skeleton Worked example: Gibbs energy and equilibrium constant
*For $\ce{Zn + 2Ag+ -> Zn^2+ + 2Ag}$, $E^\circ_\text{cell}=1.56$ V. Find $\Delta_rG^\circ$ and $K_c$ at 298 K.*

$\Delta_rG^\circ=-nFE^\circ_\text{cell}=-2\times96500\times1.56$ [1]

$=-301080$ J mol$^{-1}=$ **−301.1 kJ mol$^{-1}$** [½]

$\log K_c=\dfrac{nE^\circ_\text{cell}}{0.059}=\dfrac{2\times1.56}{0.059}=52.88$ [1]

$K_c=$ **$7.6\times10^{52}$** (the reaction goes practically to completion) [½]
:::

**In one breath:** A cell is a Gibbs-energy machine: $\Delta G^\circ=-nFE^\circ$, and at equilibrium the voltage is zero, giving $\log K_c=nE^\circ/0.059$.

## How solutions conduct: conductivity and molar conductivity

Inside the cell, current is carried by ions, not electrons. To describe how well a solution conducts, start from what you know about wires. Resistance is $R=\rho\,l/A$. Chemists prefer the inverses: **conductance** $G=1/R$, in siemens (S), and **conductivity** $\kappa=1/\rho$, the conductance of a solution of unit length and unit cross-section.

Conductivity is measured in a conductivity cell: two platinised platinum plates a fixed distance apart, placed in one arm of a Wheatstone bridge. Alternating current is used, because direct current would electrolyse the solution and change its concentration. The cell's geometry, $l/A$, is its **cell constant** $G^*$. It is found once, by measuring the resistance of a standard KCl solution of known $\kappa$, and then used for every other solution.

Conductivity alone is not a fair way to compare electrolytes, because it depends on how many ions happen to be in each cubic centimetre. Dividing by concentration gives the conducting power of the ions from *one mole* of electrolyte, the **molar conductivity**.

:::formula Conductivity and cell constant
$\kappa=\dfrac{G^*}{R}$ , with cell constant $G^*=\dfrac{l}{A}=R\,\kappa$ (cm$^{-1}$)

$\Lambda_m=\dfrac{\kappa}{c}$ ; in the usual units $\Lambda_m\,(\text{S cm}^2\,\text{mol}^{-1})=\dfrac{1000\,\kappa\,(\text{S cm}^{-1})}{M\,(\text{mol L}^{-1})}$
:::

:::tip
The factor 1000 only works with $\kappa$ in S cm$^{-1}$. If the question gives S m$^{-1}$, convert first: 1 S m$^{-1}$ = 0.01 S cm$^{-1}$.
:::

:::skeleton Worked example: cell constant and molar conductivity
*A conductivity cell filled with 0.1 M KCl ($\kappa=0.0129$ S cm$^{-1}$) has a resistance of 85 Ω. Filled with a 0.05 M solution of an electrolyte, its resistance is 250 Ω. Find the molar conductivity of the electrolyte.*

$G^*=R\,\kappa=85\times0.0129=1.097$ cm$^{-1}$ [1]

$\kappa=\dfrac{G^*}{R}=\dfrac{1.097}{250}=4.39\times10^{-3}$ S cm$^{-1}$ [1]

$\Lambda_m=\dfrac{1000\,\kappa}{M}=\dfrac{1000\times4.39\times10^{-3}}{0.05}=$ **87.7 S cm$^2$ mol$^{-1}$** [1]
:::

Conductivity depends on the nature of the electrolyte, the size and solvation of its ions, the solvent and its viscosity, the concentration and the temperature. Unlike metals, solutions conduct *better* when warmed, because the ions move faster.

**In one breath:** Conductivity is conductance per unit geometry; molar conductivity divides it by concentration so electrolytes can be compared mole for mole.

## Dilution, strong and weak electrolytes, and Kohlrausch's law

What happens when you dilute a solution? There are fewer ions in each cubic centimetre, so conductivity **falls**. Molar conductivity, however, **rises**, and the reason differs for the two kinds of electrolyte.

A **strong electrolyte** such as KCl is fully ionised at every concentration. Dilution just moves the ions further apart, so they drag on each other less and move more freely. The rise is small and regular.

:::formula Molar conductivity of a strong electrolyte
Strong electrolytes: $\Lambda_m=\Lambda_m^\circ-A\sqrt{c}$

$\Lambda_m^\circ$ = limiting molar conductivity (at infinite dilution); $A$ depends on the type of electrolyte (1-1, 2-1, 2-2), the solvent and the temperature.
:::

A **weak electrolyte** such as ethanoic acid is only slightly ionised. Dilution makes more molecules ionise, so the number of ions from each mole climbs, and $\Lambda_m$ shoots up steeply at low concentration.

<figure class="fig" id="lambda-sqrt-c">
<svg viewBox="0 0 320 195" role="img" aria-label="Molar conductivity against square root of concentration for a strong and a weak electrolyte" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M45,20 V170 H290"/><path d="M47.5,24.3L45,20L42.5,24.3" stroke-width="1"/><path d="M285.7,172.5L290,170L285.7,167.5" stroke-width="1"/><path d="M45,48L270,82" stroke="#E0B400" stroke-width="2.5"/><path d="M50,22 Q56,150 270,158"/><circle cx="45" cy="48" r="2.5" fill="currentColor"/>
<g fill="currentColor" stroke="none"><text x="167.5" y="186" text-anchor="middle">√c →</text><text x="33" y="95" text-anchor="middle" transform="rotate(-90 33 95.0)">Λ<tspan dy="3" font-size="8">m</tspan></text><text x="40" y="51" text-anchor="end" font-size="9">Λ<tspan dy="3" font-size="8">m</tspan><tspan dy="-3">°</tspan></text><text x="200" y="62" text-anchor="middle">KCl (strong)</text><text x="215" y="128" text-anchor="middle">CH<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">COOH (weak)</tspan></text></g>
</svg>
<figcaption>Figure 2.3 Strong electrolyte: a straight line that can be extended to the axis to read Λm°. Weak electrolyte: rises steeply at low concentration, so it cannot be extrapolated.</figcaption>
</figure>

For the strong electrolyte you can extend the straight line back to zero concentration and read off $\Lambda_m^\circ$. For the weak one you cannot; the curve is too steep to extrapolate. Kohlrausch found the way round this. At infinite dilution every ion moves independently of its partner, so each makes its own fixed contribution.

**Kohlrausch's law of independent migration of ions:** the limiting molar conductivity of an electrolyte is the sum of the individual contributions of its cation and anion.

:::formula Kohlrausch's law
$\Lambda_m^\circ=\nu_+\lambda_+^\circ+\nu_-\lambda_-^\circ$

Weak acid from strong electrolytes: $\Lambda^\circ_{\ce{CH3COOH}}=\Lambda^\circ_{\ce{CH3COONa}}+\Lambda^\circ_{\ce{HCl}}-\Lambda^\circ_{\ce{NaCl}}$

Degree of dissociation $\alpha=\dfrac{\Lambda_m}{\Lambda_m^\circ}$ ; dissociation constant $K_a=\dfrac{c\,\alpha^2}{1-\alpha}$
:::

The combination works because the sodium and chloride contributions cancel, leaving $\ce{H+}$ and $\ce{CH3COO-}$.

:::skeleton Worked example: Kohlrausch's law, $\alpha$ and $K_a$
*$\Lambda_m^\circ$ for $\ce{CH3COONa}$, $\ce{HCl}$ and $\ce{NaCl}$ are 91.0, 425.9 and 126.4 S cm$^2$ mol$^{-1}$. A 0.010 M solution of ethanoic acid has $\Lambda_m=16.3$ S cm$^2$ mol$^{-1}$. Find $\alpha$ and $K_a$.*

$\Lambda^\circ_{\ce{CH3COOH}}=91.0+425.9-126.4=390.5$ S cm$^2$ mol$^{-1}$ [1]

$\alpha=\dfrac{\Lambda_m}{\Lambda_m^\circ}=\dfrac{16.3}{390.5}=$ **0.042** [1]

$K_a=\dfrac{c\,\alpha^2}{1-\alpha}=\dfrac{0.010\times(0.0417)^2}{1-0.0417}=$ **$1.8\times10^{-5}$** [1]
:::

**In one breath:** On dilution $\kappa$ falls but $\Lambda_m$ rises, gently for strong electrolytes and steeply for weak ones; Kohlrausch's law gives $\Lambda_m^\circ$ of a weak electrolyte by adding ion contributions.

## Electrolysis and Faraday's laws

In an electrolytic cell an outside source forces ions to the electrodes, where they are discharged. Faraday measured how much.

**First law:** the amount of chemical change at an electrode is proportional to the quantity of electricity passed. **Second law:** when the same charge passes through different electrolytes, the masses liberated are proportional to their chemical equivalent masses (molar mass divided by the number of electrons needed per ion).

Both follow from one idea: electrons are a reactant, and one mole of them carries one faraday, 96487 C. Discharging one mole of $\ce{Ag+}$ needs 1 F; one mole of $\ce{Cu^2+}$ needs 2 F; one mole of $\ce{Al^3+}$ needs 3 F.

:::formula Faraday's laws of electrolysis
$Q=It$ ($I$ in amperes, $t$ in seconds, $Q$ in coulombs)

$m=\dfrac{M\,I\,t}{n\,F}$ ($M$ = molar mass, $n$ = electrons per ion)
:::

:::skeleton Worked example: Faraday's first law
*A current of 1.5 A is passed through silver nitrate solution for 20 minutes. What mass of silver is deposited? (Ag = 108 g mol$^{-1}$)*

$Q=It=1.5\times20\times60=1800$ C [1]

$\ce{Ag+ + e- -> Ag}$, so $n=1$: $m=\dfrac{M\,Q}{nF}=\dfrac{108\times1800}{1\times96500}$ [½]

$=$ **2.01 g** [½]
:::

:::tip
Time must be in seconds. Twenty minutes left as "20" gives an answer sixty times too small.
:::

*Which* product forms is decided by electrode potentials: at the cathode the species with the higher reduction potential is reduced; at the anode the one that is more easily oxidised reacts. Compare molten and aqueous sodium chloride. Molten $\ce{NaCl}$ has only $\ce{Na+}$ and $\ce{Cl-}$, so it gives sodium and chlorine. In water there is competition. At the cathode, water ($E^\circ=-0.83$ V) is far easier to reduce than $\ce{Na+}$ (−2.71 V), so hydrogen comes off and the solution turns alkaline with $\ce{NaOH}$. At the anode you would expect oxygen from water, but oxygen needs a large extra voltage (overpotential) to form, so chlorine is produced instead.

The electrode can matter too. With copper electrodes in copper sulphate, the anode itself dissolves ($\ce{Cu -> Cu^2+ + 2e-}$) while copper plates on the cathode; that is how copper is refined. With inert platinum electrodes, oxygen is released at the anode. Dilute sulphuric acid gives oxygen at the anode, but the concentrated acid gives peroxodisulphate, $\ce{S2O8^2-}$.

**In one breath:** One mole of electrons is one faraday; mass deposited is $MIt/nF$, and the product at each electrode is the one that is easiest to discharge, allowing for overpotential.

## Batteries

A battery is a galvanic cell packaged for use. A good one is light, compact and holds its voltage. There are two families.

**Primary batteries** run once and are thrown away. In the **dry cell** (Leclanché cell) of torches, a zinc can is the anode and a graphite rod surrounded by $\ce{MnO2}$ and carbon is the cathode, with a paste of $\ce{NH4Cl}$ and $\ce{ZnCl2}$ between them. Zinc is oxidised to $\ce{Zn^2+}$ and manganese is reduced from +4 to +3: $\ce{MnO2 + NH4+ + e- -> MnO(OH) + NH3}$. It gives about 1.5 V. The **mercury cell** of watches and hearing aids uses zinc amalgam and a paste of $\ce{HgO}$ and carbon in $\ce{KOH}$. Its overall reaction, $\ce{Zn(Hg) + HgO -> ZnO + Hg}$, contains no ions in solution whose concentration could change, so its voltage stays steady at 1.35 V throughout its life.

**Secondary batteries** can be recharged by passing current in the opposite direction. The **lead storage battery** of cars has a lead anode, a grid of lead packed with $\ce{PbO2}$ as cathode, and 38% sulphuric acid.

:::formula Lead storage battery
Anode: $\ce{Pb + SO4^2- -> PbSO4 + 2e-}$

Cathode: $\ce{PbO2 + SO4^2- + 4H+ + 2e- -> PbSO4 + 2H2O}$

Overall (discharge): $\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}$
:::

Discharge uses up sulphuric acid and makes water, so the acid's density falls; that is how a mechanic checks the charge. Charging reverses every arrow. The nickel–cadmium cell is another rechargeable type, longer-lived but costlier.

**In one breath:** Primary cells (dry, mercury) are used once; secondary cells (lead storage, Ni–Cd) are recharged by reversing the reaction. The mercury cell's voltage is constant because no ion concentrations change.

## Fuel cells and corrosion

Burning a fuel to raise steam to turn a turbine wastes most of its energy as heat; a thermal power plant is about 40% efficient. A **fuel cell** is a galvanic cell that converts the energy of combustion of a fuel such as hydrogen directly into electricity, at about 70% efficiency. In the hydrogen–oxygen cell, the gases are bubbled through porous carbon electrodes, containing catalysts like finely divided platinum, into concentrated $\ce{NaOH}$ solution.

:::formula Hydrogen–oxygen fuel cell
Cathode: $\ce{O2 + 2H2O + 4e- -> 4OH-}$

Anode: $\ce{2H2 + 4OH- -> 4H2O + 4e-}$

Overall: $\ce{2H2 + O2 -> 2H2O}$
:::

It runs for as long as the gases are supplied, and its only product is water, which the Apollo astronauts drank.

**Corrosion** is a galvanic cell we do not want. On a damp iron surface, one spot acts as anode and iron dissolves, $\ce{2Fe -> 2Fe^2+ + 4e-}$ ($E^\circ_{\ce{Fe^2+/Fe}}=-0.44$ V). The electrons travel through the metal to another spot that acts as cathode, where oxygen is reduced in the presence of $\ce{H+}$ from dissolved carbon dioxide: $\ce{O2 + 4H+ + 4e- -> 2H2O}$ ($E^\circ=1.23$ V). The overall cell has $E^\circ=1.67$ V, so rusting is strongly spontaneous. The $\ce{Fe^2+}$ is further oxidised by air and comes out as rust, hydrated ferric oxide $\ce{Fe2O3.xH2O}$.

Since rusting is electrochemical, anything that helps ions move speeds it up, which is why iron rusts fastest in salty water. Prevention follows the same logic. Paint or grease keeps water and air away. Coating iron with zinc (galvanising) or wiring it to a block of magnesium gives **sacrificial protection**: the more active metal has the lower reduction potential, so it is oxidised in place of the iron, even if the coating is scratched.

**In one breath:** A fuel cell turns combustion straight into electricity with water as the only product; rusting is an unwanted galvanic cell on the iron surface, stopped by barriers or by a more active sacrificial metal.
