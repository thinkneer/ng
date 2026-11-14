// Cards: the chapter's key visuals as a swipe deck (cards.json per chapter, schema in schemas/cards.schema.json).
// Ids are stable: "<subject>/<chapter>/card:<id>" keys the Leitner schedule (same store as Recall) and My cards.
import { data } from './data.js';
import { store } from './store.js';
import { refId, resolveRef } from './blocks/parse.js';

export const cardUid = (subId, chId, id) => `${subId}/${chId}/card:${id}`;

/** All cards of one chapter, with svg refs resolved against notes.md. */
export async function chapterCards(sub, ch, unit) {
  if (!ch?.items?.cards) return [];
  const list = await data.cards(sub, ch.id).catch(() => []);
  const notes = list.some((c) => refId(c.svg)) ? await data.notes(sub, ch.id) : null;
  return list.map((c) => {
    const rid = refId(c.svg);
    const uid = cardUid(sub.id, ch.id, c.id);
    return { ...c, cid: c.id, id: uid, svg: rid ? resolveRef(rid, notes) : c.svg, uid, key: `${sub.id}/${ch.id}`, subject: sub.id, chapter: ch.id, chapterTitle: ch.title, chapterNumber: ch.number, colour: unit.colour, deck: c.kind !== 'mnemonic' };
  });
}

/** Cards of every chapter in one unit, in chapter order. */
export async function unitCards(sub, unit) {
  const out = [];
  for (const ch of unit.chapters) out.push(...await chapterCards(sub, ch, unit));
  return out;
}

/** Resolve a list of uids ("sub/ch/card:id") into cards, across the student's live subjects. */
export async function cardsByUid(uids, subjects) {
  const byChapter = {};
  for (const uid of uids) { const m = uid.match(/^([^/]+)\/([^/]+)\/card:(.+)$/); if (m) (byChapter[`${m[1]}/${m[2]}`] ||= new Set()).add(uid); }
  const out = [];
  for (const [key, set] of Object.entries(byChapter)) {
    const [subId, chId] = key.split('/');
    const sub = subjects.find((x) => x.id === subId); if (!sub) continue;
    const { unit, chapter } = data.chapterOf(sub, chId); if (!chapter) continue;
    for (const c of await chapterCards(sub, chapter, unit)) if (set.has(c.uid)) out.push(c);
  }
  // keep the caller's order
  return uids.map((u) => out.find((c) => c.uid === u)).filter(Boolean);
}

/* ---------- My cards (hearted, per nickname, on this device) ---------- */
export const myCards = () => store.progress().mycards || [];
export const isMine = (uid) => myCards().includes(uid);
export function toggleMine(uid) {
  let on = false;
  store.saveProgress((p) => { const l = p.mycards || []; on = !l.includes(uid); p.mycards = on ? [...l, uid] : l.filter((x) => x !== uid); return p; });
  return on;
}
