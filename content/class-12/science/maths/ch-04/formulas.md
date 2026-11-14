# Ch 4 · Determinants — formulas and key facts

## Determinant

- $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$. Order 3: expand along any row or column with signs $(-1)^{i+j}$.
- $|A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}$; elements of one row with cofactors of another row add to 0.

:::formula Determinant facts for a square matrix of order $n$
$|A'|=|A|$   $|AB|=|A|\,|B|$   $|kA|=k^n|A|$   $|A^{-1}|=\dfrac{1}{|A|}$   $|A^m|=|A|^m$<br>
Diagonal or triangular matrix: determinant = product of diagonal entries<br>
Skew-symmetric matrix of odd order: determinant = 0
:::

## Area of a triangle

:::formula Area and collinearity
Area $=\dfrac12\left|\,\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}\,\right|$<br>
Collinear points: determinant $=0$   Line through two points: put $(x,y)$ in row 1 and set the determinant to 0
:::

## Adjoint and inverse

:::formula Adjoint and inverse
Minor $M_{ij}$; cofactor $A_{ij}=(-1)^{i+j}M_{ij}$; $\operatorname{adj}A$ = transpose of the cofactor matrix<br>
$A(\operatorname{adj}A)=(\operatorname{adj}A)A=|A|\,I$   $A^{-1}=\dfrac{1}{|A|}\operatorname{adj}A$ ($|A|\ne0$)<br>
$|\operatorname{adj}A|=|A|^{n-1}$   $\operatorname{adj}(\operatorname{adj}A)=|A|^{n-2}A$   $|\operatorname{adj}(\operatorname{adj}A)|=|A|^{(n-1)^2}$<br>
$(AB)^{-1}=B^{-1}A^{-1}$   $(A')^{-1}=(A^{-1})'$   $(\operatorname{adj}A)^{-1}=\dfrac{A}{|A|}$<br>
$2\times2$ shortcut: $\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}=\dfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$
:::

- Singular: $|A|=0$ (no inverse). Non-singular: $|A|\ne0$ (invertible).
- If $AB=kI$ then $A^{-1}=\dfrac1kB$ and $B^{-1}=\dfrac1kA$.

## System of equations $AX=B$

| Condition | Conclusion |
|---|---|
| $\lvert A\rvert\ne0$ | consistent, unique solution $X=A^{-1}B$ |
| $\lvert A\rvert=0$ and $(\operatorname{adj}A)B\ne O$ | inconsistent (no solution) |
| $\lvert A\rvert=0$ and $(\operatorname{adj}A)B=O$ | infinitely many solutions or no solution |

## Values for a $3\times3$ matrix with $|A|=5$

$|\operatorname{adj}A|=25$,  $|3A|=135$,  $|A^{-1}|=\dfrac15$,  $A(\operatorname{adj}A)=5I$,  $|A(\operatorname{adj}A)|=125$,  $|\operatorname{adj}(\operatorname{adj}A)|=625$.

Not in boards 2026–27: properties of determinants (identities by row and column operations); Cramer's rule.
