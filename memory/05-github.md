# Stage 5 — GitHub

## Goal

Publish the monorepo so every tool shares one remote.

## What we use

- Git locally
- GitHub repo: `free-web-tools` (public)
- Optional: GitHub MCP / `gh` CLI / authenticated HTTPS remote
- PAT scopes if using fine-grained tokens:
  - Contents: Read and write
  - Administration: Read and write (needed to create repos)
  - Or classic `repo` scope

## How

1. `git init -b main` (if needed)
2. Stage source only (never `node_modules`, `.next`, secrets)
3. Commit with a clear why-message
4. Create GitHub repo `free-web-tools` if missing
5. Add remote and push `main`

```bash
git add -A
git commit -m "Add {{tool-folder}} as a standalone tool in free-web-tools."
git remote add origin https://github.com/{{owner}}/free-web-tools.git
git push -u origin main
```

## Security notes

- Do not commit tokens
- Do not paste PATs into chat if avoidable
- Rotate any token that was exposed

## Output of this stage

- GitHub URL, e.g. `https://github.com/{{owner}}/free-web-tools`
- `main` contains `{{tool-folder}}/`
