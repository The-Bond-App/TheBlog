

const highlights = [
    {
      id: 1,
      title: "The Art of Mindful Rebellion",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      readTime: "5 min",
      category: "mindbug"
    },
    {
      id: 2,
      title: "Why Silence Speaks Louder",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      readTime: "7 min",
      category: "feelings"
    },
    {
      id: 3,
      title: "Finding Light in Dark Corners",
      image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80",
      readTime: "6 min",
      category: "whenitshard"
    }
  ];

export default function FeaturedGrid({ categories }) {
  const getCategoryInfo = (catId) => categories.find((c) => c.id === catId) || categories[0];

  return (
    <div className="relative z-10 px-6 lg:px-8 w-full mx-auto pb-6">
      <h2 className="text-sm font-light text-white/50 mb-6 uppercase tracking-widest">
        Featured Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((post, idx) => {
          const catInfo = getCategoryInfo(post.category);

          return (
            <a
              key={post.id}
              href={`/post/${post.id}`}
              className="group relative overflow-hidden rounded-3xl max-h-[400px] hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />

              {/* Post index bubble */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-sm font-medium">
                {idx + 1}
              </div>

              {/* Post content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="text-xs text-purple-300 mb-2 font-medium flex items-center gap-2">
                  {catInfo.icon && <span>{catInfo.icon}</span>}
                  <span>{catInfo.name}</span>
                </div>

                <h3 className="text-2xl font-light mb-2 leading-tight">{post.title}</h3>
                <div className="text-sm text-white/60">{post.readTime}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
