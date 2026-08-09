import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { seo } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.fullName} — Portfolio`,
    short_name: site.name,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#eef3f5",
    theme_color: "#0f8f86",
    lang: "id",
  };
}
