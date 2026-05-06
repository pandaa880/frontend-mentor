# Frontend Mentor Challenges

Solutions to [Frontend Mentor](https://www.frontendmentor.io/challenges) challenges.

## Project Setup Overview

This is a **pnpm monorepo** using flat workspace discovery (`pnpm-workspace.yaml` glob `*` — every top-level directory is a workspace package).

### Stack

| Layer         | Technology                                                |
| ------------- | --------------------------------------------------------- |
| **Runtime**   | Node.js (pnpm 10)                                         |
| **Framework** | React 19                                                  |
| **Language**  | TypeScript 5.7 (ESNext target, bundler module resolution) |
| **Bundler**   | Vite 6                                                    |
| **Linter**    | Oxlint (1.62)                                             |
| **Formatter** | Oxfmt (0.47)                                              |

### Vite convention

Every React challenge uses an identical Vite config:

```ts
root: 'src',
base: './',
build: { outDir: '..' }
```

Source code lives in `src/`; build output is written to the **challenge root** (index.html + assets/) instead of a `dist/` folder. This enables GitHub Pages from the repo root — no path rewriting needed.

### Config inheritance

- TypeScript: each challenge `src/tsconfig.json` extends `../../tsconfig.base.json`
- Linting: each challenge `.oxlintrc.json` extends `../../.oxlintrc.json`

### Challenge types

- **Pure HTML/CSS**: a standalone folder with `index.html` at its root.
- **React + TypeScript**: copied from `react-template/`, with source in `src/` and a `vite.config.ts`.

## Project Structure Overview

```
frontend-mentor/
├── index.html                  # Landing page — links to all challenges
├── package.json                # Root workspace orchestrator
├── pnpm-workspace.yaml         # Workspace config (glob: *)
├── tsconfig.base.json          # Shared TypeScript config
├── .oxlintrc.json              # Root linter config
├── .oxfmtrc.json               # Root formatter config
│
├── react-template/             # Scaffold for new React challenges
│   ├── package.json
│   ├── vite.config.ts
│   ├── .oxlintrc.json
│   ├── index.html              # Vite build output
│   ├── assets/                 # Vite build output
│   └── src/
│       ├── App.tsx             # Entry component
│       ├── main.tsx            # Mount point
│       ├── index.html          # Source HTML (vite dev entry)
│       ├── tsconfig.json       # Extends ../../tsconfig.base.json
│       └── vite-env.d.ts
│
├── typing-speed-test/          # Real challenge: Typing Speed Test
│   ├── package.json
│   ├── vite.config.ts
│   ├── .oxlintrc.json
│   ├── index.html              # Vite build output
│   ├── assets/                 # Vite build output
│   ├── README.md               # Challenge brief
│   ├── style-guide.md          # Design tokens
│   ├── data.json               # 30 passages (easy/medium/hard)
│   ├── AGENTS.md               # AI assistant guide for this challenge
│   ├── challenge-assets/       # Fonts + design images from FM
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.html
│       ├── tsconfig.json
│       └── vite-env.d.ts
│
└── (future challenges/)        # Copied from react-template/
```

## Setup

```bash
pnpm install
```

## Add a challenge

1. For pure HTML/CSS: create a folder, add `index.html`
2. For React: copy `react-template/`, rename, run `pnpm install` at root
3. Add a link to root `index.html`

## Scripts

| Command      | Description                      |
| ------------ | -------------------------------- |
| `pnpm dev`   | Start all challenges in dev mode |
| `pnpm build` | Build all React challenges       |
| `pnpm lint`  | Lint all files                   |
| `pnpm fmt`   | Format all files                 |
| `pnpm check` | Format check + lint              |

## Deploy

Push to `main`. Enable GitHub Pages in repo settings — source: deploy from branch `main`, folder `/`.
