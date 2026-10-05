import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";

import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import type { Trainer } from "@/data/trainers";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="flex h-full flex-col items-center text-center">
      <div className="relative">
        <ImagePlaceholder
          alt={trainer.imageAlt}
          label={trainer.imageAlt}
          {...(trainer.src ? { src: trainer.src } : {})}
          aspectClassName="aspect-square w-44 sm:w-48"
          imgClassName="object-cover object-[50%_18%]"
          className="rounded-full ring-2 ring-sage/30 ring-offset-2 ring-offset-background"
        />
        {trainer.featured ? (
          <span className="absolute -bottom-2 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-3 py-1 text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-gold shadow-soft">
            Founder
          </span>
        ) : null}
      </div>

      <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-forest">
        {trainer.name}
      </h3>
      <p className="mt-1 text-[0.6875rem] font-bold uppercase leading-relaxed tracking-[0.14em] text-gold">
        {trainer.designationShort ?? trainer.designation}
      </p>
      <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-sage-deep">
        <Clock className="size-3.5" aria-hidden="true" />
        {trainer.experienceShort ?? trainer.experience}
      </p>

      <p className="mt-3 line-clamp-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
        {trainer.bio}
      </p>

      <div className="mt-5">
        <Button asChild variant="forest" size="sm" className="rounded-md px-5">
          <Link to="/trainer/$slug" params={{ slug: trainer.slug }}>
            Learn More
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
