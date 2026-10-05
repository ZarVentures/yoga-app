import { useState } from "react";

import {
  CLASS_INFO,
  CLASS_TYPES,
  DAY_SHORT,
  SCHEDULE_DAYS,
  TIME_SLOTS,
  WEEKLY_SCHEDULE,
  type ClassTag,
  type ScheduleDay,
} from "@/data/schedule";
import { cn } from "@/lib/utils";

const CELL_BG: Record<ClassTag, string> = {
  MIX: "bg-light-sage",
  LADIES: "bg-gold/30",
  "LADIES ONLINE": "bg-sage/50",
};

export function ScheduleSection() {
  const [selectedDay, setSelectedDay] = useState<ScheduleDay | null>(null);

  return (
    <section className="bg-background">
      <div className="container-page py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">This Week's Schedule</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
            Find Your Practice, Find Your Time
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore our weekly classes and choose a time that works best for your routine.
          </p>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {SCHEDULE_DAYS.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay((current) => (current === day ? null : day))}
              aria-pressed={selectedDay === day}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors sm:text-[0.8125rem]",
                selectedDay === day
                  ? "bg-sage text-white shadow-soft"
                  : "bg-light-sage text-forest hover:bg-sage/20",
              )}
            >
              {DAY_SHORT[day]}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto rounded-md border border-forest/10 bg-surface shadow-soft">
          <table className="w-full min-w-[880px] border-collapse text-center">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-20 border-b border-forest/40 bg-forest px-4 py-4 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-cream"
                >
                  Time
                </th>
                {SCHEDULE_DAYS.map((day) => (
                  <th
                    key={day}
                    scope="col"
                    className={cn(
                      "border-b border-forest/40 bg-forest px-3 py-4 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-cream sm:text-xs",
                      selectedDay === day && "bg-gold text-forest",
                    )}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIME_SLOTS.map((slot, slotIndex) => (
                <tr key={slot.label} className="border-t border-forest/10 first:border-t-0">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 whitespace-nowrap border-r border-forest/10 bg-light-sage px-3 py-4 text-xs font-bold uppercase tracking-[0.1em] text-forest sm:px-4 sm:text-sm"
                  >
                    {slot.label}
                  </th>
                  {SCHEDULE_DAYS.map((day) => {
                    const cell = WEEKLY_SCHEDULE[day][slotIndex];
                    const info = cell ? CLASS_INFO[cell] : null;
                    return (
<td
  key={day}
  className={cn(
    "border-l border-forest/10 p-3 sm:p-4",
    cell ? CELL_BG[cell] : "bg-sage/10",
    selectedDay === day && "border-l-2 border-l-forest/60",
  )}
>
  {info ? (
    <span className="flex flex-col items-center justify-center gap-0.5">
      <span className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-forest sm:text-xs">
        {info.label}
      </span>
      <span className="text-[0.625rem] text-muted-foreground sm:text-[0.6875rem]">
        {info.subtitle}
      </span>
    </span>
  ) : (
    <span className="text-sm text-muted-foreground/40">&mdash;</span>
  )}
</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-md bg-[linear-gradient(180deg,#2C7958_0%,#2D634C_100%)] px-6 py-6 sm:px-8">
          <p className="text-center text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-white/90">
            Class Types
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-x-8 gap-y-4 sm:flex-row">
            {CLASS_TYPES.map((tag) => {
              const info = CLASS_INFO[tag];
              return (
                <div key={tag} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "size-3 shrink-0 rounded-full border border-white/40",
                      info.swatchClassName,
                    )}
                    aria-hidden="true"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">{info.name}</p>
                    <p className="text-xs leading-snug text-white/80">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
