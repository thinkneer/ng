# Ch 8 · Introduction to Trigonometry

How tall is a tower you cannot climb? How wide is a river you cannot cross? Trigonometry answers such questions with nothing more than a right triangle and one measured angle. This chapter gives you the language (six ratios), five angles whose values you must know by heart, and three identities. Together with the next chapter it carries 12 marks in the board paper, and every later class builds on it: Class 11 turns these ratios into functions, and Class 12 calculus uses them on almost every page.

:::tip You need from earlier
- **Pythagoras theorem:** hypotenuse² = sum of the squares of the other two sides.
- **Similar triangles** (Ch 6): equal angles give sides in the same ratio.
- **Angle sum of a triangle:** 180°, so the two acute angles of a right triangle add up to 90°.
- **Surds:** simplifying with $\sqrt2$ and $\sqrt3$, and rationalising $\dfrac{1}{\sqrt3}$.
:::

## Where trigonometry came from

The word means "triangle measuring", from the Greek *trigonon* (triangle) and *metron* (measure). Astronomers needed it first. They could measure the angle to a star or to the Sun, but never the distance, so they learnt to get lengths from angles.

Indian astronomers gave the subject its central idea. Around 500 CE, Aryabhata worked with the half-chord of a circle and called it *ardha-jya*, shortened to *jya* or *jiva*. Arab scholars wrote it as *jiba*; later translators read that word as *jaib*, which means a fold or bay, and put it into Latin as *sinus*. That is where "sine" comes from: a word that travelled from Sanskrit to Arabic to Latin to English.

Today the same ratios sit inside every map and GPS fix, in the design of roofs, ramps and bridges, and in the way sound and light waves are described.

**In one breath:** Trigonometry gets lengths from angles using right triangles. "Sine" comes from the Sanskrit *jya*, through Arabic and Latin.

## Naming the sides of a right triangle

Everything starts from a right triangle and **one chosen acute angle**. Once you choose the angle, each side gets a name.

```ng-figure
id: right-triangle-sides
title: The sides of a right triangle, seen from angle θ
svg:
<svg viewBox="0 0 300 200" role="img" aria-label="Right triangle ABC, right angle at B, angle theta at A" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="40,170 250,170 250,40"/><path d="M236,170 V156 H250" stroke-width="1.2"/><path d="M74.0,170.0 A34,34 0 0 0 68.9,152.1" stroke-width="1.2"/><text x="30" y="186" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="262" y="186" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="262" y="36" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="86" y="163" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">θ</text><text x="145" y="190" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">adjacent side (base)</text><text x="256" y="110" font-size="11" text-anchor="start" fill="currentColor" stroke="none" transform="rotate(90 256 110)">opposite side</text><text x="135" y="92" font-size="11" text-anchor="middle" fill="#E0B400" stroke="none" transform="rotate(-31.8 135 92)">hypotenuse</text></svg>
caption: Seen from angle θ at A: BC is opposite, AB is adjacent, AC is the hypotenuse.
part: 135, 114 | Hypotenuse | The side opposite the right angle; always the longest side.
part: 236, 110 | Opposite side (perpendicular) | The side facing the chosen angle θ.
part: 145, 160 | Adjacent side (base) | The side next to θ that is not the hypotenuse.
part: 243, 163 | Right angle | 90°; the hypotenuse faces it.
part: 61, 164 | Angle θ | The acute angle you are working from. Change the angle and "opposite" and "adjacent" swap.
```

The hypotenuse never changes. But "opposite" and "adjacent" depend on which angle you are standing at: seen from angle C, the opposite side is AB and the adjacent side is BC.

:::tip Name the sides first
Before writing any ratio, mark the angle and label the three sides O, A and H on your figure. Most wrong answers in this chapter come from swapping opposite and adjacent.
:::

```ng-draw
id: draw-right-triangle
title: Draw a right triangle and name its sides from angle θ
svg: ref: notes#right-triangle-sides
time: 2
```

**In one breath:** Pick the angle first. The side facing it is opposite, the side beside it is adjacent, and the side facing the right angle is the hypotenuse.

## The six trigonometric ratios

A ratio of two sides of a right triangle depends only on the angle, not on the size of the triangle. A small triangle and a large one with the same angle are similar, so their sides are in the same proportion. That is why each ratio can be given a name.

:::formula The six trigonometric ratios
$\sin\theta=\dfrac{\text{opposite}}{\text{hypotenuse}}$   $\cos\theta=\dfrac{\text{adjacent}}{\text{hypotenuse}}$   $\tan\theta=\dfrac{\text{opposite}}{\text{adjacent}}$<br>
$\operatorname{cosec}\theta=\dfrac{1}{\sin\theta}$   $\sec\theta=\dfrac{1}{\cos\theta}$   $\cot\theta=\dfrac{1}{\tan\theta}$<br>
Also $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$ and $\cot\theta=\dfrac{\cos\theta}{\sin\theta}$
:::

```ng-mnemonic
id: pandit-badri-prasad
title: Which side over which?
trick: **P**andit **B**adri **P**rasad, **H**ar **H**ar **B**ole
meaning: Write P, B, P on top and H, H, B below: $\sin=\dfrac PH$, $\cos=\dfrac BH$, $\tan=\dfrac PB$ (P = perpendicular, B = base, H = hypotenuse).
meaning: The same thing in English: **SOH-CAH-TOA** (Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent).
prompt: Write sin θ, cos θ and tan θ in terms of the sides.
```

If you know one ratio, you can find all the others: draw a triangle with the two sides the ratio gives you, and get the third side from the Pythagoras theorem.

:::skeleton Worked example: all ratios from one (2 marks)
*Given $\tan A=\dfrac43$, find the other trigonometric ratios of angle $A$.*

$\tan A=\dfrac{\text{opposite}}{\text{adjacent}}=\dfrac43$. Take opposite $=4k$ and adjacent $=3k$. Hypotenuse $=\sqrt{(4k)^2+(3k)^2}=5k$ [1]

$\sin A=\dfrac45,\ \cos A=\dfrac35,\ \cot A=\dfrac34,\ \operatorname{cosec}A=\dfrac54,\ \sec A=\dfrac53$ [1]
:::

:::tip sin A is one symbol
$\sin A$ is not "sin times A". You cannot cancel the $A$, and $\sin^2A$ means $(\sin A)^2$. Also, sine and cosine of an acute angle are never more than 1, because no side is longer than the hypotenuse.
:::

:::skeleton Worked example: sides given in words (3 marks)
*In $\triangle PQR$, right-angled at $Q$, $PR+QR=25$ cm and $PQ=5$ cm. Find $\sin P$, $\cos P$ and $\tan P$.*

Let $QR=x$. Then $PR=25-x$. By the Pythagoras theorem: $(25-x)^2=x^2+5^2$ [1]

$625-50x=25\Rightarrow x=12$. So $QR=12$ cm and $PR=13$ cm [1]

From angle $P$: opposite $=QR=12$, adjacent $=PQ=5$, hypotenuse $=13$. $\sin P=\dfrac{12}{13},\ \cos P=\dfrac{5}{13},\ \tan P=\dfrac{12}{5}$ [1]
:::

**In one breath:** sin = O/H, cos = A/H, tan = O/A, and the other three are their reciprocals. From one ratio, build a triangle with $k$, use Pythagoras, and read off the rest.

## Values at 0°, 30°, 45°, 60° and 90°

Two simple triangles give the values for 30°, 45° and 60°. Cut a square along its diagonal: you get a 45°–45°–90° triangle with sides 1, 1, √2. Cut an equilateral triangle of side 2 down the middle: you get a 30°–60°–90° triangle with sides 1, √3, 2.

<figure class="fig" id="special-triangles">
<svg viewBox="0 0 320 190" role="img" aria-label="A 45-45-90 triangle with sides 1, 1, root 2 and a 30-60-90 triangle with sides 1, root 3, 2" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="20,150 120,150 120,50"/><path d="M108,150 V138 H120" stroke-width="1.2"/><text x="70" y="166" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="130" y="104" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="58" y="92" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">√2</text><text x="48" y="146" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">45°</text><text x="108" y="74" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">45°</text><text x="70" y="184" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">half a square</text><polygon points="180,150 300,150 300,81"/><path d="M288,150 V138 H300" stroke-width="1.2"/><path d="M300,81 L180,150" /><text x="240" y="166" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">√3</text><text x="310" y="120" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="232" y="104" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">2</text><text x="214" y="146" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">30°</text><text x="288" y="100" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">60°</text><text x="240" y="184" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">half an equilateral triangle</text></svg>
<figcaption>The two triangles that give every standard value. Read each ratio straight from the sides.</figcaption>
</figure>

For example, in the second triangle the side opposite 30° is 1 and the hypotenuse is 2, so $\sin30^\circ=\dfrac12$; the side opposite 60° is $\sqrt3$, so $\sin60^\circ=\dfrac{\sqrt3}{2}$.

| Angle | sin | cos |
|---|---|---|
| 0° | 0 | 1 |
| 30° | $\frac12$ | $\frac{\sqrt3}{2}$ |
| 45° | $\frac{1}{\sqrt2}$ | $\frac{1}{\sqrt2}$ |
| 60° | $\frac{\sqrt3}{2}$ | $\frac12$ |
| 90° | 1 | 0 |

Dividing sin by cos gives the tangents: $\tan0^\circ=0$, $\tan30^\circ=\dfrac{1}{\sqrt3}$, $\tan45^\circ=1$, $\tan60^\circ=\sqrt3$, and $\tan90^\circ$ is not defined.

```ng-mnemonic
id: root-over-two
title: The sine values without memorising
trick: Write **0, 1, 2, 3, 4**; take the **square root**; divide by **2**
meaning: $\dfrac{\sqrt0}{2},\dfrac{\sqrt1}{2},\dfrac{\sqrt2}{2},\dfrac{\sqrt3}{2},\dfrac{\sqrt4}{2}$ = $0,\ \dfrac12,\ \dfrac{1}{\sqrt2},\ \dfrac{\sqrt3}{2},\ 1$: the sines of 0°, 30°, 45°, 60°, 90°.
meaning: The cosine column is the same list written backwards. tan is sin ÷ cos.
prompt: How do you build the sine values from 0, 1, 2, 3, 4?
```

```ng-graph
id: graph-sin-cos
title: How sin θ and cos θ change from 0° to 90°
x: θ (degrees) | 0 | 90
y: value | 0 | 1.2
curve: sin θ | sin(x*pi/180)
curve: cos θ | cos(x*pi/180)
note: As θ grows from 0° to 90°, sin θ rises from 0 to 1 and cos θ falls from 1 to 0. They are equal at 45°.
```

```ng-fill
id: fill-standard-values
title: Standard values: fill the table from memory
cols: Angle | sin | cos
row: 0° | [[0]] | [[1]]
row: 30° | [[$\frac12$]] | [[$\frac{\sqrt3}{2}$]]
row: 45° | [[$\frac{1}{\sqrt2}$]] | [[$\frac{1}{\sqrt2}$]]
row: 60° | [[$\frac{\sqrt3}{2}$]] | [[$\frac12$]]
row: 90° | [[1]] | [[0]]
```

```ng-fill
id: fill-tan-values
title: Tangent values from memory
cols: Angle | tan
row: 0° | [[0]]
row: 30° | [[$\frac{1}{\sqrt3}$]]
row: 45° | [[1]]
row: 60° | [[$\sqrt3$]]
row: 90° | [[not defined]]
```

:::skeleton Worked example: evaluate (2 marks)
*Evaluate $2\tan^245^\circ+\cos^230^\circ-\sin^260^\circ$.*

$=2(1)^2+\left(\dfrac{\sqrt3}{2}\right)^2-\left(\dfrac{\sqrt3}{2}\right)^2$ [1]

$=2+\dfrac34-\dfrac34=\boxed{2}$ [1]
:::

Standard values also turn an angle into a length, which is the whole point of the subject.

:::skeleton Worked example: a side from an angle (2 marks)
*In $\triangle ABC$, right-angled at $B$, $AB=5$ cm and $\angle ACB=30^\circ$. Find $BC$ and $AC$.*

From angle $C$: opposite $=AB=5$. $\tan30^\circ=\dfrac{AB}{BC}\Rightarrow\dfrac{1}{\sqrt3}=\dfrac{5}{BC}\Rightarrow BC=5\sqrt3$ cm [1]

$\sin30^\circ=\dfrac{AB}{AC}\Rightarrow\dfrac12=\dfrac{5}{AC}\Rightarrow\boxed{AC=10\text{ cm}}$ [1]
:::

```ng-numerical
id: num-ladder-height
title: A ladder against a wall
question: A ladder {{L}} m long leans against a wall and makes an angle of 60° with the ground. How high up the wall does it reach?
var: L | 4 | 12 | 2
answer: L*sqrt(3)/2
unit: m
dp: 2
step: Height is opposite to the 60° angle and the ladder is the hypotenuse: $\sin60^\circ=\dfrac{h}{\,{{L}}\,}$
step: $h={{L}}\times\dfrac{\sqrt3}{2}=$ **{{L*sqrt(3)/2:2}} m**
```

:::tip tan 90° does not exist
At 90° the adjacent side shrinks to zero, and division by zero is not defined. So $\tan90^\circ$ and $\sec90^\circ$ are "not defined", and so are $\cot0^\circ$ and $\operatorname{cosec}0^\circ$. Never write them as 0 or as ∞.
:::

**In one breath:** Two triangles (1, 1, √2 and 1, √3, 2) give every standard value. The sine values are √0, √1, √2, √3, √4 over 2; the cosine values are the same backwards; tan = sin ÷ cos.

## The three identities

An identity is an equation that is true for every angle. All three come from the Pythagoras theorem. In the triangle above, $AB^2+BC^2=AC^2$. Divide every term by $AC^2$:

$$\left(\frac{AB}{AC}\right)^2+\left(\frac{BC}{AC}\right)^2=1$$

which says $\cos^2\theta+\sin^2\theta=1$. Dividing by $AB^2$ or by $BC^2$ instead gives the other two.

:::formula The three trigonometric identities
$\sin^2\theta+\cos^2\theta=1$<br>
$1+\tan^2\theta=\sec^2\theta$<br>
$1+\cot^2\theta=\operatorname{cosec}^2\theta$
:::

Each identity can be rearranged, and you will use the rearranged forms just as often: $1-\sin^2\theta=\cos^2\theta$, $\sec^2\theta-\tan^2\theta=1$, $\operatorname{cosec}^2\theta-1=\cot^2\theta$.

```ng-derive
id: derive-first-identity
title: Prove the first identity
prompt: In a right triangle $ABC$, right-angled at $B$, prove that $\sin^2A+\cos^2A=1$.
time: 3
check: Pythagoras theorem: $AB^2+BC^2=AC^2$ | 1
check: Divide each term by $AC^2$ | 0.5
check: $\left(\dfrac{AB}{AC}\right)^2+\left(\dfrac{BC}{AC}\right)^2=1$, that is $\cos^2A+\sin^2A=1$ | 0.5
```

**In one breath:** Pythagoras divided by the square of each side in turn gives the three identities. Know them forwards and rearranged.

## Proving identities

"Prove that" questions are worth 3 or 5 marks and follow one routine. You are not solving for an angle. You are rewriting one side until it becomes the other.

```ng-steps
id: steps-prove-identity
title: How to prove a trigonometric identity
step: Start with the more complicated side (usually the LHS) and write "LHS =".
step: If nothing obvious appears, change everything into $\sin$ and $\cos$.
step: Take a common denominator, or factorise, or multiply by a conjugate such as $(1+\sin A)$.
step: Use an identity to replace $\sin^2A+\cos^2A$ by 1, or $1-\sin^2A$ by $\cos^2A$, and so on.
step: Simplify until you reach the other side. End with "= RHS. Hence proved."
```

:::skeleton Worked example: factorise and use the identity (3 marks)
*Prove that $\dfrac{\sin A-2\sin^3A}{2\cos^3A-\cos A}=\tan A$.*

LHS $=\dfrac{\sin A\,(1-2\sin^2A)}{\cos A\,(2\cos^2A-1)}$ [1]

Put $\sin^2A=1-\cos^2A$ in the top bracket: $1-2(1-\cos^2A)=2\cos^2A-1$ [1]

LHS $=\dfrac{\sin A\,(2\cos^2A-1)}{\cos A\,(2\cos^2A-1)}=\dfrac{\sin A}{\cos A}=\tan A=$ RHS. Hence proved. [1]
:::

:::skeleton Worked example: both sides to sin and cos (3 marks)
*Prove that $(\operatorname{cosec}A-\sin A)(\sec A-\cos A)=\dfrac{1}{\tan A+\cot A}$.*

LHS $=\left(\dfrac{1}{\sin A}-\sin A\right)\left(\dfrac{1}{\cos A}-\cos A\right)=\dfrac{1-\sin^2A}{\sin A}\cdot\dfrac{1-\cos^2A}{\cos A}$ [1]

$=\dfrac{\cos^2A}{\sin A}\cdot\dfrac{\sin^2A}{\cos A}=\sin A\cos A$ [1]

RHS $=\dfrac{1}{\dfrac{\sin A}{\cos A}+\dfrac{\cos A}{\sin A}}=\dfrac{\sin A\cos A}{\sin^2A+\cos^2A}=\sin A\cos A$. LHS = RHS. Hence proved. [1]
:::

When a square root sits over $1-\sin A$ or $1+\cos A$, multiply top and bottom inside the root by the conjugate. For example,

$$\begin{aligned}\sqrt{\frac{1+\sin A}{1-\sin A}}&=\sqrt{\frac{(1+\sin A)^2}{1-\sin^2A}}\\&=\frac{1+\sin A}{\cos A}\\&=\sec A+\tan A\end{aligned}$$

:::tip Do not cross the equals sign
In a proof, never move terms from one side to the other or cross-multiply the statement you are asked to prove: that assumes it is already true. Work on one side only, or simplify both sides separately until they match.
:::

```ng-explain
id: explain-why-ratios-depend-on-angle
prompt: In three lines, explain why sin 30° is the same in a small right triangle and in a huge one.
lines: 3
answer: Two right triangles with the same acute angle are similar. In similar triangles the corresponding sides are in the same proportion. So opposite ÷ hypotenuse is the same number in both: it depends only on the angle.
```

**In one breath:** Start from the harder side, convert to sin and cos, combine, apply an identity, and finish with "= RHS. Hence proved." Never cross-multiply the statement itself.
