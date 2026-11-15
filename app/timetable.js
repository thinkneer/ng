// Timetable: a weekly study plan built from the time a student says they have, filled with their active
// subjects and the next chapter of each; the app checks whether each session was kept and keeps a streak.
// Everything is saved on the device in progress (timetable, tt_log, activity) — no set-up beyond 3 questions.
//
//   progress.timetable = { v:1, session, brk, days: { 0..6: { from:'HH:MM', mins } }, slots: { 0..6: [slot] } }
//   slot               = { id, start:'HH:MM', mins, subject:'auto'|<id>, chapter?:<id> }   (0 = Sunday)
//   progress.tt_log    = { 'YYYY-MM-DD': { <slotId>: 'done'|'part'|'missed' } }   what the student said
//   progress.activity  = { 'YYYY-MM-DD': { <subject>: [minute of day, …] } }      minutes the app saw
// A session counts as kept when the student says Done, or the app saw ≥ ⅓ of it (at least 10 min) in that
// subject around its time. Paper work happens off the phone, so "Done" is always one tap away.
import { store } from './store.js';
import { data } from './data.js';

export const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const DAY_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const POINTS = { kept: 10, part: 5, fullDay: 20 };
const KEEP_RATIO = 0.75; // a streak day = at least ¾ of that day's sessions kept

/* ---------- time helpers ---------- */
export const toMin = (hhmm) => { const [h, m] = String(hhmm || '0:0').split(':').map(Number); return h * 60 + (m || 0); };
export const toHHMM = (min) => `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
export const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const fmtTime = (hhmm) => { const m = toMin(hhmm); const h = Math.floor(m / 60); return `${((h + 11) % 12) + 1}:${String(m % 60).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`; };
const midnight = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
const uid = () => Math.random().toString(36).slice(2, 8);

/* ---------- the plan ---------- */
/** Sensible first answers: school days 3 h from 5 pm, Saturday 5 h from 10 am, Sunday 2 h (half-day off). */
export function defaultPrefs(cls) {
  const light = cls === '9' || cls === '11'; // school years: less
  const school = { from: '17:00', mins: light ? 120 : 180 };
  return { session: 45, brk: 10, days: { 0: { from: '10:00', mins: light ? 60 : 120 }, 1: school, 2: { ...school }, 3: { ...school }, 4: { ...school }, 5: { ...school }, 6: { from: '10:00', mins: light ? 180 : 300 } } };
}

/** Sessions of `session` minutes with `brk` between them, filling each day's time. All subjects "auto". */
export function buildSlots(prefs) {
  const slots = {};
  for (let d = 0; d < 7; d++) {
    const day = prefs.days[d] || { from: '17:00', mins: 0 };
    const n = Math.floor((day.mins + prefs.brk) / (prefs.session + prefs.brk));
    let t = toMin(day.from);
    slots[d] = [];
    for (let k = 0; k < n; k++) { slots[d].push({ id: uid(), start: toHHMM(t), mins: prefs.session, subject: 'auto' }); t += prefs.session + prefs.brk; }
  }
  return slots;
}

export const getTimetable = () => store.progress().timetable || null;
export function saveTimetable(tt) { store.saveProgress((p) => ({ ...p, timetable: { v: 1, ...tt } })); }
export function slotsOn(tt, date) { return [...(tt?.slots?.[date.getDay()] || [])].sort((a, b) => toMin(a.start) - toMin(b.start)); }
export function minutesPlanned(tt, dow) { return (tt?.slots?.[dow] || []).reduce((a, s) => a + s.mins, 0); }

/* ---------- what to study in a session ---------- */
/** Active subjects (the admin opened them and the student kept them) + paper dates, for the timetable. */
export async function context() {
  const s = store.settings;
  if (!s.class) return { subjects: [], papers: [] };
  const [subjects, exams] = await Promise.all([data.liveSubjects(s.class, s.stream), data.examsFor(s.class, s.stream).catch(() => null)]);
  const mine = subjects.filter((x) => store.isMine(x.id));
  const papers = (exams?.papers || []).filter((p) => mine.some((m) => m.id === p.subject)).sort((a, b) => a.date.localeCompare(b.date));
  const byDate = (id) => papers.find((p) => p.subject === id)?.date || '9999';
  mine.sort((a, b) => byDate(a.id).localeCompare(byDate(b.id)) || a.name.localeCompare(b.name));
  return { subjects: mine, papers, tracker: store.progress().tracker || {} };
}

/** Exam season: the days after one paper (or the 3 days before the first) belong to the next paper's subject. */
export function gapSubject(ctx, date) {
  const day = iso(date);
  const next = ctx.papers.find((p) => p.date >= day);
  if (!next) return null;
  const prev = [...ctx.papers].reverse().find((p) => p.date < day);
  const start = prev ? prev.date : iso(new Date(new Date(next.date + 'T00:00').getTime() - 3 * 864e5));
  return day > start || (!prev && day >= start) ? next.subject : null;
}

/** Auto sessions rotate through the active subjects; a subject whose paper is within 60 days comes up twice as often. */
function rotation(ctx, date) {
  const soon = iso(new Date(date.getTime() + 60 * 864e5));
  const cycle = [];
  for (const s of ctx.subjects) { cycle.push(s.id); const p = ctx.papers.find((x) => x.subject === s.id); if (p && p.date <= soon) cycle.push(s.id); }
  // spread the doubled ones out: A A B C → A B A C
  const out = []; const pool = [...cycle];
  while (pool.length) { const i = pool.findIndex((x) => x !== out[out.length - 1]); out.push(pool.splice(i < 0 ? 0 : i, 1)[0]); }
  return out;
}

/** The next chapter to work on in a subject, from the student's ticks (L learnt, R1, R2 revised, E exam-ready). */
export function nextChapter(sub, tracker = {}) {
  const chapters = data.allChapters(sub).filter((c) => c.items?.notes || c.items?.mustknow);
  if (!chapters.length) return null;
  const t = (c) => tracker[`${sub.id}/${c.id}`] || {};
  for (const [flag, step] of [['L', 'learn'], ['R1', 'revise'], ['R2', 'revise'], ['E', 'practise']]) {
    const c = chapters.find((x) => !t(x)[flag]);
    if (c) return { ch: c, step };
  }
  return { ch: chapters[0], step: 'paper' };
}

/** A day's sessions with subject, chapter and the task, ready to show. */
export function planDay(tt, ctx, date) {
  const slots = slotsOn(tt, date);
  if (!ctx.subjects.length) return slots.map((s) => ({ ...s, sub: null }));
  const gap = gapSubject(ctx, date);
  const cyc = rotation(ctx, date);
  const dayNo = Math.floor(midnight(date).getTime() / 864e5);
  let k = 0;
  const offset = (dayNo * 3) % Math.max(1, cyc.length); // a different starting subject each day
  return slots.map((s) => {
    const fixed = s.subject !== 'auto' && ctx.subjects.find((x) => x.id === s.subject);
    const subId = fixed ? s.subject : gap || cyc[(offset + k++) % cyc.length];
    const sub = ctx.subjects.find((x) => x.id === subId) || null;
    if (!sub) return { ...s, sub: null };
    if (!fixed && gap) return { ...s, sub, task: 'exam', auto: true };
    const pinned = s.chapter && data.allChapters(sub).find((c) => c.id === s.chapter);
    const next = pinned ? { ch: pinned, step: 'chosen' } : nextChapter(sub, ctx.tracker);
    return { ...s, sub, ch: next?.ch || null, task: next?.step || 'paper', auto: !fixed };
  });
}

/** One line on what to do, always ending on paper. */
export function taskText(p) {
  const learn = Math.max(10, p.mins - 15), paper = Math.min(15, p.mins - 10);
  switch (p.task) {
    case 'learn': return `Read ${learn} min, then ${paper} min on paper: write what you remember, then one question.`;
    case 'revise': return `Must know + Recall, then ${paper} min on paper: rewrite the key lines and formulas from memory.`;
    case 'practise': return `Practice questions on paper, then mark yourself with the scheme.`;
    case 'chosen': return `Your chosen chapter: read or recall, then ${paper} min on paper.`;
    case 'exam': return `Paper coming: Exam eve page, then a timed section on paper.`;
    default: return `A timed section of a full paper, on paper.`;
  }
}

/* ---------- what the app saw ---------- */
/** One minute of study in a subject (called every minute while a subject page is open and visible). */
export function logMinute(subject, now = new Date()) {
  const day = iso(now), m = now.getHours() * 60 + now.getMinutes();
  store.saveProgress((p) => {
    const a = { ...(p.activity || {}) };
    const list = a[day]?.[subject] || [];
    if (list[list.length - 1] === m) return p;
    a[day] = { ...(a[day] || {}), [subject]: [...list, m] };
    const keep = Object.keys(a).sort().slice(-28); // four weeks is plenty
    return { ...p, activity: Object.fromEntries(keep.map((k) => [k, a[k]])) };
  });
}
function seenMinutes(progress, day, subject, from, to) {
  return (progress.activity?.[day]?.[subject] || []).filter((m) => m >= from && m <= to).length;
}

export function mark(day, slotId, value) {
  store.saveProgress((p) => {
    const log = { ...(p.tt_log || {}) };
    log[day] = { ...(log[day] || {}) };
    if (value) log[day][slotId] = value; else delete log[day][slotId];
    const keep = Object.keys(log).sort().slice(-120);
    return { ...p, tt_log: Object.fromEntries(keep.map((k) => [k, log[k]])) };
  });
}

/** 'done' | 'part' | 'missed' (said) · 'seen' (app saw it) · 'now' · 'upcoming' · 'ask' (ended, not marked). */
export function status(p, date, progress = store.progress(), now = new Date()) {
  const day = iso(date);
  const said = progress.tt_log?.[day]?.[p.id];
  if (said) return said;
  const from = toMin(p.start), to = from + p.mins;
  if (p.sub && seenMinutes(progress, day, p.sub.id, from - 10, to + 20) >= Math.max(10, Math.round(p.mins / 3))) return 'seen';
  const today = iso(now), cur = now.getHours() * 60 + now.getMinutes();
  if (day > today || (day === today && cur < from)) return 'upcoming';
  if (day === today && cur < to) return 'now';
  return 'ask';
}
export const kept = (st) => st === 'done' || st === 'seen';

/** Points and streak, from the last 60 days. Today counts once it is kept; it never breaks the streak early. */
export function score(tt, ctx, now = new Date()) {
  const progress = store.progress();
  let points = 0, streak = 0, best = 0, run = 0, keptToday = 0, totalToday = 0;
  const today = midnight(now);
  const days = [];
  for (let i = 59; i >= 0; i--) days.push(new Date(today.getTime() - i * 864e5));
  // only count days since the timetable was first made
  const since = tt?.since || iso(today);
  for (const d of days) {
    const day = iso(d);
    if (day < since) continue;
    const plan = planDay(tt, ctx, d);
    if (!plan.length) continue; // a day with no sessions neither builds nor breaks a streak
    const sts = plan.map((p) => status(p, d, progress, now));
    const k = sts.filter(kept).length, part = sts.filter((s) => s === 'part').length;
    points += k * POINTS.kept + part * POINTS.part + (k === plan.length ? POINTS.fullDay : 0);
    const isToday = day === iso(today);
    if (isToday) { keptToday = k; totalToday = plan.length; }
    const good = (k + part / 2) / plan.length >= KEEP_RATIO;
    if (good) { run++; best = Math.max(best, run); }
    else if (!isToday) run = 0; // today still has time
  }
  streak = run;
  return { points, streak, best, keptToday, totalToday };
}

/** The session happening now, or the next one today (for Today and the side panel). */
export function nowAndNext(tt, ctx, now = new Date()) {
  const plan = planDay(tt, ctx, now);
  const cur = now.getHours() * 60 + now.getMinutes();
  const nowP = plan.find((p) => cur >= toMin(p.start) && cur < toMin(p.start) + p.mins);
  const nextP = plan.find((p) => toMin(p.start) > cur);
  return { now: nowP || null, next: nextP || null, plan };
}
