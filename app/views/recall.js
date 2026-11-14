// Recall session: flashcards from Must-know lines. One chapter (…/<chapter>/recall) or everything due (#/recall).
import { html, raw, icon, esc, emptyState, haptic } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { cardsFrom, session, answer, summary, cardState } from '../recall.js';

export async function recallChapter({ cls, stream, sub, unit, ch }) {
  const src = ch.items?.mustknow ? await data.mustknow(sub, ch.id) : null;
  const cards = src ? cardsFrom(src, { subject: sub.id, chapter: ch.id, chapterTitle: ch.title, colour: unit.colour }) : [];
  return build({ title: `Recall · Ch ${ch.number}`, cards: session(cards, { max: 25 }), back: routeFor(cls.id, stream.id, sub.id, ch.id, 'mustknow'), colour: unit.colour, cls, stream, sub, total: cards.length });
}

/** All formula cards of one subject (every chapter's :::formula boxes), same Leitner schedule as chapter Recall. */
export async function formulaCards(sub) {
  const out = [];
  for (const c of data.allChapters(sub).filter((x) => x.items?.mustknow)) {
    const src = await data.mustknow(sub, c.id);
    if (src) out.push(...cardsFrom(src, { subject: sub.id, chapter: c.id, chapterTitle: c.title, colour: c.unitObj.colour }).filter((k) => k.kind === 'formula'));
  }
  return out;
}
/** …/<subject>/formulas/drill — a recall session of formula cards only. */
export async function recallFormulas({ cls, stream, sub }) {
  const cards = await formulaCards(sub);
  return build({ title: `Drill formulas · ${sub.name}`, cards: session(cards, { max: 30 }), back: routeFor(cls.id, stream.id, sub.id, 'formulas'), colour: sub.colour, cls, stream, sub, total: cards.length, emptyTitle: 'No formula cards yet', emptyText: 'Titled :::formula boxes in each chapter’s Must know become drill cards.' });
}

/** #/recall — everything due today across the student's subjects. */
export async function recallDue() {
  const s = store.settings;
  if (!s.class) return { title: 'Recall', tab: 'today', html: emptyState({ icon: 'bolt', title: 'Choose your class first', action: '<a class="btn" href="#/classes">Choose class</a>' }) };
  const subjects = (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id));
  const sum = summary();
  const dueKeys = Object.entries(sum.byChapter).filter(([, v]) => v.due > 0).map(([k]) => k);
  let cards = [];
  for (const key of dueKeys) {
    const [subId, chId] = key.split('/');
    const sub = subjects.find((x) => x.id === subId); if (!sub) continue;
    const { unit, chapter } = data.chapterOf(sub, chId); if (!chapter?.items?.mustknow) continue;
    const src = await data.mustknow(sub, chId);
    cards.push(...cardsFrom(src, { subject: sub.id, chapter: chId, chapterTitle: chapter.title, colour: unit.colour }));
  }
  const list = session(cards, { max: 40, onlyDue: true });
  if (!list.length) {
    return { title: 'Recall', tab: 'today', back: '#/today', html: html`${emptyState({ icon: 'check', title: sum.seen ? 'Nothing due today' : 'No cards yet', text: sum.seen ? 'Come back tomorrow, or open any chapter\'s Must know tab and tap Recall to go beyond the schedule.' : 'Open a chapter, go to Must know and tap Recall. Every line becomes a card; the ones you miss come back tomorrow, the ones you know come back later.', action: `<a class="btn btn--secondary" href="#/subjects">Open a subject</a>` })}` };
  }
  return build({ title: 'Recall · due today', cards: list, back: '#/today', colour: null, cls: s.class, stream: s.stream, total: list.length });
}

function build({ title, cards, back, colour, cls, stream, sub, total, emptyTitle, emptyText }) {
  const unitStyle = colour ? `--unit:#${colour}` : '';
  return {
    title, tab: 'today', fullscreen: true, unitColour: colour,
    html: html`<div class="rc" id="rc" style="${unitStyle}">
      <header class="rc__top">
        <a class="icon-btn" href="${back}" aria-label="Close">${raw(icon('x'))}</a>
        <div class="rc__title"><span id="rc-count" class="tnum"></span></div>
        <span style="width:var(--tap)"></span>
      </header>
      <div class="rc__track"><span id="rc-bar"></span></div>
      <main class="rc__stage" id="rc-stage"></main>
      <footer class="rc__foot" id="rc-foot"></footer>
    </div>`,
    async mount(el) {
      const stage = el.querySelector('#rc-stage'), foot = el.querySelector('#rc-foot'), count = el.querySelector('#rc-count'), bar = el.querySelector('#rc-bar');
      const { renderMarkdown } = await import('../markdown.js');
      let i = 0, revealed = false; const results = { got: 0, again: 0, againCards: [] };
      if (!cards.length) { stage.innerHTML = String(emptyState({ icon: 'bolt', title: emptyTitle || 'No cards in this chapter yet', text: emptyText || 'Must-know lines appear here as flashcards once the chapter has them.', action: `<a class="btn btn--secondary" href="${back}">Back</a>` })); return; }
      const md = async (s) => { const n = await renderMarkdown(s, { unitColour: colour || undefined, eager: true }); n.classList.add('rc__md'); return n; };
      const show = async () => {
        const c = cards[i]; revealed = false;
        count.textContent = `${i + 1} of ${cards.length}`;
        bar.style.width = ((i) / cards.length * 100).toFixed(1) + '%';
        const st = cardState(c.id);
        stage.innerHTML = `<div class="rc__card" style="--unit:#${c.colour}">
            <div class="rc__meta"><span class="chip chip--unit">${esc(c.chapterTitle)}</span><span class="t-footnote t-3">${esc(c.section)}${st ? ` · box ${st.box + 1}` : ' · new'}</span></div>
            <div class="rc__prompt" id="rc-prompt"></div>
            <div class="rc__answer" id="rc-answer" hidden></div>
          </div>`;
        stage.querySelector('#rc-prompt').appendChild(await md(c.prompt));
        stage.querySelector('#rc-answer').appendChild(await md(c.answer));
        foot.innerHTML = `<button class="btn btn--block" type="button" data-reveal>Show answer <span class="kbd only-desktop" style="margin-left:.5rem">space</span></button>`;
      };
      const reveal = () => {
        if (revealed) return; revealed = true;
        stage.querySelector('#rc-answer').hidden = false;
        foot.innerHTML = `<div class="rc__btns"><button class="btn btn--plain" type="button" data-grade="0">${icon('x')} Again <span class="kbd only-desktop">1</span></button><button class="btn" type="button" data-grade="1">${icon('check')} Got it <span class="kbd only-desktop">2</span></button></div>`;
      };
      const grade = (got) => {
        const c = cards[i]; answer(c, got); haptic(got ? 'success' : 'medium');
        if (got) results.got++; else { results.again++; results.againCards.push(c); }
        i++;
        if (i < cards.length) show(); else finish();
      };
      const finish = () => {
        bar.style.width = '100%'; count.textContent = 'Done';
        const byCh = {}; for (const c of results.againCards) byCh[c.chapterTitle] = (byCh[c.chapterTitle] || 0) + 1;
        const worst = Object.entries(byCh).sort((a, b) => b[1] - a[1])[0];
        const sum = summary();
        stage.innerHTML = `<div class="rc__card center">
            <div class="rc__big tnum">${results.got}<span class="t-2" style="font-size:.5em"> / ${cards.length}</span></div>
            <div class="t-headline mt-2">${results.again === 0 ? 'Clean sweep.' : results.again <= 3 ? 'Nearly there.' : 'Those will come back tomorrow.'}</div>
            <p class="t-2 t-subhead mt-2">${results.again} to see again tomorrow · the rest return in 3 days or later.</p>
            ${worst ? `<p class="t-subhead mt-4"><strong>Revise next:</strong> ${esc(worst[0])} (${worst[1]} missed)</p>` : ''}
            <p class="t-footnote t-3 mt-4">${sum.due ? `${sum.due} more due today across your subjects.` : 'Nothing else due today.'}</p>
          </div>`;
        foot.innerHTML = `<div class="rc__btns">${sum.due ? `<a class="btn btn--plain" href="#/recall">Do the rest</a>` : ''}<a class="btn" href="${back}">Done</a></div>`;
      };
      foot.addEventListener('click', (e) => { if (e.target.closest('[data-reveal]')) reveal(); const g = e.target.closest('[data-grade]'); if (g) grade(g.dataset.grade === '1'); });
      stage.addEventListener('click', (e) => { if (!e.target.closest('a')) reveal(); });
      const onKey = (e) => {
        if (/^(input|textarea|select)$/i.test(e.target.tagName) || i >= cards.length) return;
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); reveal(); }
        else if (revealed && e.key === '1') grade(false);
        else if (revealed && e.key === '2') grade(true);
        else if (e.key === 'Escape') location.hash = back;
      };
      document.addEventListener('keydown', onKey);
      show();
      return () => document.removeEventListener('keydown', onKey);
    },
  };
}
