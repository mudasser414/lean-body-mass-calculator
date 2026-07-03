import type { Metadata } from "next";
import { LinkCard } from "@/components/RelatedLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { guidePages } from "@/lib/pages";

export const metadata: Metadata = buildMetadata({
  title: "Lean Body Mass Guides",
  description:
    "Plain-English guides to lean body mass: what it is, why it matters, how to build it, and how muscle and fat really differ.",
  path: "/guides",
});

export default function GuidesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }]} />
      <h1 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
        Lean Body Mass Guides
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-500">
        Understand the concepts behind the numbers, then put them to work.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guidePages().map((g) => (
          <LinkCard key={g.slug} page={g} />
        ))}
      </div>
    </div>
  );
}
