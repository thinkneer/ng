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
   Database mode (Supabase): sign in by email — a 6-digit code or the link in the same email.
   The email stays in Supabase Auth; the app only ever shows the nickname. The session mirror in
   store 'session' keeps the same shape as the static flow, so the rest of the app does not care.
   ====================================================================== */
import { db, enabled as dbEnabled, myProfile } from './db.js';

export async function isDbMode() { return dbEnabled(); }

function mirror(p) {
  const s = { nickname: p.nickname, role: p.role, status: p.status, class: p.class, stream: p.stream, subjects: p.subjects || [], uid: p.id, db: true, at: new Date().toISOString() };
  store.set('session', s);
  if (!store.settings.class && p.class) store.setSettings({ class: p.class, stream: p.stream || (p.class === '9' || p.class === '10' ? 'general' : 'science'), subjects: [] });
  return s;
}

/** Db mode: approved member → session; pending/suspended → {pending: profile}; nobody → null. Offline: trust the mirror. */
export async function verifyDbSession() {
  const c = await db(); if (!c) return null;
  const { data } = await c.auth.getSession();
  if (!data.session) { if (session()?.db) store.set('session', undefined); return null; }
  try {
    const p = await myProfile();
    if (!p) return { pending: { nickname: '', status: 'pending' } };
    if (p.status !== 'approved') { store.set('session', undefined); return { pending: p }; }
    return mirror(p);
  } catch {
    const s = session();
    return s?.db ? s : null; // network error: keep the member signed in on this device
  }
}

/** Send the email (code + link). Nickname / class go into sign-up metadata for the first sign-in. */
export async function sendEmailCode(email, { nickname, cls, stream } = {}) {
  const c = await db();
  const redirect = new URL(location.pathname, location.origin).href;
  const { error } = await c.auth.signInWithOtp({ email, options: { emailRedirectTo: redirect, shouldCreateUser: true, data: nickname ? { nickname, class: cls, stream } : undefined } });
  if (error) throw error;
}
export async function verifyEmailCode(email, token) {
  const c = await db();
  const { error } = await c.auth.verifyOtp({ email, token: token.replace(/\D/g, ''), type: 'email' });
  if (error) throw error;
  window.dispatchEvent(new Event('ng:auth'));
  return verifyDbSession();
}
export async function nicknameFree(nick) {
  const c = await db();
  const { data, error } = await c.rpc('nickname_available', { nick });
  if (error) throw error;
  return !!data;
}
export async function dbSignOut() { try { const c = await db(); await c?.auth.signOut(); } catch { /* ignore */ } store.set('session', undefined); }
