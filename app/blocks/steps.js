// ng-steps: one tap reveals the next stage with its caption; Replay starts again.
// In the drawing, elements carrying data-step="k" appear at step k (class="flow" on a dashed path animates it).
import { svgOf, md, icon, haptic } from './kit.js';

export async function render(body, spec, ctx) {
  const svg = spec.svg ? await svgOf(spec, ctx) : '';
  const caps = await Promise.all(spec.steps.map((s) => md(s)));
  const n = caps.length;
  body.innerHTML = `<div class="ngs">
      ${svg ? `<button class="ngs__art" type="button" aria-label="Next step">${svg}</button>` : ''}
      <ol class="ngs__list">${caps.map((c, k) => `<li data-k="${k + 1}"><span class="ngs__n">${k + 1}</span><div class="ngs__cap">${c}</div></li>`).join('')}</ol>
      <div class="ngb__bar"><button class="btn btn--plain btn--sm" type="button" data-back aria-label="Previous step">${icon('chevronLeft')}</button><span class="t-footnote t-2 tnum" data-pos aria-live="polite"></span><span class="grow"></span><button class="btn btn--plain btn--sm" type="button" data-replay>${icon('replay')} Replay</button><button class="btn btn--unit btn--sm" type="button" data-next>Next ${icon('chevronRight')}</button></div>
    </div>`;
  const root = body.querySelector('.ngs');
  const items = [...root.querySelectorAll('.ngs__list li')];
  const layers = [...root.querySelectorAll('[data-step]')];
  let k = 1;
  const show = () => {
    for (const el of layers) { const s = Number(el.getAttribute('data-step')); el.classList.toggle('ngs-hide', s > k); el.classList.toggle('ngs-now', s === k); }
    items.forEach((li, j) => { li.classList.toggle('is-hidden', j + 1 > k); li.classList.toggle('is-now', j + 1 === k); });
    root.querySelector('[data-pos]').textContent = `Step ${k} of ${n}`;
    root.querySelector('[data-next]').disabled = k >= n;
    root.querySelector('[data-back]').disabled = k <= 1;
  };
  const go = (d) => { const j = Math.min(n, Math.max(1, k + d)); if (j !== k) { k = j; show(); haptic(); } };
  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-next]') || e.target.closest('.ngs__art')) go(1);
    else if (e.target.closest('[data-back]')) go(-1);
    else if (e.target.closest('[data-replay]')) { k = 1; show(); haptic(); }
  });
  show();
}
