# Ch 2 · Electrostatic Potential and Capacitance — formulas

## Potential

:::formula Potential and potential difference
$V=\dfrac{W_{\infty\to P}}{q}$ (V = J C⁻¹);   $V_B-V_A=-\displaystyle\int_A^B\vec E\cdot d\vec l$;   $E=-\dfrac{dV}{dr}$<br>
Point charge $V=\dfrac{kq}{r}$;   dipole $V=\dfrac{kp\cos\theta}{r^2}$ (0 on the equatorial line)
:::

- Charged shell or conductor of radius $R$: $V=kq/r$ outside, $V=kq/R$ (constant) inside.
- Equipotentials ⊥ field lines; no work along them; never intersect. $E$ points from high to low $V$.

## Potential energy

:::formula Potential energy
Two charges $U=\dfrac{kq_1q_2}{r_{12}}$; system: $U=\sum_\text{pairs}\dfrac{kq_iq_j}{r_{ij}}$<br>
Charge in external field $U=qV$;   dipole in uniform field $U=-\vec p\cdot\vec E=-pE\cos\theta$<br>
Work to rotate a dipole $\theta_1\to\theta_2$: $W=pE(\cos\theta_1-\cos\theta_2)$
:::

## Conductors and dielectrics

- Inside a conductor: $E=0$, $V$ constant, no net charge; excess charge on the surface; $E=\sigma/\varepsilon_0$ just outside, normal to the surface.
- Polar (H₂O, HCl) vs non-polar (O₂, H₂) molecules. $\vec P=\chi_e\varepsilon_0\vec E$, $K=1+\chi_e$, field inside a dielectric $E=E_0/K$.

## Capacitors

:::formula Capacitance
$C=\dfrac QV$ (farad);   parallel plate $C_0=\dfrac{\varepsilon_0A}{d}$, dielectric-filled $C=KC_0$<br>
Slab of thickness $t$: $C=\dfrac{\varepsilon_0A}{d-t\left(1-\frac1K\right)}$;   metal slab: $C=\dfrac{\varepsilon_0A}{d-t}$
:::

:::formula Combinations and energy
Series $\dfrac1C=\sum\dfrac1{C_i}$ (same $Q$);   parallel $C=\sum C_i$ (same $V$)<br>
$U=\dfrac{Q^2}{2C}=\dfrac12CV^2=\dfrac12QV$;   $u=\dfrac12\varepsilon_0E^2$
:::

| Dielectric inserted | $C$ | $Q$ | $V$ | $E$ | $U$ |
|---|---|---|---|---|---|
| battery connected ($V$ fixed) | × K | × K | same | same | × K |
| battery removed ($Q$ fixed) | × K | same | ÷ K | ÷ K | ÷ K |
