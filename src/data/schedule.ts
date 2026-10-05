/**
 * Central, editable schedule data.
 * WEEKLY_SCHEDULE maps each day to one entry per TIME_SLOT (in the same order).
 * `null` = no class at that slot. Update these arrays to change the timetable.
 */

export type ClassTag = "MIX" | "LADIES" | "LADIES ONLINE";

export type ClassInfo = {
  label: string;
  subtitle: string;
  name: string;
  description: string;
  cellClassName: string;
  swatchClassName: string;
  subtitleClassName?: string;
};

export const CLASS_INFO: Record<ClassTag, ClassInfo> = {
  MIX: {
    label: "MIX",
    subtitle: "Group Yoga",
    name: "Mixed Classes",
    description: "Open to all participants.",
    cellClassName: "bg-sage text-white",
    subtitleClassName: "text-white/85",
    swatchClassName: "bg-light-sage",
  },
  LADIES: {
    label: "LADIES",
    subtitle: "Ladies Yoga",
    name: "Ladies Classes",
    description: "Dedicated ladies-only sessions.",
    cellClassName: "bg-gold text-forest",
    swatchClassName: "bg-gold",
  },
  "LADIES ONLINE": {
    label: "LADIES ONLINE",
    subtitle: "Online Session",
    name: "Online Classes",
    description: "Join from the comfort of your home.",
    cellClassName: "bg-[linear-gradient(180deg,#2C7958_0%,#2D634C_100%)] text-white",
    subtitleClassName: "text-white/85",
    swatchClassName: "bg-sage/60",
  },
};

export const CLASS_TYPES: ClassTag[] = ["MIX", "LADIES", "LADIES ONLINE"];

export const TIME_SLOTS = [
  { label: "8:00 – 9:00 AM" },
  { label: "9:15 – 10:15 AM" },
  { label: "10:00 – 11:00 AM" },
  { label: "10:30 – 11:30 AM" },
  { label: "5:45 – 6:45 PM" },
  { label: "7:00 – 8:00 PM" },
] as const;

export const SCHEDULE_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
] as const;

export type ScheduleDay = (typeof SCHEDULE_DAYS)[number];

export const DAY_SHORT: Record<ScheduleDay, string> = {
  MONDAY: "MON",
  TUESDAY: "TUE",
  WEDNESDAY: "WED",
  THURSDAY: "THU",
  FRIDAY: "FRI",
  SATURDAY: "SAT",
  SUNDAY: "SUN",
};

export const WEEKLY_SCHEDULE: Record<ScheduleDay, readonly (ClassTag | null)[]> = {
  MONDAY: ["MIX", "LADIES", null, "LADIES ONLINE", "MIX", "MIX"],
  TUESDAY: ["MIX", "LADIES", null, "LADIES ONLINE", "MIX", "MIX"],
  WEDNESDAY: ["MIX", "LADIES", null, "LADIES ONLINE", "MIX", "MIX"],
  THURSDAY: ["MIX", "LADIES", null, "LADIES ONLINE", "MIX", "MIX"],
  FRIDAY: ["MIX", "LADIES", null, "LADIES ONLINE", "MIX", null],
  SATURDAY: [null, null, "MIX", null, null, null],
  SUNDAY: [null, null, "MIX", null, null, null],
};
