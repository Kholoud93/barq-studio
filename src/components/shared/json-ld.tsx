import { siteConfig } from "@/lib/metadata";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alexandria",
      addressCountry: "EG",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    slogan: siteConfig.tagline,
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Enterprise Software",
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
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
