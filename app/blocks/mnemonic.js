// ng-mnemonic: a memory trick (acronym, picture-story, number hook). Shown here as a card you can flip to
// test yourself; it also becomes a recall card (Recall, Drill formulas, Exam eve, Trick of the day).
import { md, mdInline, icon, haptic } from './kit.js';

export async function render(body, spec) {
  const trick = await mdInline(spec.trick);
  const meanings = await Promise.all(spec.meanings.map((m) => md(m)));
  const prompt = spec.prompt ? await mdInline(spec.prompt) : '';
  body.innerHTML = `<div class="ngm">
      <div class="ngm__trick">${trick}</div>
      <div class="ngm__meaning">${meanings.join('')}</div>
      <div class="ngb__bar">${prompt ? `<button class="btn btn--plain btn--sm" type="button" data-test>${icon('bolt')} Test me</button>` : ''}<span class="t-footnote t-3">In Recall with this chapter</span></div>
    </div>`;
  const root = body.querySelector('.ngm');
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-test]'); if (!b) return;
    const testing = root.classList.toggle('is-test');
    root.querySelector('.ngm__trick').innerHTML = testing ? `<span class="ngm__q">${prompt}</span>` : trick;
    b.innerHTML = testing ? `${icon('eye')} Show the trick` : `${icon('bolt')} Test me`;
    haptic();
  });
}
