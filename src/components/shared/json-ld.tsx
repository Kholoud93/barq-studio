import { siteConfig } from "@/lib/metadata";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";

export function OrganizationJsonLd() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    alternateName: [
      "Barq",
      "Barq Studio Digital Solutions",
      "برق ستوديو",
      "برق",
      siteConfig.nameAr,
    ],
    description: siteConfig.descriptionEn,
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
      addressCountry: "EG",
    },
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Place", name: "Middle East" },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs,
    slogan: siteConfig.tagline,
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "CRM Systems",
      "E-commerce Development",
      "AI Automation",
      "تطوير مواقع",
      "تطوير تطبيقات الجوال",
      "تصميم UI UX",
      "برمجة مواقع مصر",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${siteConfig.name} Services`,
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
    alternateName: ["Barq", "برق ستوديو", siteConfig.nameAr],
    url: siteConfig.url,
    description: siteConfig.descriptionEn,
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
    inLanguage: ["ar-EG", "en-US"],
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.questionEn,
      alternateName: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerEn,
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
    name,
    alternateName: nameAr,
    description: `${description} ${descriptionAr}`,
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

export function ArticleJsonLd({
  title,
  titleAr,
  description,
  descriptionAr,
  url,
  image,
  publishedAt,
}: {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  url: string;
  image: string;
  publishedAt: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    alternateName: titleAr,
    description,
    inLanguage: ["en-US", "ar-EG"],
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: url,
    about: descriptionAr,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
