# Ch 3 · Matrices — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `P` prove / show · `S` solve / find · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `P` `S` Show $A^2-pA+qI=O$; hence find $A^{-1}$. [2–3]
2. ★★ `S` Express a square matrix as the sum of a symmetric and a skew-symmetric matrix. [3]
3. ★★ `S` Find $x$, $y$, $z$ from equal matrices, or $X$ from a matrix equation. [1–2]
4. ★★ `P` Transpose proofs: $AB-BA$ is skew-symmetric; $B'AB$ is symmetric when $A$ is. [2]
5. ★★ `C` Case study: quantity and price tables multiplied to give revenue or cost. [4]
6. ★ `MCQ` Order of a product; number of possible orders; build a matrix from $a_{ij}$. [1]

## Must-know lines and definitions

- **Order $m\times n$:** $m$ rows, $n$ columns, $mn$ elements.
- **Element $a_{ij}$:** row $i$, column $j$.
- **Diagonal matrix:** square, with $a_{ij}=0$ whenever $i\ne j$.
- **Scalar matrix:** diagonal matrix with all diagonal entries equal.
- **Equal matrices:** same order and equal corresponding elements.
- **$AB$ is defined when:** columns of $A$ = rows of $B$.
- **Order of $AB$:** $(m\times n)(n\times p)$ gives $m\times p$.
- **Transpose $A'$:** rows and columns interchanged.
- **Symmetric matrix:** $A'=A$.
- **Skew-symmetric matrix:** $A'=-A$; every diagonal element is 0.
- **Invertible matrix:** square $A$ with some $B$ such that $AB=BA=I$.
- **Not in boards 2026–27:** elementary operations and inverse by elementary operations.

## Key formulas

:::formula Transpose of a product
$(AB)'=B'A'$
:::

:::formula Transpose of a sum
$(A+B)'=A'+B'$
:::

:::formula Symmetric part of a square matrix $A$
$\dfrac12(A+A')$
:::

:::formula Skew-symmetric part of a square matrix $A$
$\dfrac12(A-A')$
:::

:::formula Inverse of a product
$(AB)^{-1}=B^{-1}A^{-1}$
:::

:::formula Inverse of a transpose
$(A')^{-1}=(A^{-1})'$
:::

:::formula Expansion of $(A+B)^2$
$A^2+AB+BA+B^2$ (equals $A^2+2AB+B^2$ only if $AB=BA$)
:::

:::formula $A^{-1}$ from $A^2-pA+qI=O$
$A^{-1}=\dfrac1q(pI-A)$
:::

:::formula $A^{-1}$ when $A^2=I$
$A^{-1}=A$
:::

:::formula Powers of an idempotent matrix ($A^2=A$)
$A^n=A$ for every $n\ge1$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton P · Polynomial in $A$, hence $A^{-1}$ (3 marks)
$A^2$ with the multiplication shown [1] → substitute and reach the zero matrix $O$ [1] → multiply by $A^{-1}$, isolate it, write the matrix [1].
:::

:::skeleton S · Symmetric + skew-symmetric (3 marks)
$A'$ [½] → $P=\frac12(A+A')$ and show $P'=P$ [1] → $Q=\frac12(A-A')$ and show $Q'=-Q$ [1] → verify $P+Q=A$ [½].
:::

:::skeleton P · Transpose proof (2 marks)
Take the transpose of the whole expression using $(AB)'=B'A'$ [1] → use $A'=A$ or $A'=-A$ and conclude [1].
:::

:::skeleton S · Unknowns from equal matrices (2 marks)
Simplify each side to a single matrix [1] → equate corresponding elements and solve [1].
:::

## Quick 1-mark facts (MCQ, A–R)

- Possible orders of a matrix with 12 elements: six ($1\times12$ to $12\times1$).
- Possible orders of a matrix with 18 elements: six ($1\times18$ to $18\times1$).
- Possible orders with a prime number of elements: two ($1\times p$ and $p\times1$).
- Number of $3\times3$ matrices with each entry 0 or 1: $2^9=512$.
- $A$ is $3\times4$ and $B$ is $4\times2$: $AB$ is $3\times2$; $BA$ is not defined.
- For any square $A$, the matrix $A+A'$: is symmetric.
- For any square $A$, the matrix $A-A'$: is skew-symmetric.
- $A$, $B$ symmetric; $AB$ is symmetric: if and only if $AB=BA$.
- A matrix both symmetric and skew-symmetric: is the zero matrix.
- If $A^2=A$, then $(I+A)^3-7A$: equals $I$.
- If $A$ is skew-symmetric, then $A^2$: is symmetric.
- A scalar matrix: commutes with every matrix of the same order.

## Mark-losing traps

:::tip Reversal rule
$(AB)'=B'A'$ and $(AB)^{-1}=B^{-1}A^{-1}$: the order reverses.
:::

:::tip Identity and zero matrix
Write $7I$, not $7$, and $=O$, not $=0$, in a matrix equation.
:::

:::tip Cancelling matrices
$AB=AC$ does not give $B=C$; $AB=O$ does not give $A=O$ or $B=O$.
:::

:::tip Arithmetic in $A^2$
Show the row-times-column sums for $A^2$; most lost marks here are sign slips.
:::
