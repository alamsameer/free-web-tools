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
| Analytics missing in dashboard | Package/layout not shipped, or no traffic yet | Install `@vercel/analytics`, add `<Analytics />` in root layout, redeploy, generate page views |

## Hostinger / custom domain

| Problem | Cause | Fix |
|---------|-------|-----|
| Hostinger plugin MCP servers error | Auth/cache/connection failure | Re-auth in MCP settings; fall back to `user-hostinger`; clear broken `npx` cache on Windows if needed |
| Domain on Hostinger but site still parking | DNS still points at Hostinger IP | Update apex A + www CNAME to Vercel values from `get_domain_config` |
| Custom domain misconfigured on Vercel | DNS not propagated or wrong records | Wait/propagate; recheck Hostinger zone; verify project domains |
| Email breaks after DNS update | MX wiped by broad overwrite | Preserve MX/TXT; only overwrite intended A/CNAME names |
| www add fails with redirect error | Apex not on project yet | Add apex first, then add www with redirect |

## Product scope

| Problem | Cause | Fix |
|---------|-------|-----|
| Tool becomes a multi-tool hub too early | Over-scoping for “future tools” | Keep each app standalone; only monorepo is shared |
