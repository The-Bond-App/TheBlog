'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, Flame, Play, TrendingUp, Award, Heart, Star, Search, Sliders, Sparkles, ArrowRight, Calendar, Clock, BookOpen, Target, Compass, Map, Sticker, LifeBuoy, User } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';


import ArticlesGrid from '../uimanus/ArticlesGrid'

import ErrorBoundary from '../uimanus/ErrorBoundary'
import Footer from '../uimanus/Footer'
import Hero from '../uimanus/Hero'

import MoreHeroOptions from '../uimanus/MoreHeroOptions'
import HeroShowcase from '../uimanus/HeroShowcase'
import LearningPaths from '../uimanus/LearningPaths'

import Newsletter from '../uimanus/Newsletter'
import Rituals from '../uimanus/Rituals'
import Navigation from '../uimanus/Navigation';

const featuredPosts = [
  {
    title: "The Refrigerator Theory of Self-Care",
    description: "Why your emotional well-being works exactly like keeping groceries fresh",
    category: "Mental Models",
    readTime: "8 min",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
  },
  {
    title: "Pressure Cooker Feelings",
    description: "Understanding emotional release through kitchen physics",
    category: "Emotion",
    readTime: "6 min",
    author: "Marcus Webb",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    title: "The Battery Metaphor",
    description: "Why you can't pour from an empty cup",
    category: "Energy",
    readTime: "5 min",
    author: "Emma Taylor",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
  },
  {
    title: "Anxiety as Static",
    description: "When your nervous system can't find the signal",
    category: "Processing",
    readTime: "4 min",
    author: "James Cole",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
  },
  {
    title: "Boundaries as Fences",
    description: "Good neighbors make good emotional health",
    category: "Protection",
    readTime: "6 min",
    author: "Lisa Park",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
  }
];
const posts = [
    {
      title: "The Emotional Basement",
      description: "Why unprocessed feelings pile up like forgotten storage boxes",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
      category: "Understanding",
      readTime: "5 min"
    },
    {
      title: "Anxiety as Static",
      description: "When your nervous system can't find the signal",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      category: "Processing",
      readTime: "4 min"
    },
    {
      title: "Boundaries as Fences",
      description: "Good neighbors make good emotional health",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
      category: "Protection",
      readTime: "6 min"
    },
    {
      title: "Grief as Weather",
      description: "Some days it rains, some days it doesn't",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=80",
      category: "Healing",
      readTime: "7 min"
    },
    {
      title: "Self-Talk as Radio",
      description: "Tuning into better frequencies",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      category: "Practice",
      readTime: "5 min"
    }
  ];





export default function EmotionalWellbeingBlog() {
  const [selectedCover, setSelectedCover] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [hoveredEmotion, setHoveredEmotion] = useState(null);
  

 

  // Rituals
  const rituals = {
    joy: {
      title: 'Share Your Joy',
      description: 'Amplify your happiness by sharing it with someone you care about',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=1000&fit=crop',
      ritual: 'Call a friend, write in your gratitude journal, or dance to your favorite song'
    },
    sad: {
      title: 'Gentle Comfort',
      description: 'Honor your sadness with compassion and gentle care',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=1000&fit=crop',
      ritual: 'Make yourself tea, wrap in a cozy blanket, and let yourself feel without judgment'
    },
    angry: {
      title: 'Release & Transform',
      description: 'Channel your anger into productive movement and expression',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop',
      ritual: 'Go for a run, punch a pillow, or write an unsent letter expressing everything you feel'
    },
    anxious: {
      title: 'Ground & Breathe',
      description: 'Return to your body and the present moment',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop',
      ritual: 'Practice 4-7-8 breathing, name 5 things you can see, or do a gentle body scan'
    },
    calm: {
      title: 'Savor the Peace',
      description: 'Deepen your sense of tranquility and presence',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=1000&fit=crop',
      ritual: 'Meditate for 10 minutes, take a mindful walk, or sit in nature without distractions'
    },
    lonely: {
      title: 'Connect & Reach Out',
      description: 'Bridge the distance between yourself and others',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop',
      ritual: 'Send a heartfelt message, join a community group, or visit a favorite public space'
    },
    frustrated: {
      title: 'Reset & Reframe',
      description: 'Step back and find a fresh perspective',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop',
      ritual: 'Take a break, work on a different task, or talk it out with someone you trust'
    },
    loved: {
      title: 'Receive & Give Back',
      description: 'Celebrate the love in your life',
      image: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=800&h=1000&fit=crop',
      ritual: 'Write a thank you note, plan something special for someone, or simply bask in the feeling'
    }
  };

  // Featured carousel
  const featuredCarousel = [
    {
      title: "The Mirror Effect",
      description: "Why we're drawn to people who reflect parts of ourselves",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      category: "Relationships",
      emotion: "😔 For when you're lonely",
      difficulty: "Beginner concepts",
      type: "Framework",
      readTime: "5 min"
    },
    {
      title: "Window of Tolerance",
      description: "Understanding your nervous system's sweet spot",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop",
      category: "Self-Awareness",
      emotion: "😰 For when you're anxious",
      difficulty: "Advanced psychology",
      type: "Framework",
      readTime: "7 min"
    },
    {
      title: "The Comfort Zone Paradox",
      description: "Why staying comfortable keeps you uncomfortable",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      category: "Growth",
      emotion: "😤 For when you're frustrated",
      difficulty: "Beginner concepts",
      type: "Story",
      readTime: "4 min"
    }
  ];

  // LEARNING PATHS - THE CORNERSTONE CONTENT
  const learningPaths = [
    {
      title: "Relationships 101",
      subtitle: "From anxious attachment to secure connection",
      articles: 12,
      duration: "~2 hours",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop",
      icon: "💑",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Anxiety Toolkit",
      subtitle: "Understand your nervous system and calm the storm",
      articles: 8,
      duration: "~1.5 hours",
      level: "Beginner friendly",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop",
      icon: "😰",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Self-Awareness Deep Dive",
      subtitle: "Know yourself, change your patterns",
      articles: 15,
      duration: "~3 hours",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=600&h=800&fit=crop",
      icon: "🧠",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Growth Mindset Journey",
      subtitle: "From stuck to unstoppable",
      articles: 10,
      duration: "~2 hours",
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop",
      icon: "🌱",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

 
  // FRESHLY PUBLISHED - Latest content
  const freshlyPublished = [
    {
      title: "The Rubber Band Theory",
      excerpt: "Why suppressing feelings backfires",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
      date: "Nov 3, 2025",
      readTime: "4 min",
      emotion: "😠 Angry",
      type: "Story",
      difficulty: "Beginner"
    },
    {
      title: "The Container Exercise",
      excerpt: "Managing overwhelming thoughts",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
      date: "Oct 30, 2025",
      readTime: "3 min",
      emotion: "😰 Anxious",
      type: "Exercise",
      difficulty: "Beginner"
    },
    {
      title: "Boundaries as Acts of Love",
      excerpt: "Why limits strengthen relationships",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=800&fit=crop",
      date: "Oct 28, 2025",
      readTime: "5 min",
      emotion: "😤 Frustrated",
      type: "Framework",
      difficulty: "Beginner"
    }
  ];



  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedCover((prev) => (prev + 1) % featuredCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentRitual = selectedEmotion ? rituals[selectedEmotion] : null;

  return (
     <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
       
        <ArticlesGrid />
        <Rituals />
        <LearningPaths />
        
      </main>
      
    </div>
  );
}