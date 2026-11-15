# Ch 7 · Integrals

Differentiation takes a function and gives its slope. Integration runs the film backwards: given the slope, find the function. That one idea, plus a handful of techniques for undoing the chain rule and the product rule, is the whole chapter. It is also the largest single chapter in the paper, so the methods here are worth practising until choosing one is automatic.

## Integration as the reverse of differentiation

If $\dfrac{d}{dx}F(x)=f(x)$, then $\displaystyle\int f(x)\,dx=F(x)+C$. The constant $C$ is there because many functions share the same derivative: $x^2$, $x^2+5$ and $x^2-3$ all differentiate to $2x$.

So every derivative you know gives an integral for free: $\displaystyle\int x^n\,dx=\dfrac{x^{n+1}}{n+1}+C$ (for $n\ne-1$), $\displaystyle\int\dfrac{dx}{x}=\log|x|+C$, $\displaystyle\int e^x\,dx=e^x+C$, $\displaystyle\int\sec^2x\,dx=\tan x+C$, $\displaystyle\int\dfrac{dx}{1+x^2}=\tan^{-1}x+C$, and so on. When the inside is $ax+b$ instead of $x$, divide by $a$: $\displaystyle\int\cos3x\,dx=\dfrac13\sin3x+C$.

:::tip The constant of integration
Every indefinite integral ends with $+C$. Leaving it out costs ½ mark each time, and it is the easiest ½ mark in the paper to keep.
:::

**In one breath:** Integration undoes differentiation, up to a constant. Know the basic list, add $+C$, and divide by the coefficient of $x$ when the inside is linear.

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

## Integrals with a quadratic in the denominator

Six standard results cover every integral whose denominator is a quadratic or the square root of one.

:::formula The six special integrals
$\displaystyle\int\dfrac{dx}{x^2+a^2}=\dfrac1a\tan^{-1}\dfrac xa$   $\displaystyle\int\dfrac{dx}{x^2-a^2}=\dfrac{1}{2a}\log\left|\dfrac{x-a}{x+a}\right|$   $\displaystyle\int\dfrac{dx}{a^2-x^2}=\dfrac{1}{2a}\log\left|\dfrac{a+x}{a-x}\right|$<br>
$\displaystyle\int\dfrac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\dfrac xa$   $\displaystyle\int\dfrac{dx}{\sqrt{x^2\pm a^2}}=\log\left|x+\sqrt{x^2\pm a^2}\right|$   (each $+C$)
:::

A general quadratic $ax^2+bx+c$ is brought to one of these shapes by **completing the square**.

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
$$\int u\,v\,dx=u\int v\,dx-\int\left[\frac{du}{dx}\int v\,dx\right]dx$$
Choose the first function $u$ by **ILATE**: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.
:::

:::skeleton Worked example: by parts (3 marks)
*Find $\displaystyle\int x\tan^{-1}x\,dx$.*

Take $u=\tan^{-1}x$ (inverse comes first) and $v=x$: $I=\tan^{-1}x\cdot\dfrac{x^2}{2}-\displaystyle\int\dfrac{1}{1+x^2}\cdot\dfrac{x^2}{2}\,dx$ [1]

$=\dfrac{x^2}{2}\tan^{-1}x-\dfrac12\displaystyle\int\left(1-\dfrac{1}{1+x^2}\right)dx$ [1]

$=\dfrac{x^2}{2}\tan^{-1}x-\dfrac x2+\dfrac12\tan^{-1}x+C=\boxed{\dfrac{x^2+1}{2}\tan^{-1}x-\dfrac x2+C}$ [1]
:::

One special pattern saves a lot of work. Because $\dfrac{d}{dx}\left[e^xf(x)\right]=e^x\left[f(x)+f'(x)\right]$,

:::formula The $e^x$ shortcut
$$\int e^x\left[f(x)+f'(x)\right]dx=e^xf(x)+C$$
Example: $\displaystyle\int e^x(\sin x+\cos x)\,dx=e^x\sin x+C$
:::

In the exam, show which part is $f$ and which is $f'$; that identification is the method mark. For $\displaystyle\int e^x\sin x\,dx$, integrate by parts twice: the original integral reappears, and you solve for it to get $\dfrac12e^x(\sin x-\cos x)+C$.

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

**In one breath:** Name the integral $I$, state the property, add the two forms of $I$. For a modulus, split the range where the inside changes sign.
