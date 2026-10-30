"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { blogPosts } from "@/data/blog";
import { useApp } from "@/providers/app-provider";

export function BlogContent() {
  const { t, locale } = useApp();
  const isAr = locale === "ar";

  return (
    <AnimatedSection className="pb-24 pt-28 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.blog.badge}
          title={t.blog.pageTitle}
          description={t.blog.pageDescription}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
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
                  <h2 className="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {isAr ? post.titleAr : post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                    {isAr ? post.descriptionAr : post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted-foreground rtl:flex-row-reverse">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString(isAr ? "ar-EG" : "en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span>
                      {post.readingTime} {t.blog.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
