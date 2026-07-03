import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-for-weight-loss";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          The goal of smart weight loss isn&apos;t just a lower number on the scale — it&apos;s losing
          fat while keeping lean body mass. Protect your muscle and your metabolism stays high.
        </Lead>
        <H2>Why protecting LBM matters</H2>
        <p>
          Lean tissue burns more energy at rest than fat. Lose muscle and your resting metabolism
          drops, which makes further fat loss harder and rebound weight easier. Track the split with
          the <Link href="/tools/lean-body-mass-calculator">LBM calculator</Link> rather than the scale
          alone.
        </p>
        <H2>Three levers that preserve lean mass</H2>
        <ul>
          <li><strong>Protein:</strong> aim for roughly 1.6–2.2 g per kg of body weight daily.</li>
          <li><strong>Resistance training:</strong> lifting signals your body to keep muscle.</li>
          <li><strong>Moderate deficit:</strong> lose slowly; crash diets strip muscle first.</li>
        </ul>
        <H2>Set targets from lean mass</H2>
        <p>
          Because LBM drives metabolism, it&apos;s the best base for calorie planning — see{" "}
          <Link href="/tools/lean-body-mass-calorie-needs">lean body mass calorie needs</Link>. For the
          training side, follow{" "}
          <Link href="/guides/how-to-increase-lean-body-mass">how to increase lean body mass</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
