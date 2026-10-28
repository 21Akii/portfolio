# Portfolio

Static portfolio site: Next.js 15 (App Router, static export), Tailwind 4, Motion, Geist.

## Run

```bash
npm install
npm run dev          # http://localhost:3100
npm run build        # writes ./out, deploy it to any static host
```

## Languages

The site is French by default (`/`) with an English version (`/en/`). Each page has its own `<html lang>`,
and the nav has a language switch. All text lives in two files that share one type, so a missing
translation is a type error:

- `src/content/fr.ts` (default language)
- `src/content/en.ts`

French typography (non-breaking space before `:` `;` `?` `!` `%`) is applied automatically in `src/content/index.ts`.

## Edit the content

| What | Where |
|---|---|
| All text, in both languages | `src/content/fr.ts` and `src/content/en.ts` |
| Name, GitHub link, IBM certifications | `src/lib/site.ts` |
| Contact email | set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` (until then "Contact me" opens GitHub) |
| Layout of each project section | `src/components/work/` |
| Screenshot tabs (ConstraOps and TRG) | `src/components/ScreenViewer.tsx` plus the `SRC` map in each project file |
| Colours, radius, theme, background motifs | `src/app/globals.css` |

## Images

`npm run assets` crops and compresses the real screenshots into `public/projects/`.
Sources are `assets-src/` plus the sibling `weGym` project folder.
To add a screenshot, drop it in `assets-src/`, add a line to `scripts/prepare-assets.mjs`, run the script.

`projects/` holds the source archives you dropped in for reference. It is git-ignored and not part of the site;
delete it when you no longer need it.
