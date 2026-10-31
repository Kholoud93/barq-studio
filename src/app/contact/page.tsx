import { ContactContent } from "@/components/pages/contact-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact BARQ STUDIO Egypt | Hire a Software Development Company",
  description:
    "Contact BARQ STUDIO Egypt to start web development, mobile app development, e-commerce, custom CRM, UI/UX, or AI automation. WhatsApp, email, and form available.",
  path: "/contact",
  absoluteTitle: true,
  keywords: [
    "Contact BARQ STUDIO Egypt",
    "hire software development company Egypt",
    "تواصل برق ستوديو مصر",
    "طلب عرض سعر شركة برمجة",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
