# Ch 7 · Integrals — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / evaluate · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Definite integral by properties: $\int_0^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}dx$, $\int_0^\pi\frac{x\sin x}{1+\cos^2x}dx$, $\int_0^{\pi/4}\log(1+\tan x)\,dx$. [3 or 5]
2. ★★★ `S` Modulus integrals such as $\int_{-1}^{2}|x^3-x|\,dx$. [3]
3. ★★★ `S` Partial fractions, including after a substitution. [3]
4. ★★★ `S` By parts, and $\int e^x[f(x)+f'(x)]\,dx$. [2–3]
5. ★★ `S` Quadratic forms: $\int\frac{dx}{\sqrt{ax^2+bx+c}}$, $\int\frac{px+q}{\sqrt{ax^2+bx+c}}dx$, $\int\sqrt{ax^2+bx+c}\,dx$. [3]
6. ★★ `S` Substitution and trigonometric identities. [2]

## Must-know lines and definitions

- **Antiderivative of $f$:** a function $F$ with $F'(x)=f(x)$.
- **Constant of integration:** every indefinite integral ends with $+C$.
- **Two antiderivatives of the same function:** differ by a constant.
- **Fundamental theorem:** $\int_a^bf(x)\,dx=F(b)-F(a)$.
- **ILATE (first function for by parts):** Inverse trig, Log, Algebraic, Trig, Exponential.
- **Linear inside $ax+b$:** integrate as usual and divide by $a$.
- **Improper rational function:** divide before using partial fractions.
- **Linear numerator over a quadratic:** write $px+q=A\,\dfrac{d}{dx}(\text{quadratic})+B$.
- **Substitution in a definite integral:** change the limits as well.
- **Not in boards 2026–27:** definite integral as the limit of a sum.

## Key formulas

:::formula Integral of $\tan x$
$\int\tan x\,dx=\log|\sec x|+C$
:::

:::formula Integral of $\cot x$
$\int\cot x\,dx=\log|\sin x|+C$
:::

:::formula Integral of $\sec x$
$\int\sec x\,dx=\log|\sec x+\tan x|+C$
:::

:::formula Integral of $\operatorname{cosec}x$
$\int\operatorname{cosec}x\,dx=\log|\operatorname{cosec}x-\cot x|+C$
:::

:::formula Integral of $\dfrac{1}{x^2+a^2}$
$\int\dfrac{dx}{x^2+a^2}=\dfrac1a\tan^{-1}\dfrac xa+C$
:::

:::formula Integral of $\dfrac{1}{x^2-a^2}$
$\int\dfrac{dx}{x^2-a^2}=\dfrac{1}{2a}\log\left|\dfrac{x-a}{x+a}\right|+C$
:::

:::formula Integral of $\dfrac{1}{a^2-x^2}$
$\int\dfrac{dx}{a^2-x^2}=\dfrac{1}{2a}\log\left|\dfrac{a+x}{a-x}\right|+C$
:::

:::formula Integral of $\dfrac{1}{\sqrt{a^2-x^2}}$
$\int\dfrac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\dfrac xa+C$
:::

:::formula Integral of $\dfrac{1}{\sqrt{x^2\pm a^2}}$
$\int\dfrac{dx}{\sqrt{x^2\pm a^2}}=\log\left|x+\sqrt{x^2\pm a^2}\right|+C$
:::

:::formula Integral of $\sqrt{a^2-x^2}$
$\int\sqrt{a^2-x^2}\,dx=\dfrac x2\sqrt{a^2-x^2}+\dfrac{a^2}{2}\sin^{-1}\dfrac xa+C$
:::

:::formula Integral of $\sqrt{x^2+a^2}$
$\int\sqrt{x^2+a^2}\,dx=\dfrac x2\sqrt{x^2+a^2}+\dfrac{a^2}{2}\log\left|x+\sqrt{x^2+a^2}\right|+C$
:::

:::formula Integral of $\sqrt{x^2-a^2}$
$\int\sqrt{x^2-a^2}\,dx=\dfrac x2\sqrt{x^2-a^2}-\dfrac{a^2}{2}\log\left|x+\sqrt{x^2-a^2}\right|+C$
:::

:::formula Integration by parts
$\int u\,v\,dx=u\int v\,dx-\int\left[\dfrac{du}{dx}\int v\,dx\right]dx$
:::

:::formula Integral of $e^x[f(x)+f'(x)]$
$\int e^x\left[f(x)+f'(x)\right]dx=e^xf(x)+C$
:::

:::formula Property: replace $x$ by $a+b-x$
$\int_a^bf(x)\,dx=\int_a^bf(a+b-x)\,dx$
:::

:::formula Property: limits $0$ to $a$
$\int_0^af(x)\,dx=\int_0^af(a-x)\,dx$
:::

:::formula Property: limits $-a$ to $a$
$\int_{-a}^{a}f(x)\,dx=2\int_0^af(x)\,dx$ if $f$ is even; $=0$ if $f$ is odd
:::

:::formula Property: limits $0$ to $2a$
$\int_0^{2a}f(x)\,dx=2\int_0^af(x)\,dx$ if $f(2a-x)=f(x)$; $=0$ if $f(2a-x)=-f(x)$
:::

:::formula Identity for $\sin^2x$ and $\cos^2x$
$\sin^2x=\dfrac{1-\cos2x}{2}$,   $\cos^2x=\dfrac{1+\cos2x}{2}$
:::

:::formula Partial fractions: repeated linear factor
$\dfrac{px+q}{(x-a)^2}=\dfrac{A}{x-a}+\dfrac{B}{(x-a)^2}$
:::

:::formula Partial fractions: linear times irreducible quadratic
$\dfrac{px^2+qx+r}{(x-a)(x^2+bx+c)}=\dfrac{A}{x-a}+\dfrac{Bx+C}{x^2+bx+c}$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Property question (3–5 marks)
Let $I=\dots$ (1); state the property [½] → apply it: $I=\dots$ (2) [1] → add: $2I=$ something simple [1] → integrate [1–1½] → divide by 2, box [1].
:::

:::skeleton S · Partial fractions (3 marks)
Write the form [½] → find $A$, $B$ (and $C$) [1–1½] → integrate each term, $\log|\cdot|$, $+C$ [1].
:::

:::skeleton S · By parts (3 marks)
Choose $u$ by ILATE and apply the formula [1] → simplify the new integral [1] → integrate, $+C$ [1].
:::

:::skeleton S · $\dfrac{px+q}{\sqrt{\text{quadratic}}}$ (3 marks)
$px+q=A\,\dfrac{d}{dx}(\text{quadratic})+B$ [½–1] → first part by substitution [1] → second part: complete the square, standard form [½–1] → combine, $+C$ [½].
:::

:::skeleton S · Modulus integral (3 marks)
Zeros and sign of the inside on each piece [1] → split the integral with the correct signs [1] → evaluate and add [1].
:::

## Quick 1-mark facts (MCQ, A–R)

- Value of $\int e^x\left(\dfrac1x-\dfrac1{x^2}\right)dx$: $\dfrac{e^x}{x}+C$.
- Value of $\int e^x\sec x(1+\tan x)\,dx$: $e^x\sec x+C$.
- Value of $\int\dfrac{dx}{\sin^2x\cos^2x}$: $\tan x-\cot x+C$.
- Value of $\int\tan^2x\,dx$: $\tan x-x+C$.
- Value of $\int\dfrac{dx}{e^x+e^{-x}}$: $\tan^{-1}(e^x)+C$.
- Value of $\int_0^1\dfrac{dx}{1+x^2}$: $\dfrac\pi4$.
- Value of $\int_{-1}^{1}x^{17}\cos^4x\,dx$: $0$ (odd function).
- Value of $\int_{-1}^{1}|x|\,dx$: $1$ (even function, $2\int_0^1x\,dx$).
- Value of $\int_0^{\pi/2}\sin^2x\,dx$: $\dfrac\pi4$.
- Value of $\int_0^{\pi/2}\log\tan x\,dx$: $0$ (replace $x$ by $\frac\pi2-x$ and add).
- Value of $\int_0^{\pi/2}\log\sin x\,dx$: $-\dfrac\pi2\log2$.
- Value of $\int_a^b\dfrac{f(x)}{f(x)+f(a+b-x)}\,dx$: $\dfrac{b-a}{2}$.
- Value of $\dfrac{d}{dx}\int f(x)\,dx$: $f(x)$.

## Mark-losing traps

:::tip Constant of integration
No $+C$ in an indefinite integral loses ½; writing $+C$ in a definite one is also wrong.
:::

:::tip Limits after substitution
Change the limits when you change the variable, or return to $x$ before substituting limits.
:::

:::tip Modulus in logs
$\int\dfrac{dx}{x}=\log|x|+C$, with the modulus.
:::

:::tip Coefficient of $x$
$\int\cos3x\,dx=\dfrac13\sin3x+C$; do not forget to divide by 3.
:::

:::tip $x^2-a^2$ versus $a^2-x^2$
The two log formulas differ: $\dfrac{x-a}{x+a}$ for $x^2-a^2$, $\dfrac{a+x}{a-x}$ for $a^2-x^2$.
:::
