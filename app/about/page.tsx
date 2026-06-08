import type { Metadata } from "next";
import { BrandGallery } from "@/components/BrandGallery";
import { CallToAction } from "@/components/CallToAction";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { ServiceCard } from "@/components/ServiceCard";
import { ContentImage } from "@/components/ContentImage";
import { BreadcrumbTrail } from "@/components/BreadcrumbTrail";
import { businessInfo, imageAssets } from "@/data/site";
import { homeBreadcrumb } from "@/lib/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Dr. Helin Derya Yildiz",
  description:
    "Learn about Ethicadent Dental Studio, Dr. Helin Derya Yildiz, and the practice's gentle modern approach to Chicago dentistry.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <BreadcrumbTrail
            items={homeBreadcrumb({ name: "About", path: "/about" })}
          />
          <h1>About Ethicadent Dental Studio</h1>
          <p className="lead">
            A Chicago dental office where high-quality care, modern technology,
            and compassionate communication work together.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="section-inner split-grid">
          <div className="photo-frame photo-frame-split">
            <ContentImage src={imageAssets.banner} alt="Ethicadent dental studio" variant="split" />
          </div>
          <div className="split-copy">
            <h2>{businessInfo.doctor}</h2>
            <p>
              Dr. Yildiz and the Ethicadent team provide preventive, restorative,
              cosmetic, implant, and aligner care with a focus on patient comfort.
              The goal is to make each visit feel informed, respectful, and calm.
            </p>
            <ul>
              <li>Clear treatment recommendations without pressure</li>
              <li>Technology-supported diagnostics and planning</li>
              <li>Care for patients who value a gentle dental experience</li>
            </ul>
          </div>
        </div>
      </section>
      <BrandGallery
        ariaLabel="Ethicadent credentials and care photos"
        photos={[
          {
            src: imageAssets.googleMaps.dentalCertificate,
            alt: "Dr. Helin Derya Yildiz dental credential certificate",
            label: "Credentialed care"
          },
          {
            src: imageAssets.googleMaps.invisalignCertificate,
            alt: "Invisalign certificate for Dr. Helin Yildiz",
            label: "Invisalign experience"
          },
          {
            src: imageAssets.googleMaps.patientScreenReview,
            alt: "Patient reviewing dental images with the Ethicadent team",
            label: "Clear explanations"
          }
        ]}
      />
      <section className="band soft">
        <div className="section-inner section-head">
          <div>
            <h2>A Modern Local Practice</h2>
            <p>
              Ethicadent serves Chicago patients from {businessInfo.address}.
              Whether you need a routine cleaning or more advanced treatment,
              the team is here to help you feel confident about your care.
            </p>
          </div>
        </div>
        <div className="section-inner service-grid">
          <ServiceCard
            title="Compassionate care"
            description="Patients deserve to understand what is happening, why treatment is recommended, and what choices are available."
            image={imageAssets.googleMaps.closeCareVisit}
            imageAlt="Ethicadent clinician providing patient care"
            actionLabel=""
          />
          <ServiceCard
            title="Advanced planning"
            description="CBCT 3D imaging can support implant, surgical, endodontic, and complex diagnostic decisions when appropriate."
            image={imageAssets.googleMaps.cbctScanSmile}
            imageAlt="Patient positioned for CBCT 3D imaging at Ethicadent"
            actionLabel=""
          />
          <ServiceCard
            title="Comfortable environment"
            description="A welcoming waiting area and a team focused on making every visit feel calm and respectful."
            image={imageAssets.googleMaps.waitingLounge}
            imageAlt="Ethicadent comfortable waiting lounge for patients and families"
            actionLabel=""
          />
        </div>
      </section>
      <PrivacyNotice />
      <CallToAction />
    </>
  );
}
