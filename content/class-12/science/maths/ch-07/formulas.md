# Ch 7 · Integrals — formulas and key facts

## Basic integrals (each $+C$)

| $f(x)$ | $\int f(x)\,dx$ | $f(x)$ | $\int f(x)\,dx$ |
|---|---|---|---|
| $x^n$ ($n\ne-1$) | $\dfrac{x^{n+1}}{n+1}$ | $\dfrac1x$ | $\log\lvert x\rvert$ |
| $e^x$ | $e^x$ | $a^x$ | $\dfrac{a^x}{\log a}$ |
| $\sin x$ | $-\cos x$ | $\cos x$ | $\sin x$ |
| $\sec^2x$ | $\tan x$ | $\operatorname{cosec}^2x$ | $-\cot x$ |
| $\sec x\tan x$ | $\sec x$ | $\operatorname{cosec}x\cot x$ | $-\operatorname{cosec}x$ |
| $\tan x$ | $\log\lvert\sec x\rvert$ | $\cot x$ | $\log\lvert\sin x\rvert$ |
| $\sec x$ | $\log\lvert\sec x+\tan x\rvert$ | $\operatorname{cosec}x$ | $\log\lvert\operatorname{cosec}x-\cot x\rvert$ |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\sin^{-1}x$ | $\dfrac{1}{1+x^2}$ | $\tan^{-1}x$ |

- $\displaystyle\int\dfrac{f'(x)}{f(x)}\,dx=\log\lvert f(x)\rvert+C$;  $\displaystyle\int f(ax+b)\,dx=\dfrac1aF(ax+b)+C$.

## Special integrals

:::formula Quadratic forms (each $+C$)
$\displaystyle\int\dfrac{dx}{x^2+a^2}=\dfrac1a\tan^{-1}\dfrac xa$<br>
$\displaystyle\int\dfrac{dx}{x^2-a^2}=\dfrac{1}{2a}\log\left|\dfrac{x-a}{x+a}\right|$   $\displaystyle\int\dfrac{dx}{a^2-x^2}=\dfrac{1}{2a}\log\left|\dfrac{a+x}{a-x}\right|$<br>
$\displaystyle\int\dfrac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\dfrac xa$   $\displaystyle\int\dfrac{dx}{\sqrt{x^2\pm a^2}}=\log\left|x+\sqrt{x^2\pm a^2}\right|$<br>
$\displaystyle\int\sqrt{a^2-x^2}\,dx=\dfrac x2\sqrt{a^2-x^2}+\dfrac{a^2}{2}\sin^{-1}\dfrac xa$<br>
$\displaystyle\int\sqrt{x^2\pm a^2}\,dx=\dfrac x2\sqrt{x^2\pm a^2}\pm\dfrac{a^2}{2}\log\left|x+\sqrt{x^2\pm a^2}\right|$
:::

## Methods

:::formula By parts and the $e^x$ shortcut
$\displaystyle\int u\,v\,dx=u\int v\,dx-\int\left[\dfrac{du}{dx}\int v\,dx\right]dx$   (first function by ILATE)<br>
$\displaystyle\int e^x\left[f(x)+f'(x)\right]dx=e^xf(x)+C$<br>
$\displaystyle\int e^x\sin x\,dx=\dfrac12e^x(\sin x-\cos x)+C$
:::

| Integrand | Do this |
|---|---|
| $f(g(x))\,g'(x)$ | put $g(x)=t$ |
| $\sin^2x$, $\cos^2x$ | $\dfrac{1-\cos2x}{2}$, $\dfrac{1+\cos2x}{2}$ |
| $\sin^3x$, $\cos^3x$ | $\dfrac{3\sin x-\sin3x}{4}$, $\dfrac{3\cos x+\cos3x}{4}$ |
| $\dfrac{1}{ax^2+bx+c}$, $\dfrac{1}{\sqrt{ax^2+bx+c}}$ | complete the square |
| $\dfrac{px+q}{ax^2+bx+c}$, $\dfrac{px+q}{\sqrt{ax^2+bx+c}}$ | $px+q=A\,\dfrac{d}{dx}(ax^2+bx+c)+B$ |
| rational, factorable denominator | partial fractions (divide first if improper) |
| product of two kinds of function | by parts |
| $e^x\times(\text{sum})$ | look for $f+f'$ |

## Partial-fraction forms

- $\dfrac{px+q}{(x-a)(x-b)}=\dfrac{A}{x-a}+\dfrac{B}{x-b}$
- $\dfrac{px+q}{(x-a)^2}=\dfrac{A}{x-a}+\dfrac{B}{(x-a)^2}$
- $\dfrac{px^2+qx+r}{(x-a)^2(x-b)}=\dfrac{A}{x-a}+\dfrac{B}{(x-a)^2}+\dfrac{C}{x-b}$
- $\dfrac{px^2+qx+r}{(x-a)(x^2+bx+c)}=\dfrac{A}{x-a}+\dfrac{Bx+C}{x^2+bx+c}$

## Definite integrals

:::formula Properties
P1: $\displaystyle\int_a^bf(x)\,dx=-\int_b^af(x)\,dx$   P2: $\displaystyle\int_a^b=\int_a^c+\int_c^b$<br>
P3: $\displaystyle\int_a^bf(x)\,dx=\int_a^bf(a+b-x)\,dx$   P4: $\displaystyle\int_0^af(x)\,dx=\int_0^af(a-x)\,dx$<br>
P5: $\displaystyle\int_0^{2a}f(x)\,dx=2\int_0^af(x)\,dx$ if $f(2a-x)=f(x)$;  $=0$ if $f(2a-x)=-f(x)$<br>
P6: $\displaystyle\int_{-a}^{a}f(x)\,dx=2\int_0^af(x)\,dx$ if $f$ is even;  $=0$ if $f$ is odd
:::

## Results worth knowing

| Integral | Value |
|---|---|
| $\displaystyle\int_0^{\pi/2}\dfrac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx$ | $\dfrac\pi4$ |
| $\displaystyle\int_0^\pi\dfrac{x\sin x}{1+\cos^2x}\,dx$ | $\dfrac{\pi^2}{4}$ |
| $\displaystyle\int_0^{\pi/4}\log(1+\tan x)\,dx$ | $\dfrac\pi8\log2$ |
| $\displaystyle\int_0^{\pi/2}\log\sin x\,dx$ | $-\dfrac\pi2\log2$ |
| $\displaystyle\int_0^\pi\dfrac{x\tan x}{\sec x+\tan x}\,dx$ | $\dfrac{\pi(\pi-2)}{2}$ |
| $\displaystyle\int_0^\pi\dfrac{x\,dx}{a^2\cos^2x+b^2\sin^2x}$ | $\dfrac{\pi^2}{2ab}$ |

Not in boards 2026–27: definite integral as the limit of a sum; $\int(px+q)\sqrt{ax^2+bx+c}\,dx$ is not among the listed types.
