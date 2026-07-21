# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server (frontend)
npm run build      # Production build to dist/
npm run preview    # Serve the production build locally
npm run lint       # ESLint over the whole project
```

There is no test runner configured in this project.

## Stack reality check

Despite the global preferences file, this repo is **plain JavaScript/JSX, not
TypeScript, and Vite + React — not Next.js**. There is no App Router, no
Mongoose, no zod, and no `app/api` routes here. Match the existing JS/JSX and
MUI conventions rather than importing patterns from those global rules.

- Build tool: **Vite 7**, React 19 (`src/main.jsx` → `src/App.jsx`).
- UI: **MUI v7** (`@mui/material`, `@mui/icons-material`) with **Emotion** and
  **Framer Motion** for animation.
- All user-facing copy is in **German**. Keep new content German.

## Architecture

Single-page portfolio. `src/App.jsx` wraps everything in a single MUI
`ThemeProvider` and stacks the section components in narrative order
(Hero, About, Skills, Projects, Certificates, Contact, Footer, plus a floating
AIAssistant). Each section lives in `src/components/` and is composed from the
shared design-system primitives below.

- **Design system (premium cyberpunk).** Colors, shadows, gradients and the
  easing curve live in **`src/theme/tokens.js`** (`accents` = cyan/purple/
  success/warn, `surfaces` = s1..s3/base, `alpha()` helper, `shadows`,
  `gradients`). `src/theme/theme.js` consumes those for the MUI palette,
  fluid `clamp()` typography (Orbitron display / Roboto Flex body / Victor Mono
  labels), a global `CssBaseline` (focus-visible ring, scrollbar, and a
  `prefers-reduced-motion` kill-switch), and reusable component variants
  (`<Button variant="neon">` / `variant="ghost">`, themed inputs/cards).
  **Do not hardcode hex colors** — import from `tokens.js` (or use theme
  keys). Sections are still styled with inline `sx`, but pull values from tokens.

- **Shared UI primitives in `src/components/ui/`** — build sections from these,
  don't re-copy patterns: `SectionShell` (id + vertical rhythm + surface + bg
  layer), `SectionHeading` (numbered eyebrow + title + subtitle), `GlassCard`
  (accent card with HUD corners + hover lift/glow), `HudFrame` (corner
  brackets), `Reveal` (whileInView wrapper that respects reduced-motion).

- **Navigation is anchor-based, and order is kept consistent.** `Navbar.jsx`
  `navItems`, the `App.jsx` render order, and each `SectionHeading` number
  (01→05) all follow the same sequence. A section is reachable only if its
  `SectionShell`/root carries the matching `id`; when adding/renaming a section
  keep the `id`, `navItems`, and heading number in sync.

- Signature effects (Hero Matrix rain via `requestAnimationFrame`, human↔cyborg
  morph, typewriter) are intentional; they degrade under `prefers-reduced-motion`
  rather than being removed.

- Fonts (Comfortaa, Orbitron, Roboto Flex, Victor Mono) are loaded via
  `<link>` in `index.html`, not bundled.

### AI voice assistant (`AIAssistant.jsx`)

The floating assistant is **frontend-only**: it uses the browser Web Speech API
(`speechSynthesis`) to read a hardcoded German script aloud. There is no AI
backend — an earlier standalone Express/Gemini server (`server/ai-server.cjs`)
was removed as dead code, and the owner has decided the spoken script stays
static. Do not wire the voice assistant to a backend (or re-add
`express`/`@ai-sdk/*`/`@google/generative-ai`) without being asked.

## Gotchas

- **EmailJS is configured via `VITE_EMAILJS_SERVICE_ID`,
  `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`** (read in
  `Contact.jsx`). If they are missing from `.env` the form short-circuits with a
  "nicht konfiguriert" error instead of sending.
- `legacy_backup/` is old code and is gitignored — don't treat it as live.
- ESLint's `no-unused-vars` ignores identifiers matching `^[A-Z_]` (constants /
  components) plus `motion` — so an unused capitalized import (or an unused
  `motion`) won't be flagged. This whitelist stands in for the missing
  `eslint-plugin-react` `jsx-uses-vars` rule; adding that plugin would be the
  more thorough fix.
- `.env` is gitignored — do not read, print, or commit it. The live secrets it
  needs are the `VITE_EMAILJS_*` keys above; it may also still hold a now-unused
  `GEMINI_API_KEY` left over from the removed AI server.
