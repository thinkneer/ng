# Ch 8 · Application of Integrals

A definite integral adds up infinitely many thin pieces. In this chapter the pieces are thin strips of area, and the integral gives the exact area of a region with a curved edge: part of a circle, the inside of an ellipse, the space between a parabola and a line. The integration itself is short. The marks are in drawing the region correctly and setting up the right integral, so every answer here starts with a sketch.

## Area as an integral

Take a curve $y=f(x)$ lying above the $x$-axis between $x=a$ and $x=b$. Slice the region into thin vertical strips. A strip at position $x$ has height $y$ and width $dx$, so its area is $y\,dx$. Adding all the strips from $a$ to $b$ is exactly what a definite integral does.

<figure class="fig" id="ch08-strip">
<svg viewBox="0 0 320 185" role="img" aria-label="Region under a curve between x equals a and x equals b with one thin vertical strip of width dx and height y">
<line x1="20" y1="160" x2="305" y2="160" stroke="currentColor" stroke-width="1"/>
<line x1="40" y1="15" x2="40" y2="175" stroke="currentColor" stroke-width="1"/>
<text x="297" y="174" font-size="12" fill="currentColor">x</text>
<text x="26" y="25" font-size="12" fill="currentColor">y</text>
<polygon points="100,160 100.0,82.7 103.8,81.4 107.5,80.0 111.2,78.7 115.0,77.4 118.8,76.2 122.5,74.9 126.2,73.7 130.0,72.6 133.8,71.4 137.5,70.3 141.2,69.2 145.0,68.1 148.8,67.1 152.5,66.0 156.2,65.0 160.0,64.0 163.8,63.0 167.5,62.0 171.2,61.1 175.0,60.1 178.8,59.2 182.5,58.3 186.2,57.3 190.0,56.4 193.8,55.6 197.5,54.7 201.2,53.8 205.0,53.0 208.8,52.1 212.5,51.3 216.2,50.4 220.0,49.6 223.8,48.8 227.5,48.0 231.2,47.2 235.0,46.4 238.8,45.6 242.5,44.9 246.2,44.1 250.0,43.3 250,160" fill="#6A3FA0" opacity="0.18"/>
<polyline points="40.0,128.0 46.3,113.3 52.6,107.3 58.9,102.6 65.2,98.7 71.5,95.2 77.8,92.1 84.1,89.2 90.4,86.5 96.7,84.0 103.0,81.6 109.3,79.4 115.6,77.2 121.9,75.1 128.2,73.1 134.5,71.2 140.8,69.3 147.1,67.5 153.4,65.8 159.7,64.1 166.0,62.4 172.3,60.8 178.6,59.2 184.9,57.7 191.2,56.2 197.5,54.7 203.8,53.2 210.1,51.8 216.4,50.4 222.7,49.0 229.0,47.7 235.3,46.4 241.6,45.0 247.9,43.8 254.2,42.5 260.5,41.2 266.8,40.0 273.1,38.8 279.4,37.6 285.7,36.4 292.0,35.3" fill="none" stroke="#6A3FA0" stroke-width="2.5"/>
<rect x="166.0" y="62.4" width="9" height="97.6" fill="#E0B400" opacity="0.8"/>
<text x="96" y="174" font-size="12" fill="currentColor">a</text><text x="246" y="174" font-size="12" fill="currentColor">b</text><text x="164.0" y="174" font-size="12" fill="currentColor">dx</text><text x="180.0" y="120" font-size="12" fill="currentColor">y</text><text x="230" y="40" font-size="12" fill="#6A3FA0">y = f(x)</text>
<line x1="100" y1="160" x2="100" y2="82.7" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="250" y1="160" x2="250" y2="43.3" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
</svg>
<figcaption>A thin vertical strip has area y dx. Adding the strips from x = a to x = b gives the area under the curve.</figcaption>
</figure>

:::formula Area under a curve (vertical strips)
$$A=\int_a^by\,dx=\int_a^bf(x)\,dx$$
Region bounded by $y=f(x)$, the $x$-axis and the lines $x=a$, $x=b$.
:::

:::skeleton Worked example: area under a parabola (3 marks)
*Find the area of the region bounded by $y^2=9x$, the lines $x=2$ and $x=4$, and the $x$-axis in the first quadrant.*

In the first quadrant $y=3\sqrt x$ (sketch with the strip) [1]

$A=\displaystyle\int_2^43\sqrt x\,dx=3\left[\dfrac23x^{3/2}\right]_2^4=2\left[x^{3/2}\right]_2^4$ [1]

$=2\left(8-2\sqrt2\right)=\boxed{(16-4\sqrt2)\text{ sq. units}}$ [1]
:::

```ng-steps
id: steps-area
title: Every area question
step: Sketch the curve and the bounding lines; shade the required region.
step: Draw one thin strip: vertical if the region sits on the $x$-axis, horizontal if it sits on the $y$-axis.
step: Read the limits from the sketch (find any intersection points by solving).
step: Write the integral: $\int y\,dx$ or $\int x\,dy$, and use symmetry if there is any.
step: Integrate, apply the limits and end with "sq. units".
```

```ng-numerical
id: num-area-parabola
title: Area under a parabola
question: Find the area bounded by the curve $y=x^2$, the $x$-axis and the lines $x=0$ and $x={{a}}$.
var: a | 1 | 6 | 1
answer: a^3/3
unit: sq. units
dp: 2
step: Area $=\displaystyle\int_0^{\,{{a}}\,}x^2\,dx=\left[\dfrac{x^3}{3}\right]_0^{\,{{a}}\,}$
step: $=\dfrac{\,{{a}}^3}{3}=$ **{{a^3/3:2}} sq. units**
```

```ng-mnemonic
id: standing-or-sleeping-strip
title: dx or dy?
trick: **Standing strip → dx. Sleeping strip → dy.**
meaning: A vertical (standing) strip has width $dx$ and height $y$: area $=\int y\,dx$.
meaning: A horizontal (sleeping) strip has height $dy$ and length $x$: area $=\int x\,dy$.
prompt: A horizontal strip is used. Is the integral in dx or dy?
```

```ng-draw
id: draw-strip
title: Sketch a region with its strip
svg: ref: notes#ch08-strip
time: 2
```

**In one breath:** Sketch the region, draw one strip, write its area as $y\,dx$, integrate between the two ordinates, and finish with "sq. units".

## Using symmetry: the circle and the ellipse

A circle or an ellipse centred at the origin is symmetric about both axes. So you find the area of the piece in the first quadrant, where $y$ is positive and has a single formula, and multiply by 4. The integral that appears every time is this one:

:::formula Integral of $\sqrt{a^2-x^2}$
$$\int\sqrt{a^2-x^2}\,dx=\frac x2\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\frac xa+C$$
:::

<figure class="fig" id="ch08-ellipse">
<svg viewBox="0 0 320 200" role="img" aria-label="Ellipse x squared over 16 plus y squared over 9 equals 1 with the first quadrant shaded and a vertical strip">
<line x1="20" y1="100" x2="305" y2="100" stroke="currentColor" stroke-width="1"/>
<line x1="160" y1="8" x2="160" y2="192" stroke="currentColor" stroke-width="1"/>
<text x="297" y="114" font-size="12" fill="currentColor">x</text>
<text x="146" y="18" font-size="12" fill="currentColor">y</text>
<polygon points="160,100 160.0,16.0 162.8,16.0 165.6,16.1 168.4,16.2 171.2,16.4 174.0,16.7 176.8,17.0 179.6,17.3 182.4,17.7 185.2,18.2 188.0,18.7 190.8,19.2 193.6,19.9 196.4,20.6 199.2,21.3 202.0,22.1 204.8,23.0 207.6,24.0 210.4,25.0 213.2,26.1 216.0,27.3 218.8,28.5 221.6,29.8 224.4,31.3 227.2,32.8 230.0,34.4 232.8,36.2 235.6,38.0 238.4,40.0 241.2,42.1 244.0,44.4 246.8,46.9 249.6,49.6 252.4,52.5 255.2,55.8 258.0,59.3 260.8,63.4 263.6,68.1 266.4,73.8 269.2,81.3 272.0,100.0" fill="#6A3FA0" opacity="0.2"/>
<ellipse cx="160" cy="100" rx="112" ry="84" fill="none" stroke="#6A3FA0" stroke-width="2.5"/>
<rect x="216.0" y="27.3" width="8" height="72.7" fill="#E0B400" opacity="0.85"/>
<text x="274" y="94" font-size="12" fill="currentColor">(4, 0)</text><text x="165" y="12" font-size="12" fill="currentColor">(0, 3)</text><text x="148" y="114" font-size="12" fill="currentColor">O</text><text x="214.0" y="114" font-size="12" fill="currentColor">dx</text>
</svg>
<figcaption>Ellipse x²/16 + y²/9 = 1. Find the shaded first-quadrant area and multiply by 4.</figcaption>
</figure>

:::skeleton Worked example: area of an ellipse (5 marks)
*Using integration, find the area enclosed by the ellipse $\dfrac{x^2}{16}+\dfrac{y^2}{9}=1$.*

Labelled figure with the shaded region and a vertical strip [1]

In the first quadrant $y=\dfrac34\sqrt{16-x^2}$. By symmetry about both axes, Area $=4\displaystyle\int_0^4\dfrac34\sqrt{16-x^2}\,dx$ [1]

$=3\left[\dfrac x2\sqrt{16-x^2}+\dfrac{16}{2}\sin^{-1}\dfrac x4\right]_0^4$ [1½]

$=3\left[0+8\cdot\dfrac\pi2-0\right]=\boxed{12\pi\text{ sq. units}}$ [1½]
:::

The same working with $a$ and $b$ in place of 4 and 3 gives $\pi ab$ for any ellipse, and with $b=a$ it gives $\pi a^2$ for a circle. Those are useful checks, but the question says "using integration", so the working must be shown.

:::tip The sketch is marked
A labelled figure with the region shaded and one strip drawn is worth ½ to 1 mark in every area question. Say "by symmetry" when you multiply by 2 or 4.
:::

```ng-numerical
id: num-ellipse-area
title: Area of an ellipse
question: Find the area enclosed by the ellipse $\dfrac{x^2}{\,{{a^2:0}}\,}+\dfrac{y^2}{\,{{b^2:0}}\,}=1$.
var: a | 3 | 6 | 1
var: b | 1 | 2 | 1
answer: pi*a*b
unit: sq. units
dp: 2
step: Here $a={{a}}$, $b={{b}}$. Area $=4\displaystyle\int_0^{\,{{a}}\,}\dfrac{\,{{b}}\,}{\,{{a}}\,}\sqrt{\,{{a^2:0}}-x^2}\,dx$
step: $=\pi ab=\pi\times{{a}}\times{{b}}=$ **{{pi*a*b:2}} sq. units** (in the exam, show the integration)
```

```ng-draw
id: draw-ellipse
title: Sketch the ellipse with the first quadrant shaded
svg: ref: notes#ch08-ellipse
time: 3
```

**In one breath:** For a circle or ellipse, integrate $y$ over the first quadrant with the $\sqrt{a^2-x^2}$ formula and multiply by 4.

## Horizontal strips

Sometimes the region is boxed in by horizontal lines $y=c$ and $y=d$ and the $y$-axis. Then a horizontal strip is the natural slice: its length is $x$, its thickness is $dy$, and the curve must be written as $x$ in terms of $y$.

:::formula Area with horizontal strips
$$A=\int_c^dx\,dy$$
Region bounded by $x=g(y)$, the $y$-axis and the lines $y=c$, $y=d$.
:::

:::skeleton Worked example: horizontal strips (3 marks)
*Find the area of the region bounded by $x^2=4y$, the lines $y=2$ and $y=4$, and the $y$-axis in the first quadrant.*

In the first quadrant $x=2\sqrt y$ (sketch with a horizontal strip) [1]

$A=\displaystyle\int_2^42\sqrt y\,dy=2\left[\dfrac23y^{3/2}\right]_2^4$ [1]

$=\dfrac43\left(8-2\sqrt2\right)=\boxed{\dfrac{32-8\sqrt2}{3}\text{ sq. units}}$ [1]
:::

**In one breath:** If the boundaries are $y=c$, $y=d$ and the $y$-axis, slice horizontally and integrate $x\,dy$.

## When the curve goes below the axis, or has a corner

An integral counts area below the $x$-axis as negative. Area itself is never negative. So if a curve crosses the axis inside your interval, split the integral at the crossing and take the modulus of the negative piece. For example, the area between $y=\cos x$ and the $x$-axis from $0$ to $\pi$ is $\displaystyle\int_0^{\pi/2}\cos x\,dx+\left|\int_{\pi/2}^{\pi}\cos x\,dx\right|=1+1=2$, even though $\displaystyle\int_0^\pi\cos x\,dx=0$.

A modulus function needs the same care for a different reason: its formula changes at the corner.

<figure class="fig" id="ch08-mod">
<svg viewBox="0 0 320 180" role="img" aria-label="Graph of y equals mod of x plus 3, a V with corner at minus 3, shaded between x equals minus 6 and x equals 0">
<line x1="15" y1="150" x2="305" y2="150" stroke="currentColor" stroke-width="1"/>
<line x1="250" y1="15" x2="250" y2="170" stroke="currentColor" stroke-width="1"/>
<text x="297" y="164" font-size="12" fill="currentColor">x</text>
<text x="236" y="25" font-size="12" fill="currentColor">y</text>
<polygon points="34,150 34,42 142,150" fill="#6A3FA0" opacity="0.2"/>
<polygon points="142,150 250,42 250,150" fill="#6A3FA0" opacity="0.2"/>
<polyline points="23,31 142,150 272,20" fill="none" stroke="#6A3FA0" stroke-width="2.5"/>
<text x="26" y="164" font-size="12" fill="currentColor">−6</text><text x="134" y="164" font-size="12" fill="currentColor">−3</text><text x="254" y="164" font-size="12" fill="currentColor">0</text><text x="256" y="46" font-size="12" fill="currentColor">3</text><text x="40" y="30" font-size="12" fill="#6A3FA0">y = |x + 3|</text>
<line x1="34" y1="150" x2="34" y2="42" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
</svg>
<figcaption>y = |x + 3| between x = −6 and x = 0: two equal triangles, each of area 9/2.</figcaption>
</figure>

:::skeleton Worked example: area under a modulus graph (3 marks)
*Sketch $y=|x+3|$ and find the area under it from $x=-6$ to $x=0$.*

Sketch: V-shaped graph with its corner at $(-3,0)$; $y=-(x+3)$ for $x<-3$ and $y=x+3$ for $x\ge-3$ [1]

$A=\displaystyle\int_{-6}^{-3}-(x+3)\,dx+\int_{-3}^{0}(x+3)\,dx$ [1]

$=\dfrac92+\dfrac92=\boxed{9\text{ sq. units}}$ [1]
:::

:::tip Integrating straight across
Integrating across a sign change makes the positive and negative parts cancel. Find where the curve meets the axis and split there.
:::

```ng-graph
id: graph-sine-area
title: Area is not always the integral
x: x | 0 | 6.2832
y: y | -3 | 3
curve: y = a sin x | a*sin(x)
slider: a | $a$ | 1 | 3 | 0.5 | 1
preset: y = sin x | a=1
note: From $0$ to $2\pi$ the integral of $\sin x$ is 0, but the area is $2+2=4$: the part below the axis is counted with its modulus.
```

```ng-mnemonic
id: area-is-never-negative
title: Below the axis
trick: **Area never goes negative: split and take the modulus**
meaning: Where the curve is below the $x$-axis, the integral comes out negative; take its absolute value before adding.
meaning: Where there is a corner (a modulus), split the integral at the corner.
prompt: The integral for part of a region comes out as −2. What do you add to the area?
```

**In one breath:** Area is positive. Split the integral wherever the curve crosses the axis or the formula changes, and add the sizes of the pieces.

## Regions bounded by a line and a curve

When a line and a curve together enclose a region, find where they meet, then look at your strip as it moves across. If the top of the strip switches from the line to the curve, split the region at that point and add the two areas.

<figure class="fig" id="ch08-circle-line">
<svg viewBox="0 0 320 180" role="img" aria-label="First quadrant region bounded by the x axis, the line x equals root 3 times y and the circle x squared plus y squared equals 4">
<line x1="20" y1="150" x2="305" y2="150" stroke="currentColor" stroke-width="1"/>
<line x1="70" y1="10" x2="70" y2="170" stroke="currentColor" stroke-width="1"/>
<text x="297" y="164" font-size="12" fill="currentColor">x</text>
<text x="56" y="20" font-size="12" fill="currentColor">y</text>
<polygon points="70,150 177.4,88.0 177.4,88.0 178.2,89.5 179.0,91.0 179.9,92.5 180.7,94.1 181.5,95.8 182.4,97.6 183.2,99.4 184.0,101.3 184.9,103.3 185.7,105.4 186.5,107.6 187.4,110.0 188.2,112.5 189.0,115.2 189.8,118.2 190.7,121.5 191.5,125.3 192.3,129.8 193.2,135.7 194.0,150.0" fill="#6A3FA0" opacity="0.2"/>
<polyline points="70.0,26.0 72.1,26.0 74.1,26.1 76.2,26.2 78.3,26.3 80.3,26.4 82.4,26.6 84.5,26.8 86.5,27.1 88.6,27.4 90.7,27.7 92.7,28.1 94.8,28.5 96.9,28.9 98.9,29.4 101.0,29.9 103.1,30.5 105.1,31.1 107.2,31.7 109.3,32.4 111.3,33.1 113.4,33.8 115.5,34.6 117.5,35.5 119.6,36.4 121.7,37.3 123.7,38.2 125.8,39.3 127.9,40.3 129.9,41.4 132.0,42.6 134.1,43.8 136.1,45.1 138.2,46.4 140.3,47.8 142.3,49.3 144.4,50.8 146.5,52.4 148.5,54.0 150.6,55.8 152.7,57.6 154.7,59.5 156.8,61.4 158.9,63.5 160.9,65.7 163.0,68.0 165.1,70.4 167.1,72.9 169.2,75.6 171.3,78.4 173.3,81.5 175.4,84.7 177.5,88.1 179.5,91.9 181.6,95.9 183.7,100.4 185.7,105.5 187.8,111.3 189.9,118.3 191.9,127.5 194.0,150.0" fill="none" stroke="#6A3FA0" stroke-width="2.5"/>
<line x1="70" y1="150" x2="231.2" y2="56.9" stroke="currentColor" stroke-width="1.5"/>
<line x1="177.4" y1="150" x2="177.4" y2="88.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<circle cx="177.4" cy="88.0" r="3.5" fill="#E0B400"/>
<text x="189.38715006927038" y="104" font-size="12" fill="currentColor">(√3, 1)</text><text x="169.38715006927038" y="164" font-size="12" fill="currentColor">√3</text><text x="192" y="164" font-size="12" fill="currentColor">2</text><text x="58" y="164" font-size="12" fill="currentColor">O</text><text x="221.9" y="81.8" font-size="12" fill="currentColor">x = √3 y</text><text x="205" y="24" font-size="12" fill="#6A3FA0">x² + y² = 4</text>
</svg>
<figcaption>The line meets the circle at (√3, 1). Left of the dashed line the top boundary is the line; right of it, the circle.</figcaption>
</figure>

:::skeleton Worked example: a line and a circle (5 marks)
*Find the area of the region in the first quadrant enclosed by the $x$-axis, the line $x=\sqrt3\,y$ and the circle $x^2+y^2=4$.*

Sketch; solving $x=\sqrt3y$ with $x^2+y^2=4$ gives $4y^2=4$, so they meet at $(\sqrt3,1)$ [1]

$A=\displaystyle\int_0^{\sqrt3}\dfrac{x}{\sqrt3}\,dx+\int_{\sqrt3}^2\sqrt{4-x^2}\,dx$ [1]

$=\left[\dfrac{x^2}{2\sqrt3}\right]_0^{\sqrt3}+\left[\dfrac x2\sqrt{4-x^2}+2\sin^{-1}\dfrac x2\right]_{\sqrt3}^2$ [1]

$=\dfrac{\sqrt3}{2}+\left(\pi-\dfrac{\sqrt3}{2}-\dfrac{2\pi}{3}\right)$ [1]

$=\boxed{\dfrac\pi3\text{ sq. units}}$ [1]
:::

A parabola cut by a vertical line is simpler because of symmetry about the $x$-axis: the area between $y^2=4ax$ and its latus rectum $x=a$ is $2\displaystyle\int_0^a2\sqrt a\,\sqrt x\,dx=\dfrac83a^2$.

A triangle with given vertices can also be asked "using integration". Write the equations of the three sides, then add the areas under the two upper sides and subtract the area under the lower side. For vertices $(1,0)$, $(2,2)$, $(3,1)$ this gives $\displaystyle\int_1^22(x-1)\,dx+\int_2^3(4-x)\,dx-\int_1^3\dfrac{x-1}{2}\,dx=1+\dfrac32-1=\dfrac32$ sq. units.

In the 2026–27 syllabus this chapter covers the area under simple curves: lines, circles, parabolas and ellipses in standard form. "Area between two curves" is not a listed topic; a region with a line and one curve is handled by splitting, as above.

```ng-derive
id: derive-circle-line-area
title: Circle, line and axis
prompt: Find the area of the region in the first quadrant enclosed by the $x$-axis, the line $x=\sqrt3\,y$ and the circle $x^2+y^2=4$.
time: 8
check: Sketch with the region shaded; point of intersection $(\sqrt3,1)$ | 1
check: Area $=\displaystyle\int_0^{\sqrt3}\dfrac{x}{\sqrt3}\,dx+\int_{\sqrt3}^{2}\sqrt{4-x^2}\,dx$ | 1.5
check: First integral $=\dfrac{\sqrt3}{2}$; second $=\left[\dfrac x2\sqrt{4-x^2}+2\sin^{-1}\dfrac x2\right]_{\sqrt3}^{2}=\dfrac\pi3-\dfrac{\sqrt3}{2}$ | 1.5
check: Area $=\dfrac\pi3$ sq. units | 1
```

```ng-draw
id: draw-circle-line
title: Sketch the circle, the line and the shaded region
svg: ref: notes#ch08-circle-line
time: 3
```

**In one breath:** Find the intersection point, split the region where the boundary changes, integrate each part and add.
