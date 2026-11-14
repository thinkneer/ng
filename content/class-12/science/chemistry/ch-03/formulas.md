# Ch 3 · Chemical Kinetics — formulas and key facts

## Rate, rate law, order, molecularity

:::formula
For $\ce{aA + bB -> cC + dD}$: rate $=-\dfrac1a\dfrac{d[\ce A]}{dt}=-\dfrac1b\dfrac{d[\ce B]}{dt}=+\dfrac1c\dfrac{d[\ce C]}{dt}=+\dfrac1d\dfrac{d[\ce D]}{dt}$<br>
Average rate $=-\dfrac{\Delta[R]}{\Delta t}$; instantaneous rate = slope of tangent on $[R]$–$t$ curve<br>
Rate law: rate $=k[\ce A]^x[\ce B]^y$;   order $=x+y$ (found by experiment)<br>
Units of $k$: $(\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}$ → zero: mol L$^{-1}$s$^{-1}$; first: s$^{-1}$; second: L mol$^{-1}$s$^{-1}$
:::

| | **Order** | **Molecularity** |
|---|---|---|
| Meaning | sum of powers in experimental rate law | number of species colliding in one elementary step |
| Values | 0, fraction, integer, can change with conditions | 1, 2, 3 only (whole number, never 0) |
| Applies to | elementary and complex reactions | elementary steps only (meaningless for overall complex reaction) |
| Found by | experiment | theory / mechanism |

- Complex reaction: the **slowest step decides the rate** (rate-determining step). Molecularity $>3$ is rare (simultaneous collision unlikely).
- Factors: concentration, temperature, catalyst, nature of reactants, surface area.

## Integrated rate equations

| | **Zero order** | **First order** |
|---|---|---|
| Rate law | rate $=k$ | rate $=k[R]$ |
| Integrated | $[R]=[R]_0-kt$ | $k=\dfrac{2.303}{t}\log\dfrac{[R]_0}{[R]}$; $[R]=[R]_0e^{-kt}$ |
| Half-life | $t_{1/2}=\dfrac{[R]_0}{2k}$ ($\propto[R]_0$) | $t_{1/2}=\dfrac{0.693}{k}$ (independent of $[R]_0$) |
| Straight line | $[R]$ vs $t$: slope $-k$, intercept $[R]_0$ | $\ln[R]$ vs $t$: slope $-k$; $\log\frac{[R]_0}{[R]}$ vs $t$: slope $\frac{k}{2.303}$ |
| Rate vs $[R]$ | horizontal line | straight line through origin |
| Examples | $\ce{2NH3 ->[Pt][high p] N2 + 3H2}$; $\ce{2HI ->[Au] H2 + I2}$ | $\ce{2N2O5 -> 4NO2 + O2}$; $\ce{2N2O -> 2N2 + O2}$; hydrogenation of ethene; all radioactive decay |

:::formula
First-order gas reaction $\ce{A(g) -> B(g) + C(g)}$ (total pressure $p_t$, initial $p_i$): $k=\dfrac{2.303}{t}\log\dfrac{p_i}{2p_i-p_t}$<br>
First order: $t_{75\%}=2t_{1/2}$ `SQP 26–27`; $t_{90\%}=\dfrac{2.303}{k}=3.32\,t_{1/2}$; $t_{99.9\%}=\dfrac{6.909}{k}\approx10\,t_{1/2}$; after $n$ half-lives $[R]=[R]_0/2^n$
:::

- **Pseudo first order**: second order overall but one reactant in large excess (water): acid hydrolysis of ethyl acetate; inversion of cane sugar $\ce{C12H22O11 + H2O ->[H+] C6H12O6 (glucose) + C6H12O6 (fructose)}$; hydrolysis of acetyl chloride `SQP 26–27`. Rate $=k'[\text{ester}]$, $k'=k[\ce{H2O}]$.

*(graphs: see the PDF)*

## Temperature dependence — Arrhenius

:::formula
$k=A\,e^{-E_a/RT}$;   $\ln k=\ln A-\dfrac{E_a}{RT}$;   $\log k=\log A-\dfrac{E_a}{2.303RT}$<br>
$\log\dfrac{k_2}{k_1}=\dfrac{E_a}{2.303R}\left(\dfrac1{T_1}-\dfrac1{T_2}\right)=\dfrac{E_a}{2.303R}\left(\dfrac{T_2-T_1}{T_1T_2}\right)$<br>
$e^{-E_a/RT}$ = fraction of molecules with energy $\ge E_a$;   10 K rise roughly doubles $k$ (temperature coefficient $\dfrac{k_{T+10}}{k_T}\approx2$–$3$)
:::

*(graphs: see the PDF)*

- Area beyond $E_a$ (molecules able to react) roughly doubles for a 10 K rise. Peak shifts right and flattens; total area stays the same.
- **Catalyst**: gives an alternative path with lower $E_a$; speeds forward and backward reactions equally; does not change $\Delta G$ or $K$; unchanged at the end.

## Collision theory

:::formula
Rate $=P\,Z_{AB}\,e^{-E_a/RT}$   ($Z_{AB}$ = collision frequency, $P$ = probability/steric factor)
:::

- Effective collision needs (i) energy $\ge$ threshold energy and (ii) proper orientation. $E_a$ = threshold energy $-$ average energy of reactants.

## Order from initial-rate data

- Keep [B] fixed: $[A]\times2$ → rate $\times2^x$. Rate unchanged → $x=0$; doubles → 1; $\times4$ → 2; $\times8$ → 3. Then put one data row into rate $=k[A]^x[B]^y$ to get $k$ with units.

:::tip
For first order, any concentration unit (or pressure, or mass) works in the ratio $[R]_0/[R]$. $t_{1/2}$ that stays constant in data ⇒ first order; $t_{1/2}$ halving as $[R]_0$ halves ⇒ zero order. In the Arrhenius two-point form use $R=8.314$ and $E_a$ in J, then convert to kJ.
:::

:::skeleton
**Standard numericals**<br>
**(1) Time for first order.** $k=1.15\times10^{-3}$ s$^{-1}$, 5 g → 3 g: $t=\dfrac{2.303}{1.15\times10^{-3}}\log\dfrac53=2003\times0.2218=\boxed{444\text{ s}}$<br>
**(2) 99.9% = 10 half-lives.** $t_{99.9\%}=\dfrac{2.303}{k}\log1000=\dfrac{6.909}{k}$; ratio to $\dfrac{0.693}{k}$ is $\approx10$.<br>
**(3) $E_a$ from two temperatures.** $k$ doubles from 298 K to 308 K: $0.3010=\dfrac{E_a}{2.303\times8.314}\cdot\dfrac{10}{298\times308}$ ⇒ $E_a=\boxed{52.9\text{ kJ mol}^{-1}}$<br>
**(4) $E_a$ from a $\log k$ vs $1/T$ plot** `SQP 26–27`: slope $=-\dfrac{E_a}{2.303R}$ ⇒ $E_a=-2.303R\times\text{slope}$.<br>
**(5) Zero order** `SQP 26–27`: rate constant = rate (mol L$^{-1}$s$^{-1}$); $t_{1/2}=[R]_0/2k$; time to finish $=[R]_0/k$.
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

Tick when practised: Rate expression from stoichiometry; order vs molecularity; units of $k$; integrated rate law **derivation** for zero and first order; $t_{1/2}$ both; pseudo first order; order from initial rates; Arrhenius (both forms), $E_a$ numericals; effect of catalyst; collision theory. *Graphs:* the four plots above, energy profile, Maxwell–Boltzmann at $T$, $T+10$.
