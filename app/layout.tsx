import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "The Bond Blog | Sticky Notes for Your Soul’s Refrigerator",
    template: "%s | The Bond Blog",
  },
  description:
    "The Bond Blog is a cozy corner of the internet for your late-night thoughts and Tuesday blues. Sticky Notes for your soul’s refrigerator — honest words for when you’re spiraling at 2am or just existing. We don’t judge, we just get it.",
  keywords: [
    "emotional wellbeing",
    "enjoyable mental health",
    "emotions learning",
    "feelings learning",
    "mental health blog",
    "self-care",
    "mindfulness",
    "personal growth",
    "healing",
    "emotional resilience",
    "anxiety relief",
    "self-compassion",
    "the bond blog",
    "sticky notes for your soul",
  ],

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

  // 🧭 SEO and crawler settings
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  // 🖼️ Open Graph — for social media and chat preview cards
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.thebond.company",
    siteName: "The Bond Blog",
    title: "The Bond Blog | Sticky Notes for Your Soul’s Refrigerator",
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
    title: "The Bond Blog | Sticky Notes for Your Soul’s Refrigerator",
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
