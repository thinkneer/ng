# Ch 8 · Application of Integrals — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / find · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Area of the circle $x^2+y^2=a^2$ or the ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ (or a part of it) by integration. [3–5]
2. ★★★ `S` Parabola with a line: $y^2=4ax$ and its latus rectum or $x=h$; $x^2=4y$ with $y=2$, $y=4$. [3–5]
3. ★★ `S` Area under $y=|x+3|$, $y=\sin x$, $y=\cos x$, $y=x^3$ between two ordinates. [3]
4. ★★ `S` Sketch a region bounded by a circle and a line and find its area. [5]
5. ★ `S` Area of a triangle with given vertices, using integration. [5]

## Must-know lines and definitions

- **Area with vertical strips:** $\int_a^by\,dx$, between $x=a$ and $x=b$.
- **Area with horizontal strips:** $\int_c^dx\,dy$, between $y=c$ and $y=d$.
- **Area below the $x$-axis:** the integral is negative; take its modulus.
- **Curve crossing the axis:** split the integral at the crossing and add the sizes.
- **Circle or ellipse centred at the origin:** area $=4\times$ first-quadrant area.
- **Parabola $y^2=4ax$:** symmetric about the $x$-axis; area $=2\times$ upper half.
- **Latus rectum of $y^2=4ax$:** the line $x=a$.
- **Every area answer needs:** a sketch with shading and one strip, and "sq. units".
- **Syllabus 2026–27:** lines, circles, parabolas, ellipses in standard form only.
- **Not a listed topic:** area between two curves.

## Key formulas

:::formula Area under $y=f(x)$ from $x=a$ to $x=b$
$A=\int_a^by\,dx$
:::

:::formula Area between $x=g(y)$ and the $y$-axis from $y=c$ to $y=d$
$A=\int_c^dx\,dy$
:::

:::formula Integral of $\sqrt{a^2-x^2}$
$\int\sqrt{a^2-x^2}\,dx=\dfrac x2\sqrt{a^2-x^2}+\dfrac{a^2}{2}\sin^{-1}\dfrac xa+C$
:::

:::formula Area of the circle $x^2+y^2=a^2$
$4\int_0^a\sqrt{a^2-x^2}\,dx=\pi a^2$
:::

:::formula Area of the ellipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$
$4\cdot\dfrac ba\int_0^a\sqrt{a^2-x^2}\,dx=\pi ab$
:::

:::formula Area between $y^2=4ax$ and its latus rectum
$2\int_0^a2\sqrt a\,\sqrt x\,dx=\dfrac83a^2$
:::

:::formula Area between $y^2=4ax$ and the line $x=h$
$\dfrac83\sqrt a\,h^{3/2}$
:::

:::formula Smaller part of $x^2+y^2=a^2$ cut off by $x=\dfrac{a}{\sqrt2}$
$\dfrac{a^2}{2}\left(\dfrac\pi2-1\right)$
:::

:::formula Area under $y=\sin x$ from $0$ to $\pi$
$2$ sq. units
:::

:::formula Area between $y=\sin x$ (or $\cos x$) and the $x$-axis from $0$ to $2\pi$
$4$ sq. units
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Any area question (5 marks)
Sketch: axes, curve, intercepts, intersection points, shaded region, one strip [1] → area as an integral with limits; mention symmetry [1] → integrate with the standard formula [1½] → substitute limits, simplify, "sq. units" [1½].
:::

:::skeleton S · Curve that crosses the axis or has a corner (3 marks)
Sketch and the point where the sign or formula changes [1] → split the integral there, with correct signs [1] → evaluate and add [1].
:::

:::skeleton S · Line and circle (5 marks)
Sketch; solve for the intersection point [1] → area = (under the line) + (under the circle), split at the intersection [1] → integrate both [1] → substitute limits [1] → simplify, "sq. units" [1].
:::

:::skeleton S · Triangle by integration (5 marks)
Sketch [½] → equations of the three sides [1½] → area = sum of areas under the upper sides − area under the lower side [1] → integrate [1] → answer [1].
:::

## Quick 1-mark facts (MCQ, A–R)

- Area under $y=\cos x$ from $0$ to $\pi$: $2$, not $0$.
- Area bounded by $y=|x|$, the $x$-axis, $x=-1$, $x=1$: $1$ sq. unit.
- Area bounded by $y=x|x|$, the $x$-axis, $x=-1$, $x=1$: $\dfrac23$.
- Area bounded by $y=x^3$, the $x$-axis, $x=-2$, $x=1$: $\dfrac{17}{4}$.
- Area bounded by $y^2=4x$ and $x=3$: $8\sqrt3$.
- Area of the ellipse $\dfrac{x^2}{4}+\dfrac{y^2}{9}=1$: $6\pi$.
- First-quadrant area of $x^2+y^2=4$: $\pi$.
- Area bounded by $y^2=4x$, the $y$-axis and $y=3$: $\dfrac94$.
- Area bounded by $y=3x+2$, the $x$-axis, $x=-1$, $x=1$: $\dfrac{13}{3}$.

## Mark-losing traps

:::tip No sketch
An area answer without a shaded, labelled sketch loses up to 1 mark.
:::

:::tip Sign change
Integrating straight across a point where the curve crosses the axis cancels area; split there.
:::

:::tip Symmetry factor
Forgetting the factor 2 or 4, or using it without writing "by symmetry".
:::

:::tip Values of $\sin^{-1}$
$\sin^{-1}1=\dfrac\pi2$, $\sin^{-1}\dfrac{\sqrt3}{2}=\dfrac\pi3$, $\sin^{-1}\dfrac{1}{\sqrt2}=\dfrac\pi4$, $\sin^{-1}\dfrac12=\dfrac\pi6$.
:::

:::tip Units
End with "sq. units" (or m², cm² in a word problem).
:::
