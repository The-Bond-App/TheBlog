'use client'
import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const RitualSelector = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const coreEmotions = [
    { 
      id: 1, 
      slug: 'anxious', 
      emoji: '😰', 
      label: 'Anxious',
      story: "Heart racing. Mind spinning. Can't sit still."
    },
    { 
      id: 2, 
      slug: 'angry', 
      emoji: '😤', 
      label: 'Angry',
      story: "Jaw clenched. Everything's annoying. Ready to snap."
    },
    { 
      id: 3, 
      slug: 'sad', 
      emoji: '😢', 
      label: 'Sad',
      story: "Heavy chest. Eyes stinging. Everything feels hard."
    },
    { 
      id: 4, 
      slug: 'overwhelmed', 
      emoji: '😵', 
      label: 'Overwhelmed',
      story: "Too much. Too many tabs open. Brain's fried."
    },
    { 
      id: 5, 
      slug: 'stuck', 
      emoji: '🤯', 
      label: 'Stuck',
      story: "Can't think. Can't move. Frozen in place."
    },
    { 
      id: 6, 
      slug: 'tired', 
      emoji: '😴', 
      label: 'Tired',
      story: "Dragging. Heavy limbs. Running on empty."
    },
    { 
      id: 7, 
      slug: 'scattered', 
      emoji: '🌀', 
      label: 'Scattered',
      story: "Thoughts everywhere. Can't focus. Where was I?"
    },
    { 
      id: 8, 
      slug: 'lonely', 
      emoji: '😔', 
      label: 'Lonely',
      story: "Nobody gets it. Feels like you're invisible."
    },
    { 
      id: 9, 
      slug: 'grateful', 
      emoji: '🙏', 
      label: 'Grateful',
      story: "Something good happened. Want to lock it in."
    },
    { 
      id: 10, 
      slug: 'energized', 
      emoji: '⚡', 
      label: 'Energized',
      story: "Fired up. Ready to move. Let's channel this."
    },
    { 
      id: 11, 
      slug: 'peaceful', 
      emoji: '😌', 
      label: 'Peaceful',
      story: "Finally calm. Everything's quiet. Savor this."
    },
    { 
      id: 12, 
      slug: 'inspired', 
      emoji: '✨', 
      label: 'Inspired',
      story: "Ideas flowing. Creativity sparking. Capture it now."
    }
  ];

  const rituals = {
    anxious: {
      postTitle: "The 5-4-3-2-1 Grounding Technique That Actually Works",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop"
    },
    angry: {
      postTitle: "How to Transform Anger Into Energy in Under 5 Minutes",
      image: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=800&h=1000&fit=crop"
    },
    sad: {
      postTitle: "Why Giving Yourself Permission to Feel Changes Everything",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=1000&fit=crop"
    },
    overwhelmed: {
      postTitle: "The One Thing Protocol: From Chaos to Clarity",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=1000&fit=crop"
    },
    stuck: {
      postTitle: "Why Shaking Your Body Unsticks Your Mind",
      image: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?w=800&h=1000&fit=crop"
    },
    tired: {
      postTitle: "The 10-Minute Power Pause That Beats Coffee",
      image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=800&h=1000&fit=crop"
    },
    scattered: {
      postTitle: "Brain Dump: The 3-Minute Ritual That Clears Mental Clutter",
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=1000&fit=crop"
    },
    lonely: {
      postTitle: "The Two-Text Rule for Breaking Through Loneliness",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop"
    },
    grateful: {
      postTitle: "How to Lock In Gratitude Before It Slips Away",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop"
    },
    energized: {
      postTitle: "The 25-Minute Sprint That Channels Peak Energy",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1000&fit=crop"
    },
    peaceful: {
      postTitle: "How to Extend Moments of Peace When You Find Them",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=1000&fit=crop"
    },
    inspired: {
      postTitle: "Capture the Spark: What to Do When Inspiration Hits",
      image: "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?w=800&h=1000&fit=crop"
    }
  };

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <>
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl md:text-7xl font-medium text-[#5a5187] mb-2 leading-tight">
              Discover your ritual
            </h2>
            <p className="text-[#464169] text-lg md:text-xl !tracking-widest font-normal max-w-2xl mx-auto">
              One feeling. One practice. Right now.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar px-4">
            {coreEmotions.map((emotion) => {
              const ritual = rituals[emotion.slug];
              return (
                <div
                  key={emotion.id}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                    <img 
                      src={ritual.image} 
                      alt={emotion.label} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      {/* Top: Emotion */}
                      <div className="flex items-start gap-3">
                        <div className="text-5xl">{emotion.emoji}</div>
                        <div>
                          <div className="text-white text-2xl font-bold mb-2">{emotion.label}</div>
                          <p className="text-white/95 text-base leading-relaxed">
                            {emotion.story}
                          </p>
                        </div>
                      </div>
                      
                      {/* Bottom: Post Title + CTA */}
                      <div>
                        <h3 className="text-white text-2xl font-inter font-extrabold mb-4 leading-tight">
                          {ritual.postTitle}
                        </h3>
                        <button className="w-full bg-white text-[#5a5187] rounded-xl px-6 py-4 hover:bg-stone-100 transition-all font-semibold text-base flex items-center justify-center gap-2 group shadow-lg">
                          <span>Explore rituals</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default RitualSelector;