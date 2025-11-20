import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const RitualSelector = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

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

  return (
    <section className="py-12 px-6">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-light mb-2">Quick rituals for every feeling</h2>
        <p className="text-stone-600 mb-6">Swipe to explore</p>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
          {coreEmotions.map((emotion) => {
            const ritual = rituals[emotion.slug];
            return (
              <div
                key={emotion.id}
                className="flex-shrink-0 w-72 snap-center"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl">
                  <img src={ritual.image} alt={emotion.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                  
                  {/* Top: Emotion + Story */}
                  <div className="absolute top-0 left-0 right-0 p-5">
                    <div className="flex items-start gap-3">
                      <div className="text-4xl">{emotion.emoji}</div>
                      <div>
                        <div className="text-white font-medium mb-1">{emotion.label}</div>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {emotion.story}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom: Post Title + CTA */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-lg font-light mb-4 leading-tight">
                      {ritual.postTitle}
                    </h3>
                    <button className="w-full bg-white text-stone-900 rounded-lg px-4 py-3 hover:bg-stone-100 transition-all font-medium text-sm flex items-center justify-center gap-2 group">
                      <span>Read all {emotion.label.toLowerCase()} rituals</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default RitualSelector;