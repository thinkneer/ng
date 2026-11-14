# Ch 6 · Application of Derivatives

In the last chapter you learnt how to find a derivative. This chapter is about what a derivative is *for*. It answers three practical questions: how fast is something changing right now, where is a function going up or down, and where does it reach its highest or lowest value. The third question drives the 5-mark word problems and most case studies, so that is where the marks are.

## Rate of change

$\dfrac{dy}{dx}$ measures how fast $y$ changes per unit change in $x$. In most problems the quantities change with *time*, and the link between them is the chain rule. If the area of a circle depends on its radius, and the radius is growing with time, then $\dfrac{dA}{dt}=\dfrac{dA}{dr}\cdot\dfrac{dr}{dt}$.

The method never changes: write the relation between the quantities, differentiate both sides with respect to $t$, and only then put in the numbers for the instant asked.

:::skeleton Worked example: the sliding ladder (3 marks)
*A ladder 5 m long leans against a wall. Its foot is pulled away from the wall along the ground at 2 cm/s. How fast is its height on the wall decreasing when the foot is 4 m from the wall?*

Let the foot be $x$ m from the wall and the top $y$ m above the ground. Given $\dfrac{dx}{dt}=2$ cm/s; to find $\dfrac{dy}{dt}$ when $x=4$. [½]

$x^2+y^2=25$; when $x=4$, $y=3$ [½]

Differentiate w.r.t. $t$: $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$ [1]

$\dfrac{dy}{dt}=-\dfrac xy\dfrac{dx}{dt}=-\dfrac43\times2=-\dfrac83$ cm/s [½]

The height is decreasing at $\boxed{\dfrac83\text{ cm/s}}$ [½]
:::

:::tip Differentiate first, substitute later
If you put $x=4$ into $x^2+y^2=25$ before differentiating, everything becomes a constant and the derivative is zero. Numbers for the instant go in *after* the differentiation step.
:::

A negative rate means the quantity is decreasing; say so in words in the last line. In economics questions, **marginal cost** is $\dfrac{dC}{dx}$ and **marginal revenue** is $\dfrac{dR}{dx}$: for $R(x)=3x^2+36x+5$, the marginal revenue at $x=15$ is $6(15)+36=126$.

**In one breath:** Relation → differentiate with respect to time → substitute the instant's values → answer with unit and "increasing/decreasing".

## Increasing and decreasing functions

A function is increasing on an interval if its graph climbs as you move right, and decreasing if it falls. The derivative is the slope, so the sign of $f'(x)$ tells you which.

:::formula Test for increasing / decreasing
$f'(x)>0$ on an interval $\Rightarrow$ $f$ is strictly increasing there<br>
$f'(x)<0$ on an interval $\Rightarrow$ $f$ is strictly decreasing there
:::

To find the intervals: differentiate, factorise, find where $f'(x)=0$, and check the sign of $f'$ in each gap between those points.

:::skeleton Worked example: intervals of increase and decrease (3 marks)
*Find the intervals in which $f(x)=2x^3-3x^2-36x+7$ is increasing or decreasing.*

$f'(x)=6x^2-6x-36=6(x-3)(x+2)$; $f'(x)=0$ at $x=-2,\ 3$ [1]

Sign of $f'$: positive on $(-\infty,-2)$, negative on $(-2,3)$, positive on $(3,\infty)$ [1]

$f$ is increasing on $(-\infty,-2]\cup[3,\infty)$ and decreasing on $[-2,3]$ [1]
:::

<figure class="fig">
<svg viewBox="0 0 320 90" role="img" aria-label="Number line showing the sign of f dash: plus before minus 2, minus between minus 2 and 3, plus after 3">
<line x1="15" y1="50" x2="305" y2="50" stroke="currentColor" stroke-width="1.5"/>
<line x1="110" y1="42" x2="110" y2="58" stroke="currentColor" stroke-width="1.5"/>
<line x1="210" y1="42" x2="210" y2="58" stroke="currentColor" stroke-width="1.5"/>
<text x="102" y="76" font-size="13" fill="currentColor">−2</text>
<text x="206" y="76" font-size="13" fill="currentColor">3</text>
<text x="55" y="34" font-size="16" fill="#6A3FA0">+</text>
<text x="155" y="34" font-size="16" fill="#E0B400">−</text>
<text x="252" y="34" font-size="16" fill="#6A3FA0">+</text>
<text x="34" y="18" font-size="11" fill="currentColor">increasing</text>
<text x="134" y="18" font-size="11" fill="currentColor">decreasing</text>
<text x="232" y="18" font-size="11" fill="currentColor">increasing</text>
</svg>
<figcaption>Sign of f′(x) = 6(x − 3)(x + 2) on a number line. Draw this in the answer; it earns the middle mark.</figcaption>
</figure>

Sometimes you are asked to *show* that a function is increasing everywhere. Then prove that $f'$ is never negative: for $f(x)=x^3-3x^2+3x-100$, $f'(x)=3(x-1)^2\ge0$ for all real $x$, so $f$ is increasing on $\mathbb{R}$.

**In one breath:** Factorise $f'(x)$, mark its zeros on a number line, read the sign in each interval: plus means increasing, minus means decreasing.

## Local maxima and minima

A local maximum is a point higher than its neighbours; a local minimum is lower than its neighbours. Such points can only occur at **critical points**, where $f'(c)=0$ or $f$ is not differentiable. But not every critical point is a maximum or minimum, so you need a test.

:::formula Second derivative test
If $f'(c)=0$ and $f''(c)<0$: local maximum at $c$<br>
If $f'(c)=0$ and $f''(c)>0$: local minimum at $c$<br>
If $f''(c)=0$: the test fails; use the first derivative test
:::

The **first derivative test** looks at the sign of $f'$ on either side of $c$: plus to minus means a maximum, minus to plus means a minimum, and no change of sign means neither (a point of inflection, as $x^3$ has at 0).

:::skeleton Worked example: local maximum and minimum values (3 marks)
*Find the local maximum and local minimum values of $f(x)=x^3-6x^2+9x+15$.*

$f'(x)=3x^2-12x+9=3(x-1)(x-3)$; $f'(x)=0$ at $x=1,\ 3$ [1]

$f''(x)=6x-12$. $f''(1)=-6<0$: local maximum at $x=1$. $f''(3)=6>0$: local minimum at $x=3$ [1]

Local maximum value $f(1)=\boxed{19}$; local minimum value $f(3)=\boxed{15}$ [1]
:::

:::tip When $f''(c)=0$
$f''(c)=0$ does not mean "no maximum or minimum". It means this test cannot decide. Go back to the sign of $f'$ on both sides.
:::

**In one breath:** Solve $f'(x)=0$, then test each point: $f''<0$ is a maximum, $f''>0$ is a minimum. The question usually wants the *value* $f(c)$, not just $c$.

## Absolute maximum and minimum on a closed interval

On a closed interval $[a,b]$ a continuous function must reach a greatest and a least value. These can sit at a critical point inside the interval or at an end point, so compare the function's values at all of them. No second-derivative test is needed here; the table of values is the proof.

:::skeleton Worked example: absolute extremes (3 marks)
*Find the absolute maximum and minimum values of $f(x)=2x^3-15x^2+36x+1$ on $[1,5]$.*

$f'(x)=6x^2-30x+36=6(x-2)(x-3)$; critical points $x=2,\ 3$, both in $[1,5]$ [1]

$f(1)=24$, $f(2)=29$, $f(3)=28$, $f(5)=56$ [1]

Absolute maximum $\boxed{56}$ at $x=5$; absolute minimum $\boxed{24}$ at $x=1$ [1]
:::

:::tip End points count
The largest value here is at an end point, not at a critical point. Leaving out $f(a)$ and $f(b)$ is the most common way to lose this question.
:::

**In one breath:** Evaluate $f$ at the critical points inside the interval and at both ends; the biggest number is the absolute maximum, the smallest is the absolute minimum.

## Optimisation word problems

These are the 5-markers: the largest box, the cheapest tank, the cone of greatest volume. Every one of them is marked on the same five things.

1. A figure with the variables named.
2. The quantity to be optimised, written as a function of **one** variable (use the given condition to remove the other).
3. Derivative put equal to zero and solved.
4. The second-derivative (or sign-change) test.
5. What was asked, with units, in a closing sentence.

<figure class="fig">
<svg viewBox="0 0 320 190" role="img" aria-label="Square sheet of side 18 centimetres with a small square of side x cut from each corner">
<rect x="70" y="15" width="160" height="160" fill="none" stroke="currentColor" stroke-width="1.5"/>
<g fill="#E0B400" opacity="0.55">
<rect x="70" y="15" width="30" height="30"/><rect x="200" y="15" width="30" height="30"/>
<rect x="70" y="145" width="30" height="30"/><rect x="200" y="145" width="30" height="30"/>
</g>
<rect x="100" y="45" width="100" height="100" fill="none" stroke="#6A3FA0" stroke-width="2" stroke-dasharray="5 4"/>
<text x="80" y="35" font-size="12" fill="currentColor">x</text>
<text x="56" y="34" font-size="12" fill="currentColor">x</text>
<text x="118" y="100" font-size="12" fill="currentColor">base 18 − 2x</text>
<text x="128" y="188" font-size="12" fill="currentColor">18 cm</text>
<text x="240" y="100" font-size="12" fill="currentColor">18 cm</text>
</svg>
<figcaption>Open box: cut a square of side x from each corner and fold along the dashed lines. Base (18 − 2x) by (18 − 2x), height x.</figcaption>
</figure>

:::skeleton Worked example: the open box (5 marks)
*A square sheet of tin of side 18 cm is made into an open box by cutting a square from each corner and folding up the flaps. What side should be cut off so that the volume of the box is maximum? Find that volume.*

Let the side of each square cut off be $x$ cm. The box has base $(18-2x)$ by $(18-2x)$ and height $x$, with $0<x<9$ (figure) [1]

$V=x(18-2x)^2$ [1]

$\dfrac{dV}{dx}=(18-2x)^2-4x(18-2x)=(18-2x)(18-6x)$ [1]

$\dfrac{dV}{dx}=0\Rightarrow x=3$ (as $x=9$ gives no box) [½]

$\dfrac{d^2V}{dx^2}=-2(18-6x)-6(18-2x)=24x-144=-72<0$ at $x=3$, so $V$ is maximum [1]

Cut off squares of side $\boxed{3\text{ cm}}$; maximum volume $=3\times12^2=\boxed{432\text{ cm}^3}$ [½]
:::

Often the figure involves two variables tied by a fixed quantity. Use that tie first.

:::skeleton Worked example: cylinder inside a sphere (5 marks)
*Show that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius $R$ is $\dfrac{2R}{\sqrt3}$. Find the maximum volume.*

Let the cylinder have radius $r$ and height $h$. From the right triangle formed by the centre, the centre of the base and a point on its rim: $r^2+\dfrac{h^2}{4}=R^2$ (figure) [1]

$V=\pi r^2h=\pi\left(R^2-\dfrac{h^2}{4}\right)h=\pi\left(R^2h-\dfrac{h^3}{4}\right)$ [1]

$\dfrac{dV}{dh}=\pi\left(R^2-\dfrac{3h^2}{4}\right)=0\Rightarrow h=\dfrac{2R}{\sqrt3}$ [1½]

$\dfrac{d^2V}{dh^2}=-\dfrac{3\pi h}{2}<0$, so $V$ is maximum [1]

$V_{\max}=\pi\left(R^2-\dfrac{R^2}{3}\right)\dfrac{2R}{\sqrt3}=\boxed{\dfrac{4\pi R^3}{3\sqrt3}}$ cubic units [½]
:::

:::tip The test is a mark
A correct answer without the second-derivative (or sign-change) test loses a full mark. One line is enough, but it must be there.
:::

**In one breath:** Figure, one-variable function, derivative = 0, test, answer with units. If the algebra is easier, maximise $V^2$ or $A^2$ instead, and say so.
