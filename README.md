# bernardnongpoh.github.io

Personal website for Bernard Nongpoh, built with [Quarto](https://quarto.org/) and hosted by GitHub Pages at <https://bernardnongpoh.github.io>.

## Structure

```
.
├── _quarto.yml           # Site config (navbar, theme, output-dir)
├── index.qmd             # Home
├── publications.qmd
├── teaching.qmd
├── students.qmd
├── talks.qmd
├── travels.qmd
├── posts/                # Writeups (index.qmd + per-post .qmd files)
├── static/               # Source images, PDFs, documents
├── styles.css
└── docs/                 # Rendered output — this is what GitHub Pages serves
```

GitHub Pages is configured to serve from the `docs/` folder on `master`. Source `.qmd` files are **not** what gets published — the rendered HTML in `docs/` is.

## Edit and publish

1. Edit the relevant `.qmd` file (or drop assets into `static/`).
2. **Re-render the site** — this is the step that's easy to forget:

   ```
   quarto render
   ```

   This regenerates `docs/`. Without this, your changes won't appear on the live site even after pushing.

3. Commit and push both the source change and the regenerated `docs/`:

   ```
   git add -A
   git commit -m "Describe the change"
   git push
   ```

GitHub Pages picks up the new `docs/` within ~30–60 seconds. Hard-refresh (Cmd+Shift+R) to bypass browser cache.

## Preview locally

```
quarto preview
```

Opens a live-reloading preview at <http://localhost:4848> (or similar). Use this before `quarto render` if you want to iterate without rebuilding `docs/` each time.

## Notes

- `docs/.nojekyll` must exist — it tells GitHub Pages to skip Jekyll processing, which would otherwise strip Quarto's `site_libs/` assets. `quarto render` does not always recreate it; if you see broken styles after a publish, check that this file is present.
- Asset paths in `.qmd` files should be relative (e.g. `static/documents/foo.pdf`), and `static/**` is declared as a resource in `_quarto.yml` so Quarto copies it into `docs/` on render.

## License

Content © Bernard Nongpoh. Code released under the existing `LICENSE` file.
