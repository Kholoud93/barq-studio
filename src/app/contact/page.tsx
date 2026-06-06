import { ContactContent } from "@/components/pages/contact-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Vision Hub to discuss your next software project.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
