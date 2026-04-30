import React, { useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const aroundNation = [
  {
    category: "National",
    title: "Dhaka metro rail ridership crosses 2 lakh daily for first time",
    desc: "Commuters praise the service as the city's rail network hits a landmark milestone, easing daily congestion across major corridors.",
    time: "6 hours ago",
    read: "3 min read",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80&auto=format&fit=crop",
  },
  {
    category: "Technology",
    title: "Startup Bangladesh fund disburses Tk 50 crore to new ventures",
    desc: "The latest round targets early-stage founders across the country.",
    time: "7 hours ago",
    read: "2 min read",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&auto=format&fit=crop",
  },
  {
    category: "Health",
    title: "Government launches free dengue testing across 64 districts",
    desc: "Health officials warn of a seasonal spike as monsoon approaches.",
    time: "8 hours ago",
    read: "2 min read",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80&auto=format&fit=crop",
  },
];

const extraStories = [
  { category: "National",   title: "Padma Bridge toll revenue exceeds Tk 1,000 crore in second year", time: "9 hrs ago"  },
  { category: "Economy",    title: "Bangladesh exports cross $5bn mark in single month for first time",  time: "10 hrs ago" },
  { category: "Education",  title: "New education policy mandates coding in secondary schools nationwide", time: "11 hrs ago" },
];

/* ─── Styles ────────────────────────────────────────────────────────────── */

const categoryStyles: Record<string, { badge: string; dot: string }> = {
  National:   { badge: "bg-red-50 text-red-700",       dot: "bg-red-600"    },
  Technology: { badge: "bg-blue-50 text-blue-700",     dot: "bg-blue-600"   },
  Health:     { badge: "bg-green-50 text-green-700",   dot: "bg-green-600"  },
  Economy:    { badge: "bg-amber-50 text-amber-700",   dot: "bg-amber-500"  },
  Education:  { badge: "bg-purple-50 text-purple-700", dot: "bg-purple-600" },
};

/* ─── Sub-components ────────────────────────────────────────────────────── */

const CategoryBadge = ({ category, light = false }: { category: string; light?: boolean }) => {
  const s = categoryStyles[category] ?? { badge: "bg-gray-100 text-gray-600", dot: "bg-gray-400" };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-widest uppercase ${
        light ? "bg-white/15 text-white" : s.badge
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? "bg-white/80" : s.dot}`} />
      {category}
    </span>
  );
};

/** Shows a subtle SVG placeholder only when the image fails to load. */
const SplashImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {failed ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="4" fill="#e5e7eb" />
            <path d="M8 32L8 20L20 10L32 20L32 32Z" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
            <rect x="15" y="24" width="10" height="8" rx="1" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="17" r="3" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500 ease-in-out"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

/* ─── Main Component ────────────────────────────────────────────────────── */

export default function AroundTheNation() {
  const [featured, ...rest] = aroundNation;

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">

      {/* ── Section header ── */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-9 h-0.5 bg-red-600 rounded-full flex-shrink-0" />
        <h2
          className="text-2xl font-black tracking-tight text-gray-900 dark:text-white whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Around the Nation
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

        {/* ── Hero card ── */}
        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden cursor-pointer group min-h-[380px] flex flex-col justify-end shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-black">

          {/* Red accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-600 z-10" />

          {/* Splash image */}
          <SplashImage src={featured.img} alt={featured.title} />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />

          {/* Content */}
          <div className="relative z-[2] flex flex-col gap-2.5 p-6">
            <CategoryBadge category={featured.category} light />

            <h3
              className="font-black text-xl md:text-2xl leading-snug text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {featured.title}
            </h3>

            <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
              {featured.desc}
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-white/50">{featured.time}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-xs text-white/50">{featured.read}</span>
              <span className="ml-auto text-xs font-semibold text-red-400 hover:text-red-300 cursor-pointer">
                Read more →
              </span>
            </div>
          </div>
        </div>

        {/* ── Side cards ── */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {rest.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-0.5 transition-all duration-200 flex-1"
            >
              {/* Image */}
              <div className="relative h-[120px] flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <SplashImage src={item.img} alt={item.title} />
                {/* Subtle image overlay + badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute bottom-2 left-3 z-10">
                  <CategoryBadge category={item.category} light />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4 gap-2">
                <h3
                  className="font-bold text-sm leading-snug text-gray-900 dark:text-white line-clamp-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>

                <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center">
                  <span className="text-xs text-gray-400">
                    {item.time} · {item.read}
                  </span>
                  <span className="ml-auto text-xs font-semibold text-red-600 hover:text-red-500 cursor-pointer">
                    Read →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom numbered list ── */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-1">
        {extraStories.map((story, i) => (
          <div
            key={story.title}
            className="group flex gap-3 items-start p-3 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <span
              className="text-2xl font-black text-gray-200 dark:text-gray-700 leading-none flex-shrink-0 select-none group-hover:text-red-300 dark:group-hover:text-red-800 transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", minWidth: 36 }}
            >
              {String(i + 4).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug group-hover:text-red-600 transition-colors">
                {story.title}
              </span>
              <span className="text-[11px] text-gray-400">
                {story.category} · {story.time}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}