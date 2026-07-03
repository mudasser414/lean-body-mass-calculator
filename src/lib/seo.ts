import type { Metadata } from "next";
import { site } from "./site";

interface MetaArgs {
  title: string;
  description: string;
  path: string; // e.g. "/tools/lean-body-mass-calculator"
  type?: "website" | "article";
}

// Reusable metadata factory — every page calls this so canonical, OG, and
// Twitter tags stay consistent. Returns Next.js Metadata (App Router).
export function buildMetadata({ title, description, path, type = "website" }: MetaArgs): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: site.twitter,
    },
    robots: { index: true, follow: true },
  };
}

// ── JSON-LD builders ─────────────────────────────────────────────────────────
// Rendered via <script type="application/ld+json"> in the JsonLd component.

export function webApplicationSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Lean Body Mass Calculator",
    url: `${site.url}${path}`,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free lean body mass calculator using the Boer, James, and Hume formulas with metric and imperial units.",
  };
}

export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    mainEntityOfPage: `${site.url}${args.path}`,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { "@type": "Organization", name: site.author.name, url: site.author.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}
