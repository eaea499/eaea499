import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eaea499.cn";
  const routes = ["/", "/projects/", "/projects/smart-streetlight/", "/blog/", "/blog/from-domain-to-https/", "/blog/smart-streetlight-debugging/", "/about/"];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date("2026-09-21"), changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : 0.7 }));
}
