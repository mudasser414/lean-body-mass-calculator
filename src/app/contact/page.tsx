import { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with us. We'd love to hear your questions, feedback, and suggestions.",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 font-display text-4xl font-bold text-ink-900">Contact Us</h1>

      <Prose>
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Whether you have questions about our calculators, feedback on our content, or
          suggestions for improvements, please don't hesitate to reach out.
        </p>

        <h2>How to Contact Us</h2>
        <p>
          You can contact us through the following channels:
        </p>

        <h3>Email</h3>
        <p>
          Send us an email at{" "}
          <a href="mailto:contact@lbmcalculator.com" className="font-medium text-mint-700 hover:text-mint-800">
            contact@lbmcalculator.com
          </a>
        </p>

        <h3>Response Time</h3>
        <p>
          We typically respond to inquiries within 24-48 hours during business days. Thank you for your patience!
        </p>

        <h2>What We'd Like to Hear About</h2>
        <ul>
          <li>
            <strong>Bug Reports:</strong> Found a technical issue? Let us know!
          </li>
          <li>
            <strong>Feature Requests:</strong> Ideas for new calculators or tools? We'd love to hear them
          </li>
          <li>
            <strong>Feedback:</strong> What can we improve? Your feedback helps us serve you better
          </li>
          <li>
            <strong>Content Suggestions:</strong> Topics you'd like us to cover? Send us your suggestions
          </li>
          <li>
            <strong>General Questions:</strong> Questions about body composition, lean mass, or our tools
          </li>
        </ul>

        <h2>Privacy</h2>
        <p>
          We respect your privacy. Any information you provide through this form will be kept confidential and used
          only to respond to your inquiry. Please review our{" "}
          <a href="/legal/privacy" className="font-medium text-mint-700 hover:text-mint-800">
            privacy policy
          </a>
          for more details.
        </p>

        <h2>Medical Questions</h2>
        <p>
          If you have medical questions or concerns, please consult with a qualified healthcare professional. Our
          content is educational and not a substitute for professional medical advice.
        </p>
      </Prose>
    </main>
  );
}
