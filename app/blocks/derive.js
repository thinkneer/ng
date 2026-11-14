// ng-derive: a 5-mark derivation on paper. Start the timer, write it out, then open the hidden step checklist
// and tick what you wrote. The score is saved as an attempt (under half → Mistakes) and ticks "on paper".
import { md, mdInline, icon, haptic, store, setPaperDone, paperDone } from './kit.js';

export async function render(body, spec, ctx) {
  const prompt = await md(spec.prompt);
  const checks = await Promise.all(spec.checks.map((c) => mdInline(c.text)));
  const total = spec.checks.reduce((n, c) => n + c.marks, 0);
  const pid = `derive:${spec.id}`;
  body.innerHTML = `<div class="ngv">
      <div class="ngv__prompt">${prompt}</div>
      <div class="ngv__timer" aria-live="off"><span class="ngv__clock tnum" data-clock>${spec.minutes}:00</span><span class="t-footnote t-2">board time · ${total} marks</span></div>
      <div class="ngb__bar" data-start-bar><button class="btn btn--unit btn--sm" type="button" data-start>${icon('timer')} Start · write it on paper</button><button class="btn btn--plain btn--sm" type="button" data-reveal>Skip to the checklist</button>${paperDone(ctx.key, pid) ? '<span class="badge badge--live">done on paper</span>' : ''}</div>
      <div class="ngv__check" hidden>
        <div class="t-footnote t-2 mb-2">Tick each step you actually wrote:</div>
        ${spec.checks.map((c, k) => `<label class="pq__step"><input type="checkbox" data-k="${k}"><span class="pq__step-text">${checks[k]}</span><span class="marks-tag">${c.marks}</span></label>`).join('')}
        <div class="ngb__bar"><strong class="tnum" data-score>0 / ${total}</strong><span class="grow"></span><button class="btn btn--unit btn--sm" type="button" data-save>Save my marks</button></div>
      </div>
      <ol class="print-only ngv__print">${checks.map((c, k) => `<li>${c} <em>[${spec.checks[k].marks}]</em></li>`).join('')}</ol>
    </div>`;
  const root = body.querySelector('.ngv'), clock = root.querySelector('[data-clock]'), list = root.querySelector('.ngv__check');
  let left = spec.minutes * 60, timer = null;
  const tick = () => { if (!root.isConnected) { stop(); return; } left--; clock.textContent = `${Math.floor(Math.max(left, 0) / 60)}:${String(Math.max(left, 0) % 60).padStart(2, '0')}`; if (left <= 0) { stop(); clock.classList.add('is-over'); reveal(); haptic('medium'); } };
  const stop = () => { clearInterval(timer); timer = null; };
  const reveal = () => { stop(); list.hidden = false; root.querySelector('[data-start-bar]').hidden = true; };
  const score = () => [...root.querySelectorAll('input[data-k]')].reduce((n, x) => n + (x.checked ? spec.checks[Number(x.dataset.k)].marks : 0), 0);
  root.addEventListener('click', (e) => {
    const st = e.target.closest('[data-start]');
    if (st) { if (timer) { reveal(); return; } timer = setInterval(tick, 1000); st.innerHTML = `${icon('check')} I'm done`; haptic(); return; }
    if (e.target.closest('[data-reveal]')) { reveal(); return; }
    if (e.target.closest('[data-save]')) {
      const got = score();
      if (ctx.key) { store.recordAttempt({ id: pid, key: ctx.key, type: 'derive', marks: total, got, title: spec.title }); setPaperDone(ctx.key, pid); }
      root.querySelector('[data-save]').outerHTML = `<span class="t-footnote ${got >= total / 2 ? 't-success' : 't-danger'}">${got >= total / 2 ? 'Saved.' : 'Saved to Mistakes: write it once more tomorrow.'}</span>`;
      haptic(got >= total / 2 ? 'success' : 'medium');
    }
  });
  root.addEventListener('change', () => { root.querySelector('[data-score]').textContent = `${score()} / ${total}`; });
}
