# Ch 3 · Pair of Linear Equations in Two Variables

One equation with two unknowns has endless solutions. Give it a partner, a second equation in the same two unknowns, and usually exactly one pair of values satisfies both. This chapter teaches you to find that pair on a graph and by algebra, and to tell in advance whether it exists. It is the most "real-life" chapter in Unit II (Algebra, 20 marks): ages, prices, digits and speeds all turn into two equations.

## Two unknowns need two facts

Two taxi services charge differently. The first takes ₹50 to start and ₹10 per kilometre; the second takes ₹20 to start and ₹15 per kilometre. For a short ride the second is cheaper, for a long ride the first. At what distance do they cost the same?

Let the distance be $x$ km and the fare ₹$y$. Then $y=50+10x$ and $y=20+15x$. Each is a straight line, and the two lines cross at one point: $x=6$, $y=110$. For a ride of 6 km both charge ₹110; beyond that, the first service wins. Comparing phone plans, loans or salaries works the same way: two straight lines and the point where they meet.

**In one breath:** One fact about two unknowns is not enough. Two linear equations are two straight lines, and their common point is the answer to both at once.

## What a solution is, and three possible pictures

A pair of linear equations in two variables has the general form

$$a_1x+b_1y+c_1=0,\qquad a_2x+b_2y+c_2=0$$

A **solution** is a pair of values $(x,y)$ that satisfies both equations. On a graph, each equation is a straight line, so a solution is a point lying on both lines. Two lines in a plane can do only three things.

<figure class="fig" id="three-cases-of-lines">
<svg viewBox="0 0 320 170" role="img" aria-label="Two lines that intersect, two parallel lines, and two coincident lines" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10,80 H102 M56.0,14 V134" stroke-width="1"/><path d="M14.4,116.4 L97.6,33.2" class="u" stroke-width="2"/><path d="M14.4,39.4 L97.6,89.4"  stroke-width="2"/><circle cx="62.5" cy="68.3" r="3.2" fill="#E0B400" stroke="none"/><path d="M114,80 H206 M160.0,14 V134" stroke-width="1"/><path d="M118.4,85.7 L201.6,27.5" class="u" stroke-width="2"/><path d="M118.4,124.7 L201.6,66.5"  stroke-width="2"/><path d="M218,80 H310 M264.0,14 V134" stroke-width="1"/><path d="M222.4,103.9 L305.6,45.7" class="u" stroke-width="2"/><path d="M222.4,103.9 L305.6,45.7" stroke-dasharray="6 5" stroke-width="2"/><text x="56" y="150" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">intersecting</text><text x="56" y="164" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">one solution</text><text x="160" y="150" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">parallel</text><text x="160" y="164" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">no solution</text><text x="264" y="150" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">coincident</text><text x="264" y="164" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">infinitely many</text></svg>
<figcaption>Two lines intersect at one point, never meet, or lie on top of each other. That gives one solution, no solution, or infinitely many.</figcaption>
</figure>

You do not need the graph to know which case you have. Compare the ratios of the coefficients.

:::formula Consistency of a pair of linear equations
$\dfrac{a_1}{a_2}\ne\dfrac{b_1}{b_2}$: intersecting lines, **one** solution (consistent)<br>
$\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}\ne\dfrac{c_1}{c_2}$: parallel lines, **no** solution (inconsistent)<br>
$\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}$: coincident lines, **infinitely many** solutions (consistent, dependent)
:::

```ng-mnemonic
id: slopes-and-starts
title: One, none or infinitely many?
trick: **Different slope: meet once. Same slope, different start: never meet. Same line: always meet.**
meaning: $\dfrac{a_1}{a_2}\ne\dfrac{b_1}{b_2}$ means different slopes: one solution.
meaning: First two ratios equal, third different: parallel, no solution. All three equal: the same line, infinitely many solutions.
prompt: What do the three ratio conditions say about the two lines?
```

```ng-graph
id: graph-two-lines
title: Move the second line
x: x | -2 | 8
y: value of y | -2 | 10
curve: first line: y = x + 1 | x + 1
curve: second line: y = mx + c | m*x + c
slider: m | slope $m$ | -2 | 2 | 0.5 | -1
slider: c | start $c$ | -1 | 9 | 1 | 7
preset: intersecting | m=-1, c=7
preset: parallel | m=1, c=4
preset: coincident | m=1, c=1
note: With slope $-1$ the lines cross once, at $(3,4)$. Give the second line the same slope as the first and they never meet. Give it the same start as well and they become one line.
```

:::skeleton Worked example: check consistency (2 marks)
*Without drawing, say whether the pair $2x+3y=8$, $4x+6y=7$ has a solution.*

$\dfrac{a_1}{a_2}=\dfrac24=\dfrac12$, $\dfrac{b_1}{b_2}=\dfrac36=\dfrac12$, $\dfrac{c_1}{c_2}=\dfrac{-8}{-7}=\dfrac87$ [1]

$\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}\ne\dfrac{c_1}{c_2}$: the lines are parallel, so the pair has **no solution** (inconsistent) [1]
:::

:::tip Standard form before ratios
Write both equations as $ax+by+c=0$ (or both as $ax+by=c$) before comparing. Mixing the two forms gives the wrong sign for the third ratio.
:::

```ng-fill
id: fill-consistency
title: Ratios, lines and solutions
cols: Ratios | Lines | Solutions
row: $\frac{a_1}{a_2}\ne\frac{b_1}{b_2}$ | [[intersecting]] | [[exactly one]]
row: $\frac{a_1}{a_2}=\frac{b_1}{b_2}\ne\frac{c_1}{c_2}$ | [[parallel]] | [[none]]
row: $\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$ | [[coincident]] | [[infinitely many]]
```

**In one breath:** A solution is a point on both lines. Unequal first two ratios: one solution. Equal first two but different third: none. All three equal: infinitely many.

## Solving by graph

To solve graphically, draw both lines on the same axes and read the point where they cross.

```ng-steps
id: steps-graphical-method
title: The graphical method
step: For each equation make a small table with at least two points (three is safer). Choose $x$ values that give whole numbers.
step: Plot the points on graph paper with the same scale on both axes and join each set with a straight line.
step: Label each line with its equation.
step: Read the coordinates of the point of intersection: that is the solution. Parallel lines: no solution. One line on the other: infinitely many.
step: Check by putting the values into both equations.
```

Questions often add: "find the area of the triangle formed by the lines and the $x$-axis". Mark the points where each line cuts the $x$-axis (put $y=0$); the triangle has its base on the axis and its height is the $y$-coordinate of the intersection point.

```ng-draw
id: draw-three-cases
title: Sketch the three cases: intersecting, parallel, coincident
svg: ref: notes#three-cases-of-lines
time: 2
```

**In one breath:** Two tables, two lines on one graph, read the crossing point, and check it in both equations.

## Solving by substitution

Graphs are slow and fail when the answer is a fraction. Algebra is exact. In the **substitution method** you use one equation to write one variable in terms of the other, and put that into the second equation.

:::skeleton Worked example: substitution (3 marks)
*Solve $x+y=14$ and $x-y=4$ by substitution.*

From the first equation, $x=14-y$ [1]

Substitute in the second: $(14-y)-y=4\Rightarrow14-2y=4\Rightarrow y=5$ [1]

Then $x=14-5=9$. Solution: $\boxed{x=9,\ y=5}$. Check: $9-5=4$ ✓ [1]
:::

Pick the variable whose coefficient is 1 if there is one: no fractions appear.

**In one breath:** Make one variable the subject in one equation, substitute it into the other, solve, and go back for the second variable.

## Solving by elimination

In the **elimination method** you multiply the equations by suitable numbers so that one variable has the same coefficient in both, then add or subtract to remove it.

```ng-steps
id: steps-elimination
title: The elimination method
step: Choose the variable to eliminate. Multiply one or both equations so that its coefficients become equal in size.
step: If the signs of those coefficients are different, **add** the equations; if they are the same, **subtract**.
step: Solve the single equation that is left.
step: Substitute the value in either original equation to get the other variable.
step: Check in the equation you did not use.
```

:::skeleton Worked example: elimination (3 marks)
*Solve $2x+3y=13$ and $5x-2y=4$.*

Multiply the first by 2 and the second by 3: $4x+6y=26$ and $15x-6y=12$ [1]

The $y$ terms have opposite signs, so add: $19x=38\Rightarrow x=2$ [1]

Substitute in $2x+3y=13$: $4+3y=13\Rightarrow y=3$. Solution: $\boxed{x=2,\ y=3}$ [1]
:::

```ng-mnemonic
id: same-signs-subtract
title: Add or subtract?
trick: **Same Signs Subtract**; different signs add
meaning: After matching the coefficients: $+6y$ and $+6y$ → subtract the equations; $+6y$ and $-6y$ → add them.
prompt: In elimination, when do you subtract the equations?
```

If elimination removes **both** variables and leaves a false statement such as $0=9$, there is no solution. If it leaves a true one such as $0=0$, there are infinitely many.

```ng-numerical
id: num-sum-and-difference
title: Two numbers from their sum and difference
question: The sum of two numbers is {{s}} and their difference is {{d}}. Find the larger number.
var: s | 20 | 60 | 4
var: d | 2 | 10 | 2
answer: (s+d)/2
dp: 0
tol: 0.01
step: Let the numbers be $x$ and $y$: $x+y={{s}}$ and $x-y={{d}}$
step: Add the equations: $2x={{s+d}}$, so $x=$ **{{(s+d)/2:0}}**
```

**In one breath:** Match the coefficients of one variable, then same signs subtract and different signs add. Solve, substitute back, check.

## From words to equations

The 3- and 5-mark questions are word problems. The algebra is easy; the marks are in forming the two equations correctly.

```ng-steps
id: steps-word-problems
title: Turning a word problem into two equations
step: Read to the end and decide what the two unknowns are. Write "Let … be $x$ and … be $y$".
step: Find the two facts in the question. Each fact becomes one equation.
step: Solve by elimination or substitution.
step: Answer the question that was actually asked, in a sentence with units.
```

:::skeleton Worked example: prices (3 marks)
*5 pencils and 7 pens together cost ₹50, whereas 7 pencils and 5 pens together cost ₹46. Find the cost of one pencil and of one pen.*

Let the cost of a pencil be ₹$x$ and of a pen ₹$y$. Then $5x+7y=50$ … (1) and $7x+5y=46$ … (2) [1]

Adding: $12x+12y=96\Rightarrow x+y=8$. Subtracting (2) from (1): $-2x+2y=4\Rightarrow y-x=2$ [1]

Solving: $y=5$, $x=3$. A pencil costs ₹3 and a pen costs ₹5 [1]
:::

:::skeleton Worked example: digits (3 marks)
*The sum of the digits of a two-digit number is 9. The number obtained by reversing the digits is 27 more than the original number. Find the number.*

Let the tens digit be $x$ and the units digit $y$. The number is $10x+y$; reversed, it is $10y+x$ [1]

$x+y=9$ … (1). $(10y+x)-(10x+y)=27\Rightarrow9y-9x=27\Rightarrow y-x=3$ … (2) [1]

Adding: $2y=12\Rightarrow y=6$, $x=3$. The number is $\boxed{36}$. Check: $63-36=27$ ✓ [1]
:::

| Situation | How to write it |
|---|---|
| Two-digit number, digits $x$ (tens), $y$ (units) | $10x+y$; reversed $10y+x$ |
| Ages now $x$, $y$; five years ago | $x-5$, $y-5$ |
| Fraction with numerator $x$, denominator $y$ | $\dfrac xy$ |
| Boat speed $x$, stream speed $y$ | downstream $x+y$, upstream $x-y$ |
| Fixed charge $x$, charge per unit $y$, $n$ units | $x+ny$ |

A last standard type asks for the value of $k$ that gives a particular number of solutions. Use the ratio conditions.

:::skeleton Worked example: value of k (3 marks)
*For what value of $k$ does the pair $kx+3y=k-3$, $12x+ky=k$ have no solution?*

For no solution: $\dfrac{k}{12}=\dfrac3k\ne\dfrac{k-3}{k}$ [1]

$\dfrac{k}{12}=\dfrac3k\Rightarrow k^2=36\Rightarrow k=\pm6$ [1]

$k=6$: $\dfrac{k-3}{k}=\dfrac12$, equal to the other ratios, so infinitely many solutions. $k=-6$: $\dfrac{k-3}{k}=\dfrac32\ne-\dfrac12$. So $\boxed{k=-6}$ [1]
:::

:::tip Test every value of k
The equation from the first two ratios may give two values. Check each against the third ratio; the examiner gives a mark for rejecting the wrong one.
:::

**In one breath:** Name the two unknowns, turn each fact into one equation, solve, and answer in words. For "find $k$", use the ratio conditions and test every value.
