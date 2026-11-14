# Ch 3 · Current Electricity — formulas

## Current and drift

:::formula Current, drift velocity, mobility
$I=\dfrac{dq}{dt}$;   $I=neAv_d$;   $v_d=\dfrac{eE\tau}{m}$ (opposite $\vec E$ for electrons)<br>
Mobility $\mu=\dfrac{v_d}{E}=\dfrac{e\tau}{m}$ (m² V⁻¹ s⁻¹);   $\vec j=\dfrac IA\hat n=\sigma\vec E$
:::

## Ohm's law and resistivity

:::formula Resistance and resistivity
$V=IR$;   $R=\rho\dfrac lA$;   $\rho=\dfrac{m}{ne^2\tau}$;   $\sigma=\dfrac1\rho$<br>
$\rho_T=\rho_0[1+\alpha(T-T_0)]$
:::

- Metals: $\alpha>0$ ($\tau$ falls). Semiconductors: $\rho$ falls with $T$ ($n$ rises). Nichrome, manganin, constantan: small $\alpha$.
- Ohm's law fails for non-linear, direction-dependent (diode) or non-unique (GaAs) $V$–$I$ relations.
- Stretching a wire $n$ times (volume constant): $R'=n^2R$.
- Series $R=\sum R_i$; parallel $\dfrac1R=\sum\dfrac1{R_i}$.

## Cells, emf and power

:::formula Cells and power
Discharging $V=\varepsilon-Ir$;   charging $V=\varepsilon+Ir$;   $I=\dfrac{\varepsilon}{R+r}$;   $r=R\left(\dfrac{\varepsilon}{V}-1\right)$<br>
Series: $\varepsilon_\text{eq}=\varepsilon_1+\varepsilon_2$, $r_\text{eq}=r_1+r_2$<br>
Parallel: $\varepsilon_\text{eq}=\dfrac{\varepsilon_1r_2+\varepsilon_2r_1}{r_1+r_2}$, $\dfrac1{r_\text{eq}}=\dfrac1{r_1}+\dfrac1{r_2}$<br>
$P=VI=I^2R=\dfrac{V^2}{R}$;   $H=I^2Rt$
:::

## Kirchhoff's rules and the bridge

- Junction rule $\sum I=0$ (charge conservation). Loop rule $\sum\Delta V=0$ (energy conservation).

:::formula Wheatstone bridge
Balanced: $\dfrac PQ=\dfrac RS$, galvanometer current $=0$<br>
Metre bridge (practical): $\dfrac RS=\dfrac{l}{100-l}$;   resistivity $\rho=\dfrac{S\pi r^2}{L}$
:::

- Not in boards: potentiometer, colour code of carbon resistors.
