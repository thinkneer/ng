// ng-figure: tap a numbered part → its name + one line. "Label it yourself" hides the drawing's labels,
// the student names each numbered part from a shuffled list, and gets a score.
import { svgOf, esc, haptic, icon } from './kit.js';
import { viewBox } from './parse.js';

export async function render(body, spec, ctx) {
  const svg = await svgOf(spec, ctx);
  const vb = viewBox(svg) || [0, 0, 100, 100];
  const parts = spec.parts;
  const pos = (p) => `left:${(((p.x - vb[0]) / vb[2]) * 100).toFixed(2)}%;top:${(((p.y - vb[1]) / vb[3]) * 100).toFixed(2)}%`;
  body.innerHTML = `<div class="ngf">
      <div class="ngf__art">${svg}<div class="ngf__pins">${parts.map((p, k) => `<button class="ngf__pin" type="button" data-k="${k}" style="${pos(p)}" aria-label="Part ${k + 1}${''}"><span>${k + 1}</span></button>`).join('')}</div></div>
      ${spec.caption ? `<p class="ngb__caption">${esc(spec.caption)}</p>` : ''}
      <div class="ngf__info" aria-live="polite"><span class="t-2">Tap a number to see what that part is.</span></div>
      <div class="ngb__bar"><button class="btn btn--plain btn--sm" type="button" data-quiz>${icon('eye')} Label it yourself</button><span class="ngb__score t-footnote t-2" data-score></span></div>
      <ol class="ngf__legend print-only">${parts.map((p) => `<li><strong>${esc(p.name)}</strong>${p.line ? ` — ${esc(p.line)}` : ''}</li>`).join('')}</ol>
    </div>`;
  const root = body.querySelector('.ngf'), info = root.querySelector('.ngf__info'), score = root.querySelector('[data-score]'), qbtn = root.querySelector('[data-quiz]');
  const pins = [...root.querySelectorAll('.ngf__pin')];
  let quiz = null; // { done: Set, right: n, asking: k }

  const learn = (k) => {
    pins.forEach((b, j) => b.classList.toggle('is-on', j === k));
    const p = parts[k];
    info.innerHTML = `<strong>${k + 1}. ${esc(p.name)}</strong>${p.line ? `<span class="ngf__line">${esc(p.line)}</span>` : ''}`;
    haptic();
  };
  const ask = (k) => {
    if (quiz.done.has(k)) return;
    quiz.asking = k;
    pins.forEach((b, j) => b.classList.toggle('is-on', j === k));
    const names = parts.map((p, j) => ({ name: p.name, j })).filter((x) => !quiz.done.has(x.j)).sort(() => Math.random() - 0.5);
    info.innerHTML = `<div class="t-footnote t-2 mb-2">Which part is <strong>${k + 1}</strong>?</div><div class="chips">${names.map((x) => `<button class="chip chip--outline" type="button" data-pick="${x.j}">${esc(x.name)}</button>`).join('')}</div>`;
  };
  const pick = (j) => {
    const k = quiz.asking; if (k == null) return;
    const ok = j === k; quiz.done.add(k); if (ok) quiz.right++;
    pins[k].classList.add(ok ? 'is-right' : 'is-wrong'); pins[k].classList.remove('is-on');
    pins[k].querySelector('span').textContent = ok ? '✓' : k + 1;
    haptic(ok ? 'success' : 'medium');
    info.innerHTML = ok ? `<strong class="t-success">Right: ${esc(parts[k].name)}</strong>` : `<strong class="t-danger">That was ${esc(parts[j].name)}.</strong> Part ${k + 1} is <strong>${esc(parts[k].name)}</strong>.`;
    quiz.asking = null;
    score.textContent = `${quiz.right} of ${quiz.done.size} right`;
    if (quiz.done.size === parts.length) {
      info.innerHTML += `<div class="mt-2"><strong>${quiz.right === parts.length ? 'All labelled. ' : ''}${quiz.right} / ${parts.length}</strong> · ${quiz.right === parts.length ? 'Now draw it once on paper.' : 'Try again until it is clean.'}</div>`;
      qbtn.innerHTML = `${icon('replay')} Try again`;
    }
  };
  const startQuiz = () => {
    quiz = { done: new Set(), right: 0, asking: null };
    root.classList.add('is-quiz');
    pins.forEach((b, k) => { b.className = 'ngf__pin'; b.querySelector('span').textContent = k + 1; });
    qbtn.innerHTML = `${icon('x')} Show labels`;
    score.textContent = `0 of ${parts.length}`;
    info.innerHTML = '<span class="t-2">Labels hidden. Tap each number and pick its name.</span>';
  };
  const stopQuiz = () => {
    quiz = null; root.classList.remove('is-quiz');
    pins.forEach((b, k) => { b.className = 'ngf__pin'; b.querySelector('span').textContent = k + 1; });
    qbtn.innerHTML = `${icon('eye')} Label it yourself`; score.textContent = '';
    info.innerHTML = '<span class="t-2">Tap a number to see what that part is.</span>';
  };
  root.addEventListener('click', (e) => {
    const pin = e.target.closest('.ngf__pin'); if (pin) { const k = Number(pin.dataset.k); quiz ? ask(k) : learn(k); return; }
    const pk = e.target.closest('[data-pick]'); if (pk) { pick(Number(pk.dataset.pick)); return; }
    if (e.target.closest('[data-quiz]')) { if (!quiz || quiz.done.size === parts.length) startQuiz(); else stopQuiz(); }
  });
}
