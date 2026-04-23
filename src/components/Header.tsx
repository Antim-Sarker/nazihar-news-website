import React from "react";

const Header = () => {
  return (
    <header className="border-b bg-white">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="text-3xl font-serif font-bold">
          Nazihar News Network
        </div>

        {/* Trending News */}
        <div className="hidden lg:flex items-center gap-6">

          {/* News item 1 */}
          <div className="flex items-center gap-2 border-r pr-4">
            <img
              src="https://i.ibb.co/placeholder1.jpg"
              alt=""
              className="w-12 h-12 object-cover"
            />
            <p className="text-sm font-medium">
              Will India hand over Hasina?
            </p>
          </div>

          {/* News item 2 */}
          <div className="flex items-center gap-2 border-r pr-4">
            <img
              src="https://i.ibb.co/placeholder2.jpg"
              alt=""
              className="w-12 h-12 object-cover"
            />
            <p className="text-sm font-medium">
              El Niño may return, rising concerns over heat in Bangladesh
            </p>
          </div>

          {/* News item 3 */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/placeholder3.jpg"
              alt=""
              className="w-12 h-12 object-cover"
            />
            <p className="text-sm font-medium">
              We still hope a solution on reforms will arise out of parliament
            </p>
          </div>

        </div>
      </div>

      {/* DATE */}
      <div className="max-w-7xl mx-auto px-4 pb-2 text-sm text-gray-600">
        THURSDAY, APRIL 23, 2026
      </div>

      {/* NAVBAR */}
      <nav className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap gap-5 text-sm font-medium text-gray-700">

          <a href="#">NEWS</a>
          <a href="#">OPINION</a>
          <a href="#">BUSINESS</a>
          <a href="#">SPORTS</a>
          <a href="#">LIFESTYLE</a>
          <a href="#">CULTURE</a>
          <a href="#">SLOW READS</a>
          <a href="#">YOUTH</a>
          <a href="#">DS+</a>

          <div className="ml-auto flex gap-4">
            <a href="#">বাংলা</a>
            <a href="#">E-PAPER</a>
            <a href="#" className="text-blue-600 font-semibold">
              TODAY'S NEWS
            </a>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;