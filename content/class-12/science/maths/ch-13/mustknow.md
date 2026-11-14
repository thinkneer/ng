# Ch 13 · Probability — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ asked in most years · ★★ often · ★ sometimes. Marks in square brackets.

Type tags: `S` solve / find · `MCQ` 1-mark objective / A–R · `C` case study

1. ★★★ `S` `C` Bayes' theorem: bags, machines, suppliers, insurance, test results. [3–5, or a 4-mark case study]
2. ★★★ `S` Probability distribution of a random variable and its mean. [2–3]
3. ★★ `S` Independent events: "problem is solved", "exactly one", "at least one". [2–3]
4. ★★ `S` Conditional probability from a reduced sample space (dice, cards, children). [2]
5. ★★ `MCQ` $P(A|B)$, $P(A\cap B)$, $P(A\cup B)$ from given values; independent versus mutually exclusive. [1]
6. ★★ `S` Find $k$ in a probability distribution, then a probability such as $P(X<3)$. [2–3]

## Must-know lines and definitions

- **Conditional probability:** probability of $E$ when $F$ is known to have occurred.
- **Independent events:** the occurrence of one does not change the probability of the other.
- **Mutually exclusive events:** cannot occur together, so $P(A\cap B)=0$.
- **Partition of a sample space:** events that are mutually exclusive, exhaustive and each non-zero.
- **Theorem of total probability:** finds the probability of a result from all its causes.
- **Bayes' theorem:** finds the probability of a cause, given the result.
- **Random variable:** a real-valued function on the sample space.
- **Probability distribution:** the values of $X$ with their probabilities, which total 1.
- **Mean or expectation of $X$:** the weighted average $\sum x_ip_i$.
- **Not in boards 2026–27:** variance, Bernoulli trials, binomial distribution.

## Key formulas

:::formula Conditional probability
$P(E|F)=\dfrac{P(E\cap F)}{P(F)}$, $P(F)\ne0$
:::

:::formula Multiplication theorem
$P(E\cap F)=P(E)\,P(F|E)=P(F)\,P(E|F)$
:::

:::formula Condition for independent events
$P(E\cap F)=P(E)\,P(F)$
:::

:::formula Theorem of total probability
$P(A)=P(E_1)P(A|E_1)+P(E_2)P(A|E_2)+\dots+P(E_n)P(A|E_n)$
:::

:::formula Bayes' theorem
$P(E_i|A)=\dfrac{P(E_i)P(A|E_i)}{\sum\limits_{j=1}^{n}P(E_j)P(A|E_j)}$
:::

:::formula Mean of a random variable
$E(X)=\sum x_ip_i$
:::

:::formula Probability of at least one (independent events)
$P(A\cup B)=1-P(A')P(B')$
:::

:::formula Probability of exactly one (independent events)
$P(A)P(B')+P(A')P(B)$
:::

:::formula Addition theorem
$P(A\cup B)=P(A)+P(B)-P(A\cap B)$
:::

:::formula Complement in conditional probability
$P(E'|F)=1-P(E|F)$
:::

## Answer skeletons

Step marks in square brackets are the usual CBSE split (estimates).

:::skeleton S · Bayes' theorem (5 marks)
Define $E_1,E_2,\dots$ and the observed event $A$ in words [1] → list $P(E_i)$ and $P(A|E_i)$ [1] → write Bayes' formula [1] → substitute [1] → simplify to a fraction [1]. In a 3-mark version: events and probabilities [1], formula with substitution [1], answer [1].
:::

:::skeleton S · Probability distribution and mean (3 marks)
Define $X$ and list its values [½] → probability of each value [1½] → table (check total is 1) and mean $\sum x_ip_i$ [1].
:::

:::skeleton S · Independent events: solved / exactly one (3 marks)
Write $P(A)$, $P(B)$ and the complements [½] → $P(\text{solved})=1-P(A')P(B')$ [1½] → $P(\text{exactly one})=P(A)P(B')+P(A')P(B)$ [1].
:::

:::skeleton S · Conditional probability by listing (2 marks)
List $F$ and $E\cap F$ [1] → $P(E|F)=\dfrac{n(E\cap F)}{n(F)}$ [1].
:::

## Quick 1-mark facts (MCQ, A–R)

- If $A$ and $B$ are independent: $P(A|B)=P(A)$.
- If $A$ and $B$ are independent: so are $A'$ and $B'$.
- If $A\subset B$ and $P(B)\ne0$: $P(B|A)=1$.
- If $A$ and $B$ are mutually exclusive: $P(A|B)=0$.
- $P(A|A)$, for $P(A)\ne0$: equals 1.
- Mutually exclusive events with non-zero probabilities: are never independent.
- $P(A)=0.8$, $P(B|A)=0.4$ gives: $P(A\cap B)=0.32$.
- Independent $A$, $B$ with $P(A)=0.3$, $P(B)=0.4$: $P(A\cup B)=0.58$.
- Two children, at least one boy: $P(\text{both boys})=\dfrac13$.
- Mean number of heads in three tosses of a coin: $\dfrac32$.
- Sum of all probabilities in a distribution: exactly 1.

## Mark-losing traps

:::tip Events not defined
Define $E_1$, $E_2$, … and $A$ in words first; that line carries a mark.
:::

:::tip Reversed condition
"4% of B's output is defective" is $P(D|E_2)$, not $P(E_2|D)$.
:::

:::tip Independent versus mutually exclusive
Independent: $P(A\cap B)=P(A)P(B)$. Mutually exclusive: $P(A\cap B)=0$.
:::

:::tip With or without replacement
Without replacement the second probability changes: $\dfrac{10}{15}\times\dfrac{9}{14}$, not $\left(\dfrac{10}{15}\right)^2$.
:::

:::tip Total not 1
Add the probabilities in the table; a missing "either order" factor of 2 shows up here.
:::

:::tip Unsimplified answer
Leave the final probability as a fraction in lowest terms, such as $\dfrac{28}{69}$.
:::
