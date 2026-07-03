import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, H3, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-formula";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          Three formulas dominate lean body mass estimation: Boer, James, and Hume. Each takes only
          your weight and height (plus sex) and returns fat-free mass in kilograms.
        </Lead>

        <H2>The Boer formula (recommended)</H2>
        <p>Published in 1984 and the most widely used clinical estimate.</p>
        <ul>
          <li><strong>Men:</strong> LBM = 0.407 × weight(kg) + 0.267 × height(cm) − 19.2</li>
          <li><strong>Women:</strong> LBM = 0.252 × weight(kg) + 0.473 × height(cm) − 48.3</li>
        </ul>

        <H2>The James formula</H2>
        <p>A weight-to-height ratio model from 1976.</p>
        <ul>
          <li><strong>Men:</strong> LBM = 1.1 × weight − 128 × (weight ÷ height)²</li>
          <li><strong>Women:</strong> LBM = 1.07 × weight − 148 × (weight ÷ height)²</li>
        </ul>

        <H2>The Hume formula</H2>
        <p>A classic 1966 clinical equation, still a solid cross-check.</p>
        <ul>
          <li><strong>Men:</strong> LBM = 0.3281 × weight + 0.33929 × height − 29.5336</li>
          <li><strong>Women:</strong> LBM = 0.29569 × weight + 0.41813 × height − 43.2933</li>
        </ul>

        <H2>Worked example</H2>
        <H3>Man, 80 kg, 180 cm, Boer</H3>
        <p>
          LBM = 0.407 × 80 + 0.267 × 180 − 19.2 = 32.56 + 48.06 − 19.2 ≈ <strong>61.4 kg</strong>. That
          leaves ~18.6 kg of fat mass, or about 23% body fat.
        </p>
        <p>
          Rather do it automatically? The{" "}
          <Link href="/tools/lean-body-mass-calculator">LBM calculator</Link> runs all three formulas
          instantly. For a step-by-step walkthrough see{" "}
          <Link href="/tools/how-to-calculate-lean-body-mass">how to calculate lean body mass</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
