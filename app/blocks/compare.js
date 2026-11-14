// ng-compare: "differentiate between" in one place. Side by side table, or one side at a time
// with the other hidden so you can say it before you look.
import { mdInline, esc, haptic } from './kit.js';

export async function render(body, spec) {
  const heads = await Promise.all(spec.heads.map(mdInline));
  const rows = await Promise.all(spec.rows.map((r) => Promise.all(r.map(mdInline))));
  const views = [['both', 'Side by side'], ...heads.map((h, k) => [String(k), spec.heads[k]]), ['quiz', 'Cover one side']];
  body.innerHTML = `<div class="ngc" data-view="both">
      <div class="ngd__modes" role="tablist" aria-label="View">${views.map(([k, l], j) => `<button class="ngd__mode" type="button" role="tab" data-v="${k}" aria-selected="${j === 0}">${esc(l)}</button>`).join('')}</div>
      <div class="ngc__wrap"><table class="ngc__table"><thead><tr><th scope="col"></th>${heads.map((h, k) => `<th scope="col" data-col="${k}">${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((r) => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map((c, k) => `<td data-col="${k}"><span class="ngc__cell">${c}</span></td>`).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="ngc__hint t-footnote t-2" hidden>Say the hidden side out loud, then tap a cell to check.</p>
    </div>`;
  const root = body.querySelector('.ngc');
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-v]');
    if (b) {
      root.dataset.view = b.dataset.v; root.querySelectorAll('[data-v]').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
      root.querySelector('.ngc__hint').hidden = b.dataset.v !== 'quiz';
      root.querySelectorAll('td.is-open').forEach((td) => td.classList.remove('is-open'));
      haptic(); return;
    }
    const td = e.target.closest('td'); if (td && root.dataset.view === 'quiz') { td.classList.add('is-open'); haptic(); }
  });
}
