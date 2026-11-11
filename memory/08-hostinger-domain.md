# Stage 8 — Hostinger domain → Vercel project

## Goal

Keep the domain registered on Hostinger, but serve the site from the matching Vercel project.

Example used:

- Domain: `freecharactercount.online` (Hostinger portfolio)
- Vercel project: `freecharactercount` (`rootDirectory`: `freecharactercount`)
- Default URL: `https://freecharactercount.vercel.app`

## What we use

- Hostinger MCP (`user-hostinger` / Hostinger plugin) for domains + DNS
- Vercel MCP for project domains
- Domain stays at Hostinger (no registrar transfer required)

## Auth first

1. Confirm Hostinger MCP works (`domains_portfolio_list` or `hosting_websites_list`).
2. Confirm Vercel MCP has team access for the project.
3. If Hostinger plugin servers error, use working `user-hostinger` or re-auth in Cursor MCP settings.

## How

### 1) List domains on Hostinger

```
domains_portfolio_list
```

Pick the domain to attach (example: `freecharactercount.online`).

### 2) Add domains on Vercel

For the tool’s Vercel project:

1. Add apex: `{{domain}}` (production)
2. Add `www.{{domain}}` with redirect → apex (`308` preferred)

Use Vercel MCP `add_project_domain` (or dashboard / CLI).

### 3) Get Vercel-required DNS

Call Vercel `get_domain_config` for the apex domain. Use the **rank 1** recommendations when present, for example:

| Host | Type | Value (example pattern) |
|------|------|-------------------------|
| `@` | A | Vercel recommended IPv4s (often two addresses) |
| `www` | CNAME | Project-specific `*.vercel-dns-017.com` (or `cname.vercel-dns.com`) |

Do **not** hardcode old universal values if `get_domain_config` returns newer ones.

### 4) Inspect current Hostinger DNS

```
dns_records_list  domain={{domain}}
```

Note existing A / CNAME / MX / TXT before changing anything.

### 5) Confirm before mutating DNS

`dns_records_update` is destructive (`overwrite` defaults matter). Confirm with the user:

- Exact records to write
- Impact (site traffic moves to Vercel; email breaks if MX is wiped)
- Recovery (DNS snapshot / previous records)

Prefer:

1. `dns_records_validate` (dry run)
2. User says **yes**
3. `dns_records_update` with `overwrite: true` **only for the names/types you intend to replace** (apex A + www CNAME)

Preserve MX / email / unrelated TXT records unless the user asks to change them.

### 6) Example zone payload (shape only)

```json
{
  "domain": "{{domain}}",
  "overwrite": true,
  "zone": [
    {
      "name": "@",
      "type": "A",
      "ttl": 300,
      "records": [{ "content": "{{vercel-ip-1}}" }, { "content": "{{vercel-ip-2}}" }]
    },
    {
      "name": "www",
      "type": "CNAME",
      "ttl": 300,
      "records": [{ "content": "{{vercel-cname-target}}" }]
    }
  ]
}
```

### 7) Verify

1. `dns_records_list` on Hostinger shows the new records
2. Public DNS resolves apex A + www CNAME (`Resolve-DnsName` / `dig`)
3. Vercel project domains show both hostnames `verified: true`
4. Visit `https://{{domain}}` and confirm SSL (can take a few minutes)

## Rules

- Domain registration stays on Hostinger; only DNS points at Vercel
- One custom domain maps to **one** Vercel tool project
- Analytics stays on Vercel (see [06-vercel.md](./06-vercel.md)); Hostinger does not provide that page-view pipeline for this setup
- Confirm every DNS write; do not chain destructive Hostinger ops without a fresh yes

## Output of this stage

- Apex + www attached on Vercel
- Hostinger DNS pointing at Vercel
- Live custom URL: `https://{{domain}}`
