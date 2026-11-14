// ng-fill: a table with hidden cells ([[ … ]]). Say the answer, tap to reveal, mark yourself; a running score.
import { mdInline, icon, haptic } from './kit.js';

export async function render(body, spec) {
  const heads = await Promise.all(spec.heads.map(mdInline));
  const rows = await Promise.all(spec.rows.map((r) => Promise.all(r.map(async (c) => { const m = c.match(/^\[\[(.*)\]\]$/); return { hidden: !!m, html: await mdInline(m ? m[1] : c) }; }))));
  const n = rows.flat().filter((c) => c.hidden).length;
  body.innerHTML = `<div class="ngl">
      <div class="ngc__wrap"><table class="ngc__table ngl__table"><thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((c, k) => (c.hidden ? `<td class="ngl__cell"><button class="ngl__q" type="button" aria-label="Reveal">?</button><span class="ngl__ans">${c.html}</span><span class="ngl__mark"><button type="button" data-ok="1" aria-label="I knew it">${icon('check')}</button><button type="button" data-ok="0" aria-label="I missed it">${icon('x')}</button></span></td>` : k === 0 ? `<th scope="row">${c.html}</th>` : `<td>${c.html}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>
      <div class="ngb__bar"><strong class="tnum" data-score>0 / ${n} known</strong><span class="grow"></span><button class="btn btn--plain btn--sm" type="button" data-all>Show all</button><button class="btn btn--plain btn--sm" type="button" data-reset>${icon('replay')} Reset</button></div>
    </div>`;
  const root = body.querySelector('.ngl'); let known = 0;
  const upd = () => { root.querySelector('[data-score]').textContent = `${known} / ${n} known`; };
  root.addEventListener('click', (e) => {
    const q = e.target.closest('.ngl__q'); if (q) { q.closest('td').classList.add('is-open'); haptic(); return; }
    const ok = e.target.closest('[data-ok]');
    if (ok) { const td = ok.closest('td'); if (td.dataset.scored) return; td.dataset.scored = ok.dataset.ok; td.classList.add(ok.dataset.ok === '1' ? 'is-known' : 'is-missed'); if (ok.dataset.ok === '1') known++; upd(); haptic(ok.dataset.ok === '1' ? 'success' : 'medium'); return; }
    if (e.target.closest('[data-all]')) root.querySelectorAll('.ngl__cell').forEach((td) => td.classList.add('is-open'));
    if (e.target.closest('[data-reset]')) { root.querySelectorAll('.ngl__cell').forEach((td) => { td.className = 'ngl__cell'; delete td.dataset.scored; }); known = 0; upd(); }
  });
}
