import { ContactContent } from "@/components/pages/contact-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact BARQ STUDIO | Start a Project",
  description:
    "Tell BARQ STUDIO about your website, mobile app, CRM, UI/UX, or AI automation idea. Reach us by form, email, or WhatsApp.",
  path: "/contact",
  keywords: [
    "تواصل برق ستوديو",
    "رقم برق ستوديو",
    "contact Barq Studio",
    "hire software agency Egypt",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
