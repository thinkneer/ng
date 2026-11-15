# Ch 10 · Vector Algebra

Some quantities are fully described by a number: mass, time, temperature. Others also need a direction: a displacement of 4 km *west*, a force of 10 N *downwards*. Those are vectors. This chapter sets up the algebra of vectors and then introduces two ways of multiplying them: the dot product, which measures how far two vectors point the same way, and the cross product, which produces a new vector perpendicular to both. Almost every board question here uses one of those two products.

## Vectors, magnitude and direction

In three dimensions every vector can be written in terms of the unit vectors $\hat i$, $\hat j$, $\hat k$ along the axes. The **position vector** of a point $P(x,y,z)$ is $\overrightarrow{OP}=x\hat i+y\hat j+z\hat k$, and its **magnitude** is $|\overrightarrow{OP}|=\sqrt{x^2+y^2+z^2}$.

The vector from a point $A$ to a point $B$ is "end minus start": $\overrightarrow{AB}=\vec b-\vec a$, where $\vec a$ and $\vec b$ are the position vectors of $A$ and $B$.

A **unit vector** has magnitude 1. To get the unit vector in the direction of $\vec a$, divide $\vec a$ by its own magnitude: $\hat a=\dfrac{\vec a}{|\vec a|}$. A vector of magnitude $k$ in that direction is then $k\hat a$.

:::skeleton Worked example: unit vector along a sum (2 marks)
*Find the unit vector in the direction of $\vec a+\vec b$, where $\vec a=2\hat i-\hat j+2\hat k$ and $\vec b=-\hat i+\hat j-\hat k$.*

$\vec a+\vec b=\hat i+0\hat j+\hat k$, and $|\vec a+\vec b|=\sqrt{1+0+1}=\sqrt2$ [1]

Unit vector $=\dfrac{\vec a+\vec b}{|\vec a+\vec b|}=\boxed{\dfrac{1}{\sqrt2}(\hat i+\hat k)}$ [1]
:::

The numbers $a$, $b$, $c$ in $a\hat i+b\hat j+c\hat k$ are its **direction ratios**. Dividing each by the magnitude gives the **direction cosines** $l$, $m$, $n$, which always satisfy $l^2+m^2+n^2=1$. Two vectors are **parallel** (collinear) when one is a scalar multiple of the other, that is, when their components are proportional.

:::tip Arrows and hats
Write the arrow on every vector and the hat on $\hat i$, $\hat j$, $\hat k$. A bare letter $a$ means a scalar, and examiners deduct for it.
:::

```ng-numerical
id: num-magnitude
title: Magnitude of a vector
question: Find the magnitude of the vector ${{a}}\hat i+{{b}}\hat j-{{c}}\hat k$.
var: a | 1 | 6 | 1
var: b | 1 | 6 | 1
var: c | 1 | 6 | 1
answer: sqrt(a^2+b^2+c^2)
dp: 3
step: $\lvert\vec a\rvert=\sqrt{a_1^2+a_2^2+a_3^2}=\sqrt{\,{{a^2:0}}+{{b^2:0}}+{{c^2:0}}\,}$
step: $=\sqrt{\,{{a^2+b^2+c^2:0}}\,}=$ **{{sqrt(a^2+b^2+c^2):3}}**
```

```ng-mnemonic
id: divide-by-your-own-size
title: Unit vector
trick: **Divide by your own size**
meaning: $\hat a=\dfrac{\vec a}{\lvert\vec a\rvert}$: same direction, magnitude 1.
meaning: A vector of magnitude $m$ along $\vec a$ is $m\,\hat a$. The components of $\hat a$ are the direction cosines.
prompt: How do you get the unit vector along a given vector?
```

**In one breath:** $\overrightarrow{AB}=\vec b-\vec a$; magnitude is the root of the sum of squares; unit vector is the vector divided by its magnitude.

## Section formula

If $A$ and $B$ have position vectors $\vec a$ and $\vec b$, the point dividing $AB$ in the ratio $m:n$ has a position vector that is a weighted average of the two.

:::formula Section formula
Internal division: $\dfrac{m\vec b+n\vec a}{m+n}$   External division: $\dfrac{m\vec b-n\vec a}{m-n}$   Mid-point: $\dfrac{\vec a+\vec b}{2}$
:::

:::skeleton Worked example: section formula (2 marks)
*Find the position vector of the point $R$ which divides the line joining $P(\hat i+2\hat j-\hat k)$ and $Q(-\hat i+\hat j+\hat k)$ internally in the ratio $2:1$.*

$\overrightarrow{OR}=\dfrac{2(-\hat i+\hat j+\hat k)+1(\hat i+2\hat j-\hat k)}{2+1}$ [1]

$=\boxed{-\dfrac13\hat i+\dfrac43\hat j+\dfrac13\hat k}$ [1]
:::

Notice that $m$ multiplies the *far* point $\vec b$: the ratio $2:1$ measured from $P$ puts the weight 2 on $Q$.

**In one breath:** For a ratio $m:n$, cross-multiply: $m$ goes with $\vec b$ and $n$ with $\vec a$, divided by $m+n$.

## The dot product

The **scalar** or **dot product** of two vectors is a number:

:::formula Dot product
$$\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2+a_3b_3$$
:::

The first form tells you what it means; the second is how you compute it. Putting them together gives the angle between two vectors, $\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$. Three consequences are used all the time:

- $\vec a\perp\vec b$ exactly when $\vec a\cdot\vec b=0$ (for non-zero vectors).
- $\vec a\cdot\vec a=|\vec a|^2$.
- $|\vec a+\vec b|^2=|\vec a|^2+2\,\vec a\cdot\vec b+|\vec b|^2$, just like $(a+b)^2$.

The **projection** of $\vec a$ on $\vec b$ is the length of the shadow $\vec a$ casts along $\vec b$: $\dfrac{\vec a\cdot\vec b}{|\vec b|}$.

:::skeleton Worked example: projection (2 marks)
*Find the projection of $\vec a=2\hat i+3\hat j+2\hat k$ on $\vec b=\hat i+2\hat j+\hat k$.*

$\vec a\cdot\vec b=2+6+2=10$ and $|\vec b|=\sqrt{1+4+1}=\sqrt6$ [1]

Projection $=\dfrac{\vec a\cdot\vec b}{|\vec b|}=\dfrac{10}{\sqrt6}=\boxed{\dfrac{5\sqrt6}{3}}$ [1]
:::

:::tip Which magnitude divides
The projection of $\vec a$ on $\vec b$ is divided by $|\vec b|$, the vector being projected *onto*. Dividing by $|\vec a|$ is a very common slip.
:::

A favourite short question gives three vectors that add up to zero.

:::skeleton Worked example: $\vec a+\vec b+\vec c=\vec0$ (3 marks)
*If $\vec a+\vec b+\vec c=\vec0$ and $|\vec a|=3$, $|\vec b|=5$, $|\vec c|=7$, find the angle between $\vec a$ and $\vec b$.*

$\vec a+\vec b=-\vec c$, so $|\vec a+\vec b|^2=|\vec c|^2$ [½]

$|\vec a|^2+2\,\vec a\cdot\vec b+|\vec b|^2=|\vec c|^2$ [1]

$9+2(3)(5)\cos\theta+25=49$, so $\cos\theta=\dfrac12$ [1]

$\theta=\boxed{\dfrac\pi3}$ [½]
:::

```ng-mnemonic
id: dot-cos-cross-sin
title: Dot or cross?
trick: **Dot goes with cos, cross goes with sin**
meaning: Dot: $\lvert\vec a\rvert\lvert\vec b\rvert\cos\theta$, a **number**; zero when the vectors are **perpendicular**.
meaning: Cross: magnitude $\lvert\vec a\rvert\lvert\vec b\rvert\sin\theta$, a **vector**; zero when the vectors are **parallel**.
prompt: Which product is zero for perpendicular vectors, and which for parallel vectors?
```

```ng-numerical
id: num-perpendicular-lambda
title: Make two vectors perpendicular
question: Find $\lambda$ if the vectors ${{a}}\hat i+\lambda\hat j+{{c}}\hat k$ and ${{d}}\hat i+{{e}}\hat j+{{f}}\hat k$ are perpendicular.
var: a | 1 | 4 | 1
var: c | 1 | 4 | 1
var: d | 1 | 3 | 1
var: e | 1 | 4 | 1
var: f | 1 | 3 | 1
answer: -(a*d+c*f)/e
dp: 2
step: Perpendicular vectors: $\vec a\cdot\vec b=0$.
step: $({{a}})({{d}})+\lambda({{e}})+({{c}})({{f}})=0\Rightarrow{{e}}\lambda=-{{a*d+c*f:0}}$
step: $\lambda=$ **{{-(a*d+c*f)/e:2}}**
```

```ng-derive
id: derive-sum-zero-angle
title: Three vectors adding to zero
prompt: If $\vec a+\vec b+\vec c=\vec0$ and $\lvert\vec a\rvert=3$, $\lvert\vec b\rvert=5$, $\lvert\vec c\rvert=7$, find the angle between $\vec a$ and $\vec b$.
time: 4
check: $\vec a+\vec b=-\vec c$ | 0.5
check: Square both sides: $\lvert\vec a\rvert^2+2\,\vec a\cdot\vec b+\lvert\vec b\rvert^2=\lvert\vec c\rvert^2$ | 1
check: $9+2(3)(5)\cos\theta+25=49\Rightarrow\cos\theta=\dfrac12$ | 1
check: $\theta=\dfrac\pi3$ | 0.5
```

**In one breath:** Dot product = multiply matching components and add. It gives angles, perpendicularity (dot = 0), magnitudes ($\vec a\cdot\vec a=|\vec a|^2$) and projections (divide by $|\vec b|$).

## The cross product

The **vector** or **cross product** $\vec a\times\vec b$ is a vector. Its magnitude is $|\vec a||\vec b|\sin\theta$ and its direction is perpendicular to both $\vec a$ and $\vec b$. It is computed as a determinant.

:::formula Cross product
$$\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}$$
$\vec a\times\vec b=-\,\vec b\times\vec a$   $\vec a\times\vec a=\vec0$   $\vec a\parallel\vec b\iff\vec a\times\vec b=\vec0$
:::

Its two uses match its two properties. Because it is perpendicular to both vectors, it gives a vector (or unit vector) perpendicular to a pair. Because its magnitude is $|\vec a||\vec b|\sin\theta$, it gives areas.

<figure class="fig" id="ch10-parallelogram">
<svg viewBox="0 0 320 170" role="img" aria-label="Parallelogram with adjacent sides vector a and vector b, angle theta between them and height b sine theta">
<polygon points="50,140 210,140 270,50 110,50" fill="#C2571A" opacity="0.18"/>
<line x1="50" y1="140" x2="210" y2="140" stroke="#C2571A" stroke-width="2.5"/><polygon points="210,140 198,134 198,146" fill="#C2571A"/>
<line x1="50" y1="140" x2="110" y2="50" stroke="#C2571A" stroke-width="2.5"/><polygon points="110,50 98.5,56.5 108.5,63.2" fill="#C2571A"/>
<line x1="110" y1="50" x2="270" y2="50" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="210" y1="140" x2="270" y2="50" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="110" y1="50" x2="110" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
<path d="M72,140 A22,22 0 0 0 62.2,121.7" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="125" y="158" font-size="12" fill="currentColor">a (base |a|)</text><text x="46" y="92" font-size="12" fill="currentColor">b</text><text x="78" y="132" font-size="12" fill="currentColor">θ</text><text x="114" y="100" font-size="11" fill="currentColor">|b| sin θ</text><text x="160" y="30" font-size="12" fill="#C2571A">area = |a × b|</text>
</svg>
<figcaption>The parallelogram on a and b has base |a| and height |b| sin θ, so its area is |a||b| sin θ = |a × b|.</figcaption>
</figure>

:::formula Areas from the cross product
Parallelogram with adjacent sides $\vec a$, $\vec b$: $|\vec a\times\vec b|$<br>
Triangle with sides $\vec a$, $\vec b$: $\dfrac12|\vec a\times\vec b|$   Parallelogram with diagonals $\vec d_1$, $\vec d_2$: $\dfrac12|\vec d_1\times\vec d_2|$
:::

:::skeleton Worked example: area of a parallelogram (2 marks)
*Find the area of the parallelogram whose adjacent sides are $\vec a=\hat i-\hat j+3\hat k$ and $\vec b=2\hat i-7\hat j+\hat k$.*

$\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\1&-1&3\\2&-7&1\end{vmatrix}=\hat i(-1+21)-\hat j(1-6)+\hat k(-7+2)=20\hat i+5\hat j-5\hat k$ [1]

Area $=|\vec a\times\vec b|=\sqrt{400+25+25}=\sqrt{450}=\boxed{15\sqrt2\text{ sq. units}}$ [1]
:::

:::skeleton Worked example: a vector perpendicular to two others, with a condition (3 marks)
*Let $\vec a=\hat i+4\hat j+2\hat k$, $\vec b=3\hat i-2\hat j+7\hat k$ and $\vec c=2\hat i-\hat j+4\hat k$. Find a vector $\vec d$ which is perpendicular to both $\vec a$ and $\vec b$ and satisfies $\vec c\cdot\vec d=15$.*

$\vec d$ is parallel to $\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\1&4&2\\3&-2&7\end{vmatrix}=32\hat i-\hat j-14\hat k$, so $\vec d=\lambda(32\hat i-\hat j-14\hat k)$ [1½]

$\vec c\cdot\vec d=\lambda(64+1-56)=9\lambda=15$, so $\lambda=\dfrac53$ [1]

$\vec d=\boxed{\dfrac13(160\hat i-5\hat j-70\hat k)}$ [½]
:::

:::tip The middle term
When expanding the determinant, the $\hat j$ term carries a minus sign. Write "$-\hat j(\dots)$" explicitly every time.
:::

If a question asks for a *unit* vector perpendicular to two vectors, there are two answers: $\pm\dfrac{\vec a\times\vec b}{|\vec a\times\vec b|}$.

The scalar triple product is not in the 2026–27 syllabus.

```ng-compare
id: dot-vs-cross
title: Dot product vs cross product
cols: Dot product $\vec a\cdot\vec b$ | Cross product $\vec a\times\vec b$
row: Result | a scalar | a vector perpendicular to both
row: Size | $\lvert\vec a\rvert\lvert\vec b\rvert\cos\theta$ | $\lvert\vec a\rvert\lvert\vec b\rvert\sin\theta$
row: In components | $a_1b_1+a_2b_2+a_3b_3$ | a $3\times3$ determinant with $\hat i,\hat j,\hat k$ in row 1
row: Order | $\vec a\cdot\vec b=\vec b\cdot\vec a$ | $\vec a\times\vec b=-\,\vec b\times\vec a$
row: Zero when | $\vec a\perp\vec b$ | $\vec a\parallel\vec b$
row: Used for | angle, projection, perpendicularity | area, a perpendicular vector
```

```ng-steps
id: steps-cross-product
title: Cross product and area
step: Write the determinant with $\hat i,\hat j,\hat k$ in row 1, the components of $\vec a$ in row 2 and of $\vec b$ in row 3.
step: Expand along row 1. Mind the minus sign on the $\hat j$ term.
step: Find the magnitude of the resulting vector.
step: Parallelogram with adjacent sides $\vec a$, $\vec b$: area = that magnitude. Triangle: half of it. Diagonals given: $\dfrac12\lvert\vec d_1\times\vec d_2\rvert$.
```

```ng-draw
id: draw-parallelogram
title: Draw the parallelogram on a and b
svg: ref: notes#ch10-parallelogram
time: 2
```

**In one breath:** Cross product by determinant gives a vector perpendicular to both; its magnitude is the area of the parallelogram. Halve it for a triangle.
