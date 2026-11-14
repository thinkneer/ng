# Ch 3 · Matrices

A matrix is a rectangular table of numbers treated as a single object. A shop's weekly sales, the coefficients of three simultaneous equations, the fees of three schools: each can be packed into one matrix, and the rules of this chapter let you add, scale and multiply such tables. The chapter is light on theory and heavy on careful arithmetic, and together with determinants it is worth 10 marks, often through a case study.

## What a matrix is

A matrix with $m$ rows and $n$ columns has **order** $m\times n$ and $mn$ elements. The element in row $i$ and column $j$ is written $a_{ij}$: row first, column second.

A few shapes have names. A **square** matrix has as many rows as columns. A **diagonal** matrix is square with zeros everywhere off the main diagonal. A **scalar** matrix is diagonal with all diagonal entries equal, and the **identity** matrix $I$ is the scalar matrix with 1s. The **zero** matrix $O$ has every entry 0.

:::skeleton Worked example: build a matrix from a rule (2 marks)
*Construct a $2\times2$ matrix $A=[a_{ij}]$ whose elements are given by $a_{ij}=\dfrac{(i+j)^2}{2}$.*

$a_{11}=\dfrac{(1+1)^2}{2}=2$, $a_{12}=\dfrac{(1+2)^2}{2}=\dfrac92$, $a_{21}=\dfrac92$, $a_{22}=\dfrac{(2+2)^2}{2}=8$ [1½]

$A=\boxed{\begin{bmatrix}2&\frac92\\[2pt]\frac92&8\end{bmatrix}}$ [½]
:::

A quick counting fact for objective questions: a matrix with 12 elements can have order $1\times12$, $2\times6$, $3\times4$, $4\times3$, $6\times2$ or $12\times1$, so six possible orders. With a prime number of elements there are only two.

**In one breath:** Order is rows × columns; $a_{ij}$ sits in row $i$, column $j$. Know diagonal, scalar, identity and zero matrices by sight.

## Operations on matrices

Two matrices are **equal** when they have the same order and every pair of corresponding elements is equal. That turns one matrix equation into several ordinary equations.

**Addition** and **subtraction** work element by element and need the same order. **Scalar multiplication** multiplies every element by the number.

:::skeleton Worked example: equality of matrices (2 marks)
*Find $x$ and $y$ if $2\begin{bmatrix}1&3\\0&x\end{bmatrix}+\begin{bmatrix}y&0\\1&2\end{bmatrix}=\begin{bmatrix}5&6\\1&8\end{bmatrix}$.*

Left side $=\begin{bmatrix}2+y&6\\1&2x+2\end{bmatrix}$ [1]

Equating corresponding elements: $2+y=5$ and $2x+2=8$, so $\boxed{x=3,\ y=3}$ [1]
:::

**Multiplication** is different. The product $AB$ exists only when the number of columns of $A$ equals the number of rows of $B$. An $m\times n$ matrix times an $n\times p$ matrix gives an $m\times p$ matrix, and each entry is "row of $A$ times column of $B$", multiplied in pairs and added.

:::skeleton Worked example: a product (2 marks)
*Find $AB$ if $A=\begin{bmatrix}1&-2&3\end{bmatrix}$ and $B=\begin{bmatrix}2\\3\\1\end{bmatrix}$. Is $BA$ of the same order?*

$A$ is $1\times3$ and $B$ is $3\times1$, so $AB$ is $1\times1$: $AB=[1(2)+(-2)(3)+3(1)]=\boxed{[-1]}$ [1]

$BA$ is $3\times3$, so $AB$ and $BA$ are not even of the same order [1]
:::

Matrix multiplication breaks three habits from ordinary algebra.

:::tip Three things that fail for matrices
$AB\ne BA$ in general. $AB=O$ does not mean $A=O$ or $B=O$. $AB=AC$ does not mean $B=C$.
:::

Because $AB$ and $BA$ differ, $(A+B)^2=A^2+AB+BA+B^2$; it becomes $A^2+2AB+B^2$ only when $AB=BA$. Multiplication is still associative, $A(BC)=(AB)C$, and distributive, $A(B+C)=AB+AC$, and $AI=IA=A$.

**In one breath:** Add and scale element by element. For a product, columns of the first must match rows of the second, and each entry is row times column. Order of multiplication matters.

## Transpose, symmetric and skew-symmetric matrices

The **transpose** $A'$ (also written $A^T$) is obtained by turning rows into columns.

:::formula Properties of the transpose
$(A')'=A$   $(kA)'=kA'$   $(A+B)'=A'+B'$   $(AB)'=B'A'$
:::

Note the reversal in the last one. A square matrix is **symmetric** if $A'=A$ (it is its own mirror image in the diagonal) and **skew-symmetric** if $A'=-A$. In a skew-symmetric matrix $a_{ii}=-a_{ii}$, so every diagonal element is zero.

Every square matrix can be split into a symmetric part and a skew-symmetric part, and boards ask you to do it.

:::formula Symmetric + skew-symmetric
$$A=\underbrace{\tfrac12(A+A')}_{\text{symmetric}}+\underbrace{\tfrac12(A-A')}_{\text{skew-symmetric}}$$
:::

:::skeleton Worked example: symmetric plus skew-symmetric (3 marks)
*Express $A=\begin{bmatrix}3&5\\1&-1\end{bmatrix}$ as the sum of a symmetric and a skew-symmetric matrix.*

$A'=\begin{bmatrix}3&1\\5&-1\end{bmatrix}$ [½]

$P=\dfrac12(A+A')=\dfrac12\begin{bmatrix}6&6\\6&-2\end{bmatrix}=\begin{bmatrix}3&3\\3&-1\end{bmatrix}$, and $P'=P$, so $P$ is symmetric [1]

$Q=\dfrac12(A-A')=\dfrac12\begin{bmatrix}0&4\\-4&0\end{bmatrix}=\begin{bmatrix}0&2\\-2&0\end{bmatrix}$, and $Q'=-Q$, so $Q$ is skew-symmetric [1]

$P+Q=\begin{bmatrix}3&5\\1&-1\end{bmatrix}=A$ [½]
:::

Short proofs with transposes are also common. For example, if $A$ and $B$ are symmetric, then $(AB-BA)'=B'A'-A'B'=BA-AB=-(AB-BA)$, so $AB-BA$ is skew-symmetric.

:::tip Show the checks
Writing $P$ and $Q$ is not enough. The lines "$P'=P$", "$Q'=-Q$" and "$P+Q=A$" each carry ½ mark. A fast check on $Q$: its diagonal must be all zeros.
:::

**In one breath:** Transpose swaps rows and columns and reverses a product. $A=\frac12(A+A')+\frac12(A-A')$ splits any square matrix into symmetric and skew-symmetric parts; verify both and their sum.

## Invertible matrices and matrix polynomials

A square matrix $A$ is **invertible** if there is a matrix $B$ of the same order with $AB=BA=I$. Then $B$ is the inverse of $A$, written $A^{-1}$, and it is unique. Two facts follow: $(AB)^{-1}=B^{-1}A^{-1}$ (reversed again) and $(A')^{-1}=(A^{-1})'$.

The general method for finding an inverse uses the adjoint and belongs to the next chapter. But when a question first makes you prove a polynomial relation such as $A^2-4A+7I=O$, the inverse drops out of it in one line.

:::skeleton Worked example: matrix polynomial, hence the inverse (3 marks)
*If $A=\begin{bmatrix}2&3\\-1&2\end{bmatrix}$, show that $A^2-4A+7I=O$. Hence find $A^{-1}$.*

$A^2=\begin{bmatrix}2&3\\-1&2\end{bmatrix}\begin{bmatrix}2&3\\-1&2\end{bmatrix}=\begin{bmatrix}4-3&6+6\\-2-2&-3+4\end{bmatrix}=\begin{bmatrix}1&12\\-4&1\end{bmatrix}$ [1]

$A^2-4A+7I=\begin{bmatrix}1&12\\-4&1\end{bmatrix}-\begin{bmatrix}8&12\\-4&8\end{bmatrix}+\begin{bmatrix}7&0\\0&7\end{bmatrix}=\begin{bmatrix}0&0\\0&0\end{bmatrix}=O$ [1]

Multiplying by $A^{-1}$ (it exists, as $|A|=7\ne0$): $A-4I+7A^{-1}=O$, so $A^{-1}=\dfrac17(4I-A)=\boxed{\dfrac17\begin{bmatrix}2&-3\\1&2\end{bmatrix}}$ [1]
:::

:::tip $I$ and $O$, not 1 and 0
In a matrix equation the constant term is $7I$, not 7, and the right side is the zero matrix $O$, not the number 0. Examiners deduct for this.
:::

Finding an inverse by elementary row or column operations is not in the 2026–27 syllabus.

**In one breath:** $A^{-1}$ satisfies $AA^{-1}=I$. From a relation like $A^2-4A+7I=O$, multiply through by $A^{-1}$ and solve for it.
