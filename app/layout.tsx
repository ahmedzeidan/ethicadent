import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { CallButton } from "@/components/CallButton";
import { emailPrivacyWarning } from "@/components/EmailLink";
import { FooterCopyright } from "@/components/FooterCopyright";
import { ContentImage } from "@/components/ContentImage";
import { MobileMenu } from "@/components/MobileMenu";
import { SocialLinks } from "@/components/SocialLinks";
import { PhoneIcon } from "@/components/icons";
import { businessInfo, imageAssets, navigation, patientInfoLinks, serviceLinks } from "@/data/site";
import { localBusinessSchema } from "@/lib/schema";
import { defaultOgAlt, defaultOgImage } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ethicadent.com"),
  title: {
    default: "Ethicadent Dental Studio | Chicago Dentist on Belmont Ave",
    template: "%s | Ethicadent Dental Studio"
  },
  description:
    "Ethicadent Dental Studio provides gentle, modern general, cosmetic, implant, Invisalign, and root canal dentistry in Chicago.",
  icons: {
    icon: imageAssets.favicon,
    shortcut: imageAssets.favicon,
    apple: imageAssets.favicon
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ethicadent Dental Studio",
    title: "Ethicadent Dental Studio | Chicago Dentist on Belmont Ave",
    description:
      "Gentle, modern dental care from Dr. Helin Derya Yildiz at 6418 W Belmont Ave in Chicago.",
    url: "/",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: defaultOgAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethicadent Dental Studio | Chicago Dentist on Belmont Ave",
    description:
      "Gentle, modern dental care from Dr. Helin Derya Yildiz at 6418 W Belmont Ave in Chicago.",
    images: [defaultOgImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <header className="site-header">
          <div className="header-inner">
            <Link className="brand" href="/" aria-label="Ethicadent home">
              <ContentImage src={imageAssets.logo} alt="Ethicadent" variant="logo" />
            </Link>
            <nav className="nav" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="header-actions">
              <CallButton className="button header-call">Call</CallButton>
              <MobileMenu />
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="section-inner footer-grid">
            <div>
              <h2>Ethicadent Dental Studio</h2>
              <p>
                Gentle, modern dental care with Dr. Helin Derya Yildiz at{" "}
                {businessInfo.address}.
              </p>
              <p>
                <a className="footer-phone-link" href={businessInfo.phoneHref}>
                  <PhoneIcon />
                  {businessInfo.phone}
                </a>
              </p>
            </div>
            <div>
              <h3>Services</h3>
              <ul>
                {serviceLinks.slice(0, 5).map((service) => (
                  <li key={service.href}>
                    <Link href={service.href}>{service.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links-block">
              <h3>Patient Info</h3>
              <ul>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {patientInfoLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <a href={businessInfo.mapsHref}>Directions</a>
                </li>
                <li>
                  <a
                    href={businessInfo.emailHref}
                    aria-label={`Email office. ${emailPrivacyWarning}`}
                  >
                    {businessInfo.email}
                  </a>
                </li>
              </ul>
              <p className="footer-email-note">{emailPrivacyWarning}</p>
            </div>
            <div>
              <h3>Follow</h3>
              <SocialLinks />
            </div>
          </div>
          <div className="section-inner footer-copyright-bar">
            <FooterCopyright />
          </div>
        </footer>
      </body>
    </html>
  );
}
