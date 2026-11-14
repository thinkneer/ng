# Ch 12 · Linear Programming — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve graphically · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` Solve an LPP graphically: maximise or minimise $Z$ under two or three constraints with $x,y\ge0$. [3, sometimes 5]
2. ★★ `S` Unbounded feasible region: find the minimum, or show that no maximum / minimum exists. [3]
3. ★★ `MCQ` Corner points given: find the best value of $Z$; condition on $p$, $q$ for two optimal corners. [1]
4. ★★ `MCQ` `C` A shaded graph is given: read the corner points, write the constraints, optimise $Z$. [1–4]
5. ★ `S` No feasible region. [2–3]

## Must-know lines and definitions

- **Linear programming problem:** optimise a linear function subject to linear inequalities.
- **Objective function:** $Z=ax+by$, the function to be maximised or minimised.
- **Decision variables:** $x$ and $y$.
- **Constraints:** the linear inequalities on $x$ and $y$.
- **Non-negative restrictions:** $x\ge0$, $y\ge0$.
- **Feasible region:** the common region of all constraints, including $x,y\ge0$.
- **Feasible solution:** any point of the feasible region.
- **Optimal solution:** a feasible point giving the maximum or minimum of $Z$.
- **Bounded region:** one that can be enclosed in a circle.
- **Corner point:** a vertex of the feasible region.
- **Not in the 2026–27 list:** formulating constraints from a long word problem.

## Key formulas

:::formula Corner-point theorem 1
If $Z$ has an optimal value, it occurs at a corner point of the feasible region.
:::

:::formula Corner-point theorem 2 (bounded region)
$Z$ has both a maximum and a minimum, each at a corner point.
:::

:::formula Unbounded region: when is $M$ the maximum?
Only if the open half-plane $ax+by>M$ has no point in common with the feasible region.
:::

:::formula Unbounded region: when is $m$ the minimum?
Only if the open half-plane $ax+by<m$ has no point in common with the feasible region.
:::

:::formula Same optimal value at two adjacent corners
Every point on the segment joining them is optimal: infinitely many solutions.
:::

:::formula Origin test for shading $ax+by\le c$
Put $(0,0)$: if $0\le c$ is true, shade the origin's side; otherwise the other side.
:::

:::formula $Z=px+qy$ has the same value at $(x_1,y_1)$ and $(x_2,y_2)$
$px_1+qy_1=px_2+qy_2$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Corner-point method (3 marks)
Each line with two points; graph drawn; feasible region shaded and labelled [1½] → corner points, intersections found by solving [½] → table of $Z$ at the corners [½] → conclusion with the value and the point [½].
:::

:::skeleton S · Unbounded region (3 marks)
Graph and corner points [1½] → table, smallest (or largest) corner value [½] → half-plane check [½] → conclusion: optimum exists, or does not [½].
:::

:::skeleton S · Five-mark version (5 marks)
Lines and graph [2] → corner points [1] → table [1] → conclusion, including "every point on the segment" if two corners tie [1].
:::

:::skeleton S · Reading a given graph (2 marks)
For a line through $(a,0)$ and $(0,b)$ write $\dfrac xa+\dfrac yb=1$ → choose $\le$ or $\ge$ by testing a point inside the shaded region → add $x\ge0$, $y\ge0$.
:::

## Quick 1-mark facts (MCQ, A–R)

- The feasible region of an LPP is always: a convex region.
- The objective function of an LPP is: a linear function of $x$ and $y$.
- An optimal value, if it exists, occurs at: a corner point.
- Corner points $(0,0),(5,0),(3,4),(0,5)$ with $Z=4x+6y$: maximum $36$ at $(3,4)$.
- $Z=px+qy$ maximum at both $(15,15)$ and $(0,20)$ gives: $q=3p$.
- In a bounded feasible region: both maximum and minimum exist.
- In an unbounded feasible region: the maximum or minimum may not exist.
- Number of optimal solutions of an LPP: none, one, or infinitely many.
- Contradictory constraints give: no feasible region and no solution.
- $x\ge0$, $y\ge0$ restrict the region to: the first quadrant.

## Mark-losing traps

:::tip Rough graph
Unlabelled axes, lines or corners, or the wrong side shaded, lose the graph marks.
:::

:::tip Reading corners off the graph
Solve the two equations for an intersection point; do not estimate it.
:::

:::tip Point outside the region
Check each "corner" in every constraint; a line crossing outside the region is not a corner.
:::

:::tip Half-plane check
For an unbounded region, the table alone is incomplete; do the half-plane check.
:::

:::tip Incomplete conclusion
State both the value of $Z$ and the point $(x,y)$ where it occurs.
:::
