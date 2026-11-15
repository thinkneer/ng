# Ch 11 · Three Dimensional Geometry

Vectors come into their own in space. With them, a straight line in three dimensions is described by just two things, a point it passes through and a direction it runs in, and questions about angles and distances between lines reduce to dot and cross products. In the 2026–27 syllabus this chapter is about lines only (planes are not in boards), and it carries about 9 marks, usually including a 5-marker or a case study on shortest distance or the foot of a perpendicular.

## Direction cosines and direction ratios

If a line makes angles $\alpha$, $\beta$, $\gamma$ with the $x$-, $y$- and $z$-axes, its **direction cosines** are $l=\cos\alpha$, $m=\cos\beta$, $n=\cos\gamma$, and they always satisfy

$$l^2+m^2+n^2=1$$

Any three numbers $a$, $b$, $c$ proportional to $l$, $m$, $n$ are **direction ratios** of the line. Direction ratios are easier to find, and you convert them to direction cosines by dividing by $\sqrt{a^2+b^2+c^2}$. For a line through two points, the direction ratios are simply the differences of the coordinates.

:::skeleton Worked example: direction cosines of a line through two points (2 marks)
*Find the direction cosines of the line passing through $(-2,4,-5)$ and $(1,2,3)$.*

Direction ratios: $1-(-2),\ 2-4,\ 3-(-5)$, that is $3,\ -2,\ 8$ [1]

$\sqrt{9+4+64}=\sqrt{77}$, so the direction cosines are $\boxed{\dfrac{3}{\sqrt{77}},\ \dfrac{-2}{\sqrt{77}},\ \dfrac{8}{\sqrt{77}}}$ [1]
:::

A line equally inclined to the three axes has $l=m=n$, so $3l^2=1$ and each direction cosine is $\pm\dfrac{1}{\sqrt3}$.

```ng-mnemonic
id: ratios-to-cosines
title: Direction ratios to direction cosines
trick: **Divide by the root of the sum of squares**
meaning: $l,m,n=\dfrac{a}{\sqrt{a^2+b^2+c^2}},\ \dfrac{b}{\sqrt{a^2+b^2+c^2}},\ \dfrac{c}{\sqrt{a^2+b^2+c^2}}$.
meaning: Direction cosines obey $l^2+m^2+n^2=1$; direction ratios can be any proportional numbers.
prompt: How do you turn direction ratios a, b, c into direction cosines?
```

```ng-numerical
id: num-distance-from-axis
title: Distance of a point from an axis
question: Find the distance of the point $({{a}},{{b}},{{c}})$ from the $x$-axis.
var: a | 1 | 6 | 1
var: b | 1 | 6 | 1
var: c | 1 | 6 | 1
answer: sqrt(b^2+c^2)
unit: units
dp: 3
step: The foot of the perpendicular on the $x$-axis is $({{a}},0,0)$.
step: Distance $=\sqrt{\,{{b}}^2+{{c}}^2}=\sqrt{\,{{b^2+c^2:0}}\,}=$ **{{sqrt(b^2+c^2):3}} units**
```

**In one breath:** Direction ratios are any numbers proportional to the direction; divide by $\sqrt{a^2+b^2+c^2}$ to get direction cosines, whose squares add to 1.

## Equation of a line

A line is fixed by a point on it, with position vector $\vec a$, and a vector $\vec b$ parallel to it. Every point of the line is reached by starting at $\vec a$ and moving some multiple $\lambda$ of $\vec b$.

:::formula Equation of a line
Vector form: $\vec r=\vec a+\lambda\vec b$<br>
Cartesian form: $\dfrac{x-x_1}{a}=\dfrac{y-y_1}{b}=\dfrac{z-z_1}{c}$, through $(x_1,y_1,z_1)$ with direction ratios $a$, $b$, $c$<br>
Through two points: $\vec r=\vec a+\lambda(\vec b-\vec a)$
:::

:::skeleton Worked example: both forms (2 marks)
*Find the vector and Cartesian equations of the line through the point $(5,2,-4)$ which is parallel to the vector $3\hat i+2\hat j-8\hat k$.*

Vector form: $\vec r=(5\hat i+2\hat j-4\hat k)+\lambda(3\hat i+2\hat j-8\hat k)$ [1]

Cartesian form: $\boxed{\dfrac{x-5}{3}=\dfrac{y-2}{2}=\dfrac{z+4}{-8}}$ [1]
:::

Setting the Cartesian form equal to $\lambda$ gives the **general point** on the line: $(x_1+a\lambda,\ y_1+b\lambda,\ z_1+c\lambda)$. That general point is the key to almost every longer question.

:::tip Standard form first
Read the point and direction ratios only after each numerator is in the form $x-x_1$. For example $\dfrac{1-x}{3}=\dfrac{7y-14}{2p}=\dfrac{z-3}{2}$ must be rewritten as $\dfrac{x-1}{-3}=\dfrac{y-2}{2p/7}=\dfrac{z-3}{2}$, so its direction ratios are $-3,\ \dfrac{2p}{7},\ 2$.
:::

```ng-fill
id: fill-read-the-line
title: Read the point and the direction ratios
cols: Line | Point on it | Direction ratios
row: $\dfrac{x-1}{2}=\dfrac{y+3}{4}=\dfrac{z-5}{-1}$ | [[$(1,-3,5)$]] | [[$2,\ 4,\ -1$]]
row: $\dfrac{1-x}{3}=\dfrac{y-2}{2}=\dfrac z5$ | [[$(1,2,0)$]] | [[$-3,\ 2,\ 5$]]
row: $3x-1=6y+2=1-z$ | [[$\left(\dfrac13,-\dfrac13,1\right)$]] | [[$2,\ 1,\ -6$]]
row: $\vec r=(2\hat i-\hat j)+\lambda(\hat i+\hat j-3\hat k)$ | [[$(2,-1,0)$]] | [[$1,\ 1,\ -3$]]
```

**In one breath:** A line is a point plus a direction: $\vec r=\vec a+\lambda\vec b$. In Cartesian form the denominators are the direction ratios, once the coefficients of $x$, $y$, $z$ are $+1$.

## Angle between two lines

The angle between two lines is the angle between their directions, so only $\vec b_1$ and $\vec b_2$ matter. The angle is taken to be acute, hence the modulus.

:::formula Angle between two lines
$$\cos\theta=\frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}=\frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}$$
Perpendicular lines: $a_1a_2+b_1b_2+c_1c_2=0$   Parallel lines: $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}$
:::

:::skeleton Worked example: angle between two lines (2 marks)
*Find the angle between the lines $\dfrac x2=\dfrac y2=\dfrac z1$ and $\dfrac{x-5}{4}=\dfrac{y-2}{1}=\dfrac{z-3}{8}$.*

Direction ratios: $2,2,1$ and $4,1,8$. $\cos\theta=\dfrac{|2(4)+2(1)+1(8)|}{\sqrt{4+4+1}\,\sqrt{16+1+64}}$ [1]

$=\dfrac{18}{3\times9}=\dfrac23$, so $\theta=\boxed{\cos^{-1}\dfrac23}$ [1]
:::

:::skeleton Worked example: perpendicular lines (2 marks)
*Find $p$ so that the lines $\dfrac{1-x}{3}=\dfrac{7y-14}{2p}=\dfrac{z-3}{2}$ and $\dfrac{7-7x}{3p}=\dfrac{y-5}{1}=\dfrac{6-z}{5}$ are at right angles.*

In standard form the direction ratios are $-3,\ \dfrac{2p}{7},\ 2$ and $-\dfrac{3p}{7},\ 1,\ -5$ [1]

Perpendicular: $(-3)\left(-\dfrac{3p}{7}\right)+\dfrac{2p}{7}(1)+2(-5)=0\Rightarrow\dfrac{11p}{7}=10\Rightarrow\boxed{p=\dfrac{70}{11}}$ [1]
:::

```ng-numerical
id: num-angle-between-lines
title: Angle between two lines
question: Two lines have direction ratios ${{a}},{{b}},{{c}}$ and ${{d}},{{e}},{{f}}$. Find $\cos\theta$, where $\theta$ is the angle between them.
var: a | 1 | 3 | 1
var: b | -2 | 2 | 1
var: c | 1 | 3 | 1
var: d | 1 | 3 | 1
var: e | 1 | 3 | 1
var: f | -2 | 2 | 1
answer: abs(a*d+b*e+c*f)/(sqrt(a^2+b^2+c^2)*sqrt(d^2+e^2+f^2))
dp: 3
step: $a_1a_2+b_1b_2+c_1c_2=({{a}})({{d}})+({{b}})({{e}})+({{c}})({{f}})={{a*d+b*e+c*f:0}}$
step: Magnitudes: $\sqrt{\,{{a^2+b^2+c^2:0}}\,}$ and $\sqrt{\,{{d^2+e^2+f^2:0}}\,}$
step: $\cos\theta=\dfrac{\lvert{{a*d+b*e+c*f:0}}\rvert}{\sqrt{\,{{a^2+b^2+c^2:0}}\,}\sqrt{\,{{d^2+e^2+f^2:0}}\,}}=$ **{{abs(a*d+b*e+c*f)/(sqrt(a^2+b^2+c^2)*sqrt(d^2+e^2+f^2)):3}}**
```

**In one breath:** Use only the direction ratios. Dot product zero means perpendicular; proportional ratios mean parallel; otherwise $\cos\theta$ is the modulus of the dot product over the product of magnitudes.

## Shortest distance between two lines

Two lines in space that are neither parallel nor intersecting are called **skew**. The shortest distance between them is the length of the one segment that is perpendicular to both.

:::formula Shortest distance
Skew lines $\vec r=\vec a_1+\lambda\vec b_1$ and $\vec r=\vec a_2+\mu\vec b_2$: $\quad d=\left|\dfrac{(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)}{|\vec b_1\times\vec b_2|}\right|$<br>
Parallel lines $\vec r=\vec a_1+\lambda\vec b$ and $\vec r=\vec a_2+\mu\vec b$: $\quad d=\dfrac{|\vec b\times(\vec a_2-\vec a_1)|}{|\vec b|}$
:::

The idea behind the first formula: $\vec b_1\times\vec b_2$ points along the common perpendicular, and you project the vector joining the two given points onto it.

:::skeleton Worked example: shortest distance between skew lines (5 marks)
*Find the shortest distance between the lines $\vec r=(\hat i+2\hat j+\hat k)+\lambda(\hat i-\hat j+\hat k)$ and $\vec r=(2\hat i-\hat j-\hat k)+\mu(2\hat i+\hat j+2\hat k)$.*

Comparing with $\vec r=\vec a_1+\lambda\vec b_1$ and $\vec r=\vec a_2+\mu\vec b_2$: $\vec a_1=\hat i+2\hat j+\hat k$, $\vec b_1=\hat i-\hat j+\hat k$, $\vec a_2=2\hat i-\hat j-\hat k$, $\vec b_2=2\hat i+\hat j+2\hat k$ [1]

$\vec a_2-\vec a_1=\hat i-3\hat j-2\hat k$ [½]

$\vec b_1\times\vec b_2=\begin{vmatrix}\hat i&\hat j&\hat k\\1&-1&1\\2&1&2\end{vmatrix}=-3\hat i+3\hat k$, and $|\vec b_1\times\vec b_2|=3\sqrt2$ [1½]

$d=\left|\dfrac{(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)}{|\vec b_1\times\vec b_2|}\right|$ [½]

$=\left|\dfrac{-3+0-6}{3\sqrt2}\right|=\dfrac{9}{3\sqrt2}=\boxed{\dfrac{3\sqrt2}{2}\text{ units}}$ [1½]
:::

If the lines are given in Cartesian form, read off a point and the direction ratios of each (in standard form) and then use the same formula. If the shortest distance comes out as zero, the lines intersect. If $\vec b_1\times\vec b_2=\vec0$ the lines are parallel and you must switch to the second formula.

To check directly whether two lines intersect, write the general point of each, equate two of the coordinates to find $\lambda$ and $\mu$, and test whether the third coordinate agrees. For $\dfrac{x-1}{2}=\dfrac{y-2}{3}=\dfrac{z-3}{4}$ and $\dfrac{x-4}{5}=\dfrac{y-1}{2}=z$, the $x$ and $y$ equations give $\lambda=\mu=-1$, the $z$ coordinates then both equal $-1$, and the lines meet at $(-1,-1,-1)$.

:::tip Keep the modulus
A distance cannot be negative. Keep the modulus signs to the last line and end with "units".
:::

```ng-mnemonic
id: join-dot-cross
title: Shortest distance between skew lines
trick: **Join · cross ÷ size of cross**
meaning: **Join** the two given points: $\vec a_2-\vec a_1$. **Cross** the two directions: $\vec b_1\times\vec b_2$.
meaning: Dot them, divide by $\lvert\vec b_1\times\vec b_2\rvert$, take the modulus. Parallel lines need the other formula.
prompt: Say the skew-line shortest-distance formula in words.
```

```ng-steps
id: steps-shortest-distance
title: Shortest distance between two skew lines
step: Put both lines in standard form and read $\vec a_1,\vec b_1,\vec a_2,\vec b_2$.
step: Find $\vec a_2-\vec a_1$.
step: Find $\vec b_1\times\vec b_2$ by the determinant, then its magnitude.
step: Take the dot product $(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)$.
step: Divide, take the modulus, write "units". Zero means the lines intersect.
```

```ng-derive
id: derive-shortest-distance
title: Shortest distance, Cartesian form
prompt: Find the shortest distance between the lines $\dfrac{x+1}{7}=\dfrac{y+1}{-6}=\dfrac{z+1}{1}$ and $\dfrac{x-3}{1}=\dfrac{y-5}{-2}=\dfrac{z-7}{1}$.
time: 8
check: $\vec a_1=-\hat i-\hat j-\hat k$, $\vec b_1=7\hat i-6\hat j+\hat k$, $\vec a_2=3\hat i+5\hat j+7\hat k$, $\vec b_2=\hat i-2\hat j+\hat k$ | 1
check: $\vec a_2-\vec a_1=4\hat i+6\hat j+8\hat k$ | 0.5
check: $\vec b_1\times\vec b_2=-4\hat i-6\hat j-8\hat k$, magnitude $\sqrt{116}$ | 1.5
check: Formula written | 0.5
check: $d=\dfrac{\lvert-16-36-64\rvert}{\sqrt{116}}=\sqrt{116}=2\sqrt{29}$ units | 1.5
```

**In one breath:** Skew lines: join the two points, dot with $\vec b_1\times\vec b_2$, divide by its magnitude, take the modulus. Parallel lines need the other formula.

## Foot of the perpendicular and image of a point

Given a point $P$ and a line, the **foot of the perpendicular** $Q$ is the point of the line nearest to $P$. The **image** of $P$ in the line is the point $P'$ on the other side, with $Q$ as the mid-point of $PP'$.

<figure class="fig" id="ch11-foot-image">
<svg viewBox="0 0 320 190" role="img" aria-label="A point P above a line, the foot Q of the perpendicular from P on the line, and the image P dash on the other side with Q as mid-point">
<line x1="20" y1="120" x2="300" y2="80" stroke="#C2571A" stroke-width="2.5"/>
<line x1="150" y1="25" x2="160" y2="100" stroke="currentColor" stroke-width="1.5"/>
<line x1="160" y1="100" x2="170" y2="175" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<polyline points="170.9,98.4 172.2,108.3 161.3,109.9" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="150" cy="25" r="3.5" fill="#E0B400"/><circle cx="160" cy="100" r="3.5" fill="#E0B400"/><circle cx="170" cy="175" r="3.5" fill="#E0B400"/>
<text x="158" y="24" font-size="12" fill="currentColor">P (given point)</text><text x="98" y="130" font-size="12" fill="currentColor">Q (foot)</text><text x="178" y="178" font-size="12" fill="currentColor">P′ (image)</text><text x="240" y="76" font-size="12" fill="#C2571A">line</text>
</svg>
<figcaption>PQ is perpendicular to the line. The image P′ lies as far below the line as P is above it, so Q is the mid-point of PP′.</figcaption>
</figure>

The method is always the same: take the general point on the line as $Q$, make $PQ$ perpendicular to the line, and solve for $\lambda$.

:::skeleton Worked example: foot, distance and image (5 marks)
*Find the foot of the perpendicular drawn from the point $P(1,6,3)$ to the line $\dfrac x1=\dfrac{y-1}{2}=\dfrac{z-2}{3}$. Also find the length of the perpendicular and the image of $P$ in the line.*

Let $\dfrac x1=\dfrac{y-1}{2}=\dfrac{z-2}{3}=\lambda$. The general point on the line is $Q(\lambda,\ 1+2\lambda,\ 2+3\lambda)$ [1]

Direction ratios of $PQ$: $\lambda-1,\ 2\lambda-5,\ 3\lambda-1$ [1]

$PQ$ is perpendicular to the line, whose direction ratios are $1,2,3$: $1(\lambda-1)+2(2\lambda-5)+3(3\lambda-1)=0\Rightarrow14\lambda=14\Rightarrow\lambda=1$ [1]

Foot of the perpendicular: $\boxed{Q(1,3,5)}$. Length $PQ=\sqrt{0^2+(-3)^2+2^2}=\boxed{\sqrt{13}\text{ units}}$ [1]

Image $P'$: $Q$ is the mid-point of $PP'$, so $P'=2Q-P=\boxed{(1,0,7)}$ [1]
:::

The same general-point idea solves two other standard questions. To find the points on a line at a given distance from a given point, write the distance from the general point, square it and solve the quadratic in $\lambda$. To find where a line crosses a coordinate plane, set that coordinate of the general point to zero ($z=0$ for the $xy$-plane).

```ng-steps
id: steps-foot-and-image
title: Foot of the perpendicular and image
step: Put the line equal to $\lambda$ and write the general point $Q$ in terms of $\lambda$.
step: Write the direction ratios of $PQ$ (coordinates of $Q$ minus those of $P$).
step: $PQ\perp$ line: (direction ratios of $PQ$) · (direction ratios of the line) $=0$. Solve for $\lambda$.
step: Substitute $\lambda$ to get the foot $Q$; the distance is $\lvert PQ\rvert$.
step: Image: $Q$ is the mid-point of $PP'$, so $P'=2Q-P$.
```

```ng-draw
id: draw-foot-image
title: Draw P, the foot Q and the image P′
svg: ref: notes#ch11-foot-image
time: 2
```

**In one breath:** Take $Q$ as the general point, set (direction of $PQ$) · (direction of line) = 0, solve for $\lambda$. Distance is $|PQ|$; the image is $2Q-P$.
