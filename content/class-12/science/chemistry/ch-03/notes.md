# Ch 3 · Chemical Kinetics — must-have notes

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. `SQP 26–27` marks a question type in the official 2026–27 sample paper. Marks in square brackets.

Type tags: `Df` define / state · `R` give reason · `N` numerical · `Dv` derivation · `G` graph / diagram · `Eq` write equations · `Cmp` difference / compare · `MCQ` 1-mark objective / A–R

1. ★★★ `N` First-order numerical: $k$ from data, $t_{1/2}$, time for 75/90/99% completion; ``show that $t_{99.9\%}=10\,t_{1/2}$''. [2–3] `SQP 26–27`
2. ★★★ `N` `G` $E_a$ from $k$ at two temperatures or from a $\log k$ vs $1/T$ plot; effect of catalyst on $E_a$. [3] `SQP 26–27`
3. ★★★ `Cmp` `Df` Order vs molecularity (two differences); pseudo first-order reaction with example. [2] `SQP 26–27`
4. ★★★ `Dv` Derive the integrated rate equation for a first-order (or zero-order) reaction and its half-life. [3]
5. ★★ `MCQ` Units of $k$ for a given order, or order from the units. [1]
6. ★★ `N` Order from initial-rate data; write the rate law and find $k$. [3]
7. ★★ `G` Identify order from a graph ($[R]$–$t$, $\ln[R]$–$t$, rate–$[R]$, $t_{1/2}$–$[R]_0$); meaning of slope/intercept. [1–2]
8. ★★ `MCQ` Rate in terms of each species for a given equation, e.g. $\ce{2N2O5 -> 4NO2 + O2}$. [1–2]
9. ★★ `G` `R` Effect of temperature (Maxwell–Boltzmann curves) and catalyst (energy profile). [2]
10. ★ `Df` Collision theory: effective collisions, orientation, steric factor $P$. [1–2]
11. ★ `N` Zero-order: $k$ and $t_{1/2}$; rate stays constant. [1–2] `SQP 26–27`
12. ★ `N` First-order gas-phase reaction from total pressure. [3]

## Must-know lines and definitions

- **Rate law**: rate expressed in terms of molar concentrations of reactants, each raised to a power that may or may not equal its stoichiometric coefficient.
- **Order**: sum of the powers of the concentration terms in the rate law; found by experiment; can be 0, fractional or integer.
- **Molecularity**: number of reacting species (atoms, ions, molecules) that must collide simultaneously in an elementary reaction; 1, 2 or 3.
- **Rate constant**: rate of reaction when the concentration of each reactant is unity.
- **Half-life**: time in which the concentration of a reactant falls to half its initial value.
- **Pseudo first order**: a reaction of higher order that behaves as first order because one reactant is in large excess.
- **Activation energy**: extra energy that reactant molecules must absorb to form the activated complex.
- **Catalyst**: increases rate without being consumed, by providing an alternative path of lower $E_a$; does not alter $\Delta G$ or the equilibrium constant; catalyses only spontaneous reactions.
- **Effective collisions**: collisions with energy $\ge$ threshold energy *and* proper orientation.

## Key formulas

:::formula
Zero: $k=\dfrac{[R]_0-[R]}{t}$, $t_{1/2}=\dfrac{[R]_0}{2k}$<br>
First: $k=\dfrac{2.303}{t}\log\dfrac{[R]_0}{[R]}$, $t_{1/2}=\dfrac{0.693}{k}$<br>
Gas: $k=\dfrac{2.303}{t}\log\dfrac{p_i}{2p_i-p_t}$   $k=Ae^{-E_a/RT}$<br>
$\log\dfrac{k_2}{k_1}=\dfrac{E_a}{2.303R}\cdot\dfrac{T_2-T_1}{T_1T_2}$<br>
Units of $k$: $(\text{mol L}^{-1})^{1-n}\text{s}^{-1}$   Rate $=PZ_{AB}e^{-E_a/RT}$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton Dv · First-order integrated rate law (3 marks)
$\ce{R -> P}$; rate $=-\dfrac{d[R]}{dt}=k[R]$ [½]<br>
$\dfrac{d[R]}{[R]}=-k\,dt$ → integrate: $\ln[R]=-kt+I$ [½]<br>
At $t=0$, $[R]=[R]_0$ ⇒ $I=\ln[R]_0$ [½]<br>
$\ln[R]=-kt+\ln[R]_0$ ⇒ $k=\dfrac1t\ln\dfrac{[R]_0}{[R]}=\boxed{\dfrac{2.303}{t}\log\dfrac{[R]_0}{[R]}}$ [½]<br>
At $t_{1/2}$, $[R]=[R]_0/2$: $t_{1/2}=\dfrac{2.303\log2}{k}=\boxed{\dfrac{0.693}{k}}$ [1]
:::

:::skeleton Dv · Zero order (2–3 marks)
$-\dfrac{d[R]}{dt}=k$ → $d[R]=-k\,dt$ → $[R]=-kt+I$; $I=[R]_0$ → $[R]=[R]_0-kt$, $k=\dfrac{[R]_0-[R]}{t}$; $t_{1/2}=\dfrac{[R]_0}{2k}$.
:::

:::skeleton N · Time for $x$% completion (2 marks)
Take $[R]_0=100$, $[R]=100-x$. $t=\dfrac{2.303}{k}\log\dfrac{100}{100-x}$. Find $k$ from $t_{1/2}$ if needed: $k=0.693/t_{1/2}$.<br>
Shortcuts to verify: 75% → $2t_{1/2}$; 87.5% → $3t_{1/2}$; 99.9% → $\approx10t_{1/2}$.
:::

:::skeleton N · $E_a$ from two temperatures (3 marks)
Write the two-point Arrhenius form [1] → substitute with $R=8.314$, $T$ in K [1] → $E_a$ in J mol$^{-1}$, convert to kJ mol$^{-1}$ [1].
:::

:::skeleton N · Order from initial rates (3 marks)
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

- Rate always has unit mol L$^{-1}$s$^{-1}$; $k$'s unit depends on order: s$^{-1}$ → first; L mol$^{-1}$s$^{-1}$ → second; mol L$^{-1}$s$^{-1}$ → zero.
- $\ce{2N2O5 -> 4NO2 + O2}$: $-\frac12\frac{d[\ce{N2O5}]}{dt}=\frac14\frac{d[\ce{NO2}]}{dt}=\frac{d[\ce{O2}]}{dt}$.
- Rate $=k[A]^{1/2}[B]^{3/2}$ → overall order 2.
- $k$ depends on $T$ and catalyst, not on concentration.
- Zero order: rate constant; $t_{1/2}\propto[R]_0$. First order: $t_{1/2}$ independent of $[R]_0$.
- $\ln k$ vs $1/T$: slope $-E_a/R$; $\log k$ vs $1/T$: slope $-E_a/2.303R$; intercept $\ln A$ / $\log A$. As $T\to\infty$, $k\to A$.
- A catalyst lowers $E_a$, does not change $\Delta H$, $\Delta G$ or $K$.
- Radioactive decay is first order (half-life questions on $^{14}$C use the first-order formula).
- Molecularity is meaningful only for elementary reactions; it is never zero.

## Case-based angles

- Concentration–time table → test constant $t_{1/2}$ or constant $k$ to decide order.
- Food spoilage / refrigeration, cooking at altitude → temperature effect, Arrhenius.
- Medicine shelf-life / drug in blood → first-order $t_{1/2}$, time to fall to $x$%.
- Enzymes, catalytic converters → catalyst and energy profile.
- Hydrolysis of acetyl chloride / ester in water → pseudo first order. `SQP 26–27`

## Mark-losing traps

:::tip
(1) Taking order from the balanced equation instead of data. (2) Mixing $\ln$ and $\log$ (forgetting 2.303). (3) Time units: $k$ in min$^{-1}$ gives $t$ in min. (4) Arrhenius: $E_a$ in kJ with $R=8.314$ J, or $T$ in $^\circ$C. (5) Rate of reaction vs rate of disappearance of one species (stoichiometric factors). (6) ``Catalyst increases $E_a$'' or ``shifts equilibrium''. (7) Assigning molecularity to a complex reaction.
:::
