import { Flower2, Leaf, MonitorSmartphone, PersonStanding, UserCheck, Users } from "lucide-react";

const FEATURES = [
  {
    title: "Specialized Yoga Therapy",
    description:
      "Personalized yoga therapy practices designed to support individual wellbeing needs.",
    Icon: PersonStanding,
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from experienced instructors who provide personalized guidance and mindful support for your individual yoga journey.",
    Icon: UserCheck,
  },
  {
    title: "Holistic Approach",
    description:
      "We focus on the connection between the body, breath, mind, and overall wellbeing.",
    Icon: Flower2,
  },
  {
    title: "Beginners Friendly",
    description:
      "Start your yoga journey with simple, guided practices in a comfortable and supportive environment.",
    Icon: Users,
  },
  {
    title: "Peaceful Environment",
    description:
      "Practice in a calm and welcoming environment designed to help you relax, reconnect, and focus on your yoga journey.",
    Icon: Leaf,
  },
  {
    title: "Online & In-Person Yoga in Dubai",
    description: "Practice in a way that fits naturally into your lifestyle.",
    Icon: MonitorSmartphone,
  },
] as const;

export function WhyChooseSection() {
  return (
    <section className="bg-[#DDE8D5]">
      <div className="mx-auto max-w-[1183px] px-8 py-10 lg:py-12">
        <h2 className="text-center font-display text-[28px] font-semibold leading-tight text-[#123D2B] lg:text-[32px]">
          Why Choose Rumana Rab Holistic Yoga Centre:
        </h2>

        <p className="mx-auto mt-3 max-w-[950px] text-center text-[15px] font-normal leading-[1.5] text-[#405348]">
          At Rumana Rab Holistic yoga Centre, we combine 19 years of yoga experience with a
          personalized approach to support your individual wellbeing journey.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, description, Icon }) => (
            <article key={title} className="flex items-center gap-4 rounded-md bg-[#F9F7E6] p-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#E1ECD7] text-[#496956]">
                <Icon className="size-8" aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug text-[#173F30]">{title}</h3>
                <p className="mt-1 text-[13px] leading-[1.4] text-[#405348]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
