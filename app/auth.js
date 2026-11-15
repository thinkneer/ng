// Members-only sign-in for a static site.
// Honest scope: this hides the app from anyone the admin hasn't approved. The content files are still public
// in the site's repository, so this is access control for the app, not encryption. Passphrases never leave the browser:
// only a salted PBKDF2 hash is ever written down (in data/users.json, by the admin, after approval).
import { store } from './store.js';

const ITERATIONS = 100000;
const enc = new TextEncoder();
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

export function newSalt() { return b64(crypto.getRandomValues(new Uint8Array(16))); }

export async function hashPass(pass, saltB64) {
  const key = await crypto.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: unb64(saltB64), iterations: ITERATIONS }, key, 256);
  return b64(bits);
}

export const NICK_RE = /^[A-Za-z0-9_]{3,20}$/;

/** The static nickname + passphrase flow runs only on a local server (quality checks, `serve.mjs --test`).
 *  The live site signs in through Supabase; if that config cannot load, it shows a retry, never this flow. */
export const STATIC_OK = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);

let usersCache = null;
export async function loadUsers({ fresh = false } = {}) {
  if (usersCache && !fresh) return usersCache;
  const r = await fetch('data/users.json', { cache: 'no-cache' });
  if (!r.ok) throw new Error('Could not load the member list');
  usersCache = (await r.json()).users || [];
  return usersCache;
}
const findUser = (users, nick) => users.find((u) => u.nickname.toLowerCase() === String(nick).toLowerCase());

export function session() { return store.get('session', null); }

/** Verify the stored session against the current member list. Offline: trust the stored session. */
export async function verifySession() {
  const s = session();
  if (!s) return null;
  if (!STATIC_OK) return s.db ? s : null; // live site, sign-in service unreachable: keep a db member signed in offline, nothing else
  try {
    const u = findUser(await loadUsers(), s.nickname);
    if (!u || u.status !== 'approved' || u.hash !== s.hash) { store.set('session', undefined); return null; }
    if (u.role !== s.role || (u.subjects || []).join() !== (s.subjects || []).join()) store.set('session', { ...s, role: u.role, subjects: u.subjects, class: u.class, stream: u.stream });
    return session();
  } catch {
    return s; // offline or network error: keep the member signed in
  }
}

export async function signIn(nick, pass) {
  if (!STATIC_OK) throw new Error('Could not reach the sign-in service. Check your connection and try again.');
  const users = await loadUsers({ fresh: true });
  const u = findUser(users, nick.trim());
  // Same message for unknown nickname and wrong passphrase.
  const fail = new Error('That nickname and passphrase don’t match an approved member.');
  if (!u) throw fail;
  if (u.status !== 'approved') throw new Error('This account is paused. Ask the admin.');
  const h = await hashPass(pass, u.salt);
  if (h !== u.hash) throw fail;
  const s = { nickname: u.nickname, hash: u.hash, role: u.role, class: u.class, stream: u.stream, subjects: u.subjects, at: new Date().toISOString() };
  store.set('session', s);
  // First sign-in on this device: use the class and subjects from the approval.
  if (!store.settings.class && u.class) store.setSettings({ class: u.class, stream: u.stream || (u.class === '9' || u.class === '10' ? 'general' : 'science'), subjects: u.subjects || [] });
  return s;
}

export function signOut() { if (session()?.db) dbSignOut(); else store.set('session', undefined); window.dispatchEvent(new Event('ng:auth')); }

/** Build an access request. The passphrase is hashed here and never stored or sent. */
export async function buildRequest({ nickname, pass, cls, stream, subjects }) {
  const salt = newSalt();
  const hash = await hashPass(pass, salt);
  return { v: 1, nickname, salt, hash, class: cls, stream, subjects, requested: new Date().toISOString().slice(0, 10) };
}
export const requestCode = (req) => btoa(unescape(encodeURIComponent(JSON.stringify(req))));
export async function nicknameTaken(nick) {
  try { return !!findUser(await loadUsers({ fresh: true }), nick); } catch { return false; }
}

/* ======================================================================
   Database mode (Supabase): email + password. Nickname is chosen once at sign-up and is all the app ever shows.
   One login per user anywhere: each sign-in claims the account with a device token; another device signs out.
   The session mirror in store 'session' keeps the same shape as the static flow, so the rest of the app does not care.
   ====================================================================== */
import { db, enabled as dbEnabled } from './db.js';

export async function isDbMode() { return dbEnabled(); }
const PROFILE_COLS = 'id, nickname, role, status, class, stream, subjects, session_token';

const streamOf = (cls, stream) => stream || (cls === '9' || cls === '10' ? 'general' : 'science');
function mirror(p) {
  const s = { nickname: p.nickname, role: p.role, status: p.status, class: p.class, stream: p.stream, subjects: p.subjects || [], uid: p.id, db: true, at: new Date().toISOString() };
  store.set('session', s);
  const set = store.settings;
  const fixed = p.role !== 'admin' && p.class && p.class !== 'any'; // the admin decides this member's class
  if (fixed && (set.class !== p.class || set.stream !== streamOf(p.class, p.stream))) {
    store.setSettings({ class: p.class, stream: streamOf(p.class, p.stream), subjects: [] });
  } else if (!set.class && p.class && p.class !== 'any') {
    store.setSettings({ class: p.class, stream: streamOf(p.class, p.stream), subjects: [] });
  }
  // "My subjects" can only hold subjects the admin opened; if none are left, fall back to all of them
  const allowed = p.role === 'admin' ? [] : (p.subjects || []);
  const mine = store.settings.subjects || [];
  if (allowed.length && mine.length && mine.some((x) => !allowed.includes(x))) {
    const keep = mine.filter((x) => allowed.includes(x));
    store.setSettings({ subjects: keep.length ? keep : [] });
  }
  return s;
}
const deviceToken = () => { let t = store.get('device', null); if (!t) { t = crypto.randomUUID(); store.set('device', t); } return t; };
async function loadProfile(c) {
  const { data: sess } = await c.auth.getSession();
  const id = sess.session?.user?.id; if (!id) return { none: true };
  const { data, error } = await c.from('profiles').select(PROFILE_COLS).eq('id', id).maybeSingle();
  if (error) throw error;
  return { profile: data };
}

/** Db mode: approved member → session; pending/suspended → {pending: profile}; nobody → null. Offline: trust the mirror. */
export async function verifyDbSession() {
  const c = await db(); if (!c) return null;
  let r;
  try { r = await loadProfile(c); } catch { const s = session(); return s?.db ? s : null; } // network error: keep this device signed in
  if (r.none) { if (session()?.db) store.set('session', undefined); return null; }
  const p = r.profile;
  if (!p) return { pending: { nickname: '', status: 'pending' } };
  if (p.session_token && p.session_token !== deviceToken()) {
    await dbSignOut(); store.set('signin.notice', 'This account was signed in on another device, so this one was signed out. Sign in again to use it here.');
    return null;
  }
  if (p.status !== 'approved') { store.set('session', undefined); return { pending: p }; }
  return mirror(p);
}
async function claim(c) { try { await c.rpc('claim_session', { tok: deviceToken() }); } catch { /* ignore */ } }

export async function signUpPassword({ email, pass, nickname, cls, stream }) {
  const c = await db();
  const { data, error } = await c.auth.signUp({ email, password: pass, options: { data: { nickname, class: cls, stream } } });
  if (error) throw error;
  if (!data.session) return { confirm: true }; // "Confirm email" is still on in the Supabase project
  await claim(c);
  window.dispatchEvent(new Event('ng:auth'));
  return verifyDbSession();
}
export async function signInPassword(email, pass) {
  const c = await db();
  const { error } = await c.auth.signInWithPassword({ email, password: pass });
  if (error) throw error;
  await claim(c);
  store.set('signin.notice', undefined);
  window.dispatchEvent(new Event('ng:auth'));
  return verifyDbSession();
}
export async function resetPassword(email) {
  const c = await db();
  const { error } = await c.auth.resetPasswordForEmail(email, { redirectTo: new URL(location.pathname, location.origin).href + '#/reset' });
  if (error) throw error;
}
export async function setNewPassword(pass) {
  const c = await db();
  const { error } = await c.auth.updateUser({ password: pass });
  if (error) throw error;
  await claim(c);
  window.dispatchEvent(new Event('ng:auth'));
}
export async function nicknameFree(nick) {
  const c = await db();
  const { data, error } = await c.rpc('nickname_available', { nick });
  if (error) throw error;
  return !!data;
}
/** Masked sign-in email of the current member, e.g. n•••@gmail.com (shown only to the member themselves). */
export async function maskedEmail() {
  const c = await db(); if (!c) return '';
  const { data } = await c.auth.getSession(); const e = data.session?.user?.email || '';
  const [u, d] = e.split('@'); return u && d ? `${u[0]}•••@${d}` : '';
}
export async function signOutEverywhere() { try { const c = await db(); await c?.auth.signOut({ scope: 'global' }); } catch { /* ignore */ } store.set('session', undefined); window.dispatchEvent(new Event('ng:auth')); }
export async function dbSignOut() { try { const c = await db(); await c?.auth.signOut(); } catch { /* ignore */ } store.set('session', undefined); }
