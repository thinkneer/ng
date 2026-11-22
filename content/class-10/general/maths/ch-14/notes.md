# Ch 14 · Probability

Will it rain tomorrow? Will the coin show heads? Probability puts a number between 0 and 1 on "how likely". In Class 9 you estimated it from experiments. In Class 10 you **calculate** it by counting: favourable outcomes divided by all possible outcomes. It is the most scoring chapter of the paper, provided you count carefully.

## A gambler's question

In 1654 a French gambler put a puzzle to the mathematician Blaise Pascal: if a game of chance is stopped half-way, how should the stake be shared fairly? Pascal exchanged letters about it with Pierre de Fermat, and those letters are usually counted as the beginning of the theory of probability.

What began with dice now runs weather forecasts ("70% chance of rain"), insurance premiums, medical trials and the recommendations on a video app. All of it rests on the simple counting idea of this chapter.

<figure class="fig" id="probability-scale">
<svg viewBox="0 0 300 150" role="img" aria-label="A probability scale from 0, impossible, to 1, certain, with one half in the middle" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M40,70 H260" class="u" stroke-width="2.5"/><path d="M40,60 V80 M150,60 V80 M260,60 V80"/><text x="40" y="50" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="150" y="50" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">½</text><text x="260" y="50" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="40" y="100" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">impossible</text><text x="150" y="100" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">even chance</text><text x="260" y="100" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">certain</text><text x="95" y="122" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">unlikely</text><text x="205" y="122" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">likely</text></svg>
<figcaption>Every probability lies on this scale, from 0 (impossible) to 1 (certain).</figcaption>
</figure>

**In one breath:** Probability measures chance on a scale from 0 to 1. It began with questions about games and is now used wherever the future is uncertain.

## The words and the one formula

- An **experiment** is an action with a result that cannot be predicted: tossing a coin, throwing a die.
- Each possible result is an **outcome**. Outcomes are **equally likely** when none is favoured over another (a fair coin, a fair die, a well-shuffled pack).
- An **event** is a collection of outcomes, such as "an even number".
- An event with only one outcome is an **elementary event**.

:::formula Theoretical probability of an event E
$$P(E)=\frac{\text{favourable outcomes}}{\text{total outcomes}}$$
Favourable = outcomes in which $E$ happens; total = all the equally likely outcomes of the experiment.
:::

Since the top can be anything from 0 up to the bottom, $0\le P(E)\le1$.

```ng-compare
id: impossible-vs-sure
title: Impossible event or sure event?
cols: Impossible event | Sure (certain) event
row: Probability | 0 | 1
row: Favourable outcomes | none | all of them
row: Example with one die | getting an 8 | getting a number less than 7
```

**Complementary events.** The event "not $E$", written $\overline E$, happens exactly when $E$ does not. Between them they cover every outcome, so

:::formula Complementary events
$$\begin{aligned}P(E)+P(\overline E)&=1\\ P(\overline E)&=1-P(E)\end{aligned}$$
:::

```ng-derive
id: derive-complement
title: Show that P(E) + P(not E) = 1
prompt: An experiment has $n$ equally likely outcomes, of which $m$ are favourable to an event $E$. Show that $P(E)+P(\overline E)=1$.
time: 3
check: $P(E)=\dfrac mn$ | 0.5
check: Outcomes favourable to "not E": $n-m$, so $P(\overline E)=\dfrac{n-m}{n}$ | 1
check: Sum $=\dfrac{m+n-m}{n}=1$ | 0.5
```

The probabilities of **all the elementary events** of an experiment add up to 1.

```ng-mnemonic
id: favourable-over-total
title: The probability fraction
trick: **F over T: Favourable over Total**
meaning: Count the **F**avourable outcomes for the top, **T**otal outcomes for the bottom. If your answer is more than 1 or negative, you have counted wrongly.
prompt: What goes on the top and the bottom of the probability fraction?
```

:::skeleton Worked example: one die (2 marks)
*A die is thrown once. Find the probability of getting (i) a prime number, (ii) a number greater than 4.*

Total outcomes: 1, 2, 3, 4, 5, 6, so 6. Primes: 2, 3, 5. $P(\text{prime})=\dfrac36=\boxed{\dfrac12}$ [1]

Greater than 4: 5, 6. $P=\dfrac26=\boxed{\dfrac13}$ [1]
:::

:::tip 1 is not prime
On a die the primes are 2, 3 and 5. Counting 1 as a prime is a very common slip.
:::

**In one breath:** $P(E)$ = favourable ÷ total, always between 0 and 1. An impossible event has probability 0, a sure event 1, and $P(\text{not }E)=1-P(E)$.

## Coins and dice: listing the outcomes

Most errors come from a wrong total. Learn these sample spaces.

```ng-fill
id: fill-sample-spaces
title: How many outcomes?
cols: Experiment | Total outcomes | Listed as
row: One coin | [[2]] | H, T
row: Two coins | [[4]] | HH, HT, TH, TT
row: Three coins | [[8]] | HHH, HHT, HTH, THH, HTT, THT, TTH, TTT
row: One die | [[6]] | 1 to 6
row: Two dice | [[36]] | pairs (1, 1) to (6, 6)
```

:::skeleton Worked example: two coins (2 marks)
*Two coins are tossed together. Find the probability of getting at least one head.*

Outcomes: HH, HT, TH, TT, so 4. [1]

At least one head: HH, HT, TH. $P=\boxed{\dfrac34}$ [1]
:::

"At least one" is often quicker through the complement: $P(\text{at least one head})=1-P(\text{no head})=1-\dfrac14$.

```ng-mnemonic
id: at-least-one
title: "At least one"
trick: **At least one = 1 − none**
meaning: Instead of counting every case with one or more, count the single case with **none** and subtract from 1.
prompt: How do you find the probability of "at least one" quickly?
```

For two dice, write the 36 outcomes as a table and read the event off it.

```ng-figure
id: dice-sum-table
title: Sums of two dice
svg:
<svg viewBox="0 0 300 220" role="img" aria-label="A 6 by 6 table of the sums of two dice with the six cells that add up to 7 highlighted" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="213" y="40" width="27" height="27" fill="#E0B400" fill-opacity="0.35" stroke="none"/><rect x="186" y="67" width="27" height="27" fill="#E0B400" fill-opacity="0.35" stroke="none"/><rect x="159" y="94" width="27" height="27" fill="#E0B400" fill-opacity="0.35" stroke="none"/><rect x="132" y="121" width="27" height="27" fill="#E0B400" fill-opacity="0.35" stroke="none"/><rect x="105" y="148" width="27" height="27" fill="#E0B400" fill-opacity="0.35" stroke="none"/><rect x="78" y="175" width="27" height="27" fill="#E0B400" fill-opacity="0.35" stroke="none"/><path d="M78,40 V202 M78,40 H240" stroke-width="0.8"/><path d="M105,40 V202 M78,67 H240" stroke-width="0.8"/><path d="M132,40 V202 M78,94 H240" stroke-width="0.8"/><path d="M159,40 V202 M78,121 H240" stroke-width="0.8"/><path d="M186,40 V202 M78,148 H240" stroke-width="0.8"/><path d="M213,40 V202 M78,175 H240" stroke-width="0.8"/><path d="M240,40 V202 M78,202 H240" stroke-width="0.8"/><text x="92" y="34" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="118" y="34" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">2</text><text x="146" y="34" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">3</text><text x="172" y="34" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">4</text><text x="200" y="34" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">5</text><text x="226" y="34" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="68" y="58" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="68" y="84" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">2</text><text x="68" y="112" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">3</text><text x="68" y="138" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">4</text><text x="68" y="166" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">5</text><text x="68" y="192" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="92" y="58" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">2</text><text x="92" y="84" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">3</text><text x="92" y="112" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">4</text><text x="92" y="138" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">5</text><text x="92" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="92" y="192" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">7</text><text x="118" y="58" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">3</text><text x="118" y="84" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">4</text><text x="118" y="112" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">5</text><text x="118" y="138" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="118" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">7</text><text x="118" y="192" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">8</text><text x="146" y="58" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">4</text><text x="146" y="84" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">5</text><text x="146" y="112" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="146" y="138" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">7</text><text x="146" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">8</text><text x="146" y="192" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">9</text><text x="172" y="58" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">5</text><text x="172" y="84" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="172" y="112" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">7</text><text x="172" y="138" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">8</text><text x="172" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">9</text><text x="172" y="192" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="200" y="58" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="200" y="84" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">7</text><text x="200" y="112" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">8</text><text x="200" y="138" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">9</text><text x="200" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="200" y="192" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="226" y="58" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">7</text><text x="226" y="84" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">8</text><text x="226" y="112" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">9</text><text x="226" y="138" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="226" y="166" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="226" y="192" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">12</text><text x="159" y="16" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">first die</text><text x="34" y="117" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">second</text><text x="34" y="129" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">die</text><text x="272" y="117" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">sum 7:</text><text x="272" y="129" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">6 ways</text><text x="150" y="214" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">36 equally likely outcomes</text></svg>
caption: Each of the 36 cells is one equally likely outcome. The shaded cells have sum 7.
part: 159, 16 | First die | Its number picks the column.
part: 34, 121 | Second die | Its number picks the row.
part: 92, 54 | Outcome (1, 1) | Sum 2: only one way, so P(sum 2) = 1/36.
part: 159, 121 | Sum 7 | Six cells on the diagonal: the most likely sum, P = 6/36 = 1/6.
part: 227, 189 | Outcome (6, 6) | Sum 12: only one way.
```

:::skeleton Worked example: two dice (3 marks)
*Two dice are thrown together. Find the probability that (i) the sum is 8, (ii) the two numbers are the same (a doublet), (iii) the product is 12.*

Total outcomes $=6\times6=36$.

(i) Sum 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2). $P=\boxed{\dfrac{5}{36}}$ [1]

(ii) Doublets: (1, 1), (2, 2), …, (6, 6). $P=\dfrac{6}{36}=\boxed{\dfrac16}$ [1]

(iii) Product 12: (2, 6), (3, 4), (4, 3), (6, 2). $P=\dfrac{4}{36}=\boxed{\dfrac19}$ [1]
:::

:::tip (2, 6) and (6, 2) are different
The two dice are different objects, so order matters. Count both.
:::

```ng-draw
id: draw-dice-table
title: Write out the 6 × 6 table of sums
svg: ref: notes#dice-sum-table
time: 4
```

**In one breath:** List the outcomes first: 2, 4, 8 for one, two, three coins; 6 and 36 for one and two dice. For "at least one", use 1 − P(none).

## Playing cards

```ng-figure
id: deck-figure
title: A pack of 52 playing cards
svg:
<svg viewBox="0 0 300 190" role="img" aria-label="A pack of 52 cards split into 26 red and 26 black, then into four suits of 13 cards each" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M150,33 L85,57 M150,33 L215,57 M85,79 L40,103 M85,79 L112,103 M215,79 L186,103 M215,79 L256,103" stroke-width="1"/><rect x="115.0" y="11" width="70" height="22" rx="4" class="u"/><text x="150" y="27" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">52 cards</text><rect x="53.0" y="57" width="64" height="22" rx="4" /><text x="85" y="73" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">26 red</text><rect x="183.0" y="57" width="64" height="22" rx="4" /><text x="215" y="73" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">26 black</text><rect x="10.0" y="103" width="60" height="22" rx="4" /><text x="40" y="119" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">13 hearts</text><rect x="76.0" y="103" width="72" height="22" rx="4" /><text x="112" y="119" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">13 diamonds</text><rect x="155.0" y="103" width="62" height="22" rx="4" /><text x="186" y="119" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">13 spades</text><rect x="226.0" y="103" width="60" height="22" rx="4" /><text x="256" y="119" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">13 clubs</text><text x="150" y="152" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">each suit: A, 2 to 10, J, Q, K</text><text x="150" y="168" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">face cards J, Q, K: 3 × 4 = 12</text><text x="150" y="184" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">aces: 4</text></svg>
caption: 52 cards: 2 colours, 4 suits, 13 cards in each suit.
part: 150, 24 | The pack | 52 cards in all (no jokers).
part: 85, 70 | Red cards | 26: hearts and diamonds.
part: 215, 70 | Black cards | 26: spades and clubs.
part: 112, 116 | One suit | 13 cards: ace, 2 to 10, jack, queen, king.
part: 150, 168 | Face cards | Jack, queen, king in each suit: 12 in all. The ace is not a face card.
```

```ng-fill
id: fill-card-counts
title: Counting cards
cols: Cards | How many | Probability
row: A king | [[4]] | [[1/13]]
row: A red card | [[26]] | [[1/2]]
row: A spade | [[13]] | [[1/4]]
row: A face card | [[12]] | [[3/13]]
row: A red king | [[2]] | [[1/26]]
row: The queen of hearts | [[1]] | [[1/52]]
row: Not an ace | [[48]] | [[12/13]]
```

:::skeleton Worked example: cards removed (3 marks)
*All the red face cards are removed from a pack of 52 cards. One card is drawn at random from the remaining cards. Find the probability that it is (i) a red card, (ii) a face card, (iii) a king.*

Red face cards removed $=6$, so $52-6=46$ cards remain. [1]

(i) Red cards left $=26-6=20$: $P=\dfrac{20}{46}=\boxed{\dfrac{10}{23}}$ [½]

(ii) Face cards left $=12-6=6$: $P=\dfrac{6}{46}=\boxed{\dfrac{3}{23}}$ [½]

(iii) Kings left $=4-2=2$: $P=\dfrac{2}{46}=\boxed{\dfrac{1}{23}}$ [1]
:::

:::tip New total after removal
When cards (or balls) are removed or added, the total changes. Write the new total before anything else.
:::

**In one breath:** 52 cards = 4 suits × 13; 26 red and 26 black; 12 face cards; 4 aces. If cards are removed, find the new total first.

## Bags, numbers and unknowns

```ng-steps
id: steps-probability-problem
title: Any probability question in four steps
step: **Write the total** number of equally likely outcomes (after any removal or addition).
step: **List or count the favourable outcomes** for the event; write them down for marks.
step: **Divide** favourable by total and simplify the fraction.
step: **Check** that the answer lies between 0 and 1; for "not", subtract from 1.
```

:::skeleton Worked example: a bag of balls (2 marks)
*A bag contains 6 red, 5 blue and 9 green balls. One ball is drawn at random. Find the probability that it is (i) red, (ii) not green.*

Total $=6+5+9=20$. $P(\text{red})=\dfrac{6}{20}=\boxed{\dfrac{3}{10}}$ [1]

$P(\text{not green})=1-\dfrac{9}{20}=\boxed{\dfrac{11}{20}}$ [1]
:::

:::skeleton Worked example: numbered cards (2 marks)
*A card is drawn at random from cards numbered 1 to 30. Find the probability that the number is (i) a perfect square, (ii) a prime.*

Perfect squares: 1, 4, 9, 16, 25. $P=\dfrac{5}{30}=\boxed{\dfrac16}$ [1]

Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. $P=\dfrac{10}{30}=\boxed{\dfrac13}$ [1]
:::

:::skeleton Worked example: an unknown number (3 marks)
*A bag contains 15 balls, of which $x$ are white. If 5 more white balls are put in the bag, the probability of drawing a white ball becomes $\dfrac12$. Find $x$.*

After adding: white balls $=x+5$, total $=20$. [1]

$\dfrac{x+5}{20}=\dfrac12$ [1]

$x+5=10\Rightarrow x=\boxed{5}$ [1]
:::

```ng-numerical
id: num-bag-not-red
title: A bag of marbles
question: A bag contains {{r}} red, {{b}} blue and {{g}} green marbles. One marble is drawn at random. Find the probability that it is not red (as a decimal, 2 places).
var: r | 2 | 8 | 1
var: b | 3 | 9 | 1
var: g | 1 | 7 | 1
answer: (b+g)/(r+b+g)
dp: 2
tol: 2
step: Total $={{r}}+{{b}}+{{g}}={{r+b+g}}$; not red $={{b}}+{{g}}={{b+g}}$
step: $P(\text{not red})=\dfrac{ {{b+g}} }{ {{r+b+g}} }=$ **{{(b+g)/(r+b+g):2}}**
```

```ng-explain
id: explain-equally-likely
prompt: In three lines, explain what "equally likely outcomes" means and why the formula needs it. Give one example where outcomes are not equally likely.
lines: 3
answer: Equally likely means no outcome is favoured over another, as with a fair coin or die. The formula counts outcomes, so each must have the same chance. Example: a bag with 4 red and 1 blue ball: "red" and "blue" are not equally likely.
```

**In one breath:** Write the total, count the favourable outcomes, divide and simplify. If the contents change, the total changes; if there is an unknown, the given probability makes an equation.
