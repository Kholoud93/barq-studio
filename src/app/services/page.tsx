import { ServicesContent } from "@/components/pages/services-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "خدمات برق ستوديو — ويب، جوال، خلفية و UI/UX",
  description:
    "خدمات برق ستوديو: تطوير واجهات أمامية، أنظمة خلفية وواجهات برمجة، تطبيقات جوال بـ React Native، وتصميم UI/UX للشركات في مصر والشرق الأوسط.",
  path: "/services",
  keywords: [
    "خدمات برق ستوديو",
    "خدمات تطوير برمجيات",
    "تطوير مواقع وتطبيقات",
    "تطوير واجهات أمامية",
    "تطوير تطبيقات الجوال",
    "تصميم UI UX مصر",
  ],
});

export default function ServicesPage() {
  return <ServicesContent />;
}
