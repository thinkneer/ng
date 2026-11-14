import { icon } from './icons.js';
// Lazy-loaded Markdown + KaTeX (with mhchem) rendering with sanitising. Only chapter pages pay for this.
// Libraries are vendored (see vendor/README.md) so the site works offline and never waits on a CDN.
const V = new URL('../vendor/', import.meta.url).href;
let libs = null;

async function load() {
  if (libs) return libs;
  libs = (async () => {
    if (!document.querySelector('link[data-katex]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = `${V}katex/katex.min.css`; l.dataset.katex = '1';
      document.head.appendChild(l);
    }
    const [{ marked }, { default: DOMPurify }, katexMod, autoMod] = await Promise.all([
      import(`${V}marked.esm.js`),
      import(`${V}purify.es.mjs`),
      import(`${V}katex/katex.mjs`),
      import(`${V}katex/contrib/auto-render.mjs`),
    ]);
    try { await import(`${V}katex/contrib/mhchem.mjs`); } catch (e) { console.warn('mhchem failed to load', e); }
    marked.setOptions({ gfm: true, breaks: false });
    return { marked, DOMPurify, katex: katexMod.default, renderMathInElement: autoMod.default };
  })();
  libs.catch(() => { libs = null; });
  return libs;
}

const DIRECTIVES = { tip: 'Tip', formula: 'Key formula', skeleton: 'Answer skeleton' };

/** Expand :::tip / :::formula / :::skeleton blocks into placeholder tokens, render inner Markdown separately. */
function splitDirectives(src) {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const f = lines[i].match(/^```ng-([a-z]+)\s*$/);
    if (f) { // interactive block: kept whole, rendered by app/blocks/engine.js
      const body = []; i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) body.push(lines[i++]);
      i++; out.push({ ngb: f[1], body: body.join('\n') }); continue;
    }
    const m = lines[i].match(/^:::(tip|formula|skeleton)\s*(.*)$/);
    if (!m) { out.push({ md: lines[i] }); i++; continue; }
    const kind = m[1], title = m[2].trim();
    const body = [];
    i++;
    while (i < lines.length && !/^:::\s*$/.test(lines[i])) body.push(lines[i++]);
    i++; // skip closing :::
    out.push({ box: kind, title, body: body.join('\n') });
  }
  // merge consecutive md lines
  const merged = [];
  for (const part of out) {
    if (part.md !== undefined && merged.length && merged[merged.length - 1].md !== undefined) merged[merged.length - 1].md += '\n' + part.md;
    else merged.push({ ...part });
  }
  return merged;
}

function protectMath(src) {
  // Prevent marked from mangling underscores/asterisks inside math by escaping them temporarily.
  const stash = [];
  const put = (s) => { stash.push(s); return `\u0000M${stash.length - 1}\u0000`; };
  let s = src.replace(/\$\$[\s\S]+?\$\$/g, put);
  s = s.replace(/(^|[^\\$])\$(?!\s)((?:\\.|[^$\n])+?)\$/g, (m, pre, body) => pre + put(`$${body}$`));
  s = s.replace(/\\ce\{[^}]*\}/g, (m) => put(`$${m}$`)); // bare \ce{…} outside maths still goes through mhchem
  return { s, restore: (htmlStr) => htmlStr.replace(/\u0000M(\d+)\u0000/g, (_, n) => stash[Number(n)].replace(/&/g, '&amp;').replace(/</g, '&lt;')) };
}

export async function renderMarkdown(src, { unitColour, eager = false, ctx = null } = {}) {
  let marked, DOMPurify;
  try { ({ marked, DOMPurify } = await load()); } catch (e) {
    // Rendering libraries unavailable (first visit offline, blocked network): show the raw notes rather than nothing.
    const pre = document.createElement('div'); pre.className = 'prose';
    pre.innerHTML = '<div class="notice notice--warn">Formatting could not load; showing the plain notes.</div>';
    const t = document.createElement('pre'); t.style.whiteSpace = 'pre-wrap'; t.textContent = src || ''; pre.appendChild(t);
    return pre;
  }
  const parts = splitDirectives(src || '');
  let out = ''; const blocks = [];
  const parseBody = parts.some((p) => p.ngb) ? (await import('./blocks/parse.js')).parseBody : null;
  for (const p of parts) {
    if (p.ngb) {
      const spec = parseBody(p.ngb, p.body).spec;
      blocks.push({ type: p.ngb, spec });
      // header + reserved height now, so nothing jumps when the block's module arrives
      out += `<div class="ngb ngb--${p.ngb} hl-skip" data-ngb="${blocks.length - 1}"${spec.id ? ` id="ngb-${escapeHtml(spec.id)}"` : ''}>${blockHead(p.ngb, spec.title)}<div class="ngb__body ngb__body--wait"></div></div>`;
    } else if (p.md !== undefined) {
      const { s, restore } = protectMath(p.md);
      out += restore(marked.parse(s));
    } else {
      const { s, restore } = protectMath(p.body);
      const inner = restore(marked.parse(s));
      const label = p.title || DIRECTIVES[p.box];
      out += `<div class="box box--${p.box}"><div class="box__label">${escapeHtml(label)}</div>${inner}</div>`;
    }
  }
  const clean = DOMPurify.sanitize(out, { USE_PROFILES: { html: true, mathMl: true, svg: true }, ADD_ATTR: ['target', 'rel'] });
  const wrap = document.createElement('div');
  wrap.className = 'prose';
  if (unitColour) wrap.style.setProperty('--unit', `#${unitColour}`);
  wrap.innerHTML = clean;
  decorate(wrap);
  if (blocks.length) import('./blocks/engine.js').then((m) => m.mountBlocks(wrap, blocks, { src, ...(ctx || {}) }));
  // Typeset in chunks (per section) after the text is on screen, yielding between chunks so the page stays responsive.
  const sections = chunkBySection(wrap);
  wrap._chunks = sections.length; wrap._done = new Set();
  const first = sections.shift();
  if (first) typeset(first).then(() => { if (!sections.length) return; if (eager) queueTypeset(sections); else lazyTypeset(sections); });
  wrap._pending = sections;
  return wrap;
}

function decorate(root) {
  // the page already shows the chapter title, so a leading H1 in the Markdown is dropped
  const first = root.firstElementChild;
  if (first && first.tagName === 'H1') first.remove();
  // external links
  for (const a of root.querySelectorAll('a[href^="http"]')) { a.target = '_blank'; a.rel = 'noopener'; }
  // star ratings
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) if (/★/.test(walker.currentNode.nodeValue)) nodes.push(walker.currentNode);
  for (const n of nodes) {
    if (n.parentElement.closest('.katex, code, pre')) continue;
    const frag = document.createDocumentFragment();
    const parts = n.nodeValue.split(/(★{1,3})/);
    for (const part of parts) {
      if (/^★{1,3}$/.test(part)) { const s = document.createElement('span'); s.className = 'stars'; s.textContent = part; s.setAttribute('aria-label', `${part.length} star${part.length > 1 ? 's' : ''} (estimate)`); frag.appendChild(s); }
      else if (part) frag.appendChild(document.createTextNode(part));
    }
    n.replaceWith(frag);
  }
  // heading ids for the right rail
  let i = 0;
  for (const h of root.querySelectorAll('h2, h3')) {
    if (!h.id) h.id = 'sec-' + (++i) + '-' + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 40);
  }
}

function chunkBySection(root) {
  // group direct children into runs starting at each h2 (the first run is whatever comes before the first h2)
  const runs = []; let cur = [];
  for (const node of [...root.children]) { if (node.tagName === 'H2' && cur.length) { runs.push(cur); cur = []; } cur.push(node); }
  if (cur.length) runs.push(cur);
  return runs.map((nodes, i) => { for (const n of nodes) n.dataset.chunk = String(i); return { nodes, index: i, root }; });
}
// Sections near the viewport are typeset first (any element of the section counts); everything else is
// finished in idle time, so no section is ever left with raw $…$ however fast the reader scrolls.
function lazyTypeset(chunks) {
  const run = (c) => { if (c && !c.done) { c.done = true; typeset(c); } };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { const c = e.target._chunk; for (const n of c?.nodes || []) io.unobserve(n); run(c); }
    }, { rootMargin: '1200px 0px' });
    for (const c of chunks) for (const n of c.nodes) { n._chunk = c; io.observe(n); }
  }
  queueTypeset([...chunks]);
}
/** Typeset everything still pending in a rendered element (used before paginating). */
export async function typesetAll(root) {
  const pending = root._pending || []; root._pending = [];
  for (const c of pending) if (!c.done) { c.done = true; await typeset(c); }
}
function queueTypeset(chunks) {
  const idle = (fn) => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 60));
  const step = () => { const c = chunks.shift(); if (!c) return; if (c.done) return idle(step); c.done = true; typeset(c).then(() => idle(step)); };
  idle(step);
}

// A formula wider than its column gets its own line and scrolls by itself; the page never scrolls sideways.
function fitWide(root) {
  for (const k of root.querySelectorAll('.katex')) {
    if (k.closest('.katex-display, .math-wide')) continue;
    const box = k.parentElement.closest('p, li, td, th, div, blockquote, figcaption') || k.parentElement;
    const br = box.getBoundingClientRect(), kr = k.getBoundingClientRect();
    if (br.width > 0 && (kr.right > br.right + 1 || kr.width > br.width - 2)) {
      const wrap = document.createElement('span'); wrap.className = 'math-wide'; wrap.tabIndex = 0; wrap.setAttribute('role', 'group'); wrap.setAttribute('aria-label', 'Formula, scroll sideways');
      k.replaceWith(wrap); wrap.appendChild(k);
    }
  }
}
function fitLater(el) { requestAnimationFrame(() => requestAnimationFrame(() => fitWide(el))); }
let fitBound = false;
function bindFit() {
  if (fitBound) return; fitBound = true;
  let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => document.querySelectorAll('.prose').forEach(fitWide), 150); });
}
export { fitWide };

export async function typeset(el) {
  if (el && el.nodes) {
    for (const n of el.nodes) await typeset(n);
    // tell listeners (highlights) that this section's maths is final
    el.root && fitLater(el.root); bindFit();
    el.root?._done?.add(el.index);
    el.root?.dispatchEvent(new CustomEvent('ng:chunk', { detail: { chunk: el.index } }));
    return el;
  }
  const { renderMathInElement } = await load();
  renderMathInElement(el, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\[', right: '\\]', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
    ],
    throwOnError: false,
    output: 'htmlAndMathml',
    trust: false,
    strict: 'ignore',
  });
  return el;
}

export function headings(el) {
  return [...el.querySelectorAll('h2')].map((h) => ({ id: h.id, text: h.textContent }));
}
const BLOCK_KIND = { figure: ['eye', 'Diagram'], graph: ['progress', 'Graph'], steps: ['play', 'Step by step'], numerical: ['formula', 'Numerical'], mnemonic: ['sparkle', 'Memory trick'], draw: ['paper', 'Draw it'], derive: ['timer', 'Derivation'], explain: ['message', 'Explain it'], compare: ['layers', 'Compare'], fill: ['note', 'Fill the table'] };
function blockHead(type, title) {
  const [ic, label] = BLOCK_KIND[type] || ['info', type];
  return `<div class="ngb__head"><span class="ngb__kind">${icon(ic)}${label}</span>${title ? `<h3 class="ngb__title">${escapeHtml(title)}</h3>` : ''}</div>`;
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
export function preloadMarkdown() { load().catch(() => {}); }
export { load as loadLibs };

/** Sanitise an author SVG drawing (cards, blocks). Returns safe markup ('' if nothing usable). */
export async function cleanSvg(svg) {
  const { DOMPurify } = await load();
  return DOMPurify.sanitize(String(svg || ''), { USE_PROFILES: { svg: true, svgFilters: true }, ADD_ATTR: ['data-step', 'class', 'role', 'aria-label', 'font-size', 'text-anchor', 'dominant-baseline'] });
}
/** KaTeX string → HTML (display or inline); falls back to the source text. */
export async function texHTML(tex, display = true) {
  const { katex } = await load();
  try { return katex.renderToString(String(tex), { displayMode: display, throwOnError: false, output: 'htmlAndMathml', strict: 'ignore', trust: false }); } catch { return escapeHtml(tex); }
}
/** Short Markdown + maths (cards, blocks): parsed, sanitised and typeset at once. Returns a .prose element. */
export async function inlineHTML(src) {
  const { marked, DOMPurify, renderMathInElement } = await load();
  const { s, restore } = protectMath(String(src || ''));
  const el = document.createElement('div'); el.className = 'prose prose--inline';
  el.innerHTML = DOMPurify.sanitize(restore(marked.parse(s)), { USE_PROFILES: { html: true, mathMl: true, svg: true } });
  renderMathInElement(el, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], throwOnError: false, output: 'htmlAndMathml', trust: false, strict: 'ignore' });
  return el;
}
