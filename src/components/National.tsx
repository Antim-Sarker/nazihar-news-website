import React, { useState } from "react";

const aroundNation = [
  {
    category: "National",
    title: "Dhaka metro rail ridership crosses 2 lakh daily for first time",
    desc: "Commuters praise the service as the city's rail network hits a landmark milestone, easing daily congestion across major corridors.",
    time: "6 hours ago",
    read: "3 min read",
    img: "/nation1.jpg",
  },
  {
    category: "Technology",
    title: "Startup Bangladesh fund disburses Tk 50 crore to new ventures",
    desc: "The latest round targets early-stage founders across the country.",
    time: "7 hours ago",
    read: "2 min read",
    img: "/nation2.jpg",
  },
  {
    category: "Health",
    title: "Government launches free dengue testing across 64 districts",
    desc: "Health officials warn of a seasonal spike as monsoon approaches.",
    time: "8 hours ago",
    read: "2 min read",
    img: "/nation3.jpg",
  },
];

const extraStories = [
  { category: "National", title: "Padma Bridge toll revenue exceeds Tk 1,000 crore in second year", time: "9 hrs ago" },
  { category: "Economy",  title: "Bangladesh exports cross $5bn mark in single month for first time", time: "10 hrs ago" },
  { category: "Education", title: "New education policy mandates coding in secondary schools nationwide", time: "11 hrs ago" },
];

const categoryStyles: Record<string, { badge: string; dot: string }> = {
  National:   { badge: "bg-red-50 text-red-700",       dot: "bg-red-600"    },
  Technology: { badge: "bg-blue-50 text-blue-700",     dot: "bg-blue-600"   },
  Health:     { badge: "bg-green-50 text-green-700",   dot: "bg-green-600"  },
  Economy:    { badge: "bg-amber-50 text-amber-700",   dot: "bg-amber-500"  },
  Education:  { badge: "bg-purple-50 text-purple-700", dot: "bg-purple-600" },
};

const CategoryBadge = ({ category }: { category: string }) => {
  const s = categoryStyles[category] ?? { badge: "bg-gray-100 text-gray-600", dot: "bg-gray-400" };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-widest uppercase ${s.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`} />
      {category}
    </span>
  );
};

// Smart image — shows placeholder only when image fails to load
const NewsImage = ({ src, alt }: { src: string; alt: string }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full">
      {failed ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="4" fill="#e5e7eb"/>
            <path d="M8 32L8 20L20 10L32 20L32 32Z" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
            <rect x="15" y="24" width="10" height="8" rx="1" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="17" r="3" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%",  display: "block" }}
          className="group-hover:scale-105 transition-transform duration-500"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export default function AroundTheNation() {
  const [featured, ...rest] = aroundNation;

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-8 h-0.5 bg-red-600 rounded-full" />
        <h2
          className="text-2xl font-black tracking-tight text-gray-900 dark:text-white"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Around the Nation
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

        {/* Featured card */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden group cursor-pointer relative flex flex-col hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-600 z-10" />
          <div className="h-52 w-full overflow-hidden flex-shrink-0 relative">
            <NewsImage src={featured.img} alt={featured.title} />
          </div>
          <div className="flex flex-col flex-1 p-5 gap-3">
            <CategoryBadge category={featured.category} />
            <h3
              className="font-black text-xl leading-snug text-gray-900 dark:text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {featured.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
              {featured.desc}
            </p>
            <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <span className="text-xs text-gray-400">{featured.time}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-xs text-gray-400">{featured.read}</span>
              <span className="ml-auto text-xs font-semibold text-red-600 hover:underline cursor-pointer">
                Read more →
              </span>
            </div>
          </div>
        </div>

        {/* Right stacked cards */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {rest.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden group cursor-pointer flex flex-col hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex-1"
            >
              <div className="h-32 w-full overflow-hidden flex-shrink-0 relative">
                <NewsImage src={item.img} alt={item.title} />
              </div>
              <div className="flex flex-col flex-1 p-4 gap-2">
                <CategoryBadge category={item.category} />
                <h3
                  className="font-bold text-sm leading-snug text-gray-900 dark:text-white line-clamp-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                  <span className="text-xs text-gray-400">{item.time}</span>
                  <span className="ml-auto text-xs font-semibold text-red-600 hover:underline cursor-pointer">
                    Read →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom numbered list */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {extraStories.map((story, i) => (
          <div
            key={story.title}
            className="flex gap-3 items-start p-3 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
          >
            <span
              className="text-2xl font-black text-gray-200 dark:text-gray-700 leading-none flex-shrink-0 select-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {String(i + 4).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug group-hover:text-red-600 transition-colors">
                {story.title}
              </span>
              <span className="text-[11px] text-gray-400">{story.category} · {story.time}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
