import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 text-gray-700">

      {/* Top Section */}  
      <div className="max-w-7xl mx-auto px-4 py-10">

  {/* Brand */}
  <div className="flex items-center gap-2 mb-6">
    <img src="/nnn-logo.png" alt="NNN Logo" className="w-12 h-14 object-contain" />
    <h1 className="text-2xl font-bold text-black uppercase tracking-tight">Nazihar News Network</h1>
  </div>

  {/* Tagline */}
  <p className="text-sm text-gray-500 mb-8">
    The nation's most trusted and popular news source
  </p>

  {/* Links Grid */}
  <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">

    <div>
      <h3 className="font-semibold text-black mb-3 border-b border-transparent">
        Citizen News
      </h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-black cursor-pointer">E-Paper</li>
        <li className="hover:text-black cursor-pointer">Live TV</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-3">
        Youth & Lifestyle
      </h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-black cursor-pointer">Prothoma</li>
        <li className="hover:text-black cursor-pointer">Kishor Alo</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-3">
        Science & Tech
      </h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-black cursor-pointer">Science Thought</li>
        <li className="hover:text-black cursor-pointer">Mobile Vas</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-3">
        NNN Trust
      </h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-black cursor-pointer">Events</li>
        <li className="hover:text-black cursor-pointer">Donations</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-3">
        Community
      </h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-black cursor-pointer">Friends Society</li>
        <li className="hover:text-black cursor-pointer">Forums</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-3">
        Legacy
      </h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-black cursor-pointer">Eternal 1991</li>
        <li className="hover:text-black cursor-pointer">Archives</li>
      </ul>
    </div>

  </div>
</div>

      {/* Middle Social Section */}
      <div className="border-t border-gray-100 bg-gray-50/50">
  <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-10">

    {/* Social Media Section */}
    <div className="flex flex-col items-center md:items-start">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Connect with us</p>
      <div className="flex gap-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300">
          <FaFacebookF size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition-colors duration-300">
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#E4405F] transition-colors duration-300">
          <FaInstagram size={20} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#CD201F] transition-colors duration-300">
          <FaYoutube size={22} />
        </a>
      </div>
    </div>

    {/* Mobile Apps Section */}
    <div className="flex flex-col items-center md:items-end">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Experience our App</p>
      <div className="flex gap-3">
        
        {/* Google Play */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-9 w-auto"
          />
        </a>

        {/* App Store */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-9 w-auto"
          />
        </a>

      </div>
    </div>

  </div>
</div>

      {/* Bottom Links */}
      <div className="border-t text-xs text-gray-500 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
          <span>আমাদের সম্পর্কে</span>
          <span>বিজ্ঞাপন</span>
          <span>সার্কুলেশন</span>
          <span>নীতি ও শর্ত</span>
          <span>যোগাযোগ</span>
          <span>নিউজলেটার</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 py-4 border-t">
        Copyright © 2026 · Created by Nazihar News Network · Powered by Nazihar Group
      </div>

    </footer>
  )
}