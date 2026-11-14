// Tiny safe expression evaluator for ng-graph / ng-numerical. Never uses eval or Function.
// Grammar: numbers, names, + - * / ^, unary minus, parentheses, f(a, b).
// Functions: sqrt log (base 10) ln exp abs sin cos tan min max pow round. Constants: pi, e.
// Shared by the app and scripts/build-index.mjs (no DOM here).

const FUNCS = {
  sqrt: Math.sqrt, log: Math.log10, ln: Math.log, exp: Math.exp, abs: Math.abs,
  sin: Math.sin, cos: Math.cos, tan: Math.tan, min: Math.min, max: Math.max, pow: Math.pow,
  round: (x, d = 0) => { const f = 10 ** d; return Math.round(x * f) / f; },
};
const CONSTS = { pi: Math.PI, e: Math.E };

function tokenize(src) {
  const out = []; let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    const num = src.slice(i).match(/^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i);
    if (num) { out.push({ t: 'num', v: parseFloat(num[0]) }); i += num[0].length; continue; }
    const name = src.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (name) { out.push({ t: 'name', v: name[0] }); i += name[0].length; continue; }
    if ('+-*/^(),'.includes(c)) { out.push({ t: c }); i++; continue; }
    if (c === '×') { out.push({ t: '*' }); i++; continue; }
    if (c === '−') { out.push({ t: '-' }); i++; continue; }
    throw new Error(`unexpected "${c}" at position ${i + 1}`);
  }
  return out;
}

/** Parse to an AST. Throws Error with a readable message on bad input. */
export function parse(src) {
  const toks = tokenize(String(src)); let p = 0;
  const peek = () => toks[p]; const take = (t) => { if (toks[p]?.t !== t) throw new Error(`expected "${t}"`); return toks[p++]; };
  function expr() { let n = term(); while (peek() && (peek().t === '+' || peek().t === '-')) { const op = toks[p++].t; n = { op, a: n, b: term() }; } return n; }
  function term() { let n = unary(); while (peek() && (peek().t === '*' || peek().t === '/' || peek().t === '(' || peek().t === 'name' || peek().t === 'num')) { if (peek().t === '*' || peek().t === '/') { const op = toks[p++].t; n = { op, a: n, b: unary() }; } else n = { op: '*', a: n, b: unary() }; /* implicit multiplication: 2x, 2(x+1) */ } return n; }
  function unary() { if (peek()?.t === '-') { p++; return { op: 'neg', a: unary() }; } if (peek()?.t === '+') { p++; return unary(); } return power(); }
  function power() { const base = atom(); if (peek()?.t === '^') { p++; return { op: '^', a: base, b: unary() }; } return base; }
  function atom() {
    const t = toks[p++];
    if (!t) throw new Error('unexpected end');
    if (t.t === 'num') return { num: t.v };
    if (t.t === '(') { const n = expr(); take(')'); return n; }
    if (t.t === 'name') {
      if (peek()?.t === '(') {
        if (!FUNCS[t.v]) throw new Error(`unknown function "${t.v}"`);
        p++; const args = []; if (peek()?.t !== ')') { args.push(expr()); while (peek()?.t === ',') { p++; args.push(expr()); } } take(')');
        return { fn: t.v, args };
      }
      return { name: t.v };
    }
    throw new Error(`unexpected "${t.t}"`);
  }
  const ast = expr();
  if (p < toks.length) throw new Error(`unexpected "${toks[p].v ?? toks[p].t}"`);
  return ast;
}

/** Names used by an AST (excluding constants). */
export function names(ast, out = new Set()) {
  if (!ast) return out;
  if (ast.name && !(ast.name in CONSTS)) out.add(ast.name);
  if (ast.a) names(ast.a, out); if (ast.b) names(ast.b, out);
  if (ast.args) for (const x of ast.args) names(x, out);
  return out;
}

export function evaluate(ast, scope = {}) {
  if ('num' in ast) return ast.num;
  if (ast.name !== undefined) { if (ast.name in scope) return Number(scope[ast.name]); if (ast.name in CONSTS) return CONSTS[ast.name]; throw new Error(`unknown name "${ast.name}"`); }
  if (ast.fn) return FUNCS[ast.fn](...ast.args.map((x) => evaluate(x, scope)));
  const a = evaluate(ast.a, scope);
  switch (ast.op) {
    case 'neg': return -a;
    case '+': return a + evaluate(ast.b, scope);
    case '-': return a - evaluate(ast.b, scope);
    case '*': return a * evaluate(ast.b, scope);
    case '/': return a / evaluate(ast.b, scope);
    case '^': return a ** evaluate(ast.b, scope);
  }
  throw new Error('bad expression');
}

const memo = new Map();
/** Parse once, evaluate many times. */
export function compile(src) {
  if (!memo.has(src)) memo.set(src, parse(src));
  const ast = memo.get(src);
  return (scope) => evaluate(ast, scope);
}

/** Format a number for display: d decimals, or 3 significant figures (sci notation for very large/small). */
export function fmt(x, d) {
  if (!Number.isFinite(x)) return '—';
  if (d !== undefined && d !== '' && !Number.isNaN(Number(d))) return Number(x).toFixed(Number(d));
  const ax = Math.abs(x);
  if (ax !== 0 && (ax >= 1e5 || ax < 1e-3)) { const [m, e] = x.toExponential(2).split('e'); return `${m}×10^${Number(e)}`; }
  return String(Number(x.toPrecision(3)));
}
