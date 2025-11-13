'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Instagram } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Author data
const author = {
  name: "Sarah Chen",
  bio: "Writer, mindfulness teacher, and believer in the power of honest storytelling.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  social: {
    twitter: "@sarahchen",
    instagram: "@sarahchen",
    linkedin: "sarahchen"
  }
};

export default function MinimalLayout({ post }) {
  const [copied, setCopied] = useState(false);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const router = useRouter();

  // Load Instagram embed script
  useEffect(() => {
    if (post?.instagramPostUrl && !embedLoaded) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      setEmbedLoaded(true);
      
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    }
  }, [post, embedLoaded]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const isMarkdown = post.isMarkdown || false;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <button 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to stories</span>
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
            {post.category}
          </span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
          {post.description}
        </p>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {isMarkdown ? (
            // Render markdown content
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside mb-6 text-gray-700" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside mb-6 text-gray-700" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          ) : post.content?.includes('<') ? (
            // Render HTML content from database
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            // Render plain text with paragraph breaks
            post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))
          )}
        </div>

        {/* Instagram CTA - Choose Your Style */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-700 p-12">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Join the conversation
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What's your perspective?
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Every viewpoint enriches the dialogue. Share yours or discover insights from others in our Instagram community.
            </p>
            
            <a
              href={post.instagramPostUrl || "https://instagram.com/sarahchen"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              <span>Continue on Instagram</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
     

        {/* Share Buttons */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Share</h3>
          <div className="flex gap-3">
            <button
              onClick={() => handleShare('twitter')}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative"
              aria-label="Copy link"
            >
              <Link2 className="w-5 h-5 text-gray-700" />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Author Box */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <div className="flex gap-6 items-start">
            <img 
              src={author.image} 
              alt={author.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {author.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {author.bio}
              </p>
              <div className="flex gap-4 text-sm">
                <a href={`https://twitter.com/${author.social.twitter}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                  Twitter
                </a>
                <a href={`https://instagram.com/${author.social.instagram}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                  Instagram
                </a>
                <a href={`https://linkedin.com/in/${author.social.linkedin}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p>© 2025 Wellbeing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}