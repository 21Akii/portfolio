# Nadji & Cherbane

Duo portfolio of **Fares Nadji** (AI / ML engineer) and **Akram Cherbane** (full-stack & AI developer).
Static site: Next.js 15 (App Router, static export), Tailwind 4, Motion, Geist.

## Run locally

Requires Node 20 or newer (tested on Node 24).

```bash
npm install
cp .env.example .env.local   # optional: Akram's contact email
npm run dev                  # http://localhost:3100
npm run build                # writes ./out, deploy it to any static host
npm start                    # serves ./out on http://localhost:3100
npm run typecheck
```

## Structure of the page

Hero (the two halves: Akram's ConstraOps screens and Fares's segmentation model) → stack → **the duo** (two profiles)
→ **Built together** (ConstraOps, with who did what) → **Fares Nadji** (Mamba-TransUNet, support AI agent, DDoS
internship, automations) → **Akram Cherbane** (TRG, weGym, Attendify, CRM in progress) → practice → contact.

## Languages

French by default (`/`), English at `/en/`. Each page has its own `<html lang>`, and the nav has a language switch.
All text lives in two files that share one type, so a missing translation is a type error:

- `src/content/fr.ts` (default language)
- `src/content/en.ts`

French typography (non-breaking space before `:` `;` `?` `!` `%`) is applied automatically in `src/content/index.ts`.

## Edit the content

| What | Where |
|---|---|
| All text, in both languages | `src/content/fr.ts` and `src/content/en.ts` |
| Names, initials, emails, GitHub / LinkedIn links, repo links, IBM certifications | `src/lib/site.ts` |
| Akram's contact email | `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` (until then his "Contact" opens GitHub) |
| Each part of the work | `src/components/Work.tsx`, project layouts in `src/components/work/` |
| Owner badges (FN / AC discs) | `src/components/Owner.tsx` |
| Automation graphs (hero run and the explorer) | node shapes in `src/lib/workflows.ts`, words in `src/content/automations-fr.ts` / `automations-en.ts` (same order), components in `src/components/flow/`. The three hero builds are `PICKS` in `HeroFlow.tsx` |
| Screenshot tabs (ConstraOps and TRG) | `src/components/ScreenViewer.tsx` plus the `SRC` map in each project file |
| Colours, radius, theme, background motifs | `src/app/globals.css` |

## Images

`npm run assets` crops and compresses the real screenshots into `public/projects/`.
Sources are `assets-src/` (the Mamba-TransUNet figures come from the dissertation) plus the sibling `../weGym`
project folder; when that folder is missing the weGym images already in `public/projects/` are kept.
To add a screenshot, drop it in `assets-src/`, add a line to `scripts/prepare-assets.mjs`, run the script.
