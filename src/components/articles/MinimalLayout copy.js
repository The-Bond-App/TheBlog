'use client'
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link2, Instagram, MessageCircle } from 'lucide-react';

const samplePost = {
  id: 1,
  title: "The Art of Letting Go",
  description: "Sometimes the hardest thing and the right thing are the same. Learning to release what no longer serves us.",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  category: 'healing',
  readTime: '8 min',
  date: 'Nov 5, 2025',
  instagramPostUrl: 'https://www.instagram.com/p/DOpSbxVjmE6/?igsh=MWg3YXI4OGZmeWk2bA==', // Replace with your actual IG post URL
  content: `Learning to let go is one of life's most paradoxical challenges. We hold onto things—relationships, beliefs, possessions, grudges—because they once served us. They gave us comfort, identity, or purpose. But as we evolve, not everything can come with us on the journey.

The act of letting go isn't about giving up or admitting defeat. It's about making space. Space for new experiences, new relationships, new versions of ourselves. When we cling too tightly to the past, we close our hands to the future.

I've learned that letting go often hurts before it heals. There's grief in the release, even when we know it's right. We mourn what was, what could have been, the story we told ourselves. And that's okay. That grief is proof we were brave enough to care deeply.

But on the other side of that release is lightness. Freedom. The ability to move through the world unburdened by weights we were never meant to carry forever. Letting go is an act of trust—trust in ourselves, trust in the universe, trust that better things are waiting.

Start small. Let go of one thing today. A belief that no longer serves you. A grudge you've been carrying. A habit that dims your light. Notice how it feels to open your hand and watch it drift away.

Sometimes the hardest thing and the right thing are the same. And when we're brave enough to let go, we discover that we were never losing anything—we were making room for everything we're meant to become.`,
};

const nextPost = {
  id: 7,
  title: "Embracing Imperfection",
  description: "The beauty of being human lies in our flaws, not despite them.",
  image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
  category: 'healing',
  readTime: '6 min',
  date: 'Oct 30, 2025',
};

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

export default function SinglePostView() {
  const [copied, setCopied] = useState(false);
  const [embedLoaded, setEmbedLoaded] = useState(false);

  // Load Instagram embed script
  useEffect(() => {
    if (samplePost.instagramPostUrl && !embedLoaded) {
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
  }, [embedLoaded]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = samplePost.title;
    
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
    console.log('Navigate back to stories');
  };

  const handleNextPost = () => {
    console.log('Navigate to next post:', nextPost.title);
  };

  const handleExploreMore = () => {
    console.log('Navigate to all stories');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header with Back Button */}
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
          src={samplePost.image} 
          alt={samplePost.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
            {samplePost.category}
          </span>
          <span>·</span>
          <span>{samplePost.date}</span>
          <span>·</span>
          <span>{samplePost.readTime} read</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 leading-tight">
          {samplePost.title}
        </h1>

        {/* Description */}
        <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
          {samplePost.description}
        </p>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {samplePost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Share this story</h3>
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
        <div className="mt-16 p-8 bg-gray-50 rounded-3xl">
          <div className="flex gap-6 items-start">
            <img 
              src={author.image} 
              alt={author.name}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {author.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {author.bio}
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Conversation Section */}
        {samplePost.instagramPostUrl && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Join the conversation
                </h3>
              </div>
              <p className="text-gray-600">
                Share your thoughts and connect with our community on Instagram
              </p>
            </div>

            {/* Compact Instagram Embed */}
            <div className="bg-gray-50 rounded-2xl p-6 overflow-hidden">
              <style>{`
                .instagram-media {
                  max-width: 50% !important;
                  min-width: 10% !important;
                  margin: 0 auto !important;
                }
                .instagram-media iframe {
                  max-height: 200px !important;
                }
              `}</style>
              
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink={samplePost.instagramPostUrl}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
                  margin: '0 auto',
                  maxWidth: '540px',
                  padding: 0,
                  width: '100%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href={samplePost.instagramPostUrl}
                    style={{
                      background: '#FFFFFF',
                      lineHeight: 0,
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%',
                      display: 'block'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div style={{ padding: '40px 0', textAlign: 'center' }}>
                      <Instagram className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <div style={{ color: '#3897f0', fontSize: '14px', fontWeight: '600' }}>
                        View comments on Ins2tagram
                      </div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        )}
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