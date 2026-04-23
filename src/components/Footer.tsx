export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 text-gray-700">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Brand */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <h1 className="text-2xl font-bold text-black">Nazihar News Network</h1>
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-500 mb-8">
          বাংলাদেশের সর্বাধিক জনপ্রিয় সংবাদমাধ্যম
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">

          <div>
            <h3 className="font-semibold text-black mb-3 border-b pb-1 border-red-500 inline-block">
              নাগরিক সংবাদ
            </h3>
            <ul className="space-y-2">
              <li>ইপেপার</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-3 border-b pb-1 border-red-500 inline-block">
              কিশোর আলো
            </h3>
            <ul className="space-y-2">
              <li>প্রথমা</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-3 border-b pb-1 border-red-500 inline-block">
              বিজ্ঞানচিন্তা
            </h3>
            <ul className="space-y-2">
              <li>মোবাইল ভাস</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-3 border-b pb-1 border-red-500 inline-block">
              প্রথম আলো ট্রাস্ট
            </h3>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-3 border-b pb-1 border-red-500 inline-block">
              বন্ধুসভা
            </h3>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-3 border-b pb-1 border-red-500 inline-block">
              চিরন্তন ১৯৯১
            </h3>
          </div>

        </div>
      </div>

      {/* Middle Social Section */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social */}
          <div>
            <p className="text-sm mb-3">অনুসরণ করুন</p>
            <div className="flex gap-3 text-white">
              <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
              <div className="w-10 h-10 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Apps */}
          <div className="text-right">
            <p className="text-sm mb-3">মোবাইল অ্যাপ ডাউনলোড করুন</p>
            <div className="flex gap-3">
              <div className="w-32 h-10 bg-gray-200 rounded"></div>
              <div className="w-32 h-10 bg-gray-200 rounded"></div>
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