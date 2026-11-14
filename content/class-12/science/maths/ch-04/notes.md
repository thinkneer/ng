# Ch 4 · Determinants

Every square matrix has a single number attached to it, called its determinant. That one number decides whether the matrix has an inverse, and whether a system of equations has a unique solution. This chapter builds up to its headline question, the 5-marker "find $A^{-1}$ and hence solve the system of equations", which appears in most papers and can also turn up dressed as a word problem or case study.

## The determinant of a square matrix

For a $2\times2$ matrix the determinant is "product of the main diagonal minus product of the other diagonal":

$$\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$$

For a $3\times3$ matrix, expand along the first row: each element is multiplied by the $2\times2$ determinant left when its own row and column are deleted, with signs $+,-,+$.

:::skeleton Worked example: expanding a determinant (2 marks)
*Evaluate $\Delta=\begin{vmatrix}2&-3&5\\3&2&-4\\1&1&-2\end{vmatrix}$.*

$\Delta=2\begin{vmatrix}2&-4\\1&-2\end{vmatrix}-(-3)\begin{vmatrix}3&-4\\1&-2\end{vmatrix}+5\begin{vmatrix}3&2\\1&1\end{vmatrix}$ [1]

$=2(-4+4)+3(-6+4)+5(3-2)=0-6+5=\boxed{-1}$ [1]
:::

You may expand along any row or column; the value is the same, so pick the one with the most zeros. Some facts about determinants are used constantly in 1-mark questions. For a square matrix $A$ of order $n$:

:::formula Determinant facts (order $n$)
$|A'|=|A|$   $|AB|=|A|\,|B|$   $|kA|=k^n|A|$   $|A^{-1}|=\dfrac{1}{|A|}$
:::

:::tip $|kA|$ is not $k|A|$
Multiplying a matrix by $k$ multiplies *every row* by $k$, so the determinant picks up one factor of $k$ per row: $|kA|=k^n|A|$. For a $3\times3$ matrix with $|A|=4$, $|2A|=2^3\times4=32$.
:::

**In one breath:** $2\times2$: $ad-bc$. $3\times3$: expand along a row with alternating signs. $|kA|=k^n|A|$ and $|AB|=|A||B|$.

## Area of a triangle

A determinant gives the area of a triangle directly from its vertices.

:::formula Area of a triangle with vertices $(x_1,y_1)$, $(x_2,y_2)$, $(x_3,y_3)$
$$\text{Area}=\frac12\left|\,\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}\,\right|$$
:::

The outer bars mean absolute value, because area cannot be negative. Three points are **collinear** exactly when this determinant is zero.

:::skeleton Worked example: find $k$ from the area (2 marks)
*The area of the triangle with vertices $(k,0)$, $(4,0)$ and $(0,2)$ is 4 sq. units. Find $k$.*

$\dfrac12\left|\,\begin{vmatrix}k&0&1\\4&0&1\\0&2&1\end{vmatrix}\,\right|=4$. Expanding: $k(0-2)-0+1(8-0)=-2k+8$ [1]

$|-2k+8|=8\Rightarrow-2k+8=\pm8\Rightarrow\boxed{k=0\text{ or }k=8}$ [1]
:::

:::tip Two values of $k$
When the area is *given*, the determinant can be $+$ or $-$ twice the area. Dropping the $\pm$ loses one of the two answers and half the marks.
:::

The same determinant gives the equation of a line through two points: put a general point $(x,y)$ in the first row and set the determinant to zero. Through $(1,2)$ and $(3,6)$: $\begin{vmatrix}x&y&1\\1&2&1\\3&6&1\end{vmatrix}=0$ gives $-4x+2y=0$, that is $y=2x$.

**In one breath:** Area $=\frac12|\text{determinant}|$; collinear means determinant $=0$; with a given area use $\pm$.

## Minors, cofactors and the adjoint

The **minor** $M_{ij}$ of an element is the determinant left after deleting its row and column. The **cofactor** attaches a sign: $A_{ij}=(-1)^{i+j}M_{ij}$. The signs follow a chessboard pattern starting with $+$ in the top-left corner.

The **adjoint** of $A$, written $\operatorname{adj}A$, is the *transpose* of the matrix of cofactors. For a $2\times2$ matrix there is a shortcut: swap the diagonal entries and change the sign of the other two.

$$\operatorname{adj}\begin{bmatrix}a&b\\c&d\end{bmatrix}=\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$$

The adjoint matters because of one identity:

:::formula The adjoint identity
$$A(\operatorname{adj}A)=(\operatorname{adj}A)A=|A|\,I$$
and, for order $n$, $|\operatorname{adj}A|=|A|^{n-1}$
:::

So for a $3\times3$ matrix with $|A|=5$, $|\operatorname{adj}A|=25$ and $A(\operatorname{adj}A)=5I$.

**In one breath:** Cofactor = signed minor; adjoint = transpose of the cofactor matrix; $A\operatorname{adj}A=|A|I$.

## The inverse of a matrix

Divide the adjoint identity by $|A|$ and you have the inverse.

:::formula Inverse by the adjoint method
$$A^{-1}=\frac{1}{|A|}\operatorname{adj}A,\qquad\text{provided }|A|\ne0$$
:::

A matrix with $|A|=0$ is **singular** and has no inverse. A matrix with $|A|\ne0$ is **non-singular**, and that is exactly when it is invertible.

:::skeleton Worked example: inverse of a $2\times2$ matrix (2 marks)
*Find the inverse of $A=\begin{bmatrix}2&3\\1&-4\end{bmatrix}$.*

$|A|=2(-4)-3(1)=-11\ne0$, so $A^{-1}$ exists [½]

$\operatorname{adj}A=\begin{bmatrix}-4&-3\\-1&2\end{bmatrix}$ [1]

$A^{-1}=\dfrac{1}{-11}\begin{bmatrix}-4&-3\\-1&2\end{bmatrix}=\boxed{\dfrac{1}{11}\begin{bmatrix}4&3\\1&-2\end{bmatrix}}$ [½]
:::

:::tip Transpose the cofactors
The adjoint is the **transpose** of the cofactor matrix. Writing the cofactors in place without transposing is the single most common error in this chapter.
:::

**In one breath:** $A^{-1}=\dfrac{\operatorname{adj}A}{|A|}$, which exists only when $|A|\ne0$. State "$|A|\ne0$, so $A^{-1}$ exists" before using it.

## Solving a system of equations

Three equations in $x$, $y$, $z$ can be written as one matrix equation $AX=B$, where $A$ holds the coefficients, $X$ the unknowns and $B$ the constants. If $|A|\ne0$, multiply both sides by $A^{-1}$:

:::formula Matrix method
$$AX=B\ \Rightarrow\ X=A^{-1}B$$
:::

:::skeleton Worked example: inverse and system (5 marks)
*If $A=\begin{bmatrix}2&-3&5\\3&2&-4\\1&1&-2\end{bmatrix}$, find $A^{-1}$ and hence solve $2x-3y+5z=11$, $3x+2y-4z=-5$, $x+y-2z=-3$.*

$|A|=2(-4+4)+3(-6+4)+5(3-2)=-1\ne0$, so $A^{-1}$ exists [1]

Cofactors: $A_{11}=0$, $A_{12}=2$, $A_{13}=1$; $A_{21}=-1$, $A_{22}=-9$, $A_{23}=-5$; $A_{31}=2$, $A_{32}=23$, $A_{33}=13$ [1½]

$\operatorname{adj}A=\begin{bmatrix}0&-1&2\\2&-9&23\\1&-5&13\end{bmatrix}$, so $A^{-1}=\dfrac{\operatorname{adj}A}{|A|}=\begin{bmatrix}0&1&-2\\-2&9&-23\\-1&5&-13\end{bmatrix}$ [1]

The system is $AX=B$ with $X=\begin{bmatrix}x\\y\\z\end{bmatrix}$, $B=\begin{bmatrix}11\\-5\\-3\end{bmatrix}$, so $X=A^{-1}B$ [½]

$X=\begin{bmatrix}0&1&-2\\-2&9&-23\\-1&5&-13\end{bmatrix}\begin{bmatrix}11\\-5\\-3\end{bmatrix}=\begin{bmatrix}1\\2\\3\end{bmatrix}$, so $\boxed{x=1,\ y=2,\ z=3}$ [1]
:::

Always spend 20 seconds checking the answer in one of the original equations: $2(1)-3(2)+5(3)=11$. ✓

A popular variant gives two matrices and says "find $AB$ and use it to solve". The product turns out to be a multiple of the identity, which hands you the inverse without any cofactors.

:::skeleton Worked example: use the product (5 marks)
*Given $A=\begin{bmatrix}1&-1&2\\0&2&-3\\3&-2&4\end{bmatrix}$ and $B=\begin{bmatrix}-2&0&1\\9&2&-3\\6&1&-2\end{bmatrix}$, find $AB$ and use it to solve $x-y+2z=1$, $2y-3z=1$, $3x-2y+4z=2$.*

$AB=\begin{bmatrix}-2-9+12&0-2+2&1+3-4\\0+18-18&0+4-3&0-6+6\\-6-18+24&0-4+4&3+6-8\end{bmatrix}=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}=I$ [2]

So $A^{-1}=B$ [1]

The system is $AX=C$ with $C=\begin{bmatrix}1\\1\\2\end{bmatrix}$, so $X=A^{-1}C=BC$ [1]

$X=\begin{bmatrix}-2+0+2\\9+2-6\\6+1-4\end{bmatrix}=\begin{bmatrix}0\\5\\3\end{bmatrix}$, so $\boxed{x=0,\ y=5,\ z=3}$ [1]
:::

If the product is $kI$ rather than $I$, then $A^{-1}=\dfrac1kB$. Also check which matrix is the coefficient matrix of the system; sometimes it is the transpose, and then you use $(A')^{-1}=(A^{-1})'$.

What if $|A|=0$? Then compute $(\operatorname{adj}A)B$. If it is not the zero matrix, the system is **inconsistent** (no solution). If it is the zero matrix, the system has either infinitely many solutions or none.

In the 2026–27 syllabus, properties of determinants (proving identities with row and column operations) and Cramer's rule are not in boards; evaluate determinants by direct expansion.

**In one breath:** Write $AX=B$; check $|A|\ne0$; find the cofactors, the adjoint and $A^{-1}$; then $X=A^{-1}B$. If the question gives a product $AB=kI$, use $A^{-1}=\frac1kB$ instead.
