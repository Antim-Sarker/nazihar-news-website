import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react"

export const Route = createFileRoute('/news/politics')({
  component: PoliticsPage,
})

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[11px] font-medium text-red-600 uppercase">
        {title}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

// 🧠 Safe image handler
const getImage = (item: any) =>
  item.thumbnail ||
  item.enclosure?.link ||
  item.enclosure?.url ||
  "https://via.placeholder.com/150"

function PoliticsPage() {
  const [rssNews, setRssNews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://www.prothomalo.com/stories.rss"
    )
      .then(res => res.json())
      .then(data => {
        setRssNews(data.items || [])
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <h1 className="text-2xl font-semibold">Politics News</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-6">

        <SectionLabel title="Latest Politics News" />

        {/* News List */}
        <div className="bg-white border divide-y">

          {loading && (
            <p className="p-4 text-sm text-gray-400">
              Loading news...
            </p>
          )}

          {rssNews.slice(0, 10).map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 hover:bg-gray-50"
            >

              {/* Image */}
              <img
                src={getImage(item)}
                className="w-24 h-16 object-cover rounded"
              />

              {/* Content */}
              <div className="flex-1">

                {/* Title */}
                <h3 className="text-sm font-semibold line-clamp-2">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {item.description ||
                    item.contentSnippet ||
                    "No description available"}
                </p>

                {/* Date */}
                <p className="text-[11px] text-gray-400 mt-1">
                  {item.pubDate
                    ? new Date(item.pubDate).toLocaleString()
                    : "No date"}
                </p>

              </div>
            </a>
          ))}

        </div>
      </div>
    </div>
  )
}