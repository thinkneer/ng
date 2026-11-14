// Highlights: select text in Read / Must know / the reader → pick a colour → optional note.
// Personal for now: saved on this device under the signed-in nickname (progress.highlights).
// Anchors are text quotes (exact + a little context) inside one section, so they survive small edits and
// can later be shared without changing the format.
import { store } from './store.js';
import { icon, esc, openSheet, toast, haptic } from './ui.js';

export const COLORS = [['yellow', 'Yellow'], ['green', 'Green'], ['blue', 'Blue'], ['pink', 'Pink'], ['purple', 'Purple']];
const CTX = 32;

/* ---------- storage ---------- */
const all = () => store.progress().highlights || {};
export const listFor = (layer) => Object.values(all()[layer] || {}).sort((a, b) => (a.chunk - b.chunk) || a.created.localeCompare(b.created));
export function listForChapter(prefix) {
  const out = [];
  for (const [layer, map] of Object.entries(all())) if (layer.startsWith(prefix + '/')) for (const h of Object.values(map)) out.push({ ...h, layer });
  return out.sort((a, b) => a.layer.localeCompare(b.layer) || (a.chunk - b.chunk) || a.created.localeCompare(b.created));
}
function save(h) { store.saveProgress((p) => { p.highlights = { ...(p.highlights || {}) }; p.highlights[h.layer] = { ...(p.highlights[h.layer] || {}), [h.id]: h }; return p; }); }
function remove(h) { store.saveProgress((p) => { p.highlights = { ...(p.highlights || {}) }; const m = { ...(p.highlights[h.layer] || {}) }; delete m[h.id]; p.highlights[h.layer] = m; return p; }); }
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

/* ---------- text index of one section (maths excluded so anchors are stable) ---------- */
function chunkNodes(prose, chunk) { return [...prose.querySelectorAll(`:scope > [data-chunk="${chunk}"]`)]; }
function indexOf(nodes) {
  const entries = []; let text = '';
  for (const root of nodes) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentElement.closest('.katex, .box__label, .hl-skip') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
    while (w.nextNode()) { const n = w.currentNode; entries.push({ node: n, start: text.length, end: text.length + n.nodeValue.length }); text += n.nodeValue; }
    text += '\n'; // block boundary
  }
  return { entries, text };
}
function locate(text, h) {
  let best = -1, bestScore = -1, from = 0, i;
  while ((i = text.indexOf(h.exact, from)) !== -1) {
    const pre = text.slice(Math.max(0, i - CTX), i), suf = text.slice(i + h.exact.length, i + h.exact.length + CTX);
    let score = 0;
    for (let k = 1; k <= Math.min(pre.length, h.prefix.length) && pre[pre.length - k] === h.prefix[h.prefix.length - k]; k++) score++;
    for (let k = 0; k < Math.min(suf.length, h.suffix.length) && suf[k] === h.suffix[k]; k++) score++;
    if (score > bestScore) { best = i; bestScore = score; }
    from = i + 1;
  }
  return best;
}
function wrap(entries, s, e, h) {
  const marks = [];
  for (let k = entries.length - 1; k >= 0; k--) {
    const en = entries[k];
    if (en.end <= s || en.start >= e) continue;
    const a = Math.max(s, en.start) - en.start, b = Math.min(e, en.end) - en.start;
    if (b <= a || !en.node.nodeValue.slice(a, b).trim()) continue;
    const r = document.createRange(); r.setStart(en.node, a); r.setEnd(en.node, b);
    const m = document.createElement('mark');
    m.className = `hl hl--${h.color}`; m.dataset.hl = h.id; m.tabIndex = -1;
    try { r.surroundContents(m); marks.unshift(m); } catch { /* crosses an element boundary: skip this piece */ }
  }
  if (marks.length) { marks[marks.length - 1].classList.add('hl--end'); if (h.note) marks[marks.length - 1].classList.add('hl--note'); }
  return marks;
}
function unwrap(root, id) {
  for (const m of root.querySelectorAll(`mark.hl[data-hl="${CSS.escape(id)}"]`)) { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); m.remove(); p.normalize(); }
}
function paint(root, h) {
  for (const m of root.querySelectorAll(`mark.hl[data-hl="${CSS.escape(h.id)}"]`)) {
    m.className = `hl hl--${h.color}`;
  }
  const ms = root.querySelectorAll(`mark.hl[data-hl="${CSS.escape(h.id)}"]`);
  if (ms.length) { const last = ms[ms.length - 1]; last.classList.add('hl--end'); last.classList.toggle('hl--note', !!h.note); }
}

/* ---------- attach to a rendered .prose ---------- */
/** Make one rendered Markdown element highlightable. layer = "<subject>/<chapter>/<notes|mustknow|formulas>" */
export function attach(prose, layer) {
  prose.dataset.hlLayer = layer;
  const applyChunk = (chunk) => {
    const hs = listFor(layer).filter((h) => h.chunk === chunk);
    for (const h of hs) {
      if (prose.querySelector(`mark.hl[data-hl="${CSS.escape(h.id)}"]`)) continue;
      const nodes = chunkNodes(prose, chunk); if (!nodes.length) continue;
      const { entries, text } = indexOf(nodes);
      const at = locate(text, h);
      if (at >= 0) wrap(entries, at, at + h.exact.length, h);
    }
    jumpIfAsked(prose);
  };
  for (const c of prose._done || []) applyChunk(c);
  prose.addEventListener('ng:chunk', (e) => applyChunk(e.detail.chunk));
  install();
}

/* ---------- jump from the list ---------- */
export function askJump(id) { try { sessionStorage.setItem('ng.hl.jump', id); } catch { /* ignore */ } }
function jumpIfAsked(prose) {
  let id; try { id = sessionStorage.getItem('ng.hl.jump'); } catch { return; }
  if (!id) return;
  const m = prose.querySelector(`mark.hl[data-hl="${CSS.escape(id)}"]`);
  if (!m) return;
  sessionStorage.removeItem('ng.hl.jump');
  setTimeout(() => { m.scrollIntoView({ block: 'center', behavior: 'smooth' }); m.classList.add('hl--flash'); setTimeout(() => m.classList.remove('hl--flash'), 1600); }, 150);
}

/* ---------- selection → toolbar ---------- */
let installed = false, bar = null, pending = null;
function install() {
  if (installed) return; installed = true;
  bar = document.createElement('div');
  bar.className = 'hl-bar'; bar.hidden = true; bar.setAttribute('role', 'toolbar'); bar.setAttribute('aria-label', 'Highlight');
  bar.innerHTML = COLORS.map(([c, n]) => `<button type="button" class="hl-dot hl-dot--${c}" data-c="${c}" aria-label="Highlight ${n}"></button>`).join('') + `<span class="hl-bar__sep"></span><button type="button" class="hl-bar__note" data-note aria-label="Highlight and add a note">${icon('note')}</button>`;
  document.body.appendChild(bar);
  bar.addEventListener('pointerdown', (e) => e.preventDefault()); // keep the selection
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b || !pending) return;
    const h = create(pending, b.dataset.c || 'yellow');
    hideBar(); window.getSelection()?.removeAllRanges();
    if (h && b.hasAttribute('data-note')) openFor(h);
  });
  let t;
  document.addEventListener('selectionchange', () => { clearTimeout(t); t = setTimeout(onSelection, 180); });
  document.addEventListener('scroll', () => { if (!bar.hidden) position(); }, { capture: true, passive: true });
  window.addEventListener('resize', () => { if (!bar.hidden) position(); });
  document.addEventListener('click', (e) => {
    const m = e.target.closest('mark.hl');
    if (!m || !window.getSelection()?.isCollapsed) return;
    const prose = m.closest('.prose[data-hl-layer]'); if (!prose) return;
    const h = (all()[prose.dataset.hlLayer] || {})[m.dataset.hl];
    if (h) { e.preventDefault(); e.stopPropagation(); openFor(h); }
  }, true);
  window.addEventListener('hashchange', hideBar);
}
function onSelection() {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) return hideBar();
  const range = sel.getRangeAt(0);
  const startEl = range.startContainer.nodeType === 1 ? range.startContainer : range.startContainer.parentElement;
  const prose = startEl?.closest('.prose[data-hl-layer]');
  if (!prose || !prose.contains(range.endContainer)) return hideBar();
  const chunkEl = startEl.closest('[data-chunk]');
  if (!chunkEl || chunkEl.parentElement !== prose && !prose.contains(chunkEl)) return hideBar();
  const top = [...prose.children].find((c) => c.contains(chunkEl) || c === chunkEl);
  const chunk = Number((top || chunkEl).dataset.chunk);
  if (!prose._done?.has(chunk)) return hideBar(); // maths still typesetting
  const { entries, text } = indexOf(chunkNodes(prose, chunk));
  let s = -1, e = -1;
  for (const en of entries) {
    if (!range.intersectsNode(en.node)) continue;
    const a = en.node === range.startContainer ? en.start + range.startOffset : en.start;
    const b = en.node === range.endContainer ? en.start + range.endOffset : en.end;
    if (s < 0) s = a; e = b;
  }
  if (s < 0 || e <= s) return hideBar();
  while (s < e && /\s/.test(text[s])) s++;
  while (e > s && /\s/.test(text[e - 1])) e--;
  const exact = text.slice(s, e);
  if (exact.replace(/\s/g, '').length < 2) return hideBar();
  pending = { prose, layer: prose.dataset.hlLayer, chunk, exact, prefix: text.slice(Math.max(0, s - CTX), s), suffix: text.slice(e, e + CTX), s, e, entries, rect: range.getBoundingClientRect() };
  bar.hidden = false; position();
}
function position() {
  const sel = window.getSelection();
  const r = sel && sel.rangeCount ? sel.getRangeAt(0).getBoundingClientRect() : pending?.rect;
  if (!r) return;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const w = bar.offsetWidth || 260, h = bar.offsetHeight || 48;
  let x = r.left + r.width / 2 - w / 2;
  let y = coarse ? r.bottom + 14 : r.top - h - 10; // phones: below, so the system menu above stays usable
  if (!coarse && y < 8) y = r.bottom + 10;
  if (coarse && y + h > innerHeight - 8) y = r.top - h - 14;
  x = Math.max(8, Math.min(innerWidth - w - 8, x));
  bar.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
}
function hideBar() { if (bar) bar.hidden = true; pending = null; }

function create(p, color) {
  const h = { id: newId(), layer: p.layer, chunk: p.chunk, exact: p.exact, prefix: p.prefix, suffix: p.suffix, color, note: '', created: new Date().toISOString(), updated: new Date().toISOString() };
  // re-index right before wrapping (the DOM may have changed since the selection)
  const { entries, text } = indexOf(chunkNodes(p.prose, p.chunk));
  const at = locate(text, h);
  if (at < 0) return null;
  const marks = wrap(entries, at, at + h.exact.length, h);
  if (!marks.length) { toast('That part can’t be highlighted (maths or a label). Try the words around it.'); return null; }
  save(h); haptic('light');
  return h;
}

/* ---------- the sheet ---------- */
export function openFor(h) {
  const prose = document.querySelector(`.prose[data-hl-layer="${CSS.escape(h.layer)}"]`);
  const s = openSheet({
    title: 'Highlight',
    closeLabel: 'Done',
    content: `<blockquote class="hl-quote hl-quote--${h.color}">${esc(h.exact)}</blockquote>
      <div class="hl-swatches" role="radiogroup" aria-label="Colour">${COLORS.map(([c, n]) => `<button type="button" class="hl-dot hl-dot--${c}" data-c="${c}" role="radio" aria-checked="${c === h.color}" aria-label="${n}"></button>`).join('')}</div>
      <label for="hl-note" class="sr-only">Note</label>
      <textarea id="hl-note" class="hl-note" rows="3" placeholder="Note">${esc(h.note || '')}</textarea>
      <p class="t-footnote t-3 mt-2">Saved on this device under ${esc(store.nickname)}. Only you see it.</p>
      <div class="hl-actions"><button type="button" class="btn btn--plain" data-copy>${icon('copy')} Copy</button><button type="button" class="btn btn--danger" data-del>${icon('trash')} Delete</button></div>`,
  });
  let cur = { ...h };
  const ta = s.body.querySelector('#hl-note');
  let t;
  ta.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => { cur = { ...cur, note: ta.value.trim(), updated: new Date().toISOString() }; save(cur); if (prose) paint(prose, cur); }, 300); });
  s.body.addEventListener('click', async (e) => {
    const sw = e.target.closest('.hl-swatches [data-c]');
    if (sw) {
      cur = { ...cur, color: sw.dataset.c, updated: new Date().toISOString() }; save(cur); if (prose) paint(prose, cur); haptic();
      s.body.querySelectorAll('.hl-swatches [data-c]').forEach((x) => x.setAttribute('aria-checked', String(x === sw)));
      s.body.querySelector('.hl-quote').className = `hl-quote hl-quote--${cur.color}`;
    }
    if (e.target.closest('[data-copy]')) {
      try { await navigator.clipboard.writeText(cur.note ? `${cur.exact}\n\n— ${cur.note}` : cur.exact); toast('Copied'); } catch { toast('Copy not allowed here'); }
    }
    if (e.target.closest('[data-del]')) {
      clearTimeout(t);
      const kept = { ...cur, note: ta.value.trim() };
      remove(kept); if (prose) unwrap(prose, kept.id); s.close(); haptic('medium');
      toast('Highlight deleted', { action: 'Undo', onAction: () => { save(kept); if (prose) { const { entries, text } = indexOf(chunkNodes(prose, kept.chunk)); const at = locate(text, kept); if (at >= 0) wrap(entries, at, at + kept.exact.length, kept); } } });
    }
  });
  ta.addEventListener('blur', () => { clearTimeout(t); const v = ta.value.trim(); if (v !== (cur.note || '')) { cur = { ...cur, note: v, updated: new Date().toISOString() }; save(cur); if (prose) paint(prose, cur); } });
}
