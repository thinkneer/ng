// Admin dashboard (#/admin): approve requests (always as students), pause / restore members.
import { html, raw, icon, esc, toast, haptic, emptyState, openSheet } from '../ui.js';
import { data } from '../data.js';
import { session, loadUsers, NICK_RE, isDbMode } from '../auth.js';
import { db, errText } from '../db.js';
import { token, updateUsers, testKey } from '../github.js';

const ALLOWED = new Set(['v', 'nickname', 'salt', 'hash', 'class', 'stream', 'subjects', 'requested']);
const today = () => new Date().toISOString().slice(0, 10);

function parseCode(text) {
  const raw = (text.match(/[A-Za-z0-9+/=]{40,}/) || [])[0];
  if (!raw) throw new Error('That doesn’t look like a request code. Paste the whole code from the message.');
  let r;
  try { r = JSON.parse(decodeURIComponent(escape(atob(raw)))); } catch { throw new Error('The code is damaged. Ask them to copy it again.'); }
  const extra = Object.keys(r).filter((k) => !ALLOWED.has(k));
  if (extra.length) throw new Error('This code has unexpected fields, so it was not accepted.');
  if (!NICK_RE.test(r.nickname || '')) throw new Error('The nickname in this code is not valid.');
  if (!/^[A-Za-z0-9+/=]{16,}$/.test(r.salt || '') || !/^[A-Za-z0-9+/=]{32,}$/.test(r.hash || '')) throw new Error('The code is incomplete. Ask them to create it again.');
  if (!['9', '10', '11', '12'].includes(String(r.class))) throw new Error('Unknown class in this code.');
  return r;
}

export async function admin() {
  const s = session();
  if (s?.role !== 'admin') return { title: 'Not found', tab: 'more', html: emptyState({ icon: 'lock', title: 'Admins only' }) };
  if (await isDbMode()) return adminDb();
  let users = [];
  try { users = await loadUsers({ fresh: true }); } catch { /* offline */ }
  const hasKey = !!token.get();
  const row = (u) => `<div class="list__item has-leading" data-nick="${esc(u.nickname)}">
      <span class="list__leading" style="--unit:${u.status === 'approved' ? 'var(--accent)' : '#8795AB'}">${esc(u.nickname.slice(0, 2).toUpperCase())}</span>
      <span class="list__body"><span class="list__title">${esc(u.nickname)}${u.role === 'admin' ? ' <span class="badge badge--new">admin</span>' : ''}${u.status !== 'approved' ? ' <span class="badge badge--soon">paused</span>' : ''}</span><span class="list__sub">Class ${esc(u.class)} · since ${esc(u.approved_on)}</span></span>
      ${u.role !== 'admin' ? `<span class="list__trailing"><button class="btn btn--sm ${u.status === 'approved' ? 'btn--plain' : 'btn--secondary'}" type="button" data-act="${u.status === 'approved' ? 'pause' : 'restore'}">${u.status === 'approved' ? 'Pause' : 'Restore'}</button></span>` : ''}
    </div>`;
  return {
    title: 'Admin', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Admin</h1>
      ${!hasKey ? raw(`<div class="card mb-4" id="key-card">
        <div class="t-headline">One-time setup: connect the site</div>
        <p class="t-2 t-subhead mt-2">Approvals are saved into the site itself, so this phone needs a key that can edit the site's member list. You do this once.</p>
        <ol class="t-subhead mt-2" style="padding-left:1.2em;line-height:1.6">
          <li>Open <strong>github.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token</strong>.</li>
          <li>Name it <em>ng admin</em>, expiry 1 year. Resource owner <strong>thinkneer</strong>, repository access <strong>Only select repositories → ng</strong>.</li>
          <li>Permissions → Repository → <strong>Contents: Read and write</strong>. Nothing else. Generate and copy it.</li>
        </ol>
        <label for="key" class="mt-4">Paste the key</label>
        <input id="key" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="github_pat_…">
        <button class="btn btn--block mt-4" type="button" id="key-save">Connect</button>
        <p class="t-footnote t-3 mt-2">The key stays on this device only and can do nothing except edit files in this one site.</p>
      </div>`) : ''}
      <div class="card">
        <div class="t-headline">Approve a request</div>
        <p class="t-2 t-subhead mt-1">Paste the code a student sent you on WhatsApp. They are always added as a standard student.</p>
        <textarea id="code" rows="4" class="mt-4 t-mono" style="font-size:.85rem" placeholder="Paste the request code" aria-label="Request code"></textarea>
        <div id="preview" class="mt-4" hidden></div>
        <p class="auth__err" id="a-err" role="alert" hidden></p>
        <button class="btn btn--block mt-4" type="button" id="check" ${raw(hasKey ? '' : 'disabled')}>Check code</button>
      </div>
      <div class="list__header" style="padding-left:0">Members <span class="count">${users.length}</span></div>
      <div class="list" id="members">${raw(users.map(row).join('') || '<div class="list__item t-2">No members yet</div>')}</div>
      <p class="t-footnote t-3 mt-4">Changes go live in about a minute (the site rebuilds itself). Paused members are signed out the next time they open the app.</p>
      ${hasKey ? raw(`<button class="btn btn--ghost btn--sm mt-4" type="button" id="key-forget">Disconnect this device</button>`) : ''}`,
    mount(el) {
      const err = el.querySelector('#a-err'), preview = el.querySelector('#preview'), check = el.querySelector('#check'), codeEl = el.querySelector('#code');
      const fail = (m) => { err.textContent = m; err.hidden = false; haptic('medium'); };
      let pending = null;

      el.querySelector('#key-save')?.addEventListener('click', async (e) => {
        const v = el.querySelector('#key').value.trim(); if (!v) return;
        e.target.disabled = true; e.target.textContent = 'Checking…';
        token.set(v);
        try { await testKey(); toast('Connected'); location.reload(); }
        catch (ex) { token.clear(); toast(ex.message, { duration: 6000 }); e.target.disabled = false; e.target.textContent = 'Connect'; }
      });
      el.querySelector('#key-forget')?.addEventListener('click', () => { token.clear(); toast('This device is disconnected'); location.reload(); });

      codeEl.addEventListener('input', () => { pending = null; preview.hidden = true; err.hidden = true; check.textContent = 'Check code'; });
      check.addEventListener('click', async () => {
        err.hidden = true;
        if (!pending) {
          try {
            const r = parseCode(codeEl.value);
            const all = await loadUsers({ fresh: true });
            const existing = all.find((u) => u.nickname.toLowerCase() === r.nickname.toLowerCase());
            if (existing?.role === 'admin') return fail('That nickname belongs to an admin.');
            pending = r; pending.replace = !!existing;
            preview.innerHTML = `<div class="row"><span class="list__leading" style="--unit:var(--accent)">${esc(r.nickname.slice(0, 2).toUpperCase())}</span><div><div class="t-headline">${esc(r.nickname)}</div><div class="t-2 t-footnote">Class ${esc(r.class)}${r.stream && r.stream !== 'general' ? ' ' + esc(r.stream) : ''} · requested ${esc(r.requested || '')} · student</div>${r.replace ? '<div class="t-footnote mt-1" style="color:var(--warning)">Already a member: approving sets this new passphrase.</div>' : ''}</div></div>`;
            preview.hidden = false; check.textContent = r.replace ? `Set new passphrase for ${r.nickname}` : `Approve ${r.nickname}`;
          } catch (ex) { fail(ex.message); }
          return;
        }
        check.disabled = true; check.textContent = 'Saving…';
        try {
          const r = pending;
          await updateUsers((data) => {
            data.users = data.users.filter((u) => u.nickname.toLowerCase() !== r.nickname.toLowerCase() || u.role === 'admin');
            if (data.users.some((u) => u.nickname.toLowerCase() === r.nickname.toLowerCase())) throw new Error('That nickname belongs to an admin.');
            data.users.push({ nickname: r.nickname, salt: r.salt, hash: r.hash, class: String(r.class), stream: r.stream || 'science', subjects: [], status: 'approved', approved_on: today(), role: 'student' });
            return r.replace ? `users: new passphrase for ${r.nickname}` : `users: approve ${r.nickname}`;
          });
          haptic('success'); toast(`${r.nickname} approved. They can sign in in about a minute.`, { duration: 5000 });
          setTimeout(() => location.reload(), 900);
        } catch (ex) { fail(ex.message); check.disabled = false; check.textContent = `Approve ${pending.nickname}`; }
      });

      el.querySelector('#members').addEventListener('click', async (e) => {
        const b = e.target.closest('[data-act]'); if (!b) return;
        if (!token.get()) { toast('Connect this device first (setup above)'); return; }
        const nick = b.closest('[data-nick]').dataset.nick, pause = b.dataset.act === 'pause';
        b.disabled = true; b.textContent = 'Saving…';
        try {
          await updateUsers((data) => {
            const u = data.users.find((x) => x.nickname === nick);
            if (!u || u.role === 'admin') throw new Error('Admins can’t be paused here.');
            u.status = pause ? 'suspended' : 'approved';
            return `users: ${pause ? 'suspend' : 'restore'} ${nick}`;
          });
          toast(pause ? `${nick} paused` : `${nick} restored`); setTimeout(() => location.reload(), 700);
        } catch (ex) { toast(ex.message, { duration: 6000 }); b.disabled = false; b.textContent = pause ? 'Pause' : 'Restore'; }
      });
    },
  };
}


/* ======================================================================
   Database mode: members live in Supabase (profiles). Approve, set role, pause — saved instantly.
   ====================================================================== */
async function adminDb() {
  const c = await db();
  const { data: rows, error } = await c.from('profiles').select('id, nickname, role, status, class, stream, subjects, created_at, approved_at').order('created_at', { ascending: false });
  const people = rows || [];
  const order = { pending: 0, approved: 1, suspended: 2 };
  people.sort((a, b) => order[a.status] - order[b.status] || a.nickname.localeCompare(b.nickname));
  const me = session()?.uid;
  const idx = await data.index();
  const byId = new Map(people.map((p) => [p.id, p]));
  const access = (u) => `${classLabel(idx, u.class, u.stream)} · ${subjectsLabel(idx, u)}`;
  const when = (d) => (d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '');
  const row = (u) => `<div class="list__item has-leading list__item--stack" data-id="${esc(u.id)}" data-nick="${esc(u.nickname)}">
      <span class="list__leading" style="--unit:${u.status === 'approved' ? (u.role === 'student' ? 'var(--accent)' : '#6A3FA0') : '#8795AB'}">${esc(u.nickname.slice(0, 2).toUpperCase())}</span>
      <span class="list__body"><span class="list__title">${esc(u.nickname)} ${u.role !== 'student' ? `<span class="badge badge--new">${esc(u.role)}</span>` : ''}${u.status === 'pending' ? ' <span class="badge badge--soon">awaiting</span>' : u.status === 'suspended' ? ' <span class="badge">paused</span>' : ''}</span><span class="list__sub">${esc(u.role === 'admin' ? classLabel(idx, u.class, u.stream) + ' · sees everything' : access(u))} · ${u.status === 'approved' ? `since ${when(u.approved_at || u.created_at)}` : `asked ${when(u.created_at)}`}</span></span>
      ${u.id === me ? '' : `<span class="list__controls">
        ${u.role !== 'admin' ? `<button class="btn btn--sm btn--plain" type="button" data-access>${icon('lock')} Class &amp; subjects</button>` : ''}
        ${u.status === 'pending' ? `<button class="btn btn--sm" type="button" data-set='{"status":"approved","role":"student"}'>Approve as student</button><button class="btn btn--sm btn--secondary" type="button" data-set='{"status":"approved","role":"teacher"}'>Approve as teacher</button>`
          : u.status === 'suspended' ? `<button class="btn btn--sm" type="button" data-set='{"status":"approved"}'>Restore</button>`
          : `<button class="btn btn--sm btn--plain" type="button" data-set='{"status":"suspended"}'>Pause</button>${u.role === 'teacher' ? `<button class="btn btn--sm btn--plain" type="button" data-set='{"role":"student"}'>Make student</button>` : u.role === 'student' ? `<button class="btn btn--sm btn--plain" type="button" data-set='{"role":"teacher"}'>Make teacher</button>` : ''}`}
      </span>`}
    </div>`;
  const pending = people.filter((p) => p.status === 'pending').length;
  return {
    title: 'Admin', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Admin</h1>
      ${error ? raw(`<div class="notice notice--warn mb-4">${icon('alert')}<div>${esc(errText(error))}</div></div>`) : ''}
      <div class="card mb-4"><div class="t-headline">${pending ? `${pending} awaiting approval` : 'No one waiting'}</div><p class="t-2 t-subhead mt-1">Members join with a nickname, email and password; you approve each one here as a student or a teacher, and set the class and subjects they can open (<em>Class &amp; subjects</em>). Teachers can run live quizzes and, later, exams. Changes apply the next time they open the app.</p>
        <button class="btn btn--block mt-4" type="button" id="new-member">${raw(icon('plusSquare'))} New member</button>
        <a class="btn btn--block btn--secondary mt-2" href="#/students">${raw(icon('user'))} Teachers &amp; students</a></div>
      <div class="list__header" style="padding-left:0">Members <span class="count">${people.filter((p) => p.status === 'approved').length} approved · ${people.filter((p) => p.role === 'teacher').length} teachers</span></div>
      ${people.length > 8 ? raw('<input type="search" id="m-search" placeholder="Find a nickname" aria-label="Find a nickname" class="mb-2">') : ''}
      <div class="list" id="members">${raw(people.map(row).join('') || '<div class="list__item t-2">No members yet</div>')}</div>
      <p class="t-footnote t-3 mt-4">Nicknames only are shown; emails stay in the sign-in system. Your own row has no buttons.</p>`,
    mount(el) {
      el.querySelector('#new-member').addEventListener('click', () => newMember(c, idx, people));
      el.querySelector('#m-search')?.addEventListener('input', (e) => { const q = e.target.value.trim().toLowerCase(); for (const r of el.querySelectorAll('#members [data-nick]')) r.hidden = !!q && !r.dataset.nick.toLowerCase().includes(q); });
      el.querySelector('#members').addEventListener('click', async (e) => {
        const ab = e.target.closest('[data-access]');
        if (ab) { editAccess(c, idx, byId.get(ab.closest('[data-id]').dataset.id)); return; }
        const b = e.target.closest('[data-set]'); if (!b) return;
        const item = b.closest('[data-id]'); const patch = JSON.parse(b.dataset.set);
        if (patch.status === 'suspended' && !confirm(`Pause ${item.dataset.nick}? They are signed out on their next open and can’t use the app until you restore them.`)) return;
        if (patch.status === 'approved') patch.approved_at = new Date().toISOString();
        b.disabled = true; const label = b.textContent; b.textContent = 'Saving…';
        const { error: err } = await c.from('profiles').update(patch).eq('id', item.dataset.id);
        if (err) { toast(errText(err), { duration: 6000 }); b.disabled = false; b.textContent = label; return; }
        haptic('success'); toast(`${item.dataset.nick}: ${patch.status === 'approved' ? `approved${patch.role ? ' as ' + patch.role : ''}` : patch.status ? 'paused' : 'now a ' + patch.role}`);
        setTimeout(() => location.reload(), 500);
      });
    },
  };
}

/* ---------- new member (db mode, needs supabase/migrations/003) ---------- */
const makePassword = () => {
  const abc = 'abcdefghjkmnpqrstuvwxyz', dig = '23456789', all = abc + abc.toUpperCase() + dig;
  const r = (set) => set[crypto.getRandomValues(new Uint32Array(1))[0] % set.length];
  let p = r(abc) + r(abc.toUpperCase()) + r(dig);
  while (p.length < 10) p += r(all);
  return [...p].sort(() => crypto.getRandomValues(new Uint8Array(1))[0] - 128).join('');
};

/** Sheet: create a member who is approved at once (nickname, sign-in email, first password, role, class). */
export function newMember(c, idx, people = []) {
  const options = streamsOf(idx);
  // default class: the one most members already have, else the first live one
  const tally = new Map();
  for (const p of people) { const k = options.find((o) => o.c.id === String(p.class) && (o.st.id === p.stream || o.st.id === 'general'))?.key; if (k && p.role === 'student') tally.set(k, (tally.get(k) || 0) + 1); }
  const common = [...tally].sort((a, b) => b[1] - a[1])[0]?.[0];
  const first = options.find((o) => o.key === common) || options.find((o) => o.st.status === 'live') || options[0];
  const panel = document.createElement('div');
  panel.innerHTML = `
    <p class="t-2 t-subhead">The account is ready at once: no Join, no waiting. Send them the sign-in details and ask them to change the password (More → Change password).</p>
    <label for="nm-nick" class="mt-4">Nickname</label>
    <input id="nm-nick" maxlength="20" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="3–20 letters, digits or _">
    <label for="nm-email" class="mt-4">Their sign-in email</label>
    <input id="nm-email" type="email" inputmode="email" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="name@example.com">
    <label for="nm-pass" class="mt-4">First password</label>
    <div class="row" style="gap:var(--s-2)"><input id="nm-pass" class="grow" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="At least 8, letters and a number"><button class="btn btn--sm btn--secondary" type="button" id="nm-gen">Generate</button></div>
    <fieldset class="mt-4" style="border:0;padding:0;margin-inline:0">
      <legend class="t-subhead" style="font-weight:600">Role</legend>
      <label class="check"><input type="radio" name="nm-role" value="student" checked><span class="grow">Student</span></label>
      <label class="check"><input type="radio" name="nm-role" value="teacher"><span class="grow">Teacher (can run live quizzes)</span></label>
    </fieldset>
    <label for="nm-class" class="mt-2">Class</label>
    <select id="nm-class">
      ${options.map((o) => `<option value="${esc(o.key)}" ${o.key === first?.key ? 'selected' : ''}>${esc(o.label)}${o.st.status === 'live' ? '' : ' (coming soon)'}</option>`).join('')}
      <option value="${ANY}">Any class: they choose (for teachers)</option>
    </select>
    <p class="t-footnote t-3 mt-2">They get all subjects of the class; narrow it later with <em>Class &amp; subjects</em>.</p>
    <p class="auth__err mt-2" id="nm-err" role="alert" hidden></p>
    <button class="btn btn--block mt-4" type="button" id="nm-save">Create member</button>`;
  const $ = (s) => panel.querySelector(s);
  const err = $('#nm-err');
  const fail = (m) => { err.textContent = m; err.hidden = false; haptic('medium'); };
  $('#nm-gen').addEventListener('click', () => { $('#nm-pass').value = makePassword(); });
  panel.addEventListener('change', (e) => { if (e.target.name === 'nm-role' && e.target.value === 'teacher' && $('#nm-class').value !== ANY) $('#nm-class').value = ANY; });
  let created = false;
  const sheet = openSheet({ title: 'New member', content: panel, onClose: () => { if (created) location.reload(); } });
  $('#nm-save').addEventListener('click', async (e) => {
    err.hidden = true;
    const nickname = $('#nm-nick').value.trim(), email = $('#nm-email').value.trim().toLowerCase(), pass = $('#nm-pass').value;
    const role = panel.querySelector('[name="nm-role"]:checked').value;
    const [cls, stream] = $('#nm-class').value === ANY ? [ANY, ANY] : $('#nm-class').value.split('|');
    if (!NICK_RE.test(nickname)) return fail('Nickname: 3–20 letters, digits or _ (no spaces).');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail('That email doesn’t look right.');
    if (pass.length < 8 || !/[A-Za-z]/.test(pass) || !/\d/.test(pass)) return fail('Password: at least 8 characters with letters and a number.');
    e.target.disabled = true; e.target.textContent = 'Creating…';
    const { error } = await c.rpc('admin_create_member', { p_email: email, p_password: pass, p_nickname: nickname, p_role: role, p_class: cls, p_stream: stream, p_subjects: [] });
    if (error) {
      e.target.disabled = false; e.target.textContent = 'Create member';
      return fail(/admin_create_member|schema cache|could not find the function/i.test(error.message || '') ? 'One-time setup: run supabase/migrations/003_admin_create_member.sql in the Supabase SQL Editor, then try again.' : errText(error));
    }
    created = true; haptic('success');
    const site = new URL(location.pathname, location.origin).href;
    const text = `Your ng study app account is ready.\n${site}\nSign in with:\nEmail: ${email}\nPassword: ${pass}\nPlease change the password after signing in (More → Change password).`;
    panel.innerHTML = `
      <div class="t-headline">${esc(nickname)} is ready</div>
      <p class="t-2 t-subhead mt-1">${esc(role === 'teacher' ? 'Teacher' : 'Student')} · ${esc(classLabel(idx, cls, stream))} · approved. Send these sign-in details to them only, then close this sheet. The password is not shown again.</p>
      <textarea readonly rows="7" class="mt-4 t-mono" style="font-size:.85rem" aria-label="Sign-in details">${esc(text)}</textarea>
      <button class="btn btn--block mt-4" type="button" id="nm-send">${icon('share')} Send sign-in details</button>
      <button class="btn btn--block btn--plain mt-2" type="button" id="nm-done">Done</button>`;
    panel.querySelector('#nm-done').addEventListener('click', () => sheet.close());
    panel.querySelector('#nm-send').addEventListener('click', async () => {
      if (navigator.share) { try { await navigator.share({ text }); return; } catch (ex) { if (ex?.name === 'AbortError') return; } }
      try { await navigator.clipboard.writeText(text); toast('Copied: paste it in a message to them'); } catch { panel.querySelector('textarea').select(); toast('Select the text and copy it'); }
    });
  });
}

/* ---------- class & subject access (db mode) ---------- */
const ANY = 'any';
const streamsOf = (idx) => idx.classes.flatMap((c) => c.streams.map((st) => ({ c, st, key: `${c.id}|${st.id}`, label: st.id === 'general' ? c.name : `${c.name} ${st.name}` })));
function classLabel(idx, cls, stream) {
  if (cls === ANY) return 'Any class';
  const hit = streamsOf(idx).find((x) => x.c.id === String(cls) && (x.st.id === stream || x.st.id === 'general'));
  return hit ? hit.label : `Class ${cls}`;
}
function subjectsOfChoice(idx, cls, stream) {
  if (cls === ANY) { const m = new Map(); for (const { st } of streamsOf(idx)) for (const s of st.subjects) if (!m.has(s.id)) m.set(s.id, s); return [...m.values()]; }
  const hit = streamsOf(idx).find((x) => x.c.id === String(cls) && (x.st.id === stream || x.st.id === 'general'));
  return hit ? hit.st.subjects : [];
}
function subjectsLabel(idx, u) {
  const list = u.subjects || [];
  if (!list.length) return 'all subjects';
  const names = new Map(subjectsOfChoice(idx, u.class, u.stream).map((s) => [s.id, s.short || s.name]));
  return list.map((id) => names.get(id) || id).join(', ');
}

/** Sheet: pick the member's class (or "any") and which subjects they may open. Saves to profiles. */
export function editAccess(c, idx, u) {
  if (!u) return;
  const options = streamsOf(idx);
  const cur = u.class === ANY ? ANY : (options.find((x) => x.c.id === String(u.class) && (x.st.id === u.stream || x.st.id === 'general'))?.key || options[0]?.key);
  const panel = document.createElement('div');
  panel.innerHTML = `
    <label for="ac-class">Class</label>
    <select id="ac-class">
      ${options.map((o) => `<option value="${esc(o.key)}" ${o.key === cur ? 'selected' : ''}>${esc(o.label)}${o.st.status === 'live' ? '' : ' (coming soon)'}</option>`).join('')}
      <option value="${ANY}" ${cur === ANY ? 'selected' : ''}>Any class: they choose (for teachers)</option>
    </select>
    <fieldset class="mt-4" style="border:0;padding:0;margin-inline:0">
      <legend class="t-subhead" style="font-weight:600">Subjects they can open</legend>
      <label class="check mt-2"><input type="radio" name="ac-mode" value="all"><span class="grow">All subjects of the class</span></label>
      <label class="check"><input type="radio" name="ac-mode" value="some"><span class="grow">Only these:</span></label>
      <div id="ac-subjects" style="padding-left:2.25rem"></div>
    </fieldset>
    <p class="t-footnote t-3 mt-4">Applies the next time ${esc(u.nickname)} opens the app. Subjects not opened here disappear from their Subjects, Today, Practice, Recall, Cards and search.</p>
    <button class="btn btn--block mt-4" type="button" id="ac-save">Save</button>`;
  const sel = panel.querySelector('#ac-class'), box = panel.querySelector('#ac-subjects');
  const modeAll = panel.querySelector('[value="all"]'), modeSome = panel.querySelector('[value="some"]');
  const chosen = new Set(u.subjects || []);
  (chosen.size ? modeSome : modeAll).checked = true;
  const draw = () => {
    const [cls, stream] = sel.value === ANY ? [ANY, ANY] : sel.value.split('|');
    const subs = subjectsOfChoice(idx, cls, stream);
    box.innerHTML = subs.map((s) => `<label class="check"${modeAll.checked ? ' style="opacity:.5"' : ''}><input type="checkbox" value="${esc(s.id)}" ${chosen.has(s.id) ? 'checked' : ''} ${modeAll.checked ? 'disabled' : ''}><span class="grow">${esc(s.name)}</span>${s.status === 'live' ? '' : '<span class="badge badge--soon">soon</span>'}</label>`).join('') || '<p class="t-footnote t-2">No subjects listed for this class yet.</p>';
  };
  draw();
  sel.addEventListener('change', draw);
  panel.addEventListener('change', (e) => {
    if (e.target.name === 'ac-mode') draw();
    if (e.target.type === 'checkbox') { if (e.target.checked) chosen.add(e.target.value); else chosen.delete(e.target.value); }
  });
  const sheet = openSheet({ title: `${u.nickname}: class & subjects`, content: panel });
  panel.querySelector('#ac-save').addEventListener('click', async (e) => {
    const [cls, stream] = sel.value === ANY ? [ANY, ANY] : sel.value.split('|');
    const valid = new Set(subjectsOfChoice(idx, cls, stream).map((s) => s.id));
    const subjects = modeAll.checked ? [] : [...chosen].filter((id) => valid.has(id));
    if (modeSome.checked && !subjects.length) { toast('Tick at least one subject, or choose All subjects'); haptic('medium'); return; }
    e.target.disabled = true; e.target.textContent = 'Saving…';
    const { error } = await c.from('profiles').update({ class: cls, stream, subjects }).eq('id', u.id);
    if (error) { toast(errText(error), { duration: 6000 }); e.target.disabled = false; e.target.textContent = 'Save'; return; }
    haptic('success'); sheet.close();
    toast(`${u.nickname}: ${classLabel(idx, cls, stream)} · ${subjects.length ? subjects.length + ' subject' + (subjects.length > 1 ? 's' : '') : 'all subjects'}`);
    setTimeout(() => location.reload(), 600);
  });
}
