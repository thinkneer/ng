// Exam eve: one calm scroll per subject — every chapter's Must-know lines, formula boxes and traps, in the reader frame.
// Route: #/<class>/<stream>/<subject>/exam-eve. Built from each chapter's mustknow.md; highlights work (layer …/exameve).
import { html, raw, icon, esc, emptyState } from '../ui.js';
import { data, routeFor } from '../data.js';

const KEEP = { 'Must-know lines and definitions': 'lines', 'Key formulas': 'boxes', 'Mark-losing traps': 'all' };

/** Pick the exam-eve parts out of a mustknow.md: lines, formula boxes, traps. */
export function examEveMarkdown(src) {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const out = []; let mode = null, i = 0;
  while (i < lines.length) {
    if (/^```/.test(lines[i])) { i++; while (i < lines.length && !/^```\s*$/.test(lines[i])) i++; i++; continue; } // blocks stay in Read
    const h = lines[i].match(/^##\s+(.+)$/);
    if (h) { const name = h[1].trim(); mode = KEEP[name] || null; if (mode) out.push(`### ${name.replace('Must-know lines and definitions', 'Must know').replace('Key formulas', 'Formulas').replace('Mark-losing traps', 'Traps')}`); i++; continue; }
    if (!mode) { i++; continue; }
    const d = lines[i].match(/^:::(tip|formula|skeleton)\s*(.*)$/);
    if (d) {
      const block = [lines[i++]]; while (i < lines.length && !/^:::\s*$/.test(lines[i])) block.push(lines[i++]); block.push(':::'); i++;
      if (mode === 'all' || (mode === 'boxes' && d[1] === 'formula')) out.push(block.join('\n'), '');
      continue;
    }
    if (mode !== 'boxes') out.push(lines[i]);
    i++;
  }
  return out.join('\n').trim();
}

export async function examEve({ cls, stream, sub }) {
  const chapters = data.allChapters(sub).filter((c) => c.items?.mustknow);
  const back = routeFor(cls.id, stream.id, sub.id);
  return {
    title: `${sub.name} · exam eve`, tab: 'subjects', fullscreen: true, unitColour: sub.colour,
    html: html`<div class="rd" id="rd" data-paper="auto" data-font="sans" data-mode="scroll" style="--unit:#${sub.colour};--rd-size:17px">
      <header class="rd__top"><a class="icon-btn" href="${back}" aria-label="Close">${raw(icon('x'))}</a><div class="rd__title truncate">${sub.name} · Exam eve</div><div class="row" style="gap:0"><button class="icon-btn" type="button" data-contents aria-label="Chapters">${raw(icon('menu'))}</button><button class="icon-btn hide-phone" type="button" onclick="window.print()" aria-label="Print">${raw(icon('print'))}</button></div></header>
      <div class="rd__stage"><article class="rd__book" id="rd-book">
        <div class="rd__unit">${sub.name} · ${cls.name}</div>
        <h1 class="rd__h1">Exam eve</h1>
        <p class="t-2" style="font-family:var(--font-sans);font-size:var(--fs-subhead)">Every chapter's must-know lines, formula boxes and traps, in one slow read. Nothing new tonight: just the lines you already know, once more. Highlight anything that still feels shaky.</p>
        <div id="ee-content">${chapters.length ? raw(chapters.map((c) => `<section id="ee-${c.id}" data-colour="${c.unitObj.colour}"><h2 class="rd__divider" style="color:#${c.unitObj.colour}">${c.number}. ${esc(c.title)}</h2><div class="skeleton" style="height:4rem"></div></section>`).join('')) : emptyState({ icon: 'bolt', title: 'No must-know lines yet', text: 'This page builds itself from each chapter’s Must know as they are written.' })}</div>
      </article></div>
    </div>`,
    async mount(el) {
      if (!chapters.length) return;
      const { renderMarkdown } = await import('../markdown.js');
      const { attach } = await import('../highlights.js');
      for (const c of chapters) {
        const sec = el.querySelector(`#ee-${CSS.escape(c.id)}`);
        const src = await data.mustknow(sub, c.id);
        const node = await renderMarkdown(examEveMarkdown(src || ''), { unitColour: c.unitObj.colour });
        sec.querySelector('.skeleton')?.remove(); sec.appendChild(node);
        attach(node, `${sub.id}/${c.id}/exameve`);
      }
      el.querySelector('[data-contents]')?.addEventListener('click', async () => {
        const { openSheet } = await import('../ui.js');
        const s = openSheet({ title: 'Chapters', content: `<div class="list">${chapters.map((c) => `<button class="list__item has-leading" type="button" data-id="ee-${c.id}"><span class="list__leading" style="--unit:#${c.unitObj.colour}">${c.number}</span><span class="list__body"><span class="list__title">${esc(c.title)}</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></button>`).join('')}</div>` });
        s.body.addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (!b) return; s.close(); setTimeout(() => el.querySelector('#' + b.dataset.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); });
      });
    },
  };
}
