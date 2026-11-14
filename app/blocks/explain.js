// ng-explain: Feynman check. Write the idea in about three lines, then compare with the section's
// "In one breath" (or the block's own answer). Your lines stay on this device.
import { md, mdInline, esc, icon, haptic, store } from './kit.js';

/** The "In one breath" line of the section that holds this block (from the Markdown source). */
function breathFor(src, id) {
  const lines = String(src || '').split('\n');
  let at = lines.findIndex((l) => l.trim() === `id: ${id}`);
  if (at < 0) return null;
  for (let i = at; i < lines.length; i++) {
    if (i > at && /^##\s/.test(lines[i])) break;
    const m = lines[i].match(/^\*\*In one breath:\*\*\s*(.+)$/); if (m) return m[1];
  }
  return null;
}

export async function render(body, spec, ctx) {
  const prompt = await mdInline(spec.prompt);
  const answer = spec.answer || breathFor(ctx.src, spec.id);
  const saveKey = `explain.${ctx.key || 'x'}.${spec.id}`;
  body.innerHTML = `<div class="nge">
      <p class="nge__prompt">${prompt}</p>
      <label class="sr-only" for="ex-${esc(spec.id)}">Your explanation</label>
      <textarea id="ex-${esc(spec.id)}" rows="${spec.lines}" placeholder="In your own words, ${spec.lines} lines at most…"></textarea>
      <div class="ngb__bar"><button class="btn btn--unit btn--sm" type="button" data-cmp>${icon('eye')} Compare</button><span class="t-footnote t-3" data-status>Saved on this device</span></div>
      <div class="nge__ans" hidden></div>
    </div>`;
  const root = body.querySelector('.nge'), ta = root.querySelector('textarea'), ans = root.querySelector('.nge__ans');
  ta.value = store.get(saveKey, '');
  let t; ta.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => store.set(saveKey, ta.value), 400); });
  root.addEventListener('click', async (e) => {
    if (!e.target.closest('[data-cmp]')) return;
    ans.innerHTML = answer ? `<div class="nge__label">In one breath</div>${await md(answer)}<p class="t-footnote t-2 mt-2">Did yours have the same key idea and the cause → effect? If not, rewrite it once.</p>` : '<p class="t-2">Compare with your notes above.</p>';
    ans.hidden = false; haptic();
  });
}
