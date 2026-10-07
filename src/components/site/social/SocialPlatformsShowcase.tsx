import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Lock,
  Headphones,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, TelegramIcon } from "./SocialIcons";

interface PlatformOffering {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  icon: typeof InstagramIcon;
  accent: "coral" | "cyan" | "lime";
  accentHex: string;
  description: string;
  features: string[];
  badges: string[];
}

const PLATFORMS: PlatformOffering[] = [
  {
    id: "instagram",
    num: "01",
    title: "Instagram Growth Services",
    subtitle: "Reels, Followers, Reach & Creator Engagement",
    image: "/social/instagram-growth.png",
    imageAlt: "Ranknest IT Instagram Growth Services promotional banner",
    imagePosition: "left",
    icon: InstagramIcon,
    accent: "coral",
    accentHex: "#C53736",
    description:
      "Boost your Instagram presence with Ranknest IT's Instagram Growth Services. We offer high-quality Instagram followers, likes, views, shares, comments, saves, and many more engagement services at unbeatable prices. Whether you're a creator, influencer, or business, our fast delivery and reliable support help you grow your profile with confidence. Your satisfaction is our priority—if we are unable to deliver your order according to our service terms, you're covered by our 100% Money-Back Guarantee as outlined in our refund policy. Choose Ranknest IT for affordable, trusted, and results-driven Instagram growth solutions.",
    features: [
      "Real & Active Followers",
      "High Quality Likes",
      "Video & Story Views",
      "Post & Reel Shares",
      "Real & Active Comments",
      "Post & Reel Saves",
    ],
    badges: ["Fast Delivery", "100% Safe & Secure", "24/7 Support", "100% Money-Back Guarantee"],
  },
  {
    id: "facebook",
    num: "02",
    title: "Facebook Growth Services",
    subtitle: "Page Likes, Followers, Post Engagement & Video Views",
    image: "/social/facebook-growth.png",
    imageAlt: "Ranknest IT Facebook Growth Services promotional banner",
    imagePosition: "right",
    icon: FacebookIcon,
    accent: "cyan",
    accentHex: "#52BCEE",
    description:
      "Grow your Facebook presence with Ranknest IT's Facebook Growth Services. We provide high-quality page followers, page likes, post likes, video views, reel views, shares, comments, and many more engagement services at affordable prices to help increase your reach and engagement. With fast delivery, secure payments, and dedicated support, Ranknest IT is your trusted growth partner. If your order cannot be delivered according to our service terms, you're covered by our 100% Money-Back Guarantee as outlined in our refund policy.",
    features: [
      "Real & Active Page Followers",
      "High Quality Page Likes",
      "Real Likes for Your Posts",
      "High Quality Video & Reel Views",
      "Real & Active Comments",
      "Increase Organic Reach & Credibility",
    ],
    badges: ["Fast Delivery", "100% Safe & Secure", "24/7 Support", "100% Money-Back Guarantee"],
  },
  {
    id: "youtube",
    num: "03",
    title: "YouTube Growth Services",
    subtitle: "Subscribers, Watch Time, Video Views & Engagement",
    image: "/social/youtube-growth.png",
    imageAlt: "Ranknest IT YouTube Growth Services promotional banner",
    imagePosition: "left",
    icon: YoutubeIcon,
    accent: "coral",
    accentHex: "#C53736",
    description:
      "Grow your YouTube channel with Ranknest IT's YouTube Growth Services. We provide high-quality subscribers, video views, likes, watch time, comments, shares, and many more YouTube engagement services at affordable prices. Whether you're a content creator, influencer, or business, our fast delivery and reliable support help increase your channel's visibility and credibility. Your satisfaction is our priority—if we are unable to deliver your order according to our service terms, you're covered by our 100% Money-Back Guarantee as outlined in our refund policy. Choose Ranknest IT for trusted, affordable, and results-driven YouTube growth solutions.",
    features: [
      "High-Retention Subscribers",
      "High Quality Video Views",
      "Engagement Likes & Comments",
      "Watch Time Amplification",
      "Fast & Steady Natural Delivery",
      "Creator Credibility Boost",
    ],
    badges: ["Fast Delivery", "100% Safe & Secure", "24/7 Support", "100% Money-Back Guarantee"],
  },
  {
    id: "telegram",
    num: "04",
    title: "Telegram Growth Services",
    subtitle: "Channel Members, Group Growth, Reactions & Poll Votes",
    image: "/social/telegram-growth.png",
    imageAlt: "Ranknest IT Telegram Growth Services promotional banner",
    imagePosition: "right",
    icon: TelegramIcon,
    accent: "cyan",
    accentHex: "#52BCEE",
    description:
      "Grow your Telegram community with Ranknest IT's Telegram Growth Services. We provide high-quality Telegram channel members, group members, post views, reactions, votes, shares, and many more engagement services at affordable prices. Whether you're building a brand, business, or community, our fast delivery and reliable support help increase your reach and credibility. Your satisfaction is our priority—if we are unable to deliver your order according to our service terms, you're covered by our 100% Money-Back Guarantee as outlined in our refund policy. Choose Ranknest IT for trusted, affordable, and results-driven Telegram growth solutions.",
    features: [
      "Targeted Channel Members",
      "Active Group Members",
      "Post Views & Shares",
      "Custom Reactions & Emojis",
      "Poll Votes Amplification",
      "Community Authority Signals",
    ],
    badges: ["Fast Delivery", "100% Safe & Secure", "24/7 Support", "100% Money-Back Guarantee"],
  },
];

const NARRATIVE_STEPS = ["CONTENT", "DISTRIBUTION", "ENGAGEMENT", "AUDIENCE", "GROWTH"];

export function SocialPlatformsShowcase() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 bg-[#030505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {PLATFORMS.map((platform, idx) => {
          const Icon = platform.icon;
          const isImageLeft = platform.imagePosition === "left";
          const isLime = platform.accent === "lime";
          const isCoral = platform.accent === "coral";

          return (
            <div key={platform.id} className="relative">
              {/* Continuity Narrative Connector (Requirement 19) */}
              {idx > 0 && (
                <div
                  className="mb-16 flex items-center justify-center gap-3 overflow-hidden py-4"
                  aria-hidden="true"
                >
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex items-center gap-2 rounded-full border border-white/8 bg-[#080D0E]/80 px-4 py-1 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                    <span className="font-mono text-[10px] tracking-widest text-[#B4BEC1] uppercase">
                      {NARRATIVE_STEPS[idx - 1]} ──→ {NARRATIVE_STEPS[idx]}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}

              {/* Platform Editorial Grid */}
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Promotional Image Frame (Requirement 17) */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#060A0C]/90 p-3 sm:p-4 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                    {/* Background Radial Glow on Image */}
                    <div
                      className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{
                        background: isCoral
                          ? "radial-gradient(circle, #C53736 0%, #B7ED51 50%, transparent 80%)"
                          : "radial-gradient(circle, #52BCEE 0%, #B7ED51 50%, transparent 80%)",
                      }}
                    />

                    {/* Image Header Pill */}
                    <div className="mb-2 flex items-center justify-between px-2">
                      <div className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5" style={{ color: platform.accentHex }} />
                        <span className="font-mono text-[10px] tracking-wider text-white font-semibold uppercase">
                          OFFICIAL PROMOTIONAL ASSET
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-[#B4BEC1]/60">100% VERIFIED</span>
                    </div>

                    {/* The Actual Client Promotional Image */}
                    <div className="relative aspect-[1007/675] w-full overflow-hidden rounded-2xl bg-black/60">
                      <img
                        src={platform.image}
                        alt={platform.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Bottom Micro Feature Tags */}
                    <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/6 px-1">
                      {platform.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[9px] text-[#B4BEC1]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
                  }`}
                >
                  {/* Platform Eyebrow */}
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-extrabold tracking-widest"
                      style={{ color: platform.accentHex }}
                    >
                      {platform.num}
                    </span>
                    <span className="h-3 w-px bg-white/15" />
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                      <Icon className="h-3.5 w-3.5" style={{ color: platform.accentHex }} />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white">
                        {platform.title}
                      </span>
                    </div>
                  </div>

                  {/* Platform Title */}
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    {platform.title}
                  </h3>

                  <p
                    className="mt-1 font-mono text-xs font-semibold tracking-wide"
                    style={{ color: platform.accentHex }}
                  >
                    {platform.subtitle}
                  </p>

                  {/* Full Original Client Description Preserved! */}
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                    {platform.description}
                  </p>

                  {/* Key Engagement Signals Checklist */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-white/8 pt-5">
                    {platform.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-white/90">
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: platform.accentHex }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Action Trigger */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#B7ED51] px-6 py-2.5 text-xs font-bold text-[#030505] shadow-[0_0_20px_rgba(183,237,81,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#c6f46c]"
                    >
                      <span>Grow {platform.title.split(" ")[0]}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <a
                      href="tel:+91770197196"
                      className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-[#F5F7F7] hover:border-white/25 hover:bg-white/[0.08] transition-colors"
                    >
                      Speak to a Specialist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
