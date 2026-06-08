import type { Metadata } from "next";
import { BrandGallery } from "@/components/BrandGallery";
import { CallButton } from "@/components/CallButton";
import { EmailLink } from "@/components/EmailLink";
import { HoursList } from "@/components/HoursList";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { BreadcrumbTrail } from "@/components/BreadcrumbTrail";
import { businessInfo, imageAssets } from "@/data/site";
import { homeBreadcrumb } from "@/lib/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Ethicadent Dental Studio",
  description:
    "Call Ethicadent Dental Studio at (773)-657-3075 or visit 6418 W Belmont Ave, Chicago, IL 60634.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <BreadcrumbTrail
            items={homeBreadcrumb({ name: "Contact", path: "/contact" })}
          />
          <h1>Contact Ethicadent</h1>
          <p className="lead">
            Call the office for scheduling and visit questions. The website does
            not collect medical information or appointment requests.
          </p>
          <div className="cta-row">
            <CallButton>{businessInfo.phone}</CallButton>
            <a className="ghost-button" href={businessInfo.mapsHref}>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <BrandGallery
        ariaLabel="Ethicadent location photos"
        photos={[
          {
            src: imageAssets.googleMaps.belmontAvenueSign,
            alt: "Ethicadent sign at 6418 W Belmont Ave in Chicago",
            label: "6418 W Belmont Ave"
          },
          {
            src: imageAssets.googleMaps.waitingLounge,
            alt: "Ethicadent waiting lounge",
            label: "Comfortable waiting area"
          },
          {
            src: imageAssets.googleMaps.operatoryFull,
            alt: "Ethicadent dental treatment room",
            label: "Modern treatment room"
          }
        ]}
      />

      <section className="band">
        <div className="section-inner contact-grid">
          <div className="info-panel map-frame">
            <iframe
              title="Ethicadent Dental Studio map"
              loading="lazy"
              src="https://maps.google.com/maps?q=Ethicadent%2C%20Chicago&t=m&z=17&output=embed&iwloc=near"
            />
          </div>
          <div className="info-panel">
            <h3>Office Information</h3>
            <p>{businessInfo.address}</p>
            <p>
              <CallButton className="text-button">{businessInfo.phone}</CallButton>
            </p>
            <p>
              <EmailLink />
            </p>
            <h3>Business Hours</h3>
            <HoursList />
          </div>
        </div>
      </section>
      <PrivacyNotice />
    </>
  );
}
