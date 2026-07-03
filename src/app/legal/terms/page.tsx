import { Metadata } from "next";
import Prose from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Our terms of service outline the rules and regulations for using our website.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 font-display text-4xl font-bold text-ink-900">Terms of Service</h1>

      <Prose>
        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this
          agreement.
        </p>

        <h2>License to Use Website</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on our
          website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
          of title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on the site</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied,
          and hereby disclaim and negate all other warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
          or other violation of rights.
        </p>

        <h2>Limitations</h2>
        <p>
          In no event shall our company or its suppliers be liable for any damages (including, without limitation,
          damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
          use the materials on our website.
        </p>

        <h2>Accuracy of Materials</h2>
        <p>
          The materials appearing on our website could include technical, typographical, or photographic errors. We do
          not warrant that any of the materials on our website are accurate, complete, or current. We may make changes
          to the materials contained on our website at any time without notice.
        </p>

        <h2>Links</h2>
        <p>
          We have not reviewed all of the sites linked to our website and are not responsible for the contents of any
          such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such
          linked website is at the user's own risk.
        </p>

        <h2>Modifications</h2>
        <p>
          We may revise these terms of service for our website at any time without notice. By using this website, you
          are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in
          which we operate, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <p className="text-sm text-ink-500">Last updated: {new Date().toLocaleDateString()}</p>
      </Prose>
    </main>
  );
}
