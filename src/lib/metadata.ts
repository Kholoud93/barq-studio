import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visionhub.dev";

export const siteConfig = {
  name: "Vision Hub",
  tagline: "نحو رؤية رقمية .. نصنع الفرق",
  description:
    "Vision Hub is a premium software agency delivering enterprise-grade web, mobile, and digital solutions for ambitious businesses worldwide.",
  url: siteUrl,
  email: "kholouudaiman93@gmail.com",
  phone: "+20 12 00715693",
  whatsapp: "201200715693",
  address: "Alexandria, Egypt",
  social: {
    linkedin: "https://linkedin.com/company/visionhub",
    twitter: "https://twitter.com/visionhub",
    github: "https://github.com/Kholoud93",
  },
};

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Digital Solutions Agency`;
  const pageDescription = description || siteConfig.description;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/og-image.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "software agency",
      "web development",
      "mobile development",
      "UI UX design",
      "enterprise software",
      "Saudi Arabia",
      "Vision Hub",
    ],
  };
}
