# USF BioRobotics Laboratory website

Static organization website for the USF BioRobotics Laboratory, published at `https://biorobaw.github.io`.

## Local development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deployment

The repository includes a GitHub Actions workflow that builds and deploys the site whenever a commit is pushed to `main`.

In the GitHub repository:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push the files to the `main` branch.
4. Watch the **Actions** tab for the first deployment.

## Updating content

- Homepage content: `app/page.tsx`
- Site styling: `app/globals.css`
- Complete legacy archive: `content/legacy/`
- Archive page templates: `app/publications`, `app/grants`, `app/books`, and `app/teaching`

The content in `content/legacy` was migrated from Prof. Alfredo Weitzenfeld’s public academic website. Review names, opportunities, links, and publication records before treating them as current.
