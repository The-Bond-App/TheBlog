import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function BentoParallaxHero() {
  const [activeOption, setActiveOption] = useState(1);
  const [selectedCover, setSelectedCover] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  const featuredCarousel = [
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      title: "The Mirror Effect",
      description: "Why we're drawn to people who reflect parts of ourselves"
    },
    {
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop",
      title: "Emotional Granularity",
      description: "The power of naming your feelings with precision"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      title: "The Comfort Zone",
      description: "Why staying comfortable keeps you uncomfortable"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedCover((prev) => (prev + 1) % featuredCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Option 1: Asymmetric Split with Parallax
  const HeroOption1 = () => (
    <section ref={heroRef} className='relative px-6 md:px-12 py-20 max-w-[1400px] mx-auto overflow-hidden'>
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div 
          className="md:col-span-1 space-y-6"
          style={{
            transform: `translateX(${mousePosition.x * -10}px) translateY(${scrollY * -0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div 
            className="w-16 h-1 bg-yellow-400 rounded-full"
            style={{
              transform: `scaleX(${1 + mousePosition.x * 0.2})`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>
          <h1 className="text-5xl md:text-6xl font-light leading-tight">
            Sticky notes for your{' '}
            <span className="font-bold block mt-2">soul's fridge</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones.
          </p>
          <div className="space-y-3">
            <button className="w-full px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-all text-left flex items-center justify-between group hover:scale-105">
              Explore stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full px-6 py-3 border-2 border-stone-200 rounded-xl font-medium hover:border-stone-900 transition-all text-left hover:scale-105">
              Browse by feeling
            </button>
          </div>
        </div>
        
        <div className="md:col-span-2 relative h-[550px]">
          <div className="absolute inset-0 grid grid-cols-2 gap-4">
            {featuredCarousel.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ${
                  idx === 0 ? 'row-span-2' : ''
                }`}
                style={{
                  transform: `
                    translateY(${scrollY * (0.1 + idx * 0.05)}px)
                    translateX(${mousePosition.x * (10 + idx * 5)}px)
                    rotateY(${mousePosition.x * (2 - idx)}deg)
                    scale(${1 + (mousePosition.y * 0.02)})
                  `,
                  transition: 'transform 0.3s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(1.15) translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div 
                  className="absolute bottom-6 left-6 right-6 text-white"
                  style={{
                    transform: `translateY(${mousePosition.y * 10}px) translateZ(20px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <h3 className={`font-bold mb-2 ${idx === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Option 2: Full Carousel with Parallax
  const HeroOption2 = () => (
    <section ref={heroRef} className='relative px-6 md:px-12 py-20 max-w-[1400px] mx-auto overflow-hidden'>
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        {featuredCarousel.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === selectedCover ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
                style={{
                  transform: `scale(1.1) translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        ))}
        
        <div className="relative h-full flex items-center">
          <div 
            className="max-w-2xl px-12 md:px-20 text-white space-y-6"
            style={{
              transform: `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div 
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              style={{
                transform: `translateY(${mousePosition.y * -10}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              Issue {selectedCover + 1} of {featuredCarousel.length}
            </div>
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Sticky notes<br/>
              <span className="font-bold">for your soul's<br/>fridge</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {featuredCarousel[selectedCover].description}
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
              Read this story
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 right-8 flex gap-3"
          style={{
            transform: `translateX(${mousePosition.x * -10}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          {featuredCarousel.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCover(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === selectedCover ? 'w-12 bg-white' : 'w-8 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // Option 3: Stacked Cards with Parallax
  const HeroOption3 = () => (
    <section ref={heroRef} className='relative px-6 md:px-12 py-20 max-w-[1400px] mx-auto overflow-hidden'>
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-1/2 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <div 
        className="text-center max-w-3xl mx-auto mb-12"
        style={{
          transform: `translateY(${scrollY * -0.4}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <h1 
          className="text-5xl md:text-7xl font-light mb-6 leading-tight"
          style={{
            transform: `translateX(${mousePosition.x * -5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          Sticky notes for<br/>
          <span className="relative inline-block">
            <span className="font-bold">your soul's fridge</span>
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12">
              <path d="M0,8 Q150,0 300,8" fill="none" stroke="#facc15" strokeWidth="8"/>
            </svg>
          </span>
        </h1>
        <p 
          className="text-xl text-stone-600 mb-8"
          style={{
            transform: `translateX(${mousePosition.x * 5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          Emotional fundamentals nobody taught us, explained through analogies.
        </p>
      </div>
      
      <div className="relative h-[450px] max-w-2xl mx-auto">
        {featuredCarousel.map((item, idx) => {
          const isActive = idx === selectedCover;
          const offset = (featuredCarousel.length - 1 - idx) * 25;
          
          return (
            <div
              key={idx}
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 cursor-pointer ${
                isActive ? 'z-30' : 'z-10'
              }`}
              style={{
                transform: isActive 
                  ? `translateX(calc(-50% + ${mousePosition.x * 20}px)) translateY(${mousePosition.y * 15}px) scale(1) rotateY(${mousePosition.x * 3}deg)` 
                  : `translateX(-50%) translateY(${offset}px) scale(${1 - idx * 0.05}) rotateY(${mousePosition.x * (1 - idx * 0.5)}deg)`,
                width: '90%',
                transition: 'transform 0.3s ease-out',
                transformStyle: 'preserve-3d'
              }}
              onClick={() => setSelectedCover(idx)}
            >
              <div className="relative h-[400px] bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    style={{
                      transform: isActive 
                        ? `scale(1.1) translateX(${mousePosition.x * -25}px) translateY(${mousePosition.y * -25}px)`
                        : 'scale(1)',
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div 
                  className="absolute bottom-8 left-8 right-8 text-white"
                  style={{
                    transform: isActive ? `translateY(${mousePosition.y * 10}px) translateZ(30px)` : 'none',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <div className="text-xs text-white/60 mb-2">Story {idx + 1}</div>
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  // Option 4: Editorial Split with Parallax
  const HeroOption4 = () => (
    <section ref={heroRef} className='relative px-6 md:px-12 py-20 max-w-[1400px] mx-auto overflow-hidden'>
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * 40}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div 
          className="bg-stone-900 rounded-3xl p-12 md:p-16 flex flex-col justify-center text-white"
          style={{
            transform: `translateX(${mousePosition.x * -15}px) translateY(${scrollY * -0.2}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="space-y-6">
            <div 
              className="w-12 h-1 bg-yellow-400"
              style={{
                transform: `scaleX(${1 + mousePosition.x * 0.3})`,
                transition: 'transform 0.3s ease-out'
              }}
            ></div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Sticky notes<br/>
              <span className="font-bold">for your<br/>soul's fridge</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-300 transition-all hover:scale-105">
                Start reading
              </button>
              <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all hover:scale-105">
                View all stories
              </button>
            </div>
          </div>
        </div>
        
        <div 
          className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-xl"
          style={{
            transform: `translateX(${mousePosition.x * 15}px) translateY(${scrollY * -0.15}px) rotateY(${mousePosition.x * -3}deg)`,
            transition: 'transform 0.3s ease-out',
            transformStyle: 'preserve-3d'
          }}
        >
          {featuredCarousel.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === selectedCover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(1.1) translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div 
                className="absolute bottom-8 left-8 right-8 text-white"
                style={{
                  transform: `translateY(${mousePosition.y * 15}px) translateZ(30px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                  Featured
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4">{item.description}</p>
                <button className="text-sm font-medium underline hover:no-underline">
                  Read story →
                </button>
              </div>
            </div>
          ))}
          
          <div 
            className="absolute top-8 right-8 flex gap-2"
            style={{
              transform: `translateX(${mousePosition.x * -10}px) translateZ(40px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {featuredCarousel.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCover(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === selectedCover ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Option 5: Bento Grid with Parallax
  const HeroOption5 = () => (
    <section ref={heroRef} className='relative px-6 md:px-12 py-10 max-w-[1400px] mx-auto overflow-hidden'>
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * 35}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <div 
        className="mb-12 w-full text-left"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <h1 
          className="text-5xl md:text-6xl lg:text-6xl font-light gradient-text pb-1 tracking-tight leading-[1.05]"
          style={{
            transform: `translateX(${mousePosition.x * -8}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          Sticky notes for your soul's fridge
        </h1>
        <p 
          className="text-2xl text-stone-500"
          style={{
            transform: `translateX(${mousePosition.x * -5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div 
          className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          style={{
            transform: `
              translateY(${scrollY * 0.15}px)
              translateX(${mousePosition.x * 20}px)
              rotateY(${mousePosition.x * 2}deg)
              rotateX(${mousePosition.y * -2}deg)
            `,
            transition: 'transform 0.3s ease-out',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={featuredCarousel[0].image} 
              alt={featuredCarousel[0].title} 
              className="w-full h-full object-cover"
              style={{
                transform: `scale(1.15) translateX(${mousePosition.x * -25}px) translateY(${mousePosition.y * -25}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div 
            className="absolute bottom-8 left-8 right-8 text-white"
            style={{
              transform: `translateY(${mousePosition.y * 15}px) translateZ(30px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <span 
              className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full inline-block"
              style={{
                transform: `translateY(${mousePosition.y * -10}px) translateZ(20px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              Featured
            </span>
            <h3 className="text-4xl font-bold mt-4 mb-2">{featuredCarousel[0].title}</h3>
            <p className="text-lg text-white/90">{featuredCarousel[0].description}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {featuredCarousel.slice(1).map((item, idx) => (
            <div 
              key={idx} 
              className="relative h-[192px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
              style={{
                transform: `
                  translateY(${scrollY * (0.1 + idx * 0.05)}px)
                  translateX(${mousePosition.x * (15 - idx * 5)}px)
                  rotateY(${mousePosition.x * (2 - idx)}deg)
                `,
                transition: 'transform 0.3s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(1.15) translateX(${mousePosition.x * (-15 - idx * 5)}px) translateY(${mousePosition.y * (-15 - idx * 5)}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div 
                className="absolute bottom-4 left-4 right-4 text-white"
                style={{
                  transform: `translateY(${mousePosition.y * 10}px) translateZ(20px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-white/80 line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const options = [
    { name: 'Asymmetric Split', component: HeroOption1 },
    { name: 'Full Carousel', component: HeroOption2 },
    { name: 'Stacked Cards', component: HeroOption3 },
    { name: 'Editorial Split', component: HeroOption4 },
    { name: 'Bento Grid', component: HeroOption5 }
  ];

  const CurrentHero = options[activeOption - 1].component;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Option Selector */}
      <div className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-stone-900">Choose Your Hero (All with Parallax)</h2>
            <span className="text-sm text-stone-500">Option {activeOption} of 5</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setActiveOption(idx + 1)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeOption === idx + 1
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {idx + 1}. {option.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Hero */}
      <CurrentHero />
      </div>
  )
}

     