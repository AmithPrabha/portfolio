# Amith Prabha — Portfolio

A responsive Next.js portfolio covering backend and distributed systems, automation, and full-stack development. Built with TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Stop the server with Ctrl+C.

## Production build

```bash
npm run build
npm start
```

The build includes TypeScript validation. The production server defaults to port 3000. Use `npm start -- --port 3100` for a different port. Development uses `.next-dev`; production builds use `.next`. This keeps production builds from overwriting a running development server’s chunks. Use different ports when running both servers.

## Content and interactions

- Edit professional details, experience, skills, projects, and education in `lib/portfolio.ts`.
- Section components live in `components/`; page composition and shared styles live in `app/`.
- Experience entries expand using native disclosure controls. Skill categories use accessible filter buttons.
- Animations respect the visitor's reduced-motion preference. Content remains visible before JavaScript loads.
- Contact uses email, phone, LinkedIn, and GitHub links. Copy-email needs a secure browser context (HTTPS or localhost), with an explanatory message when copying is unavailable.
- The resume PDF is deliberately not included or served. No form service, backend credentials, or environment variables are needed.

## Live website and deployment

- Website: https://portfolio-phi-flame-8ov367eiz8.vercel.app
- GitHub: https://github.com/AmithPrabha/portfolio
- Vercel project: https://vercel.com/amithprabha/portfolio

The Vercel project is connected to the GitHub repository. Push updates to `main` to trigger a production deployment. Review deployment status and build logs in the Vercel project dashboard.

Before pushing an update, run `npm run build` locally. Vercel installs the dependencies and runs the production build using its Next.js preset. No environment variables are required for this portfolio.

The local `.vercel/` linking directory is ignored by Git. The resume PDF is not published.
