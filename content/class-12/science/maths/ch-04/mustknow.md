# Ch 4 · Determinants — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / find · `W` word problem · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Find $A^{-1}$ and hence solve a system of three linear equations. [5]
2. ★★★ `S` Find the product $AB$ and use it to solve a system. [5]
3. ★★★ `W` `C` Word problem (prices of three items, three numbers): form the equations and solve by the matrix method. [5 or case study]
4. ★★ `MCQ` $|\operatorname{adj}A|$, $|kA|$, $|A^{-1}|$, $A(\operatorname{adj}A)$, $x$ for a singular matrix. [1]
5. ★ `S` Area of a triangle, value of $k$, collinear points, line through two points. [2]

## Must-know lines and definitions

- **Determinant:** a number associated with a square matrix.
- **Minor $M_{ij}$:** determinant left after deleting row $i$ and column $j$.
- **Cofactor $A_{ij}$:** $(-1)^{i+j}M_{ij}$.
- **Adjoint of $A$:** transpose of the matrix of cofactors.
- **Singular matrix:** $|A|=0$.
- **Non-singular matrix:** $|A|\ne0$; exactly the invertible matrices.
- **Consistent system:** has at least one solution.
- **Three points are collinear:** when the area determinant is zero.
- **Elements of a row times cofactors of another row:** add up to zero.
- **Not in boards 2026–27:** properties of determinants, Cramer's rule.

## Key formulas

:::formula Determinant of a $2\times2$ matrix
$\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$
:::

:::formula Determinant of $kA$ (order $n$)
$|kA|=k^n|A|$
:::

:::formula Determinant of a product
$|AB|=|A|\,|B|$
:::

:::formula Determinant of the inverse
$|A^{-1}|=\dfrac{1}{|A|}$
:::

:::formula Area of a triangle from its vertices
$\dfrac12\left|\,\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}\,\right|$
:::

:::formula The adjoint identity
$A(\operatorname{adj}A)=(\operatorname{adj}A)A=|A|\,I$
:::

:::formula Determinant of the adjoint (order $n$)
$|\operatorname{adj}A|=|A|^{n-1}$
:::

:::formula Inverse by the adjoint method
$A^{-1}=\dfrac{1}{|A|}\operatorname{adj}A$, if $|A|\ne0$
:::

:::formula Adjoint of a $2\times2$ matrix
$\operatorname{adj}\begin{bmatrix}a&b\\c&d\end{bmatrix}=\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$
:::

:::formula Solution of $AX=B$ when $|A|\ne0$
$X=A^{-1}B$
:::

:::formula $A^{-1}$ when $AB=kI$
$A^{-1}=\dfrac1kB$
:::

:::formula System $AX=B$ with $|A|=0$
$(\operatorname{adj}A)B\ne O$: no solution;   $(\operatorname{adj}A)B=O$: infinitely many solutions or none
:::

:::formula Adjoint of the adjoint (order $n$)
$\operatorname{adj}(\operatorname{adj}A)=|A|^{n-2}A$,   $|\operatorname{adj}(\operatorname{adj}A)|=|A|^{(n-1)^2}$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Inverse and system (5 marks)
$|A|$ by expansion; "$|A|\ne0$, so $A^{-1}$ exists" [1] → all nine cofactors [1½] → $\operatorname{adj}A$ (transpose) and $A^{-1}$ [1] → $AX=B$, so $X=A^{-1}B$ [½] → multiply, state $x$, $y$, $z$ [1].
:::

:::skeleton S · "Find $AB$, hence solve" (5 marks)
Multiply: $AB=kI$ [2] → $A^{-1}=\frac1kB$ [1] → write the system as $AX=C$ and $X=A^{-1}C$ [1] → multiply, state the solution [1].
:::

:::skeleton W · Word problem (5 marks)
Let the unknowns be $x$, $y$, $z$ (say what each is) → three equations, variables in the same order, missing terms as 0 [1½] → matrix form $AX=B$ → solve as above [3] → answer in a sentence with units [½].
:::

:::skeleton S · Area or value of $k$ (2 marks)
$\frac12|\text{determinant}|=$ area, expand [1] → use $\pm$, solve for both values [1].
:::

## Quick 1-mark facts (MCQ, A–R)

- $A$ of order 3 with $|A|=5$; $|\operatorname{adj}A|$: $25$.
- $A$ of order 3 with $|A|=5$; $|3A|$: $135$.
- $A$ of order 3 with $|A|=5$; $A(\operatorname{adj}A)$: $5I$.
- $A$ of order 3 with $|A|=5$; $|A(\operatorname{adj}A)|$: $125$.
- $A$ of order 2; $|2A|$ in terms of $|A|$: $4|A|$.
- $A$ of order 2; $|\operatorname{adj}A|$: equals $|A|$.
- Skew-symmetric matrix of odd order; its determinant: is zero.
- If $A^2=I$, then $|A|$: is $1$ or $-1$.
- $\begin{vmatrix}x&2\\18&x\end{vmatrix}=\begin{vmatrix}6&2\\18&6\end{vmatrix}$ gives: $x=\pm6$.
- Determinant of a diagonal or triangular matrix: product of the diagonal entries.
- $(\operatorname{adj}A)^{-1}$ in terms of $A$: $\dfrac{A}{|A|}$.
- Unique solution of $AX=B$ exists when: $|A|\ne0$.

## Mark-losing traps

:::tip Adjoint needs a transpose
$\operatorname{adj}A$ is the transpose of the cofactor matrix, not the cofactor matrix itself.
:::

:::tip Cofactor signs
Signs follow $\begin{bmatrix}+&-&+\\-&+&-\\+&-&+\end{bmatrix}$; one wrong sign spoils the inverse.
:::

:::tip $|kA|$
$|kA|=k^n|A|$, not $k|A|$.
:::

:::tip Order in $X=A^{-1}B$
It is $A^{-1}B$, never $BA^{-1}$.
:::

:::tip Missing variable
If an equation has no $x$, its coefficient in $A$ is 0; do not shift the other entries.
:::
