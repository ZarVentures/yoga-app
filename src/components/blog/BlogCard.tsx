import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-forest/10 bg-surface shadow-soft transition-shadow duration-300 hover:shadow-lifted">
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-light-sage px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-forest">
            {post.category}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-forest transition-colors group-hover:text-forest/80">
          {post.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-sage-deep" aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-sage-deep" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-sage-deep"
          >
            Read More
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
