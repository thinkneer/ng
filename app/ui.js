// Small UI toolkit: escaping, HTML tagged template, components, sheets, toasts, haptics.
import { icon } from './icons.js';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** html`...` escapes interpolations unless they are marked raw() or are arrays of raw. */
export function html(strings, ...vals) {
  let out = '';
  strings.forEach((s, i) => {
    out += s;
    if (i < vals.length) {
      const v = vals[i];
      if (v == null || v === false) return;
      if (Array.isArray(v)) out += v.map((x) => (x && x.__raw ? x.__raw : esc(x))).join('');
      else if (v.__raw) out += v.__raw;
      else out += esc(v);
    }
  });
  return { __raw: out, toString() { return out; } };
}
export const raw = (s) => ({ __raw: String(s) });
export { icon };

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function haptic(kind = 'light') {
  try {
    if (!navigator.vibrate) return;
    navigator.vibrate(kind === 'success' ? [10, 30, 10] : kind === 'medium' ? 14 : 6);
  } catch { /* ignore */ }
}

export function unitStyle(colour) {
  if (!colour) return '';
  const hex = colour.startsWith('#') ? colour : `#${colour}`;
  return `--unit:${hex};--unit-text:${hex}`;
}

/* ---------- Components ---------- */
export function largeTitle(title, { eyebrow, trailing } = {}) {
  return html`<div class="large-title">
    <div>${eyebrow ? html`<span class="eyebrow">${eyebrow}</span>` : ''}<h1>${title}</h1></div>
    ${trailing ? raw(trailing) : ''}
  </div><div class="title-sentinel" data-title="${title}"></div>`;
}

export function listItem({ href, title, sub, leading, leadingStyle, trailing, chevron = true, disabled, attrs = '' }) {
  const tag = href ? 'a' : 'button';
  const hrefAttr = href ? `href="${esc(href)}"` : 'type="button"';
  return raw(`<${tag} ${hrefAttr} class="list__item pressable${leading ? ' has-leading' : ''}" ${disabled ? 'aria-disabled="true"' : ''} ${attrs}>
    ${leading ? `<span class="list__leading" style="${esc(leadingStyle || '')}">${leading}</span>` : ''}
    <span class="list__body"><span class="list__title">${esc(title)}</span>${sub ? `<span class="list__sub">${sub}</span>` : ''}</span>
    <span class="list__trailing">${trailing || ''}${chevron && href ? icon('chevronRight', { class: 'chev' }) : ''}</span>
  </${tag}>`);
}

export function emptyState({ icon: ic = 'sparkle', title, text, action }) {
  return html`<div class="empty">${raw(icon(ic))}<h2 class="t-headline" style="color:var(--text)">${title}</h2>${text ? html`<p class="t-subhead mt-2">${text}</p>` : ''}${action ? raw(action) : ''}</div>`;
}

export function ring(value, label, sub, size) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return html`<div class="ring tnum" style="--value:${v}${size ? `;--size:${size}` : ''}" role="img" aria-label="${label} ${sub || ''}">
    <svg viewBox="0 0 36 36"><circle class="track" cx="18" cy="18" r="15.9155"/><circle class="bar" cx="18" cy="18" r="15.9155"/></svg>
    <div class="center"><div class="ring__label">${label}</div>${sub ? html`<div class="ring__sub">${sub}</div>` : ''}</div>
  </div>`;
}

export function stars(n) {
  return `<span class="stars" aria-label="${n} star${n > 1 ? 's' : ''} (estimate)">${'★'.repeat(n)}</span>`;
}

export function skeletonList(n = 4) {
  return raw(`<div class="list" aria-hidden="true">${Array.from({ length: n }, () => `<div class="list__item"><span class="skeleton" style="width:2.25rem;height:2.25rem;border-radius:8px"></span><span class="list__body"><span class="skeleton" style="display:block;width:60%"></span><span class="skeleton mt-2" style="display:block;width:35%;height:0.8em"></span></span></div>`).join('')}</div>`);
}

/* ---------- Sheets ---------- */
export function openSheet({ title, content, onClose, closeLabel = 'Close' } = {}) {
  const host = $('#sheets');
  const dlg = document.createElement('dialog');
  dlg.className = 'sheet';
  dlg.innerHTML = `<div class="sheet__panel" role="document">
      <div class="sheet__grabber"></div>
      ${title ? `<div class="sheet__title"><span>${esc(title)}</span><button class="icon-btn" data-close aria-label="${esc(closeLabel)}">${icon('x')}</button></div>` : ''}
      <div class="sheet__content"></div>
    </div>`;
  const slot = dlg.querySelector('.sheet__content');
  if (typeof content === 'string' || content?.__raw) slot.innerHTML = String(content);
  else if (content instanceof Node) slot.appendChild(content);
  host.appendChild(dlg);
  let closed = false;
  const close = (result) => {
    if (closed) return; closed = true;
    dlg.classList.add('is-closing');
    const done = () => { dlg.close(); dlg.remove(); onClose?.(result); };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) done(); else setTimeout(done, 230);
  };
  dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); if (e.target.closest('[data-close]')) close(); });
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
  dlg.showModal();
  dlg.querySelector('.sheet__content')?.querySelector('input,button,textarea,select,a')?.focus?.({ preventScroll: true });
  return { el: dlg, close, body: slot };
}

/* ---------- Toasts ---------- */
export function toast(message, { action, onAction, duration = 4000, sticky = false } = {}) {
  const host = $('#toasts');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="grow">${esc(message)}</span>${action ? `<button class="btn btn--sm" type="button">${esc(action)}</button>` : ''}`;
  host.appendChild(el);
  const remove = () => { el.classList.add('is-leaving'); setTimeout(() => el.remove(), 250); };
  if (action) el.querySelector('button').addEventListener('click', () => { onAction?.(); remove(); });
  if (!sticky) setTimeout(remove, duration);
  return remove;
}

/* ---------- Dates ---------- */
export const DAY = 86400000;
export function parseDate(iso) { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); }
export function toISO(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
export function today() { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }
export function daysBetween(a, b) { return Math.round((b - a) / DAY); }
export function fmtDate(d, opts = { weekday: 'short', day: 'numeric', month: 'short' }) { return (d instanceof Date ? d : parseDate(d)).toLocaleDateString('en-IN', opts); }
export const plural = (n, w, ws = w + 's') => `${n} ${n === 1 ? w : ws}`;

/* ---------- Book cover for a subject ---------- */
export function cover(sub, { href, sub: subline, pct, soon, art = 'book', small = false } = {}) {
  const body = `<span class="cover${soon ? ' cover--soon' : ''}" style="--unit:#${sub.colour || '1F5FAD'}">
      <span class="cover__art">${icon(art)}</span>
      ${sub.code && !small ? `<span class="cover__code">${esc(sub.code)}</span>` : ''}
      ${!small ? `<span class="cover__foot">${subline ? `<span class="cover__sub">${esc(subline)}</span>` : ''}<span class="cover__name">${esc(sub.name.length > 10 && sub.short ? sub.short : sub.name)}</span></span>` : ''}
    </span>`;
  if (small) return raw(body);
  return raw(`<a class="book-item pressable" href="${esc(href || '#')}" ${soon ? 'aria-disabled="true"' : ''}>${body}
    <span class="book-meta"><span>${soon ? 'Coming soon' : esc(sub.metaLeft || '')}</span>${pct != null ? `<span class="pct" style="--unit:#${sub.colour}">${pct}%</span>` : ''}</span></a>`);
}
