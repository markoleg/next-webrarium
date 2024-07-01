import { MetadataRoute } from "next";
import { BASEURL } from "@/app/lib/constances";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/services", "/en/services"].map((route) => ({
    url: `${BASEURL}${route}`,
  }));
  return [
    {
      url: `${BASEURL}`,
    },
    {
      url: `${BASEURL}/en`,
    },
    {
      url: `${BASEURL}/privacy-policy`,
    },
    {
      url: `${BASEURL}/en/privacy-policy`,
    },
    // ...routes,
  ];
}
