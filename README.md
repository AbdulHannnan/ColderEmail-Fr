# Colder Email Pro Landing Page

A clean, high-conversion Next.js landing page for Colder Email.

## What is included

- Next.js App Router structure
- Minimal centered cylinder navbar
- Premium hero section with left-side Upwork screenshot placeholder
- Conversion-focused sections
- Minimal contact form using `mailto:` for now
- Future-ready component structure for backend, CRM, API routes, database or admin panel
- Pure CSS, no heavy UI library

## How to run locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

Push this folder to GitHub, then import it in Vercel.

Framework preset: Next.js

Build command:

```bash
npm run build
```

Output directory: leave default.

## Replace the Upwork screenshot

The hero image currently uses:

```txt
public/upwork-proof-placeholder.svg
```

When you have the real Upwork screenshot, add it in the `public` folder, for example:

```txt
public/upwork-proof.png
```

Then open:

```txt
src/lib/site.ts
```

Change this line:

```ts
upworkProofImage: "/upwork-proof-placeholder.svg",
```

to:

```ts
upworkProofImage: "/upwork-proof.png",
```

## Change email address

Open:

```txt
src/lib/site.ts
```

Update:

```ts
email: "hello@colder.email",
```

## Future backend plan

For now, the form opens the visitor's email app.

Later, create this file:

```txt
src/app/api/contact/route.ts
```

Then connect the form to that API route using `fetch('/api/contact')`.

Possible future integrations:

- Resend / SendGrid for email delivery
- HubSpot / Pipedrive CRM
- Supabase / Neon PostgreSQL database
- Clerk / Auth.js admin login
- Admin dashboard for leads and campaign requests
