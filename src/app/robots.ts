import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ssppos.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/internal/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
