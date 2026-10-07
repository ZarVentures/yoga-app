export type Trainer = {
  /** URL slug — appended to /trainer/ for the detail page */
  slug: string;
  name: string;
  designation: string;
  /** Shorter variant shown on the listing card */
  designationShort?: string;
  experience: string;
  /** Shorter variant shown on the listing card */
  experienceShort?: string;
  /** Short introduction shown on the listing card */
  bio: string;
  /** Complete biography rendered on the detail page, paragraphs separated by \n\n */
  biography: string;
  specialisations: string[];
  certifications?: string[];
  languages?: string[];
  wellnessTip: string;
  imageAlt: string;
  /** Real image URL. Leave undefined to show the placeholder until a real photo is added. */
  src?: string;
  /** True for the founder, rendering a slightly more prominent card. */
  featured?: boolean;
};

export const TRAINERS: Trainer[] = [
  {
    slug: "rumana-rab",
    name: "Rumana Rab",
    designation:
      "Founder of Rumana Rab Holistic Yoga Center | Yoga Therapist & Prenatal Yoga Expert",
    designationShort: "Yoga Therapist & Prenatal Yoga Expert",
    experience: "23+ Years of Experience in Dubai",
    experienceShort: "23+ Years of Experience",
    bio: "Rumana Rab is a highly experienced yoga therapist specializing in therapeutic yoga, chronic pain management, prenatal yoga and holistic wellness. Her approach combines personalized yoga practices with mindful movement, breathwork and lifestyle guidance.",
    biography:
      "Rumana Rab has over 23+ years of experience and specializes in Yoga Therapy, chronic back pain, arthritis, hypertension and prenatal yoga.\n\nHer expertise includes Hatha, Vinyasa and therapeutic yoga, with personalized practices designed to improve mobility, strength, flexibility, pain management and overall wellbeing.\n\nShe also provides holistic guidance for stress, anxiety and emotional wellbeing through mindful movement, breathwork, meditation, lifestyle guidance and personalized diet plans.\n\nHer compassionate approach helps individuals build a healthier and more balanced life through therapeutic yoga.",
    specialisations: [
      "Yoga Therapy",
      "Prenatal Yoga",
      "Hatha Yoga",
      "Vinyasa Yoga",
      "Chronic Pain Management",
      "Arthritis",
      "Hypertension",
      "Stress & Anxiety Management",
      "Breathwork & Meditation",
      "Personalized Diet & Lifestyle Guidance",
    ],
    certifications: ["Certified Yoga Therapist", "Certified Prenatal Yoga Instructor"],
    languages: ["English", "Hindi", "Urdu"],
    wellnessTip: "Kill Your Pain With Your Brain",
    imageAlt: "Rumana Rab — Founder, Yoga Therapist & Prenatal Yoga Expert",
    src: "/trainerpage.png",
    featured: true,
  },
  {
    slug: "meezan-rab",
    name: "Meezan Rab",
    designation: "Yoga Instructor & Strength Training Expert | Vinyasa Flow Specialist",
    designationShort: "Yoga Instructor & Strength Training Expert",
    experience: "7 Years of Experience",
    bio: "Meezan brings an energetic and dynamic approach to yoga and fitness, combining Vinyasa Flow, Hatha Yoga and strength training.",
    biography:
      "Meezan Rab brings an energetic, dynamic and results-oriented approach to yoga and fitness, with 7 years of teaching experience at the center.\n\nHe specializes in Strength Training, Vinyasa Flow, Hatha Yoga and dynamic fitness yoga. His sessions combine traditional yoga with strength, mobility, flexibility and cardiovascular conditioning.\n\nHe integrates yoga with high-intensity training to support full-body strength, core strength, endurance, flexibility and healthy weight management.\n\nHis energetic teaching style makes sessions effective, motivating and accessible while maintaining mindfulness and balance.",
    specialisations: [
      "Strength Training",
      "Vinyasa Flow",
      "Hatha Yoga",
      "Dynamic Fitness Yoga",
      "Core Development",
      "Endurance",
      "Flexibility",
      "Healthy Weight Management",
    ],
    certifications: ["Certified Hatha Yoga Teacher", "Certified HIIT Instructor"],
    languages: ["English", "Hindi", "Urdu"],
    wellnessTip: "Your health is an investment, not an expense.",
    imageAlt: "Meezan Rab — Yoga Instructor & Strength Training Expert",
    src: "/trainerpage1.png",
  },
  {
    slug: "shikha-kalia",
    name: "Shikha Kalia",
    designation: "Advanced Yoga & Vinyasa Flow Instructor | Weight Management Specialist",
    designationShort: "Advanced Yoga & Vinyasa Flow Instructor",
    experience: "12 Years of Teaching Experience",
    bio: "Trained under Rumana Rab, Shikha specializes in advanced yoga, Vinyasa Flow, Power Yoga, posture correction and weight management.",
    biography:
      "Shikha Kalia was trained under Rumana Rab and has 12 years of teaching experience at the center.\n\nHer expertise includes advanced yoga, Vinyasa Flow, Power Yoga, posture correction, weight management and deep stretching.\n\nHer sessions focus on alignment, strength, flexibility, mobility and mindful movement. Each practice is tailored to the individual's needs and fitness level.\n\nHer supportive and encouraging approach helps students build confidence, improve physical wellbeing and develop greater flexibility and strength.",
    specialisations: [
      "Advanced Yoga",
      "Vinyasa Flow",
      "Power Yoga",
      "Posture Correction",
      "Weight Management",
      "Deep Stretching",
      "Alignment",
      "Strength & Flexibility",
    ],
    certifications: ["Certified Power Yoga Instructor", "Certified Fitness Trainer"],
    languages: ["English", "Hindi"],
    wellnessTip: "Consistency over perfection",
    imageAlt: "Shikha Kalia — Advanced Yoga & Vinyasa Flow Instructor",
    src: "/trainerpage2.png",
  },
  {
    slug: "naaz-rab",
    name: "Naaz Rab",
    designation: "Certified Zumba Practitioner & Hatha Yoga Instructor",
    experience: "1 Year of Teaching Experience",
    bio: "Naaz combines energetic Zumba with mindful Hatha Yoga to make movement enjoyable while supporting fitness, flexibility and wellbeing.",
    biography:
      "Naaz Rab is passionate and energetic, with 1 year of teaching experience at the center.\n\nShe combines fun and energetic Zumba dance sessions with Hatha Yoga. Her Hatha practices focus on mindful movement, strength, flexibility and balance.\n\nHer sessions support cardiovascular fitness, coordination, stamina, flexibility, strength and overall wellbeing.\n\nShe creates a warm and welcoming environment where fitness feels enjoyable, empowering and uplifting.",
    specialisations: [
      "Zumba",
      "Hatha Yoga",
      "Fitness",
      "Cardiovascular Fitness",
      "Coordination",
      "Stamina",
      "Flexibility",
      "Strength",
    ],
    languages: ["English", "Hindi", "Urdu"],
    wellnessTip:
      "Focus on progress over perfection—consistency and commitment are key to lasting results.",
    imageAlt: "Naaz Rab — Certified Zumba Practitioner & Hatha Yoga Instructor",
    src: "/trainerpage3.png",
  },
  {
    slug: "dr-bismi-mp",
    name: "Dr. Bismi MP",
    designation: "Naturopathy & Yoga Physician | Yoga Therapist | Diet & Nutrition Expert",
    designationShort: "Naturopathy & Yoga Physician | Yoga Therapist",
    experience: "10 Years of Professional Experience in India and Dubai",
    experienceShort: "10 Years of Professional Experience",
    bio: "Dr. Bismi combines naturopathy, therapeutic yoga, nutrition and mindful movement for a holistic approach to physical and mental wellbeing.",
    biography:
      "Dr. Bismi MP has 10 years of professional experience in India and Dubai.\n\nShe follows a holistic approach integrating naturopathy, therapeutic yoga, nutrition, mindful movement and lifestyle management.\n\nHer expertise includes Therapy Yoga, pain management through acupressure, personalized diet and nutrition, counselling, posture correction, deep stretching, body alignment and meditation.\n\nHer personalized practices support mobility, flexibility, strength, relaxation, pain management and balance.\n\nHer compassionate approach empowers individuals to develop healthy habits and a stronger connection between body and mind.",
    specialisations: [
      "Naturopathy",
      "Therapy Yoga",
      "Pain Management",
      "Acupressure",
      "Diet & Nutrition",
      "Counselling",
      "Posture Correction",
      "Deep Stretching",
      "Body Alignment",
      "Meditation",
    ],
    languages: ["English", "Hindi", "Malayalam"],
    wellnessTip:
      "Where the mind goes, the body follows. Look after your mind and your body will look after you. Nourish your body with good food, exercise, and positivity!",
    imageAlt: "Dr. Bismi MP — Naturopathy & Yoga Physician",
    src: "/trainerpage4.png",
  },
];

export const getTrainerBySlug = (slug: string) => TRAINERS.find((trainer) => trainer.slug === slug);

export const WHY_CHOOSE_TRAINERS = [
  {
    title: "Experienced & Certified",
    description: "Experienced trainers with professional knowledge and recognised certifications.",
  },
  {
    title: "Personalised Guidance",
    description: "Guidance tailored to individual goals, needs and experience levels.",
  },
  {
    title: "Holistic Approach",
    description: "Supporting body, mind and overall well-being.",
  },
  {
    title: "Supportive Environment",
    description: "A welcoming and caring environment for every stage of your journey.",
  },
];
