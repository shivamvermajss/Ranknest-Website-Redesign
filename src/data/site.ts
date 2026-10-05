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

// Exact services from the original client website
export const services: Service[] = [
  {
    slug: "generative-engine-optimization",
    name: "Generative Engine Optimization",
    short: "Generative Engine Optimization",
    description:
      "Secure brand presence in LLM responses and AI search assistants through advanced schema engineering and structured data.",
  },
  {
    slug: "web-development",
    name: "Web Development",
    short: "Web Development",
    description:
      "High-performance, secure and fully responsive enterprise websites architected for speed and seamless integration.",
  },
  {
    slug: "seo",
    name: "Search Engine Optimization (SEO)",
    short: "SEO",
    description:
      "Improve rankings, drive organic traffic and grow the business with data-driven SEO strategies.",
  },
  {
    slug: "google-ads",
    name: "Google Ads (PPC)",
    short: "Google Ads",
    description:
      "Reach ideal customers with high-converting pay-per-click campaigns designed to maximize return on investment.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "Social Media Marketing",
    description:
      "Build the brand, engage the audience and drive meaningful business growth across social platforms.",
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    short: "Content Marketing",
    description:
      "Create valuable, SEO-friendly content that attracts, educates and converts the target audience.",
  },
  {
    slug: "local-seo",
    name: "Local SEO & Google Business Profile (GMB)",
    short: "Local SEO-GMB",
    description:
      "Get found by customers near you with an optimized Google Business Profile and local search presence.",
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const strengths = [
  {
    title: "Results-Driven Strategies",
    text: "Marketing campaigns designed to increase traffic, quality leads and measurable business growth.",
  },
  {
    title: "AI-Powered Solutions",
    text: "AI-driven insights to stay ahead in today's digital landscape.",
  },
  {
    title: "Transparent Reporting",
    text: "Monitor campaign performance with detailed analytics, regular updates and clear reporting.",
  },
  {
    title: "Customized Growth Plans",
    text: "Every strategy is tailored to the business goals, industry and target audience.",
  },
  {
    title: "Dedicated Experts",
    text: "Work with experienced digital marketing professionals committed to long-term success.",
  },
  {
    title: "Sustainable Growth",
    text: "Build scalable marketing strategies that deliver consistent results and lasting business value.",
  },
];

export type Post = { slug: string; title: string; read: string };
export const posts: Post[] = [
  {
    slug: "local-seo-services-in-faridabad",
    title: "Local SEO Services in Faridabad: What to Expect",
    read: "6 min read",
  },
  {
    slug: "affordable-content-marketing-company-delhi-ncr",
    title: "Affordable Content Marketing Company in Delhi NCR for Startups",
    read: "6 min read",
  },
  {
    slug: "ai-chatbot-visibility-guide-2026",
    title: "The Ultimate AI Chatbot Visibility Guide for 2026",
    read: "8 min read",
  },
  {
    slug: "improve-video-seo-practical-tips",
    title: "How to Improve Your Video SEO: Practical Tips",
    read: "6 min read",
  },
  {
    slug: "local-seo-for-travel-agencies",
    title: "Local SEO for Travel Agencies: A Practical Guide",
    read: "6 min read",
  },
  {
    slug: "ecommerce-seo-for-logistics-companies",
    title: "Ecommerce SEO for Logistics Companies: A Practical Guide",
    read: "4 min read",
  },
];

export const helpOptions = [
  "Search Engine Optimization (SEO)",
  "Local SEO",
  "Technical SEO",
  "Website Design & Development",
  "E-commerce Website Development",
  "WordPress Development",
  "Digital Marketing Strategy",
  "Google Ads (PPC)",
  "Social Media Marketing",
  "Content Marketing",
  "Website Maintenance",
  "Performance Optimization",
  "Website Audit",
  "Branding & Graphic Design",
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

// Real FAQ content from the original Ranknest IT site
export const faqs: { q: string; a: string }[] = [
  {
    q: "Do you provide customized solutions?",
    a: "Yes. Every business is different, so we build custom growth strategies based on your goals, audience, and competition.",
  },
  {
    q: "Is SEO better than paid ads?",
    a: "Both have benefits. SEO provides long-term organic growth, while paid ads generate faster traffic. The best strategy often combines both.",
  },
  {
    q: "What is SEO?",
    a: "SEO (Search Engine Optimization) helps your website rank higher on search engines like Google so potential customers can find you organically.",
  },
  {
    q: "Can small businesses afford your services?",
    a: "Yes. We offer scalable packages suitable for startups, small businesses, and growing enterprises.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO usually takes 3–6 months to show noticeable results, depending on competition, industry, and website health.",
  },
  {
    q: "Can Ranknest IT help generate leads for my business?",
    a: "Yes. Our marketing strategies are designed not only to increase traffic but also to attract qualified leads that are more likely to convert into customers.",
  },
];
