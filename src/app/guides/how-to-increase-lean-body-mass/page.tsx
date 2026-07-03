import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "how-to-increase-lean-body-mass";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          Increasing lean body mass comes down to three things done consistently: train with
          resistance, eat enough protein, and recover well. Everything else is detail.
        </Lead>
        <H2>Train with progressive resistance</H2>
        <p>
          Lifting weights — or any hard resistance work — is the signal that tells your body to build
          and keep muscle. Progressively add load, reps, or sets over time. Two to four sessions a week
          is plenty for most people.
        </p>
        <H2>Eat enough protein</H2>
        <p>
          Aim for roughly 1.6–2.2 g of protein per kg of body weight daily, spread across meals. Pair
          it with enough total calories; you can&apos;t build much in a steep deficit. Estimate your
          intake baseline with{" "}
          <Link href="/tools/lean-body-mass-calorie-needs">LBM-based calorie needs</Link>.
        </p>
        <H2>Recover and be patient</H2>
        <p>
          Muscle grows during rest, not during the workout. Prioritise sleep and allow recovery between
          hard sessions. Lean mass changes slowly, so remeasure on the{" "}
          <Link href="/tools/lean-body-mass-calculator">calculator</Link> every 4–6 weeks.
        </p>
        <H2>Losing fat at the same time?</H2>
        <p>
          It&apos;s possible to gain lean mass while losing fat, especially for beginners. The
          muscle-sparing playbook is in{" "}
          <Link href="/tools/lean-body-mass-for-weight-loss">lean body mass for weight loss</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
