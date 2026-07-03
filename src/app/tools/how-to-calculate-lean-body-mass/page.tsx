import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "how-to-calculate-lean-body-mass";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          You can calculate lean body mass by hand in under a minute. Here&apos;s the process using
          the Boer formula, which is the most reliable choice for most adults.
        </Lead>

        <H2>Step 1 — Get your numbers in metric</H2>
        <p>
          The formulas expect kilograms and centimetres. To convert: divide pounds by 2.205 for kg,
          and multiply inches by 2.54 for cm. (The{" "}
          <Link href="/tools/lean-body-mass-calculator">calculator</Link> does this automatically.)
        </p>

        <H2>Step 2 — Pick the right equation for your sex</H2>
        <ul>
          <li><strong>Men:</strong> LBM = 0.407 × weight + 0.267 × height − 19.2</li>
          <li><strong>Women:</strong> LBM = 0.252 × weight + 0.473 × height − 48.3</li>
        </ul>
        <p>
          All three formulas are compared on the{" "}
          <Link href="/tools/lean-body-mass-formula">lean body mass formula</Link> page.
        </p>

        <H2>Step 3 — Plug in and solve</H2>
        <p>
          For a 68 kg, 165 cm woman: 0.252 × 68 + 0.473 × 165 − 48.3 = 17.14 + 78.05 − 48.3 ≈{" "}
          <strong>46.9 kg</strong> lean body mass.
        </p>

        <H2>Step 4 — Find fat mass and body-fat %</H2>
        <p>
          Fat mass = total weight − LBM = 68 − 46.9 = 21.1 kg. Body fat % = 21.1 ÷ 68 × 100 ≈ 31%.
          Learn what that number means on the{" "}
          <Link href="/tools/lean-body-mass-percentage">lean body mass percentage</Link> page.
        </p>

        <H2>Common mistakes to avoid</H2>
        <ul>
          <li>Mixing units — always convert to kg and cm first.</li>
          <li>Using the wrong sex equation, which can skew results by several kilograms.</li>
          <li>Expecting lab-level precision; formulas estimate, they don&apos;t measure.</li>
        </ul>
      </Prose>
    </ContentPage>
  );
}
