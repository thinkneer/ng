// Practice session: one question per screen. Hint first; "Show answer" reveals the model answer and the
// step-mark scheme with tick boxes so the student marks themselves. MCQ / A–R are marked automatically.
// Wrong or low self-marked questions go to the Mistakes list (Practice tab). No timers, no exam builder.
import { html, raw, icon, esc, emptyState, haptic } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';

export const TYPE_LABEL = { mcq: 'MCQ', ar: 'A–R', case: 'Case', vsa2: '2 marks', sa3: '3 marks', la5: '5 marks' };
/** "MCQ · 1 mark", "Case · 4 marks", but just "3 marks" when the type label already says it. */
export const typeMarks = (q) => { const t = TYPE_LABEL[q.type] || q.type; const m = `${q.marks} mark${q.marks === 1 ? '' : 's'}`; return t === m ? t : `${t} · ${m}`; };
const KEYS = 'ABCDEF';

/** …/<chapter>/quiz/<type|all> */
export async function quizChapter({ cls, stream, sub, unit, ch, type }) {
  const all = ch.items?.questions ? await data.questions(sub, ch.id).catch(() => []) : [];
  const list = (type && type !== 'all' ? all.filter((q) => q.type === type) : all).map((q) => ({ ...q, _sub: sub, _ch: ch, _colour: unit.colour }));
  return build({ title: `Practice · Ch ${ch.number}`, questions: list, back: routeFor(cls.id, stream.id, sub.id, ch.id, 'practice'), colour: unit.colour, cls, stream });
}

/** #/practice/retry — every question in the Mistakes list, for the student's subjects. */
export async function quizMistakes() {
  const s = store.settings;
  const subjects = s.class ? (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id)) : [];
  const list = [];
  const byKey = {};
  for (const m of store.mistakes()) (byKey[m.key] ||= []).push(m.id);
  for (const [key, ids] of Object.entries(byKey)) {
    const [subId, chId] = key.split('/');
    const sub = subjects.find((x) => x.id === subId); if (!sub) continue;
    const { unit, chapter: ch } = data.chapterOf(sub, chId); if (!ch?.items?.questions) continue;
    const qs = await data.questions(sub, chId).catch(() => []);
    for (const id of ids) { const q = qs.find((x) => x.id === id); if (q) list.push({ ...q, _sub: sub, _ch: ch, _colour: unit.colour }); }
  }
  return build({ title: 'Practice · mistakes', questions: list, back: '#/practice', colour: null, cls: s.class, stream: s.stream, emptyTitle: 'Your mistakes list is empty', emptyText: 'Questions you get wrong, or mark yourself low on, collect here for a second go.' });
}

function build({ title, questions, back, colour, emptyTitle, emptyText }) {
  return {
    title, tab: 'practice', fullscreen: true, unitColour: colour,
    html: html`<div class="rc pq" id="pq" style="${colour ? `--unit:#${colour}` : ''}">
      <header class="rc__top">
        <a class="icon-btn" href="${back}" aria-label="Close">${raw(icon('x'))}</a>
        <div class="rc__title"><span id="pq-count" class="tnum"></span></div>
        <span style="width:var(--tap)"></span>
      </header>
      <div class="rc__track"><span id="pq-bar"></span></div>
      <main class="rc__stage" id="pq-stage"></main>
      <footer class="rc__foot" id="pq-foot"></footer>
    </div>`,
    async mount(el) {
      const stage = el.querySelector('#pq-stage'), foot = el.querySelector('#pq-foot'), count = el.querySelector('#pq-count'), bar = el.querySelector('#pq-bar');
      if (!questions.length) { stage.innerHTML = String(emptyState({ icon: 'practice', title: emptyTitle || 'No questions of this kind yet', text: emptyText || 'Try another type, or another chapter.', action: `<a class="btn btn--secondary" href="${back}">Back</a>` })); return; }
      const { renderMarkdown } = await import('../markdown.js');
      const md = async (s, host) => { const n = await renderMarkdown(String(s || ''), { unitColour: colour || undefined, eager: true }); n.classList.add('rc__md'); host.appendChild(n); return n; };
      let i = 0, state = null; // state: { q, revealed, got, ticks }
      const results = [];
      const autoMarked = (q) => q.type === 'mcq' || q.type === 'ar';
      const schemeOf = (q) => q.scheme?.length ? q.scheme : q.parts?.length ? q.parts.flatMap((p, k) => (p.scheme?.length ? p.scheme.map((s) => ({ ...s, step: `(${p.id || k + 1}) ${s.step}` })) : [{ step: `(${p.id || k + 1}) ${p.answer ? `Answer: ${p.answer}` : p.model_answer || p.stem}`, marks: p.marks }])) : [{ step: 'Full answer', marks: q.marks }];

      const show = async () => {
        const q = questions[i]; state = { q, revealed: false, hinted: false, got: null, ticks: new Set() };
        count.textContent = `${i + 1} of ${questions.length}`;
        bar.style.width = (i / questions.length * 100).toFixed(1) + '%';
        stage.innerHTML = `<div class="rc__card pq__card" style="--unit:#${q._colour}">
            <div class="rc__meta"><span class="chip chip--unit">${esc(q._ch.title)}</span><span class="t-footnote t-3">${typeMarks(q)} · <span class="stars">${'★'.repeat(q.stars || 1)}</span> · ${esc(q.label)}</span></div>
            <div class="pq__stem" id="pq-stem"></div>
            <div id="pq-parts"></div>
            <div class="pq__opts" id="pq-opts"></div>
            <div class="box box--tip pq__hint" id="pq-hint" hidden><div class="box__label">Hint</div><div id="pq-hint-body"></div></div>
            <div class="pq__answer" id="pq-answer" hidden></div>
          </div>`;
        await md(q.stem, stage.querySelector('#pq-stem'));
        if (q.parts?.length) {
          const host = stage.querySelector('#pq-parts');
          for (const [k, p] of q.parts.entries()) {
            const row = document.createElement('div'); row.className = 'pq__part';
            row.innerHTML = `<span class="pq__part-key">(${esc(p.id || k + 1)})</span><div class="grow"></div><span class="marks-tag">${p.marks}</span>`;
            host.appendChild(row); await md(p.stem + (p.options?.length ? '\n\n' + p.options.map((o, j) => `(${KEYS[j]}) ${o}`).join('  \n') : ''), row.querySelector('.grow'));
          }
        }
        if (autoMarked(q)) {
          const host = stage.querySelector('#pq-opts');
          for (const [k, o] of q.options.entries()) {
            const b = document.createElement('button'); b.type = 'button'; b.className = 'pq__opt'; b.dataset.key = KEYS[k];
            b.innerHTML = `<span class="pq__key">${KEYS[k]}</span><div class="pq__opt-body"></div>`;
            host.appendChild(b); await md(o, b.querySelector('.pq__opt-body'));
          }
        }
        if (q.hint) await md(q.hint, stage.querySelector('#pq-hint-body'));
        footer();
      };
      const footer = () => {
        const q = state.q;
        if (state.revealed) { foot.innerHTML = `<div class="rc__btns"><button class="btn" type="button" data-next>${i + 1 < questions.length ? 'Next' : 'Finish'} ${icon('chevronRight')}</button></div>`; return; }
        if (autoMarked(q)) { foot.innerHTML = `<div class="rc__btns">${q.hint && !state.hinted ? `<button class="btn btn--plain" type="button" data-hint>${icon('sparkle')} Hint</button>` : '<span></span>'}<span class="t-footnote t-2 center" style="align-self:center">Tap an option</span></div>`; return; }
        foot.innerHTML = `<div class="rc__btns">${q.hint && !state.hinted ? `<button class="btn btn--plain" type="button" data-hint>${icon('sparkle')} Hint</button>` : `<span></span>`}<button class="btn" type="button" data-reveal>Show answer</button></div>`;
      };
      const hint = () => { state.hinted = true; stage.querySelector('#pq-hint').hidden = false; haptic(); footer(); };
      const choose = (key) => {
        if (state.revealed) return;
        const q = state.q; const right = (q.answer || '').trim().toUpperCase().slice(0, 1);
        for (const b of stage.querySelectorAll('.pq__opt')) { b.disabled = true; if (b.dataset.key === right) b.classList.add('is-right'); else if (b.dataset.key === key) b.classList.add('is-wrong'); }
        state.got = key === right ? q.marks : 0; state.revealed = true; haptic(key === right ? 'success' : 'medium');
        const ans = stage.querySelector('#pq-answer'); ans.hidden = false;
        ans.innerHTML = `<div class="pq__verdict ${key === right ? 'is-right' : 'is-wrong'}">${icon(key === right ? 'check' : 'x')} ${key === right ? 'Correct' : `Not this one — the answer is ${right}`}</div><div class="box box--formula"><div class="box__label">Why</div><div id="pq-why"></div></div>`;
        md(q.model_answer || `Answer: ${right}`, ans.querySelector('#pq-why'));
        footer();
      };
      const reveal = async () => {
        if (state.revealed) return;
        const q = state.q; state.revealed = true;
        const ans = stage.querySelector('#pq-answer'); ans.hidden = false;
        const scheme = schemeOf(q);
        ans.innerHTML = `<div class="box box--skeleton"><div class="box__label">Model answer</div><div id="pq-model"></div></div>
          <div class="pq__scheme"><div class="list__header" style="padding-left:0">Mark yourself <span class="count tnum" id="pq-score">0 / ${q.marks}</span></div>
          ${scheme.map((s, k) => `<label class="pq__step"><input type="checkbox" data-step="${k}" data-marks="${s.marks}"><span class="pq__step-text"></span><span class="marks-tag">${s.marks}</span></label>`).join('')}
          <p class="t-footnote t-3 mt-2">Tick each step you actually wrote. Under half goes to your Mistakes list.</p></div>`;
        await md(q.model_answer || (q.parts || []).map((p, k) => `**(${p.id || k + 1})** ${p.answer ? `(${p.answer}) ` : ''}${p.model_answer || ''}`).join('<br>'), ans.querySelector('#pq-model'));
        for (const [k, s] of scheme.entries()) await md(s.step, ans.querySelectorAll('.pq__step-text')[k]);
        state.got = 0; haptic();
        ans.addEventListener('change', () => {
          let got = 0; for (const c of ans.querySelectorAll('input:checked')) got += Number(c.dataset.marks);
          state.got = Math.min(q.marks, got); ans.querySelector('#pq-score').textContent = `${state.got} / ${q.marks}`;
        });
        footer();
        setTimeout(() => ans.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      };
      const next = () => {
        const q = state.q; const got = state.got ?? 0;
        const low = store.recordAttempt({ id: q.id, key: `${q._sub.id}/${q._ch.id}`, type: q.type, marks: q.marks, got });
        results.push({ q, got, low });
        i++;
        if (i < questions.length) show(); else finish();
      };
      const finish = () => {
        bar.style.width = '100%'; count.textContent = 'Done';
        const total = results.reduce((n, r) => n + r.q.marks, 0), got = results.reduce((n, r) => n + r.got, 0), low = results.filter((r) => r.low);
        stage.innerHTML = `<div class="rc__card center">
            <div class="rc__big tnum">${got}<span class="t-2" style="font-size:.5em"> / ${total}</span></div>
            <div class="t-headline mt-2">${low.length === 0 ? 'All good.' : low.length <= 2 ? 'Nearly there.' : 'Worth a second go.'}</div>
            <p class="t-2 t-subhead mt-2">${low.length ? `${low.length} question${low.length === 1 ? '' : 's'} added to your Mistakes list.` : 'Nothing added to your Mistakes list.'}</p>
            ${low.length ? `<ul class="pq__lowlist">${low.map((r) => `<li>${esc(r.q._ch.title)} · ${TYPE_LABEL[r.q.type]} · ${r.got}/${r.q.marks}</li>`).join('')}</ul>` : ''}
          </div>`;
        foot.innerHTML = `<div class="rc__btns">${low.length ? `<a class="btn btn--plain" href="#/practice/retry">Retry mistakes</a>` : ''}<a class="btn" href="${back}">Done</a></div>`;
      };
      foot.addEventListener('click', (e) => {
        if (e.target.closest('[data-hint]')) hint();
        if (e.target.closest('[data-reveal]')) reveal();
        if (e.target.closest('[data-next]')) next();
      });
      stage.addEventListener('click', (e) => { const b = e.target.closest('.pq__opt'); if (b && !b.disabled) choose(b.dataset.key); });
      const onKey = (e) => {
        if (/^(input|textarea|select)$/i.test(e.target.tagName) || i >= questions.length || document.querySelector('dialog[open]')) return;
        if (e.key === 'Escape') location.hash = back;
        else if (state.revealed && e.key === 'Enter') next();
        else if (!state.revealed && autoMarked(state.q) && /^[1-6]$/.test(e.key)) choose(KEYS[Number(e.key) - 1]);
        else if (!state.revealed && !autoMarked(state.q) && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); reveal(); }
        else if (e.key === 'h' && state.q.hint) hint();
      };
      document.addEventListener('keydown', onKey);
      show();
      return () => document.removeEventListener('keydown', onKey);
    },
  };
}
