# Eastland Family Dental

Astro website for Eastland Family Dental, built as a static Cloudflare Pages site with one Pages Function for appointment-request email delivery through Resend.

## Local website

```sh
npm install
npm run dev
```

## Validation

```sh
npm run astro -- check
npm run test:function
npm run build
```

## Appointment email status

The online appointment form and its email endpoint are intentionally dormant. With the default feature flag set to `false`, appointment buttons open `/contact/`, the saved form is not rendered, and `/api/appointment` will not accept submissions.

The implementation is preserved for future use. When enabled, the form posts to the Cloudflare Pages Function at `/api/appointment`; private Resend configuration is never included in browser code.

## Activate the appointment form locally

1. Copy `.env.example` to `.env` and set `PUBLIC_APPOINTMENT_FORM_ENABLED="true"`.
2. Copy `.dev.vars.example` to `.dev.vars`.
3. Set the same feature flag to `true` and replace the three Resend placeholders:

```dotenv
PUBLIC_APPOINTMENT_FORM_ENABLED="true"
RESEND_API_KEY="re_..."
APPOINTMENT_TO_EMAIL="office@example.com"
APPOINTMENT_FROM_EMAIL="Eastland Family Dental Website <appointments@your-verified-domain.example>"
```

4. Start the Cloudflare Pages preview:

```sh
npm run preview:cloudflare
```

The sender must use a domain that is verified in Resend. `.env` and `.dev.vars` are ignored by Git and must never be committed.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Functions directory: `functions`

To activate a future Cloudflare preview deployment:

1. Add `PUBLIC_APPOINTMENT_FORM_ENABLED=true` to the Pages build environment and make the same value available to the Pages Function.
2. Add `RESEND_API_KEY`, `APPOINTMENT_TO_EMAIL`, and `APPOINTMENT_FROM_EMAIL` under the Pages project’s **Settings → Variables and Secrets**. Encrypt `RESEND_API_KEY` as a secret.
3. Redeploy so Astro rebuilds the public appointment links and form.
