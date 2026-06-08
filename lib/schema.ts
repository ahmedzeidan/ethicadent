import { featuredReviews, googleReviewStats } from "@/data/reviews";
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
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: googleReviewStats.rating.toString(),
    reviewCount: googleReviewStats.count.toString(),
    bestRating: "5",
    worstRating: "1"
  },
  review: featuredReviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1"
    },
    reviewBody: review.text
  }))
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

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${baseUrl}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}${article.path}`
    },
    author: {
      "@type": "Person",
      name: businessInfo.doctor
    },
    publisher: {
      "@id": `${baseUrl}/#organization`
    }
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

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };
}

