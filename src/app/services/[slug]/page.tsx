import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/pages/service-detail-content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/shared/json-ld";
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
    description: `${service.seoDescription} ${service.seoDescriptionAr}`,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
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
        name={service.title}
        description={service.description}
        url={url}
        serviceType={service.title}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.title, url },
        ]}
      />
      <ServiceDetailContent service={service} />
    </>
  );
}
