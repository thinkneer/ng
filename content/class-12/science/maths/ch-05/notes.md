# Ch 5 · Continuity and Differentiability

Two questions run through this chapter. First: can you draw the graph of a function through a point without lifting your pen? That is continuity. Second: does the graph have one clear slope at that point? That is differentiability. Once those are settled, the rest of the chapter is a toolkit for finding $\dfrac{dy}{dx}$ when the function is awkward: a function inside a function, $y$ tangled up with $x$, a variable in the power, or $x$ and $y$ both given through a third variable.

## Continuity at a point

A function is continuous at $x=a$ when the value it *approaches* from the left, the value it approaches from the right, and the value it actually *has* at $a$ are all the same number.

:::formula Continuity at $x=a$
$$\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=f(a)$$
:::

Polynomials, $\sin x$, $\cos x$, $e^x$ and $|x|$ are continuous everywhere. $\log x$ is continuous for $x>0$, and a rational function is continuous wherever its denominator is not zero. Sums, products and composites of continuous functions are continuous, so in practice you only have to worry at the points where the rule of a function changes or a denominator vanishes.

The standard board question hands you a function with an unknown constant and asks you to make it continuous. You need a few limits ready: as $x\to0$, $\dfrac{\sin x}{x}\to1$, $\dfrac{\tan x}{x}\to1$, $\dfrac{1-\cos x}{x^2}\to\dfrac12$, $\dfrac{e^x-1}{x}\to1$ and $\dfrac{\log(1+x)}{x}\to1$.

:::skeleton Worked example: find $k$ for continuity (2 marks)
*$f(x)=\dfrac{1-\cos4x}{8x^2}$ for $x\ne0$ and $f(0)=k$. Find $k$ if $f$ is continuous at $x=0$.*

$f$ is continuous at $0$, so $\displaystyle\lim_{x\to0}f(x)=f(0)=k$ [½]

$\displaystyle\lim_{x\to0}\frac{1-\cos4x}{8x^2}=\lim_{x\to0}\frac{2\sin^22x}{8x^2}=\lim_{x\to0}\left(\frac{\sin2x}{2x}\right)^2=1$ [1]

So $\boxed{k=1}$ [½]
:::

When the function has different rules on the two sides, find the left-hand limit and the right-hand limit separately and set both equal to the value at the point.

:::skeleton Worked example: two unknowns (3 marks)
*$f(x)=5$ for $x\le2$, $\;ax+b$ for $2<x<10$, $\;21$ for $x\ge10$. Find $a$ and $b$ if $f$ is continuous.*

At $x=2$: LHL $=5=f(2)$, RHL $=2a+b$, so $2a+b=5$ [1]

At $x=10$: LHL $=10a+b$, RHL $=21=f(10)$, so $10a+b=21$ [1]

Subtracting: $8a=16$, so $\boxed{a=2,\ b=1}$ [1]
:::

:::tip Compare with $f(a)$
Showing LHL = RHL is not enough. The common value must also equal $f(a)$. Write all three lines; each one carries marks.
:::

**In one breath:** Continuous at $a$ means left limit = right limit = $f(a)$. For an unknown constant, compute the limits, equate them to the value at the point, and solve.

## Differentiability at a point

The derivative at $c$ is the limit of the slope of a chord, $\dfrac{f(c+h)-f(c)}{h}$, as $h\to0$. Take $h$ negative and you get the left-hand derivative (LHD); take $h$ positive and you get the right-hand derivative (RHD). The function is differentiable at $c$ only if the two agree.

<figure class="fig">
<svg viewBox="0 0 320 170" role="img" aria-label="Graph of y equals mod of x minus 1, a V shape with its corner at x equals 1">
<line x1="20" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="1"/>
<line x1="60" y1="20" x2="60" y2="155" stroke="currentColor" stroke-width="1"/>
<polyline points="20,60 140,140 260,60" fill="none" stroke="#6A3FA0" stroke-width="2.5"/>
<circle cx="140" cy="140" r="4" fill="#E0B400"/>
<text x="134" y="158" font-size="12" fill="currentColor">1</text>
<text x="292" y="156" font-size="12" fill="currentColor">x</text>
<text x="46" y="28" font-size="12" fill="currentColor">y</text>
<text x="52" y="78" font-size="12" fill="currentColor">slope −1</text>
<text x="212" y="100" font-size="12" fill="currentColor">slope +1</text>
<text x="150" y="132" font-size="12" fill="currentColor">corner</text>
</svg>
<figcaption>y = |x − 1|: no break at x = 1 (continuous) but two different slopes meet there (not differentiable).</figcaption>
</figure>

:::skeleton Worked example: differentiability of $|x-1|$ at $x=1$ (2 marks)
$f(1)=0$.

LHD $=\displaystyle\lim_{h\to0^-}\frac{f(1+h)-f(1)}{h}=\lim_{h\to0^-}\frac{|h|}{h}=\lim_{h\to0^-}\frac{-h}{h}=-1$ [1]

RHD $=\displaystyle\lim_{h\to0^+}\frac{|h|}{h}=\lim_{h\to0^+}\frac{h}{h}=1$ [½]

LHD $\ne$ RHD, so $f$ is **not differentiable** at $x=1$ [½]
:::

Every differentiable function is continuous, because a function cannot have a slope at a point where its graph breaks. The reverse is false: $|x-1|$ is continuous at 1 and still not differentiable there. Corners are the usual culprits, so $|x-a|$ fails at $x=a$, and $|x-1|+|x-2|$ fails at both 1 and 2.

**In one breath:** Differentiable means LHD = RHD. Differentiable implies continuous; continuous does not imply differentiable (think of a corner).

## Chain rule and inverse trigonometric functions

A function inside a function is differentiated from the outside in: differentiate the outer function, keep the inside untouched, then multiply by the derivative of the inside.

:::formula Chain rule
$$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$$
Example: $\dfrac{d}{dx}\sin(x^2)=\cos(x^2)\cdot2x$
:::

The derivatives of the inverse trigonometric functions are worth knowing cold: $\sin^{-1}x\to\dfrac{1}{\sqrt{1-x^2}}$, $\cos^{-1}x\to\dfrac{-1}{\sqrt{1-x^2}}$, $\tan^{-1}x\to\dfrac{1}{1+x^2}$, and the "co" functions carry a minus sign.

When an inverse trig function has an ugly inside, do not start differentiating. Substitute first so that the inside collapses, and differentiate the simple result.

:::skeleton Worked example: simplify, then differentiate (3 marks)
*Differentiate $y=\tan^{-1}\dfrac{\sqrt{1+x^2}-1}{x}$ with respect to $x$.*

Put $x=\tan\theta$, so $\sqrt{1+x^2}=\sec\theta$ [½]

$y=\tan^{-1}\dfrac{\sec\theta-1}{\tan\theta}=\tan^{-1}\dfrac{1-\cos\theta}{\sin\theta}=\tan^{-1}\left(\tan\dfrac\theta2\right)=\dfrac\theta2$ [1½]

$y=\dfrac12\tan^{-1}x$, so $\dfrac{dy}{dx}=\boxed{\dfrac{1}{2(1+x^2)}}$ [1]
:::

**In one breath:** Differentiate outside-in and multiply by the derivative of the inside. For inverse trig with a messy argument, substitute ($x=\tan\theta$, $\sin\theta$ or $\cos2\theta$) to simplify before differentiating.

## Implicit functions

Sometimes $y$ cannot be written neatly as "$y=$ something in $x$". Differentiate the whole equation with respect to $x$ anyway, remembering that $y$ is a function of $x$: every time you differentiate a $y$-term, the chain rule attaches a $\dfrac{dy}{dx}$.

:::skeleton Worked example: implicit differentiation (2 marks)
*Find $\dfrac{dy}{dx}$ if $x^2+xy+y^2=100$.*

Differentiate both sides w.r.t. $x$: $2x+\left(x\dfrac{dy}{dx}+y\right)+2y\dfrac{dy}{dx}=0$ [1]

$(x+2y)\dfrac{dy}{dx}=-(2x+y)$, so $\dfrac{dy}{dx}=\boxed{-\dfrac{2x+y}{x+2y}}$ [1]
:::

:::tip The product $xy$
$\dfrac{d}{dx}(xy)$ is $x\dfrac{dy}{dx}+y$, not $\dfrac{dy}{dx}$. Treat $xy$ as a product of two functions of $x$.
:::

**In one breath:** Differentiate every term with respect to $x$, attach $\dfrac{dy}{dx}$ to each differentiated $y$, collect the $\dfrac{dy}{dx}$ terms and solve.

## Logarithmic differentiation

The power rule works when the power is a constant; the rule for $a^x$ works when the base is a constant. When *both* base and power contain $x$, as in $x^x$ or $(\sin x)^{\cos x}$, neither rule applies. Take logs first: a log brings the power down and turns the problem into a product.

For $y=u^v$: $\log y=v\log u$, so $\dfrac1y\dfrac{dy}{dx}=v'\log u+\dfrac{v\,u'}{u}$. In this course $\log$ always means $\log_e$, with $\dfrac{d}{dx}\log x=\dfrac1x$, $\dfrac{d}{dx}e^x=e^x$ and $\dfrac{d}{dx}a^x=a^x\log a$.

:::skeleton Worked example: a sum of two such terms (3 marks)
*Find $\dfrac{dy}{dx}$ if $y=x^{\sin x}+(\sin x)^{\cos x}$.*

Let $u=x^{\sin x}$ and $v=(\sin x)^{\cos x}$, so $\dfrac{dy}{dx}=\dfrac{du}{dx}+\dfrac{dv}{dx}$ [½]

$\log u=\sin x\log x\ \Rightarrow\ \dfrac{du}{dx}=x^{\sin x}\left[\cos x\log x+\dfrac{\sin x}{x}\right]$ [1]

$\log v=\cos x\log\sin x\ \Rightarrow\ \dfrac{dv}{dx}=(\sin x)^{\cos x}\left[\cos x\cot x-\sin x\log\sin x\right]$ [1]

$\dfrac{dy}{dx}=x^{\sin x}\left[\cos x\log x+\dfrac{\sin x}{x}\right]+(\sin x)^{\cos x}\left[\cos x\cot x-\sin x\log\sin x\right]$ [½]
:::

:::tip Log of a sum
$\log(u+v)$ is not $\log u+\log v$. When $y$ is a sum, split it into $u$ and $v$, differentiate each by logs, then add.
:::

**In one breath:** Variable in the power? Take log, differentiate the product, multiply back by $y$. For a sum of such terms, handle each term separately.

## Parametric functions

Here $x$ and $y$ are both given in terms of a third variable, $t$ or $\theta$. Differentiate each with respect to the parameter and divide.

:::formula Parametric derivatives
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}\qquad\frac{d^2y}{dx^2}=\frac{d}{dt}\left(\frac{dy}{dx}\right)\cdot\frac{dt}{dx}$$
:::

:::skeleton Worked example: first and second derivative (3 marks)
*$x=a(\theta-\sin\theta)$, $y=a(1+\cos\theta)$. Find $\dfrac{d^2y}{dx^2}$.*

$\dfrac{dx}{d\theta}=a(1-\cos\theta)$, $\ \dfrac{dy}{d\theta}=-a\sin\theta$ [1]

$\dfrac{dy}{dx}=\dfrac{-\sin\theta}{1-\cos\theta}=\dfrac{-2\sin\frac\theta2\cos\frac\theta2}{2\sin^2\frac\theta2}=-\cot\dfrac\theta2$ [1]

$\dfrac{d^2y}{dx^2}=\dfrac12\operatorname{cosec}^2\dfrac\theta2\cdot\dfrac{1}{a(1-\cos\theta)}=\boxed{\dfrac{1}{4a}\operatorname{cosec}^4\dfrac\theta2}$ [1]
:::

:::tip Second derivative in parametric form
$\dfrac{d^2y}{dx^2}$ is **not** $\dfrac{d^2y/dt^2}{d^2x/dt^2}$. Differentiate $\dfrac{dy}{dx}$ with respect to the parameter and then multiply by $\dfrac{dt}{dx}$.
:::

**In one breath:** Divide the two parameter-derivatives for $\dfrac{dy}{dx}$. For the second derivative, differentiate that answer with respect to the parameter and multiply by $\dfrac{dt}{dx}$.

## Second-order derivatives and "prove that" questions

The second derivative $y_2=\dfrac{d^2y}{dx^2}$ is just the derivative of $y_1=\dfrac{dy}{dx}$. Boards love to ask you to prove a relation connecting $y$, $y_1$ and $y_2$. The trick that keeps the algebra short: after finding $y_1$, clear any fraction or square root *before* you differentiate again.

:::skeleton Worked example: prove a relation (3 marks)
*If $y=(\tan^{-1}x)^2$, show that $(x^2+1)^2y_2+2x(x^2+1)y_1=2$.*

$y_1=\dfrac{2\tan^{-1}x}{1+x^2}$, so $(1+x^2)\,y_1=2\tan^{-1}x$ [1]

Differentiate again: $(1+x^2)\,y_2+2x\,y_1=\dfrac{2}{1+x^2}$ [1]

Multiply by $(1+x^2)$: $(x^2+1)^2y_2+2x(x^2+1)y_1=2$. Hence proved. [1]
:::

When $y_1$ contains $\sqrt{1-x^2}$, as with $y=(\sin^{-1}x)^2$ or $y=e^{a\cos^{-1}x}$, cross-multiply and square both sides first; the square root disappears and the second differentiation takes one line.

**In one breath:** Find $y_1$, clear the fraction or root, differentiate once more, and rearrange into the form asked. End with "Hence proved".
