import { useState } from 'react';
import { ChevronRight, ChevronLeft, Clock, ArrowRight, Mail, Sparkles } from 'lucide-react';

import SubscribeBanner from '../ui/SubscribeBanner'

const mockPosts = [
  {
    id: 1,
    title: "The Art of Letting Go",
    description: "Sometimes the hardest thing and the right thing are the same. Learning to release what no longer serves us.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: 'healing',
    readTime: '8 min',
    date: 'Nov 5, 2025',
  },
  {
    id: 2,
    title: "Finding Your Voice",
    description: "Your story matters. Here's how to start telling it with confidence and authenticity.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
    category: 'growth',
    readTime: '6 min',
    date: 'Nov 4, 2025',
  },
  {
    id: 3,
    title: "The Power of Pause",
    description: "In a world that glorifies hustle, rest becomes a radical act of self-care.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800",
    category: 'mindfulness',
    readTime: '5 min',
    date: 'Nov 3, 2025',
  },
  {
    id: 4,
    title: "Building Deeper Connections",
    description: "Moving beyond small talk to create relationships that truly nourish the soul.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800",
    category: 'connection',
    readTime: '7 min',
    date: 'Nov 2, 2025',
  },
  {
    id: 5,
    title: "Creative Courage",
    description: "What happens when you give yourself permission to create without judgment.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    category: 'creativity',
    readTime: '9 min',
    date: 'Nov 1, 2025',
  },
  {
    id: 6,
    title: "The Long Road Home",
    description: "Sometimes the journey to yourself takes a lifetime. And that's okay.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    category: 'journey',
    readTime: '10 min',
    date: 'Oct 31, 2025',
  },
  {
    id: 7,
    title: "Embracing Imperfection",
    description: "The beauty of being human lies in our flaws, not despite them.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
    category: 'healing',
    readTime: '6 min',
    date: 'Oct 30, 2025',
  },
  {
    id: 8,
    title: "The Courage to Begin Again",
    description: "Every ending is an invitation to start fresh with wisdom earned.",
    image: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800",
    category: 'growth',
    readTime: '7 min',
    date: 'Oct 29, 2025',
  },
  {
    id: 9,
    title: "Stillness in Motion",
    description: "Finding peace doesn't mean stopping—it means moving with intention.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    category: 'mindfulness',
    readTime: '5 min',
    date: 'Oct 28, 2025',
  },
  {
    id: 10,
    title: "The Language of Listening",
    description: "True connection begins when we hear what isn't being said.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800",
    category: 'connection',
    readTime: '8 min',
    date: 'Oct 27, 2025',
  },
  {
    id: 11,
    title: "Breaking Through Creative Blocks",
    description: "What to do when inspiration feels a million miles away.",
    image: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=800",
    category: 'creativity',
    readTime: '9 min',
    date: 'Oct 26, 2025',
  },
  {
    id: 12,
    title: "Mountains and Valleys",
    description: "Life's rhythm includes both peaks and low points—both are essential.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: 'journey',
    readTime: '10 min',
    date: 'Oct 25, 2025',
  },
];

const categories = [
  { id: 'all', name: 'All Stories', count: 12 },
  { id: 'healing', name: 'Healing', count: 2 },
  { id: 'growth', name: 'Growth', count: 2 },
  { id: 'mindfulness', name: 'Mindfulness', count: 2 },
  { id: 'connection', name: 'Connection', count: 2 },
  { id: 'creativity', name: 'Creativity', count: 2 },
  { id: 'journey', name: 'Journey', count: 2 },
];

// Newsletter Banner Component
function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
      <div className="px-8 py-12 md:px-12 md:py-16 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stories Worth Your Time
        </h3>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of readers. Get thoughtful stories delivered to your inbox every week.
        </p>
        
        {subscribed ? (
          <div className="flex items-center justify-center gap-2 text-white text-lg">
            <Sparkles className="w-5 h-5" />
            <span>Welcome aboard! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}



// Main Component with Tabs
export default function BlogLayoutOptions() {
const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(9);

  const filteredPosts = selectedCategory === 'all' 
    ? mockPosts 
    : mockPosts.filter(p => p.category === selectedCategory);
  
  const visiblePosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Full Width Feature */}
          {visiblePosts[0] && (
            <div className="bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 overflow-hidden order-2 lg:order-1">
                  <img
                    src={visiblePosts[0].image}
                    alt={visiblePosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center order-1 lg:order-2">
                  <span className="px-3 py-1 bg-stone-100 text-sm font-medium text-gray-800 rounded-full inline-block mb-4 w-fit capitalize">
                    {visiblePosts[0].category}
                  </span>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {visiblePosts[0].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {visiblePosts[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <Clock className="w-4 h-4" />
                    <span>{visiblePosts[0].readTime}</span>
                    <span>·</span>
                    <span>{visiblePosts[0].date}</span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Continue reading
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Two Column */}
          {visiblePosts.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {visiblePosts.slice(1, 3).map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 rounded-full capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter Banner - After first 3 posts */}
          {visiblePosts.length >= 3 && displayCount === 9 && (
            <div className="my-4">
              <SubscribeBanner />
            </div>
          )}

          {/* Three Column */}
          {visiblePosts.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.slice(3, 9).map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-gray-500 capitalize">{post.category}</span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-16">
              <button
                onClick={() => setDisplayCount(prev => prev + 6)}
                className="px-12 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
              >
                Load More Stories
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Showing {visiblePosts.length} of {filteredPosts.length} stories
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}