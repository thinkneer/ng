# Ch 12 · Linear Programming

A factory wants the largest profit; a dietician wants the lowest cost. In both cases there is something to be made as large or as small as possible, and there are limits on what can be done: hours available, money available, minimum requirements. When the thing to optimise and all the limits are *linear* in two variables, the problem is a linear programming problem (LPP), and it can be solved by drawing a graph. This chapter is a guaranteed 5 marks, and the graph itself earns a good part of them.

## The language of an LPP

Every LPP in this chapter has the same three parts.

- An **objective function** $Z=ax+by$, which is to be maximised or minimised. $x$ and $y$ are the **decision variables**.
- **Constraints**: linear inequalities such as $x+2y\le10$ that $x$ and $y$ must satisfy.
- **Non-negative restrictions**: $x\ge0$, $y\ge0$, which keep everything in the first quadrant.

The set of all points satisfying every constraint is the **feasible region**. Each point in it is a **feasible solution**; a point outside it is infeasible. A feasible solution that gives the best value of $Z$ is an **optimal solution**.

In the 2026–27 syllabus you are given the constraints and asked to solve graphically (with up to three constraints besides $x,y\ge0$). Turning a long word problem into constraints is not in the list.

```ng-compare
id: feasible-vs-optimal
title: Feasible vs optimal
cols: Feasible solution | Optimal solution
row: Meaning | any point satisfying all the constraints | a feasible point giving the best value of $Z$
row: How many | usually infinitely many (the whole region) | none, one, or infinitely many
row: Where | anywhere in the feasible region | at a corner point (or along an edge)
```

**In one breath:** Objective function $Z=ax+by$ to optimise; constraints are linear inequalities; the feasible region is where all of them hold together.

## Drawing the feasible region

Each constraint is drawn in two steps. First draw the boundary *line*, by replacing the inequality sign with $=$ and marking two convenient points, usually the intercepts. Then decide which side of the line to shade.

The quickest test for the side: substitute the origin $(0,0)$. For $x+2y\le10$, the origin gives $0\le10$, which is true, so the origin's side of the line is the correct one. If the test fails, shade the other side. (If the line passes through the origin, test another point such as $(1,0)$.)

The feasible region is the part of the first quadrant that lies on the correct side of *every* line.

<figure class="fig" id="ch12-bounded-region">
<svg viewBox="0 0 320 195" role="img" aria-label="Feasible region O A B C for the constraints x plus 2y at most 10 and 3x plus y at most 15 in the first quadrant">
<line x1="28" y1="175" x2="318" y2="175" stroke="currentColor" stroke-width="1"/>
<line x1="40" y1="5" x2="40" y2="187" stroke="currentColor" stroke-width="1"/>
<text x="310" y="189" font-size="12" fill="currentColor">x</text>
<text x="26" y="15" font-size="12" fill="currentColor">y</text>
<polygon points="40.0,175.0 160.0,175.0 136.0,145.0 40.0,125.0" fill="#2E8B3A" opacity="0.2"/>
<line x1="40.0" y1="125.0" x2="280.0" y2="175.0" stroke="#2E8B3A" stroke-width="2"/>
<text x="191.2" y="146.0" font-size="11" fill="currentColor">x + 2y = 10</text>
<line x1="40.0" y1="25.0" x2="160.0" y2="175.0" stroke="#2E8B3A" stroke-width="2"/>
<text x="85.6" y="60.0" font-size="11" fill="currentColor">3x + y = 15</text>
<circle cx="40.0" cy="175.0" r="3" fill="#E0B400"/>
<text x="28" y="188" font-size="11" fill="currentColor">O</text>
<circle cx="160.0" cy="175.0" r="3" fill="#E0B400"/>
<text x="146" y="189" font-size="11" fill="currentColor">A(5, 0)</text>
<circle cx="136.0" cy="145.0" r="3" fill="#E0B400"/>
<text x="142" y="141" font-size="11" fill="currentColor">B(4, 3)</text>
<circle cx="40.0" cy="125.0" r="3" fill="#E0B400"/>
<text x="2" y="129" font-size="11" fill="currentColor">C(0, 5)</text>
<circle cx="280.0" cy="175.0" r="3" fill="#E0B400"/>
<text x="264" y="189" font-size="11" fill="currentColor">(10, 0)</text>
<circle cx="40.0" cy="25.0" r="3" fill="#E0B400"/>
<text x="46" y="29" font-size="11" fill="currentColor">(0, 15)</text>

</svg>
<figcaption>Feasible region OABC (shaded). The corner B(4, 3) is found by solving the two equations.</figcaption>
</figure>

```ng-mnemonic
id: origin-test
title: Which side to shade?
trick: **Ask the origin**: put $(0,0)$ in the inequality
meaning: True → shade the side that contains the origin. False → shade the other side.
meaning: If the line passes through the origin, ask another point such as $(1,0)$.
prompt: How do you decide which side of the line x + 2y = 10 to shade for x + 2y ≤ 10?
```

```ng-steps
id: steps-feasible-region
title: Drawing the feasible region
step: For each constraint, write the boundary line and two points on it (the intercepts).
step: Draw and label the lines on graph axes with a sensible scale.
step: Use the origin test to choose the side of each line.
step: Shade the region common to all constraints inside the first quadrant ($x\ge0$, $y\ge0$).
step: Mark and name the corner points; solve pairs of equations for the intersections.
```

```ng-draw
id: draw-bounded-region
title: Draw the feasible region for x + 2y ≤ 10, 3x + y ≤ 15
svg: ref: notes#ch12-bounded-region
time: 5
```

**In one breath:** Draw each boundary line through its intercepts, use the origin test to pick the side, and shade only the region common to all constraints.

## The corner-point method

You do not need to test every point of the feasible region. Two theorems reduce the work to a handful of points.

:::formula Corner-point theorems
**Theorem 1.** If $Z$ has an optimal value, it occurs at a corner point (vertex) of the feasible region.<br>
**Theorem 2.** If the feasible region is bounded, $Z$ has both a maximum and a minimum, each at a corner point.
:::

So: find the corner points, work out $Z$ at each one, and pick the largest or smallest.

:::skeleton Worked example: maximise (3 marks)
*Maximise $Z=3x+2y$ subject to $x+2y\le10$, $3x+y\le15$, $x\ge0$, $y\ge0$.*

Lines: $x+2y=10$ through $(10,0)$ and $(0,5)$; $3x+y=15$ through $(5,0)$ and $(0,15)$. Graph drawn; feasible region $OABC$ shaded [1½]

Corner $B$: solving $x+2y=10$ and $3x+y=15$ gives $B(4,3)$ [½]

| Point | $O(0,0)$ | $A(5,0)$ | $B(4,3)$ | $C(0,5)$ |
|---|---|---|---|---|
| $Z=3x+2y$ | 0 | 15 | **18** | 10 |

Table of values [½]

$\boxed{Z_{\max}=18\text{ at }x=4,\ y=3}$ [½]
:::

:::tip Solve for the corner
An intersection point must be *calculated* by solving the two equations, not read off the graph. A corner read as "about (4, 3)" from a rough sketch loses the mark if it is slightly off.
:::

The same routine finds a minimum.

:::skeleton Worked example: minimise (3 marks)
*Minimise $Z=200x+500y$ subject to $x+2y\ge10$, $3x+4y\le24$, $x\ge0$, $y\ge0$.*

Lines: $x+2y=10$ through $(10,0)$, $(0,5)$; $3x+4y=24$ through $(8,0)$, $(0,6)$. They meet at $(4,3)$. The feasible region is the triangle with corners $(0,5)$, $(4,3)$, $(0,6)$ [1½]

$Z$ at $(0,5)$: 2500; at $(4,3)$: 2300; at $(0,6)$: 3000 [1]

$\boxed{Z_{\min}=2300\text{ at }x=4,\ y=3}$ [½]
:::

```ng-numerical
id: num-corner-maximum
title: Best corner
question: The corner points of a bounded feasible region are $(0,0)$, $(5,0)$, $(3,4)$ and $(0,5)$. Find the maximum value of $Z={{p}}x+{{q}}y$.
var: p | 2 | 6 | 1
var: q | 2 | 6 | 1
answer: max(5*p, 3*p+4*q, 5*q)
dp: 0
tol: 0.01
step: $Z$ at $(0,0)$: 0; at $(5,0)$: ${{5*p:0}}$; at $(3,4)$: ${{3*p+4*q:0}}$; at $(0,5)$: ${{5*q:0}}$.
step: The region is bounded, so the largest corner value is the maximum: **{{max(5*p, 3*p+4*q, 5*q):0}}**
```

```ng-mnemonic
id: graph-corners-table-conclusion
title: The four parts of every LPP answer
trick: **G C T C**: Graph, Corners, Table, Conclusion
meaning: **G**raph with the region shaded, **C**orner points (solved, not read off), **T**able of $Z$, **C**onclusion with the value and the point.
meaning: Unbounded region: add the half-plane check before the conclusion.
prompt: Name the four parts of a graphical LPP answer.
```

**In one breath:** Graph, corner points (solve for intersections), table of $Z$, conclusion. In a bounded region the largest table value is the maximum and the smallest is the minimum.

## Unbounded feasible regions

When the constraints are all of the "$\ge$" type, the feasible region often stretches away without limit. Then Theorem 2 no longer applies: the largest or smallest corner value might not be a true maximum or minimum, and you must check.

:::formula Check for an unbounded region
Let $M$ be the largest and $m$ the smallest value of $Z$ at the corner points.<br>
$M$ is the maximum only if the open half-plane $ax+by>M$ has **no** point in common with the feasible region.<br>
$m$ is the minimum only if the open half-plane $ax+by<m$ has **no** point in common with the feasible region.
:::

<figure class="fig" id="ch12-unbounded-region">
<svg viewBox="0 0 320 190" role="img" aria-label="Unbounded feasible region above the lines x plus 3y equals 3 and x plus y equals 2 with corner points A, B and C">
<line x1="33" y1="165" x2="298.2" y2="165" stroke="currentColor" stroke-width="1"/>
<line x1="45" y1="11.0" x2="45" y2="177" stroke="currentColor" stroke-width="1"/>
<text x="290.2" y="179" font-size="12" fill="currentColor">x</text>
<text x="31" y="21.0" font-size="12" fill="currentColor">y</text>
<polygon points="45.0,21.0 45.0,85.0 123.0,145.0 201.0,165.0 284.2,165.0 284.2,21.0" fill="#2E8B3A" opacity="0.2"/>
<line x1="45.0" y1="125.0" x2="201.0" y2="165.0" stroke="#2E8B3A" stroke-width="2"/>
<text x="211.4" y="155.0" font-size="11" fill="currentColor">x + 3y = 3</text>
<line x1="45.0" y1="85.0" x2="149.0" y2="165.0" stroke="#2E8B3A" stroke-width="2"/>
<text x="73.6" y="81.0" font-size="11" fill="currentColor">x + y = 2</text>
<circle cx="201.0" cy="165.0" r="3" fill="#E0B400"/>
<text x="197" y="179" font-size="11" fill="currentColor">A(3, 0)</text>
<circle cx="123.0" cy="145.0" r="3" fill="#E0B400"/>
<text x="131.0" y="139.0" font-size="11" fill="currentColor">B(3/2, 1/2)</text>
<circle cx="45.0" cy="85.0" r="3" fill="#E0B400"/>
<text x="5" y="89" font-size="11" fill="currentColor">C(0, 2)</text>
<line x1="45" y1="109.0" x2="166.3" y2="165" stroke="#B0204F" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="110.0" y="179" font-size="11" fill="#B0204F">3x + 5y = 7</text>
</svg>
<figcaption>Unbounded feasible region (shaded, extends up and to the right). The dashed line 3x + 5y = 7 touches it only at B.</figcaption>
</figure>

:::skeleton Worked example: unbounded region, minimum exists (3 marks)
*Minimise $Z=3x+5y$ subject to $x+3y\ge3$, $x+y\ge2$, $x\ge0$, $y\ge0$.*

Lines $x+3y=3$ through $(3,0)$, $(0,1)$ and $x+y=2$ through $(2,0)$, $(0,2)$; feasible region shaded, unbounded. Corners $A(3,0)$, $B\left(\dfrac32,\dfrac12\right)$, $C(0,2)$ [1½]

$Z$ at $A$: 9; at $B$: 7; at $C$: 10. Smallest value $m=7$ [½]

The region is unbounded, so draw $3x+5y=7$: the open half-plane $3x+5y<7$ has no point in common with the feasible region [½]

$\boxed{Z_{\min}=7\text{ at }x=\dfrac32,\ y=\dfrac12}$ [½]
:::

Sometimes the check fails. For $Z=-50x+20y$ with $2x-y\ge-5$, $3x+y\ge3$, $2x-3y\le12$, $x,y\ge0$, the corner values are $100$, $60$, $-50$, $-300$, but the half-plane $-50x+20y<-300$ does contain points of the feasible region. So $Z$ has **no minimum**.

:::tip Do not stop at the table
With an unbounded region, a table of corner values is not a complete answer. The half-plane check is a separate step with its own ½ mark.
:::

```ng-compare
id: bounded-vs-unbounded
title: Bounded vs unbounded region
cols: Bounded | Unbounded
row: Shape | can be enclosed in a circle | extends without limit
row: Maximum and minimum | both exist, at corner points | may or may not exist
row: After the table | pick the largest / smallest value | check the open half-plane $ax+by>M$ or $ax+by<m$
row: Typical constraints | "$\le$" type | "$\ge$" type
```

```ng-draw
id: draw-unbounded-region
title: Draw the unbounded region for x + 3y ≥ 3, x + y ≥ 2
svg: ref: notes#ch12-unbounded-region
time: 5
```

**In one breath:** Unbounded region: take the best corner value, then check that the half-plane beyond it misses the feasible region. If it does not, there is no optimum.

## Special cases

**Many optimal solutions.** If two neighbouring corners give the same best value, every point on the segment joining them is optimal.

<figure class="fig" id="ch12-edge-optimal">
<svg viewBox="0 0 320 195" role="img" aria-label="Feasible region A B C D bounded by x plus 3y equals 60, x plus y equals 10 and x equals y">
<line x1="33" y1="170" x2="307.0" y2="170" stroke="currentColor" stroke-width="1"/>
<line x1="45" y1="11.199999999999989" x2="45" y2="182" stroke="currentColor" stroke-width="1"/>
<text x="299.0" y="184" font-size="12" fill="currentColor">x</text>
<text x="31" y="21.19999999999999" font-size="12" fill="currentColor">y</text>
<polygon points="45.0,108.0 65.0,139.0 105.0,77.0 45.0,46.0" fill="#2E8B3A" opacity="0.2"/>
<line x1="45.0" y1="46.0" x2="285.0" y2="170.0" stroke="#2E8B3A" stroke-width="2"/>
<text x="189.0" y="104.89999999999999" font-size="11" fill="currentColor">x + 3y = 60</text>
<line x1="45.0" y1="108.0" x2="85.0" y2="170.0" stroke="#2E8B3A" stroke-width="2"/>
<text x="91.0" y="163.8" font-size="11" fill="currentColor">x + y = 10</text>
<line x1="45.0" y1="170.0" x2="137.0" y2="27.4" stroke="#2E8B3A" stroke-width="2"/>
<text x="143.0" y="36.69999999999999" font-size="11" fill="currentColor">x = y</text>
<circle cx="45.0" cy="108.0" r="3" fill="#E0B400"/>
<text x="1.0" y="112.0" font-size="11" fill="currentColor">A(0, 10)</text>
<circle cx="65.0" cy="139.0" r="3" fill="#E0B400"/>
<text x="73.0" y="144.0" font-size="11" fill="currentColor">B(5, 5)</text>
<circle cx="105.0" cy="77.0" r="3" fill="#E0B400"/>
<text x="113.0" y="81.0" font-size="11" fill="currentColor">C(15, 15)</text>
<circle cx="45.0" cy="46.0" r="3" fill="#E0B400"/>
<text x="1.0" y="50.0" font-size="11" fill="currentColor">D(0, 20)</text>

</svg>
<figcaption>Feasible region ABCD. Z = 3x + 9y has the same value, 180, at C and D, so every point of CD is optimal.</figcaption>
</figure>

:::skeleton Worked example: infinitely many solutions (5 marks)
*Find the minimum and the maximum of $Z=3x+9y$ subject to $x+3y\le60$, $x+y\ge10$, $x\le y$, $x\ge0$, $y\ge0$.*

Lines $x+3y=60$ through $(60,0)$, $(0,20)$; $x+y=10$ through $(10,0)$, $(0,10)$; $x=y$ through the origin. Graph drawn and feasible region $ABCD$ shaded [2]

Corner points: $A(0,10)$, $B(5,5)$ (from $x+y=10$, $x=y$), $C(15,15)$ (from $x+3y=60$, $x=y$), $D(0,20)$ [1]

$Z$ at $A$: 90; at $B$: 60; at $C$: 180; at $D$: 180 [1]

$\boxed{Z_{\min}=60\text{ at }(5,5)}$. $Z_{\max}=180$ at both $C$ and $D$, so it occurs at **every point of the segment $CD$** [1]
:::

**No feasible region.** If the constraints contradict each other, as $x-y\le-1$ and $-x+y\le0$ do, no point satisfies them all. There is no feasible region and the problem has no solution. Draw the graph to show that the shaded sides do not overlap.

```ng-fill
id: fill-lpp-outcomes
title: What the table tells you
cols: Situation | Conclusion
row: Bounded region, largest corner value $M$ | [[maximum is $M$]]
row: Two adjacent corners give the same best value | [[every point on that edge is optimal]]
row: Unbounded region; $ax+by>M$ has points in the region | [[no maximum]]
row: Unbounded region; $ax+by<m$ has no point in the region | [[minimum is $m$]]
row: Constraints have no common region | [[no feasible solution]]
```

```ng-explain
id: explain-why-corners
prompt: In three lines, explain why you only need to test the corner points of the feasible region.
lines: 3
```

**In one breath:** Equal best values at two adjacent corners mean infinitely many optimal solutions along that edge. Contradictory constraints mean no feasible region and no solution.
