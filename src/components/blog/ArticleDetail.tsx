import { Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, Leaf } from "lucide-react";

import type { BlogPost } from "@/data/blog";

export function ArticleDetail({ post }: { post: BlogPost }) {
  return (
    <div className="bg-background">
      <div className="container-page py-8 lg:py-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-forest"
        >
          <span className="grid size-8 place-items-center rounded-full bg-light-sage text-forest">
            <ArrowLeft className="size-4" aria-hidden="true" />
          </span>
          Back to Blog
        </Link>
      </div>

      <header className="container-page pb-10 text-center lg:pb-14">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          <Leaf className="size-3.5" aria-hidden="true" />
          {post.category}
        </span>

        <h1 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
          {post.title}
        </h1>

        <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-sage-deep" aria-hidden="true" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-sage-deep" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
      </header>

      <div className="container-page pb-14 lg:pb-20">
        <div className="mx-auto max-w-3xl space-y-10 lg:mt-4">
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-forest sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-md border border-forest/10 bg-light-sage/50 p-7 text-center shadow-soft lg:p-9">
          <p className="font-display text-lg font-semibold text-forest">
            Ready to feel the difference for yourself?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Join a class or book a private session, and bring the calm of this article into your own
            daily practice.
          </p>
          <Link
            to="/classes"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-forest-foreground shadow-soft transition-colors hover:bg-forest/90"
          >
            Explore Classes
          </Link>
        </div>
      </div>
    </div>
  );
}
