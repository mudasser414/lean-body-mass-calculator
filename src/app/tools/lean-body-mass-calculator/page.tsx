import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import FaqAccordion, { type QA } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata, webApplicationSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { getPage } from "@/lib/pages";
import { site } from "@/lib/site";

const SLUG = "lean-body-mass-calculator";
const page = getPage(SLUG)!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.href,
});

const faqs: QA[] = [
  {
    q: "Which lean body mass formula is most accurate?",
    a: "For most people the Boer formula gives the closest estimate to lab methods like DEXA. The James and Hume formulas are useful cross-checks, especially at the extremes of height and weight. This tool lets you switch between all three.",
  },
  {
    q: "How is lean body mass different from BMI?",
    a: "BMI only uses height and weight, so it can't tell muscle from fat. Lean body mass estimates the fat-free portion of your body directly, which makes it far more useful for athletes and muscular builds.",
  },
  {
    q: "Is the calculation done in kg or lbs?",
    a: "Both. You can enter weight in kilograms or pounds and height in centimetres or feet and inches. The result updates instantly and displays in your chosen unit.",
  },
  {
    q: "How often should I recalculate my lean body mass?",
    a: "Every 4 to 6 weeks is enough to see real change. LBM shifts slowly, so daily checks mostly reflect water and food weight rather than true body-composition change.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
  { name: page.navLabel, path: page.href },
];

export default function LeanBodyMassCalculatorPage() {
  return (
    <>
      <JsonLd data={webApplicationSchema(page.href)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero + calculator */}
      <section className="bg-gradient-to-b from-mint-50/60 to-white">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-8">
          <Breadcrumbs items={crumbs} />
          <div className="mb-7 max-w-2xl">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {page.h1}
            </h1>
            <p className="mt-3 text-lg text-ink-500">
              Estimate your lean body mass, fat mass, and body-fat percentage in seconds. Free,
              accurate, and works in kg or lbs — no sign-up.
            </p>
          </div>
          <Calculator />
          <p className="mt-3 text-center text-xs text-ink-500">
            {site.author.reviewer} · Educational estimate, not a medical diagnosis.
          </p>
        </div>
      </section>

      {/* Explanatory content */}
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Prose>
          <Lead>
            Lean body mass (LBM) is everything in your body that isn&apos;t fat — muscle, bone,
            organs, connective tissue, and body water. Tracking it tells you far more about your
            health and training progress than weight alone.
          </Lead>

          <H2>How this calculator works</H2>
          <p>
            Enter your sex, weight, and height, then pick a formula. The tool applies the equation
            instantly and returns your lean body mass, the fat mass that makes up the rest of your
            weight, and your body-fat percentage. You can read the maths behind each equation on the{" "}
            <Link href="/tools/lean-body-mass-formula">lean body mass formula</Link> page, or follow
            a worked example in{" "}
            <Link href="/tools/how-to-calculate-lean-body-mass">how to calculate lean body mass</Link>
            .
          </p>

          <H2>Why lean body mass beats the scale</H2>
          <p>
            Two people at the same weight can have very different bodies. LBM separates the metabolically
            active tissue from stored fat, which is why it&apos;s a better yardstick than{" "}
            <Link href="/tools/lean-body-mass-vs-bmi">BMI</Link>. If you&apos;re dieting, protecting
            your lean mass is the whole game — see{" "}
            <Link href="/tools/lean-body-mass-for-weight-loss">lean body mass for weight loss</Link>{" "}
            and{" "}
            <Link href="/tools/lean-body-mass-calorie-needs">LBM-based calorie needs</Link>.
          </p>

          <H2>Getting the most accurate estimate</H2>
          <p>
            Measure your weight first thing in the morning for consistency, and use the same formula
            each time so results stay comparable. Men and women have different body-composition
            baselines, so use the{" "}
            <Link href="/tools/lean-body-mass-calculator-for-men">men&apos;s</Link> or{" "}
            <Link href="/tools/lean-body-mass-calculator-for-women">women&apos;s</Link> version if you
            want sex-specific context and target ranges from the{" "}
            <Link href="/tools/ideal-lean-body-mass-chart">ideal LBM chart</Link>.
          </p>
        </Prose>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="mb-5 font-display text-2xl font-bold text-ink-900">
            Lean body mass calculator — FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </section>

        <RelatedLinks slug={SLUG} />
      </div>
    </>
  );
}
