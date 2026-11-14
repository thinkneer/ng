# Ch 1 · Relations and Functions — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `P` prove / show · `S` solve / find · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `P` Show a relation is an equivalence relation (on $\mathbb{N}\times\mathbb{N}$, on $\mathbb{Z}$ by divisibility, on a finite set); find an equivalence class. [3 or 5]
2. ★★★ `P` Show a function is one-one and onto, or one but not the other. [3 or 5]
3. ★★ `P` Check reflexive, symmetric, transitive for $a\le b^2$, $a\le b^3$, "divides", parallel or perpendicular lines. [2–3]
4. ★★ `MCQ` Count relations, functions, one-one functions, equivalence relations on $\{1,2,3\}$. [1]
5. ★ `C` Case study on relations and functions between two small sets. [4]

## Must-know lines and definitions

- **Relation on $A$:** a subset of $A\times A$.
- **Reflexive:** $(a,a)\in R$ for every $a\in A$.
- **Symmetric:** $(a,b)\in R\Rightarrow(b,a)\in R$.
- **Transitive:** $(a,b)\in R$ and $(b,c)\in R\Rightarrow(a,c)\in R$.
- **Equivalence relation:** reflexive, symmetric and transitive.
- **Equivalence class of $a$:** $[a]=\{x\in A:(x,a)\in R\}$.
- **Equivalence classes:** are disjoint and their union is the whole set.
- **One-one (injective):** $f(x_1)=f(x_2)\Rightarrow x_1=x_2$.
- **Onto (surjective):** every $y$ in the codomain has a pre-image; range = codomain.
- **Bijective:** both one-one and onto.
- **To disprove a property:** one counter-example is enough.
- **Not in boards 2026–27:** composite functions, invertible functions, binary operations.

## Key formulas

:::formula Number of relations on a set with $n$ elements
$2^{n^2}$
:::

:::formula Number of reflexive relations on a set with $n$ elements
$2^{n^2-n}$
:::

:::formula Number of symmetric relations on a set with $n$ elements
$2^{\frac{n(n+1)}{2}}$
:::

:::formula Number of functions from $A$ ($m$ elements) to $B$ ($n$ elements)
$n^m$
:::

:::formula Number of one-one functions from $A$ ($m$ elements) to $B$ ($n$ elements)
$n(n-1)\cdots(n-m+1)$ if $n\ge m$; $0$ if $n<m$
:::

:::formula Number of bijections from a set with $m$ elements to itself
$m!$
:::

:::formula Number of equivalence relations on $\{1,2,3\}$
$5$ (and $2$ of them contain $(1,2)$)
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton P · Equivalence relation (5 marks)
Reflexive: "for any $a\in A$ … so $(a,a)\in R$" [1] → Symmetric: "let $(a,b)\in R$ … so $(b,a)\in R$" [1–1½] → Transitive: "let $(a,b),(b,c)\in R$ …" add or multiply the two conditions [1½–2] → conclusion naming all three [½] → class, if asked [½–1].
:::

:::skeleton P · Divisibility type (3 marks)
$a-a=0=n\cdot0$ [½] → $a-b=nk\Rightarrow b-a=n(-k)$ [1] → $a-b=nk$, $b-c=nm\Rightarrow a-c=n(k+m)$ [1] → conclusion [½].
:::

:::skeleton P · One-one and onto (3 marks)
One-one: let $f(x_1)=f(x_2)$, simplify to $x_1=x_2$ [1½] → Onto: let $y\in$ codomain, solve $y=f(x)$ for $x$, show $x$ is in the domain [1] → conclusion [½].
:::

:::skeleton P · Function that fails a property (3 marks)
Not one-one: name two different inputs with the same output [1] → Onto (or not): general $y$ with its pre-image, or one $y$ with none [1½] → conclusion [½].
:::

## Quick 1-mark facts (MCQ, A–R)

- Empty relation on a non-empty set: symmetric and transitive, not reflexive.
- Universal relation $A\times A$: an equivalence relation.
- "Is parallel to" on lines in a plane: an equivalence relation.
- "Is perpendicular to" on lines in a plane: symmetric only.
- $a<b$ on real numbers: transitive only.
- $a\le b$ on real numbers: reflexive and transitive, not symmetric.
- $R=\{(1,2),(2,1)\}$ on $\{1,2,3\}$: symmetric; not reflexive, not transitive.
- Smallest equivalence relation on $\{1,2,3\}$: the identity relation $\{(1,1),(2,2),(3,3)\}$.
- $x^2$ from $\mathbb{R}$ to $\mathbb{R}$: neither one-one nor onto.
- $x^2$ from $\mathbb{N}$ to $\mathbb{N}$: one-one but not onto.
- $x^3$ from $\mathbb{R}$ to $\mathbb{R}$: bijective.
- $|x|$ and $[x]$ from $\mathbb{R}$ to $\mathbb{R}$: neither one-one nor onto.
- $n(A)=3$, $n(B)=4$: 64 functions, 24 one-one, none onto.
- Function from a finite set to itself: one-one if and only if onto.

## Mark-losing traps

:::tip Proof by numbers
Verifying a property with particular numbers earns nothing; use arbitrary $a$, $b$, $c$.
:::

:::tip Reflexive needs every element
One missing pair $(a,a)$ means the relation is not reflexive.
:::

:::tip Cancelling in the transitive step
On $\mathbb{N}\times\mathbb{N}$ with $ad=bc$, say why you can cancel: $c$ and $d$ are non-zero.
:::

:::tip Onto and the codomain
Decide "onto" only after reading the codomain in $f:A\to B$.
:::

:::tip Pre-image in the domain
In the onto step, check that the $x$ you found actually lies in the domain.
:::
