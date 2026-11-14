# Ch 11 · Three Dimensional Geometry — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / find · `P` prove / show · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Shortest distance between two skew lines (vector or Cartesian form). [3–5]
2. ★★★ `S` Foot of the perpendicular from a point to a line; its length; image of the point. [3–5]
3. ★★ `S` Angle between two lines; value of $p$ for perpendicular lines. [2]
4. ★★ `S` Equation of a line through a point parallel to a vector, through two points, or perpendicular to two lines. [2–3]
5. ★★ `P` Show two lines intersect and find the point. [3–5]
6. ★★ `S` Distance between two parallel lines. [3]

## Must-know lines and definitions

- **Direction cosines:** $l=\cos\alpha$, $m=\cos\beta$, $n=\cos\gamma$, with $l^2+m^2+n^2=1$.
- **Direction ratios:** any three numbers proportional to the direction cosines.
- **Direction ratios of the line through two points:** $x_2-x_1$, $y_2-y_1$, $z_2-z_1$.
- **Skew lines:** neither parallel nor intersecting.
- **Shortest distance between skew lines:** length of the segment perpendicular to both.
- **Lines intersect when:** they are not parallel and the shortest distance is zero.
- **Image of $P$ in a line:** $P'$ with the foot $Q$ as mid-point of $PP'$, so $P'=2Q-P$.
- **Standard form of a line:** coefficients of $x$, $y$, $z$ in the numerators are $+1$.
- **A line meets the $xy$-plane where:** $z=0$.
- **Not in boards 2026–27:** planes.

## Key formulas

:::formula Vector equation of a line
$\vec r=\vec a+\lambda\vec b$
:::

:::formula Cartesian equation of a line
$\dfrac{x-x_1}{a}=\dfrac{y-y_1}{b}=\dfrac{z-z_1}{c}$
:::

:::formula Line through two points (vector form)
$\vec r=\vec a+\lambda(\vec b-\vec a)$
:::

:::formula General point on $\dfrac{x-x_1}{a}=\dfrac{y-y_1}{b}=\dfrac{z-z_1}{c}$
$(x_1+a\lambda,\ y_1+b\lambda,\ z_1+c\lambda)$
:::

:::formula Angle between two lines
$\cos\theta=\dfrac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}$
:::

:::formula Condition for perpendicular lines
$a_1a_2+b_1b_2+c_1c_2=0$
:::

:::formula Condition for parallel lines
$\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}$
:::

:::formula Shortest distance between skew lines
$d=\left|\dfrac{(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)}{|\vec b_1\times\vec b_2|}\right|$
:::

:::formula Distance between parallel lines
$d=\dfrac{|\vec b\times(\vec a_2-\vec a_1)|}{|\vec b|}$
:::

:::formula Direction cosines from direction ratios $a$, $b$, $c$
$\pm\dfrac{a}{\sqrt{a^2+b^2+c^2}},\ \pm\dfrac{b}{\sqrt{a^2+b^2+c^2}},\ \pm\dfrac{c}{\sqrt{a^2+b^2+c^2}}$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Shortest distance between skew lines (5 marks)
Identify $\vec a_1$, $\vec b_1$, $\vec a_2$, $\vec b_2$ (standard form first) [1] → $\vec a_2-\vec a_1$ [½] → $\vec b_1\times\vec b_2$ and its magnitude [1½] → formula [½] → substitute, modulus, "units" [1½].
:::

:::skeleton S · Foot of perpendicular and image (5 marks)
General point $Q$ in terms of $\lambda$ [1] → direction ratios of $PQ$ [1] → $PQ\perp$ line, solve for $\lambda$ [1] → foot $Q$ (and length $PQ$) [1] → image $P'=2Q-P$ [1].
:::

:::skeleton P · Do the lines intersect? (3 marks)
General points with $\lambda$ and $\mu$ [1] → equate two coordinates, solve [1] → check the third coordinate; state the point [1].
:::

:::skeleton S · Distance between parallel lines (3 marks)
$\vec a_2-\vec a_1$ and the common $\vec b$ [½] → $\vec b\times(\vec a_2-\vec a_1)$ [1½] → divide its magnitude by $|\vec b|$ [1].
:::

## Quick 1-mark facts (MCQ, A–R)

- Direction cosines of the $x$-axis: $1,0,0$.
- Line making $90^\circ$, $135^\circ$, $45^\circ$ with the axes: $0,\ -\dfrac{1}{\sqrt2},\ \dfrac{1}{\sqrt2}$.
- Line equally inclined to the axes: $\pm\dfrac{1}{\sqrt3}$ each.
- $\cos^2\alpha+\cos^2\beta+\cos^2\gamma$: equals $1$.
- $\sin^2\alpha+\sin^2\beta+\sin^2\gamma$: equals $2$.
- The numbers $1,1,1$: can be direction ratios but not direction cosines.
- Distance of $(a,b,c)$ from the $x$-axis: $\sqrt{b^2+c^2}$.
- Distance of $(a,b,c)$ from the $y$-axis: $\sqrt{a^2+c^2}$.
- Direction ratios of $3x-1=6y+2=1-z$: $2,\ 1,\ -6$.
- Equations of the $x$-axis: $y=0$, $z=0$.
- Vector form of $\dfrac{x-5}{3}=\dfrac{y+4}{7}=\dfrac{z-6}{2}$: $\vec r=5\hat i-4\hat j+6\hat k+\lambda(3\hat i+7\hat j+2\hat k)$.

## Mark-losing traps

:::tip Standard form
Read direction ratios only after rewriting $1-x$, $2x-1$, $7y-14$ with coefficient $+1$.
:::

:::tip Sign of the point
$\dfrac{x+1}{7}$ means $x_1=-1$, not $+1$.
:::

:::tip Parallel lines
If $\vec b_1\times\vec b_2=\vec0$ the skew-line formula gives $\frac00$; use the parallel-line formula.
:::

:::tip Image versus foot
The image is $2Q-P$, not the foot $Q$ itself.
:::

:::tip Third coordinate
In an intersection proof, the check of the third coordinate is the proof; do not skip it.
:::
