#!/usr/bin/env node
// Content check on a phone screen. Opens the real app (local test server, no network) at 360 px — the width of
// most budget Android phones — and reports what does not fit or does not render:
//   cards     every card, front and back: taller than the screen, sideways scroll, text or drawing sticking out
//             of the card, labels too small, back too long, maths errors
//   read      notes.md: formulas that scroll sideways, maths errors, raw $…$, blocks that fail, drawings outside
//             their viewBox, labels too small, page scrolling sideways
//   mustknow  the same for mustknow.md, plus one-word recall fronts and lines over 15 words (from the file)
//   formulas  the subject formula sheet
//   answers   every question: stem, options, hint, model answer and parts rendered as in Practice; plus missing
//             hints and answers not yet in answer-script style (CLAUDE.md §5)
// Usage: node scripts/content-check.mjs <subject> [chapter-id …] [--only=cards,read,mustknow,formulas,answers]
//        [--width=360] [--height=740] [--shots]      (--shots saves a picture of each failure under /tmp/content-check/)
// Exit code 1 when anything is marked FAIL. WARN lines are worth fixing but do not fail.
import { spawn } from 'node:child_process';
import { readFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const a = args.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=')[1] : d; };
const flag = (k) => args.includes(`--${k}`);
const [subject, ...chapterArgs] = args.filter((a) => !a.startsWith('--'));
if (!subject) { console.error('Usage: node scripts/content-check.mjs <subject> [chapter-id …] [--only=cards,read,mustknow,formulas,answers] [--width=360] [--shots]'); process.exit(2); }
const ONLY = new Set(opt('only', 'cards,read,mustknow,formulas,answers').split(','));
const W = Number(opt('width', 360)), H = Number(opt('height', 740));
const SHOTS = flag('shots') ? join('/tmp/content-check', subject) : null;
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

// ---- find the subject ----
const classDirs = readdirSync(join(ROOT, 'content'));
let subDir = null, cls = null, stream = null;
for (const c of classDirs) for (const s of readdirSync(join(ROOT, 'content', c))) if (existsSync(join(ROOT, 'content', c, s, subject, 'subject.json'))) { subDir = join(ROOT, 'content', c, s, subject); cls = c.replace('class-', ''); stream = s; }
if (!subDir) { console.error(`No subject "${subject}" under content/`); process.exit(2); }
const subjectJson = JSON.parse(readFileSync(join(subDir, 'subject.json'), 'utf8'));
const allChapters = (subjectJson.units || []).flatMap((u) => (u.chapters || []).map((c) => (typeof c === 'string' ? c : c.id))).filter((id) => existsSync(join(subDir, id)));
const chapters = chapterArgs.length ? chapterArgs : allChapters;
const route = (ch, tab) => `#/${cls}/${stream === 'general' ? '' : stream + '/'}${subject}${ch ? '/' + ch : ''}${tab ? '/' + tab : ''}`;
const readJson = (p) => { try { const d = JSON.parse(readFileSync(p, 'utf8')); return Array.isArray(d) ? d : d.questions || d.cards || []; } catch { return []; } };

// ---- findings ----
const found = [];
const add = (level, ch, where, problem, shot) => found.push({ level, ch, where, problem, shot });

// ---- static checks (files only) ----
const words = (s) => s.replace(/\$[^$]*\$/g, 'X').replace(/\\ce\{[^}]*\}/g, 'X').replace(/[*_`]/g, '').trim().split(/\s+/).filter(Boolean).length;
for (const ch of chapters) {
  if (ONLY.has('mustknow')) {
    const p = join(subDir, ch, 'mustknow.md');
    if (existsSync(p)) {
      let sec = '';
      for (const line of readFileSync(p, 'utf8').split('\n')) {
        if (line.startsWith('## ')) sec = line;
        if (!/Must-know lines|Quick 1-mark/.test(sec) || !/^\s*[-*] /.test(line)) continue;
        const body = line.replace(/^\s*[-*] /, '');
        const m = body.match(/^\*\*(.+?)\*\*\s*:?/) || body.match(/^([^:]{1,60}):/);
        if (m) {
          const front = m[1].replace(/:$/, '').trim();
          if (words(front) <= 1) add('WARN', ch, 'must know', `one-word recall front "${front}" — name it in two or more words`);
        }
        if (words(body) > 15 + (m ? words(m[1]) : 0)) add('WARN', ch, 'must know', `line over 15 words: "${body.slice(0, 70)}…"`);
      }
    }
  }
  if (ONLY.has('answers')) {
    let notScript = 0;
    for (const q of readJson(join(subDir, ch, 'questions.json'))) {
      if (!['vsa2', 'sa3', 'la5', 'case'].includes(q.type)) continue;
      if (!q.hint) add('WARN', ch, `question ${q.id}`, 'no hint');
      const txt = JSON.stringify(q);
      if (!/How much to write/i.test(txt) || !/answer must contain/i.test(txt) || !/Marks are lost for/i.test(txt)) notScript++;
    }
    if (notScript) add('INFO', ch, 'answers', `${notScript} written answer(s) not yet in answer-script style (CLAUDE.md §5)`);
  }
}

// ---- browser checks ----
const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { try { pw = require('@playwright/test'); } catch { console.error('content-check needs Playwright: run `npm i -g playwright` (Chrome at /usr/bin/google-chrome is used if no Playwright browser is installed).'); process.exit(2); } }
const PORT = 4300 + Math.floor(Math.random() * 400);
const server = spawn(process.execPath, [join(ROOT, 'scripts/serve.mjs'), String(PORT), '--test'], { stdio: 'ignore' });
const BASE = `http://localhost:${PORT}/ng/`;
const cleanup = () => { try { server.kill(); } catch {} };
process.on('exit', cleanup);
for (let i = 0; i < 50; i++) { try { const r = await fetch(BASE); if (r.ok) break; } catch {} await new Promise((r) => setTimeout(r, 100)); }

let browser;
try { browser = await pw.chromium.launch(); } catch { try { browser = await pw.chromium.launch({ executablePath: '/usr/bin/google-chrome' }); } catch (e) { console.error(`content-check could not start a browser: ${e.message.split('\n')[0]}. Try \`npx playwright install chromium\`.`); cleanup(); process.exit(2); } }
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, reducedMotion: 'reduce', serviceWorkers: 'block' });
const page = await ctx.newPage();
const pageErrors = [];
page.on('pageerror', (e) => pageErrors.push(e.message));
await page.goto(`${BASE}?autologin${route()}`, { waitUntil: 'networkidle' });
await page.addStyleTag({ content: '#tabbar, .tabbar { display: none !important; }' });
const go = async (hash, sel) => { await page.evaluate((h) => { location.hash = h; }, hash); if (sel) await page.waitForSelector(sel, { timeout: 15000 }); await page.waitForTimeout(250); };
const shot = async (handle, name) => { if (!SHOTS || !handle) return undefined; const p = join(SHOTS, name.replace(/[^a-z0-9.-]+/gi, '_') + '.png'); try { await handle.screenshot({ path: p }); return p; } catch { return undefined; } };

// Shared in-page checks: run on an element, return a list of [level, problem, selectorForShot?]
const inspect = async (rootSel, kind) => page.evaluate(({ rootSel, kind }) => {
  const out = [];
  const roots = [...document.querySelectorAll(rootSel)];
  const tex = (k) => (k.querySelector('annotation[encoding="application/x-tex"]')?.textContent || k.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 70);
  const clipAncestor = (el, stop) => { for (let a = el.parentElement; a && a !== stop; a = a.parentElement) { const o = getComputedStyle(a).overflowX; if (o === 'auto' || o === 'scroll' || o === 'hidden' || o === 'clip') return a; } return null; };
  for (const root of roots) {
    // maths that failed or never rendered
    for (const e of root.querySelectorAll('.katex-error')) out.push(['FAIL', `maths error: ${(e.getAttribute('title') || '').slice(0, 80)} in "${e.textContent.slice(0, 50)}"`]);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentElement.closest('.katex, code, pre, script, style, textarea, svg') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
    for (let n; (n = walker.nextNode());) { const t = n.textContent; const m = t.match(/\$[^$\s][^$]*\$|\\(ce|frac|dfrac|sqrt|text|mathrm|times|Delta|circ)\b/); if (m) out.push(['FAIL', `raw maths shown as text: "${t.trim().slice(0, 60)}"`]); }
    // formulas and tables that scroll sideways
    for (const k of root.querySelectorAll('.katex-display, .math-wide')) { if (k.scrollWidth > k.clientWidth * 1.04 + 2) out.push(['WARN', `formula wider than the screen (${Math.round(k.scrollWidth)} px in ${Math.round(k.clientWidth)} px), scrolls sideways — stack it with aligned: ${tex(k)}`]); }
    for (const t of root.querySelectorAll('table')) { const box = t.parentElement; if (t.scrollWidth > (box?.clientWidth || 0) + 4) out.push(['WARN', `table wider than the screen (${Math.round(t.scrollWidth)} px), scrolls sideways: "${(t.querySelector('th,td')?.textContent || '').trim().slice(0, 40)}…"`]); }
    // drawings: outside their viewBox, labels too small
    for (const svg of root.querySelectorAll('svg')) {
      if (svg.closest('.katex, button, .icon-btn, .chip, .btn')) continue;
      const vb = svg.viewBox?.baseVal; const r = svg.getBoundingClientRect();
      if (!vb || !vb.width || r.width < 40) continue;
      const label = svg.getAttribute('aria-label') || svg.closest('figure, .ngb, .dk__card')?.querySelector('figcaption, .ngb__title, .dk__title')?.textContent?.trim() || 'drawing';
      try { const bb = svg.getBBox(); const tol = Math.max(2, vb.width * 0.01);
        if (bb.width && (bb.x < vb.x - tol || bb.y < vb.y - tol || bb.x + bb.width > vb.x + vb.width + tol || bb.y + bb.height > vb.y + vb.height + tol)) out.push(['WARN', `drawing "${label.slice(0, 50)}" goes outside its viewBox (${[bb.x, bb.y, bb.width, bb.height].map(Math.round).join(' ')} vs ${[vb.x, vb.y, vb.width, vb.height].map(Math.round).join(' ')}) — labels may be cut off`]); } catch {}
      let small = 0, ex = '';
      for (const t of svg.querySelectorAll('text')) { const h = t.getBoundingClientRect().height; if (h > 0 && h < 9) { small++; ex ||= t.textContent.trim().slice(0, 20); } }
      if (small) out.push(['WARN', `drawing "${label.slice(0, 50)}": ${small} label(s) under 9 px tall on a ${innerWidth} px phone (e.g. "${ex}") — larger font-size or fewer words`]);
    }
    // anything sticking out of the root sideways (not inside a scroll box)
    if (kind !== 'page') {
      const rr = root.getBoundingClientRect(); let shown = 0;
      for (const el of root.querySelectorAll('*')) {
        if ((el.closest('svg') && el.tagName.toLowerCase() !== 'svg') || el.closest('.katex')) continue; // formula width is checked above
        const r = el.getBoundingClientRect(); if (!r.width) continue;
        if ((r.right > rr.right + 6 || r.left < rr.left - 6) && !clipAncestor(el, root) && shown < 2) { shown++; out.push(['FAIL', `"${(el.textContent || el.getAttribute('aria-label') || el.className || el.tagName).trim().slice(0, 50)}" sticks out of the ${kind} by ${Math.round(Math.max(r.right - rr.right, rr.left - r.left))} px`]); }
      }
    }
    // blocks that did not load
    for (const b of root.querySelectorAll('.ngb')) if (!b.classList.contains('is-ready')) out.push(['FAIL', `interactive block "${b.querySelector('.ngb__title, h3, h4')?.textContent?.trim() || b.className}" did not load`]);
  }
  if (kind === 'page') {
    // something cut off at the right edge of the screen (not inside its own scroll box)
    const main = document.querySelector('.main') || document.body; let shown = 0;
    if (document.scrollingElement.scrollWidth > innerWidth + 1) out.push(['FAIL', `the page scrolls sideways (${document.scrollingElement.scrollWidth} px on a ${innerWidth} px screen)`]);
    for (const el of main.querySelectorAll('*')) {
      if (el.closest('svg, .katex, .print-only') || shown >= 3) continue;
      const r = el.getBoundingClientRect(); if (!r.width || !r.height || r.right <= innerWidth + 4) continue;
      if (getComputedStyle(el).visibility === 'hidden' || clipAncestor(el, main)) continue;
      shown++; out.push(['FAIL', `cut off at the right edge of the screen by ${Math.round(r.right - innerWidth)} px: "${(el.textContent || el.getAttribute('aria-label') || el.className).trim().slice(0, 50)}"`]);
    }
  }
  return out;
}, { rootSel, kind });

// Scroll through the page the way a student does (lazy maths and blocks render on the way), then finish anything left.
const renderAllOnPage = () => page.evaluate(async () => {
  const sc = document.querySelector('.main') || document.scrollingElement;
  const m = await import('./app/markdown.js');
  const rawLeft = () => { const w = document.createTreeWalker(document.querySelector('.main') || document.body, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentElement.closest('.katex, code, pre, script, style, svg') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) }); let c = 0; for (let n; (n = w.nextNode());) if (/\$[^$\s][^$]*\$/.test(n.textContent)) c++; return c; };
  // up to 4 passes: lazy maths can lag behind a fast scroll, so only judge once nothing is left to typeset
  for (let pass = 0; pass < 4; pass++) {
    for (let y = 0; y < sc.scrollHeight; y += 350) { sc.scrollTop = y; await new Promise((r) => setTimeout(r, 70 + pass * 40)); }
    for (const p of document.querySelectorAll('.prose')) { await m.typesetAll?.(p); await p._renderAll?.(); }
    await new Promise((r) => setTimeout(r, 500 + pass * 500));
    if (!rawLeft()) break;
  }
  for (const p of document.querySelectorAll('.prose')) m.fitWide?.(p);
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  sc.scrollTop = 0;
});

for (const ch of chapters) {
  process.stdout.write(`· ${ch} `);
  // cards
  if (ONLY.has('cards')) {
    const cards = readJson(join(subDir, ch, 'cards.json'));
    if (!cards.length) add('FAIL', ch, 'cards', 'no cards.json');
    else {
      await go(route(ch, 'cards'), '.dk__card');
      for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        if (i > 0) { await page.click('[data-next]'); }
        await page.waitForFunction((t) => document.querySelector('.dk__card .dk__front .dk__title')?.textContent === t, c.title, { timeout: 8000 }).catch(() => add('FAIL', ch, `card ${c.id}`, 'card did not open'));
        await page.waitForTimeout(120);
        for (const side of ['front', 'back']) {
          if (side === 'back') { await page.click('#dk-flip', { position: { x: 20, y: 20 } }); await page.waitForTimeout(150); }
          const res = await inspect('.dk__card', 'card');
          const fit = await page.evaluate((side) => {
            const card = document.querySelector('.dk__card'), stage = document.querySelector('#dk-stage'), foot = document.querySelector('#dk-foot'), top = document.querySelector('.dk__top');
            const cr = card.getBoundingClientRect(); const room = (foot?.getBoundingClientRect().top || innerHeight) - (top?.getBoundingClientRect().bottom || 0);
            const out = [];
            const faceEl = card.querySelector(side === 'front' ? '.dk__front' : '.dk__back');
            const need = faceEl.scrollHeight + (card.offsetHeight - card.querySelector('.dk__flip').offsetHeight);
            if (need > room + 2) out.push(['FAIL', `taller than the screen by ${Math.round(need - room)} px (needs ${Math.round(need)}, has ${Math.round(room)}) — shorten it`]);
            for (const el of faceEl.querySelectorAll('.dk__tex, .dk__legend li, .dk__sym, .dk__text, .dk__svg')) if (el.scrollWidth > el.clientWidth + 2) { out.push(['FAIL', `${el.className.replace('dk__', '')} is wider than the card (${el.scrollWidth} px in ${el.clientWidth} px) — split the line`]); break; }
            if (side === 'back') { const t = faceEl.querySelector('.dk__text'); if (t) { const lh = parseFloat(getComputedStyle(t).lineHeight) || 24; const lines = Math.round(t.scrollHeight / lh); if (lines > 5) out.push(['WARN', `back runs to ${lines} lines on the phone (aim for ≤ 4)`]); } }
            if (side === 'front') { const s = faceEl.querySelector('.dk__svg svg'); if (faceEl.querySelector('.dk__svg') && (!s || s.getBoundingClientRect().height < 40)) out.push(['FAIL', 'drawing missing or not rendered']); }
            return out;
          }, side);
          const all = [...fit, ...res];
          if (all.length) { const p = await shot(await page.$('.dk__card'), `${ch}-card-${c.id}-${side}`); for (const [lvl, msg] of all) add(lvl, ch, `card ${c.id} (${side})`, msg, p); }
        }
      }
    }
  }
  // read and must know
  for (const [tab, label, file] of [['notes', 'read', 'notes.md'], ['mustknow', 'must know', 'mustknow.md']]) {
    if (!ONLY.has(label === 'read' ? 'read' : 'mustknow') || !existsSync(join(subDir, ch, file))) continue;
    await go(route(ch, tab), '.prose:not(.breath__body)');
    await renderAllOnPage();
    const res = [...(await inspect('.prose:not(.breath__body)', 'notes')), ...(await inspect('body', 'page'))];
    for (const [lvl, msg] of res) add(lvl, ch, label, msg);
  }
  // questions and model answers, rendered like Practice
  if (ONLY.has('answers')) {
    const qs = readJson(join(subDir, ch, 'questions.json'));
    if (qs.length) {
      await go(route(ch, 'practice'), '.main');
      for (const q of qs) {
        const res = await page.evaluate(async (q) => {
          const m = await import('./app/markdown.js');
          let host = document.getElementById('cc-host');
          if (!host) { host = document.createElement('div'); host.id = 'cc-host'; host.className = 'rc__card'; host.style.cssText = 'margin:16px;position:relative;width:auto;max-width:calc(100% - 32px)'; document.querySelector('.main').prepend(host); }
          host.innerHTML = '';
          const parts = [q.stem || q.question || '', ...(q.options || []).map((o, k) => `${'ABCD'[k]}. ${o}`), q.hint ? `Hint: ${q.hint}` : '', q.model_answer || '', ...(q.parts || []).flatMap((p) => [p.stem || '', ...(p.options || []), p.model_answer || p.answer || ''])];
          for (const s of parts.filter(Boolean)) { const n = await m.renderMarkdown(String(s), { eager: true }); n.classList.add('rc__md'); host.appendChild(n); }
          await m.typesetAll?.(host); await new Promise((r) => setTimeout(r, 30)); m.fitWide?.(host);
          return true;
        }, q);
        if (!res) continue;
        const out = await inspect('#cc-host', 'answer card');
        if (out.length) { const p = await shot(await page.$('#cc-host'), `${ch}-q-${q.id}`); for (const [lvl, msg] of out) add(lvl, ch, `question ${q.id}`, msg, p); }
      }
      await page.evaluate(() => document.getElementById('cc-host')?.remove());
    }
  }
  process.stdout.write('\n');
}
// formula sheet (whole subject)
if (ONLY.has('formulas') && !chapterArgs.length) {
  await go(route('formulas'), '.prose:not(.breath__body)').catch(() => add('FAIL', '—', 'formula sheet', 'did not open'));
  await renderAllOnPage();
  for (const [lvl, msg] of [...(await inspect('.prose:not(.breath__body)', 'formula sheet')), ...(await inspect('body', 'page'))]) add(lvl, '—', 'formula sheet', msg);
}
for (const e of [...new Set(pageErrors)]) add('FAIL', '—', 'app', `page error: ${e.slice(0, 120)}`);
await browser.close(); cleanup();

// ---- report ----
const seen = new Set();
const uniq = found.filter((f) => { const k = `${f.level}|${f.ch}|${f.where}|${f.problem}`; if (seen.has(k)) return false; seen.add(k); return true; });
const order = { FAIL: 0, WARN: 1, INFO: 2 };
uniq.sort((a, b) => (a.ch === b.ch ? order[a.level] - order[b.level] : a.ch.localeCompare(b.ch)));
console.log(`\n${subjectJson.name || subject} · content check at ${W}×${H}`);
let last = '';
for (const f of uniq) { if (f.ch !== last) { console.log(`\n${f.ch}`); last = f.ch; } console.log(`  ${f.level.padEnd(4)} ${f.where}: ${f.problem}${f.shot ? `\n       picture: ${f.shot}` : ''}`); }
const n = (l) => uniq.filter((f) => f.level === l).length;
console.log(`\n${n('FAIL')} FAIL · ${n('WARN')} WARN · ${n('INFO')} INFO${SHOTS ? ` · pictures in ${SHOTS}` : ''}`);
process.exit(n('FAIL') ? 1 : 0);
