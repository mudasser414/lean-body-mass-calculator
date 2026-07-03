import { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Our privacy policy explains how we collect, use, and protect your personal data.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 font-display text-4xl font-bold text-ink-900">Privacy Policy</h1>

      <Prose>
        <h2>Introduction</h2>
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Name, email address, and other information you voluntarily provide
          </li>
          <li>
            <strong>Device Information:</strong> Browser type, IP address, and pages visited
          </li>
          <li>
            <strong>Calculator Data:</strong> Information you enter into our calculators (not stored unless you save it)
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries</li>
          <li>Analyze site usage and trends</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of
          these external sites. We encourage you to review their privacy policies.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us through the information on our website.
        </p>

        <p className="text-sm text-ink-500">Last updated: {new Date().toLocaleDateString()}</p>
      </Prose>
    </main>
  );
}
