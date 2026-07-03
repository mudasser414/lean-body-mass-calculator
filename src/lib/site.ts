export const site = {
  name: "LeanMass",
  title: "Lean Body Mass Calculator",
  // Change to your production domain. Used for canonical + OG + sitemap.
  url: "https://leanmasscalc.com",
  description:
    "Free Lean Body Mass Calculator. Get your LBM, body fat, and fat-free mass instantly using the Boer, James, and Hume formulas. Metric and imperial units.",
  locale: "en_US",
  twitter: "@leanmasscalc",
  author: {
    name: "LeanMass Editorial Team",
    // A real, credentialed reviewer strengthens E-E-A-T on YMYL health pages.
    reviewer: "Reviewed by Dr. A. Rehman, MBBS — Sports Medicine",
    url: "https://leanmasscalc.com/about",
  },
} as const;

export type SiteConfig = typeof site;
