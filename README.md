# Free Web Tools

Monorepo for free standalone web tools. Each tool is its own project folder and can be deployed independently (for example on Vercel with a project `rootDirectory`).

## Tools

| Tool | Folder | Description |
|------|--------|-------------|
| Free Character Count | [`freecharactercount`](./freecharactercount) | Live character & word counter |

## Process memory

Step-by-step build/deploy process for any new tool:

- [`memory/`](./memory) — research → stack → implement → monorepo → GitHub → Vercel (+ Analytics) → pitfalls → Hostinger domain

## Add a new tool later

1. Follow [`memory/README.md`](./memory/README.md).
2. Create a new folder at the repo root (e.g. `my-tool/`).
3. Keep that tool fully standalone (own `package.json`, app code, etc.).
4. Deploy it on Vercel pointing `rootDirectory` at that folder.
5. Add `@vercel/analytics` in the tool layout (see [`memory/06-vercel.md`](./memory/06-vercel.md)).
6. Optional: attach a Hostinger domain (see [`memory/08-hostinger-domain.md`](./memory/08-hostinger-domain.md)).

## Free Character Count

```bash
cd freecharactercount
npm install
npm run dev
```
