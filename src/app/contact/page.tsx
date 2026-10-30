import { ContactContent } from "@/components/pages/contact-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Vision Hub",
  description:
    "Contact Vision Hub to start your web, mobile, or UI/UX project. Reach us by email, phone, or WhatsApp in Alexandria, Egypt.",
  path: "/contact",
  keywords: [
    "contact Vision Hub",
    "تواصل Vision Hub",
    "hire software agency Egypt",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
