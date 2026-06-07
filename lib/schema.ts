import { baseUrl, businessInfo } from "@/data/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  "@id": `${baseUrl}/#organization`,
  name: businessInfo.name,
  alternateName: businessInfo.alternateName,
  url: baseUrl,
  telephone: businessInfo.phoneSchema,
  email: businessInfo.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.streetAddress,
    addressLocality: businessInfo.city,
    addressRegion: businessInfo.region,
    postalCode: businessInfo.postalCode,
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.latitude,
    longitude: businessInfo.longitude
  },
  openingHoursSpecification: businessInfo.hours
    .filter((item) => "opens" in item)
    .map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.schemaDay,
      opens: item.opens,
      closes: item.closes
    })),
  sameAs: businessInfo.social.map((item) => item.href),
  medicalSpecialty: ["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics"],
  founder: {
    "@type": "Person",
    name: businessInfo.doctor
  }
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed: {
      "@type": "City",
      name: "Chicago"
    },
    provider: {
      "@id": `${baseUrl}/#organization`
    },
    url: `${baseUrl}${path}`
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

