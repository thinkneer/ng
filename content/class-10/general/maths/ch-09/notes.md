# Ch 9 · Some Applications of Trigonometry

This is the chapter where trigonometry earns its keep. With one measured angle and one measured length, you can find the height of a tower, the width of a river or the distance of a ship, without going there. The board paper usually asks one question from here, often a 3- or 5-marker or a case study, and every one of them is solved the same way: draw the figure, find the right triangle, choose one ratio.

## Measuring what you cannot reach

In the 1800s the Survey of India measured the whole subcontinent with chains, telescopes and trigonometry, triangle by triangle. From stations far out on the plains, surveyors measured the angles to distant Himalayan peaks. In 1852 the Indian mathematician Radhanath Sikdar, working from those angles, is credited with calculating that one of them, then called Peak XV, was the highest mountain known. Nobody had climbed it; nobody had even been near it. It was later named Mount Everest.

The method was the one in this chapter: a known distance along the ground, an angle measured upward, and the tangent ratio. A phone that finds your position, a pilot coming in to land and an engineer setting the slope of a ramp all use the same idea.

**In one breath:** Heights and distances that cannot be measured directly are found from one length, one angle and a trigonometric ratio. That is how Everest was first measured.

## Line of sight, elevation and depression

Three terms carry the whole chapter.

- The **line of sight** is the straight line from the observer's eye to the object.
- The **angle of elevation** is the angle between the line of sight and the horizontal when the object is *above* eye level: you raise your eyes.
- The **angle of depression** is the angle between the line of sight and the horizontal when the object is *below* eye level: you lower your eyes.

```ng-figure
id: elevation-depression
title: Angle of elevation and angle of depression
svg:
<svg viewBox="0 0 320 200" role="img" aria-label="Angle of elevation from the ground and angle of depression from the top of a tower" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20,170 H300" stroke-width="1"/><path d="M250,170 V50" stroke-width="3"/><path d="M50,170 L250,50" class="u"/><path d="M250,50 H110" stroke-dasharray="5 4" stroke-width="1"/><path d="M86.0,170.0 A36,36 0 0 0 80.9,151.5" stroke-width="1.2"/><path d="M214,50 A36,36 0 0 0 219.1,68.5" stroke-width="1.2"/><circle cx="50" cy="170" r="3" fill="currentColor"/><circle cx="250" cy="50" r="3" fill="currentColor"/><text x="46" y="188" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">O (observer)</text><text x="262" y="48" font-size="12" text-anchor="start" fill="currentColor" stroke="none">T</text><text x="262" y="174" font-size="12" text-anchor="start" fill="currentColor" stroke="none">F</text><text x="128" y="164" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">angle of elevation</text><text x="164" y="44" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">horizontal</text><text x="170" y="66" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">angle of</text><text x="170" y="78" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">depression</text><text x="140" y="106" font-size="10" text-anchor="middle" fill="currentColor" stroke="none" transform="rotate(-31 140 106)">line of sight</text></svg>
caption: From O the top T is seen at the angle of elevation. From T the point O is seen at the angle of depression. The two are equal.
part: 140, 106 | Line of sight | The straight line joining the eye to the object.
part: 86, 162 | Angle of elevation | Between the line of sight and the horizontal, looking up from O.
part: 214, 60 | Angle of depression | Between the line of sight and the horizontal, looking down from T.
part: 164, 50 | Horizontal through T | Both angles are measured from a horizontal line, never from the vertical.
part: 250, 110 | The tower TF | Vertical, so the angle at F is 90°.
```

The two horizontals are parallel and the line of sight cuts across them, so the angle of depression from T equals the angle of elevation from O (alternate angles). In practice this means: **move the angle of depression down to the ground** and work in the triangle there.

```ng-mnemonic
id: eyes-up-eyes-down
title: Elevation or depression?
trick: **Elevation = eyes up. Depression = eyes down.** Both start from the **horizontal**.
meaning: Looking up at a kite, a tower top or an aeroplane: angle of elevation.
meaning: Looking down from a cliff, a tower or a balloon: angle of depression. It equals the angle of elevation at the object on the ground.
prompt: From what line are the angles of elevation and depression measured?
```

:::tip The angle of depression is not inside the triangle
The angle of depression is drawn at the top, between the line of sight and the horizontal, outside the triangle. Marking it between the line of sight and the tower is the commonest error. Transfer it to the ground as the equal alternate angle.
:::

```ng-draw
id: draw-elevation-depression
title: Draw a tower, an observer, and mark both angles
svg: ref: notes#elevation-depression
time: 3
```

**In one breath:** Angles of elevation and depression are both measured from the horizontal. The angle of depression from the top equals the angle of elevation from the ground point.

## One right triangle

Most 2- and 3-mark questions have a single right triangle. The routine never changes.

```ng-steps
id: steps-heights-distances
title: Every heights-and-distances question
step: **Draw** the figure: ground horizontal, towers and poles vertical, and mark every right angle.
step: **Mark** the given lengths and angles. Shift an angle of depression to the ground as its equal alternate angle.
step: **Name** the unknown ($h$, $x$) and find the right triangle that contains it and a known side.
step: **Choose** the ratio that links those two sides: height and ground distance → $\tan$; a slant length (string, ladder, rope) → $\sin$ or $\cos$.
step: **Solve**, keeping $\sqrt3$ as it is unless the question gives a value such as $\sqrt3=1.732$.
step: **State** the answer in a sentence with its unit.
```

:::skeleton Worked example: height of a tower (2 marks)
*A tower stands vertically on the ground. From a point on the ground 15 m from the foot of the tower, the angle of elevation of its top is 60°. Find the height of the tower.*

Let the tower be $AB$ of height $h$ and the point be $C$, with $BC=15$ m and $\angle ACB=60^\circ$. In right $\triangle ABC$: $\tan60^\circ=\dfrac{AB}{BC}$ [1]

$\sqrt3=\dfrac{h}{15}\Rightarrow h=15\sqrt3$. The height of the tower is $\boxed{15\sqrt3\text{ m}}$ [1]
:::

:::skeleton Worked example: a slant length (2 marks)
*A kite is flying at a height of 60 m above the ground. Its string is tied to a point on the ground and makes an angle of 60° with the ground. Find the length of the string, assuming there is no slack.*

Height $=60$ m is opposite the 60° angle; the string is the hypotenuse. $\sin60^\circ=\dfrac{60}{\text{string}}$ [1]

String $=\dfrac{60\times2}{\sqrt3}=\dfrac{120}{\sqrt3}=\boxed{40\sqrt3\text{ m}}$ [1]
:::

```ng-numerical
id: num-tower-height
title: Height of a tower, fresh numbers
question: From a point on the ground {{d}} m from the foot of a tower, the angle of elevation of its top is 30°. Find the height of the tower. (Take $\sqrt3=1.732$.)
var: d | 20 | 90 | 10
answer: d/sqrt(3)
unit: m
dp: 2
step: $\tan30^\circ=\dfrac{h}{\,{{d}}\,}\Rightarrow h=\dfrac{\,{{d}}\,}{\sqrt3}$
step: $h=\dfrac{\,{{d}}\,\sqrt3}{3}=$ **{{d/sqrt(3):2}} m**
```

:::tip Add the observer's height
If the observer is 1.5 m tall, the triangle starts at eye level, not at the ground. The side of the triangle is (height of the object − 1.5 m). Forgetting this loses the last mark.
:::

**In one breath:** Draw, mark, name, choose one ratio, solve, state with units. Height with ground distance uses tan; a rope, ladder or string uses sin or cos.

## Two right triangles

The 5-mark questions have two right triangles that share a side. Write one equation from each triangle and solve them together. There are three standard pictures.

**Picture 1: two points on the same side of the tower.**

<figure class="fig" id="two-points-one-tower">
<svg viewBox="0 0 320 200" role="img" aria-label="A tower seen from two points on the same side at angles 30 and 60 degrees" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16,170 H304" stroke-width="1"/><path d="M270,170 V58" stroke-width="3"/><path d="M256,170 V156 H270" stroke-width="1.2"/><path d="M205,170 L270,58" class="u"/><path d="M76,170 L270,58" class="u"/><path d="M229.0,170.0 A24,24 0 0 0 217.0,149.2" stroke-width="1.2"/><path d="M110.0,170.0 A34,34 0 0 0 105.4,153.0" stroke-width="1.2"/><text x="282" y="56" font-size="12" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="282" y="174" font-size="12" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="205" y="188" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="76" y="188" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">D</text><text x="240" y="164" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">60°</text><text x="124" y="164" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">30°</text><text x="292" y="118" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">h</text><text x="238" y="188" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="140" y="188" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">40 m</text></svg>
<figcaption>The tower AB is seen from C at 60° and from D, 40 m farther away, at 30°. The triangles ABC and ABD share the side AB.</figcaption>
</figure>

:::skeleton Worked example: the shadow that grows (5 marks)
*The shadow of a tower standing on level ground is 40 m longer when the Sun's altitude is 30° than when it is 60°. Find the height of the tower.*

Let $AB=h$ be the tower, $BC=x$ the shadow at 60° and $BD=x+40$ the shadow at 30°. Figure drawn [1]

In $\triangle ABC$: $\tan60^\circ=\dfrac hx\Rightarrow h=\sqrt3\,x$ … (1) [1]

In $\triangle ABD$: $\tan30^\circ=\dfrac{h}{x+40}\Rightarrow x+40=\sqrt3\,h$ … (2) [1]

Put (1) in (2): $x+40=\sqrt3(\sqrt3x)=3x\Rightarrow x=20$ [1]

$h=20\sqrt3$. The height of the tower is $\boxed{20\sqrt3\text{ m}}$ [1]
:::

**Picture 2: looking up and looking down from the same point.**

<figure class="fig" id="building-and-tower">
<svg viewBox="0 0 320 214" role="img" aria-label="From the top of a building, angle of elevation of the top of a tower and angle of depression of its foot" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M40,190 H280" stroke-width="1"/><path d="M110,190 V132" stroke-width="3"/><path d="M168,190 V32" stroke-width="3"/><path d="M110,132 H168" stroke-dasharray="5 4" stroke-width="1"/><path d="M110,132 L168,32" class="u"/><path d="M110,132 L168,190" class="u"/><path d="M132.0,132.0 A22,22 0 0 0 121.0,112.9" stroke-width="1.2"/><path d="M132,132 A22,22 0 0 1 125.6,147.6" stroke-width="1.2"/><text x="98" y="130" font-size="12" text-anchor="end" fill="currentColor" stroke="none">A</text><text x="98" y="194" font-size="12" text-anchor="end" fill="currentColor" stroke="none">B</text><text x="180" y="34" font-size="12" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="180" y="194" font-size="12" text-anchor="start" fill="currentColor" stroke="none">D</text><text x="180" y="136" font-size="12" text-anchor="start" fill="currentColor" stroke="none">E</text><text x="142" y="120" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">60°</text><text x="146" y="148" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">45°</text><text x="96" y="164" font-size="10" text-anchor="end" fill="currentColor" stroke="none">7 m</text><text x="206" y="90" font-size="10" text-anchor="start" fill="currentColor" stroke="none">cable tower</text><text x="60" y="206" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">building</text></svg>
<figcaption>From A, the top of a 7 m building, the top C of a tower is seen at 60° elevation and its foot D at 45° depression. The horizontal AE splits the tower into two parts.</figcaption>
</figure>

:::skeleton Worked example: building and tower (5 marks)
*From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Find the height of the tower.*

Let $AB=7$ m be the building, $CD$ the tower, and $AE\parallel BD$. Then $ED=AB=7$ m and $\angle ADB=45^\circ$ (alternate to the angle of depression). Figure drawn [1]

In $\triangle ABD$: $\tan45^\circ=\dfrac{AB}{BD}\Rightarrow BD=7$ m, so $AE=7$ m [1]

In $\triangle AEC$: $\tan60^\circ=\dfrac{CE}{AE}\Rightarrow CE=7\sqrt3$ m [1½]

$CD=CE+ED=7\sqrt3+7$ [½]

The height of the tower is $\boxed{7(\sqrt3+1)\text{ m}}$ [1]
:::

**Picture 3: two objects seen from one high point.** From the top of a 75 m lighthouse, two ships on the same side are seen at angles of depression 30° and 45°. The nearer ship has the larger angle. Its distance is $\dfrac{75}{\tan45^\circ}=75$ m; the farther one is at $\dfrac{75}{\tan30^\circ}=75\sqrt3$ m. The ships are $75(\sqrt3-1)$ m apart. If they were on opposite sides, you would add: $75(\sqrt3+1)$ m.

```ng-compare
id: same-side-opposite-sides
title: Two objects: same side or opposite sides?
cols: Same side of the tower | Opposite sides of the tower
row: Picture | both triangles lie on one side and overlap | one triangle on each side
row: Distance between the two objects | difference of the two ground distances | sum of the two ground distances
row: Which is nearer? | the one with the larger angle | the one with the larger angle
```

```ng-derive
id: derive-two-poles
title: A 5-marker to write out in full
prompt: Two poles of equal height stand opposite each other on either side of a road 80 m wide. From a point between them on the road, the angles of elevation of their tops are 60° and 30°. Find the height of the poles and the distances of the point from the poles.
time: 8
check: Figure with both poles, the point and the two angles; distances taken as $x$ and $80-x$ | 1
check: First triangle: $\tan60^\circ=\dfrac hx$, so $h=\sqrt3\,x$ | 1
check: Second triangle: $\tan30^\circ=\dfrac{h}{80-x}$, so $\sqrt3\,h=80-x$ | 1
check: Solved: $3x=80-x$, $x=20$ | 1
check: Height $20\sqrt3$ m; the point is 20 m and 60 m from the poles | 1
```

:::tip Keep √3 until the end
Do not turn $\sqrt3$ into 1.732 in the middle of the working. Carry it as a surd, simplify, and substitute only in the last line, and only if the question gives a value.
:::

```ng-draw
id: draw-building-and-tower
title: Draw the building-and-tower figure with both angles
svg: ref: notes#building-and-tower
time: 3
```

**In one breath:** Two triangles share a side: write one tan equation from each and solve together. Same side → subtract the distances; opposite sides → add them. Draw the horizontal through the observer when you look both up and down.
