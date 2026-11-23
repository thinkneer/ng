# Ch 2 · Polynomials

A polynomial is the simplest kind of formula there is: powers of $x$, multiplied by numbers and added up. In Class 9 you learnt to name and factorise them. This chapter asks one sharper question: where is a polynomial equal to zero, and how are those points tied to its coefficients? It is a short, scoring chapter in Unit II (Algebra, 20 marks), and the same two results come back in Quadratic Equations and all through Classes 11 and 12.

:::tip You need from earlier
- **Polynomials** (Class 9): terms, coefficients and degree; the value $p(a)$ of a polynomial at $x=a$.
- **Zero of a polynomial:** a number $a$ with $p(a)=0$.
- **Factorising a quadratic** by splitting the middle term.
- **Plotting points** $(x,y)$ on a graph.
:::

## Why polynomials matter

Throw a ball and its height above the ground, second by second, follows a quadratic polynomial such as $h(t)=20t-5t^2$. The two moments when the height is zero are the throw and the landing: $t=0$ and $t=4$ seconds. Those two numbers are the **zeros** of the polynomial, and they tell you the whole flight.

That is the general idea. The curved letters on this screen, the path of a satellite and the shape of a bridge cable are all described with polynomials, because they are easy to compute: only multiplying and adding. And the first thing anyone asks about a polynomial is where it becomes zero.

**In one breath:** A polynomial is built from powers of $x$ by multiplying and adding. Its zeros, the values of $x$ that make it 0, are the most useful thing to know about it.

## Degree, value and zero

The **degree** of a polynomial is the highest power of the variable in it.

| Name | Degree | General form |
|---|---|---|
| Linear | 1 | $ax+b$ |
| Quadratic | 2 | $ax^2+bx+c$ |
| Cubic | 3 | $ax^3+bx^2+cx+d$ |

In each form $a\ne0$. Things such as $\dfrac{1}{x-1}$, $\sqrt x+2$ or $x^2+\dfrac1x$ are **not** polynomials: the powers of $x$ must be whole numbers.

The **value** of $p(x)$ at $x=k$ is what you get by putting $k$ in place of $x$. If that value is 0, then $k$ is a **zero** of the polynomial. For $p(x)=x^2-3x-4$: $p(-1)=1+3-4=0$ and $p(4)=16-12-4=0$, so $-1$ and $4$ are its zeros.

A linear polynomial $ax+b$ has exactly one zero, $x=-\dfrac ba$.

:::tip Zero of a polynomial is not the number 0
"Zero of $p(x)$" means a value of $x$ for which $p(x)=0$. It need not be 0 itself. And the polynomial 5 has no zero at all.
:::

**In one breath:** Degree = highest power. A zero is an input that gives the output 0. A linear polynomial has one zero, $-\dfrac ba$.

## Zeros on a graph

Draw the graph of $y=p(x)$. Wherever the graph meets the $x$-axis, $y=0$, so the $x$-coordinate of that point is a zero. That gives a way to *see* zeros.

The graph of a quadratic polynomial is a **parabola**. It opens upward if $a>0$ and downward if $a<0$, and it can meet the $x$-axis in three ways.

<figure class="fig" id="parabola-zeros">
<svg viewBox="0 0 320 170" role="img" aria-label="Three parabolas: cutting the x-axis at two points, touching it at one point, and not meeting it" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10,80 H102 M56.0,14 V134" stroke-width="1"/><polyline points="14.4,39.4 17.0,47.5 19.6,55.0 22.2,62.1 24.8,68.6 27.4,74.5 30.0,80.0 32.6,84.9 35.2,89.4 37.8,93.3 40.4,96.6 43.0,99.5 45.6,101.8 48.2,103.7 50.8,105.0 53.4,105.7 56.0,106.0 58.6,105.7 61.2,105.0 63.8,103.7 66.4,101.8 69.0,99.5 71.6,96.6 74.2,93.3 76.8,89.4 79.4,84.9 82.0,80.0 84.6,74.5 87.2,68.6 89.8,62.1 92.4,55.0 95.0,47.5 97.6,39.4" class="u" stroke-width="2"/><circle cx="30" cy="80" r="3" fill="#E0B400" stroke="none"/><circle cx="82" cy="80" r="3" fill="#E0B400" stroke="none"/><path d="M114,80 H206 M160.0,14 V134" stroke-width="1"/><polyline points="118.4,13.4 121.0,21.5 123.6,29.0 126.2,36.1 128.8,42.6 131.4,48.5 134.0,54.0 136.6,58.9 139.2,63.4 141.8,67.3 144.4,70.6 147.0,73.5 149.6,75.8 152.2,77.7 154.8,79.0 157.4,79.7 160.0,80.0 162.6,79.7 165.2,79.0 167.8,77.7 170.4,75.8 173.0,73.5 175.6,70.6 178.2,67.3 180.8,63.4 183.4,58.9 186.0,54.0 188.6,48.5 191.2,42.6 193.8,36.1 196.4,29.0 199.0,21.5 201.6,13.4" class="u" stroke-width="2"/><circle cx="160" cy="80" r="3" fill="#E0B400" stroke="none"/><path d="M218,80 H310 M264.0,14 V134" stroke-width="1"/><polyline points="230.2,15.3 232.8,21.8 235.4,27.7 238.0,33.2 240.6,38.1 243.2,42.6 245.8,46.5 248.4,49.8 251.0,52.7 253.6,55.0 256.2,56.9 258.8,58.2 261.4,58.9 264.0,59.2 266.6,58.9 269.2,58.2 271.8,56.9 274.4,55.0 277.0,52.7 279.6,49.8 282.2,46.5 284.8,42.6 287.4,38.1 290.0,33.2 292.6,27.7 295.2,21.8 297.8,15.3" class="u" stroke-width="2"/><text x="56" y="156" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">two zeros</text><text x="160" y="156" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">one zero</text><text x="264" y="156" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">no zero</text></svg>
<figcaption>A parabola can cut the x-axis at two points, touch it at one point, or miss it. So a quadratic polynomial has two, one or no real zeros.</figcaption>
</figure>

In general, a polynomial of degree $n$ has **at most** $n$ zeros: a quadratic at most 2, a cubic at most 3. In the exam you are often shown a graph and asked for the number of zeros: just count the points where it meets the $x$-axis. A point where the graph only touches the axis counts once.

```ng-graph
id: graph-parabola-zeros
title: Slide the parabola up and down
x: x | -4 | 4
y: value of y | -6 | 8
curve: y = x² + c | x^2 + c
slider: c | constant $c$ | -5 | 3 | 0.5 | -4
preset: two zeros (c = −4) | c=-4
preset: one zero (c = 0) | c=0
preset: no zero (c = 2) | c=2
note: With $c=-4$ the graph cuts the $x$-axis at $-2$ and $2$: the zeros of $x^2-4$. Raise it to $c=0$ and the two zeros merge into one. Raise it further and there is no real zero.
```

```ng-draw
id: draw-parabola-zeros
title: Sketch three parabolas with 2, 1 and 0 zeros
svg: ref: notes#parabola-zeros
time: 2
```

:::tip Count on the x-axis only
Points where the graph crosses the $y$-axis are not zeros. Look only at the $x$-axis.
:::

**In one breath:** Zeros are the $x$-coordinates where the graph meets the $x$-axis. Degree $n$ means at most $n$ zeros; a parabola gives 2, 1 or 0.

## Zeros and coefficients of a quadratic

Here is the heart of the chapter. Suppose $\alpha$ and $\beta$ are the zeros of $ax^2+bx+c$. Then the polynomial must be $a(x-\alpha)(x-\beta)$. Multiply out: $a\left[x^2-(\alpha+\beta)x+\alpha\beta\right]$. Compare with $ax^2+bx+c$ and two neat facts drop out.

:::formula Zeros and coefficients of a quadratic polynomial
Sum of zeros: $\alpha+\beta=-\dfrac ba=-\dfrac{\text{coefficient of }x}{\text{coefficient of }x^2}$<br>
Product of zeros: $\alpha\beta=\dfrac ca=\dfrac{\text{constant term}}{\text{coefficient of }x^2}$
:::

```ng-mnemonic
id: sum-sad-product-plain
title: Sum and product of zeros
trick: **S**um is **s**ad (it has the minus): $-\dfrac ba$. **P**roduct is **p**lain: $\dfrac ca$.
meaning: Both are divided by $a$, the coefficient of $x^2$.
meaning: Quick check with $x^2-5x+6=(x-2)(x-3)$: sum $=5=-\dfrac{-5}{1}$, product $=6=\dfrac61$.
prompt: For ax² + bx + c, what are the sum and the product of the zeros?
```

To find the zeros themselves, factorise by splitting the middle term.

```ng-steps
id: steps-split-middle-term
title: Zeros by splitting the middle term
step: Write the polynomial as $ax^2+bx+c$ and find the product $a\times c$.
step: Find two numbers whose product is $ac$ and whose sum is $b$.
step: Split $bx$ into those two terms and factorise in pairs.
step: Put each factor equal to zero to get the two zeros.
step: Verify: sum of zeros $=-\dfrac ba$ and product $=\dfrac ca$. The verification carries marks.
```

:::skeleton Worked example: find the zeros and verify (3 marks)
*Find the zeros of $x^2+7x+10$ and verify the relationship between the zeros and the coefficients.*

$x^2+7x+10=x^2+5x+2x+10=(x+2)(x+5)$, so the zeros are $-2$ and $-5$ [1]

Sum of zeros $=-2+(-5)=-7=-\dfrac{7}{1}=-\dfrac{\text{coefficient of }x}{\text{coefficient of }x^2}$ [1]

Product of zeros $=(-2)(-5)=10=\dfrac{10}{1}=\dfrac{\text{constant term}}{\text{coefficient of }x^2}$. Verified. [1]
:::

The relation also works backwards: if you know the sum $S$ and the product $P$ of the zeros, you can write the polynomial.

:::formula Quadratic polynomial from its zeros
$p(x)=k\,(x^2-Sx+P)$, $k\ne0$<br>
$S$ = sum of zeros, $P$ = product of zeros
:::

:::skeleton Worked example: build the polynomial (2 marks)
*Find a quadratic polynomial whose zeros have sum $-3$ and product $2$.*

$p(x)=x^2-(\text{sum})x+\text{product}=x^2-(-3)x+2$ [1]

$=\boxed{x^2+3x+2}$ [1]
:::

:::tip Minus the sum
The middle term is **minus** (sum)$x$. With sum $-3$ it becomes $+3x$. If the sum or product is a fraction, multiply through to clear it: sum $\dfrac14$, product $-1$ gives $x^2-\dfrac14x-1$, or $4x^2-x-4$.
:::

Many questions never ask for the zeros at all, only for an expression in $\alpha$ and $\beta$. Write the expression in terms of $\alpha+\beta$ and $\alpha\beta$.

:::skeleton Worked example: expressions in α and β (3 marks)
*If $\alpha$ and $\beta$ are the zeros of $x^2-4x+3$, find $\alpha^2+\beta^2$ and $\dfrac1\alpha+\dfrac1\beta$ without finding the zeros.*

$\alpha+\beta=4$ and $\alpha\beta=3$ [1]

$\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta=16-6=\boxed{10}$ [1]

$\dfrac1\alpha+\dfrac1\beta=\dfrac{\alpha+\beta}{\alpha\beta}=\boxed{\dfrac43}$ [1]
:::

```ng-fill
id: fill-alpha-beta
title: Expressions in α and β
cols: Expression | In terms of sum and product
row: $\alpha^2+\beta^2$ | [[$(\alpha+\beta)^2-2\alpha\beta$]]
row: $\dfrac1\alpha+\dfrac1\beta$ | [[$\dfrac{\alpha+\beta}{\alpha\beta}$]]
row: $(\alpha-\beta)^2$ | [[$(\alpha+\beta)^2-4\alpha\beta$]]
row: $\alpha^2\beta+\alpha\beta^2$ | [[$\alpha\beta(\alpha+\beta)$]]
row: $\dfrac\alpha\beta+\dfrac\beta\alpha$ | [[$\dfrac{(\alpha+\beta)^2-2\alpha\beta}{\alpha\beta}$]]
```

```ng-numerical
id: num-sum-of-squares-of-zeros
title: Sum of squares of the zeros
question: If $\alpha$ and $\beta$ are the zeros of $x^2-{{m+n}}x+{{m*n}}$, find $\alpha^2+\beta^2$.
var: m | 1 | 5 | 1
var: n | 6 | 9 | 1
answer: m^2+n^2
dp: 0
tol: 0.01
step: $\alpha+\beta={{m+n}}$ and $\alpha\beta={{m*n}}$
step: $\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta={{(m+n)^2:0}}-{{2*m*n:0}}=$ **{{m^2+n^2:0}}**
```

A last standard type gives a condition on the zeros. If one zero of $3x^2+8x+k$ is the reciprocal of the other, the product of the zeros is 1, so $\dfrac k3=1$ and $k=3$. If the zeros are equal in size and opposite in sign, their sum is 0, so $b=0$.

```ng-explain
id: explain-zeros-coefficients
prompt: In three lines, explain why the sum of the zeros of ax² + bx + c is −b/a.
lines: 3
answer: If the zeros are α and β, the polynomial is a(x − α)(x − β). Multiplying out gives ax² − a(α + β)x + aαβ. Comparing the x terms, −a(α + β) = b, so α + β = −b/a.
```

**In one breath:** Sum of zeros $=-\dfrac ba$, product $=\dfrac ca$. From sum $S$ and product $P$ the polynomial is $x^2-Sx+P$. Write any expression in $\alpha,\beta$ using the sum and the product.
