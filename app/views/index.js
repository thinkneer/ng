import { today } from './today.js';
import { classes, streams, subjectsOf, subjectsTab } from './classes.js';
import { subject } from './subject.js';
import { chapter } from './chapter.js';
import { practice } from './practice.js';
import { progress } from './progress.js';
import { plan } from './plan.js';
import { more } from './more.js';
import { emptyState } from '../ui.js';

export const views = {
  today,
  classes,
  streams,
  'subjects-of': subjectsOf,
  subjects: subjectsTab,
  subject,
  chapter,
  practice,
  progress,
  plan,
  more,
  about: (r) => more({ ...r, sub: 'about' }),
  request: (r) => more({ ...r, sub: 'request' }),
  access: (r) => more({ ...r, sub: 'access' }),
  login: (r) => more({ ...r, sub: 'access' }),
  admin: (r) => more({ ...r, sub: 'access' }),
  'not-found': async () => ({
    title: 'Not found', tab: 'today',
    html: emptyState({ icon: 'alert', title: 'That page does not exist', text: 'Check the link, or start from Today.', action: '<a class="btn btn--secondary" href="#/today">Go to Today</a>' }),
  }),
};
