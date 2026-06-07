# Ethicadent Website Rebuild Direction

## Project Goal

Rebuild Ethicadent Dental Studio as a static-first, SEO-rich dental website for Chicago patients. The new site should improve organic search visibility, support Google Ads with privacy-safe conversion signals, and reduce the maintenance/security burden of the current WordPress/Elementor site.

## Preserved Practice Facts

- Practice name: Ethicadent Dental Studio / Ethicadent Dental Office
- Dentist: Dr. Helin Derya Yildiz
- Address: 6418 W Belmont Ave, Chicago, IL 60634
- Phone: (773)-657-3075
- Email: yildiz@ethicadent.com
- Hours: Monday 9:00 AM-5:00 PM, Tuesday 9:00 AM-5:00 PM, Wednesday 9:00 AM-1:00 PM, Thursday 9:00 AM-5:00 PM, Friday 9:00 AM-4:00 PM, Saturday 9:00 AM-1:00 PM, Sunday closed
- Social links: Facebook, Instagram, Yelp

## Technical Direction

- Framework: Next.js App Router on Vercel
- Rendering: static-first pages and metadata
- Content workflow: code-managed content, suitable for future MDX conversion
- Database: none in v1
- Patient intake: none in v1
- CTAs: phone call, directions, and email with a visible privacy warning
- Analytics: conservative, non-PHI events only

## HIPAA And Privacy Posture

The v1 site must not collect, store, or transmit patient health information. There are no appointment request forms, no patient portal, no database tables, and no custom API endpoints that receive patient data.

Email links must be paired with a plain-language warning telling visitors not to send medical details or sensitive health information by email. If the practice later wants appointment forms, patient intake, reminders, or admin workflows, those features require a separate HIPAA implementation pass with BAAs, access controls, logging, retention rules, and vendor review.

## SEO Architecture

Core pages:

- `/`
- `/about`
- `/services`
- `/services/general-dentistry`
- `/services/dental-implants`
- `/services/invisalign`
- `/services/cosmetic-dentistry`
- `/services/teeth-whitening`
- `/services/root-canal-therapy`
- `/services/wisdom-teeth-extraction`
- `/services/crown-lengthening`
- `/services/cbct-3d-imaging`
- `/contact`
- `/blog`

Redirect old WordPress article URLs to the closest modern service or article page.

## Content Direction

Each service page should explain who the service is for, common signs or patient needs, the treatment process, technology and comfort considerations, benefits, aftercare where relevant, FAQs, and a call CTA.

The old blog posts should be rewritten into higher-quality educational content rather than copied verbatim. Local copy should reference Chicago, Belmont Ave, and nearby patient context naturally without keyword stuffing.

## Verification Checklist

- Build succeeds without database or environment variables
- Sitemap and robots routes render
- Canonicals and metadata are unique
- LocalBusiness/Dentist schema is present
- Service pages include FAQ content
- No forms or PHI-collecting endpoints exist
- Call, directions, and email CTAs work
- Old URLs redirect
- Mobile nav and responsive layouts are usable

