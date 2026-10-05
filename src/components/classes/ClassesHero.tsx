import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function ClassesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-light-sage">
      {/* Full-width background image */}
      <ImagePlaceholder
        alt="Our Yoga Classes hero background"
        label="Image Placeholder"
        src="/classhero.png"
        aspectClassName="aspect-auto"
        className="absolute inset-0 rounded-none"
      />

      {/* Subtle sage tint over the hero image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#6F8F72]/30" />

      {/* Subtle readability overlay (project colors only) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/40 to-forest/15"
      />

      <div className="container-page relative z-10 flex min-h-[200px] items-center justify-center py-8 text-center sm:min-h-[260px] lg:min-h-[420px]">
        <div className="mx-auto max-w-2xl text-cream">
          <h1 className="text-2xl font-semibold leading-tight text-[#f0bf4c] sm:text-3xl lg:text-5xl">
            Our Yoga Program
          </h1>
          <p className="mx-auto mt-2 max-w-xl font-display text-xl leading-tight text-cream/85 sm:mt-3 sm:text-2xl lg:text-2xl">
            Explore personalized yoga and wellness practices designed to support your body, mind,
            and everyday wellbeing.
          </p>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-1 w-16 rounded-full bg-[#f0bf4c] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
