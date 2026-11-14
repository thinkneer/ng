// Subject formula sheet: every chapter's formulas.md stitched into one page, opened in the reader frame.
import { html, raw, icon, esc, emptyState } from '../ui.js';
import { data, routeFor } from '../data.js';

export async function formulaSheet({ cls, stream, sub }) {
  const chapters = data.allChapters(sub).filter((c) => c.items?.formulas);
  const back = routeFor(cls.id, stream.id, sub.id);
  return {
    title: `${sub.name} · formula sheet`, tab: 'subjects', fullscreen: true, unitColour: sub.colour,
    html: html`<div class="rd" id="rd" data-paper="auto" data-font="sans" data-mode="scroll" style="--unit:#${sub.colour};--rd-size:17px">
      <header class="rd__top"><a class="icon-btn" href="${back}" aria-label="Close">${raw(icon('x'))}</a><div class="rd__title truncate">${sub.name} · Formula sheet</div><div class="row" style="gap:0"><button class="icon-btn" type="button" data-contents aria-label="Chapters">${raw(icon('menu'))}</button><button class="icon-btn hide-phone" type="button" onclick="window.print()" aria-label="Print">${raw(icon('print'))}</button></div></header>
      <div class="rd__stage"><article class="rd__book" id="rd-book">
        <div class="rd__unit">${sub.name} · ${cls.name}</div>
        <h1 class="rd__h1">Formula sheet</h1>
        <p class="t-2" style="font-family:var(--font-sans);font-size:var(--fs-subhead)">All chapters, one page. Read it the day before the paper; recall the lines from each chapter's Must know tab.</p>
        <div id="fs-content">${chapters.length ? raw(chapters.map((c) => `<section id="fs-${c.id}" data-colour="${c.unitObj.colour}"><h2 class="rd__divider" style="color:#${c.unitObj.colour}">${c.number}. ${esc(c.title)}</h2><div class="skeleton" style="height:4rem"></div></section>`).join('')) : emptyState({ icon: 'formula', title: 'No formula sections yet' })}</div>
      </article></div>
    </div>`,
    async mount(el) {
      if (!chapters.length) return;
      const { renderMarkdown } = await import('../markdown.js');
      for (const c of chapters) {
        const sec = el.querySelector(`#fs-${CSS.escape(c.id)}`);
        const src = await data.formulas(sub, c.id);
        const node = await renderMarkdown(src || '', { unitColour: c.unitObj.colour });
        sec.querySelector('.skeleton')?.remove(); sec.appendChild(node);
      }
      el.querySelector('[data-contents]')?.addEventListener('click', async () => {
        const { openSheet } = await import('../ui.js');
        const s = openSheet({ title: 'Chapters', content: `<div class="list">${chapters.map((c) => `<button class="list__item has-leading" type="button" data-id="fs-${c.id}"><span class="list__leading" style="--unit:#${c.unitObj.colour}">${c.number}</span><span class="list__body"><span class="list__title">${esc(c.title)}</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></button>`).join('')}</div>` });
        s.body.addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (!b) return; s.close(); setTimeout(() => el.querySelector('#' + b.dataset.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); });
      });
    },
  };
}
