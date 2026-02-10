# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FødeiNorge public website — a bilingual (Norwegian/English) static marketing site for a mobile app that helps pregnant women and families compare maternity services in Norway.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Build static export (outputs to `/out`)
- `npm run lint` — Run ESLint
- No test framework is configured

## Architecture

**Stack:** Next.js 14 (App Router) with TypeScript, React 18, Tailwind CSS. Configured for static export (`output: 'export'` in next.config.js) — no server-side runtime.

### Routing & i18n

Norwegian is the default locale at `/`, English lives under `/en`. Routes are duplicated per locale:

- `/` and `/en` — Home pages
- `/personvern` and `/en/privacy` — Privacy policy
- `/stotte` and `/en/support` — Support/FAQ

All page content is centralized in `lib/content.ts` which exports `getContent(locale)`, `getAlternateLocale(locale)`, and `getLocalePath(locale, path)`. The `Locale` type is `'no' | 'en'`.

### Components

- `Header.tsx` — Sticky nav with language switcher (`'use client'`)
- `Footer.tsx` — Footer with links and contact info
- `PhoneMockup.tsx` — iPhone mockup with auto-rotating screenshot carousel (`'use client'`, uses useState/useEffect)

### Styling

Tailwind with custom color palette defined in `tailwind.config.js`:
- **Rosa** (pink/rose) — primary brand color, shades 50-900
- **Teal** (blue-green) — secondary brand color, shades 50-900

### Path Alias

`@/*` maps to project root (configured in tsconfig.json).
