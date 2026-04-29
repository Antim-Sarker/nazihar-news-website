import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";

export const Route = createFileRoute('/news/politics')({
  component: PoliticsPage,
})

const featuredStory = {
  category: 'Politics',
  title: 'Parliament session opens amid sweeping calls for electoral reform across the nation',
  desc: 'Lawmakers gathered Tuesday as opposition parties presented a unified front demanding changes to the electoral commission before the next general election.',
  author: 'Rafiq Ahmed',
  time: '2 hours ago',
  img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80',
  readTime: '5 min read',
}

const topStories = [
  {
    category: 'Politics',
    title: 'Opposition coalition finalises joint candidate list ahead of by-elections',
    desc: 'Three major opposition parties have reached a seat-sharing agreement covering 14 constituencies.',
    time: '1 hour ago',
    img: 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=400&q=80',
  },
  {
    category: 'Politics',
    title: 'President signs landmark constitutional amendment into law',
    desc: 'The amendment expands judicial independence provisions.',
    time: '3 hours ago',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80',
  },
  {
    category: 'Politics',
    title: 'Local government reform bill draws fierce debate',
    desc: 'Changes could reshape municipal budgets.',
    time: '4 hours ago',
    img: 'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?w=400&q=80',
  },
]

const mostRead = [
  { title: 'Will India hand over Hasina? Dhaka awaits response', reads: '12.4k' },
  { title: 'Parliament passes emergency border security bill', reads: '9.8k' },
  { title: 'Opposition leader calls for resignation', reads: '8.1k' },
  { title: 'Electoral reform explained', reads: '6.7k' },
  { title: 'Former PM faces new graft charges', reads: '5.3k' },
]

const tags = ['Elections','Parliament','Reform','Diplomacy','Parties','Cabinet']

function SectionLabel({ title }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[11px] font-medium text-red-600 uppercase">{title}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

function PoliticsPage() {

  const [rssNews, setRssNews] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://rss.app/feeds/Ztws5xHr5oPGytDU.xml")
      .then(res => res.json())
      .then(data => setRssNews(data.items || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <h1 className="text-2xl font-semibold">Politics</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-6 flex gap-6">

        {/* MAIN */}
        <main className="flex-1 space-y-8">

          {/* Featured */}
          <div className="bg-white border">
            <img src={featuredStory.img} className="w-full h-72 object-cover"/>
            <div className="p-5">
              <h2 className="text-xl font-semibold">{featuredStory.title}</h2>
              <p className="text-sm text-gray-500">{featuredStory.desc}</p>
            </div>
          </div>

          {/* Top Stories */}
          <div>
            <SectionLabel title="Top Stories" />
            <div className="grid grid-cols-3 gap-4">
              {topStories.map((item,i)=>(
                <div key={i} className="bg-white border">
                  <img src={item.img} className="h-36 w-full object-cover"/>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ RSS Latest News */}
          <div>
            <SectionLabel title="Latest in Politics" />
            <div className="bg-white border divide-y">

              {rssNews.length === 0 && (
                <p className="p-4 text-sm text-gray-400">Loading news...</p>
              )}

              {rssNews.slice(0,6).map((item,i)=>(
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 p-4 hover:bg-gray-50"
                >
                  <img
                    src={item.thumbnail || item.enclosure?.link || "https://via.placeholder.com/150"}
                    className="w-20 h-14 object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-400">
                      {new Date(item.pubDate).toLocaleString()}
                    </p>
                  </div>
                </a>
              ))}

            </div>
          </div>

          {/* Tags */}
          <div>
            <SectionLabel title="Tags" />
            <div className="flex gap-2 flex-wrap">
              {tags.map(tag=>(
                <span key={tag} className="px-3 py-1 border text-xs">{tag}</span>
              ))}
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="w-72">

          <div className="bg-white border">
            <div className="p-3 font-semibold">Most Read</div>
            {mostRead.map((item,i)=>(
              <div key={i} className="p-3 border-t text-sm">
                {item.title}
              </div>
            ))}
          </div>

        </aside>

      </div>
    </div>
  )
}