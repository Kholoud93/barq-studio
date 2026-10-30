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
  name: "Barq Studio",
  shortName: "Barq",
  nameAr: "برق ستوديو",
  tagline: "سرعة التنفيذ .. قوة الأثر",
  description:
    "برق ستوديو (Barq Studio) وكالة برمجيات في الإسكندرية، مصر — تطوير مواقع ويب، تطبيقات جوال، أنظمة خلفية، وتصميم UI/UX للشركات والمؤسسات.",
  descriptionEn:
    "Barq Studio (برق ستوديو) is a premium software agency in Alexandria, Egypt delivering enterprise web development, mobile apps, backend systems, and UI/UX design.",
  url: siteUrl,
  email: "kholouudaiman93@gmail.com",
  phone: "+20 12 00715693",
  whatsapp: "201200715693",
  address: "Alexandria, Egypt",
  social: {
    linkedin: "https://linkedin.com/company/barqstudio",
    twitter: "https://twitter.com/barqstudio",
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
    ? title.includes(siteConfig.name) || title.includes(siteConfig.nameAr)
      ? title
      : `${title} | ${siteConfig.nameAr} | ${siteConfig.name}`
    : `${siteConfig.nameAr} | ${siteConfig.name} — تطوير ويب وتطبيقات وتصميم UI/UX`;
  const pageDescription = description || siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;
  const ogImage = image || "/og-image.svg";
  const allKeywords = Array.from(new Set([...siteKeywords, ...keywords]));

  return {
    title: {
      default: pageTitle,
      template: `%s | ${siteConfig.nameAr} | ${siteConfig.name}`,
    },
    description: pageDescription,
    applicationName: `${siteConfig.name} | ${siteConfig.nameAr}`,
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
      siteName: `${siteConfig.nameAr} | ${siteConfig.name}`,
      type: "website",
      locale: "ar_EG",
      alternateLocale: ["en_US"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.nameAr} | ${siteConfig.name} — وكالة حلول رقمية`,
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
      "geo.position": "31.2001;29.9187",
      ICBM: "31.2001, 29.9187",
    },
  };
}
