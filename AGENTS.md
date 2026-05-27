# UniAuth Messenger Provider Rules

## Language

All repository-facing, Git-facing, and GitHub-facing content must be written in English only: branch names,
commit messages, PR titles and bodies, issues, labels, milestones, changelog entries,
version-controlled documentation, code comments, generated artifacts, and release notes. Local
documents that are not tracked by Git are the only exception. Russian text is forbidden in Git and
GitHub artifacts.

## Commit Messages

Use strict Conventional Commits in English only. Commit messages must describe the completed result
in past-tense/result form, not a future task or imperative instruction. Use forms such as `fixed`,
`added`, `updated`, `removed`, `hardened`, or `disabled`.

## Ownership Boundary

This repository implements messenger login providers for UniAuth.

It may own:

- Telegram Mini App init data validation
- MAX WebApp init data validation
- provider assertion mapping
- shared signed WebApp payload validation

It must not own:

- UniAuth core auth policy
- database access
- HTTP routes
- UI
- provider token persistence

## Public API

Use public `@alyldas/uniauth-core` contracts only. Do not import private core internals.

## Local Core Setup

Before running provider tests against local UniAuth, build `../uniauth-core` first:

```sh
cd ../uniauth-core
npm install
npm run build
```

Then return to this repository and run:

```sh
npm install
npm run check
```

## Expected Checks

Run `npm run check` before publishing or committing provider changes.
