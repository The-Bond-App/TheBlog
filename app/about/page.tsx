// app/about/page.tsx
import type { Metadata } from 'next';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import { Heart, Sparkles, Compass, BookOpen, Brain, Leaf } from 'lucide-react';
import Image from 'next/image';

// ============================================
// MAXIMUM SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: 'About The Bond | Emotional Wellness & Mental Health Blog for Mindfulness, Self-Care & Personal Growth',
  description: 'Discover expert articles on emotional wellness, mental health, mindfulness meditation, self-care rituals, anxiety relief, depression support, and personal growth. Evidence-based insights and practical tools for your healing journey.',
  keywords: [
    'emotional wellness blog',
    'mental health articles',
    'mindfulness meditation',
    'self-care tips',
    'anxiety relief',
    'depression support',
    'therapy insights',
    'emotional regulation',
    'mental health awareness',
    'personal growth blog',
    'mindfulness practices',
    'wellness rituals',
    'emotional healing',
    'stress management',
    'mental wellbeing'
  ],
  authors: [{ name: 'The Bond Team' }],
  creator: 'The Bond',
  publisher: 'The Bond',
  alternates: {
    canonical: 'https://blog.thebond.company/about',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.thebond.company/about',
    siteName: 'The Bond Blog',
    title: 'About The Bond | Emotional Wellness & Mental Health Blog',
    description: 'Expert articles on mindfulness, emotional wellness, mental health, and self-care. Join thousands discovering practical tools for healing and personal growth.',
    images: [
      {
        url: 'https://blog.thebond.company/og-about.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'The Bond - Emotional Wellness & Mental Health Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Bond | Emotional Wellness & Mental Health Blog',
    description: 'Expert articles on mindfulness, emotional wellness, and mental health. Practical tools for your healing journey.',
    images: ['https://blog.thebond.company/og-about.jpg'],
    creator: '@thebondco', // Add your Twitter handle
  },
  verification: {
    google: 'your-google-verification-code', // Add from Google Search Console
  },
};

// ============================================
// COMPONENT WITH SEO-OPTIMIZED HTML
// ============================================
export default function AboutPage() {
  return (
    <>
      <main className="bg-[#f2f2f7]">
        <Navigation />
        
        {/* Breadcrumbs for SEO */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 pt-8">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex gap-2 text-sm text-[#464169]">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href="https://blog.thebond.company">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">About</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <article className="max-w-5xl mx-auto py-16 px-4">
          {/* Hero Section with H1 */}
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#5a5187] mb-6">
              About The Bond: Your Trusted Source for Emotional Wellness and Mental Health
            </h1>
            <p className="text-xl md:text-2xl text-[#464169] font-lora max-w-3xl mx-auto leading-relaxed">
              Evidence-based articles on mindfulness, mental health, and self-care. 
              Join thousands discovering practical tools for emotional healing and personal growth.
            </p>
          </header>

          {/* Mission Cards with Semantic HTML */}
          <section className="grid md:grid-cols-3 gap-8 mb-20" aria-label="Our Core Focus Areas">
            <article className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-12 h-12 text-[#5a5187] mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-[#5a5187] mb-3">Emotional Wellness</h2>
              <p className="text-[#464169] leading-relaxed">
                Learn evidence-based techniques to understand, process, and regulate your emotions. 
                Build emotional resilience and self-awareness through practical exercises.
              </p>
            </article>
            
            <article className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="w-12 h-12 text-[#5a5187] mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-[#5a5187] mb-3">Mindfulness & Meditation</h2>
              <p className="text-[#464169] leading-relaxed">
                Discover meditation techniques, breathing exercises, and mindfulness practices 
                backed by research. Reduce stress and anxiety naturally.
              </p>
            </article>
            
            <article className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Compass className="w-12 h-12 text-[#5a5187] mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-[#5a5187] mb-3">Personal Growth</h2>
              <p className="text-[#464169] leading-relaxed">
                Expert guidance on building healthy habits, setting boundaries, and fostering 
                meaningful relationships for sustainable personal development.
              </p>
            </article>
          </section>

          {/* Main Content with Rich Keywords */}
          <section className="bg-white p-12 rounded-lg shadow-sm mb-12">
            <h2 className="text-4xl font-bold text-[#5a5187] mb-8">
              What You'll Discover on The Bond Blog
            </h2>
            
            <div className="space-y-8 text-lg text-[#464169] font-lora">
              <div>
                <h3 className="text-2xl font-bold text-[#5a5187] mb-3 flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  Mental Health Support & Awareness
                </h3>
                <p className="leading-relaxed">
                  Comprehensive articles on <strong>anxiety management</strong>, <strong>depression support</strong>, 
                  <strong>stress relief techniques</strong>, and <strong>trauma healing</strong>. Learn about therapy 
                  approaches including CBT, DBT, and EMDR. Access mental health resources and crisis support information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#5a5187] mb-3 flex items-center gap-3">
                  <Leaf className="w-6 h-6" />
                  Mindfulness & Meditation Practices
                </h3>
                <p className="leading-relaxed">
                  Step-by-step <strong>meditation guides for beginners</strong>, <strong>breathing exercises for anxiety</strong>, 
                  <strong>body scan meditation</strong>, and <strong>mindful movement practices</strong>. Discover how to 
                  integrate mindfulness into your daily routine for lasting peace and presence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#5a5187] mb-3 flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  Self-Care Rituals & Emotional Regulation
                </h3>
                <p className="leading-relaxed">
                  Create personalized <strong>self-care routines</strong>, learn <strong>emotional regulation techniques</strong>, 
                  practice <strong>self-compassion exercises</strong>, and build <strong>healthy coping mechanisms</strong>. 
                  Explore journaling prompts, gratitude practices, and grounding techniques.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#5a5187] mb-3 flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  Personal Development & Habit Building
                </h3>
                <p className="leading-relaxed">
                  Science-backed strategies for <strong>building positive habits</strong>, <strong>setting healthy boundaries</strong>, 
                  <strong>improving relationships</strong>, and achieving <strong>work-life balance</strong>. Learn goal-setting 
                  techniques and time management for sustainable growth.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-[#5a5187] mb-6">Popular Topics We Cover</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Anxiety Relief Techniques',
                  'Depression Support',
                  'Meditation for Beginners',
                  'Stress Management',
                  'Emotional Intelligence',
                  'Sleep Hygiene',
                  'Breathing Exercises',
                  'Journaling Prompts',
                  'Therapy Types & Benefits',
                  'Mindful Exercise',
                  'Healthy Boundaries',
                  'Self-Compassion Practice'
                ].map(topic => (
                  <div key={topic} className="flex items-start gap-2 text-[#464169]">
                    <span className="text-[#5a5187] mt-1">✓</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Signals */}
          <section className="bg-gradient-to-br from-[#5a5187] to-[#464169] text-white p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Trust The Bond?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Evidence-Based</div>
                <p className="text-white/90">All content backed by research and expert insights</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Practical</div>
                <p className="text-white/90">Actionable tools you can use today</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Compassionate</div>
                <p className="text-white/90">Written with empathy and understanding</p>
              </div>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold text-[#5a5187] mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white p-6 rounded-lg">
                <h3 itemProp="name" className="text-xl font-bold text-[#5a5187] mb-3">
                  What topics does The Bond blog cover?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-[#464169]">
                    We cover emotional wellness, mental health (anxiety, depression, stress), mindfulness meditation, 
                    self-care practices, therapy insights, personal growth, and habit formation. All content is 
                    evidence-based and actionable.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white p-6 rounded-lg">
                <h3 itemProp="name" className="text-xl font-bold text-[#5a5187] mb-3">
                  Who writes The Bond blog articles?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-[#464169]">
                    Our content is created by mental health professionals, certified meditation instructors, and 
                    wellness experts with years of experience in emotional healing and personal development.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white p-6 rounded-lg">
                <h3 itemProp="name" className="text-xl font-bold text-[#5a5187] mb-3">
                  Is The Bond blog suitable for beginners?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-[#464169]">
                    Absolutely! We provide step-by-step guides for beginners while also offering advanced techniques 
                    for those further along their wellness journey. All practices include clear instructions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footer />
      </main>

      {/* ============================================ */}
      {/* COMPREHENSIVE STRUCTURED DATA (JSON-LD) */}
      {/* ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': 'https://blog.thebond.company',
            name: 'The Bond Blog',
            description: 'Expert articles on emotional wellness, mental health, mindfulness meditation, anxiety relief, depression support, and self-care practices',
            url: 'https://blog.thebond.company',
            inLanguage: 'en-US',
            publisher: {
              '@type': 'Organization',
              name: 'The Bond',
              url: 'https://blog.thebond.company',
              logo: {
                '@type': 'ImageObject',
                url: 'https://blog.thebond.company/logo.png',
                width: 600,
                height: 60,
              },
              sameAs: [
                'https://instagram.com/thebondco', // Add your social links
                'https://twitter.com/thebondco',
              ],
            },
            about: [
              {
                '@type': 'Thing',
                name: 'Mental Health',
              },
              {
                '@type': 'Thing',
                name: 'Emotional Wellness',
              },
              {
                '@type': 'Thing',
                name: 'Mindfulness',
              },
              {
                '@type': 'Thing',
                name: 'Self-Care',
              },
            ],
            audience: {
              '@type': 'Audience',
              audienceType: 'People seeking mental health support and emotional wellness guidance',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://blog.thebond.company/about',
            url: 'https://blog.thebond.company/about',
            name: 'About The Bond | Emotional Wellness & Mental Health Blog',
            description: 'Learn about The Bond blog: expert articles on mindfulness, mental health, anxiety relief, depression support, and self-care practices',
            isPartOf: {
              '@id': 'https://blog.thebond.company',
            },
            about: {
              '@type': 'Thing',
              name: 'Mental Health and Emotional Wellness Blog',
            },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: 'https://blog.thebond.company/og-about.jpg',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'The Bond',
            url: 'https://blog.thebond.company',
            logo: 'https://blog.thebond.company/logo.png',
            description: 'Emotional wellness and mental health blog providing expert guidance on mindfulness, anxiety relief, and self-care',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              email: 'hello@thebond.company', // Add your email
            },
            sameAs: [
              'https://instagram.com/thebondco',
              'https://twitter.com/thebondco',
            ],
          }),
        }}
      />
    </>
  );
}