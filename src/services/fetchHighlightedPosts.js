// src/data/highlightedPosts.js
export const HIGHLIGHTED_SLUGS = [
  'the-art-of-letting-go',
  'finding-your-voice',
  'the-power-of-pause'
];

// Check if a slug is a highlighted post
export const isHighlightedPost = (slug) => {
  return HIGHLIGHTED_SLUGS.includes(slug);
};

// Metadata for highlighted posts (for SEO)
export const highlightedPostsMetadata = {
  'the-art-of-letting-go': {
    title: "The Art of Letting Go",
    slug: 'the-art-of-letting-go',
    description: "Sometimes the hardest thing and the right thing are the same. Learning to release what no longer serves us.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    category: 'healing',
    readTime: '8 min',
    date: 'Nov 5, 2025',
  },
  'finding-your-voice': {
    title: "Finding Your Voice",
    slug: 'finding-your-voice',
    description: "The journey to authentic self-expression and the courage it takes to speak your truth.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
    category: 'growth',
    readTime: '7 min',
    date: 'Nov 2, 2025',
  },
  'the-power-of-pause': {
    title: "The Power of Pause",
    slug:   'the-power-of-pause',
    description: "In a world that glorifies hustle, rest becomes a revolutionary act.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200",
    category: 'mindfulness',
    readTime: '6 min',
    date: 'Oct 28, 2025',
  },
  'the-power-of-pause': {
    title: "The Power of Pause",
    slug:   'the-power-of-pause',
    description: "In a world that glorifies hustle, rest becomes a revolutionary act.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200",
    category: 'mindfulness',
    readTime: '6 min',
    date: 'Oct 28, 2025',
  }
};

export const getHighlightedPostMetadata = (slug) => {
  return highlightedPostsMetadata[slug] || null;
};

// Get featured posts for carousel (Hero component)
export const getFeaturedPosts = () => {
  return HIGHLIGHTED_SLUGS.map(slug => highlightedPostsMetadata[slug]);
};