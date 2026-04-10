# DeepFurry Website

[![Deploy Status](https://github.com/DeepFurry/DeepFurry/actions/workflows/static.yml/badge.svg)](https://github.com/DeepFurry/DeepFurry/actions/workflows/static.yml)

Static organization website for DeepFurry, built with plain HTML and a Tailwind CSS build step.

## Stack

- Static HTML pages
- Tailwind CSS CLI
- GitHub Pages
- GitHub Actions for build and deploy

## Local development

Install dependencies:

```bash
npm install
```

Build the production CSS and the deployable site:

```bash
npm run build
```

Watch Tailwind while editing HTML:

```bash
npm run watch:css
```

## Project structure

- `src/tailwind.css`: Tailwind entry file
- `css/style.css`: generated CSS output
- `pages/`: static subpages
- `scripts/build-site.mjs`: copies deployable files into `dist/`
- `.github/workflows/static.yml`: GitHub Pages workflow

## Deployment

GitHub Pages is deployed from GitHub Actions. The workflow:

1. installs npm dependencies
2. builds Tailwind CSS
3. assembles the static site into `dist/`
4. uploads `dist/` to GitHub Pages
