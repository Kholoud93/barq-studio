import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";
import { SeoPositioning } from "@/components/home/seo-positioning";
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
import { FaqJsonLd } from "@/components/shared/json-ld";
import { createMetadata } from "@/lib/metadata";

const ContactCTA = dynamic(
  () =>
    import("@/components/home/contact-cta").then((mod) => ({
      default: mod.ContactCTA,
    })),
  { ssr: true }
);

export const metadata = createMetadata({
  title: "BARQ STUDIO Egypt | Software Development Company in Egypt",
  description:
    "BARQ STUDIO (برق ستوديو) is a software development company in Egypt — web development, mobile apps, e-commerce, custom CRM, UI/UX, and AI automation for growing businesses.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Software Development Company Egypt",
    "Web Development Company Egypt",
    "شركة برمجة في مصر",
    "شركة تصميم مواقع في مصر",
    "Mobile App Development Egypt",
    "E-commerce Development Egypt",
    "Custom CRM Development",
    "AI Automation Services Egypt",
  ],
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <HeroSection />
      <SeoPositioning />
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
