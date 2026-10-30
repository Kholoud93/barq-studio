import { LegalContent } from "@/components/pages/legal-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms for using the BARQ STUDIO website and understanding how project scope, pricing, and portfolio labeling work.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalContent type="terms" />;
}
