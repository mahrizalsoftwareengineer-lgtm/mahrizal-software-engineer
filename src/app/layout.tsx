import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { absoluteUrl, seo, siteUrl } from "@/lib/seo";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f8f86",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s · ${site.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.fullName, url: absoluteUrl("/") }],
  creator: site.fullName,
  publisher: site.fullName,
  category: "technology",
  applicationName: `${site.name} Portfolio`,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  verification: {
    google: "YtfTaL3T3qWWmwj4xdA3jmT9YefQYCuPobOQbU8mt7g",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: absoluteUrl("/"),
    siteName: `${site.fullName} Portfolio`,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: "@mahrizal",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
