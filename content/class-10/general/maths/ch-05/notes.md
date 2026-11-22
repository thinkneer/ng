# Ch 5 · Arithmetic Progressions

Some lists of numbers grow by the same step every time: the seat numbers at the ends of rows in a hall, the amount in a money box when you add ₹50 a week, the rungs of a ladder. Such a list is an arithmetic progression, an AP. Two formulas, one for any term and one for the total, answer almost every question on it. This is the last chapter of Unit II (Algebra, 20 marks) and one of the most predictable in the paper.

## The trick a schoolboy is said to have found

A well-known story, possibly improved in the retelling, says that a teacher once asked his class to add all the numbers from 1 to 100, hoping for a quiet hour. A young boy named Carl Friedrich Gauss wrote the answer almost at once: 5050.

He had noticed that the list can be paired from its two ends: $1+100$, $2+99$, $3+98$ and so on. Every pair makes 101, and there are 50 pairs, so the total is $50\times101=5050$. That pairing idea is exactly the formula for the sum of an AP, and you will derive it below. Banks use the same sum to total equal instalments, and builders use it to count bricks in a stepped wall.

**In one breath:** Numbers that grow by a fixed step can be added by pairing the first with the last. That one idea gives the sum formula of this chapter.

## What makes a list an AP

An **arithmetic progression** is a list of numbers in which each term is obtained by adding a fixed number to the term before it. The fixed number is the **common difference**, $d$. It can be positive, negative or zero.

<figure class="fig" id="ap-bars">
<svg viewBox="0 0 300 176" role="img" aria-label="Bars growing by the same step: the terms of an arithmetic progression" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20,150 H280" stroke-width="1"/><rect x="30" y="130" width="26" height="20" fill="#E0B400" fill-opacity="0.3"/><text x="43" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">a₁</text><rect x="70" y="112" width="26" height="38" fill="#E0B400" fill-opacity="0.3"/><text x="83" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">a₂</text><rect x="110" y="94" width="26" height="56" fill="#E0B400" fill-opacity="0.3"/><text x="123" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">a₃</text><rect x="150" y="76" width="26" height="74" fill="#E0B400" fill-opacity="0.3"/><text x="163" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">a₄</text><rect x="190" y="58" width="26" height="92" fill="#E0B400" fill-opacity="0.3"/><text x="203" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">a₅</text><rect x="230" y="40" width="26" height="110" fill="#E0B400" fill-opacity="0.3"/><text x="243" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">a₆</text><path d="M56,130 V112 M96,112 V94" stroke-width="1" stroke-dasharray="3 3"/><text x="70" y="124" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">+d</text><text x="110" y="106" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">+d</text><text x="190" y="30" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">each term = previous term + d</text></svg>
<figcaption>In an AP every term is the previous term plus the same number d, so the bars rise by equal steps.</figcaption>
</figure>

With first term $a$, the AP is $a,\ a+d,\ a+2d,\ a+3d,\ \dots$

To test a list, subtract each term from the next one. If every difference is the same, it is an AP.

| List | Differences | AP? |
|---|---|---|
| $2,\ 7,\ 12,\ 17$ | $5,\ 5,\ 5$ | yes, $d=5$ |
| $10,\ 7,\ 4,\ 1$ | $-3,\ -3,\ -3$ | yes, $d=-3$ |
| $1,\ 4,\ 9,\ 16$ | $3,\ 5,\ 7$ | no |

:::tip d is "next minus previous"
$d=a_2-a_1$, never the other way round. For $10,7,4,\dots$ the common difference is $-3$, not $3$.
:::

**In one breath:** An AP adds the same number $d$ each time. Find $d$ as (any term) − (the term before it); it may be negative.

## The nth term

To reach the 2nd term you add $d$ once; to reach the 3rd, twice; to reach the $n$th, $(n-1)$ times.

:::formula nth term of an AP
$$a_n=a+(n-1)d$$
$a$ = first term, $d$ = common difference, $n$ = position of the term. The last term is often written $l$.
:::

```ng-mnemonic
id: one-step-fewer
title: Why n − 1 and not n?
trick: **Ten fence posts, nine gaps**
meaning: To get from the 1st term to the $n$th you take $(n-1)$ steps of $d$, just as $n$ posts have $(n-1)$ gaps between them.
prompt: How many steps of d take you from the first term to the nth term?
```

```ng-derive
id: derive-nth-term
title: Derive the nth term
prompt: For an AP with first term $a$ and common difference $d$, show that $a_n=a+(n-1)d$.
time: 3
check: $a_1=a$, $a_2=a+d$, $a_3=a+2d$, $a_4=a+3d$ | 1
check: Pattern: the multiple of $d$ is one less than the position | 0.5
check: So $a_n=a+(n-1)d$ | 0.5
```

The formula has four letters: $a_n$, $a$, $n$, $d$. Give any three and you can find the fourth, and that is all the standard questions do.

:::skeleton Worked example: find a term (2 marks)
*Find the 10th term of the AP $2,\ 7,\ 12,\ \dots$*

$a=2$, $d=7-2=5$, $n=10$ [1]

$a_{10}=a+9d=2+45=\boxed{47}$ [1]
:::

:::skeleton Worked example: which term? (2 marks)
*Which term of the AP $21,\ 18,\ 15,\ \dots$ is $-81$?*

$a=21$, $d=-3$. Let $a_n=-81$: $21+(n-1)(-3)=-81$ [1]

$-3(n-1)=-102\Rightarrow n-1=34\Rightarrow n=35$. It is the $\boxed{35\text{th term}}$ [1]
:::

If $n$ does not come out as a positive whole number, the number is **not** a term of that AP.

:::skeleton Worked example: counting terms (3 marks)
*How many two-digit numbers are divisible by 3?*

The numbers are $12,\ 15,\ 18,\ \dots,\ 99$: an AP with $a=12$, $d=3$, last term $99$ [1]

$99=12+(n-1)3\Rightarrow n-1=29$ [1]

$n=30$. There are $\boxed{30}$ such numbers [1]
:::

When two terms are given, write one equation for each and subtract. If the 3rd term is 5 and the 7th term is 9: $a+2d=5$ and $a+6d=9$, so $4d=4$, $d=1$ and $a=3$.

```ng-numerical
id: num-nth-term
title: A term with fresh numbers
question: Find the {{n}}th term of the AP whose first term is {{a}} and whose common difference is {{d}}.
var: a | 2 | 9 | 1
var: d | 2 | 6 | 1
var: n | 11 | 25 | 1
answer: a+(n-1)*d
dp: 0
tol: 0.01
step: $a_n=a+(n-1)d={{a}}+({{n}}-1)\times{{d}}$
step: $={{a}}+{{(n-1)*d:0}}=$ **{{a+(n-1)*d:0}}**
```

```ng-graph
id: graph-ap-terms
title: The terms of an AP lie on a straight line
x: position n | 0 | 10
y: term | -10 | 30
curve: a + (n − 1)d | a + (x-1)*d
slider: a | first term $a$ | -5 | 10 | 1 | 2
slider: d | common difference $d$ | -3 | 4 | 0.5 | 3
preset: 2, 5, 8, … | a=2, d=3
preset: 10, 7, 4, … | a=10, d=-3
note: The terms sit on a straight line whose slope is $d$. A positive $d$ climbs, a negative $d$ falls, and $d=0$ stays flat.
```

**In one breath:** $a_n=a+(n-1)d$. Three of $a_n,a,n,d$ give the fourth. Two given terms mean two equations: subtract them to get $d$.

## The sum of the first n terms

Write the sum forwards and backwards and add, exactly as in the story.

$$\begin{aligned}S_n&=a+(a+d)+\dots+l\\S_n&=l+(l-d)+\dots+a\end{aligned}$$

Adding column by column, every pair gives $a+l$, and there are $n$ pairs: $2S_n=n(a+l)$.

:::formula Sum of the first n terms of an AP
$S_n=\dfrac n2\,(a+l)$, where $l$ is the last term<br>
$S_n=\dfrac n2\left[2a+(n-1)d\right]$
:::

Use the first form when you know the last term, the second when you know $d$.

```ng-mnemonic
id: number-times-average
title: The sum in words
trick: **Sum = number of terms × average of the first and the last**
meaning: $S_n=n\times\dfrac{a+l}{2}$. For $1+2+\dots+100$: $100\times\dfrac{1+100}{2}=5050$.
prompt: Say the sum of an AP in words.
```

```ng-derive
id: derive-sum-formula
title: Derive the sum formula
prompt: Derive the formula for the sum of the first $n$ terms of an AP with first term $a$ and common difference $d$.
time: 4
check: $S_n$ written forwards: $a+(a+d)+\dots+[a+(n-1)d]$ | 0.5
check: $S_n$ written backwards and the two added term by term | 1
check: Each of the $n$ pairs equals $2a+(n-1)d$, so $2S_n=n[2a+(n-1)d]$ | 1
check: $S_n=\dfrac n2[2a+(n-1)d]$ | 0.5
```

:::skeleton Worked example: sum of given terms (2 marks)
*Find the sum of the first 22 terms of the AP $8,\ 3,\ -2,\ \dots$*

$a=8$, $d=-5$, $n=22$. $S_{22}=\dfrac{22}{2}\left[2(8)+21(-5)\right]$ [1]

$=11\,(16-105)=11\times(-89)=\boxed{-979}$ [1]
:::

The sum of the first $n$ positive integers is the special case $a=1$, $l=n$: $S_n=\dfrac{n(n+1)}{2}$. So $1+2+\dots+1000=\dfrac{1000\times1001}{2}=500500$.

Sometimes the sum is given and $n$ is asked. That leads to a quadratic in $n$.

:::skeleton Worked example: how many terms? (3 marks)
*How many terms of the AP $24,\ 21,\ 18,\ \dots$ must be taken so that their sum is 78?*

$a=24$, $d=-3$. $\ 78=\dfrac n2\left[48+(n-1)(-3)\right]=\dfrac n2(51-3n)$ [1]

$156=51n-3n^2\Rightarrow n^2-17n+52=0\Rightarrow(n-4)(n-13)=0$ [1]

$n=4$ or $n=13$. Both are acceptable: terms 5 to 13 add up to zero, because the terms turn negative [1]
:::

:::tip Keep both values of n when both are whole
A negative or fractional $n$ is rejected. But two positive whole values can both be right when the AP is decreasing: say so in one line.
:::

There is a neat link between sums and terms.

:::formula A term from two sums
$$a_n=S_n-S_{n-1}$$
:::

If $S_n=4n-n^2$, then $a_1=S_1=3$, $a_2=S_2-S_1=4-3=1$, so $d=-2$ and $a_n=3+(n-1)(-2)=5-2n$.

```ng-numerical
id: num-sum-of-ap
title: A sum with fresh numbers
question: Find the sum of the first {{n}} terms of the AP with first term {{a}} and common difference {{d}}.
var: a | 1 | 8 | 1
var: d | 2 | 5 | 1
var: n | 10 | 20 | 2
answer: n/2*(2*a+(n-1)*d)
dp: 0
tol: 0.01
step: $S_n=\dfrac n2[2a+(n-1)d]=\dfrac{\,{{n}}\,}{2}\left[2({{a}})+({{n}}-1)({{d}})\right]$
step: $={{n/2:0}}\times{{2*a+(n-1)*d:0}}=$ **{{n/2*(2*a+(n-1)*d):0}}**
```

```ng-fill
id: fill-ap-formulas
title: Which formula?
cols: You want | Use
row: the $n$th term | [[$a_n=a+(n-1)d$]]
row: the sum, knowing $d$ | [[$S_n=\dfrac n2[2a+(n-1)d]$]]
row: the sum, knowing the last term | [[$S_n=\dfrac n2(a+l)$]]
row: a term from sums | [[$a_n=S_n-S_{n-1}$]]
row: $1+2+\dots+n$ | [[$\dfrac{n(n+1)}{2}$]]
row: three terms in AP | [[$a-d,\ a,\ a+d$]]
```

**In one breath:** $S_n=\dfrac n2(a+l)=\dfrac n2[2a+(n-1)d]$: number of terms times the average of first and last. And $a_n=S_n-S_{n-1}$.

## APs in daily life

Word problems hide an AP inside a story. Find three things: the first term, the common difference, and whether the question wants a term or a total.

```ng-steps
id: steps-ap-word-problems
title: An AP word problem
step: Write the first three numbers of the list from the story and check that the differences are equal.
step: Name $a$ and $d$. Decide what $n$ counts: weeks, rows, years, instalments.
step: "How much in the $n$th week / row / year?" → a term, $a_n$. "How much in all?" → a sum, $S_n$.
step: Substitute, solve, and answer in a sentence with units.
```

:::skeleton Worked example: a term or a total? (3 marks)
*A girl puts ₹5 in her money box in the first week and increases the amount by ₹1.75 every week. In which week does she put in ₹20.75? How much has she saved in all by then?*

The weekly amounts are $5,\ 6.75,\ 8.50,\ \dots$: an AP with $a=5$, $d=1.75$ [1]

$20.75=5+(n-1)(1.75)\Rightarrow n-1=9\Rightarrow n=10$: in the 10th week [1]

Total $=S_{10}=\dfrac{10}{2}(5+20.75)=5\times25.75=$ ₹128.75 [1]
:::

Three numbers in AP are best taken as $a-d,\ a,\ a+d$: their sum is simply $3a$. If three numbers in AP add up to 21, the middle one is 7.

```ng-explain
id: explain-term-or-sum
prompt: In three lines, explain how you decide whether a word problem needs the nth term or the sum.
lines: 3
answer: If the question asks about one particular stage (the amount in the 10th week, the seats in the last row), it needs a term. If it asks for everything up to that stage (total savings, all the seats), it needs a sum. Look for words such as "in all", "total" or "altogether" for the sum.
```

**In one breath:** Pull $a$ and $d$ out of the story, decide what $n$ counts, and ask: one stage (term) or everything so far (sum)?
