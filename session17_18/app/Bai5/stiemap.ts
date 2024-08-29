import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date().toISOString(),
    },
  ];
}


