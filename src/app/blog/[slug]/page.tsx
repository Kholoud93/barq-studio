import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/pages/blog-post-content";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { blogPosts } from "@/data/blog";
import { createMetadata, siteConfig } from "@/lib/metadata";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Insights", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        titleAr={post.titleAr}
        description={post.description}
        descriptionAr={post.descriptionAr}
        url={`${siteConfig.url}/blog/${post.slug}`}
        image={post.image}
        publishedAt={post.publishedAt}
      />
      <BlogPostContent post={post} />
    </>
  );
}
