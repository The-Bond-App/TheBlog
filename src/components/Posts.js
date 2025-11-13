import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import DynamicShenanigans from '../ui/DynamicShenanigans';
import NewsletterBanner from '../ui/NewsletterBanner'

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





export default function PostsLayout() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(9);

  const filteredPosts = selectedCategory === 'all' 
    ? mockPosts 
    : mockPosts.filter(p => p.category === selectedCategory);
  
  const visiblePosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  return (
    <div className="bg-gradient-to-br from-white to-stone-100/70 min-h-screen">
      {/* Minimal Header */}
  

      {/* Hero Feature - Full Width with Card */}
      {visiblePosts[0] && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden h-full min-h-[400px] lg:min-h-[600px]">
                    <img
                      src={visiblePosts[0].image}
                      alt={visiblePosts[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 p-12 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    {visiblePosts[0].category}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                    {visiblePosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {visiblePosts[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                    <span>{visiblePosts[0].date}</span>
                    <span>·</span>
                    <span>{visiblePosts[0].readTime}</span>
                  </div>
                  <div>
                    <button className="text-blue-600 font-semibold group inline-flex items-center gap-2 hover:gap-3 transition-all">
                      Read story
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}

      {/* Two Column Section - Cards */}
      {visiblePosts.length > 1 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {visiblePosts.slice(1, 3).map((post) => (
                <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mt-3 mb-4 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

     

      
      {/* Load More */}
      <div className="text-center py-6">
        {hasMore && (
          <button
            onClick={() => setDisplayCount(prev => prev + 6)}
            className="px-8 py-3 bg-gray-900 hover:cursor-pointer text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
          >
            Load more stories
          </button>
        )}

        <p className="text-sm text-gray-500 mt-4 mb-12">
          Showing {visiblePosts.length} of {filteredPosts.length} 
        </p> 
      </div>

      {/* Newsletter Banner */}
      <NewsletterBanner />
     
    </div>
  );
}