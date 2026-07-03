import Breadcrumbs from "./Breadcrumbs";
import RelatedLinks from "./RelatedLinks";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { getPage, type Section } from "@/lib/pages";

const SECTION_LABEL: Record<Section, string> = {
  tools: "Tools",
  guides: "Guides",
  faq: "FAQ",
  home: "Home",
};

// Standard scaffold for every guide / tool-explainer page: consistent H1,
// breadcrumbs (visible + schema), body slot, and auto related-links block.
export default function ContentPage({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const page = getPage(slug);
  if (!page) return null;

  const sectionPath = `/${page.section}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: SECTION_LABEL[page.section], path: sectionPath },
    { name: page.navLabel, path: page.href },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
        {page.h1}
      </h1>
      <div className="mt-6">{children}</div>
      <RelatedLinks slug={slug} />
    </article>
  );
}
