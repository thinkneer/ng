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

- **Pseudo first order**: second order overall but one reactant in large excess (water): acid hydrolysis of ethyl acetate; inversion of cane sugar $\begin{gathered}\ce{C12H22O11 + H2O}\\ \ce{->[H+] C6H12O6 (glucose)}\\ \text{+ }\ce{C6H12O6 (fructose)}\end{gathered}$; hydrolysis of acetyl chloride `SQP 26–27`. Rate $=k'[\text{ester}]$, $k'=k[\ce{H2O}]$.

<figure class="fig">
<svg viewBox="0 0 340 290" role="img" aria-label="Four kinetics plots: zero order, first order (two forms) and the Arrhenius plot" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,20 V115 H150"/><path d="M42.5,24.3L40,20L37.5,24.3" stroke-width="1"/><path d="M145.7,117.5L150,115L145.7,112.5" stroke-width="1"/><path d="M40,34L138,105" stroke="#E0B400" stroke-width="2.5"/><path d="M210,20 V115 H320"/><path d="M212.5,24.3L210,20L207.5,24.3" stroke-width="1"/><path d="M315.7,117.5L320,115L315.7,112.5" stroke-width="1"/><path d="M210,34L308,105" stroke="#E0B400" stroke-width="2.5"/><path d="M40,163 V258 H150"/><path d="M42.5,167.3L40,163L37.5,167.3" stroke-width="1"/><path d="M145.7,260.5L150,258L145.7,255.5" stroke-width="1"/><path d="M40,258L138,181" stroke="#E0B400" stroke-width="2.5"/><path d="M210,163 V258 H320"/><path d="M212.5,167.3L210,163L207.5,167.3" stroke-width="1"/><path d="M315.7,260.5L320,258L315.7,255.5" stroke-width="1"/><path d="M210,177L308,248" stroke="#E0B400" stroke-width="2.5"/>
<g fill="currentColor" stroke="none"><text x="95" y="131" text-anchor="middle">t →</text><text x="30" y="67.5" text-anchor="middle" transform="rotate(-90 30 67.5)">[R]</text><text x="99" y="59.5" font-size="9">slope = −k</text><text x="45" y="28" font-size="9">[R]<tspan dy="3" font-size="8">0</tspan></text><text x="265" y="131" text-anchor="middle">t →</text><text x="200" y="67.5" text-anchor="middle" transform="rotate(-90 200 67.5)">ln [R]</text><text x="269" y="59.5" font-size="9">slope = −k</text><text x="215" y="28" font-size="9">ln [R]<tspan dy="3" font-size="8">0</tspan></text><text x="95" y="274" text-anchor="middle">t →</text><text x="30" y="210.5" text-anchor="middle" transform="rotate(-90 30 210.5)">log ([R]<tspan dy="3" font-size="8">0</tspan><tspan dy="-3">/[R])</tspan></text><text x="148" y="248" text-anchor="end" font-size="9">slope = k/2.303</text><text x="265" y="274" text-anchor="middle">1/T →</text><text x="200" y="210.5" text-anchor="middle" transform="rotate(-90 200 210.5)">ln k</text><text x="269" y="202.5" font-size="9">slope = −E<tspan dy="3" font-size="8">a</tspan><tspan dy="-3">/R</tspan></text><text x="215" y="171" font-size="9">ln A</text><text x="95" y="14" text-anchor="middle" font-size="10">Zero order</text><text x="265" y="14" text-anchor="middle" font-size="10">First order</text><text x="95" y="157" text-anchor="middle" font-size="10">First order</text><text x="265" y="157" text-anchor="middle" font-size="10">Arrhenius</text></g>
</svg>
<figcaption>Zero order: [R] against t. First order: ln [R] against t, and log ([R]₀/[R]) against t. Arrhenius: ln k against 1/T.</figcaption>
</figure>

## Temperature dependence — Arrhenius

:::formula
$k=A\,e^{-E_a/RT}$;   $\ln k=\ln A-\dfrac{E_a}{RT}$;   $\log k=\log A-\dfrac{E_a}{2.303RT}$<br>
$\log\dfrac{k_2}{k_1}=\dfrac{E_a}{2.303R}\left(\dfrac1{T_1}-\dfrac1{T_2}\right)=\dfrac{E_a}{2.303R}\left(\dfrac{T_2-T_1}{T_1T_2}\right)$<br>
$e^{-E_a/RT}$ = fraction of molecules with energy $\ge E_a$;   10 K rise roughly doubles $k$ (temperature coefficient $\dfrac{k_{T+10}}{k_T}\approx2$–$3$)
:::

<figure class="fig">
<svg viewBox="0 0 320 208" role="img" aria-label="Energy profile of a reaction with and without a catalyst" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,20 V185 H290"/><path d="M42.5,24.3L40,20L37.5,24.3" stroke-width="1"/><path d="M285.7,187.5L290,185L285.7,182.5" stroke-width="1"/><path d="M50,130 H92 C122,130 136,45 160,45 C185,45 200,155 232,155 H275"/><path d="M92,130 C122,130 140,88 160,88 C181,88 200,155 232,155" stroke="#E0B400" stroke-width="2" stroke-dasharray="5 3"/><path d="M58,45L160,45" stroke-dasharray="4 3" stroke-width="1"/><path d="M76,88L160,88" stroke-dasharray="4 3" stroke-width="1"/><path d="M232,130L275,130" stroke-dasharray="4 3" stroke-width="1"/><path d="M62,129L62,46" stroke-width="1"/><path d="M64.5,50.3L62,46L59.5,50.3" stroke-width="1"/><path d="M59.5,124.7L62,129L64.5,124.7" stroke-width="1"/><path d="M80,129L80,89" stroke-width="1"/><path d="M82.5,93.3L80,89L77.5,93.3" stroke-width="1"/><path d="M77.5,124.7L80,129L82.5,124.7" stroke-width="1"/><path d="M262,131L262,154" stroke-width="1"/><path d="M259.5,149.7L262,154L264.5,149.7" stroke-width="1"/><path d="M264.5,135.3L262,131L259.5,135.3" stroke-width="1"/><path d="M190,18L208,18"/><path d="M190,30L208,30" stroke="#E0B400" stroke-width="2" stroke-dasharray="5 3"/>
<g fill="currentColor" stroke="none"><text x="165" y="201" text-anchor="middle">reaction coordinate →</text><text x="28" y="102.5" text-anchor="middle" transform="rotate(-90 28 102.5)">potential energy</text><text x="58" y="84" text-anchor="end">E<tspan dy="3" font-size="8">a</tspan></text><text x="84" y="112">E<tspan dy="3" font-size="8">a</tspan><tspan dy="-3">′</tspan></text><text x="267" y="146">ΔH</text><text x="48" y="144" font-size="9">reactants</text><text x="238" y="168" font-size="9">products</text><text x="118" y="38" text-anchor="middle" font-size="9">activated complex</text><text x="212" y="21" font-size="9">no catalyst</text><text x="212" y="33" font-size="9">with catalyst</text></g>
</svg>
<figcaption>A catalyst provides a path with a lower activation energy (Ea′); reactants, products and ΔH are unchanged.</figcaption>
</figure>

<figure class="fig">
<svg viewBox="0 0 320 200" role="img" aria-label="Distribution of molecular energies at two temperatures" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,15 V165 H295"/><path d="M42.5,19.3L40,15L37.5,19.3" stroke-width="1"/><path d="M290.7,167.5L295,165L290.7,162.5" stroke-width="1"/><path d="M215,165 L215,114.5 L217.8,116.9 L221.4,119.9 L225.1,122.8 L229.0,125.7 L232.9,128.5 L237.0,131.2 L241.1,133.8 L245.4,136.2 L249.8,138.6 L254.4,140.8 L259.1,142.8 L263.9,144.6 L268.9,146.3 L274.1,147.7 L279.5,149.0 L285.0,150.0 L285,165 Z" fill="#E0B400" fill-opacity="0.45" stroke="none"/><path d="M215,165 L215,129.8 L219.7,133.4 L224.7,137.0 L229.8,140.5 L235.2,143.7 L240.7,146.7 L246.4,149.5 L252.3,152.0 L258.4,154.2 L264.7,156.2 L271.2,157.8 L278.0,159.1 L285.0,160.0 L285,165 Z" fill="currentColor" fill-opacity="0.3" stroke="none"/><path d="M45,165 C72,165 82,40 115,40 C160,40 190,150 285,160"/><path d="M45,165 C78,165 95,62 135,62 C185,62 210,138 285,150" stroke="#E0B400" stroke-width="2"/><path d="M215,60L215,165" stroke-dasharray="4 3" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="120" y="181" text-anchor="middle">kinetic energy →</text><text x="28" y="90" text-anchor="middle" transform="rotate(-90 28 90.0)">fraction of molecules</text><text x="215" y="178" text-anchor="middle">E<tspan dy="3" font-size="8">a</tspan></text><text x="115" y="32" text-anchor="middle">T</text><text x="160" y="58">T + 10</text><text x="288" y="128" text-anchor="end" font-size="9">can</text><text x="288" y="138" text-anchor="end" font-size="9">react</text></g>
</svg>
<figcaption>At T + 10 the peak is lower and shifted right, and the shaded area beyond Ea (molecules able to react) roughly doubles.</figcaption>
</figure>

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
