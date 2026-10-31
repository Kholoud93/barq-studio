import { ContactContent } from "@/components/pages/contact-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact BARQ STUDIO Egypt | Start a Software Project",
  description:
    "Contact BARQ STUDIO Egypt to start a website, mobile app, CRM, UI/UX, or AI automation project. Reach us by form, email, or WhatsApp.",
  path: "/contact",
  keywords: [
    "تواصل برق ستوديو مصر",
    "contact BARQ STUDIO Egypt",
    "hire software agency Egypt",
    "طلب عرض سعر تطوير مواقع",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
