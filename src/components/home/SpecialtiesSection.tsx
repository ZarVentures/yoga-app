import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";

import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Button } from "@/components/ui/button";

const SPECIALTIES = [
  {
    slug: "prenatal-yoga",
    title: "Prenatal Yoga",
    description: "Gentle, mindful yoga to support comfort and well-being throughout pregnancy.",
    image: "/program2.jpg",
  },
  {
    slug: "therapy-yoga",
    title: "Therapy Yoga",
    description:
      "Gentle, personalized yoga practices to support your physical and mental well-being.",
    image: "/program1.jpg",
  },
  
  {
    slug: "eye-yoga",
    title: "Eye Yoga",
    description:
      "Gentle eye exercises and relaxation techniques designed to reduce visual strain and encourage comfortable eye movement.",
    image: "/program8.jpeg",
  },
  {
    slug: "yoga-for-back-pain",
    title: "Yoga for Back Pain",
    description: "Gentle yoga to support flexibility, mobility, and a healthier back.",
    image: "/program10.png",
  },
] as const;

export function SpecialtiesSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#2C7958_0%,#2D634C_100%)]">
      {/* Subtle decorative botanical arcs behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 size-72 rounded-full border border-[#CDE8D4]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-24 size-80 rounded-full border border-[#CDE8D4]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 bottom-10 size-40 rounded-full border border-[#CDE8D4]/10"
      />

      <div className="container-page relative py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/90">
            Our Practices
          </p>
          <h2 className="mt-3 text-3xl text-white lg:text-4xl">We Are Specialised In</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-white/60" aria-hidden="true" />
          <p className="mt-4 text-base text-white/80">
            Gentle, personal and holistic — discover the practices we offer.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((item) => (
            <article key={item.slug} className="group flex h-full flex-col items-center">
              {/* Tall portrait image card with arch-shaped top + white frame */}
              <div className="relative w-[86%] overflow-hidden rounded-t-[9rem] border-[6px] border-white bg-white shadow-[0_10px_30px_rgba(47,74,58,0.12)] lg:w-[90%]">
                <div className="relative aspect-[3/3.8] w-full overflow-hidden">
                  <ImagePlaceholder
                    alt={`${item.title} class`}
                    label={`Image — ${item.title}`}
                    src={item.image}
                    aspectClassName="aspect-[3/3.8]"
                    className="h-full w-full rounded-t-[9rem]"
                  />
                  {/* Bottom gradient + title overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-forest/90 to-transparent" />
                  <h3 className="absolute inset-x-3 bottom-3 text-center font-display text-xl font-semibold leading-snug text-cream">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex w-full max-w-[22rem] flex-1 flex-col items-center px-2 text-center">
                <p className="text-sm leading-relaxed text-white">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild variant="cta" size="lg" className="rounded-md">
            <Link to="/classes" className="inline-flex items-center gap-2">
              Our Programs
              <MoveRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
