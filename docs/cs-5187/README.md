# CS 5187 — Software Analysis (Monsoon 2026)

Lightweight static site for the course — plain HTML + one CSS file, no build
step, no framework. Open `index.html` in a browser to preview.

Schedule follows the official IITG Academic Calendar 2026 (Monsoon Semester
of AY 2026-2027). Course meets **Mon / Wed / Thu** and totals **42 lectures**
mapped to the 9-topic 42-lecture syllabus.

## Files

```
cs-5187/
├── index.html          # Landing page: schedule, syllabus, logistics, grading, staff
├── lectures.html       # All 42 lectures + per-week research readings + textbook refs
├── style.css           # Blue theme, all colors as CSS variables at top
└── README.md
```

Add a `lectures/` or `assignments/` folder later if you want to host PDF
handouts; Quarto's `resources: cs-5187/**` rule will pick them up automatically.

## How to update

- **Edit a lecture's materials/readings** — open `lectures.html`, find the
  `<div class="lecture" id="LNN">` block, edit the `<dl>` entries.
- **Edit weekly research papers** — inside each `<section class="week-block">`
  the `<div class="week-readings">` block holds the paper list.
- **Change a lecture date on the schedule** — open `index.html`, find the
  `<span class="date">…</span>` inside that lecture's cell.
- **Add a holiday row** — copy the `<tr class="holiday">` row in
  `index.html` (Sep 13–20 mid-sem row is a good template).
- **Change theme colors** — edit the `--blue-*` variables at the top of
  `style.css`. Everything on the page recolors from there.
- **Change lecture days (e.g. TThu instead of MWTh)** — modify the schedule
  cells in `index.html`; the layout is 4 columns Mon–Thu, so unused days can
  stay empty (class `.notes-slot`).

## Tag styles

`.tag.reading` · `.tag.hw` · `.tag.deadline` · `.tag.exam` · `.tag.holiday` ·
`.tag.topic` · `.tag.paper`

## Textbook shorthand used in lectures.html

- **NNH** — Nielson, Nielson, Hankin, *Principles of Program Analysis*
- **M&S** — Møller & Schwartzbach, *Static Program Analysis* (free online)
- **Aho** — Aho, Lam, Sethi, Ullman, *Compilers* (Dragon Book, 2nd ed.)
- **RY** — Rival & Yi, *Introduction to Static Analysis*
- **TAPL** — Pierce, *Types and Programming Languages*
- **FB** — Zeller et al., *The Fuzzing Book*

## Preview locally

```
cd cs-5187
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing (Quarto site)

`_quarto.yml` includes `cs-5187/**` under `resources:`, so `quarto render`
copies the whole folder to `docs/cs-5187/`. GitHub Pages serves `docs/`.
