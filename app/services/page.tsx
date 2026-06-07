import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
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
            <Link className="service-card" key={service.slug} href={`/services/${service.slug}`}>
              <img src={service.image} alt={`${service.shortTitle} at Ethicadent`} />
              <h3>{service.shortTitle}</h3>
              <p>{service.description}</p>
              <span className="text-button">Explore service</span>
            </Link>
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
