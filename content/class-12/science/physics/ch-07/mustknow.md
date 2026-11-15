# Ch 7 · Alternating Current — must know

## Most-repeated board questions

Stars are estimates, not exact counts: ★★★ most years · ★★ often · ★ sometimes. Type: `Dv` derivation · `N` numerical · `Df` definition · `G` graph/diagram · `R` reason.

1. ★★★ `Dv` `G` Series LCR: phasor diagram, impedance, phase angle; resonance and its curve. [3–5]
2. ★★★ `N` LCR numerical: $Z$, $I$, $\cos\phi$, power, resonant frequency. [2–3]
3. ★★★ `Dv` Transformer: principle, working, turns ratio, four energy losses and remedies. [3–5]
4. ★★ `Df` Power factor; wattless current; why pure L or C uses no power. [1–2]
5. ★★ `Dv` AC generator: labelled diagram, emf $NBA\omega\sin\omega t$. [3]
6. ★★ `G` Phase relations for pure R, L, C; $X_L$ and $X_C$ against frequency. [1–2]

## Must-know lines and definitions

- **rms value of AC:** DC that produces the same heat in a resistor in the same time.
- **Average of AC over a full cycle:** zero.
- **Inductive reactance:** opposition of an inductor to AC, $X_L=\omega L$.
- **Capacitive reactance:** opposition of a capacitor to AC, $X_C=1/\omega C$.
- **Pure inductor:** current lags voltage by π/2.
- **Pure capacitor:** current leads voltage by π/2.
- **Impedance of an LCR circuit:** total opposition of an LCR circuit to AC, $Z=\sqrt{R^2+(X_L-X_C)^2}$.
- **Resonance condition:** $X_L=X_C$; impedance minimum ($=R$), current maximum.
- **Power factor:** $\cos\phi=R/Z$; ratio of true power to apparent power.
- **Wattless current:** current component $I\sin\phi$ at 90° to voltage; carries no power.
- **AC generator:** converts mechanical energy into electrical energy by EM induction.
- **Working of a transformer:** changes AC voltage using mutual induction; works only on AC.
- **Step-up transformer:** more turns in the secondary; raises voltage, lowers current.

## Key formulas

:::formula rms values
$I_\text{rms}=\dfrac{i_m}{\sqrt2}$, $V_\text{rms}=\dfrac{v_m}{\sqrt2}$.
:::

:::formula Inductive and capacitive reactance
$X_L=\omega L=2\pi\nu L$; $X_C=\dfrac{1}{\omega C}=\dfrac{1}{2\pi\nu C}$.
:::

:::formula Impedance and phase angle
$Z=\sqrt{R^2+(X_L-X_C)^2}$; $\tan\phi=\dfrac{X_L-X_C}{R}$.
:::

:::formula Resonant frequency
$\omega_0=\dfrac{1}{\sqrt{LC}}$, $\nu_0=\dfrac{1}{2\pi\sqrt{LC}}$; $Z=R$.
:::

:::formula Average power in AC
$P=V_\text{rms}I_\text{rms}\cos\phi$; power factor $\cos\phi=R/Z$.
:::

:::formula AC generator emf
$\varepsilon=NBA\omega\sin\omega t$; peak $NBA\omega$.
:::

:::formula Ideal transformer
$\dfrac{V_s}{V_p}=\dfrac{N_s}{N_p}=\dfrac{I_p}{I_s}$.
:::

## Answer skeletons

:::skeleton Dv · LCR impedance (3 marks)
Phasor diagram with I reference, $V_R$, $V_L$, $V_C$ [1] → $V^2=V_R^2+(V_L-V_C)^2$ [1] → $Z$ and $\tan\phi$ [1]
:::

:::skeleton Dv · Transformer (5 marks)
Labelled diagram: laminated core, primary, secondary [1] → principle: mutual induction [½] → $\varepsilon_p=-N_p\,d\Phi/dt$, $\varepsilon_s=-N_s\,d\Phi/dt$ ⇒ $V_s/V_p=N_s/N_p$ [1] → ideal: $V_pI_p=V_sI_s$ ⇒ $I_p/I_s=N_s/N_p$ [½] → four losses with remedies [2]
:::

:::skeleton Dv · AC generator (3 marks)
Labelled diagram: coil, poles, slip rings, brushes [1] → $\Phi=NBA\cos\omega t$ [½] → $\varepsilon=-d\Phi/dt=NBA\omega\sin\omega t$ [1] → peak $NBA\omega$, when plane ∥ B [½]
:::

:::skeleton N · LCR numerical (3 marks)
$X_L$, $X_C$ [½] → $Z$ [1] → $I=V/Z$ [½] → $\cos\phi=R/Z$, $P=VI\cos\phi$ [1]
:::

## Quick 1-mark facts (MCQ, A–R)

- **220 V mains peak value:** about 311 V.
- **Capacitor in DC:** blocks it ($X_C=\infty$).
- **Inductor in DC:** $X_L=0$, only its resistance opposes.
- **Frequency doubled:** $X_L$ doubles, $X_C$ halves.
- **Power factor of pure R / pure L or C:** 1 / 0.
- **LCR at resonance:** current in phase with voltage, power factor 1.
- **Smaller R in LCR:** sharper resonance peak.
- **Resonance in an RC or RL circuit:** not possible.
- **Transformer on DC:** no output (no changing flux).
- **Why laminated core:** reduces eddy-current loss.
- **Why high-voltage transmission:** lower current, smaller $I^2R$ loss.

## Mark-losing traps

:::tip ELI the ICE man
In L, voltage leads current; in C, current leads voltage. Swapping them loses the phasor marks.
:::

:::tip Power needs cos φ
Average power is $VI\cos\phi$ (equals $I^2R$), not $VI$.
:::

:::tip Peak versus rms
Meters and quoted mains values are rms; convert peak with $\sqrt2$ before using.
:::

:::tip Generator emf maximum
Maximum emf when the plane of the coil is parallel to B (flux zero), not perpendicular.
:::

:::tip Out of syllabus
LC oscillations are not in boards; quality factor is not needed either.
:::
