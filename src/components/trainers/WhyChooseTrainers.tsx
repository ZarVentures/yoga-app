import { Award, HeartHandshake, Sprout, Users, type LucideIcon } from "lucide-react";

import { WHY_CHOOSE_TRAINERS } from "@/data/trainers";

const FEATURE_ICONS: LucideIcon[] = [Award, Users, HeartHandshake, Sprout];

export function WhyChooseTrainers() {
  return (
    <section className="bg-light-sage">
      <div className="container-page py-10 lg:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Commitment</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
            Why Choose Our Trainers?
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_TRAINERS.map((feature, index) => {
            const Icon: LucideIcon = FEATURE_ICONS[index] ?? Users;
            return (
              <article
                key={feature.title}
                className="flex h-full flex-col items-center text-center"
              >
                <span className="grid size-12 place-items-center rounded-full bg-forest text-gold shadow-soft">
                  <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-forest">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
