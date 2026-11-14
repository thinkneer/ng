# Ch 14 · Semiconductor Electronics — formulas and key facts

## Bands and carriers

- Conductor: bands overlap. Insulator: $E_g>3$ eV (diamond 5.4 eV). Semiconductor: $E_g<3$ eV (Si 1.1 eV, Ge 0.7 eV).
- n-type: pentavalent donor (P, As, Sb), electrons majority. p-type: trivalent acceptor (B, Al, Ga, In), holes majority. Both electrically **neutral**.

:::formula Carriers
Intrinsic: $n_e=n_h=n_i$;   extrinsic: $n_en_h=n_i^2$;   $I=I_e+I_h$
:::

## p-n junction and diode

- Diffusion → depletion layer (immobile ions) → barrier potential (Si ≈ 0.7 V, Ge ≈ 0.3 V); drift balances diffusion at equilibrium.
- Forward bias: barrier and depletion width decrease; current in mA (majority carriers). Reverse bias: both increase; µA current (minority carriers); breakdown at high $V$.

:::formula Diode and rectifiers
Dynamic resistance $r_d=\dfrac{\Delta V}{\Delta I}$<br>
Half-wave: output frequency $=f$ (50 Hz);   full-wave (centre-tap): output $2f$ (100 Hz)
:::

- Capacitor filter smooths the ripple. $T$↑ → semiconductor conductivity ↑. Electrons are faster than holes ($\mu_e>\mu_h$).
- Not in boards: Zener diode, LED, photodiode, solar cell, transistors, logic gates.
