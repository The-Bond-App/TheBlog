// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Bond Blog | Sticky Notes for Your Soul’s Refrigerator",
    template: "%s | The Bond Blog",
  },
  description:
    "The Bond Blog is a cozy corner of the internet for your late-night thoughts and Tuesday blues. Sticky Notes for your soul’s refrigerator — honest words for when you're spiraling at 2am or just existing. We don't judge, we just get it.",

  // 🌐 Your site info
  alternates: {
    canonical: "https://blog.thebond.company",
  },
  metadataBase: new URL("https://blog.thebond.company"),

  // 🧩 Icons and branding
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/apple-touch-icon.png",
  },

  // 🧭 SEO and crawler settings - FIXED!
  robots: {
    index: true,
    follow: true,
    // Remove the googleBot object or use correct syntax:
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,        // Note the hyphen
      'max-image-preview': 'large', // Note the hyphen
      'max-video-preview': -1,  // Note the hyphen
    },
  },

  // 🖼️ Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.thebond.company",
    siteName: "The Bond Blog",
    title: "The Bond Blog | Sticky Notes for Your Soul's Refrigerator",
    description:
      "The stuff you need to hear when you're spiraling at 2am — or just existing on a Tuesday afternoon. Honest notes for your soul, from ours.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "The Bond Blog logo",
      },
    ],
  },

  // 🐦 Twitter preview
  twitter: {
    card: "summary_large_image",
    site: "@thebondco",
    creator: "@thebondco",
    title: "The Bond Blog | Sticky Notes for Your Soul's Refrigerator",
    description:
      "Gentle reminders and honest words for your late-night thoughts. The Bond Blog — we get it.",
    images: ["/assets/logo.png"],
  },

  // 💫 Optional extras
  authors: [{ name: "The Bond Blog Team", url: "https://blog.thebond.company" }],
  creator: "The Bond Blog",
  publisher: "The Bond Blog",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}