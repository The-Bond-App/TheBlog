'use client';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link as LinkIcon, Mail } from 'lucide-react';
import { useState } from 'react';

const categoryMap = {
  feelings: { name: 'Feelings I Didn\'t Ask For', icon: '😵‍💫' },
  identitycrisis: { name: 'Identity in Crisis', icon: '🫠' },
  science: { name: 'The Science of Feeling', icon: '🧠' },
  questionsthatstick: { name: 'Questions That Stick', icon: '🌀' },
  habits: { name: 'Habits in Action', icon: '🌱' },
  whenitshard: { name: 'When It\'s Hard', icon: '😤' },
  lifeunfiltered: { name: 'Life, Unfiltered', icon: '🌅' },
  virtualyou: { name: 'Performing Online', icon: '🧑‍💻' },
  notyoueveryone: { name: 'We\'re All Struggling', icon: '🌍' },
  boundaries: { name: 'Boundaries & Burnout', icon: '✋' }
};

function ShareButtons({ post }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = post.title;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-600 font-light">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-amber-100 rounded-full transition-colors"
      >
        <Twitter className="w-5 h-5 text-slate-600" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-amber-100 rounded-full transition-colors"
      >
        <Facebook className="w-5 h-5 text-slate-600" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-amber-100 rounded-full transition-colors"
      >
        <Linkedin className="w-5 h-5 text-slate-600" />
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`}
        className="p-2 hover:bg-amber-100 rounded-full transition-colors"
      >
        <Mail className="w-5 h-5 text-slate-600" />
      </a>
      <button
        onClick={handleCopyLink}
        className="p-2 hover:bg-amber-100 rounded-full transition-colors relative"
      >
        <LinkIcon className="w-5 h-5 text-slate-600" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}

export default function MinimalLayout({ post }) {
  const category = categoryMap[post.category] || { name: 'Uncategorized', icon: '📝' };

  return (
    <div className="min-h-screen bg-slate-700">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/25 via-orange-500/30 to-rose-500/28" />
      </div>

      <div className="relative z-10">
        {/* Minimal Header */}
        <header className="border-b border-amber-400/20 backdrop-blur-sm sticky top-0 bg-slate-700/80">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm tracking-wide">Blog</span>
            </a>
            <span className="text-amber-200/60 text-sm">{post.readTime}</span>
          </div>
        </header>

        {/* Hero Image - Full Width */}
        <div className="w-full h-[60vh] relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-slate-700/50 to-transparent" />
        </div>

        {/* Content - Ultra Minimal */}
        <article className="max-w-2xl mx-auto px-6 -mt-32 relative">
          {/* Category Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-slate-900 shadow-lg">
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extralight leading-[1.1] mb-8 text-white tracking-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-16 text-amber-200/80 text-sm">
            <time>{post.date}</time>
            <span className="w-1 h-1 rounded-full bg-amber-400/60" />
            <span>{post.readTime}</span>
          </div>

          {/* Content Box */}
          <div className="bg-white/98 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl mb-16">
            {/* Article Content -極簡 Typography */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-light prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                prose-p:text-slate-700 prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-lg
                prose-a:text-amber-700 prose-a:no-underline hover:prose-a:text-amber-900
                prose-strong:text-slate-900 prose-strong:font-medium
                prose-blockquote:border-l-4 prose-blockquote:border-amber-400 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
                prose-ul:my-8 prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Buttons */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <ShareButtons post={post} />
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-12 border-t border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-2">The Bond Company</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We create tools and content for humans navigating the messy, beautiful experience of being alive. 
                    From daily nudges to deeper dives, we're here to help you feel less alone in it all.
                  </p>
                  <a 
                    href="https://thebond.company" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:text-amber-900 text-sm font-medium"
                  >
                    Learn more about us →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-amber-400/20 mt-20">
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <a href="/" className="text-amber-200 hover:text-amber-100 transition-colors text-sm">
              ← Back to all posts
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}