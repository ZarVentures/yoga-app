import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, Leaf } from "lucide-react";

import { FEATURED_ARTICLE } from "@/data/blog";

export function FeaturedArticle() {
  const post = FEATURED_ARTICLE;

  return (
    <section className="container-page py-14 lg:py-20">
      <article className="relative overflow-hidden rounded-md border border-forest/10 bg-surface shadow-soft">
        <span className="absolute right-6 top-6 z-10 hidden rotate-2 rounded-md bg-forest px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-foreground shadow-lifted lg:block">
          Editor&apos;s Pick
        </span>

        <div className="flex flex-col items-start justify-center gap-4 p-7 sm:p-10 lg:py-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <Leaf className="size-3.5" aria-hidden="true" />
            {post.category}
          </span>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-sage-deep" aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-sage-deep" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          <h2 className="font-display text-2xl font-semibold leading-snug text-forest sm:text-[1.6rem]">
            {post.title}
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {post.excerpt}
          </p>

          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-sage-deep"
          >
            Read Full Article
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </section>
  );
}
