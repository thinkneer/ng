// ng-numerical: fresh numbers every time. Solve on paper, type the answer, see the worked steps.
// Checked with a tolerance (tol, default 2 %). Wrong twice → the Mistakes list (Practice tab).
import { md, num, interpolate, readNumber, icon, esc, haptic, store } from './kit.js';
import { compile } from './expr.js';
import { numericalEngine } from './parse.js';

const { draw } = numericalEngine();

export async function render(body, spec, ctx) {
  body.innerHTML = '<div class="ngn"></div>';
  const root = body.querySelector('.ngn');
  let scope, tries, finished;

  async function fresh() {
    scope = draw(spec); tries = 0; finished = false;
    const q = await md(interpolate(spec.question, scope, compile));
    root.innerHTML = `<div class="ngn__q">${q}</div>
      <form class="ngn__form" novalidate>
        <label class="sr-only" for="ans-${esc(spec.id)}">Your answer${spec.unit ? ` in ${esc(spec.unit)}` : ''}</label>
        <input id="ans-${esc(spec.id)}" class="ngn__input" inputmode="decimal" autocomplete="off" placeholder="Your answer" enterkeyhint="done">
        ${spec.unit ? `<span class="ngn__unit">${esc(spec.unit)}</span>` : ''}
        <button class="btn btn--unit btn--sm" type="submit">Check</button>
      </form>
      <div class="ngn__fb" aria-live="polite"></div>
      <div class="ngn__steps" hidden></div>
      <div class="ngb__bar"><button class="btn btn--plain btn--sm" type="button" data-show>${icon('eye')} Show working</button><span class="grow"></span><button class="btn btn--plain btn--sm" type="button" data-new>${icon('shuffle')} New numbers</button></div>
      <div class="ngn__paper print-only"></div>`;
  }
  async function working() {
    const box = root.querySelector('.ngn__steps');
    const steps = await Promise.all(spec.steps.map((s) => md(interpolate(s, scope, compile))));
    box.innerHTML = `<ol>${steps.map((s) => `<li>${s}</li>`).join('')}</ol><div class="ngn__ans">Answer: <strong>${num(scope.__answer, spec.dp)}${spec.unit ? ' ' + esc(spec.unit) : ''}</strong></div>`;
    box.hidden = false;
  }
  function record(got) {
    if (finished || !ctx.key) return; finished = true;
    store.recordAttempt({ id: `num:${spec.id}`, key: ctx.key, type: 'numerical', marks: 1, got: got ? 1 : 0, title: spec.title });
  }
  root.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inp = root.querySelector('.ngn__input'), fb = root.querySelector('.ngn__fb');
    const v = readNumber(inp.value);
    if (!Number.isFinite(v)) { fb.innerHTML = '<span class="t-2">Type a number (for example 1.47 or 7.6e52).</span>'; return; }
    const a = scope.__answer;
    const ok = Math.abs(v - a) <= Math.abs(a) * (spec.tol / 100) + 1e-12;
    tries++;
    if (ok) {
      fb.innerHTML = `<span class="ngn__ok">${icon('check')} Right: ${num(a, spec.dp)}${spec.unit ? ' ' + esc(spec.unit) : ''}</span>`;
      inp.classList.add('is-right'); haptic('success'); record(true); await working();
    } else if (tries === 1) {
      fb.innerHTML = `<span class="ngn__no">${icon('x')} Not yet.</span> <span class="t-2">Check powers, units and n, then try once more.</span>`;
      inp.classList.add('is-wrong'); haptic('medium'); inp.select();
    } else {
      fb.innerHTML = `<span class="ngn__no">${icon('x')} The answer is ${num(a, spec.dp)}${spec.unit ? ' ' + esc(spec.unit) : ''}.</span> <span class="t-2">Saved to your Mistakes list; follow the working below.</span>`;
      haptic('medium'); record(false); await working();
    }
  });
  root.addEventListener('input', (e) => e.target.classList?.remove('is-wrong', 'is-right'));
  root.addEventListener('click', async (e) => {
    if (e.target.closest('[data-show]')) await working();
    if (e.target.closest('[data-new]')) { await fresh(); root.querySelector('.ngn__input')?.focus({ preventScroll: true }); }
  });
  await fresh();
}
