// ── Page registry ────────────────────────────────────────────────────────────
// Single source of truth for every static page: URL, titles, meta, and the
// internal-link graph. Navbar, footer, related-links, sitemap, and breadcrumbs
// all read from here, so the link structure stays consistent as the site scales.

export type Section = "tools" | "guides" | "faq" | "home";

export interface PageNode {
  slug: string; // path segment, e.g. "lean-body-mass-calculator"
  section: Section;
  href: string; // full path, e.g. "/tools/lean-body-mass-calculator"
  h1: string;
  navLabel: string; // short label for menus/cards
  title: string; // <title> — keep < 60 chars where possible
  description: string; // meta description — 140-160 chars
  // Slugs of related pages for internal linking (cross-section encouraged).
  related: string[];
  money?: boolean; // primary conversion page
}

function make(section: Section, slug: string, data: Omit<PageNode, "slug" | "section" | "href">): PageNode {
  const base = section === "home" ? "" : `/${section}`;
  return { slug, section, href: `${base}/${slug}`, ...data };
}

// ── TOOLS ────────────────────────────────────────────────────────────────────
const tools: PageNode[] = [
  make("tools", "lean-body-mass-calculator", {
    money: true,
    navLabel: "LBM Calculator",
    h1: "Lean Body Mass Calculator",
    title: "Lean Body Mass Calculator — Free LBM & Body Fat Tool",
    description:
      "Calculate your lean body mass instantly with the Boer, James, and Hume formulas. Get LBM, body fat %, and fat-free mass in kg or lbs. Free, no sign-up.",
    related: [
      "lean-body-mass-formula",
      "lean-body-mass-calculator-for-men",
      "lean-body-mass-calculator-for-women",
      "lean-body-mass-vs-bmi",
      "lean-body-mass-percentage",
      "what-is-lean-body-mass",
    ],
  }),
  make("tools", "lean-body-mass-formula", {
    navLabel: "LBM Formula",
    h1: "Lean Body Mass Formula",
    title: "Lean Body Mass Formula — Boer, James & Hume Explained",
    description:
      "The lean body mass formulas explained with worked examples. Compare the Boer, James, and Hume equations and learn which LBM formula to use.",
    related: [
      "lean-body-mass-calculator",
      "how-to-calculate-lean-body-mass",
      "lean-body-mass-vs-bmi",
    ],
  }),
  make("tools", "lean-body-mass-calculator-for-men", {
    navLabel: "LBM for Men",
    h1: "Lean Body Mass Calculator for Men",
    title: "Lean Body Mass Calculator for Men — Free LBM Tool",
    description:
      "Calculate lean body mass for men using validated formulas. See male LBM ranges, body fat %, and how to build muscle while staying lean.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-calculator-for-women",
      "ideal-lean-body-mass-chart",
      "how-to-increase-lean-body-mass",
    ],
  }),
  make("tools", "lean-body-mass-calculator-for-women", {
    navLabel: "LBM for Women",
    h1: "Lean Body Mass Calculator for Women",
    title: "Lean Body Mass Calculator for Women — Free LBM Tool",
    description:
      "Calculate lean body mass for women with sex-specific formulas. Understand female LBM ranges, healthy body fat %, and lean-muscle goals.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-calculator-for-men",
      "ideal-lean-body-mass-chart",
      "lean-body-mass-for-weight-loss",
    ],
  }),
  make("tools", "lean-body-mass-vs-bmi", {
    navLabel: "LBM vs BMI",
    h1: "Lean Body Mass vs BMI",
    title: "Lean Body Mass vs BMI — Which Is More Accurate?",
    description:
      "Lean body mass vs BMI compared. See why LBM reflects body composition better than BMI, with examples for athletes and muscular builds.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-percentage",
      "muscle-vs-fat-explained",
    ],
  }),
  make("tools", "how-to-calculate-lean-body-mass", {
    navLabel: "How to Calculate",
    h1: "How to Calculate Lean Body Mass",
    title: "How to Calculate Lean Body Mass — Step by Step",
    description:
      "Learn how to calculate lean body mass by hand and with a calculator. Step-by-step Boer formula example plus common mistakes to avoid.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-formula",
      "lean-body-mass-percentage",
    ],
  }),
  make("tools", "lean-body-mass-percentage", {
    navLabel: "LBM Percentage",
    h1: "Lean Body Mass Percentage",
    title: "Lean Body Mass Percentage — What's Healthy?",
    description:
      "What is a healthy lean body mass percentage? See typical LBM % ranges by sex and age, and how to raise your lean mass percentage.",
    related: [
      "lean-body-mass-calculator",
      "ideal-lean-body-mass-chart",
      "lean-body-mass-vs-bmi",
    ],
  }),
  make("tools", "ideal-lean-body-mass-chart", {
    navLabel: "Ideal LBM Chart",
    h1: "Ideal Lean Body Mass Chart",
    title: "Ideal Lean Body Mass Chart by Height & Sex",
    description:
      "Ideal lean body mass chart with reference ranges by height, sex, and build. Find your target LBM and compare against your calculated result.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-calculator-for-men",
      "lean-body-mass-calculator-for-women",
      "lean-body-mass-percentage",
    ],
  }),
  make("tools", "lean-body-mass-for-weight-loss", {
    navLabel: "LBM & Weight Loss",
    h1: "Lean Body Mass for Weight Loss",
    title: "Lean Body Mass for Weight Loss — Keep Muscle, Lose Fat",
    description:
      "How to protect lean body mass during weight loss. Preserve muscle, target fat, and use your LBM to set smarter calorie and protein goals.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-calorie-needs",
      "how-to-increase-lean-body-mass",
      "muscle-vs-fat-explained",
    ],
  }),
  make("tools", "lean-body-mass-calorie-needs", {
    navLabel: "LBM Calorie Needs",
    h1: "Lean Body Mass & Calorie Needs",
    title: "Lean Body Mass Calorie Needs — BMR from LBM",
    description:
      "Estimate calorie needs from lean body mass using the Katch-McArdle approach. LBM-based BMR is more accurate for lean and muscular builds.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-for-weight-loss",
      "lean-body-mass-benefits",
    ],
  }),
];

// ── GUIDES ───────────────────────────────────────────────────────────────────
const guides: PageNode[] = [
  make("guides", "what-is-lean-body-mass", {
    navLabel: "What Is LBM",
    h1: "What Is Lean Body Mass?",
    title: "What Is Lean Body Mass? Definition & Why It Matters",
    description:
      "Lean body mass is everything in your body that isn't fat — muscle, bone, organs, and water. Learn what LBM means and why it matters for health.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-benefits",
      "muscle-vs-fat-explained",
    ],
  }),
  make("guides", "lean-body-mass-benefits", {
    navLabel: "Benefits of LBM",
    h1: "Benefits of Lean Body Mass",
    title: "Benefits of Lean Body Mass for Health & Longevity",
    description:
      "Higher lean body mass supports metabolism, strength, insulin sensitivity, and healthy aging. See the key benefits of building lean mass.",
    related: [
      "what-is-lean-body-mass",
      "how-to-increase-lean-body-mass",
      "lean-body-mass-calorie-needs",
    ],
  }),
  make("guides", "how-to-increase-lean-body-mass", {
    navLabel: "Increase LBM",
    h1: "How to Increase Lean Body Mass",
    title: "How to Increase Lean Body Mass — Training & Diet",
    description:
      "A practical guide to increasing lean body mass: progressive resistance training, protein targets, recovery, and tracking with your LBM.",
    related: [
      "lean-body-mass-benefits",
      "lean-body-mass-for-weight-loss",
      "muscle-vs-fat-explained",
    ],
  }),
  make("guides", "muscle-vs-fat-explained", {
    navLabel: "Muscle vs Fat",
    h1: "Muscle vs Fat Explained",
    title: "Muscle vs Fat — Density, Weight & Body Composition",
    description:
      "Muscle vs fat explained: why muscle is denser, how body composition beats scale weight, and what it means for your lean body mass.",
    related: [
      "what-is-lean-body-mass",
      "lean-body-mass-vs-bmi",
      "how-to-increase-lean-body-mass",
    ],
  }),
];

// ── FAQ ──────────────────────────────────────────────────────────────────────
const faqPages: PageNode[] = [
  make("faq", "lean-body-mass-calculator-faq", {
    navLabel: "LBM FAQ",
    h1: "Lean Body Mass Calculator — FAQ",
    title: "Lean Body Mass Calculator FAQ — Common Questions",
    description:
      "Answers to common lean body mass questions: which formula is most accurate, how LBM differs from BMI, and how often to remeasure.",
    related: [
      "lean-body-mass-calculator",
      "lean-body-mass-formula",
      "what-is-lean-body-mass",
    ],
  }),
];

export const ALL_PAGES: PageNode[] = [...tools, ...guides, ...faqPages];

const BY_SLUG = new Map(ALL_PAGES.map((p) => [p.slug, p]));

export const getPage = (slug: string): PageNode | undefined => BY_SLUG.get(slug);

export const getRelated = (slug: string): PageNode[] => {
  const page = getPage(slug);
  if (!page) return [];
  return page.related.map(getPage).filter((p): p is PageNode => Boolean(p));
};

export const toolPages = () => tools;
export const guidePages = () => guides;
export const faqOnlyPages = () => faqPages;
export const moneyPage = () => tools.find((t) => t.money)!;
