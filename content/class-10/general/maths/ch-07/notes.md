# Ch 7 · Coordinate Geometry

Give every point two numbers and geometry turns into arithmetic: lengths, midpoints and "which shape is this?" all become calculations. The chapter has only two formulas, the distance formula and the section formula, and it carries 6 marks, usually as one MCQ, one 2- or 3-mark question and often a case study.

## A fly on the ceiling

A story often told, though nobody can confirm it, says that the French thinker René Descartes was lying in bed watching a fly walk across the ceiling. He realised he could describe exactly where the fly was with just two numbers: its distance from one wall and its distance from the next. Whether or not the fly was real, the idea was: in 1637 Descartes published the method of locating points by numbers, and the plane with two axes is still called the Cartesian plane after him.

You use the same idea every time a phone shows a blue dot on a map. The dot is two numbers, latitude and longitude, and the "distance to destination" is worked out from the coordinates of two points.

**In one breath:** Two numbers fix a point. Once points are numbers, distances and positions can be calculated instead of measured.

## Points and axes: a quick reset

A point is written $(x,y)$. The first number, the **abscissa**, is its distance from the $y$-axis; the second, the **ordinate**, is its distance from the $x$-axis.

- Every point on the $x$-axis has the form $(x,0)$.
- Every point on the $y$-axis has the form $(0,y)$.
- The origin is $(0,0)$.

:::tip Distance from an axis
The distance of $(3,-4)$ from the $x$-axis is 4 (the size of the $y$-coordinate), and from the $y$-axis it is 3. Students often swap these.
:::

**In one breath:** On the $x$-axis $y=0$; on the $y$-axis $x=0$. The distance of a point from the $x$-axis is its $y$-coordinate without the sign.

## The distance formula

Take two points $P(x_1,y_1)$ and $Q(x_2,y_2)$. Draw a horizontal line through $P$ and a vertical line through $Q$; they meet at $R$ and make a right triangle.

```ng-figure
id: distance-figure
title: Where the distance formula comes from
svg:
<svg viewBox="0 0 300 196" role="img" aria-label="Points P and Q on a coordinate plane with a right triangle PRQ whose legs are the differences of the coordinates" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M30,170 H288 M40,180 V16" stroke-width="1"/><text x="292" y="174" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="40" y="12" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">y</text><path d="M90,140 H240 V50" stroke-dasharray="5 4" stroke-width="1.2"/><path d="M226,140 V126 H240" stroke-width="1"/><path d="M90,140 L240,50" class="u" stroke-width="2"/><circle cx="90" cy="140" r="3" fill="currentColor"/><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="86" y="158" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">P(x₁, y₁)</text><text x="236" y="40" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">Q(x₂, y₂)</text><text x="252" y="156" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">R</text><text x="165" y="156" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">x₂ − x₁</text><text x="246" y="100" font-size="11" text-anchor="start" fill="currentColor" stroke="none">y₂ − y₁</text><text x="152" y="86" font-size="12" text-anchor="middle" fill="#E0B400" stroke="none">PQ</text></svg>
caption: PR and RQ are the differences of the coordinates; PQ is the hypotenuse.
part: 90, 140 | Point P | The first point, $(x_1,y_1)$.
part: 240, 50 | Point Q | The second point, $(x_2,y_2)$.
part: 165, 150 | Horizontal leg PR | Its length is the difference of the x-coordinates.
part: 250, 96 | Vertical leg RQ | Its length is the difference of the y-coordinates.
part: 152, 86 | Distance PQ | The hypotenuse: use the Pythagoras theorem.
```

By the Pythagoras theorem, $PQ^2=PR^2+RQ^2$.

:::formula Distance formula
$$PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$
Distance of $(x,y)$ from the origin $=\sqrt{x^2+y^2}$.
:::

```ng-mnemonic
id: pythagoras-in-disguise
title: The distance formula is not new
trick: **Across, up, Pythagoras**
meaning: Go **across** ($x_2-x_1$), go **up** ($y_2-y_1$); the straight-line distance is the hypotenuse.
prompt: Which theorem gives the distance formula, and what are the two legs?
```

```ng-derive
id: derive-distance-formula
title: Derive the distance formula
prompt: Derive the formula for the distance between $P(x_1,y_1)$ and $Q(x_2,y_2)$, with a figure.
time: 4
check: Figure with right triangle PRQ, right angle at R | 1
check: $PR=x_2-x_1$ and $RQ=y_2-y_1$ | 1
check: Pythagoras: $PQ^2=PR^2+RQ^2$, so $PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ | 1
```

:::skeleton Worked example: distance between two points (2 marks)
*Find the distance between $A(2,3)$ and $B(4,1)$.*

$AB=\sqrt{(4-2)^2+(1-3)^2}$ [1]

$=\sqrt{4+4}=\sqrt8=\boxed{2\sqrt2\ \text{units}}$ [1]
:::

Because the differences are squared, their order does not matter: $(1-3)^2=(3-1)^2$. But keep the brackets when a coordinate is negative: the difference between 5 and $-1$ is $5-(-1)=6$.

```ng-numerical
id: num-distance
title: Distance between two points
question: Find the distance between the points ({{a}}, {{b}}) and ({{a+p}}, {{b+q}}). Give your answer to 2 decimal places.
var: a | -4 | 4 | 1
var: b | -3 | 3 | 1
var: p | 2 | 9 | 1
var: q | 1 | 8 | 1
answer: sqrt(p^2+q^2)
unit: units
dp: 2
tol: 1
step: Difference of x-coordinates $={{p}}$; difference of y-coordinates $={{q}}$
step: Distance $=\sqrt{ {{p}}^2+{{q}}^2 }=\sqrt{ {{p^2+q^2}} }=$ **{{sqrt(p^2+q^2):2}} units**
```

```ng-draw
id: draw-distance-figure
title: Draw the figure for the distance formula
svg: ref: notes#distance-figure
time: 3
```

**In one breath:** The distance between two points is the hypotenuse of a right triangle whose legs are the differences of the coordinates.

## Using distances: equidistant points, collinear points, shapes

Most distance questions are one of three kinds.

**1. A point equidistant from two points.** Write the unknown point, set the two distances equal and square both sides.

:::skeleton Worked example: equidistant point on an axis (3 marks)
*Find the point on the $y$-axis that is equidistant from $A(4,3)$ and $B(-2,5)$.*

Let the point be $P(0,y)$. Then $PA=PB$, so $PA^2=PB^2$. [1]

$(0-4)^2+(y-3)^2=(0+2)^2+(y-5)^2$

$16+y^2-6y+9=4+y^2-10y+25$ [1]

$4y=4$, so $y=1$. The point is $\boxed{(0,1)}$. [1]
:::

:::tip Square first
Write $PA^2=PB^2$ at once. Carrying square roots through the working wastes time and invites slips.
:::

**2. Collinear points.** Three points $A$, $B$, $C$ lie on one line if the two shorter distances add up to the longest: $AB+BC=AC$.

**3. Naming a shape.** Find all the sides, and the diagonals when needed, and compare.

```ng-fill
id: fill-shape-tests
title: Which quadrilateral is it?
cols: Shape | Sides | Diagonals
row: Parallelogram | [[opposite sides equal]] | need not be equal
row: Rectangle | opposite sides equal | [[equal]]
row: Rhombus | [[all four equal]] | [[not equal]]
row: Square | all four equal | [[equal]]
```

:::skeleton Worked example: which quadrilateral? (3 marks)
*Show that $A(1,1)$, $B(4,5)$, $C(9,5)$ and $D(6,1)$ are the vertices of a rhombus. Is it a square?*

$AB=\sqrt{9+16}=5$, $\ BC=\sqrt{25+0}=5$, $\ CD=\sqrt{9+16}=5$, $\ DA=\sqrt{25+0}=5$ [1½]

All four sides are equal, so ABCD is a rhombus. [½]

$AC=\sqrt{64+16}=\sqrt{80}$, $\ BD=\sqrt{4+16}=\sqrt{20}$: the diagonals are not equal, so it is **not** a square. [1]
:::

For triangles: two equal sides make it isosceles, three make it equilateral, and if the square of the longest side equals the sum of the squares of the other two, it is right-angled.

```ng-steps
id: steps-name-the-shape
title: Naming a shape from its vertices
step: **Take the vertices in the order given** and find the four sides with the distance formula.
step: **Compare the sides:** all equal (rhombus or square), or only opposite sides equal (parallelogram or rectangle).
step: **Find the two diagonals** and compare them: equal diagonals turn a rhombus into a square and a parallelogram into a rectangle.
step: **Write the conclusion with the reason:** "all sides equal and diagonals equal, so ABCD is a square".
```

**In one breath:** Equidistant: equate squared distances. Collinear: two distances add up to the third. Shapes: compare sides first, then diagonals.

## The section formula

Now the opposite problem: not how far apart two points are, but **where** a point between them lies. Suppose $P(x,y)$ divides the segment joining $A(x_1,y_1)$ and $B(x_2,y_2)$ **internally** in the ratio $m:n$, that is, $AP:PB=m:n$.

```ng-figure
id: section-figure
title: A point dividing a segment in the ratio m : n
svg:
<svg viewBox="0 0 300 196" role="img" aria-label="Point P dividing the segment AB internally in the ratio m to n" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M30,170 H288 M40,180 V16" stroke-width="1"/><text x="292" y="174" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="40" y="12" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">y</text><path d="M60,138 L260,38" class="u" stroke-width="2"/><circle cx="60" cy="138" r="3" fill="currentColor"/><circle cx="260" cy="38" r="3" fill="currentColor"/><circle cx="180" cy="78" r="4" fill="#E0B400" stroke="none"/><text x="76" y="157" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">A(x₁, y₁)</text><text x="250" y="28" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">B(x₂, y₂)</text><text x="170" y="68" font-size="11" text-anchor="end" fill="currentColor" stroke="none">P(x, y)</text><text x="128" y="122" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">m</text><text x="228" y="74" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">n</text></svg>
caption: P divides AB internally so that AP : PB = m : n.
part: 60, 138 | Point A | The first end, $(x_1,y_1)$. It is multiplied by n, the far part of the ratio.
part: 260, 38 | Point B | The second end, $(x_2,y_2)$. It is multiplied by m.
part: 180, 78 | Point P | The dividing point, nearer to the end with the smaller ratio part.
part: 128, 118 | Part m | The length AP is m parts.
part: 228, 70 | Part n | The length PB is n parts.
```

:::formula Section formula (internal division)
$$\begin{aligned}x&=\frac{mx_2+nx_1}{m+n}\\[4pt] y&=\frac{my_2+ny_1}{m+n}\end{aligned}$$
:::

```ng-mnemonic
id: cross-multiply-section
title: Which number multiplies which point?
trick: **Each ratio part multiplies the far point**
meaning: $m$ sits next to $A$ but multiplies $B$'s coordinates; $n$ sits next to $B$ but multiplies $A$'s. Draw the cross once and you will not mix them up.
prompt: In the section formula, which point's coordinates does m multiply?
```

:::skeleton Worked example: find the dividing point (2 marks)
*Find the point that divides the join of $A(1,-2)$ and $B(6,8)$ in the ratio $2:3$.*

$x=\dfrac{2(6)+3(1)}{2+3}=\dfrac{15}{5}=3$ [1]

$y=\dfrac{2(8)+3(-2)}{2+3}=\dfrac{10}{5}=2$, so the point is $\boxed{(3,2)}$ [1]
:::

With $m=n=1$ the point is the middle of the segment.

:::formula Midpoint formula
$$\left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right)$$
:::

**Finding the ratio.** When the question asks "in what ratio does this point (or this axis) divide the segment?", take the ratio as $k:1$. That leaves one unknown.

:::skeleton Worked example: ratio in which an axis divides a segment (3 marks)
*Find the ratio in which the $x$-axis divides the segment joining $A(2,-3)$ and $B(5,6)$. Also find the point of division.*

Let the ratio be $k:1$. A point on the $x$-axis has $y=0$. [½]

$\dfrac{6k+(-3)}{k+1}=0\Rightarrow6k=3\Rightarrow k=\dfrac12$, so the ratio is $\boxed{1:2}$. [1½]

$x=\dfrac{1(5)+2(2)}{1+2}=3$, so the point is $\boxed{(3,0)}$. [1]
:::

**Trisection.** The two points that cut a segment into three equal parts divide it in the ratios $1:2$ and $2:1$.

**Parallelograms.** The diagonals of a parallelogram bisect each other, so the midpoint of $AC$ equals the midpoint of $BD$. That finds a missing vertex.

:::skeleton Worked example: fourth vertex of a parallelogram (3 marks)
*$A(1,2)$, $B(4,3)$ and $C(6,6)$ are three vertices of a parallelogram $ABCD$. Find $D$.*

Let $D=(x,y)$. Midpoint of $AC$ = midpoint of $BD$. [1]

$\left(\dfrac{1+6}{2},\dfrac{2+6}{2}\right)=\left(\dfrac{4+x}{2},\dfrac{3+y}{2}\right)$ [1]

$4+x=7$ and $3+y=8$, so $D=\boxed{(3,5)}$ [1]
:::

```ng-explain
id: explain-k-to-one
prompt: In two lines, explain why we take the ratio as k : 1 when a ratio is asked, and what a negative k would mean.
lines: 2
answer: Taking k : 1 leaves a single unknown, found from one coordinate. A negative k means the point does not lie between the two given points (it is outside the segment).
```

**In one breath:** The dividing point is a weighted average: each ratio part multiplies the far end. Midpoint is the $1:1$ case; for an unknown ratio use $k:1$.

## What is not in boards

The formula for the **area of a triangle** from the coordinates of its vertices (and its use to test collinearity) is not in the current book. Test collinear points with distances.

**In one breath:** Two formulas only: distance and section (with midpoint). No area-of-triangle formula.
