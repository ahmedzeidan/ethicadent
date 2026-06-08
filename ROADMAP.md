# Ethicadent Website Roadmap

A living document tracking what's been built and what we plan to build next for the
Ethicadent Dental Studio website. Completed items are marked with ✅.

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
- ✅ Service detail pages (General, Implants, Invisalign, Cosmetic, Whitening, Root Canal, Wisdom Teeth, Crown Lengthening, CBCT 3D Imaging)
- ✅ Blog index + individual blog post pages
- ✅ Contact page (call/directions/email, no PHI forms)
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

- ✅ Per-page metadata helper (`lib/metadata.ts`)
- ✅ Canonical URLs
- ✅ Sitemap route (`app/sitemap.ts`)
- ✅ Robots route (`app/robots.ts`)
- ✅ LocalBusiness / Dentist schema (with aggregateRating + reviews)
- ✅ Service schema
- ✅ Article / BlogPosting schema
- ✅ FAQ schema
- ✅ Breadcrumb schema + breadcrumb UI
- ✅ Open Graph + Twitter card metadata with share image
- ⏳ Per-page / per-service Open Graph images (currently one shared image)
- ⏳ Image sitemap entries for gallery and service photos
- ⏳ Old WordPress URL redirect map (verify all legacy URLs 301 to closest page)
- ⏳ `Physician` / `MedicalBusiness` schema enrichment (accepted insurance, payment methods)
- ⏳ Google Business Profile alignment audit (NAP consistency)

## 3. Content Growth

- ✅ Initial blog library (general dentistry, implants, CBCT, Invisalign, whitening, root canal, cosmetic)
- ⏳ Convert content to MDX for easier authoring
- ⏳ Editorial calendar: 1–2 new educational articles per month
- ⏳ Spanish-language versions of key pages (large Chicago Spanish-speaking audience)
- ⏳ Patient education resource downloads (post-op care PDFs, pre-visit checklists)
- ⏳ Before/after cosmetic & Invisalign gallery (with consent + non-PHI handling)

## 4. Conversion & Engagement (privacy-safe)

- ✅ Click-to-call buttons throughout
- ✅ Get Directions links to Google Maps
- ✅ Email link paired with privacy warning
- ✅ Reviews section + Google review stats
- ⏳ Sticky mobile "Call now" bar on scroll
- ⏳ Click-to-text (SMS) link for quick non-PHI questions
- ⏳ Embedded Google Map on Contact page
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

- ✅ Responsive layout + mobile menu
- ✅ Brand gallery component
- ✅ Reusable Service cards, CTA, hours list components
- ⏳ WCAG 2.2 AA accessibility audit + fixes (contrast, focus states, ARIA, keyboard nav)
- ⏳ Skip-to-content link
- ⏳ Dark mode (optional)
- ⏳ Loading/skeleton states and refined image placeholders
- ⏳ Reduced-motion support for animations

## 7. Performance

- ✅ Static-first rendering (no DB, no env vars required to build)
- ⏳ Image optimization audit (formats, sizes, lazy loading via `next/image`)
- ⏳ Font loading optimization
- ⏳ Lighthouse score target: 95+ on all categories
- ⏳ Bundle size review

## 8. Engineering, Quality & Ops

- ✅ TypeScript throughout
- ✅ Playwright available as a dependency
- ⏳ Automated Playwright smoke tests (pages render, CTAs present, no PHI forms)
- ⏳ CI pipeline (lint + typecheck + build + tests on PR)
- ⏳ Pin dependency versions (currently several use `latest`)
- ⏳ Error monitoring (e.g., Sentry) — configured to exclude PHI
- ⏳ Preview deployments review checklist
- ⏳ Automated link checker (catch broken internal/external links)

---

## How to use this file

1. When you start a feature, change its ⏳ to 🚧.
2. When it ships, change it to ✅.
3. Add new ideas under the most relevant section.
4. Keep the ⚠️ HIPAA flag on anything that could touch patient health information until a
   compliance pass is completed.
