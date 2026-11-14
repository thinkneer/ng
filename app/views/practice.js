// Practice tab: your Mistakes list, then the chapters that have questions. Sessions run in quiz.js.
import { html, raw, icon, largeTitle, esc, emptyState, listItem, toast } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { TYPE_LABEL } from './quiz.js';

export async function practice(route) {
  if (route.sub === 'retry') { const { quizMistakes } = await import('./quiz.js'); return quizMistakes(); }
  const s = store.settings;
  if (!s.class) return { title: 'Practice', largeTitle: true, tab: 'practice', html: html`${largeTitle('Practice')}${emptyState({ icon: 'practice', title: 'Choose your class first', text: 'Practice sets are organised by subject and chapter.', action: '<a class="btn" href="#/classes">Choose class</a>' })}` };
  const subjects = (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id));
  if (route.sub === 'mistakes') return mistakesList(subjects, s);
  const withQ = subjects.map((sub) => ({ sub, chapters: data.allChapters(sub).filter((c) => c.items?.questions) })).filter((x) => x.chapters.length);
  const mistakes = store.mistakes().length;
  const examSubs = subjects.filter((sub) => sub.exam_mode);
  return {
    title: 'Practice', largeTitle: true, tab: 'practice',
    html: html`${largeTitle('Practice', { eyebrow: 'One question at a time · mark yourself' })}
      <a class="card continue pressable mb-4" href="#/practice/mistakes" style="--unit:${mistakes ? 'var(--danger)' : '#8795AB'}">
        <span class="list__leading">${raw(icon('flag'))}</span>
        <span class="continue__main"><span class="continue__title">${mistakes ? `${mistakes} in your Mistakes list` : 'Mistakes list is empty'}</span><span class="continue__sec" style="color:var(--text-2);font-weight:500">${mistakes ? 'Wrong or low-marked questions · tap to retry' : 'Wrong or low-marked questions collect here for a second go'}</span></span>
        ${raw(icon('chevronRight', { class: 'chev', size: 20 }))}
      </a>
      ${examSubs.length ? raw(`<div class="list__header"><span>Full papers · 3 hours</span></div><div class="list mb-4">${examSubs.map((sub) => { const run = store.examSession(); const mine = run && run.subject === sub.id && Date.now() < (run.endedAt || run.endsAt); return String(listItem({ href: mine ? run.route : routeFor(s.class, s.stream, sub.id, 'exam'), title: sub.name, sub: mine ? `Paper ${esc(run.paper)} running · tap to resume` : 'Exam mode · board pattern · write on paper', leading: icon('timer'), leadingStyle: `--unit:${mine ? 'var(--danger)' : '#' + sub.colour}` })); }).join('')}</div>`) : ''}
      ${withQ.length ? withQ.map(({ sub, chapters }) => raw(`<div class="list__header"><span>${esc(sub.name)}</span><span class="count">${chapters.reduce((n, c) => n + c.questions, 0)} questions</span></div><div class="list">${chapters.map((c) => String(listItem({ href: routeFor(s.class, s.stream, sub.id, c.id, 'practice'), title: `${c.number}. ${c.title}`, sub: Object.entries(c.question_types).map(([t, n]) => `${n} × ${TYPE_LABEL[t] || t}`).join(' · '), leading: String(c.number), leadingStyle: `--unit:#${c.unitObj.colour}` }))).join('')}</div>`)) :
        emptyState({ icon: 'practice', title: 'No practice sets yet', text: 'Question banks arrive subject by subject. Each question has a hint, a model answer and a step-mark scheme so you can mark yourself the way an examiner would.', action: '<a class="btn btn--secondary" href="#/subjects">Browse subjects</a>' })}`,
  };
}

async function mistakesList(subjects, s) {
  const ms = store.mistakes();
  const groups = {};
  for (const m of ms) (groups[m.key] ||= []).push(m);
  const rows = [];
  for (const [key, list] of Object.entries(groups)) {
    const [subId, chId] = key.split('/');
    const sub = subjects.find((x) => x.id === subId); if (!sub) continue;
    const { unit, chapter: ch } = data.chapterOf(sub, chId); if (!ch) continue;
    const qs = ch.items?.questions ? await data.questions(sub, chId).catch(() => []) : [];
    rows.push({ sub, ch, unit, items: list.map((m) => ({ m, q: qs.find((q) => q.id === m.id) })).filter((x) => x.q), blocks: list.filter((m) => /^(num|derive):/.test(m.id)) });
  }
  return {
    title: 'Mistakes', tab: 'practice', back: '#/practice',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Mistakes</h1>
      ${rows.length ? html`${rows.some((r) => r.items.length) ? html`<a class="btn btn--block mb-4" href="#/practice/retry">${raw(icon('practice'))} Retry all ${rows.reduce((n, r) => n + r.items.length, 0)}</a>` : ''}
        ${rows.map(({ sub, ch, unit, items, blocks }) => raw(`<div class="list__header"><span>${esc(sub.name)} · Ch ${ch.number}</span><span class="count">${items.length + blocks.length}</span></div><div class="list">${blocks.map((m) => `<div class="list__item has-leading" style="--unit:#${unit.colour}"><span class="list__leading">${m.type === 'derive' ? icon('timer') : icon('formula')}</span><a class="list__body" href="${routeFor(s.class, s.stream, sub.id, ch.id, 'notes')}" style="color:inherit;text-decoration:none"><span class="list__title">${esc(m.title || (m.type === 'derive' ? 'Derivation' : 'Numerical') + ': ' + m.id.split(':')[1].replace(/-/g, ' '))}</span><span class="list__sub">${m.got}/${m.marks} last time · in Read, with fresh numbers</span></a><button class="icon-btn" type="button" data-clear="${esc(m.id)}" aria-label="Remove from mistakes">${icon('check')}</button></div>`).join('')}${items.map(({ m, q }) => `<div class="list__item has-leading" style="--unit:#${unit.colour}"><span class="list__leading">${TYPE_LABEL[q.type]?.split(' ')[0] || q.type}</span><span class="list__body"><span class="list__title pq__stem-line">${esc(q.stem.replace(/\*+|<br>|\$/g, ' ').slice(0, 140))}</span><span class="list__sub">${m.got}/${m.marks} last time · ${esc(q.label)}</span></span><button class="icon-btn" type="button" data-clear="${esc(q.id)}" aria-label="Remove from mistakes">${icon('check')}</button></div>`).join('')}</div>`))}
        <p class="t-footnote t-3 mt-4">A question leaves this list when you score at least half on a retry, or when you tick it off here. Numericals in Read leave it when you get fresh numbers right.</p>`
        : emptyState({ icon: 'check', title: 'Nothing here', text: 'Wrong answers and low self-marks from Practice collect here. Open a chapter’s Practice tab to start.', action: '<a class="btn btn--secondary" href="#/practice">Back to Practice</a>' })}`,
    mount(el) {
      el.addEventListener('click', (e) => {
        const b = e.target.closest('[data-clear]'); if (!b) return;
        store.clearMistake(b.dataset.clear); const item = b.closest('.list__item'); item.remove(); toast('Removed from mistakes');
      });
    },
  };
}
