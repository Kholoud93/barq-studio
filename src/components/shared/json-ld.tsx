import { siteConfig } from "@/lib/metadata";
import { services, type ServiceFaq } from "@/data/services";
import { faqs } from "@/data/faq";

export function OrganizationJsonLd() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "BARQ STUDIO",
    alternateName: [
      "BARQ STUDIO Egypt",
      "Barq Studio Digital Solutions",
      "Barq Studio Software Agency",
      "برق ستوديو",
      "برق ستوديو مصر",
      "استوديو برق للبرمجيات",
      siteConfig.nameAr,
    ],
    description: siteConfig.descriptionEn,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.jpg`,
      caption: `${siteConfig.nameAr} | ${siteConfig.name} Egypt`,
    },
    image: `${siteConfig.url}/og-image.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressRegion: "Egypt",
    },
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Place", name: "Middle East" },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs,
    slogan: siteConfig.tagline,
    foundingLocation: {
      "@type": "Place",
      name: "Egypt",
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "CRM Systems",
      "E-commerce Development",
      "AI Automation",
      "Custom Software",
      "تطوير مواقع",
      "تطوير تطبيقات الجوال",
      "تصميم UI UX",
      "برمجة مواقع مصر",
      "حلول رقمية للشركات",
    ],
    disambiguatingDescription:
      "BARQ STUDIO is a software and digital product studio in Egypt focused on websites, mobile apps, CRM systems, UI/UX, and AI automation — not a gaming studio or photography studio.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${siteConfig.name} Digital Services`,
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ["Arabic", "English"],
        areaServed: "EG",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        name: "WhatsApp",
        telephone: siteConfig.phone,
        url: siteConfig.whatsappUrl,
        availableLanguage: ["Arabic", "English"],
        areaServed: "EG",
      },
    ],
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
    name: "BARQ STUDIO Egypt",
    alternateName: [
      "BARQ STUDIO",
      "Barq Studio Digital Solutions",
      "برق ستوديو مصر",
      siteConfig.nameAr,
    ],
    url: siteConfig.url,
    description: siteConfig.descriptionEn,
    inLanguage: ["ar-EG", "en-US"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "CommunicateAction",
      target: `${siteConfig.url}/contact`,
      name: "Start a Project",
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
  url,
  serviceType,
}: {
  name: string;
  nameAr: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    alternateName: nameAr,
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
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      alternateName: ["BARQ STUDIO Egypt", siteConfig.nameAr],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceFaqJsonLd({ faqs: serviceFaqs }: { faqs: ServiceFaq[] }) {
  if (serviceFaqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.questionAr,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerAr,
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
