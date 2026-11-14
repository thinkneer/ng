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

export function signOut() { store.set('session', undefined); }

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
