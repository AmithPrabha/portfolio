import { validateContact } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 20000) return Response.json({ error: "Message is too large." }, { status: 413 });
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed;
  } catch {
    return Response.json({ error: "Please send a valid contact form." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) return Response.json({ ok: true });
  const { data, errors } = validateContact(body);
  if (Object.keys(errors).length) return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });

  const webhook = process.env.N8N_WEBHOOK_URL;
  const apiKey = process.env.N8N_API_KEY;
  if (!webhook || !apiKey) return Response.json({ error: "The contact form is temporarily unavailable. Please use the email link." }, { status: 503 });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "z-api-key": apiKey,
    };
    const response = await fetch(webhook, {
      method: "POST", headers, redirect: "error", signal: controller.signal,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        mobile: data.phone,
        description: data.topic,
        message: data.message,
        submissionId: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
        source: "portfolio-contact",
      }),
    });
    if (!response.ok) throw new Error("Webhook rejected submission");
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: controller.signal.aborted
      ? "Confirmation took too long. Your message may have arrived; please contact me by email if needed."
      : "Couldn’t confirm your submission. Please try again later or use the email link." }, { status: controller.signal.aborted ? 504 : 502 });
  } finally {
    clearTimeout(timeout);
  }
}
