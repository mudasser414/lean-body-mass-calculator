import { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Learn about our mission to provide accurate lean body mass calculators and health information.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 font-display text-4xl font-bold text-ink-900">About {site.name}</h1>

      <Prose>
        <h2>Our Mission</h2>
        <p>
          We're dedicated to providing free, accurate, and accessible tools to help people understand their body
          composition. Our lean body mass calculator uses scientifically validated formulas to give you insights into
          your health and fitness.
        </p>

        <h2>Why Lean Body Mass Matters</h2>
        <p>
          Lean body mass is a crucial metric for understanding your overall health and body composition. Unlike weight
          alone, LBM accounts for the difference between muscle and fat, giving you a more complete picture of your
          fitness level and metabolic health.
        </p>

        <h2>Our Approach</h2>
        <p>
          We believe that health information should be:</p>
        <ul>
          <li>
            <strong>Free and Accessible:</strong> No paywalls, logins, or hidden fees
          </li>
          <li>
            <strong>Accurate:</strong> Based on peer-reviewed research and validated formulas
          </li>
          <li>
            <strong>Educational:</strong> Helping you understand what the results mean
          </li>
          <li>
            <strong>Honest:</strong> Clear about limitations and when to seek professional advice
          </li>
        </ul>

        <h2>What We Offer</h2>
        <p>Our platform includes:</p>
        <ul>
          <li>Multiple lean body mass calculators using different validated formulas</li>
          <li>Gender and age-specific calculators</li>
          <li>Comprehensive guides on body composition and health</li>
          <li>Educational content to help you interpret your results</li>
          <li>Tools to track your progress over time</li>
        </ul>

        <h2>Important Disclaimer</h2>
        <p>
          Our calculators and information are for educational purposes only. They are not a substitute for professional
          medical advice. Always consult with a healthcare provider, registered dietitian, or certified fitness
          professional before making significant changes to your diet or exercise routine.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We&apos;d love to hear from you. Check out our{" "}
          <Link href="/contact" className="font-medium text-mint-700 hover:text-mint-800">
            contact page
          </Link>
          {" "}to get in touch.
        </p>
      </Prose>
    </main>
  );
}
