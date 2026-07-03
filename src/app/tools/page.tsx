import type { Metadata } from "next";
import { LinkCard } from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { toolPages } from "@/lib/pages";

export const metadata: Metadata = buildMetadata({
  title: "Lean Body Mass Tools & Calculators",
  description:
    "Every lean body mass calculator in one place: the main LBM tool, formulas, men's and women's versions, charts, and body-composition comparisons.",
  path: "/tools",
});

export default function ToolsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Tools", path: "/tools" }]} />
      <h1 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
        Lean Body Mass Tools
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-500">
        Pick the calculator that matches your goal. Each one is built around a single intent so you
        get the clearest possible answer.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolPages().map((t) => (
          <LinkCard key={t.slug} page={t} />
        ))}
      </div>
    </div>
  );
}
