import React, { useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const tickers = [
  { name: "DSEX",      val: "6,284",  chg: "▲ 1.2%", up: true  },
  { name: "USD/BDT",   val: "110.4",  chg: "▼ 0.3%", up: false },
  { name: "Gold/oz",   val: "$3,312", chg: "▲ 0.8%", up: true  },
  { name: "Crude",     val: "$68.4",  chg: "▼ 1.1%", up: false },
  { name: "Inflation", val: "9.9%",   chg: "▼ 0.2%", up: false },
  { name: "CSCX",      val: "18,432", chg: "▲ 0.6%", up: true  },
];

const featuredStory = {
  category: "Economy",
  title: "Bangladesh secures $4.7bn IMF tranche as foreign reserves stabilise",
  desc: "The IMF approved the disbursement following Bangladesh Bank's adherence to fiscal consolidation targets, signalling renewed confidence ahead of the next review cycle.",
  author: { initials: "RH", name: "Rafiq Hossain" },
  time: "5 hrs",
  read: "4 min",
  img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format&fit=crop",
};

const subStories = [
  {
    tag: "Trade",
    title: "RMG sector eyes $50bn export target as EU GSP+ status confirmed through 2028",
    time: "6 hrs ago",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75&auto=format&fit=crop",
  },
  {
    tag: "Banking",
    title: "Bangladesh Bank raises policy rate 50bps to curb persistent core inflation",
    time: "7 hrs ago",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=75&auto=format&fit=crop",
  },
  {
    tag: "Energy",
    title: "Rooppur nuclear plant Unit 1 begins commercial fuel loading ahead of schedule",
    time: "9 hrs ago",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=75&auto=format&fit=crop",
  },
];

const keyFigures = [
  { label: "Forex Reserves",    val: "$21.3bn", delta: "▲",     up: true  },
  { label: "Remittance (Apr)",  val: "$2.1bn",  delta: "▲ 9%",  up: true  },
  { label: "RMG Exports (Mar)", val: "$4.8bn",  delta: "▲ 12%", up: true  },
  { label: "Policy Rate",       val: "8.50%",   delta: "▲ new", up: false },
  { label: "GDP Growth (FY25)", val: "5.9%",    delta: "",      up: true  },
];

const briefNews = [
  {
    title: "Chittagong port throughput hits record 3.2m TEUs in FY25",
    tag: "Logistics",
    time: "8 hrs ago",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&q=70&auto=format&fit=crop",
  },
  {
    title: "Dhaka real estate sales up 18% as mortgage rates ease slightly",
    tag: "Real Estate",
    time: "10 hrs ago",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&q=70&auto=format&fit=crop",
  },
  {
    title: "Solar power investment surges 40% as grid parity nears in Bangladesh",
    tag: "Energy",
    time: "11 hrs ago",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=120&q=70&auto=format&fit=crop",
  },
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */

const mono: React.CSSProperties = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const serif: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" };
const sourceSerif: React.CSSProperties = { fontFamily: "'Source Serif 4', Georgia, serif" };

function SafeImg({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`bg-gray-100 ${className ?? ""}`} />;
  return (
    <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
  );
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-4 py-2 text-[9px] tracking-[.14em] uppercase text-gray-400 bg-gray-50 border-b border-gray-100"
      style={mono}
    >
      {children}
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */

export default function BusinessSection() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" style={sourceSerif}>

      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-7 bg-blue-600 rounded-full flex-shrink-0" />
        <h2 className="text-[22px] font-black tracking-tight text-gray-900 m-0" style={serif}>
          Business
        </h2>
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-[10px] tracking-wider uppercase text-blue-600 cursor-pointer" style={mono}>
          See all →
        </span>
      </div>

      {/* ── Market Ticker ── */}
      <div className="flex gap-1.5 mb-6 overflow-x-auto pb-1">
        {tickers.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-0.5 bg-white border border-gray-200 rounded-lg px-3 py-2 flex-shrink-0 cursor-pointer hover:border-blue-400 hover:shadow-[0_0_0_3px_rgba(59,130,246,.1)] transition-all"
          >
            <span className="text-[9px] tracking-widest uppercase text-gray-400" style={mono}>{t.name}</span>
            <span className="text-[13px] font-medium text-gray-900" style={mono}>{t.val}</span>
            <span className="text-[10px]" style={{ ...mono, color: t.up ? "#059669" : "#dc2626" }}>{t.chg}</span>
          </div>
        ))}
      </div>

      {/* ── Main Body ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5">

        {/* Left column */}
        <div className="flex flex-col gap-4">

          {/* Featured card — image left, text right */}
          <div className="group grid grid-cols-1 sm:grid-cols-2 bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative overflow-hidden min-h-[240px]">
              <SafeImg
                src={featuredStory.img}
                alt={featuredStory.title}
                className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 justify-center">
              <span
                className="self-start text-[9px] tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded"
                style={mono}
              >
                {featuredStory.category}
              </span>
              <h3 className="m-0 text-[19px] font-black text-gray-900 leading-snug" style={serif}>
                {featuredStory.title}
              </h3>
              <p className="m-0 text-[13px] text-gray-500 leading-relaxed">
                {featuredStory.desc}
              </p>
              <div className="flex items-center gap-2 pt-2.5 border-t border-gray-100 mt-auto">
                <div
                  className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-medium text-blue-700 flex-shrink-0"
                  style={mono}
                >
                  {featuredStory.author.initials}
                </div>
                <span className="text-[11px] text-gray-400">{featuredStory.author.name}</span>
                <span className="ml-auto text-[10px] text-gray-400" style={mono}>
                  {featuredStory.time} · {featuredStory.read}
                </span>
                <span className="text-[10px] text-blue-600 cursor-pointer" style={mono}>Read →</span>
              </div>
            </div>
          </div>

          {/* 3-card sub row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {subStories.map((s) => (
              <div
                key={s.title}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="relative h-24 overflow-hidden flex-shrink-0 bg-gray-100">
                  <SafeImg
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover block transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-3 flex-1">
                  <span className="text-[9px] tracking-widest uppercase text-blue-600" style={mono}>
                    {s.tag}
                  </span>
                  <h4 className="m-0 text-[12px] font-bold text-gray-800 leading-snug" style={serif}>
                    {s.title}
                  </h4>
                  <span className="text-[10px] text-gray-400 mt-auto" style={mono}>{s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">

          {/* Analysis */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <SidebarLabel>Analysis</SidebarLabel>
            <div className="p-4">
              <p
                className="text-[13px] italic text-gray-700 leading-relaxed m-0 mb-3 pl-3 border-l-[3px] border-blue-500"
                style={sourceSerif}
              >
                The taka's managed float has bought time, but structural export diversification is
                the only durable anchor for reserve stability.
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center text-[8px] font-medium text-violet-700 flex-shrink-0"
                  style={mono}
                >
                  SM
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-gray-700">Dr. Salma Mahbub</div>
                  <div className="text-[10px] text-gray-400">Chief Economist, BIDS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Figures */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <SidebarLabel>Key Figures</SidebarLabel>
            {keyFigures.map((f) => (
              <div
                key={f.label}
                className="flex justify-between items-center px-4 py-2.5 border-b border-gray-50 last:border-none"
              >
                <span className="text-[11px] text-gray-500">{f.label}</span>
                <span className="text-[12px] font-medium text-gray-900 flex items-center gap-1" style={mono}>
                  {f.val}
                  {f.delta && (
                    <span className="text-[10px]" style={{ color: f.up ? "#059669" : "#dc2626" }}>
                      {f.delta}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* In Brief */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <SidebarLabel>In Brief</SidebarLabel>
            {briefNews.map((b) => (
              <div
                key={b.title}
                className="flex gap-2.5 px-4 py-2.5 border-b border-gray-50 last:border-none cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <SafeImg
                  src={b.img}
                  alt={b.title}
                  className="w-14 h-10 rounded-md object-cover flex-shrink-0"
                />
                <div>
                  <div className="text-[11px] font-semibold text-gray-800 leading-snug">{b.title}</div>
                  <div className="text-[9px] text-gray-400 mt-0.5" style={mono}>
                    {b.tag} · {b.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}