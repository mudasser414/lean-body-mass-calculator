import { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Medical Disclaimer",
  description: "Important medical disclaimer regarding the use of our calculator and information.",
  path: "/legal/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 font-display text-4xl font-bold text-ink-900">Medical Disclaimer</h1>

      <Prose>
        <h2>No Medical Advice</h2>
        <p>
          The information provided on this website, including our lean body mass calculator and related content, is for
          informational and educational purposes only. It is not intended to be, and should not be construed as,
          medical advice or a substitute for professional medical consultation.
        </p>

        <h2>Educational Use Only</h2>
        <p>
          Our calculators and tools are designed to provide general estimates based on standard formulas and
          mathematical calculations. They are not diagnostic tools and should not be used to diagnose any medical
          condition.
        </p>

        <h2>Not a Substitute for Professional Advice</h2>
        <p>
          Always consult with a qualified healthcare provider, registered dietitian, or fitness professional before:
        </p>
        <ul>
          <li>Starting a new diet or exercise program</li>
          <li>Making significant changes to your nutrition or fitness routine</li>
          <li>Taking supplements or medications</li>
          <li>Interpreting your body composition results</li>
        </ul>

        <h2>Individual Variability</h2>
        <p>
          Lean body mass calculations are estimates based on population averages. Individual results may vary
          significantly based on factors including:
        </p>
        <ul>
          <li>Age and genetic factors</li>
          <li>Training history and current fitness level</li>
          <li>Hormonal status</li>
          <li>Measurement accuracy</li>
          <li>Overall health status</li>
        </ul>

        <h2>No Liability</h2>
        <p>
          We are not liable for any direct, indirect, special, incidental, or consequential damages resulting from your
          use of this website or our calculators. By using this site, you assume full responsibility for any decisions
          or actions you take based on the information provided.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          While we strive to provide accurate and up-to-date information, we make no warranties or representations about
          the accuracy, completeness, or timeliness of the information on this site.
        </p>

        <h2>When to Seek Professional Help</h2>
        <p>
          If you have any concerns about your health, weight, body composition, or fitness level, please consult with a
          qualified healthcare professional before relying on any information or results from our calculators.
        </p>

        <p className="text-sm text-ink-500">Last updated: {new Date().toLocaleDateString()}</p>
      </Prose>
    </main>
  );
}
