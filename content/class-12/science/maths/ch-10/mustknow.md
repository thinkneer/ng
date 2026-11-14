# Ch 10 · Vector Algebra — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / find · `P` prove / show · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Unit vector perpendicular to two vectors; a vector perpendicular to two vectors with a given dot product. [2–3]
2. ★★★ `S` Area of a parallelogram or triangle from the cross product. [2–3]
3. ★★★ `S` `P` $\vec a+\vec b+\vec c=\vec0$ with given magnitudes: angle, or $\vec a\cdot\vec b+\vec b\cdot\vec c+\vec c\cdot\vec a$. [2–3]
4. ★★ `S` Projection; angle between vectors; $\lambda$ for perpendicular vectors. [1–2]
5. ★★ `S` Section formula, collinear points, right-angled triangle, unit vector along a direction. [1–2]

## Must-know lines and definitions

- **Position vector of $P(x,y,z)$:** $x\hat i+y\hat j+z\hat k$.
- **Vector from $A$ to $B$:** $\overrightarrow{AB}=\vec b-\vec a$ (end minus start).
- **Unit vector along $\vec a$:** $\hat a=\dfrac{\vec a}{|\vec a|}$.
- **Direction ratios of $a\hat i+b\hat j+c\hat k$:** $a$, $b$, $c$.
- **Direction cosines $l$, $m$, $n$:** satisfy $l^2+m^2+n^2=1$.
- **Collinear (parallel) vectors:** $\vec b=\lambda\vec a$; components proportional.
- **Perpendicular vectors:** $\vec a\cdot\vec b=0$.
- **Parallel vectors (cross-product test):** $\vec a\times\vec b=\vec0$.
- **Dot product gives:** a scalar.
- **Cross product gives:** a vector perpendicular to both.
- **Not in boards 2026–27:** scalar triple product.

## Key formulas

:::formula Section formula, internal division in $m:n$
$\dfrac{m\vec b+n\vec a}{m+n}$
:::

:::formula Dot product in components
$\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3=|\vec a||\vec b|\cos\theta$
:::

:::formula Angle between two vectors
$\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$
:::

:::formula Projection of $\vec a$ on $\vec b$
$\dfrac{\vec a\cdot\vec b}{|\vec b|}$
:::

:::formula $|\vec a+\vec b|^2$
$|\vec a|^2+2\,\vec a\cdot\vec b+|\vec b|^2$
:::

:::formula Cross product as a determinant
$\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}$
:::

:::formula Magnitude of the cross product
$|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$
:::

:::formula Area of a parallelogram with adjacent sides $\vec a$, $\vec b$
$|\vec a\times\vec b|$
:::

:::formula Area of a triangle with sides $\vec a$, $\vec b$
$\dfrac12|\vec a\times\vec b|$
:::

:::formula Area of a parallelogram with diagonals $\vec d_1$, $\vec d_2$
$\dfrac12|\vec d_1\times\vec d_2|$
:::

:::formula Unit vector perpendicular to $\vec a$ and $\vec b$
$\pm\dfrac{\vec a\times\vec b}{|\vec a\times\vec b|}$
:::

:::formula Lagrange's identity
$|\vec a\times\vec b|^2+(\vec a\cdot\vec b)^2=|\vec a|^2|\vec b|^2$
:::

:::formula If $\vec a+\vec b+\vec c=\vec0$, then $\vec a\cdot\vec b+\vec b\cdot\vec c+\vec c\cdot\vec a$
$-\dfrac12\left(|\vec a|^2+|\vec b|^2+|\vec c|^2\right)$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Unit vector perpendicular to two vectors (3 marks)
Form the two vectors [½] → cross product by determinant [1½] → its magnitude [½] → $\pm$ the vector divided by the magnitude [½].
:::

:::skeleton S · $\vec a+\vec b+\vec c=\vec0$ (3 marks)
$\vec a+\vec b=-\vec c$ [½] → square both sides: $|\vec a|^2+2\vec a\cdot\vec b+|\vec b|^2=|\vec c|^2$ [1] → substitute, find $\cos\theta$ [1] → $\theta$ [½].
:::

:::skeleton S · Area (2 marks)
Cross product by determinant [1] → magnitude (halve for a triangle), "sq. units" [1].
:::

:::skeleton P · Right-angled triangle (3 marks)
Form $\overrightarrow{AB}$, $\overrightarrow{BC}$, $\overrightarrow{CA}$ [1½] → show one dot product is 0 [1] → name the right angle [½].
:::

## Quick 1-mark facts (MCQ, A–R)

- $|\vec a|=10$, $|\vec b|=2$, $\vec a\cdot\vec b=12$; then $|\vec a\times\vec b|$: equals $16$.
- $|\vec a|=\sqrt3$, $|\vec b|=2$, $\vec a\cdot\vec b=\sqrt6$; the angle: is $\dfrac\pi4$.
- $|\vec a\cdot\vec b|=|\vec a\times\vec b|$; the angle: is $\dfrac\pi4$.
- $2\hat i+\lambda\hat j+\hat k\perp\hat i+2\hat j+3\hat k$ gives: $\lambda=-\dfrac52$.
- $x(\hat i+\hat j+\hat k)$ is a unit vector when: $x=\pm\dfrac{1}{\sqrt3}$.
- $\hat i\cdot(\hat j\times\hat k)+\hat j\cdot(\hat i\times\hat k)+\hat k\cdot(\hat i\times\hat j)$: equals $1$.
- Projection of $\hat i-\hat j$ on $\hat i+\hat j$: zero, as they are perpendicular.
- $|\vec a+\vec b|=|\vec a-\vec b|$ means: $\vec a\perp\vec b$.
- $\hat i\times\hat j$, $\hat j\times\hat k$, $\hat k\times\hat i$: are $\hat k$, $\hat i$, $\hat j$.
- $\hat i\cdot\hat i$ and $\hat i\cdot\hat j$: are $1$ and $0$.
- Direction cosines of a vector equally inclined to the axes: $\pm\dfrac{1}{\sqrt3}$ each.

## Mark-losing traps

:::tip Notation
No arrows or hats: the examiner reads a bare $a$ as a scalar.
:::

:::tip Projection
Projection of $\vec a$ on $\vec b$ divides by $|\vec b|$, not $|\vec a|$.
:::

:::tip Sign of the $\hat j$ term
In the cross-product determinant the middle term is $-\hat j(\dots)$.
:::

:::tip Two unit vectors
A unit vector perpendicular to two vectors has two answers; write $\pm$.
:::

:::tip Half for a triangle
Area of a triangle is $\frac12|\vec a\times\vec b|$; so is a parallelogram given by its diagonals.
:::
