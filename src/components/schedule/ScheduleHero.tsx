import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function ScheduleHero() {
  return (
    <section className="relative isolate overflow-hidden bg-light-sage">
      <ImagePlaceholder
        alt="Schedule hero background"
        label="Image Placeholder"
        src="/schedulehero.png"
        aspectClassName="aspect-auto"
        className="absolute inset-0 rounded-none"
      />

      {/* Subtle sage tint over the hero image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#6F8F72]/30" />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/40 to-forest/15"
      />

      <div className="container-page relative z-10 flex min-h-[200px] items-center justify-center py-8 text-center sm:min-h-[260px] lg:min-h-[420px]">
        <div className="mx-auto max-w-2xl text-cream">
          <h1 className="text-2xl font-semibold leading-tight text-[#f0bf4c] sm:text-3xl lg:text-5xl">
            Our Schedule
          </h1>
          <p className="mx-auto mt-2 max-w-xl font-display text-xl leading-tight text-white sm:mt-3 sm:text-2xl lg:text-2xl">
            Find a Time That Works for You
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white sm:text-base">
            Explore our weekly yoga schedule and find a practice that fits naturally into your
            routine.
          </p>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#f0bf4c]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
