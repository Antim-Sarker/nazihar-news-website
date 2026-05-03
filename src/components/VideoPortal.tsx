import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface Video {
  id: string;
  title: string;
  url: string;
  thumb: string;
  date: string;
}

const VideoPortal = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fallbackVideos: Video[] = [
      {
        id: "ysz5S6PUM-U",
        title: "Breaking News Report",
        url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        thumb: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
        date: "Today",
      },
      {
        id: "jNQXAC9IVRw",
        title: "Tech News Update",
        url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
        thumb: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
        date: "Yesterday",
      },
      {
        id: "dQw4w9WgXcQ",
        title: "Global News Highlights",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        date: "2 days ago",
      },
    ];

    const fetchVideos = async () => {
      try {
        const channelId = "UC16niRr50-MSBwiO3YDb3RA";
        const rssURL = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            rssURL
          )}`
        );

        const data = await res.json();

        if (!data.items || data.items.length === 0)
          throw new Error("API empty");

        const formatted: Video[] = data.items.map((item: any) => {
          const videoId = item.guid?.split(":").pop();
          return {
            id: videoId,
            title: item.title,
            url: `https://www.youtube.com/watch?v=${videoId}`,
            thumb: item.thumbnail,
            date: new Date(item.pubDate).toLocaleDateString(),
          };
        });

        setVideos(formatted);
        setActiveVideo(formatted[0]);
      } catch {
        console.warn("⚠️ Using fallback videos");
        setVideos(fallbackVideos);
        setActiveVideo(fallbackVideos[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (video: Video) => {
    setActiveVideo(video);

    if (playerRef.current) {
      playerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (loading) {
    return (
      <div className="bg-[#0f0f0f] h-100 flex items-center justify-center text-white">
        Loading videos...
      </div>
    );
  }

  if (!activeVideo) return null;

  return (
    <section className="bg-[#0f0f0f] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-xl font-bold mb-6 uppercase">
          Visual Reports
        </h2>

        {/* MAIN SECTION */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">

          {/* PLAYER */}
          <div className="w-full lg:w-[70%]" ref={playerRef}>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
              <ReactPlayer
                src={activeVideo.url}
                controls
                width="100%"
                height="100%"
              />
            </div>

            <h3 className="mt-3 text-lg font-semibold">
              {activeVideo.title}
            </h3>
            <p className="text-xs text-gray-400">
              {activeVideo.date}
            </p>
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-[30%] bg-[#161616] rounded-lg overflow-hidden h-[500px] flex flex-col">
            <div className="bg-red-600 px-4 py-2 text-xs font-bold uppercase">
              Up Next
            </div>

            <div className="overflow-y-auto flex-1">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoSelect(video)}
                  className={`flex gap-3 p-3 cursor-pointer border-b border-white/10 ${
                    activeVideo.id === video.id
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
                >
                  <img
                    src={video.thumb}
                    className="w-24 h-14 object-cover rounded"
                    alt=""
                  />
                  <div>
                    <p className="text-xs line-clamp-2">
                      {video.title}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      {video.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* MORE VIDEOS */}
        <div>
          <h3 className="text-sm text-gray-400 uppercase mb-4">
            More Videos
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className="cursor-pointer group"
              >
                <div className="aspect-video rounded overflow-hidden mb-2">
                  <img
                    src={video.thumb}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                    alt=""
                  />
                </div>
                <p className="text-xs line-clamp-2 group-hover:text-red-500">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoPortal;