# Ch 6 · Application of Derivatives — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / find · `P` prove / show · `W` word problem · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `W` `C` Maxima–minima word problem: open box, cylinder or cone in a sphere, closed cylinder of given volume, window, wire cut in two, profit. [5 or case study]
2. ★★★ `S` Intervals in which $f$ is increasing / decreasing: polynomials, $\sin x+\cos x$ on $[0,2\pi]$. [2–3]
3. ★★ `W` Rate of change: balloon, ripples, ladder, sand cone, cube, shadow. [2–3]
4. ★★ `S` Absolute maximum and minimum on $[a,b]$. [2–3]
5. ★★ `S` Local maxima / minima and their values. [2–3]
6. ★★ `P` Show that a function is increasing (or decreasing) on a given interval. [2]

## Must-know lines and definitions

- **Rate of change of $y$ with respect to $x$:** $\dfrac{dy}{dx}$.
- **Marginal cost:** $\dfrac{dC}{dx}$.
- **Marginal revenue:** $\dfrac{dR}{dx}$.
- **Increasing on $I$:** $x_1<x_2\Rightarrow f(x_1)\le f(x_2)$.
- **Strictly increasing on $I$:** $x_1<x_2\Rightarrow f(x_1)<f(x_2)$.
- **Critical point:** $c$ in the domain where $f'(c)=0$ or $f$ is not differentiable.
- **Point of inflection:** $f'$ does not change sign as $x$ passes through $c$.
- **First derivative test, maximum:** $f'$ changes from $+$ to $-$ at $c$.
- **First derivative test, minimum:** $f'$ changes from $-$ to $+$ at $c$.
- **Absolute extremes on $[a,b]$:** compare $f$ at critical points and at $a$, $b$.
- **Not in boards 2026–27:** tangents and normals, approximations.

## Key formulas

:::formula Related rates (chain rule)
$\dfrac{dy}{dt}=\dfrac{dy}{dx}\cdot\dfrac{dx}{dt}$
:::

:::formula Test for a strictly increasing function
$f'(x)>0$ on the interval
:::

:::formula Test for a strictly decreasing function
$f'(x)<0$ on the interval
:::

:::formula Second derivative test for a local maximum
$f'(c)=0$ and $f''(c)<0$
:::

:::formula Second derivative test for a local minimum
$f'(c)=0$ and $f''(c)>0$
:::

:::formula Sphere: volume and surface area
$V=\dfrac43\pi r^3$,   $S=4\pi r^2$
:::

:::formula Cylinder: volume and total surface area
$V=\pi r^2h$,   TSA $=2\pi r(r+h)$
:::

:::formula Cone: volume and curved surface area
$V=\dfrac13\pi r^2h$,   CSA $=\pi rl$,   $l^2=r^2+h^2$
:::

:::formula Closed cylinder of given volume, least surface area
$h=2r$ (height equals diameter)
:::

:::formula Cylinder of maximum volume in a sphere of radius $R$
$h=\dfrac{2R}{\sqrt3}$,   $V_{\max}=\dfrac{4\pi R^3}{3\sqrt3}$
:::

:::formula Cone of maximum volume in a sphere of radius $R$
$h=\dfrac{4R}{3}$,   $V_{\max}=\dfrac{8}{27}$ of the sphere's volume
:::

:::formula Cone of given slant height, maximum volume
semi-vertical angle $=\tan^{-1}\sqrt2$,   $h=\dfrac{l}{\sqrt3}$
:::

:::formula Rectangle of maximum area in a circle
a square
:::

:::formula Open box from a square sheet of side $a$
cut squares of side $x=\dfrac a6$
:::

:::formula Window (rectangle + semicircle) of perimeter $P$, maximum light
radius $r=\dfrac{P}{\pi+4}$, height of rectangle $=r$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton W · Maxima–minima word problem (5 marks)
Figure, variables, condition [1] → function of one variable [1] → derivative $=0$, solve [1½] → second-derivative test [1] → answer with units, closing sentence [½].
:::

:::skeleton W · Rate of change (2–3 marks)
"Given $\dfrac{dx}{dt}=\dots$; to find $\dfrac{dy}{dt}$ when $\dots$" [½] → relation [½] → differentiate w.r.t. $t$ [1] → substitute the instant's values, unit, "increasing/decreasing" [1].
:::

:::skeleton S · Increasing / decreasing (3 marks)
$f'(x)$ factorised, zeros [1] → sign of $f'$ in each interval (number line) [1] → state the intervals [1].
:::

:::skeleton S · Absolute maximum / minimum on $[a,b]$ (3 marks)
$f'(x)=0$, critical points in $[a,b]$ [1] → $f$ at critical points and at $a$, $b$ [1] → largest and smallest, with where they occur [1].
:::

:::skeleton S · Local maximum / minimum values (3 marks)
$f'(x)=0$ [1] → sign of $f''$ at each point [1] → the values $f(c)$ [1].
:::

## Quick 1-mark facts (MCQ, A–R)

- Rate of change of area of a circle w.r.t. $r$ at $r=5$: $10\pi$.
- Radius grows at 3 cm/s; $\dfrac{dA}{dt}$ at $r=10$ cm: $60\pi$ cm²/s.
- $x^3-3x^2+3x-100$ on $\mathbb{R}$: increasing, since $f'=3(x-1)^2\ge0$.
- $\cos x$ on $(0,\pi)$: strictly decreasing.
- $\tan x$ on $\left(-\frac\pi2,\frac\pi2\right)$: strictly increasing.
- $e^x$ and $\log x$: strictly increasing on their domains.
- $x^3$ at $x=0$: $f'=0$ but neither maximum nor minimum.
- $|x|$ at $x=0$: minimum, though not differentiable there.
- Maximum value of $\sin x+\cos x$: $\sqrt2$.
- Maximum value of $\sin x\cos x$: $\dfrac12$.
- Extrema of $x+\dfrac1x$: local minimum 2 at $x=1$, local maximum $-2$ at $x=-1$.
- Maximum value of $\dfrac{\log x}{x}$: $\dfrac1e$, at $x=e$.
- Stationary point of $x^x$: $x=\dfrac1e$.

## Mark-losing traps

:::tip Missing test
No second-derivative or sign-change test: one mark lost even with the right answer.
:::

:::tip Two variables left
The function to optimise must be in one variable before you differentiate.
:::

:::tip Substituting too early
In rate problems, put in the instant's numbers only after differentiating.
:::

:::tip Sign and units of a rate
A decreasing quantity has a negative rate; state "decreases at" with cm/s, cm²/s or cm³/s.
:::

:::tip End points
For absolute extremes, evaluate $f$ at both end points and drop critical points outside $[a,b]$.
:::
