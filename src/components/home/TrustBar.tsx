const STATS = [
  { value: "23+", label: "Years Experience", small: false },
  { value: "5", label: "Expert Trainers", small: false },
  { value: "Online & In-Studio", label: "Flexible Practice", small: true },
  { value: "1000+", label: "Students Served", small: false },
] as const;

export function TrustBar() {
  return (
    <section aria-label="Studio highlights" className="bg-forest">
      <div className="container-page grid grid-cols-2 gap-x-4 gap-y-5 py-6 lg:grid-cols-4 lg:py-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center text-center">
            <span className="flex h-[2.5rem] items-end sm:h-[3rem]">
              <p
                className={
                  stat.small
                    ? "font-display text-xl text-cream sm:text-2xl"
                    : "font-display text-3xl text-cream sm:text-4xl"
                }
              >
                {stat.value}
              </p>
            </span>

            <p className="mt-1 text-sm text-cream/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
