# Ch 6 · Triangles

Two figures are similar when one is an exact enlargement of the other: same shape, different size. This chapter gives one theorem about a line parallel to a side of a triangle and three quick tests for similar triangles. With them you can find lengths you cannot measure directly, such as the height of a tower from its shadow.

## Measuring a pyramid with a stick

Tradition says that the Greek thinker Thales, about 2 600 years ago, was asked how tall the Great Pyramid was. Nobody could climb it with a rope. The story, which may have grown in the retelling, is that he put a stick upright in the sand and compared shadows: the sun's rays make the same angle with the ground everywhere, so the stick and its shadow form a small triangle with the same shape as the huge triangle made by the pyramid and its shadow. Measure the two shadows and the stick, and the height follows from a ratio.

That is the whole idea of this chapter. It is also how maps, scale models, and the zoom on a phone camera work: every length is multiplied by the same number, and every angle stays the same.

**In one breath:** Similar triangles have the same angles, so their sides are in the same ratio. Three easy lengths and one ratio give a fourth length that is hard to measure.

## Similar figures and similar triangles

Two figures are **congruent** if they have the same shape and the same size. They are **similar** if they have the same shape; the sizes may differ. All circles are similar, all squares are similar, and all equilateral triangles are similar.

<figure class="fig" id="similar-triangles">
<svg viewBox="0 0 300 180" role="img" aria-label="Two similar triangles ABC and PQR of different sizes" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="60,70 20,140 110,140"/><polygon points="210,35 150,140 285,140" class="u"/><text x="60" y="62" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="14" y="154" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="114" y="154" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="210" y="27" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">P</text><text x="146" y="154" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">Q</text><text x="290" y="154" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">R</text><text x="150" y="172" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">same shape, different size</text></svg>
<figcaption>Triangle PQR is an enlargement of triangle ABC: equal angles, sides in the same ratio.</figcaption>
</figure>

Two triangles are **similar** if

1. their corresponding **angles are equal**, and
2. their corresponding **sides are in the same ratio** (proportional).

We write $\triangle ABC\sim\triangle PQR$. The order of the letters tells you what matches what: $A\leftrightarrow P$, $B\leftrightarrow Q$, $C\leftrightarrow R$. So

$$\frac{AB}{PQ}=\frac{BC}{QR}=\frac{CA}{RP}$$

```ng-mnemonic
id: same-letters-same-places
title: Reading a similarity statement
trick: **Same place, same partner**
meaning: In $\triangle ABC\sim\triangle PQR$ the 1st letters match, the 2nd letters match, the 3rd letters match. Read sides off the statement: $AB$ with $PQ$, $BC$ with $QR$, $AC$ with $PR$.
prompt: In triangle ABC ~ triangle PQR, which side corresponds to BC?
```

```ng-compare
id: congruent-vs-similar
title: Congruent or similar?
cols: Congruent | Similar
row: Shape | same | same
row: Size | same | may be different
row: Angles | equal | equal
row: Sides | equal | in the same ratio
row: Symbol | $\cong$ | $\sim$
```

:::tip Order of letters
Writing $\triangle ABC\sim\triangle QPR$ when you mean $\triangle PQR$ makes every ratio after it wrong. Match equal angles first, then write the letters in that order.
:::

**In one breath:** Similar triangles: equal angles, proportional sides. The order of the letters in the statement tells you which sides to pair.

## The Basic Proportionality Theorem

Draw a line inside a triangle, parallel to one side. It cuts the other two sides, and it cuts them in the same ratio.

```ng-figure
id: bpt-figure
title: Basic Proportionality Theorem (Thales theorem)
svg:
<svg viewBox="0 0 300 196" role="img" aria-label="Triangle ABC with a line DE parallel to BC cutting AB at D and AC at E" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="150.0,22.0 40.0,172.0 260.0,172.0"/><path d="M89.5,104.5 L210.5,104.5" class="u" stroke-width="2"/><text x="150" y="15" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="30" y="186" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="270" y="186" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="80" y="106" font-size="12" text-anchor="end" fill="currentColor" stroke="none">D</text><text x="220" y="106" font-size="12" text-anchor="start" fill="currentColor" stroke="none">E</text><text x="150" y="98" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">DE ∥ BC</text></svg>
caption: DE is parallel to BC, so AD : DB = AE : EC.
part: 150, 22 | Vertex A | The two cut sides, AB and AC, meet here.
part: 150, 104 | Line DE | Drawn parallel to the side BC.
part: 89, 104 | Point D | Divides AB into AD and DB.
part: 211, 104 | Point E | Divides AC into AE and EC in the same ratio.
part: 150, 172 | Side BC | The side that DE is parallel to.
```

:::formula Basic Proportionality Theorem (BPT)
If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.
$$DE\parallel BC\ \Rightarrow\ \frac{AD}{DB}=\frac{AE}{EC}$$
:::

The proof is a favourite 5-mark question. It compares areas of triangles that share a height.

<figure class="fig" id="bpt-proof-figure">
<svg viewBox="0 0 300 196" role="img" aria-label="Triangle ABC with DE parallel to BC; BE and CD joined; perpendiculars EN on AB and DM on AC" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="150.0,22.0 40.0,172.0 260.0,172.0"/><path d="M89.5,104.5 L210.5,104.5" class="u" stroke-width="2"/><path d="M40.0,172.0 L210.5,104.5 M260.0,172.0 L89.5,104.5" stroke-dasharray="5 4" stroke-width="1"/><path d="M210.5,104.5 L131.8,46.8 M89.5,104.5 L168.2,46.8" stroke-dasharray="2 3" stroke-width="1"/><text x="150" y="15" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="30" y="186" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="270" y="186" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="80" y="106" font-size="12" text-anchor="end" fill="currentColor" stroke="none">D</text><text x="220" y="106" font-size="12" text-anchor="start" fill="currentColor" stroke="none">E</text><text x="122" y="46" font-size="11" text-anchor="end" fill="currentColor" stroke="none">N</text><text x="178" y="46" font-size="11" text-anchor="start" fill="currentColor" stroke="none">M</text></svg>
<figcaption>Construction for the proof: join BE and CD; draw EN ⊥ AB and DM ⊥ AC.</figcaption>
</figure>

:::skeleton Proof of the Basic Proportionality Theorem (5 marks)
**Given:** $\triangle ABC$, $DE\parallel BC$, with $D$ on $AB$ and $E$ on $AC$. **To prove:** $\dfrac{AD}{DB}=\dfrac{AE}{EC}$. [½ + figure ½]

**Construction:** Join $BE$ and $CD$. Draw $EN\perp AB$ and $DM\perp AC$. [½]

$\dfrac{\text{ar}(ADE)}{\text{ar}(BDE)}=\dfrac{\tfrac12\,AD\cdot EN}{\tfrac12\,DB\cdot EN}=\dfrac{AD}{DB}$ … (1) [1]

$\dfrac{\text{ar}(ADE)}{\text{ar}(DEC)}=\dfrac{\tfrac12\,AE\cdot DM}{\tfrac12\,EC\cdot DM}=\dfrac{AE}{EC}$ … (2) [1]

$\triangle BDE$ and $\triangle DEC$ are on the same base $DE$ and between the same parallels $DE$ and $BC$, so $\text{ar}(BDE)=\text{ar}(DEC)$ … (3) [1]

From (1), (2) and (3): $\dfrac{AD}{DB}=\dfrac{AE}{EC}$. [½]
:::

```ng-derive
id: prove-bpt
title: Prove the Basic Proportionality Theorem
prompt: State and prove the Basic Proportionality Theorem. Draw the figure first.
time: 8
check: Figure, Given, To prove | 1
check: Construction: join BE, CD; EN ⊥ AB, DM ⊥ AC | 0.5
check: ar(ADE)/ar(BDE) = AD/DB | 1
check: ar(ADE)/ar(DEC) = AE/EC | 1
check: ar(BDE) = ar(DEC): same base DE, same parallels | 1
check: Conclusion AD/DB = AE/EC | 0.5
```

```ng-draw
id: draw-bpt-proof
title: Draw the figure for the BPT proof
svg: ref: notes#bpt-proof-figure
time: 3
```

**The converse** is also true and is used to *prove* lines parallel: if a line divides two sides of a triangle in the same ratio, it is parallel to the third side.

:::skeleton Worked example: using BPT (2 marks)
*In $\triangle ABC$, $DE\parallel BC$. If $AD=2$ cm, $DB=3$ cm and $AE=4$ cm, find $EC$.*

By BPT, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, so $\dfrac23=\dfrac{4}{EC}$ [1]

$EC=\dfrac{4\times3}{2}=\boxed{6\ \text{cm}}$ [1]
:::

:::skeleton Worked example: is the line parallel? (2 marks)
*$D$ and $E$ are points on sides $AB$ and $AC$ of $\triangle ABC$ with $AD=3$ cm, $DB=4.5$ cm, $AE=4$ cm and $EC=6$ cm. Is $DE\parallel BC$?*

$\dfrac{AD}{DB}=\dfrac{3}{4.5}=\dfrac23$ and $\dfrac{AE}{EC}=\dfrac46=\dfrac23$ [1]

The ratios are equal, so by the **converse of BPT**, $DE\parallel BC$. [1]
:::

:::tip Parts, not wholes
BPT compares the two **parts** of each side: $\dfrac{AD}{DB}$, not $\dfrac{AD}{AB}$. (It is also true that $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, but then use wholes on both sides.) The ratio $\dfrac{DE}{BC}$ equals $\dfrac{AD}{AB}$, not $\dfrac{AD}{DB}$.
:::

```ng-numerical
id: num-bpt
title: BPT with fresh numbers
question: In triangle ABC, DE is parallel to BC with D on AB and E on AC. If AD = {{a}} cm, DB = {{b}} cm and AE = {{c}} cm, find EC.
var: a | 2 | 6 | 1
var: b | 3 | 9 | 1
var: c | 2 | 8 | 1
answer: b*c/a
unit: cm
dp: 2
tol: 1
step: By BPT, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$
step: $EC=\dfrac{AE\times DB}{AD}=\dfrac{ {{c}}\times{{b}} }{ {{a}} }=$ **{{b*c/a:2}} cm**
```

**In one breath:** A line parallel to one side of a triangle cuts the other two sides in the same ratio; and a line that cuts them in the same ratio is parallel to the third side.

## Three tests for similar triangles

You do not need to check all three angles and all three ratios. Any one of these tests is enough.

| Test | What you check |
|---|---|
| **AA** (or AAA) | two angles of one triangle equal two angles of the other |
| **SSS** | all three pairs of sides in the same ratio |
| **SAS** | one angle equal, and the sides **including** it in the same ratio |

AA is the one used most: if two angles match, the third must match too, because the angles of a triangle add up to 180°.

```ng-mnemonic
id: aa-is-enough
title: The quickest similarity test
trick: **Two angles and you are done**
meaning: Find two pairs of equal angles (common angle, vertically opposite angles, alternate angles with parallel lines, right angles) and write "by AA similarity".
prompt: What is the least you must show to prove two triangles similar by angles?
```

```ng-fill
id: fill-equal-angle-sources
title: Where equal angles come from
cols: You see | Equal angles | Reason to write
row: two lines crossing | [[the opposite angles at the crossing]] | vertically opposite angles
row: parallel lines and a transversal | [[alternate angles, corresponding angles]] | alternate / corresponding angles
row: two triangles sharing a vertex angle | [[that angle in both triangles]] | common angle
row: two perpendiculars | [[the two right angles]] | each 90°
```

```ng-steps
id: steps-prove-similar
title: Proving two triangles similar
step: **Name the two triangles** you want and mark what is given on a rough figure.
step: **Find two pairs of equal angles** (or the side ratios) and write each with its reason.
step: **State the result with the test:** "$\triangle ABC\sim\triangle PQR$ (AA similarity)", letters in matching order.
step: **Write the ratio of corresponding sides** and use the part you need.
```

:::skeleton Worked example: a proof with AA (3 marks)
*$ABCD$ is a trapezium with $AB\parallel DC$. Its diagonals meet at $O$. Prove that $\dfrac{AO}{OC}=\dfrac{BO}{OD}$.*

In $\triangle AOB$ and $\triangle COD$:

$\angle OAB=\angle OCD$ (alternate angles, $AB\parallel DC$) [1]

$\angle AOB=\angle COD$ (vertically opposite angles) [½]

So $\triangle AOB\sim\triangle COD$ (AA similarity). [1]

Hence $\dfrac{AO}{CO}=\dfrac{BO}{DO}$ (corresponding sides of similar triangles). [½]
:::

**In one breath:** AA, SSS or SAS proves similarity. Look for common angles, vertically opposite angles and angles made by parallel lines; then write the ratio of matching sides.

## Finding lengths with similar triangles

Once two triangles are similar, any unknown side comes from a ratio.

<figure class="fig" id="shadow-figure">
<svg viewBox="0 0 300 180" role="img" aria-label="A stick and a tower with their shadows, the sun rays making similar triangles" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20,150 H285" stroke-width="1"/><path d="M60,150 V108" stroke-width="3"/><path d="M160,150 V45" stroke-width="3"/><path d="M60,108 L88,150 M160,45 L230,150" class="u"/><text x="52" y="104" font-size="10" text-anchor="end" fill="currentColor" stroke="none">stick</text><text x="152" y="42" font-size="10" text-anchor="end" fill="currentColor" stroke="none">tower</text><text x="76" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">shadow</text><text x="196" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">shadow</text><text x="250" y="60" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">sun rays</text><path d="M232,66 L262,111" stroke-width="1" stroke-dasharray="4 3"/></svg>
<figcaption>At the same time of day the sun's rays are parallel, so the two triangles are similar.</figcaption>
</figure>

:::skeleton Worked example: height from a shadow (3 marks)
*A vertical pole 3 m long casts a shadow 2 m long. At the same time a tower casts a shadow 30 m long. Find the height of the tower.*

Both stand upright (90°) and the sun's rays make the same angle with the ground, so the two triangles are similar by AA. [1]

$\dfrac{\text{height of tower}}{\text{height of pole}}=\dfrac{\text{shadow of tower}}{\text{shadow of pole}}\Rightarrow\dfrac h3=\dfrac{30}{2}$ [1]

$h=\boxed{45\ \text{m}}$ [1]
:::

```ng-numerical
id: num-shadow-height
title: Height from a shadow
question: A vertical pole {{p}} m high casts a shadow {{s}} m long. At the same time a tower casts a shadow {{t}} m long. Find the height of the tower.
var: p | 2 | 6 | 1
var: s | 2 | 5 | 1
var: t | 20 | 60 | 5
answer: p*t/s
unit: m
dp: 1
tol: 1
step: The triangles are similar (AA), so $\dfrac{h}{ {{p}} }=\dfrac{ {{t}} }{ {{s}} }$
step: $h=\dfrac{ {{p}}\times{{t}} }{ {{s}} }=$ **{{p*t/s:1}} m**
```

If $\triangle ABC\sim\triangle PQR$ and each side of the second is $k$ times the matching side of the first, then the **perimeter** is also $k$ times. So the ratio of perimeters equals the ratio of corresponding sides.

```ng-explain
id: explain-why-shadows-work
prompt: In three lines, explain why the pole-and-shadow triangle and the tower-and-shadow triangle are similar.
lines: 3
```

**In one breath:** Prove the triangles similar, write the ratio of matching sides with the unknown in it, and solve. Perimeters are in the same ratio as sides.

## What is not in boards

The theorem on the **ratio of areas of similar triangles** and the **proofs** of the Pythagoras theorem and its converse are not in the current book. You may still *use* the Pythagoras theorem in any chapter.

**In one breath:** No "areas of similar triangles" and no proof of Pythagoras; BPT and the similarity tests are the examinable theory.
