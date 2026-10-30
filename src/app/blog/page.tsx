import { BlogContent } from "@/components/pages/blog-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Insights & Ideas | BARQ STUDIO",
  description:
    "Practical guides and ideas about web development, mobile apps, CRM systems, UX design, and digital growth from BARQ STUDIO in Egypt.",
  path: "/blog",
  keywords: [
    "web development insights",
    "نصائح تطوير مواقع",
    "digital transformation Egypt",
    "BARQ STUDIO blog",
  ],
});

export default function BlogPage() {
  return <BlogContent />;
}
