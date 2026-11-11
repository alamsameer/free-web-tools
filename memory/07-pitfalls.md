# Stage 7 — Pitfalls and fixes

## Styling

| Problem | Cause | Fix |
|---------|-------|-----|
| Site looks like raw HTML | Tailwind utilities never compiled under webpack | Use custom Sass/SCSS; remove Tailwind |
| Local SWC/Turbopack fails on Windows | Broken native bindings | Use `next build --webpack` / `next dev --webpack` |

## Dependencies

| Problem | Cause | Fix |
|---------|-------|-----|
| `npm` / `yarn` timeouts | Network / sandbox cache | Retry install; clean lock + reinstall; longer fetch timeout |
| `sass` missing at build | Install interrupted | `npm i -D sass` then rebuild |

## GitHub

| Problem | Cause | Fix |
|---------|-------|-----|
| `403` creating repo | PAT lacks Administration/repo create | Broaden token scopes or use classic `repo` |
| Merge conflict on first push | Remote auto-init README | Resolve README, commit, push |

## Vercel

| Problem | Cause | Fix |
|---------|-------|-----|
| Build from wrong folder | Missing `rootDirectory` | Set Root Directory to tool folder |
| MCP `403` team scope | Connection not authorized for team | Approve consent link, retry |
| CLI `no-credentials-found` | Logged out | `vercel login`, then deploy |
| Old layout still visible | Cached old deployment | Force new production deploy + hard refresh |

## Product scope

| Problem | Cause | Fix |
|---------|-------|-----|
| Tool becomes a multi-tool hub too early | Over-scoping for “future tools” | Keep each app standalone; only monorepo is shared |
