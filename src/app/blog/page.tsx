import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Lean Body Mass Blog",
  description:
    "Practical articles on tracking, building, and understanding lean body mass — no fluff, evidence-first.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
      <h1 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
        Lean Body Mass Blog
      </h1>
      <p className="mt-3 text-lg text-ink-500">
        Evidence-first articles on body composition and training.
      </p>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <p className="text-xs font-medium text-ink-500">
              {new Date(post.date).toLocaleDateString("en-US", { dateStyle: "medium" })} ·{" "}
              {post.readingTime}
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-ink-900">{post.title}</h2>
            <p className="mt-1 text-sm text-ink-500">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
