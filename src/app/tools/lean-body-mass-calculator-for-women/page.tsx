import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import Prose, { H2 } from "@/components/Prose";
import { buildMetadata, webApplicationSchema, breadcrumbSchema } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-calculator-for-women";
const page = getPage(SLUG)!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.href,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
  { name: page.navLabel, path: page.href },
];

export default function Page() {
  return (
    <>
      <JsonLd data={webApplicationSchema(page.href)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="bg-gradient-to-b from-mint-50/60 to-white">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-8">
          <Breadcrumbs items={crumbs} />
          <h1 className="mb-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {page.h1}
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-ink-500">
            The calculator is preset for female body composition. Enter your weight and height for an
            instant lean body mass, fat mass, and body-fat estimate.
          </p>
          <Calculator defaultSex="female" />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <Prose>
          <H2>Typical lean body mass ranges for women</H2>
          <p>
            Women naturally carry more essential fat than men, so a healthy female body-fat range is
            roughly 18–28%. That places lean body mass near 72–82% of total weight for many women.
            Essential fat supports hormone function, so a very low body-fat target isn&apos;t a
            healthy goal. Check reference ranges on the{" "}
            <Link href="/tools/ideal-lean-body-mass-chart">ideal LBM chart</Link>.
          </p>
          <H2>Growing and protecting lean mass</H2>
          <p>
            Resistance training builds lean tissue without adding bulk for most women — the full
            approach is in{" "}
            <Link href="/guides/how-to-increase-lean-body-mass">how to increase lean body mass</Link>.
            During fat loss, protein and strength work protect your{" "}
            <Link href="/tools/lean-body-mass-percentage">lean mass percentage</Link>. Men can use the{" "}
            <Link href="/tools/lean-body-mass-calculator-for-men">men&apos;s calculator</Link>.
          </p>
        </Prose>
        <RelatedLinks slug={SLUG} />
      </div>
    </>
  );
}
