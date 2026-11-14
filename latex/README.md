# LaTeX sources

`latex/<class>/<subject>/*.tex` are compiled to `pdfs/<class>/<subject>/*.pdf` by `.github/workflows/latex.yml` on every push that touches this folder. Shared preambles live in `latex/<class>/preambles/`. Each `.tex` must compile with `pdflatex` (TeX Live full) and `\input` its preamble by relative path.
