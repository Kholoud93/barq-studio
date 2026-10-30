import { siteConfig } from "@/lib/metadata";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [
      "VisionHub",
      "Vision Hub Digital Solutions",
      "فيجن هب",
      "فيجن هاب",
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.svg`,
    },
    image: `${siteConfig.url}/og-image.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alexandria",
      addressRegion: "Alexandria",
      addressCountry: "EG",
    },
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Place", name: "Middle East" },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    slogan: siteConfig.tagline,
    priceRange: "$$",
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Mobile App Development",
      "UI/UX Design",
      "Enterprise Software",
      "SaaS Development",
      "CRM Systems",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vision Hub Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          alternateName: service.titleAr,
          description: service.description,
          url: `${siteConfig.url}/services/${service.slug}`,
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
          areaServed: "EG",
          serviceType: service.title,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: ["VisionHub", "فيجن هب"],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["ar", "en"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
