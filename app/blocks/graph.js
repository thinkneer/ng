// ng-graph: sliders change parameters, the curve redraws; preset chips set the sliders; tap or drag on the
// plot to read values. Curves use the safe evaluator in expr.js (never eval).
import { esc, mdInline } from './kit.js';
import { compile, fmt } from './expr.js';

const W = 320, H = 210, L = 44, R = 12, T = 12, B = 34; // plot frame in viewBox units
const COLOURS = ['var(--unit, var(--accent))', '#E0B400', 'currentColor'];

function ticks(min, max, n = 5) {
  const span = max - min; const raw = span / n; const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((k) => k * mag).find((s) => span / s <= n) || raw;
  const out = []; for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) out.push(Number(v.toPrecision(10)));
  return out;
}

export async function render(body, spec) {
  const { xa, ya, curves, sliders, presets } = spec;
  const fns = curves.map((c) => compile(c.expr));
  const vals = Object.fromEntries(sliders.map((s) => [s.name, s.value]));
  const sx = (x) => L + ((x - xa.min) / (xa.max - xa.min)) * (W - L - R);
  const sy = (y) => T + (1 - (y - ya.min) / (ya.max - ya.min)) * (H - T - B);
  const ix = (px) => xa.min + ((px - L) / (W - L - R)) * (xa.max - xa.min);
  const labels = await Promise.all(sliders.map((s) => mdInline(s.label || s.name)));
  const sdp = (s) => { const t = String(s.step); return t.includes('.') ? t.split('.')[1].length : 0; };
  const sval = (s, v) => Number(v).toFixed(sdp(s));

  const axes = () => {
    const xt = ticks(xa.min, xa.max), yt = ticks(ya.min, ya.max);
    return `<g class="ngg__grid">${yt.map((v) => `<line x1="${L}" x2="${W - R}" y1="${sy(v)}" y2="${sy(v)}"/>`).join('')}${xt.map((v) => `<line y1="${T}" y2="${H - B}" x1="${sx(v)}" x2="${sx(v)}"/>`).join('')}</g>
      <g class="ngg__axis"><line x1="${L}" x2="${W - R}" y1="${H - B}" y2="${H - B}"/><line x1="${L}" x2="${L}" y1="${T}" y2="${H - B}"/></g>
      <g class="ngg__ticks">${xt.map((v) => `<text x="${sx(v)}" y="${H - B + 13}" text-anchor="middle">${fmt(v)}</text>`).join('')}${yt.map((v) => `<text x="${L - 5}" y="${sy(v) + 3.5}" text-anchor="end">${fmt(v)}</text>`).join('')}</g>
      <text class="ngg__label" x="${(L + W - R) / 2}" y="${H - 4}" text-anchor="middle">${esc(xa.label)}</text>
      <text class="ngg__label" x="11" y="${(T + H - B) / 2}" text-anchor="middle" transform="rotate(-90 11 ${(T + H - B) / 2})">${esc(ya.label)}</text>`;
  };
  const path = (f) => {
    let d = '', pen = false;
    for (let k = 0; k <= 160; k++) {
      const x = xa.min + (k / 160) * (xa.max - xa.min);
      let y; try { y = f({ ...vals, x }); } catch { y = NaN; }
      if (!Number.isFinite(y) || y < ya.min - (ya.max - ya.min) || y > ya.max + (ya.max - ya.min)) { pen = false; continue; }
      d += `${pen ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(Math.min(Math.max(y, ya.min - 0.05 * (ya.max - ya.min)), ya.max + 0.05 * (ya.max - ya.min))).toFixed(1)}`; pen = true;
    }
    return d;
  };

  body.innerHTML = `<div class="ngg">
      <div class="ngg__plot"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.title)}: ${esc(ya.label)} against ${esc(xa.label)}">
        <defs><clipPath id="clip-${esc(spec.id)}"><rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/></clipPath></defs>
        ${axes()}<g clip-path="url(#clip-${esc(spec.id)})" data-curves></g><g data-read></g>
        <rect class="ngg__hit" x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/></svg></div>
      ${curves.length > 1 ? `<div class="ngg__legend">${curves.map((c, k) => `<span><i style="background:${COLOURS[k % 3]}"></i>${esc(c.label)}</span>`).join('')}</div>` : ''}
      <div class="ngg__read t-footnote t-2" data-readout aria-live="polite">Tap or drag on the graph to read a value.</div>
      ${presets.length ? `<div class="chips mt-2">${presets.map((p, k) => `<button class="chip chip--outline" type="button" data-preset="${k}">${esc(p.label)}</button>`).join('')}</div>` : ''}
      ${sliders.length ? `<div class="ngg__sliders">${sliders.map((s, k) => `<label class="ngg__slider"><span class="ngg__sname">${labels[k]}</span><input type="range" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.value}" data-s="${esc(s.name)}" aria-label="${esc(s.name)}"><output class="tnum" data-o="${esc(s.name)}">${sval(s, s.value)}</output></label>`).join('')}</div>` : ''}
      ${spec.note ? `<p class="ngb__caption">${await mdInline(spec.note)}</p>` : ''}
      <p class="print-only t-footnote">Shown at: ${sliders.map((s) => `${esc(s.name)} = ${fmt(s.value)}`).join(', ')}</p>
    </div>`;
  const root = body.querySelector('.ngg'), g = root.querySelector('[data-curves]'), rd = root.querySelector('[data-read]'), readout = root.querySelector('[data-readout]');
  let readX = null;
  const draw = () => {
    g.innerHTML = fns.map((f, k) => `<path d="${path(f)}" fill="none" stroke="${COLOURS[k % 3]}" stroke-width="2.4" ${k === 2 ? 'stroke-dasharray="5 4"' : ''} stroke-linecap="round"/>`).join('');
    for (const s of sliders) root.querySelector(`[data-o="${CSS.escape(s.name)}"]`).textContent = sval(s, vals[s.name]);
    if (readX != null) read(readX);
  };
  const read = (x) => {
    readX = x;
    const ys = fns.map((f) => { try { return f({ ...vals, x }); } catch { return NaN; } });
    rd.innerHTML = `<line class="ngg__cursor" x1="${sx(x)}" x2="${sx(x)}" y1="${T}" y2="${H - B}"/>${ys.map((y, k) => (Number.isFinite(y) && y >= ya.min && y <= ya.max ? `<circle cx="${sx(x)}" cy="${sy(y)}" r="4" fill="${COLOURS[k % 3]}" stroke="var(--surface)" stroke-width="1.5"/>` : '')).join('')}`;
    readout.innerHTML = `<strong>${esc(xa.label)}</strong> = ${fmt(x)} → ${ys.map((y, k) => `${curves.length > 1 ? esc(curves[k].label) + ': ' : ''}<strong>${esc(ya.label)}</strong> = ${fmt(y)}`).join(' · ')}`;
  };
  root.addEventListener('input', (e) => { const s = e.target.dataset.s; if (!s) return; vals[s] = Number(e.target.value); draw(); });
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-preset]'); if (!b) return;
    const p = presets[Number(b.dataset.preset)];
    for (const [k, v] of Object.entries(p.set)) { vals[k] = v; const inp = root.querySelector(`[data-s="${CSS.escape(k)}"]`); if (inp) inp.value = v; }
    root.querySelectorAll('[data-preset]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    draw();
  });
  const svg = root.querySelector('svg'); let dragging = false;
  const at = (e) => { const r = svg.getBoundingClientRect(); const px = ((e.clientX - r.left) / r.width) * W; read(Math.min(xa.max, Math.max(xa.min, ix(px)))); };
  svg.addEventListener('pointerdown', (e) => { dragging = true; svg.setPointerCapture?.(e.pointerId); at(e); });
  svg.addEventListener('pointermove', (e) => { if (dragging) at(e); });
  svg.addEventListener('pointerup', () => { dragging = false; });
  draw();
}
