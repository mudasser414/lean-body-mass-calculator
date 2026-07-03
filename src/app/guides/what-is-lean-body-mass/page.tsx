import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "what-is-lean-body-mass";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          Lean body mass is your total body weight minus all of your body fat. It&apos;s everything
          that keeps you moving, upright, and alive — muscle, bone, organs, connective tissue, and the
          water throughout your body.
        </Lead>
        <H2>What counts as lean mass</H2>
        <ul>
          <li>Skeletal muscle (usually the largest single share)</li>
          <li>Bones and connective tissue</li>
          <li>Internal organs</li>
          <li>Body water, inside and around cells</li>
        </ul>
        <p>
          Only stored body fat is excluded. That&apos;s why LBM is sometimes called fat-free mass.
        </p>
        <H2>Lean mass vs muscle mass</H2>
        <p>
          They&apos;re related but not identical. Muscle is a big part of lean mass, but LBM also
          includes bone and water, so it&apos;s always larger than muscle mass alone. The distinction
          matters when you read body-composition results.
        </p>
        <H2>Why it&apos;s worth knowing</H2>
        <p>
          Lean mass drives your metabolism, strength, and resilience as you age. It&apos;s a better
          health signal than weight or <Link href="/tools/lean-body-mass-vs-bmi">BMI</Link>. Estimate
          yours on the <Link href="/tools/lean-body-mass-calculator">calculator</Link>, then explore
          the <Link href="/guides/lean-body-mass-benefits">benefits of lean mass</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
