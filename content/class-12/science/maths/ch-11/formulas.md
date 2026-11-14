# Ch 11 · Three Dimensional Geometry — formulas and key facts

## Direction cosines and ratios

- $l=\cos\alpha$, $m=\cos\beta$, $n=\cos\gamma$;  $l^2+m^2+n^2=1$.
- Direction ratios $a,b,c$: $l=\pm\dfrac{a}{\sqrt{a^2+b^2+c^2}}$ and similarly $m$, $n$.
- Line through $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$: direction ratios $x_2-x_1,\ y_2-y_1,\ z_2-z_1$.

## Line

:::formula Equation of a line
Vector: $\vec r=\vec a+\lambda\vec b$   Cartesian: $\dfrac{x-x_1}{a}=\dfrac{y-y_1}{b}=\dfrac{z-z_1}{c}$<br>
Two points: $\vec r=\vec a+\lambda(\vec b-\vec a)$,  $\dfrac{x-x_1}{x_2-x_1}=\dfrac{y-y_1}{y_2-y_1}=\dfrac{z-z_1}{z_2-z_1}$<br>
General point: $(x_1+a\lambda,\ y_1+b\lambda,\ z_1+c\lambda)$
:::

## Angle

:::formula Angle between two lines
$\cos\theta=\dfrac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}=\dfrac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}$<br>
Perpendicular: $a_1a_2+b_1b_2+c_1c_2=0$   Parallel: $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}$
:::

## Distance

:::formula Shortest distance
Skew lines: $d=\left|\dfrac{(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)}{|\vec b_1\times\vec b_2|}\right|$<br>
Cartesian numerator: $\begin{vmatrix}x_2-x_1&y_2-y_1&z_2-z_1\\a_1&b_1&c_1\\a_2&b_2&c_2\end{vmatrix}$, denominator $|\vec b_1\times\vec b_2|$<br>
Parallel lines: $d=\dfrac{|\vec b\times(\vec a_2-\vec a_1)|}{|\vec b|}$<br>
Non-parallel lines intersect $\iff d=0$
:::

## Standard procedures

| Task | Method |
|---|---|
| Foot of perpendicular from $P$ | general point $Q(\lambda)$; (direction of $PQ$) · (direction of line) $=0$ |
| Image of $P$ in the line | $P'=2Q-P$ |
| Do two lines intersect? | equate two coordinates of the general points, check the third |
| Points at a given distance | distance from the general point, square, solve for $\lambda$ |
| Line meets a coordinate plane | set that coordinate of the general point to 0 |
| Line perpendicular to two lines | direction $\vec b=\vec b_1\times\vec b_2$ |

## Quick values

- $x$-, $y$-, $z$-axes: direction cosines $(1,0,0)$, $(0,1,0)$, $(0,0,1)$.
- Equally inclined to the axes: $\pm\dfrac{1}{\sqrt3}$ each.
- $\sin^2\alpha+\sin^2\beta+\sin^2\gamma=2$;  $\cos2\alpha+\cos2\beta+\cos2\gamma=-1$.
- Distance of $(a,b,c)$ from the $x$-axis: $\sqrt{b^2+c^2}$.

Not in boards 2026–27: planes (equation of a plane, angles with planes, distance from a plane, coplanarity).
