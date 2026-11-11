# SEO priority plan — freecharactercount.online

Living checklist. Source strategy: [SEO Implementation Plan freecharactercount.online.md](./SEO%20Implementation%20Plan%20freecharactercount.online.md). Timelines and i18n are out of scope here.

## Already done

- [x] Google Search Console DNS TXT on Hostinger for `freecharactercount.online`

## Keyword focus (English only)

### Homepage

| Priority | Keyword | Where |
| --- | --- | --- |
| P1 | character counter | homepage title + H1 |
| P2 | character count online | title / intro |
| P2 | free character count | brand + meta |
| P3 | word and character counter | meta / content block |

Use these on the home page. Ranking wins should come from long-tail multipage, not only head terms.

### Tier 1 multipage (after indexing works)

| URL | Primary keyword |
| --- | --- |
| `/twitter-character-counter` | twitter character counter |
| `/instagram-bio-character-counter` | instagram bio character counter |
| `/instagram-caption-character-counter` | instagram caption character limit |
| `/linkedin-character-counter` | linkedin post character limit |
| `/sms-character-counter` | sms character counter |
| `/meta-description-length-checker` | meta description length checker |
| `/seo-title-length-checker` | seo title length checker |
| `/character-count-no-spaces` | characters without spaces |

### Tier 2 + extra social

| URL | Primary keyword | Status |
| --- | --- | --- |
| `/word-counter` | word counter | done |
| `/reading-time-calculator` | reading time calculator | done |
| `/case-converter` | case converter | done |
| `/character-limits` | social media character limits | done |
| `/sentence-counter` | sentence counter | done |
| `/paragraph-counter` | paragraph counter | done |
| `/facebook-character-counter` | facebook character counter | done |

## Phase 1 — Google indexability

- [x] `app/robots.ts` — allow crawl; sitemap URL `https://freecharactercount.online/sitemap.xml`
- [x] `app/sitemap.ts` — homepage (grow as pages ship)
- [x] `metadataBase` + self-canonical + absolute OG/Twitter URLs
- [x] Confirm apex host consistency (live: `freecharactercount.online`)
- [ ] After deploy: submit sitemap in Search Console + URL Inspection on `/`

## Phase 2 — Homepage keyword alignment

- [x] Title ~`Character Counter - Free Online Character & Word Count`
- [x] Meta description under ~155 chars (privacy + limits)
- [x] H1 → `Free Character Counter` (current line as subhead)
- [x] SSR/static content blocks below tool (counts, limits table, how-to, privacy, FAQ)
- [x] Homepage JSON-LD: `WebSite` + `WebApplication` (+ FAQ when FAQ exists)

## Phase 3 — Trust pages

- [x] `/about`, `/privacy`, `/contact`, `/terms`
- [x] Footer links
- [x] Include in sitemap
- [x] Privacy states text never leaves the browser

## Phase 4 — Multipage Tier 1

- [x] Shared tool page template (limit, progress, unique copy, verified date, FAQ, related links)
- [x] Publish 8 Tier 1 URLs
- [x] Expand sitemap
- [x] `WebApplication` + `BreadcrumbList` JSON-LD per page

## Phase 4b — Multipage Tier 2 + Facebook

- [x] `/word-counter`, `/sentence-counter`, `/paragraph-counter`
- [x] `/reading-time-calculator`, `/case-converter`
- [x] `/character-limits` hub cheat sheet
- [x] `/facebook-character-counter`
- [x] Sitemap + footer include all tool URLs

## Phase 5 — Submit and measure (your steps after deploy)

- [x] Push code and confirm Vercel production deploy succeeds (`84a2c24` → Vercel production READY)
- [ ] Submit sitemap in Google Search Console
- [ ] Request indexing for new URLs
- [ ] Weekly indexing / query check
- [ ] Bing IndexNow later (optional)

## What you do after code is done

Code alone does not index the site. After Phases 1–4 are in the repo:

### 1) Push and redeploy on Vercel

1. Commit the SEO changes (ask the agent to commit if you want that done for you).
2. Push to the Git branch Vercel watches (usually `main`).
3. Wait for the **Production** deployment on the `freecharactercount` project to finish (Vercel dashboard → Deployments).
4. Spot-check live URLs:
   - `https://freecharactercount.online/`
   - `https://freecharactercount.online/robots.txt`
   - `https://freecharactercount.online/sitemap.xml`
   - one tool page, e.g. `https://freecharactercount.online/twitter-character-counter`
   - `https://freecharactercount.online/privacy`

If the custom domain still shows old content, hard-refresh or wait a minute for CDN cache.

### 2) Google Search Console (required for indexing)

1. Open the `freecharactercount.online` property (DNS verification already done).
2. **Sitemaps** → submit: `https://freecharactercount.online/sitemap.xml`
3. **URL Inspection** → enter `https://freecharactercount.online/` → **Request indexing**
4. Repeat URL Inspection + request indexing for each new Tier 1 URL (and trust pages if you want them indexed sooner).
5. Over the next days/weeks, check **Pages** (indexing) and **Performance** (queries). Mark Phase 1/5 checklist items done when sitemap is accepted and homepage is indexed.

Google decides crawl timing; requesting indexing helps but is not instant.

### 3) Optional next

- Bing Webmaster Tools + same sitemap
- Weekly: new pages indexed? top queries? crawl errors?
- Only then start Tier 2 pages from this plan

## Explicitly deferred

- Internationalization / hreflang
- Fancy text generator
- Embed widget, directories, outreach, PWA, browser extension
- Month 3/6/12 traffic targets from the long doc
