# Stage 4 — Monorepo layout

## Goal

Keep many tools in one GitHub repo without merging their UIs.

## Repo shape

```
free-web-tools/
  README.md
  .gitignore
  memory/                 # this process memory
  freecharactercount/     # tool 1 (example)
  {{next-tool}}/          # tool 2 later
```

## How

1. Create or use repo `free-web-tools`.
2. Put the finished app in `{{tool-folder}}/` at repo root.
3. Do **not** rewrite the tool into shared routes like `/tool-a`, `/tool-b` unless explicitly requested later.
4. Update root `README.md` with a tools table:

| Tool | Folder | Description |
|------|--------|-------------|
| Free Character Count | `freecharactercount` | ... |
| Next tool | `{{next-tool}}` | ... |

5. Root `.gitignore` ignores `node_modules/`, `.next/`, `.env*`, etc.

## Rules

- Each tool keeps its own dependencies
- Each tool can deploy independently
- Future tools are sibling folders, not features bolted onto an existing app

## Output of this stage

- Tool nested under monorepo root
- Root docs updated
- Ready for GitHub push
