import type { Metadata } from "next";
import Link from "next/link";
import { BrandGallery } from "@/components/BrandGallery";
import { CallToAction } from "@/components/CallToAction";
import { CallButton } from "@/components/CallButton";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServiceCard } from "@/components/ServiceCard";
import { HoursList } from "@/components/HoursList";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { blogPosts } from "@/data/blog";
import { googleReviewStats } from "@/data/reviews";
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
              <CallButton>Call the Office</CallButton>
              <a className="ghost-button" href={businessInfo.mapsHref}>
                Get Directions
              </a>
            </div>
            <div className="hero-proof" aria-label="Practice highlights">
              <div className="proof-item">
                <strong>{googleReviewStats.rating}★ rated</strong>
                <span>{googleReviewStats.count}+ Google reviews</span>
              </div>
              <div className="proof-item">
                <strong>Comfort-first</strong>
                <span>Gentle care for anxious patients</span>
              </div>
              <div className="proof-item">
                <strong>Full-service</strong>
                <span>Implants, Invisalign & more</span>
              </div>
            </div>
          </div>
          <div className="photo-frame">
            <img src={imageAssets.hero} alt="Ethicadent clinician caring for a patient" />
          </div>
        </div>
      </section>

      <section className="band soft">
        <div className="section-inner section-head">
          <div>
            <h2>Comprehensive Dental Services</h2>
            <p>
              From preventive cleanings to implants and Invisalign, find the care
              that fits your needs.
            </p>
          </div>
          <Link className="text-button" href="/services">
            View all services
          </Link>
        </div>
        <div className="section-inner service-grid">
          {services.slice(0, 6).map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              title={service.shortTitle}
              description={service.description}
              image={service.image}
              imageAlt={`${service.shortTitle} at Ethicadent`}
              actionLabel="Learn more"
            />
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

      <ReviewsSection />

      <BrandGallery
        ariaLabel="Ethicadent office photos"
        title="Real Care, Real Office Photos"
        description="See the team, technology, and office environment before your visit."
        photos={featuredPhotoStory}
      />

      <PrivacyNotice />

      <section className="band cool">
        <div className="section-inner section-head">
          <div>
            <h2>Dental Education That Supports Decisions</h2>
            <p>
              Practical guides on common dental topics to help you make informed
              decisions about your care.
            </p>
          </div>
          <Link className="text-button" href="/blog">
            Read the blog
          </Link>
        </div>
        <div className="section-inner blog-grid">
          {blogPosts.slice(0, 3).map((post) => (
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
              <CallButton>{businessInfo.phone}</CallButton>
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
