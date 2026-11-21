# Ch 7 · Integrals

Differentiation takes a function and gives its slope. Integration runs the film backwards: given the slope, find the function. That one idea, plus a handful of techniques for undoing the chain rule and the product rule, is the whole chapter. It is also the largest single chapter in the paper, so the methods here are worth practising until choosing one is automatic.

## Why integrals exist

Long before anyone could differentiate, people needed areas. A rectangle or a triangle is easy. But what is the area inside a curve, such as a field beside a bending river, or a slice of a parabola? About 2,200 years ago Archimedes found a way: fill the region with simple shapes, more and more of them, each smaller than the last, and add them up. He used it to show that a slice cut from a parabola has exactly $\dfrac43$ of the area of the triangle that fits inside it.

<figure class="fig" id="ch07-strips">
<svg viewBox="0 0 320 196" role="img" aria-label="Area under a curve cut into thin vertical strips" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M30,160 H304 M40,170 V14" stroke-width="1"/><rect x="60" y="143.5" width="25" height="16.5" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><rect x="85" y="136.8" width="25" height="23.2" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><rect x="110" y="128.6" width="25" height="31.4" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><rect x="135" y="118.9" width="25" height="41.1" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><rect x="160" y="107.7" width="25" height="52.3" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><rect x="185" y="95.0" width="25" height="65.0" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><rect x="210" y="80.8" width="25" height="79.2" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><rect x="235" y="65.1" width="25" height="94.9" fill="#E0B400" fill-opacity="0.3" stroke-width="0.8"/><path d="M40,150.0 L50,148.3 L60,146.3 L70,144.1 L80,141.7 L90,139.0 L100,136.1 L110,132.9 L120,129.5 L130,125.9 L140,122.0 L150,117.9 L160,113.5 L170,108.9 L180,104.1 L190,99.0 L200,93.7 L210,88.1 L220,82.3 L230,76.3 L240,70.0 L250,63.5 L260,56.7 L270,49.7 L280,42.5 L290,35.0" class="u" stroke-width="2"/><text x="60" y="176" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">a</text><text x="260" y="176" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">b</text><text x="300" y="174" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="34" y="18" font-size="11" text-anchor="end" fill="currentColor" stroke="none">y</text><text x="232" y="34" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">y = f(x)</text><text x="160" y="190" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">one strip: height f(x), width dx</text></svg>
<figcaption>Cut the region into thin strips and add them up: that sum, with the strips made thinner and thinner, is the integral.</figcaption>
</figure>

For nearly two thousand years every new curve needed a new clever trick. Then, in the 1600s, Isaac Newton and Gottfried Leibniz, working separately, noticed something astonishing: finding an area is the *reverse* of finding a slope. If you can differentiate, you can integrate by running the process backwards, and no clever adding of strips is needed. Leibniz gave us the notation. His sign $\int$ is a stretched letter S, for *summa*, the Latin word for sum, and $dx$ is the width of one thin strip. So $\displaystyle\int f(x)\,dx$ still says what Archimedes did: add up strips of height $f(x)$ and width $dx$.

That one idea runs a great deal of the modern world. The distance a car covers is the integral of its speed. The units on an electricity bill are the integral of power over time. Engineers integrate to find the work done by a force, the volume of a dam, the amount of medicine in the blood over a day. In your own syllabus, the next chapter uses it for areas, and Probability and Physics use it all the time.

So this chapter has only two jobs: learn the reverse of each derivative you know, and learn a few techniques for the integrals that are not on that list.

**In one breath:** An integral is a sum of infinitely many thin strips. Newton and Leibniz found that this sum is the reverse of differentiation, which is why the whole chapter is "differentiation backwards".

## Integration as the reverse of differentiation

If $\dfrac{d}{dx}F(x)=f(x)$, then $\displaystyle\int f(x)\,dx=F(x)+C$. The constant $C$ is there because many functions share the same derivative: $x^2$, $x^2+5$ and $x^2-3$ all differentiate to $2x$.

So every derivative you know gives an integral for free: $\displaystyle\int x^n\,dx=\dfrac{x^{n+1}}{n+1}+C$ (for $n\ne-1$), $\displaystyle\int\dfrac{dx}{x}=\log|x|+C$, $\displaystyle\int e^x\,dx=e^x+C$, $\displaystyle\int\sec^2x\,dx=\tan x+C$, $\displaystyle\int\dfrac{dx}{1+x^2}=\tan^{-1}x+C$, and so on. When the inside is $ax+b$ instead of $x$, divide by $a$: $\displaystyle\int\cos3x\,dx=\dfrac13\sin3x+C$.

:::tip The constant of integration
Every indefinite integral ends with $+C$. Leaving it out costs ½ mark each time, and it is the easiest ½ mark in the paper to keep.
:::

**In one breath:** Integration undoes differentiation, up to a constant. Know the basic list, add $+C$, and divide by the coefficient of $x$ when the inside is linear.

## Which method? Read the integrand first

Most marks in this chapter are lost before any integrating starts, by picking the wrong method. So spend the first ten seconds only *looking*. Ask the questions below in this order and stop at the first "yes".

```ng-steps
id: steps-which-method
title: The method ladder: stop at the first yes
step: **Can I simplify it first?** Expand a bracket, divide term by term, or use a trig identity. Many 2-markers finish here.
step: **Is a function sitting next to its own derivative?** Substitute: put that function equal to $t$.
step: **Is there a quadratic in the denominator (with or without a root) and nothing to substitute?** Complete the square and use one of the six special integrals. Linear numerator: write it as $A\times$(derivative of the quadratic) $+B$.
step: **Is it a fraction whose denominator factorises?** Partial fractions. Divide first if the top is not of lower degree.
step: **Is it a product of two different kinds of function, or a lone $\log x$ or $\tan^{-1}x$?** Integration by parts with ILATE. For $e^x$ times a sum, look for $f+f'$.
step: **Are there limits?** Look at them before anything else: $-a$ to $a$ (odd or even?), $0$ to $\dfrac\pi2$ or $0$ to $\pi$ (use a property), a modulus (split the range).
```

Whatever you get, you can always check an indefinite integral in ten seconds: differentiate your answer. If you do not get the integrand back, there is a slip.

```ng-fill
id: fill-spot-the-method
title: Spot the method before you integrate
cols: Integrand | Method
row: $\dfrac{2x}{1+x^2}$ | [[substitution: $t=1+x^2$]]
row: $\dfrac{1}{x^2+4x+8}$ | [[complete the square, then $\tan^{-1}$]]
row: $\dfrac{1}{x^2+4x+3}$ | [[it factorises: partial fractions]]
row: $x\cos x$ | [[by parts, $u=x$]]
row: $e^x(\tan x+\sec^2x)$ | [[$e^x[f+f']$ with $f=\tan x$]]
row: $\sin^2x$ | [[identity: $\dfrac{1-\cos2x}{2}$]]
row: $\dfrac{x^2+1}{x^2-1}$ | [[divide first, then partial fractions]]
row: $\int_{-1}^{1}x^3\cos x\,dx$ | [[odd function: 0]]
```

**In one breath:** Look before you integrate: simplify, substitution, special forms, partial fractions, by parts, in that order. With limits, check for a property first. Differentiate your answer to check it.

## Substitution

Substitution undoes the chain rule. Look for a function sitting inside another function, with its derivative (or a constant multiple of it) standing next to it. Call the inside $t$; the derivative and $dx$ together become $dt$.

:::skeleton Worked example: substitution (2 marks)
*Find $\displaystyle\int\dfrac{(\log x)^2}{x}\,dx$.*

Put $\log x=t$, so $\dfrac1x\,dx=dt$ [½]

$\displaystyle\int t^2\,dt=\dfrac{t^3}{3}+C$ [1]

$=\boxed{\dfrac{(\log x)^3}{3}+C}$ [½]
:::

The same idea gives four results you should simply know: $\displaystyle\int\tan x\,dx=\log|\sec x|+C$, $\displaystyle\int\cot x\,dx=\log|\sin x|+C$, $\displaystyle\int\sec x\,dx=\log|\sec x+\tan x|+C$ and $\displaystyle\int\operatorname{cosec}x\,dx=\log|\operatorname{cosec}x-\cot x|+C$.

Powers of sine and cosine cannot be integrated as they stand. Use an identity to lower the power first.

:::skeleton Worked example: a trigonometric identity (2 marks)
*Find $\displaystyle\int\cos^2x\,dx$.*

$\cos^2x=\dfrac{1+\cos2x}{2}$ [1]

$\displaystyle\int\dfrac{1+\cos2x}{2}\,dx=\boxed{\dfrac x2+\dfrac{\sin2x}{4}+C}$ [1]
:::

```ng-mnemonic
id: spot-the-derivative
title: When to substitute
trick: **Spot a function sitting next to its own derivative**
meaning: $\int\dfrac{f'(x)}{f(x)}\,dx=\log\lvert f(x)\rvert+C$ and $\int f'(x)\,[f(x)]^n\,dx=\dfrac{[f(x)]^{n+1}}{n+1}+C$.
meaning: Put $t$ = the inside function; its derivative, already present, becomes $dt$.
prompt: What do you look for before choosing a substitution?
```

**In one breath:** Spot "inside function, with its derivative beside it", call the inside $t$. For $\sin^2x$, $\cos^2x$ use the double-angle identities before integrating.

## Trigonometric integrals

Trigonometric integrals look frightening, but there are only a few moves, and each one turns the integrand into something from the basic list.

**Even power: lower it.** $\sin^2x=\dfrac{1-\cos2x}{2}$ and $\cos^2x=\dfrac{1+\cos2x}{2}$, as in the example above. Also $\tan^2x=\sec^2x-1$ and $\cot^2x=\operatorname{cosec}^2x-1$, which integrate at once.

**Odd power: keep one factor aside.** Convert the rest with $\sin^2x+\cos^2x=1$, and the factor you kept becomes the $dt$.

:::skeleton Worked example: an odd power (2 marks)
*Find $\displaystyle\int\sin^3x\,dx$.*

$\sin^3x=\sin^2x\cdot\sin x=(1-\cos^2x)\sin x$. Put $\cos x=t$, so $-\sin x\,dx=dt$ [1]

$-\displaystyle\int(1-t^2)\,dt=-t+\dfrac{t^3}{3}+C=\boxed{-\cos x+\dfrac{\cos^3x}{3}+C}$ [1]
:::

**Product of a sine and a cosine of different angles: turn it into a sum.** $2\sin A\cos B=\sin(A+B)+\sin(A-B)$. So $\displaystyle\int\sin3x\cos2x\,dx=\dfrac12\int(\sin5x+\sin x)\,dx=-\dfrac{\cos5x}{10}-\dfrac{\cos x}{2}+C$.

Three small tricks cover most of the remaining questions.

:::tip Trick 1: write 1 as sin²x + cos²x
$\dfrac{1}{\sin^2x\cos^2x}=\dfrac{\sin^2x+\cos^2x}{\sin^2x\cos^2x}=\sec^2x+\operatorname{cosec}^2x$, so the integral is $\tan x-\cot x+C$.
:::

:::tip Trick 2: multiply by the conjugate
For $\dfrac{1}{1+\sin x}$ multiply top and bottom by $1-\sin x$: you get $\dfrac{1-\sin x}{\cos^2x}=\sec^2x-\sec x\tan x$, so the integral is $\tan x-\sec x+C$.
:::

:::skeleton Worked example: Trick 3, rewrite the angle (3 marks)
*Find $\displaystyle\int\dfrac{\sin x}{\sin(x+a)}\,dx$.*

Write the angle on top in terms of the angle below: $x=(x+a)-a$ [½]

$\sin x=\sin(x+a)\cos a-\cos(x+a)\sin a$ [1]

$I=\displaystyle\int\big[\cos a-\sin a\cot(x+a)\big]dx$ [½]

$=\boxed{x\cos a-\sin a\,\log|\sin(x+a)|+C}$ [1]
:::

```ng-fill
id: fill-trig-moves
title: Trigonometric integrals: which move?
cols: You see | Do this
row: $\sin^2x$ or $\cos^2x$ | [[double-angle identity]]
row: $\sin^3x$, $\cos^5x$ (odd power) | [[keep one factor, convert the rest, substitute]]
row: $\sin3x\cos2x$ | [[product to sum]]
row: $\tan^2x$ | [[$\sec^2x-1$]]
row: $\dfrac{1}{\sin^2x\cos^2x}$ | [[write $1=\sin^2x+\cos^2x$]]
row: $\dfrac{1}{1+\sin x}$ | [[multiply by $1-\sin x$]]
row: $\dfrac{\sin x}{\sin(x+a)}$ | [[write $x=(x+a)-a$]]
```

**In one breath:** Even powers: double-angle identities. Odd powers: save one factor and substitute. Products: product-to-sum. If stuck, write 1 as $\sin^2x+\cos^2x$, multiply by the conjugate, or rewrite the angle.

## Integrals with a quadratic in the denominator

Six standard results cover every integral whose denominator is a quadratic or the square root of one.

:::formula The six special integrals
$\displaystyle\int\dfrac{dx}{x^2+a^2}=\dfrac1a\tan^{-1}\dfrac xa$   $\displaystyle\int\dfrac{dx}{x^2-a^2}=\dfrac{1}{2a}\log\left|\dfrac{x-a}{x+a}\right|$   $\displaystyle\int\dfrac{dx}{a^2-x^2}=\dfrac{1}{2a}\log\left|\dfrac{a+x}{a-x}\right|$<br>
$\displaystyle\int\dfrac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\dfrac xa$   $\displaystyle\int\dfrac{dx}{\sqrt{x^2\pm a^2}}=\log\left|x+\sqrt{x^2\pm a^2}\right|$   (each $+C$)
:::

A general quadratic $ax^2+bx+c$ is brought to one of these shapes by **completing the square**.

To pick the right one of the six, look at two things only: is there a root, and what is the sign between the squares? No root and a plus sign gives $\tan^{-1}$; no root and a minus sign gives a log of a ratio. With a root, $a^2-x^2$ gives $\sin^{-1}$, and $x^2\pm a^2$ gives $\log\left|x+\sqrt{\ }\right|$.

:::skeleton Worked example: complete the square (2 marks)
*Find $\displaystyle\int\dfrac{dx}{\sqrt{7-6x-x^2}}$.*

$7-6x-x^2=16-(x+3)^2$ [1]

$\displaystyle\int\dfrac{dx}{\sqrt{4^2-(x+3)^2}}=\boxed{\sin^{-1}\dfrac{x+3}{4}+C}$ [1]
:::

If the numerator is linear, $px+q$, split it into a multiple of the derivative of the quadratic plus a constant. The first piece is a substitution; the second is a standard form.

:::skeleton Worked example: linear over the root of a quadratic (3 marks)
*Find $\displaystyle\int\dfrac{x+3}{\sqrt{5-4x-x^2}}\,dx$.*

$\dfrac{d}{dx}(5-4x-x^2)=-4-2x$, and $x+3=-\dfrac12(-4-2x)+1$ [1]

First part: put $5-4x-x^2=t$: $-\dfrac12\displaystyle\int\dfrac{dt}{\sqrt t}=-\sqrt{5-4x-x^2}$ [1]

Second part: $5-4x-x^2=9-(x+2)^2$, giving $\sin^{-1}\dfrac{x+2}{3}$ [½]

$\boxed{-\sqrt{5-4x-x^2}+\sin^{-1}\dfrac{x+2}{3}+C}$ [½]
:::

When the root of a quadratic is in the numerator, complete the square in the same way and use these three.

:::formula Integrals of the root of a quadratic
$\displaystyle\int\sqrt{a^2-x^2}\,dx=\dfrac x2\sqrt{a^2-x^2}+\dfrac{a^2}{2}\sin^{-1}\dfrac xa$<br>
$\displaystyle\int\sqrt{x^2+a^2}\,dx=\dfrac x2\sqrt{x^2+a^2}+\dfrac{a^2}{2}\log\left|x+\sqrt{x^2+a^2}\right|$<br>
$\displaystyle\int\sqrt{x^2-a^2}\,dx=\dfrac x2\sqrt{x^2-a^2}-\dfrac{a^2}{2}\log\left|x+\sqrt{x^2-a^2}\right|$   (each $+C$)
:::

All three start with "half of $x$ times the same root"; then comes $\dfrac{a^2}{2}$ times the matching result from the six.

:::skeleton Worked example: root of a quadratic (3 marks)
*Find $\displaystyle\int\sqrt{x^2+4x+6}\,dx$.*

$x^2+4x+6=(x+2)^2+(\sqrt2)^2$ [1]

Use $\displaystyle\int\sqrt{X^2+a^2}\,dX$ with $X=x+2$, $a^2=2$ [1]

$\boxed{\begin{aligned}&\dfrac{x+2}{2}\sqrt{x^2+4x+6}\\&+\log\left|x+2+\sqrt{x^2+4x+6}\right|+C\end{aligned}}$ [1]
:::

```ng-fill
id: fill-standard-forms
title: Six standard forms
cols: Integral | Result (+ C)
row: $\int\dfrac{dx}{x^2+a^2}$ | [[$\dfrac1a\tan^{-1}\dfrac xa$]]
row: $\int\dfrac{dx}{x^2-a^2}$ | [[$\dfrac{1}{2a}\log\left\lvert\dfrac{x-a}{x+a}\right\rvert$]]
row: $\int\dfrac{dx}{a^2-x^2}$ | [[$\dfrac{1}{2a}\log\left\lvert\dfrac{a+x}{a-x}\right\rvert$]]
row: $\int\dfrac{dx}{\sqrt{a^2-x^2}}$ | [[$\sin^{-1}\dfrac xa$]]
row: $\int\dfrac{dx}{\sqrt{x^2+a^2}}$ | [[$\log\left\lvert x+\sqrt{x^2+a^2}\right\rvert$]]
row: $\int\dfrac{dx}{\sqrt{x^2-a^2}}$ | [[$\log\left\lvert x+\sqrt{x^2-a^2}\right\rvert$]]
```

```ng-steps
id: steps-quadratic-denominator
title: Integrals of (px + q) over a quadratic
step: Write the numerator as $px+q=A\cdot\dfrac{d}{dx}(\text{quadratic})+B$ and find $A$, $B$ by comparing coefficients.
step: Split into two integrals.
step: First part: put $t$ = the quadratic. It gives a log (no root) or $2\sqrt t$ (with root).
step: Second part: complete the square and use a standard form.
```

**In one breath:** Complete the square to reach a standard form. With a linear numerator, write it as $A\times(\text{derivative of the quadratic})+B$ and integrate the two parts separately.

## Partial fractions

A rational function whose denominator factorises can be split into simpler fractions that integrate to logs. The form you assume depends on the factors.

| Denominator contains | Assume |
|---|---|
| $(x-a)(x-b)$ | $\dfrac{A}{x-a}+\dfrac{B}{x-b}$ |
| $(x-a)^2$ | $\dfrac{A}{x-a}+\dfrac{B}{(x-a)^2}$ |
| $(x-a)(x^2+bx+c)$, quadratic not factorisable | $\dfrac{A}{x-a}+\dfrac{Bx+C}{x^2+bx+c}$ |

:::skeleton Worked example: partial fractions (3 marks)
*Find $\displaystyle\int\dfrac{x}{(x-1)(x-2)}\,dx$.*

Let $\dfrac{x}{(x-1)(x-2)}=\dfrac{A}{x-1}+\dfrac{B}{x-2}$ [½]

$x=A(x-2)+B(x-1)$. Put $x=1$: $A=-1$. Put $x=2$: $B=2$ [1]

$\displaystyle\int\left(\dfrac{-1}{x-1}+\dfrac{2}{x-2}\right)dx=\boxed{-\log|x-1|+2\log|x-2|+C}$ [1½]
:::

:::tip Improper fractions
If the degree of the numerator is not less than the degree of the denominator, divide first. Partial fractions only work on a proper fraction.
:::

:::skeleton Worked example: divide first (3 marks)
*Find $\displaystyle\int\dfrac{x^2+1}{x^2-5x+6}\,dx$.*

Same degree top and bottom, so divide: $\dfrac{x^2+1}{x^2-5x+6}=1+\dfrac{5x-5}{(x-2)(x-3)}$ [1]

$\dfrac{5x-5}{(x-2)(x-3)}=\dfrac{A}{x-2}+\dfrac{B}{x-3}$. Put $x=2$: $A=-5$. Put $x=3$: $B=10$ [1]

$\boxed{x-5\log|x-2|+10\log|x-3|+C}$ [1]
:::

:::tip A quick check for the constants
For factors that are all different and linear, cover the factor $(x-a)$ in the original fraction and put $x=a$ in what is left: that is the constant over $(x-a)$. Use it to check $A$ and $B$ in seconds; in the answer, still show the "put $x=\dots$" line.
:::

When only $x^2$ appears, as in $\dfrac{x^2}{(x^2+1)(x^2+4)}$, write $x^2=y$ to find the partial fractions, then put $x^2$ back before integrating.

```ng-fill
id: fill-partial-fractions
title: Which partial fractions?
cols: Denominator has | Write
row: $(x-a)(x-b)$ | [[$\dfrac{A}{x-a}+\dfrac{B}{x-b}$]]
row: $(x-a)^2(x-b)$ | [[$\dfrac{A}{x-a}+\dfrac{B}{(x-a)^2}+\dfrac{C}{x-b}$]]
row: $(x-a)(x^2+bx+c)$, quadratic not factorisable | [[$\dfrac{A}{x-a}+\dfrac{Bx+C}{x^2+bx+c}$]]
row: degree of numerator ≥ degree of denominator | [[divide first]]
```

**In one breath:** Write the form, find the constants by putting convenient values of $x$, integrate each piece to a log. Divide first if the fraction is improper.

## Integration by parts

Integration by parts undoes the product rule. It is the method for a product of two different kinds of function.

:::formula Integration by parts
$$\begin{aligned}\int u\,v\,dx&=u\int v\,dx\\ &\quad-\int\left[\frac{du}{dx}\int v\,dx\right]dx\end{aligned}$$
Choose the first function $u$ by **ILATE**: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.
:::

:::skeleton Worked example: by parts (3 marks)
*Find $\displaystyle\int x\tan^{-1}x\,dx$.*

Take $u=\tan^{-1}x$ (inverse comes first) and $v=x$: $I=\tan^{-1}x\cdot\dfrac{x^2}{2}-\displaystyle\int\dfrac{1}{1+x^2}\cdot\dfrac{x^2}{2}\,dx$ [1]

$=\dfrac{x^2}{2}\tan^{-1}x-\dfrac12\displaystyle\int\left(1-\dfrac{1}{1+x^2}\right)dx$ [1]

$=\dfrac{x^2}{2}\tan^{-1}x-\dfrac x2+\dfrac12\tan^{-1}x+C=\boxed{\dfrac{x^2+1}{2}\tan^{-1}x-\dfrac x2+C}$ [1]
:::

A function standing alone can still be a product: write $\log x$ as $\log x\times1$.

:::skeleton Worked example: a lone log (2 marks)
*Find $\displaystyle\int\log x\,dx$.*

Take $u=\log x$ and $v=1$: $I=\log x\cdot x-\displaystyle\int\dfrac1x\cdot x\,dx$ [1]

$=\boxed{x\log x-x+C}$ [1]
:::

Sometimes by parts brings the original integral back. That is not a dead end: call the integral $I$ and solve for it.

:::skeleton Worked example: the integral that comes back (3 marks)
*Find $\displaystyle\int e^x\sin x\,dx$.*

Let $I=\displaystyle\int e^x\sin x\,dx$. By parts with $u=\sin x$, $v=e^x$: $I=e^x\sin x-\displaystyle\int e^x\cos x\,dx$ [1]

By parts again: $\displaystyle\int e^x\cos x\,dx=e^x\cos x+\int e^x\sin x\,dx=e^x\cos x+I$ [1]

$I=e^x\sin x-e^x\cos x-I\Rightarrow2I=e^x(\sin x-\cos x)$, so $\boxed{I=\dfrac{e^x}{2}(\sin x-\cos x)+C}$ [1]
:::

One special pattern saves a lot of work. Because $\dfrac{d}{dx}\left[e^xf(x)\right]=e^x\left[f(x)+f'(x)\right]$,

:::formula The $e^x$ shortcut
$$\int e^x\left[f(x)+f'(x)\right]dx=e^xf(x)+C$$
Example: $\displaystyle\int e^x(\sin x+\cos x)\,dx=e^x\sin x+C$
:::

In the exam, show which part is $f$ and which is $f'$; that identification is the method mark. Often you must split the bracket yourself to see them.

:::skeleton Worked example: finding f and f′ (3 marks)
*Find $\displaystyle\int e^x\,\dfrac{1+\sin x}{1+\cos x}\,dx$.*

$\dfrac{1+\sin x}{1+\cos x}=\dfrac{1+2\sin\frac x2\cos\frac x2}{2\cos^2\frac x2}=\dfrac12\sec^2\dfrac x2+\tan\dfrac x2$ [1]

Here $f(x)=\tan\dfrac x2$ and $f'(x)=\dfrac12\sec^2\dfrac x2$, so the integrand is $e^x[f(x)+f'(x)]$ [1]

$\boxed{e^x\tan\dfrac x2+C}$ [1]
:::

```ng-mnemonic
id: ilate
title: Which function goes first?
trick: **I L A T E**
meaning: **I**nverse trig, **L**ogarithmic, **A**lgebraic, **T**rigonometric, **E**xponential: the one that comes earlier is the first function $u$.
meaning: $\int x\,e^x\,dx$: $x$ (A) before $e^x$ (E). $\int\log x\,dx$: take $\log x$ first and 1 as the second function.
prompt: In ∫ x² log x dx, which is the first function?
```

```ng-steps
id: steps-by-parts
title: Integration by parts
step: Choose the first function $u$ by ILATE; the other is $v$.
step: Write $\int u\,v\,dx=u\int v\,dx-\int\left[\dfrac{du}{dx}\int v\,dx\right]dx$.
step: Integrate $v$ once; do not add a constant at this stage.
step: Simplify the new integral and integrate it; repeat by parts if needed.
step: Add $+C$ at the very end.
```

**In one breath:** For a product, pick $u$ by ILATE and apply the formula. For $e^x$ times a sum, look for $f+f'$.

## Definite integrals

A definite integral has limits and gives a number: $\displaystyle\int_a^bf(x)\,dx=F(b)-F(a)$. There is no $+C$.

When you substitute in a definite integral, change the limits to the new variable at once. Then you never have to go back to $x$.

:::skeleton Worked example: definite integral by substitution (2 marks)
*Evaluate $\displaystyle\int_0^1\dfrac{\tan^{-1}x}{1+x^2}\,dx$.*

Put $\tan^{-1}x=t$, $\dfrac{dx}{1+x^2}=dt$; when $x=0$, $t=0$; when $x=1$, $t=\dfrac\pi4$ [1]

$\displaystyle\int_0^{\pi/4}t\,dt=\left[\dfrac{t^2}{2}\right]_0^{\pi/4}=\boxed{\dfrac{\pi^2}{32}}$ [1]
:::

:::tip Limits after substitution
New variable, new limits. Using the old limits with the new variable is the commonest error in this section.
:::

```ng-numerical
id: num-power-definite
title: A definite integral with fresh numbers
question: Evaluate $\displaystyle\int_0^{\,{{a}}\,}x^{\,{{n}}\,}\,dx$.
var: a | 1 | 4 | 1
var: n | 1 | 3 | 1
answer: a^(n+1)/(n+1)
dp: 2
step: $\displaystyle\int x^{\,{{n}}\,}dx=\dfrac{x^{\,{{n+1:0}}\,}}{\,{{n+1:0}}\,}$
step: Upper limit minus lower limit: $\dfrac{\,{{a}}^{\,{{n+1:0}}\,}}{\,{{n+1:0}}\,}-0=$ **{{a^(n+1)/(n+1):2}}**
```

**In one breath:** Find an antiderivative, subtract its values at the limits. After a substitution, change the limits too.

## Properties of definite integrals

Some definite integrals are impossible to do head-on but collapse when you use a property. The most useful one replaces $x$ by "upper limit plus lower limit minus $x$".

:::formula Properties to use
$\displaystyle\int_a^bf(x)\,dx=\int_a^bf(a+b-x)\,dx$   $\displaystyle\int_0^af(x)\,dx=\int_0^af(a-x)\,dx$<br>
$\displaystyle\int_{-a}^{a}f(x)\,dx=2\int_0^af(x)\,dx$ if $f$ is even, and $0$ if $f$ is odd<br>
$\displaystyle\int_0^{2a}f(x)\,dx=2\int_0^af(x)\,dx$ if $f(2a-x)=f(x)$, and $0$ if $f(2a-x)=-f(x)$<br>
$\displaystyle\int_a^bf(x)\,dx=\int_a^cf(x)\,dx+\int_c^bf(x)\,dx$
:::

The routine: call the integral $I$, apply the property to get a second expression for $I$, add the two, and the awkward part cancels.

:::skeleton Worked example: definite integral by property (5 marks)
*Evaluate $\displaystyle\int_0^\pi\dfrac{x\sin x}{1+\cos^2x}\,dx$.*

Let $I=\displaystyle\int_0^\pi\dfrac{x\sin x}{1+\cos^2x}\,dx$ … (1). Using $\displaystyle\int_0^af(x)\,dx=\int_0^af(a-x)\,dx$: [½]

$I=\displaystyle\int_0^\pi\dfrac{(\pi-x)\sin x}{1+\cos^2x}\,dx$ … (2) [1]

Adding (1) and (2): $2I=\pi\displaystyle\int_0^\pi\dfrac{\sin x}{1+\cos^2x}\,dx$ [1]

Put $\cos x=t$, $-\sin x\,dx=dt$; $x=0\Rightarrow t=1$, $x=\pi\Rightarrow t=-1$: $2I=\pi\displaystyle\int_{-1}^{1}\dfrac{dt}{1+t^2}=\pi\left[\tan^{-1}t\right]_{-1}^{1}$ [1½]

$2I=\pi\left(\dfrac\pi4+\dfrac\pi4\right)=\dfrac{\pi^2}{2}$, so $\boxed{I=\dfrac{\pi^2}{4}}$ [1]
:::

:::tip When to think of a property
Three signals: the limits are $0$ to $\dfrac\pi2$ and the integrand swaps $\sin$ and $\cos$ nicely; an $x$ multiplies a trigonometric expression with limits $0$ to $\pi$; or the limits are $-a$ to $a$. If you see one of these, do not start integrating: name the integral $I$ and apply the property.
:::

A modulus needs the splitting property. Find where the expression inside changes sign and break the integral there.

:::skeleton Worked example: integral of a modulus (3 marks)
*Evaluate $\displaystyle\int_{-1}^{2}|x^3-x|\,dx$.*

$x^3-x=x(x-1)(x+1)$ is $\ge0$ on $[-1,0]$, $\le0$ on $[0,1]$ and $\ge0$ on $[1,2]$ [1]

$I=\displaystyle\int_{-1}^{0}(x^3-x)\,dx-\int_0^1(x^3-x)\,dx+\int_1^2(x^3-x)\,dx$ [1]

$=\dfrac14+\dfrac14+\dfrac94=\boxed{\dfrac{11}{4}}$ [1]
:::

```ng-mnemonic
id: king-property
title: The property that solves most 5-markers
trick: The **king** property: replace $x$ by **(upper + lower − x)**
meaning: $\int_a^bf(x)\,dx=\int_a^bf(a+b-x)\,dx$; with lower limit 0, replace $x$ by $a-x$.
meaning: Then **add** the two forms: $2I$ is usually an easy integral.
prompt: What do you replace x by in the property for ∫ from a to b?
```

```ng-derive
id: derive-king-property
title: Use the property
prompt: Evaluate $\displaystyle\int_0^{\pi/2}\dfrac{\sin x}{\sin x+\cos x}\,dx$.
time: 4
check: Let $I$ be the integral; replace $x$ by $\dfrac\pi2-x$: $I=\displaystyle\int_0^{\pi/2}\dfrac{\cos x}{\cos x+\sin x}\,dx$ | 1
check: Add: $2I=\displaystyle\int_0^{\pi/2}1\,dx=\dfrac\pi2$ | 1.5
check: $I=\dfrac\pi4$ | 0.5
```

```ng-derive
id: derive-log-one-plus-tan
title: A property question with a log
prompt: Evaluate $\displaystyle\int_0^{\pi/4}\log(1+\tan x)\,dx$.
time: 6
check: Let $I$ be the integral; replace $x$ by $\dfrac\pi4-x$ | 1
check: $\tan\left(\dfrac\pi4-x\right)=\dfrac{1-\tan x}{1+\tan x}$, so $1+\tan\left(\dfrac\pi4-x\right)=\dfrac{2}{1+\tan x}$ | 1.5
check: $I=\displaystyle\int_0^{\pi/4}\log2\,dx-I$, so $2I=\dfrac\pi4\log2$ | 1.5
check: $I=\dfrac\pi8\log2$ | 1
```

```ng-explain
id: explain-which-method
prompt: Without integrating, say in three lines how you decide between substitution, partial fractions and by parts.
lines: 3
answer: Substitution when a function sits beside its own derivative. Partial fractions when it is a fraction of polynomials whose denominator factorises. By parts when it is a product of two different kinds of function, or a lone log or inverse trig function.
```

**In one breath:** Name the integral $I$, state the property, add the two forms of $I$. For a modulus, split the range where the inside changes sign.
