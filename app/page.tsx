import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { HoursList } from "@/components/HoursList";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { blogPosts } from "@/data/blog";
import { businessInfo, featuredPhotoStory, imageAssets } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Chicago Dentist on Belmont Ave",
  description:
    "Ethicadent Dental Studio provides gentle general, cosmetic, implant, Invisalign, root canal, and 3D imaging dental care in Chicago."
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="section-inner hero-grid">
          <div>
            <h1>Your Trusted Chicago Dentist</h1>
            <p className="lead">
              Gentle, modern dental care from {businessInfo.doctor} and the
              Ethicadent team at {businessInfo.address}.
            </p>
            <div className="hero-actions">
              <a className="button" href={businessInfo.phoneHref}>
                Call the Office
              </a>
              <a className="ghost-button" href={businessInfo.mapsHref}>
                Get Directions
              </a>
            </div>
            <div className="hero-proof" aria-label="Practice highlights">
              <div className="proof-item">
                <strong>Modern</strong>
                <span>CBCT 3D imaging</span>
              </div>
              <div className="proof-item">
                <strong>Gentle</strong>
                <span>Compassionate visits</span>
              </div>
              <div className="proof-item">
                <strong>Local</strong>
                <span>Belmont Ave, Chicago</span>
              </div>
            </div>
          </div>
          <div className="photo-frame">
            <img src={imageAssets.hero} alt="Ethicadent clinician caring for a patient" />
            <div className="hero-card">
              <strong>Call-first scheduling</strong>
              <p>
                The v1 website avoids patient intake forms and keeps sensitive
                health information out of web submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft">
        <div className="section-inner section-head">
          <div>
            <h2>Comprehensive Dental Services</h2>
            <p>
              A stronger service architecture gives patients and search engines a
              clear path from symptoms to care.
            </p>
          </div>
          <Link className="text-button" href="/services">
            View all services
          </Link>
        </div>
        <div className="section-inner service-grid">
          {services.slice(0, 6).map((service) => (
            <Link className="service-card" key={service.slug} href={`/services/${service.slug}`}>
              <img src={service.image} alt={`${service.shortTitle} at Ethicadent`} />
              <h3>{service.shortTitle}</h3>
              <p>{service.description}</p>
              <span className="text-button">Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="section-inner split-grid">
          <div className="photo-frame">
            <img src={imageAssets.team} alt="Dr. Helin Derya Yildiz and the Ethicadent team" />
          </div>
          <div className="split-copy">
            <h2>Care led by Dr. Helin Derya Yildiz</h2>
            <p>
              Ethicadent is built around high-quality dentistry with a gentle,
              compassionate approach. The office combines modern technology with
              clear communication so patients understand their options.
            </p>
            <ul>
              <li>General, restorative, cosmetic, implant, and aligner care</li>
              <li>CBCT 3D imaging for advanced treatment planning when appropriate</li>
              <li>Local Chicago practice on Belmont Ave</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="brand-gallery" aria-label="Ethicadent office photos">
        <div className="section-inner section-head">
          <div>
            <h2>Real Care, Real Office Photos</h2>
            <p>
              Imported Google Maps photos help patients see the team, technology,
              and office environment before they call.
            </p>
          </div>
        </div>
        <div className="section-inner gallery-strip photo-story-grid">
          {featuredPhotoStory.map((photo) => (
            <figure key={photo.src} className="photo-story-card">
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <PrivacyNotice />

      <section className="band cool">
        <div className="section-inner section-head">
          <div>
            <h2>Dental Education That Supports Decisions</h2>
            <p>
              Reworked articles can answer high-intent patient questions while
              supporting service page authority.
            </p>
          </div>
          <Link className="text-button" href="/blog">
            Read the blog
          </Link>
        </div>
        <div className="section-inner blog-grid">
          {blogPosts.map((post) => (
            <Link className="blog-card" key={post.slug} href={`/blog/${post.slug}`}>
              <img src={post.image} alt="" />
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="section-inner contact-grid">
          <div className="split-copy">
            <h2>Visit Ethicadent on Belmont Ave</h2>
            <p>
              Call for scheduling and visit information. For patient privacy, do
              not send medical details through email.
            </p>
            <div className="cta-row">
              <a className="button" href={businessInfo.phoneHref}>
                {businessInfo.phone}
              </a>
              <a className="ghost-button" href={businessInfo.mapsHref}>
                Directions
              </a>
            </div>
          </div>
          <div className="info-panel">
            <h3>Business Hours</h3>
            <HoursList />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
