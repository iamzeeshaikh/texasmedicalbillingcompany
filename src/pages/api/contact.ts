import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { CONTACT, SITE } from '../../config/site';

// Server-rendered: this is the only non-static route on the site.
export const prerender = false;

/**
 * Form intake for every LeadForm on the site (contact, free billing
 * assessment, pricing inquiry, consultation, careers).
 *
 * Delivery is plain SMTP via nodemailer. Credentials come from environment
 * variables only — never import.meta.env.PUBLIC_*, which would ship the
 * password to the browser.
 *
 * The form collects business contact details only. Submissions are emailed,
 * not stored, and the form carries a visible warning against sending PHI —
 * but a visitor can still type anything into a free-text field, so treat the
 * destination mailbox as capable of receiving unexpected sensitive content
 * and keep it access-controlled.
 */

const REQUIRED = ['name', 'email'] as const;
const MAX_FIELD_LEN = 5000;
const MAX_FIELDS = 40;

// Very small in-memory throttle. Serverless instances are short-lived and not
// shared, so this stops a naive flood against a warm instance, nothing more.
// Real abuse protection belongs at the edge (WAF / platform rate limiting).
const hits = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.first > WINDOW_MS) {
    hits.set(ip, { count: 1, first: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const label = (k: string) =>
  k.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  try {
    if (rateLimited(clientAddress ?? 'unknown')) {
      return json({ error: 'Too many submissions. Please try again shortly.' }, 429);
    }

    let data: Record<string, unknown>;
    try {
      data = await request.json();
    } catch {
      return json({ error: 'Invalid request body.' }, 400);
    }

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return json({ error: 'Invalid request body.' }, 400);
    }

    // Honeypot — the client drops these too, but a bot posting directly to the
    // API never runs that code. Answer 200 so it looks like a success.
    if (typeof data.company_website === 'string' && data.company_website.trim()) {
      return json({ ok: true }, 200);
    }
    delete data.company_website;

    const entries = Object.entries(data).slice(0, MAX_FIELDS);
    const fields: Record<string, string> = {};
    for (const [k, v] of entries) {
      if (v === null || v === undefined) continue;
      const s = String(v).trim();
      if (s) fields[k] = s.slice(0, MAX_FIELD_LEN);
    }

    for (const key of REQUIRED) {
      if (!fields[key]) return json({ error: `Missing required field: ${key}` }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return json({ error: 'Please enter a valid email address.' }, 400);
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO, SMTP_FROM_NAME, SMTP_FROM_EMAIL } =
      process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
      // Configuration problem, not a visitor problem — log loudly, and tell the
      // visitor to email instead so the lead is not silently lost.
      console.error('[contact] SMTP not configured; refusing to drop submission silently');
      return json({ error: 'Form is not configured. Please email us directly.' }, 503);
    }

    const port = Number(SMTP_PORT ?? 587);
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // 587 uses STARTTLS, which nodemailer negotiates
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const formName = fields.form ?? 'Website form';
    const rows = Object.entries(fields)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;color:#555">${esc(label(k))}</td>` +
          `<td style="padding:4px 0;white-space:pre-wrap">${esc(v)}</td></tr>`,
      )
      .join('');

    const text = Object.entries(fields)
      .map(([k, v]) => `${label(k)}: ${v}`)
      .join('\n');

    // From must be an address the SMTP account is allowed to send as. Reply-To
    // is the visitor, so replying from the inbox goes straight back to them.
    const fromEmail = SMTP_FROM_EMAIL || SMTP_USER;
    const fromName = SMTP_FROM_NAME || SITE.name;

    await transport.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: SMTP_TO,
      replyTo: fields.name ? `"${fields.name}" <${fields.email}>` : fields.email,
      subject: `${formName} — ${fields.name}`,
      text,
      html:
        `<h2 style="font:600 16px system-ui,sans-serif">${esc(formName)}</h2>` +
        `<table style="font:14px system-ui,sans-serif;border-collapse:collapse">${rows}</table>`,
    });

    return json({ ok: true }, 200);
  } catch (err) {
    console.error('[contact] send failed:', err instanceof Error ? err.message : err);
    return json({ error: 'Could not send your message. Please email us directly.' }, 502);
  }
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', Allow: 'POST' },
  });

// Referenced so the fallback address in errors stays in sync with site config.
export const FALLBACK_EMAIL = CONTACT.email;
