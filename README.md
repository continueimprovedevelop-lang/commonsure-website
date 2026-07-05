# Commonsure Community Solutions — Website

Marketing site for **Commonsure Community Solutions**, a certainty and treasury platform for
homeowners associations — built from [`23_Commonsure_Branding_Strategy.md`](../../06%20-%20Business%20Development%20%26%20Partnerships/Consortium%20Businesses/Commonsure/23_Commonsure_Branding_Strategy.md).

This is a standalone project, separate from the main CID website (`cid_website`). No CID branding
appears on any public page.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for scroll reveals
- Statically exported (`output: "export"`) — no server, no database, no paid services

## Pages

Home · How It Works · The Five-Year Certainty Program · Savings & Transparency · About & Mission ·
Board Resources · Contact

## Local development

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
```

Output is written to `out/`. Every route also has a matching `.html` file (e.g. `savings.html`),
which is how Vercel and most static hosts resolve clean URLs like `/savings`.

## Content editing

All copy and data live in `src/content/`:

- `site.ts` — navigation, taglines, proof line, contact email, H.O.M.E. values
- `savings.ts` — state-by-state savings tables and the five-step momentum sequence
- `copy.ts` — page-specific copy (why costs rise, reserve tiers, mission themes, board resources)

Edit these files directly; no CMS is required for Year 1.

## Contact form

The contact form has no backend — submitting it opens the visitor's email client addressed to
`zulma@commonsureglobal.com` with the form fields pre-filled in the body. There are no environment
variables or secrets to configure.

## The Two-Line Assessment Template

`public/downloads/two-line-assessment-template.pdf` is the free downloadable worksheet referenced
throughout the site. Its source is `scripts/two_line_template.html`. To regenerate after edits:

```bash
weasyprint scripts/two_line_template.html public/downloads/two-line-assessment-template.pdf
```

## Deployment

Deployed independently from the CID site to its own Vercel project on the free Hobby tier. See
`DEPLOY_README.md` (in the handoff zip) for connecting the `commonsureglobal.com` domain once
registrar access is available.
