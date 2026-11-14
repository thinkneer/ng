# Ch 1 · Solutions

Most chemistry around you happens in solution: sea water, blood, the acid in a car battery, the syrup in a soft drink. This chapter asks three questions about such mixtures. How do we say how much is dissolved? How much *can* dissolve? And what does the dissolved substance do to the liquid's behaviour: its vapour pressure, its boiling point, its freezing point? The last question gives the chapter its most useful tool, a way to find the molar mass of an unknown substance just by dissolving it.

## What a solution is

A solution is a homogeneous mixture: the same composition and the same properties all the way through. In this chapter we deal with binary solutions, which have two components. The one present in the larger amount is the **solvent**, and it decides the physical state of the solution. The other is the **solute**. By convention the solvent gets subscript 1 and the solute subscript 2, so $n_1$ is moles of solvent and $M_2$ is the molar mass of the solute. Keep this straight now and every formula later reads easily.

Either component can be a solid, a liquid or a gas, so nine types are possible: air is gas in gas, soda water is gas in liquid, brass is solid in solid. The chapter concentrates on liquid solutions: solids in liquids (sugar in water), gases in liquids (oxygen in water) and liquids in liquids (ethanol in water).

**In one breath:** A solution is a uniform mixture; the solvent (1) is the major component and sets the state, the solute (2) is the minor one.

## Saying how much is dissolved

"Strong" and "dilute" are not good enough for calculations, so chemists use several precise measures. Each exists because it is convenient for a particular job.

**Percentages** are the everyday ones. Mass percent is the mass of the component in 100 g of solution; a 10% glucose solution has 10 g glucose and 90 g water. Volume percent is used for liquid mixtures, and mass by volume percent (grams per 100 mL of solution) is the one on medicine labels. For traces, such as pollutants in water, we scale up to **parts per million**.

**Mole fraction** counts molecules, not grams. It is the moles of one component divided by the total moles, and the fractions of all components add up to 1. It is the natural unit for vapour pressure, as you will see.

**Molarity** is moles of solute per litre of *solution*. It is the handiest unit in the lab because we measure solutions by volume. **Molality** is moles of solute per kilogram of *solvent*.

:::formula Mole fraction
$x_2=\dfrac{n_2}{n_1+n_2}$ , with $x_1+x_2=1$

Molarity $M=\dfrac{n_2}{V_\text{solution in L}}$ (mol L$^{-1}$)

Molality $m=\dfrac{n_2}{W_\text{solvent in kg}}=\dfrac{1000\,w_2}{M_2\,w_1}$ (mol kg$^{-1}$), with $w_1$, $w_2$ in grams
:::

Why keep both molarity and molality? Because liquids expand on heating. The volume of a solution changes with temperature, so its molarity changes too. Mass does not change, so molality, mole fraction and mass percent stay the same at every temperature. That is why the colligative-property formulas later in the chapter use molality.

:::tip
Molality divides by the mass of the **solvent**, not the solution. If 10 g of solute is dissolved to make 100 g of solution, the solvent is 90 g.
:::

:::skeleton Worked example: molality and mole fraction
*10 g of glucose ($M_2=180$ g mol$^{-1}$) is dissolved in 90 g of water. Find the molality and the mole fraction of glucose.*

Given: $w_2=10$ g, $w_1=90$ g, $M_1=18$ g mol$^{-1}$.

$n_2=\dfrac{10}{180}=0.0556$ mol; $n_1=\dfrac{90}{18}=5.00$ mol [1]

$m=\dfrac{n_2}{W_1}=\dfrac{0.0556}{0.090}=$ **0.617 mol kg$^{-1}$** [1]

$x_2=\dfrac{0.0556}{5.00+0.0556}=$ **0.011** [1]
:::

**In one breath:** Molarity is per litre of solution and changes with temperature; molality is per kilogram of solvent and does not. Mole fraction counts particles and is the unit vapour pressure cares about.

## How much will dissolve: solubility and Henry's law

Add sugar to water and it dissolves, until at some point no more will. The solution is then **saturated**: dissolving and crystallising go on at the same rate, a dynamic equilibrium. The concentration at that point is the **solubility**.

What decides solubility? First, the nature of the two substances: "like dissolves like". Polar and ionic solutes dissolve in polar solvents such as water; non-polar solutes such as naphthalene dissolve in benzene. Second, temperature. For a solid, apply Le Chatelier's principle: if dissolving absorbs heat, solubility rises on heating; if it gives out heat, solubility falls. Pressure hardly matters for solids, because solids and liquids are almost incompressible.

Gases are different, and here pressure matters a great deal. Picture a gas sitting above water in a closed cylinder. Push the piston down and more gas molecules strike the surface each second, so more enter the liquid. William Henry put this in numbers.

**Henry's law:** at a constant temperature, the partial pressure of a gas above a liquid is directly proportional to the mole fraction of the gas dissolved in it.

:::formula Henry's law
$p=K_H\,x$

$p$ = partial pressure of the gas, $x$ = its mole fraction in the solution, $K_H$ = Henry's law constant (same unit as $p$). $K_H$ depends on the gas, the solvent and the temperature.
:::

Read the formula carefully: for the same pressure, a **larger** $K_H$ means a **smaller** $x$. A gas with a high $K_H$ is poorly soluble. Also, $K_H$ rises with temperature, so gases are less soluble in warm water. Dissolving a gas gives out heat, so heating drives it out, as Le Chatelier predicts. This is why fish are more comfortable in cold water: it holds more oxygen.

:::tip
"Higher $K_H$, higher solubility" is the classic wrong statement. It is the other way round.
:::

Three applications are worth knowing. Soft-drink bottles are sealed under high $\ce{CO2}$ pressure to dissolve more gas; open the cap and it fizzes out. Deep-sea divers breathe air at high pressure, so extra nitrogen dissolves in their blood; coming up fast releases it as bubbles that block capillaries, a painful condition called the bends. Their tanks are therefore filled with air diluted with helium, which is much less soluble. And at high altitude the low partial pressure of oxygen means less of it dissolves in blood, which makes climbers weak and unable to think clearly (anoxia).

:::skeleton Worked example: Henry's law
*$K_H$ for oxygen in water at 293 K is 34.86 kbar. How much oxygen dissolves in 1 L of water when its partial pressure is 0.20 bar?*

$x=\dfrac{p}{K_H}=\dfrac{0.20}{34860}=5.74\times10^{-6}$ [1]

1 L of water is $\dfrac{1000}{18}=55.5$ mol. The gas is so dilute that $x\approx\dfrac{n_{\ce{O2}}}{55.5}$ [½]

$n_{\ce{O2}}=5.74\times10^{-6}\times55.5=3.19\times10^{-4}$ mol [1]

Mass $=3.19\times10^{-4}\times32=$ **0.010 g (about 10 mg)** [½]
:::

**In one breath:** A saturated solution is an equilibrium. Gases dissolve more under pressure and less on warming, and $p=K_Hx$ says a big $K_H$ means low solubility.

## Vapour pressure of a liquid mixture: Raoult's law

Every liquid in a closed container evaporates until its vapour exerts a steady pressure, the vapour pressure. What happens when two volatile liquids are mixed?

Think about the surface. In pure liquid A, the whole surface is A molecules. In a mixture, only a fraction of the surface is A, so fewer A molecules escape each second. It is reasonable to expect A's share of the vapour pressure to shrink in proportion to its share of the molecules. That is exactly Raoult's law.

**Raoult's law:** for a solution of volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction in the solution.

:::formula Raoult's law for volatile liquids
$p_1=x_1\,p_1^\circ$ and $p_2=x_2\,p_2^\circ$

$p_\text{total}=p_1+p_2=p_1^\circ+(p_2^\circ-p_1^\circ)\,x_2$

$p^\circ$ = vapour pressure of the pure liquid at that temperature. In the vapour, the mole fraction of a component is $y_1=\dfrac{p_1}{p_\text{total}}$.
:::

<figure class="fig">
<svg viewBox="0 0 320 195" role="img" aria-label="Vapour pressure of an ideal solution" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M40,20 V170 H280 V20"/><path d="M40,90L280,170" stroke-width="1"/><path d="M40,170L280,40" stroke-width="1"/><path d="M40,90L280,40" stroke="#E0B400" stroke-width="2.5"/>
<g fill="currentColor" stroke="none"><text x="160" y="188" text-anchor="middle">mole fraction x<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> →</tspan></text><text x="14" y="95" text-anchor="middle" transform="rotate(-90 14 95)">vapour pressure</text><text x="36" y="93" text-anchor="end">p<tspan dy="3" font-size="8">1</tspan><tspan dy="-3">°</tspan></text><text x="285" y="43">p<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">°</tspan></text><text x="100" y="126">p<tspan dy="3" font-size="8">1</tspan></text><text x="205" y="100">p<tspan dy="3" font-size="8">2</tspan></text><text x="150" y="56" text-anchor="middle">p<tspan dy="3" font-size="8">total</tspan><tspan dy="-3"> = p</tspan><tspan dy="3" font-size="8">1</tspan><tspan dy="-3"> + p</tspan><tspan dy="3" font-size="8">2</tspan></text></g>
</svg>
<figcaption>Figure 1.1 Ideal solution: every line is straight (Raoult’s law).</figcaption>
</figure>

The last line of the formula box hides a useful fact: the vapour is always richer than the liquid in the more volatile component. That is what makes fractional distillation work.

:::skeleton Worked example: two volatile liquids
*At a certain temperature the vapour pressures of pure liquids A and B are 400 mm Hg and 200 mm Hg. Find the total vapour pressure of a solution with $x_A=0.25$, and the mole fraction of A in the vapour.*

$p_A=x_Ap_A^\circ=0.25\times400=100$ mm Hg; $p_B=0.75\times200=150$ mm Hg [1]

$p_\text{total}=100+150=$ **250 mm Hg** [1]

$y_A=\dfrac{p_A}{p_\text{total}}=\dfrac{100}{250}=$ **0.40** (liquid had only 0.25 of A) [1]
:::

Now compare Raoult's law, $p=x\,p^\circ$, with Henry's law, $p=K_Hx$. Both say partial pressure is proportional to mole fraction; only the constant differs. So Raoult's law is a special case of Henry's law in which $K_H$ equals $p^\circ$.

If the solute is a solid such as sugar, it does not evaporate at all. The whole vapour pressure then comes from the solvent, $p=x_1p_1^\circ$, and since $x_1$ is less than 1 the vapour pressure of the solution is always lower than that of the pure solvent.

**In one breath:** Each volatile liquid contributes vapour pressure in proportion to its mole fraction; the total is a straight line between the two pure values, and the vapour is richer in the more volatile liquid.

## Ideal and non-ideal solutions

A solution that obeys Raoult's law at every composition is called **ideal**. When does that happen? When the attraction between A and B molecules is about the same as A with A and B with B. Then a molecule cannot "tell" who its neighbours are, mixing neither absorbs nor releases heat, and the volumes simply add up: $\Delta_\text{mix}H=0$ and $\Delta_\text{mix}V=0$. Pairs of very similar liquids come close: n-hexane with n-heptane, benzene with toluene, bromoethane with chloroethane.

Most real mixtures are not so obliging, and they deviate in one of two directions.

**Positive deviation.** If A–B attractions are *weaker* than those in the pure liquids, molecules escape more easily and the vapour pressure is higher than Raoult's law predicts. Ethanol and acetone are the standard example: pure ethanol is held together by hydrogen bonds, and acetone molecules get in between and break some of them. Mixing absorbs heat ($\Delta_\text{mix}H>0$) and the volume expands a little ($\Delta_\text{mix}V>0$). Carbon disulphide with acetone behaves the same way.

**Negative deviation.** If A–B attractions are *stronger*, molecules are held back and the vapour pressure is lower than predicted. Chloroform and acetone do this because a hydrogen bond forms between the H of $\ce{CHCl3}$ and the O of acetone, a bond neither pure liquid had. Mixing releases heat ($\Delta_\text{mix}H<0$) and the volume shrinks ($\Delta_\text{mix}V<0$). Phenol with aniline is another case.

<figure class="fig">
<svg viewBox="0 0 345 188" role="img" aria-label="Positive and negative deviation from Raoult’s law" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M38,30 V165 H158 V30"/><path d="M38,100L158,165" stroke-dasharray="4 3" stroke-width="1"/><path d="M38,165L158,60" stroke-dasharray="4 3" stroke-width="1"/><path d="M38,100L158,60" stroke-dasharray="4 3" stroke-width="1"/><path d="M38,100 Q108,115 158,165" stroke-width="1"/><path d="M38,165 Q88,92 158,60" stroke-width="1"/><path d="M38,100 Q98,18 158,60" stroke="#E0B400" stroke-width="2.5"/><path d="M200,30 V165 H320 V30"/><path d="M200,100L320,165" stroke-dasharray="4 3" stroke-width="1"/><path d="M200,165L320,60" stroke-dasharray="4 3" stroke-width="1"/><path d="M200,100L320,60" stroke-dasharray="4 3" stroke-width="1"/><path d="M200,100 Q250,152 320,165" stroke-width="1"/><path d="M200,165 Q272,152 320,60" stroke-width="1"/><path d="M200,100 Q260,128 320,60" stroke="#E0B400" stroke-width="2.5"/>
<g fill="currentColor" stroke="none"><text x="98" y="18" text-anchor="middle">Positive deviation</text><text x="98" y="181" text-anchor="middle" font-size="9">x<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> →</tspan></text><text x="260" y="18" text-anchor="middle">Negative deviation</text><text x="260" y="181" text-anchor="middle" font-size="9">x<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> →</tspan></text><text x="14" y="97" text-anchor="middle" transform="rotate(-90 14 97)">vapour pressure</text><text x="34" y="103" text-anchor="end" font-size="9">p<tspan dy="3" font-size="8">1</tspan><tspan dy="-3">°</tspan></text><text x="162" y="63" font-size="9">p<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">°</tspan></text></g>
</svg>
<figcaption>Figure 1.2 Dashed: ideal. Positive deviation bulges above (maximum); negative dips below (minimum).</figcaption>
</figure>

Those maxima and minima lead to **azeotropes**: mixtures that boil at a constant temperature with the liquid and the vapour having the same composition. Since boiling no longer changes the composition, fractional distillation cannot separate an azeotrope. A large positive deviation gives a maximum in vapour pressure, so the mixture boils at a *lower* temperature than either component: a **minimum-boiling azeotrope**, such as ethanol–water at about 95% ethanol by volume. A large negative deviation gives a **maximum-boiling azeotrope**, such as nitric acid–water at 68% acid by mass, boiling at 393.5 K.

:::tip
Link them through vapour pressure: positive deviation → higher vapour pressure → boils more easily → **minimum**-boiling azeotrope. Negative → **maximum**-boiling. Students swap these every year.
:::

**In one breath:** Ideal means A–B forces equal A–A and B–B. Weaker A–B forces give positive deviation and a minimum-boiling azeotrope; stronger ones give negative deviation and a maximum-boiling azeotrope.

## Colligative properties: lowering of vapour pressure

Here is the big idea of the chapter. Dissolve a non-volatile solute in a solvent and four properties change: the vapour pressure falls, the boiling point rises, the freezing point falls and an osmotic pressure appears. In dilute solutions all four depend only on *how many* solute particles are present, not on what they are. A mole of glucose and a mole of urea have the same effect. Such properties are called **colligative**, and because they count particles they let us find molar mass.

Start with vapour pressure. For a non-volatile solute, $p_1=x_1p_1^\circ$. The lowering is $p_1^\circ-p_1=p_1^\circ(1-x_1)=p_1^\circ x_2$. Divide by $p_1^\circ$ and you get the **relative** lowering, which equals the mole fraction of the solute.

:::formula Relative lowering of vapour pressure
$\dfrac{p_1^\circ-p_1}{p_1^\circ}=x_2=\dfrac{n_2}{n_1+n_2}\approx\dfrac{n_2}{n_1}$ for dilute solutions

So $\dfrac{p_1^\circ-p_1}{p_1^\circ}=\dfrac{w_2\,M_1}{M_2\,w_1}$, which can be solved for $M_2$.
:::

:::skeleton Worked example: relative lowering of vapour pressure
*The vapour pressure of water at 298 K is 23.8 mm Hg. Find the vapour pressure of a solution of 18 g of glucose (180 g mol$^{-1}$) in 180 g of water.*

$n_2=\dfrac{18}{180}=0.10$ mol; $n_1=\dfrac{180}{18}=10.0$ mol [½]

$\dfrac{p_1^\circ-p_1}{p_1^\circ}=x_2=\dfrac{0.10}{10.0+0.10}=0.0099$ [1]

$p_1=23.8\,(1-0.0099)=$ **23.56 mm Hg** [½]
:::

**In one breath:** Colligative properties count solute particles. The relative lowering of vapour pressure equals the solute's mole fraction.

## Boiling higher, freezing lower

A liquid boils when its vapour pressure reaches the outside pressure. A solution has a lower vapour pressure than the pure solvent at every temperature, so it must be heated further to reach 1 atm. Its boiling point is therefore higher. The rise, $\Delta T_b=T_b-T_b^\circ$, is the **elevation of boiling point**.

<figure class="fig">
<svg viewBox="0 0 320 200" role="img" aria-label="Elevation of boiling point" fill="none" stroke="currentColor" stroke-width="1.5" font-size="11">
<path d="M30,20 V175 H300"/><path d="M32.5,24.3L30,20L27.5,24.3" stroke-width="1"/><path d="M295.7,177.5L300,175L295.7,172.5" stroke-width="1"/><path d="M40,150 Q150,140 220,40"/><path d="M60,160 Q180,150 260,40" stroke="#E0B400" stroke-width="2"/><path d="M30,70L285,70" stroke-dasharray="4 3" stroke-width="1"/><path d="M196.3,70L196.3,175" stroke-dasharray="4 3" stroke-width="1"/><path d="M235.8,70L235.8,175" stroke-dasharray="4 3" stroke-width="1"/><path d="M197.3,160L234.8,160" stroke-width="1"/><path d="M230.4,162.5L234.8,160L230.4,157.5" stroke-width="1"/><path d="M201.6,157.5L197.3,160L201.6,162.5" stroke-width="1"/>
<g fill="currentColor" stroke="none"><text x="100" y="191" text-anchor="middle">temperature →</text><text x="18" y="97.5" text-anchor="middle" transform="rotate(-90 18 97.5)">vapour pressure</text><text x="34" y="66" font-size="9">1 atm</text><text x="196.3" y="188" text-anchor="middle">T<tspan dy="3" font-size="8">b</tspan><tspan dy="-3">°</tspan></text><text x="239.8" y="188" text-anchor="middle">T<tspan dy="3" font-size="8">b</tspan></text><text x="216" y="154" text-anchor="middle" font-size="9">ΔT<tspan dy="3" font-size="8">b</tspan></text><text x="172" y="52" text-anchor="end">solvent</text><text x="266" y="56">solution</text></g>
</svg>
<figcaption>Figure 1.3 The solution reaches 1 atm at a higher temperature: boiling point rises by ΔTb.</figcaption>
</figure>

Freezing works by the same logic. A liquid freezes at the temperature where its vapour pressure equals that of its solid. Lowering the liquid's curve moves that meeting point to a lower temperature, so the solution freezes below the pure solvent. The fall, $\Delta T_f=T_f^\circ-T_f$, is the **depression of freezing point**.

**Figure 1.4 (depression of freezing point):** the same plot at low temperature. The solution's curve meets the solid-solvent curve at $T_f$, to the left of $T_f^\circ$; the gap is $\Delta T_f$.

For dilute solutions both changes are proportional to molality.

:::formula Boiling-point elevation and freezing-point depression
$\Delta T_b=K_b\,m$ and $\Delta T_f=K_f\,m$

$K_b$ (molal elevation or ebullioscopic constant) and $K_f$ (molal depression or cryoscopic constant) have units K kg mol$^{-1}$ and depend only on the solvent. Water: $K_b=0.52$, $K_f=1.86$.

Molar mass: $M_2=\dfrac{1000\,K_b\,w_2}{\Delta T_b\,w_1}$ or $M_2=\dfrac{1000\,K_f\,w_2}{\Delta T_f\,w_1}$
:::

Notice that $K_f$ for water is more than three times $K_b$. Freezing-point changes are bigger and easier to measure, which is why most numericals use them. Everyday uses follow directly: salt on icy roads lowers the freezing point of water so the ice melts, and ethylene glycol in a car radiator stops the coolant freezing in winter.

:::skeleton Worked example: freezing point of an antifreeze solution
*31 g of ethylene glycol ($M_2=62$ g mol$^{-1}$) is dissolved in 500 g of water. At what temperature does the solution freeze? ($K_f=1.86$ K kg mol$^{-1}$)*

$m=\dfrac{1000\,w_2}{M_2\,w_1}=\dfrac{1000\times31}{62\times500}=1.0$ mol kg$^{-1}$ [1]

$\Delta T_f=K_f\,m=1.86\times1.0=1.86$ K [1]

$T_f=273.15-1.86=$ **271.29 K** [1]
:::

:::tip
Read the last line of the question. "Find the depression" wants $\Delta T_f$; "find the freezing point" wants $T_f^\circ-\Delta T_f$. Stopping one step early loses the final mark.
:::

**In one breath:** A lowered vapour pressure means the solution boils higher and freezes lower; both shifts equal a solvent constant times the molality.

## Osmosis and osmotic pressure

Put a raw mango in strong brine and it shrivels; put wilted flowers in fresh water and they revive. Both are **osmosis**: the flow of solvent through a semipermeable membrane, one that lets solvent molecules through but not solute particles. The solvent always moves from the side where it is more concentrated (pure solvent or dilute solution) to the more concentrated solution.

**Figure 1.5 (osmosis):** solvent and solution separated by a semipermeable membrane; the pressure on the solution that just stops solvent flowing in is the osmotic pressure.

That stopping pressure is the **osmotic pressure**, $\pi$. For dilute solutions it follows an equation that looks just like the gas law.

:::formula Osmotic pressure
$\pi=CRT=\dfrac{n_2}{V}RT$ , so $M_2=\dfrac{w_2RT}{\pi V}$

$C$ = molarity, $V$ in litres, $T$ in kelvin. Use $R=0.083$ L bar K$^{-1}$ mol$^{-1}$ for $\pi$ in bar.
:::

Osmotic pressure is the best colligative property for finding the molar masses of proteins and polymers, for three reasons. It is measured at room temperature, so delicate biomolecules are not damaged. It uses molarity, which is easy to prepare. And it is large: a solution too dilute to shift the freezing point measurably still gives an osmotic pressure you can read.

:::skeleton Worked example: molar mass of a polymer
*2.0 g of a polymer dissolved in water to make 250 mL of solution has an osmotic pressure of $1.2\times10^{-3}$ bar at 300 K. Find its molar mass.*

Given: $w_2=2.0$ g, $V=0.250$ L, $T=300$ K, $\pi=1.2\times10^{-3}$ bar.

$M_2=\dfrac{w_2RT}{\pi V}$ [1]

$=\dfrac{2.0\times0.083\times300}{1.2\times10^{-3}\times0.250}$ [1]

$=$ **$1.66\times10^{5}$ g mol$^{-1}$** [1]
:::

:::tip
In $\pi=CRT$ the volume must be in litres and the temperature in kelvin, and $R$ must match the pressure unit (0.083 for bar, 0.0821 for atm).
:::

Two solutions with the same osmotic pressure are **isotonic**; no net osmosis occurs between them. A 0.9% (mass by volume) sodium chloride solution, normal saline, is isotonic with the fluid inside blood cells, which is why it is safe to inject. In a more concentrated (hypertonic) solution cells lose water and shrink; in a more dilute (hypotonic) one they take in water and swell.

Finally, if you press on the solution side with a pressure *greater* than $\pi$, the flow reverses: pure solvent is squeezed out of the solution. This **reverse osmosis** is how sea water is desalinated, using membranes such as cellulose acetate.

**In one breath:** Solvent flows through a semipermeable membrane toward the stronger solution; $\pi=CRT$ is the pressure that stops it, and it is the property of choice for large molecules.

## When the particle count changes: the van't Hoff factor

Colligative properties count particles, and so far we assumed one mole of solute gives one mole of particles. Often it does not.

Dissolve one mole of sodium chloride and you get nearly two moles of particles, because $\ce{NaCl -> Na+ + Cl-}$. The freezing point falls almost twice as far as expected, and a molar mass calculated from it comes out at about half the true value. The opposite happens with ethanoic acid in benzene: pairs of molecules join through hydrogen bonds, $\ce{2CH3COOH <=> (CH3COOH)2}$, so there are fewer particles than expected and the calculated molar mass comes out at nearly double. Molar masses that are wrong for these reasons are called **abnormal molar masses**.

To handle this, van't Hoff introduced a correction factor, $i$: the ratio of what is observed to what is expected.

:::formula van't Hoff factor
$i=\dfrac{\text{observed colligative property}}{\text{calculated colligative property}}=\dfrac{\text{normal molar mass}}{\text{abnormal molar mass}}=\dfrac{\text{moles of particles after dissociation or association}}{\text{moles before}}$

Corrected equations: $\Delta T_b=iK_bm$ , $\Delta T_f=iK_fm$ , $\pi=iCRT$ , $\dfrac{p_1^\circ-p_1}{p_1^\circ}=i\,\dfrac{n_2}{n_1}$

Dissociation into $n$ ions: $\alpha=\dfrac{i-1}{n-1}$. Association of $n$ molecules: $\alpha=\dfrac{1-i}{1-\frac{1}{n}}$
:::

So $i$ is greater than 1 for dissociation, less than 1 for association and exactly 1 for solutes like glucose and urea that do neither. For complete dissociation, $i$ is simply the number of ions per formula unit: 2 for $\ce{NaCl}$ and $\ce{KCl}$, 3 for $\ce{CaCl2}$ and $\ce{K2SO4}$, 4 for $\ce{AlCl3}$, 5 for $\ce{Al2(SO4)3}$. This lets you rank solutions at a glance: at the same molality, the one with the largest $i$ has the lowest freezing point, the highest boiling point and the highest osmotic pressure.

:::tip
For any electrolyte, write the dissociation equation and the value of $i$ before you touch the formula. Forgetting $i$ for $\ce{NaCl}$ or $\ce{CaCl2}$ is the commonest slip in this chapter.
:::

:::skeleton Worked example: degree of dissociation
*0.50 g of $\ce{KCl}$ ($M_2=74.5$ g mol$^{-1}$) dissolved in 100 g of water lowers the freezing point by 0.24 K. Find the van't Hoff factor and the percentage dissociation. ($K_f=1.86$ K kg mol$^{-1}$)*

$m=\dfrac{1000\times0.50}{74.5\times100}=0.0671$ mol kg$^{-1}$; calculated $\Delta T_f=1.86\times0.0671=0.125$ K [1]

$i=\dfrac{\text{observed}}{\text{calculated}}=\dfrac{0.24}{0.125}=$ **1.92** [1]

$\ce{KCl -> K+ + Cl-}$, so $n=2$: $\alpha=\dfrac{i-1}{n-1}=0.92$, that is **92% dissociated** [1]
:::

**In one breath:** If the solute splits up or pairs up, the particle count changes; multiply every colligative formula by $i$, which is above 1 for dissociation and below 1 for association.
