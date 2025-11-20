'use client';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { getFeaturedPosts } from '../services/fetchHighlightedPosts'



export default function Hero() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const router = useRouter()

  const featuredCarousel = getFeaturedPosts();
  console.log(featuredCarousel)

   useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredCarousel.length);
    }, 5000); // Changed to 5 seconds for better UX
    return () => clearInterval(timer);
  }, [featuredCarousel.length]);

  const handleReadStory = (slug) => {
    // For Next.js App Router:
    router.push(`/highlights/${slug}`);
  };

 const [selectedCover, setSelectedCover] = useState(0);
  return(
  <section className='px-12 py-28 max-w-[1300px] mx-auto'>
    <div className="grid md:grid-cols-2 gap-12 items-end">
      <div className="space-y-4 max-w-2xl">
        
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-light  gradient-text  pb-1 tracking-tight leading-[1.05]">
          Sticky notes for your soul's fridge
        </h1>

        <p className="text-lg md:text-xl text-stone-500 leading-snug max-w-xl" >
          To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones. Emotional fundamentals nobody taught us, explained through analogies.
        </p>
        
      </div>

      <div className="relative h-[350px]">
    {featuredCarousel.map((analogy, idx) => {
      const offset = (featuredCarousel.length - 1 - idx) * 20;
      const isSelected = idx === selectedCover;
      
      return (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-500 cursor-pointer ${
            isSelected ? 'z-20 scale-100' : 'z-10'
          }`}
          style={{
            transform: isSelected 
              ? 'translateY(0) rotate(0deg)' 
              : `translateY(${offset}px) rotate(${offset * 0.1}deg)`,
          }}
          onClick={() => setSelectedCover(idx)}
        >
          <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={analogy.image} 
              alt={analogy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Magazine Cover Content */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div>
                <div className="text-white/80 text-sm font-medium mb-2">THE BOND MAGAZINE</div>
                <div className="text-white/60 text-xs">ISSUE {idx + 1} • 2024</div>
              </div>
              
              <div>
                <h2 className="text-5xl font-light text-white mb-4 leading-tight">
                  {analogy.title}
                </h2>
                <p className="text-xl text-white/90">
                  {analogy.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>   
    </div>
  </section>
 )
}