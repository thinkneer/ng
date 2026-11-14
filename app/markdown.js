// Lazy-loaded Markdown + KaTeX (with mhchem) rendering with sanitising. Only chapter pages pay for this.
const CDN = 'https://cdn.jsdelivr.net/npm';
const VERSIONS = { marked: '14.1.3', dompurify: '3.1.7', katex: '0.16.11' };
let libs = null;

async function load() {
  if (libs) return libs;
  libs = (async () => {
    if (!document.querySelector('link[data-katex]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = `${CDN}/katex@${VERSIONS.katex}/dist/katex.min.css`; l.dataset.katex = '1';
      l.crossOrigin = 'anonymous';
      document.head.appendChild(l);
    }
    const [{ marked }, { default: DOMPurify }, katexMod, autoMod] = await Promise.all([
      import(`${CDN}/marked@${VERSIONS.marked}/lib/marked.esm.js`),
      import(`${CDN}/dompurify@${VERSIONS.dompurify}/dist/purify.es.mjs`),
      import(`${CDN}/katex@${VERSIONS.katex}/dist/katex.mjs`),
      import(`${CDN}/katex@${VERSIONS.katex}/dist/contrib/auto-render.mjs`),
    ]);
    try { await import(`${CDN}/katex@${VERSIONS.katex}/dist/contrib/mhchem.mjs`); } catch (e) { console.warn('mhchem failed to load', e); }
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

export async function renderMarkdown(src, { unitColour } = {}) {
  const { marked, DOMPurify } = await load();
  const parts = splitDirectives(src || '');
  let out = '';
  for (const p of parts) {
    if (p.md !== undefined) {
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
  await typeset(wrap);
  return wrap;
}

function decorate(root) {
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

export async function typeset(el) {
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
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
export function preloadMarkdown() { load().catch(() => {}); }
