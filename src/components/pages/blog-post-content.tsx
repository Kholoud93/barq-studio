"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useApp } from "@/providers/app-provider";

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { t, locale } = useApp();
  const isAr = locale === "ar";
  const title = isAr ? post.titleAr : post.title;
  const description = isAr ? post.descriptionAr : post.description;
  const content = isAr ? post.contentAr : post.content;
  const category = isAr ? post.categoryAr : post.category;
  const BackIcon = isAr ? ArrowRight : ArrowLeft;

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.relatedServices.some((service) => post.relatedServices.includes(service)))
    .slice(0, 3);

  const relatedServiceLinks = post.relatedServices
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  return (
    <article className="pb-24 pt-28 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary rtl:flex-row-reverse"
        >
          <BackIcon className="h-4 w-4" />
          {t.blog.back}
        </Link>

        <p className="text-xs font-medium uppercase tracking-wider text-primary">{category}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground rtl:flex-row-reverse">
          <time dateTime={post.publishedAt}>
            {t.blog.published}:{" "}
            {new Date(post.publishedAt).toLocaleDateString(isAr ? "ar-EG" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>
            {post.readingTime} {t.blog.readingTime}
          </span>
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={post.image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground rtl:text-right">
          {content.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        {relatedServiceLinks.length > 0 ? (
          <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 rtl:text-right">
            <h2 className="text-lg font-semibold text-foreground">{t.services.relatedServices}</h2>
            <div className="mt-4 flex flex-wrap gap-2 rtl:flex-row-reverse">
              {relatedServiceLinks.map((service) =>
                service ? (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {isAr ? service.titleAr : service.title}
                  </Link>
                ) : null
              )}
            </div>
          </div>
        ) : null}

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">{t.blog.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.blog.ctaDescription}</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact" className="rtl:flex-row-reverse">
              {t.cta.contact}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        {related.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground rtl:text-right">{t.blog.related}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/30 rtl:text-right"
                >
                  <h3 className="font-semibold text-foreground">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
