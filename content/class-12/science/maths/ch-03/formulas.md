# Ch 3 · Matrices — formulas and key facts

## Basics

- Order $m\times n$: $m$ rows, $n$ columns, $mn$ elements. $A=[a_{ij}]$, $i$ = row, $j$ = column.
- Diagonal: $a_{ij}=0$ for $i\ne j$. Scalar: diagonal with equal diagonal entries. Identity $I$. Zero matrix $O$.
- Equal matrices: same order, equal corresponding elements.
- $AB$ defined only if columns of $A$ = rows of $B$: $(m\times n)(n\times p)=m\times p$.

:::formula Laws of matrix algebra
$A+B=B+A$   $A(BC)=(AB)C$   $A(B+C)=AB+AC$   $AI=IA=A$<br>
$AB\ne BA$ in general;  $AB=O\not\Rightarrow A=O$ or $B=O$;  $AB=AC\not\Rightarrow B=C$<br>
$(A+B)^2=A^2+AB+BA+B^2$
:::

## Transpose

:::formula Transpose, symmetric, skew-symmetric
$(A')'=A$   $(kA)'=kA'$   $(A+B)'=A'+B'$   $(AB)'=B'A'$<br>
Symmetric: $A'=A$   Skew-symmetric: $A'=-A$ (diagonal elements are 0)<br>
$A=\dfrac12(A+A')+\dfrac12(A-A')$ = symmetric + skew-symmetric
:::

- For any square $A$: $A+A'$, $AA'$ and $A'A$ are symmetric; $A-A'$ is skew-symmetric.
- $A$, $B$ symmetric: $AB+BA$ symmetric, $AB-BA$ skew-symmetric, $AB$ symmetric $\iff AB=BA$.
- $B'AB$ is symmetric if $A$ is symmetric, skew-symmetric if $A$ is skew-symmetric.

## Inverse

:::formula Invertible matrices
$AB=BA=I\Rightarrow B=A^{-1}$ (unique)<br>
$(AB)^{-1}=B^{-1}A^{-1}$   $(A')^{-1}=(A^{-1})'$   $(A^{-1})^{-1}=A$
:::

| Given relation | Inverse |
|---|---|
| $A^2-pA+qI=O$ | $A^{-1}=\dfrac1q(pI-A)$ |
| $A^2-A+I=O$ | $A^{-1}=I-A$ |
| $A^2=I$ | $A^{-1}=A$ |
| $A^3=I$ | $A^{-1}=A^2$ |

## Counting facts

- Possible orders with 12 or 18 elements: 6; with 24: 8; with a prime number: 2.
- Number of $m\times n$ matrices with entries 0 or 1: $2^{mn}$.

Not in boards 2026–27: elementary row and column operations; inverse by elementary operations.
