import React, { useState } from "react";
import { Link } from "@tanstack/react-router";

// 🔥 Convert text → URL slug
const toSlug = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-");

// 🔥 Handle special menu names
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

  return (
    <header className="border-b bg-white">

      {/* TOP */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src="/nnn-logo.png" alt="NNN Logo" className="w-36 h-24 object-contain" />
        </div>

        {/* Trending */}
        <div className="hidden lg:flex items-stretch gap-0 flex-1 justify-end">
          {trendingItems.map((item, i) => (
            <div key={i} className={`flex items-center gap-3 px-5 max-w-[220px] ${i > 0 ? "border-l" : ""}`}>
              <img
  src={item.img || "/placeholder.jpg"}
  alt=""
  className="w-14 h-10 object-cover rounded flex-shrink-0"
/>
              <div>
                <p className="text-[10px] font-medium text-red-600 uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-xs font-medium text-gray-800 leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DATE */}
      <div className="max-w-7xl mx-auto px-5 py-1.5 flex items-center justify-between border-t border-gray-100">
        <span className="text-[11px] tracking-widest text-gray-400">
          THURSDAY, APRIL 24, 2026
        </span>
        <span className="text-[11px] font-medium text-red-600 border border-red-600 px-2 py-0.5 rounded-sm tracking-wide">
          DHAKA EDITION
        </span>
      </div>

      {/* BREAKING */}
      <div className="bg-red-600 px-5 py-1.5 flex items-center gap-3 overflow-hidden">
        <span className="text-[10px] text-white font-medium tracking-widest bg-black/20 px-2 py-0.5 rounded-sm flex-shrink-0">
          BREAKING
        </span>

        <div className="relative w-full overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-xs text-white/90">
            Parliament session begins amid calls for electoral reform ·
            Bangladesh trade surplus narrows in Q1 ·
            National cricket team announces squad ·
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="border-t-2 border-red-600">
        <div className="max-w-7xl mx-auto px-5 flex items-stretch">

          {Object.entries(menuItems).map(([menu, items]) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* MAIN MENU */}
              <button
                className={`flex items-center gap-1 px-3 py-3 text-[11.5px] font-medium tracking-wide border-b-2 transition-colors whitespace-nowrap
                ${
                  openMenu === menu
                    ? "text-red-600 border-red-600"
                    : "text-gray-700 border-transparent hover:text-red-600 hover:border-red-600"
                } ${menu === "DS+" ? "text-red-600" : ""}`}
              >
                {menu}
                <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* DROPDOWN */}
              {openMenu === menu && (
                <div className="absolute left-0 top-full bg-white border border-t-2 border-t-red-600 shadow-md min-w-44 z-50">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      to={`/${menuToPath(menu)}/${toSlug(item)}`}
                      className="block px-4 py-2.5 text-[12.5px] text-gray-500 border-b border-gray-50 hover:text-red-600 hover:bg-gray-50 hover:pl-5 transition-all"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center border-l border-gray-100">
            <Link to="/bangla" className="px-3 py-3 text-[11.5px] text-gray-400 hover:text-red-600">
              বাংলা
            </Link>
            <Link to="/epaper" className="px-3 py-3 text-[11.5px] text-gray-400 hover:text-red-600">
              E-PAPER
            </Link>
            <Link to="/today" className="px-3 py-3 text-[11.5px] font-medium text-red-600 border-l">
              TODAY'S NEWS
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;