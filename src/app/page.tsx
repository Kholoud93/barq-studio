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

export default function HomePage() {
  return (
    <>
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
