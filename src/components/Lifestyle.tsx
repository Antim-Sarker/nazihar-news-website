import { useState, useEffect } from "react";

const slides = [
  {
    category: "Fashion",
    headline: "The New Minimalism: Less Is the New More",
    sub: "How capsule wardrobes are redefining modern style in 2026",
    accent: "#e11d48",
    tag: "STYLE",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    category: "Health",
    headline: "Sleep Is the New Superfood",
    sub: "Scientists reveal how 7 hours changes everything about your body",
    accent: "#4f46e5",
    tag: "WELLNESS",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80",
  },
  {
    category: "Food",
    headline: "Street Food Goes Gourmet",
    sub: "Local flavors taking over fine dining menus across the country",
    accent: "#d97706",
    tag: "FOOD & DRINK",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
  },
  {
    category: "Travel",
    headline: "Slow Travel Is Having a Moment",
    sub: "Why more people are choosing depth over destinations in 2026",
    accent: "#0891b2",
    tag: "TRAVEL",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
  },
  {
    category: "Beauty",
    headline: "Skincare Backed by Science, Not Hype",
    sub: "The ingredients dermatologists actually recommend this season",
    accent: "#a21caf",
    tag: "BEAUTY",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  },
  {
    category: "Home",
    headline: "Biophilic Design Is Taking Over Homes",
    sub: "Bringing nature indoors — the interior trend everyone is embracing",
    accent: "#059669",
    tag: "INTERIORS",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  },
  {
    category: "Tech",
    headline: "Wearables That Actually Change Your Life",
    sub: "Beyond fitness tracking — the gadgets reshaping daily routines",
    accent: "#334155",
    tag: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
  },
];

export default function Lifestyle() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = (index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length, "left");
  const next = () => goTo((current + 1) % slides.length, "right");

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">

      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-[#c9a84c] rounded-full" />
          <h2 className="text-sm font-semibold uppercase tracking-[3px] text-gray-400">
            Lifestyle
          </h2>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-300 tracking-widest">
          <span className="text-gray-700 font-semibold">{String(current + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Slider card */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg"
        style={{ minHeight: 420 }}>

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: animating ? 0 : 1,
            transform: animating
              ? `scale(${direction === "right" ? "1.04" : "0.97"})`
              : "scale(1)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {/* Category watermark top-right */}
        <div
          className="absolute top-6 right-8 text-6xl md:text-8xl font-black uppercase tracking-tight select-none pointer-events-none"
          style={{
            color: "rgba(255,255,255,0.06)",
            opacity: animating ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}>
          {slide.category}
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-end min-h-[420px] md:min-h-[480px] p-8 md:p-12"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateY(${direction === "right" ? "20px" : "-20px"})`
              : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {/* Tag pill */}
          <span
            className="inline-block self-start text-[10px] font-semibold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: slide.accent, color: "#fff" }}>
            {slide.tag}
          </span>

          <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3 max-w-xl drop-shadow">
            {slide.headline}
          </h3>
          <p className="text-sm md:text-base text-white/70 max-w-lg leading-relaxed mb-6">
            {slide.sub}
          </p>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <button
              className="text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full text-white transition-opacity hover:opacity-80"
              style={{ background: slide.accent }}>
              Read More →
            </button>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white text-sm font-bold">
                ←
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white text-sm font-bold">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 justify-center mt-5">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "right" : "left")}
            className="h-[3px] rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 10,
              background: i === current ? slide.accent : "#e5e7eb",
            }}
          />
        ))}
      </div>

    </section>
  );
}