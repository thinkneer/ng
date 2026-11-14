// Sign-in and Request access. Shown full-screen to anyone without an approved session.
import { html, raw, icon, esc, toast, haptic } from '../ui.js';
import { signIn, buildRequest, requestCode, nicknameTaken, NICK_RE } from '../auth.js';
import { randomQuote } from '../quotes.js';
import { data } from '../data.js';


function shell(inner) {
  return html`<div class="auth"><div class="auth__inner">
    <div class="auth__brand"><img src="assets/icons/icon-192.png" alt="" width="64" height="64"><div class="auth__name">ng</div><div class="auth__tag">CBSE board prep · members only</div></div>
    ${raw(String(inner))}
  </div></div>`;
}

export async function signin(route) {
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

export async function request() {
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
      <div class="card auth__card" id="r-done" hidden>
        <h1 class="t-title2">Almost there</h1>
        <p class="t-2 t-subhead">Send this code to the admin (your parent or teacher who runs the site). Your passphrase is not in it, only a scrambled check of it.</p>
        <button class="btn btn--block mt-4" type="button" id="r-share">${raw(icon('share'))} Send to admin</button>
        <button class="btn btn--plain btn--block mt-2" type="button" id="r-copy">${raw(icon('copy'))} Copy code</button>
        <textarea id="r-code" rows="4" class="mt-2 t-mono" readonly style="font-size:.8rem" aria-label="Request code"></textarea>
        <p class="t-footnote t-3 mt-2">Once the admin approves you, come back here and sign in with the same nickname and passphrase.</p>
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
        f.hidden = true; el.querySelector('#r-done').hidden = false; haptic('success'); el.querySelector('.auth').scrollTo({ top: 0, behavior: 'smooth' });
      });
      el.querySelector('#r-share').addEventListener('click', async () => {
        const code = el.querySelector('#r-code').value;
        const text = `ng access request\n${code}`;
        if (navigator.share) { try { await navigator.share({ title: 'ng access request', text }); return; } catch (e) { if (e?.name === 'AbortError') return; } }
        try { await navigator.clipboard.writeText(text); toast('Code copied \u2014 paste it in a message to the admin'); } catch { el.querySelector('#r-code').select(); toast('Select the code and copy it'); }
      });
      el.querySelector('#r-copy').addEventListener('click', async () => { const t = el.querySelector('#r-code'); try { await navigator.clipboard.writeText(t.value); toast('Code copied'); } catch { t.select(); toast('Select the code and copy it'); } });
    },
  };
}
