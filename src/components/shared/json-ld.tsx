import { siteConfig } from "@/lib/metadata";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    alternateName: [
      "Barq",
      "Barq Studio Digital Solutions",
      "برق ستوديو",
      "برق",
      "شركة برق ستوديو",
      "وكالة برق ستوديو",
      siteConfig.nameAr,
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.svg`,
      caption: `${siteConfig.nameAr} | ${siteConfig.name}`,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.2001,
      longitude: 29.9187,
    },
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "AdministrativeArea", name: "Alexandria" },
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
    foundingLocation: {
      "@type": "Place",
      name: "Alexandria, Egypt",
    },
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Mobile App Development",
      "UI/UX Design",
      "Enterprise Software",
      "SaaS Development",
      "CRM Systems",
      "تطوير مواقع",
      "تطوير تطبيقات الجوال",
      "تصميم UI UX",
      "تطوير واجهات أمامية",
      "تطوير خلفية",
      "برمجة مواقع مصر",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `خدمات ${siteConfig.nameAr}`,
      alternateName: "Barq Studio Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.titleAr,
          alternateName: service.title,
          description: service.descriptionAr,
          url: `${siteConfig.url}/services/${service.slug}`,
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
          areaServed: "EG",
          serviceType: service.titleAr,
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
    alternateName: ["Barq", "برق ستوديو", "برق", siteConfig.nameAr],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["ar-EG", "en-US"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
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
    inLanguage: "ar-EG",
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
  nameAr,
  description,
  descriptionAr,
  url,
  serviceType,
}: {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  url: string;
  serviceType: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nameAr,
    alternateName: name,
    description: `${descriptionAr} ${description}`,
    url,
    serviceType,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Egypt",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      {
        "@type": "Place",
        name: "Middle East",
      },
    ],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      alternateName: siteConfig.nameAr,
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
