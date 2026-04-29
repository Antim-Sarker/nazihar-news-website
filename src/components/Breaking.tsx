const popularArticles = [
  {
    id: 1,
    title: "Pellentesque Eliteget Bravida Cumsociis Natoque",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    categories: ["TRAVEL", "WORLD"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=280&fit=crop",
  },
  {
    id: 2,
    title: "Turpis Egestas Sed Tempus Urna Pharetra",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    categories: ["SCIENCE"],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&h=280&fit=crop",
  },
  {
    id: 3,
    title: "Minulla Posuere Sollicitudin Aliquam Ultrices Sagittis",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    categories: ["ECONOMY"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=280&fit=crop",
  },
  {
    id: 4,
    title: "Scelerisque Varius Morbi Enim Nunc Faucibus",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    categories: ["ECONOMY"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&h=280&fit=crop",
  },
];

export default function Breaking() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10 font-sans bg-white text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ── LEFT: Breaking News ── */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-tight">Breaking News</h2>

          <div className="relative rounded-sm overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=560&fit=crop"
              alt="Breaking News"
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* BREAKING badge top-left */}
            <div className="absolute top-4 left-4">
              <span className="bg-orange-500 text-white text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                BREAKING
              </span>
            </div>

            {/* Bottom overlay with category + title + date */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pt-16 pb-5">
              <span className="inline-block bg-black/70 text-white text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm mb-3">
                CULTURE
              </span>
              <h3 className="text-2xl font-bold text-white leading-snug mb-2 group-hover:text-orange-400 transition-colors duration-200">
                Ornare Arcu Duivivamus Arcu Felis Bibendum
              </h3>
              <p className="text-xs text-gray-400 tracking-wide">NOV 14, 2023</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Popular Now ── */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-tight">Popular Now</h2>

          <div className="grid grid-cols-2 gap-5">
            {popularArticles.map((article) => (
              <div key={article.id} className="group cursor-pointer">

                {/* Thumbnail */}
                <div className="relative rounded-sm overflow-hidden mb-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[170px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badges */}
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {article.categories.map((cat) => (
                      <span
                        key={cat}
                        className="bg-black/80 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-sm font-bold leading-snug mb-1.5 group-hover:text-orange-500 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}