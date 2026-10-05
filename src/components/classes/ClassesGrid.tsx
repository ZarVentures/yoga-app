import { ClassCard } from "@/components/classes/ClassCard";
import { CLASSES } from "@/data/classes";

type ClassesGridProps = {
  onSelect: (slug: string) => void;
};

export function ClassesGrid({ onSelect }: ClassesGridProps) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {CLASSES.map((c) => (
        <ClassCard
          key={c.slug}
          slug={c.slug}
          label={c.label}
          shortDescription={c.shortDescription}
          imageAlt={c.imageAlt}
          image={c.image}
          imagePosition={c.imagePosition}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
