import { packages } from "@/data/packages";
import { blogPosts, siteUrl } from "@/data/siteContent";

const routes = [
  "",
  "/group-trips",
  "/corporate-trips",
  "/couple-packages",
  "/weekend-getaways",
  "/himachal-trips",
  "/uttarakhand-trips",
  "/rajasthan-trips",
  "/about-us",
  "/contact-us",
  "/blog",
];

export default function sitemap() {
  const lastModified = new Date("2026-05-12");
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified, changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 })),
    ...packages.map((trip) => ({ url: `${siteUrl}/packages/${trip.slug}`, lastModified, changeFrequency: "weekly", priority: 0.9 })),
    ...blogPosts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified, changeFrequency: "monthly", priority: 0.75 })),
  ];
}
