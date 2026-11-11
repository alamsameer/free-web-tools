# Free Web Tools

Monorepo for free standalone web tools. Each tool is its own project folder and can be deployed independently (for example on Vercel with a project `rootDirectory`).

## Tools

| Tool | Folder | Description |
|------|--------|-------------|
| Free Character Count | [`freecharactercount`](./freecharactercount) | Live character & word counter |

## Add a new tool later

1. Create a new folder at the repo root (e.g. `my-tool/`).
2. Keep that tool fully standalone (own `package.json`, app code, etc.).
3. Deploy it on Vercel pointing `rootDirectory` at that folder.

## Free Character Count

```bash
cd freecharactercount
npm install
npm run dev
```
