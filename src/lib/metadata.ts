import type { Metadata } from "next";
import { siteKeywords } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visionhub.dev";

export const siteConfig = {
  name: "Vision Hub",
  shortName: "VisionHub",
  tagline: "نحو رؤية رقمية .. نصنع الفرق",
  description:
    "Vision Hub (فيجن هب) is a premium software agency in Egypt delivering enterprise web development, mobile apps, backend systems, and UI/UX design for ambitious businesses.",
  descriptionAr:
    "فيجن هب Vision Hub وكالة برمجيات متميزة في مصر تقدم تطوير مواقع ويب وتطبيقات جوال وأنظمة خلفية وتصميم UI/UX للشركات الطموحة.",
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
  keywords = [],
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title
    ? title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | VisionHub — Web, Mobile & UI/UX Agency`;
  const pageDescription = description || siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;
  const ogImage = image || "/og-image.svg";
  const allKeywords = Array.from(new Set([...siteKeywords, ...keywords]));

  return {
    title: {
      default: pageTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: pageDescription,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: {
        "ar-EG": canonical,
        "en-US": canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: `${siteConfig.name} | VisionHub`,
      type: "website",
      locale: "ar_EG",
      alternateLocale: ["en_US"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Digital Solutions Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    keywords: allKeywords,
    other: {
      "geo.region": "EG-ALX",
      "geo.placename": "Alexandria",
    },
  };
}
