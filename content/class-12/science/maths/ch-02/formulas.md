# Ch 2 · Inverse Trigonometric Functions — formulas and key facts

## Principal value branches

| Function | Domain | Range (principal branch) |
|---|---|---|
| $\sin^{-1}x$ | $[-1,1]$ | $\left[-\dfrac\pi2,\dfrac\pi2\right]$ |
| $\cos^{-1}x$ | $[-1,1]$ | $[0,\pi]$ |
| $\tan^{-1}x$ | $\mathbb{R}$ | $\left(-\dfrac\pi2,\dfrac\pi2\right)$ |
| $\cot^{-1}x$ | $\mathbb{R}$ | $(0,\pi)$ |
| $\sec^{-1}x$ | $\mathbb{R}-(-1,1)$ | $[0,\pi]-\left\{\dfrac\pi2\right\}$ |
| $\operatorname{cosec}^{-1}x$ | $\mathbb{R}-(-1,1)$ | $\left[-\dfrac\pi2,\dfrac\pi2\right]-\{0\}$ |

## Rules

:::formula Negative arguments
$\sin^{-1}(-x)=-\sin^{-1}x$   $\tan^{-1}(-x)=-\tan^{-1}x$   $\operatorname{cosec}^{-1}(-x)=-\operatorname{cosec}^{-1}x$<br>
$\cos^{-1}(-x)=\pi-\cos^{-1}x$   $\cot^{-1}(-x)=\pi-\cot^{-1}x$   $\sec^{-1}(-x)=\pi-\sec^{-1}x$
:::

:::formula Cancelling
$\sin^{-1}(\sin\theta)=\theta$ for $\theta\in\left[-\dfrac\pi2,\dfrac\pi2\right]$   $\cos^{-1}(\cos\theta)=\theta$ for $\theta\in[0,\pi]$   $\tan^{-1}(\tan\theta)=\theta$ for $\theta\in\left(-\dfrac\pi2,\dfrac\pi2\right)$<br>
$\sin(\sin^{-1}x)=x$ for all $x\in[-1,1]$
:::

:::formula Complementary pairs (useful in objective questions)
$\sin^{-1}x+\cos^{-1}x=\dfrac\pi2$   $\tan^{-1}x+\cot^{-1}x=\dfrac\pi2$   $\sec^{-1}x+\operatorname{cosec}^{-1}x=\dfrac\pi2$
:::

## Values to know

| Function | Values |
|---|---|
| $\sin^{-1}$ | $\dfrac12\to\dfrac\pi6$,  $\dfrac{1}{\sqrt2}\to\dfrac\pi4$,  $\dfrac{\sqrt3}{2}\to\dfrac\pi3$,  $1\to\dfrac\pi2$,  $-\dfrac12\to-\dfrac\pi6$ |
| $\cos^{-1}$ | $\dfrac12\to\dfrac\pi3$,  $0\to\dfrac\pi2$,  $-\dfrac12\to\dfrac{2\pi}{3}$,  $-\dfrac{1}{\sqrt2}\to\dfrac{3\pi}{4}$,  $-\dfrac{\sqrt3}{2}\to\dfrac{5\pi}{6}$,  $-1\to\pi$ |
| $\tan^{-1}$ | $\dfrac{1}{\sqrt3}\to\dfrac\pi6$,  $1\to\dfrac\pi4$,  $\sqrt3\to\dfrac\pi3$,  $-1\to-\dfrac\pi4$ |
| $\cot^{-1}$ | $-1\to\dfrac{3\pi}{4}$,  $-\sqrt3\to\dfrac{5\pi}{6}$,  $-\dfrac{1}{\sqrt3}\to\dfrac{2\pi}{3}$ |
| $\sec^{-1}$ | $2\to\dfrac\pi3$,  $-2\to\dfrac{2\pi}{3}$,  $-\sqrt2\to\dfrac{3\pi}{4}$ |
| $\operatorname{cosec}^{-1}$ | $2\to\dfrac\pi6$,  $-\sqrt2\to-\dfrac\pi4$ |

## Simplifications

| You see | Put |
|---|---|
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$ |
| $a^2+x^2$, $\sqrt{a^2+x^2}$ | $x=a\tan\theta$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta$ |
| $\sqrt{\dfrac{1-x}{1+x}}$ | $x=\cos2\theta$ |
| $1\pm\sin x$, $1\pm\cos x$ | half-angle identities |

- $\tan^{-1}\dfrac{\cos x}{1-\sin x}=\dfrac\pi4+\dfrac x2$;  $\tan^{-1}\dfrac{\cos x-\sin x}{\cos x+\sin x}=\dfrac\pi4-x$
- $\tan^{-1}\dfrac{\sqrt{1+x^2}-1}{x}=\dfrac12\tan^{-1}x$;  $\tan^{-1}\sqrt{\dfrac{1-\cos x}{1+\cos x}}=\dfrac x2$ for $0\lt x\lt\pi$
- $\sin^{-1}\left(2x\sqrt{1-x^2}\right)=2\sin^{-1}x$ for $-\dfrac{1}{\sqrt2}\le x\le\dfrac{1}{\sqrt2}$

Not in boards 2026–27: sum formulas ($\tan^{-1}x+\tan^{-1}y$, $2\tan^{-1}x$).
