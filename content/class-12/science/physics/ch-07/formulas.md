# Ch 7 · Alternating Current — formulas

## rms values and reactance

:::formula rms and reactance
$v=v_m\sin\omega t$;   $I_\text{rms}=\dfrac{i_m}{\sqrt2}=0.707\,i_m$;   $V_\text{rms}=\dfrac{v_m}{\sqrt2}$<br>
$X_L=\omega L$ (current lags $V$ by $\pi/2$);   $X_C=\dfrac1{\omega C}$ (current leads $V$ by $\pi/2$)
:::

- DC: $X_L=0$, $X_C=\infty$ (capacitor blocks DC). 220 V mains ⇒ $v_m\approx311$ V.

## Series LCR, resonance, power

:::formula Series LCR
$Z=\sqrt{R^2+(X_L-X_C)^2}$;   $\tan\phi=\dfrac{X_L-X_C}{R}$;   $V=\sqrt{V_R^2+(V_L-V_C)^2}$<br>
Resonance: $\omega_0=\dfrac1{\sqrt{LC}}$, $\nu_0=\dfrac1{2\pi\sqrt{LC}}$; $Z=R$, $I$ max, $\phi=0$<br>
$P_\text{av}=V_\text{rms}I_\text{rms}\cos\phi$;   power factor $\cos\phi=\dfrac RZ$
:::

- Pure L or C: $\phi=90^\circ$, $P_\text{av}=0$ (wattless current $I_\text{rms}\sin\phi$). Pure R: $\cos\phi=1$.

## Generator and transformer

:::formula Generator and transformer
AC generator: $\varepsilon=NBA\omega\sin\omega t$, $\varepsilon_0=NBA\omega$<br>
Ideal transformer: $\dfrac{V_s}{V_p}=\dfrac{N_s}{N_p}=\dfrac{I_p}{I_s}$ (mutual induction, AC only)
:::

| Transformer loss | Remedy |
|---|---|
| flux leakage | wind coils over each other |
| copper ($I^2R$) | thick copper wire |
| eddy currents | laminated core |
| hysteresis | soft-iron core |

- Not in boards: LC oscillations.
