"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useApp } from "@/providers/app-provider";

export function FAQ() {
  const { t } = useApp();

  return (
    <AnimatedSection className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.faq.badge}
          title={t.faq.title}
          description={t.faq.description}
        />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((faq, index) => (
              <AccordionItem key={index} value={String(index)}>
                <AccordionTrigger className="rtl:text-right">{faq.question}</AccordionTrigger>
                <AccordionContent className="rtl:text-right">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  );
}
