import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import Prose, { H2, Lead } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/pages";

const SLUG = "ideal-lean-body-mass-chart";
const page = getPage(SLUG)!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.href });

const rows = [
  { h: "160 cm (5'3\")", men: "52–58 kg", women: "44–50 kg" },
  { h: "170 cm (5'7\")", men: "58–65 kg", women: "49–55 kg" },
  { h: "180 cm (5'11\")", men: "64–72 kg", women: "54–61 kg" },
  { h: "190 cm (6'3\")", men: "70–79 kg", women: "59–67 kg" },
];

export default function Page() {
  return (
    <ContentPage slug={SLUG}>
      <Prose>
        <Lead>
          These reference ranges show a typical healthy lean body mass by height and sex. They&apos;re
          guides, not targets — build and frame vary from person to person.
        </Lead>
        <H2>Ideal lean body mass by height</H2>
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-ink-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Height</th>
                <th className="px-4 py-3 font-semibold">Men (LBM)</th>
                <th className="px-4 py-3 font-semibold">Women (LBM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.h}>
                  <td className="px-4 py-3 font-medium text-ink-900">{r.h}</td>
                  <td className="px-4 py-3 text-ink-700">{r.men}</td>
                  <td className="px-4 py-3 text-ink-700">{r.women}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <H2>How to use the chart</H2>
        <p>
          Find your height, then compare your calculated figure from the{" "}
          <Link href="/tools/lean-body-mass-calculator">LBM calculator</Link>. Sitting inside the range
          is healthy; being above it usually reflects a muscular build, not a problem. Men and women
          have dedicated tools:{" "}
          <Link href="/tools/lean-body-mass-calculator-for-men">men</Link> and{" "}
          <Link href="/tools/lean-body-mass-calculator-for-women">women</Link>.
        </p>
      </Prose>
    </ContentPage>
  );
}
