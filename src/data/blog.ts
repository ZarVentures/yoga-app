export const BLOG_CATEGORIES = [
  "All",
  "Yoga",
  "Wellness",
  "Mindfulness",
  "Nutrition",
  "Therapy",
  "Lifestyle",
  "Women's Health",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  /** URL slug for the article page, appended to /blog/ */
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageAlt: string;
  image: string;
  /** Full article body rendered on the article page */
  content: BlogSection[];
};

export const FEATURED_ARTICLE: BlogPost = {
  slug: "true-meaning-of-yoga",
  category: "Mindfulness",
  title: "The True Meaning of Yoga: Beyond Just Physical Exercise",
  excerpt:
    "Yoga is so much more than a physical workout. Explore how the ancient practice of yoga weaves together breath, movement and meditation to nourish your entire being — body, mind and spirit.",
  date: "March 10, 2026",
  readTime: "6 Min Read",
  imageAlt: "Peaceful yoga practice scene with soft natural light",
  image: "",
  content: [
    {
      heading: "More Than a Workout",
      paragraphs: [
        "When most people think of yoga, they picture flexible bodies folding into elaborate poses. But the physical postures are only one limb of an ancient, eight-limbed path that has guided practitioners for thousands of years. At its heart, yoga is about union — the quiet reunion of body, breath and mind.",
        "On the mat, that union shows up in small ways: a steadier breath during a challenging balance, a soft release in the shoulders you didn't notice you were holding. Off the mat, it translates into greater patience, clarity and ease in everyday life.",
      ],
    },
    {
      heading: "Breath as the Bridge",
      paragraphs: [
        "Breath is the bridge between the body and the nervous system. Pranayama — the practice of conscious breathing — calms the mind, steadies the heart and brings you back into the present moment. It is the simplest tool you own, and it is always with you.",
        "Try this: inhale for a count of four, hold gently, exhale for a count of six. Repeat a few rounds and notice how your mind slows and your shoulders soften. This is yoga in action, no mat required.",
      ],
    },
    {
      heading: "Stillness and Meditation",
      paragraphs: [
        "Meditation is the practice of turning inward. In stillness, the noise of the day begins to settle, and you start to observe your thoughts without being ruled by them. Over time, this cultivated awareness becomes a steady inner anchor.",
        "You don't need an hour or a silent retreat. Even five quiet minutes of guided attention, repeated daily, can reshape how you respond to stress.",
      ],
    },
    {
      heading: "A Practice for Every Body",
      paragraphs: [
        "Yoga is not about touching your toes — it is about what you learn on the way down. It meets you wherever you are: gentle for recovery, strong when you need energy, soothing when you need rest. Every body is a yoga body.",
        "When you step on the mat with kindness for yourself, the practice becomes less about performance and more about presence. And that presence, carried gently through the day, is the truest meaning of yoga.",
      ],
    },
  ],
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-gentle-yoga-poses-to-relieve-back-pain",
    category: "Yoga",
    title: "5 Gentle Yoga Poses to Relieve Back Pain",
    excerpt:
      "Ease tension and support your spine with this sequence of simple, restorative poses you can practice from the comfort of home.",
    date: "February 28, 2026",
    readTime: "4 Min Read",
    imageAlt: "Gentle yoga pose supporting the lower back",
    image: "/program10.png",
    content: [
      {
        heading: "Why the Back Needs Gentleness",
        paragraphs: [
          "Back pain is one of the most common reasons people visit a yoga studio — and one of the most responsive to gentle, consistent movement. Rather than forcing the spine into deep stretches, we begin by releasing tension and creating space.",
          "The key is slow, supported movement paired with steady breathing. When the nervous system calms down, the muscles guarding the lower back naturally begin to let go.",
        ],
      },
      {
        heading: "The Sequence",
        paragraphs: [
          "Start with Child's Pose, allowing the spine to lengthen and the hips to soften. Follow with Cat-Cow to gently mobilise each vertebra. Add a supported Sphinx Pose to open the front body, then move into Supine Twist to release the lower back.",
          "Finish with Legs Up the Wall, a deeply restorative position that takes the weight off the spine and invites the whole body to unwind. Hold each pose for five to eight slow breaths.",
        ],
      },
      {
        heading: "Listening to Your Body",
        paragraphs: [
          "Move to the edge of sensation, never into sharp pain. Every body is different — what feels healing today may feel too much tomorrow. Let comfort be your guide, and always consult a health professional for persistent or severe back pain.",
          "Consistency matters more than intensity. A short, gentle practice repeated daily will support your spine far more than an occasional deep session.",
        ],
      },
    ],
  },
  {
    slug: "how-to-build-a-sustainable-daily-routine",
    category: "Wellness",
    title: "How to Build a Sustainable Daily Routine",
    excerpt:
      "Small, intentional habits repeated daily create lasting change. Discover a gentle framework for a routine that supports your wellness.",
    date: "February 18, 2026",
    readTime: "5 Min Read",
    imageAlt: "Calm morning routine with tea and journal",
    image: "",
    content: [
      {
        heading: "Start Smaller Than You Think",
        paragraphs: [
          "The most sustainable routines are built on habits so small they feel almost too easy. A two-minute stretch, a glass of water, three deep breaths on waking — these micro-practices compound into something significant over time.",
          "Choose one anchor habit and attach it to something you already do daily, like your morning tea. This natural pairing makes the new habit stick without relying on willpower.",
        ],
      },
      {
        heading: "Anchor, Don't Overload",
        paragraphs: [
          "Resist the urge to stack every good intention into one perfect schedule. An overloaded plan is fragile — one missed day and the whole structure collapses. Instead, build a handful of anchors: waking up, mealtimes, and bedtime.",
          "Design a simple loop around each anchor, then let the rest of the day remain flexible. Rigidity creates stress; a gentle rhythm creates freedom.",
        ],
      },
      {
        heading: "Allow for Flexibility",
        paragraphs: [
          "Life will disrupt your routine, and that is okay. A sustainable routine bends instead of breaking — if you miss the morning, you begin again at lunch. Self-compassion is what keeps you returning to the practice.",
          "Review your routine every few weeks and keep what still serves you. A routine that evolves with you is one you'll actually keep.",
        ],
      },
    ],
  },
  {
    slug: "yoga-for-every-phase-of-your-cycle",
    category: "Women's Health",
    title: "Yoga Practices for Every Phase of Your Cycle",
    excerpt:
      "Honour your body's natural rhythm with yoga sequences tailored to each phase of the menstrual cycle for balance and ease.",
    date: "February 6, 2026",
    readTime: "7 Min Read",
    imageAlt: "Woman practicing restorative yoga pose",
    image: "",
    content: [
      {
        heading: "Honouring the Rhythm",
        paragraphs: [
          "The menstrual cycle brings unique energetic shifts — times of openness and strength, and times calling for rest and tenderness. Practising yoga in tune with these phases honours your body rather than pushing against it.",
          "Instead of one fixed practice, view your yoga as responsive: strong when you feel expansive, slow when you feel inward and quiet.",
        ],
      },
      {
        heading: "Movement for Each Phase",
        paragraphs: [
          "During the follicular phase, energy naturally rises — embrace more dynamic, strengthening flows. As ovulation approaches, your body often feels stable and capable; this is a beautiful window for balancing postures.",
          "In the luteal phase, energy gently wanes and heat may build. Favour grounding, hip-opening and cooling poses. During menstruation, let rest lead: restorative postures, forward folds and gentle twists offer the most comfort.",
        ],
      },
      {
        heading: "A Softer Approach",
        paragraphs: [
          "The goal is never to perform, but to listen. Track how different phases feel in your body and choose poses that support you in that moment, even if they change week to week.",
          "Over time, this attunement grows into a powerful kind of self-knowledge — the quiet confidence of knowing exactly what your body needs.",
        ],
      },
    ],
  },
  {
    slug: "breathwork-essentials-simple-techniques-to-start",
    category: "Meditation",
    title: "Breathwork Essentials: Simple Techniques to Start",
    excerpt:
      "Your breath is the fastest gateway to calm. Learn three foundational breathing techniques to bring focus and peace to your day.",
    date: "January 25, 2026",
    readTime: "4 Min Read",
    imageAlt: "Close up of hands resting during breathwork practice",
    image: "",
    content: [
      {
        heading: "Why the Breath Matters",
        paragraphs: [
          "The breath is the one function we carry with us everywhere — and the only one we can consciously shape. By slowing the exhale, we signal safety to the nervous system and invite a deep, measurable calm.",
          "You don't need a special setting or any equipment. Just a few minutes of focused breathing can steady a racing heart and quiet a busy mind.",
        ],
      },
      {
        heading: "Three Foundational Techniques",
        paragraphs: [
          "Box breathing: inhale for a count of four, hold for four, exhale for four, hold for four. Repeat a few rounds whenever you need to reset.",
          "Long exhale breathing: simply make your exhale longer than your inhale — inhale four, exhale six or eight. This gentle emphasis is deeply soothing.",
          "Nadi Shodhana: alternate-nostril breathing balances the two hemispheres of the brain and clears the mind. Though the beginning is a beautiful starting point on its own.",
        ],
      },
      {
        heading: "Weaving Breath Into Your Day",
        paragraphs: [
          "Begin with a single three-minute practice each morning, then use your breath as a tool whenever stress appears — before a meeting, in traffic, or as you fall asleep.",
          "Consistency transforms the practice. Over weeks, the calm you practise on the mat becomes a reflex you carry into every part of your day.",
        ],
      },
    ],
  },
  {
    slug: "clean-eating-a-simple-guide-to-mindful-nutrition",
    category: "Nutrition",
    title: "Clean Eating: A Simple Guide to Mindful Nutrition",
    excerpt:
      "Nourish yourself with whole, simple ingredients. A practical guide to clean eating that feels natural and never restrictive.",
    date: "January 14, 2026",
    readTime: "6 Min Read",
    imageAlt: "Fresh wholesome ingredients arranged on a table",
    image: "",
    content: [
      {
        heading: "What Clean Eating Really Means",
        paragraphs: [
          "Clean eating isn't a diet with rigid rules — it's a return to real food. Choose ingredients close to their natural state, and let whole foods, vegetables and mindful preparation do most of the work.",
          "This isn't about perfection or restriction. It's about building a foundation of nourishment that naturally crowds out the ultra-processed, leaving you energised and satisfied.",
        ],
      },
      {
        heading: "Choose Wholesome, Unprocessed Foods",
        paragraphs: [
          "Fill your plate with colourful vegetables, fruits, whole grains, legumes, nuts and seeds. Include quality proteins, and favour water, herbal teas and freshly infused drinks over sugary beverages.",
          "Aim to cook more simply at home, where you control the ingredients. Even small swaps — wholegrain instead of refined, a handful of greens added to a dish — move you in the right direction.",
        ],
      },
      {
        heading: "Make It Sustainable",
        paragraphs: [
          "Plan meals loosely, shop from a short list, and prepare staples in advance so clean options are always within reach. Keep treats without guilt — nourishment is about balance over time, not perfection on a single day.",
          "Finally, eat mindfully: slow down, savour each bite and listen to your body's true hunger and fullness. That awareness is the heart of mindful nutrition.",
        ],
      },
    ],
  },
  {
    slug: "managing-stress-through-mindfulness-and-yoga",
    category: "Therapy",
    title: "Managing Stress Through Mindfulness and Yoga",
    excerpt:
      "Untangle anxiety with practical mindfulness tools and gentle movement that help you respond to stress with more ease.",
    date: "December 30, 2025",
    readTime: "5 Min Read",
    imageAlt: "Serene mindful yoga practice in soft light",
    image: "",
    content: [
      {
        heading: "Understanding the Stress Response",
        paragraphs: [
          "Stress is a natural alarm system, but constant activation leaves the body in a low-grade emergency. Mindfulness and gentle yoga work by shifting the balance toward the rest-and-digest state, where your body can repair and recalibrate.",
          "The aim is not to eliminate stress, but to change your relationship with it — responding with awareness instead of reacting automatically.",
        ],
      },
      {
        heading: "Mindfulness Tools That Work",
        paragraphs: [
          "A simple body scan invites you to notice tension where it hides — jaw, shoulders, belly — and soften it with each exhale. Grounding practices, like feeling your feet on the floor, anchor you when thoughts spiral.",
          "Adding a gentle movement practice supports the whole system. Slow, conscious yoga moves your body and mind out of 'fight or flight' and into a state of resourceful calm.",
        ],
      },
      {
        heading: "Gentle Movement as Release",
        paragraphs: [
          "Practise with an attitude of curiosity rather than force. Let each posture be an inquiry: how does this feel? Where am I gripping? This mindful quality is what transforms exercise into therapy.",
          "Consistency gently rewires your baseline. Over time, the calm association of movement and breath becomes something you can call on whenever the world feels heavy.",
        ],
      },
    ],
  },
  {
    slug: "morning-rituals-to-begin-your-day-with-intention",
    category: "Lifestyle",
    title: "Morning Rituals to Begin Your Day With Intention",
    excerpt:
      "Set a gentle tone for the whole day with a sequence of small, grounding rituals that bring clarity and calm to your mornings.",
    date: "November 20, 2025",
    readTime: "5 Min Read",
    imageAlt: "Quiet morning scene with journal and cup of tea",
    image: "",
    content: [
      {
        heading: "The Power of the First Hour",
        paragraphs: [
          "How we begin the morning often shapes how we move through the day. A few deliberate minutes of calm before the noise begins can transform your energy, focus and mood.",
          "You don't need elaborate habits — just a short, repeatable sequence that signals to your mind and body that the day begins in your own time.",
        ],
      },
      {
        heading: "A Simple Ritual Stack",
        paragraphs: [
          "Begin by drinking a glass of water to gently awaken the body. Follow with a few slow breaths or a short stretch while your tea or coffee brews, inviting awareness before action.",
          "Then write three lines in a journal: one intention for the day, one thing you're grateful for, and one small priority. Five minutes, and your morning becomes intentional instead of reactive.",
        ],
      },
      {
        heading: "Protecting Your Mornings",
        paragraphs: [
          "Protect the ritual by keeping your phone out of reach until it's complete. The temptation to scroll first thing is strong, and it fragments the calm you've just created.",
          "Start small and build gradually. A two-minute ritual kept daily will shape your day far more than a perfect thirty-minute routine you abandon after a week.",
        ],
      },
    ],
  },
  {
    slug: "yoga-nidra-the-art-of-conscious-rest",
    category: "Meditation",
    title: "Yoga Nidra: The Art of Conscious Rest",
    excerpt:
      "Discover the deeply restorative practice of yoga nidra — a guided state of conscious relaxation that leaves you refreshed like hours of sleep.",
    date: "November 8, 2025",
    readTime: "4 Min Read",
    imageAlt: "Person resting in a deep state of guided relaxation",
    image: "",
    content: [
      {
        heading: "What Is Yoga Nidra?",
        paragraphs: [
          "Yoga nidra, often translated as 'yogic sleep', is a guided practice of deep conscious relaxation. Lying still, you follow a gentle script that moves your attention through the body, breath and mind.",
          "In this twilight state between wakefulness and sleep, the body restores itself deeply — many practitioners report feeling as refreshed after twenty minutes as after hours of sleep.",
        ],
      },
      {
        heading: "How the Practice Unfolds",
        paragraphs: [
          "A typical session begins with a comfortable resting position and a clear intention. The guide then walks you through a body scan, breath awareness and often a brief visualisation, ending with an invitation to return to stillness.",
          "You may drift in and out of sleep — that's completely fine and part of the practice. The nervous system does its deepest repair in these soft thresholds.",
        ],
      },
      {
        heading: "Making Space for Rest",
        paragraphs: [
          "The beauty of yoga nidra is that it can be practised by anyone, anywhere. You simply need a quiet space, a comfortable surface and ten to twenty minutes.",
          "When you make space for deep rest, you're not being unproductive — you're replenishing the very resource that makes everything else sustainable.",
        ],
      },
    ],
  },
  {
    slug: "eating-for-energy-foods-that-energize-your-day",
    category: "Nutrition",
    title: "Eating for Energy: Foods That Energize Your Day",
    excerpt:
      "Feel steady and alive from morning to night with simple food choices that support sustainable, all-day energy.",
    date: "October 22, 2025",
    readTime: "5 Min Read",
    imageAlt: "Vibrant energising foods on a light table",
    image: "",
    content: [
      {
        heading: "Fuel for Steady Energy",
        paragraphs: [
          "Energy isn't just about willpower — it's biochemical. What you eat directly influences how steadily your blood sugar holds, how clearly you think and how smoothly you move through the afternoon.",
          "The goal is steady, sustained fuel rather than dramatic spikes and crashes.",
        ],
      },
      {
        heading: "What to Reach For",
        paragraphs: [
          "Combine a low-glycaemic carbohydrate with protein and a little healthy fat at every meal — think oats with nuts and berries, or wholegrain toast with eggs. This combination releases energy slowly and evenly.",
          "Keep hydrated throughout the day, and choose whole fruit and nuts over sweetened snacks when a lull hits. A short walk after eating also helps steady energy and digestion.",
        ],
      },
      {
        heading: "Beyond the Plate",
        paragraphs: [
          "Remember that energy also comes from sleep, movement and joy. Gentle exercise, sunlight and moments of genuine rest all refill the same battery.",
          "Notice how different foods make you feel two hours later, and let your own body, not a rulebook, be your guide.",
        ],
      },
    ],
  },
  {
    slug: "mindful-journaling-prompts-for-self-kindness",
    category: "Mindfulness",
    title: "Mindful Journaling Prompts for Self-Kindness",
    excerpt:
      "Turn your journal into a tool for self-compassion with gentle prompts that help you slow down and meet yourself with kindness.",
    date: "October 6, 2025",
    readTime: "4 Min Read",
    imageAlt: "Open journal with a pen resting beside a cup of tea",
    image: "",
    content: [
      {
        heading: "Why Writing Calms the Mind",
        paragraphs: [
          "Journaling gives the swirl of thoughts a place to land. Putting feelings into words gently slows them down, creating a little distance between you and your inner noise.",
          "Framed with kindness, the practice becomes self-compassion in action — a quiet daily conversation in which you listen to yourself.",
        ],
      },
      {
        heading: "Prompts to Start With",
        paragraphs: [
          "Try: 'What has been weighing on me today, and what would it feel like to soften around it?' or 'Where in my body am I holding tension right now?' and 'What small kindness can I offer myself in this moment?'.",
          "None of these need clever answers. The point is simply to show up and write whatever is true, without editing or judging it.",
        ],
      },
      {
        heading: "Keeping It Simple",
        paragraphs: [
          "Three or four minutes is enough. Choose any time of day, and let your journal be a safe space rather than another task to perfect.",
          "Over weeks, you'll notice subtle shifts — greater clarity, a kinder inner voice and a stronger sense of your own rhythm.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  const all = [...BLOG_POSTS, FEATURED_ARTICLE];
  return all.find((post) => post.slug === slug);
}
