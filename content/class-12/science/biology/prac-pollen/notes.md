# Practical · Pollen germination

This experiment shows, under a microscope, what happens on a stigma: a pollen grain takes up water and nutrients and sends out a pollen tube. It is in the 2026–27 list of experiments and ties straight to Ch 1 (pollen grain, germ pores, pollen–pistil interaction).

## Aim and principle

**Aim.** To prepare a temporary mount to observe pollen germination.

**Principle.** On a compatible stigma, a pollen grain germinates: a pollen tube grows out through one of the **germ pores** of the exine. The stigma surface supplies water, sugars and other substances. In the laboratory we copy this with a **nutrient medium of sucrose** in water; a small amount of **boric acid** is added because boron helps pollen-tube growth. Pollen of flowers such as *Catharanthus* (periwinkle, sadabahar), pea, *Hibiscus* or balsam germinates within about 15–30 minutes in such a medium.

:::tip Sugar strength
A medium that is too strong draws water out of the pollen and stops germination; too weak and the grains may burst. About 10% sucrose works for most flowers.
:::

**In one breath:** Pollen germinates when it gets water, sugar and boron, as on a stigma. In a 10% sucrose drop with a trace of boric acid, the tube comes out through a germ pore within half an hour.

## Materials

- Freshly opened flowers with mature anthers (*Catharanthus*, pea, *Hibiscus*, balsam)
- Sucrose, boric acid, distilled water, beaker
- Cavity slide (or a watch glass), coverslip, needle or fine brush, dropper
- Compound microscope; a Petri dish with moist filter paper (moist chamber)

**In one breath:** Fresh flowers, a sucrose–boric acid medium, a cavity slide, a brush and a microscope; a moist chamber stops the drop drying.

## Procedure

```ng-steps
id: pollen-procedure
title: Pollen germination, step by step
step: **Prepare the medium**: dissolve about 10 g sucrose and a pinch (about 10 mg) of boric acid in 100 mL distilled water.
step: Put **one drop** of the medium in the cavity of a clean cavity slide.
step: **Dust pollen** from a freshly dehisced anther onto the drop with a needle or brush; do not add too much.
step: Keep the slide in a **moist chamber** (Petri dish with wet filter paper) for 15–30 minutes, so the drop does not dry.
step: Place a coverslip and **observe under low power, then high power**.
step: Count germinated and ungerminated grains in a few fields and record them.
```

```ng-mnemonic
id: pollen-sweet-boy
title: What goes into the medium
trick: **S**weet **B**oy: **S**ucrose feeds, **B**oric acid boosts
meaning: **Sucrose** gives energy and keeps the right concentration; **boric acid** (boron) helps the pollen tube grow.
prompt: Name the two chemicals in a pollen germination medium and their roles.
```

**In one breath:** Medium → one drop → dust pollen → moist chamber 15–30 min → coverslip → low then high power → count.

## What you see: observation

```ng-figure
id: pollen-germinating
title: Germinating pollen grain
svg:
<svg viewBox="0 0 310 150" role="img" aria-label="Germinating pollen grain with a pollen tube, tube nucleus and two male gametes" fill="none" stroke="currentColor">
<path class="uf" fill-opacity="0.18" stroke="none" d="M86,82C140,70,200,56,272,52L274,66C202,70,142,84,90,98Z"/>
<path stroke-width="1.6" d="M86,82C140,70,200,56,272,52M90,98C142,84,202,70,274,66M272,52C282,52,286,66,274,66"/>
<circle cx="60" cy="90" r="34" stroke-width="2.4" stroke-dasharray="190 24"/>
<circle class="uf" cx="60" cy="90" r="29" fill-opacity="0.15" stroke="currentColor" stroke-width="1"/>
<ellipse class="u" cx="250" cy="59" rx="8" ry="5" stroke-width="1.6"/>
<g fill="#E0B400" stroke="none"><ellipse cx="222" cy="64" rx="6" ry="3"/><ellipse cx="208" cy="67" rx="6" ry="3"/></g>
<g fill="currentColor" stroke="none" font-size="10"><text x="4" y="40">Exine</text><text x="20" y="144">Pollen grain</text><text x="92" y="118">Germ pore</text><text x="120" y="54">Pollen tube</text><text x="226" y="40">Tube nucleus</text><text x="176" y="96">Two male gametes</text></g>
</svg>
caption: A pollen tube grows out through a germ pore; the tube nucleus leads, followed by the two male gametes. Our simplified drawing.
part: 60, 56 | Exine | Hard outer wall of sporopollenin.
part: 96, 92 | Germ pore | Gap in the exine through which the tube emerges.
part: 150, 76 | Pollen tube | Outgrowth of the intine; carries the male gametes.
part: 250, 59 | Tube nucleus | Vegetative nucleus that moves to the tube tip.
part: 215, 66 | Male gametes | Formed by division of the generative cell.
part: 60, 100 | Pollen grain | Two-celled when shed in most flowers.
```

```ng-draw
id: pollen-draw
title: Draw a germinating pollen grain
svg: ref: notes#pollen-germinating
time: 3
```

Under the microscope many grains show a **pollen tube** coming out through a germ pore; some grains stay ungerminated. In an older tube, the **tube nucleus** lies near the tip with the **two male gametes** behind it.

**Observation table**

| Field | Germinated | Not germinated | Total |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| Total | | | |

Percentage germination is worked out from the totals:

:::formula Percentage germination
$$\text{Germination (\%)}=\frac{\text{germinated}}{\text{total counted}}\times100$$
:::

```ng-numerical
id: pollen-percent
title: Percentage germination
question: In three fields a student counted {{g}} germinated and {{n}} ungerminated pollen grains. Find the percentage germination.
var: g | 20 | 80 | 2
var: n | 10 | 60 | 2
answer: g/(g+n)*100
unit: %
dp: 1
tol: 1
step: Total grains $={{g}}+{{n}}={{g+n:0}}$.
step: Germination $=\dfrac{ {{g}} }{ {{g+n:0}} }\times100=$ **{{g/(g+n)*100:1}}%**.
```

**In one breath:** Tubes emerge through germ pores; the tube nucleus leads the two male gametes. Record germinated and ungerminated grains and express germination as a percentage.

## Result and precautions

**Result.** Pollen grains germinate in the sucrose–boric acid medium; pollen tubes emerge through the germ pores, showing that the medium imitates the conditions on a stigma.

**Precautions**
1. Use **fresh, mature** pollen from newly opened flowers.
2. Keep the slide and coverslip **clean and dry** before adding the medium.
3. Use only **one drop** of medium and a light dusting of pollen.
4. Keep the slide in a **moist chamber** so the drop does not dry.
5. Focus first under **low power**, then high power.

```ng-mnemonic
id: pollen-gate
title: Where does the tube come out?
trick: **Germ pore = Gate**
meaning: The pollen tube always emerges through a germ pore, where the exine has no sporopollenin.
prompt: Through which part of the pollen wall does the pollen tube emerge?
```

**In one breath:** Result: tubes through germ pores in a stigma-like medium. Precautions: fresh pollen, clean slide, one drop, moist chamber, low power first.
