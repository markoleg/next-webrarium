import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: "/privacy_policy",
    },
    sitemap: "https://webrarium.com/sitemap.xml",
  };
}
