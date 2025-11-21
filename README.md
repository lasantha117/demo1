<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1UFUQbeBbFPetMWNQwFjmhItJt6xN5S86

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages (automated)

This repo includes a GitHub Actions workflow that builds the site and publishes it to the `gh-pages` branch.

- Make sure the repository is pushed to GitHub at `https://github.com/lasantha117/Pressure-cleaning-Demo-1`.
- The workflow triggers on pushes to `main` or `master` and publishes the `dist` folder.
- The site will be available at: `https://lasantha117.github.io/Pressure-cleaning-Demo-1/` after the workflow completes.

If actions don't run or you prefer manual deploys, you can also build locally and push the `dist` folder to the `gh-pages` branch.
