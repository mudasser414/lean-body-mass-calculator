# Lean Body Mass Calculator

Production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS site for the
lean-body-mass calculator niche. SEO-first, statically generated, mobile-first.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered)
npm start
```

Before deploying, set your real domain in `src/lib/site.ts` (`url`). Canonical
tags, Open Graph, sitemap, and robots all read from it.

## Architecture

- **`src/lib/pages.ts`** — single source of truth for every static page: URL,
  titles, meta, and the internal-link graph. Navbar, footer, related-links,
  breadcrumbs, and the sitemap all read from it. Add a page here and it wires
  itself into navigation, linking, and the sitemap automatically.
- **`src/lib/lbm.ts`** — pure calculator logic (Boer/James/Hume + unit conversion).
- **`src/lib/seo.ts`** — `buildMetadata()` + JSON-LD builders (WebApplication,
  FAQPage, BreadcrumbList, Article).
- **`src/lib/blog.ts` + `src/content/blog/*.md`** — file-based blog with
  frontmatter; posts are statically generated via `generateStaticParams`.

## Programmatic SEO

To add a tool/guide page: add one entry to the relevant array in `pages.ts`,
create `src/app/<section>/<slug>/page.tsx` using the `ContentPage` template, and
it's linked and in the sitemap. To scale to hundreds of pages, drive `ALL_PAGES`
from data (JSON/CMS) and render section routes with a `[slug]` dynamic segment
plus `generateStaticParams` — the same pattern already used for the blog.

## SEO features

- Per-page title, meta description, canonical, OG/Twitter tags
- WebApplication schema on calculator pages, FAQPage on FAQ + money page,
  BreadcrumbList site-wide, Article on blog posts
- Auto `sitemap.xml` and `robots.txt`
- Cross-section internal linking (tools ↔ guides ↔ blog ↔ faq)
- Semantic H1/H2/H3, breadcrumbs, skip-link, reduced-motion support
