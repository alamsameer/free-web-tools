# Stage 2 — Stack and packages

## Goal

Pick a stable stack that deploys cleanly and styles reliably.

## Default stack (what we use)

| Concern | Choice | Why |
|---------|--------|-----|
| Framework | Next.js App Router + TypeScript | Fast static tool pages, good Vercel fit |
| Styling | **Sass/SCSS** (custom classes) | Reliable with webpack builds; no Tailwind compile gaps |
| Icons | `lucide-react` | Simple, consistent icons |
| Logic | Pure TypeScript `lib/` utilities | Keeps tools free of heavy deps |
| Hosting | Vercel | Git-connected deploys per tool folder |

## Packages typically installed

Inside the tool folder:

```bash
# app
npm install next react react-dom lucide-react

# typescript / tooling
npm install -D typescript @types/node @types/react @types/react-dom eslint eslint-config-next sass
```

## What we deliberately avoid (learned)

- **Tailwind as default** for this pipeline when builds use `--webpack`
  - Tailwind v4 wired only through `@tailwindcss/turbopack` produced unstyled production HTML
  - Prefer Sass from the start for these tools
- Auth / DB / ads for v1 free utilities
- Shared design-system monorepo complexity until needed

## Scripts pattern

```json
{
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint"
  }
}
```

`--webpack` is acceptable when local SWC/Turbopack native binaries are problematic (seen on Windows).

## Output of this stage

- Scaffolded Next app
- `sass` installed
- No Tailwind dependency
- Clean `npm run build` target ready
