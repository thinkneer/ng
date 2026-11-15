// #/timetable — the student's week: sessions from their free time, filled with their active subjects and the
// next chapter of each. One tap says a session was done (paper work happens off the phone); the app also
// counts a session it saw in that subject. Kept sessions build points and a streak.
import { html, raw, icon, largeTitle, esc, toast, haptic, openSheet, today as todayDate } from '../ui.js';
import { routeFor } from '../data.js';
import { data } from '../data.js';
import { store } from '../store.js';
import * as T from '../timetable.js';

const ORDER = [1, 2, 3, 4, 5, 6, 0]; // Monday first
const HOURS = [0, 30, 60, 90, 120, 150, 180, 240, 300, 360, 420];
const hrs = (m) => (m === 0 ? 'Off' : m < 60 ? `${m} min` : `${m / 60} h`.replace('.5 h', '½ h'));

export async function timetable() {
  const s = store.settings;
  if (!s.class) return { title: 'Timetable', largeTitle: true, tab: 'timetable', html: html`${largeTitle('Timetable')}<div class="empty">${raw(icon('calendar'))}<h2 class="t-headline">Choose your class first</h2><a class="btn mt-4" href="#/classes">Choose class</a></div>` };
  const tt = T.getTimetable();
  const ctx = await T.context();
  if (!tt) return setup(s, ctx);
  return week(s, tt, ctx);
}

/* ---------- first time: three questions ---------- */
function setup(s, ctx, existing = null) {
  const pre = existing ? { session: existing.session, brk: existing.brk, days: existing.days } : T.defaultPrefs(s.class);
  const row = (label, key, day) => `<div class="tt-ask" data-key="${key}">
      <div class="t-subhead" style="font-weight:600">${label}</div>
      <div class="tt-ask__row">
        <label class="tt-ask__f">From<input type="time" value="${day.from}" data-from step="300"></label>
        <label class="tt-ask__f">Study time<select data-mins>${HOURS.map((m) => `<option value="${m}" ${m === day.mins ? 'selected' : ''}>${hrs(m)}</option>`).join('')}</select></label>
      </div>
    </div>`;
  return {
    title: 'Timetable', largeTitle: true, tab: 'timetable', back: existing ? '#/timetable' : '#/today',
    html: html`${largeTitle(existing ? 'Change my free time' : 'Make your timetable', { eyebrow: 'Timetable' })}
      <p class="t-2 t-subhead mb-4">Tell us when you can study. We fill it with ${ctx.subjects.length ? raw(ctx.subjects.map((x) => `<strong>${esc(x.short || x.name)}</strong>`).join(', ')) : 'your subjects'} and the next chapter of each, and every session ends on paper.</p>
      <div class="card">
        ${raw(row('School days (Mon–Fri)', 'school', pre.days[1]))}
        ${raw(row('Saturday', '6', pre.days[6]))}
        ${raw(row('Sunday', '0', pre.days[0]))}
        <div class="tt-ask"><div class="t-subhead" style="font-weight:600">One session lasts</div>
          <div class="segmented mt-2" style="position:static" role="radiogroup" aria-label="Session length" data-len>
            ${[30, 45, 60].map((m) => raw(`<button class="segmented__btn" type="button" role="radio" data-len-v="${m}" aria-checked="${m === pre.session}" aria-selected="${m === pre.session}">${m} min</button>`))}
          </div>
          <p class="t-footnote t-3 mt-2">With a 10-minute break between sessions.</p></div>
      </div>
      ${existing ? raw('<div class="notice notice--warn mt-4">' + icon('alert') + '<div>This rebuilds your sessions. Subjects or chapters you set by hand are reset to automatic.</div></div>') : ''}
      <button class="btn btn--block mt-4" type="button" id="tt-make">${raw(icon('calendar'))} ${existing ? 'Rebuild my timetable' : 'Make my timetable'}</button>
      <p class="t-footnote t-3 mt-3 center">You can change, add or remove any session afterwards.</p>`,
    mount(el) {
      let session = pre.session;
      el.querySelector('[data-len]').addEventListener('click', (e) => {
        const b = e.target.closest('[data-len-v]'); if (!b) return;
        session = Number(b.dataset.lenV);
        for (const x of el.querySelectorAll('[data-len-v]')) { const on = x === b; x.setAttribute('aria-checked', on); x.setAttribute('aria-selected', on); }
      });
      el.querySelector('#tt-make').addEventListener('click', () => {
        const read = (key) => { const r = el.querySelector(`[data-key="${key}"]`); return { from: r.querySelector('[data-from]').value || '17:00', mins: Number(r.querySelector('[data-mins]').value) }; };
        const school = read('school');
        const days = { 0: read('0'), 6: read('6') };
        for (const d of [1, 2, 3, 4, 5]) days[d] = { ...school };
        const prefs = { session, brk: 10, days };
        T.saveTimetable({ ...prefs, slots: T.buildSlots(prefs), since: existing?.since || T.iso(todayDate()) });
        haptic('success'); toast('Timetable ready');
        if (location.hash === '#/timetable') window.dispatchEvent(new HashChangeEvent('hashchange')); else location.hash = '#/timetable';
      });
    },
  };
}

/* ---------- the week ---------- */
async function week(s, tt, ctx) {
  const t0 = todayDate();
  const monday = new Date(t0); monday.setDate(t0.getDate() - ((t0.getDay() + 6) % 7));
  const dates = ORDER.map((_, i) => { const d = new Date(monday); d.setDate(monday.getDate() + i); return d; });
  const picked = Number(store.get('tt.day', null) ?? t0.getDay());
  const sel = dates.find((d) => d.getDay() === picked) || t0;
  const sc = T.score(tt, ctx);
  const yesterday = T.iso(new Date(t0.getTime() - 864e5));
  return {
    title: 'Timetable', largeTitle: true, tab: 'timetable', back: '#/today',
    actions: `<a class="icon-btn" href="#/timetable/setup" aria-label="Change my free time" title="Change my free time">${icon('settings')}</a>`,
    html: html`${largeTitle('Timetable', { eyebrow: 'This week' })}
      <div class="stats stats--3 mb-4">
        ${raw(`<div class="stat"><div class="stat__value tnum tt-flame">${icon('flame')}${sc.streak}</div><div class="stat__label">day streak${sc.best > sc.streak ? ` · best ${sc.best}` : ''}</div></div>`)}
        ${raw(`<div class="stat"><div class="stat__value tnum">${sc.points}</div><div class="stat__label">points</div></div>`)}
        ${raw(`<div class="stat"><div class="stat__value tnum">${sc.keptToday}/${sc.totalToday}</div><div class="stat__label">kept today</div></div>`)}
      </div>
      <div class="tt-days" role="tablist" aria-label="Day of the week">
        ${dates.map((d) => raw(`<button class="tt-day ${T.iso(d) === T.iso(t0) ? 'is-today' : ''}" type="button" role="tab" data-dow="${d.getDay()}" aria-selected="${d.getDay() === sel.getDay()}"><span>${T.DAY_SHORT[d.getDay()]}</span><span class="tt-day__n tnum">${d.getDate()}</span><span class="tt-day__dots">${dots(tt, ctx, d)}</span></button>`))}
      </div>
      <div id="tt-list">${raw(dayList(s, tt, ctx, sel, yesterday))}</div>
      <button class="btn btn--secondary btn--block mt-3" type="button" id="tt-add">${raw(icon('plusSquare'))} Add a session on ${T.DAY_NAMES[sel.getDay()]}</button>
      <p class="t-footnote t-3 mt-6">${T.POINTS.kept} points a kept session (${T.POINTS.part} for partly), +${T.POINTS.fullDay} for a full day. A streak day = ¾ of that day's sessions kept; days with no sessions don't break it. A session counts as kept when you tap Done, or when the app sees you study that subject for a third of it. You can mark today and yesterday.</p>`,
    mount(el) {
      el.querySelector('.tt-days').addEventListener('click', (e) => {
        const b = e.target.closest('[data-dow]'); if (!b) return;
        store.set('tt.day', Number(b.dataset.dow)); haptic('light');
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      });
      el.querySelector('#tt-add').addEventListener('click', () => editSlot(tt, ctx, sel.getDay(), null));
      el.querySelector('#tt-list').addEventListener('click', (e) => {
        const m = e.target.closest('[data-mark]');
        if (m) {
          const item = m.closest('[data-slot]');
          const prev = store.progress().tt_log?.[item.dataset.day]?.[item.dataset.slot];
          const v = prev === m.dataset.mark ? null : m.dataset.mark;
          T.mark(item.dataset.day, item.dataset.slot, v);
          haptic(v === 'done' ? 'success' : 'light');
          if (v === 'done') toast(`+${T.POINTS.kept} points · nice work`);
          window.dispatchEvent(new HashChangeEvent('hashchange'));
          return;
        }
        const ed = e.target.closest('[data-edit]');
        if (ed) { const item = ed.closest('[data-slot]'); editSlot(tt, ctx, Number(item.dataset.dow), item.dataset.slot); }
      });
    },
  };
}

function dots(tt, ctx, d) {
  const plan = T.planDay(tt, ctx, d); const progress = store.progress();
  if (T.iso(d) < (tt.since || '')) return plan.slice(0, 6).map(() => '<i></i>').join(''); // before the timetable existed
  return plan.slice(0, 6).map((p) => { const st = T.status(p, d, progress); return `<i class="${T.kept(st) ? 'ok' : st === 'part' ? 'half' : st === 'missed' || st === 'ask' ? 'no' : ''}"></i>`; }).join('');
}

function dayList(s, tt, ctx, date, yesterday) {
  const plan = T.planDay(tt, ctx, date);
  const day = T.iso(date), progress = store.progress();
  const canMark = (day === T.iso(todayDate()) || day === yesterday) && day >= (tt.since || '');
  const before = day < (tt.since || '');
  if (!plan.length) return `<div class="card center"><div class="t-headline">No sessions on ${T.DAY_NAMES[date.getDay()]}</div><p class="t-2 t-subhead mt-1">A day off. Add a session if you want one.</p></div>`;
  if (!ctx.subjects.length) return `<div class="notice">${icon('info')}<div>No active subjects yet. Add subjects from the Subjects tab.</div></div>`;
  return `<div class="list">${plan.map((p) => {
    const st = T.status(p, date, progress);
    const end = T.toHHMM(T.toMin(p.start) + p.mins);
    const colour = p.sub?.colour || '8795AB';
    const link = !p.sub ? '#/subjects' : p.task === 'exam' ? routeFor(s.class, s.stream, p.sub.id, 'exam-eve') : p.ch ? routeFor(s.class, s.stream, p.sub.id, p.ch.id, p.task === 'revise' ? 'mustknow' : p.task === 'practise' ? 'practice' : 'read') : routeFor(s.class, s.stream, p.sub.id);
    const what = p.task === 'exam' ? 'Exam eve + timed paper' : p.ch ? `Ch ${p.ch.number} · ${esc(p.ch.title)}` : 'Choose a chapter';
    const badge = before ? '' : st === 'ask' && !canMark && day < T.iso(todayDate()) ? '<span class="badge">Not marked</span>' : { done: `<span class="badge badge--live">${icon('check')} Done</span>`, seen: `<span class="badge badge--live" title="The app saw you study this">${icon('check')} Seen</span>`, part: '<span class="badge badge--soon">Partly</span>', missed: '<span class="badge">Missed</span>', now: '<span class="badge badge--new">Now</span>' }[st] || '';
    const ask = canMark && (st === 'ask' || st === 'now' || st === 'done' || st === 'part' || st === 'missed');
    return `<div class="list__item has-leading tt-slot tt-slot--${st}" data-slot="${esc(p.id)}" data-day="${day}" data-dow="${date.getDay()}" style="--unit:#${colour}">
      <span class="list__leading tt-slot__time"><span class="tnum">${T.fmtTime(p.start).replace(/ (am|pm)$/, '')}</span><small>${T.fmtTime(p.start).slice(-2)}</small></span>
      <a class="list__body" href="${link}">
        <span class="list__title">${esc(p.sub?.short || p.sub?.name || 'Free session')}${p.auto ? '' : ` <span class="t-3" title="Set by you">${icon('flag')}</span>`} ${badge}</span>
        <span class="list__sub"><strong>${what}</strong> · ${T.fmtTime(p.start)}–${T.fmtTime(end)}</span>
        <span class="list__sub">${esc(T.taskText(p))}</span>
      </a>
      <span class="tt-slot__side">
        ${ask ? `<span class="tt-mark" role="group" aria-label="Did you do it?"><button type="button" data-mark="done" aria-pressed="${st === 'done'}" title="Done">${icon('check')}</button><button type="button" data-mark="part" aria-pressed="${st === 'part'}" title="Partly">½</button><button type="button" data-mark="missed" aria-pressed="${st === 'missed'}" title="Missed">${icon('x')}</button></span>` : ''}
        <button class="icon-btn icon-btn--sm" type="button" data-edit aria-label="Change this session">${icon('settings')}</button>
      </span>
    </div>`;
  }).join('')}</div>`;
}

/* ---------- change one session (it repeats every week on that day) ---------- */
function editSlot(tt, ctx, dow, slotId) {
  const slots = [...(tt.slots[dow] || [])];
  const last = slots.sort((a, b) => T.toMin(a.start) - T.toMin(b.start))[slots.length - 1];
  const cur = slots.find((x) => x.id === slotId) || { id: Math.random().toString(36).slice(2, 8), start: last ? T.toHHMM(T.toMin(last.start) + last.mins + (tt.brk || 10)) : '17:00', mins: tt.session || 45, subject: 'auto' };
  const isNew = !slots.some((x) => x.id === slotId);
  const panel = document.createElement('div');
  const chapterOptions = (subId, chosen) => {
    const sub = ctx.subjects.find((x) => x.id === subId); if (!sub) return '';
    return `<option value="">Next chapter, from your ticks</option>${data.allChapters(sub).map((c) => `<option value="${esc(c.id)}" ${c.id === chosen ? 'selected' : ''}>Ch ${c.number} · ${esc(c.title)}</option>`).join('')}`;
  };
  panel.innerHTML = `
    <label for="ts-sub">Subject</label>
    <select id="ts-sub"><option value="auto">Automatic: rotates; in exam season, the next paper</option>${ctx.subjects.map((x) => `<option value="${esc(x.id)}" ${x.id === cur.subject ? 'selected' : ''}>${esc(x.name)}</option>`).join('')}</select>
    <div id="ts-ch-wrap" ${cur.subject === 'auto' ? 'hidden' : ''}><label for="ts-ch" class="mt-3">Chapter</label><select id="ts-ch">${chapterOptions(cur.subject, cur.chapter)}</select></div>
    <div class="tt-ask__row mt-3">
      <label class="tt-ask__f">Starts<input type="time" id="ts-start" value="${cur.start}" step="300"></label>
      <label class="tt-ask__f">Lasts<select id="ts-mins">${[20, 30, 45, 60, 75, 90, 120].map((m) => `<option value="${m}" ${m === cur.mins ? 'selected' : ''}>${m} min</option>`).join('')}</select></label>
    </div>
    <p class="t-footnote t-3 mt-2">Repeats every ${T.DAY_NAMES[dow]}.</p>
    <button class="btn btn--block mt-4" type="button" id="ts-save">${isNew ? 'Add session' : 'Save'}</button>
    ${isNew ? '' : '<button class="btn btn--ghost btn--block mt-2" type="button" id="ts-del" style="color:var(--danger)">Remove this session</button>'}`;
  const sheet = openSheet({ title: `${isNew ? 'New session' : 'Session'} · ${T.DAY_NAMES[dow]}`, content: panel });
  const subSel = panel.querySelector('#ts-sub');
  subSel.addEventListener('change', () => { panel.querySelector('#ts-ch-wrap').hidden = subSel.value === 'auto'; panel.querySelector('#ts-ch').innerHTML = chapterOptions(subSel.value, null); });
  const save = (next) => { T.saveTimetable({ ...tt, slots: { ...tt.slots, [dow]: next } }); sheet.close(); haptic('success'); window.dispatchEvent(new HashChangeEvent('hashchange')); };
  panel.querySelector('#ts-save').addEventListener('click', () => {
    const subject = subSel.value;
    const upd = { ...cur, subject, chapter: subject === 'auto' ? undefined : (panel.querySelector('#ts-ch').value || undefined), start: panel.querySelector('#ts-start').value || cur.start, mins: Number(panel.querySelector('#ts-mins').value) };
    const s0 = T.toMin(upd.start), s1 = s0 + upd.mins;
    const clash = (tt.slots[dow] || []).find((x) => x.id !== upd.id && T.toMin(x.start) < s1 && s0 < T.toMin(x.start) + x.mins);
    if (clash) { toast(`That overlaps the ${T.fmtTime(clash.start)} session`); haptic('medium'); return; }
    save([...(tt.slots[dow] || []).filter((x) => x.id !== upd.id), upd]);
  });
  panel.querySelector('#ts-del')?.addEventListener('click', () => save((tt.slots[dow] || []).filter((x) => x.id !== cur.id)));
}

/* #/timetable/setup */
export async function timetableSetup() {
  const s = store.settings;
  const tt = T.getTimetable();
  const ctx = await T.context();
  return setup(s, ctx, tt);
}
