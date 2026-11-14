# Ch 3 · Chemical Kinetics

Thermodynamics tells you whether a reaction *can* happen. It says nothing about how long you will wait. Diamond turning to graphite is favourable and takes longer than the age of the Earth; hydrogen and oxygen sit together for years and then explode with a spark. Chemical kinetics is the study of how fast reactions go, what controls the speed, and what happens along the way. For the board exam it is a compact chapter: two rate equations, one temperature equation, and a handful of ideas that connect them.

## What "rate of reaction" means

The rate of a reaction is how fast concentration changes: the fall in concentration of a reactant, or the rise in concentration of a product, per unit time. Its unit is mol L$^{-1}$ s$^{-1}$.

Measure the concentration at two times and divide the change by the time gap, and you have the **average rate** over that interval. But a reaction slows down as the reactant is used up, so the average hides what is happening at any one moment. The **instantaneous rate** is the rate at a particular instant.

**Figure 3.1 (concentration against time):** a reactant curve falling steeply at first and then levelling off; a product curve rising as its mirror image. The average rate between two times is the slope of the chord joining those two points; the instantaneous rate at time $t$ is the slope of the tangent at $t$.

One complication: in $\ce{2HI -> H2 + I2}$, two moles of HI vanish for each mole of hydrogen formed, so HI disappears twice as fast as $\ce{H2}$ appears. To get a single rate that everyone agrees on, divide each rate of change by that species' coefficient.

:::formula
For $\ce{aA + bB -> cC + dD}$:

Rate $=-\dfrac{1}{a}\dfrac{\Delta[\ce{A}]}{\Delta t}=-\dfrac{1}{b}\dfrac{\Delta[\ce{B}]}{\Delta t}=+\dfrac{1}{c}\dfrac{\Delta[\ce{C}]}{\Delta t}=+\dfrac{1}{d}\dfrac{\Delta[\ce{D}]}{\Delta t}$

The minus signs make the rate positive, since reactant concentrations fall.
:::

:::skeleton Worked example: rates from stoichiometry
*In $\ce{2N2O5 -> 4NO2 + O2}$, the concentration of $\ce{N2O5}$ falls from 0.50 to 0.40 mol L$^{-1}$ in 100 s. Find the rate of reaction and the rate of formation of $\ce{NO2}$.*

Rate of disappearance of $\ce{N2O5}=\dfrac{0.50-0.40}{100}=1.0\times10^{-3}$ mol L$^{-1}$ s$^{-1}$ [1]

Rate of reaction $=\dfrac{1}{2}\times1.0\times10^{-3}=$ **$5.0\times10^{-4}$ mol L$^{-1}$ s$^{-1}$** [1]

Rate of formation of $\ce{NO2}=4\times5.0\times10^{-4}=$ **$2.0\times10^{-3}$ mol L$^{-1}$ s$^{-1}$** [1]
:::

:::tip
"Rate of reaction" and "rate of disappearance of $\ce{N2O5}$" are different numbers whenever the coefficient is not 1. Read which one the question asks for.
:::

**In one breath:** Rate is change in concentration per unit time, taken as the slope of the concentration–time curve and divided by the stoichiometric coefficient so every species gives the same value.

## The rate law, the rate constant and order

Four things change the rate of a reaction: the concentration of the reactants (or pressure, for gases), the temperature, a catalyst, and the nature and surface area of the reactants. Take concentration first.

Rate generally rises with concentration, because more molecules mean more collisions. The exact dependence is written as a **rate law**:

:::formula
Rate $=k[\ce{A}]^x[\ce{B}]^y$

$k$ = rate constant (the rate when every concentration is 1 mol L$^{-1}$); $x$ and $y$ = order with respect to A and B; $x+y$ = overall order.

Units of $k$ for order $n$: $(\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}$, that is mol L$^{-1}$ s$^{-1}$ (zero), s$^{-1}$ (first), L mol$^{-1}$ s$^{-1}$ (second)
:::

The key point of the whole chapter is this: the powers $x$ and $y$ **cannot be read from the balanced equation**. They have to be found by experiment. For $\ce{2NO + O2 -> 2NO2}$ the rate law happens to be $k[\ce{NO}]^2[\ce{O2}]$, matching the coefficients. But for $\ce{CHCl3 + Cl2 -> CCl4 + HCl}$ it is $k[\ce{CHCl3}][\ce{Cl2}]^{1/2}$. Order can be zero, a whole number or a fraction.

Because the units of $k$ change with order, they give the order away. A rate constant quoted in s$^{-1}$ belongs to a first-order reaction.

The standard experiment is the **initial rate method**: change one concentration at a time and see what the rate does. If doubling [A] leaves the rate unchanged, the order in A is 0; if the rate doubles, it is 1; if it quadruples, 2.

:::skeleton Worked example: order from initial rates
*For $\ce{A + B -> products}$:*

| Experiment | [A] / mol L$^{-1}$ | [B] / mol L$^{-1}$ | Initial rate / mol L$^{-1}$ s$^{-1}$ |
|---|---|---|---|
| 1 | 0.10 | 0.10 | $2.0\times10^{-3}$ |
| 2 | 0.20 | 0.10 | $8.0\times10^{-3}$ |
| 3 | 0.10 | 0.20 | $4.0\times10^{-3}$ |

*Find the rate law and the rate constant.*

Experiments 1 and 2: [B] constant, [A] doubles, rate becomes 4 times, so order in A = 2 [1]

Experiments 1 and 3: [A] constant, [B] doubles, rate doubles, so order in B = 1. Rate $=k[\ce{A}]^2[\ce{B}]$ [1]

From experiment 1: $k=\dfrac{2.0\times10^{-3}}{(0.10)^2(0.10)}=$ **2.0 L$^2$ mol$^{-2}$ s$^{-1}$** [1]
:::

**In one breath:** The rate law, rate $=k[\ce{A}]^x[\ce{B}]^y$, is found by experiment, not from the equation; the order is $x+y$ and the units of $k$ reveal it.

## Order and molecularity: what really happens in a reaction

Why doesn't the rate law follow the balanced equation? Because most reactions do not happen in one step. The equation is only the overall result of a sequence of simpler steps, called the **mechanism**.

A step that happens in a single collision event is an **elementary reaction**. The number of species that must collide in that step is its **molecularity**: one (unimolecular, like a molecule falling apart), two (bimolecular) or occasionally three. Higher than three is not seen, because the chance of four or more molecules meeting at the same instant with the right energy and direction is negligible.

A reaction made of several elementary steps is a **complex reaction**, and its speed is set by its slowest step, just as the slowest runner sets a relay team's time. That step is the **rate-determining step**. Take the decomposition of hydrogen peroxide catalysed by iodide ion. It goes in two steps:

$\ce{H2O2 + I- -> H2O + IO-}$ (slow)

$\ce{H2O2 + IO- -> H2O + I- + O2}$ (fast)

Only the slow step counts, so the rate is $k[\ce{H2O2}][\ce{I-}]$: first order in each, even though the overall equation, $\ce{2H2O2 -> 2H2O + O2}$, shows two peroxide molecules and no iodide at all.

So order and molecularity are different ideas. Order is an experimental number for the whole reaction; it can be zero or fractional. Molecularity is a theoretical count for a single elementary step; it is always a whole number, never zero, and it has no meaning for a complex reaction as a whole. Only for an elementary reaction are the two equal.

:::tip
Asked for the difference, give two clear points: (1) order is experimental, molecularity is theoretical; (2) order can be 0 or a fraction, molecularity is 1, 2 or 3 only.
:::

**In one breath:** Reactions go by steps; the slowest step fixes the rate law. Order is measured for the overall reaction, molecularity is counted for one elementary step.

## Zero-order reactions: the integrated rate equation

The rate law tells you the rate at an instant. Usually you want something more practical: how much is left after a given time? Integrating the rate law gives that.

Start with the simplest case, a **zero-order** reaction, whose rate does not depend on concentration at all: $-\dfrac{d[R]}{dt}=k$. Rearranging, $d[R]=-k\,dt$, and integrating gives $[R]=-kt+I$. At $t=0$ the concentration is $[R]_0$, so the constant $I$ is $[R]_0$.

:::formula
Zero order: $[R]=[R]_0-kt$ , so $k=\dfrac{[R]_0-[R]}{t}$ (mol L$^{-1}$ s$^{-1}$)
:::

<figure class="fig">
<svg viewBox="0 0 320 150" role="img" aria-label="Zero-order reaction: concentration against time is a falling straight line" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M105,20 V115 H235"/><path d="M107.5,24.3L105,20L102.5,24.3" stroke-width="1"/><path d="M230.7,117.5L235,115L230.7,112.5" stroke-width="1"/><path d="M105,34L223,105" stroke="#E0B400" stroke-width="2.5"/>
<g fill="currentColor" stroke="none"><text x="170" y="131" text-anchor="middle">t →</text><text x="95" y="67.5" text-anchor="middle" transform="rotate(-90 95 67.5)">[R]</text><text x="174" y="59.5" font-size="9">slope = −k</text><text x="110" y="28" font-size="9">[R]<tspan dy="3" font-size="8">0</tspan></text></g>
</svg>
<figcaption>Figure 3.2 Zero order: [R] against t is a straight line of slope −k.</figcaption>
</figure>

How can rate ignore concentration? It happens when something else is the bottleneck. Ammonia decomposing on a hot platinum surface at high pressure is the standard example: $\ce{2NH3 ->[Pt] N2 + 3H2}$. The metal surface is completely covered with ammonia molecules, so adding more gas cannot make it react any faster. The decomposition of HI on gold is similar.

:::skeleton Worked example: zero-order reaction
*The decomposition of a gas on a metal surface is zero order with $k=2.5\times10^{-4}$ mol L$^{-1}$ s$^{-1}$. If the initial concentration is 0.10 mol L$^{-1}$, how long does the reaction take to finish?*

$[R]=[R]_0-kt$; at completion $[R]=0$ [1]

$t=\dfrac{[R]_0}{k}=\dfrac{0.10}{2.5\times10^{-4}}=$ **400 s** [1]
:::

**In one breath:** Zero order means a constant rate: concentration falls in a straight line, $[R]=[R]_0-kt$, typically because a catalyst surface is saturated.

## First-order reactions

In a **first-order** reaction the rate is proportional to the concentration: $-\dfrac{d[R]}{dt}=k[R]$. Separate the variables, $\dfrac{d[R]}{[R]}=-k\,dt$, and integrate: $\ln[R]=-kt+I$. Again $t=0$ gives $I=\ln[R]_0$.

:::formula
First order: $\ln[R]=\ln[R]_0-kt$ , or $[R]=[R]_0\,e^{-kt}$

$k=\dfrac{2.303}{t}\log\dfrac{[R]_0}{[R]}$ (s$^{-1}$)

Gas reaction $\ce{A(g) -> B(g) + C(g)}$ followed by total pressure: $k=\dfrac{2.303}{t}\log\dfrac{p_i}{2p_i-p_t}$
:::

<figure class="fig">
<svg viewBox="0 0 340 150" role="img" aria-label="First-order reaction plots" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,20 V115 H150"/><path d="M42.5,24.3L40,20L37.5,24.3" stroke-width="1"/><path d="M145.7,117.5L150,115L145.7,112.5" stroke-width="1"/><path d="M40,34L138,105" stroke="#E0B400" stroke-width="2.5"/><path d="M210,20 V115 H320"/><path d="M212.5,24.3L210,20L207.5,24.3" stroke-width="1"/><path d="M315.7,117.5L320,115L315.7,112.5" stroke-width="1"/><path d="M210,115L308,38" stroke="#E0B400" stroke-width="2.5"/>
<g fill="currentColor" stroke="none"><text x="95" y="131" text-anchor="middle">t →</text><text x="30" y="67.5" text-anchor="middle" transform="rotate(-90 30 67.5)">ln [R]</text><text x="99" y="59.5" font-size="9">slope = −k</text><text x="45" y="28" font-size="9">ln [R]<tspan dy="3" font-size="8">0</tspan></text><text x="265" y="131" text-anchor="middle">t →</text><text x="200" y="67.5" text-anchor="middle" transform="rotate(-90 200 67.5)">log ([R]<tspan dy="3" font-size="8">0</tspan><tspan dy="-3">/[R])</tspan></text><text x="318" y="105" text-anchor="end" font-size="9">slope = k/2.303</text></g>
</svg>
<figcaption>Figure 3.3 First order: ln [R] against t falls with slope −k; log ([R]₀/[R]) against t rises from the origin with slope k/2.303.</figcaption>
</figure>

The concentration falls exponentially: fast at first, then ever more slowly, never quite reaching zero. Because only the *ratio* $[R]_0/[R]$ appears, you can use any quantity proportional to concentration: grams, pressure, or percentages. Taking $[R]_0=100$ makes "percent complete" questions easy.

Many reactions are first order: the decomposition of $\ce{N2O5}$ and $\ce{N2O}$, the hydrogenation of ethene, and every radioactive decay.

:::skeleton Worked example: time for a given completion
*A first-order reaction has $k=2.0\times10^{-2}$ min$^{-1}$. How long does it take to be 80% complete? ($\log5=0.699$)*

80% complete: take $[R]_0=100$, $[R]=20$ [½]

$t=\dfrac{2.303}{k}\log\dfrac{[R]_0}{[R]}=\dfrac{2.303}{2.0\times10^{-2}}\log\dfrac{100}{20}$ [1]

$=115.15\times0.699=$ **80.5 min** [½]
:::

:::tip
"80% complete" means 20% is *left*. Putting 80 in the denominator is the commonest slip. Also keep the units of $t$ matched to $k$: here $k$ is in min$^{-1}$, so $t$ comes out in minutes.
:::

**In one breath:** First order means rate ∝ concentration: $\ln[R]$ falls in a straight line with time, and $k=\frac{2.303}{t}\log\frac{[R]_0}{[R]}$ works with any proportional quantity.

## Half-life

The **half-life**, $t_{1/2}$, is the time taken for the concentration of a reactant to fall to half its initial value. Put $[R]=[R]_0/2$ into each integrated equation.

:::formula
Zero order: $t_{1/2}=\dfrac{[R]_0}{2k}$ (proportional to the initial concentration)

First order: $t_{1/2}=\dfrac{2.303\log2}{k}=\dfrac{0.693}{k}$ (independent of the initial concentration)
:::

The first-order result is special: the half-life is a constant. It takes as long to go from 100% to 50% as from 50% to 25%, or from 2% to 1%. So after $n$ half-lives the fraction left is $1/2^n$. That makes some answers instant: 75% completion is two half-lives, 87.5% is three, and 99.9% is very nearly ten (since $2^{10}=1024$).

This also gives you a quick test for order from data: if successive half-lives are equal, the reaction is first order; if each half-life is half the one before, it is zero order.

:::skeleton Worked example: using half-lives
*A first-order reaction has a half-life of 30 min. What percentage of the reactant remains after 2 hours, and what is $k$?*

2 hours = 120 min = 4 half-lives [1]

Fraction left $=\dfrac{1}{2^4}=\dfrac{1}{16}$, that is **6.25%** [1]

$k=\dfrac{0.693}{t_{1/2}}=\dfrac{0.693}{30}=$ **$2.31\times10^{-2}$ min$^{-1}$** [1]
:::

**In one breath:** A first-order half-life, $0.693/k$, never changes, so the amount left halves again and again; a zero-order half-life shrinks as the concentration falls.

## Pseudo first-order reactions

Some reactions look first order when they are really not. The hydrolysis of ethyl ethanoate needs two molecules, the ester and water: $\ce{CH3COOC2H5 + H2O ->[H+] CH3COOH + C2H5OH}$, and its true rate law is $k[\text{ester}][\ce{H2O}]$. But water is the solvent, present in such huge excess that its concentration hardly changes while the ester is used up. It can be folded into the constant: rate $=k'[\text{ester}]$, with $k'=k[\ce{H2O}]$. The reaction *behaves* as first order.

Such reactions are called **pseudo first order**. The inversion of cane sugar is the other standard example: $\ce{C12H22O11 + H2O ->[H+] C6H12O6 + C6H12O6}$, giving glucose and fructose, with rate $=k'[\text{sucrose}]$.

**In one breath:** When one reactant is in large excess its concentration is effectively constant, and a higher-order reaction behaves as first order.

## Temperature, activation energy and catalysts

Warm a reaction by 10 K and its rate roughly doubles. That is odd at first sight, because the molecules move only a few percent faster. The explanation is that speed of collision is not the issue; *energy* is.

For reactants to become products, old bonds must stretch and partly break before new ones form. The molecules pass through a high-energy arrangement called the **activated complex**, and the extra energy needed to reach it is the **activation energy**, $E_a$. Only collisions with at least this much energy can succeed.

<figure class="fig">
<svg viewBox="0 0 320 208" role="img" aria-label="Energy profile of a reaction with and without a catalyst" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,20 V185 H290"/><path d="M42.5,24.3L40,20L37.5,24.3" stroke-width="1"/><path d="M285.7,187.5L290,185L285.7,182.5" stroke-width="1"/><path d="M50,130 H92 C122,130 136,45 160,45 C185,45 200,155 232,155 H275"/><path d="M92,130 C122,130 140,88 160,88 C181,88 200,155 232,155" stroke="#E0B400" stroke-width="2" stroke-dasharray="5 3"/><path d="M58,45L160,45" stroke-dasharray="4 3" stroke-width="1"/><path d="M76,88L160,88" stroke-dasharray="4 3" stroke-width="1"/><path d="M232,130L275,130" stroke-dasharray="4 3" stroke-width="1"/><path d="M62,129L62,46" stroke-width="1"/><path d="M64.5,50.3L62,46L59.5,50.3" stroke-width="1"/><path d="M59.5,124.7L62,129L64.5,124.7" stroke-width="1"/><path d="M80,129L80,89" stroke-width="1"/><path d="M82.5,93.3L80,89L77.5,93.3" stroke-width="1"/><path d="M77.5,124.7L80,129L82.5,124.7" stroke-width="1"/><path d="M262,131L262,154" stroke-width="1"/><path d="M259.5,149.7L262,154L264.5,149.7" stroke-width="1"/><path d="M264.5,135.3L262,131L259.5,135.3" stroke-width="1"/><path d="M190,18L208,18"/><path d="M190,30L208,30" stroke="#E0B400" stroke-width="2" stroke-dasharray="5 3"/>
<g fill="currentColor" stroke="none"><text x="165" y="201" text-anchor="middle">reaction coordinate →</text><text x="28" y="102.5" text-anchor="middle" transform="rotate(-90 28 102.5)">potential energy</text><text x="58" y="84" text-anchor="end">E<tspan dy="3" font-size="8">a</tspan></text><text x="84" y="112">E<tspan dy="3" font-size="8">a</tspan><tspan dy="-3">′</tspan></text><text x="267" y="146">ΔH</text><text x="48" y="144" font-size="9">reactants</text><text x="238" y="168" font-size="9">products</text><text x="118" y="38" text-anchor="middle" font-size="9">activated complex</text><text x="212" y="21" font-size="9">no catalyst</text><text x="212" y="33" font-size="9">with catalyst</text></g>
</svg>
<figcaption>Figure 3.4 A catalyst provides a path with a lower activation energy (Ea′); reactants, products and ΔH are unchanged.</figcaption>
</figure>

Now look at how energy is shared out among molecules.

<figure class="fig">
<svg viewBox="0 0 320 200" role="img" aria-label="Distribution of molecular energies at two temperatures" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,15 V165 H295"/><path d="M42.5,19.3L40,15L37.5,19.3" stroke-width="1"/><path d="M290.7,167.5L295,165L290.7,162.5" stroke-width="1"/><path d="M215,165 L215,114.5 L217.8,116.9 L221.4,119.9 L225.1,122.8 L229.0,125.7 L232.9,128.5 L237.0,131.2 L241.1,133.8 L245.4,136.2 L249.8,138.6 L254.4,140.8 L259.1,142.8 L263.9,144.6 L268.9,146.3 L274.1,147.7 L279.5,149.0 L285.0,150.0 L285,165 Z" fill="#E0B400" fill-opacity="0.45" stroke="none"/><path d="M215,165 L215,129.8 L219.7,133.4 L224.7,137.0 L229.8,140.5 L235.2,143.7 L240.7,146.7 L246.4,149.5 L252.3,152.0 L258.4,154.2 L264.7,156.2 L271.2,157.8 L278.0,159.1 L285.0,160.0 L285,165 Z" fill="currentColor" fill-opacity="0.3" stroke="none"/><path d="M45,165 C72,165 82,40 115,40 C160,40 190,150 285,160"/><path d="M45,165 C78,165 95,62 135,62 C185,62 210,138 285,150" stroke="#E0B400" stroke-width="2"/><path d="M215,60L215,165" stroke-dasharray="4 3" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="120" y="181" text-anchor="middle">kinetic energy →</text><text x="28" y="90" text-anchor="middle" transform="rotate(-90 28 90.0)">fraction of molecules</text><text x="215" y="178" text-anchor="middle">E<tspan dy="3" font-size="8">a</tspan></text><text x="115" y="32" text-anchor="middle">T</text><text x="160" y="58">T + 10</text><text x="288" y="128" text-anchor="end" font-size="9">can</text><text x="288" y="138" text-anchor="end" font-size="9">react</text></g>
</svg>
<figcaption>Figure 3.5 At T + 10 the peak is lower and shifted right, and the shaded area beyond Ea (molecules able to react) roughly doubles.</figcaption>
</figure>

A small rise in temperature barely shifts the average, but it roughly doubles the tiny fraction of molecules in the high-energy tail. Arrhenius captured this in one equation, in which $e^{-E_a/RT}$ is exactly that fraction.

:::formula
$k=A\,e^{-E_a/RT}$ , or $\log k=\log A-\dfrac{E_a}{2.303\,RT}$

Two temperatures: $\log\dfrac{k_2}{k_1}=\dfrac{E_a}{2.303\,R}\left(\dfrac{T_2-T_1}{T_1T_2}\right)$

$A$ = frequency (pre-exponential) factor, $R=8.314$ J K$^{-1}$ mol$^{-1}$, $T$ in kelvin, $E_a$ in J mol$^{-1}$
:::

<figure class="fig">
<svg viewBox="0 0 320 150" role="img" aria-label="Arrhenius plot of ln k against 1/T" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M105,20 V115 H235"/><path d="M107.5,24.3L105,20L102.5,24.3" stroke-width="1"/><path d="M230.7,117.5L235,115L230.7,112.5" stroke-width="1"/><path d="M105,34L223,105" stroke="#E0B400" stroke-width="2.5"/>
<g fill="currentColor" stroke="none"><text x="170" y="131" text-anchor="middle">1/T →</text><text x="95" y="67.5" text-anchor="middle" transform="rotate(-90 95 67.5)">ln k</text><text x="174" y="59.5" font-size="9">slope = −E<tspan dy="3" font-size="8">a</tspan><tspan dy="-3">/R</tspan></text><text x="110" y="28" font-size="9">ln A</text></g>
</svg>
<figcaption>Figure 3.6 Arrhenius plot: slope −Ea/R, intercept ln A.</figcaption>
</figure>

:::skeleton Worked example: activation energy
*The rate constant of a reaction triples when the temperature rises from 300 K to 320 K. Find $E_a$. ($\log3=0.4771$)*

$\log\dfrac{k_2}{k_1}=\dfrac{E_a}{2.303\,R}\left(\dfrac{T_2-T_1}{T_1T_2}\right)$ [1]

$0.4771=\dfrac{E_a}{2.303\times8.314}\times\dfrac{320-300}{300\times320}$ [1]

$E_a=\dfrac{0.4771\times2.303\times8.314\times96000}{20}=43850$ J mol$^{-1}=$ **43.9 kJ mol$^{-1}$** [1]
:::

:::tip
With $R=8.314$ the answer comes out in joules; convert to kJ at the end. And use kelvin, never °C, in $T_1T_2$.
:::

A **catalyst** speeds up a reaction without being used up. It does so by offering a different route with a lower activation energy, so many more molecules can get over the barrier. Three things it does *not* do: it does not change $\Delta G$ or $\Delta H$, it does not shift the equilibrium (it speeds the forward and backward reactions equally, so equilibrium is only reached sooner), and it cannot make a non-spontaneous reaction happen.

**In one breath:** Only molecules with energy above $E_a$ react; raising $T$ swells that fraction and $k=Ae^{-E_a/RT}$ measures it. A catalyst lowers $E_a$ without changing where the equilibrium lies.

## Collision theory

Collision theory gives a picture of where the Arrhenius equation comes from. Treat molecules as hard spheres. A reaction can occur only when they collide, and the number of collisions per second per unit volume is the **collision frequency**, $Z_{AB}$. Multiply by the fraction of collisions with enough energy, $e^{-E_a/RT}$, and you nearly have the rate.

Nearly, because energy is not the only condition. The molecules must also hit the right way round. When bromomethane reacts with hydroxide ion to give methanol, the $\ce{OH-}$ must strike the carbon atom from the side opposite the bromine; a collision with the bromine end simply bounces off. A **probability (steric) factor**, $P$, allows for this.

:::formula
Rate $=P\,Z_{AB}\,e^{-E_a/RT}$

An **effective collision** has both enough energy (at least the threshold energy) and the proper orientation.
:::

So most collisions achieve nothing: they are too gentle, or the molecules are facing the wrong way. The theory's weakness is that it treats molecules as structureless spheres, which is why the factor $P$ has to be added by hand.

**In one breath:** Molecules must collide with enough energy *and* the right orientation; rate $=PZ_{AB}e^{-E_a/RT}$ counts only those effective collisions.
