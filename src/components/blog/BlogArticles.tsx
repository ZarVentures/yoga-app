import { useState } from "react";

import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/data/blog";

import { BlogCategoryFilter } from "./BlogCategoryFilter";
import { BlogGrid } from "./BlogGrid";

const INITIAL_VISIBLE = 6;

export function BlogArticles() {
  const [activeCategory, setActiveCategory] = useState<string>(BLOG_CATEGORIES[0]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <section className="container-page pb-16 lg:pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">The Journal</p>
        <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl lg:text-4xl">
          Latest Articles
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Browse by topic and discover practices, rituals and reflections to carry with you.
        </p>
        <span
          className="mx-auto mt-5 block h-1 w-16 rounded-full bg-gold shadow-sm"
          aria-hidden="true"
        />
      </div>

      <div className="mt-9">
        <BlogCategoryFilter
          active={activeCategory}
          onChange={(category) => {
            setActiveCategory(category);
            setVisibleCount(INITIAL_VISIBLE);
          }}
        />
      </div>

      <BlogGrid posts={visiblePosts} />

      {filteredPosts.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No articles in this category yet — check back soon.
        </p>
      ) : null}

      {hasMore ? (
        <div className="mt-12 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setVisibleCount(filteredPosts.length)}
            className="h-11 rounded-full border-forest/20 bg-background px-7 text-forest transition-colors hover:bg-light-sage"
          >
            View More Articles
            <ArrowDown className="size-4" aria-hidden="true" />
          </Button>
        </div>
      ) : null}
    </section>
  );
}
