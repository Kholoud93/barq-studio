import { HeroSection } from "@/components/home/hero-section";
import { CompanyIntro } from "@/components/home/company-intro";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Technologies } from "@/components/home/technologies";
import { DevelopmentProcess } from "@/components/home/development-process";
import { Statistics } from "@/components/home/statistics";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Testimonials } from "@/components/home/testimonials";
import { BlogPreview } from "@/components/home/blog-preview";
import { FAQ } from "@/components/home/faq";
import { ContactCTA } from "@/components/home/contact-cta";
import { FaqJsonLd } from "@/components/shared/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "BARQ STUDIO Egypt | Web Development, Apps & Digital Solutions",
  description:
    "BARQ STUDIO is a software studio in Egypt for websites, mobile apps, CRM systems, UI/UX, and AI automation — built for businesses that need real digital products.",
  path: "/",
  keywords: [
    "BARQ STUDIO Egypt",
    "برق ستوديو مصر",
    "software agency Egypt",
    "web development Egypt",
    "شركة برمجة في مصر",
    "تصميم مواقع إلكترونية مصر",
    "تطوير تطبيقات مصر",
  ],
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <HeroSection />
      <Statistics />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <DevelopmentProcess />
      <Technologies />
      <CompanyIntro />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <ContactCTA />
    </>
  );
}
