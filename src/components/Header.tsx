import React, { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

// 🔥 Original Logic: Text → URL slug
const toSlug = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-");

// 🔥 Original Logic: Handle special menu paths
const menuToPath = (menu: string) => {
  const map: Record<string, string> = {
    "DS+": "ds-plus",
    "SLOW READS": "slow-reads",
  };
  return map[menu] || menu.toLowerCase().replace(/\s+/g, "-");
};

const menuItems: Record<string, string[]> = {
  NEWS: ["Breaking News", "Politics", "International", "National", "Economy", "Technology"],
  OPINION: ["Editorials", "Columns", "Analysis", "Letters", "Commentary"],
  BUSINESS: ["Markets", "Economy", "Companies", "Startups", "Real Estate", "Finance"],
  SPORTS: ["Cricket", "Football", "Tennis", "Badminton", "Olympics", "Other Sports"],
  LIFESTYLES: ["Fashion", "Health", "Food", "Travel"],
  CULTURE: ["Arts", "Books", "Film", "Music", "Theatre", "Heritage"],
  "SLOW READS": ["Features", "Interviews", "Long-form", "Photo Stories"],
  YOUTH: ["Education", "Career", "Student Life", "Youth Issues"],
  "DS+": ["Premium Articles", "Investigations", "Special Reports", "Newsletters"],
};

const trendingItems = [
  {
    label: "Top Story",
    text: "Will India hand over Hasina to Bangladesh?",
    img: "/trend1.jpg",
  },
  {
    label: "Climate",
    text: "El Niño may return, rising heat concerns",
    img: "/trend2.jpg",
  },
  {
    label: "Politics",
    text: "We still hope reforms will arise from parliament",
    img: "/trend3.jpg",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (mobileOpen && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="w-full bg-white font-sans">

        {/* 1. TOP UTILITY STRIP */}
        <div className="border-b border-gray-100 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 py-2 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-gray-400">
            <div className="flex gap-3 sm:gap-4">
              <span className="hidden xs:inline">SUNDAY, APRIL 26, 2026</span>
              <span className="xs:hidden">APR 26, 2026</span>
              <span className="text-red-600 border-l pl-3 sm:pl-4 border-gray-200">DHAKA EDITION</span>
            </div>
            <div className="flex gap-4 sm:gap-6 items-center">
              <Link to="/epaper" className="hover:text-black transition-colors uppercase">E-Paper</Link>
              <Link to="/bangla" className="text-red-600 font-black hover:opacity-70 transition-opacity">বাংলা</Link>
            </div>
          </div>
        </div>

        {/* 2. HERO BRANDING SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-5 py-4 sm:py-6 flex items-center justify-between gap-4 sm:gap-10">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 group flex flex-col items-start">
            <div className="h-12 sm:h-16 w-auto overflow-hidden">
              <img
                src="/nnn-logo.png"
                alt="NNN Logo"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-[7px] sm:text-[8px] tracking-[0.4em] sm:tracking-[0.5em] text-gray-400 mt-1 sm:mt-2 uppercase font-bold group-hover:text-red-600 transition-colors">
              Modern News Network
            </p>
          </Link>

          {/* Trending Micro-Cards — lg+ only */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {trendingItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 max-w-[220px] group cursor-pointer border-l border-gray-100 pl-6 first:border-0"
              >
                <div className="w-16 h-11 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                  <img
                    src={item.img || "/placeholder.jpg"}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] font-black text-red-600 uppercase tracking-widest mb-0.5 italic">
                    {item.label}
                  </p>
                  <p className="text-[11.5px] font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Search + Hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <button className="p-2.5 text-gray-400 hover:text-red-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2.5 text-gray-700 hover:text-red-600 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3. BREAKING NEWS STRIP */}
        <div className="bg-red-600 h-9 sm:h-10 flex items-center shadow-lg relative z-10 overflow-hidden">
          <div className="px-4 sm:px-6 h-full flex items-center bg-black text-white text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase skew-x-[-15deg] -ml-3 mr-3 sm:mr-4 shadow-xl flex-shrink-0">
            <span className="skew-x-[15deg]">Breaking</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-[12px] sm:text-[13px] font-medium text-white/95 tracking-wide">
              Parliament session begins amid calls for electoral reform · Bangladesh trade surplus narrows in Q1 · National cricket team announces squad for upcoming series ·
            </div>
          </div>
        </div>

        {/* 4. DESKTOP NAVIGATION (Sticky) */}
        <nav
          className={`hidden lg:block w-full bg-white border-b border-gray-200 transition-all duration-300 ${
            isScrolled ? "sticky top-0 z-40 shadow-md py-0" : "relative py-1"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 flex items-stretch">

            {Object.entries(menuItems).map(([menu, items]) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 xl:px-4 py-4 text-[10px] xl:text-[11px] font-black tracking-[0.08em] xl:tracking-[0.1em] transition-all uppercase relative
                  ${openMenu === menu ? "text-red-600" : "text-gray-700 hover:text-red-600"}
                  ${menu === "DS+" ? "text-red-600" : ""}`}
                >
                  {menu}
                  <svg
                    className={`w-2.5 h-2.5 opacity-40 transition-transform duration-300 ${openMenu === menu ? "rotate-180 opacity-100" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`absolute bottom-0 left-0 h-[3px] bg-red-600 transition-all duration-300 ${openMenu === menu ? "w-full" : "w-0"}`} />
                </button>

                {openMenu === menu && (
                  <div className="absolute left-0 top-full bg-white border-x border-b border-gray-100 shadow-2xl min-w-[220px] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="p-2 grid gap-0.5">
                      {items.map((item, index) => (
                        <Link
                          key={index}
                          to={`/${menuToPath(menu)}/${toSlug(item)}`}
                          className="group flex items-center justify-between px-4 py-3 text-[12.5px] font-bold text-gray-500 hover:text-red-600 hover:bg-red-50/50 rounded-sm transition-all"
                        >
                          {item}
                          <span className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Desktop Right Utility */}
            <div className="ml-auto flex items-center border-l border-gray-100 pl-4 gap-2">
              <Link
                to="/today"
                className="hidden sm:block px-4 xl:px-5 py-2 text-[10px] font-black text-white bg-black rounded-full hover:bg-red-600 transition-all uppercase tracking-widest"
              >
                Today's Edition
              </Link>
              <button className="p-3 text-gray-400 hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

          </div>
        </nav>

      </header>

      {/* 5. MOBILE DRAWER OVERLAY */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 z-50 h-full w-[85vw] max-w-[340px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#fafafa] flex-shrink-0">
          <div className="flex flex-col">
            <span className="text-[13px] font-black tracking-widest text-gray-800 uppercase">NNN</span>
            <span className="text-[8px] tracking-[0.3em] text-gray-400 uppercase font-bold">Modern News Network</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Menu Items — Scrollable */}
        <div className="flex-1 overflow-y-auto py-2">
          {Object.entries(menuItems).map(([menu, items]) => (
            <div key={menu} className="border-b border-gray-50 last:border-0">
              {/* Accordion Toggle */}
              <button
                onClick={() =>
                  setMobileAccordion(mobileAccordion === menu ? null : menu)
                }
                className={`w-full flex items-center justify-between px-5 py-4 text-[11.5px] font-black tracking-[0.12em] uppercase transition-colors
                  ${mobileAccordion === menu ? "text-red-600 bg-red-50/50" : "text-gray-700 hover:text-red-600 hover:bg-gray-50"}
                  ${menu === "DS+" ? "text-red-600" : ""}`}
              >
                {menu}
                <svg
                  className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${mobileAccordion === menu ? "rotate-180 opacity-100" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Sub-items */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileAccordion === menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-gray-50/70 py-1">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      to={`/${menuToPath(menu)}/${toSlug(item)}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-7 py-2.5 text-[12px] font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50/50 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="flex-shrink-0 border-t border-gray-100 px-5 py-4 flex items-center gap-3 bg-[#fafafa]">
          <Link
            to="/today"
            onClick={() => setMobileOpen(false)}
            className="flex-1 text-center py-2.5 text-[10px] font-black text-white bg-black rounded-full hover:bg-red-600 transition-all uppercase tracking-widest"
          >
            Today's Edition
          </Link>
          <Link
            to="/epaper"
            onClick={() => setMobileOpen(false)}
            className="flex-1 text-center py-2.5 text-[10px] font-black text-black border-2 border-black rounded-full hover:border-red-600 hover:text-red-600 transition-all uppercase tracking-widest"
          >
            E-Paper
          </Link>
          <Link
            to="/bangla"
            onClick={() => setMobileOpen(false)}
            className="py-2.5 px-3 text-[13px] font-black text-red-600 border-2 border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
          >
            বাংলা
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;