// Recall: turns mustknow.md lines into flashcards and schedules them (Leitner: 1 · 3 · 7 · 21 · 45 days).
// Nothing to set up: every line of the Must-know layer is a card; the student only answers Again / Got it.
import { store } from './store.js';
import { toISO, today, parseDate, daysBetween } from './ui.js';

const INTERVALS = [1, 3, 7, 21, 45];
const SKIP_SECTIONS = ['Most-repeated board questions', 'Answer skeletons'];

function hash(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); }
const clean = (s) => s.replace(/^\s*(?:[-*+]|\d+[.)])\s+/, '').replace(/\s+/g, ' ').trim();

/** Split a must-know line into prompt and answer. */
function splitLine(line) {
  let m = line.match(/^\*\*([^*]+?)\*\*\s*[:—–-]\s*(.+)$/) || line.match(/^\*\*([^*]+?):\*\*\s*(.+)$/);
  if (m) return { prompt: m[1].trim(), answer: m[2].trim() };
  // avoid splitting inside maths: find the first ':' or '→' outside $...$
  let depth = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '$') depth = !depth;
    if (!depth && (c === ':' || line.startsWith(' → ', i) || line.startsWith(' ⇒ ', i)) && i > 8 && i < line.length - 6) {
      const cut = c === ':' ? 1 : 3;
      return { prompt: line.slice(0, i).trim(), answer: line.slice(i + cut).trim() };
    }
  }
  // cloze: show the first part, hide the rest
  const words = line.split(' ');
  if (words.length < 6) return null;
  const k = Math.max(3, Math.floor(words.length * 0.4));
  return { prompt: words.slice(0, k).join(' ') + ' …', answer: line };
}

const stripMath = (t) => t.replace(/\$\$[\s\S]*?\$\$/g, ' ').replace(/\$[^$]*\$/g, ' ').replace(/\\ce\{[^}]*\}/g, ' ');
function formulaPrompt(title, text) {
  if (title) return `${title}: write it`;
  const bold = text.match(/\*\*([^*]{3,60})\*\*/);
  if (bold) return `${bold[1].replace(/:$/, '')}: write the formula`;
  const words = stripMath(text).split('\n').map((x) => clean(x).replace(/[\s(),;:—–-]+$/, '').trim()).find((x) => x.split(/\s+/).filter((w) => /[A-Za-z]{2,}/.test(w)).length >= 3);
  const m = text.match(/\$\$?([^$]+?)\$\$?/);
  const lhs = m && m[1].includes('=') ? m[1].split('=')[0].trim() : null;
  if (lhs && lhs.length < 60) return `${words ? words.slice(0, 70) + ' — ' : ''}$${lhs} = \\;?$`;
  return words ? `${words.slice(0, 80)}: the formula?` : 'Key formula from this chapter: write it';
}
/** "A: x. B: y" → ["A: x.", "B: y"] (only when a later sentence starts with its own "Term:" label). */
function splitFacts(line) {
  const parts = []; let rest = line, m;
  const re = /\.\s+(?=(?:\*\*)?[A-Z][A-Za-z0-9' ()\-]{1,40}(?:\*\*)?:\s)/;
  while ((m = rest.match(re)) && !/\$[^$]*$/.test(rest.slice(0, m.index))) { parts.push(rest.slice(0, m.index + 1).trim()); rest = rest.slice(m.index + 1).trim(); }
  parts.push(rest);
  return parts.filter(Boolean);
}

/** Extract cards from a mustknow.md source. */
export function cardsFrom(src, { subject, chapter, chapterTitle, colour } = {}) {
  const cards = [];
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  let section = '', i = 0;
  const push = (prompt, answer, kind, text) => {
    if (!prompt || !answer) return;
    cards.push({ id: `${subject}/${chapter}/${hash(text)}`, key: `${subject}/${chapter}`, subject, chapter, chapterTitle, colour, section, kind, prompt, answer });
  };
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) { i++; while (i < lines.length && !/^```\s*$/.test(lines[i])) i++; i++; continue; } // interactive blocks are not lines
    const h = l.match(/^##\s+(.+)$/);
    if (h) { section = h[1].trim(); i++; continue; }
    const d = l.match(/^:::(tip|formula|skeleton)\s*(.*)$/);
    if (d) {
      const kind = d[1], title = d[2].trim(); const body = [];
      i++; while (i < lines.length && !/^:::\s*$/.test(lines[i])) body.push(lines[i++]); i++;
      const text = body.join('\n').trim();
      if (!text || kind === 'skeleton') continue;
      if (kind === 'formula') {
        // Never show the formula as its own question: use the title, else the words around it, else a cloze "LHS = ?".
        push(formulaPrompt(title, text), text, 'formula', text);
      } else if (kind === 'tip' && title) {
        // untitled traps stay reading material: their first line *is* the answer
        push(`Trap: ${title.replace(/[.:]$/, '')} — what goes wrong?`, text, 'tip', text);
      }
      continue;
    }
    if (SKIP_SECTIONS.includes(section) || !section) { i++; continue; }
    if (/^\s*(?:[-*+]|\d+[.)])\s+/.test(l)) {
      // one card per fact: "A: …. B: …" becomes two cards
      for (const part of splitFacts(clean(l))) { const sp = splitLine(part); if (sp) push(sp.prompt, sp.answer, 'line', part); }
    }
    i++;
  }
  return cards;
}

/* ---------- scheduling ---------- */
const state = () => store.progress().recall || {};
export function cardState(id) { return state()[id] || null; }
export function isDue(id, d = today()) { const s = cardState(id); return !!s && parseDate(s.due) <= d; }
export function answer(card, got) {
  const d = today();
  store.saveProgress((p) => {
    p.recall = { ...(p.recall || {}) };
    const prev = p.recall[card.id] || { box: 0, seen: 0 };
    const box = got ? Math.min(prev.box + 1, INTERVALS.length - 1) : 0;
    const due = new Date(d); due.setDate(due.getDate() + INTERVALS[box]);
    p.recall[card.id] = { box, due: toISO(due), seen: prev.seen + 1, last: toISO(d), key: card.key, got: (prev.got || 0) + (got ? 1 : 0), again: (prev.again || 0) + (got ? 0 : 1) };
    if (card.deck) p.recall[card.id].deck = 1; // a picture card from cards.json: counted under "Cards for today", not "lines due"
    return p;
  });
}
/** Summary across all seen cards: due today, overdue, total seen, per chapter. Picture cards (deck) are counted apart. */
export function summary() {
  const s = state(); const d = today();
  const out = { due: 0, seen: 0, byChapter: {}, cardsDue: 0, cardsDueIds: [] };
  for (const [id, x] of Object.entries(s)) {
    if (x.deck) { if (parseDate(x.due) <= d) { out.cardsDue++; out.cardsDueIds.push(id); } continue; }
    out.seen++;
    const bc = (out.byChapter[x.key] ||= { due: 0, seen: 0, again: 0 });
    bc.seen++; bc.again += x.again || 0;
    if (parseDate(x.due) <= d) { out.due++; bc.due++; }
  }
  out.minutes = Math.ceil(out.due * 20 / 60);
  return out;
}
/** Order a chapter's cards for a session: due first, then new, then the rest; cap for short sessions. */
export function session(cards, { max = 20, onlyDue = false } = {}) {
  const d = today();
  const due = [], fresh = [], rest = [];
  for (const c of cards) { const st = cardState(c.id); if (!st) fresh.push(c); else if (parseDate(st.due) <= d) due.push(c); else rest.push(c); }
  // oldest-due first
  due.sort((a, b) => parseDate(cardState(a.id).due) - parseDate(cardState(b.id).due));
  const list = onlyDue ? due : [...due, ...fresh, ...rest];
  return list.slice(0, max);
}
export function daysUntil(id) { const s = cardState(id); return s ? daysBetween(today(), parseDate(s.due)) : null; }
