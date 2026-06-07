import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/CallToAction";
import { businessInfo } from "@/data/site";
import { getService, services } from "@/data/services";
import { faqSchema, serviceSchema } from "@/lib/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service.title, service.description, `/services/${service.slug}`))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }}
      />
      <section className="page-hero detail-hero">
        <div className="section-inner">
          <h1>{service.title}</h1>
          <p className="lead">{service.description}</p>
          <div className="cta-row">
            <a className="button" href={businessInfo.phoneHref}>
              Call the Office
            </a>
            <a className="ghost-button" href={businessInfo.mapsHref}>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="section-inner service-detail-grid">
          <article className="service-body">
            <div className="photo-frame">
              <img src={service.image} alt={`${service.shortTitle} at Ethicadent`} />
            </div>
            <div className="content-block">
              <h2>Overview</h2>
              <p>{service.summary}</p>
            </div>
            <div className="content-block">
              <h2>Who It Is For</h2>
              <ul className="content-list">
                {service.whoItsFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="content-block">
              <h2>What to Expect</h2>
              <ul className="content-list">
                {service.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="content-block">
              <h2>Benefits</h2>
              <ul className="content-list">
                {service.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="content-block">
              <h2>Aftercare</h2>
              <p>{service.aftercare}</p>
            </div>
            <div className="content-block">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {service.faqs.map((faq) => (
                  <div className="faq-item" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <aside className="sidebar" aria-label="Service contact details">
            <div className="photo-frame sidebar-photo">
              <img src={service.image} alt="" />
            </div>
            <div className="info-panel">
              <h3>Schedule by phone</h3>
              <p>
                To protect privacy, this site does not collect appointment
                details or medical concerns through a form.
              </p>
              <a className="button" href={businessInfo.phoneHref}>
                {businessInfo.phone}
              </a>
            </div>
            <div className="info-panel">
              <h3>Location</h3>
              <p>{businessInfo.address}</p>
              <a className="text-button" href={businessInfo.mapsHref}>
                Open map
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CallToAction
        title={`Ask about ${service.shortTitle}`}
        text="Call Ethicadent to schedule a visit or learn whether this treatment is appropriate for your situation."
      />
    </>
  );
}
