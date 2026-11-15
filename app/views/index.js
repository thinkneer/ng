// Views load on demand: a chapter page fetches chapter.js and what it uses, not all twenty screens.
import { emptyState } from '../ui.js';

const ROUTE_MODULE = { streams: 'classes', 'subjects-of': 'classes', locked: 'classes', subjects: 'classes', about: 'more', request: 'signin', access: 'signin', login: 'signin', awaiting: 'signin', reset: 'signin' };
/** Start fetching a route's code now (while the session is checked), without running it. */
export function prefetchView(name) { const load = L[ROUTE_MODULE[name] || name]; if (load) load().catch(() => {}); }

const lazy = (load, name) => async (r, ctx) => (await load())[name](r, ctx);
const L = {
  today: () => import('./today.js'),
  classes: () => import('./classes.js'),
  subject: () => import('./subject.js'),
  // a chapter route also warms up the notes renderer (marked, DOMPurify, KaTeX) and the chapter list
  chapter: () => { import('../markdown.js').then((m) => m.preloadMarkdown()).catch(() => {}); return import('./chapter.js'); },
  practice: () => import('./practice.js'),
  progress: () => import('./progress.js'),
  plan: () => import('./plan.js'),
  more: () => import('./more.js'),
  recall: () => import('./recall.js'),
  signin: () => import('./signin.js'),
  admin: () => import('./admin.js'),
  live: () => import('./live.js'),
  cards: () => import('./cards.js'),
};

export const views = {
  today: lazy(L.today, 'today'),
  classes: lazy(L.classes, 'classes'),
  streams: lazy(L.classes, 'streams'),
  'subjects-of': lazy(L.classes, 'subjectsOf'),
  locked: lazy(L.classes, 'locked'),
  subjects: lazy(L.classes, 'subjectsTab'),
  subject: lazy(L.subject, 'subject'),
  chapter: lazy(L.chapter, 'chapter'),
  practice: lazy(L.practice, 'practice'),
  progress: lazy(L.progress, 'progress'),
  plan: lazy(L.plan, 'plan'),
  more: lazy(L.more, 'more'),
  recall: lazy(L.recall, 'recallDue'),
  about: async (r) => (await L.more()).more({ ...r, sub: 'about' }),
  signin: lazy(L.signin, 'signin'),
  request: lazy(L.signin, 'request'),
  access: lazy(L.signin, 'request'),
  login: lazy(L.signin, 'signin'),
  awaiting: lazy(L.signin, 'awaiting'),
  reset: lazy(L.signin, 'reset'),
  admin: lazy(L.admin, 'admin'),
  live: lazy(L.live, 'live'),
  cards: lazy(L.cards, 'cardsRoute'),
  'not-found': async () => ({
    title: 'Not found', tab: 'today',
    html: emptyState({ icon: 'alert', title: 'That page does not exist', text: 'Check the link, or start from Today.', action: '<a class="btn btn--secondary" href="#/today">Go to Today</a>' }),
  }),
};
