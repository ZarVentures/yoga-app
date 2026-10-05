import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ContactInfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  note?: string | undefined;
  href?: string | undefined;
};

export function ContactInfoCard({ icon: Icon, title, value, note, href }: ContactInfoCardProps) {
  return (
    <div className="flex gap-4 rounded-md border border-forest/10 bg-surface p-5 shadow-soft lg:p-6">
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-light-sage text-forest shadow-soft">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-bold uppercase tracking-[0.18em] text-sage-deep">{title}</h3>
        {href ? (
          <a
            href={href}
            className="mt-2 block break-words text-xs font-medium leading-relaxed text-forest transition-colors hover:text-sage-deep sm:text-sm"
          >
            {value}
          </a>
        ) : (
          <p className={cn("mt-2 break-words text-xs leading-relaxed text-forest sm:text-sm")}>
            {value}
          </p>
        )}
        {note ? (
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{note}</p>
        ) : null}
      </div>
    </div>
  );
}
