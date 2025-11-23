// app/layout.tsx
import "./globals.css";
import Script from 'next/script';

// Root metadata - applies to entire site
export const metadata = {
  metadataBase: new URL('https://blog.thebond.company'),
  title: {
    default: 'Blog Home | The Bond Company',
    template: '%s | Blog Home', // Page titles will be "Post Title | The Bond Company"
  },
  description: 'Explore mindfulness, emotional wellbeing, personal growth, and intentional living through thoughtful essays and practical guides.',
  keywords: ['mindfulness', 'personal growth', 'meditation', 'wellness', 'self-care'],
  authors: [{ name: 'The Bond Team', url: 'https://blog.thebond.company' }],
  creator: 'The Bond Company',
  publisher: 'The Bond Company',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'blog.thebond.company',
    siteName: 'The Bond Company',
    title: 'The Bond Company | Mindfulness & Personal Growth',
    description: 'Explore mindfulness, personal growth, and intentional living.',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px
        width: 1200,
        height: 630,
        alt: 'The Bond Company',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'The Bond Company | Mindfulness & Personal Growth',
    description: 'Explore mindfulness, personal growth, and intentional living.',
    creator: '@yourtwitterhandle',
    images: ['/og-image.jpg'],
  },
  
  // Verification for Google Search Console
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
  
  // Alternate languages (if applicable)
  alternates: {
    canonical: 'https://blog.thebond.company',
    languages: {
      'en-US': 'https://blog.thebond.company',
    },
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5KPC8LQM78"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5KPC8LQM78', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}

