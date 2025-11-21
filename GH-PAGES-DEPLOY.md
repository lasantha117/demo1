# GitHub Pages Manual Deploy (gh-pages)

This project includes automated GitHub Actions to publish to `gh-pages`. If you want to deploy manually from your machine, follow these steps.

1. Install dependencies and `gh-pages`:

```
npm install
npm install --save-dev gh-pages
```

2. Build the site and publish:

```
npm run build
npm run deploy
```

3. Notes:
- The `deploy` script pushes the `dist` folder to the `gh-pages` branch.
- Make sure `vite.config.ts` `base` is set to your repo path, e.g. `/Pressure-cleaning-Demo-1/` so asset paths resolve correctly.
- If your repo is a user/site page (`username.github.io`), set `base` to `'/'` instead.

If you prefer a one-time push without `gh-pages`, you can build and push `dist` to the `gh-pages` branch manually:

```
npm run build
git branch -M gh-pages
git add -f dist
git commit -m "Deploy dist to gh-pages"
git subtree push --prefix dist origin gh-pages
```
