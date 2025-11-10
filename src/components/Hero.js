'use client';
import { useState, useEffect } from 'react'


const featuredCarousel = [
  {
    id: 1,
    title: "The Art of Letting Go",
    subtitle: "What happens when you finally release what no longer serves you",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  },
  {
    id: 2,
    title: "Finding Your Voice",
    subtitle: "Every story you tell makes the world a little more honest",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
  },
  {
    id: 3,
    title: "The Power of Pause",
    subtitle: "Sometimes the bravest thing you can do is rest",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200",
  }
];

export default function Hero() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredCarousel.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return(
   <section className='bg-white'>
        <div className="relative overflow-hidden">
          <div className="px-6 py-12 max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 max-w-2xl -mt-8">
             
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-slate-700 leading-[1.05]">
                  Sticky notes for your <span className='gradient-text'>soul's fridge</span>
                </h1>

                <p className="text-[21px] text-black/60 leading-relaxed max-w-xl">
                  To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones. Emotional fundamentals nobody taught us, explained through analogies.
                </p>
                
              </div>

              <div className="relative">
                {featuredCarousel.map((item, idx) => (
                  <div
                    key={item.id}
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
                        <div className="text-[13px] font-medium mb-3 text-white/80 tracking-wide">
                          FEATURED
                        </div>
                        
                        <h3 className="text-[28px] font-semibold mb-2 leading-tight tracking-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-[15px] text-white/90 leading-relaxed mb-5">
                          {item.subtitle}
                        </p>
                        
                        <button className="px-5 py-2.5 bg-white text-black rounded-full text-[14px] font-medium hover:bg-white/90 transition-all">
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