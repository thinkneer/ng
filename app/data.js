// Data access: index.json (built), classes.json and chapter content. All relative to the app root.
import { subjectAllowed } from './access.js';
const cache = new Map();

async function getJSON(path) {
  if (cache.has(path)) return cache.get(path);
  const p = fetch(path, { cache: 'no-cache' }).then(async (r) => {
    if (!r.ok) throw new Error(`${r.status} ${path}`);
    return r.json();
  });
  cache.set(path, p);
  p.catch(() => cache.delete(path));
  return p;
}
async function getText(path) {
  const key = `text:${path}`;
  if (cache.has(key)) return cache.get(key);
  const p = fetch(path, { cache: 'no-cache' }).then(async (r) => (r.ok ? r.text() : null));
  cache.set(key, p);
  return p;
}

export const data = {
  index: () => getJSON('data/index.json'),
  classes: () => getJSON('data/classes.json'),
  exams: (cls, year) => getJSON(`data/exams/class-${cls}-${year}.json`),
  plan: (cls, year) => getJSON(`data/plans/class-${cls}-${year}.json`),
  pattern: (cls, subject) => getJSON(`data/patterns/class-${cls}/${subject}.json`),

  /** Resolve class/stream/subject objects from the built index. Classes 9–10 have stream "general". */
  async resolve(classId, streamId, subjectId) {
    const idx = await this.index();
    const cls = idx.classes.find((c) => c.id === classId);
    if (!cls) return { cls: null };
    const stream = streamId ? cls.streams.find((s) => s.id === streamId) : null;
    const subject = stream && subjectId ? stream.subjects.find((s) => s.id === subjectId) : null;
    return { idx, cls, stream, subject };
  },
  chapterOf(subject, chapterId) {
    for (const u of subject.units) {
      const ch = u.chapters.find((c) => c.id === chapterId);
      if (ch) return { unit: u, chapter: ch };
    }
    return { unit: null, chapter: null };
  },
  allChapters(subject) {
    return subject.units.flatMap((u) => u.chapters.map((c) => ({ ...c, unitObj: u })));
  },
  notes: (subject, chapterId) => getText(`${subject.path}/${chapterId}/notes.md`),
  mustknow: (subject, chapterId) => getText(`${subject.path}/${chapterId}/mustknow.md`),
  formulas: (subject, chapterId) => getText(`${subject.path}/${chapterId}/formulas.md`),
  questions: (subject, chapterId) => getJSON(`${subject.path}/${chapterId}/questions.json`),
  cards: (subject, chapterId) => getJSON(`${subject.path}/${chapterId}/cards.json`),
  memory: () => getJSON('data/memory.json').catch(() => ({})),
  chapterMeta: (subject, chapterId) => getJSON(`${subject.path}/${chapterId}/chapter.json`).catch(() => null),

  /** Live subjects for the student's chosen class/stream that the admin lets this member open. */
  async liveSubjects(classId, streamId) {
    const { cls, stream } = await this.resolve(classId, streamId);
    if (!cls) return [];
    const st = stream || cls.streams[0];
    return st ? st.subjects.filter((s) => s.status === 'live' && subjectAllowed(cls.id, st.id, s.id)) : [];
  },
  /** Paper dates for a class, by board year inferred from the first subject with an exam_date. */
  async examsFor(classId, streamId) {
    const { stream, cls, idx } = await this.resolve(classId, streamId);
    const st = stream || cls?.streams?.[0];
    const dated = st?.subjects.find((s) => s.exam_date);
    if (!dated) return null;
    const year = dated.exam_date.slice(0, 4);
    const key = `${classId}-${year}`;
    if (!idx.exams[key]) return null;
    return this.exams(classId, year);
  },
};

export function streamless(classId) { return classId === '9' || classId === '10'; }
export function routeFor(classId, streamId, subjectId, chapterId, tab) {
  const parts = ['#', classId];
  if (!streamless(classId) && streamId) parts.push(streamId);
  if (subjectId) parts.push(subjectId);
  if (chapterId) parts.push(chapterId);
  if (tab) parts.push(tab);
  return parts.join('/');
}
