"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { useApp } from "@/providers/app-provider";

export function BlogPreview() {
  const { t, locale } = useApp();
  const isAr = locale === "ar";
  const posts = blogPosts.slice(0, 3);

  return (
    <AnimatedSection className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.blog.badge}
          title={t.blog.title}
          description={t.blog.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={isAr ? post.titleAr : post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 rtl:text-right">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {isAr ? post.categoryAr : post.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {isAr ? post.titleAr : post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                    {isAr ? post.descriptionAr : post.description}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {post.readingTime} {t.blog.readingTime}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/blog" className="rtl:flex-row-reverse">
              {t.blog.readMore}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
