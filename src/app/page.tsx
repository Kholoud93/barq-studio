import { HeroSection } from "@/components/home/hero-section";
import { CompanyIntro } from "@/components/home/company-intro";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Technologies } from "@/components/home/technologies";
import { DevelopmentProcess } from "@/components/home/development-process";
import { Statistics } from "@/components/home/statistics";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { ContactCTA } from "@/components/home/contact-cta";
import { FaqJsonLd } from "@/components/shared/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  description:
    "برق ستوديو (Barq Studio) — وكالة برمجيات في الإسكندرية. تطوير مواقع ويب، تطبيقات جوال، أنظمة خلفية، وتصميم UI/UX للشركات في مصر والشرق الأوسط.",
  path: "/",
  keywords: [
    "برق",
    "برق ستوديو",
    "Barq Studio",
    "Barq",
    "شركة برمجيات مصر",
    "تطوير مواقع الإسكندرية",
    "تطوير تطبيقات الجوال مصر",
  ],
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <HeroSection />
      <CompanyIntro />
      <ServicesSection />
      <WhyChooseUs />
      <Technologies />
      <DevelopmentProcess />
      <Statistics />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
