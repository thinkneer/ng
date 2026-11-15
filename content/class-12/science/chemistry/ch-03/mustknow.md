# Ch 3 · Chemical Kinetics — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

1. ★★★ First-order numerical: $k$ from data, $t_{1/2}$, time for 75/90/99% completion; “show that $t_{99.9\%}=10\,t_{1/2}$”. [2–3]
2. ★★★ $E_a$ from $k$ at two temperatures or from a $\log k$ vs $1/T$ plot; effect of catalyst on $E_a$. [3]
3. ★★★ Order vs molecularity (two differences); pseudo first-order reaction with example. [2]
4. ★★★ Derive the integrated rate equation for a first-order (or zero-order) reaction and its half-life. [3]
5. ★★ Units of $k$ for a given order, or order from the units. [1]
6. ★★ Order from initial-rate data; write the rate law and find $k$. [3]

## Must-know lines and definitions

- **Rate of reaction:** change in concentration of a reactant or product per unit time.
- **Rate law:** rate in terms of reactant concentrations, each raised to an experimentally found power.
- **Reaction order:** sum of the powers in the rate law; can be zero or fractional.
- **Reaction molecularity:** number of species colliding simultaneously in an elementary reaction; 1, 2 or 3.
- **Rate constant:** rate of reaction when the concentration of each reactant is unity.
- **Half-life period:** time in which the concentration of a reactant falls to half its initial value.
- **Pseudo first order reaction:** higher-order reaction that behaves as first order because one reactant is in large excess.
- **Rate-determining step:** the slowest step of a complex reaction; it fixes the overall rate.
- **Activation energy:** extra energy reactant molecules must absorb to form the activated complex.
- **Threshold energy:** minimum energy colliding molecules must have for the collision to be effective.
- **Reaction catalyst:** increases the rate by giving a path of lower $E_a$; is not consumed.
- **What a catalyst cannot change:** $\Delta G$, $\Delta H$ and the equilibrium constant.
- **Effective collision:** collision with enough energy and proper orientation.

## Key formulas

:::formula Zero-order rate equation
$k=\dfrac{[R]_0-[R]}{t}$   $t_{1/2}=\dfrac{[R]_0}{2k}$<br>
$k$ in mol L$^{-1}$s$^{-1}$. A plot of $[R]$ against $t$ is a straight line of slope $-k$.
:::

:::formula First-order rate equation
$k=\dfrac{2.303}{t}\log\dfrac{[R]_0}{[R]}$<br>
$k$ in s$^{-1}$ (or min$^{-1}$: keep $t$ in the same unit). Slip: dropping 2.303 with $\log$.
:::

:::formula First-order half-life
$t_{1/2}=\dfrac{0.693}{k}$<br>
Independent of initial concentration. Use for radioactive decay too.
:::

:::formula First-order gas-phase reaction
$k=\dfrac{2.303}{t}\log\dfrac{p_i}{2p_i-p_t}$<br>
For $\ce{A(g) -> B(g) + C(g)}$: $p_i$ initial pressure, $p_t$ total pressure at time $t$.
:::

:::formula Arrhenius equation
$k=Ae^{-E_a/RT}$<br>
$A$ = frequency factor (same unit as $k$), $E_a$ in J mol$^{-1}$, $R=8.314$ J K$^{-1}$mol$^{-1}$, $T$ in K.
:::

:::formula Activation energy from two temperatures
$\log\dfrac{k_2}{k_1}=\dfrac{E_a}{2.303R}\cdot\dfrac{T_2-T_1}{T_1T_2}$<br>
$T$ in kelvin; $E_a$ comes out in J mol$^{-1}$. Slip: using $^\circ$C, or $E_a$ in kJ with $R$ in J.
:::

:::formula Units of the rate constant
$(\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}$ for order $n$<br>
Zero: mol L$^{-1}$s$^{-1}$. First: s$^{-1}$. Second: L mol$^{-1}$s$^{-1}$.
:::

:::formula Rate from collision theory
Rate $=PZ_{AB}\,e^{-E_a/RT}$<br>
$Z_{AB}$ = collision frequency, $P$ = orientation (steric) factor.
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton First-order integrated rate law (3 marks)
$\ce{R -> P}$; rate $=-\dfrac{d[R]}{dt}=k[R]$ [½]<br>
$\dfrac{d[R]}{[R]}=-k\,dt$ → integrate: $\ln[R]=-kt+I$ [½]<br>
At $t=0$, $[R]=[R]_0$ ⇒ $I=\ln[R]_0$ [½]<br>
$\ln[R]=-kt+\ln[R]_0$ ⇒ $k=\dfrac1t\ln\dfrac{[R]_0}{[R]}=\boxed{\dfrac{2.303}{t}\log\dfrac{[R]_0}{[R]}}$ [½]<br>
At $t_{1/2}$, $[R]=[R]_0/2$: $t_{1/2}=\dfrac{2.303\log2}{k}=\boxed{\dfrac{0.693}{k}}$ [1]
:::

:::skeleton Zero order (2–3 marks)
$-\dfrac{d[R]}{dt}=k$ → $d[R]=-k\,dt$ → $[R]=-kt+I$; $I=[R]_0$ → $[R]=[R]_0-kt$, $k=\dfrac{[R]_0-[R]}{t}$; $t_{1/2}=\dfrac{[R]_0}{2k}$.
:::

:::skeleton Time for $x$% completion (2 marks)
Take $[R]_0=100$, $[R]=100-x$. $t=\dfrac{2.303}{k}\log\dfrac{100}{100-x}$. Find $k$ from $t_{1/2}$ if needed: $k=0.693/t_{1/2}$.<br>
Shortcuts to verify: 75% → $2t_{1/2}$; 87.5% → $3t_{1/2}$; 99.9% → $\approx10t_{1/2}$.
:::

:::skeleton $E_a$ from two temperatures (3 marks)
Write the two-point Arrhenius form [1] → substitute with $R=8.314$, $T$ in K [1] → $E_a$ in J mol$^{-1}$, convert to kJ mol$^{-1}$ [1].
:::

:::skeleton Order from initial rates (3 marks)
Compare two runs where only [A] changes: $\dfrac{r_2}{r_1}=\left(\dfrac{[A]_2}{[A]_1}\right)^x$ → $x$. Same for $y$. Write rate $=k[A]^x[B]^y$, overall order, then $k$ with units from one run.
:::

### Why/reason answers — write them like this

1. **Rate increases with temperature.**<br>→ More molecules have energy $\ge E_a$; for a 10 K rise the fraction (area beyond $E_a$) roughly doubles, so $k$ nearly doubles.
2. **Order can be fractional; molecularity cannot.**<br>→ Order is an experimental quantity from the rate law; molecularity counts molecules colliding in one step, which must be a whole number.
3. **Molecularity above 3 is not observed.**<br>→ The chance of more than three molecules colliding at the same instant with proper energy and orientation is very small.
4. **Hydrolysis of ethyl acetate in water is pseudo first order.**<br>→ Water is in large excess, so [H$_2$O] stays practically constant; rate $=k'[\text{ester}]$.
5. **A catalyst does not change the equilibrium constant.**<br>→ It lowers $E_a$ of the forward and backward reactions by the same amount, so both speed up equally; $\Delta G$ is unchanged.
6. **Not every collision gives products.**<br>→ Only collisions with sufficient energy and proper orientation are effective.
7. **$t_{1/2}$ of a first-order reaction is constant.**<br>→ $t_{1/2}=0.693/k$ contains no concentration term.
8. **Rate decreases as the reaction proceeds.**<br>→ Concentration of reactants decreases.
9. **Molecularity has no meaning for a complex reaction.**<br>→ A complex reaction has several steps; molecularity is defined for each elementary step; the slowest step fixes the rate.

## Quick 1-mark facts (MCQ, A–R)

- Unit of rate of reaction, whatever the order: mol L$^{-1}$s$^{-1}$.
- A rate constant in s$^{-1}$ means: first order.
- A rate constant in L mol$^{-1}$s$^{-1}$ means: second order.
- Rate of $\ce{2N2O5 -> 4NO2 + O2}$: $-\frac12\frac{d[\ce{N2O5}]}{dt}=\frac14\frac{d[\ce{NO2}]}{dt}=\frac{d[\ce{O2}]}{dt}$.
- Overall order for rate $=k[A]^{1/2}[B]^{3/2}$: second order (½ + 3⁄2 = 2).
- The rate constant depends on: temperature and catalyst, not on concentration.
- Zero-order half-life: proportional to initial concentration.
- First-order half-life: independent of initial concentration.
- Slope of $\ln k$ against $1/T$: $-E_a/R$.
- Slope of $\log k$ against $1/T$: $-E_a/2.303R$; intercept $\log A$.
- Order of radioactive decay: first order.
- Molecularity applies only to: elementary reactions; it is never zero or fractional.
- For many reactions a 10 K rise in temperature: nearly doubles the rate constant.

## Mark-losing traps

:::tip Order from the equation
Taking order from the balanced equation instead of data.
:::

:::tip ln or log
Mixing $\ln$ and $\log$ (forgetting 2.303).
:::

:::tip Time units
Time units: $k$ in min$^{-1}$ gives $t$ in min.
:::

:::tip Units in the Arrhenius equation
Arrhenius: $E_a$ in kJ with $R=8.314$ J, or $T$ in $^\circ$C.
:::

:::tip Rate of reaction or rate of disappearance
Rate of reaction vs rate of disappearance of one species (stoichiometric factors).
:::

:::tip What a catalyst does
“Catalyst increases $E_a$” or “shifts equilibrium”.
:::

:::tip Molecularity of a complex reaction
Assigning molecularity to a complex reaction.
:::
