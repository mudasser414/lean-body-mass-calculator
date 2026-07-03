import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import Prose, { H2 } from "@/components/Prose";
import { buildMetadata, webApplicationSchema, breadcrumbSchema } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-calculator-for-men";
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
      <section className="bg-gradient-to-b from-aqua-50/50 to-white">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-8">
          <Breadcrumbs items={crumbs} />
          <h1 className="mb-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {page.h1}
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-ink-500">
            The calculator is preset for male body composition. Enter your weight and height to get
            your lean body mass, fat mass, and body-fat percentage.
          </p>
          <Calculator defaultSex="male" />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <Prose>
          <H2>Typical lean body mass ranges for men</H2>
          <p>
            Adult men generally carry a higher share of lean mass than women, largely due to greater
            skeletal muscle and bone density. A healthy male body-fat range sits around 10–20%, which
            puts lean body mass near 80–90% of total weight for many men. Compare your figure against
            the <Link href="/tools/ideal-lean-body-mass-chart">ideal LBM chart</Link>.
          </p>
          <H2>Building lean mass as a man</H2>
          <p>
            Progressive resistance training plus adequate protein is the reliable path — the full
            method is in{" "}
            <Link href="/guides/how-to-increase-lean-body-mass">how to increase lean body mass</Link>.
            If you&apos;re dieting, prioritise keeping the muscle you already have; see{" "}
            <Link href="/tools/lean-body-mass-for-weight-loss">lean body mass for weight loss</Link>.
            Women can use the{" "}
            <Link href="/tools/lean-body-mass-calculator-for-women">women&apos;s calculator</Link>{" "}
            for sex-specific context.
          </p>
        </Prose>
        <RelatedLinks slug={SLUG} />
      </div>
    </>
  );
}
