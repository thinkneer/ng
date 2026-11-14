# Ch 13 · Probability — formulas and key facts

## Conditional probability

:::formula Conditional probability
$P(E|F)=\dfrac{P(E\cap F)}{P(F)}$, $P(F)\ne0$   (equally likely outcomes: $\dfrac{n(E\cap F)}{n(F)}$)
:::

- $P(S|F)=P(F|F)=1$;  $P(E'|F)=1-P(E|F)$.
- $P((A\cup B)|F)=P(A|F)+P(B|F)-P((A\cap B)|F)$.

## Multiplication and independence

:::formula Multiplication theorem
$P(E\cap F)=P(E)\,P(F|E)=P(F)\,P(E|F)$<br>
$P(E\cap F\cap G)=P(E)\,P(F|E)\,P(G|E\cap F)$
:::

:::formula Independent events
$P(E\cap F)=P(E)\,P(F)$, equivalently $P(E|F)=P(E)$ and $P(F|E)=P(F)$<br>
Then $E,F'$; $E',F$; $E',F'$ are also independent.
:::

| For independent $A$, $B$ | Probability |
|---|---|
| both occur | $P(A)P(B)$ |
| at least one occurs | $1-P(A')P(B')$ |
| exactly one occurs | $P(A)P(B')+P(A')P(B)$ |
| neither occurs | $P(A')P(B')$ |

Mutually exclusive: $P(A\cap B)=0$. Independent: $P(A\cap B)=P(A)P(B)$. Not the same thing.

## Total probability and Bayes' theorem

$E_1,\dots,E_n$ form a partition of the sample space (mutually exclusive, exhaustive, non-zero probabilities).

:::formula Theorem of total probability
$P(A)=\sum\limits_{j=1}^{n}P(E_j)\,P(A|E_j)$
:::

:::formula Bayes' theorem
$P(E_i|A)=\dfrac{P(E_i)\,P(A|E_i)}{\sum\limits_{j=1}^{n}P(E_j)\,P(A|E_j)}$
:::

## Random variable

:::formula Probability distribution and mean
$X$: $x_1,x_2,\dots,x_n$ with probabilities $p_1,p_2,\dots,p_n$;  $p_i\ge0$,  $\sum p_i=1$<br>
Mean: $E(X)=\mu=\sum x_ip_i$
:::

## Useful from Class 11

- $P(A\cup B)=P(A)+P(B)-P(A\cap B)$;  $P(A')=1-P(A)$.
- $P(A'\cap B')=1-P(A\cup B)$;  $P(A\cap B')=P(A)-P(A\cap B)$.
- Pack of 52 cards: 4 suits of 13; 26 red, 26 black; 4 aces, 4 kings; 12 face cards.
- Two dice: 36 outcomes. Three coins: 8 outcomes.

Not in boards 2026–27: variance and standard deviation of a random variable, Bernoulli trials, binomial distribution.
