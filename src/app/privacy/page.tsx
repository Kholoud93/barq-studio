import { LegalContent } from "@/components/pages/legal-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How BARQ STUDIO handles contact inquiries and personal information shared through the website, email, and WhatsApp.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalContent type="privacy" />;
}
