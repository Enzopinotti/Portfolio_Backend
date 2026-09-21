# Portfolio_Backend — historical NestJS prototype

Historical backend prototype created in 2024 while exploring a separate NestJS backend for a personal portfolio.

> **Status:** superseded / maintenance-only. This repository is **not** the backend authority for `enzopinotti.dev`.

The maintained portfolio application now lives in:

**https://github.com/Enzopinotti/portafolio-personal**

That repository contains the current full-stack product, including its React frontend, Express backend, MySQL persistence, authentication/integrations, Docker/Compose and deployment tooling.

## What this repository actually contains

This repository preserves a small NestJS 10 / TypeScript scaffold.

The current historical behavior is intentionally simple:

- `GET /` → `Hello World!`;
- generated `/projects` CRUD routes;
- generated `/user` CRUD routes;
- empty DTO/entity classes;
- placeholder service responses such as `This action returns all projects`.

It does **not** contain:

- a database or persistence layer;
- authentication or authorization;
- portfolio production data;
- external integrations;
- deployment infrastructure;
- a maintained production API contract.

The `user` and `projects` modules are Nest CLI-style scaffolds, not completed product modules.

## Why this repository is preserved

The value of this repository is historical progression, not production authority.

It shows an early 2024 backend experiment before the portfolio evolved into the maintained full-stack `portafolio-personal` repository.

The 2026 maintenance lane therefore does **not** invent missing business logic or turn this scaffold into a second production backend.

Instead it makes the historical artifact:

- truthful;
- reproducible;
- testable;
- CI-verified;
- explicit about its successor.

See [Historical supersession](./docs/historical-supersession.md).

## Runtime

Maintenance runtime:

- Node.js **20.x**
- npm lockfile v3
- NestJS **10.x**
- TypeScript **5.x**

Use the repository runtime:

```bash
nvm use
```

Install exactly from the lockfile:

```bash
npm ci
```

## Development

Start normally:

```bash
npm run start
```

Watch mode:

```bash
npm run start:dev
```

The application listens on port `3000` because that is the original scaffold behavior.

## Quality contract

Run the complete local maintenance gate:

```bash
npm run quality
```

It executes:

1. Prettier check;
2. ESLint with zero warnings and **without auto-fixing**;
3. unit tests;
4. E2E route tests;
5. production build.

GitHub Actions runs the same checks for pull requests and `main`, then audits production dependencies for high-severity vulnerabilities.

### Maintained behavior tests

The 2026 lane replaces definition-only scaffold tests with behavior assertions.

Expected suite:

- **21 unit tests**
- **11 E2E tests**

The tests deliberately protect the generated placeholder behavior instead of pretending a real persistence/auth domain exists.

## Public historical route surface

| Method | Route | Historical behavior |
| --- | --- | --- |
| GET | `/` | `Hello World!` |
| POST | `/projects` | generated create placeholder |
| GET | `/projects` | generated collection placeholder |
| GET | `/projects/:id` | generated id placeholder |
| PATCH | `/projects/:id` | generated update placeholder |
| DELETE | `/projects/:id` | generated remove placeholder |
| POST | `/user` | generated create placeholder |
| GET | `/user` | generated collection placeholder |
| GET | `/user/:id` | generated id placeholder |
| PATCH | `/user/:id` | generated update placeholder |
| DELETE | `/user/:id` | generated remove placeholder |

These routes are preserved as historical behavior only. They are not advertised as a production API.

## Repository history and provenance

The original 2024 repository consists of two commits authored/committed by Enzopinotti:

- `180a702875ea7a19f5bc14e636e7a6c67dd194a4`
- `6d74ff65e08ea61bce780d7624aa6299720ce2ab`

The 2026 work is a maintenance/preservation lane. Git history is not rewritten.

## Security and configuration

The current historical scaffold has no runtime secrets/configuration contract because it has no database, auth provider or external service integration.

`.env` files are ignored by Git.

Do not add real credentials merely to make this scaffold look more complete.

If a future product backend is needed, extend the maintained `portafolio-personal` architecture or open a new explicitly justified project instead of silently promoting this historical prototype.

## License

The package metadata is `UNLICENSED` and there is no repository-level open-source license.

Public visibility does not imply permission to reuse the code under an open-source license.
