// Progress sync (db mode, decided 19 Nov 2026): the member's phone saves a summary of its progress to Supabase
// (student_progress, via progress_save) so their group teachers and the admin can see it on My students.
// Only a summary leaves the phone: papers + marks, streak and points, chapters read, recall cards, mistakes and
// study minutes. Highlights, notes and the recall schedule itself stay on the device.
import { store } from './store.js';
import { data } from './data.js';

const MIN_GAP = 5 * 60000; // at most once every 5 minutes unless something important (marks) changed
let busy = false;

/** Build the summary from this device's progress. */
export async function buildSummary() {
  const s = store.settings, p = store.progress();
  const recall = p.recall || {};
  const today = new Date().toISOString().slice(0, 10);
  const subjects = s.class ? (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id)) : [];
  const isRead = (sub, c) => !!p.tracker?.[`${sub.id}/${c.id}`]?.L || store.get(`reader.pos.${sub.id}/${c.id}`, 0) >= 0.95;
  const subs = subjects.map((sub) => {
    const chapters = data.allChapters(sub);
    let learnt = 0, seen = 0;
    for (const x of Object.values(recall)) if (!x.deck && x.key?.startsWith(sub.id + '/')) { seen++; if (x.box >= 1) learnt++; }
    const ticks = chapters.map((c) => ({ c, t: p.tracker?.[`${sub.id}/${c.id}`] || {} }));
    return {
      id: sub.id, name: sub.short || sub.name, chapters: chapters.length,
      read: chapters.filter((c) => isRead(sub, c)).length,
      revised: ticks.filter(({ t }) => t.R1 || t.R2).length,
      learnt, seen,
      paper: Object.entries(p.paper || {}).filter(([k]) => k.startsWith(sub.id + '/')).reduce((n, [, m]) => n + Object.keys(m).length, 0),
    };
  });
  let due = 0;
  for (const x of Object.values(recall)) if (!x.deck && x.due <= today) due++;
  const papers = (p.papers || []).slice(-40).map((x) => ({ subject: x.subject, id: x.id, code: x.code || null, at: x.at, minutes: x.minutes ?? null, early: !!x.early, score: x.score ?? null, out_of: x.out_of ?? null, marks: x.marks || null, marked_at: x.marked_at || null }));
  const mistakes = (p.mistakes || []).filter((m) => m && m.id).slice(-60).map((m) => ({ id: m.id, key: m.key, type: m.type, marks: m.marks, got: m.got, title: m.title ? String(m.title).slice(0, 140) : null, at: m.at }));
  const minutes = {};
  for (const [day, bySub] of Object.entries(p.activity || {}).sort().slice(-14)) minutes[day] = Object.fromEntries(Object.entries(bySub).map(([k, v]) => [k, v.length]));
  let tt = null;
  try {
    const T = await import('./timetable.js');
    const t = T.getTimetable();
    if (t) { const sc = T.score(t, await T.context()); tt = { streak: sc.streak, best: sc.best, points: sc.points, kept_today: sc.keptToday, today: sc.totalToday }; }
  } catch { /* no timetable yet */ }
  const marked = papers.filter((x) => x.score != null && x.out_of);
  const last = marked[marked.length - 1];
  const sum = (k) => subs.reduce((a, x) => a + x[k], 0);
  return {
    v: 1, at: new Date().toISOString(), class: s.class, stream: s.stream,
    head: {
      streak: tt?.streak ?? 0, points: tt?.points ?? 0, has_timetable: !!tt,
      read: sum('read'), chapters: sum('chapters'), learnt: sum('learnt'), due,
      mistakes: mistakes.length, papers: papers.length, marked: marked.length,
      last_pct: last ? Math.round((100 * last.score) / last.out_of) : null,
      last_active: Object.keys(minutes).sort().pop() || null,
      week_minutes: Object.entries(minutes).filter(([d]) => d >= new Date(Date.now() - 6 * 864e5).toISOString().slice(0, 10)).reduce((a, [, v]) => a + Object.values(v).reduce((x, y) => x + y, 0), 0),
    },
    timetable: tt, subjects: subs, papers, mistakes, minutes,
  };
}

/** Save the summary when it changed (and not more often than every 5 minutes unless forced). */
export async function syncProgress({ force = false } = {}) {
  const sess = store.get('session', null);
  if (!sess?.db || busy || !navigator.onLine) return;
  const last = store.get('sync.last', null);
  if (!force && last && Date.now() - last.t < MIN_GAP) return;
  busy = true;
  try {
    const summary = await buildSummary();
    const { at, ...rest } = summary;
    const hash = JSON.stringify(rest).length + ':' + simpleHash(JSON.stringify(rest));
    if (last?.hash === hash && last.who === sess.uid && Date.now() - last.t < 6 * 3600e3) return;
    const { db } = await import('./db.js');
    const c = await db(); if (!c) return;
    const { error } = await c.rpc('progress_save', { p_summary: summary });
    if (!error) store.set('sync.last', { t: Date.now(), hash, who: sess.uid });
  } catch { /* offline or not set up yet: try again later */ } finally { busy = false; }
}

function simpleHash(str) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }

/** Start: shortly after opening, every 10 minutes while open, and when the app goes to the background. */
export function startSync() {
  setTimeout(() => syncProgress(), 8000);
  setInterval(() => { if (document.visibilityState === 'visible') syncProgress(); }, 10 * 60000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') syncProgress({ force: true }); });
}
