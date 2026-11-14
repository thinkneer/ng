# Ch 10 · Vector Algebra — formulas and key facts

## Basics

- Position vector of $P(x,y,z)$: $\overrightarrow{OP}=x\hat i+y\hat j+z\hat k$, $|\overrightarrow{OP}|=\sqrt{x^2+y^2+z^2}$. $\overrightarrow{AB}=\vec b-\vec a$.
- Unit vector: $\hat a=\dfrac{\vec a}{|\vec a|}$. Vector of magnitude $k$ along $\vec a$: $k\hat a$.
- Direction ratios $a,b,c$; direction cosines $\dfrac{a}{|\vec r|},\dfrac{b}{|\vec r|},\dfrac{c}{|\vec r|}$ with $l^2+m^2+n^2=1$.
- Parallel (collinear): $\vec b=\lambda\vec a$. Points $A$, $B$, $C$ collinear: $\overrightarrow{AB}=\lambda\overrightarrow{BC}$.

:::formula Section formula ($P$ divides $AB$ in $m:n$)
Internal: $\dfrac{m\vec b+n\vec a}{m+n}$   External: $\dfrac{m\vec b-n\vec a}{m-n}$   Mid-point: $\dfrac{\vec a+\vec b}{2}$
:::

## Dot product

:::formula Scalar (dot) product
$\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2+a_3b_3$<br>
$\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$   $\vec a\perp\vec b\iff\vec a\cdot\vec b=0$   $\vec a\cdot\vec a=|\vec a|^2$<br>
Projection of $\vec a$ on $\vec b$: $\dfrac{\vec a\cdot\vec b}{|\vec b|}$   Projection vector: $\dfrac{\vec a\cdot\vec b}{|\vec b|^2}\,\vec b$<br>
$|\vec a\pm\vec b|^2=|\vec a|^2\pm2\,\vec a\cdot\vec b+|\vec b|^2$<br>
$\hat i\cdot\hat i=\hat j\cdot\hat j=\hat k\cdot\hat k=1$,  $\hat i\cdot\hat j=\hat j\cdot\hat k=\hat k\cdot\hat i=0$
:::

## Cross product

:::formula Vector (cross) product
$\vec a\times\vec b=|\vec a||\vec b|\sin\theta\,\hat n=\begin{vmatrix}\hat i&\hat j&\hat k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}$<br>
$\vec a\times\vec b=-\,\vec b\times\vec a$   $\vec a\times\vec a=\vec0$   $\vec a\parallel\vec b\iff\vec a\times\vec b=\vec0$<br>
$\sin\theta=\dfrac{|\vec a\times\vec b|}{|\vec a||\vec b|}$   $|\vec a\times\vec b|^2+(\vec a\cdot\vec b)^2=|\vec a|^2|\vec b|^2$<br>
$\hat i\times\hat j=\hat k$,  $\hat j\times\hat k=\hat i$,  $\hat k\times\hat i=\hat j$,  $\hat i\times\hat i=\vec0$
:::

| Figure | Area |
|---|---|
| Parallelogram, adjacent sides $\vec a$, $\vec b$ | $\lvert\vec a\times\vec b\rvert$ |
| Parallelogram, diagonals $\vec d_1$, $\vec d_2$ | $\dfrac12\lvert\vec d_1\times\vec d_2\rvert$ |
| Triangle, sides $\vec a$, $\vec b$ (or vertices $A$, $B$, $C$) | $\dfrac12\lvert\vec a\times\vec b\rvert=\dfrac12\lvert\overrightarrow{AB}\times\overrightarrow{AC}\rvert$ |

- Unit vector perpendicular to $\vec a$ and $\vec b$: $\pm\dfrac{\vec a\times\vec b}{|\vec a\times\vec b|}$.
- If $\vec a+\vec b+\vec c=\vec0$: $\vec a\cdot\vec b+\vec b\cdot\vec c+\vec c\cdot\vec a=-\dfrac12\left(|\vec a|^2+|\vec b|^2+|\vec c|^2\right)$.
- Parallel and perpendicular components of $\vec\beta$ along $\vec\alpha$: $\vec\beta_1=\dfrac{\vec\alpha\cdot\vec\beta}{|\vec\alpha|^2}\vec\alpha$, $\vec\beta_2=\vec\beta-\vec\beta_1$.

Not in boards 2026–27: scalar triple product; coplanarity of three vectors.
