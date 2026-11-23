# Ch 13 · Statistics

A school has the marks of five hundred students; a city has the daily temperatures of a whole year. Nobody can hold that many numbers in the head, so we describe them with one representative value: a **mean**, a **median** or a **mode**. In Class 9 you found these for lists of numbers. Here the data come in **groups** (classes), and each measure has its own formula. This chapter and Probability together carry 11 marks.

:::tip You need from earlier
- **Mean, median and mode of ungrouped data** (Class 9).
- **Frequency distribution table:** class intervals and frequencies; histograms (Class 9).
- **Summation sign:** $\sum f_i$ means "add all the $f$ values".
- **Careful arithmetic with negative numbers.**
:::

## One number for many

The word *statistics* comes from the word *state*: rulers have counted people, land and grain for thousands of years, and India still counts its whole population in a census. In the 1850s the nurse Florence Nightingale is credited with using carefully drawn charts of army hospital records to convince the British government that most soldiers were dying of dirty conditions, not wounds; the hospitals were cleaned and deaths fell.

Every cricket average, every "average rainfall" in a weather report and every exam "class average" is one of the three measures of this chapter. Choosing the right one matters: a few very large values pull the mean up, which is why incomes are usually described by the median.

**In one breath:** Large data sets are summarised by a central value. Mean, median and mode each answer a slightly different question about "the middle".

## Grouped data and its words

When there are many observations they are put into **class intervals** such as 0–10, 10–20, 20–30. The number of observations in a class is its **frequency** $f$.

- **Class size** $h$ = upper limit − lower limit.
- **Class mark** $x$ = $\dfrac{\text{lower limit}+\text{upper limit}}{2}$. It stands for every observation in the class.
- **Cumulative frequency** (cf) = running total of the frequencies.

All through these notes we use one table: the marks of 50 students in a test.

```ng-figure
id: histogram-figure
title: Marks of 50 students
svg:
<svg viewBox="0 0 300 196" role="img" aria-label="Histogram of marks: frequencies 5, 8, 15, 16 and 6 for classes 0 to 10 up to 40 to 50" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M44,164 H262 M50,170 V20" stroke-width="1"/><rect x="50" y="124" width="40" height="40"/><text x="70" y="118" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">5</text><rect x="90" y="100" width="40" height="64"/><text x="110" y="94" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">8</text><rect x="130" y="44" width="40" height="120"/><text x="150" y="38" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">15</text><rect x="170" y="36" width="40" height="128" fill="#E0B400" fill-opacity="0.3"/><text x="190" y="30" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">16</text><rect x="210" y="116" width="40" height="48"/><text x="230" y="110" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="50" y="178" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="90" y="178" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="130" y="178" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">20</text><text x="170" y="178" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">30</text><text x="210" y="178" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">40</text><text x="250" y="178" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">50</text><text x="156" y="192" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">marks</text><text x="6" y="22" font-size="10" text-anchor="start" fill="currentColor" stroke="none">number of</text><text x="6" y="34" font-size="10" text-anchor="start" fill="currentColor" stroke="none">students</text></svg>
caption: The tallest bar is the modal class, 30 to 40.
part: 70, 144 | Class 0 to 10 | 5 students; class mark 5.
part: 150, 104 | Class 20 to 30 | 15 students. This turns out to be the median class.
part: 190, 100 | Modal class 30 to 40 | The class with the highest frequency, 16.
part: 230, 140 | Class 40 to 50 | 6 students; the class after the modal class.
part: 110, 178 | Class limits | Each class has size h = 10.
```

**In one breath:** Grouped data is described by class intervals, class marks, frequencies and cumulative frequencies. The class mark represents the whole class.

## Mean of grouped data

The mean is the total of all observations divided by their number. In grouped data each of the $f_i$ observations in a class is taken to be the class mark $x_i$.

:::formula Mean: direct method
$$\bar x=\frac{\sum f_ix_i}{\sum f_i}$$
:::

| Class (class mark $x_i$) | $f_i$ | $f_ix_i$ |
|---|---|---|
| 0–10 (5) | 5 | 25 |
| 10–20 (15) | 8 | 120 |
| 20–30 (25) | 15 | 375 |
| 30–40 (35) | 16 | 560 |
| 40–50 (45) | 6 | 270 |
| **Total** | **50** | **1350** |

$$\bar x=\frac{1350}{50}=27$$

When the class marks are large, the multiplication is heavy. Choose a convenient class mark as the **assumed mean** $a$ (usually the middle one) and work with the small numbers $d_i=x_i-a$.

:::formula Mean: assumed mean method
$$\bar x=a+\frac{\sum f_id_i}{\sum f_i},\qquad d_i=x_i-a$$
:::

If all the classes have the same size $h$, divide again: $u_i=\dfrac{x_i-a}{h}$.

:::formula Mean: step-deviation method
$$\bar x=a+\frac{\sum f_iu_i}{\sum f_i}\times h,\qquad u_i=\frac{x_i-a}{h}$$
:::

With $a=25$ and $h=10$ for the same table:

| $x_i$ (and $u_i$) | $f_i$ | $f_iu_i$ |
|---|---|---|
| 5 ($-2$) | 5 | $-10$ |
| 15 ($-1$) | 8 | $-8$ |
| 25 (0) | 15 | 0 |
| 35 (1) | 16 | 16 |
| 45 (2) | 6 | 12 |
| **Total** | **50** | **10** |

$$\bar x=25+\frac{10}{50}\times10=27$$

All three methods give the same mean. Use the one the question asks for; if it does not say, use the one with the easiest arithmetic.

```ng-fill
id: fill-mean-methods
title: Three ways to the same mean
cols: Method | Work with | Formula
row: Direct | $x_i$ | [[$\dfrac{\sum f_ix_i}{\sum f_i}$]]
row: Assumed mean | $d_i=x_i-a$ | [[$a+\dfrac{\sum f_id_i}{\sum f_i}$]]
row: Step deviation | $u_i=\dfrac{x_i-a}{h}$ | [[$a+\dfrac{\sum f_iu_i}{\sum f_i}\times h$]]
```

:::tip Signs in the deviation column
Classes below the assumed mean have negative $d_i$ and $u_i$. Add the column with its signs; most wrong means come from a lost minus sign.
:::

```ng-numerical
id: num-mean-from-totals
title: Mean by the step-deviation formula
question: For a grouped frequency distribution, a = {{a}}, h = {{h}}, Σf = {{n}} and Σfu = {{s}}. Find the mean.
var: a | 25 | 75 | 10
var: h | 5 | 20 | 5
var: n | 40 | 100 | 20
var: s | -12 | 18 | 6
answer: a+s/n*h
dp: 2
tol: 1
step: $\bar x=a+\dfrac{\sum f_iu_i}{\sum f_i}\times h$
step: $={{a}}+\dfrac{ {{s}} }{ {{n}} }\times{{h}}=$ **{{a+s/n*h:2}}**
```

**In one breath:** Mean = $\dfrac{\sum fx}{\sum f}$ using class marks. The assumed-mean and step-deviation methods only make the numbers smaller; the answer is the same.

## Mode of grouped data

The mode is the value that occurs most often. In grouped data we first find the **modal class**, the class with the highest frequency, and then locate the mode inside it.

:::formula Mode of grouped data
$$\text{Mode}=l+\frac{f_1-f_0}{2f_1-f_0-f_2}\times h$$
$l$ = lower limit of the modal class, $h$ = class size, $f_1$ = frequency of the modal class, $f_0$ = frequency of the class **before** it, $f_2$ = frequency of the class **after** it.
:::

:::skeleton Worked example: mode (3 marks)
*Find the mode of the marks of the 50 students.*

Highest frequency is 16, so the modal class is 30–40: $l=30$, $h=10$, $f_1=16$, $f_0=15$, $f_2=6$ [1]

Mode $=30+\dfrac{16-15}{2(16)-15-6}\times10$ [1]

$=30+\dfrac{10}{11}=\boxed{30.91}$ [1]
:::

```ng-mnemonic
id: mode-before-after
title: The three frequencies in the mode formula
trick: **0 before, 1 the winner, 2 after**
meaning: $f_1$ is the highest frequency (the winner). $f_0$ is the class just **before** it, $f_2$ the class just **after** it. Top: winner − before. Bottom: twice the winner − before − after.
prompt: In the mode formula, what are f0, f1 and f2?
```

```ng-numerical
id: num-mode
title: Mode of grouped data
question: The modal class of a distribution is 40–50 with frequency {{f1}}. The class before it has frequency {{f0}} and the class after it has frequency {{f2}}. Find the mode.
var: f1 | 20 | 30 | 2
var: f0 | 10 | 18 | 2
var: f2 | 5 | 15 | 5
answer: 40+(f1-f0)/(2*f1-f0-f2)*10
dp: 2
tol: 1
step: $l=40$, $h=10$, $f_1={{f1}}$, $f_0={{f0}}$, $f_2={{f2}}$
step: Mode $=40+\dfrac{ {{f1}}-{{f0}} }{ 2\times{{f1}}-{{f0}}-{{f2}} }\times10=$ **{{40+(f1-f0)/(2*f1-f0-f2)*10:2}}**
```

**In one breath:** Find the class with the highest frequency, then use $l+\dfrac{f_1-f_0}{2f_1-f_0-f_2}\times h$. The mode always lies inside the modal class.

## Median of grouped data

The median is the middle value: half the observations lie below it and half above. For grouped data we use cumulative frequencies.

| Class | $f$ | cf |
|---|---|---|
| 0–10 | 5 | 5 |
| 10–20 | 8 | 13 |
| 20–30 | 15 | 28 |
| 30–40 | 16 | 44 |
| 40–50 | 6 | 50 |

Here $n=50$, so $\dfrac n2=25$. The **median class** is the class whose cumulative frequency is the first to reach or pass $\dfrac n2$: that is 20–30 (cf 28).

:::formula Median of grouped data
$$\text{Median}=l+\frac{\dfrac n2-cf}{f}\times h$$
$l$ = lower limit of the median class, $n$ = total frequency, $cf$ = cumulative frequency of the class **before** the median class, $f$ = frequency of the median class, $h$ = class size.
:::

:::skeleton Worked example: median (3 marks)
*Find the median of the marks of the 50 students.*

Cumulative frequencies: 5, 13, 28, 44, 50; $\dfrac n2=25$ [1]

Median class 20–30: $l=20$, $cf=13$, $f=15$, $h=10$ [1]

Median $=20+\dfrac{25-13}{15}\times10=20+8=\boxed{28}$ [1]
:::

```ng-steps
id: steps-median
title: Median of grouped data in four steps
step: **Add a cumulative-frequency column** and note the total $n$.
step: **Find $\dfrac n2$** and the first class whose cf is greater than or equal to it: the median class.
step: **Read off** $l$ and $f$ from the median class, and $cf$ from the class **before** it.
step: **Substitute** in $l+\dfrac{\frac n2-cf}{f}\times h$.
```

:::tip cf of the class before
The $cf$ in the formula is **not** the cumulative frequency of the median class itself. It is the one just above it in the table.
:::

```ng-numerical
id: num-median
title: Median of grouped data
question: In a distribution of 60 observations the median class is 30–40. Its frequency is {{f}} and the cumulative frequency of the class before it is {{c}}. Find the median.
var: f | 12 | 20 | 2
var: c | 18 | 24 | 2
answer: 30+(30-c)/f*10
dp: 2
tol: 1
step: $\dfrac n2=30$, $l=30$, $cf={{c}}$, $f={{f}}$, $h=10$
step: Median $=30+\dfrac{30-{{c}} }{ {{f}} }\times10=$ **{{30+(30-c)/f*10:2}}**
```

**In one breath:** Make the cf column, find the class containing the $\dfrac n2$-th observation, and use $l+\dfrac{\frac n2-cf}{f}\times h$ with the cf of the class before.

## Which measure, and how they are linked

```ng-compare
id: mean-median-mode
title: Mean, median or mode?
cols: What it is | Extreme values
row: Mean | the balance point; uses every value | pull it strongly
row: Median | the middle value; uses only the order | hardly move it
row: Mode | the most common value; uses only frequencies | do not affect it
```

For most distributions the three are linked by a rule of thumb.

:::formula Empirical relationship
$$3\ \text{Median}=\text{Mode}+2\ \text{Mean}$$
:::

For our table, $3\times28=84$ and $30.91+2\times27=84.91$: close, as expected from an approximate rule.

```ng-mnemonic
id: empirical-three-one-two
title: The empirical formula
trick: **3 Medians = 1 Mode + 2 Means**
meaning: Say it like a recipe: **3** medians make **1** mode and **2** means. Given any two of the measures, the third follows from it.
prompt: Write the empirical relationship between mean, median and mode.
```

**Missing frequencies.** If the mean (or median) is given and a frequency is unknown, write the usual table with the unknown in it, apply the formula and solve the equation.

:::skeleton Worked example: a missing frequency (3 marks)
*The mean of the following distribution is 46. Find $p$. Classes 0–20, 20–40, 40–60, 60–80, 80–100 with frequencies 5, 7, $p$, 6, 2.*

Class marks: 10, 30, 50, 70, 90. $\sum f_i=20+p$; $\sum f_ix_i=50+210+50p+420+180=860+50p$ [1]

$\dfrac{860+50p}{20+p}=46\Rightarrow860+50p=920+46p$ [1]

$4p=60\Rightarrow p=\boxed{15}$ [1]
:::

```ng-explain
id: explain-median-class
prompt: In three lines, explain how you find the median class and which cumulative frequency goes into the median formula.
lines: 3
```

**In one breath:** Mean uses every value, median only the middle, mode only the peak; roughly, 3 Median = Mode + 2 Mean. A missing frequency is found by putting the given mean or median into its formula.

## What is not in boards

**Cumulative frequency curves (ogives)** and finding the median from a graph are not in the current book. Mean (three methods), mode and median by formula are.

**In one breath:** No ogives: every question is a table and a formula.
