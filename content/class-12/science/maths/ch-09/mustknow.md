# Ch 9 · Differential Equations — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve · `W` word problem · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Linear equation $\frac{dy}{dx}+Py=Q$ (or $\frac{dx}{dy}+Px=Q$): general or particular solution. [3]
2. ★★★ `S` Homogeneous equation: substitute $y=vx$ (or $x=vy$). [3]
3. ★★ `S` Variable separable, often with an initial condition. [2–3]
4. ★★ `MCQ` Order and degree; integrating factor; number of arbitrary constants. [1]
5. ★ `W` `C` Growth and decay: population, bacteria, bank principal, cooling. [3–4]

## Must-know lines and definitions

- **Order:** order of the highest derivative in the equation.
- **Degree:** power of the highest-order derivative, when the equation is polynomial in derivatives.
- **Degree not defined:** when a derivative is inside $\sin$, $\cos$, $\log$ or an exponent.
- **General solution:** contains as many arbitrary constants as the order.
- **Particular solution:** contains no arbitrary constants.
- **Homogeneous equation:** $\dfrac{dy}{dx}=F(x,y)$ with $F(\lambda x,\lambda y)=F(x,y)$.
- **Linear equation in $y$:** $\dfrac{dy}{dx}+Py=Q$, with $P$, $Q$ functions of $x$ only.
- **Linear equation in $x$:** $\dfrac{dx}{dy}+Px=Q$, with $P$, $Q$ functions of $y$ only.
- **Order to test the type:** separable, then homogeneous, then linear.
- **Not in boards 2026–27:** formation of a differential equation.

## Key formulas

:::formula Variable separable: method
$f(y)\,dy=g(x)\,dx\ \Rightarrow\ \int f(y)\,dy=\int g(x)\,dx+C$
:::

:::formula Homogeneous equation: substitution
$y=vx$,   $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$
:::

:::formula Homogeneous in $\dfrac xy$: substitution
$x=vy$,   $\dfrac{dx}{dy}=v+y\dfrac{dv}{dy}$
:::

:::formula Integrating factor of $\dfrac{dy}{dx}+Py=Q$
$\text{I.F.}=e^{\int P\,dx}$
:::

:::formula Solution of $\dfrac{dy}{dx}+Py=Q$
$y\cdot(\text{I.F.})=\int Q\cdot(\text{I.F.})\,dx+C$
:::

:::formula Integrating factor of $\dfrac{dx}{dy}+Px=Q$
$\text{I.F.}=e^{\int P\,dy}$
:::

:::formula Solution of $\dfrac{dx}{dy}+Px=Q$
$x\cdot(\text{I.F.})=\int Q\cdot(\text{I.F.})\,dy+C$
:::

:::formula Integrating factor when $P=\dfrac1x$
$x$
:::

:::formula Integrating factor when $P=\dfrac2x$
$x^2$
:::

:::formula Integrating factor when $P=-\dfrac1x$
$\dfrac1x$
:::

:::formula Integrating factor when $P=\cot x$
$\sin x$
:::

:::formula Integrating factor when $P=\tan x$
$\sec x$
:::

:::formula Integrating factor when $P=\dfrac{2x}{1+x^2}$
$1+x^2$
:::

:::formula Integrating factor when $P=\sec^2x$
$e^{\tan x}$
:::

:::formula Growth or decay: $\dfrac{dP}{dt}=kP$
$P=P_0e^{kt}$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Linear equation (3 marks)
Standard form; identify $P$, $Q$; I.F. [1] → $y\cdot\text{I.F.}=\int Q\cdot\text{I.F.}\,dx+C$, integrate [1] → use the condition for $C$ [½] → final answer [½].
:::

:::skeleton S · Homogeneous equation (3 marks)
Write $\dfrac{dy}{dx}=F(x,y)$; show $F(\lambda x,\lambda y)=F(x,y)$ [½] → put $y=vx$, simplify to separate $v$ and $x$ [1] → integrate both sides [1] → replace $v=\dfrac yx$ [½].
:::

:::skeleton S · Variable separable (2–3 marks)
Separate the variables [½–1] → integrate, one constant [1] → use the condition if given, simplify [½–1].
:::

:::skeleton W · Growth / decay (3–4 marks)
$\dfrac{dN}{dt}=kN$ from the sentence → $N=N_0e^{kt}$ → use the first reading for $k$ → use it to answer; leave logs unless values are given.
:::

## Quick 1-mark facts (MCQ, A–R)

- $\left(\dfrac{d^2y}{dx^2}\right)^3+\left(\dfrac{dy}{dx}\right)^4+y=0$: order 2, degree 3.
- $y''+\sin(y')=0$: order 2, degree not defined.
- $\left[1+(y')^2\right]^{3/2}=y''$: order 2, degree 2 (after squaring).
- Arbitrary constants in the general solution of a 4th-order equation: four.
- Arbitrary constants in a particular solution: none (zero).
- I.F. of $x\dfrac{dy}{dx}-y=x^4-3x$: $\dfrac1x$.
- I.F. of $\dfrac{dy}{dx}+y\tan x=\sec x$: $\sec x$.
- Solution of $\dfrac{dy}{dx}=\dfrac yx$: $y=Cx$.
- Solution of $x\,dy+y\,dx=0$: $xy=C$.
- Solution of $\dfrac{dy}{dx}=e^{x+y}$: $e^x+e^{-y}=C$.
- Solution of $y\log y\,dx-x\,dy=0$: $y=e^{Cx}$.

## Mark-losing traps

:::tip Standard form
Make the coefficient of $\dfrac{dy}{dx}$ equal to 1 before reading $P$ and $Q$.
:::

:::tip Sign of $P$
In $\dfrac{dy}{dx}-\dfrac yx=\dots$, $P=-\dfrac1x$, so I.F. $=\dfrac1x$, not $x$.
:::

:::tip Constant of integration
Add $C$ at the integration step; adding it after dividing or simplifying is wrong.
:::

:::tip Back-substitution
After $y=vx$, replace $v$ by $\dfrac yx$ in the final answer.
:::

:::tip Linear in $x$
If $y$ appears as $y^2$ or inside a function, rewrite the equation as $\dfrac{dx}{dy}+Px=Q$.
:::
