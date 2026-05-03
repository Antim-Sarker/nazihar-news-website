import React, { useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const cards = [
  {
    id: "c1",
    cat: "Cinema",
    title: "Cannes 2026: The films the world is watching",
    meta: "May 7 · 5 min read",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80&auto=format&fit=crop",
    size: "lg" as const,
    wide: false,
  },
  {
    id: "c2",
    cat: "Music",
    title: "New album drops shatter streaming records overnight",
    meta: "Apr 30 · 3 min read",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&auto=format&fit=crop",
    size: "md" as const,
    wide: false,
  },
  {
    id: "c3",
    cat: "Celebrity",
    title: "Inside the most talked-about Met Gala looks of 2026",
    meta: "Apr 29 · 4 min read",
    img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&q=80&auto=format&fit=crop",
    size: "sm" as const,
    wide: false,
  },
  {
    id: "c4",
    cat: "TV & Streaming",
    title: "The series everyone can't stop talking about",
    sub: "Epic production, a cast of unknowns, and a finale nobody predicted. Here's why it became the year's defining show.",
    meta: "Apr 28 · 6 min read",
    img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=900&q=80&auto=format&fit=crop",
    size: "wide" as const,
    wide: true,
  },
  {
    id: "c5",
    cat: "Theatre",
    title: "Broadway's bold new season opens to standing ovations",
    meta: "Apr 27 · 3 min read",
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80&auto=format&fit=crop",
    size: "sm" as const,
    wide: false,
  },
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */

const garamond: React.CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const mono: React.CSSProperties     = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const outfit: React.CSSProperties   = { fontFamily: "'Outfit', sans-serif" };

function SafeImg({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`bg-stone-800 ${className ?? ""}`} />;
  return (
    <img
      src={src} alt={alt} className={className} style={style}
      onError={() => setFailed(true)}
    />
  );
}

/* ─── Card Component ────────────────────────────────────────────────────── */

function Card({ card }: { card: typeof cards[number] }) {
  const isWide = card.wide;

  const headlineClass = {
    lg:   "text-[20px] sm:text-[22px]",
    md:   "text-[17px] sm:text-[18px]",
    sm:   "text-[14px] sm:text-[15px]",
    wide: "text-[20px] sm:text-[24px] md:text-[26px] italic",
  }[card.size];

  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group h-full">
      {/* Image */}
      <SafeImg
        src={card.img}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
        style={{ filter: "brightness(.88)" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: isWide
            ? "linear-gradient(to right, rgba(15,10,5,.9) 0%, rgba(15,10,5,.5) 60%, rgba(15,10,5,.1) 100%)"
            : "linear-gradient(to top, rgba(15,10,5,.88) 0%, rgba(15,10,5,.2) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="absolute bottom-0 left-0 z-10 flex flex-col gap-1.5 p-4 sm:p-5"
        style={isWide ? { maxWidth: "min(55%, 420px)" } : undefined}
      >
        <span
          className="flex items-center gap-1.5 text-white/60 uppercase tracking-[.14em]"
          style={{ ...mono, fontSize: 9 }}
        >
          <span className="block w-4 h-px bg-amber-400 flex-shrink-0" />
          {card.cat}
        </span>

        <h3
          className={`font-bold text-white leading-snug tracking-tight m-0 ${headlineClass}`}
          style={garamond}
        >
          {card.title}
        </h3>

        {"sub" in card && card.sub && (
          <p className="text-white/60 text-[11px] sm:text-xs leading-relaxed mt-0.5 hidden sm:block">
            {card.sub}
          </p>
        )}

        <div className="text-white/40 mt-1" style={{ ...mono, fontSize: 9 }}>
          {card.meta}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */

export default function EntertainmentSection() {
  return (
    <section className="py-8 sm:py-10 px-4 max-w-7xl mx-auto" style={outfit}>

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 mb-6 sm:mb-7">
        <div className="flex-1 sm:max-w-xl">
          <p className="text-[10px] tracking-[.16em] uppercase text-[#8c2a1c] mb-2" style={mono}>
            Entertainment
          </p>
          <h2
            className="text-[28px] sm:text-[36px] font-bold leading-[1.15] tracking-tight text-[#1a1208] mb-2.5"
            style={garamond}
          >
            From red carpet<br />to streaming sensation
          </h2>
          <p className="text-[13px] text-[#6b6456] leading-relaxed">
            Films, music, celebrity, and culture. Everything happening in entertainment — covered
            at every angle, every format, every day.
          </p>
        </div>

        <button
          className="self-start sm:self-center flex-shrink-0 flex items-center gap-2 bg-[#1a1208] text-[#f2efe9] hover:bg-[#8c2a1c] transition-colors duration-200 rounded-md px-5 py-2.5 cursor-pointer border-none"
          style={{ ...mono, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" }}
        >
          Explore more →
        </button>
      </div>

      {/* ── Mobile: Vertical Stack ── */}
      <div className="flex flex-col gap-2.5 sm:hidden">
        {/* Wide card first on mobile */}
        <div style={{ height: 220 }}>
          <Card card={cards[3]} />
        </div>
        {/* Other cards in 2-col grid */}
        <div className="grid grid-cols-2 gap-2.5" style={{ gridAutoRows: 180 }}>
          {[cards[0], cards[1], cards[2], cards[4]].map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* ── Tablet: 2-col bento ── */}
      <div className="hidden sm:grid md:hidden gap-2.5" style={{
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "260px 200px 200px",
      }}>
        {/* c1 — large, spans 2 cols */}
        <div style={{ gridColumn: "1 / 3" }}>
          <Card card={cards[0]} />
        </div>
        {/* c4 wide */}
        <div>
          <Card card={cards[3]} />
        </div>
        {/* c2 */}
        <div>
          <Card card={cards[1]} />
        </div>
        {/* c3 + c5 */}
        <div>
          <Card card={cards[2]} />
        </div>
        <div>
          <Card card={cards[4]} />
        </div>
      </div>

      {/* ── Desktop: Original 3-col bento ── */}
      <div
        className="hidden md:grid gap-2.5"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "280px 200px",
        }}
      >
        {/* Row 1: c1, c2, c3 */}
        <div><Card card={cards[0]} /></div>
        <div><Card card={cards[1]} /></div>
        <div><Card card={cards[2]} /></div>

        {/* Row 2: c4 spans 2 cols, c5 */}
        <div style={{ gridColumn: "1 / 3" }}>
          <Card card={cards[3]} />
        </div>
        <div>
          <Card card={cards[4]} />
        </div>
      </div>

    </section>
  );
}