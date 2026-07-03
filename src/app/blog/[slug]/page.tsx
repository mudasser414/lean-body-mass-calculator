import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { LinkCard } from "@/components/RelatedLinks";
import { buildMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { getAllPostSlugs, getPost } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { moneyPage, guidePages } from "@/lib/pages";

interface Params {
  params: { slug: string };
}

// Static generation for every post at build time (fast, fully cacheable).
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default function BlogPost({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  const html = renderMarkdown(post.content);
  // Point blog readers toward the money page + a couple of guides.
  const related = [moneyPage(), ...guidePages().slice(0, 2)];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.date,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <header>
        <p className="text-xs font-medium text-ink-500">
          {new Date(post.date).toLocaleDateString("en-US", { dateStyle: "long" })} · {post.readingTime}{" "}
          · {post.author}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-ink-500">{post.description}</p>
      </header>

      <div
        className="prose-lbm mt-8 space-y-4 text-[15px] leading-relaxed text-ink-700 [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_h3]:pt-2 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink-900"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <section className="mt-14">
        <h2 className="mb-5 font-display text-xl font-bold text-ink-900">Keep exploring</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <LinkCard key={p.slug} page={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
