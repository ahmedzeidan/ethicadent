import type { Metadata } from "next";
import { HoursList } from "@/components/HoursList";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { businessInfo, imageAssets } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Ethicadent Dental Studio",
  description:
    "Call Ethicadent Dental Studio at (773)-657-3075 or visit 6418 W Belmont Ave, Chicago, IL 60634."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <h1>Contact Ethicadent</h1>
          <p className="lead">
            Call the office for scheduling and visit questions. The website does
            not collect medical information or appointment requests.
          </p>
          <div className="cta-row">
            <a className="button" href={businessInfo.phoneHref}>
              {businessInfo.phone}
            </a>
            <a className="ghost-button" href={businessInfo.mapsHref}>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="brand-gallery" aria-label="Ethicadent location photos">
        <div className="section-inner gallery-strip">
          <figure className="photo-story-card">
            <img src={imageAssets.googleMaps.belmontAvenueSign} alt="Ethicadent sign at 6418 W Belmont Ave in Chicago" />
            <figcaption>6418 W Belmont Ave</figcaption>
          </figure>
          <figure className="photo-story-card">
            <img src={imageAssets.googleMaps.waitingLounge} alt="Ethicadent waiting lounge" />
            <figcaption>Comfortable waiting area</figcaption>
          </figure>
          <figure className="photo-story-card">
            <img src={imageAssets.googleMaps.operatoryFull} alt="Ethicadent dental treatment room" />
            <figcaption>Modern treatment room</figcaption>
          </figure>
        </div>
      </section>

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
              <a className="text-button" href={businessInfo.phoneHref}>
                {businessInfo.phone}
              </a>
            </p>
            <p>
              <a className="text-button" href={businessInfo.emailHref}>
                {businessInfo.email}
              </a>
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
