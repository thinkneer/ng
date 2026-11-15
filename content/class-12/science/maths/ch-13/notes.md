# Ch 13 · Probability

In Class 11 you found the probability of an event from scratch. This chapter asks a sharper question: how does a probability change once you are *told something*? That one idea, conditional probability, leads to the multiplication theorem, independent events, the theorem of total probability and Bayes' theorem. The chapter ends with random variables and their mean. It is Unit VI on its own, worth 8 marks, and a Bayes' theorem question (often as a case study) appears in almost every paper.

## Conditional probability

Suppose you already know that event $F$ has happened. The sample space shrinks to $F$, and the only way $E$ can now happen is through the outcomes common to both.

:::formula Conditional probability
$$P(E|F)=\frac{P(E\cap F)}{P(F)},\qquad P(F)\ne0$$
For equally likely outcomes: $P(E|F)=\dfrac{n(E\cap F)}{n(F)}$
:::

Read $P(E|F)$ as "the probability of $E$ given $F$". The event after the bar is the one that is known, and it goes in the denominator.

:::skeleton Worked example: the reduced sample space (2 marks)
*A die is thrown twice and the sum of the numbers is observed to be 6. Find the probability that the number 4 has appeared at least once.*

$F$: sum is 6 $=\{(1,5),(2,4),(3,3),(4,2),(5,1)\}$, $n(F)=5$. $E$: 4 appears at least once; $E\cap F=\{(2,4),(4,2)\}$, $n(E\cap F)=2$ [1]

$P(E|F)=\dfrac{n(E\cap F)}{n(F)}=\boxed{\dfrac25}$ [1]
:::

The wording of the condition matters a great deal. A family has two children, so the sample space is $\{BB, BG, GB, GG\}$ (elder child first).

- Given that **at least one is a boy**: $F=\{BB,BG,GB\}$, so $P(\text{both boys})=\dfrac13$.
- Given that **the elder is a boy**: $F=\{BB,BG\}$, so $P(\text{both boys})=\dfrac12$.

:::tip Which event is given?
$P(E|F)$ and $P(F|E)$ are different numbers in general. Write down in words which event is known before you put anything in the denominator.
:::

Conditional probability behaves like ordinary probability: $P(E'|F)=1-P(E|F)$, and $P((A\cup B)|F)=P(A|F)+P(B|F)-P((A\cap B)|F)$.

```ng-mnemonic
id: given-goes-down
title: Which event goes in the denominator?
trick: **Given goes down**
meaning: In $P(E\mid F)$ the event after the bar is the one that is known; it goes **down** into the denominator: $\dfrac{P(E\cap F)}{P(F)}$.
meaning: So $P(E\mid F)$ and $P(F\mid E)$ have different denominators and are different numbers in general.
prompt: In P(E | F), which probability is in the denominator?
```

**In one breath:** Given $F$, the sample space shrinks to $F$: $P(E|F)=P(E\cap F)/P(F)$. The known event goes in the denominator.

## Multiplication theorem and independent events

Turn the definition around and you get a rule for "both happen".

:::formula Multiplication theorem
$P(E\cap F)=P(E)\,P(F|E)=P(F)\,P(E|F)$<br>
Three events: $P(E\cap F\cap G)=P(E)\,P(F|E)\,P(G|E\cap F)$
:::

:::skeleton Worked example: drawing without replacement (2 marks)
*An urn contains 10 black and 5 white balls. Two balls are drawn one after the other without replacement. Find the probability that both are black.*

$P(\text{first black})=\dfrac{10}{15}$; given that, 9 black balls remain among 14, so $P(\text{second black}\mid\text{first black})=\dfrac{9}{14}$ [1]

$P(\text{both black})=\dfrac{10}{15}\times\dfrac{9}{14}=\boxed{\dfrac37}$ [1]
:::

Sometimes knowing that $F$ happened tells you nothing about $E$: $P(E|F)=P(E)$. Such events are **independent**, and the multiplication theorem becomes simply a product.

:::formula Independent events
$E$ and $F$ are independent $\iff P(E\cap F)=P(E)\,P(F)$<br>
If $E$ and $F$ are independent, so are $E$ and $F'$, $E'$ and $F$, $E'$ and $F'$.
:::

:::skeleton Worked example: two people, one problem (3 marks)
*A and B try to solve a problem independently. Their probabilities of solving it are $\dfrac12$ and $\dfrac13$. Find the probability that (i) the problem is solved, (ii) exactly one of them solves it.*

$P(A)=\dfrac12$, $P(B)=\dfrac13$, so $P(A')=\dfrac12$, $P(B')=\dfrac23$ [½]

(i) $P(\text{solved})=1-P(A')P(B')=1-\dfrac12\times\dfrac23$ [1] $=\boxed{\dfrac23}$ [½]

(ii) $P(\text{exactly one})=P(A)P(B')+P(A')P(B)=\dfrac12\times\dfrac23+\dfrac12\times\dfrac13=\boxed{\dfrac12}$ [1]
:::

"At least one" is nearly always quickest as $1-P(\text{none})$.

:::tip Independent is not mutually exclusive
Mutually exclusive means the events cannot happen together: $P(A\cap B)=0$. Independent means $P(A\cap B)=P(A)P(B)$. Two events with non-zero probabilities cannot be both. To *test* independence, compute $P(A\cap B)$ and $P(A)P(B)$ separately and compare.
:::

```ng-compare
id: independent-vs-exclusive
title: Independent vs mutually exclusive
cols: Independent | Mutually exclusive
row: Meaning | one does not affect the chance of the other | they cannot happen together
row: $P(A\cap B)$ | $P(A)\,P(B)$ | $0$
row: $P(A\cup B)$ | $1-P(A')P(B')$ | $P(A)+P(B)$
row: $P(A\mid B)$ | $P(A)$ | $0$
row: Both at once? | not if $P(A),P(B)\ne0$ | not if $P(A),P(B)\ne0$
```

```ng-numerical
id: num-union-independent
title: At least one of two independent events
question: $A$ and $B$ are independent events with $P(A)={{p}}$ and $P(B)={{q}}$. Find $P(A\cup B)$.
var: p | 0.2 | 0.6 | 0.1
var: q | 0.3 | 0.7 | 0.1
answer: p+q-p*q
dp: 2
tol: 0.5
step: Independent: $P(A\cap B)=P(A)P(B)={{p}}\times{{q}}={{p*q:2}}$
step: $P(A\cup B)={{p}}+{{q}}-{{p*q:2}}=$ **{{p+q-p*q:2}}**
```

**In one breath:** "And" means multiply: $P(E\cap F)=P(E)P(F|E)$. If the events are independent this is just $P(E)P(F)$, and their complements are independent too.

## Theorem of total probability

Often an event $A$ can happen through several routes. A ball can be red because it came from the first bag or from the second. If the routes $E_1,E_2,\dots,E_n$ are mutually exclusive and together cover every possibility (a **partition** of the sample space), add the probabilities of the routes.

:::formula Theorem of total probability
$$P(A)=P(E_1)P(A|E_1)+P(E_2)P(A|E_2)+\dots+P(E_n)P(A|E_n)$$
:::

:::skeleton Worked example: two bags (2 marks)
*Bag I contains 3 red and 4 black balls; Bag II contains 5 red and 6 black balls. One bag is chosen at random and a ball is drawn from it. Find the probability that the ball is red.*

$E_1$: Bag I chosen, $E_2$: Bag II chosen, $A$: ball is red. $P(E_1)=P(E_2)=\dfrac12$, $P(A|E_1)=\dfrac37$, $P(A|E_2)=\dfrac{5}{11}$ [1]

$P(A)=\dfrac12\times\dfrac37+\dfrac12\times\dfrac{5}{11}=\dfrac{3}{14}+\dfrac{5}{22}=\boxed{\dfrac{34}{77}}$ [1]
:::

**In one breath:** Split the event by its routes: for each route multiply (probability of the route) × (probability of the event on that route), then add.

## Bayes' theorem

Total probability runs forward: from causes to the result. Bayes' theorem runs backward: the result has been seen, so which cause was it? In the two-bag example, the ball drawn *is* red; how likely is it that it came from Bag II?

:::formula Bayes' theorem
$$P(E_i|A)=\frac{P(E_i)\,P(A|E_i)}{P(E_1)P(A|E_1)+P(E_2)P(A|E_2)+\dots+P(E_n)P(A|E_n)}$$
:::

The denominator is the total probability $P(A)$; the numerator is the one term of it that belongs to the cause you are asked about. For the bags, $P(E_2|A)=\dfrac{5/22}{34/77}=\dfrac{35}{68}$.

A tree diagram keeps the numbers organised. Multiply along each path, and add the paths that end in the observed result.

<figure class="fig" id="ch13-bayes-tree">
<svg viewBox="0 0 320 190" role="img" aria-label="Probability tree: three machines A, B, C with shares 0.25, 0.35, 0.40, each branching into defective with probabilities 0.05, 0.04, 0.02 and not defective">
<line x1="28" y1="95" x2="112" y2="37" stroke="#B0204F" stroke-width="1.6"/>
<text x="44" y="54.0" font-size="11" fill="currentColor">0.25</text><text x="117" y="41" font-size="13" fill="currentColor">A</text>
<line x1="132" y1="37" x2="216" y2="23" stroke="#B0204F" stroke-width="1.6"/>
<line x1="132" y1="37" x2="216" y2="51" stroke="currentColor" stroke-width="1" opacity="0.6"/>
<text x="166" y="25" font-size="11" fill="currentColor">0.05</text><text x="221" y="27" font-size="11" fill="currentColor">D  (defective)</text><text x="221" y="55" font-size="11" fill="currentColor">D′</text>
<line x1="28" y1="95" x2="112" y2="95" stroke="#B0204F" stroke-width="1.6"/>
<text x="68" y="89.0" font-size="11" fill="currentColor">0.35</text><text x="117" y="99" font-size="13" fill="currentColor">B</text>
<line x1="132" y1="95" x2="216" y2="81" stroke="#B0204F" stroke-width="1.6"/>
<line x1="132" y1="95" x2="216" y2="109" stroke="currentColor" stroke-width="1" opacity="0.6"/>
<text x="166" y="83" font-size="11" fill="currentColor">0.04</text><text x="221" y="85" font-size="11" fill="currentColor">D  (defective)</text><text x="221" y="113" font-size="11" fill="currentColor">D′</text>
<line x1="28" y1="95" x2="112" y2="153" stroke="#B0204F" stroke-width="1.6"/>
<text x="44" y="144.0" font-size="11" fill="currentColor">0.40</text><text x="117" y="157" font-size="13" fill="currentColor">C</text>
<line x1="132" y1="153" x2="216" y2="139" stroke="#B0204F" stroke-width="1.6"/>
<line x1="132" y1="153" x2="216" y2="167" stroke="currentColor" stroke-width="1" opacity="0.6"/>
<text x="166" y="141" font-size="11" fill="currentColor">0.02</text><text x="221" y="143" font-size="11" fill="currentColor">D  (defective)</text><text x="221" y="171" font-size="11" fill="currentColor">D′</text>
<circle cx="26" cy="95" r="3" fill="#E0B400"/>
</svg>
<figcaption>Tree for the three machines. Multiply along a path; add the three paths that end in D to get P(D).</figcaption>
</figure>

:::skeleton Worked example: three machines (5 marks)
*In a factory, machines A, B and C produce 25%, 35% and 40% of the bolts. Of their outputs 5%, 4% and 2% are defective. A bolt drawn at random from the production is found to be defective. Find the probability that it was made by machine B.*

Let $E_1$, $E_2$, $E_3$: the bolt is made by machine A, B, C; and $D$: the bolt is defective [1]

$P(E_1)=0.25$, $P(E_2)=0.35$, $P(E_3)=0.40$; $P(D|E_1)=0.05$, $P(D|E_2)=0.04$, $P(D|E_3)=0.02$ [1]

By Bayes' theorem, $P(E_2|D)=\dfrac{P(E_2)P(D|E_2)}{P(E_1)P(D|E_1)+P(E_2)P(D|E_2)+P(E_3)P(D|E_3)}$ [1]

$=\dfrac{0.35\times0.04}{0.25\times0.05+0.35\times0.04+0.40\times0.02}=\dfrac{0.0140}{0.0125+0.0140+0.0080}$ [1]

$=\dfrac{0.0140}{0.0345}=\boxed{\dfrac{28}{69}}$ [1]
:::

Notice where the marks are: two of the five are for defining the events and listing the probabilities, before any calculation. Never skip those lines.

:::tip Do not mix up $P(D|E)$ and $P(E|D)$
"4% of B's bolts are defective" is $P(D|E_2)=0.04$. The question asks for $P(E_2|D)$, the chance that a defective bolt came from B. These are different, and the whole point of Bayes' theorem is to get one from the other.
:::

```ng-mnemonic
id: my-path-over-all-paths
title: Bayes' theorem on a tree
trick: **My path ÷ all paths**
meaning: Multiply along each branch that ends in the observed result.
meaning: Bayes' answer = (the path through the cause asked about) ÷ (the sum of all those paths).
prompt: On a probability tree, what is Bayes' theorem in four words?
```

```ng-steps
id: steps-bayes
title: A Bayes' theorem answer
step: Define the causes $E_1,E_2,\dots$ and the observed event $A$ in words.
step: List $P(E_i)$ and $P(A\mid E_i)$ for every cause.
step: Write Bayes' formula for the cause asked about.
step: Substitute: the numerator is one path, the denominator is the sum of all paths.
step: Simplify to a fraction in lowest terms.
```

```ng-numerical
id: num-two-bags-bayes
title: Which bag did it come from?
question: Bag I has {{r}} red and {{b}} black balls; Bag II has {{s}} red and {{c}} black balls. A bag is chosen at random and a ball drawn from it is red. Find the probability that it came from Bag II.
var: r | 2 | 5 | 1
var: b | 3 | 6 | 1
var: s | 3 | 6 | 1
var: c | 2 | 5 | 1
let: p1 = r/(r+b)
let: p2 = s/(s+c)
answer: (s/(s+c))/(r/(r+b)+s/(s+c))
dp: 3
step: $P(E_1)=P(E_2)=\dfrac12$; $P(A\mid E_1)=\dfrac{\,{{r}}\,}{\,{{r+b:0}}\,}$, $P(A\mid E_2)=\dfrac{\,{{s}}\,}{\,{{s+c:0}}\,}$
step: $P(E_2\mid A)=\dfrac{\frac12\cdot\frac{\,{{s}}\,}{\,{{s+c:0}}\,}}{\frac12\cdot\frac{\,{{r}}\,}{\,{{r+b:0}}\,}+\frac12\cdot\frac{\,{{s}}\,}{\,{{s+c:0}}\,}}=$ **{{p2/(p1+p2):3}}** (give the exact fraction in the exam)
```

```ng-derive
id: derive-truth-and-six
title: Bayes' theorem: a reported six
prompt: A man is known to speak the truth 3 times out of 4. He throws a die and reports that it is a six. Find the probability that it is actually a six.
time: 5
check: $E_1$: six occurs, $E_2$: six does not occur; $A$: the man reports a six | 1
check: $P(E_1)=\dfrac16$, $P(E_2)=\dfrac56$; $P(A\mid E_1)=\dfrac34$, $P(A\mid E_2)=\dfrac14$ | 1
check: Bayes' formula written and substituted: $\dfrac{\frac16\cdot\frac34}{\frac16\cdot\frac34+\frac56\cdot\frac14}$ | 1
check: $=\dfrac38$ | 1
```

```ng-draw
id: draw-bayes-tree
title: Draw the tree for the three machines
svg: ref: notes#ch13-bayes-tree
time: 3
```

**In one breath:** Name the causes $E_i$ and the observed event $A$, list $P(E_i)$ and $P(A|E_i)$, then (path of the cause asked) ÷ (sum of all paths).

## Random variable and its mean

A **random variable** $X$ attaches a number to each outcome of an experiment: the number of heads, the number of aces, the sum on two dice. Its **probability distribution** lists every value $x_i$ it can take with the probability $p_i$ of that value. Every $p_i\ge0$, and the probabilities add up to 1.

:::formula Mean of a random variable
$$E(X)=\mu=\sum x_ip_i=x_1p_1+x_2p_2+\dots+x_np_n,\qquad\text{where }\sum p_i=1$$
:::

The mean (or expectation) is the long-run average value of $X$.

:::skeleton Worked example: distribution and mean (3 marks)
*Two cards are drawn simultaneously from a well-shuffled pack of 52 cards. Find the probability distribution of the number of aces, and its mean.*

Let $X$ = number of aces; $X$ can be 0, 1 or 2 [½]

$P(X=0)=\dfrac{48}{52}\times\dfrac{47}{51}=\dfrac{188}{221}$; $P(X=1)=2\times\dfrac{4}{52}\times\dfrac{48}{51}=\dfrac{32}{221}$; $P(X=2)=\dfrac{4}{52}\times\dfrac{3}{51}=\dfrac{1}{221}$ [1½]

| $X$ | 0 | 1 | 2 |
|---|---|---|---|
| $P(X)$ | $\dfrac{188}{221}$ | $\dfrac{32}{221}$ | $\dfrac{1}{221}$ |

Mean $=\sum x_ip_i=0+\dfrac{32}{221}+\dfrac{2}{221}=\dfrac{34}{221}=\boxed{\dfrac{2}{13}}$ [1]
:::

:::tip Check the total
Add the probabilities before going on: $188+32+1=221$. If the total is not 1, there is a slip, most often a missing factor of 2 for "one ace, in either order".
:::

The fact that the probabilities add to 1 is also how you find an unknown constant. If $X$ takes the values $0,1,\dots,7$ with probabilities $0,\ k,\ 2k,\ 2k,\ 3k,\ k^2,\ 2k^2,\ 7k^2+k$, then $10k^2+9k=1$, so $(10k-1)(k+1)=0$ and $k=\dfrac{1}{10}$ (a probability cannot be negative). Then, for example, $P(X<3)=0+k+2k=\dfrac{3}{10}$.

In the 2026–27 syllabus, only the mean of a random variable is required. Variance, Bernoulli trials and the binomial distribution are not in boards.

```ng-fill
id: fill-heads-distribution
title: Number of heads in three tosses of a coin
cols: $X$ | 0 | 1 | 2 | 3 | Mean
row: $P(X)$ | [[$\dfrac18$]] | [[$\dfrac38$]] | [[$\dfrac38$]] | [[$\dfrac18$]] | [[$\dfrac32$]]
```

**In one breath:** List the values of $X$ with their probabilities (total 1); the mean is $\sum x_ip_i$. Use "total = 1" to find an unknown $k$.
