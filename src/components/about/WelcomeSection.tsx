import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export function WelcomeSection() {
  return (
    <section className="container-page pb-16 pt-16 lg:pb-24 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2 className="mt-3 text-3xl leading-tight lg:text-4xl">
            Welcome to Rumana Rab
            <br />
            Holistic Centre
          </h2>
          <p className="mt-6 text-base leading-[1.6] text-muted-foreground">
            At Rumana Rab Holistic Yoga, we believe yoga is more than physical practice. With 23
            years of experience in yoga, Rumana Rab brings together traditional yogic practices with
            a holistic approach designed to support the individual as a whole — body, mind, and
            breath. It is a journey towards greater awareness, inner balance, and a healthier way of
            living.
          </p>

          <Button variant="cta" size="lg" className="mt-8">
            <Play className="size-4 fill-current" aria-hidden="true" />
            Room Tour Video
          </Button>
        </div>

        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[5px] bg-[linear-gradient(180deg,#2C7958_0%,#2D634C_100%)] sm:translate-x-4 sm:translate-y-4"
          />
          <img
            src="/about.png"
            alt="Welcome to Rumana Rab Holistic Centre"
            loading="lazy"
            className="relative h-[22rem] w-full rounded-[5px] object-cover shadow-[0_10px_30px_rgba(47,74,58,0.14)] sm:h-[26rem] lg:h-[24rem]"
          />
        </div>
      </div>
    </section>
  );
}
