import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion, { type QA } from "@/components/FaqAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-calculator-faq";
const page = getPage(SLUG)!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.href,
});

const faqs: QA[] = [
  {
    q: "What is lean body mass?",
    a: "Lean body mass is your total weight minus body fat. It includes muscle, bone, organs, connective tissue, and the water your body holds.",
  },
  {
    q: "Which formula should I use — Boer, James, or Hume?",
    a: "Boer is the best default for most adults. James can read low for very muscular people, and Hume is a solid clinical alternative. Comparing all three gives you a helpful range rather than a single point.",
  },
  {
    q: "Is lean body mass the same as muscle mass?",
    a: "No. Muscle is a large part of lean body mass, but LBM also counts bone, organs, and water. Skeletal muscle is usually around 40 to 50 percent of lean body mass.",
  },
  {
    q: "Can I use lean body mass to set calorie targets?",
    a: "Yes. LBM-based equations like Katch-McArdle estimate your resting metabolism from lean mass, which is more accurate for lean and muscular people than weight-only formulas.",
  },
  {
    q: "How accurate are formula-based estimates?",
    a: "They're good population estimates but not lab-grade. For a precise reading, methods like DEXA or hydrostatic weighing are the gold standard. Use formulas to track trends over time.",
  },
  {
    q: "Does lean body mass change with weight loss?",
    a: "It can. Aggressive dieting without enough protein or resistance training causes muscle loss alongside fat. Protecting LBM is what keeps your metabolism and strength intact.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: page.href },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">{page.h1}</h1>
      <p className="mt-3 text-lg text-ink-500">
        Quick answers to the questions people ask most about lean body mass. Ready to run the
        numbers? Open the{" "}
        <Link href="/tools/lean-body-mass-calculator" className="font-medium text-mint-700 underline">
          LBM calculator
        </Link>
        .
      </p>
      <div className="mt-8">
        <FaqAccordion items={faqs} />
      </div>
      <RelatedLinks slug={SLUG} />
    </div>
  );
}
