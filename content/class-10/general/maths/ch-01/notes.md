# Ch 1 · Real Numbers

Every whole number bigger than 1 is built from primes in exactly one way, and some numbers, such as $\sqrt2$, can never be written as a fraction. Those two facts are the whole chapter. It carries about 6 marks, the questions repeat year after year, and the proofs are short enough to learn by writing them out twice.

## Numbers with a secret: where this chapter comes from

About 2 500 years ago the followers of Pythagoras in Greece believed that every length could be written as a ratio of two whole numbers. Then someone looked at the diagonal of a square of side 1. By the Pythagoras theorem its length is $\sqrt2$, and no fraction equals it exactly. A well-known legend, probably improved in the retelling, says that the man who revealed this, Hippasus, was drowned for it. True or not, the discovery was real: there are numbers that are not fractions. You will prove it yourself in this chapter.

The other half of the chapter, prime factorisation, sounds like a primary-school skill, but it protects every online payment. Multiplying two very large primes is quick; finding those two primes again from the product is so slow that no computer can do it in a reasonable time. Much of today's encryption is built on that difficulty.

**In one breath:** Primes are the building blocks of whole numbers, and some numbers are not fractions at all. Both ideas are old, and both are still used.

## Every number is a product of primes

A **prime** number has exactly two factors, 1 and itself: 2, 3, 5, 7, 11, … A **composite** number has more than two factors. The number 1 is neither.

Take 140 and keep splitting it until only primes are left.

```ng-figure
id: factor-tree
title: Factor tree of 140
svg:
<svg viewBox="0 0 320 196" role="img" aria-label="Factor tree of 140: 140 splits into 2 and 70, 70 into 2 and 35, 35 into 5 and 7" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M142,34 L108,56 M158,34 L192,56 M192,76 L158,98 M208,76 L242,98 M242,118 L208,140 M258,118 L288,140" stroke-width="1.2"/><text x="150" y="31" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">140</text><circle cx="100" cy="68" r="15" class="u" stroke-width="2"/><text x="100" y="73" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">2</text><text x="200" y="73" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">70</text><circle cx="150" cy="110" r="15" class="u" stroke-width="2"/><text x="150" y="115" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">2</text><text x="250" y="115" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">35</text><circle cx="200" cy="152" r="15" class="u" stroke-width="2"/><text x="200" y="157" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">5</text><circle cx="296" cy="152" r="15" class="u" stroke-width="2"/><text x="296" y="157" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">7</text><text x="74" y="150" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">140 = 2² × 5 × 7</text></svg>
caption: Split until every branch ends in a prime (circled). 140 = 2 × 2 × 5 × 7.
part: 150, 26 | The number | Start with the composite number at the top.
part: 100, 68 | First prime factor | Divide by the smallest prime that goes: 140 = 2 × 70.
part: 200, 68 | What is left | 70 is still composite, so split again.
part: 296, 152 | Last prime | Stop when both branches are prime.
part: 74, 150 | Prime factorisation | Write equal primes as powers, smallest prime first.
```

You could have started with $140=10\times14$ or $140=4\times35$. The tree looks different, but the primes at the ends are the same: two 2s, one 5, one 7. That is the main theorem of the chapter.

:::formula Fundamental Theorem of Arithmetic
Every composite number can be written as a product of primes, and this factorisation is **unique**, apart from the order of the primes.
:::

The word that earns the mark is *unique*. It lets you argue about what a number can and cannot be.

:::skeleton Worked example: can a power end in zero? (2 marks)
*Check whether $6^n$ can end with the digit 0 for any natural number $n$.*

A number ending in 0 is divisible by 10, so its prime factorisation must contain both 2 and 5. [½]

$6^n=(2\times3)^n=2^n\times3^n$: the only primes are 2 and 3. [½]

By the uniqueness of prime factorisation, 5 can never be a factor of $6^n$. [½]

So $6^n$ cannot end with the digit 0. [½]
:::

:::skeleton Worked example: show a number is composite (2 marks)
*Explain why $7\times11\times13+13$ is a composite number.*

$7\times11\times13+13=13\,(7\times11+1)=13\times78$ [1]

It has factors other than 1 and itself (13 and 78), so it is composite. [1]
:::

```ng-draw
id: draw-factor-tree
title: Draw the factor tree of 140
svg: ref: notes#factor-tree
time: 2
```

```ng-explain
id: explain-unique-factorisation
prompt: In two lines, say what the Fundamental Theorem of Arithmetic states and what "unique" means in it.
lines: 2
```

**In one breath:** Every composite number breaks into primes in only one way. Use that uniqueness to say what primes a number can or cannot contain.

## HCF and LCM from prime factors

The **HCF** (highest common factor) is the largest number that divides all the given numbers. The **LCM** (least common multiple) is the smallest number that all of them divide.

Once the numbers are written as products of prime powers, both can be read off.

:::formula HCF and LCM by prime factorisation
**HCF** = product of the **smallest** power of each **common** prime.<br>
**LCM** = product of the **greatest** power of **every** prime that appears.
:::

```ng-mnemonic
id: hcf-humble-lcm-lavish
title: Which powers go where?
trick: **HCF is humble, LCM is lavish**
meaning: **HCF**: only the common primes, each with its smallest power.
meaning: **LCM**: every prime that appears anywhere, each with its greatest power.
prompt: Which primes and which powers make the HCF, and which make the LCM?
```

:::skeleton Worked example: HCF and LCM of two numbers (3 marks)
*Find the HCF and LCM of 96 and 404 by prime factorisation, and verify that HCF × LCM = product of the numbers.*

$96=2^5\times3$, $\quad404=2^2\times101$ [1]

HCF $=2^2=\boxed{4}$; LCM $=2^5\times3\times101=\boxed{9696}$ [1]

Check: HCF × LCM $=4\times9696=38784$ and $96\times404=38784$. ✓ [1]
:::

```ng-steps
id: steps-hcf-lcm
title: HCF and LCM in four steps
step: **Factorise** each number into primes and write equal primes as powers.
step: **HCF:** pick only the primes common to all the numbers, each with its smallest power, and multiply.
step: **LCM:** pick every prime that appears, each with its greatest power, and multiply.
step: **Check** (two numbers only): HCF × LCM must equal the product of the two numbers.
```

:::formula Product rule for two numbers
$$\text{HCF}(a,b)\times\text{LCM}(a,b)=a\times b$$
:::

:::tip Two numbers only
The product rule is **not** true for three numbers. For 6, 72 and 120 the HCF is 6 and the LCM is 360, but $6\times360$ is not $6\times72\times120$.
:::

:::skeleton Worked example: three numbers (3 marks)
*Find the HCF and LCM of 6, 72 and 120.*

$6=2\times3$, $\quad72=2^3\times3^2$, $\quad120=2^3\times3\times5$ [1½]

HCF $=2^1\times3^1=\boxed{6}$ [½]

LCM $=2^3\times3^2\times5=\boxed{360}$ [1]
:::

```ng-numerical
id: num-product-rule
title: Find the other number
question: The HCF of two numbers is {{h}} and their LCM is {{h*m*n}}. If one of the numbers is {{h*m}}, find the other.
var: h | 2 | 12 | 1
var: m | 3 | 7 | 2
var: n | 4 | 8 | 4
answer: h*n
dp: 0
tol: 1
step: HCF × LCM = product of the two numbers
step: Other number $=\dfrac{ {{h}}\times{{h*m*n}} }{ {{h*m}} }=$ **{{h*n}}**
```

```ng-fill
id: fill-hcf-lcm
title: HCF and LCM at a glance
cols: Numbers | HCF | LCM
row: 12 and 18 | [[6]] | [[36]]
row: 26 and 91 | [[13]] | [[182]]
row: 72 and 120 | [[24]] | [[360]]
row: 17 and 23 (both prime) | [[1]] | [[391]]
```

**In one breath:** Factorise into primes. HCF takes the smallest powers of the common primes; LCM takes the greatest powers of all the primes. For two numbers, HCF × LCM equals their product.

## HCF or LCM? Reading word problems

Word problems never say "find the HCF". They describe a situation, and you decide.

```ng-compare
id: hcf-vs-lcm
title: HCF or LCM?
cols: HCF | LCM
row: The question asks for | the largest, greatest, maximum | the smallest, least, "together again"
row: Typical story | equal groups, largest tile, longest tape | bells, traffic lights, runners on a track
row: Size of the answer | not bigger than the smallest number | not smaller than the largest number
```

:::skeleton Worked example: meeting again (2 marks)
*On a circular track Sonia takes 18 minutes for one round and Ravi takes 12 minutes. They start together from the same point in the same direction. After how many minutes will they next meet at the starting point?*

They are together at the start after a time that is a multiple of both 18 and 12, so the answer is the LCM. [½]

$18=2\times3^2$, $\quad12=2^2\times3$ [½]

LCM $=2^2\times3^2=\boxed{36\ \text{minutes}}$ [1]
:::

:::skeleton Worked example: a division with remainders (3 marks)
*Find the largest number that divides 70 and 125 leaving remainders 5 and 8 respectively.*

Remove the remainders: the number divides $70-5=65$ and $125-8=117$ exactly. [1]

$65=5\times13$, $\quad117=3^2\times13$ [1]

Required number = HCF $=\boxed{13}$ [1]
:::

:::tip Remainders first
If the question gives remainders, subtract them before you find the HCF.
:::

**In one breath:** "Largest that divides" means HCF; "smallest that is divisible" or "together again" means LCM. Subtract remainders first.

## Irrational numbers and the proof for root 2

A **rational** number can be written as $\dfrac pq$ with $p$, $q$ integers and $q\ne0$. An **irrational** number cannot. $\sqrt2$, $\sqrt3$, $\sqrt5$ and $\pi$ are irrational; $\sqrt4=2$ and $\sqrt{\tfrac{9}{16}}=\tfrac34$ are rational.

The proofs use one small fact, which you may quote:

:::formula Prime dividing a square
If a prime $p$ divides $a^2$, then $p$ divides $a$ ($a$ a positive integer).
:::

The method is **proof by contradiction**: assume the opposite of what you want, follow it honestly, and reach something impossible. Then the assumption must be false.

:::skeleton Proof that √2 is irrational (3 marks)
Assume, to the contrary, that $\sqrt2$ is rational. Then $\sqrt2=\dfrac ab$, where $a$ and $b$ are **coprime** integers and $b\ne0$. [1]

Squaring: $2b^2=a^2$. So 2 divides $a^2$, and therefore 2 divides $a$. Let $a=2c$. [1]

Then $2b^2=4c^2$, so $b^2=2c^2$: 2 divides $b^2$, and therefore 2 divides $b$. [½]

So $a$ and $b$ have 2 as a common factor, which contradicts that they are coprime. Hence $\sqrt2$ is irrational. [½]
:::

For $\sqrt3$ or $\sqrt5$ the proof is the same with 3 or 5 in place of 2.

```ng-derive
id: prove-root-2
title: Prove that √2 is irrational
prompt: Prove that $\sqrt2$ is an irrational number.
time: 5
check: Assume $\sqrt2=\dfrac ab$, with $a$, $b$ coprime integers, $b\ne0$ | 1
check: $2b^2=a^2$, so 2 divides $a^2$ and hence 2 divides $a$; write $a=2c$ | 1
check: $b^2=2c^2$, so 2 divides $b$ | 0.5
check: Contradiction with "coprime"; conclusion stated | 0.5
```

```ng-mnemonic
id: proof-four-moves
title: The four moves of the proof
trick: **A S D C: Assume, Square, Divide twice, Contradict**
meaning: **A**ssume it equals $\dfrac ab$ with $a$, $b$ coprime.
meaning: **S**quare both sides.
meaning: **D**ivide twice: the prime divides $a$, then it divides $b$.
meaning: **C**ontradict "coprime" and conclude.
prompt: What are the four moves in the proof that a square root is irrational?
```

:::tip The word that carries the proof
Write **coprime** (or "no common factor other than 1") in the first line. Without it there is nothing to contradict and the examiner cuts a mark.
:::

**In one breath:** Assume the root is $\dfrac ab$ in lowest terms, square, and show the prime divides both $a$ and $b$. That contradicts "lowest terms", so the root is irrational.

## Sums and products with an irrational number

Questions also ask about numbers like $3+2\sqrt5$. Here you are **given** that $\sqrt5$ is irrational, and the proof is shorter: isolate the root.

:::skeleton Worked example: a rational plus an irrational (2 marks)
*Given that $\sqrt5$ is irrational, prove that $3+2\sqrt5$ is irrational.*

Assume $3+2\sqrt5$ is rational, say $3+2\sqrt5=\dfrac ab$ with $a$, $b$ integers, $b\ne0$. [½]

Then $\sqrt5=\dfrac{a-3b}{2b}$. [½]

The right side is rational, so $\sqrt5$ would be rational, which contradicts the given fact. [½]

Hence $3+2\sqrt5$ is irrational. [½]
:::

Three results are worth knowing for 1-mark questions:

- rational + irrational = irrational, and rational − irrational = irrational;
- (non-zero rational) × irrational = irrational;
- irrational + irrational, or irrational × irrational, **may be rational**: $\sqrt2\times\sqrt2=2$ and $(2+\sqrt3)+(2-\sqrt3)=4$.

:::tip Simplify before you decide
$\dfrac{\sqrt{12}}{\sqrt3}=\sqrt4=2$ is rational, although it is written with roots. Always simplify first.
:::

**In one breath:** To show $a+b\sqrt p$ is irrational, assume it is rational and isolate the root: the root would then be rational, a contradiction.

## What is not in boards

Euclid's division lemma and algorithm, and the section on decimal expansions of rational numbers (terminating or recurring from the prime factors of the denominator), are not in the current book. Use prime factorisation for every HCF question.

**In one breath:** No Euclid's division algorithm, no decimal-expansion questions: only prime factorisation and irrationality proofs.
