import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { businessInfo, imageAssets, navigation, serviceLinks } from "@/data/site";
import { localBusinessSchema } from "@/lib/schema";

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
    url: "/"
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
              <img className="brand-logo" src={imageAssets.logo} alt="Ethicadent" />
            </Link>
            <nav className="nav" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="header-actions">
              <span className="mobile-menu">Menu</span>
              <a className="button" href={businessInfo.phoneHref}>
                Call
              </a>
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
                <a href={businessInfo.phoneHref}>{businessInfo.phone}</a>
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
            <div>
              <h3>Visit</h3>
              <ul>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <a href={businessInfo.mapsHref}>Directions</a>
                </li>
                <li>
                  <a href={businessInfo.emailHref}>{businessInfo.email}</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Follow</h3>
              <ul>
                {businessInfo.social.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
