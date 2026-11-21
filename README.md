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
- The resume PDF is deliberately not included or served. The contact form requires the n8n configuration below.

## Live website and deployment

- Website: https://portfolio-phi-flame-8ov367eiz8.vercel.app
- GitHub: https://github.com/AmithPrabha/portfolio
- Vercel project: https://vercel.com/amithprabha/portfolio

The Vercel project is connected to the GitHub repository. Push updates to `main` to trigger a production deployment. Review deployment status and build logs in the Vercel project dashboard.

Before pushing an update, run `npm run build` locally. Vercel installs the dependencies and runs the production build using its Next.js preset. Configure the contact environment variables below in Vercel and redeploy.

The local `.vercel/` linking directory is ignored by Git. The resume PDF is not published.

## Contact form and n8n

Copy `.env.example` to `.env.local` and set `N8N_API_KEY` to the secret configured for the n8n enquiry webhook. The contact API forwards submissions to `N8N_WEBHOOK_URL` with the `z-api-key` header. For production, add both variables in Vercel project settings and redeploy. Never use a `NEXT_PUBLIC_` prefix: credentials stay on the server.

The browser submits to `POST /api/contact`; the server validates the fields and forwards JSON to n8n:

```json
{
  "submissionId": "generated-uuid",
  "name": "Visitor name",
  "email": "visitor@example.com",
  "phone": "+971 50 123 4567",
  "topic": "Automation",
  "message": "I would like to discuss a project.",
  "submittedAt": "2026-11-21T12:00:00.000Z",
  "source": "portfolio-contact"
}
```

Topics are exactly `Frontend`, `Backend`, `Full Stack`, `AI`, `Automation`, and `Other`. All five contact fields are required. Maximum lengths are name 100, email 254, phone 30, and message 5,000 characters. Phone accepts international formatting, including spaces, parentheses, dots, and hyphens.

Create and activate a POST Webhook workflow. The submitted fields are available under the Webhook node's `body`. Configure a prompt HTTP 2xx acknowledgement; no specific response body is required. Map the fields into Excel, Slack, and your automatic email reply nodes yourself. A successful website confirmation means n8n accepted the submission, not that all downstream actions finished. Monitor workflow failures in n8n.

The server waits up to 15 seconds and does not automatically retry. Use `submissionId` to deduplicate repeated delivery of the same payload. A manual resubmission generates a new ID; consider additional deduplication in your workflow if necessary. A timeout can occur after n8n accepted a message, so the website warns that it may already have arrived.

API responses: `200 { "ok": true }` on acceptance; `400` with field `errors` for invalid input; `413` for oversized input; `503` when unconfigured; `502` for upstream failures; `504` for timeout. Error responses include a public `error` message. The form preserves input on failure and includes a honeypot for basic spam filtering. This is not a full rate-limiting service.

Without configuration the rest of the portfolio still works and the form offers the existing email link as a fallback. No submissions or contact details are logged or stored by the website.
