// Live quiz (db mode): a teacher or admin hosts, students join with a 5-letter code. One MCQ / A–R at a time,
// a countdown, then a bar chart of everyone's answers (green = correct, red = wrong) and a leaderboard at the end.
// Routes: #/live (join / host) · #/live/host/<room> · #/live/<room>
import { html, raw, icon, esc, emptyState, haptic, toast, largeTitle, listItem } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { session } from '../auth.js';
import { db, errText } from '../db.js';

const KEYS = 'ABCDEF';
const SECONDS = [20, 30, 45, 60];

export async function live(route) {
  const c = await db();
  if (!c) return { title: 'Live quiz', tab: 'today', back: '#/today', html: emptyState({ icon: 'bolt', title: 'Live quiz needs the database', text: 'This site is running without its database connection, so live quizzes are off.' }) };
  const seg = route.seg || [];
  if (seg[1] === 'host' && seg[2]) return host({ c, roomId: seg[2] });
  if (seg[1]) return play({ c, roomId: seg[1] });
  return hub({ c });
}

/* ---------- hub: join by code; staff can start one ---------- */
async function hub({ c }) {
  const s = store.settings, me = session();
  const staff = me?.role === 'admin' || me?.role === 'teacher';
  const subjects = s.class ? (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id)) : [];
  const withQ = subjects.map((sub) => ({ sub, chapters: data.allChapters(sub).filter((ch) => ch.items?.questions && ((ch.question_types?.mcq || 0) + (ch.question_types?.ar || 0)) > 0) })).filter((x) => x.chapters.length);
  const lastHost = store.get('live.lastRoom', null);
  return {
    title: 'Live quiz', largeTitle: true, tab: 'today', back: '#/today',
    html: html`${largeTitle('Live quiz', { eyebrow: staff ? 'Host one, or join with a code' : 'Join with the code on the board' })}
      <form class="card mb-4" id="join" novalidate>
        <label for="code">Quiz code</label>
        <input id="code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="5" placeholder="ABC12" style="letter-spacing:.35em;font-size:1.5rem;text-align:center;text-transform:uppercase">
        <p class="auth__err" id="j-err" role="alert" hidden></p>
        <button class="btn btn--block mt-4" type="submit" id="j-go">${raw(icon('bolt'))} Join</button>
      </form>
      ${staff ? html`
        ${lastHost ? raw(`<a class="card continue pressable mb-4" href="#/live/host/${esc(lastHost.id)}"><span class="list__leading" style="--unit:var(--accent)">${icon('bolt')}</span><span class="continue__main"><span class="continue__title">Back to your quiz · ${esc(lastHost.code)}</span><span class="continue__sec" style="color:var(--text-2);font-weight:500">${esc(lastHost.title || '')}</span></span>${icon('chevronRight', { class: 'chev', size: 20 })}</a>`) : ''}
        <div class="section-head"><h2>Host a quiz</h2></div>
        <div class="card mb-4"><label for="secs">Seconds per question</label><select id="secs">${raw(SECONDS.map((n) => `<option value="${n}" ${n === (store.get('live.seconds', 30)) ? 'selected' : ''}>${n} s</option>`).join(''))}</select><label class="check mt-3"><input type="checkbox" id="shuffle" ${raw(store.get('live.shuffle', true) ? 'checked' : '')}><span>Shuffle the questions</span></label></div>
        ${withQ.length ? withQ.map(({ sub, chapters }) => raw(`<div class="list__header"><span>${esc(sub.name)}</span></div><div class="list">${chapters.map((ch) => `<button class="list__item has-leading pressable" type="button" data-host="${esc(sub.id)}/${esc(ch.id)}" style="--unit:#${ch.unitObj.colour}"><span class="list__leading">${ch.number}</span><span class="list__body"><span class="list__title">${esc(ch.title)}</span><span class="list__sub">${(ch.question_types.mcq || 0) + (ch.question_types.ar || 0)} quick questions (MCQ, A–R)</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></button>`).join('')}</div>`)) : emptyState({ icon: 'practice', title: 'No quick questions yet', text: 'Live quizzes use the MCQ and A–R questions of a chapter.' })}` : html`<p class="t-footnote t-3">Your teacher starts the quiz and reads out the code. Everyone answers on their own phone; after the timer you all see how the class answered.</p>`}`,
    mount(el) {
      const f = el.querySelector('#join'), err = el.querySelector('#j-err'), go = el.querySelector('#j-go');
      f.addEventListener('submit', async (e) => {
        e.preventDefault(); err.hidden = true;
        const code = el.querySelector('#code').value.trim().toUpperCase();
        if (code.length < 4) { err.textContent = 'Type the 5-letter code.'; err.hidden = false; return; }
        go.disabled = true; go.textContent = 'Joining…';
        const { data: id, error } = await c.rpc('live_join', { p_code: code });
        go.disabled = false; go.innerHTML = `${icon('bolt')} Join`;
        if (error) { err.textContent = errText(error); err.hidden = false; haptic('medium'); return; }
        haptic('success'); location.hash = `#/live/${id}`;
      });
      el.addEventListener('click', async (e) => {
        const b = e.target.closest('[data-host]'); if (!b) return;
        const [subId, chId] = b.dataset.host.split('/');
        const sub = subjects.find((x) => x.id === subId); const { chapter: ch } = data.chapterOf(sub, chId);
        const secs = Number(el.querySelector('#secs').value), shuffle = el.querySelector('#shuffle').checked;
        store.set('live.seconds', secs); store.set('live.shuffle', shuffle);
        b.disabled = true;
        try {
          let qs = (await data.questions(sub, chId)).filter((q) => (q.type === 'mcq' || q.type === 'ar') && q.options?.length && q.answer);
          if (shuffle) qs = qs.map((q) => [Math.random(), q]).sort((a, b2) => a[0] - b2[0]).map((x) => x[1]);
          const { data: room, error } = await c.rpc('live_create', { p_title: `${sub.name} · Ch ${ch.number} ${ch.title}`, p_subject: sub.id, p_chapter: ch.id, p_total: qs.length });
          if (error) throw error;
          store.set(`live.deck.${room.id}`, { seconds: secs, questions: qs.map((q) => ({ id: q.id, type: q.type, stem: q.stem, options: q.options, answer: q.answer.trim().toUpperCase().slice(0, 1), model_answer: q.model_answer || '' })) });
          store.set('live.lastRoom', { id: room.id, code: room.code, title: room.title });
          haptic('success'); location.hash = `#/live/host/${room.id}`;
        } catch (ex) { toast(errText(ex), { duration: 6000 }); b.disabled = false; }
      });
    },
  };
}

/* ---------- shared bits ---------- */
function frame({ title, back, body = '', foot = '' }) {
  return html`<div class="rc lv" id="lv">
    <header class="rc__top"><a class="icon-btn" href="${back}" aria-label="Close">${raw(icon('x'))}</a><div class="rc__title" id="lv-title">${title}</div><span style="width:var(--tap)"></span></header>
    <div class="rc__track"><span id="lv-bar"></span></div>
    <main class="rc__stage" id="lv-stage">${raw(body)}</main>
    <footer class="rc__foot" id="lv-foot">${raw(foot)}</footer>
  </div>`;
}
/** Follow a room: realtime updates plus a slow poll, so a flaky socket never leaves anyone stuck. */
function watchRoom(c, roomId, onRoom, extra = []) {
  let last = '';
  const emit = (r) => { if (!r) return; const sig = JSON.stringify([r.status, r.q_index, r.ends_at, r.revealed_answer]); if (sig !== last) { last = sig; onRoom(r); } };
  const load = async () => { const { data: r } = await c.from('live_rooms').select('*').eq('id', roomId).maybeSingle(); emit(r); return r; };
  const ch = c.channel(`room-${roomId}`)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'live_rooms', filter: `id=eq.${roomId}` }, (p) => emit(p.new));
  for (const x of extra) ch.on('postgres_changes', { event: x.event || '*', schema: 'public', table: x.table, filter: `room_id=eq.${roomId}` }, x.cb);
  ch.subscribe();
  const t = setInterval(load, 4000);
  load();
  return { stop: () => { clearInterval(t); c.removeChannel(ch); }, reload: load };
}
function countdown(endsAt, el, bar, onDone) {
  let done = false;
  const tick = () => {
    const left = Math.max(0, (new Date(endsAt) - Date.now()) / 1000);
    if (el) el.textContent = `${Math.ceil(left)} s`;
    if (bar) bar.style.width = `${Math.min(100, Math.max(0, 100 - (left / countdown.total) * 100))}%`;
    if (left <= 0 && !done) { done = true; clearInterval(t); onDone?.(); }
  };
  const t = setInterval(tick, 250); tick();
  return () => clearInterval(t);
}
function chart(tally, correct, options) {
  const total = tally.reduce((n, t) => n + Number(t.n), 0) || 0;
  const max = Math.max(1, ...tally.map((t) => Number(t.n)));
  return `<div class="lv__chart" role="img" aria-label="How the class answered">${options.map((_, i) => {
    const k = KEYS[i]; const n = Number(tally.find((t) => t.key === k)?.n || 0);
    return `<div class="lv__row ${k === correct ? 'is-right' : 'is-wrong'}"><span class="lv__k">${k}</span><span class="lv__track"><span class="lv__fill" style="width:${(n / max) * 100}%${n ? '' : ';display:none'}"></span></span><span class="lv__n tnum">${n}</span></div>`;
  }).join('')}<p class="t-footnote t-3 mt-2">${total} answered · green is the correct option</p></div>`;
}
async function leaderboard(c, roomId, me) {
  const { data: rows } = await c.from('live_players').select('user_id, nickname, score').eq('room_id', roomId).order('score', { ascending: false }).order('joined_at');
  const list = rows || [];
  return `<div class="list mt-4">${list.slice(0, 10).map((p, i) => `<div class="list__item has-leading ${p.user_id === me ? 'is-me' : ''}"><span class="list__leading" style="--unit:${i === 0 ? '#C9A227' : i === 1 ? '#8E9AAF' : i === 2 ? '#B87333' : 'var(--text-3)'}">${i + 1}</span><span class="list__body"><span class="list__title">${esc(p.nickname)}${p.user_id === me ? ' <span class="badge badge--new">you</span>' : ''}</span></span><span class="list__trailing tnum" style="font-weight:700;color:var(--text)">${p.score}</span></div>`).join('') || '<div class="list__item t-2">Nobody joined</div>'}</div>`;
}
async function mdInto(host, src, eager = true) {
  const { renderMarkdown } = await import('../markdown.js');
  const n = await renderMarkdown(String(src || ''), { eager }); n.classList.add('rc__md'); host.appendChild(n); return n;
}
async function renderQuestion(stage, q, { interactive, chosen = null }) {
  stage.innerHTML = `<div class="rc__card lv__card"><div class="rc__meta"><span class="chip chip--unit">${q.type === 'ar' ? 'Assertion–Reason' : 'MCQ'}</span><span class="t-footnote t-3 tnum" id="lv-left"></span></div><div class="pq__stem" id="lv-stem"></div><div class="pq__opts" id="lv-opts"></div><div id="lv-after"></div></div>`;
  await mdInto(stage.querySelector('#lv-stem'), q.stem);
  const opts = stage.querySelector('#lv-opts');
  for (const [i, o] of q.options.entries()) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'pq__opt'; b.dataset.key = KEYS[i]; b.disabled = !interactive || (chosen != null);
    if (chosen === KEYS[i]) b.classList.add('is-chosen');
    b.innerHTML = `<span class="pq__key">${KEYS[i]}</span><div class="pq__opt-body"></div>`; opts.appendChild(b); await mdInto(b.querySelector('.pq__opt-body'), o);
  }
}
function paintReveal(stage, correct, chosen) {
  for (const b of stage.querySelectorAll('.pq__opt')) { b.disabled = true; if (b.dataset.key === correct) b.classList.add('is-right'); else if (b.dataset.key === chosen) b.classList.add('is-wrong'); }
}

/* ---------- host ---------- */
async function host({ c, roomId }) {
  const deck = store.get(`live.deck.${roomId}`, null);
  const me = session()?.uid;
  return {
    title: 'Live quiz · host', tab: 'today', fullscreen: true,
    html: frame({ title: 'Live quiz', back: '#/live' }),
    async mount(el) {
      const stage = el.querySelector('#lv-stage'), foot = el.querySelector('#lv-foot'), title = el.querySelector('#lv-title'), bar = el.querySelector('#lv-bar');
      let room = null, players = [], answered = 0, stopTimer = null, watcher = null, revealing = false;
      const { data: r0, error } = await c.from('live_rooms').select('*').eq('id', roomId).maybeSingle();
      if (error || !r0) { stage.innerHTML = String(emptyState({ icon: 'alert', title: 'Quiz not found', action: '<a class="btn btn--secondary" href="#/live">Back</a>' })); return; }
      if (r0.host_id !== me) { location.hash = `#/live/${roomId}`; return; }
      if (!deck && r0.status !== 'ended') { stage.innerHTML = String(emptyState({ icon: 'alert', title: 'This quiz was started on another device', text: 'The questions live on the phone that started it. Start a new quiz here.', action: '<a class="btn btn--secondary" href="#/live">Back</a>' })); return; }
      const qAt = (i) => deck?.questions[i - 1];
      const loadPlayers = async () => { const { data: p } = await c.from('live_players').select('user_id, nickname, score').eq('room_id', roomId).order('joined_at'); players = p || []; return players; };
      const loadAnswered = async () => { const { data: n } = await c.rpc('live_answered', { p_room: roomId }); answered = n || 0; return answered; };

      const lobby = async () => {
        await loadPlayers();
        title.textContent = `Code ${room.code}`;
        stage.innerHTML = `<div class="rc__card center lv__card">
            <div class="t-footnote t-2" style="text-transform:uppercase;letter-spacing:.08em;font-weight:700">Join code</div>
            <div class="lv__code tnum">${esc(room.code)}</div>
            <p class="t-2 t-subhead">${esc(room.title)} · ${deck.questions.length} questions · ${deck.seconds} s each</p>
            <p class="t-subhead mt-4">Students: open the app → Today → <strong>Live quiz</strong> → type the code.</p>
            <div class="lv__players mt-4" id="lv-players">${players.map((p) => `<span class="chip">${esc(p.nickname)}</span>`).join('') || '<span class="t-footnote t-3">Waiting for the first player…</span>'}</div>
          </div>`;
        foot.innerHTML = `<div class="rc__btns"><span class="t-subhead center" style="align-self:center"><strong id="lv-count">${players.length}</strong> joined</span><button class="btn" type="button" data-next ${players.length ? '' : 'disabled'}>Start question 1 ${icon('chevronRight')}</button></div>`;
      };
      const showQuestion = async () => {
        const q = qAt(room.q_index); if (!q) return;
        title.textContent = `Question ${room.q_index} of ${deck.questions.length}`;
        await renderQuestion(stage, q, { interactive: false });
        countdown.total = deck.seconds;
        stopTimer?.(); stopTimer = countdown(room.ends_at, stage.querySelector('#lv-left'), bar, () => reveal());
        foot.innerHTML = `<div class="rc__btns"><span class="t-subhead center" style="align-self:center"><strong id="lv-ans">${answered}</strong> of ${players.length} answered</span><button class="btn btn--plain" type="button" data-reveal>Reveal now</button></div>`;
      };
      const reveal = async (tallyFromRpc = null) => {
        if (revealing) return; revealing = true; stopTimer?.();
        let tally = tallyFromRpc;
        if (!tally) { const { data: t, error: e2 } = await c.rpc('live_reveal', { p_room: roomId }); if (e2) { toast(errText(e2)); revealing = false; return; } tally = t || []; }
        const q = qAt(room.q_index);
        bar.style.width = '100%'; stage.querySelector('#lv-left')?.remove();
        paintReveal(stage, q.answer, null);
        const after = stage.querySelector('#lv-after');
        after.innerHTML = `<div class="pq__verdict is-right mt-4">${icon('check')} Answer: ${q.answer}</div>${chart(tally, q.answer, q.options)}${q.model_answer ? `<div class="box box--formula mt-3"><div class="box__label">Why</div><div id="lv-why"></div></div>` : ''}`;
        if (q.model_answer) await mdInto(after.querySelector('#lv-why'), q.model_answer);
        const last = room.q_index >= deck.questions.length;
        foot.innerHTML = `<div class="rc__btns"><button class="btn btn--plain" type="button" data-board>Scores</button><button class="btn" type="button" data-${last ? 'end' : 'next'}>${last ? 'Finish' : `Question ${room.q_index + 1}`} ${icon('chevronRight')}</button></div>`;
        revealing = false;
      };
      const ended = async () => {
        stopTimer?.(); title.textContent = 'Final scores'; bar.style.width = '100%';
        stage.innerHTML = `<div class="rc__card lv__card"><div class="t-title2 center">Well played</div><p class="t-2 t-subhead center mt-1">${esc(room.title)}</p>${await leaderboard(c, roomId, null)}</div>`;
        foot.innerHTML = `<div class="rc__btns"><a class="btn" href="#/live">Done</a></div>`;
        store.set('live.lastRoom', undefined);
      };
      const next = async () => {
        const i = room.q_index + 1; const q = qAt(i); if (!q) return ended();
        answered = 0;
        const { error: e2 } = await c.rpc('live_next', { p_room: roomId, p_question: { id: q.id, type: q.type, stem: q.stem, options: q.options }, p_answer: q.answer, p_seconds: deck.seconds });
        if (e2) toast(errText(e2), { duration: 6000 });
        watcher.reload();
      };
      const onRoom = async (r) => {
        room = r;
        if (r.status === 'lobby') lobby();
        else if (r.status === 'question') showQuestion();
        else if (r.status === 'reveal') { if (!stage.querySelector('#lv-after')?.children.length) { const q = qAt(r.q_index); if (q && !stage.querySelector('#lv-stem')) await renderQuestion(stage, q, { interactive: false }); const { data: t } = await c.rpc('live_tally', { p_room: roomId, p_qid: q?.id }); reveal(t || []); } }
        else if (r.status === 'ended') ended();
      };
      watcher = watchRoom(c, roomId, onRoom, [
        { table: 'live_players', event: 'INSERT', cb: async () => { await loadPlayers(); if (room?.status === 'lobby') { const box = stage.querySelector('#lv-players'); if (box) box.innerHTML = players.map((p) => `<span class="chip">${esc(p.nickname)}</span>`).join(''); const n = foot.querySelector('#lv-count'); if (n) n.textContent = players.length; foot.querySelector('[data-next]')?.removeAttribute('disabled'); } } },
        { table: 'live_answers', event: 'INSERT', cb: () => { answered++; const n = foot.querySelector('#lv-ans'); if (n) n.textContent = answered; if (room?.status === 'question' && players.length && answered >= players.length) setTimeout(() => reveal(), 600); } },
      ]);
      const poll = setInterval(async () => {
        if (room?.status === 'question') { await loadAnswered(); const n = foot.querySelector('#lv-ans'); if (n) n.textContent = answered; }
        else if (room?.status === 'lobby') { const before = players.length; await loadPlayers(); if (players.length !== before) { const box = stage.querySelector('#lv-players'); if (box) box.innerHTML = players.map((p) => `<span class="chip">${esc(p.nickname)}</span>`).join(''); const n = foot.querySelector('#lv-count'); if (n) n.textContent = players.length; if (players.length) foot.querySelector('[data-next]')?.removeAttribute('disabled'); } }
      }, 3000);
      foot.addEventListener('click', async (e) => {
        if (e.target.closest('[data-next]')) next();
        else if (e.target.closest('[data-reveal]')) reveal();
        else if (e.target.closest('[data-end]')) { await c.rpc('live_end', { p_room: roomId }); watcher.reload(); }
        else if (e.target.closest('[data-board]')) { const { openSheet } = await import('../ui.js'); openSheet({ title: 'Scores', content: await leaderboard(c, roomId, null) }); }
      });
      return () => { stopTimer?.(); clearInterval(poll); watcher.stop(); };
    },
  };
}

/* ---------- player ---------- */
async function play({ c, roomId }) {
  const me = session()?.uid;
  return {
    title: 'Live quiz', tab: 'today', fullscreen: true,
    html: frame({ title: 'Live quiz', back: '#/live' }),
    async mount(el) {
      const stage = el.querySelector('#lv-stage'), foot = el.querySelector('#lv-foot'), title = el.querySelector('#lv-title'), bar = el.querySelector('#lv-bar');
      let room = null, chosen = null, stopTimer = null, shownQ = null;
      const { data: r0, error } = await c.from('live_rooms').select('*').eq('id', roomId).maybeSingle();
      if (error || !r0) { stage.innerHTML = String(emptyState({ icon: 'alert', title: 'Quiz not found', text: 'Check the code with your teacher.', action: '<a class="btn btn--secondary" href="#/live">Back</a>' })); return; }
      const { data: pl } = await c.from('live_players').select('user_id').eq('room_id', roomId).eq('user_id', me).maybeSingle();
      if (!pl) { const { error: je } = await c.rpc('live_join', { p_code: r0.code }); if (je) { stage.innerHTML = String(emptyState({ icon: 'alert', title: errText(je), action: '<a class="btn btn--secondary" href="#/live">Back</a>' })); return; } }

      const lobby = () => {
        title.textContent = 'Get ready';
        stage.innerHTML = `<div class="rc__card center lv__card"><div class="auth__wait">${icon('bolt')}</div><div class="t-title2">You’re in</div><p class="t-2 t-subhead mt-2">${esc(room.title)}</p><p class="t-subhead mt-4">Waiting for your teacher to start. Keep this screen open.</p></div>`;
        foot.innerHTML = '';
      };
      const myAnswer = async (qid) => { const { data: a } = await c.from('live_answers').select('key').eq('room_id', roomId).eq('qid', qid).eq('user_id', me).maybeSingle(); return a?.key || null; };
      const question = async () => {
        const q = room.question; if (!q) return;
        if (shownQ !== q.id) { shownQ = q.id; chosen = await myAnswer(q.id); title.textContent = `Question ${room.q_index}${room.q_total ? ` of ${room.q_total}` : ''}`; await renderQuestion(stage, q, { interactive: true, chosen }); }
        countdown.total = Math.max(5, (new Date(room.ends_at) - new Date(room.question_started_at)) / 1000);
        stopTimer?.(); stopTimer = countdown(room.ends_at, stage.querySelector('#lv-left'), bar, () => { for (const b of stage.querySelectorAll('.pq__opt')) b.disabled = true; foot.innerHTML = `<p class="t-subhead center">Time’s up — waiting for the reveal…</p>`; });
        foot.innerHTML = chosen ? `<p class="t-subhead center">Locked in <strong>${chosen}</strong>. Waiting for the others…</p>` : `<p class="t-subhead center">Tap your answer</p>`;
      };
      const reveal = async () => {
        stopTimer?.(); bar.style.width = '100%';
        const q = room.question; if (!q) return;
        if (shownQ !== q.id) { shownQ = q.id; chosen = await myAnswer(q.id); await renderQuestion(stage, q, { interactive: false, chosen }); }
        stage.querySelector('#lv-left')?.remove();
        paintReveal(stage, room.revealed_answer, chosen);
        const { data: t } = await c.rpc('live_tally', { p_room: roomId, p_qid: q.id });
        const right = chosen === room.revealed_answer;
        stage.querySelector('#lv-after').innerHTML = `<div class="pq__verdict ${right ? 'is-right' : 'is-wrong'} mt-4">${icon(right ? 'check' : 'x')} ${right ? 'You got it' : chosen ? `Not this time — it was ${room.revealed_answer}` : `No answer — it was ${room.revealed_answer}`}</div>${chart(t || [], room.revealed_answer, q.options)}`;
        haptic(right ? 'success' : 'medium');
        const { data: mine } = await c.from('live_players').select('score').eq('room_id', roomId).eq('user_id', me).maybeSingle();
        foot.innerHTML = `<p class="t-subhead center">Your score: <strong class="tnum">${mine?.score ?? 0}</strong> · next question coming…</p>`;
      };
      const ended = async () => {
        stopTimer?.(); title.textContent = 'Final scores'; bar.style.width = '100%';
        stage.innerHTML = `<div class="rc__card lv__card"><div class="t-title2 center">That’s the quiz</div><p class="t-2 t-subhead center mt-1">${esc(room.title)}</p>${await leaderboard(c, roomId, me)}</div>`;
        foot.innerHTML = `<div class="rc__btns"><a class="btn" href="#/today">Done</a></div>`;
      };
      const onRoom = (r) => { room = r; ({ lobby, question, reveal, ended })[r.status]?.(); };
      const watcher = watchRoom(c, roomId, onRoom);
      stage.addEventListener('click', async (e) => {
        const b = e.target.closest('.pq__opt'); if (!b || b.disabled || chosen || room?.status !== 'question') return;
        for (const x of stage.querySelectorAll('.pq__opt')) x.disabled = true;
        const { error: ae } = await c.from('live_answers').insert({ room_id: roomId, qid: room.question.id, user_id: me, key: b.dataset.key });
        if (ae) { toast(/policy|violates/i.test(ae.message) ? 'Too late for this one.' : errText(ae)); return; }
        chosen = b.dataset.key; b.classList.add('is-chosen'); haptic('success');
        foot.innerHTML = `<p class="t-subhead center">Locked in <strong>${chosen}</strong>. Waiting for the others…</p>`;
      });
      return () => { stopTimer?.(); watcher.stop(); };
    },
  };
}
