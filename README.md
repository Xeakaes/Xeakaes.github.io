# Kaan Turan — portfolio

"Curiosity, made tangible." A static [Astro](https://astro.build) site: no UI framework, no analytics, no cookies, no runtime API calls.

## Setup

Needs Node 22.12 or newer.

```bash
npm ci
npm run dev       # local development
npm run check     # type and template check
npm run build     # production build in dist/
npm run preview   # serve the build
```

## Structure

| Path | What lives there |
|---|---|
| `src/config/site.ts` | Owner data and homepage metadata |
| `src/config/deploy.mjs` | `site` and `base`, in this one place |
| `src/content/projects/` | One `.mdx` file per case study |
| `src/content/experiments/` | One folder per experiment |
| `src/content.config.ts` | Typed content schemas |
| `src/pages/`, `src/layouts/`, `src/components/` | Pages and UI |
| `src/styles/global.css` | Design tokens, type scale, both themes |
| `src/scripts/` | Small client script and the base-path URL helper |
| `src/fonts/` | Self-hosted WOFF2 subsets and their OFL licenses |
| `src/assets/`, `public/` | Screenshots; demo video, icons, social image |
| `scripts/make-brand-images.py` | Regenerates `og.png` and PNG icons (Playwright + Chrome) |

## Deploy to GitHub Pages

**User site (this repository, served at `https://xeakaes.github.io/`)**

Settings → Pages → Source must be **GitHub Actions**. Every push to `main` runs the "Deploy to GitHub Pages" workflow.

**Project site (any other repository name)** uses the same steps. The workflow reads the base path from GitHub Pages. To build one locally:

```bash
BASE_PATH=/portfolio/ npm run build
```

`/PcHWmonitor/` is served by its own repository. This site has no route with that name (case studies live under `/work/`). Never add a `public/PcHWmonitor` folder. `robots.txt` only takes effect on the user site, and it allows everything.

## Add an experiment

Create **one folder** in `src/content/experiments/` containing `index.md` and, if needed, its image. Nothing else changes.

```md
---
title: My experiment
order: 3
status: Prototype
summary: One or two honest sentences.
technologies: [TypeScript]
notes:
  - A technical note.
image:
  src: ./preview.png
  alt: What the picture shows.
links:
  - { label: Repository, href: 'https://github.com/Xeakaes/example' }
---
```

`notes` and a visual (`image` or a built-in `diagram`) are required. `credits`, `disclaimer` and `links` are optional.

## Add a project

1. Create `src/content/projects/<slug>.mdx`. The file name becomes `/work/<slug>/`. Copy the frontmatter from an existing file; the schema reports anything missing.
2. Write the body with `<Chapter title="…">` blocks (add `wide` for full width). Include only sections you have real material for. Import screenshots from `src/assets/`.
3. The homepage grid, previous/next links and sitemap pick it up. For a custom homepage diagram, add it to the `diagrams` map in `src/components/Secondary.astro` and give it a grid position there (without one it takes the full width, with no diagram). Keep exactly one `tier: 1` project.

## Content rules

Don't hardcode stars, downloads, ratings, version numbers or language counts. Check claims against the project repository and record them in `CONTENT-NOTES.md`. Never redraw or edit app screen content.
