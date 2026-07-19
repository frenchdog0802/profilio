# Bert Hsiao — Portfolio (GitHub Pages)

English CV site for **Chung Pao (Bert) Hsiao**, built with React, Framer Motion, and a Remotion-powered hero.

**Live URL (after deploy):** https://frenchdog0802.github.io/profilio/

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a public repo named `profilio` under `frenchdog0802` (if it does not exist yet).
2. Push this project to `main`.
3. Run:

```bash
npm run deploy
```

This builds the site and publishes the `dist` folder to the `gh-pages` branch.

4. In the repo **Settings → Pages**, set the source to the `gh-pages` branch.

### User site instead of project site

If you prefer `https://frenchdog0802.github.io/` as the root:

1. Rename/create the repo as `frenchdog0802.github.io`
2. Set `base: "/"` in `vite.config.ts`
3. Update `homepage` in `package.json` accordingly

## Stack

- Vite + React + TypeScript
- Remotion Player (animated hero atmosphere)
- Framer Motion (scroll reveals)
- `gh-pages` for deployment
