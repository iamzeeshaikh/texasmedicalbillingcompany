# Environment Variables

No analytics IDs, tracking codes, or endpoints are hardcoded anywhere in the source. Everything is env-driven and absent-by-default: unset variables mean the corresponding feature simply does not load/render.

| Variable | Used in | Purpose | Unset behavior |
|---|---|---|---|
| PUBLIC_GA4_ID | src/config/site.ts → Analytics.astro | Google Analytics 4 measurement ID (G-XXXX) | GA not loaded |
| PUBLIC_CLARITY_ID | same | Microsoft Clarity project ID | Clarity not loaded |
| PUBLIC_GSC_VERIFICATION | BaseLayout.astro | Google Search Console meta verification token | Meta tag omitted |
| PUBLIC_FORM_ENDPOINT | forms/LeadForm.astro | Overrides the built-in endpoint with a third-party form service | Falls back to `/api/contact/` (SMTP) |
| PUBLIC_SHOW_REVIEW_FLAGS | ReviewFlag.astro | "true" shows compliance flags in a production-mode preview | Flags dev-only |

## Server secrets — SMTP (form delivery)

These are read by `src/pages/api/contact.ts` via `process.env` at request time. They are **not** `PUBLIC_`, are never bundled into client JavaScript, and must be set in the host's environment-variable UI (Vercel/Netlify), not committed.

| Variable | Purpose | Unset behavior |
|---|---|---|
| SMTP_HOST | SMTP server hostname (e.g. smtp.gmail.com) | Endpoint returns 503 |
| SMTP_PORT | 587 for STARTTLS, 465 for implicit TLS | Defaults to 587 |
| SMTP_USER | SMTP account username | Endpoint returns 503 |
| SMTP_PASS | SMTP password. **Gmail requires an App Password**, not the account password | Endpoint returns 503 |
| SMTP_TO | Mailbox that receives submissions | Endpoint returns 503 |
| SMTP_FROM_NAME | Display name on outgoing mail | Falls back to site name |
| SMTP_FROM_EMAIL | From address | Falls back to SMTP_USER |

When any required value is missing the endpoint returns **503 with an error message** rather than pretending to succeed — a form must never silently swallow a lead.

Gmail only sends as `SMTP_FROM_EMAIL` when that address is verified under Gmail → Settings → Accounts → "Send mail as". Otherwise Gmail rewrites the From header to `SMTP_USER`. The visitor's address is always set as `Reply-To`, so replying from the inbox reaches them either way.

## Notes

- The `PUBLIC_` variables are client-visible by design. Never put secrets in a `PUBLIC_` var — the SMTP values above are deliberately unprefixed so they stay server-side.
- Values are inlined at build time: changing one requires a rebuild/redeploy.
- Local development: create `.env` in the project root (gitignored by Astro defaults):

```
PUBLIC_GA4_ID=
PUBLIC_CLARITY_ID=
PUBLIC_GSC_VERIFICATION=
PUBLIC_FORM_ENDPOINT=
PUBLIC_SHOW_REVIEW_FLAGS=true
```

- Future additions (call tracking, chat, scheduling embeds) must follow the same pattern: env-configured, absent-by-default, documented here.
