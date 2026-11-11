# Memory — how we build tools in `free-web-tools`

This folder records the **general process** used to research, build, push, and deploy standalone tools in this monorepo.

Use it when adding the next tool so every stage stays consistent.

## Stage index

| Stage | Doc | Purpose |
|-------|-----|---------|
| 1 | [01-research.md](./01-research.md) | Learn the reference product and lock v1 scope |
| 2 | [02-stack-and-packages.md](./02-stack-and-packages.md) | Choose tech and install packages (incl. Vercel Analytics) |
| 3 | [03-implement-tool.md](./03-implement-tool.md) | Build UI + logic as a standalone app |
| 4 | [04-monorepo-layout.md](./04-monorepo-layout.md) | Place the tool in the common repo |
| 5 | [05-github.md](./05-github.md) | Create/push with GitHub |
| 6 | [06-vercel.md](./06-vercel.md) | Deploy tool folder + enable Vercel Analytics |
| 7 | [07-pitfalls.md](./07-pitfalls.md) | Known failures and fixes |
| 8 | [08-hostinger-domain.md](./08-hostinger-domain.md) | Attach a Hostinger domain to the Vercel project |

## Core principle

Each tool is **standalone**:

- Own folder
- Own `package.json`
- Own UI (not a shared multi-tool dashboard)
- Own Vercel project with `rootDirectory` pointing at that folder
- Optional custom domain registered on Hostinger, DNS pointed at Vercel

The monorepo is only the shared home for many tools — not one merged frontend.
