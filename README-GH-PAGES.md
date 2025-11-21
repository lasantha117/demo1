Deployment to GitHub Pages

This repository is configured to deploy the built `dist` folder to the `gh-pages` branch using GitHub Actions.

What I added:
- `vite.config.ts` default `base` set to `/Pressurecleaning-Demo1/` (can be overridden with `BASE` env var)
- `_config.yml` - minimal Jekyll configuration (copied into `dist` before deployment)
- `.github/workflows/gh-pages.yml` - action to build and publish `dist` to `gh-pages`

Required setup before the workflow can push:
- Create a deploy key (recommended) or use a personal access token. The workflow uses `peaceiris/actions-gh-pages` with `deploy_key`.

Option A — Deploy key (recommended):
1. On your machine, create a new SSH key without passphrase:
   ```powershell
   ssh-keygen -t ed25519 -C "deploy-key" -f gh-pages-deploy-key
   ```
2. Add the **private** key as a repository secret named `ACTIONS_DEPLOY_KEY` (copy contents of `gh-pages-deploy-key`).
3. Add the **public** key (`gh-pages-deploy-key.pub`) as a Deploy key on GitHub:
   - Repo → Settings → Deploy keys → Add deploy key
   - Paste the public key and check "Allow write access".
4. Commit and push to `main` to trigger the workflow.

Option B — Use a Personal Access Token (alternative):
1. Create a PAT with `repo` scope.
2. Add it as a repository secret `PERSONAL_ACCESS_TOKEN`.
3. Edit `.github/workflows/gh-pages.yml` to replace the `peaceiris` step `deploy_key` with `github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}` and set `force_orphan: true` if desired.

Notes
- The workflow copies `_config.yml` into `dist` so the gh-pages branch will contain Jekyll configuration. If you prefer to avoid Jekyll processing, delete `_config.yml` and instead add an empty `.nojekyll` file in `dist` (the workflow can be updated to do this).
- The base URL in `vite.config.ts` is set to the repo path; if you change the repo name, update `base` or set `BASE` during build.
