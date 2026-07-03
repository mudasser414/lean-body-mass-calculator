import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-percentage";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          Your lean body mass percentage is simply LBM divided by total weight. It&apos;s the mirror
          image of body-fat percentage, and it&apos;s a cleaner way to track composition over time.
        </Lead>
        <H2>Healthy ranges by sex</H2>
        <ul>
          <li><strong>Men:</strong> roughly 80–90% lean mass (10–20% body fat).</li>
          <li><strong>Women:</strong> roughly 72–82% lean mass (18–28% body fat).</li>
        </ul>
        <p>
          Women carry more essential fat for hormonal health, so a lower lean percentage is normal and
          healthy. See the <Link href="/tools/ideal-lean-body-mass-chart">ideal LBM chart</Link> for
          height-based targets.
        </p>
        <H2>How age changes the picture</H2>
        <p>
          Lean mass naturally declines from the 30s onward — a process called sarcopenia. Resistance
          training slows it dramatically; the how-to lives in{" "}
          <Link href="/guides/how-to-increase-lean-body-mass">how to increase lean body mass</Link>.
        </p>
        <H2>Raising your lean percentage</H2>
        <p>
          Two levers: build lean tissue, or lose fat while protecting muscle. Both improve the ratio.
          Calculate your current split on the{" "}
          <Link href="/tools/lean-body-mass-calculator">LBM calculator</Link>, then plan fat loss with{" "}
          <Link href="/tools/lean-body-mass-for-weight-loss">lean body mass for weight loss</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
