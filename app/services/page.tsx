import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dental Services in Chicago",
  description:
    "Explore Ethicadent Dental Studio services including general dentistry, implants, Invisalign, cosmetic care, whitening, root canals, wisdom teeth extraction, crown lengthening, and CBCT imaging."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <h1>Dental Services in Chicago</h1>
          <p className="lead">
            Ethicadent offers a complete dental care foundation, from preventive
            visits and cosmetic improvements to implant planning, root canal
            therapy, wisdom teeth evaluation, and CBCT 3D imaging.
          </p>
        </div>
      </section>
      <section className="band soft">
        <div className="section-inner service-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              title={service.shortTitle}
              description={service.description}
              image={service.image}
              imageAlt={`${service.shortTitle} at Ethicadent`}
              actionLabel="Explore service"
            />
          ))}
        </div>
      </section>
      <CallToAction
        title="Not sure which service you need?"
        text="Call Ethicadent and describe the general concern. Save medical details for the direct conversation with the office team."
      />
    </>
  );
}
