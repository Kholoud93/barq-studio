import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/pages/service-detail-content";
import {
  BreadcrumbJsonLd,
  ServiceFaqJsonLd,
  ServiceJsonLd,
} from "@/components/shared/json-ld";
import { services, getServiceBySlug } from "@/data/services";
import { createMetadata, siteConfig } from "@/lib/metadata";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    absoluteTitle: true,
    keywords: [
      ...service.keywords,
      "BARQ STUDIO Egypt",
      "شركة برمجة في مصر",
      service.titleAr,
      service.title,
    ],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const url = `${siteConfig.url}/services/${service.slug}`;

  return (
    <>
      <ServiceJsonLd
        name={service.h1}
        nameAr={service.h1Ar}
        description={service.seoDescription}
        url={url}
        serviceType={service.title}
      />
      <ServiceFaqJsonLd faqs={service.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", url: siteConfig.url },
          { name: "الخدمات", url: `${siteConfig.url}/services` },
          { name: service.h1Ar, url },
        ]}
      />
      <ServiceDetailContent service={service} />
    </>
  );
}
