# Exumatron LLC Website

A modern, responsive website for Exumatron LLC built with React and Vite.

## Features

- Responsive Home, About, Services, Media, and Contact sections
- Interactive three-category service explorer
- Compact YouTube interview carousel with modal playback
- Accessible mobile navigation and reduced-motion support
- Exumatron brand imagery and custom founder artwork

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173`.

## Production build

```bash
pnpm build
pnpm preview
```

## Contact email delivery

Contact submissions require a configured Formspree endpoint. Create a form with
the verified recipient `jon@exumatron.co.technology`, then set
`VITE_CONTACT_FORM_ENDPOINT` in `.env.local` and in the deployment build environment.
See `.env.example`. Restart the development server or rebuild after changing it.
The endpoint is public; never place SMTP passwords or private API keys in VITE_ variables.

Without an endpoint, the form reports that online messaging is unavailable and
provides the direct email address. With an endpoint, success appears only after
the service accepts the submission. Confirm a test inquiry reaches the recipient
inbox before publishing; API acceptance alone does not prove inbox delivery.

## Airtable service forms

The three service categories are ready to receive Airtable form URLs:

1. Speaking & Teaching Engagements
2. Fractional CTO Services
3. AI Consulting & Security Services
