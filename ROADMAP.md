# Ethicadent Website Roadmap

A living document tracking what's been built and what we plan to build next for the
Ethicadent Dental Studio website. Completed items are marked with ✅.

_Last re-analyzed: June 10, 2026_

> **Guiding constraint:** The site is static-first and HIPAA-conscious. Anything that
> collects, stores, or transmits patient health information (forms, intake, portals,
> reminders, chat that captures symptoms) requires a separate HIPAA implementation pass
> with BAAs, access controls, logging, retention rules, and vendor review before it ships.
> Items below that touch PHI are flagged with ⚠️ **HIPAA review required**.

---

## Status Legend

- ✅ Completed
- 🚧 In progress
- ⏳ Planned (not started)
- ⚠️ Requires HIPAA review before build

---

## 1. Core Pages & Content

- ✅ Home page with hero, services, team, reviews, gallery, blog teaser, hours
- ✅ About page
- ✅ Services index page
- ✅ Service detail pages (General, Implants, Invisalign, Cosmetic, Whitening, Root Canal, Wisdom Teeth, Crown Lengthening, CBCT 3D Imaging) with overview, who-it's-for, process, benefits, aftercare, and FAQs
- ✅ Blog index + individual blog post pages with related-service links
- ✅ Contact page (call/directions/email, embedded map, location gallery — no PHI forms)
- ✅ New Patients page
- ✅ Insurance & Payment page
- ✅ Privacy Policy page
- ✅ Custom 404 / not-found page
- ⏳ Dedicated FAQ page aggregating all service FAQs in one place
- ⏳ Standalone "Meet Dr. Helin Derya Yildiz" bio page with credentials and photos
- ⏳ "Office Tour" page (photos + optional walkthrough video)
- ⏳ Emergency / same-day dental care page (high-intent search term)
- ⏳ Dental financing / membership plan page (if the practice offers one)
- ⏳ Neighborhood landing pages (Belmont, Portage Park, Dunning, Jefferson Park) for local SEO

## 2. SEO & Structured Data

- ✅ Per-page metadata helper (`lib/metadata.ts`) with canonical URLs
- ✅ Sitemap route (`app/sitemap.ts`)
- ✅ Robots route (`app/robots.ts`)
- ✅ LocalBusiness / Dentist schema (with aggregateRating + reviews)
- ✅ Service schema on every service page
- ✅ Article / BlogPosting schema on blog posts
- ✅ FAQ schema on service pages
- ✅ Breadcrumb schema + breadcrumb UI on inner pages
- ✅ Open Graph + Twitter card metadata with share image
- ✅ Per-service and per-post Open Graph images (service/blog pages pass their own `ogImage`)
- ✅ Old WordPress URL 301 redirects (`next.config.ts`)
- ⏳ Verify legacy redirect map covers *all* old WordPress URLs (crawl old site / Search Console)
- ⏳ Sitemap `lastModified` derived from real content dates (currently hardcoded to one date)
- ⏳ Real per-post publish dates (all blog posts currently share the same date) + separate `dateModified`
- ⏳ Dynamic OG image generation with `next/og` (branded card per page instead of photos)
- ⏳ Image sitemap entries for gallery and service photos
- ⏳ RSS/Atom feed for the blog
- ⏳ `Physician` / `MedicalBusiness` schema enrichment (accepted insurance, payment methods)
- ⏳ Google Business Profile alignment audit (NAP consistency)
- ⏳ `hreflang` tags (once Spanish pages exist)

## 3. Content Growth

- ✅ Initial blog library (general dentistry, implants, CBCT, Invisalign, whitening, root canal, cosmetic) with structured content blocks
- ⏳ Convert content to MDX for easier authoring
- ⏳ Editorial calendar: 1–2 new educational articles per month
- ⏳ Blog niceties: visible publish dates, estimated reading time, related-posts section
- ⏳ Spanish-language versions of key pages (large Chicago Spanish-speaking audience)
- ⏳ Patient education resource downloads (post-op care PDFs, pre-visit checklists)
- ⏳ Before/after cosmetic & Invisalign gallery (with consent + non-PHI handling)

## 4. Conversion & Engagement (privacy-safe)

- ✅ Click-to-call buttons throughout (header, hero, sidebars, footer, mobile menu)
- ✅ Get Directions links to Google Maps
- ✅ Email link paired with privacy warning
- ✅ Reviews section + Google review stats (featured on home + schema)
- ✅ Embedded Google Map on Contact page
- ✅ Photo gallery with lightbox (office, team, technology)
- ⏳ Sticky mobile "Call now" bar on scroll
- ⏳ Click-to-text (SMS) link for quick non-PHI questions
- ⏳ Insurance carrier logo strip ("We accept…")
- ⏳ Live Google reviews feed (auto-updating instead of static)
- ⏳ Online scheduling integration (e.g., NexHealth / LocalMed / Dental Intelligence) — ⚠️ **HIPAA review required**
- ⏳ Appointment request form — ⚠️ **HIPAA review required**
- ⏳ Live chat / chatbot — ⚠️ **HIPAA review required** (must not capture symptoms/PHI)

## 5. Analytics & Marketing

- ⏳ Privacy-safe analytics (Vercel Analytics or Plausible — no PII/PHI)
- ⏳ Vercel Speed Insights / Core Web Vitals tracking
- ⏳ Google Ads conversion tracking for call clicks & directions (non-PHI events only)
- ⏳ Call tracking numbers for ad attribution
- ⏳ Cookie consent / privacy banner (if analytics requires consent)
- ⏳ UTM-aware CTA tracking

## 6. UX, Design & Accessibility

- ✅ Responsive layout + accessible mobile menu (focus management, Escape to close, scroll lock, `aria-current`)
- ✅ Brand gallery component with lightbox and focus-visible styles
- ✅ Reusable ServiceCard, CallToAction, HoursList, Breadcrumb components
- ✅ `prefers-reduced-motion` support
- ⏳ Skip-to-content link
- ⏳ Full WCAG 2.2 AA accessibility audit + fixes (contrast, ARIA, keyboard nav across all pages)
- ⏳ Brand typography via `next/font` (currently default Arial/Helvetica stack)
- ⏳ Dark mode (optional)
- ⏳ Loading/skeleton states and refined image placeholders (blur-up)

## 7. Performance

- ✅ Static-first rendering (no DB, no env vars required to build; `generateStaticParams` for dynamic routes)
- ✅ Optimized images via `next/image` (responsive `sizes`, priority hero, lazy loading)
- ✅ Lazy-loaded map iframe on Contact page
- ⏳ Lighthouse score target: 95+ on all categories (run audit, fix findings)
- ⏳ Bundle size review
- ⏳ Convert source JPGs to modern formats / verify Vercel image optimization settings

## 8. Engineering, Quality & Ops

- ✅ TypeScript throughout, typed content models (`Service`, `BlogPost`, `TrustPage`)
- ✅ Centralized business data (`data/site.ts`) consumed by pages, schema, and metadata
- ✅ Playwright available as a dependency
- ⏳ Automated Playwright smoke tests (pages render, CTAs present, redirects work, no PHI forms)
- ⏳ CI pipeline (lint + typecheck + build + tests on PR) — no `.github/workflows` yet
- ⏳ Pin dependency versions (`next`, `react`, `typescript` currently use `latest`)
- ⏳ Security headers in `next.config.ts` (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`)
- ⏳ Proper favicon set + web app manifest (current favicon is a JPG; add ICO/PNG/SVG + `apple-touch-icon`)
- ⏳ Error monitoring (e.g., Sentry) — configured to exclude PHI
- ⏳ Automated link checker (catch broken internal/external links)
- ⏳ Repo housekeeping: exclude `media from the current website/` source assets from the deployed repo

---

## How to use this file

1. When you start a feature, change its ⏳ to 🚧.
2. When it ships, change it to ✅.
3. Add new ideas under the most relevant section.
4. Keep the ⚠️ HIPAA flag on anything that could touch patient health information until a
   compliance pass is completed.
