import { Baby, Calendar, CalendarClock, Home, Leaf, Sparkles, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Category =
  | "All"
  | "Private"
  | "Home"
  | "Monthly"
  | "3 Months"
  | "Yearly"
  | "Additional Services"
  | "Prenatal Yoga";

const CATEGORIES: Category[] = [
  "All",
  "Private",
  "Home",
  "Monthly",
  "3 Months",
  "Yearly",
  "Additional Services",
  "Prenatal Yoga",
];

type Row = { label: string; fee?: string; col3?: string; validity?: string };

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="h-px w-8 bg-gold/60" />
      <Leaf className="size-3 text-gold" aria-hidden="true" />
      <span className="h-px w-8 bg-gold/60" />
    </div>
  );
}

function SectionCard({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: typeof User;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col gap-4 rounded-md border-border/70 bg-surface p-5 shadow-soft",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="grid size-[72px] place-items-center rounded-full bg-light-sage text-forest">
          <Icon className="size-8" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h2 className="text-center font-display text-lg font-semibold text-forest">{title}</h2>
        <GoldDivider />
      </div>
      {children}
    </Card>
  );
}

function PriceCard({
  detail,
  price,
  priceNote,
  info,
}: {
  detail?: string;
  price: string;
  priceNote?: string;
  info?: string;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>{detail ? <p className="text-sm text-muted-foreground">{detail}</p> : null}</div>
        <div className="text-right">
          <p className="font-display text-2xl font-semibold text-forest">{price}</p>
          {priceNote ? <p className="mt-0.5 text-sm text-muted-foreground">{priceNote}</p> : null}
        </div>
      </div>
      {info ? (
        <p className="mt-3 rounded bg-light-sage px-2.5 py-1.5 text-xs text-muted-foreground">
          {info}
        </p>
      ) : null}
    </div>
  );
}

function CardTable({
  columns,
  rows,
  col3Note,
  col2IsCol3,
}: {
  columns: string[];
  rows: Row[];
  col3Note?: boolean;
  col2IsCol3?: boolean;
}) {
  return (
    <div className="-m-2 overflow-x-auto">
      <table className="w-full min-w-[20rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-border/60 bg-light-sage text-forest">
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 text-[0.8125rem] font-semibold uppercase tracking-wide"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={cn(
                "border-b border-border/50 last:border-0",
                i % 2 === 1 ? "bg-surface" : "bg-white",
              )}
            >
              <td className="px-4 py-2 text-[0.8125rem] text-foreground/85">{row.label}</td>
              <td className="px-4 py-2 text-[0.8125rem] font-medium text-forest">
                {col2IsCol3
                  ? (row.col3 ?? row.fee ?? "-")
                  : (row.fee ?? row.col3 ?? row.validity ?? "-")}
              </td>
              {columns[2] ? (
                <td className="px-4 py-2 text-[0.8125rem] text-muted-foreground">
                  {col2IsCol3
                    ? (row.fee ?? "-")
                    : col3Note
                      ? row.col3
                      : (row.validity ?? row.col3 ?? "-")}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const monthlyRows: Row[] = [
  { label: "Monthly (7 days)", fee: "AED 800", validity: "-" },
  { label: "5 times a week (20 classes)", fee: "AED 700", validity: "Valid for 6 weeks" },
  { label: "3 times a week (12 classes)", fee: "AED 550", validity: "Valid for 6 weeks" },
  { label: "Twice a week (8 classes)", fee: "AED 450", validity: "Valid for 6 weeks" },
  { label: "Single Class", fee: "AED 90", validity: "-" },
];

function MonthlyTable() {
  return <CardTable columns={["Package", "Fee", "Validity"]} rows={monthlyRows} />;
}

export function PackagesPage() {
  const [category, setCategory] = useState<Category>("All");
  const tabsRef = useRef<Map<Category, HTMLButtonElement>>(new Map());

  const show = (c: Category) => category === "All" || category === c;

  useEffect(() => {
    const activeBtn = tabsRef.current.get(category);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [category]);

  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="mt-7">
          <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            <div className="flex w-max items-center gap-1.5 sm:flex-wrap sm:justify-center">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  ref={(el) => {
                    if (el) tabsRef.current.set(c, el);
                  }}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={cn(
                    "shrink-0 cursor-pointer rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors",
                    category === c
                      ? "bg-forest text-forest-foreground shadow-sm"
                      : "border border-border bg-white text-forest/75 shadow-sm hover:border-forest/40 hover:text-forest",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {show("Private") ? (
            <SectionCard icon={User} title="1-2-1 Private Classes">
              <PriceCard detail="Per Session" price="AED 300" />
            </SectionCard>
          ) : null}

          {show("Home") ? (
            <SectionCard icon={Home} title="Home Classes">
              <PriceCard
                detail="Starting price per session"
                price="AED 450"
                priceNote="per class"
                info="Prices will vary based on location."
              />
            </SectionCard>
          ) : null}

          {show("Monthly") ? (
            <SectionCard icon={Calendar} title="Monthly Package" className="lg:col-span-2">
              <MonthlyTable />
            </SectionCard>
          ) : null}

          {show("3 Months") ? (
            <SectionCard icon={CalendarClock} title="3 Months Package">
              <CardTable
                columns={["Package", "Fee", "Details"]}
                rows={[
                  { label: "For all days", fee: "AED 1,800", col3: "AED 600 x 3 months" },
                  { label: "Thrice a week", fee: "AED 1,245", col3: "AED 415 x 3 months" },
                ]}
                col3Note
              />
            </SectionCard>
          ) : null}

          {show("Yearly") ? (
            <SectionCard icon={CalendarClock} title="Yearly Package">
              <CardTable
                columns={["Package", "Fee", "Details"]}
                rows={[{ label: "For all days", fee: "AED 6,720", col3: "AED 560 x 12 months" }]}
                col3Note
              />
            </SectionCard>
          ) : null}

          {show("Additional Services") ? (
            <SectionCard icon={Sparkles} title="Additional Services">
              <CardTable
                columns={["Service", "Duration", "Fee"]}
                rows={[
                  { label: "Pressure Point Therapy", col3: "30 minutes", fee: "AED 180" },
                  { label: "Stone Therapy", col3: "30 minutes", fee: "AED 180" },
                  { label: "Customized Diet Plan", col3: "-", fee: "AED 600" },
                ]}
                col2IsCol3
              />
            </SectionCard>
          ) : null}

          {show("Prenatal Yoga") ? (
            <SectionCard icon={Baby} title="Prenatal Yoga">
              <CardTable
                columns={["Classes", "Fee"]}
                rows={[{ label: "12 classes (validity is 6 weeks)", fee: "AED 650" }]}
              />
            </SectionCard>
          ) : null}
        </div>
      </div>
    </div>
  );
}
