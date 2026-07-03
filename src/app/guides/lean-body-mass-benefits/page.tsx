import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-benefits";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          Building and keeping lean body mass pays off across almost every marker of health — from
          daily energy to how well you age.
        </Lead>
        <H2>A faster resting metabolism</H2>
        <p>
          Lean tissue burns more calories at rest than fat, so more lean mass means a higher resting
          metabolic rate. That&apos;s why <Link href="/tools/lean-body-mass-calorie-needs">LBM-based
          calorie needs</Link> are more accurate for lean, active people.
        </p>
        <H2>Strength and everyday function</H2>
        <p>
          More muscle means easier stairs, heavier groceries, and lower injury risk. It directly
          supports independence later in life.
        </p>
        <H2>Better metabolic health</H2>
        <p>
          Skeletal muscle is a major site for glucose disposal, which supports healthy insulin
          sensitivity. Maintaining lean mass is protective against age-related metabolic decline.
        </p>
        <H2>Healthier aging</H2>
        <p>
          Lean mass naturally falls with age, and preserving it is one of the most reliable ways to
          stay mobile and strong. Start with{" "}
          <Link href="/guides/how-to-increase-lean-body-mass">how to increase lean body mass</Link> and
          track progress on the <Link href="/tools/lean-body-mass-calculator">calculator</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
