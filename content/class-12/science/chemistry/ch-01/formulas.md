# Ch 1 · Solutions — formulas and key facts

## Concentration terms

:::formula
Mass % $=\dfrac{w_\text{component}}{w_\text{solution}}\times100$;   ppm $=\dfrac{w_\text{component}}{w_\text{total}}\times10^6$<br>
Mole fraction $x_i=\dfrac{n_i}{\sum n}$, $x_1+x_2=1$<br>
Molarity $M=\dfrac{n_2}{V_\text{soln}(\text{L})}$ (mol L$^{-1}$) — **changes with $T$**<br>
Molality $m=\dfrac{n_2}{W_1(\text{kg})}=\dfrac{1000\,w_2}{M_2\,w_1(\text{g})}$ (mol kg$^{-1}$) — **$T$-independent**<br>
$M\to m$: $m=\dfrac{1000\,M}{1000\,d-M\,M_2}$ ($d$ in g mL$^{-1}$, $M_2$ = molar mass of solute)
:::

- Mass %, ppm, $x$, $m$ do not depend on $T$; $M$ and % (w/V) do (volume expands on heating).

## Henry's law (gas in liquid)

:::formula
$p=K_H\,x$   ($p$ = partial pressure of gas, $x$ = its mole fraction in solution)
:::

- Larger $K_H$ $\Rightarrow$ *lower* solubility. $K_H$ rises with $T$, so gases dissolve less in warm water (aquatic life prefers cold water). `SQP 26–27`
- Uses: soda bottles sealed under high CO$_2$ pressure; scuba divers' *bends* (N$_2$ bubbles in blood) — tanks use air diluted with He (11.7% He, 56.2% N$_2$, 32.1% O$_2$); *anoxia* at high altitude (low $p_{\mathrm{O_2}}$).

## Raoult's law (volatile liquids)

:::formula
$p_1=x_1p_1^\circ,\;\; p_2=x_2p_2^\circ,\;\; p_\text{total}=p_1^\circ+(p_2^\circ-p_1^\circ)\,x_2$<br>
Vapour phase: $y_1=\dfrac{p_1}{p_\text{total}}$ (vapour is richer in the more volatile liquid)<br>
Non-volatile solute: $p_\text{soln}=x_1p_1^\circ$. Raoult's law is a special case of Henry's law with $K_H=p_1^\circ$.
:::

## Ideal and non-ideal solutions

| | **Ideal** | **Positive deviation** | **Negative deviation** |
|---|---|---|---|
| A–B forces | same as A–A, B–B | weaker | stronger (often H-bond) |
| $\Delta_\text{mix}H$, $\Delta_\text{mix}V$ | $0$, $0$ | $>0$, $>0$ | $<0$, $<0$ |
| $p$ observed | obeys Raoult | higher than Raoult | lower than Raoult |
| Azeotrope | none | **minimum**-boiling: ethanol–water ($\approx$95% ethanol by vol.) | **maximum**-boiling: HNO$_3$–water (68% HNO$_3$ by mass, 393.5 K) `SQP 26–27` |
| Examples | n-hexane + n-heptane; bromoethane + chloroethane; benzene + toluene | ethanol + acetone; CS$_2$ + acetone; ethanol + water | phenol + aniline; chloroform + acetone; HNO$_3$ + water |

- Azeotrope: boils at constant $T$, liquid and vapour have the same composition, so it cannot be separated by fractional distillation.

*(graphs to be added as SVG)*

## Colligative properties (depend on number of solute particles only)

:::formula
RLVP: $\dfrac{p_1^\circ-p_1}{p_1^\circ}=x_2\approx\dfrac{n_2}{n_1}$ $\Rightarrow\; M_2=\dfrac{w_2\,M_1\,p_1^\circ}{w_1\,(p_1^\circ-p_1)}$<br>
Elevation of b.p.: $\Delta T_b=K_b\,m$ $\Rightarrow\; M_2=\dfrac{1000\,K_b\,w_2}{\Delta T_b\,w_1}$<br>
Depression of f.p.: $\Delta T_f=K_f\,m$ $\Rightarrow\; M_2=\dfrac{1000\,K_f\,w_2}{\Delta T_f\,w_1}$<br>
Osmotic pressure: $\pi=CRT=\dfrac{n_2}{V}RT$ $\Rightarrow\; M_2=\dfrac{w_2RT}{\pi V}$<br>
$K_b=\dfrac{R\,M_1\,T_b^2}{1000\,\Delta_\text{vap}H}$,   $K_f=\dfrac{R\,M_1\,T_f^2}{1000\,\Delta_\text{fus}H}$ (units K kg mol$^{-1}$; depend on solvent only)
:::

*(graph to be added as SVG)*

- Solution's vapour pressure is lower at every $T$, so it must be heated more to reach 1 atm: $T_b>T_b^\circ$.
- Osmosis: solvent moves through a semipermeable membrane from solvent (or dilute) to concentrated side. $\pi$ = extra pressure that just stops it.

- **$\pi$ is best for molar mass of proteins/polymers**: measured at room $T$ (biomolecules are heat-sensitive); uses molarity; large and measurable even for very dilute solutions; polymers dissolve poorly.
- Isotonic: same $\pi$, no net osmosis. 0.9% (m/V) NaCl (normal saline) is isotonic with blood cells. Hypertonic outside → cells shrink; hypotonic → cells swell/burst.
- Reverse osmosis: pressure $>\pi$ on solution side pushes pure solvent out; desalination of sea water (cellulose acetate membrane).
- Everyday osmosis: raw mango shrivels in brine; wilted flowers revive in fresh water; salt/sugar preserve food (bacteria lose water); too much salt causes puffiness (oedema).

## Abnormal molar mass — van't Hoff factor

:::formula
$i=\dfrac{\text{normal molar mass}}{\text{abnormal (observed) molar mass}}=\dfrac{\text{observed colligative property}}{\text{calculated colligative property}}$<br>
$\Delta T_b=iK_bm,\quad \Delta T_f=iK_fm,\quad \pi=iCRT,\quad \dfrac{\Delta p}{p_1^\circ}=i\dfrac{n_2}{n_1}$<br>
Dissociation into $n$ ions: $\alpha=\dfrac{i-1}{n-1}$   Association of $n$ molecules: $\alpha=\dfrac{1-i}{1-\frac1n}$
:::

- Complete dissociation: KCl, NaCl $i=2$; K$_2$SO$_4$, CaCl$_2$ $i=3$; AlCl$_3$, K$_3$[Fe(CN)$_6$] $i=4$; Al$_2$(SO$_4$)$_3$, K$_4$[Fe(CN)$_6$] $i=5$; glucose, urea $i=1$.
- Association: ethanoic acid / benzoic acid dimerise in benzene (H-bonding) → $i\approx0.5$, molar mass appears doubled.
- Same molality, different solutes: larger $i$ → larger $\Delta T_b$, $\Delta T_f$, $\pi$ and *lower* f.p.

:::tip
$\Delta T$ in kelvin = $\Delta T$ in $^\circ$C, but $T$ in $\pi=CRT$ must be in K. Use $R=0.083$ L bar for $\pi$ in bar; $V$ in litres. $w_1$ is mass of *solvent*, not solution. Molality uses kg; the 1000 in the formula converts g to kg.
:::

:::skeleton
**Standard numericals**<br>
**(1) Molar mass from $\Delta T_f$.** 1.00 g non-electrolyte in 50 g benzene lowers f.p. by 0.40 K ($K_f=5.12$): $M_2=\dfrac{1000\times5.12\times1.00}{0.40\times50}=\boxed{256\text{ g mol}^{-1}}$<br>
**(2) Molar mass from $\pi$.** 1.26 g protein in 200 mL, $\pi=2.57\times10^{-3}$ bar at 300 K: $M_2=\dfrac{1.26\times0.083\times300}{2.57\times10^{-3}\times0.200}\approx\boxed{6.1\times10^4\text{ g mol}^{-1}}$<br>
**(3) With $i$.** Find $i$ from formula (or from $\alpha$), multiply into $\Delta T$/$\pi$; or find $i$ = calc. $M$ / observed $M$, then $\alpha$.<br>
**(4) RLVP** (`SQP 26–27`): $\dfrac{\Delta p}{p^\circ}=\dfrac{w_2M_1}{M_2w_1}$ — solve for $M_2$. **(5) ppm / Henry's law**: $x=p/K_H$, then moles of gas.
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

Tick when practised: Henry's law + 3 uses; Raoult's law (both forms); ideal vs non-ideal table with examples; azeotropes (min/max boiling); all four colligative formulas → molar mass; why $\pi$ for proteins; isotonic/hyper/hypo; reverse osmosis; van't Hoff factor, abnormal molar mass, $\alpha$. *Graphs:* $p$–$x$ for ideal/+ve/$-$ve; $p$–$T$ showing $\Delta T_b$ (and $\Delta T_f$).
