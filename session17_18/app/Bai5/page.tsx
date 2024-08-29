import { MetadataRoute } from "next";

async function fetchBlogPosts() {
  try {
    const res = await fetch("https://acme.com/blog");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const posts = await res.json();
      return posts;
    } else {
      throw new Error("The response is not in JSON format");
    }
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts();

  const urls = posts.map((post: { slug: string; updatedAt?: string }) => ({
    url: `https://acme.com/blog/${post.slug}`,
    lastModified: post.updatedAt || new Date().toISOString(),
  }));

  return [
    {
      url: "https://acme.com",
      lastModified: new Date().toISOString(),
    },
    ...urls,
  ];
}
