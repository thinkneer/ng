// Interactive blocks: parsing and validation of ```ng-<type> fenced blocks in notes.md / mustknow.md.
// Authors write "key: value" lines; repeatable keys (part, step, curve, …) may appear many times;
// a line that does not start with "key:" continues the previous value (used for inline <svg> drawings).
// Shared by the app (markdown.js, paper view, recall) and scripts/build-index.mjs — no DOM here.
import { parse as parseExpr, names as exprNames, compile } from './expr.js';

const one = 1, many = 2;
export const BLOCKS = {
  figure: { keys: { id: one, title: one, svg: one, caption: one, part: many }, required: ['id', 'title', 'svg', 'part'] },
  graph: { keys: { id: one, title: one, x: one, y: one, curve: many, slider: many, preset: many, note: one }, required: ['id', 'title', 'x', 'y', 'curve'] },
  steps: { keys: { id: one, title: one, svg: one, step: many }, required: ['id', 'title', 'step'] },
  numerical: { keys: { id: one, title: one, question: one, var: many, let: many, answer: one, unit: one, tol: one, dp: one, step: many }, required: ['id', 'title', 'question', 'answer', 'step'] },
  mnemonic: { keys: { id: one, title: one, trick: one, meaning: many, prompt: one }, required: ['id', 'title', 'trick', 'meaning'] },
  draw: { keys: { id: one, title: one, svg: one, time: one }, required: ['id', 'title', 'svg'] },
  derive: { keys: { id: one, title: one, prompt: one, time: one, check: many }, required: ['id', 'title', 'prompt', 'check'] },
  explain: { keys: { id: one, prompt: one, lines: one, answer: one }, required: ['id', 'prompt'] },
  compare: { keys: { id: one, title: one, cols: one, row: many }, required: ['id', 'title', 'cols', 'row'] },
  fill: { keys: { id: one, title: one, cols: one, row: many }, required: ['id', 'title', 'cols', 'row'] },
};
export const TYPES = Object.keys(BLOCKS);
const KEY = /^([a-z][a-z0-9-]*):(?:\s(.*))?$/;
const FENCE = /^```ng-([a-z]+)\s*$/;

/** Split a block body into a raw spec { key: value | value[] }. Returns { spec, errors }. */
export function parseBody(type, body) {
  const def = BLOCKS[type]; const spec = {}; const errors = [];
  let last = null;
  body.split('\n').forEach((line, n) => {
    const m = line.match(KEY);
    if (m && def && m[1] in def.keys) {
      const k = m[1], v = (m[2] || '').trim();
      if (def.keys[k] === many) { (spec[k] ||= []).push(v); last = { k, i: spec[k].length - 1 }; }
      else { if (k in spec) errors.push(`line ${n + 1}: "${k}" given twice`); spec[k] = v; last = { k }; }
      return;
    }
    if (m && def && !(m[1] in def.keys) && !/^<|^\s/.test(line)) { errors.push(`line ${n + 1}: unknown key "${m[1]}" (allowed: ${Object.keys(def.keys).join(', ')})`); last = null; return; }
    if (!line.trim()) return;
    if (!last) { errors.push(`line ${n + 1}: text before any "key:" line`); return; }
    if (last.i !== undefined) spec[last.k][last.i] += '\n' + line; else spec[last.k] += (spec[last.k] ? '\n' : '') + line;
  });
  return { spec, errors };
}

/** Find every ```ng-<type> block in a Markdown source. Returns [{ type, body, line, spec, errors }]. */
export function extractBlocks(src) {
  const lines = String(src || '').replace(/\r\n/g, '\n').split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(FENCE); if (!m) continue;
    const start = i; const body = []; i++;
    while (i < lines.length && !/^```\s*$/.test(lines[i])) body.push(lines[i++]);
    const closed = i < lines.length;
    const { spec, errors } = parseBody(m[1], body.join('\n'));
    if (!closed) errors.push('block is never closed with ```');
    out.push({ type: m[1], body: body.join('\n'), line: start + 1, spec, errors });
  }
  return out;
}

/** Split a Markdown source into plain parts and block parts (for the renderer). */
export function splitBlocks(src) {
  const lines = String(src || '').replace(/\r\n/g, '\n').split('\n');
  const parts = []; let md = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(FENCE);
    if (!m) { md.push(lines[i]); continue; }
    const body = []; i++;
    while (i < lines.length && !/^```\s*$/.test(lines[i])) body.push(lines[i++]);
    if (md.length) { parts.push({ md: md.join('\n') }); md = []; }
    parts.push({ block: m[1], spec: parseBody(m[1], body.join('\n')).spec });
  }
  if (md.length) parts.push({ md: md.join('\n') });
  return parts;
}

/* ---------- value helpers (shared) ---------- */
export const cells = (v) => String(v ?? '').split('|').map((s) => s.trim());
export const lines = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

/** "ref: notes#daniell-cell" or "ref: daniell-cell" → the id; null for inline svg. */
export function refId(svg) { const m = String(svg || '').trim().match(/^ref:\s*(?:notes#)?([a-z0-9-]+)$/i); return m ? m[1] : null; }

/** Find an SVG drawing by id in a notes source: a <figure id="…"> or an ng block with that id. */
export function resolveRef(id, src) {
  if (!id || !src) return null;
  const fig = String(src).match(new RegExp(`<figure[^>]*\\bid="${id}"[^>]*>([\\s\\S]*?)</figure>`));
  if (fig) { const s = fig[1].match(/<svg[\s\S]*?<\/svg>/); if (s) return s[0]; }
  for (const b of extractBlocks(src)) if (b.spec.id === id && b.spec.svg && !refId(b.spec.svg)) return b.spec.svg.trim();
  return null;
}

/** Problems in an inline SVG that would break the "own drawing, safe" rule. */
export function svgProblems(svg) {
  const s = String(svg || '').trim(); const out = [];
  if (!/^<svg[\s>]/.test(s) || !/<\/svg>$/.test(s)) out.push('svg must start with <svg and end with </svg> (or be "ref: notes#<figure-id>")');
  if (!/viewBox="[^"]+"/.test(s)) out.push('svg needs a viewBox');
  if (/<script|<foreignObject|<image|\bon[a-z]+\s*=|javascript:|xlink:href="http|href="http/i.test(s)) out.push('svg may not contain scripts, images, event handlers or external links');
  return out;
}
export function viewBox(svg) { const m = String(svg || '').match(/viewBox="\s*([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)\s*"/); return m ? m.slice(1).map(Number) : null; }

/* ---------- normalised specs (what the renderers use) ---------- */
export function normalise(type, s) {
  switch (type) {
    case 'figure': return { ...s, parts: lines(s.part).map((p) => { const [xy, name, line] = cells(p); const [x, y] = xy.split(',').map(Number); return { x, y, name, line: line || '' }; }) };
    case 'graph': {
      const axis = (v) => { const [label, min, max] = cells(v); return { label, min: Number(min), max: Number(max) }; };
      return { ...s, xa: axis(s.x), ya: axis(s.y),
        curves: lines(s.curve).map((c) => { const [label, expr] = cells(c); return { label, expr }; }),
        sliders: lines(s.slider).map((c) => { const [name, label, min, max, step, def] = cells(c); return { name, label, min: Number(min), max: Number(max), step: Number(step), value: Number(def) }; }),
        presets: lines(s.preset).map((c) => { const [label, set] = cells(c); return { label, set: Object.fromEntries((set || '').split(',').filter(Boolean).map((kv) => { const [k, v] = kv.split('=').map((x) => x.trim()); return [k, Number(v)]; })) }; }) };
    }
    case 'steps': return { ...s, steps: lines(s.step) };
    case 'numerical': return { ...s, vars: lines(s.var).map((v) => { const [name, min, max, step] = cells(v); return { name, min: Number(min), max: Number(max), step: Number(step) }; }),
      lets: lines(s.let).map((v) => { const i = v.indexOf('='); return { name: v.slice(0, i).trim(), expr: v.slice(i + 1).trim() }; }),
      tol: s.tol ? Number(String(s.tol).replace('%', '')) : 2, steps: lines(s.step) };
    case 'mnemonic': return { ...s, meanings: lines(s.meaning) };
    case 'derive': return { ...s, minutes: Number(s.time) || 8, checks: lines(s.check).map((c) => { const [text, marks] = cells(c); return { text, marks: Number(marks) || 1 }; }) };
    case 'explain': return { ...s, lines: Number(s.lines) || 3 };
    case 'draw': return { ...s, minutes: Number(s.time) || 0 };
    case 'compare': return { ...s, heads: cells(s.cols), rows: lines(s.row).map(cells) };
    case 'fill': return { ...s, heads: cells(s.cols), rows: lines(s.row).map(cells) };
  }
  return s;
}

/** Template pieces "{{expr}}" or "{{expr:dp}}" in a numerical's question/step text. */
export function templateExprs(text) { return [...String(text || '').matchAll(/\{\{([^}]+?)\}\}/g)].map((m) => { const [e, dp] = m[1].split(':'); return { e: e.trim(), dp }; }); }

/* ---------- validation (build-index) ---------- */
/** Validate one parsed block. `ctx.src` is the whole notes source (for refs). Returns error strings. */
export function validate(block, ctx = {}) {
  const { type, spec } = block; const errs = [...block.errors];
  const def = BLOCKS[type];
  if (!def) return [`unknown block type "ng-${type}" (allowed: ${TYPES.map((t) => 'ng-' + t).join(', ')})`];
  for (const k of def.required) if (!(k in spec) || (Array.isArray(spec[k]) ? !spec[k].length : !String(spec[k]).trim())) errs.push(`missing "${k}:"`);
  if (spec.id && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(spec.id)) errs.push(`id "${spec.id}" must be lower-case words joined by hyphens`);
  if (errs.length) return errs;
  const n = normalise(type, spec);
  let svg = spec.svg;
  if (svg) {
    const rid = refId(svg);
    if (rid) { svg = resolveRef(rid, ctx.src); if (!svg) errs.push(`svg ref "${rid}" not found: give a <figure id="${rid}"> or another block with id: ${rid} and an inline svg`); }
    else errs.push(...svgProblems(svg));
  }
  const tryExpr = (e, allowed, what) => { try { const ast = parseExpr(e); const bad = [...exprNames(ast)].filter((x) => !allowed.has(x)); if (bad.length) errs.push(`${what}: unknown name(s) ${bad.join(', ')} in "${e}" (defined: ${[...allowed].join(', ') || 'none'})`); return ast; } catch (er) { errs.push(`${what}: cannot read "${e}": ${er.message}`); return null; } };
  switch (type) {
    case 'figure': {
      const vb = svg && viewBox(svg);
      n.parts.forEach((p, i) => {
        if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) errs.push(`part ${i + 1}: write "x, y | name | one line" (x, y in the svg's viewBox units)`);
        else if (vb && (p.x < vb[0] || p.y < vb[1] || p.x > vb[0] + vb[2] || p.y > vb[1] + vb[3])) errs.push(`part ${i + 1} "${p.name}": point ${p.x},${p.y} is outside the viewBox`);
        if (!p.name) errs.push(`part ${i + 1}: missing name`);
      });
      if (n.parts.length < 2) errs.push('a figure needs at least 2 parts for "Label it yourself"');
      break;
    }
    case 'graph': {
      for (const [k, a] of [['x', n.xa], ['y', n.ya]]) if (!(a.label && Number.isFinite(a.min) && Number.isFinite(a.max) && a.max > a.min)) errs.push(`${k}: write "label | min | max" with max > min`);
      const allowed = new Set(['x', ...n.sliders.map((s) => s.name)]);
      n.sliders.forEach((s) => { if (!/^[A-Za-z_]\w*$/.test(s.name)) errs.push(`slider "${s.name}": name must be a plain word`); if (!(s.max > s.min) || !(s.step > 0) || !(s.value >= s.min && s.value <= s.max)) errs.push(`slider "${s.name}": write "name | label | min | max | step | default" with min < default ≤ max`); });
      n.curves.forEach((c, i) => { if (!c.expr) errs.push(`curve ${i + 1}: write "label | expression in x"`); else tryExpr(c.expr, allowed, `curve "${c.label}"`); });
      n.presets.forEach((p) => { for (const k of Object.keys(p.set)) if (!n.sliders.some((s) => s.name === k)) errs.push(`preset "${p.label}": no slider named "${k}"`); });
      break;
    }
    case 'steps': {
      if (n.steps.length < 2) errs.push('steps needs at least 2 "step:" lines');
      if (svg) {
        const used = [...new Set([...svg.matchAll(/data-step="(\d+)"/g)].map((m) => Number(m[1])))].sort((a, b) => a - b);
        if (used.length) {
          const want = n.steps.map((_, i) => i + 1);
          if (used.join() !== want.slice(0, used.length).join() || used[used.length - 1] > n.steps.length) errs.push(`svg data-step values must run 1, 2, 3 … without gaps and not beyond the ${n.steps.length} steps (found ${used.join(', ')})`);
        }
      }
      break;
    }
    case 'numerical': {
      const defined = new Set();
      n.vars.forEach((v) => { if (!/^[A-Za-z_]\w*$/.test(v.name)) errs.push(`var "${v.name}": name must be a plain word`); if (!(v.max >= v.min) || !(v.step > 0)) errs.push(`var "${v.name}": write "name | min | max | step"`); defined.add(v.name); });
      n.lets.forEach((l) => { if (!l.name || !l.expr) errs.push(`let: write "name = expression"`); else { tryExpr(l.expr, defined, `let ${l.name}`); defined.add(l.name); } });
      tryExpr(n.answer, defined, 'answer');
      for (const t of [n.question, ...n.steps]) for (const { e } of templateExprs(t)) tryExpr(e, defined, 'template {{…}}');
      if (!(n.tol > 0 && n.tol <= 20)) errs.push('tol: a percentage between 0 and 20 (default 2)');
      if (!errs.length) {
        // try a few random draws: the answer must come out a finite number
        try { const { draw } = numericalEngine(); for (let k = 0; k < 5; k++) { const sc = draw(n); if (!Number.isFinite(sc.__answer)) { errs.push(`answer is not a number for ${JSON.stringify(sc)}`); break; } } } catch (er) { errs.push(`cannot evaluate: ${er.message}`); }
      }
      break;
    }
    case 'derive': n.checks.forEach((c, i) => { if (!c.text) errs.push(`check ${i + 1}: write "step | marks"`); }); if (n.checks.length < 2) errs.push('derive needs at least 2 "check:" steps'); break;
    case 'compare': n.rows.forEach((r, i) => { if (r.length !== n.heads.length + 1) errs.push(`row ${i + 1}: needs ${n.heads.length + 1} cells "aspect | ${n.heads.join(' | ')}" (found ${r.length})`); }); if (n.heads.length < 2) errs.push('cols: at least two columns "A | B"'); break;
    case 'fill': {
      let hidden = 0;
      n.rows.forEach((r, i) => { if (r.length !== n.heads.length) errs.push(`row ${i + 1}: needs ${n.heads.length} cells (found ${r.length})`); hidden += r.filter((c) => /^\[\[.*\]\]$/.test(c)).length; });
      if (!hidden) errs.push('fill: hide at least one cell with [[ … ]]');
      break;
    }
    case 'explain': if (n.lines < 1 || n.lines > 8) errs.push('lines: 1 to 8'); break;
  }
  return errs;
}

/* ---------- numerical engine (fresh numbers) ---------- */
export function numericalEngine() {
  const pick = (v) => { const k = Math.round((v.max - v.min) / v.step); const val = v.min + Math.floor(Math.random() * (k + 1)) * v.step; return Number(val.toPrecision(10)); };
  function draw(n) {
    const scope = {};
    for (const v of n.vars) scope[v.name] = pick(v);
    for (const l of n.lets) scope[l.name] = compile(l.expr)(scope);
    Object.defineProperty(scope, '__answer', { value: compile(n.answer)(scope), enumerable: false });
    return scope;
  }
  return { draw };
}
