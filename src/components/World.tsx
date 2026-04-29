import { useState } from "react";

const worldArticles = [
  { id: 1, title: "Dolor Purus Non Enim Praesent Elementum Facilisis", date: "NOV 16, 2023" },
  { id: 2, title: "Dignissim Suspendisse Inest Ante Inibh Mauris", date: "NOV 16, 2023" },
  { id: 3, title: "Scelerisque Eultrices Vitae Auctor Pellentesque", date: "NOV 16, 2023" },
  { id: 4, title: "Lacus Sedturpis Tincidunt Odaliquet Risus", date: "NOV 14, 2023" },
  { id: 5, title: "Phasellus Vestibulum Lorem Sed Risus Ultricies", date: "NOV 14, 2023" },
  { id: 6, title: "Pellentesque Eliteget Bravida Cumsociis Natoque", date: "NOV 10, 2023" },
];

const hotVideos = [
  {
    id: 1,
    title: "Pellentesque Pulvinar Pellentesque Habitant Morbi",
    date: "NOV 17, 2023",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=220&fit=crop",
  },
  {
    id: 2,
    title: "Dignissim Suspendisse Inest Ante Inibh Mauris",
    date: "NOV 16, 2023",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=220&fit=crop",
  },
  {
    id: 3,
    title: "Pellentesque Eliteget Bravida Cumsociis Natoque",
    date: "NOV 10, 2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=220&fit=crop",
  },
];

function PlayIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <polygon points="6,3 20,12 6,21" />
    </svg>
  );
}

export default function World() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=900&fit=crop')",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Badge + Date */}
          <div className="flex items-center gap-4 mb-5">
            <span className="bg-green-500 text-white text-[11px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-sm">
              WORLD
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs tracking-wide font-sans">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              NOV 16, 2023
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6 max-w-xl">
            Risus Pretium Quam Vulputate Dignissim Suspendisse
          </h1>

          {/* Excerpt */}
          <p className="text-sm leading-relaxed text-gray-300 max-w-lg mb-10 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh.
            Nullam non nisi est sit amet facilisis magna. Pellentesque pulvinar pellentesque
            habitant...
          </p>

          {/* More From World Category */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] text-gray-500 uppercase font-sans mb-4 pb-2.5 border-b border-white/10">
              MORE FROM WORLD CATEGORY
            </p>

            <div className="grid grid-cols-2 gap-x-8">
              {worldArticles.map((article, i) => (
                <div
                  key={article.id}
                  className={`py-3.5 cursor-pointer ${
                    i < worldArticles.length - 2 ? "border-b border-white/[0.07]" : ""
                  }`}
                >
                  <p className="text-[13px] font-bold text-gray-200 leading-snug mb-1 hover:text-green-400 transition-colors duration-200">
                    {article.title}
                  </p>
                  <p className="text-[11px] text-gray-600 font-sans tracking-wider">
                    {article.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Video */}
          <div className="mt-9 flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
              <PlayIcon size={13} />
            </div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-300 font-sans">
              FEATURED VIDEO
            </span>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Hot Videos ── */}
        <div>
          <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] text-gray-500 uppercase font-sans mb-4">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#22c55e">
              <path d="M12 2C12 2 7 7.5 7 13a5 5 0 0010 0C17 7.5 12 2 12 2zm0 15a3 3 0 01-3-3c0-2.5 2-5.5 3-7 1 1.5 3 4.5 3 7a3 3 0 01-3 3z" />
            </svg>
            HOT VIDEOS
          </p>

          <div className="flex flex-col gap-6">
            {hotVideos.map((video) => (
              <div
                key={video.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Thumbnail */}
                <div className="relative rounded-md overflow-hidden mb-2.5">
                  <img
                    src={video.image}
                    alt={video.title}
                    className={`w-full h-44 object-cover block transition-transform duration-500 ${
                      hoveredVideo === video.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      hoveredVideo === video.id ? "bg-black/40" : "bg-black/20"
                    }`}
                  />
                  {/* Play button */}
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-white/70 bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-200 ${
                      hoveredVideo === video.id ? "scale-110 bg-white/40" : ""
                    }`}
                  >
                    <PlayIcon size={15} />
                  </div>
                </div>

                {/* Meta */}
                <h3
                  className={`text-sm font-bold leading-snug mb-1.5 transition-colors duration-200 ${
                    hoveredVideo === video.id ? "text-green-400" : "text-gray-100"
                  }`}
                >
                  {video.title}
                </h3>
                <p className="text-[11px] text-gray-600 font-sans tracking-wider">{video.date}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}