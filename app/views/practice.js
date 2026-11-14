import { html, raw, icon, largeTitle, esc, emptyState, listItem } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';

export async function practice() {
  const s = store.settings;
  if (!s.class) return { title: 'Practice', largeTitle: true, tab: 'practice', html: html`${largeTitle('Practice')}${emptyState({ icon: 'practice', title: 'Choose your class first', text: 'Practice sets are organised by subject and chapter.', action: '<a class="btn" href="#/classes">Choose class</a>' })}` };
  const subjects = (await data.liveSubjects(s.class, s.stream)).filter((x) => !s.subjects?.length || s.subjects.includes(x.id));
  const withQ = subjects.map((sub) => ({ sub, chapters: data.allChapters(sub).filter((c) => c.items?.questions) })).filter((x) => x.chapters.length);
  const mistakes = store.progress().mistakes?.length || 0;
  return {
    title: 'Practice', largeTitle: true, tab: 'practice',
    html: html`${largeTitle('Practice', { eyebrow: 'By chapter, type and stars' })}
      <div class="stats mb-4">
        ${raw(`<div class="stat"><div class="stat__value tnum">${withQ.reduce((n, x) => n + x.chapters.reduce((m, c) => m + c.questions, 0), 0)}</div><div class="stat__label">questions in the bank</div></div>`)}
        ${raw(`<div class="stat"><div class="stat__value tnum">${mistakes}</div><div class="stat__label">in your mistakes list</div></div>`)}
      </div>
      ${withQ.length ? withQ.map(({ sub, chapters }) => raw(`<div class="list__header"><span>${esc(sub.name)}</span><span class="count">${chapters.length} chapters</span></div><div class="list">${chapters.map((c) => listItem({ href: routeFor(s.class, s.stream, sub.id, c.id, 'practice'), title: `${c.number}. ${c.title}`, sub: `${c.questions} questions · ${Object.entries(c.question_types).map(([t, n]) => `${n} ${t}`).join(', ')}`, leading: String(c.number), leadingStyle: `--unit:#${c.unitObj.colour}` })).join('')}</div>`)) :
        emptyState({ icon: 'practice', title: 'No practice sets yet', text: 'Question banks arrive subject by subject. Each question comes with a hint, a model answer and a step-mark scheme so you can mark yourself the way an examiner would.', action: '<a class="btn btn--secondary" href="#/subjects">Browse subjects</a>' })}
      <div class="card mt-6"><div class="t-headline">How practice will work</div><ul class="t-2 t-subhead mt-2" style="padding-left:1.2em"><li>One question per screen; hint first, full answer only when you ask.</li><li>MCQ and A–R marked automatically; written answers shown with the step-mark scheme.</li><li>Timed exams built from the CBSE 2026–27 pattern: full paper, one unit, or chosen chapters.</li><li>Every wrong or low-marked question lands in your Mistakes list for revision.</li></ul></div>`,
  };
}
