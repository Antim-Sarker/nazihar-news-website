import React, { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

type ScorePill = {
  home: string;
  away: string;
  homeScore: string;
  awayScore: string;
  status: string;
  live?: boolean;
};

type CardItem = {
  cat: string;
  title: string;
  date: string;
  read: string;
  img?: string;
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const scores: ScorePill[] = [
  { home: "Brazil",   away: "Ecuador", homeScore: "2", awayScore: "1", status: "Live 67'", live: true },
  { home: "Arsenal",  away: "Chelsea", homeScore: "1", awayScore: "1", status: "FT" },
  { home: "Scotland", away: "Germany", homeScore: "0", awayScore: "2", status: "FT" },
  { home: "Spurs",    away: "Man Utd", homeScore: "–", awayScore: "–", status: "19:45" },
];

const featured = {
  cat: "Football · World Cup Qualifying",
  title: "Brazil–Ecuador Preview: Dunga men on road to redemption",
  desc: "A must-win clash in South American qualifying — can Brazil rediscover their rhythm before it's too late? Team news, tactics and prediction inside.",
  date: "May 7, 2019",
  read: "4 min",
  img: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1200&q=80&auto=format&fit=crop",
  live: true,
};

const bottomCards: CardItem[] = [
  {
    cat: "Football",
    title: "Three players Arsenal almost signed this summer",
    date: "May 7, 2019",
    read: "3 min",
    img: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&q=75&auto=format&fit=crop",
  },
  {
    cat: "Football",
    title: "Hard time ahead for Hodgson as England start Euro qualifying campaign",
    date: "May 7, 2019",
    read: "2 min",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=75&auto=format&fit=crop",
  },
  {
    cat: "Football",
    title: "Scotland and Germany play rock-paper-scissors during Euro qualifier",
    date: "May 7, 2019",
    read: "2 min",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=75&auto=format&fit=crop",
  },
  {
    cat: "Betting",
    title: "Scoop 6 pool expected to swell beyond £3m after 10 winners",
    date: "Apr 12, 2019",
    read: "2 min",
  },
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */

const condensed: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const mono: React.CSSProperties      = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const barlow: React.CSSProperties    = { fontFamily: "'Barlow', sans-serif" };

function SafeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`bg-gray-100 w-full h-full ${className ?? ""}`} />;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function SportsSection() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" style={barlow}>

      {/* ── Header ── */}
      <div className="flex items-flex-end justify-between pb-4 mb-4 border-b-2 border-[#e8133a]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-9 bg-[#e8133a] rounded-sm flex-shrink-0" />
          <div>
            <p className="text-[10px] tracking-[.16em] uppercase text-[#e8133a] mb-0.5" style={mono}>
              Latest Coverage
            </p>
            <h2
              className="text-[32px] font-black uppercase tracking-tight leading-none text-gray-900"
              style={condensed}
            >
              Sport News
            </h2>
          </div>
        </div>
        <span
          className="self-end text-[10px] tracking-[.08em] uppercase text-[#e8133a] border-b border-[#e8133a] pb-px cursor-pointer"
          style={mono}
        >
          All Sports →
        </span>
      </div>

      {/* ── Live Score Ticker ── */}
      <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
        {scores.map((s) => (
          <div
            key={s.home + s.away}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex-shrink-0"
          >
            <span className="text-[12px] font-black uppercase text-gray-900" style={condensed}>{s.home}</span>
            <span className="text-[13px] font-medium text-gray-900" style={mono}>{s.homeScore}</span>
            <span className="text-[9px] text-gray-400" style={mono}>–</span>
            <span className="text-[13px] font-medium text-gray-900" style={mono}>{s.awayScore}</span>
            <span className="text-[12px] font-black uppercase text-gray-900" style={condensed}>{s.away}</span>
            {s.live ? (
              <span
                className="text-[7px] tracking-[.08em] uppercase bg-[#e8133a] text-white px-1.5 py-0.5 rounded"
                style={mono}
              >
                {s.status}
              </span>
            ) : (
              <span className="text-[9px] text-gray-400" style={mono}>{s.status}</span>
            )}
          </div>
        ))}
      </div>

      {/* ── Hero Featured ── */}
      <div className="relative rounded-2xl overflow-hidden h-[340px] cursor-pointer group mb-2.5">
        {/* Image */}
        <img
          src={featured.img}
          alt={featured.title}
          className="absolute inset-0 w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ filter: "brightness(.78)" }}
        />

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,4,2,.9) 0%, rgba(8,4,2,.35) 45%, transparent 100%)" }}
        />

        {/* Live badge */}
        {featured.live && (
          <div
            className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#e8133a] text-white px-2.5 py-1 rounded"
            style={{ ...mono, fontSize: 8, letterSpacing: ".1em", textTransform: "uppercase" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Live
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-flex-end justify-between gap-5 p-6">
          <div className="flex-1">
            {/* Category */}
            <div
              className="flex items-center gap-1.5 text-white/55 uppercase tracking-[.14em] mb-1.5"
              style={{ ...mono, fontSize: 9 }}
            >
              <span className="block w-4 h-0.5 bg-[#e8133a] rounded flex-shrink-0" />
              {featured.cat}
            </div>

            {/* Headline */}
            <h2
              className="text-[30px] font-black text-white uppercase tracking-tight leading-[1.1] mb-2"
              style={condensed}
            >
              {featured.title}
            </h2>

            {/* Description */}
            <p className="text-[13px] text-white/60 leading-relaxed max-w-2xl mb-2">
              {featured.desc}
            </p>

            {/* Meta */}
            <div className="text-white/38" style={{ ...mono, fontSize: 9 }}>
              {featured.date} · {featured.read} read
            </div>
          </div>
        </div>
      </div>

      {/* ── 4-Card Row ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {bottomCards.map((card) => (
          <div
            key={card.title}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Image or placeholder */}
            <div className="h-[120px] overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
              {card.img ? (
                <SafeImg
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover block transition-transform duration-450 group-hover:scale-[1.07]"
                />
              ) : (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#d1d5db" strokeWidth="1.5" />
                  <path d="M18 10v8l5 3" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-col gap-1.5 p-3 flex-1">
              <span
                className="text-[9px] tracking-[.12em] uppercase text-[#e8133a]"
                style={mono}
              >
                {card.cat}
              </span>
              <h3
                className="text-[14px] font-black uppercase text-gray-900 leading-snug m-0"
                style={condensed}
              >
                {card.title}
              </h3>
              <div
                className="text-[9px] text-gray-400 mt-auto pt-1.5 border-t border-gray-100"
                style={mono}
              >
                {card.date} · {card.read} read
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}