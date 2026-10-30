import { ContactContent } from "@/components/pages/contact-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Barq Studio",
  description:
    "Contact Barq Studio to start your web, mobile, or UI/UX project. Reach us by email, phone, or WhatsApp in Alexandria, Egypt.",
  path: "/contact",
  keywords: [
    "contact Barq Studio",
    "تواصل Barq Studio",
    "hire software agency Egypt",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
