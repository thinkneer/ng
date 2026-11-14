# Ch 3 · Current Electricity — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ most years · ★★ often · ★ sometimes. Type: `Dv` derivation · `N` numerical · `Df` definition · `G` graph/diagram · `R` reason.

1. ★★★ `Dv` $I=neAv_d$; define drift velocity and relaxation time. [2–3]
2. ★★★ `N` Kirchhoff's rules on a two-loop circuit; Wheatstone bridge balance (derive + numerical). [3–5]
3. ★★ `Dv` $\rho=m/ne^2\tau$ from drift velocity; effect of temperature on $\rho$ of metals and semiconductors. [3]
4. ★★ `N` emf, internal resistance and terminal voltage; cells in series and parallel. [2–3]
5. ★★ `G` $\rho$–$T$ graphs for a metal and a semiconductor; $I$–$V$ graphs at two temperatures. [1–2]
6. ★ `R` Why nichrome for heaters, manganin for standard resistors; stretching a wire. [1]

## Must-know lines and definitions

- **Electric current:** rate of flow of charge, $I=dq/dt$; a scalar.
- **Drift velocity:** average velocity of free electrons in a conductor under an applied field.
- **Relaxation time:** average time between successive collisions of a free electron.
- **Mobility:** drift velocity per unit electric field, $\mu=v_d/E$.
- **Current density:** current per unit area normal to the flow, $j=I/A$.
- **Ohm's law:** at constant temperature, current through a conductor is proportional to the voltage.
- **Resistivity:** resistance of a conductor of unit length and unit cross-section.
- **Resistivity depends on:** material and temperature only.
- **emf:** potential difference across the cell terminals when no current is drawn.
- **Internal resistance:** resistance of the electrolyte and electrodes inside a cell.
- **Junction rule:** sum of currents into a junction equals the sum out; charge conservation.
- **Loop rule:** algebraic sum of potential changes round a closed loop is zero; energy conservation.
- **Balanced Wheatstone bridge:** no current through the galvanometer; $P/Q=R/S$.

## Key formulas

:::formula Drift velocity
$v_d=\dfrac{eE\tau}{m}$; mobility $\mu=\dfrac{e\tau}{m}$ (m² V⁻¹ s⁻¹).
:::

:::formula Current and drift velocity
$I=neAv_d$; $j=nev_d$.
:::

:::formula Resistivity
$R=\rho\dfrac lA$, $\rho=\dfrac{m}{ne^2\tau}$ (Ω m), $\sigma=1/\rho$; $\vec j=\sigma\vec E$.
:::

:::formula Temperature coefficient
$\rho_T=\rho_0[1+\alpha(T-T_0)]$; metals $\alpha>0$, semiconductors $\alpha<0$.
:::

:::formula Terminal voltage of a cell
$I=\dfrac{\varepsilon}{R+r}$; $V=\varepsilon-Ir$ (discharging), $V=\varepsilon+Ir$ (charging).
:::

:::formula Cells in parallel
$\varepsilon_\text{eq}=\dfrac{\varepsilon_1r_2+\varepsilon_2r_1}{r_1+r_2}$, $r_\text{eq}=\dfrac{r_1r_2}{r_1+r_2}$.
:::

:::formula Electrical power
$P=VI=I^2R=V^2/R$; heat $H=I^2Rt$.
:::

:::formula Wheatstone bridge
Balance: $\dfrac PQ=\dfrac RS$.
:::

## Answer skeletons

:::skeleton Dv · Current and drift velocity (2 marks)
Electrons within length $v_d\Delta t$ cross the section in $\Delta t$: number $nAv_d\Delta t$ [1] → $\Delta q=neAv_d\Delta t$, $I=\Delta q/\Delta t=neAv_d$ [1]
:::

:::skeleton Dv · Resistivity from drift (3 marks)
$a=eE/m$, $v_d=eE\tau/m$ [1] → $I=neAv_d=\dfrac{ne^2A\tau}{m}\dfrac Vl$ [½] → $R=\dfrac{m}{ne^2\tau}\dfrac lA$ [½] → $\rho=\dfrac{m}{ne^2\tau}$ [½] → temperature: $\tau$ falls, $\rho$ rises (metal) [½]
:::

:::skeleton N · Kirchhoff two-loop (3 marks)
Mark currents with guessed directions; junction rule [½] → two loop equations with signs [1] → solve [1] → interpret any negative current [½]
:::

:::skeleton Dv · Wheatstone balance (3 marks)
Diagram [½] → $I_g=0$: same current in P and Q, in R and S [½] → loops ABDA and BCDB [1] → $P/Q=R/S$ [1]
:::

## Quick 1-mark facts (MCQ, A–R)

- **Order of drift speed:** about $10^{-4}$ m s⁻¹.
- **Why a bulb lights at once:** the field travels along the wire at nearly the speed of light.
- **Wire stretched n times:** resistance becomes $n^2$ times; resistivity unchanged.
- **Doubling V across a wire:** drift speed doubles.
- **Same current, half the area:** drift speed doubles.
- **Slope of an I–V graph:** $1/R$; steeper means lower resistance.
- **Semiconductor when heated:** resistance falls because carriers increase.
- **Nichrome in heaters:** high resistivity and high melting point.
- **Manganin, constantan:** very small α; used for standard resistors.
- **Maximum current from a cell:** $\varepsilon/r$ (short circuit).
- **Balance condition of a bridge:** independent of the cell and galvanometer resistance.

## Mark-losing traps

:::tip Electrons versus current direction
Electrons drift opposite to $\vec E$; conventional current is along $\vec E$.
:::

:::tip Terminal voltage is not emf
$V=\varepsilon$ only when no current flows; otherwise subtract (or add, if charging) $Ir$.
:::

:::tip Negative Kirchhoff current
A negative answer means the current is opposite to your guess; keep the equations as written.
:::

:::tip Loop-rule signs
Along the current through a resistor: $-IR$. Through a cell from − to +: $+\varepsilon$.
:::

:::tip Resistivity versus resistance
Changing length or area changes $R$, never $\rho$.
:::
