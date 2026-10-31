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
    "برق ستوديو (BARQ STUDIO) شركة برمجة وحلول رقمية في مصر — تطوير مواقع، تطبيقات جوال، متاجر إلكترونية، أنظمة CRM، تصميم UI/UX، وأتمتة بالذكاء الاصطناعي للشركات والشركات الناشئة.",
  descriptionEn:
    "BARQ STUDIO is a software development company in Egypt offering web development, mobile apps, e-commerce, custom CRM systems, UI/UX design, and AI automation for businesses and startups.",
  url: siteUrl.replace(/\/$/, ""),
  email: "kholouudaiman93@gmail.com",
  phone: "+20 12 00715693",
  whatsapp: "201200715693",
  whatsappUrl: "https://wa.me/201200715693",
  address: "Egypt",
  addressAr: "مصر",
  social: {
    github: "https://github.com/Kholoud93",
    whatsapp: "https://wa.me/201200715693",
    facebook: "https://www.facebook.com/people/Barq-Studio/61595850401122/",
  },
};

export function getWhatsAppUrl(message?: string) {
  if (!message) return siteConfig.whatsappUrl;
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
  noIndex = false,
  absoluteTitle = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
} = {}): Metadata {
  const defaultTitle =
    "BARQ STUDIO Egypt | Software Development Company in Egypt";
  const pageDescription = description || siteConfig.descriptionEn;
  const normalizedPath = path === "/" ? "" : path;
  const canonical = `${siteConfig.url}${normalizedPath}`;
  const ogImage = image || "/og-image.jpg";
  const allKeywords = Array.from(new Set([...siteKeywords, ...keywords]));

  const hasBrandInTitle = Boolean(
    title &&
      (title.includes(siteConfig.name) || title.includes(siteConfig.nameAr))
  );

  const finalTitle = !title
    ? defaultTitle
    : absoluteTitle || hasBrandInTitle
      ? title
      : `${title} | ${siteConfig.name}`;

  const resolvedTitle: Metadata["title"] = title
    ? { absolute: finalTitle }
    : {
        default: defaultTitle,
        template: `%s | ${siteConfig.name}`,
      };

  const socialTitle = finalTitle;

  return {
    title: resolvedTitle,
    description: pageDescription,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
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
          alt: `${siteConfig.name} Egypt — software development company`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
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
    },
  };
}
