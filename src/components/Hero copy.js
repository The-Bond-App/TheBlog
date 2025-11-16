'use client';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { getFeaturedPosts } from '../services/fetchHighlightedPosts'



export default function Hero() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const router = useRouter()

  const featuredCarousel = getFeaturedPosts();

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

 
  return(
   <section className='bg-gradient-to-r from-stone-50/50 to-white pt-8'>
        <div className="relative overflow-hidden">
          <div className="px-12 py-22 max-w-[1300px] mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-4 max-w-2xl">
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-600 border border-stone-200 shadow-sm rounded-full">
                  <span className="text-sm font-medium">🌱 Emotional Growth • Explained Simply</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light  gradient-text  pb-1 tracking-tight leading-[1.05]">
                  Sticky notes for your soul's fridge
                </h1>

                <p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-xl" >
                  To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones. Emotional fundamentals nobody taught us, explained through analogies.
                </p>
                
              </div>

              <div className="relative">
                {featuredCarousel.map((item, idx) => (
                  <div
                    key={idx}
                    className={`carousel-transition ${idx === carouselIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3">
                          Must Read
                        </div>
                        
                        
                        <h3 className="text-[28px] font-semibold mb-2 leading-tight tracking-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-[15px] text-white/90 leading-relaxed mb-5">
                          {item.description}
                        </p>
                        
                        <button onClick={() => handleReadStory(item.slug)} className="px-5 py-2.5 bg-white text-black hover:cursor-pointer rounded-full text-[14px] font-medium hover:bg-white/90 transition-all">
                          Read Story
                        </button>
                      </div>

                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                        {featuredCarousel.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCarouselIndex(i)}
                            className={`w-1.5 rounded-full transition-all ${
                              i === carouselIndex ? 'h-8 bg-white' : 'h-1.5 bg-white/40 hover:bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>    
            </div>
          </div>
        </div>
    </section>
 )
}