import { ContactContent } from "@/components/pages/contact-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "تواصل مع برق ستوديو | Contact Barq Studio",
  description:
    "تواصل مع برق ستوديو لبدء مشروع ويب أو جوال أو تصميم UI/UX. راسلنا عبر البريد أو الهاتف أو واتساب من الإسكندرية، مصر.",
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
