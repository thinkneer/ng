// ng-draw: a drawing pad for diagrams. Trace (figure faint underneath) → Recall (blank) → Compare (figure over
// your drawing). Save PNG keeps it on the device; "Done on paper" ticks it in Practice on paper and Progress.
import { svgOf, esc, icon, haptic, paperDone, setPaperDone } from './kit.js';
import { viewBox } from './parse.js';

const MODES = [['trace', 'Trace'], ['recall', 'Recall'], ['compare', 'Compare']];

export async function render(body, spec, ctx) {
  const svg = await svgOf(spec, ctx);
  const vb = viewBox(svg) || [0, 0, 320, 220];
  const pid = `draw:${spec.id}`;
  body.innerHTML = `<div class="ngd" data-mode="trace">
      <div class="ngd__modes" role="tablist" aria-label="Drawing mode">${MODES.map(([k, l]) => `<button class="ngd__mode" type="button" role="tab" data-mode="${k}" aria-selected="${k === 'trace'}">${l}</button>`).join('')}</div>
      <p class="ngd__hint t-footnote t-2" aria-live="polite">Trace over the faint drawing first.</p>
      <div class="ngd__pad" style="aspect-ratio:${vb[2]} / ${vb[3]}"><div class="ngd__art" aria-hidden="true">${svg}</div><canvas class="ngd__canvas" aria-label="Drawing pad for ${esc(spec.title)}"></canvas></div>
      <div class="ngb__bar">
        <button class="btn btn--plain btn--sm" type="button" data-undo aria-label="Undo">${icon('undo')}</button>
        <button class="btn btn--plain btn--sm" type="button" data-clear>Clear</button>
        <button class="btn btn--plain btn--sm" type="button" data-save>${icon('download')} Save PNG</button>
        <span class="grow"></span>
        <button class="chip ${paperDone(ctx.key, pid) ? 'is-on' : 'chip--outline'}" type="button" data-done aria-pressed="${paperDone(ctx.key, pid)}">${icon('check')} Done on paper</button>
      </div>
    </div>`;
  const root = body.querySelector('.ngd'), canvas = root.querySelector('canvas'), pad = root.querySelector('.ngd__pad'), hint = root.querySelector('.ngd__hint');
  const g = canvas.getContext('2d');
  const strokes = []; let cur = null;
  const size = () => { const r = pad.getBoundingClientRect(); const d = Math.min(window.devicePixelRatio || 1, 2); canvas.width = Math.round(r.width * d); canvas.height = Math.round(r.height * d); redraw(); };
  const ink = () => getComputedStyle(root).color;
  function line(s, w, h) { if (s.length < 2) { g.beginPath(); g.arc(s[0][0] * w, s[0][1] * h, g.lineWidth / 2, 0, 7); g.fill(); return; } g.beginPath(); g.moveTo(s[0][0] * w, s[0][1] * h); for (let k = 1; k < s.length; k++) g.lineTo(s[k][0] * w, s[k][1] * h); g.stroke(); }
  function redraw(colour = ink()) {
    const w = canvas.width, h = canvas.height; g.clearRect(0, 0, w, h);
    g.lineCap = g.lineJoin = 'round'; g.lineWidth = Math.max(2, w / 220); g.strokeStyle = g.fillStyle = colour;
    for (const s of strokes) line(s, w, h);
  }
  const pt = (e) => { const r = canvas.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; };
  canvas.addEventListener('pointerdown', (e) => { e.preventDefault(); canvas.setPointerCapture?.(e.pointerId); cur = [pt(e)]; strokes.push(cur); redraw(); });
  canvas.addEventListener('pointermove', (e) => { if (!cur) return; for (const ev of e.getCoalescedEvents?.() || [e]) cur.push(pt(ev)); redraw(); });
  const end = () => { cur = null; };
  canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
  new ResizeObserver(size).observe(pad);

  const setMode = (m) => {
    root.dataset.mode = m;
    root.querySelectorAll('[data-mode].ngd__mode').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.mode === m)));
    hint.textContent = { trace: 'Trace over the faint drawing first.', recall: 'Now draw it from memory on a blank pad (or on paper).', compare: 'The real drawing sits on top of yours: what did you miss?' }[m];
    if (m === 'recall' && strokes.length) { strokes.length = 0; redraw(); }
    haptic();
  };
  async function save() {
    const out = document.createElement('canvas'); out.width = canvas.width; out.height = canvas.height;
    const o = out.getContext('2d'); o.fillStyle = '#fff'; o.fillRect(0, 0, out.width, out.height);
    redraw('#111'); o.drawImage(canvas, 0, 0); redraw();
    out.toBlob((blob) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${spec.id}-drawing.png`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }, 'image/png');
  }
  root.addEventListener('click', (e) => {
    const m = e.target.closest('.ngd__mode'); if (m) { setMode(m.dataset.mode); return; }
    if (e.target.closest('[data-undo]')) { strokes.pop(); redraw(); }
    else if (e.target.closest('[data-clear]')) { strokes.length = 0; redraw(); }
    else if (e.target.closest('[data-save]')) save();
    else if (e.target.closest('[data-done]')) {
      const b = e.target.closest('[data-done]'); const on = b.getAttribute('aria-pressed') !== 'true';
      setPaperDone(ctx.key, pid, on); b.setAttribute('aria-pressed', String(on)); b.className = `chip ${on ? 'is-on' : 'chip--outline'}`; haptic(on ? 'success' : 'light');
    }
  });
}
