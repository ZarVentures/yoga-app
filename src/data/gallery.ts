export type GalleryCategory = "classes" | "workshops" | "events" | "videos" | "community";

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  category: GalleryCategory;
  alt: string;
  /** Image path (or video poster) — "/gallery/your-file.jpg". Photo ko /public/gallery/ me daalo. */
  src?: string;
  /** Sirf type: "video" ke liye — "/gallery/video.mp4". Leave empty to show "Video coming soon". */
  videoSrc?: string;
};

export type GalleryHeroConfig = {
  /** Hero background image — "/gallery/your-file.jpg". Photo ko /public/gallery/ me daalo. */
  image?: string;
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * HERO IMAGE CONTROL
 * Hero background yahin se badlo. Image /public/gallery/ folder me daal ke
 * image: "/gallery/<file-name>" likh do. Image nahi mili to placeholder dikhega.
 */
export const GALLERY_HERO: GalleryHeroConfig = {
  image: "/gallery/galleryhero.png",
  eyebrow: "Gallery",
  title: "Gallery",
  description: "Moments of Healing, Growth & Togetherness",
};

export const GALLERY_FILTERS = [
  { id: "all", label: "All" },
  { id: "images", label: "Images" },
  { id: "videos", label: "Videos" },
] as const;

export type GalleryFilterId = (typeof GALLERY_FILTERS)[number]["id"];

/**
 * GRID ITEMS CONTROL
 * Har card ke liye ek entry hai. src me "/gallery/<file-name>" daal do.
 * Aadhi card nahi dikhe to placeholder dikh jayega (koi error nahi).
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    type: "image",
    category: "classes",
    alt: "Celebrating 20 Years of Yoga & Wellness",
    src: "/gallery/gallery1.jpg",
  },
  {
    id: "gallery-2",
    type: "image",
    category: "classes",
    alt: "Eid Celebration & Togetherness",
    src: "/gallery/gallery2.jpg",
  },
  {
    id: "gallery-3",
    type: "image",
    category: "workshops",
    alt: "Certificate of Achievement",
    src: "/gallery/gallery3.jpg",
  },
  {
    id: "gallery-4",
    type: "image",
    category: "workshops",
    alt: "Breast Cancer Awareness",
    src: "/gallery/gallery4.jpg",
  },
  {
    id: "gallery-5",
    type: "image",
    category: "events",
    alt: "Memories from Our Journey",
    src: "/gallery/gallery5.jpg",
  },
  {
    id: "gallery-6",
    type: "image",
    category: "events",
    alt: "Gentle Yoga for Expecting Mothers",
    src: "/gallery/gallery6.jpg",
  },
  {
    id: "gallery-7",
    type: "image",
    category: "community",
    alt: "Memorable Moments from Our Events",
    src: "/gallery/gallery7.jpg",
  },
  {
    id: "gallery-8",
    type: "image",
    category: "community",
    alt: "Together in Wellness & Joy",
    src: "/gallery/gallery8.jpg",
  },
  {
    id: "gallery-9",
    type: "image",
    category: "community",
    alt: "A Peaceful Morning with Yoga",
    src: "/gallery/gallery9.jpg",
  },
  {
    id: "gallery-10",
    type: "image",
    category: "community",
    alt: "Moments with Our Yogis",
    src: "/gallery/gallery10.jpg",
  },
  {
    id: "gallery-11",
    type: "image",
    category: "community",
    alt: "Garba Celebration & Joy",
    src: "/gallery/gallery11.jpg",
  },
  {
    id: "gallery-12",
    type: "image",
    category: "community",
    alt: "Diwali - A Celebration of Light & Joy",
    src: "/gallery/gallery12.jpg",
  },
  {
    id: "video-1",
    type: "video",
    category: "videos",
    alt: "Children’s Yoga & Mindful Movement",
    src: "/gallery/galleryvideo1-poster.png",
    videoSrc: "/gallery/galleryvideo1.mp4",
  },
  {
    id: "video-2",
    type: "video",
    category: "videos",
    alt: "Yoga for Health & Well-being",
    src: "/gallery/galleryvideo2-poster.png",
    videoSrc: "/gallery/galleryvideo2.mp4",
  },
  {
    id: "video-3",
    type: "video",
    category: "videos",
    alt: "Therapeutic Yoga for Healing & Wellness",
    src: "/gallery/galleryvideo3-poster.png",
    videoSrc: "/gallery/galleryvideo3.mp4",
  },
];
