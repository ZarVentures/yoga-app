import { BLOG_CATEGORIES } from "@/data/blog";
import { cn } from "@/lib/utils";

export function BlogCategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
      <div className="flex w-max items-center gap-1.5 sm:flex-wrap sm:justify-center">
        {BLOG_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={cn(
              "shrink-0 cursor-pointer rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors",
              active === category
                ? "bg-forest text-forest-foreground shadow-sm"
                : "border border-border bg-white text-forest/75 shadow-sm hover:border-forest/40 hover:text-forest",
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
