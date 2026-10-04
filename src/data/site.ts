export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
};

// NOTE: descriptions are concise summaries — replace with the exact copy from the original site.
export const services: Service[] = [
  {
    slug: "seo",
    name: "Search Engine Optimization (SEO)",
    short: "SEO",
    description: "Improve your rankings on search engines and attract organic traffic that converts into customers.",
  },
  {
    slug: "web-development",
    name: "High-Performance Web Development",
    short: "Web Development",
    description: "Fast, responsive, conversion-focused websites built to represent your brand and grow your business.",
  },
  {
    slug: "local-seo",
    name: "Local SEO & Google Business Profile (GMB)",
    short: "Local SEO-GMB",
    description: "Get found by customers near you with an optimized Google Business Profile and local search presence.",
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    short: "Content Marketing",
    description: "Valuable, search-friendly content that builds authority and keeps your audience engaged.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "Social Media Marketing",
    description: "Grow your brand presence and engagement across the social platforms your customers use.",
  },
  {
    slug: "google-ads",
    name: "Google Ads (PPC & Performance Marketing)",
    short: "Google Ads",
    description: "Data-driven paid campaigns that deliver qualified leads and measurable return on ad spend.",
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const strengths = [
  { title: "Experienced Professionals", text: "A skilled team that understands search, web and digital growth." },
  { title: "Transparent Communication", text: "Clear reporting and honest updates at every stage of your project." },
  { title: "Data-Driven Strategies", text: "Every decision is guided by data, analytics and measurable results." },
  { title: "Ethical Marketing Practices", text: "Sustainable, guideline-compliant methods that protect your brand." },
];

export type Post = { slug: string; title: string; read: string };
export const posts: Post[] = [
  { slug: "local-seo-services-in-faridabad", title: "Local SEO Services in Faridabad: What to Expect", read: "6 min read" },
  { slug: "affordable-content-marketing-company-delhi-ncr", title: "Affordable Content Marketing Company in Delhi NCR for Startups", read: "6 min read" },
  { slug: "ai-chatbot-visibility-guide-2026", title: "The Ultimate AI Chatbot Visibility Guide for 2026", read: "8 min read" },
  { slug: "improve-video-seo-practical-tips", title: "How to Improve Your Video SEO: Practical Tips", read: "6 min read" },
  { slug: "local-seo-for-travel-agencies", title: "Local SEO for Travel Agencies: A Practical Guide", read: "6 min read" },
  { slug: "ecommerce-seo-for-logistics-companies", title: "Ecommerce SEO for Logistics Companies: A Practical Guide", read: "4 min read" },
];

export const helpOptions = [
  "Search Engine Optimization (SEO)", "Local SEO", "Technical SEO", "Website Design & Development",
  "E-commerce Website Development", "WordPress Development", "Digital Marketing Strategy", "Google Ads (PPC)",
  "Social Media Marketing", "Content Marketing", "Website Maintenance", "Performance Optimization",
  "Website Audit", "Branding & Graphic Design",
];

export const contact = {
  locations: [
    { country: "India", lines: ["Shakti Khand 2, Indirapuram,", "Ghaziabad 201014"] },
    { country: "UAE", lines: ["Building no C 73, Shabiya 10,", "Abu Dhabi (UAE)"] },
  ],
  email: "Info@ranknestit.com",
  phones: ["+91 770197196", "0541609057"],
  hours: "Mon - Sat | 9:00 AM - 6:00 PM",
};

// Real FAQ content from the original site goes here. Section stays hidden while empty.
export const faqs: { q: string; a: string }[] = [];
