# Karin Zuza | Organist

A bilingual portfolio website for Karin Zuza, organist and music educator. The site presents her background and experience, describes her performance and teaching services, and provides a direct way to get in touch.

The website is available in English and Slovenian and includes:

- Home page with an introduction and featured imagery
- Biography and education
- Professional experience and selected concerts
- Organist and teaching services
- Contact details and social links

The site is built with React, TanStack Start, TypeScript, and Vite, with Tailwind CSS for styling.

## Run Locally

Install [Node.js](https://nodejs.org/) and npm, then clone the repository and install its dependencies:

```sh
git clone <repository-url>
cd organist-portfolio
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production Build

Build the site and preview the production output locally:

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

The `Deploy to GitHub Pages` workflow builds the static site and deploys it whenever changes are pushed to `main`.

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Open the **Actions** tab and wait for the `Deploy to GitHub Pages` workflow to finish.
4. Visit `https://majbc1999.github.io/organist-portfolio/`.

The workflow uses `/organist-portfolio/` as the base path for the GitHub Pages project URL. When connecting a custom domain later, change `PAGES_BASE_PATH` in `.github/workflows/deploy.yml` to `/`, then add the domain under **Settings → Pages** and configure its DNS records with the registrar.
