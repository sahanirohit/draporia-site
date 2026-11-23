import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

const paths = ["", "/services", "/about", "/portfolio", "/packages", "/faq", "/contact", "/terms", "/privacy", "/refund-policy", "/security"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${siteUrl}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
