import type { Metadata } from "next";
import { siteKeywords } from "@/lib/seo";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const siteConfig = {
  name: "BARQ STUDIO",
  shortName: "BARQ",
  nameAr: "برق ستوديو",
  tagline: "Turn Ideas Into Reality.",
  taglineAr: "نحوّل الأفكار إلى واقع.",
  description:
    "برق ستوديو (BARQ STUDIO) استوديو حلول رقمية وبرمجيات في مصر — تطوير مواقع ويب وتطبيقات جوال وأنظمة CRM وتصميم UI/UX وأتمتة بالذكاء الاصطناعي للشركات.",
  descriptionEn:
    "BARQ STUDIO is a software and digital solutions studio in Egypt specializing in web development, mobile apps, CRM systems, UI/UX design, and AI automation for growing businesses.",
  url: siteUrl.replace(/\/$/, ""),
  email: "kholouudaiman93@gmail.com",
  phone: "+20 12 00715693",
  whatsapp: "201200715693",
  address: "Egypt",
  addressAr: "مصر",
  social: {
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
  const defaultTitle =
    "BARQ STUDIO Egypt | Web Development, Apps & Digital Solutions";
  const pageTitle = title
    ? title.includes(siteConfig.name) || title.includes(siteConfig.nameAr)
      ? title
      : `${title} | ${siteConfig.name}`
    : defaultTitle;
  const pageDescription = description || siteConfig.descriptionEn;
  const normalizedPath = path === "/" ? "" : path;
  const canonical = `${siteConfig.url}${normalizedPath}`;
  const ogImage = image || "/og-image.svg";
  const allKeywords = Array.from(new Set([...siteKeywords, ...keywords]));

  return {
    title: {
      default: pageTitle,
      template: `%s | ${siteConfig.name} Egypt`,
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
      siteName: `${siteConfig.name} Egypt`,
      type: "website",
      locale: "en_US",
      alternateLocale: ["ar_EG"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Egypt — software & digital solutions studio`,
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
      "geo.region": "EG",
      "geo.placename": "Egypt",
      "og:locale:alternate": "ar_EG",
    },
  };
}
