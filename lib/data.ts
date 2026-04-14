// ─────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────

export interface BioData {
  name: string;
  partOfSpeech: string;
  entryNumber: string;
  definition: string;
  seeAlso: { label: string; href: string }[];
}

export interface Project {
  id: string;
  entryWord: string;
  partOfSpeech: string;
  year: string;
  definition: string;
  tags: string[];
  seeAlso?: { label: string; href: string }[];
  url?: string;
  definitionLinks?: { text: string; href: string }[];
}

export interface SocialLink {
  platform: string;
  label: string;
  handle: string;
  description: string;
  url: string;
  icon: "linkedin" | "twitter" | "instagram" | "youtube";
}

// ─────────────────────────────────────────────
//  Content — replace with your real info
// ─────────────────────────────────────────────

export const bioData: BioData = {
  name: "jordan alvin",
  partOfSpeech: "/ˈdʒɔːrdən ˈælvɪn/",
  entryNumber: "001",
  definition:
    "i’m 18, from indonesia. currently spending most of my time on content, growth, and digital businesses. built youtube brands to 250M+ total views, do clipping, run local coding courses, freelance design, editing, and affiliate marketing. also worked with roblox games totaling 80M+ visits. started making money online in 4th grade. i'm a fan of the process, love building something great.",
  seeAlso: [{ label: "projects", href: "#projects" }],
};

export const projects: Project[] = [
  {
    id: "project-youtube",
    entryWord: "youtube brand",
    partOfSpeech: "content · media",
    year: "2025 – present",
    definition:
      "built and managed 4 youtube channels generating 250M+ views, 2 faceless, gaming and main. handles content strategy, scripting, and production end-to-end across all channels.",
    tags: ["brand", "content", "media"],
    definitionLinks: [{ text: "gaming", href: "" }],
  },
  {
    id: "project-clipping",
    entryWord: "clipping",
    partOfSpeech: "content · distribution",
    year: "2025 – present",
    definition:
      "clips long-form video into short-form, high-retention content for youtube shorts, tiktok, and instagram reels. ongoing service for creators.",
    tags: ["clipping", "video", "short-form"],
  },
  {
    id: "project-roblox",
    entryWord: "roblox games",
    partOfSpeech: "game dev · platform",
    year: "2020 – present",
    definition:
      "worked on roblox games accumulating a combined 80M+ visits. game design, monetization, and community growth.",
    tags: ["development", "games", "platform"],
  },
  {
    id: "project-tiktok",
    entryWord: "tiktok affiliate",
    partOfSpeech: "marketing · affiliate",
    year: "2025",
    definition:
      "sold 13 fashion products in 2 months to local with ai generated short-form content.",
    tags: ["social media", "affiliate", "marketing"],
  },
  {
    id: "project-coding-course",
    entryWord: "coding course",
    partOfSpeech: "education · local",
    year: "2024",
    definition:
      "ran a local coding course for 3 months. taught programming fundamentals to beginners in the local community.",
    tags: ["education", "coding", "local"],
  },
  {
    id: "project-freelance",
    entryWord: "freelance services",
    partOfSpeech: "freelance · creative",
    year: "2018 – 2020",
    definition:
      "started learning to code and doing freelance, making website, video editing, and graphic design.",
    tags: ["coding", "editing", "design", "freelance"],
  },
  {
    id: "project-motion-editing",
    entryWord: "motion editing",
    partOfSpeech: "creative · video",
    year: "2021 – 2022",
    definition:
      "learned after effect for the first time, competing in amv and doing other fun projects.",
    tags: ["after effects", "motion", "video"],
    definitionLinks: [{ text: "amv", href: "https://www.youtube.com/@alp1ns678" }],
  },
  {
    id: "project-roblox-items",
    entryWord: "in-game items",
    partOfSpeech: "trade · gaming",
    year: "2016 – 2021",
    definition:
      "trade and sold 582 in-game items & account (csgo, pubg, growtopia, and genshin impact). first taste of online commerce and digital goods.",
    tags: ["trading", "gaming", "marketplace"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    label: "linkedin",
    handle: "@yourhandle",
    description: "Professional updates, essays on building companies, and the occasional hot take on startup culture.",
    url: "https://www.linkedin.com/in/jordanalvin/",
    icon: "linkedin",
  },
  {
    platform: "Twitter / X",
    label: "twitter",
    handle: "@yourhandle",
    description: "Raw thoughts on product, fundraising, and what it actually takes to build something from scratch.",
    url: "https://x.com/jordanalvn",
    icon: "twitter",
  },
  {
    platform: "Instagram",
    label: "instagram",
    handle: "@yourhandle",
    description: "Behind the scenes of building — the wins, the pivots, and everything in between.",
    url: "https://www.instagram.com/jordanalvn/",
    icon: "instagram",
  },
  {
    platform: "YouTube",
    label: "youtube",
    handle: "Your Channel",
    description: "Long-form videos on founder journeys, deep dives into product decisions, and interviews with other builders.",
    url: "",
    icon: "youtube",
  },
];
