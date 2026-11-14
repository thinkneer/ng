# Ch 6 · Application of Derivatives — formulas and key facts

## Rate of change

- $\dfrac{dy}{dx}$ = rate of change of $y$ with respect to $x$. With time: $\dfrac{dy}{dt}=\dfrac{dy}{dx}\cdot\dfrac{dx}{dt}$.
- Marginal cost $=\dfrac{dC}{dx}$; marginal revenue $=\dfrac{dR}{dx}$.
- Negative rate = decreasing. Give units (cm/s, cm²/s, cm³/s).

:::formula Mensuration used in this chapter
Sphere: $V=\dfrac43\pi r^3$, $S=4\pi r^2$   Cube: $V=x^3$, $S=6x^2$<br>
Cylinder: $V=\pi r^2h$, CSA $=2\pi rh$, TSA $=2\pi r(r+h)$<br>
Cone: $V=\dfrac13\pi r^2h$, CSA $=\pi rl$, $l^2=r^2+h^2$<br>
Circle: $A=\pi r^2$, $C=2\pi r$   Equilateral triangle: $A=\dfrac{\sqrt3}{4}a^2$
:::

## Increasing and decreasing

- $f'(x)>0$ on $I$: strictly increasing. $f'(x)<0$ on $I$: strictly decreasing. $f'(x)\ge0$: increasing.
- Method: factorise $f'(x)$, mark its zeros on a number line, read the sign in each interval.

## Maxima and minima

:::formula Tests
Critical point: $f'(c)=0$ or $f$ not differentiable at $c$<br>
First derivative test: $f'$ changes $+\to-$: local max;  $-\to+$: local min;  no change: point of inflection<br>
Second derivative test: $f'(c)=0$, $f''(c)<0$: local max;  $f''(c)>0$: local min;  $f''(c)=0$: test fails<br>
Absolute max/min on $[a,b]$: compare $f$ at critical points and at $a$, $b$
:::

## Standard optimisation results (prove them in the exam; use to check)

| Problem | Result |
|---|---|
| Rectangle of maximum area in a circle | square |
| Closed cylinder, given volume, least surface area | $h=2r$ |
| Open-top cylinder, given surface area, maximum volume | $h=r$ |
| Cylinder of maximum volume in a sphere of radius $R$ | $h=\dfrac{2R}{\sqrt3}$, $V=\dfrac{4\pi R^3}{3\sqrt3}$ |
| Cone of maximum volume in a sphere of radius $R$ | $h=\dfrac{4R}{3}$, $V=\dfrac{8}{27}V_\text{sphere}$ |
| Cone of given slant height $l$, maximum volume | $h=\dfrac{l}{\sqrt3}$, $\tan\alpha=\sqrt2$ |
| Cone of given volume, least curved surface | $h=\sqrt2\,r$ |
| Window (rectangle + semicircle), perimeter $P$ | $r=\dfrac{P}{\pi+4}$, rectangle height $=r$ |
| Wire of length $L$ cut into a square and a circle, least total area | side $=\dfrac{L}{\pi+4}=2r$ |
| Open box from a square sheet of side $a$ | cut $x=\dfrac a6$ |
| Right triangle with given hypotenuse, maximum area | isosceles |

## Values worth knowing

- Max of $\sin x+\cos x$ is $\sqrt2$; max of $\sin x\cos x$ is $\dfrac12$.
- $x+\dfrac1x$ ($x>0$) has minimum 2 at $x=1$.
- $\dfrac{\log x}{x}$ has maximum $\dfrac1e$ at $x=e$; $x^x$ is stationary at $x=\dfrac1e$.

Not in boards 2026–27: tangents and normals, approximations.
