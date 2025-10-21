# PortableGallery

Personal photography gallery built with Next.js 15 and deployed on AWS Amplify.

## Stack
- Next.js App Router
- React 19
- Tailwind CSS 4 postcss pipeline
- AWS Amplify hosting

## Local Development
```bash
cd portable-gallery
npm install
npm run dev
```
The development server runs at http://localhost:3000.

## Production Build
```bash
npm run build
npm run start
```
These scripts use the standard Next.js compiler (Turbopack removed).

## Deployments
Amplify builds use the `amplify.yml` in the repo root:
```yaml
npm ci
npm run build
```
The build artifact is generated as a static export in the `out/` directory.

## Structure
```
portable-gallery/
├── app/
│   ├── (site)/         # route group with shared layout
│   ├── globals.css
│   └── layout.js
├── components/         # reusable UI pieces
├── lib/                # shared data helpers
└── public/             # static assets (fonts, photos, favicon)
```

## Fonts
All fonts are served locally from `public/fonts`, so builds do not depend on external providers.
