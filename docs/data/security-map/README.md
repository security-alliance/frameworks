# Security Map catalogue

Source of truth for the SEAL Security Map. The React page is one projection of this graph. Search, coverage reports, certifications, and retrieval tools should consume the generated JSON rather than inventing a second catalogue.

## What this is

A versioned graph of assets, components, attack surfaces, threats, controls, responses, and guidance pages. Relationships are explicit edges. The browser must not infer security relationships from prose.

Assessment state is not part of this catalogue. It lives only in the reader's browser.

## Layout

| Path | Role |
| --- | --- |
| `schema.json` | Field contract and assessment vocabulary |
| `taxonomy.json` | Controlled domains, roles, lifecycle, types, edges |
| `views.json` | Overview plus curated entry points |
| `nodes/*.json` | Node records, one object per file array |
| `edges/*.json` | Edge records |
| MDX `securityMap` frontmatter | Optional guidance nodes and explicit relations |

Do not hand-edit `public/security-map.json` or `components/security-map/securityMap.generated.ts`. Both are written from this directory after validation.

## Commands

```bash
pnpm run generate-security-map
pnpm run validate:security-map
pnpm run test:security-map
pnpm run docs:build
```

`docs:dev` and `docs:build` both generate the graph before Vocs runs. An invalid graph fails the build.

## Node IDs

IDs are public contracts.

- Lowercase kebab-case
- Type prefix: `asset-`, `component-`, `surface-`, `threat-`, `control-`, `response-`, `guidance-`, `incident-`
- Stable. Renaming a title must not change the ID
- Put old names in `aliases`
- If an ID must die, set `status: deprecated` and `deprecatedBy` to the replacement

## Adding a node

1. Pick the type. Threats are failure modes, not controls. Controls are the only assessment items.
2. Add a record to the matching `nodes/` file, or a new `nodes/<framework>.json` in a framework-scoped PR.
3. Give it a one- or two-sentence `summary` in plain language.
4. Set `status` to `proposed` until a steward reviews the security semantics.
5. Add edges. A threat with no `targets` edge and no mitigation or guidance path fails validation.
6. Run `pnpm run validate:security-map`.

Framework-specific expansions belong in their own PR against `develop`, with steward review. Do not use this catalogue to rewrite unrelated guidance.

## Edges

Canonical direction is stored. The UI walks both ways.

| Type | Meaning |
| --- | --- |
| `contains` | Asset or component contains a component |
| `depends-on` | Component depends on a component |
| `exposes` | Component exposes an attack surface |
| `targets` | Threat targets an asset, component, or attack surface |
| `mitigates` | Control mitigates a threat |
| `protects` | Control protects an asset, component, or attack surface |
| `detects` | Control detects a threat or surface condition |
| `responds-to` | Response procedure for a threat or incident |
| `documented-by` | Node is documented by a guidance page |
| `demonstrated-by` | Threat or surface is shown by a sourced incident |
| `related-to` | Weak link. Use only when a stronger type is wrong |

Edge IDs are generated as `type:source:target`. Duplicate semantic edges fail. Inverse edges are not stored.

## MDX frontmatter

Optional, namespaced, never required on every page. Skip generated `index.mdx` files.

```yaml
securityMap:
  id: guidance-multisig-overview
  type: guidance
  domains:
    - governance-treasury
  roles:
    - multisig-signer
  lifecycle:
    - normal-operations
  relations:
    - type: documented-by
      source: control-multisig-threshold-policy
```

Rules:

- `id` is required and must use the `guidance-` prefix when `type` is `guidance`
- `href` is derived from the file route
- `title` and `summary` fall back to page frontmatter
- Relations may omit `target` (defaults to this node) or `source` (defaults to this node)
- A catalogue record with the same ID must not disagree on overlapping fields
- Internal hyperlinks in prose are not graph edges

## Incidents

Ship zero incident nodes rather than unsourced claims. An incident requires a stable ID, a date with precision, a summary that separates fact from inference, and at least one direct source with URL, title, and publisher. Loss figures need currency, amount or range, as-of date, and uncertainty. Prefer postmortems and primary disclosures. Do not copy incident data from third-party maps.

## Status

`proposed` means a maintainer wrote it and it has not had steward sign-off. `reviewed` means a steward or subject-matter reviewer accepted the security semantics. `deprecated` stays in the file with `deprecatedBy` so old links can resolve.

The first seed is `proposed` on purpose.

## Follow-up

1. Map one framework per PR (`feat/security-map-<framework>`).
2. Steward review for security semantics.
3. Sourced incidents in dedicated evidence PRs.
4. Coverage reports: threats without controls, controls without guidance, critical assets without response, broken routes.
5. Schema migrations before changing stable IDs or enum meanings.
