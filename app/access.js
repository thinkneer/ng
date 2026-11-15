// What a member may open, as the admin set it (db mode only; the local test server is never limited).
//   profiles.class / stream : the member's class. "any" lets the member pick a class themselves (teachers).
//   profiles.subjects       : subject ids the member may open; empty = every subject of the class.
// Admins are never limited. Honest scope: this is access control for the app; the content files are public
// in the repo, so it decides what the app shows, not who could ever read a file.
import { store } from './store.js';

export function access() {
  const s = store.get('session', null) || {};
  if (!s.db || s.role === 'admin') return { limited: false, cls: null, stream: null, subjects: [] };
  const cls = s.class && s.class !== 'any' ? String(s.class) : null;
  return { limited: true, cls, stream: cls ? (s.stream || null) : null, subjects: Array.isArray(s.subjects) ? s.subjects : [] };
}

/** May this member open this class (and stream)? */
export function classAllowed(classId, streamId) {
  const a = access();
  if (!a.cls) return true;
  if (String(classId) !== a.cls) return false;
  return !streamId || !a.stream || a.stream === 'general' || streamId === a.stream;
}

/** May this member open this subject? */
export function subjectAllowed(classId, streamId, subjectId) {
  if (!classAllowed(classId, streamId)) return false;
  const { subjects } = access();
  return !subjects.length || subjects.includes(subjectId);
}

/** True when the admin fixed the member's class (the class picker is then hidden). */
export const classLocked = () => !!access().cls;
