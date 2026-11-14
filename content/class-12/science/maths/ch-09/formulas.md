# Ch 9 · Differential Equations — formulas and key facts

## Order, degree, solutions

- Order: order of the highest derivative. Degree: its power, when the equation is polynomial in derivatives; otherwise not defined.
- General solution: number of arbitrary constants = order. Particular solution: none.

## The three types

:::formula Variable separable
$f(y)\,dy=g(x)\,dx\ \Rightarrow\ \displaystyle\int f(y)\,dy=\int g(x)\,dx+C$
:::

:::formula Homogeneous
$\dfrac{dy}{dx}=F(x,y)$ with $F(\lambda x,\lambda y)=F(x,y)$<br>
Put $y=vx$, $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$   (or $x=vy$, $\dfrac{dx}{dy}=v+y\dfrac{dv}{dy}$ when $\dfrac xy$ appears)
:::

:::formula Linear
In $y$: $\dfrac{dy}{dx}+Py=Q$,  I.F. $=e^{\int P\,dx}$,  $y\cdot\text{I.F.}=\displaystyle\int Q\cdot\text{I.F.}\,dx+C$<br>
In $x$: $\dfrac{dx}{dy}+Px=Q$,  I.F. $=e^{\int P\,dy}$,  $x\cdot\text{I.F.}=\displaystyle\int Q\cdot\text{I.F.}\,dy+C$
:::

Test in this order: separable → homogeneous → linear in $y$ → linear in $x$.

## Ready integrating factors

| $P$ | I.F. | $P$ | I.F. |
|---|---|---|---|
| $\dfrac1x$ | $x$ | $\cot x$ | $\sin x$ |
| $\dfrac2x$ | $x^2$ | $\tan x$ | $\sec x$ |
| $-\dfrac1x$ | $\dfrac1x$ | $2\tan x$ | $\sec^2x$ |
| $1$ | $e^x$ | $\sec^2x$ | $e^{\tan x}$ |
| $\dfrac{2x}{1+x^2}$ | $1+x^2$ | $\dfrac{1}{x\log x}$ | $\log x$ |

Reason: $e^{\log f(x)}=f(x)$.

## Growth and decay

:::formula Rate proportional to amount
$\dfrac{dP}{dt}=kP\ \Rightarrow\ P=P_0e^{kt}$   (doubling time $=\dfrac{\log2}{k}$)
:::

## Solutions worth recognising

| Equation | Solution |
|---|---|
| $\dfrac{dy}{dx}+2y\tan x=\sin x$, $y\left(\frac\pi3\right)=0$ | $y=\cos x-2\cos^2x$ |
| $\dfrac{dy}{dx}+y\cot x=4x\operatorname{cosec}x$, $y\left(\frac\pi2\right)=0$ | $y\sin x=2x^2-\dfrac{\pi^2}{2}$ |
| $\cos^2x\dfrac{dy}{dx}+y=\tan x$ | $y=\tan x-1+Ce^{-\tan x}$ |
| $(1+x^2)\,dy+2xy\,dx=\cot x\,dx$ | $y(1+x^2)=\log\lvert\sin x\rvert+C$ |
| $y\,dx-(x+2y^2)\,dy=0$ | $x=2y^2+Cy$ |
| $x\dfrac{dy}{dx}=y-x\tan\dfrac yx$ | $x\sin\dfrac yx=C$ |
| $x\,dy-y\,dx=\sqrt{x^2+y^2}\,dx$ | $y+\sqrt{x^2+y^2}=Cx^2$ |
| $(x^2-y^2)\,dx+2xy\,dy=0$ | $x^2+y^2=Cx$ |
| $e^x\tan y\,dx+(1-e^x)\sec^2y\,dy=0$ | $\tan y=C(1-e^x)$ |
| $\dfrac{dy}{dx}=(1+x^2)(1+y^2)$ | $\tan^{-1}y=x+\dfrac{x^3}{3}+C$ |

Not in boards 2026–27: formation of a differential equation from a family of curves.
