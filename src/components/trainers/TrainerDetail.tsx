import { Link } from "@tanstack/react-router";
import { ArrowLeft, Award, BadgeCheck, Clock, Globe, HeartPulse } from "lucide-react";

import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import type { Trainer } from "@/data/trainers";

export function TrainerDetail({ trainer }: { trainer: Trainer }) {
  return (
    <div className="bg-background">
      <div className="container-page pb-6 pt-8 lg:pt-10">
        <Link
          to="/trainers"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-forest"
        >
          <span className="grid size-8 place-items-center rounded-full bg-light-sage text-forest">
            <ArrowLeft className="size-4" aria-hidden="true" />
          </span>
          Back to Trainers
        </Link>
      </div>

      {/* Main trainer profile */}
      <div className="container-page pb-14 lg:pb-16">
        <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-10">
          {/* ================================================================== */}
          {/* LEFT: Artistic trainer image composition                            */}
          {/* Circle is BACKGROUND. Trainer photo is FOREGROUND above it.          */}
          {/* ================================================================== */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* — Layer 1: Botanical lotus line-art — upper-left, behind everything — */}
            <svg
              viewBox="0 0 320 340"
              fill="none"
              className="pointer-events-none absolute left-[-2%] top-[2%] h-[62%] w-[62%]"
              aria-hidden="true"
            >
              <path
                d="M160 340 C155 300 140 260 130 230 C120 200 105 170 100 150"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                className="text-sage-deep/20"
              />
              <path
                d="M100 150 C60 130 30 100 25 60 C22 40 35 15 55 10 C75 5 95 25 100 55 C103 75 100 120 100 150"
                stroke="currentColor"
                strokeWidth={1.2}
                strokeLinecap="round"
                className="text-sage-deep/18"
              />
              <path
                d="M100 150 C80 135 60 110 58 80 C56 55 68 35 85 30 C100 25 108 45 105 75 C103 95 100 130 100 150"
                stroke="currentColor"
                strokeWidth={1.2}
                strokeLinecap="round"
                className="text-sage-deep/15"
              />
              <path
                d="M100 150 C100 120 95 80 110 45 C120 20 140 5 160 10 C180 5 200 20 210 45 C225 80 220 120 220 150"
                stroke="currentColor"
                strokeWidth={1.2}
                strokeLinecap="round"
                className="text-sage-deep/18"
              />
              <path
                d="M220 150 C220 125 225 95 235 70 C245 45 260 30 275 35 C290 40 298 60 290 85 C282 110 240 135 220 150"
                stroke="currentColor"
                strokeWidth={1.2}
                strokeLinecap="round"
                className="text-sage-deep/15"
              />
              <path
                d="M220 150 C230 130 260 105 280 75 C295 55 305 30 295 15 C285 5 265 10 248 30 C230 55 225 100 220 150"
                stroke="currentColor"
                strokeWidth={1.2}
                strokeLinecap="round"
                className="text-sage-deep/18"
              />
              <path
                d="M140 45 C135 25 145 8 160 5 C175 8 185 25 180 45"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                className="text-sage-deep/12"
              />
              <path
                d="M80 200 C65 185 45 175 30 180 C20 185 25 200 40 210 C55 220 75 215 80 200"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                className="text-sage-deep/12"
              />
            </svg>

            {/* — Layer 2: Pale sage circle — background decorative element — */}
            <div
              className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-sage/50 ring-[3px] ring-white/60"
              style={{ width: "72%", aspectRatio: "1/1" }}
              aria-hidden="true"
            />

            {/* — Layer 3: Bottom-left botanical leaves — behind trainer — */}
            <svg
              viewBox="0 0 400 380"
              fill="none"
              className="pointer-events-none absolute bottom-[-4%] left-[-8%] h-[58%] w-[68%]"
              aria-hidden="true"
            >
              <path
                d="M30 380 C40 340 55 290 75 250 C95 210 120 175 145 150"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                className="text-sage-deep/18"
              />
              <path
                d="M75 250 C55 235 30 225 20 240 C12 255 25 275 50 278 C68 280 78 265 75 250"
                fill="currentColor"
                className="text-sage-deep/10"
              />
              <path
                d="M75 250 C55 235 30 225 20 240 C12 255 25 275 50 278 C68 280 78 265 75 250"
                stroke="currentColor"
                strokeWidth={1}
                className="text-sage-deep/15"
              />
              <path
                d="M110 200 C95 185 70 178 60 190 C52 202 62 218 82 222 C98 225 112 215 110 200"
                fill="currentColor"
                className="text-sage-deep/8"
              />
              <path
                d="M110 200 C95 185 70 178 60 190 C52 202 62 218 82 222 C98 225 112 215 110 200"
                stroke="currentColor"
                strokeWidth={1}
                className="text-sage-deep/12"
              />
              <path
                d="M135 165 C125 152 110 148 105 158 C100 168 110 180 125 182 C135 183 140 175 135 165"
                fill="currentColor"
                className="text-sage-deep/7"
              />
              <path
                d="M15 380 C30 330 55 270 85 225 C115 180 155 148 190 130"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                className="text-sage-deep/15"
              />
              <path
                d="M85 225 C65 210 40 208 32 222 C25 236 40 252 62 252 C80 252 90 240 85 225"
                fill="currentColor"
                className="text-sage-deep/8"
              />
              <path
                d="M85 225 C65 210 40 208 32 222 C25 236 40 252 62 252 C80 252 90 240 85 225"
                stroke="currentColor"
                strokeWidth={1}
                className="text-sage-deep/12"
              />
              <path
                d="M130 178 C118 164 98 160 92 172 C86 184 98 198 115 200 C128 201 135 192 130 178"
                fill="currentColor"
                className="text-sage-deep/6"
              />
              <path
                d="M130 178 C118 164 98 160 92 172 C86 184 98 198 115 200 C128 201 135 192 130 178"
                stroke="currentColor"
                strokeWidth={1}
                className="text-sage-deep/10"
              />
              <path
                d="M60 380 C70 340 90 290 115 255 C140 220 170 195 200 180"
                stroke="currentColor"
                strokeWidth={1.2}
                strokeLinecap="round"
                className="text-sage-deep/12"
              />
              <path
                d="M115 255 C100 242 82 240 78 252 C74 264 88 276 105 276 C118 276 122 268 115 255"
                fill="currentColor"
                className="text-sage-deep/6"
              />
              <path
                d="M115 255 C100 242 82 240 78 252 C74 264 88 276 105 276 C118 276 122 268 115 255"
                stroke="currentColor"
                strokeWidth={0.8}
                className="text-sage-deep/10"
              />
              <path
                d="M160 210 C150 200 138 198 135 208 C132 218 142 228 155 228 C164 228 166 220 160 210"
                fill="currentColor"
                className="text-sage-deep/5"
              />
              <path
                d="M10 320 C5 305 15 290 28 292 C40 294 45 310 35 322 C28 330 15 330 10 320"
                fill="currentColor"
                className="text-sage-deep/8"
              />
            </svg>

            {/* — Layer 4: Trainer photo — FOREGROUND, above the circle — */}
            <div className="relative z-10 mx-auto w-[75%] pt-[4%]">
              {trainer.src ? (
                <img
                  src={trainer.src}
                  alt={trainer.imageAlt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              ) : (
                <ImagePlaceholder
                  alt={trainer.imageAlt}
                  label={trainer.imageAlt}
                  aspectClassName="aspect-[3/4] w-full"
                  imgClassName="object-cover object-top"
                  className="!rounded-2xl"
                />
              )}
            </div>

            {/* — Layer 5: Organic cream wave — FRONT, covers lower portion — */}
            <svg
              viewBox="0 0 600 320"
              preserveAspectRatio="none"
              className="pointer-events-none absolute bottom-0 left-0 h-[38%] w-full"
              aria-hidden="true"
            >
              <path
                d="M0 320 L0 120 C50 135 110 160 175 185 C260 220 340 258 420 280 C480 296 540 310 600 318 L600 320 Z"
                className="fill-background"
              />
              <path
                d="M0 320 L0 160 C60 175 130 200 200 228 C280 260 370 285 450 300 C510 310 560 316 600 320 L600 320 Z"
                className="fill-light-sage/30"
              />
              <path
                d="M0 140 C70 158 140 185 220 215 C300 248 390 278 470 296 C520 306 570 314 600 318"
                className="fill-none stroke-gold/30"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M0 168 C80 185 160 210 240 240 C320 270 410 292 500 306 C550 312 580 316 600 318"
                className="fill-none stroke-sage-deep/10"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
            </svg>

            {/* — Layer 6: Subtle ambient glows — */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -top-8 left-[15%] size-56 rounded-full bg-light-sage/40 blur-3xl" />
              <div className="absolute bottom-[12%] -left-6 size-48 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute right-0 top-[22%] size-40 rounded-full bg-sage/8 blur-3xl" />
            </div>
          </div>

          {/* ================================================================== */}
          {/* RIGHT: Trainer information                                          */}
          {/* ================================================================== */}
          <div className="flex flex-col justify-center lg:py-4">
            <p className="inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Our Trainer
            </p>

            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-forest sm:text-5xl lg:text-6xl">
              {trainer.name}
            </h1>
            <p className="mt-3 max-w-2xl text-xs font-bold uppercase leading-relaxed tracking-[0.14em] text-sage-deep sm:text-sm">
              {trainer.designation}
            </p>
            <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-forest px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gold shadow-soft">
              <Clock className="size-4" aria-hidden="true" />
              {trainer.experience}
            </span>

            <div className="mt-7 space-y-4">
              {trainer.biography.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                Specializations
              </p>
              <div className="mt-3 flex max-w-3xl flex-wrap gap-2">
                {trainer.specialisations.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-light-sage bg-light-sage px-3.5 py-1.5 text-xs font-medium text-forest"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="forest" className="rounded-md">
                <Link to="/classes">Book a Class</Link>
              </Button>
              <Button asChild variant="gold" className="rounded-md">
                <Link to="/contact">Book a Session</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* Three information cards                                               */}
        {/* ==================================================================== */}
        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-3">
          {trainer.certifications ? (
            <div className="rounded-md border border-light-sage bg-white p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-light-sage text-forest">
                  <Award className="size-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                  Certifications
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {trainer.certifications.map((certification) => (
                  <li key={certification} className="flex items-start gap-2.5 text-sm">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="font-medium text-foreground">{certification}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {trainer.languages ? (
            <div className="rounded-md border border-light-sage bg-white p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-light-sage text-forest">
                  <Globe className="size-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                  Languages
                </h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {trainer.languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full bg-light-sage px-3.5 py-1.5 text-xs font-medium text-forest"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="rounded-md border border-light-sage bg-white p-5 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-light-sage text-forest">
                <HeartPulse className="size-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                Wellness Tip
              </h2>
            </div>
            <p className="mt-4 font-display text-lg font-semibold italic leading-snug text-forest">
              <span className="text-gold">&ldquo;</span>
              {trainer.wellnessTip}
              <span className="text-gold">&rdquo;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
