# Ch 2 · Inverse Trigonometric Functions

"$\sin\dfrac\pi6=\dfrac12$" answers the question *what is the sine of this angle?* An inverse trigonometric function asks it the other way round: *which angle has sine $\dfrac12$?* The difficulty is that many angles do: $\dfrac\pi6$, $\dfrac{5\pi}{6}$, $\dfrac{13\pi}{6}$ and so on. This short chapter is about agreeing on one answer, called the principal value, and using it correctly. It is worth about 3 marks, almost always as MCQs and a 2-marker, and they are quick marks once the branches are memorised.

## Why a restricted branch is needed

A function has an inverse only if it is one-one and onto. $\sin x$ on the whole real line is not one-one, because it repeats. So we cut it down to a piece on which it takes every value from $-1$ to $1$ exactly once: the interval $\left[-\dfrac\pi2,\dfrac\pi2\right]$. On that piece the inverse exists, and it is written $\sin^{-1}x$.

So $\sin^{-1}x$ has domain $[-1,1]$ and its answers always lie in $\left[-\dfrac\pi2,\dfrac\pi2\right]$. That interval is the **principal value branch**, and the answer in it is the **principal value**.

<figure class="fig" id="ch02-arcsin-graph">
<svg viewBox="0 0 320 195" role="img" aria-label="Graph of y equals inverse sine of x, rising from the point minus 1, minus pi by 2 to the point 1, pi by 2">
<line x1="20" y1="95" x2="305" y2="95" stroke="currentColor" stroke-width="1"/>
<line x1="160" y1="8" x2="160" y2="185" stroke="currentColor" stroke-width="1"/>
<text x="297" y="109" font-size="12" fill="currentColor">x</text>
<text x="146" y="18" font-size="12" fill="currentColor">y</text>
<polyline points="70.0,173.5 72.2,162.3 74.5,157.7 76.8,154.1 79.0,151.0 81.2,148.3 83.5,145.8 85.8,143.5 88.0,141.4 90.2,139.3 92.5,137.4 94.8,135.6 97.0,133.8 99.2,132.0 101.5,130.4 103.8,128.8 106.0,127.2 108.2,125.6 110.5,124.1 112.8,122.6 115.0,121.2 117.2,119.7 119.5,118.3 121.8,116.9 124.0,115.6 126.2,114.2 128.5,112.9 130.8,111.6 133.0,110.2 135.2,108.9 137.5,107.6 139.8,106.3 142.0,105.1 144.2,103.8 146.5,102.5 148.8,101.3 151.0,100.0 153.2,98.8 155.5,97.5 157.8,96.3 160.0,95.0 162.2,93.7 164.5,92.5 166.8,91.2 169.0,90.0 171.2,88.7 173.5,87.5 175.8,86.2 178.0,84.9 180.2,83.7 182.5,82.4 184.8,81.1 187.0,79.8 189.2,78.4 191.5,77.1 193.8,75.8 196.0,74.4 198.2,73.1 200.5,71.7 202.8,70.3 205.0,68.8 207.2,67.4 209.5,65.9 211.8,64.4 214.0,62.8 216.2,61.2 218.5,59.6 220.8,58.0 223.0,56.2 225.2,54.4 227.5,52.6 229.8,50.7 232.0,48.6 234.2,46.5 236.5,44.2 238.8,41.7 241.0,39.0 243.2,35.9 245.5,32.3 247.8,27.7 250.0,16.5" fill="none" stroke="#1F5FAD" stroke-width="2.5"/>
<circle cx="250.0" cy="16.5" r="3.5" fill="#E0B400"/>
<line x1="250.0" y1="95" x2="250.0" y2="16.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="160" y1="16.5" x2="250.0" y2="16.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<circle cx="70.0" cy="173.5" r="3.5" fill="#E0B400"/>
<line x1="70.0" y1="95" x2="70.0" y2="173.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="160" y1="173.5" x2="70.0" y2="173.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<text x="246" y="110" font-size="12" fill="currentColor">1</text><text x="60" y="89" font-size="12" fill="currentColor">−1</text><text x="120" y="20.46018366025517" font-size="12" fill="currentColor">π/2</text><text x="166" y="177.53981633974485" font-size="12" fill="currentColor">−π/2</text><text x="166" y="110" font-size="12" fill="currentColor">O</text><text x="40" y="30" font-size="12" fill="#1F5FAD">y = sin⁻¹x</text>
</svg>
<figcaption>y = sin⁻¹x: domain [−1, 1], range [−π/2, π/2]. It is the graph of y = sin x on that branch, reflected in the line y = x.</figcaption>
</figure>

Note that $\sin^{-1}x$ is an angle. It is not $(\sin x)^{-1}$, which means $\dfrac{1}{\sin x}$.

```ng-draw
id: draw-arcsin-graph
title: Sketch the graph of sin⁻¹x
svg: ref: notes#ch02-arcsin-graph
time: 3
```

**In one breath:** A trig function must be restricted to a branch where it is one-one before it can be inverted. $\sin^{-1}x$ takes $x\in[-1,1]$ and returns the one angle in $\left[-\dfrac\pi2,\dfrac\pi2\right]$ whose sine is $x$.

## The six principal branches

Each of the six functions gets its own branch. These must be known exactly, including which end points are left out.

| Function | Domain | Range (principal branch) |
|---|---|---|
| $\sin^{-1}x$ | $[-1,1]$ | $\left[-\dfrac\pi2,\dfrac\pi2\right]$ |
| $\cos^{-1}x$ | $[-1,1]$ | $[0,\pi]$ |
| $\tan^{-1}x$ | $\mathbb{R}$ | $\left(-\dfrac\pi2,\dfrac\pi2\right)$ |
| $\cot^{-1}x$ | $\mathbb{R}$ | $(0,\pi)$ |
| $\sec^{-1}x$ | $\mathbb{R}-(-1,1)$ | $[0,\pi]-\left\{\dfrac\pi2\right\}$ |
| $\operatorname{cosec}^{-1}x$ | $\mathbb{R}-(-1,1)$ | $\left[-\dfrac\pi2,\dfrac\pi2\right]-\{0\}$ |

A way to hold them in your head: $\sin^{-1}$, $\tan^{-1}$ and $\operatorname{cosec}^{-1}$ live between $-\dfrac\pi2$ and $\dfrac\pi2$ (quadrants I and IV), so they *can* be negative. $\cos^{-1}$, $\cot^{-1}$ and $\sec^{-1}$ live between $0$ and $\pi$ (quadrants I and II), so they are *never* negative.

```ng-fill
id: fill-principal-branches
title: Domains and principal branches
cols: Function | Domain | Principal value branch
row: $\sin^{-1}x$ | $[-1,1]$ | [[$\left[-\dfrac\pi2,\dfrac\pi2\right]$]]
row: $\cos^{-1}x$ | $[-1,1]$ | [[$[0,\pi]$]]
row: $\tan^{-1}x$ | [[$\mathbb R$]] | [[$\left(-\dfrac\pi2,\dfrac\pi2\right)$]]
row: $\cot^{-1}x$ | $\mathbb R$ | [[$(0,\pi)$]]
row: $\sec^{-1}x$ | [[$\mathbb R-(-1,1)$]] | [[$[0,\pi]-\left\{\dfrac\pi2\right\}$]]
row: $\operatorname{cosec}^{-1}x$ | $\mathbb R-(-1,1)$ | [[$\left[-\dfrac\pi2,\dfrac\pi2\right]-\{0\}$]]
```

```ng-mnemonic
id: minus-sign-out-or-pi
title: What happens to a minus sign inside
trick: **sin, tan, cosec** throw the minus **out**; **cos, cot, sec** turn it into **π −**
meaning: $\sin^{-1}(-x)=-\sin^{-1}x$, and the same for $\tan^{-1}$ and $\operatorname{cosec}^{-1}$: their branch is centred on 0.
meaning: $\cos^{-1}(-x)=\pi-\cos^{-1}x$, and the same for $\cot^{-1}$ and $\sec^{-1}$: their branch runs from 0 to $\pi$.
prompt: Which inverse functions give π − (…) for a negative input?
```

**In one breath:** sin, tan, cosec inverses: $-\dfrac\pi2$ to $\dfrac\pi2$. cos, cot, sec inverses: $0$ to $\pi$. Know which brackets are open.

## Finding principal values

For a positive argument the principal value is the familiar first-quadrant angle: $\sin^{-1}\dfrac12=\dfrac\pi6$, $\cos^{-1}\dfrac12=\dfrac\pi3$, $\tan^{-1}\sqrt3=\dfrac\pi3$. For a negative argument, use the rule for that function's branch.

:::formula Negative arguments
$\sin^{-1}(-x)=-\sin^{-1}x$   $\tan^{-1}(-x)=-\tan^{-1}x$   $\operatorname{cosec}^{-1}(-x)=-\operatorname{cosec}^{-1}x$<br>
$\cos^{-1}(-x)=\pi-\cos^{-1}x$   $\cot^{-1}(-x)=\pi-\cot^{-1}x$   $\sec^{-1}(-x)=\pi-\sec^{-1}x$
:::

The first row follows from the branch being symmetric about 0; the second from the branch being $0$ to $\pi$.

:::skeleton Worked example: principal value (2 marks)
*Find the value of $\tan^{-1}\sqrt3-\sec^{-1}(-2)$.*

$\tan^{-1}\sqrt3=\dfrac\pi3$, which lies in $\left(-\dfrac\pi2,\dfrac\pi2\right)$ [½]

$\sec^{-1}(-2)=\pi-\sec^{-1}2=\pi-\dfrac\pi3=\dfrac{2\pi}{3}$, which lies in $[0,\pi]-\left\{\dfrac\pi2\right\}$ [1]

Value $=\dfrac\pi3-\dfrac{2\pi}{3}=\boxed{-\dfrac\pi3}$ [½]
:::

:::skeleton Worked example: a sum of three (2 marks)
*Find the value of $\tan^{-1}1+\cos^{-1}\left(-\dfrac12\right)+\sin^{-1}\left(-\dfrac12\right)$.*

$\tan^{-1}1=\dfrac\pi4$ [½]

$\cos^{-1}\left(-\dfrac12\right)=\pi-\dfrac\pi3=\dfrac{2\pi}{3}$ [½]

$\sin^{-1}\left(-\dfrac12\right)=-\dfrac\pi6$ [½]

Sum $=\dfrac\pi4+\dfrac{2\pi}{3}-\dfrac\pi6=\boxed{\dfrac{3\pi}{4}}$ [½]
:::

:::tip $\cos^{-1}$ of a negative number
$\cos^{-1}\left(-\dfrac12\right)$ is $\dfrac{2\pi}{3}$, not $-\dfrac\pi3$. The functions $\cos^{-1}$, $\cot^{-1}$ and $\sec^{-1}$ never give a negative answer.
:::

```ng-steps
id: steps-principal-value
title: Finding a principal value
step: Let the expression be $y$, for example $y=\cos^{-1}\left(-\dfrac12\right)$.
step: Rewrite it as a trigonometric equation: $\cos y=-\dfrac12$.
step: Write the principal branch of that function: for $\cos^{-1}$ it is $[0,\pi]$.
step: Pick the one angle in the branch: $\cos\dfrac{2\pi}{3}=-\dfrac12$ and $\dfrac{2\pi}{3}\in[0,\pi]$.
step: State the answer: the principal value is $\dfrac{2\pi}{3}$.
```

**In one breath:** Find each term on its own branch; for a negative argument use "minus" for sin, tan, cosec and "$\pi$ minus" for cos, cot, sec. Give the answer in radians.

## When the angle is outside the branch

It is tempting to say $\sin^{-1}(\sin\theta)=\theta$. That is true only when $\theta$ already lies in the principal branch. If it does not, first replace $\theta$ by an angle inside the branch that has the same trigonometric value.

:::formula Cancelling inverse with direct
$\sin^{-1}(\sin\theta)=\theta$ only if $\theta\in\left[-\dfrac\pi2,\dfrac\pi2\right]$<br>
$\cos^{-1}(\cos\theta)=\theta$ only if $\theta\in[0,\pi]$<br>
$\tan^{-1}(\tan\theta)=\theta$ only if $\theta\in\left(-\dfrac\pi2,\dfrac\pi2\right)$
:::

:::skeleton Worked example: angle outside the branch (2 marks)
*Evaluate $\sin^{-1}\left(\sin\dfrac{3\pi}{5}\right)+\cos^{-1}\left(\cos\dfrac{7\pi}{6}\right)$.*

$\dfrac{3\pi}{5}\notin\left[-\dfrac\pi2,\dfrac\pi2\right]$; $\sin\dfrac{3\pi}{5}=\sin\left(\pi-\dfrac{3\pi}{5}\right)=\sin\dfrac{2\pi}{5}$, so the first term is $\dfrac{2\pi}{5}$ [1]

$\dfrac{7\pi}{6}\notin[0,\pi]$; $\cos\dfrac{7\pi}{6}=\cos\left(2\pi-\dfrac{7\pi}{6}\right)=\cos\dfrac{5\pi}{6}$, so the second term is $\dfrac{5\pi}{6}$ [½]

Sum $=\dfrac{2\pi}{5}+\dfrac{5\pi}{6}=\boxed{\dfrac{37\pi}{30}}$ [½]
:::

The other direction is safe: $\sin(\sin^{-1}x)=x$ for every $x$ in $[-1,1]$.

```ng-mnemonic
id: bring-the-angle-home
title: sin⁻¹(sin θ) is not always θ
trick: **Bring the angle home first**
meaning: $\sin^{-1}(\sin\theta)=\theta$ only when $\theta$ is "at home" in $\left[-\dfrac\pi2,\dfrac\pi2\right]$.
meaning: If it is not, replace $\theta$ by an angle in the branch with the same sine, such as $\pi-\theta$, and then cancel.
prompt: When is sin⁻¹(sin θ) equal to θ?
```

```ng-numerical
id: num-arcsin-of-sin
title: Bring the angle into the branch
question: Find the value of $\sin^{-1}(\sin {{t}}^\circ)$ in degrees.
var: t | 100 | 260 | 10
answer: 180-t
unit: °
dp: 0
tol: 0.5
step: ${{t}}^\circ$ is not in $[-90^\circ,90^\circ]$, so the answer is not ${{t}}^\circ$.
step: $\sin{{t}}^\circ=\sin(180^\circ-{{t}}^\circ)=\sin({{180-t:0}}^\circ)$
step: ${{180-t:0}}^\circ$ lies in $[-90^\circ,90^\circ]$, so the value is **{{180-t:0}}°**
```

**In one breath:** Before cancelling, check that the angle is in the branch. If not, use $\pi-\theta$ for sine, $2\pi-\theta$ for cosine, or $\theta-\pi$ for tangent to bring it in.

## Domain questions

To find the domain of something like $\sin^{-1}(2x-1)$, the expression inside must lie in the domain of $\sin^{-1}$, which is $[-1,1]$. Write that as an inequality and solve.

:::skeleton Worked example: domain (2 marks)
*Find the domain of $f(x)=\sin^{-1}(x^2-4)$.*

We need $-1\le x^2-4\le1$ [½]

So $3\le x^2\le5$ [½], which means $\sqrt3\le|x|\le\sqrt5$ [½]

Domain $=\boxed{[-\sqrt5,-\sqrt3]\cup[\sqrt3,\sqrt5]}$ [½]
:::

For $\sec^{-1}$ and $\operatorname{cosec}^{-1}$ the inside must satisfy $|\text{inside}|\ge1$: the domain of $\sec^{-1}(2x)$ is $x\le-\dfrac12$ or $x\ge\dfrac12$.

**In one breath:** Put the inside expression into the allowed set of the outer function and solve the inequality.

## Simplifying with a substitution

Some expressions collapse to something simple once the right substitution or half-angle identity is used. The aim is to turn the inside into $\tan(\text{something})$, so that $\tan^{-1}$ can cancel it.

:::skeleton Worked example: simplest form (3 marks)
*Write $\tan^{-1}\dfrac{\cos x}{1-\sin x}$, $-\dfrac{3\pi}{2}<x<\dfrac\pi2$, in the simplest form.*

$\cos x=\cos^2\dfrac x2-\sin^2\dfrac x2$ and $1-\sin x=\left(\cos\dfrac x2-\sin\dfrac x2\right)^2$ [1]

$\dfrac{\cos x}{1-\sin x}=\dfrac{\cos\frac x2+\sin\frac x2}{\cos\frac x2-\sin\frac x2}=\dfrac{1+\tan\frac x2}{1-\tan\frac x2}=\tan\left(\dfrac\pi4+\dfrac x2\right)$ [1½]

So the expression equals $\boxed{\dfrac\pi4+\dfrac x2}$ [½]
:::

The usual substitutions: for $\sqrt{a^2-x^2}$ put $x=a\sin\theta$; for $a^2+x^2$ put $x=a\tan\theta$; for $\sqrt{x^2-a^2}$ put $x=a\sec\theta$; for $\sqrt{\dfrac{1-x}{1+x}}$ put $x=\cos2\theta$.

:::tip Quote the interval
The cancellation $\tan^{-1}(\tan\alpha)=\alpha$ is valid only on the interval given in the question. Mention that interval in your last line.
:::

In the 2026–27 syllabus this chapter covers definition, domain, range, principal value branches and graphs. The addition formulas such as $\tan^{-1}x+\tan^{-1}y$ are not in boards. The complementary results $\sin^{-1}x+\cos^{-1}x=\dfrac\pi2$, $\tan^{-1}x+\cot^{-1}x=\dfrac\pi2$ and $\sec^{-1}x+\operatorname{cosec}^{-1}x=\dfrac\pi2$ are still handy in objective questions.

```ng-fill
id: fill-substitutions
title: Which substitution?
cols: Expression contains | Put
row: $\sqrt{a^2-x^2}$ | [[$x=a\sin\theta$]]
row: $a^2+x^2$ or $\sqrt{a^2+x^2}$ | [[$x=a\tan\theta$]]
row: $\sqrt{x^2-a^2}$ | [[$x=a\sec\theta$]]
row: $\sqrt{\dfrac{1-\cos x}{1+\cos x}}$ | [[half-angle formulas: $\tan\dfrac x2$]]
```

**In one breath:** Use half-angle identities or a substitution to turn the inside into a single $\tan$, cancel with $\tan^{-1}$, and state the interval that makes the cancellation valid.
