# Eastland Family Dental SEO Migration Handoff

Audit date: August 27, 2026

## Status

Redirect coverage is implemented for every legacy URL found through the live site's navigation and the August 27, 2026 Google Search Console export. The replacement can move to the domain after its pushed Cloudflare preview passes the deployment checks below. The current WordPress site will remain available as the fallback during launch monitoring.

## URL inventory result

- 93 known legacy URLs were identified by combining the public-site crawl with 16 months of Search Console landing-page data.
- 60 URLs are preserved at the identical path in the replacement site:
  - 18 core practice, patient, review, contact, appointment, payment, and hub pages
  - 7 procedure category pages
  - 31 procedure detail pages
  - 4 blog articles
- 33 removed, duplicate, archive, profile, template, and product URLs now have exact permanent redirects.
- The only replacement-site URL not found in the legacy crawl or Search Console export is `/procedures/sedation-dentistry/`.
- The legacy Yoast endpoint `/sitemap_index.xml` redirects to the replacement sitemap at `/sitemap.xml`.

## Search Console findings

The export covers April 26, 2025 through August 25, 2026:

- 246 total clicks
- 83,500 total impressions
- 0.3% average click-through rate
- 24.6 average position
- 81 historical landing-page URLs in the performance export
- 6 currently indexed URLs and 14 known but not indexed as of August 20, 2026
- No sitemap currently submitted in this Search Console property
- No separate `www` or domain-level Eastland property is available in the connected Search Console account

The strongest landing pages by clicks were the homepage (109), Meet the Doctor (49), Meet the Team (37), Endodontics (13), Our Practice (10), Procedures (9), and Contact (4). Those pages should receive the most conservative title, heading, copy, and canonical treatment during the migration.

The intentionally preserved procedure paths include existing spellings such as:

- `/procedures/oral-maxillofacial-surgery/wisdom-teeth-exctractions/`
- `/procedures/restorations/root-canal-therapy-1/`
- `/electric-toothbrush-for-the-best-long-term-effects/`

These should not be renamed during the migration without adding another direct 301 redirect.

## Implemented redirect map

| Legacy URL | Permanent destination |
| --- | --- |
| `/team/dr-glenn-ashworth-dentist/` | `/our-practice/meet-the-doctor/` |
| `/team/brandi/` | `/our-practice/meet-the-team/` |
| `/team/diego/` | `/our-practice/meet-the-team/` |
| `/team/erin/` | `/our-practice/meet-the-team/` |
| `/team/gretchen/` | `/our-practice/meet-the-team/` |
| `/team/jessica-registered-dental-hygienist/` | `/our-practice/meet-the-team/` |
| `/team/rebecca/` | `/our-practice/meet-the-team/` |
| `/2024/03/` | `/electric-toothbrush-for-the-best-long-term-effects/` |
| `/2024/07/` | `/blog/` |
| `/category/cosmetic/` | `/procedures/cosmetic-dentistry/` |
| `/category/general/` | `/blog/` |
| `/category/homecare/` | `/procedures/cleanings-prevention/home-care/` |
| `/category/oral-surgery/` | `/procedures/oral-maxillofacial-surgery/` |
| `/eastland-landing/` | `/` |
| `/team/` | `/our-practice/meet-the-team/` |
| `/cosmetic-dentistry-3/` | `/procedures/cosmetic-dentistry/` |
| `/left-sidebar/` | `/blog/` |
| `/orthodontic-clinic/` | `/procedures/` |
| `/author/info/` | `/blog/` |
| `/product/dental-tools/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/floss-picks/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/medical-gloves/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/plastic-retainers/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/comfort-series/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/seriesqs/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/colorful-brushes/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/travel-set/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/fresh-toothpaste/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/oral-pro-600/` | `/procedures/cleanings-prevention/home-care/` |
| `/product/mint-floss/` | `/procedures/cleanings-prevention/home-care/` |
| `/product-category/seriespro/` | `/procedures/cleanings-prevention/home-care/` |
| `/product-tag/hygiene/` | `/procedures/cleanings-prevention/home-care/` |
| `/wishlist/` | `/` |

Fallback rules also cover other legacy team profiles, category and author archives, and product URLs. Exact rules appear first so they take priority.

## Copy and metadata findings

The URL structure is protected, and the highest-click landing pages received a targeted SEO-preservation pass. The replacement copy is not a verbatim WordPress copy; the strongest titles, headings, local intent, and service wording were preserved while the redesigned, more accurate content remains.

Representative changes include:

| Page | Live WordPress signal | Preserved replacement signal | Status |
| --- | --- | --- | --- |
| Home | Title: `Dentist Independence, MO | Eastland Family Dental | Near You`; H1: `Dentist Independence, MO.` | Exact live title, description, and H1; redesigned supporting content retains family dentistry, Independence, and core service language | Preserved and automatically audited. |
| Meet the Doctor | Page earns 49 clicks; live title omits the doctor's name | Title and H1 include `Dr. Glenn Ashworth`; description and intro retain dentist and Independence terms | Improved relevance while preserving intent. |
| Meet the Team | Live title and description emphasize the team, family dentistry, Independence, and new patients | Live title and description preserved; H1 now names Eastland Family Dental | Preserved and automatically audited. |
| Endodontics | Title: `Endodontics in Independence, MO | Eastland Family Dental` | Live title and description preserved; H1 retains Endodontics and Independence while the body uses more accurate root-canal guidance | Preserved and automatically audited. |
| Our Practice | Long local-practice copy covers Independence, CBCT, CEREC, family care, and nitrous oxide | Live title retained; local-family-practice H1 and the key technology, comfort, and location topics remain | Preserved and automatically audited. |
| Procedures | Title includes `Dentist Independence MO` and `Procedures` | Live title preserved; H1 and description include procedures and Independence | Preserved and automatically audited. |
| Contact | Live page has a generic title and no meta description | Replacement title, description, and H1 include Eastland and Independence while retaining phone, hours, address, and after-hours information | Improved and automatically audited. |
| Dental Exams & Cleanings | Long-form examination and cleaning copy | Shorter evidence-based overview | Same URL, but substantially different topical depth and wording. |
| Dentures & Partial Dentures | Long Independence-focused page with denture types, process, repairs, relines, and FAQs | Shorter treatment overview | High content-change risk if this is an organic landing page. |
| TMD article | Visible title: `How TMD Can Impact Your Overall Health` | Title: `How TMD Can Affect Daily Life` | The URL is preserved, but the title and target phrasing changed. |

Search Console shows that the homepage, doctor, team, Endodontics, practice, procedures, and contact pages account for nearly all meaningful organic clicks. Those priority pages are protected by exact automated metadata and H1 assertions. Lower-click pages retain their URLs and topical intent without importing outdated or inaccurate WordPress copy wholesale.

## Remaining external cutover safeguard

Search Console performance and coverage were reviewed and exported on August 27, 2026. GA4 access is unavailable and is not required for URL, indexing, or metadata parity. WordPress backend access is also not required for the public SEO comparison.

The remaining external safeguard is to keep the current WordPress site or a complete backup available after cutover. The site owner confirmed that the WordPress site will remain available. This protects against the small residual possibility of a URL that appeared in neither the public crawl nor the 16-month Search Console export.

The Search Console export was used to identify the pages that already earn impressions and clicks. Those pages received the most conservative metadata and heading treatment. GA4 data was unavailable, so call and appointment-conversion history was not part of this audit.

## Pre-cutover checklist

1. Produce and verify the WordPress backup.
2. Deploy the replacement to its preview hostname and test all 93 known legacy URLs:
   - 60 should return a successful page at the same path.
   - 33 should return one direct 301 to the documented destination.
3. Verify `/robots.txt`, `/sitemap.xml`, canonical tags, titles, descriptions, and structured data on the preview deployment.
4. Attach both the `www` and apex hostnames to the replacement project.
5. Configure an account-level Cloudflare redirect from the non-canonical hostname to `https://www.eastlandfamilydental.com`. Cloudflare Pages `_redirects` rules do not perform domain-level redirects.
6. Lower DNS TTL before the change if the DNS provider allows it.
7. Switch DNS only after the preview checks pass.
8. Keep the WordPress hosting and backup available for at least 30 days after launch.

## Post-launch monitoring

1. Submit `https://www.eastlandfamilydental.com/sitemap.xml` in Search Console.
2. Inspect the homepage and the highest-traffic procedure pages in Search Console.
3. Monitor 404s, redirect failures, indexing changes, impressions, clicks, and organic conversions daily during the first week and weekly for at least one month.
4. Add direct 301 rules for any additional legacy URLs found in Search Console, analytics, backlinks, or server logs.
5. Avoid redirect chains; every old URL should point directly to its final canonical destination.

## Automated protection in this repository

Run after a production build:

```sh
npm run audit:migration
```

The migration audit fails if an inventoried legacy URL is no longer available at the same path, lacks an exact 301 redirect, redirects to a non-indexable destination, or loses the legacy sitemap redirect.
