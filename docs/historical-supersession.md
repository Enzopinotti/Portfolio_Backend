# Historical supersession

## Decision

`Portfolio_Backend` is preserved as a historical NestJS learning/prototype repository.

It is **superseded** as a portfolio backend by:

`Enzopinotti/portafolio-personal`

## Evidence

### Portfolio_Backend

Historical authority before the 2026 maintenance lane:

`6d74ff65e08ea61bce780d7624aa6299720ce2ab`

Observed architecture:

```text
NestJS 10 / TypeScript
├── root Hello World endpoint
├── user scaffold
└── projects scaffold
```

The generated modules contain:

- empty DTO classes;
- empty entity classes;
- no persistence adapter;
- no authentication;
- placeholder service strings;
- no deployment contract.

### portafolio-personal

Current maintained portfolio authority observed during P9 discovery:

`a618ab726da433287c0db8605d1c2b7e37c8f908`

Its repository documents and contains the real `enzopinotti.dev` product boundary:

```text
React frontend
    ↓ /api
Node.js / Express backend
    ↓
Sequelize / MySQL
```

It additionally owns authentication/integrations, Docker/Compose and production deployment tooling.

## Consequence

The correct 2026 treatment is **preservation + reproducibility**, not feature convergence.

P9 therefore may:

- correct documentation;
- define maintenance runtime;
- add CI;
- replace false-positive definition tests with behavior tests;
- qualify dependency/build health.

P9 must not:

- invent persistence;
- add JWT/auth;
- deploy this API;
- copy current portfolio product behavior backward;
- claim this repository is production authority.

## Restart rule

If this repository is revisited later, first ask whether the need belongs in `portafolio-personal`.

Only change this historical repo when there is a specific preservation, compatibility or study reason.
