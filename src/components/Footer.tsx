import { useState } from "react";

const socialLinks = [
  { label: "f", href: "https://facebook.com", title: "Facebook" },
  { label: "𝕏", href: "https://twitter.com", title: "Twitter" },
  { label: "◎", href: "https://instagram.com", title: "Instagram" },
  { label: "▶", href: "https://youtube.com", title: "YouTube" },
];

const footerLinks = [
  { heading: "Citizen News", items: ["E-Paper", "Live TV"] },
  { heading: "Youth & Lifestyle", items: ["Prothoma", "Kishor Alo"] },
  { heading: "Science & Tech", items: ["Science Thought", "Mobile Vas"] },
  { heading: "NNN Trust", items: ["Events", "Donations"] },
  { heading: "Community", items: ["Friends Society", "Forums"] },
  { heading: "Legacy", items: ["Eternal 1991", "Archives"] },
];

const policyLinks = [
  "আমাদের সম্পর্কে", "বিজ্ঞাপন", "সার্কুলেশন",
  "নীতি ও শর্ত", "যোগাযোগ", "নিউজলেটার",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="bg-white text-gray-600 w-full font-sans border-t border-gray-100">

      {/* Gold top rule */}
      <div className="w-full h-[3px] opacity-70"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }}
      />

      {/* Hero: brand + links */}
      <div className="flex flex-wrap gap-8 items-start justify-between px-10 pt-12 pb-8 border-b border-gray-100">

        {/* Brand */}
        <div className="max-w-[280px]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/nnn-logo.png"
              alt="NNN Logo"
              className="w-16 h-18 object-contain"
            />
            <div className="text-lg font-bold text-gray-900 leading-tight tracking-wide font-serif">
              Nazihar News Network
            </div>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-[2px] leading-relaxed mb-6">
            The nation's most trusted<br />& popular news source
          </p>
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer"
                title={s.title}
                className="w-[34px] h-[34px] border border-gray-200 rounded flex items-center justify-center text-gray-400 text-sm font-medium no-underline transition-colors duration-200 hover:border-[#c9a84c] hover:text-[#c9a84c]">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-8">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-medium tracking-[2.5px] uppercase text-[#c9a84c] mb-3">
                {col.heading}
              </h4>
              <ul className="list-none p-0 m-0 space-y-1">
                {col.items.map((item) => (
                  <li key={item}
                    className="text-[13px] text-gray-400 py-1 cursor-pointer transition-colors duration-200 hover:text-gray-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Mid: app badges + newsletter */}
      <div className="flex flex-wrap gap-6 items-center justify-between px-10 py-8 border-b border-gray-100">

        <div>
          <p className="text-[10px] uppercase tracking-[2.5px] text-gray-400 mb-3">
            Experience our app
          </p>
          <div className="flex gap-3 flex-wrap">
            {[
              { icon: "▶", sub: "Get it on", main: "Google Play" },
              { icon: "⌘", sub: "Download on the", main: "App Store" },
            ].map((b) => (
              <a key={b.main} href="#"
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-md px-4 py-2 no-underline transition-colors duration-200 hover:border-[#c9a84c]">
                <span className="text-lg text-gray-700">{b.icon}</span>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase tracking-[1px]">{b.sub}</div>
                  <div className="text-[13px] font-medium text-gray-800">{b.main}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-[260px] w-full">
          <p className="text-[10px] uppercase tracking-[2.5px] text-gray-400 mb-3">
            Subscribe to newsletter
          </p>
          {subscribed ? (
            <p className="text-[13px] text-[#c9a84c]">Thanks for subscribing!</p>
          ) : (
            <div className="flex border border-gray-200 rounded overflow-hidden">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border-none outline-none px-3 py-2 text-xs text-gray-600 placeholder-gray-300 flex-1 min-w-0"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#c9a84c] text-white text-[11px] font-medium px-4 py-2 border-none cursor-pointer tracking-wide hover:bg-[#b8943e] transition-colors duration-200">
                Subscribe
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Policy links */}
      <div className="flex flex-wrap gap-4 px-10 py-5 border-b border-gray-100">
        {policyLinks.map((link) => (
          <span key={link}
            className="text-[11px] text-gray-400 cursor-pointer tracking-wide transition-colors duration-200 hover:text-gray-700">
            {link}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex flex-wrap gap-2 items-center justify-between px-10 py-5">
        <p className="text-[11px] text-gray-400 tracking-wide">
          © 2026 Nazihar News Network · Powered by Nazihar Group
        </p>
        <span className="text-[10px] text-gray-400 border border-gray-200 rounded-full px-3 py-1 tracking-widest">
          Est. 1991
        </span>
      </div>

    </footer>
  );
}