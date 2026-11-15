// Shared helpers for the ng-<type> block renderers (DOM side).
import { icon, esc, haptic } from '../ui.js';
import { store } from '../store.js';
import { refId, resolveRef } from './parse.js';
import { fmt } from './expr.js';

export { icon, esc, haptic, store };

export const KIND = {
  figure: ['eye', 'Diagram'], graph: ['progress', 'Graph'], steps: ['play', 'Step by step'], numerical: ['formula', 'Numerical'],
  mnemonic: ['sparkle', 'Memory trick'], draw: ['paper', 'Draw it'], derive: ['timer', 'Derivation'], explain: ['message', 'Explain it'],
  compare: ['layers', 'Compare'], fill: ['note', 'Fill the table'], video: ['play', 'Video'],
};

/** Block header: kind label + title. */
export function head(type, title) {
  const [ic, label] = KIND[type] || ['info', type];
  return `<div class="ngb__head"><span class="ngb__kind">${icon(ic)}${label}</span>${title ? `<h3 class="ngb__title">${esc(title)}</h3>` : ''}</div>`;
}

/** The block's drawing: inline svg or "ref: notes#id" resolved in this page's source; sanitised. */
export async function svgOf(spec, ctx) {
  let svg = spec.svg;
  const rid = refId(svg);
  if (rid) svg = resolveRef(rid, ctx.src);
  if (!svg) return '';
  const { cleanSvg } = await import('../markdown.js');
  return cleanSvg(svg);
}

/** Short Markdown + maths → HTML string. */
export async function md(text) {
  const { inlineHTML } = await import('../markdown.js');
  return (await inlineHTML(text)).innerHTML;
}
export async function mdInline(text) {
  const h = await md(text);
  return h.replace(/^<p>([\s\S]*)<\/p>\s*$/, '$1');
}

/* ---------- numbers inside templates ---------- */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
/** A number as text ("7.60×10⁵²") or as TeX ("7.60\times10^{52}"). */
export function num(x, dp, tex = false) {
  const s = fmt(x, dp);
  const m = s.match(/^(-?[\d.]+)×10\^(-?\d+)$/);
  if (!m) return s;
  return tex ? `${m[1]}\\times10^{${m[2]}}` : `${m[1]}×10${[...m[2]].map((c) => SUP[c]).join('')}`;
}
/** Replace {{expr}} / {{expr:dp}} using a scope; numbers inside $…$ come out as TeX. */
export function interpolate(text, scope, compile) {
  let out = '', last = 0;
  for (const m of String(text || '').matchAll(/\{\{([^}]+?)\}\}/g)) {
    const before = text.slice(0, m.index);
    const inMath = ((before.match(/(?<!\\)\$/g) || []).length % 2) === 1;
    const [e, dp] = m[1].split(':');
    let v; try { v = compile(e.trim())(scope); } catch { v = NaN; }
    out += text.slice(last, m.index) + num(v, dp, inMath); last = m.index + m[0].length;
  }
  return out + String(text || '').slice(last);
}
/** Read a typed answer: "1.47", "7.6e52", "7.6×10^52", "7.6 x 10^-5", "1,800". */
export function readNumber(s) {
  let t = String(s || '').trim().replace(/,/g, '').replace(/\s+/g, '').replace(/−/g, '-');
  const m = t.match(/^(-?[\d.]+)(?:[x×*]10\^?\(?(-?\d+)\)?)$/i);
  if (m) return Number(m[1]) * 10 ** Number(m[2]);
  t = t.replace(/[^\d.eE+-]/g, ''); // drop a typed unit such as "V" or "g"
  const v = Number(t);
  return t && Number.isFinite(v) ? v : NaN;
}

/* ---------- paper ticks (Practice on paper) ---------- */
export function paperDone(key, id) { return !!store.progress().paper?.[key]?.[id]; }
export function setPaperDone(key, id, on = true) {
  if (!key) return;
  store.saveProgress((p) => { p.paper = { ...(p.paper || {}) }; const m = { ...(p.paper[key] || {}) }; if (on) m[id] = new Date().toISOString().slice(0, 10); else delete m[id]; p.paper[key] = m; return p; });
}
