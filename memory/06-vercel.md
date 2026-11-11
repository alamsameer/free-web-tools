# Stage 6 — Vercel deploy (one tool at a time)

## Goal

Host only the selected tool folder from the monorepo, with Analytics enabled.

## What we use

- Vercel project per tool (example: project `freecharactercount`)
- GitHub connection to `free-web-tools`
- Project setting **Root Directory** = tool folder name
- Vercel CLI and/or Vercel MCP
- `@vercel/analytics` in the Next.js app

## How

1. Create a Vercel project named after the tool.
2. Link repo `{{owner}}/free-web-tools`.
3. Set:
   - Framework: Next.js
   - Root Directory: `{{tool-folder}}`
   - Build Command: `npm run build` (or auto-detect)
4. Deploy production.
5. Confirm production alias (example pattern: `https://{{tool-folder}}.vercel.app`).

## Vercel Analytics (do this per tool)

1. Inside the tool folder:

```bash
npm i @vercel/analytics
```

2. In `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

3. Commit, push `main`, and redeploy production.
4. Confirm in Vercel → project → **Analytics** after real page views.

Notes:

- Use `@vercel/analytics/next` for App Router (not the generic React entry unless intentional).
- Analytics ships with the production deploy; no Hostinger change is required for it.
- Each tool’s Vercel project has its own Analytics view.

## Verify after deploy

- Page is styled (not raw unstyled HTML)
- CSS bundle includes custom classes (for Sass tools: `.counter`, `.brand__name`, etc.)
- Hard refresh if CDN serves old assets
- `<Analytics />` is present in the root layout

## Auth / access notes

- Vercel MCP may require team consent (`authorize_team_access`)
- CLI may require `vercel login` and correct team scope
- If Git auto-deploy is disabled, trigger a manual production deploy after push

## Custom domain next

After the `*.vercel.app` URL works, attach a Hostinger domain — see [08-hostinger-domain.md](./08-hostinger-domain.md).

## Adding another tool later

Repeat this stage with a **new** Vercel project and a **new** `rootDirectory`.  
Do not point two tools at the same root unless intentional.

## Output of this stage

- Live production URL (`*.vercel.app`)
- Confirmed `rootDirectory`
- Git-connected project for future pushes
- Vercel Analytics wired in layout
