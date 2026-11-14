// Subject formula sheet: every chapter's formulas.md stitched into one page, opened in the reader frame.
// Two extras for remembering: "Drill formulas" (recall session of the subject's formula cards) and
// "Boxes only" (hides the prose, shows just the formula boxes — for the night before).
import { html, raw, icon, esc, emptyState, haptic } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';

export async function formulaSheet({ cls, stream, sub }) {
  const chapters = data.allChapters(sub).filter((c) => c.items?.formulas);
  const back = routeFor(cls.id, stream.id, sub.id);
  const boxesOnly = !!store.get('formulas.boxesOnly', false);
  return {
    title: `${sub.name} · formula sheet`, tab: 'subjects', fullscreen: true, unitColour: sub.colour,
    html: html`<div class="rd${boxesOnly ? ' is-boxes' : ''}" id="rd" data-paper="auto" data-font="sans" data-mode="scroll" style="--unit:#${sub.colour};--rd-size:17px">
      <header class="rd__top"><a class="icon-btn" href="${back}" aria-label="Close">${raw(icon('x'))}</a><div class="rd__title truncate">${sub.name} · Formula sheet</div><div class="row" style="gap:0"><button class="icon-btn" type="button" data-contents aria-label="Chapters">${raw(icon('menu'))}</button><button class="icon-btn hide-phone" type="button" onclick="window.print()" aria-label="Print">${raw(icon('print'))}</button></div></header>
      <div class="rd__stage"><article class="rd__book" id="rd-book">
        <div class="rd__unit">${sub.name} · ${cls.name}</div>
        <h1 class="rd__h1">Formula sheet</h1>
        <div class="fs-tools" role="group" aria-label="Formula tools">
          <a class="btn btn--unit" href="${back}/formulas/drill" style="--unit:#${sub.colour}">${raw(icon('bolt'))} Drill formulas</a>
          <button class="fs-toggle" type="button" role="switch" aria-checked="${boxesOnly}" data-boxes><span class="switch" aria-hidden="true"></span><span>Boxes only</span></button>
        </div>
        <p class="t-2 fs-intro" id="fs-count" style="font-family:var(--font-sans);font-size:var(--fs-subhead)">All chapters, one page. Read it the day before the paper; drill the boxes until they come without looking.</p>
        <div id="fs-content">${chapters.length ? raw(chapters.map((c) => `<section id="fs-${c.id}" data-colour="${c.unitObj.colour}"><h2 class="rd__divider" style="color:#${c.unitObj.colour}">${c.number}. ${esc(c.title)}</h2><div class="skeleton" style="height:4rem"></div></section>`).join('')) : emptyState({ icon: 'formula', title: 'No formula sections yet' })}</div>
      </article></div>
    </div>`,
    async mount(el) {
      const rd = el.querySelector('#rd');
      const sw = el.querySelector('[data-boxes]');
      sw.addEventListener('click', () => {
        const on = !rd.classList.contains('is-boxes');
        rd.classList.toggle('is-boxes', on); sw.setAttribute('aria-checked', String(on)); sw.querySelector('.switch').setAttribute('aria-checked', String(on));
        store.set('formulas.boxesOnly', on); haptic();
      });
      sw.querySelector('.switch').setAttribute('aria-checked', String(boxesOnly));
      // how many formula cards this subject has, and how many are due
      import('./recall.js').then(async ({ formulaCards }) => {
        const { cardState, isDue } = await import('../recall.js');
        const cards = await formulaCards(sub);
        if (!cards.length) return;
        const due = cards.filter((c) => isDue(c.id)).length, seen = cards.filter((c) => cardState(c.id)).length;
        const p = el.querySelector('#fs-count');
        if (p) p.insertAdjacentHTML('beforeend', ` <span class="t-3">${cards.length} formula cards${due ? ` · <strong>${due} due today</strong>` : seen ? ` · ${seen} on your schedule` : ''}.</span>`);
      }).catch(() => {});
      if (!chapters.length) return;
      const { renderMarkdown } = await import('../markdown.js');
      for (const c of chapters) {
        const sec = el.querySelector(`#fs-${CSS.escape(c.id)}`);
        const src = await data.formulas(sub, c.id);
        const node = await renderMarkdown(src || '', { unitColour: c.unitObj.colour });
        sec.querySelector('.skeleton')?.remove(); sec.appendChild(node);
        for (const h of node.querySelectorAll(':scope > h2, :scope > h3')) if (h.nextElementSibling?.classList.contains('box--formula')) h.classList.add('fs-keep'); // headings that name a box stay in Boxes only
        const { attach } = await import('../highlights.js'); attach(node, `${sub.id}/${c.id}/formulas`);
      }
      el.querySelector('[data-contents]')?.addEventListener('click', async () => {
        const { openSheet } = await import('../ui.js');
        const s = openSheet({ title: 'Chapters', content: `<div class="list">${chapters.map((c) => `<button class="list__item has-leading" type="button" data-id="fs-${c.id}"><span class="list__leading" style="--unit:#${c.unitObj.colour}">${c.number}</span><span class="list__body"><span class="list__title">${esc(c.title)}</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></button>`).join('')}</div>` });
        s.body.addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (!b) return; s.close(); setTimeout(() => el.querySelector('#' + b.dataset.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); });
      });
    },
  };
}
