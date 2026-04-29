import React, { useState, useEffect } from "react";
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

const menuItems = {
  NEWS: ["Breaking News", "Politics", "International", "National", "Economy", "Technology"],
  OPINION: ["Editorials", "Columns", "Analysis", "Letters", "Commentary"],
  BUSINESS: ["Markets", "Economy", "Companies", "Startups", "Real Estate", "Finance"],
  SPORTS: ["Cricket", "Football", "Tennis", "Badminton", "Olympics", "Other Sports"],
  LIFESTYLE: ["Fashion", "Health", "Food", "Travel", "Relationships", "Parenting"],
  CULTURE: ["Arts", "Books", "Film", "Music", "Theatre", "Heritage"],
  "SLOW READS": ["Features", "Interviews", "Long-form", "Photo Stories"],
  YOUTH: ["Education", "Career", "Student Life", "Youth Issues"],
  "DS+": ["Premium Articles", "Investigations", "Special Reports", "Newsletters"],
};

const trendingItems = [
  { 
    label: "Top Story", 
    text: "Will India hand over Hasina to Bangladesh?",
    img: "/trend1.jpg"
  },
  { 
    label: "Climate", 
    text: "El Niño may return, rising heat concerns",
    img: "/trend2.jpg"
  },
  { 
    label: "Politics", 
    text: "We still hope reforms will arise from parliament",
    img: "/trend3.jpg"
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white font-sans">
      
      {/* 1. TOP UTILITY STRIP */}
      <div className="border-b border-gray-100 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-gray-400">
          <div className="flex gap-4">
            <span>SUNDAY, APRIL 26, 2026</span>
            <span className="text-red-600 border-l pl-4 border-gray-200">DHAKA EDITION</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="/epaper" className="hover:text-black transition-colors uppercase">E-Paper</Link>
            <Link to="/bangla" className="text-red-600 font-black hover:opacity-70 transition-opacity">বাংলা</Link>
          </div>
        </div>
      </div>

      {/* 2. HERO BRANDING SECTION (Logo + Trending) */}
      <div className="max-w-7xl mx-auto px-5 py-6 flex items-center justify-between gap-10">
        
        {/* LOGO */}
        <Link to="/" className="flex-shrink-0 group flex flex-col items-start">
          <div className="h-16 w-auto overflow-hidden">
            <img 
              src="/nnn-logo.png" 
              alt="NNN Logo" 
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <p className="text-[8px] tracking-[0.5em] text-gray-400 mt-2 uppercase font-bold group-hover:text-red-600 transition-colors">
            Modern News Network
          </p>
        </Link>

        {/* Trending Micro-Cards */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {trendingItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 max-w-[220px] group cursor-pointer border-l border-gray-100 pl-6 first:border-0">
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
      </div>

      {/* 3. BREAKING NEWS STRIP (Positioned above Menu) */}
      <div className="bg-red-600 h-10 flex items-center shadow-lg relative z-10 overflow-hidden">
        <div className="px-6 h-full flex items-center bg-black text-white text-[10px] font-black tracking-[0.2em] uppercase skew-x-[-15deg] -ml-3 mr-4 shadow-xl">
          <span className="skew-x-[15deg]">Breaking</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-[13px] font-medium text-white/95 tracking-wide">
            Parliament session begins amid calls for electoral reform · Bangladesh trade surplus narrows in Q1 · National cricket team announces squad for upcoming series · 
          </div>
        </div>
      </div>

      {/* 4. NAVIGATION & SUBMENU (Sticky) */}
      <nav className={`w-full bg-white z- border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "sticky top-0 shadow-md py-0" : "relative py-1"
      }`}>
        <div className="max-w-7xl mx-auto px-5 flex items-stretch">
          
          {Object.entries(menuItems).map(([menu, items]) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* Main Menu Button */}
              <button
                className={`flex items-center gap-1.5 px-4 py-4 text-[11px] font-black tracking-[0.1em] transition-all uppercase relative
                ${openMenu === menu ? "text-red-600" : "text-gray-700 hover:text-red-600"}
                ${menu === "DS+" ? "text-red-600" : ""}`}
              >
                {menu}
                <svg className={`w-2.5 h-2.5 opacity-40 transition-transform duration-300 ${openMenu === menu ? "rotate-180 opacity-100" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
                
                {/* Active Underline Animation */}
                <span className={`absolute bottom-0 left-0 h-[3px] bg-red-600 transition-all duration-300 ${openMenu === menu ? "w-full" : "w-0"}`} />
              </button>

              {/* Submenu Dropdown (Preserved Original Logic) */}
              {openMenu === menu && (
                <div className="absolute left-0 top-full bg-white border-x border-b border-gray-100 shadow-2xl min-w-[220px] animate-in fade-in slide-in-from-top-1 duration-200">
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

          {/* Right Side Utility */}
          <div className="ml-auto flex items-center border-l border-gray-100 pl-4 gap-2">
            <Link to="/today" className="hidden sm:block px-5 py-2 text-[10px] font-black text-white bg-black rounded-full hover:bg-red-600 transition-all uppercase tracking-widest">
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
  );
};

export default Header;