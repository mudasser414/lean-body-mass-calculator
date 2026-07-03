import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { ALL_PAGES } from "@/lib/pages";
import { getAllPosts } from "@/lib/blog";

// Auto-generated sitemap. New pages added to the registry (or blog folder)
// appear here automatically — no manual maintenance as the site scales.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const registryRoutes: MetadataRoute.Sitemap = ALL_PAGES.map((p) => ({
    url: `${site.url}${p.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.money ? 0.9 : 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...registryRoutes, ...blogRoutes];
}
