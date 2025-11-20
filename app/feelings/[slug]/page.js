// app/feelings/[slug]/page.js
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// All emotions
const emotions = [
  { emoji: '😰', label: 'Anxious', slug: 'anxious' },
  { emoji: '😔', label: 'Overwhelmed', slug: 'overwhelmed' },
  { emoji: '🤔', label: 'Lost', slug: 'lost' },
  { emoji: '😞', label: 'Lonely', slug: 'lonely' },
  { emoji: '😤', label: 'Stressed', slug: 'stressed' },
  { emoji: '🙏', label: 'Grateful', slug: 'grateful' },
  { emoji: '😢', label: 'Sad', slug: 'sad' },
  { emoji: '😊', label: 'Joyful', slug: 'joy' },
  { emoji: '😡', label: 'Angry', slug: 'angry' },
  { emoji: '😨', label: 'Fearful', slug: 'fearful' },
  { emoji: '😌', label: 'Calm', slug: 'calm' },
  { emoji: '😕', label: 'Confused', slug: 'confused' },
  { emoji: '😩', label: 'Frustrated', slug: 'frustrated' },
  { emoji: '🥺', label: 'Vulnerable', slug: 'vulnerable' },
  { emoji: '😴', label: 'Exhausted', slug: 'exhausted' },
  { emoji: '😬', label: 'Uncomfortable', slug: 'uncomfortable' },
  { emoji: '🤗', label: 'Hopeful', slug: 'hopeful' },
  { emoji: '😐', label: 'Numb', slug: 'numb' },
  { emoji: '🥰', label: 'Content', slug: 'content' },
  { emoji: '😓', label: 'Guilty', slug: 'guilty' },
  { emoji: '😳', label: 'Embarrassed', slug: 'embarrassed' },
  { emoji: '🤯', label: 'Burnout', slug: 'burnout' },
  { emoji: '😌', label: 'Peaceful', slug: 'peaceful' },
  { emoji: '🥹', label: 'Moved', slug: 'moved' }
];

// Mock posts data
const mockPosts = {
  anxious: [
    {
      id: 1,
      title: "The 5-4-3-2-1 Grounding Technique",
      excerpt: "A simple sensory exercise to anchor yourself in the present moment when anxiety strikes",
      date: "Nov 15, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Box Breathing for Instant Calm",
      excerpt: "Navy SEALs use this technique. Four counts in, hold, out, hold. Repeat.",
      date: "Nov 10, 2025",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "The Worry Time Ritual",
      excerpt: "Schedule 15 minutes daily to worry. Your brain will thank you.",
      date: "Nov 5, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Name It to Tame It",
      excerpt: "Labeling your anxiety reduces its power by 40%. Here's how.",
      date: "Oct 28, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop"
    }
  ],
  overwhelmed: [
    {
      id: 1,
      title: "The Brain Dump Method",
      excerpt: "Get everything out of your head and onto paper. Then sort.",
      date: "Nov 12, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "One Thing at a Time",
      excerpt: "Monotasking is the antidote to overwhelm. Here's your guide.",
      date: "Nov 7, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "The 2-Minute Rule",
      excerpt: "If it takes less than 2 minutes, do it now. Everything else waits.",
      date: "Oct 30, 2025",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
    }
  ]
};

// Default posts for emotions without specific content
const defaultPosts = [
  {
    id: 1,
    title: "Understanding This Feeling",
    excerpt: "A gentle guide to recognizing and working with this emotion",
    date: "Nov 14, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Rituals That Help",
    excerpt: "Practical tools and techniques for navigating this state",
    date: "Nov 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop"
  }
];

// Generate static params for all emotion pages
export async function generateStaticParams() {
  return emotions.map((emotion) => ({
    slug: emotion.slug,
  }));
}

// Generate metadata for each page — unwrap params before using
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const emotion = emotions.find((e) => e.slug === slug);

  if (!emotion) {
    return {
      title: 'Feeling Not Found',
    };
  }

  return {
    title: `Feeling ${emotion.label} | Bond`,
    description: `Rituals and practices to help you when you're feeling ${emotion.label.toLowerCase()}`,
  };
}

export default async function FeelingPage({ params }) {
  const { slug } = await params;
  const emotion = emotions.find((e) => e.slug === slug);

  if (!emotion) {
    notFound();
  }

  const posts = mockPosts[slug] || defaultPosts;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header with back button */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors group mb-4"
          >
            <ChevronRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to home</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-6xl">{emotion.emoji}</span>
            <div>
              <h1 className="text-4xl font-light text-stone-900 mb-1">
                Feeling {emotion.label}
              </h1>
              <p className="text-stone-600">
                {posts.length} ritual{posts.length !== 1 ? 's' : ''} to shift your state
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline of posts */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-6">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/post/${post.id}`}
              className="group block relative"
            >
              {/* Timeline line (except for last item) */}
              {index !== posts.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-stone-200" />
              )}

              {/* Post card */}
              <div className="relative flex gap-6 bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-xl hover:border-stone-300 transition-all duration-300">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-stone-100 border-2 border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all">
                    <div className="w-2 h-2 rounded-full bg-stone-400 group-hover:bg-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-6">
                    {/* Image */}
                    <div className="flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden bg-stone-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3 text-xs text-stone-500">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-stone-400" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-stone-900 mb-3 group-hover:text-stone-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-stone-600 leading-relaxed text-base">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
