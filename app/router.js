// Hash router. Routes:
//   #/  #/today  #/subjects  #/classes  #/plan  #/practice  #/progress  #/more[/x]  #/mind[/<tool>]
//   #/<class>                        class 9–10 → subject list; 11–12 → stream picker
//   #/<class>/<stream>               subject list (11–12)
//   #/<class>[/<stream>]/<subject>   chapter list
//   #/<class>[/<stream>]/<subject>/<chapter>[/<tab>[/<extra>]]   (quiz/<type>)
import { streamless } from './data.js';

export function parseHash(hash = location.hash) {
  const raw = hash.replace(/^#\/?/, '').replace(/\/+$/, '');
  const seg = raw.split('/').filter(Boolean).map(decodeURIComponent);
  if (seg.length === 0 || seg[0] === 'today') return { name: 'today', seg };
  const top = seg[0];
  if (/^(9|10|11|12)$/.test(top)) {
    const classId = top;
    let i = 1;
    let streamId = 'general';
    if (!streamless(classId)) { streamId = seg[1] || null; i = 2; }
    const subjectId = seg[i] || null;
    const chapterId = seg[i + 1] || null;
    const tab = seg[i + 2] || null;
    const extra = seg[i + 3] || null; // e.g. …/<chapter>/quiz/<type>
    if (!streamId) return { name: 'streams', classId, seg };
    if (!subjectId) return { name: 'subjects-of', classId, streamId, seg };
    if (!chapterId) return { name: 'subject', classId, streamId, subjectId, seg };
    return { name: 'chapter', classId, streamId, subjectId, chapterId, tab: tab || null, extra, seg };
  }
  if (top === 'more') return { name: 'more', sub: seg[1] || null, seg };
  if (['subjects', 'classes', 'plan', 'practice', 'progress', 'about', 'request', 'access', 'login', 'awaiting', 'reset', 'live', 'admin', 'search', 'recall', 'signin', 'cards', 'timetable', 'mind'].includes(top)) return { name: top, sub: seg[1] || null, seg };
  return { name: 'not-found', seg };
}

const scrollMemory = new Map();
let current = null;

export function createRouter({ render, scroller }) {
  let navigatingBack = false;
  async function handle() {
    const prevHash = current;
    if (prevHash != null) scrollMemory.set(prevHash, scroller.scrollTop);
    current = location.hash || '#/';
    const route = parseHash(current);
    await render(route);
    const remembered = navigatingBack ? scrollMemory.get(current) : undefined;
    scroller.scrollTo({ top: remembered ?? 0, behavior: 'instant' });
    navigatingBack = false;
  }
  window.addEventListener('hashchange', handle);
  window.addEventListener('popstate', () => { navigatingBack = true; });
  return { start: handle, go: (hash) => { if (location.hash === hash) handle(); else location.hash = hash; }, back: () => history.back() };
}
