import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "muscle-vs-fat-explained";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          &quot;Muscle weighs more than fat&quot; isn&apos;t quite right — a kilo is a kilo. What&apos;s
          true is that muscle is denser, so it takes up far less space for the same weight.
        </Lead>
        <H2>Density is the real difference</H2>
        <p>
          Muscle is roughly 15–18% denser than fat. That&apos;s why two people at the same weight can
          look completely different, and why the scale alone is a poor progress tool. Body composition
          — captured by <Link href="/tools/lean-body-mass-calculator">lean body mass</Link> — tells the
          fuller story.
        </p>
        <H2>What each tissue does</H2>
        <ul>
          <li><strong>Muscle:</strong> burns energy, drives strength and movement, supports metabolism.</li>
          <li><strong>Fat:</strong> stores energy, cushions organs, and — in the right amount — is essential.</li>
        </ul>
        <H2>Why the scale can lie</H2>
        <p>
          When you train and eat well, you may gain muscle and lose fat at similar rates, leaving your
          weight flat while your body changes visibly. This is exactly the gap between weight and{" "}
          <Link href="/tools/lean-body-mass-vs-bmi">BMI vs lean body mass</Link>.
        </p>
        <H2>Track what matters</H2>
        <p>
          Follow lean mass and body-fat percentage instead of weight. Start on the{" "}
          <Link href="/tools/lean-body-mass-percentage">lean body mass percentage</Link> page.
        </p>
      </Prose>
    </ContentPage>
  );
}
