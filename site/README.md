# Abstractica docs

The source for [docs.abstractica.io](https://docs.abstractica.io), built with
[Astro Starlight](https://starlight.astro.build). Pushing changes under `site/` to `main`
deploys the site to GitHub Pages through [`.github/workflows/docs.yml`](../.github/workflows/docs.yml).

Requires Node 22.12 or newer.

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

Pages live in [`src/content/docs/`](src/content/docs/); each folder there is one sidebar
section, ordered by `sidebar.order` in each page's frontmatter. Brand colours and fonts
are in [`src/styles/theme.css`](src/styles/theme.css).
