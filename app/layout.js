// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: {
    default: "The Bond Blog | Sticky Notes for Your Soul’s Refrigerator",
    template: "%s | The Bond Blog",
  },
  description:
    "The Bond Blog is a cozy corner of the internet for your late-night thoughts and Tuesday blues. Sticky Notes for your soul’s refrigerator — honest words for when you're spiraling at 2am or just existing. We don't judge, we just get it.",

  alternates: {
    canonical: "https://blog.thebond.company",
  },
  metadataBase: new URL("https://blog.thebond.company"),

  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

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

  twitter: {
    card: "summary_large_image",
    site: "@thebondco",
    creator: "@thebondco",
    title: "The Bond Blog | Sticky Notes for Your Soul's Refrigerator",
    description:
      "Gentle reminders and honest words for your late-night thoughts. The Bond Blog — we get it.",
    images: ["/assets/logo.png"],
  },

  authors: [{ name: "The Bond Blog Team", url: "https://blog.thebond.company" }],
  creator: "The Bond Blog",
  publisher: "The Bond Blog",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
