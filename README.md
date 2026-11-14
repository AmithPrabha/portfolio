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

## Publish when ready

The site has not been deployed by this update. Commit and push the local changes before deploying from GitHub.

Use a hosting provider that supports Next.js, or a Node.js server:

1. Install the locked dependencies with `npm ci`.
2. Build with `npm run build`.
3. Start with `npm start` behind your host's HTTPS setup.

For a managed Next.js host, import this repository, select its Next.js preset, and use the repository root as the project directory. Keep the standard Next.js build output rather than treating this as a plain HTML upload.

See the [Next.js deployment documentation](https://nextjs.org/docs/14/app/building-your-application/deploying) for managed and self-hosted deployment options.

Before publishing, review the displayed phone number, profile links, employment details, and availability. Only add live project or repository links when you have the actual destinations.
