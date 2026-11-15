// Sign-in and Request access. Shown full-screen to anyone without an approved session.
import { html, raw, icon, esc, toast, haptic } from '../ui.js';
import { signIn, buildRequest, requestCode, nicknameTaken, NICK_RE, STATIC_OK, isDbMode, signUpPassword, signInPassword, resetPassword, setNewPassword, nicknameFree, signOut } from '../auth.js';
import { errText } from '../db.js';
import { randomQuote } from '../quotes.js';
import { data } from '../data.js';
import { store } from '../store.js';

/** Navigate after sign-in. If the address is already the target (the gate shows Sign in without changing
 *  the URL), assigning the same hash fires nothing, so force the router to redraw. */
function goAfterSignIn(hash) {
  const h = !hash || hash === '#/signin' || hash === '#/login' || hash === '#/request' ? '#/today' : hash;
  if (location.hash === h || (!location.hash && h === '#/today')) window.dispatchEvent(new HashChangeEvent('hashchange'));
  else location.hash = h;
}


function shell(inner) {
  return html`<div class="auth"><div class="auth__inner">
    <div class="auth__brand"><img src="assets/icons/icon-192.png" alt="" width="64" height="64"><div class="auth__name">ng</div><div class="auth__tag">CBSE board prep · members only</div></div>
    ${raw(String(inner))}
  </div></div>`;
}

/** Live site without its sign-in config (offline first visit, or the config file failed to load). */
function unreachable() {
  return {
    title: 'Sign in', tab: 'today', fullscreen: true,
    html: shell(html`<div class="card auth__card center">
        <div class="auth__wait">${raw(icon('alert'))}</div>
        <h1 class="t-title2">Can’t reach sign-in</h1>
        <p class="t-2 t-subhead mt-2">Check your connection, then try again.</p>
        <button class="btn btn--block mt-6" type="button" id="retry">Try again</button>
      </div>`),
    mount(el) { el.querySelector('#retry').addEventListener('click', () => location.reload()); },
  };
}

export async function signin(route) {
  if (await isDbMode()) return emailSignin(route);
  if (!STATIC_OK) return unreachable();
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
          goAfterSignIn(next);
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
  if (!STATIC_OK) return unreachable();
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
   Database mode: email + password. Join = nickname + email + password (the admin approves by hand);
   Sign in = email + password. Nothing but the nickname is ever shown in the app.
   ====================================================================== */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
async function emailSignin(route) {
  const next = route?.next && !/^#\/(signin|request|login|access|awaiting|reset)/.test(route.next) ? route.next : '#/today';
  const signup = !!route?.signup;
  let q = randomQuote();
  const idx = await data.index();
  const liveOpts = idx.classes.filter((c) => c.status === 'live').flatMap((c) => c.streams.filter((st) => st.status === 'live').map((st) => ({ value: `${c.id}|${st.id}`, label: `${c.name}${st.id !== 'general' ? ' ' + st.name : ''}` })));
  const remembered = store.get('signin.email', '');
  const notice = store.get('signin.notice', '');
  return {
    title: signup ? 'Join' : 'Sign in', tab: 'today', fullscreen: true,
    html: shell(html`
      <button class="auth__quote" type="button" id="quote" title="Tap for another line"><span class="auth__qmark" aria-hidden="true">“</span><span id="quote-text">${q}</span></button>
      <form class="card auth__card" id="em" novalidate>
        <h1 class="t-title2">${signup ? 'Join ng' : 'Welcome back'}</h1>
        <p class="t-2 t-subhead mb-4">${signup ? 'Pick a nickname and a password. The admin approves every member by hand.' : 'Sign in with your email and password.'}</p>
        ${notice && !signup ? html`<div class="notice mb-4">${raw(icon('info'))}<div>${notice}</div></div>` : ''}
        ${signup ? html`<label for="e-nick">Nickname</label><input id="e-nick" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="3–20 letters, digits or _">` : ''}
        <label for="e-mail" class="${signup ? 'mt-4' : ''}">Email</label>
        <input id="e-mail" type="email" inputmode="email" autocomplete="email" autocapitalize="none" spellcheck="false" value="${remembered}">
        <label for="e-pass" class="mt-4">Password</label>
        <div class="auth__pass"><input id="e-pass" type="password" autocomplete="${signup ? 'new-password' : 'current-password'}" placeholder="${signup ? 'At least 8 characters' : ''}" minlength="8" required><button class="icon-btn" type="button" id="peek" aria-label="Show password">${raw(icon('eye'))}</button></div>
        ${signup ? html`<label for="e-pass2" class="mt-4">Password again</label><div class="auth__pass"><input id="e-pass2" type="password" autocomplete="new-password" minlength="8" required><button class="icon-btn" type="button" id="peek2" aria-label="Show password">${raw(icon('eye'))}</button></div><p class="t-footnote t-3 mt-2">Use at least 8 characters with letters and a number. Don’t reuse a password from anywhere else, and never share it.</p>` : ''}
        ${signup && liveOpts.length > 1 ? html`<label for="e-class" class="mt-4">Class</label><select id="e-class">${raw(liveOpts.map((o) => `<option value="${o.value}">${esc(o.label)}</option>`).join(''))}</select>` : ''}
        <p class="auth__err" id="e-err" role="alert" hidden></p>
        <button class="btn btn--block mt-4" type="submit" id="e-go">${signup ? 'Create my account' : 'Sign in'}</button>
        <div class="auth__foot">${signup ? html`Already a member? <a href="#/signin">Sign in</a>` : html`New here? <a href="#/request">Join with a nickname</a> · <button class="btn btn--ghost btn--sm" type="button" id="e-forgot">Forgot password</button>`}</div>
      </form>
      <div class="card auth__card center" id="e-done" hidden>
        <div class="auth__wait">${raw(icon('message'))}</div>
        <h1 class="t-title2" id="d-title">Check your email</h1>
        <p class="t-2 t-subhead mt-2" id="d-text"></p>
        <div class="auth__foot"><a href="#/signin">Back to sign in</a></div>
      </div>
      <p class="auth__small">Your email is used only to sign you in; it is never shown to anyone in the app. Use a nickname, not your real name. One phone at a time: signing in elsewhere signs this one out.</p>`),
    mount(el) {
      const f = el.querySelector('#em'), err = el.querySelector('#e-err'), go = el.querySelector('#e-go');
      el.querySelector('#quote').addEventListener('click', () => { q = randomQuote(q); const t = el.querySelector('#quote-text'); t.style.opacity = 0; setTimeout(() => { t.textContent = q; t.style.opacity = 1; }, 150); });
      el.querySelector('#peek').addEventListener('click', () => { const p = el.querySelector('#e-pass'); p.type = p.type === 'password' ? 'text' : 'password'; });
      el.querySelector('#peek2')?.addEventListener('click', () => { const p = el.querySelector('#e-pass2'); p.type = p.type === 'password' ? 'text' : 'password'; });
      // nickname: check availability as soon as they leave the box
      const nickEl = el.querySelector('#e-nick');
      nickEl?.addEventListener('blur', async () => {
        const v = nickEl.value.trim(); if (!NICK_RE.test(v)) return;
        try { const ok = await nicknameFree(v); nickEl.setCustomValidity(ok ? '' : 'taken'); nickEl.style.borderColor = ok ? 'var(--success)' : 'var(--danger)'; if (!ok) fail('That nickname is taken. Try another.'); else err.hidden = true; } catch { /* offline: checked again on submit */ }
      });
      const fail = (m) => { err.textContent = m; err.hidden = false; haptic('medium'); };
      const done = (title, text) => { el.querySelector('#d-title').textContent = title; el.querySelector('#d-text').textContent = text; f.hidden = true; el.querySelector('#e-done').hidden = false; };
      const busy = (on, label) => { go.disabled = on; go.textContent = on ? 'Please wait…' : label; };
      const label = signup ? 'Create my account' : 'Sign in';
      f.addEventListener('submit', async (e) => {
        e.preventDefault(); err.hidden = true;
        const email = el.querySelector('#e-mail').value.trim().toLowerCase(), pass = el.querySelector('#e-pass').value;
        if (!EMAIL_RE.test(email)) return fail('Enter a valid email address.');
        if (pass.length < 8) return fail(signup ? 'Password: at least 8 characters.' : 'Enter your password (at least 8 characters).');
        if (signup) {
          if (!/[A-Za-z]/.test(pass) || !/\d/.test(pass)) return fail('Password: use letters and at least one number.');
          if (pass !== el.querySelector('#e-pass2').value) return fail('The two passwords don’t match. Type them again.');
        }
        busy(true, label);
        try {
          if (signup) {
            const nickname = el.querySelector('#e-nick').value.trim();
            if (!NICK_RE.test(nickname)) { busy(false, label); return fail('Nickname: 3–20 letters, digits or _ (no spaces).'); }
            if (!(await nicknameFree(nickname))) { busy(false, label); return fail('That nickname is taken. Try another.'); }
            const [cls, stream] = (el.querySelector('#e-class')?.value || liveOpts[0]?.value || '12|science').split('|');
            store.set('signin.email', email);
            const s = await signUpPassword({ email, pass, nickname, cls, stream });
            if (s?.confirm) { done('Confirm your email', 'We sent you a confirmation link. Tap it, then come back and sign in.'); return; }
            haptic('success'); goAfterSignIn(s?.pending ? '#/awaiting' : next);
          } else {
            store.set('signin.email', email);
            const s = await signInPassword(email, pass);
            haptic('success');
            if (!s) return fail('Signed in, but your member profile could not be loaded. Try again in a moment.');
            if (s.pending) goAfterSignIn('#/awaiting'); else { toast(`Signed in as ${s.nickname}`); goAfterSignIn(next); }
          }
        } catch (ex) {
          const m = ex?.message || '';
          fail(/invalid login/i.test(m) ? 'Email or password is wrong.'
            : /already registered|already exists/i.test(m) ? 'That email already has an account. Sign in instead (or use Forgot password).'
            : /not confirmed/i.test(m) ? 'Confirm your email first (check your inbox), then sign in.'
            : /email.*rate limit|rate limit.*email|email_send_rate/i.test(m) ? 'Supabase’s email limit for this hour is used up (it still tries to send a confirmation email). Admin: turn off “Confirm email” in Supabase Auth; then this works without any email.'
            : /rate limit|too many/i.test(m) ? 'Too many tries from this network. Wait a few minutes and try again.'
            : /weak|password should/i.test(m) ? 'That password is too easy. Use at least 8 characters with letters and a number.'
            : /signups? not allowed|disabled/i.test(m) ? 'New accounts are closed right now. Ask the admin.'
            : errText(ex));
        } finally { busy(false, label); }
      });
      el.querySelector('#e-forgot')?.addEventListener('click', async () => {
        err.hidden = true;
        const email = el.querySelector('#e-mail').value.trim().toLowerCase();
        if (!EMAIL_RE.test(email)) return fail('Type your email above first, then tap Forgot password.');
        try { await resetPassword(email); done('Check your email', 'We sent a link to set a new password. Open it on this phone, choose a new password, then sign in.'); }
        catch (ex) { fail(errText(ex)); }
      });
      setTimeout(() => el.querySelector(signup ? '#e-nick' : (remembered ? '#e-pass' : '#e-mail'))?.focus({ preventScroll: true }), 50);
    },
  };
}

/** #/reset — arrived from the password-reset email: choose a new password. */
export async function reset() {
  return {
    title: 'New password', tab: 'today', fullscreen: true,
    html: shell(html`
      <form class="card auth__card" id="rs" novalidate>
        <h1 class="t-title2">Choose a new password</h1>
        <label for="r-pass" class="mt-4">New password</label>
        <input id="r-pass" type="password" autocomplete="new-password" placeholder="At least 8 characters">
        <label for="r-pass2" class="mt-4">Again</label>
        <input id="r-pass2" type="password" autocomplete="new-password">
        <p class="auth__err" id="r-err" role="alert" hidden></p>
        <button class="btn btn--block mt-4" type="submit" id="r-go">Save and sign in</button>
        <div class="auth__foot"><a href="#/signin">Back to sign in</a></div>
      </form>`),
    mount(el) {
      const f = el.querySelector('#rs'), err = el.querySelector('#r-err'), go = el.querySelector('#r-go');
      f.addEventListener('submit', async (e) => {
        e.preventDefault(); err.hidden = true;
        const a = el.querySelector('#r-pass').value, b = el.querySelector('#r-pass2').value;
        if (a.length < 8) { err.textContent = 'At least 8 characters.'; err.hidden = false; return; }
        if (a !== b) { err.textContent = 'The two passwords don’t match.'; err.hidden = false; return; }
        go.disabled = true;
        try { await setNewPassword(a); toast('Password saved'); goAfterSignIn('#/today'); }
        catch (ex) { err.textContent = /session|auth/i.test(ex.message) ? 'This link has expired or was opened in a different browser. Ask for a new one from Sign in → Forgot password.' : errText(ex); err.hidden = false; go.disabled = false; }
      });
    },
  };
}

/** Db mode: signed in, but the admin has not approved the nickname yet (or paused it). */
export async function awaiting(route) {
  const p = route?.profile || {};
  const { maskedEmail } = await import('../auth.js');
  const email = await maskedEmail().catch(() => '');
  const paused = p.status === 'suspended';
  const msg = `Hi! Please approve my ng access.\nNickname: ${p.nickname || '(see email)'}`;
  return {
    title: 'Access awaited', tab: 'today', fullscreen: true,
    html: shell(html`
      <div class="card auth__card center">
        <div class="auth__wait">${raw(icon('clock'))}</div>
        <h1 class="t-title2">${paused ? 'Account paused' : 'Access awaited'}</h1>
        <p class="t-2 t-subhead mt-2">${raw(paused ? `${esc(p.nickname)} is paused. Ask the admin to restore it.` : `You are signed in as <strong>${esc(p.nickname || 'a new member')}</strong>${email ? ` (${esc(email)})` : ''}. The admin approves every member by hand — send them a note and come back after.`)}</p>
        <a class="btn btn--block mt-6 btn--wa" href="https://wa.me/?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">${raw(icon('message'))} Send on WhatsApp</a>
        <button class="btn btn--secondary btn--block mt-2" type="button" id="aw-check">${raw(icon('check'))} I’ve been approved — check again</button>
        <div class="auth__foot"><button class="btn btn--ghost btn--sm" type="button" id="aw-out">Sign out · use another account</button></div>
      </div>`),
    mount(el) {
      el.querySelector('#aw-check').addEventListener('click', () => { window.dispatchEvent(new Event('ng:auth')); if (location.hash === '#/today') window.dispatchEvent(new HashChangeEvent('hashchange')); else location.hash = '#/today'; });
      el.querySelector('#aw-out').addEventListener('click', async (e) => { e.currentTarget.disabled = true; e.currentTarget.textContent = 'Signing out…'; await signOut(); location.hash = '#/signin'; });
    },
  };
}
