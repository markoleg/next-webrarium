import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://webrarium.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "https://webrarium.com/",
          en: "https://webrarium.com/en",
        },
      },
      priority: 1,
    },
  ];
}
