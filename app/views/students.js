// My students (#/students, #/students/<id>): teachers and the admin (db mode; supabase/migrations/004).
// Admin → teachers → groups → students. Students join themselves; a teacher picks existing students into a group
// (like picking a team) and sees each one's progress summary (saved by the student's phone, app/sync.js) and the
// live quizzes the teacher ran. The admin sees every teacher, group and student.
import { raw, icon, esc, toast, haptic, emptyState, openSheet, largeTitle } from '../ui.js';
import { data } from '../data.js';
import { session, isDbMode } from '../auth.js';
import { db, errText } from '../db.js';

const SETUP = 'One-time setup: run supabase/migrations/004_groups_progress.sql in the Supabase SQL Editor (after 003), then open this page again.';
const setupErr = (e) => (/could not find the function|in the schema cache/i.test(e?.message || '') ? SETUP : errText(e));

const streamsOf = (idx) => idx.classes.flatMap((c) => c.streams.map((st) => ({ c, st, key: `${c.id}|${st.id}`, label: st.id === 'general' ? c.name : `${c.name} ${st.name}` })));
const findStream = (idx, cls, stream) => streamsOf(idx).find((x) => x.c.id === String(cls) && (x.st.id === stream || x.st.id === 'general'));
const classLabel = (idx, cls, stream) => (cls === 'any' ? 'Any class' : findStream(idx, cls, stream)?.label || `Class ${cls}`);
function subjectInfo(idx, id) {
  for (const { st } of streamsOf(idx)) { const s = st.subjects.find((x) => x.id === id); if (s) return s; }
  return { id, name: id, short: id, colour: '8795AB' };
}
const ago = (d) => {
  if (!d) return '';
  const m = Math.round((Date.now() - new Date(d)) / 60000);
  if (m < 2) return 'just now'; if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60); if (h < 24) return `${h} h ago`;
  const days = Math.round(h / 24); return days < 30 ? `${days} day${days > 1 ? 's' : ''} ago` : new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
};
const dateShort = (d) => (d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '');
const initials = (n) => esc(String(n || '?').slice(0, 2).toUpperCase());

async function guard() {
  const s = session();
  if (!['admin', 'teacher'].includes(s?.role)) return { title: 'Not found', tab: 'more', html: emptyState({ icon: 'lock', title: 'For teachers only' }) };
  if (!(await isDbMode())) return { title: 'My students', tab: 'more', back: '#/more', html: emptyState({ icon: 'lock', title: 'Needs the online member list', text: 'Groups work on the live site only.' }) };
  return null;
}

export async function students(route) {
  const stop = await guard(); if (stop) return stop;
  return route.sub ? detail(route.sub) : overview();
}

/* ======================================================================  overview  */
function headLine(st) {
  const h = st.head;
  if (st.status === 'suspended') return 'paused';
  if (!h) return 'No progress yet: it appears once they open the app';
  const bits = [];
  if (h.has_timetable) bits.push(h.streak ? `${h.streak}-day streak` : 'no streak');
  bits.push(`${h.read}/${h.chapters} chapters read`);
  if (h.last_pct != null) bits.push(`last paper ${h.last_pct}%`);
  if (h.mistakes) bits.push(`${h.mistakes} mistake${h.mistakes > 1 ? 's' : ''}`);
  bits.push(`seen ${ago(st.synced)}`);
  return bits.join(' · ');
}
const studentRow = (st) => `<a class="list__item has-leading pressable" href="#/students/${esc(st.id)}">
    <span class="list__leading" style="--unit:${st.status === 'approved' ? 'var(--accent)' : '#8795AB'}">${initials(st.nickname)}</span>
    <span class="list__body"><span class="list__title">${esc(st.nickname)}</span><span class="list__sub">${esc(headLine(st))}</span></span>
    <span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></a>`;

function groupCard(idx, g, canEdit) {
  const sub = g.subject ? subjectInfo(idx, g.subject).name : 'All subjects';
  return `<div class="card mb-4" data-group="${esc(g.id)}">
    <div class="row row--between"><div class="grow"><div class="t-headline">${esc(g.name)}</div>
      <div class="t-footnote t-2">${esc(classLabel(idx, g.class, g.stream))} · ${esc(sub)} · ${g.students.length} student${g.students.length === 1 ? '' : 's'}</div></div>
      ${canEdit ? `<button class="btn btn--sm btn--plain" type="button" data-edit>Edit</button>` : ''}</div>
    ${g.students.length ? `<div class="list mt-2">${g.students.map(studentRow).join('')}</div>` : '<p class="t-subhead t-2 mt-2">No students yet. Pick them from the students who have joined.</p>'}
    <button class="btn btn--sm btn--secondary mt-4" type="button" data-pick>${icon('plusSquare')} Pick students</button>
  </div>`;
}

async function overview() {
  const c = await db();
  const idx = await data.index();
  const admin = session().role === 'admin';
  const { data: o, error } = await c.rpc('staff_overview');
  const title = admin ? 'Teachers & students' : 'My students';
  if (error) return { title, tab: 'more', back: '#/more', html: raw(`${largeTitle(title)}<div class="notice notice--warn">${icon('alert')}<div>${esc(setupErr(error))}</div></div>`) };
  const groups = o.groups || [];
  const nStudents = new Set(groups.flatMap((g) => g.students.map((s) => s.id))).size;
  let body = '';
  if (admin) {
    const teachers = o.teachers || [];
    for (const t of teachers) {
      const mine = groups.filter((g) => g.teacher_id === t.id);
      if (!mine.length && t.role === 'admin') continue;
      body += `<div class="list__header" style="padding-left:0">${esc(t.nickname)} <span class="count">${esc(t.role)} · ${mine.length} group${mine.length === 1 ? '' : 's'}</span></div>`;
      body += mine.length ? mine.map((g) => groupCard(idx, g, true)).join('') : '<p class="t-subhead t-2 mb-4">No groups yet.</p>';
    }
    const un = o.ungrouped || [];
    body += `<div class="list__header" style="padding-left:0">Not in any group <span class="count">${un.length}</span></div>`;
    body += un.length ? `<div class="list">${un.map(studentRow).join('')}</div>` : '<p class="t-subhead t-2">Every student is in a group.</p>';
  } else {
    body = groups.length ? groups.map((g) => groupCard(idx, g, true)).join('')
      : `<div class="card"><div class="t-headline">Start with a group</div><p class="t-subhead t-2 mt-1">A group is the students you teach, for example <em>Class 12 Physics</em>. Students join the app themselves; you pick them into your group and then see their papers, quiz results, study streak and mistakes.</p></div>`;
  }
  const teacherCount = admin ? (o.teachers || []).filter((t) => t.role === 'teacher').length : 0;
  return {
    title, largeTitle: true, tab: 'more', back: '#/more',
    html: raw(`${largeTitle(title, { eyebrow: admin ? `${teacherCount} teacher${teacherCount === 1 ? '' : 's'} · ${groups.length} group${groups.length === 1 ? '' : 's'} · ${nStudents} in groups` : `${groups.length} group${groups.length === 1 ? '' : 's'} · ${nStudents} student${nStudents === 1 ? '' : 's'}` })}
      <button class="btn btn--block mb-4" type="button" id="new-group">${icon('plusSquare')} New group</button>
      <div id="groups">${body}</div>
      <p class="t-footnote t-3 mt-4">Progress is a summary each student's phone saves while they use the app: papers and marks, timetable streak, chapters read, recall cards, mistakes and study minutes. Highlights and notes stay private on their phone. Quiz results show the live quizzes ${admin ? 'anyone' : 'you'} ran.</p>`),
    mount(el) {
      el.querySelector('#new-group').addEventListener('click', () => editGroup(c, idx, null, o.teachers || []));
      el.querySelector('#groups').addEventListener('click', (e) => {
        const card = e.target.closest('[data-group]'); if (!card) return;
        const g = groups.find((x) => x.id === card.dataset.group);
        if (e.target.closest('[data-edit]')) editGroup(c, idx, g, o.teachers || []);
        if (e.target.closest('[data-pick]')) pickStudents(c, idx, g);
      });
    },
  };
}

/** Sheet: new group / edit group (name, class, subject; the admin also picks the teacher). */
function editGroup(c, idx, g, teachers) {
  const admin = session().role === 'admin';
  const options = streamsOf(idx).filter((o) => o.st.status === 'live' || (g && o.c.id === g.class));
  const mineKey = findStream(idx, session().class, session().stream)?.key;
  const cur = g ? findStream(idx, g.class, g.stream)?.key : (options.some((o) => o.key === mineKey) ? mineKey : options[0]?.key);
  const panel = document.createElement('div');
  panel.innerHTML = `
    ${admin ? `<label for="eg-teacher">Teacher</label><select id="eg-teacher">${teachers.map((t) => `<option value="${esc(t.id)}" ${(g ? g.teacher_id : session().uid) === t.id ? 'selected' : ''}>${esc(t.nickname)}${t.role === 'admin' ? ' (you)' : ''}</option>`).join('')}</select>` : ''}
    <label for="eg-class" class="${admin ? 'mt-4' : ''}">Class</label>
    <select id="eg-class">${options.map((o) => `<option value="${esc(o.key)}" ${o.key === cur ? 'selected' : ''}>${esc(o.label)}</option>`).join('')}</select>
    <label for="eg-subject" class="mt-4">Subject</label>
    <select id="eg-subject"></select>
    <label for="eg-name" class="mt-4">Group name</label>
    <input id="eg-name" maxlength="60" autocomplete="off" value="${esc(g?.name || '')}">
    <p class="auth__err mt-2" id="eg-err" role="alert" hidden></p>
    <button class="btn btn--block mt-4" type="button" id="eg-save">${g ? 'Save' : 'Create group'}</button>
    ${g ? '<button class="btn btn--block btn--plain mt-2" type="button" id="eg-delete" style="color:var(--danger, #c0392b)">Delete group</button><p class="t-footnote t-3 mt-2">Deleting a group keeps the students’ accounts and progress.</p>' : ''}`;
  const $ = (s) => panel.querySelector(s);
  const nameEl = $('#eg-name'); let touched = !!g;
  nameEl.addEventListener('input', () => { touched = true; });
  const fill = () => {
    const o = options.find((x) => x.key === $('#eg-class').value);
    const subs = o ? o.st.subjects : [];
    const keep = $('#eg-subject').value || g?.subject || '';
    $('#eg-subject').innerHTML = `<option value="">All subjects (class teacher)</option>${subs.map((s) => `<option value="${esc(s.id)}" ${s.id === keep ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}`;
    if (!touched) { const s = subs.find((x) => x.id === $('#eg-subject').value); nameEl.value = `${o ? o.label : ''}${s ? ' ' + (s.short || s.name) : ''}`.trim(); }
  };
  fill();
  $('#eg-class').addEventListener('change', fill);
  $('#eg-subject').addEventListener('change', () => { if (!touched) fill(); });
  const sheet = openSheet({ title: g ? 'Edit group' : 'New group', content: panel });
  const fail = (m) => { const e = $('#eg-err'); e.textContent = m; e.hidden = false; haptic('medium'); };
  $('#eg-save').addEventListener('click', async (e) => {
    const [cls, stream] = $('#eg-class').value.split('|');
    const name = nameEl.value.trim(); if (!name) return fail('Give the group a name.');
    e.target.disabled = true;
    const { error } = await c.rpc('group_save', { p_id: g?.id || null, p_name: name, p_class: cls, p_stream: stream, p_subject: $('#eg-subject').value || null, p_teacher: admin ? $('#eg-teacher').value : null });
    if (error) { e.target.disabled = false; return fail(setupErr(error)); }
    haptic('success'); sheet.close(); toast(g ? 'Group saved' : `${name} created`); setTimeout(() => location.reload(), 400);
  });
  $('#eg-delete')?.addEventListener('click', async (e) => {
    if (!confirm(`Delete ${g.name}? The students keep their accounts and progress.`)) return;
    e.target.disabled = true;
    const { error } = await c.rpc('group_delete', { p_group: g.id });
    if (error) { e.target.disabled = false; return fail(setupErr(error)); }
    sheet.close(); toast('Group deleted'); setTimeout(() => location.reload(), 400);
  });
}

/** Sheet: pick students into a group, like picking a team. Students of the group's class come first. */
async function pickStudents(c, idx, g) {
  const panel = document.createElement('div');
  panel.innerHTML = '<p class="t-subhead t-2">Loading the students who have joined…</p>';
  const sheet = openSheet({ title: `Pick for ${g.name}`, content: panel });
  const { data: list, error } = await c.rpc('group_pick_list', { p_group: g.id });
  if (error) { panel.innerHTML = `<p class="auth__err">${esc(setupErr(error))}</p>`; return; }
  const sameClass = (s) => s.class === g.class && (s.stream === g.stream || g.stream === 'general');
  const chosen = new Set();
  panel.innerHTML = `
    <p class="t-subhead t-2">Tick the students to add. Only students who joined and were approved are listed. Someone missing? Ask them to Join with a nickname first.</p>
    ${list.length > 8 ? '<input type="search" id="pk-q" placeholder="Find a nickname" aria-label="Find a nickname" class="mt-4">' : ''}
    <div id="pk-list" class="mt-2">${list.length ? list.map((s) => `<label class="check" data-nick="${esc(s.nickname.toLowerCase())}"><input type="checkbox" value="${esc(s.id)}" ${s.in_group ? 'checked disabled' : ''}><span class="grow">${esc(s.nickname)}</span><span class="t-footnote ${sameClass(s) ? 't-2' : 't-3'}">${s.in_group ? 'in group' : esc(classLabel(idx, s.class, s.stream))}</span></label>`).join('') : '<p class="t-footnote t-2">No approved students yet.</p>'}</div>
    <button class="btn btn--block mt-4" type="button" id="pk-save" disabled>Add students</button>`;
  const save = panel.querySelector('#pk-save');
  panel.querySelector('#pk-q')?.addEventListener('input', (e) => { const q = e.target.value.trim().toLowerCase(); for (const r of panel.querySelectorAll('[data-nick]')) r.hidden = !!q && !r.dataset.nick.includes(q); });
  panel.querySelector('#pk-list').addEventListener('change', (e) => {
    if (e.target.type !== 'checkbox') return;
    if (e.target.checked) chosen.add(e.target.value); else chosen.delete(e.target.value);
    save.disabled = !chosen.size; save.textContent = chosen.size ? `Add ${chosen.size} student${chosen.size > 1 ? 's' : ''}` : 'Add students';
  });
  save.addEventListener('click', async () => {
    save.disabled = true; save.textContent = 'Adding…';
    const { data: n, error: err } = await c.rpc('group_add_students', { p_group: g.id, p_students: [...chosen] });
    if (err) { toast(setupErr(err), { duration: 6000 }); save.disabled = false; save.textContent = 'Add students'; return; }
    haptic('success'); sheet.close(); toast(`${n} added to ${g.name}`); setTimeout(() => location.reload(), 400);
  });
}

/* ======================================================================  one student  */
async function detail(id) {
  const c = await db();
  const idx = await data.index();
  const { data: d, error } = await c.rpc('student_detail', { p_student: id });
  if (error) return { title: 'Student', tab: 'more', back: '#/students', html: emptyState({ icon: 'lock', title: 'Can’t open this student', text: setupErr(error) }) };
  const sm = d.summary || null, h = sm?.head || null;
  const sub = (sid) => subjectInfo(idx, sid);
  const chapterName = (key) => {
    const [sid, ch] = String(key || '').split('/');
    const s = sub(sid);
    return `${s.short || s.name}${ch ? ' · ' + ch.replace(/^ch-0?/, 'Ch ') : ''}`;
  };
  const stat = (v, label) => `<div class="stat"><div class="stat__value">${esc(v)}</div><div class="stat__label">${esc(label)}</div></div>`;
  let html = largeTitle(d.nickname, { eyebrow: `${classLabel(idx, d.class, d.stream)}${d.status === 'suspended' ? ' · paused' : ''}${d.groups.length ? ' · ' + d.groups.map((g) => g.name).join(', ') : ''}` });
  if (!sm) {
    html += `<div class="card mb-4"><div class="t-headline">No progress yet</div><p class="t-subhead t-2 mt-1">Their phone saves a summary while they use the app. It appears here after they next open it (they may need to close and reopen the app once to get today’s version).</p></div>`;
  } else {
    html += `<div class="stats stats--3 mb-2">
        ${stat(h.has_timetable ? `${h.streak}` : '–', h.has_timetable ? 'day streak' : 'no timetable')}
        ${stat(`${h.points}`, 'points')}
        ${stat(`${h.read}/${h.chapters}`, 'chapters read')}
        ${stat(`${h.learnt}`, 'recall learnt')}
        ${stat(`${h.due}`, 'recall due')}
        ${stat(`${h.mistakes}`, 'mistakes')}
      </div>
      <p class="t-footnote t-3 mb-4">Saved from their phone ${esc(ago(d.synced))}.</p>`;
    // study minutes, last 14 days
    const days = [];
    for (let i = 13; i >= 0; i--) { const dt = new Date(Date.now() - i * 864e5); const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`; const m = Object.values(sm.minutes?.[key] || {}).reduce((a, b) => a + b, 0); days.push({ dt, m }); }
    const max = Math.max(30, ...days.map((x) => x.m));
    const total = days.reduce((a, x) => a + x.m, 0);
    html += `<div class="list__header" style="padding-left:0">Study in the app, last 14 days <span class="count">${Math.round(total / 6) / 10} h</span></div>
      <div class="card mb-4"><div style="display:flex;align-items:flex-end;gap:4px;height:5rem" role="img" aria-label="Minutes of study per day, last 14 days">
        ${days.map((x) => `<div title="${esc(x.dt.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }))}: ${x.m} min" style="flex:1;background:${x.m ? 'var(--accent)' : 'var(--separator)'};border-radius:3px 3px 0 0;height:${Math.max(4, Math.round((x.m / max) * 100))}%"></div>`).join('')}
      </div><div class="row row--between t-footnote t-3 mt-1"><span>${esc(dateShort(days[0].dt))}</span><span>today</span></div>
      <p class="t-footnote t-3 mt-2">Minutes with a subject open on screen. Work on paper happens off the phone, so this is a floor, not the whole story.</p></div>`;
    // papers
    const papers = [...(sm.papers || [])].reverse();
    html += `<div class="list__header" style="padding-left:0">Exam papers <span class="count">${papers.length}</span></div>`;
    html += papers.length ? `<div class="list mb-4">${papers.map((p) => {
      const s = sub(p.subject);
      const score = p.score != null && p.out_of ? `${p.score} / ${p.out_of} · ${Math.round((100 * p.score) / p.out_of)}%` : 'not marked yet';
      return `<div class="list__item has-leading"><span class="list__leading" style="--unit:#${esc(s.colour)}">${esc((s.short || s.name).slice(0, 2))}</span><span class="list__body"><span class="list__title">${esc(s.short || s.name)} · ${esc(String(p.id).toUpperCase())}</span><span class="list__sub">${esc(dateShort(p.at))}${p.minutes ? ` · ${p.minutes} min` : ''}${p.code ? ` · code ${esc(p.code)}` : ''}</span></span><span class="list__trailing t-subhead" style="font-weight:600">${esc(score)}</span></div>`;
    }).join('')}</div>` : '<p class="t-subhead t-2 mb-4">No 3-hour papers sat yet.</p>';
  }
  // live quizzes (from the database, not the phone)
  const qz = d.quizzes || [];
  html += `<div class="list__header" style="padding-left:0">Live quizzes <span class="count">${qz.length}</span></div>`;
  html += qz.length ? `<div class="list mb-4">${qz.map((q) => `<div class="list__item"><span class="list__body"><span class="list__title">${esc(q.title || (q.subject ? sub(q.subject).name : 'Quiz'))}</span><span class="list__sub">${esc(dateShort(q.at))} · by ${esc(q.host)} · answered ${q.answered} of ${q.total}</span></span><span class="list__trailing t-subhead" style="font-weight:600">${q.score} / ${q.total}</span></div>`).join('')}</div>`
    : `<p class="t-subhead t-2 mb-4">No live quizzes ${session().role === 'admin' ? '' : 'of yours '}joined yet.</p>`;
  if (sm) {
    // subjects
    html += `<div class="list__header" style="padding-left:0">Subjects</div><div class="list mb-4">${(sm.subjects || []).map((s) => {
      const info = sub(s.id);
      return `<div class="list__item has-leading"><span class="list__leading" style="--unit:#${esc(info.colour)}">${esc((info.short || info.name).slice(0, 2))}</span><span class="list__body"><span class="list__title">${esc(info.name)}</span><span class="list__sub">${s.read}/${s.chapters} read · ${s.revised} revised · ${s.learnt} recall learnt${s.paper ? ` · ${s.paper} on paper` : ''}</span></span></div>`;
    }).join('') || '<div class="list__item t-2">No subjects</div>'}</div>`;
    // mistakes
    const ms = [...(sm.mistakes || [])].reverse();
    html += `<div class="list__header" style="padding-left:0">Mistakes to fix <span class="count">${ms.length}</span></div>`;
    html += ms.length ? `<div class="list mb-4">${ms.slice(0, 40).map((m) => `<div class="list__item"><span class="list__body"><span class="list__title">${esc(m.title || m.id)}</span><span class="list__sub">${esc(chapterName(m.key))} · ${esc(String(m.type || '').toUpperCase())} · got ${esc(m.got)} of ${esc(m.marks)} · ${esc(dateShort(m.at))}</span></span></div>`).join('')}</div>`
      : '<p class="t-subhead t-2 mb-4">No open mistakes.</p>';
  }
  // groups (remove)
  if (d.groups.length) {
    html += `<div class="list__header" style="padding-left:0">Groups</div><div class="list mb-4" id="st-groups">${d.groups.map((g) => `<div class="list__item"><span class="list__body"><span class="list__title">${esc(g.name)}</span><span class="list__sub">teacher ${esc(g.teacher)}</span></span><span class="list__trailing"><button class="btn btn--sm btn--plain" type="button" data-remove="${esc(g.id)}" data-name="${esc(g.name)}">Remove</button></span></div>`).join('')}</div>`;
  }
  return {
    title: d.nickname, largeTitle: true, tab: 'more', back: '#/students', backLabel: 'Students',
    html: raw(html),
    mount(el) {
      el.querySelector('#st-groups')?.addEventListener('click', async (e) => {
        const b = e.target.closest('[data-remove]'); if (!b) return;
        if (!confirm(`Take ${d.nickname} out of ${b.dataset.name}? Their account and progress stay.`)) return;
        b.disabled = true;
        const { error: err } = await c.rpc('group_remove_student', { p_group: b.dataset.remove, p_student: d.id });
        if (err) { toast(setupErr(err), { duration: 6000 }); b.disabled = false; return; }
        toast(`Removed from ${b.dataset.name}`); location.hash = '#/students';
      });
    },
  };
}
