import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-calorie-needs";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          Calorie formulas that only use body weight over-count for lean people and under-count for
          those carrying more fat. Basing your estimate on lean body mass fixes that.
        </Lead>
        <H2>The Katch-McArdle equation</H2>
        <p>
          It estimates resting metabolic rate (BMR) directly from lean mass:
        </p>
        <ul>
          <li><strong>BMR = 370 + (21.6 × LBM in kg)</strong></li>
        </ul>
        <p>
          Get your LBM from the{" "}
          <Link href="/tools/lean-body-mass-calculator">calculator</Link>, then plug it in. For a
          person with 60 kg of lean mass: 370 + 21.6 × 60 ≈ <strong>1,666 kcal</strong> at rest.
        </p>
        <H2>From BMR to daily calories</H2>
        <p>
          Multiply BMR by an activity factor: about 1.2 for sedentary, 1.55 for moderately active, and
          1.725 for very active. That gives your maintenance calories. Subtract 15–20% for fat loss —
          the muscle-sparing approach in{" "}
          <Link href="/tools/lean-body-mass-for-weight-loss">lean body mass for weight loss</Link>.
        </p>
        <H2>Why lean people should use LBM</H2>
        <p>
          Two people at the same weight can have very different lean mass, and therefore different
          calorie needs. LBM-based estimates track your real metabolism, which is one of the{" "}
          <Link href="/guides/lean-body-mass-benefits">benefits of lean mass</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
