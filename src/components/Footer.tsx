import Link from "next/link";
import { toolPages, guidePages, faqOnlyPages } from "@/lib/pages";
import { site } from "@/lib/site";

// Footer doubles as a sitewide internal-link hub: every tool, guide, and FAQ
// is reachable from every page, which spreads link equity and aids crawling.
export default function Footer() {
  const tools = toolPages();
  const guides = guidePages();
  const faq = faqOnlyPages();

  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint-500 text-white">L</span>
            {site.name}
          </div>
          <p className="mt-3 text-sm text-ink-500">
            Free, accurate body-composition tools. Estimate your lean body mass and understand what it
            means for your health.
          </p>
        </div>

        <FooterCol title="Calculators" items={tools} />
        <FooterCol title="Guides" items={[...guides, ...faq]} />

        <div>
          <h3 className="text-sm font-semibold text-ink-900">About</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li>
              <Link href="/" className="hover:text-mint-600">
                Home
              </Link>
            </li>
            <li className="text-xs leading-relaxed">
              {site.author.reviewer}. Educational use only — not medical advice.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-ink-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; navLabel: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-ink-500">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-mint-600">
              {item.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
