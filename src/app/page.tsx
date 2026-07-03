import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import { LinkCard } from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import { toolPages, guidePages, moneyPage } from "@/lib/pages";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${site.title} — Free LBM & Body Fat Tool`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const tools = toolPages();
  const guides = guidePages();
  const money = moneyPage();

  return (
    <>
      <JsonLd data={webApplicationSchema(money.href)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mint-50 via-aqua-50/40 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-mint-700 shadow-sm">
              Free · No sign-up · kg &amp; lbs
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Know your body,
              <br />
              <span className="text-mint-600">not just your weight.</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-ink-500">
              Calculate your lean body mass, fat mass, and body-fat percentage in seconds — using
              clinically validated formulas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={money.href}
                className="rounded-lg bg-mint-500 px-5 py-3 font-semibold text-white shadow-lift transition hover:bg-mint-600"
              >
                Open the calculator
              </Link>
              <Link
                href="/guides/what-is-lean-body-mass"
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-ink-700 transition hover:border-mint-300"
              >
                What is LBM?
              </Link>
            </div>
          </div>

          {/* Live calculator right in the hero — the page's thesis is "try it now" */}
          <div>
            <Calculator />
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Calculators &amp; tools</h2>
            <p className="mt-1 text-ink-500">Every angle of lean body mass, one tool per intent.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <LinkCard key={t.slug} page={t} />
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-900">Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => (
              <LinkCard key={g.slug} page={g} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
