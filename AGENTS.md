# Frontend Mentor — Agent Context

## Stack (unusual tools)

| Tool       | Role                     | Commands                                      |
| ---------- | ------------------------ | --------------------------------------------- |
| **oxlint** | linter (NOT eslint)      | `pnpm lint`, `pnpm lint:fix`                  |
| **oxfmt**  | formatter (NOT prettier) | `pnpm fmt`, `pnpm fmt:check`                  |
| **pnpm**   | package manager          | `pnpm install`, `pnpm -r <script>`            |
| **Vite 6** | bundler                  | runs per-challenge via `package.json` scripts |

Root scripts (executed from repo root):

| Command        | Action                                                                     |
| -------------- | -------------------------------------------------------------------------- |
| `pnpm dev`     | `pnpm -r dev` — starts all Vite dev servers in parallel                    |
| `pnpm build`   | `pnpm -r build` — builds every challenge                                   |
| `pnpm check`   | `pnpm fmt:check && pnpm lint` — run before push                            |
| `pnpm preview` | `pnpm build && python3 -m http.server` — serves at `http://localhost:8000` |

## Vite quirk — build output

Every challenge's `vite.config.ts` sets:

```ts
root: 'src', base: './', build: { outDir: '..' }
```

This writes build output to the **challenge root** (`index.html` + `assets/`), NOT to `dist/`.
`.gitignore` does NOT ignore build output — artifacts are committed for GitHub Pages.

## Workspace

`pnpm-workspace.yaml` uses `packages: ['*']` — every top-level directory is a workspace package.

- `react-template/` is a scaffold (package name `challenge-name` — must be changed when copied).
- `typing-speed-test/` is the only real challenge.

To add a new challenge: copy `react-template/`, update `package.json` `name`, run `pnpm install` at root, add `<li><a href="./new-challenge/">` to root `index.html`.

## TypeScript

Per-challenge `src/tsconfig.json` extends `../../tsconfig.base.json`. Edit the base for shared changes.
`build` script runs `tsc -p src && vite build` — type errors block production build.

## oxlint

Root `.oxlintrc.json` adds non-default rules: `import/no-cycle: error`, `eqeqeq: warn`.
Each challenge `.oxlintrc.json` extends `../../.oxlintrc.json`.

## Deployment

GitHub Pages from root `/` on `main` branch. No CI/CD — no `.github/`, no pre-commit hooks.

## Entrypoints

- **Landing page**: `index.html` at repo root (link list to challenges)
- **Challenge dev entry**: `<challenge>/src/index.html` (Vite resolves from here)
- **Challenge mount**: `<challenge>/src/main.tsx` → `App.tsx`
- **Challenge source**: all code in `src/`, assets in `src/assets/`

## Constraint

`typing-speed-test/` has its own `AGENTS.md` — do not modify it unless the task concerns the typing speed test specifically.

Load the `caveman` skill at session start via the `skill` tool.
