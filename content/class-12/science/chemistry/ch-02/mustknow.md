# Ch 2 · Electrochemistry — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

1. ★★★ Nernst equation: $E_\text{cell}$, unknown concentration or $E^\circ$; often with $\Delta_rG^\circ$ or $K_c$. [3–5]
2. ★★★ How do $\kappa$ and $\Lambda_m$ vary with dilution? Plot $\Lambda_m$ vs $\sqrt c$ for strong and weak electrolytes and explain. [2–3]
3. ★★★ State Kohlrausch's law; find $\Lambda^\circ_m$ of a weak acid / $\alpha$ / $K_a$ from ionic or salt data. [3]
4. ★★★ Reactions in the lead storage battery (discharge/charge), H$_2$–O$_2$ fuel cell, mercury cell, dry cell. [2–3]
5. ★★ Corrosion of iron: reactions, why salt water speeds it, how galvanising / sacrificial protection works. [2–3]
6. ★★ $\Lambda_m$ from $\kappa$, or cell constant from $R$ and $\kappa$; units of $\Lambda_m$. [2–3]

## Must-know lines and definitions

- **Galvanic cell:** converts the chemical energy of a spontaneous redox reaction into electrical energy.
- **Electrolytic cell:** uses electrical energy to drive a non-spontaneous redox reaction.
- **Standard electrode potential:** electrode potential with species at 1 M, gases at 1 bar, at 298 K.
- **Cell emf:** potential difference between the two electrodes when no current is drawn.
- **Standard hydrogen electrode:** reference half-cell, $\ce{Pt(s)|H2(g, 1 bar)|H+(1 M)}$, assigned 0 V.
- **Salt bridge:** completes the circuit and keeps the two solutions electrically neutral.
- **Conductivity ($\kappa$):** conductance of a solution of unit length and unit area of cross-section.
- **Molar conductivity ($\Lambda_m$):** conductivity divided by molar concentration; conducting power of one mole of electrolyte.
- **Limiting molar conductivity ($\Lambda^\circ_m$):** molar conductivity as concentration approaches zero.
- **Kohlrausch's law:** $\Lambda^\circ_m$ of an electrolyte is the sum of the contributions of its cation and anion.
- **Faraday's first law:** amount of reaction at an electrode is proportional to the charge passed.
- **Faraday's second law:** for the same charge, masses liberated are proportional to their equivalent weights.
- **Primary battery:** the reaction occurs once; it cannot be recharged.
- **Secondary battery:** recharged by passing current in the opposite direction.
- **Fuel cell:** galvanic cell that converts the energy of combustion of a fuel directly into electricity.
- **Corrosion:** slow electrochemical coating of a metal surface with its oxide or other salts.

## Key formulas

:::formula Standard cell potential
$E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}$<br>
Use standard *reduction* potentials for both. Unit V. Slip: never multiply $E^\circ$ by a coefficient.
:::

:::formula Nernst equation
$E_\text{cell}=E^\circ_\text{cell}-\dfrac{0.059}{n}\log Q$ at 298 K<br>
$Q$ = products over reactants (ions only; leave out solids). $n$ from the balanced overall equation.
:::

:::formula Gibbs energy and cell potential
$\Delta_rG^\circ=-nFE^\circ_\text{cell}$<br>
$F=96487$ C mol$^{-1}$ (use 96500). Answer in J mol$^{-1}$; divide by 1000 for kJ.
:::

:::formula Equilibrium constant from cell potential
$\log K_c=\dfrac{nE^\circ_\text{cell}}{0.059}$ at 298 K<br>
Comes from $E_\text{cell}=0$ at equilibrium. $K_c$ has no unit here.
:::

:::formula Conductivity from resistance
$\kappa=\dfrac{G^*}{R}$<br>
$G^*=l/A$ is the cell constant (cm$^{-1}$), found with standard KCl. $\kappa$ in S cm$^{-1}$.
:::

:::formula Molar conductivity
$\Lambda_m=\dfrac{1000\,\kappa}{M}$<br>
$\kappa$ in S cm$^{-1}$, $M$ in mol L$^{-1}$, $\Lambda_m$ in S cm$^2$mol$^{-1}$. Slip: 1 S m$^{-1}$ = 0.01 S cm$^{-1}$.
:::

:::formula Debye–Hückel–Onsager equation
$\Lambda_m=\Lambda^\circ_m-A\sqrt c$<br>
Strong electrolytes only: a straight line of $\Lambda_m$ against $\sqrt c$, intercept $\Lambda^\circ_m$, slope $-A$.
:::

:::formula Kohlrausch's law
$\Lambda^\circ_m=\nu_+\lambda^\circ_++\nu_-\lambda^\circ_-$<br>
$\nu$ = number of each ion per formula unit. Slip: forgetting them, as in $\ce{Al2(SO4)3}$ (2 and 3).
:::

:::formula Degree of dissociation of a weak electrolyte
$\alpha=\dfrac{\Lambda_m}{\Lambda^\circ_m}$   $K_a=\dfrac{c\alpha^2}{1-\alpha}$<br>
$c$ in mol L$^{-1}$. $\Lambda^\circ_m$ of the weak acid comes from Kohlrausch's law.
:::

:::formula Faraday's law of electrolysis
$m=\dfrac{M\,I\,t}{nF}$<br>
$I$ in A, $t$ in **seconds**, $M$ molar mass, $n$ electrons per ion. $Q=It$.
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton Nernst for a cell (3 marks)
*e.g. $\ce{Zn|Zn^2+(0.1 M)||Cu^2+(0.01 M)|Cu}$, $E^\circ=1.10$ V.*<br>
Cell reaction: $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$, $n=2$ [½]<br>
$E=E^\circ-\dfrac{0.059}{2}\log\dfrac{[\ce{Zn^2+}]}{[\ce{Cu^2+}]}$ [1]<br>
$=1.10-0.0295\log\dfrac{0.1}{0.01}=1.10-0.0295$ [1]<br>
$=\boxed{1.07\text{ V}}$ [½]
:::

:::skeleton $\Lambda_m$ from resistance (3 marks)
Cell constant $G^*=R\kappa$ (from standard KCl) → $\kappa_\text{new}=G^*/R_\text{new}$ → convert to S cm$^{-1}$ → $\Lambda_m=1000\kappa/M$ → unit S cm$^2$mol$^{-1}$.
:::

:::skeleton Kohlrausch for a weak acid (3 marks)
Write the relation with ions: $\Lambda^\circ_{\ce{HA}}=\lambda^\circ_{\ce{H+}}+\lambda^\circ_{\ce{A-}}$, or with salts: $\Lambda^\circ_{\ce{HA}}=\Lambda^\circ_{\ce{NaA}}+\Lambda^\circ_{\ce{HCl}}-\Lambda^\circ_{\ce{NaCl}}$ [1] → substitute [½] → $\alpha=\Lambda_m/\Lambda^\circ_m$ [½] → $K_a=c\alpha^2/(1-\alpha)$ [1].
:::

:::skeleton Faraday (2 marks)
$Q=It$ ($t$ in s) → moles e$^-$ $=Q/F$ → moles metal $=$ moles e$^-$ ÷ $n$ → mass $=$ moles × $M$.
:::

:::skeleton Lead storage battery (3 marks)
Anode: $\ce{Pb + SO4^2- -> PbSO4 + 2e-}$<br>
Cathode: $\ce{PbO2 + SO4^2- + 4H+ + 2e- -> PbSO4 + 2H2O}$<br>
Overall: $\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}$; on charging the reaction is reversed.
:::

### Why/reason answers — write them like this

1. **$\kappa$ decreases but $\Lambda_m$ increases on dilution.**<br>→ Fewer ions per unit volume, so $\kappa$ falls; $\Lambda_m$ counts ions from one mole in the whole volume, and these ions move more freely (strong) or are more numerous because $\alpha$ rises (weak).
2. **$\Lambda^\circ_m$ of a weak electrolyte cannot be found by extrapolation.**<br>→ $\Lambda_m$ rises very steeply at low $c$, so the curve cannot be extended to $c=0$; Kohlrausch's law is used instead.
3. **Mercury cell gives a constant voltage.**<br>→ The overall reaction $\ce{Zn(Hg) + HgO -> ZnO + Hg}$ involves no ions whose concentration changes during use.
4. **Aqueous NaCl gives H$_2$, not Na, at the cathode.**<br>→ $E^\circ$($\ce{H2O/H2}$) $=-0.83$ V is higher than $E^\circ$($\ce{Na+/Na}$) $=-2.71$ V, so water is reduced. Cl$_2$ forms at the anode instead of O$_2$ because of the overpotential of oxygen.
5. **Iron rusts faster in sea water.**<br>→ Dissolved salts increase the conductivity of the water film, speeding up the electrochemical reactions.
6. **Galvanised iron is protected even when scratched.**<br>→ Zn has a lower reduction potential than Fe, so Zn is oxidised in preference (sacrificial anode).
7. **CuSO$_4$ solution cannot be stored in a zinc pot.**<br>→ $E^\circ$($\ce{Zn^2+/Zn}$) $<$ $E^\circ$($\ce{Cu^2+/Cu}$); Zn displaces Cu: $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$.
8. **AC is used to measure conductance.**<br>→ DC would cause electrolysis and change the concentration at the electrodes.
9. **Absolute electrode potential cannot be measured.**<br>→ A half-cell cannot work alone; potentials are measured against SHE (taken as 0 V).
10. **Electrolytic conductance rises with $T$.**<br>→ Ions move faster (lower viscosity, less solvation); for weak electrolytes dissociation also increases.
11. **Fuel cells are preferred.**<br>→ About 70% efficient, pollution-free (product water), supply continuous as long as reactants are fed.
12. **Acid density in a lead battery falls on discharge.**<br>→ H$_2$SO$_4$ is consumed and water is formed.

## Quick 1-mark facts (MCQ, A–R)

- Unit of conductivity $\kappa$: S cm$^{-1}$ (SI: S m$^{-1}$).
- Unit of molar conductivity: S cm$^2$mol$^{-1}$ (SI: S m$^2$mol$^{-1}$).
- Unit of cell constant: cm$^{-1}$.
- $E^\circ$ is intensive, $\Delta G$ is: extensive.
- At equilibrium in a cell: $E_\text{cell}=0$ and $Q=K$.
- Electrode signs in a galvanic cell: anode negative, cathode positive.
- Electrode signs in an electrolytic cell: anode positive, cathode negative.
- Oxidation always takes place at: the anode, in both kinds of cell.
- Strongest oxidising agent in the $E^\circ$ table: $\ce{F2}$.
- Strongest reducing agent in aqueous solution: lithium (Li).
- One faraday deposits: 108 g Ag, 31.75 g Cu or 9 g Al.
- Charge needed for 1 mol Al from $\ce{Al^3+}$: $3F$.
- Best conductor at equal concentration, HCl or $\ce{CH3COOH}$: HCl, because $\ce{H+}$ has a very high $\lambda^\circ$.
- Cell voltages to remember: mercury cell 1.35 V, dry cell about 1.5 V, Daniell cell 1.10 V.
- Electrolyte in the lead storage battery: 38% $\ce{H2SO4}$.
- Electrolyte in the $\ce{H2}$–$\ce{O2}$ fuel cell: concentrated aqueous NaOH.
- Formula of rust: $\ce{Fe2O3.xH2O}$.
- Sacrificial metals used to protect iron: Zn and Mg.

## Mark-losing traps

:::tip Multiplying E°
Multiplying $E^\circ$ by a coefficient.
:::

:::tip Reaction quotient
Writing $Q$ upside down or including solids.
:::

:::tip Value of n
Wrong $n$ (take it from the *balanced overall* equation).
:::

:::tip Conductivity units
$\kappa$ in S m$^{-1}$ used directly in $1000\kappa/M$ (1 S m$^{-1}$ = 0.01 S cm$^{-1}$).
:::

:::tip Time in Faraday's law
Time in minutes in $Q=It$.
:::

:::tip Coefficients in Kohlrausch's law
Forgetting coefficients in Kohlrausch, e.g. $\Lambda^\circ_{\ce{Al2(SO4)3}}=2\lambda^\circ_{\ce{Al^3+}}+3\lambda^\circ_{\ce{SO4^2-}}$.
:::

:::tip Fuel-cell reactions
Writing fuel-cell reactions in acid when NCERT's alkaline version is expected.
:::
