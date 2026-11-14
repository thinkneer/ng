// Sign-in and Request access. Shown full-screen to anyone without an approved session.
import { html, raw, icon, esc, toast, haptic } from '../ui.js';
import { signIn, buildRequest, requestCode, nicknameTaken, NICK_RE, isDbMode, sendEmailCode, verifyEmailCode, nicknameFree, signOut } from '../auth.js';
import { errText } from '../db.js';
import { randomQuote } from '../quotes.js';
import { data } from '../data.js';
import { store } from '../store.js';


function shell(inner) {
  return html`<div class="auth"><div class="auth__inner">
    <div class="auth__brand"><img src="assets/icons/icon-192.png" alt="" width="64" height="64"><div class="auth__name">ng</div><div class="auth__tag">CBSE board prep · members only</div></div>
    ${raw(String(inner))}
  </div></div>`;
}

export async function signin(route) {
  if (await isDbMode()) return emailSignin(route);
  const next = route?.next || '#/today';
  let q = randomQuote();
  return {
    title: 'Sign in', tab: 'today', fullscreen: true,
    html: shell(html`
      <button class="auth__quote" type="button" id="quote" title="Tap for another line"><span class="auth__qmark" aria-hidden="true">“</span><span id="quote-text">${q}</span></button>
      <form class="card auth__card" id="signin" novalidate>
        <h1 class="t-title2">Welcome back</h1>
        <p class="t-2 t-subhead mb-4">Sign in with the nickname the admin approved.</p>
        <label for="nick">Nickname</label>
        <input id="nick" name="nick" autocomplete="username" autocapitalize="none" spellcheck="false" required>
        <label for="pass" class="mt-4">Passphrase</label>
        <div class="auth__pass"><input id="pass" name="pass" type="password" autocomplete="current-password" required><button class="icon-btn" type="button" id="peek" aria-label="Show passphrase">${raw(icon('eye'))}</button></div>
        <p class="auth__err" id="err" role="alert" hidden></p>
        ${raw(store.get('pending', null) ? `<div class="notice mt-4">${icon('clock')}<div><strong>Access awaited for ${esc(store.get('pending').nickname)}.</strong> Not approved yet? <a href="https://wa.me/?text=${encodeURIComponent(store.get('pending').msg)}" target="_blank" rel="noopener">Send it again on WhatsApp</a>.</div></div>` : '')}
        <button class="btn btn--block mt-4" type="submit" id="go">Sign in</button>
        <div class="auth__foot">No account yet? <a href="#/request">Request access</a></div>
      </form>
      <p class="auth__small">Nicknames only. Don’t use your real name, and don’t reuse a password from anywhere else.</p>`),
    mount(el) {
      const f = el.querySelector('#signin'), err = el.querySelector('#err'), go = el.querySelector('#go');
      el.querySelector('#quote').addEventListener('click', () => { q = randomQuote(q); const t = el.querySelector('#quote-text'); t.style.opacity = 0; setTimeout(() => { t.textContent = q; t.style.opacity = 1; }, 150); });
      el.querySelector('#peek').addEventListener('click', () => { const p = el.querySelector('#pass'); p.type = p.type === 'password' ? 'text' : 'password'; });
      f.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nick = f.nick.value.trim(), pass = f.pass.value;
        if (!nick || !pass) { err.textContent = 'Enter your nickname and passphrase.'; err.hidden = false; return; }
        go.disabled = true; go.textContent = 'Checking…'; err.hidden = true;
        try {
          const s = await signIn(nick, pass);
          store.set('pending', undefined);
          haptic('success'); toast(`Signed in as ${s.nickname}`);
          location.hash = next === '#/signin' ? '#/today' : next;
        } catch (ex) {
          err.textContent = navigator.onLine ? ex.message : 'You’re offline. Connect once to sign in.'; err.hidden = false; haptic('medium');
        } finally { go.disabled = false; go.textContent = 'Sign in'; }
      });
      setTimeout(() => el.querySelector('#nick')?.focus({ preventScroll: true }), 50);
    },
  };
}

export async function request(route) {
  if (await isDbMode()) return emailSignin({ ...route, signup: true });
  const idx = await data.index();
  const liveClasses = idx.classes.filter((c) => c.status === 'live');
  const liveOpts = liveClasses.flatMap((c) => c.streams.filter((s) => s.status === 'live').map((s) => ({ value: `${c.id}|${s.id}`, label: `${c.name}${s.id !== 'general' ? ' ' + s.name : ''}` })));
  return {
    title: 'Request access', tab: 'today', fullscreen: true,
    html: shell(html`
      <form class="card auth__card" id="req" novalidate>
        <h1 class="t-title2">Request access</h1>
        <p class="t-2 t-subhead mb-4">Pick a nickname and a passphrase. The admin approves every member by hand.</p>
        <label for="r-nick">Nickname</label>
        <input id="r-nick" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="3–20 letters, digits or _">
        <label for="r-pass" class="mt-4">Passphrase</label>
        <input id="r-pass" type="password" autocomplete="new-password" placeholder="At least 8 characters">
        <label for="r-pass2" class="mt-4">Passphrase again</label>
        <input id="r-pass2" type="password" autocomplete="new-password">
        <label for="r-class" class="mt-4" ${raw(liveOpts.length < 2 ? 'hidden' : '')}>Class</label>
        <select id="r-class" ${raw(liveOpts.length < 2 ? 'hidden' : '')}>${raw(liveOpts.map((o) => `<option value="${o.value}">${esc(o.label)}</option>`).join(''))}</select>
        ${raw(liveOpts.length < 2 ? `<p class="t-footnote t-2 mt-4">For ${esc(liveOpts[0]?.label || '')}. All subjects are included; you can drop any of them later.</p>` : '<p class="t-footnote t-2 mt-2">All subjects are included; you can drop any of them later.</p>')}
        <p class="auth__err" id="r-err" role="alert" hidden></p>
        <button class="btn btn--block mt-4" type="submit" id="r-go">Create request</button>
        <div class="auth__foot"><a href="#/signin">Back to sign in</a></div>
      </form>
      <div class="card auth__card center" id="r-done" hidden>
        <div class="auth__wait">${raw(icon('clock'))}</div>
        <h1 class="t-title2">Access awaited</h1>
        <p class="t-2 t-subhead mt-2">Send your request to the admin on WhatsApp. Once approved, sign in with the same nickname and passphrase.</p>
        <a class="btn btn--block mt-6 btn--wa" id="r-wa" target="_blank" rel="noopener">${raw(icon('message'))} Send on WhatsApp</a>
        <button class="btn btn--ghost btn--sm mt-2" type="button" id="r-copy">Copy instead</button>
        <textarea id="r-code" class="sr-only" readonly aria-hidden="true" tabindex="-1"></textarea>
        <div class="auth__foot"><a href="#/signin">Back to sign in</a></div>
      </div>
      <p class="auth__small">Use a nickname. No real names, emails, phone numbers or schools.</p>`),
    mount(el) {
      const f = el.querySelector('#req'), err = el.querySelector('#r-err');
      const fail = (m) => { err.textContent = m; err.hidden = false; haptic('medium'); err.scrollIntoView({ block: 'center', behavior: 'smooth' }); };
      f.addEventListener('submit', async (e) => {
        e.preventDefault(); err.hidden = true;
        const nickname = el.querySelector('#r-nick').value.trim(), pass = el.querySelector('#r-pass').value, pass2 = el.querySelector('#r-pass2').value;
        const [cls, stream] = el.querySelector('#r-class').value.split('|');
        const subjects = []; // all subjects; the student narrows them later from the shelf
        if (!NICK_RE.test(nickname)) return fail('Nickname: 3–20 letters, digits or _ (no spaces).');
        if (pass.length < 8) return fail('Passphrase: at least 8 characters.');
        if (!pass2) return fail('Type the same passphrase again in the second box.');
        if (pass !== pass2) return fail('The two passphrases don’t match. Type them again.');
        if (await nicknameTaken(nickname)) return fail('That nickname is taken. Try another.');
        const req = await buildRequest({ nickname, pass, cls, stream, subjects });
        const code = requestCode(req);
        el.querySelector('#r-code').value = code;
        const msg = `Hi! Please approve my ng access.\nNickname: ${nickname}\nCode: ${code}`;
        el.querySelector('#r-wa').href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
        el.querySelector('#r-wa').dataset.msg = msg;
        store.set('pending', { nickname, msg, at: Date.now() });
        f.hidden = true; el.querySelector('#r-done').hidden = false; haptic('success'); el.querySelector('.auth').scrollTo({ top: 0, behavior: 'smooth' });
      });
      el.querySelector('#r-copy').addEventListener('click', async () => { const m = el.querySelector('#r-wa').dataset.msg; try { await navigator.clipboard.writeText(m); toast('Copied \u2014 paste it to the admin'); } catch { toast('Copy not allowed here'); } });
    },
  };
}


/* ======================================================================
   Database mode: sign in with email. One form: email (+ nickname the first time) → we email a 6-digit
   code and a link; either works. Nothing but the nickname is ever shown in the app.
   ====================================================================== */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
async function emailSignin(route) {
  const next = route?.next && !/^#\/(signin|request|login|access|awaiting)/.test(route.next) ? route.next : '#/today';
  const signup = !!route?.signup;
  let q = randomQuote();
  const idx = await data.index();
  const liveOpts = idx.classes.filter((c) => c.status === 'live').flatMap((c) => c.streams.filter((st) => st.status === 'live').map((st) => ({ value: `${c.id}|${st.id}`, label: `${c.name}${st.id !== 'general' ? ' ' + st.name : ''}` })));
  const remembered = store.get('signin.email', '');
  return {
    title: signup ? 'Join' : 'Sign in', tab: 'today', fullscreen: true,
    html: shell(html`
      <button class="auth__quote" type="button" id="quote" title="Tap for another line"><span class="auth__qmark" aria-hidden="true">“</span><span id="quote-text">${q}</span></button>
      <form class="card auth__card" id="em" novalidate>
        <h1 class="t-title2">${signup ? 'Join ng' : 'Welcome back'}</h1>
        <p class="t-2 t-subhead mb-4">${signup ? 'Pick a nickname. We email you a 6-digit code; the admin then approves you by hand.' : 'We email you a 6-digit code — no password to remember.'}</p>
        ${signup ? html`<label for="e-nick">Nickname</label><input id="e-nick" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="3–20 letters, digits or _">` : ''}
        <label for="e-mail" class="${signup ? 'mt-4' : ''}">Email</label>
        <input id="e-mail" type="email" inputmode="email" autocomplete="email" autocapitalize="none" spellcheck="false" value="${remembered}">
        ${signup && liveOpts.length > 1 ? html`<label for="e-class" class="mt-4">Class</label><select id="e-class">${raw(liveOpts.map((o) => `<option value="${o.value}">${esc(o.label)}</option>`).join(''))}</select>` : ''}
        <p class="auth__err" id="e-err" role="alert" hidden></p>
        <button class="btn btn--block mt-4" type="submit" id="e-go">${signup ? 'Email me a code' : 'Email me a code'}</button>
        <div class="auth__foot">${signup ? html`Already a member? <a href="#/signin">Sign in</a>` : html`New here? <a href="#/request">Join with a nickname</a>`}</div>
      </form>
      <form class="card auth__card" id="code" novalidate hidden>
        <h1 class="t-title2">Check your email</h1>
        <p class="t-2 t-subhead mt-2">We sent a 6-digit code to <strong id="code-mail"></strong>. Type it here, or tap the link in the email.</p>
        <label for="e-code" class="mt-4">Code</label>
        <input id="e-code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]*" maxlength="8" placeholder="123456" style="letter-spacing:.3em;font-size:1.4rem;text-align:center">
        <p class="auth__err" id="c-err" role="alert" hidden></p>
        <button class="btn btn--block mt-4" type="submit" id="c-go">Continue</button>
        <div class="auth__foot"><button class="btn btn--ghost btn--sm" type="button" id="c-back">Use another email</button> <button class="btn btn--ghost btn--sm" type="button" id="c-again">Send again</button></div>
      </form>
      <p class="auth__small">Your email is used only to sign you in; it is never shown to anyone in the app. Use a nickname, not your real name.</p>`),
    mount(el) {
      const f = el.querySelector('#em'), err = el.querySelector('#e-err'), go = el.querySelector('#e-go');
      const cf = el.querySelector('#code'), cerr = el.querySelector('#c-err'), cgo = el.querySelector('#c-go');
      el.querySelector('#quote').addEventListener('click', () => { q = randomQuote(q); const t = el.querySelector('#quote-text'); t.style.opacity = 0; setTimeout(() => { t.textContent = q; t.style.opacity = 1; }, 150); });
      const fail = (box, m) => { box.textContent = m; box.hidden = false; haptic('medium'); };
      let email = '', meta = null;
      const send = async () => {
        go.disabled = true; go.textContent = 'Sending…'; err.hidden = true;
        try {
          await sendEmailCode(email, meta || {});
          store.set('signin.email', email);
          el.querySelector('#code-mail').textContent = email;
          f.hidden = true; cf.hidden = false; haptic('success');
          setTimeout(() => el.querySelector('#e-code')?.focus({ preventScroll: true }), 50);
        } catch (ex) { fail(err, navigator.onLine ? errText(ex) : 'You’re offline. Connect once to sign in.'); }
        finally { go.disabled = false; go.textContent = 'Email me a code'; }
      };
      f.addEventListener('submit', async (e) => {
        e.preventDefault(); err.hidden = true;
        email = el.querySelector('#e-mail').value.trim().toLowerCase();
        if (!EMAIL_RE.test(email)) return fail(err, 'Enter a valid email address.');
        if (signup) {
          const nickname = el.querySelector('#e-nick').value.trim();
          if (!NICK_RE.test(nickname)) return fail(err, 'Nickname: 3–20 letters, digits or _ (no spaces).');
          go.disabled = true; go.textContent = 'Checking…';
          try { if (!(await nicknameFree(nickname))) { go.disabled = false; go.textContent = 'Email me a code'; return fail(err, 'That nickname is taken. Try another.'); } }
          catch (ex) { go.disabled = false; go.textContent = 'Email me a code'; return fail(err, errText(ex)); }
          const [cls, stream] = (el.querySelector('#e-class')?.value || liveOpts[0]?.value || '12|science').split('|');
          meta = { nickname, cls, stream };
        }
        await send();
      });
      cf.addEventListener('submit', async (e) => {
        e.preventDefault(); cerr.hidden = true;
        const code = el.querySelector('#e-code').value.replace(/\D/g, '');
        if (code.length < 6) return fail(cerr, 'Type the 6-digit code from the email.');
        cgo.disabled = true; cgo.textContent = 'Checking…';
        try {
          const s = await verifyEmailCode(email, code);
          haptic('success');
          if (s?.pending) location.hash = '#/awaiting';
          else { toast(`Signed in as ${s.nickname}`); location.hash = next; }
        } catch (ex) { fail(cerr, /expired|invalid/i.test(ex.message) ? 'That code is wrong or has expired. Send again and use the newest one.' : errText(ex)); }
        finally { cgo.disabled = false; cgo.textContent = 'Continue'; }
      });
      el.querySelector('#c-back').addEventListener('click', () => { cf.hidden = true; f.hidden = false; });
      el.querySelector('#c-again').addEventListener('click', () => { cf.hidden = true; f.hidden = false; send(); });
      setTimeout(() => el.querySelector(signup ? '#e-nick' : '#e-mail')?.focus({ preventScroll: true }), 50);
    },
  };
}

/** Db mode: signed in, but the admin has not approved the nickname yet (or paused it). */
export async function awaiting(route) {
  const p = route?.profile || {};
  const paused = p.status === 'suspended';
  const msg = `Hi! Please approve my ng access.\nNickname: ${p.nickname || '(see email)'}`;
  return {
    title: 'Access awaited', tab: 'today', fullscreen: true,
    html: shell(html`
      <div class="card auth__card center">
        <div class="auth__wait">${raw(icon('clock'))}</div>
        <h1 class="t-title2">${paused ? 'Account paused' : 'Access awaited'}</h1>
        <p class="t-2 t-subhead mt-2">${paused ? `${p.nickname} is paused. Ask the admin to restore it.` : `You are signed in as <strong>${esc(p.nickname || 'a new member')}</strong>. The admin approves every member by hand — send them a note and come back after.`}</p>
        <a class="btn btn--block mt-6 btn--wa" href="https://wa.me/?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">${raw(icon('message'))} Send on WhatsApp</a>
        <button class="btn btn--secondary btn--block mt-2" type="button" id="aw-check">${raw(icon('check'))} I’ve been approved — check again</button>
        <div class="auth__foot"><button class="btn btn--ghost btn--sm" type="button" id="aw-out">Sign out</button></div>
      </div>`),
    mount(el) {
      el.querySelector('#aw-check').addEventListener('click', () => { window.dispatchEvent(new Event('ng:auth')); if (location.hash === '#/today') window.dispatchEvent(new HashChangeEvent('hashchange')); else location.hash = '#/today'; });
      el.querySelector('#aw-out').addEventListener('click', () => { signOut(); location.hash = '#/signin'; });
    },
  };
}
