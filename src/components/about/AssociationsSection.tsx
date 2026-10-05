type Partner = {
  name: string;
  src: string;
  logoClass?: string;
  cardBg?: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Partner 1",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    logoClass: "h-16 w-auto object-contain",
  },
  {
    name: "Partner 2",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Emirates_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    logoClass: "h-24 w-24 object-contain",
  },
  {
    name: "Partner 3",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Fly_Dubai_logo_2010_05.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  },
  {
    name: "Partner 4",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Emirates_NBD_Logo.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    logoClass: "h-14 w-auto object-contain",
  },
  {
    name: "Partner 5",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Aster_DM_Healthcare_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    logoClass: "h-20 w-auto object-contain",
  },
  {
    name: "Partner 6",
    src: "https://indiaclubdubai.com/wp-content/uploads/2026/04/India-Club-Dubai-Logo-Main.png",
    logoClass: "h-15 w-auto object-contain",
  },
  {
    name: "Partner 7",
    src: "https://thumbayhospital.com/wp-content/uploads/2023/01/th-logo-2.jpg",
    logoClass: "h-16 w-auto object-contain",
  },
  {
    name: "Partner 8",
    src: "	https://dubaigem.ae/wp-content/uploads/2025/08/dgps-logo-menu-65.png",
    logoClass: "h-22 w-auto object-contain",
  },
  {
    name: "Partner 9",
    src: "/partner9.png",
    logoClass: "h-55 w-55 object-contain",
  },
  {
    name: "Partner 10",
    src: "https://api.dulsco.com/wp-content/uploads/2025/02/Dulsco-Group-Logo-Wide-English-red-white.svg",
    logoClass: "h-50 w-50 object-contain",
  },
  { name: "Partner 11", src: "/partner11.png", logoClass: "h-45 w-45 object-contain" },
  { name: "Partner 12", src: "/partner12.png", logoClass: "h-24 w-24 object-contain" },
];

export function AssociationsSection() {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-light-sage">
      <div className="container-page pb-0 pt-8 lg:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Partners</p>
          <h2 className="mt-3 text-3xl lg:text-4xl">Our Associations</h2>
        </div>

        <div aria-label="Our partners" className="relative -mt-2 w-full overflow-hidden">
          <div className="flex w-full" style={{ animation: "rr-marquee 36s linear infinite" }}>
            {track.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex w-1/2 shrink-0 items-center justify-center px-6 sm:w-1/3 lg:w-1/4"
              >
                {partner.src ? (
                  <span
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2"
                    style={partner.cardBg ? { backgroundColor: partner.cardBg } : undefined}
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      loading="lazy"
                      className={partner.logoClass ?? "h-12 w-auto object-contain"}
                    />
                  </span>
                ) : (
                  <span className="text-sm font-medium tracking-[0.16em] text-muted-foreground">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes rr-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-600%); }
          }
          @media (min-width: 640px) {
            @keyframes rr-marquee {
              to { transform: translateX(-400%); }
            }
          }
          @media (min-width: 1024px) {
            @keyframes rr-marquee {
              to { transform: translateX(-300%); }
            }
          }
        `}</style>
      </div>
    </section>
  );
}
