import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flower2 } from "lucide-react";

import { expectIcon } from "@/components/classes/expectIcons";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { type YogaClass } from "@/data/classes";

export function ClassDetailContent({ yogaClass }: { yogaClass: YogaClass }) {
  const Icon = expectIcon;

  return (
    <div className="bg-background text-foreground">
      <div className="container-page max-w-6xl py-8 sm:py-10 lg:py-14">
        {/* Hero */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-12">
          {/* Image — matches the classes main-page card box size (gold frame, arch top) */}
          <div className="order-1 mx-auto w-[88%] max-w-[230px] lg:w-[92%]">
            <div className="relative overflow-hidden rounded-t-[9rem] border-[6px] border-gold bg-gold shadow-[0_10px_30px_rgba(47,74,58,0.12)]">
              <div className="relative aspect-[3/3.8] w-full overflow-hidden">
                <ImagePlaceholder
                  alt={`${yogaClass.label} image`}
                  label={`${yogaClass.label.toUpperCase()} IMAGE`}
                  src={yogaClass.image}
                  fit="cover"
                  imgClassName={yogaClass.imagePosition}
                  aspectClassName="aspect-[3/3.8]"
                  className="h-full w-full rounded-t-[9rem]"
                />
              </div>
            </div>
          </div>

          {/* Content — 60% */}
          <div className="order-2">
            <p className="eyebrow">{yogaClass.subtitle}</p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl lg:text-5xl">
              {yogaClass.label}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {yogaClass.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-forest px-7 text-forest-foreground shadow-soft transition-transform duration-300 hover:scale-105 hover:bg-forest/90"
              >
                <Link to="/contact">Book a Session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-forest/20 bg-background px-7 text-forest transition-colors hover:bg-light-sage"
              >
                <Link to="/packages">
                  View Packages
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-border sm:my-12" aria-hidden="true" />

        {/* About + Benefits */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-xl font-semibold text-forest sm:text-2xl">
              About This Practice
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-gold" aria-hidden="true" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {yogaClass.about}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-forest sm:text-2xl">
              Key Benefits
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-gold" aria-hidden="true" />
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {yogaClass.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-light-sage text-sage-deep">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who is it for */}
        <div className="relative mt-12 overflow-hidden rounded-md bg-light-sage px-6 py-8 sm:px-10 sm:py-10">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-xl font-semibold text-forest sm:text-2xl">
              Who Is It For?
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-gold" aria-hidden="true" />
            <p className="mt-5 text-base leading-relaxed text-foreground/80">{yogaClass.whoFor}</p>
          </div>
          <Flower2
            className="pointer-events-none absolute -bottom-4 -right-4 size-28 text-forest/10"
            aria-hidden="true"
          />
        </div>

        {/* What to expect */}
        <div className="mt-12">
          <div className="text-center">
            <h2 className="font-display text-xl font-semibold text-forest sm:text-2xl">
              What To Expect
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gold" aria-hidden="true" />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {yogaClass.expectations.map((item) => {
              const ItemIcon = Icon(item.icon);
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-md bg-card p-6 text-center shadow-soft"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-light-sage text-sage-deep">
                    <ItemIcon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 rounded-md bg-light-sage p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl">
            Ready to begin your healing journey?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Join a session or explore our packages to get started.
          </p>
          <Button
            asChild
            className="mt-7 h-12 rounded-full bg-forest px-8 text-forest-foreground shadow-soft transition-transform duration-300 hover:scale-105 hover:bg-forest/90"
          >
            <Link to="/packages">
              View Packages
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
