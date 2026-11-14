# Ch 9 · Differential Equations

An ordinary equation asks for a number. A differential equation asks for a *function*: it tells you something about how $y$ changes, such as "the rate of growth is proportional to the amount present", and you have to find $y$ itself. Solving one always comes down to integrating. The skill this chapter tests is recognising which of three types you are looking at, because each type has its own fixed routine.

## Order, degree and the two kinds of solution

The **order** of a differential equation is the order of the highest derivative in it. The **degree** is the power of that highest derivative, once the equation has been written as a polynomial in its derivatives (no roots or fractions involving them).

- $\left(\dfrac{d^2y}{dx^2}\right)^3+\left(\dfrac{dy}{dx}\right)^4+y=0$ has order 2 and degree 3.
- $\left[1+\left(\dfrac{dy}{dx}\right)^2\right]^{3/2}=\dfrac{d^2y}{dx^2}$ must be squared first; then it has order 2 and degree 2.
- $\dfrac{d^2y}{dx^2}+\sin\left(\dfrac{dy}{dx}\right)=0$ has order 2, but it is not a polynomial in $\dfrac{dy}{dx}$, so its degree is **not defined**.

:::tip Degree not defined
If a derivative sits inside $\sin$, $\cos$, $\log$ or an exponent, the degree is "not defined". It is not 1, and it is not 0.
:::

Integrating introduces a constant. The **general solution** contains as many arbitrary constants as the order. A **particular solution** has none: you fix the constant using a given condition such as "$y=1$ when $x=0$".

**In one breath:** Order = highest derivative; degree = its power when the equation is polynomial in derivatives. General solution has arbitrary constants; a particular solution uses the given condition to remove them.

## Type 1: variables separable

If you can move everything involving $y$ (with $dy$) to one side and everything involving $x$ (with $dx$) to the other, integrate both sides and you are done.

:::formula Variable separable
$$f(y)\,dy=g(x)\,dx\ \Rightarrow\ \int f(y)\,dy=\int g(x)\,dx+C$$
:::

:::skeleton Worked example: general solution (3 marks)
*Solve $e^x\tan y\,dx+(1-e^x)\sec^2y\,dy=0$.*

Separate: $\dfrac{\sec^2y}{\tan y}\,dy=\dfrac{-e^x}{1-e^x}\,dx$ [1]

Integrate: $\log|\tan y|=\log|1-e^x|+\log C$ [1½]

$\boxed{\tan y=C(1-e^x)}$ [½]
:::

Writing the constant as $\log C$ when both sides are logs is a neat trick: the logs then combine and disappear.

:::skeleton Worked example: particular solution (3 marks)
*Find the particular solution of $\dfrac{dy}{dx}=-4xy^2$, given $y=1$ when $x=0$.*

Separate: $-\dfrac{dy}{y^2}=4x\,dx$ [1]

Integrate: $\dfrac1y=2x^2+C$ [1]

$x=0$, $y=1$ gives $C=1$, so $\dfrac1y=2x^2+1$, i.e. $\boxed{y=\dfrac{1}{2x^2+1}}$ [1]
:::

:::tip One constant, at the right moment
Add a single $C$ at the integration step, on one side only. Adding it at the very end, after simplifying, usually gives a wrong answer.
:::

Growth and decay problems are this type. "Rate of change proportional to the amount" means $\dfrac{dP}{dt}=kP$, which separates to give $P=P_0e^{kt}$. For example, a principal growing continuously at 5% per year satisfies $\dfrac{dP}{dt}=\dfrac{P}{20}$, so $P=P_0e^{t/20}$, and it doubles when $e^{t/20}=2$, that is after $20\log2$ years.

**In one breath:** Get $y$-terms with $dy$ and $x$-terms with $dx$, integrate both sides, add one constant, and use the condition if a particular solution is asked.

## Type 2: homogeneous equations

Sometimes the variables refuse to separate, but every term has the same total degree in $x$ and $y$, or the equation is built from the ratio $\dfrac yx$. Then $\dfrac{dy}{dx}=F(x,y)$ where $F$ does not change when $x$ and $y$ are both multiplied by $\lambda$. Such an equation is **homogeneous**, and one substitution always works.

:::formula Homogeneous equation
Check: $F(\lambda x,\lambda y)=F(x,y)$<br>
Substitute $y=vx$, so $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$
:::

After the substitution the equation becomes separable in $v$ and $x$.

:::skeleton Worked example: homogeneous equation (3 marks)
*Solve $x\dfrac{dy}{dx}=y-x\tan\dfrac yx$.*

$\dfrac{dy}{dx}=\dfrac yx-\tan\dfrac yx=F(x,y)$, and $F(\lambda x,\lambda y)=F(x,y)$, so the equation is homogeneous [½]

Put $y=vx$: $v+x\dfrac{dv}{dx}=v-\tan v$, so $\cot v\,dv=-\dfrac{dx}{x}$ [1]

Integrate: $\log|\sin v|=-\log|x|+\log C$, so $x\sin v=C$ [1]

Replace $v$ by $\dfrac yx$: $\boxed{x\sin\dfrac yx=C}$ [½]
:::

:::tip Finish the substitution
The answer must be in $x$ and $y$. Leaving $v$ in the final line loses the last ½ mark.
:::

If the equation is easier as $\dfrac{dx}{dy}$ in terms of $\dfrac xy$ (you will see $e^{x/y}$ or $\dfrac xy$ in it), use $x=vy$ with $\dfrac{dx}{dy}=v+y\dfrac{dv}{dy}$ instead.

**In one breath:** Same degree in every term, or $\dfrac yx$ everywhere: say it is homogeneous, put $y=vx$, separate $v$ and $x$, integrate, and put $\dfrac yx$ back.

## Type 3: linear equations

A first-order equation is **linear** when $y$ and $\dfrac{dy}{dx}$ appear only to the first power and are not multiplied together. Its standard form has the coefficient of $\dfrac{dy}{dx}$ equal to 1.

:::formula Linear equation in $y$
Standard form: $\dfrac{dy}{dx}+Py=Q$, with $P$, $Q$ functions of $x$<br>
Integrating factor: $\text{I.F.}=e^{\int P\,dx}$<br>
Solution: $y\cdot(\text{I.F.})=\displaystyle\int Q\cdot(\text{I.F.})\,dx+C$
:::

The integrating factor is chosen so that the left side becomes the derivative of $y\times\text{I.F.}$, which is why the solution has that shape. Because $e^{\log f(x)}=f(x)$, most integrating factors are simple: $P=\dfrac1x$ gives $x$, $P=\cot x$ gives $\sin x$, $P=\tan x$ gives $\sec x$, and $P=\dfrac{2x}{1+x^2}$ gives $1+x^2$.

:::skeleton Worked example: linear equation, particular solution (3 marks)
*Solve $\dfrac{dy}{dx}+2y\tan x=\sin x$, given $y=0$ when $x=\dfrac\pi3$.*

Here $P=2\tan x$, $Q=\sin x$. I.F. $=e^{\int2\tan x\,dx}=e^{2\log\sec x}=\sec^2x$ [1]

$y\sec^2x=\displaystyle\int\sin x\sec^2x\,dx+C=\int\sec x\tan x\,dx+C=\sec x+C$ [1]

$x=\dfrac\pi3$, $y=0$: $0=2+C$, so $C=-2$ [½]

$y\sec^2x=\sec x-2$, i.e. $\boxed{y=\cos x-2\cos^2x}$ [½]
:::

:::tip Standard form first
Divide through so that the coefficient of $\dfrac{dy}{dx}$ is 1 *before* reading off $P$. In $x\dfrac{dy}{dx}+2y=x^2\log x$, $P$ is $\dfrac2x$, not 2.
:::

Some equations are not linear in $y$ but become linear when you treat $x$ as the unknown. Write them as $\dfrac{dx}{dy}+Px=Q$ with $P$, $Q$ functions of $y$; then $\text{I.F.}=e^{\int P\,dy}$ and $x\cdot(\text{I.F.})=\displaystyle\int Q\cdot(\text{I.F.})\,dy+C$.

:::skeleton Worked example: linear in $x$ (3 marks)
*Solve $y\,dx-(x+2y^2)\,dy=0$.*

$\dfrac{dx}{dy}=\dfrac{x+2y^2}{y}$, so $\dfrac{dx}{dy}-\dfrac xy=2y$: linear in $x$ with $P=-\dfrac1y$, $Q=2y$ [1]

I.F. $=e^{-\log y}=\dfrac1y$ [½]

$\dfrac xy=\displaystyle\int2y\cdot\dfrac1y\,dy+C=2y+C$ [1]

$\boxed{x=2y^2+Cy}$ [½]
:::

**In one breath:** Standard form, $\text{I.F.}=e^{\int P\,dx}$, then $y\times\text{I.F.}=\int Q\times\text{I.F.}\,dx+C$. If $y$ appears squared or inside a function, try $\dfrac{dx}{dy}$.

## Choosing the method

Run through the three types in this order; it takes a few seconds and saves the question.

1. Can the $x$'s and $y$'s be separated? Then it is **variable separable**.
2. Is every term of the same degree, or does $\dfrac yx$ appear? Then it is **homogeneous**: $y=vx$.
3. Do $y$ and $\dfrac{dy}{dx}$ appear only to the first power? Then it is **linear in $y$**. If not, turn it over and check whether it is **linear in $x$**.

Forming a differential equation from a given family of curves is not in the 2026–27 syllabus; you are only asked to solve.

**In one breath:** Separable first, homogeneous second, linear third. Name the type in your first line, then follow its routine.
