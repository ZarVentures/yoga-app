import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const INSTRUCTORS = [
  {
    name: "Rumana Rab",
    specialization: "Expert in Therapy & Pre Natal",
    experience: "23+ Years Experience",
    alt: "Rumana Rab — Expert in Therapy & Pre Natal",
    src: "/trainer.PNG",
  },
  {
    name: "Meezan Rab",
    specialization: "Hatha and HIIT",
    experience: "7+ Years Experience",
    alt: "Meezan Rab — Hatha and HIIT",
    src: "/trainer1.png",
  },
  {
    name: "Shikha Kalia",
    specialization: "Power Yoga, Weight-loss & Deep Stretching",
    experience: "12+ Years Experience",
    alt: "Shikha Kalia — Power Yoga, Weight-loss & Deep Stretching",
    src: "/trainer2.PNG",
  },
] as const;

function GoldenDivider() {
  return (
    <span
      aria-hidden="true"
      className="mx-auto mt-3 block h-1 w-16 rounded-full bg-gold shadow-sm"
    />
  );
}

export function TrainersSection() {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-forest lg:text-3xl">
          Meet Our Instructors
        </h2>
        <GoldenDivider />
      </div>

      <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {INSTRUCTORS.map(({ name, specialization, experience, alt, src }) => (
          <article key={name} className="flex h-full flex-col items-center text-center">
            <div className="aspect-square w-44 overflow-hidden rounded-full ring-2 ring-sage/30 ring-offset-2 ring-offset-background lg:w-48">
              <img src={src} alt={alt} loading="lazy" className="size-full object-cover" />
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-forest">
              {name}
            </h3>
            <p className="mt-1 text-[0.6875rem] font-bold uppercase leading-relaxed tracking-[0.14em] text-gold">
              {specialization}
            </p>
            <p className="mt-1 text-xs font-medium text-sage-deep">{experience}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          asChild
          className="h-10 rounded-lg bg-forest px-7 text-forest-foreground shadow-soft transition-transform duration-300 hover:scale-105 hover:bg-forest/90"
        >
          <Link to="/trainers">
            View All Instructors
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
