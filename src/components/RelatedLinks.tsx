import Link from "next/link";
import { getRelated, type PageNode } from "@/lib/pages";

const SECTION_TAG: Record<string, string> = {
  tools: "Tool",
  guides: "Guide",
  faq: "FAQ",
  home: "Home",
};

export function LinkCard({ page }: { page: PageNode }) {
  return (
    <Link
      href={page.href}
      className="group flex flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <span className="mb-2 inline-flex w-fit rounded-full bg-mint-50 px-2.5 py-0.5 text-xs font-semibold text-mint-700">
        {SECTION_TAG[page.section]}
      </span>
      <span className="font-display text-base font-semibold text-ink-900 group-hover:text-mint-700">
        {page.h1}
      </span>
      <span className="mt-1 line-clamp-2 text-sm text-ink-500">{page.description}</span>
    </Link>
  );
}

// Renders the related-pages grid for a given slug. Drives tools ↔ guides ↔ faq
// cross-linking automatically from the page registry.
export default function RelatedLinks({ slug, heading = "Related pages" }: { slug: string; heading?: string }) {
  const related = getRelated(slug);
  if (related.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="mb-5 font-display text-xl font-bold text-ink-900">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((page) => (
          <LinkCard key={page.slug} page={page} />
        ))}
      </div>
    </section>
  );
}
