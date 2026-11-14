# Ch 12 · Linear Programming — formulas and key facts

## Terms

- **Objective function** $Z=ax+by$ (to maximise or minimise); **decision variables** $x$, $y$.
- **Constraints**: linear inequalities; **non-negative restrictions** $x\ge0$, $y\ge0$.
- **Feasible region**: common region of all constraints. **Optimal solution**: feasible point giving the best $Z$.
- **Bounded**: can be enclosed in a circle. **Corner point**: vertex of the feasible region.

## Theorems

:::formula Corner-point theorems
1. If $Z$ has an optimal value, it occurs at a corner point of the feasible region.<br>
2. If the feasible region is bounded, $Z$ has both a maximum and a minimum, each at a corner point.
:::

:::formula Unbounded feasible region
$M$ = largest corner value, $m$ = smallest corner value.<br>
Maximum is $M$ only if $ax+by>M$ has no point in common with the feasible region.<br>
Minimum is $m$ only if $ax+by<m$ has no point in common with the feasible region.
:::

## Method (corner-point method)

1. Draw each boundary line through two points (intercepts).
2. Shade the correct side (origin test) and mark the common region in the first quadrant.
3. List the corner points; solve pairs of equations for intersections.
4. Tabulate $Z$ at every corner.
5. Bounded: largest = maximum, smallest = minimum. Unbounded: do the half-plane check.
6. State the value of $Z$ and the point.

## Special cases

| Situation | Conclusion |
|---|---|
| Same best value at two adjacent corners | every point on that edge is optimal (infinitely many solutions) |
| Constraints with no common region | no feasible region; no solution |
| Unbounded region and the half-plane check fails | no maximum (or no minimum) |

## Reading a graph

- Line through $(a,0)$ and $(0,b)$: $\dfrac xa+\dfrac yb=1$.
- Decide $\le$ or $\ge$ by testing a point inside the shaded region.
- If $Z=px+qy$ is optimal at two corners $(x_1,y_1)$, $(x_2,y_2)$: $px_1+qy_1=px_2+qy_2$.

Syllabus 2026–27: graphical solution in two variables with up to three non-trivial constraints. Mathematical formulation of word problems is not in the list.
