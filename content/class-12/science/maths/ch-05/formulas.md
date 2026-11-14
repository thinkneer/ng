# Ch 5 · Continuity and Differentiability — formulas and key facts

## Continuity and differentiability

- Continuous at $x=a$: $\displaystyle\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=f(a)$.
- Differentiable at $x=c$: LHD $=$ RHD, where LHD/RHD $=\displaystyle\lim_{h\to0^\mp}\dfrac{f(c+h)-f(c)}{h}$.
- Differentiable $\Rightarrow$ continuous. Not the other way round ($|x|$ at 0).
- $[x]$ is discontinuous at every integer; $|x-a|$ is not differentiable at $x=a$.

:::formula Limits used in continuity questions ($x\to0$)
$\dfrac{\sin x}{x}\to1$   $\dfrac{\tan x}{x}\to1$   $\dfrac{1-\cos x}{x^2}\to\dfrac12$<br>
$\dfrac{e^x-1}{x}\to1$   $\dfrac{a^x-1}{x}\to\log a$   $\dfrac{\log(1+x)}{x}\to1$<br>
$\displaystyle\lim_{x\to a}\dfrac{x^n-a^n}{x-a}=na^{n-1}$
:::

## Derivatives to know

| Function | Derivative | Function | Derivative |
|---|---|---|---|
| $\sin^{-1}x$ | $\dfrac{1}{\sqrt{1-x^2}}$ | $\cos^{-1}x$ | $\dfrac{-1}{\sqrt{1-x^2}}$ |
| $\tan^{-1}x$ | $\dfrac{1}{1+x^2}$ | $\cot^{-1}x$ | $\dfrac{-1}{1+x^2}$ |
| $\sec^{-1}x$ | $\dfrac{1}{\lvert x\rvert\sqrt{x^2-1}}$ | $\operatorname{cosec}^{-1}x$ | $\dfrac{-1}{\lvert x\rvert\sqrt{x^2-1}}$ |
| $e^x$ | $e^x$ | $a^x$ | $a^x\log a$ |
| $\log x$ | $\dfrac1x$ | $\log_ax$ | $\dfrac{1}{x\log a}$ |

## Rules

:::formula Rules of differentiation
Chain: $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$<br>
Product: $(uv)'=u'v+uv'$   Quotient: $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$<br>
Power with variable in base and index: $\dfrac{d}{dx}u^v=u^v\left[v'\log u+\dfrac{v\,u'}{u}\right]$<br>
Parametric: $\dfrac{dy}{dx}=\dfrac{dy/dt}{dx/dt}$,   $\dfrac{d^2y}{dx^2}=\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)\cdot\dfrac{dt}{dx}$<br>
One function w.r.t. another: $\dfrac{du}{dv}=\dfrac{du/dx}{dv/dx}$
:::

## Substitutions for inverse trig functions

| You see | Put |
|---|---|
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$ |
| $a^2+x^2$, $\sqrt{a^2+x^2}$ | $x=a\tan\theta$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta$ |
| $\sqrt{\dfrac{1-x}{1+x}}$ | $x=\cos2\theta$ |

## Results worth recognising

| Function | Derivative |
|---|---|
| $\sin^{-1}\dfrac{2x}{1+x^2}$, $\tan^{-1}\dfrac{2x}{1-x^2}$, $\cos^{-1}\dfrac{1-x^2}{1+x^2}$ | $\dfrac{2}{1+x^2}$ |
| $\sin^{-1}\left(2x\sqrt{1-x^2}\right)$ | $\dfrac{2}{\sqrt{1-x^2}}$ |
| $\tan^{-1}\dfrac{\sqrt{1+x^2}-1}{x}$ | $\dfrac{1}{2(1+x^2)}$ |
| $\tan^{-1}\dfrac{1+x}{1-x}$ | $\dfrac{1}{1+x^2}$ |
| $x^x$ | $x^x(1+\log x)$ |

Valid on the usual restricted intervals (for example $\lvert x\rvert<1$ in the first row).

## Second-order relations (standard proofs)

- $y=(\tan^{-1}x)^2$: $(x^2+1)^2y_2+2x(x^2+1)y_1=2$
- $y=(\sin^{-1}x)^2$: $(1-x^2)y_2-xy_1=2$
- $y=e^{a\cos^{-1}x}$: $(1-x^2)y_2-xy_1-a^2y=0$
- $y=3\cos(\log x)+4\sin(\log x)$: $x^2y_2+xy_1+y=0$
- $y=Ae^{mx}+Be^{nx}$: $y_2-(m+n)y_1+mny=0$

Not in boards 2026–27: Rolle's theorem, mean value theorem.
