# Ch 1 · Relations and Functions — formulas and key facts

## Relations

- Relation on $A$: a subset of $A\times A$. Empty relation $\phi$; universal relation $A\times A$.
- **Reflexive:** $(a,a)\in R$ for all $a$. **Symmetric:** $(a,b)\in R\Rightarrow(b,a)\in R$. **Transitive:** $(a,b),(b,c)\in R\Rightarrow(a,c)\in R$.
- **Equivalence relation:** all three. Equivalence class $[a]=\{x\in A:(x,a)\in R\}$; the classes partition $A$.

:::formula Counting relations on a set with $n$ elements
All relations: $2^{n^2}$   Reflexive: $2^{n^2-n}$   Symmetric: $2^{\frac{n(n+1)}{2}}$<br>
Equivalence relations on $\{1,2,3\}$: $5$; containing $(1,2)$: $2$
:::

| Relation | Reflexive | Symmetric | Transitive |
|---|---|---|---|
| "is parallel to" (lines) | yes | yes | yes |
| "is perpendicular to" (lines) | no | yes | no |
| $a\le b$ on $\mathbb{R}$ | yes | no | yes |
| $a\lt b$ on $\mathbb{R}$ | no | no | yes |
| $a\le b^2$ on $\mathbb{R}$ | no | no | no |
| "$a$ divides $b$" on $\mathbb{N}$ | yes | no | yes |
| $a-b$ divisible by $n$ on $\mathbb{Z}$ | yes | yes | yes |

## Functions

- **One-one:** $f(x_1)=f(x_2)\Rightarrow x_1=x_2$. **Onto:** range = codomain. **Bijective:** both.
- A strictly increasing or strictly decreasing function is one-one.
- For a finite set $A$, $f:A\to A$ is one-one $\iff$ onto.

:::formula Counting functions, $n(A)=m$, $n(B)=n$
Functions $A\to B$: $n^m$<br>
One-one functions: $n(n-1)\cdots(n-m+1)$ if $n\ge m$, else $0$<br>
Onto functions exist only if $m\ge n$   Bijections $A\to A$: $m!$
:::

| Function | One-one | Onto |
|---|---|---|
| $x^2$, $\mathbb{R}\to\mathbb{R}$ | no | no |
| $x^2$, $\mathbb{N}\to\mathbb{N}$ | yes | no |
| $x^3$, $\mathbb{R}\to\mathbb{R}$ | yes | yes |
| $\lvert x\rvert$, $[x]$, $\mathbb{R}\to\mathbb{R}$ | no | no |
| $2x$, $\mathbb{N}\to\mathbb{N}$ | yes | no |
| $\dfrac{x}{1+x^2}$, $\mathbb{R}\to\mathbb{R}$ | no | no |

Not in boards 2026–27: composite functions, invertible functions, binary operations.
