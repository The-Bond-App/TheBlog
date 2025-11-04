

const highlights = [
    {
      id: 1,
      title: "The Art of Mindful Rebellion",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    },
    {
      id: 2,
      title: "Why Silence Speaks Louder",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    },
    {
      id: 3,
      title: "Finding Light in Dark Corners",
      image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80",
    }
  ];

export default function FeaturedGrid({ categories }) {
  const getCategoryInfo = (catId) => categories.find((c) => c.id === catId) || categories[0];

  return (
    <div id="featuredreadings" className="relative z-10 mt-12 w-full mx-auto pb-6">
      <h2 className="ps-4 text-base font-light text-white/50 mb-6 uppercase tracking-widest">
        Featured Reads
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((post, idx) => {

          return (
            <a
              key={post.id}
              href={`/post/${post.id}`}
              className="group relative overflow-hidden border border-white/20 rounded-3xl max-h-[400px] hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-green-900/20 to-transparent" />

              {/* Post index bubble */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-sm font-medium">
                {idx + 1}
              </div>

              {/* Post content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <h3 className="text-2xl font-light mb-2 leading-tight">{post.title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
