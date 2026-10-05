export type Expectation = {
  icon: string;
  title: string;
  text: string;
};

export type YogaClass = {
  /** URL slug, appended to /classes/ */
  slug: string;
  /** Display label used in navigation, footer and page titles */
  label: string;
  /** Short category/eyebrow shown in the hero */
  subtitle: string;
  /** Full route path */
  path: string;
  /** Short description shown on the class cards and hero */
  shortDescription: string;
  /** Long-form hero description */
  description: string;
  /** About paragraph shown in the About this practice section */
  about: string;
  /** List of key benefits shown in the detail content */
  benefits: string[];
  /** Full who-it-is-for description shown in the detail content */
  whoFor: string;
  /** What to expect items shown in the detail content */
  expectations: Expectation[];
  /** Accessible alt text for the card image */
  imageAlt: string;
  /** Card image URL — leave empty to show the placeholder */
  image: string;
  /** Optional Tailwind classes for the card image (e.g. object-position to avoid cropping) */
  imagePosition?: string | undefined;
};

type ClassSeed = Pick<YogaClass, "slug" | "label" | "shortDescription"> &
  Partial<Omit<YogaClass, "slug" | "label" | "shortDescription">>;

const make = ({ slug, label, shortDescription, ...rest }: ClassSeed): YogaClass => ({
  slug,
  label,
  subtitle: "Holistic Wellness",
  path: `/classes/${slug}`,
  shortDescription,
  description: `A gentle, guided ${label.toLowerCase()} practice designed to support your body and mind.`,
  about: `A gentle, personalized ${label.toLowerCase()} practice designed to support your body and mind.`,
  benefits: [
    "Improve mobility and flexibility",
    "Build strength and balance",
    "Reduce stress and calm the mind",
    "Boost energy and focus",
  ],
  whoFor: "Suitable for all levels — from beginners to experienced practitioners.",
  expectations: [
    {
      icon: "wind",
      title: "Breathing Techniques",
      text: "Simple breath practices to calm the mind and support relaxation.",
    },
    {
      icon: "activity",
      title: "Mindful Movement",
      text: "Gentle, guided movements that support your body without strain.",
    },
    {
      icon: "user-check",
      title: "Personalized Guidance",
      text: "Each session is adapted to your needs, comfort, and pace.",
    },
    {
      icon: "moon",
      title: "Deep Relaxation",
      text: "Restorative practices that leave you feeling calm and refreshed.",
    },
  ],
  imageAlt: `${label} class at Rumana Rab Holistic Yoga`,
  image: "",
  ...rest,
});

export const CLASSES: YogaClass[] = [
  make({
    slug: "therapy-yoga",
    label: "Therapy Yoga",
    shortDescription:
      "Personalized yoga practices designed to support physical wellbeing, relaxation, mobility, and overall balance.",
    description:
      "Therapy Yoga focuses on gentle, personalized practices that support mobility, relaxation, body awareness, and overall wellbeing.",
    about:
      "Therapy Yoga is a gentle and personalized approach that helps support the body's natural balance. It combines mindful postures, breathing techniques, and deep relaxation to improve mobility, reduce tension, and create a sense of ease in everyday life.",
    benefits: [
      "Supports flexibility and mobility",
      "Encourages deep relaxation",
      "Improves body awareness",
      "Supports better posture",
      "Helps reduce stress and tension",
      "Promotes overall wellbeing",
    ],
    whoFor:
      "Suitable for people looking for a gentle and personalized approach to yoga and wellbeing. Ideal for those dealing with stiffness, stress, low energy, or recovering from fatigue.",
    expectations: [
      {
        icon: "activity",
        title: "Gentle Movements",
        text: "Slow, mindful postures that support your body without strain.",
      },
      {
        icon: "wind",
        title: "Breathing Techniques",
        text: "Simple breath practices to calm the mind and support relaxation.",
      },
      {
        icon: "user-check",
        title: "Personalized Guidance",
        text: "Each session is adapted to your needs, comfort, and pace.",
      },
      {
        icon: "moon",
        title: "Deep Relaxation",
        text: "Restorative practices that leave you feeling calm and refreshed.",
      },
    ],
    image: "/program1.jpg",
  }),
  make({
    slug: "prenatal-yoga",
    label: "Prenatal Yoga",
    shortDescription:
      "Gentle and mindful yoga practices created to support comfort, strength, relaxation, and wellbeing during pregnancy.",
    description:
      "Prenatal Yoga offers gentle, mindful movement and breathing designed to support comfort, mobility, relaxation, and wellbeing throughout pregnancy.",
    about:
      "Prenatal Yoga supports your changing body with gentle movement, calming breathwork, and mindful relaxation. Each practice is designed to ease common discomforts, improve circulation, and help you build strength and confidence while staying comfortable and relaxed.",
    benefits: [
      "Supports gentle movement and mobility",
      "Encourages calm breathing and relaxation",
      "Helps ease common pregnancy discomforts",
      "Builds gentle strength and stability",
      "Improves body awareness and posture",
      "Promotes a sense of calm and confidence",
    ],
    whoFor:
      "Suitable for expectant mothers looking for gentle, mindful movement and relaxation. Always check with your care provider before starting any new practice during pregnancy.",
    expectations: [
      {
        icon: "activity",
        title: "Gentle Postures",
        text: "Comfortable, supported movements that respect your changing body.",
      },
      {
        icon: "wind",
        title: "Breathing Practice",
        text: "Calming breathwork to support relaxation and focus.",
      },
      {
        icon: "shield",
        title: "Mindful Support",
        text: "Practices guided by comfort, safety, and your own pace.",
      },
      {
        icon: "moon",
        title: "Deep Rest",
        text: "Restorative moments that leave you feeling soothed and refreshed.",
      },
    ],
    image: "/program2.jpg",
  }),
  make({
    slug: "yoga-for-weight-loss",
    label: "Yoga for Weight Loss",
    shortDescription:
      "Dynamic and mindful yoga practices that support movement, energy, healthy habits, and a balanced lifestyle.",
    description:
      "Yoga for Weight Loss combines dynamic movement, strength, and mindful habits to help you feel more energetic, active, and balanced.",
    about:
      "This practice focuses on movement, strength, energy, and healthy everyday habits. Through flowing sequences, mindful breathing, and gentle challenge, it supports an active lifestyle, better body awareness, and a balanced, sustainable approach to wellbeing.",
    benefits: [
      "Supports an active lifestyle",
      "Builds strength and stamina",
      "Boosts daily energy and focus",
      "Improves body awareness",
      "Encourages healthy habits",
      "Supports a balanced mindset",
    ],
    whoFor:
      "Suitable for people looking to become more active, build strength, and develop healthy, sustainable habits in a supportive and enjoyable way.",
    expectations: [
      {
        icon: "zap",
        title: "Dynamic Flow",
        text: "Energetic sequences that get you moving and build stamina.",
      },
      {
        icon: "dumbbell",
        title: "Strength Work",
        text: "Postures that build lean strength and stability.",
      },
      {
        icon: "heart-pulse",
        title: "Mindful Movement",
        text: "Movement that supports energy and body awareness.",
      },
      {
        icon: "check-circle",
        title: "Healthy Habits",
        text: "Simple guidance to support an active, balanced routine.",
      },
    ],
    image: "/program3.jpeg",
    imagePosition: "scale-110 object-[80%_center]",
  }),
  make({
    slug: "body-toning-yoga",
    label: "Body Toning Yoga",
    shortDescription:
      "Focused yoga movements that help improve strength, flexibility, posture, body awareness, and overall tone.",
    description:
      "Body Toning Yoga uses focused movement and mindful holds to improve strength, flexibility, posture, stability, and body awareness.",
    about:
      "This practice blends flowing movement with stabilizing holds to tone and strengthen the body. It focuses on postural alignment, core stability, and flexibility, helping you feel stronger, more balanced, and more connected to your body.",
    benefits: [
      "Builds strength and muscle tone",
      "Improves flexibility and range of motion",
      "Supports better posture",
      "Strengthens core stability",
      "Enhances body awareness",
      "Boosts confidence and energy",
    ],
    whoFor:
      "Suitable for those who want to tone, strengthen, improve posture, and feel more confident and energized in their bodies.",
    expectations: [
      {
        icon: "dumbbell",
        title: "Toning Postures",
        text: "Focused poses to build strength and definition.",
      },
      {
        icon: "stretch-vertical",
        title: "Lengthening Flow",
        text: "Movement that improves flexibility and ease.",
      },
      {
        icon: "align-center-vertical",
        title: "Posture Practice",
        text: "Alignment cues that support healthy posture.",
      },
      {
        icon: "flame",
        title: "Core Stability",
        text: "Engaging holds for a strong, balanced center.",
      },
    ],
    image: "/program4.jpg",
  }),
  make({
    slug: "meditation-yoga",
    label: "Meditation Yoga",
    shortDescription:
      "A calming combination of mindful movement, breathing, and meditation to encourage inner calm and mental clarity.",
    description:
      "Meditation Yoga blends mindful movement, breathing, and meditation to cultivate calm, concentration, and inner balance.",
    about:
      "Meditation Yoga is a soothing practice centered on mindfulness, breath, and stillness. It helps quiet the mind, improve concentration, and create a lasting sense of inner calm and balance that you can carry into everyday life.",
    benefits: [
      "Cultivates inner calm",
      "Improves focus and concentration",
      "Supports emotional balance",
      "Reduces mental clutter",
      "Encourages mindful living",
      "Promotes deep relaxation",
    ],
    whoFor:
      "Suitable for anyone wanting to calm the mind, improve focus, and build a more mindful, centered way of living.",
    expectations: [
      {
        icon: "brain",
        title: "Meditation",
        text: "Guided stillness to settle and focus the mind.",
      },
      {
        icon: "wind",
        title: "Breath Awareness",
        text: "Conscious breathing to anchor your attention.",
      },
      {
        icon: "leaf",
        title: "Mindful Presence",
        text: "Practices that bring awareness into the present moment.",
      },
      {
        icon: "moon",
        title: "Deep Calm",
        text: "Restful moments of quiet and inner balance.",
      },
    ],
    image: "/program5.jpeg",
  }),
  make({
    slug: "laughter-therapy",
    label: "Laughter Therapy",
    shortDescription:
      "A joyful wellness practice using laughter, breathing, and positive energy to encourage relaxation and emotional wellbeing.",
    description:
      "Laughter Therapy uses joyful movement, breathing, and shared laughter to boost positive energy, relaxation, and emotional wellbeing.",
    about:
      "Laughter Therapy is a lighthearted, uplifting practice built around laughter, playful breathing, and joyful movement. It supports emotional wellbeing, reduces everyday tension, and fills you with positive energy and a renewed sense of lightness.",
    benefits: [
      "Lifts mood and positive energy",
      "Supports emotional wellbeing",
      "Encourages joyful movement",
      "Promotes relaxation and release",
      "Improves mood and outlook",
      "Builds connection and joy",
    ],
    whoFor:
      "Suitable for anyone wanting to lighten their mood, release stress, and connect with joy and positive energy in a fun, welcoming setting.",
    expectations: [
      {
        icon: "smile",
        title: "Playful Laughter",
        text: "Simple laughter exercises that spark genuine joy.",
      },
      {
        icon: "wind",
        title: "Breathing Games",
        text: "Playful breathwork that energizes and relaxes.",
      },
      {
        icon: "sparkles",
        title: "Positive Energy",
        text: "Practices that lift your mood and outlook.",
      },
      {
        icon: "heart",
        title: "Lightness",
        text: "A sense of ease and connection that stays with you.",
      },
    ],
    image: "/program6.png",
  }),
  make({
    slug: "facial-exercise",
    label: "Facial Exercise",
    shortDescription:
      "Simple facial exercises designed to encourage facial movement, relaxation, circulation, and healthy-looking skin.",
    description:
      "Facial Exercise uses gentle, targeted movements to encourage facial mobility, relaxation, circulation, and healthy-looking skin.",
    about:
      "Facial Exercise is a gentle practice focused on facial movement, relaxation, and circulation. Simple, mindful exercises help release facial tension, improve circulation, and support a fresh, healthy-looking appearance without any special equipment.",
    benefits: [
      "Encourages facial mobility",
      "Releases facial tension",
      "Supports circulation",
      "Improves facial awareness",
      "Promotes a relaxed expression",
      "Supports healthy-looking skin",
    ],
    whoFor:
      "Suitable for anyone wanting to relax facial tension, improve circulation, and support a fresh, healthy-looking appearance.",
    expectations: [
      {
        icon: "smile",
        title: "Gentle Movements",
        text: "Soft, mindful exercises for the face and jaw.",
      },
      {
        icon: "droplet",
        title: "Circulation",
        text: "Practice that supports a fresh, healthy glow.",
      },
      {
        icon: "hand",
        title: "Tension Release",
        text: "Techniques to soften and relax the face.",
      },
      {
        icon: "sparkles",
        title: "Healthy-Looking Skin",
        text: "Gentle habits that support your natural radiance.",
      },
    ],
    image: "/program7.jpeg",
  }),
  make({
    slug: "eye-yoga",
    label: "Eye Yoga",
    shortDescription:
      "Gentle eye exercises and relaxation techniques designed to reduce visual strain and encourage comfortable eye movement.",
    description:
      "Eye Yoga uses gentle eye movement and relaxation techniques to reduce everyday eye strain and support comfortable vision.",
    about:
      "Eye Yoga is a gentle practice focused on eye movement, relaxation, and visual comfort. Through simple exercises and mindful resting techniques, it helps ease the strain of screens and long focus, supporting relaxed, comfortable eyes.",
    benefits: [
      "Reduces everyday eye strain",
      "Improves eye mobility",
      "Relaxes tired eyes",
      "Supports visual comfort",
      "Improves focusing flexibility",
      "Promotes mindful screen rest",
    ],
    whoFor:
      "Suitable for people who spend long hours on screens or want gentle, relaxing exercises to support comfortable, healthy eyes.",
    expectations: [
      {
        icon: "eye",
        title: "Gentle Movement",
        text: "Soft eye exercises that support mobility.",
      },
      {
        icon: "focus",
        title: "Focus Training",
        text: "Simple shifts to improve near and far focus.",
      },
      {
        icon: "palmtree",
        title: "Eye Rest",
        text: "Restful techniques to soothe tired eyes.",
      },
      {
        icon: "monitor",
        title: "Screen Comfort",
        text: "Tips to ease the strain of everyday screen use.",
      },
    ],
    image: "/program8.jpeg",
  }),
  make({
    slug: "customized-diet",
    label: "Customized Diet",
    shortDescription:
      "Personalized dietary guidance designed to complement your wellness goals and support a balanced everyday lifestyle.",
    description:
      "Customized Diet offers personalized nutrition guidance, balanced eating, and healthy habits tailored to your individual wellness goals.",
    about:
      "Customized Diet focuses on personalized nutrition guidance and balanced, sustainable eating. We work with your individual goals and lifestyle to build practical, healthy habits that complement your yoga practice and support overall wellbeing.",
    benefits: [
      "Personalized nutrition guidance",
      "Balanced, sustainable habits",
      "Supports individual goals",
      "Encourages mindful eating",
      "Practical, everyday advice",
      "Supports overall wellbeing",
    ],
    whoFor:
      "Suitable for anyone seeking personalized, practical nutrition guidance and healthy habits that fit their goals and daily life.",
    expectations: [
      {
        icon: "salad",
        title: "Balanced Eating",
        text: "Simple, nourishing choices for everyday balance.",
      },
      {
        icon: "user-check",
        title: "Personalized Plan",
        text: "Advice tailored to your goals and lifestyle.",
      },
      {
        icon: "notebook",
        title: "Mindful Habits",
        text: "Healthy routines you can sustain over time.",
      },
      {
        icon: "sun",
        title: "Wellness Support",
        text: "Guidance that complements your yoga practice.",
      },
    ],
    image: "/program9.jpeg",
  }),
  make({
    slug: "yoga-for-back-pain",
    label: "Yoga for Back Pain",
    shortDescription: "Gentle yoga to support flexibility, mobility, and a healthier back.",
    description: "Gentle yoga to support flexibility, mobility, and a healthier back.",
    about:
      "Yoga for Back Pain uses gentle stretches, mindful movement, strengthening exercises, and breathing techniques to help support better posture, body awareness, and comfortable movement. Practices can be adapted to individual needs and experience levels, making yoga a mindful addition to a balanced approach to back care.",
    benefits: [
      "Supports flexibility and everyday mobility",
      "Strengthens the core and supporting muscles",
      "Encourages better posture and body awareness",
      "Helps ease everyday muscle tension and stiffness",
      "Promotes relaxation through mindful breathing",
      "Supports comfortable movement during daily activities",
    ],
    whoFor:
      "Move, stretch, and breathe with greater awareness. Our guided Yoga for Back Pain sessions focus on gentle and controlled practices that encourage you to move at a comfortable pace while developing a stronger connection with your body.",
    expectations: [
      {
        icon: "activity",
        title: "Gentle Stretching",
        text: "Slow movements that ease back tension.",
      },
      {
        icon: "target",
        title: "Core Awareness",
        text: "Gentle work to support and stabilize the back.",
      },
      {
        icon: "align-center-vertical",
        title: "Posture Support",
        text: "Alignment cues for everyday comfort.",
      },
      {
        icon: "moon",
        title: "Rest & Release",
        text: "Relaxation to soften and refresh the body.",
      },
    ],
    image: "/program10.png",

  }),
  make({
    slug: "yoga-for-kids",
    label: "Yoga for Kids",
    shortDescription:
      "Fun and playful yoga sessions designed to help children build focus, flexibility, balance, and confidence.",
    description:
      "Yoga for Kids uses fun, playful sessions to help children build focus, flexibility, balance, and confidence.",
    about:
      "Yoga for Kids brings movement to life through playful poses, games, and storytelling. It helps children improve focus, balance, and flexibility while building confidence, body awareness, and a positive relationship with movement and calm.",
    benefits: [
      "Builds focus and concentration",
      "Improves flexibility and balance",
      "Encourages confidence",
      "Develops body awareness",
      "Promotes calm and relaxation",
      "Makes movement fun",
    ],
    whoFor:
      "Suitable for children and families looking for a playful, engaging introduction to movement, mindfulness, and calm.",
    expectations: [
      {
        icon: "toy-brick",
        title: "Playful Poses",
        text: "Fun positions inspired by nature and animals.",
      },
      {
        icon: "gamepad",
        title: "Movement Games",
        text: "Active play that builds focus and balance.",
      },
      {
        icon: "users",
        title: "Confidence Building",
        text: "Encouraging practice that helps kids feel capable.",
      },
      {
        icon: "moon",
        title: "Calm Time",
        text: "Gentle moments to relax and settle.",
      },
    ],
    image: "/program11.png",
  }),
  make({
    slug: "yoga-for-arthritis",
    label: "Yoga for Arthritis",
    shortDescription:
      "Supportive and gentle yoga practices designed to improve joint mobility, reduce stiffness, and relieve discomfort.",
    description:
      "Yoga for Arthritis uses supportive, gentle practice to improve joint mobility, reduce stiffness, and relieve everyday discomfort.",
    about:
      "This practice offers gentle, supportive movement designed for joint comfort. It focuses on improving mobility, reducing stiffness, and supporting flexibility through mindful, low-impact postures that respect your body's needs.",
    benefits: [
      "Improves joint mobility",
      "Reduces stiffness",
      "Supports flexibility",
      "Eases everyday discomfort",
      "Promotes gentle movement",
      "Encourages relaxation",
    ],
    whoFor:
      "Suitable for people living with joint stiffness or discomfort who want gentle, low-impact movement to support mobility and ease.",
    expectations: [
      {
        icon: "activity",
        title: "Gentle Flow",
        text: "Low-impact movement that supports the joints.",
      },
      {
        icon: "stretch-horizontal",
        title: "Ease & Flexibility",
        text: "Slow stretches to reduce stiffness.",
      },
      {
        icon: "shield",
        title: "Supportive Guidance",
        text: "Practice guided by comfort and your own pace.",
      },
      {
        icon: "moon",
        title: "Relief & Rest",
        text: "Relaxation to soothe and restore the body.",
      },
    ],
    image: "/program12.jpg",
  }),
];

export const getClassBySlug = (slug: string) => CLASSES.find((item) => item.slug === slug);
