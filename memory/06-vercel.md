# Stage 6 — Vercel deploy (one tool at a time)

## Goal

Host only the selected tool folder from the monorepo.

## What we use

- Vercel project per tool (example: project `freecharactercount`)
- GitHub connection to `free-web-tools`
- Project setting **Root Directory** = tool folder name
- Vercel CLI and/or Vercel MCP

## How

1. Create a Vercel project named after the tool.
2. Link repo `{{owner}}/free-web-tools`.
3. Set:
   - Framework: Next.js
   - Root Directory: `{{tool-folder}}`
   - Build Command: `npm run build` (or auto-detect)
4. Deploy production.
5. Confirm production alias (example pattern: `https://{{tool-folder}}.vercel.app`).

## Verify after deploy

- Page is styled (not raw unstyled HTML)
- CSS bundle includes custom classes (for Sass tools: `.counter`, `.brand__name`, etc.)
- Hard refresh if CDN serves old assets

## Auth / access notes

- Vercel MCP may require team consent (`authorize_team_access`)
- CLI may require `vercel login` and correct team scope
- If Git auto-deploy is disabled, trigger a manual production deploy after push

## Adding another tool later

Repeat this stage with a **new** Vercel project and a **new** `rootDirectory`.  
Do not point two tools at the same root unless intentional.

## Output of this stage

- Live production URL
- Confirmed `rootDirectory`
- Git-connected project for future pushes
