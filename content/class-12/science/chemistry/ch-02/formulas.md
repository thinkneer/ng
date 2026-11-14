# Ch 2 · Electrochemistry — formulas and key facts

## Galvanic (electrochemical) cell

- Chemical energy of a spontaneous redox reaction → electrical energy. **Anode: oxidation, negative; cathode: reduction, positive.**
- Daniell cell: $\ce{Zn(s) | Zn^2+(aq) || Cu^2+(aq) | Cu(s)}$, $E^\circ=1.10$ V. Anode on the left, cathode on the right; $\|$ = salt bridge.
- Salt bridge (KCl/KNO$_3$ in agar): completes the circuit and keeps both solutions electrically neutral.
- SHE: $\ce{Pt(s) | H2(g, 1 bar) | H+(aq, 1 M)}$, $E^\circ=0.00$ V by convention.

:::formula
$E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}=E^\circ_\text{right}-E^\circ_\text{left}$ (both as *reduction* potentials)<br>
**Nernst** (298 K): $E_\text{cell}=E^\circ_\text{cell}-\dfrac{0.059}{n}\log\dfrac{[\text{products}]}{[\text{reactants}]}$ (general: $E=E^\circ-\dfrac{RT}{nF}\ln Q$)<br>
Single electrode $\ce{M^n+ + ne- -> M}$: $E=E^\circ-\dfrac{0.059}{n}\log\dfrac{1}{[\ce{M^n+}]}$<br>
$\Delta_rG^\circ=-nFE^\circ_\text{cell}$;   $\Delta_rG=-nFE_\text{cell}$;   $\Delta_rG^\circ=-2.303RT\log K_c$<br>
Equilibrium ($E_\text{cell}=0$): $\log K_c=\dfrac{nE^\circ_\text{cell}}{0.059}$
:::

- Spontaneous if $E_\text{cell}>0$ ($\Delta G<0$). Pure solids/liquids are left out of $Q$; gases enter as partial pressure (bar).
- Higher (more positive) $E^\circ_\text{red}$ → stronger oxidising agent (F$_2$). More negative → stronger reducing agent (Li). A metal with lower $E^\circ$ displaces one with higher $E^\circ$ from its salt solution.

| **Standard reduction potentials to know (V, 298 K)** | | | |
|---|---|---|---|
| $\ce{F2/F-}$ | $+2.87$ | $\ce{Cu^2+/Cu}$ | $+0.34$ |
| $\ce{MnO4^-/Mn^2+}$ | $+1.51$ | $\ce{H+/H2}$ | $0.00$ |
| $\ce{Cl2/Cl-}$ | $+1.36$ | $\ce{Fe^2+/Fe}$ | $-0.44$ |
| $\ce{Cr2O7^2-/Cr^3+}$ | $+1.33$ | $\ce{Zn^2+/Zn}$ | $-0.76$ |
| $\ce{O2/H2O}$ (acid) | $+1.23$ | $\ce{2H2O/H2 + 2OH-}$ | $-0.83$ |
| $\ce{Ag+/Ag}$ | $+0.80$ | $\ce{Al^3+/Al}$ | $-1.66$ |
| $\ce{Fe^3+/Fe^2+}$ | $+0.77$ | $\ce{Mg^2+/Mg}$; $\ce{Na+/Na}$ | $-2.36$; $-2.71$ |
| $\ce{I2/I-}$ | $+0.54$ | $\ce{Li+/Li}$ | $-3.05$ |

## Conductance of electrolytic solutions

:::formula
$R=\rho\dfrac{l}{A}$;   conductance $G=\dfrac1R$ (S);   conductivity $\kappa=\dfrac1\rho=G\cdot\dfrac lA$ (S m$^{-1}$ or S cm$^{-1}$)<br>
Cell constant $G^*=\dfrac lA=R\,\kappa$ (m$^{-1}$ or cm$^{-1}$)<br>
Molar conductivity $\Lambda_m=\dfrac{\kappa}{c}$:   $\Lambda_m(\text{S cm}^2\text{mol}^{-1})=\dfrac{1000\,\kappa(\text{S cm}^{-1})}{M(\text{mol L}^{-1})}$<br>
Strong electrolyte (Debye–Hückel–Onsager): $\Lambda_m=\Lambda_m^\circ-A\sqrt c$<br>
**Kohlrausch**: $\Lambda_m^\circ=\nu_+\lambda_+^\circ+\nu_-\lambda_-^\circ$<br>
e.g. $\Lambda^\circ_{\ce{CH3COOH}}=\Lambda^\circ_{\ce{CH3COONa}}+\Lambda^\circ_{\ce{HCl}}-\Lambda^\circ_{\ce{NaCl}}$<br>
Weak electrolyte: $\alpha=\dfrac{\Lambda_m}{\Lambda_m^\circ}$;   $K_a=\dfrac{c\,\alpha^2}{1-\alpha}$
:::

<figure class="fig">
<svg viewBox="0 0 320 195" role="img" aria-label="Molar conductivity against square root of concentration for a strong and a weak electrolyte" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M45,20 V170 H290"/><path d="M47.5,24.3L45,20L42.5,24.3" stroke-width="1"/><path d="M285.7,172.5L290,170L285.7,167.5" stroke-width="1"/><path d="M45,48L270,82" stroke="#E0B400" stroke-width="2.5"/><path d="M50,22 Q56,150 270,158"/><circle cx="45" cy="48" r="2.5" fill="currentColor"/>
<g fill="currentColor" stroke="none"><text x="167.5" y="186" text-anchor="middle">√c →</text><text x="33" y="95" text-anchor="middle" transform="rotate(-90 33 95.0)">Λ<tspan dy="3" font-size="8">m</tspan></text><text x="40" y="51" text-anchor="end" font-size="9">Λ<tspan dy="3" font-size="8">m</tspan><tspan dy="-3">°</tspan></text><text x="200" y="62" text-anchor="middle">KCl (strong)</text><text x="215" y="128" text-anchor="middle">CH<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">COOH (weak)</tspan></text></g>
</svg>
<figcaption>Strong electrolyte: a straight line that can be extended to the axis to read Λm°. Weak electrolyte: rises steeply at low concentration, so it cannot be extrapolated.</figcaption>
</figure>

- On dilution: $\kappa$ **decreases** (fewer ions per cm$^3$); $\Lambda_m$ **increases** (strong: ions freer; weak: $\alpha$ increases sharply).
- Strong: straight line, extrapolate to $c\to0$ for $\Lambda_m^\circ$. Weak: steep curve, cannot extrapolate → use Kohlrausch.

- $A$ depends on electrolyte type (1-1, 2-1, 2-2), solvent and $T$.
- Conductivity depends on: nature of electrolyte, ion size and solvation, solvent viscosity, concentration, $T$ (electrolytic conductance rises with $T$; metallic falls).

## Electrolysis & Faraday's laws

:::formula
$Q=It$;   1 F $=96487$ C mol$^{-1}$ (charge on 1 mol e$^-$)<br>
First law: $m=ZIt=\dfrac{M}{nF}\,It$   Second law: $\dfrac{m_1}{m_2}=\dfrac{E_1}{E_2}$ (same $Q$; $E$ = $M/n$)<br>
Charge to discharge 1 mol $\ce{M^n+}$ $=nF$ (e.g. $\ce{Al^3+}$: $3F$; metal from $\ce{M2O3}$: $3F$ per mol M) `SQP 26–27`
:::

| **Electrolysis of** | **Cathode** | **Anode** |
|---|---|---|
| Molten NaCl (or MgCl$_2$ `SQP 26–27`) | Na (Mg) | Cl$_2$ |
| Aqueous NaCl | H$_2$ (water reduced: $-0.83>-2.71$) | Cl$_2$ (O$_2$ has overpotential) |
| Aq. CuSO$_4$, Cu electrodes | Cu deposited | Cu dissolves ($\ce{Cu -> Cu^2+}$) |
| Aq. CuSO$_4$, Pt electrodes | Cu deposited | O$_2$ |
| Dilute H$_2$SO$_4$ | H$_2$ | O$_2$ |
| Conc. H$_2$SO$_4$ | H$_2$ | $\ce{S2O8^2-}$ (peroxodisulphate) |

## Batteries & fuel cell (write all three equations)

- **Dry (Leclanché) cell** — primary, $\approx$1.5 V. Anode Zn container; cathode graphite rod in MnO$_2$ + C; paste of NH$_4$Cl + ZnCl$_2$.<br>Anode: $\ce{Zn -> Zn^2+ + 2e-}$; Cathode: $\ce{MnO2 + NH4+ + e- -> MnO(OH) + NH3}$
- **Mercury cell** — primary, 1.35 V, constant (no ions in overall reaction); hearing aids, watches.<br>Anode: $\ce{Zn(Hg) + 2OH- -> ZnO + H2O + 2e-}$; Cathode: $\ce{HgO + H2O + 2e- -> Hg + 2OH-}$<br>Overall: $\ce{Zn(Hg) + HgO -> ZnO + Hg}$
- **Lead storage battery** — secondary; anode Pb, cathode PbO$_2$ grid, electrolyte 38% H$_2$SO$_4$ `SQP 26–27`.<br>Anode: $\ce{Pb + SO4^2- -> PbSO4 + 2e-}$; Cathode: $\ce{PbO2 + SO4^2- + 4H+ + 2e- -> PbSO4 + 2H2O}$<br>Overall (discharge): $\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}$; charging reverses it. Ni–Cd: longer life, costlier.
- **H$_2$–O$_2$ fuel cell** `SQP 26–27` — porous carbon electrodes with Pt/Pd, conc. NaOH.<br>Cathode: $\ce{O2 + 2H2O + 4e- -> 4OH-}$; Anode: $\ce{2H2 + 4OH- -> 4H2O + 4e-}$; Overall: $\ce{2H2 + O2 -> 2H2O}$<br>About 70% efficient (thermal plant $\approx$40%), no pollution, continuous supply of reactants; used in Apollo missions.

## Corrosion (rusting is electrochemical)

:::formula
Anode: $\ce{2Fe -> 2Fe^2+ + 4e-}$ ($E^\circ_{\ce{Fe^2+/Fe}}=-0.44$ V)   Cathode: $\ce{O2 + 4H+ + 4e- -> 2H2O}$ ($1.23$ V)<br>
Overall: $\ce{2Fe + O2 + 4H+ -> 2Fe^2+ + 2H2O}$, $E^\circ_\text{cell}=1.67$ V; $\ce{Fe^2+}$ → rust $\ce{Fe2O3.xH2O}$
:::

- H$^+$ from $\ce{H2CO3}$ (CO$_2$ + water); salt water speeds it up. Prevention: barrier (paint, grease); sacrificial/galvanic protection with more active Zn or Mg (galvanising) `SQP 26–27`; anti-rust chemicals.

:::tip
Never multiply $E^\circ$ when you multiply an equation ($E^\circ$ is intensive; $\Delta G^\circ$ is extensive). In electrolytic cells the anode is $+$, but oxidation still happens there. $n$ = electrons in the *balanced overall* equation. Convert $\kappa$ to S cm$^{-1}$ before using $1000\kappa/M$.
:::

:::skeleton
**Standard numericals**<br>
**(1) Nernst.** $\ce{Mg|Mg^2+(0.001 M)||Cu^2+(0.0001 M)|Cu}$, $E^\circ=2.71$ V, $n=2$:<br>
$E=2.71-\dfrac{0.059}{2}\log\dfrac{10^{-3}}{10^{-4}}=2.71-0.0295=\boxed{2.68\text{ V}}$<br>
**(2) $\Delta G^\circ$ and $K$.** Daniell, $E^\circ=1.10$ V: $\Delta_rG^\circ=-2\times96487\times1.10=\boxed{-212.3\text{ kJ mol}^{-1}}$; $\log K_c=\dfrac{2\times1.10}{0.059}=37.29$, $K_c\approx\boxed{1.9\times10^{37}}$<br>
**(3) $\Lambda_m$.** 0.20 M KCl, $\kappa=0.0248$ S cm$^{-1}$: $\Lambda_m=\dfrac{1000\times0.0248}{0.20}=\boxed{124\text{ S cm}^2\text{mol}^{-1}}$<br>
**(4) Kohlrausch + $\alpha$.** $\Lambda^\circ_{\ce{CH3COOH}}=91.0+425.9-126.4=390.5$; if $\Lambda_m=48.15$ at $c=0.001028$ M: $\alpha=0.123$, $K_a=\dfrac{c\alpha^2}{1-\alpha}=\boxed{1.78\times10^{-5}}$<br>
**(5) Faraday.** 2 A for 30 min through CuSO$_4$: $Q=3600$ C; $m=\dfrac{63.5\times3600}{2\times96500}=\boxed{1.18\text{ g Cu}}$
:::

## Constants and conversions (Physical Chemistry)

- $R=8.314$ J K$^{-1}$mol$^{-1}$ $=0.0821$ L atm K$^{-1}$mol$^{-1}$ $=0.083$ L bar K$^{-1}$mol$^{-1}$
- $F=96487\approx96500$ C mol$^{-1}$
- $N_A=6.022\times10^{23}$
- $\dfrac{2.303RT}{F}=0.059$ V at 298 K
- $\ln x=2.303\log x$
- 1 atm $=1.013$ bar $=760$ mm Hg $=101.3$ kPa
- $T(\text{K})=t(^\circ\text{C})+273$
- water: $K_b=0.52$, $K_f=1.86$ K kg mol$^{-1}$
- benzene: $K_b=2.53$, $K_f=5.12$
- $\log2=0.3010$, $\log3=0.4771$, $\log5=0.6990$, $\log7=0.8451$
- 1 S cm$^2$mol$^{-1}=10^{-4}$ S m$^2$mol$^{-1}$

## Board checklist

Tick when practised: Cell notation, $E^\circ_\text{cell}$, Nernst (cell & electrode), $\Delta G^\circ$–$E^\circ$–$K$; $\kappa$, $\Lambda_m$, cell constant; $\Lambda_m$ vs $\sqrt c$ graph and reason; Kohlrausch (statement + 2 uses); Faraday's laws; products of electrolysis; dry, mercury, lead storage, fuel cell equations; corrosion mechanism + prevention.
