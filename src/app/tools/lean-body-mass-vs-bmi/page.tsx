import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "lean-body-mass-vs-bmi";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          BMI and lean body mass both use height and weight, but they answer different questions. BMI
          rates your weight relative to height; LBM estimates how much of that weight is fat-free
          tissue.
        </Lead>
        <H2>Why BMI can mislead</H2>
        <p>
          BMI can&apos;t tell muscle from fat. A muscular athlete and a sedentary person of the same
          height and weight get the same BMI, even though their bodies are completely different. This
          is BMI&apos;s well-known blind spot for lean, muscular, and older adults.
        </p>
        <H2>What lean body mass adds</H2>
        <p>
          LBM looks past total weight to the tissue that drives metabolism and strength. That makes it
          a better progress metric during training or fat loss. Run both on the{" "}
          <Link href="/tools/lean-body-mass-calculator">calculator</Link> and compare — you&apos;ll
          often see BMI flag &quot;overweight&quot; for people who are simply muscular.
        </p>
        <H2>When to use each</H2>
        <ul>
          <li><strong>BMI:</strong> quick population screening, easy to compute.</li>
          <li><strong>LBM:</strong> tracking body composition, setting protein and calorie goals.</li>
        </ul>
        <p>
          The deeper reason they diverge is density — see{" "}
          <Link href="/guides/muscle-vs-fat-explained">muscle vs fat explained</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
