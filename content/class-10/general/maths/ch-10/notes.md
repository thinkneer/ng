# Ch 10 · Circles

A tangent is a line that just touches a circle. This chapter has exactly two theorems about tangents, both with short proofs, and almost every question is one of them plus the Pythagoras theorem or a little angle-chasing. With Triangles it makes up the 15 marks of Geometry.

## Why a stone leaves the sling in a straight line

Whirl a stone on a string and let go: the stone does not keep curving, and it does not fly straight out from your hand either. It leaves along the line that just touches the circle at the point of release. That line is the tangent, from the Latin *tangere*, "to touch". Sparks from a grinding wheel and mud from a cycle tyre fly off the same way.

Tangents also explain an ordinary wheel. The road is a tangent to the wheel: it touches at one point, and at that point the spoke stands exactly upright, at 90° to the road. That right angle is the first theorem of this chapter.

**In one breath:** A tangent touches a circle at one point, and things released from circular motion travel along it. At the point of contact the radius is perpendicular to the tangent.

## Secant, tangent and the number of tangents

A line and a circle can meet in three ways.

```ng-compare
id: secant-vs-tangent
title: Secant or tangent?
cols: Secant | Tangent
row: Points in common with the circle | two | exactly one
row: Name of the common point | points of intersection | point of contact
row: Passes through the inside of the circle? | yes | no
```

A line that does not meet the circle at all is called a non-intersecting line.

How many tangents can be drawn to a circle through a given point? It depends on where the point is.

```ng-fill
id: fill-number-of-tangents
title: Number of tangents through a point
cols: Position of the point | Number of tangents
row: Inside the circle | [[0]]
row: On the circle | [[1]]
row: Outside the circle | [[2]]
```

The **length of a tangent** from an outside point $P$ means the length of the segment from $P$ to the point of contact.

**In one breath:** A tangent meets the circle at one point. Through a point inside there is no tangent, through a point on the circle one, through a point outside two.

## Theorem 1: the tangent is perpendicular to the radius

```ng-figure
id: tangent-radius-figure
title: Tangent and radius at the point of contact
svg:
<svg viewBox="0 0 300 180" role="img" aria-label="Circle with centre O, tangent at P and a second point Q on the tangent" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="150" cy="92" r="58"/><path d="M30,150 H275" class="u" stroke-width="2"/><path d="M150,92 V150"/><path d="M150,138 H162 V150" stroke-width="1"/><path d="M150,92 L226,150" stroke-dasharray="5 4" stroke-width="1"/><circle cx="150" cy="92" r="2.5" fill="currentColor"/><text x="150" y="84" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">O</text><text x="150" y="166" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">P</text><text x="228" y="166" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">Q</text><text x="140" y="124" font-size="12" text-anchor="end" fill="currentColor" stroke="none">r</text><text x="60" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">tangent</text></svg>
caption: OP is the radius to the point of contact; any other point Q of the tangent lies outside the circle.
part: 150, 92 | Centre O | The radius is drawn from here.
part: 150, 150 | Point of contact P | The only point the tangent shares with the circle.
part: 150, 120 | Radius OP | The shortest distance from O to the tangent, so it is perpendicular to it.
part: 226, 150 | Another point Q | Lies outside the circle, so OQ is longer than OP.
part: 60, 150 | Tangent | Touches the circle at P only.
```

:::formula Theorem 10.1
The tangent at any point of a circle is **perpendicular to the radius** through the point of contact: $OP\perp$ tangent.
:::

:::skeleton Proof of Theorem 10.1 (3 marks)
**Given:** a circle with centre $O$ and a tangent $XY$ at the point $P$. **To prove:** $OP\perp XY$. [½]

Take any point $Q$ on $XY$ other than $P$ and join $OQ$. $Q$ must lie outside the circle (if it were inside or on the circle, $XY$ would meet the circle twice and be a secant). [1]

So $OQ>OP$ (radius), for every point $Q$ on $XY$ except $P$. [½]

Thus $OP$ is the shortest of all distances from $O$ to the line $XY$, and the shortest distance from a point to a line is the perpendicular. Hence $OP\perp XY$. [1]
:::

```ng-derive
id: prove-tangent-perpendicular
title: Prove that the tangent is perpendicular to the radius
prompt: Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.
time: 5
check: Figure, Given, To prove | 0.5
check: Any other point Q on the tangent lies outside the circle | 1
check: So OQ > OP for every such Q | 0.5
check: OP is the shortest distance from O to the line, hence perpendicular | 1
```

Because of this right angle, the radius, the tangent and the line from the centre to an outside point make a **right triangle**, and the Pythagoras theorem gives the length of the tangent.

:::formula Length of a tangent
$$PT=\sqrt{d^2-r^2}$$
$d$ = distance of the point from the centre, $r$ = radius.
:::

:::skeleton Worked example: length of a tangent (2 marks)
*A point $P$ is 10 cm from the centre of a circle of radius 6 cm. Find the length of the tangent from $P$.*

$OT\perp PT$, so in right $\triangle OTP$: $PT^2=OP^2-OT^2$ [1]

$PT=\sqrt{100-36}=\boxed{8\ \text{cm}}$ [1]
:::

```ng-mnemonic
id: radius-tangent-right-angle
title: The first thing to mark in any tangent figure
trick: **Touch point → turn 90°**
meaning: Join the centre to every point of contact and mark the right angle there before you read the rest of the question.
prompt: What angle does a radius make with the tangent at the point of contact?
```

```ng-graph
id: graph-tangent-length
title: Tangent length as the point moves away
x: distance d from the centre (cm) | 0 | 20
y: tangent length (cm) | 0 | 20
curve: tangent length | sqrt(max(x^2-r^2, 0))
slider: r | radius $r$ (cm) | 2 | 10 | 1 | 6
preset: r = 6, try d = 10 | r=6
preset: r = 5, try d = 13 | r=5
note: The tangent length is zero when the point is on the circle ($d=r$) and gets closer and closer to $d$ as the point moves far away.
```

```ng-numerical
id: num-tangent-length
title: Length of a tangent
question: A point is {{d}} cm from the centre of a circle of radius {{r}} cm. Find the length of the tangent from the point to the circle (2 decimal places).
var: r | 3 | 9 | 1
var: d | 10 | 20 | 1
answer: sqrt(d^2-r^2)
unit: cm
dp: 2
tol: 1
step: Radius ⟂ tangent, so (tangent)$^2=d^2-r^2={{d^2}}-{{r^2}}={{d^2-r^2}}$
step: Tangent $=\sqrt{ {{d^2-r^2}} }=$ **{{sqrt(d^2-r^2):2}} cm**
```

:::skeleton Worked example: chord of the larger circle (2 marks)
*Two concentric circles have radii 17 cm and 8 cm. Find the length of the chord of the larger circle that touches the smaller circle.*

Let the chord $AB$ touch the smaller circle at $P$. Then $OP\perp AB$, and the perpendicular from the centre bisects the chord, so $AP=PB$. [1]

$AP=\sqrt{17^2-8^2}=\sqrt{225}=15$ cm, so $AB=\boxed{30\ \text{cm}}$ [1]
:::

**In one breath:** Radius ⟂ tangent at the point of contact. That right angle makes a right triangle, so tangent length is $\sqrt{d^2-r^2}$.

## Theorem 2: two tangents from one point are equal

```ng-figure
id: two-tangents-figure
title: Two tangents from an external point
svg:
<svg viewBox="0 0 300 190" role="img" aria-label="Two tangents PA and PB drawn to a circle with centre O from an external point P" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="110" cy="95" r="55"/><path d="M260,95 L130.2,43.8 M260,95 L130.2,146.2" class="u" stroke-width="2"/><path d="M110,95 L130.2,43.8 M110,95 L130.2,146.2"/><path d="M110,95 H260" stroke-dasharray="5 4" stroke-width="1"/><circle cx="110" cy="95" r="2.5" fill="currentColor"/><text x="98" y="99" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">O</text><text x="272" y="99" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">P</text><text x="128" y="36" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="128" y="164" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text></svg>
caption: PA = PB, and OP bisects both the angle APB and the angle AOB.
part: 260, 95 | External point P | Two tangents can be drawn from it.
part: 130, 44 | Point of contact A | OA is perpendicular to PA.
part: 130, 146 | Point of contact B | OB is perpendicular to PB.
part: 110, 95 | Centre O | OA = OB = radius.
part: 185, 95 | Line OP | Common side of triangles OAP and OBP; it bisects angle APB.
```

:::formula Theorem 10.2
The lengths of the tangents drawn from an external point to a circle are **equal**: $PA=PB$.
:::

:::skeleton Proof of Theorem 10.2 (3 marks)
**Given:** tangents $PA$ and $PB$ from an external point $P$ to a circle with centre $O$. **To prove:** $PA=PB$. **Construction:** join $OA$, $OB$, $OP$. [½ + figure ½]

In $\triangle OAP$ and $\triangle OBP$: $\angle OAP=\angle OBP=90^\circ$ (radius ⟂ tangent), $OA=OB$ (radii), $OP=OP$ (common). [1]

So $\triangle OAP\cong\triangle OBP$ (RHS). Hence $PA=PB$ (CPCT). [1]
:::

```ng-derive
id: prove-equal-tangents
title: Prove that tangents from an external point are equal
prompt: Prove that the lengths of tangents drawn from an external point to a circle are equal.
time: 5
check: Figure with OA, OB, OP joined; Given and To prove | 1
check: Right angles at A and B (radius ⟂ tangent); OA = OB; OP common | 1
check: Triangles congruent by RHS; PA = PB by CPCT | 1
```

```ng-draw
id: draw-two-tangents
title: Draw two tangents from an external point
svg: ref: notes#two-tangents-figure
time: 3
```

The same congruence gives two more facts: $OP$ bisects $\angle APB$, and $OP$ bisects $\angle AOB$. Also, in quadrilateral $OAPB$ two angles are 90°, so the other two add up to 180°:

:::formula Angle between two tangents
$$\angle APB+\angle AOB=180^\circ$$
:::

:::skeleton Worked example: angles (2 marks)
*$PA$ and $PB$ are tangents to a circle with centre $O$ and $\angle APB=70^\circ$. Find $\angle AOB$ and $\angle POA$.*

$\angle AOB=180^\circ-70^\circ=\boxed{110^\circ}$ [1]

$OP$ bisects $\angle AOB$, so $\angle POA=\boxed{55^\circ}$ [1]
:::

```ng-mnemonic
id: tangent-twins
title: Tangents from one point
trick: **Tangents from one point are twins**
meaning: From every vertex or outside point, the two tangent segments are equal. Mark each pair with the same letter ($x$, $x$; $y$, $y$) and the question usually solves itself.
prompt: What can you say about the two tangents drawn to a circle from the same external point?
```

**In one breath:** Two tangents from one outside point are equal (RHS congruence), the line to the centre bisects the angle between them, and $\angle APB+\angle AOB=180^\circ$.

## Circles inside triangles and quadrilaterals

When a circle touches all the sides of a polygon, every vertex is an external point with two equal tangents. Mark the equal pairs and add.

<figure class="fig" id="circumscribed-quadrilateral">
<svg viewBox="0 0 300 190" role="img" aria-label="Quadrilateral ABCD circumscribing a circle, touching it at P, Q, R and S" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="150" cy="98" r="50"/><polygon points="109.4,40.1 93.5,130.6 179.9,162.1 217.4,59.1" class="u"/><circle cx="158.7" cy="48.8" r="2.5" fill="currentColor"/><circle cx="100.8" cy="89.3" r="2.5" fill="currentColor"/><circle cx="132.9" cy="145.0" r="2.5" fill="currentColor"/><circle cx="197.0" cy="115.1" r="2.5" fill="currentColor"/><text x="225" y="55" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="103" y="34" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="83" y="139" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="184" y="178" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">D</text><text x="161" y="41" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">P</text><text x="91" y="91" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">Q</text><text x="127" y="161" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">R</text><text x="207" y="123" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">S</text></svg>
<figcaption>ABCD circumscribes the circle: AP = AS, BP = BQ, CQ = CR, DR = DS.</figcaption>
</figure>

:::skeleton Worked example: quadrilateral circumscribing a circle (3 marks)
*A quadrilateral $ABCD$ is drawn to circumscribe a circle. Prove that $AB+CD=AD+BC$.*

Tangents from an external point are equal: $AP=AS$, $BP=BQ$, $CR=CQ$, $DR=DS$. [1]

Adding: $(AP+BP)+(CR+DR)=(AS+DS)+(BQ+CQ)$ [1]

$\Rightarrow AB+CD=AD+BC$ [1]
:::

<figure class="fig" id="incircle-triangle">
<svg viewBox="0 0 300 180" role="img" aria-label="Triangle ABC circumscribing a circle that touches AB at D, BC at E and CA at F" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="150" cy="112" r="40"/><polygon points="163.9,33.2 64.2,152.0 207.1,152.0" class="u"/><circle cx="187.6" cy="98.3" r="2.5" fill="currentColor"/><circle cx="119.4" cy="86.3" r="2.5" fill="currentColor"/><circle cx="150.0" cy="152.0" r="2.5" fill="currentColor"/><text x="164" y="27" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="56" y="164" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="215" y="164" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="109" y="84" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">D</text><text x="150" y="168" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">E</text><text x="198" y="96" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">F</text></svg>
<figcaption>The circle touches AB at D, BC at E and CA at F: AD = AF, BD = BE, CE = CF.</figcaption>
</figure>

:::skeleton Worked example: triangle circumscribing a circle (3 marks)
*A circle touches the sides $AB$, $BC$, $CA$ of $\triangle ABC$ at $D$, $E$, $F$. If $AB=10$ cm, $BC=8$ cm and $CA=12$ cm, find $AD$, $BE$ and $CF$.*

Let $AD=AF=x$, $BD=BE=y$, $CE=CF=z$. Then $x+y=10$, $y+z=8$, $z+x=12$. [1]

Adding: $2(x+y+z)=30$, so $x+y+z=15$. [1]

$x=15-8=7$, $y=15-12=3$, $z=15-10=5$: $AD=\boxed{7}$, $BE=\boxed{3}$, $CF=\boxed{5}$ cm [1]
:::

```ng-steps
id: steps-circumscribed-figures
title: Polygon around a circle
step: **Mark the points of contact** on every side.
step: **From each vertex mark the two equal tangents** with the same letter.
step: **Write each side as a sum** of two of those letters.
step: **Add or subtract** the equations to get what is asked.
```

```ng-explain
id: explain-two-theorems
prompt: In three lines, state the two tangent theorems and say which one makes the right triangle.
lines: 3
```

**In one breath:** Around a circle, label equal tangents from each vertex with the same letter; sides become sums of letters, and adding gives results such as $AB+CD=AD+BC$.
