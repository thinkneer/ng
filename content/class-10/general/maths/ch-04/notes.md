# Ch 4 · Quadratic Equations

Put a quadratic polynomial equal to zero and you have a quadratic equation. It appears whenever two unknown quantities are multiplied: the length and breadth of a plot, a speed and a time, a number and the next one. This chapter gives you two ways to solve any quadratic, and a quick test that tells you what kind of answers to expect before you start. It is the heaviest chapter of Unit II (Algebra, 20 marks), and usually brings one long word problem.

:::tip You need from earlier
- **Factorising a quadratic** by splitting the middle term (Class 9).
- **Identities:** $(a+b)^2=a^2+2ab+b^2$ and $(a-b)^2=a^2-2ab+b^2$.
- **Square roots:** $\sqrt{49}=7$; a negative number has no real square root.
- **Zeros of a quadratic polynomial** (Ch 2): where its graph meets the $x$-axis.
:::

## A four-thousand-year-old problem

Clay tablets from ancient Babylon, about four thousand years old, already ask: a field has a given area, and its length exceeds its breadth by so much; find the sides. That is a quadratic equation, and the scribes had a recipe for it.

Indian mathematicians turned the recipe into a general rule. Brahmagupta, in 628 CE, gave a method that works for any such equation, and the formula you will learn here is often called **Shridharacharya's rule** in India, after the mathematician Sridhara, who is credited with stating it clearly a few centuries later. The same formula is used today to find where a thrown ball lands, how wide a path around a garden can be, and when a company's profit is zero.

**In one breath:** Quadratic equations come from problems where two unknowns are multiplied. People have solved them for four thousand years; the general formula is known in India as Shridharacharya's rule.

## Standard form and roots

The **standard form** of a quadratic equation is

$$ax^2+bx+c=0,\qquad a\ne0$$

A **root** (or solution) is a value of $x$ that satisfies it. The roots of the equation $ax^2+bx+c=0$ are exactly the zeros of the polynomial $ax^2+bx+c$, so there are at most two.

Before anything else, simplify and check that the equation really is quadratic. $(x-2)^2+1=2x-3$ becomes $x^2-6x+8=0$: quadratic. But $x(x+1)+8=(x+2)(x-2)$ becomes $x+12=0$: the $x^2$ terms cancel, so it is linear, not quadratic.

:::tip Bring everything to one side first
Read $a$, $b$ and $c$ only from the standard form. In $2x^2=5x-3$, move the terms: $2x^2-5x+3=0$, so $b=-5$ and $c=3$.
:::

**In one breath:** Simplify to $ax^2+bx+c=0$ with $a\ne0$; if the $x^2$ term survives it is quadratic. Roots of the equation = zeros of the polynomial.

## Solving by factorisation

If the left side factorises, each factor gives a root, because a product is zero only when one of its factors is zero.

:::skeleton Worked example: factorisation (2 marks)
*Solve $2x^2-5x+3=0$.*

$2x^2-2x-3x+3=0\Rightarrow2x(x-1)-3(x-1)=0\Rightarrow(2x-3)(x-1)=0$ [1]

$2x-3=0$ or $x-1=0$, so $\boxed{x=\dfrac32\text{ or }x=1}$ [1]
:::

The splitting rule is the one from Polynomials: find two numbers whose product is $a\times c$ and whose sum is $b$. For $6x^2-x-2=0$: product $-12$, sum $-1$, so the numbers are $-4$ and $3$; $(3x-2)(2x+1)=0$ gives $x=\dfrac23$ or $x=-\dfrac12$.

:::tip Never divide by x
In $x^2=5x$ do not cancel $x$: you lose the root $x=0$. Write $x^2-5x=0$, then $x(x-5)=0$, so $x=0$ or $x=5$.
:::

**In one breath:** Standard form, split the middle term, factorise, and put each factor equal to zero. Never cancel a factor containing $x$.

## The quadratic formula

Not every quadratic factorises neatly. The formula works every time.

:::formula Quadratic formula (Shridharacharya's rule)
$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$
for $ax^2+bx+c=0$, provided $b^2-4ac\ge0$
:::

Where does it come from? Divide the equation by $a$, move the constant across, and add $\left(\dfrac{b}{2a}\right)^2$ to both sides so that the left side becomes a perfect square, $\left(x+\dfrac{b}{2a}\right)^2$. Taking the square root gives the formula. This "completing the square" method is not asked as a separate question in boards now, but the idea returns in Classes 11 and 12, so it is worth seeing once.

```ng-mnemonic
id: quadratic-formula-chant
title: The formula, said aloud
trick: "**Minus b, plus or minus the root of b squared minus four a c, all over two a**"
meaning: Say it in that rhythm three times while writing it; the words are the formula in order.
meaning: "All over $2a$": the whole numerator, including the $-b$, is divided by $2a$.
prompt: Write the quadratic formula for ax² + bx + c = 0.
```

```ng-steps
id: steps-quadratic-formula
title: Using the quadratic formula
step: Write the equation in standard form and list $a$, $b$, $c$ with their signs.
step: Work out the discriminant $D=b^2-4ac$ on its own line.
step: If $D<0$, stop: there are no real roots. Otherwise find $\sqrt D$.
step: Substitute in $x=\dfrac{-b\pm\sqrt D}{2a}$ and write the two roots separately.
```

:::skeleton Worked example: the formula (3 marks)
*Solve $3x^2-5x+2=0$ using the quadratic formula.*

$a=3$, $b=-5$, $c=2$. $D=b^2-4ac=25-24=1$ [1]

$x=\dfrac{-(-5)\pm\sqrt1}{2\times3}=\dfrac{5\pm1}{6}$ [1]

$\boxed{x=1\text{ or }x=\dfrac23}$ [1]
:::

:::tip The sign of −b
If $b=-5$, then $-b=+5$. Writing $-5$ again is the commonest slip with the formula. Put $b$ in brackets when you substitute.
:::

```ng-compare
id: factorisation-vs-formula
title: Factorisation or formula?
cols: Factorisation | Quadratic formula
row: Use when | the middle term splits easily | it does not split, or the question says "use the formula"
row: Speed | faster | always works
row: Roots that are surds | cannot find them | finds them
row: Marks are in | the factorised form and both roots | $D$ worked out, substitution, both roots
```

**In one breath:** List $a,b,c$ with signs, find $D=b^2-4ac$, then $x=\dfrac{-b\pm\sqrt D}{2a}$. It works for every quadratic that has real roots.

## The discriminant and the nature of roots

The expression under the root sign decides everything, so it has a name: the **discriminant**, $D=b^2-4ac$.

:::formula Nature of roots
$D>0$: two distinct real roots<br>
$D=0$: two equal real roots, each $-\dfrac{b}{2a}$<br>
$D<0$: no real roots
:::

```ng-graph
id: graph-discriminant
title: See the discriminant change
x: x | -5 | 3
y: value of y | -6 | 8
curve: y = x² + 2x + c | x^2 + 2*x + c
slider: c | constant $c$ | -4 | 4 | 0.5 | -3
preset: D > 0 (c = −3) | c=-3
preset: D = 0 (c = 1) | c=1
preset: D < 0 (c = 3) | c=3
note: Here $D=4-4c$. With $c=-3$, $D=16$ and the curve cuts the $x$-axis twice. With $c=1$, $D=0$ and it just touches. With $c=3$, $D=-8$ and it never reaches the axis: no real roots.
```

```ng-mnemonic
id: d-two-one-none
title: What D tells you
trick: **D positive: two. D zero: one, twice. D negative: none.**
meaning: $D>0$ two different real roots; $D=0$ the same root twice (equal roots); $D<0$ no real roots.
prompt: What does the sign of the discriminant say about the roots?
```

:::skeleton Worked example: nature of roots (2 marks)
*Find the nature of the roots of $x^2+4x+5=0$.*

$a=1$, $b=4$, $c=5$. $D=b^2-4ac=16-20=-4$ [1]

$D<0$, so the equation has **no real roots** [1]
:::

A very common question gives a condition and asks for $k$.

:::skeleton Worked example: equal roots (3 marks)
*Find the values of $k$ for which $kx(x-2)+6=0$ has two equal roots.*

Standard form: $kx^2-2kx+6=0$, so $a=k$, $b=-2k$, $c=6$ [1]

Equal roots: $D=0\Rightarrow4k^2-24k=0\Rightarrow4k(k-6)=0\Rightarrow k=0$ or $k=6$ [1]

$k=0$ makes the equation $6=0$, which is not a quadratic, so it is rejected. $\boxed{k=6}$ [1]
:::

```ng-numerical
id: num-discriminant
title: Discriminant with fresh numbers
question: Find the discriminant of ${{a}}x^2+{{b}}x+{{c}}=0$.
var: a | 1 | 4 | 1
var: b | 2 | 9 | 1
var: c | 1 | 5 | 1
answer: b^2-4*a*c
dp: 0
tol: 0.01
step: $D=b^2-4ac=({{b}})^2-4({{a}})({{c}})$
step: $={{b^2:0}}-{{4*a*c:0}}=$ **{{b^2-4*a*c:0}}**
```

```ng-fill
id: fill-nature-of-roots
title: Discriminant and roots
cols: Discriminant | Roots | Graph and the x-axis
row: $D>0$ | [[two distinct real roots]] | [[cuts at two points]]
row: $D=0$ | [[two equal real roots]] | [[touches at one point]]
row: $D<0$ | [[no real roots]] | [[does not meet]]
```

**In one breath:** $D=b^2-4ac$. Positive: two distinct real roots. Zero: equal roots. Negative: no real roots. For "equal roots, find $k$", put $D=0$ and reject any $k$ that kills the $x^2$ term.

## Word problems

The long question is almost always a word problem. The equation is quadratic because two unknown quantities get multiplied, and one of the two roots usually has to be thrown away.

```ng-steps
id: steps-quadratic-word-problems
title: A quadratic word problem
step: Let the unknown be $x$ and write every other quantity in terms of $x$.
step: Translate the condition into an equation and bring it to standard form.
step: Solve by factorisation or the formula.
step: **Test both roots against the situation.** Reject a negative length, speed or age, or a non-integer count, and say why.
step: Answer in a sentence with units.
```

:::skeleton Worked example: consecutive integers (3 marks)
*Find two consecutive positive integers whose product is 306.*

Let the integers be $x$ and $x+1$. Then $x(x+1)=306\Rightarrow x^2+x-306=0$ [1]

$x^2+18x-17x-306=0\Rightarrow(x+18)(x-17)=0\Rightarrow x=-18$ or $x=17$ [1]

$x$ is positive, so $x=17$. The integers are $\boxed{17\text{ and }18}$ [1]
:::

:::skeleton Worked example: a train's speed (5 marks)
*A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.*

Let the speed be $x$ km/h. Time taken $=\dfrac{360}{x}$ h; at the higher speed, $\dfrac{360}{x+5}$ h [1]

$\dfrac{360}{x}-\dfrac{360}{x+5}=1$ [1]

$360(x+5)-360x=x(x+5)\Rightarrow x^2+5x-1800=0$ [1]

$(x+45)(x-40)=0\Rightarrow x=-45$ or $x=40$ [1]

Speed cannot be negative, so the speed of the train is $\boxed{40\text{ km/h}}$ [1]
:::

| Situation | Set-up |
|---|---|
| Consecutive integers | $x$, $x+1$ (consecutive odd or even: $x$, $x+2$) |
| Rectangle | area $=$ length × breadth, with one side in terms of the other |
| Speed and time | time $=\dfrac{\text{distance}}{\text{speed}}$; slower time − faster time = given difference |
| Two taps or pipes | $\dfrac1x+\dfrac{1}{x\pm k}=\dfrac{1}{\text{time together}}$ |
| Ages | product of ages some years ago or later |

```ng-derive
id: derive-rectangular-plot
title: A plot to work out in full
prompt: The area of a rectangular plot is 528 m². Its length is one metre more than twice its breadth. Find the length and the breadth.
time: 6
check: Breadth $x$ m, length $(2x+1)$ m | 0.5
check: $x(2x+1)=528$, that is $2x^2+x-528=0$ | 1
check: Factorised: $(x-16)(2x+33)=0$, so $x=16$ or $x=-\dfrac{33}{2}$ | 1
check: Negative breadth rejected, with reason | 0.5
check: Breadth 16 m, length 33 m | 1
```

```ng-explain
id: explain-reject-root
prompt: In three lines, explain why a quadratic word problem often has only one acceptable answer although the equation has two roots.
lines: 3
answer: The equation only knows the algebra, not the situation. Its second root may be negative or a fraction, which cannot be a length, a speed, an age or a count. So you test both roots against the question and reject the one that makes no sense, giving the reason.
```

**In one breath:** Let $x$ be the unknown, build the equation, solve, then test both roots against the story and reject the one that cannot be. Say why, and give units.
