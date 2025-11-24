
**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy to GitHub Pages (automated)

This repo includes a GitHub Actions workflow that builds the site and publishes it to the `gh-pages` branch.

- Make sure the repository is pushed to GitHub at `https://github.com/lasantha117/Pressure-cleaning-Demo-1`.
- The workflow triggers on pushes to `main` or `master` and publishes the `dist` folder.
- The site will be available at: `https://lasantha117.github.io/Pressure-cleaning-Demo-1/` after the workflow completes.

If actions don't run or you prefer manual deploys, you can also build locally and push the `dist` folder to the `gh-pages` branch.
