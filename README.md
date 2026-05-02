# bernardnongpoh.github.io

Follow this https://mikedodds.org/publications/

Personal website for Bernard Nongpoh — plain HTML with [Tailwind CSS](https://tailwindcss.com/) via CDN. No build step, no framework, no dependencies.

Hosted by GitHub Pages at <https://bernardnongpoh.github.io>.

## Structure

```
.
├── index.html              # Home
├── publications.html
├── teaching.html
├── students.html
├── writeups.html           # Blog index
├── talks.html
├── travels.html
├── 404.html
├── posts/                  # Individual writeups
│   ├── llvm.html
│   ├── riscv.html
│   └── summer-school-iitkanpur.html
├── assets/
│   └── site.css            # Shared prose / code styles
├── static/                 # Images, PDFs, documents
│   ├── photo.jpg
│   ├── media/
│   ├── pdf/
│   └── documents/
└── .nojekyll               # Skip Jekyll on GitHub Pages
```

Each page is self-contained — the sidebar (photo, nav, contacts) is inlined in every file. To change a nav link or contact, update each HTML file.

## Run locally

You need a local HTTP server so that absolute paths like `/static/photo.jpg` resolve. Opening the files directly with `file://` will break asset paths.

### Python 3 (no install)

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

### Node (no install)

```
npx serve .
```

### VS Code

Install the **Live Server** extension and right-click `index.html` → *Open with Live Server*.

## Edit content

- **Text / links** — edit the relevant `*.html` file directly.
- **New writeup** — add `posts/<slug>.html` (copy an existing post as a template) and link it from `writeups.html`.
- **Images / PDFs** — drop into `static/` and reference as `/static/<path>`.
- **Global styles** — edit `assets/site.css`.
- **Tailwind classes** — apply inline; Tailwind is loaded via `<script src="https://cdn.tailwindcss.com"></script>` in each page.

## Deploy

GitHub Pages serves the `master` branch root automatically (user site).

```
git add -A
git commit -m "Update site"
git push
```

Changes are live within a minute.

## License

Content © Bernard Nongpoh. Code released under the existing `LICENSE` file.
