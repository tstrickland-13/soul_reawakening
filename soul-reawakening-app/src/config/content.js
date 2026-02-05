// ═══════════════════════════════════════════════════════════════
// CONTENT DATA — Soul Reawakening
// Edit these to update site content
// ═══════════════════════════════════════════════════════════════

export const services = [
  {
    id: 1,
    title: "Soul Discovery Session",
    category: "coaching",
    price: "$150",
    duration: "60 min",
    description: "A deep-dive introductory session to explore your goals, challenges, and path forward.",
    featured: true,
  },
  {
    id: 2,
    title: "Transformative Coaching Package",
    category: "coaching",
    price: "$500",
    duration: "4 sessions",
    description: "A four-session journey designed for lasting change. Includes personalized exercises and ongoing support.",
  },
  {
    id: 3,
    title: "Parent-Athlete Coaching",
    category: "coaching",
    price: "$175",
    duration: "60 min",
    description: "Specialized support for parents navigating the pressures and joys of raising student-athletes.",
  },
  {
    id: 4,
    title: "Awakening Workshop",
    category: "workshops",
    price: "$75",
    duration: "Half-day",
    description: "A group workshop exploring mindfulness techniques, self-reflection, and community connection.",
  },
  {
    id: 5,
    title: "Mindful Parenting Workshop",
    category: "workshops",
    price: "$65",
    duration: "2 hours",
    description: "Tools and practices for parents seeking balance, presence, and deeper connection with their children.",
  },
  {
    id: 6,
    title: "Soul Renewal Retreat",
    category: "retreats",
    price: "$1,200",
    duration: "Weekend",
    description: "An immersive weekend retreat in nature. Includes lodging, meals, guided sessions, and integration support.",
    featured: true,
  },
  {
    id: 7,
    title: "The Reawakening Journal",
    category: "books",
    price: "$28",
    duration: "",
    description: "A guided journal for daily reflection, intention-setting, and spiritual growth.",
  },
  {
    id: 8,
    title: "Finding Your Way Back",
    category: "books",
    price: "$22",
    duration: "",
    description: "Makini's guide to navigating life transitions with grace, courage, and inner wisdom.",
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "the-art-of-coming-home-to-yourself",
    title: "The Art of Coming Home to Yourself",
    date: "February 2026",
    category: "Reflection",
    excerpt: "In the quiet moments between the noise of our daily lives, there exists an invitation — a gentle call to return to the person we've always been beneath the layers.",
    featured: true,
  },
  {
    id: 2,
    slug: "5-practices-for-parents-of-athletes",
    title: "5 Practices for Parents of Athletes",
    date: "January 2026",
    category: "Athlete Families",
    excerpt: "Raising a student-athlete comes with unique joys and pressures. Here are five grounding practices to help you stay centered while supporting your child's journey.",
  },
  {
    id: 3,
    slug: "what-spiritual-awakening-actually-looks-like",
    title: "What Spiritual Awakening Actually Looks Like",
    date: "January 2026",
    category: "Spirituality",
    excerpt: "It's not always light and bliss. Sometimes awakening looks like confusion, grief, or simply learning to sit with discomfort. Here's what nobody tells you.",
  },
  {
    id: 4,
    slug: "setting-boundaries-with-love",
    title: "Setting Boundaries with Love",
    date: "December 2025",
    category: "Wellness",
    excerpt: "Boundaries aren't walls — they're bridges to deeper, more honest relationships. Learn how to set them without guilt.",
  },
  {
    id: 5,
    slug: "the-power-of-rest-in-a-culture-of-hustle",
    title: "The Power of Rest in a Culture of Hustle",
    date: "December 2025",
    category: "Reflection",
    excerpt: "We've been conditioned to equate rest with laziness. But what if rest is the most radical act of self-love you can practice?",
  },
  {
    id: 6,
    slug: "a-letter-to-my-younger-self",
    title: "A Letter to My Younger Self",
    date: "November 2025",
    category: "Personal",
    excerpt: "If I could go back and tell her one thing, it would be this: everything you're looking for is already within you.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Working with Makini was a turning point in my life. She helped me see myself clearly for the first time in years.",
    name: "Sarah M.",
    title: "Life Coaching Client",
  },
  {
    id: 2,
    quote: "The retreat experience was absolutely transformative. I left feeling renewed, grounded, and full of purpose.",
    name: "Jennifer L.",
    title: "Retreat Participant",
  },
  {
    id: 3,
    quote: "Makini has a gift for holding space. Her coaching is both gentle and powerful — exactly what I needed.",
    name: "Michelle T.",
    title: "Coaching Client",
  },
];

export const offerings = [
  {
    title: "1:1 Coaching",
    description: "Personalized sessions to guide you through your unique journey of self-discovery and healing.",
    icon: "✧",
  },
  {
    title: "Workshops",
    description: "Group experiences designed to build community, expand awareness, and cultivate inner peace.",
    icon: "◈",
  },
  {
    title: "Retreats",
    description: "Immersive getaways that create space for deep reflection, renewal, and spiritual connection.",
    icon: "◇",
  },
];

export const quickLinks = [
  { label: "Book a Session", icon: "✧", path: "/booking" },
  { label: "Shop Coaching & Workshops", icon: "◈", path: "/shop" },
  { label: "Watch on YouTube", icon: "▶", external: true },
  { label: "Read the Blog", icon: "✎", path: "/blog" },
  { label: "About Makini", icon: "◇", path: "/about" },
  { label: "Contact Me", icon: "✉", path: "/contact" },
];

export default {
  services,
  blogPosts,
  testimonials,
  offerings,
  quickLinks,
};
