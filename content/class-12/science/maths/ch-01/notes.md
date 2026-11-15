# Ch 1 · Relations and Functions

This chapter is less about calculation and more about saying things exactly. A relation is a way of pairing up elements; a function is a special, well-behaved relation. The board asks two kinds of question again and again: show that a given relation is an equivalence relation, and decide whether a given function is one-one, onto, or both. Both are marked on how clearly you write the argument, so the layout of the answer matters as much as the idea.

## Relations and their three properties

A **relation** $R$ on a set $A$ is any set of ordered pairs of elements of $A$, that is, a subset of $A\times A$. Writing $(a,b)\in R$ means "$a$ is related to $b$".

Three properties are tested.

- **Reflexive:** every element is related to itself. $(a,a)\in R$ for *all* $a\in A$.
- **Symmetric:** the relation works both ways. If $(a,b)\in R$ then $(b,a)\in R$.
- **Transitive:** the relation passes along a chain. If $(a,b)\in R$ and $(b,c)\in R$ then $(a,c)\in R$.

Take $A=\{1,2,3\}$ and $R=\{(1,1),(2,2),(3,3),(1,2),(2,3)\}$. It is reflexive, because all of $(1,1),(2,2),(3,3)$ are present. It is not symmetric: $(1,2)$ is there but $(2,1)$ is not. It is not transitive: $(1,2)$ and $(2,3)$ are there but $(1,3)$ is not.

Notice the difference between proving and disproving. To prove a property you must argue with *arbitrary* elements $a$, $b$, $c$. To disprove one, a single counter-example is a complete answer.

:::skeleton Worked example: disproving properties (2 marks)
*Show that the relation $R=\{(a,b):a\le b^2\}$ on the set of real numbers is neither reflexive nor symmetric.*

Not reflexive: $\dfrac12\le\left(\dfrac12\right)^2=\dfrac14$ is false, so $\left(\dfrac12,\dfrac12\right)\notin R$ [1]

Not symmetric: $1\le2^2$, so $(1,2)\in R$, but $2\le1^2$ is false, so $(2,1)\notin R$ [1]
:::

:::tip Numbers prove nothing
Checking a property with particular numbers does not prove it. Use numbers only for a counter-example. A proof starts with "Let $a,b\in A$ …".
:::

```ng-mnemonic
id: rst-self-swap-chain
title: The three properties of a relation
trick: **R S T** = **self, swap, chain**
meaning: **R**eflexive: every element is related to it**self**, $(a,a)\in R$.
meaning: **S**ymmetric: **swap** the pair and it is still there, $(a,b)\Rightarrow(b,a)$.
meaning: **T**ransitive: a **chain** closes, $(a,b)$ and $(b,c)\Rightarrow(a,c)$.
prompt: What do reflexive, symmetric and transitive each ask you to check?
```

```ng-compare
id: reflexive-symmetric-transitive
title: Reflexive, symmetric, transitive: what to check
cols: Reflexive | Symmetric | Transitive
row: Condition | $(a,a)\in R$ for every $a\in A$ | $(a,b)\in R\Rightarrow(b,a)\in R$ | $(a,b),(b,c)\in R\Rightarrow(a,c)\in R$
row: To disprove | one element with $(a,a)\notin R$ | one pair whose reverse is missing | one chain that does not close
row: $R=\{(a,b):a\le b\}$ on $\mathbb R$ | yes | no: $(1,2)$ but not $(2,1)$ | yes
row: $R=\{(a,b):a\perp b\}$ on lines | no | yes | no
```

**In one breath:** Reflexive: $(a,a)$ always. Symmetric: $(a,b)$ gives $(b,a)$. Transitive: $(a,b)$ and $(b,c)$ give $(a,c)$. Prove with general elements; disprove with one example.

## Equivalence relations and equivalence classes

A relation that is reflexive, symmetric **and** transitive is an **equivalence relation**. Such a relation sorts the set into groups of mutually related elements. The group containing $a$ is its **equivalence class**, $[a]=\{x\in A:(x,a)\in R\}$. Different classes never overlap, and together they cover the whole set.

:::skeleton Worked example: equivalence relation and a class (3 marks)
*Let $A=\{x\in\mathbb{Z}:0\le x\le12\}$ and $R=\{(a,b):|a-b|\text{ is a multiple of }4\}$. Show that $R$ is an equivalence relation and find the equivalence class of 1.*

Reflexive: for any $a\in A$, $|a-a|=0$, a multiple of 4, so $(a,a)\in R$ [½]

Symmetric: if $(a,b)\in R$ then $|a-b|$ is a multiple of 4; $|b-a|=|a-b|$, so $(b,a)\in R$ [½]

Transitive: if $(a,b),(b,c)\in R$ then $a-b=4k$ and $b-c=4m$ for integers $k,m$; adding, $a-c=4(k+m)$, so $(a,c)\in R$ [1]

Hence $R$ is reflexive, symmetric and transitive, i.e. an equivalence relation [½]

$[1]=\{x\in A:|x-1|\text{ is a multiple of }4\}=\boxed{\{1,5,9\}}$ [½]
:::

The 5-mark version uses pairs of numbers. The method is the same; only the algebra in the transitive step is longer.

:::skeleton Worked example: a relation on $\mathbb{N}\times\mathbb{N}$ (5 marks)
*On $\mathbb{N}\times\mathbb{N}$, $(a,b)\,R\,(c,d)$ if and only if $a+d=b+c$. Show that $R$ is an equivalence relation, and write the equivalence class of $(2,5)$.*

Reflexive: for any $(a,b)$, $a+b=b+a$, so $(a,b)\,R\,(a,b)$ [1]

Symmetric: let $(a,b)\,R\,(c,d)$. Then $a+d=b+c$, so $c+b=d+a$, i.e. $(c,d)\,R\,(a,b)$ [1]

Transitive: let $(a,b)\,R\,(c,d)$ and $(c,d)\,R\,(e,f)$. Then $a+d=b+c$ and $c+f=d+e$. Adding: $a+d+c+f=b+c+d+e$, so $a+f=b+e$, i.e. $(a,b)\,R\,(e,f)$ [1½]

So $R$ is reflexive, symmetric and transitive: an equivalence relation [½]

$[(2,5)]=\{(a,b):a+5=b+2\}=\{(a,b):b=a+3\}=\boxed{\{(1,4),(2,5),(3,6),\dots\}}$ [1]
:::

:::tip Name all three in the conclusion
The last line, "reflexive, symmetric and transitive, hence an equivalence relation", carries its own ½ mark. Do not stop after the transitive step.
:::

```ng-derive
id: derive-equivalence-divisible
title: Prove a relation is an equivalence relation
prompt: Show that the relation $R=\{(a,b):a-b\text{ is divisible by }5\}$ on the set $\mathbb Z$ of integers is an equivalence relation.
time: 5
check: Reflexive: $a-a=0$ is divisible by 5, so $(a,a)\in R$ for every $a\in\mathbb Z$ | 1
check: Symmetric: $a-b=5k\Rightarrow b-a=5(-k)$, so $(b,a)\in R$ | 1
check: Transitive: $a-b=5k$, $b-c=5m\Rightarrow a-c=5(k+m)$, so $(a,c)\in R$; conclusion stated | 1
```

```ng-explain
id: explain-equivalence-class
prompt: In three lines, say what an equivalence class is and why two classes can never partly overlap.
lines: 3
```

**In one breath:** Equivalence = reflexive + symmetric + transitive, each proved with general elements. The class of $a$ is everything related to $a$.

## One-one and onto functions

A function $f:A\to B$ sends each element of $A$ (the domain) to exactly one element of $B$ (the codomain). Two questions describe how it behaves.

- **One-one (injective):** different inputs give different outputs. Test: $f(x_1)=f(x_2)\Rightarrow x_1=x_2$.
- **Onto (surjective):** every element of the codomain is used. Test: for every $y\in B$ there is some $x\in A$ with $f(x)=y$.

A function that is both is **bijective**.

<figure class="fig" id="ch01-arrow-diagrams">
<svg viewBox="0 0 320 170" role="img" aria-label="Two arrow diagrams: on the left a one-one function that is not onto, on the right an onto function that is not one-one">
<g fill="none" stroke="currentColor" stroke-width="1.2">
<ellipse cx="45" cy="80" rx="24" ry="58"/><ellipse cx="115" cy="80" rx="24" ry="58"/>
<ellipse cx="205" cy="80" rx="24" ry="58"/><ellipse cx="275" cy="80" rx="24" ry="58"/>
</g>
<g fill="currentColor"><circle cx="45" cy="50" r="3"/><circle cx="45" cy="80" r="3"/><circle cx="45" cy="110" r="3"/>
<circle cx="115" cy="40" r="3"/><circle cx="115" cy="66" r="3"/><circle cx="115" cy="94" r="3"/>
<circle cx="205" cy="50" r="3"/><circle cx="205" cy="80" r="3"/><circle cx="205" cy="110" r="3"/>
<circle cx="275" cy="60" r="3"/><circle cx="275" cy="100" r="3"/></g>
<circle cx="115" cy="120" r="4" fill="#E0B400"/>
<g stroke="#1F5FAD" stroke-width="1.8">
<line x1="48" y1="50" x2="112" y2="40"/><line x1="48" y1="80" x2="112" y2="66"/><line x1="48" y1="110" x2="112" y2="94"/>
<line x1="208" y1="50" x2="272" y2="60"/><line x1="208" y1="80" x2="272" y2="60"/><line x1="208" y1="110" x2="272" y2="100"/>
</g>
<text x="22" y="160" font-size="12" fill="currentColor">one-one, not onto</text>
<text x="182" y="160" font-size="12" fill="currentColor">onto, not one-one</text>
<text x="38" y="16" font-size="12" fill="currentColor">A</text><text x="110" y="16" font-size="12" fill="currentColor">B</text>
<text x="198" y="16" font-size="12" fill="currentColor">A</text><text x="270" y="16" font-size="12" fill="currentColor">B</text>
</svg>
<figcaption>Left: no two arrows end at the same point (one-one), but one element of B is left out (not onto). Right: every element of B is reached (onto), but two arrows share an end point (not one-one).</figcaption>
</figure>

:::skeleton Worked example: show a function is bijective (3 marks)
*Show that $f:\mathbb{R}-\{3\}\to\mathbb{R}-\{1\}$, $f(x)=\dfrac{x-2}{x-3}$, is one-one and onto.*

One-one: let $f(x_1)=f(x_2)$. Then $\dfrac{x_1-2}{x_1-3}=\dfrac{x_2-2}{x_2-3}$, so $(x_1-2)(x_2-3)=(x_2-2)(x_1-3)$, which simplifies to $x_1=x_2$. So $f$ is one-one [1½]

Onto: let $y\in\mathbb{R}-\{1\}$. Solving $y=\dfrac{x-2}{x-3}$ gives $x=\dfrac{3y-2}{y-1}$, which is real because $y\ne1$, and is never 3 (that would need $3y-2=3y-3$). So every $y$ has a pre-image and $f$ is onto [1]

Hence $f$ is bijective [½]
:::

Not every function is so cooperative. When a function fails a property, name the elements that show it.

:::skeleton Worked example: onto but not one-one (3 marks)
*$f:\mathbb{N}\to\mathbb{N}$ is given by $f(n)=\dfrac{n+1}{2}$ if $n$ is odd and $f(n)=\dfrac n2$ if $n$ is even. Is $f$ one-one? Is it onto?*

$f(1)=\dfrac{1+1}{2}=1$ and $f(2)=\dfrac22=1$. So $f(1)=f(2)$ but $1\ne2$: $f$ is **not one-one** [1]

Take any $y\in\mathbb{N}$. Then $2y$ is an even natural number and $f(2y)=\dfrac{2y}{2}=y$. So every $y$ has a pre-image: $f$ is **onto** [1½]

$f$ is onto but not one-one, so it is not bijective [½]
:::

:::tip Onto depends on the codomain
$f(x)=x^2$ is not onto as a function $\mathbb{R}\to\mathbb{R}$ (nothing maps to $-1$), but the same rule is onto as a function $\mathbb{R}\to[0,\infty)$. Read the sets in $f:A\to B$ before you decide.
:::

A few standard cases are worth recognising. From $\mathbb{R}$ to $\mathbb{R}$: $x^3$ is bijective; $x^2$, $|x|$ and the greatest integer function $[x]$ are neither one-one nor onto. From $\mathbb{N}$ to $\mathbb{N}$: $x^2$ and $2x$ are one-one but not onto. For a *finite* set $A$, a function $A\to A$ is one-one exactly when it is onto.

```ng-mnemonic
id: one-one-onto-arrows
title: One-one or onto? Look at the arrows
trick: One-one: **no sharing**. Onto: **no one left out**.
meaning: **One-one:** no two arrows land on the same element of the codomain.
meaning: **Onto:** no element of the codomain is left without an arrow, so range = codomain.
prompt: In an arrow diagram, how do you spot one-one and onto?
```

```ng-draw
id: draw-arrow-diagrams
title: Draw the two arrow diagrams
svg: ref: notes#ch01-arrow-diagrams
time: 3
```

```ng-steps
id: steps-one-one-onto
title: Showing a function is one-one and onto
step: **One-one:** take $f(x_1)=f(x_2)$ for $x_1,x_2$ in the domain.
step: Simplify until you reach $x_1=x_2$. Write: "so $f$ is one-one".
step: **Onto:** take any $y$ in the codomain and put $y=f(x)$.
step: Solve for $x$ in terms of $y$ and check that this $x$ lies in the domain.
step: Write: "every $y$ has a pre-image, so range = codomain and $f$ is onto". To disprove either, one counter-example is enough.
```

**In one breath:** One-one: start from $f(x_1)=f(x_2)$ and reach $x_1=x_2$. Onto: take any $y$ in the codomain, solve for $x$, and check that $x$ lies in the domain.

## Counting relations and functions

Objective questions often ask "how many". For a set $A$ with $n$ elements there are $n^2$ ordered pairs, and each pair is either in a relation or not, so there are $2^{n^2}$ relations on $A$. A reflexive relation must contain the $n$ pairs $(a,a)$; the other $n^2-n$ pairs are free, giving $2^{n^2-n}$ reflexive relations.

:::formula Counting functions from $A$ ($m$ elements) to $B$ ($n$ elements)
All functions: $n^m$<br>
One-one functions: $n(n-1)(n-2)\cdots(n-m+1)$ if $n\ge m$, otherwise $0$<br>
Bijections from $A$ to itself: $m!$
:::

So with 3 elements in $A$ and 4 in $B$ there are $4^3=64$ functions, of which $4\times3\times2=24$ are one-one, and none is onto.

The 2026–27 syllabus stops here: composition of functions, invertible functions and binary operations are not in boards.

```ng-numerical
id: num-count-relations
title: Count the relations
question: Set $A$ has {{m}} elements and set $B$ has {{n}} elements. How many relations are there from $A$ to $B$?
var: m | 2 | 3 | 1
var: n | 2 | 4 | 1
answer: 2^(m*n)
dp: 0
tol: 0.01
step: $A\times B$ has ${{m}}\times{{n}}={{m*n}}$ ordered pairs.
step: A relation is any subset of $A\times B$, so the number of relations is $2^{\,{{m*n}}\,}=$ **{{2^(m*n):0}}**
```

```ng-fill
id: fill-counting
title: Counting results to know cold
cols: What is counted | Number
row: Relations on a set with $n$ elements | [[$2^{n^2}$]]
row: Reflexive relations on a set with $n$ elements | [[$2^{n^2-n}$]]
row: Functions from $A$ ($m$ elements) to $B$ ($n$ elements) | [[$n^m$]]
row: One-one functions from $A$ to $B$, $n\ge m$ | [[$n(n-1)\cdots(n-m+1)$]]
row: Bijections from a set with $m$ elements to itself | [[$m!$]]
row: Equivalence relations on $\{1,2,3\}$ | [[5]]
```

**In one breath:** $2^{n^2}$ relations on an $n$-element set; $n^m$ functions from $m$ elements to $n$; count one-one functions by choosing distinct images one at a time.
