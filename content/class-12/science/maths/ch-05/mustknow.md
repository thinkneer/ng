# Ch 5 · Continuity and Differentiability — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / find · `P` prove / show · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Find $k$ (or $a$, $b$) so that a piecewise function is continuous at a point. [2–3]
2. ★★★ `S` Logarithmic differentiation: $x^{\sin x}+(\sin x)^{\cos x}$, $x^y=e^{x-y}$, $(\cos x)^y=(\cos y)^x$. [3]
3. ★★★ `S` Parametric functions: $\dfrac{dy}{dx}$ and $\dfrac{d^2y}{dx^2}$. [3]
4. ★★ `P` Second-order relation: "if $y=\dots$, prove that $(1-x^2)y_2-xy_1=\dots$". [3]
5. ★★ `S` Differentiability at a point by LHD and RHD: $|x-1|$, $x|x|$, $[x]$. [1–2]
6. ★★ `S` Inverse trig function after a substitution; derivative of one function w.r.t. another. [2–3]

## Must-know lines and definitions

- **Continuous at $x=a$:** LHL $=$ RHL $=f(a)$.
- **Differentiable at $x=c$:** LHD $=$ RHD.
- **LHD at $c$:** $\displaystyle\lim_{h\to0^-}\dfrac{f(c+h)-f(c)}{h}$.
- **RHD at $c$:** $\displaystyle\lim_{h\to0^+}\dfrac{f(c+h)-f(c)}{h}$.
- **Differentiable and continuous:** every differentiable function is continuous; the converse is false.
- **Standard counter-example:** $|x|$ is continuous at 0 but not differentiable there.
- **Continuous everywhere:** polynomials, $\sin x$, $\cos x$, $e^x$, $|x|$.
- **Greatest integer function $[x]$:** discontinuous at every integer.
- **$\log x$ in this course:** natural log, base $e$.
- **Logarithmic differentiation is used when:** the variable is in both base and power.
- **Not in boards 2026–27:** Rolle's theorem and the mean value theorem.

## Key formulas

:::formula Derivative of $\sin^{-1}x$
$\dfrac{d}{dx}\sin^{-1}x=\dfrac{1}{\sqrt{1-x^2}}$
:::

:::formula Derivative of $\cos^{-1}x$
$\dfrac{d}{dx}\cos^{-1}x=\dfrac{-1}{\sqrt{1-x^2}}$
:::

:::formula Derivative of $\tan^{-1}x$
$\dfrac{d}{dx}\tan^{-1}x=\dfrac{1}{1+x^2}$
:::

:::formula Derivative of $\cot^{-1}x$
$\dfrac{d}{dx}\cot^{-1}x=\dfrac{-1}{1+x^2}$
:::

:::formula Derivative of $\sec^{-1}x$
$\dfrac{d}{dx}\sec^{-1}x=\dfrac{1}{|x|\sqrt{x^2-1}}$
:::

:::formula Derivative of $a^x$
$\dfrac{d}{dx}a^x=a^x\log a$
:::

:::formula Derivative of $\log_a x$
$\dfrac{d}{dx}\log_ax=\dfrac{1}{x\log a}$
:::

:::formula Chain rule
$\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$
:::

:::formula Quotient rule
$\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$
:::

:::formula Derivative of $u^v$
$\dfrac{d}{dx}u^v=u^v\left[v'\log u+\dfrac{v\,u'}{u}\right]$
:::

:::formula Derivative of $x^x$
$\dfrac{d}{dx}x^x=x^x(1+\log x)$
:::

:::formula Parametric first derivative
$\dfrac{dy}{dx}=\dfrac{dy/dt}{dx/dt}$
:::

:::formula Parametric second derivative
$\dfrac{d^2y}{dx^2}=\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)\cdot\dfrac{dt}{dx}$
:::

:::formula Limit of $\dfrac{1-\cos x}{x^2}$ as $x\to0$
$\displaystyle\lim_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12$
:::

:::formula Limit of $\dfrac{a^x-1}{x}$ as $x\to0$
$\displaystyle\lim_{x\to0}\dfrac{a^x-1}{x}=\log a$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Continuity with an unknown (2–3 marks)
LHL at the point [½–1] → RHL [½–1] → value $f(a)$ → equate all three [½] → solve for the constant [½].
:::

:::skeleton S · $y=u^v+w^z$ (3 marks)
Name the terms $u$, $v$; $\dfrac{dy}{dx}=\dfrac{du}{dx}+\dfrac{dv}{dx}$ [½] → log and differentiate $u$ [1] → log and differentiate $v$ [1] → add [½].
:::

:::skeleton S · Parametric second derivative (3 marks)
$\dfrac{dx}{dt}$, $\dfrac{dy}{dt}$ [1] → $\dfrac{dy}{dx}$, simplified [1] → differentiate w.r.t. $t$ and multiply by $\dfrac{dt}{dx}$ [1].
:::

:::skeleton P · Second-order relation (3 marks)
$y_1$ [1] → clear the fraction or root (cross-multiply, square if $\sqrt{1-x^2}$ appears) → differentiate again [1] → rearrange to the given form, "Hence proved" [1].
:::

:::skeleton S · Differentiability at a point (2 marks)
LHD with $h\to0^-$ [1] → RHD with $h\to0^+$ [½] → compare and conclude [½].
:::

## Quick 1-mark facts (MCQ, A–R)

- $\dfrac{\sin3x}{x}$ continuous at 0 needs: $f(0)=3$.
- $\dfrac{x^2-9}{x-3}$ continuous at 3 needs: $f(3)=6$.
- $|x-1|+|x-2|$ is not differentiable at: $x=1$ and $x=2$.
- $\dfrac{d}{dx}\log(\log x)$: $\dfrac{1}{x\log x}$.
- $\dfrac{d}{dx}e^{\log x}$: $1$, because $e^{\log x}=x$.
- $\dfrac{d}{dx}\left(\sin^{-1}x+\cos^{-1}x\right)$: $0$, because the sum is the constant $\dfrac\pi2$.
- $\dfrac{d}{dx}\log(\sec x+\tan x)$: $\sec x$.
- Derivative of $\sin x$ with respect to $\cos x$: $-\cot x$.
- Derivative of $x^2$ with respect to $x^3$: $\dfrac{2}{3x}$.
- For $x=at^2$, $y=2at$, $\dfrac{dy}{dx}$: $\dfrac1t$.
- For $x=at^2$, $y=2at$, $\dfrac{d^2y}{dx^2}$: $-\dfrac{1}{2at^3}$.
- If $y=A\sin x+B\cos x$, then: $y_2+y=0$.
- $\dfrac{d}{dx}\tan^{-1}\dfrac{1+x}{1-x}$: $\dfrac{1}{1+x^2}$.
- $\dfrac{d}{dx}\sin^{-1}\dfrac{2x}{1+x^2}$ for $|x|<1$: $\dfrac{2}{1+x^2}$.

## Mark-losing traps

:::tip Parametric second derivative
$\dfrac{d^2y}{dx^2}\ne\dfrac{d^2y/dt^2}{d^2x/dt^2}$. Differentiate $\dfrac{dy}{dx}$ w.r.t. $t$, then multiply by $\dfrac{dt}{dx}$.
:::

:::tip Log of a sum
$\log(u+v)\ne\log u+\log v$. Split a sum into separate terms before taking logs.
:::

:::tip Power rule on $x^x$
$\dfrac{d}{dx}x^x\ne x\cdot x^{x-1}$. The power rule needs a constant power.
:::

:::tip Continuity needs $f(a)$
LHL = RHL alone is not continuity; both must equal $f(a)$.
:::

:::tip Inner derivative
$\dfrac{d}{dx}\sin(x^2)=2x\cos(x^2)$. Forgetting the inside derivative loses the method mark.
:::
