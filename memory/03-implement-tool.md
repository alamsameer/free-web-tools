# Stage 3 — Implement the standalone tool

## Goal

Ship one polished tool page with live client-side behavior.

## Folder shape (inside the tool)

```
{{tool-folder}}/
  app/
    layout.tsx
    page.tsx
  components/
    ... UI pieces ...
  lib/
    ... pure logic ...
  styles/
    _variables.scss
    globals.scss
  package.json
  next.config.ts
  README.md
```

## How we build

1. **Logic first in `lib/`**
   - Counting, parsing, transforms, suggestions, limits, etc.
   - Keep functions pure and testable mentally (input → output)

2. **Client orchestrator component**
   - Holds text state
   - Uses `useDeferredValue` for heavy derived stats when useful
   - Passes results into presentational components

3. **UI components**
   - Brand/header
   - Main input
   - Stats
   - Actions/tools
   - Secondary panels (density, suggestions, meters, etc.)

4. **SCSS**
   - Variables in `_variables.scss`
   - Layout/components in `globals.scss`
   - Semantic classes (BEM-like): `.brand__name`, `.editor__input`, `.stats__grid`
   - Import once from `app/layout.tsx`: `import "@/styles/globals.scss"`

5. **UX defaults**
   - Center-aligned content column (~720–800px)
   - Brand as hero-level signal
   - Live updates on type/paste
   - Mobile sticky summary when needed
   - Focus main input on load

## Design constraints we follow

- One composition (not a dashboard)
- Expressive fonts via `next/font` (not Inter/Roboto/system default)
- Soft gradient/pattern background
- Avoid purple-indigo / cream-terracotta AI clichés
- No multi-tool hub UI inside the tool itself

## Verify before monorepo nesting

```bash
cd {{tool-folder}}
npm install
npm run build
```

Build must pass locally.

## Output of this stage

- Working standalone tool
- Passing production build
- README for that tool only
