import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.fullName} — Software Engineer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #0b1c24 0%, #12363a 50%, #0f8f86 100%)",
          color: "#f4f8f9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b7e4df",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            {site.fullName}
          </div>
          <div style={{ fontSize: 34, color: "#d7e8ea", maxWidth: 900 }}>
            Software Engineer · System Analyst · Delivery Lead · AI Developer
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9fc4c7" }}>
          {site.location} · Laravel · Next.js · Redis · System Design
        </div>
      </div>
    ),
    { ...size },
  );
}
