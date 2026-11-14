// Practice on paper: one screen per chapter — the chapter's diagrams (Draw it), derivations and three fresh
// numericals, each with a Done tick; "Print worksheet" makes a clean A4: blank figures to label, derivation
// prompts, numericals and lined space, answers at the end. Route: …/<subject>/<chapter>/paper
import { html, raw, icon, esc, emptyState, haptic, ensureCss } from '../ui.js';
import { data, routeFor } from '../data.js';
import { extractBlocks, refId, normalise, viewBox, resolveRef, numericalEngine } from '../blocks/parse.js';
import { paperDone, setPaperDone, interpolate, num, head } from '../blocks/kit.js';
import { compile } from '../blocks/expr.js';

/** The paper items of a chapter source: figures to draw, derivations, numericals (x3 fresh). */
export function paperItems(src) {
  const blocks = extractBlocks(src).filter((b) => !b.errors.length && b.spec.id);
  const drawn = new Set(blocks.filter((b) => b.type === 'draw').map((b) => refId(b.spec.svg)).filter(Boolean));
  const figures = blocks.filter((b) => b.type === 'draw' || (b.type === 'figure' && !drawn.has(b.spec.id)));
  const derives = blocks.filter((b) => b.type === 'derive');
  const nums = blocks.filter((b) => b.type === 'numerical');
  const numericals = nums.length ? [0, 1, 2].map((k) => nums[k % nums.length]) : [];
  return { blocks, figures, derives, numericals };
}

export async function paperChapter({ cls, stream, sub, unit, ch }) {
  const base = routeFor(cls.id, stream.id, sub.id, ch.id);
  const key = `${sub.id}/${ch.id}`;
  const src = ch.items?.notes ? await data.notes(sub, ch.id) : '';
  const { blocks, figures, derives, numericals } = paperItems(src || '');
  const total = figures.length + derives.length + numericals.length;
  // blocks to mount: figures become draw pads (a figure block is drawn from its own svg)
  const list = [
    ...figures.map((b) => ({ type: 'draw', spec: { id: b.spec.id, title: b.spec.title, svg: b.spec.svg, time: b.spec.time }, pid: `draw:${b.spec.id}` })),
    ...derives.map((b) => ({ type: 'derive', spec: b.spec, pid: `derive:${b.spec.id}` })),
    ...numericals.map((b, k) => ({ type: 'numerical', spec: { ...b.spec, dom: `${b.spec.id}-${k}` }, pid: `num:${b.spec.id}#${k}` })),
  ];
  const section = (title, from, to) => (to > from ? `<h2 class="list__header" style="padding-left:0;margin:0">${title}</h2>${list.slice(from, to).map((b, k) => item(b, from + k)).join('')}` : '');
  const item = (b, k) => `<div class="ngp__item"><div class="ngb ngb--${b.type}" data-ngb="${k}">${head(b.type, b.spec.title)}<div class="ngb__body ngb__body--wait"></div></div><button class="chip ngp__done ${paperDone(key, b.pid) ? 'is-on' : 'chip--outline'}" type="button" data-pid="${esc(b.pid)}" aria-pressed="${paperDone(key, b.pid)}">${icon('check')} Done on paper</button></div>`;
  const nF = figures.length, nD = derives.length;
  return {
    title: `On paper · Ch ${ch.number}`, tab: 'subjects', back: base, backLabel: `Ch ${ch.number}`, unitColour: unit.colour,
    actions: total ? `<button class="icon-btn" type="button" data-print aria-label="Print worksheet" title="Print worksheet (A4)">${icon('print')}</button>` : '',
    html: html`<div class="ngp" style="--unit:#${unit.colour}">
      <h1 class="t-title" style="margin:var(--s-4) 0 var(--s-1)">Practice on paper</h1>
      <p class="t-2 t-subhead mb-4">${ch.number}. ${ch.title} · pen and paper beside you. Draw each diagram, write each derivation against the clock, solve the numericals, then tick Done.</p>
      ${total ? raw(`<div class="row mb-4" style="gap:var(--s-2);flex-wrap:wrap"><button class="btn btn--unit btn--sm" type="button" data-print>${icon('print')} Print worksheet (A4)</button><span class="t-footnote t-2" data-count></span></div>
        <div id="ngp-items">${section('Draw it', 0, nF)}${section('Derivations', nF, nF + nD)}${section('Numericals · fresh numbers', nF + nD, list.length)}</div>`)
        : emptyState({ icon: 'paper', title: 'Nothing for paper practice yet', text: 'Diagrams, derivations and numericals appear here as the chapter gets its interactive blocks.', action: `<a class="btn btn--secondary" href="${base}">Back to the chapter</a>` })}
    </div>`,
    async mount(el) {
      if (!total) return;
      await ensureCss();
      const count = () => { const n = list.filter((b) => paperDone(key, b.pid)).length; el.querySelector('[data-count]').textContent = `${n} of ${list.length} done on paper`; };
      count();
      const { mountBlocks } = await import('../blocks/engine.js');
      mountBlocks(el.querySelector('#ngp-items'), list, { key, src, base });
      el.addEventListener('click', (e) => {
        const d = e.target.closest('[data-pid]');
        if (d) { const on = d.getAttribute('aria-pressed') !== 'true'; setPaperDone(key, d.dataset.pid, on); d.setAttribute('aria-pressed', String(on)); d.className = `chip ngp__done ${on ? 'is-on' : 'chip--outline'}`; haptic(on ? 'success' : 'light'); count(); }
      });
      const print = () => printWorksheet({ sub, ch, unit, src, blocks, derives, numericals });
      el.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', print));
      document.querySelector('#topbar-end [data-print]')?.addEventListener('click', print);
    },
  };
}

/* ---------- A4 worksheet ---------- */
async function printWorksheet({ sub, ch, unit, src, blocks, derives, numericals }) {
  // draw-from-memory frames first, then the blank figures to label (so a label sheet never gives a drawing away early)
  const figures = [...blocks.filter((b) => b.type === 'draw'), ...blocks.filter((b) => b.type === 'figure')];
  await ensureCss();
  const { cleanSvg, inlineHTML } = await import('../markdown.js');
  const mdh = async (t) => (await inlineHTML(t)).innerHTML;
  const lines = (n) => `<div class="ws__lines">${'<span></span>'.repeat(n)}</div>`;
  const answers = [];
  const parts = [];
  // 1. diagrams: blank figure (labels removed) with numbered points, or an empty frame to draw in
  if (figures.length) {
    parts.push('<h2 class="ws__h">1 · Diagrams</h2>');
    for (const b of figures) {
      const spec = normalise(b.type, b.spec);
      const raw = refId(spec.svg) ? resolveRef(refId(spec.svg), src) : spec.svg;
      if (b.type === 'figure' && spec.parts?.length) {
        const holder = document.createElement('div'); holder.innerHTML = await cleanSvg(raw);
        const svg = holder.querySelector('svg');
        if (svg) {
          svg.querySelectorAll('text').forEach((t) => t.remove());
          const vb = viewBox(raw) || [0, 0, 100, 100]; const r = Math.max(vb[2], vb[3]) / 36;
          spec.parts.forEach((p, k) => svg.insertAdjacentHTML('beforeend', `<g><circle cx="${p.x}" cy="${p.y}" r="${r}" fill="#fff" stroke="#000" stroke-width="${r / 6}"/><text x="${p.x}" y="${p.y + r * 0.38}" text-anchor="middle" font-size="${r * 1.1}" font-weight="700" fill="#000">${k + 1}</text></g>`));
        }
        parts.push(`<section class="ws__item"><div class="ws__q">Label the parts of the <strong>${esc(spec.title)}</strong>.</div><div class="ws__fig">${holder.innerHTML}</div><ol class="ws__blanks">${spec.parts.map(() => '<li><span></span></li>').join('')}</ol></section>`);
        answers.push(`<li><strong>${esc(spec.title)}:</strong> ${spec.parts.map((p, k) => `${k + 1} ${esc(p.name)}`).join(' · ')}</li>`);
      } else {
        parts.push(`<section class="ws__item"><div class="ws__q">Draw and label: <strong>${esc(spec.title)}</strong>${spec.minutes ? ` (${spec.minutes} min)` : ''}.</div><div class="ws__box"></div></section>`);
      }
    }
  }
  // 2. derivations
  if (derives.length) {
    parts.push(`<h2 class="ws__h">${figures.length ? 2 : 1} · Derivations</h2>`);
    for (const b of derives) { const spec = normalise('derive', b.spec); const marks = spec.checks.reduce((n, c) => n + c.marks, 0); parts.push(`<section class="ws__item"><div class="ws__q">${await mdh(spec.prompt)} <em>[${marks} marks · ${spec.minutes} min]</em></div>${lines(14)}</section>`); }
  }
  // 3. numericals with fresh numbers
  if (numericals.length) {
    parts.push(`<h2 class="ws__h">${1 + (figures.length ? 1 : 0) + (derives.length ? 1 : 0)} · Numericals</h2>`);
    const { draw } = numericalEngine();
    let k = 0;
    for (const b of numericals) {
      const spec = normalise('numerical', b.spec); const scope = draw(spec); k++;
      parts.push(`<section class="ws__item"><div class="ws__q"><strong>Q${k}.</strong> ${await mdh(interpolate(spec.question, scope, compile))}</div>${lines(9)}</section>`);
      answers.push(`<li><strong>Q${k}:</strong> ${num(scope.__answer, spec.dp)}${spec.unit ? ' ' + esc(spec.unit) : ''}</li>`);
    }
  }
  const host = document.createElement('div'); host.id = 'print-host'; host.className = 'ws'; host.style.setProperty('--unit', `#${unit.colour}`);
  host.innerHTML = `<header class="ws__top"><div><strong>${esc(sub.name)} · Ch ${ch.number} · ${esc(ch.title)}</strong><br><span>Practice on paper</span></div><div>Date ________ &nbsp; Time taken ______</div></header>${parts.join('')}${answers.length ? `<section class="ws__answers"><h2 class="ws__h">Answers</h2><ul>${answers.join('')}</ul></section>` : ''}`;
  document.body.appendChild(host); document.documentElement.classList.add('is-printing-extra');
  const done = () => { host.remove(); document.documentElement.classList.remove('is-printing-extra'); window.removeEventListener('afterprint', done); };
  window.addEventListener('afterprint', done);
  setTimeout(() => window.print(), 60);
}
