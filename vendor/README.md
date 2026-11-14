# Vendored libraries (pinned)

| Library | Version | Licence | Files |
|---|---|---|---|
| marked | 14.1.3 | MIT | marked.esm.js |
| DOMPurify | 3.1.7 | Apache-2.0 / MPL-2.0 | purify.es.mjs |
| KaTeX | 0.16.11 | MIT | katex/katex.mjs, katex/katex.min.css, katex/contrib/auto-render.mjs, katex/contrib/mhchem.mjs, katex/fonts/*.woff2 |
| @supabase/supabase-js | 2.119.0 | MIT | supabase.mjs (esbuild bundle, ESM; loaded only in db mode) |

Served from the repo so the site works offline and never depends on a CDN. To upgrade: `npm i <pkg>@<version>` in a scratch folder, copy the same files here, update this table and bump `CACHE_VERSION` in `sw.js`.
