'use client'
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const categories = [
  { id: 'feelings', icon: '😵‍💫', name: 'Feelings I Didn\'t Ask For', description: 'Emotional surprises, internal chaos' },
  { id: 'identitycrisis', icon: '🫠', name: 'Identity in Crisis', description: 'Life purpose, identity loss' },
  { id: 'science', icon: '🧠', name: 'The Science of Feeling', description: 'Psychology & neuroscience' },
  { id: 'questionsthatstick', icon: '🌀', name: 'Questions That Stick', description: 'Question, idea, or provocation' },
  { id: 'habits', icon: '🌱', name: 'Habits in Action', description: 'Practical rituals, grounding actions' },
  { id: 'whenitshard', icon: '😤', name: 'When It\'s Hard', description: 'Deeper support, bridge between blog and nudge' },
  { id: 'lifeunfiltered', icon: '🌅', name: 'Life, Unfiltered', description: 'Late epiphanies, emotional clarity' },
  { id: 'virtualyou', icon: '🧑‍💻', name: 'Performing Online', description: 'Digital overwhelm, online identity' },
  { id: 'notyoueveryone', icon: '🌍', name: 'We\'re All Struggling', description: 'Human connection, relational chaos' },
  { id: 'boundaries', icon: '✋', name: 'Boundaries & Burnout', description: 'Emotional labor, people-pleasing' }
];

const externalLinks = [
  { name: 'Our Main Site', url: 'https://thebond.company', description: 'Discover who we are' },
  { name: 'Our Mission', url: 'https://thebond.company/mission', description: 'Why we exist' },
  { name: 'Shop', url: 'https://shop.thebond.company', description: 'Tools for your journey' },
  { name: 'Instagram', url: 'https://instagram.com/thebond.company', description: 'Daily nudges' },
  { name: 'Tiktok', url: 'https://tiktok.com/@thebondcompany', description: 'Cool Videos' }
];

export default function SitemapPage() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="min-h-screen bg-slate-700 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/25 via-orange-500/30 to-rose-500/28" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-amber-400/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <a href="/" className="inline-flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors group">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm tracking-wide">Back to Blog</span>
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
            <h1 className="text-6xl md:text-7xl font-extralight mb-6 tracking-tight text-amber-50">
              Everything,
              <br />
              <span className="text-amber-300">Organized</span>
            </h1>
            <p className="text-xl text-amber-200/80 font-light max-w-2xl mx-auto leading-relaxed">
              We write about the messy, beautiful, complicated experience of being human. Here's how we organize the chaos.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-light mb-10 text-amber-100 tracking-tight">Our Categories</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <a
                  key={category.id}
                  href={`/?category=${category.id}`}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 border border-amber-200/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/0 via-orange-100/0 to-rose-100/0 group-hover:from-amber-100/50 group-hover:via-orange-100/30 group-hover:to-rose-100/50 transition-all duration-500" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light mb-2 text-slate-900 group-hover:text-amber-900 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 font-light leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <ArrowRight 
                      className={`w-6 h-6 text-amber-600 transition-all duration-300 ${
                        hoveredCategory === category.id ? 'translate-x-1 opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '600ms' }}>
            <h2 className="text-3xl font-light mb-10 text-amber-100 tracking-tight">Beyond the Blog</h2>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 border border-amber-200/50">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl hover:bg-amber-50 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-amber-600 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 group-hover:text-amber-900 transition-colors mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm text-slate-600 font-light">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-20 animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '800ms' }}>
            <p className="text-amber-200/80 text-lg mb-6 font-light">
              Ready to dive in?
            </p>
            <a 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 rounded-full font-medium hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              Explore All Posts
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-amber-400/20 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <p className="text-amber-200/60 text-sm font-light">
              © 2024 The Bond Company. Made with care for humans navigating life.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}