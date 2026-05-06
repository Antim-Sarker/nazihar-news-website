import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from "react";

export const Route = createFileRoute('/news/breaking-news')({
  component: PoliticsPage,
})

const mostRead = [
  { title: 'Will India hand over Hasina? Dhaka awaits response' },
  { title: 'Parliament passes emergency border security bill' },
  { title: 'Opposition leader calls for resignation' },
  { title: 'Electoral reform explained' },
  { title: 'Former PM faces new graft charges' },
]

const tags = ['Elections', 'Parliament', 'Reform', 'Diplomacy', 'Parties', 'Cabinet']

function parseProthomAloRSS(xmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, 'text/xml');
  const items = [...doc.querySelectorAll('item')];

  return items.map(item => {
    const title = item.querySelector('title')?.textContent ?? '';
    const linkNode = item.querySelector('link');
    const link = linkNode?.nextSibling?.textContent?.trim() || linkNode?.textContent?.trim() || '#';
    const desc = (item.querySelector('description')?.textContent ?? '')
      .replace(/<[^>]+>/g, '').trim();
    const pubDate = item.querySelector('pubDate')?.textContent ?? '';
    const category = item.querySelector('category')?.textContent ?? '';

    const thumbnail = item.querySelector('thumbnail');
    const mediaContent = item.querySelector('content[url]');
    const img =
      thumbnail?.getAttribute('url') ||
      mediaContent?.getAttribute('url') ||
      '';

    return { title, link, desc, pubDate, category, img };
  });
}

// Helper: builds the search params for the internal article page
function articleSearch(item: {
  link: string; title: string; img: string;
  category: string; pubDate: string; desc: string;
}) {
  return {
    url: item.link,
    title: item.title,
    img: item.img,
    category: item.category,
    pubDate: item.pubDate,
    desc: item.desc,
  }
}

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[11px] font-medium text-red-600 uppercase">{title}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

function PoliticsPage() {

  const [rssNews, setRssNews] = useState<{
    title: string;
    link: string;
    desc: string;
    pubDate: string;
    category: string;
    img: string;
  }[]>([]);

  const [rssLoading, setRssLoading] = useState(true);
  const [rssError, setRssError] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (i: number) => {
    setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
  };

  useEffect(() => {
    fetch('/api/rss')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.text();
      })
      .then((xml: string) => {
        const articles = parseProthomAloRSS(xml);
        setRssNews(articles);
        setRssLoading(false);
      })
      .catch(err => {
        console.error('Prothom Alo RSS error:', err);
        setRssError(true);
        setRssLoading(false);
      });
  }, []);

  const featured = rssNews[0];
  const topStories = rssNews.slice(1, 4);
  const latestNews = rssNews.slice(4, 10);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <h1 className="text-2xl font-semibold">Breaking News</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-6 flex gap-6">

        {/* MAIN */}
        <main className="flex-1 space-y-8">

          {/* Featured */}
          {rssLoading ? (
            <div className="bg-white border h-72 animate-pulse" />
          ) : featured ? (
            <Link
              to="/news/article"
              search={articleSearch(featured)}
              className="block bg-white border hover:opacity-95 transition-opacity"
            >
              {featured.img ? (
                <img
                  src={featured.img}
                  className="w-full h-72 object-cover"
                  alt=""
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              ) : (
                <div className="w-full h-72 bg-gray-100" />
              )}
              <div className="p-5">
                {featured.category && (
                  <span className="text-[11px] font-medium text-red-500 uppercase">{featured.category}</span>
                )}
                <h2 className="text-xl font-semibold mt-1">{featured.title}</h2>
                {featured.desc && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{featured.desc}</p>
                )}
              </div>
            </Link>
          ) : null}

          {/* Top Stories */}
          <div>
            <SectionLabel title="Top Stories" />
            {rssLoading ? (
              <div className="grid grid-cols-3 gap-4">
                {[0,1,2].map(i => (
                  <div key={i} className="bg-white border h-48 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {topStories.map((item, i) => (
                  <Link
                    key={i}
                    to="/news/article"
                    search={articleSearch(item)}
                    className="block bg-white border hover:opacity-95 transition-opacity"
                  >
                    {item.img ? (
                      <img
                        src={item.img}
                        className="h-36 w-full object-cover"
                        alt=""
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    ) : (
                      <div className="h-36 w-full bg-gray-100" />
                    )}
                    <div className="p-3">
                      {item.category && (
                        <span className="text-[10px] font-medium text-red-500 uppercase">{item.category}</span>
                      )}
                      <h3 className="text-sm font-semibold mt-0.5 line-clamp-3">{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Latest News list */}
          <div>
            <SectionLabel title="Latest News" />
            <div className="bg-white border divide-y">

              {rssLoading && (
                <p className="p-4 text-sm text-gray-400">Loading news...</p>
              )}

              {rssError && (
                <p className="p-4 text-sm text-red-400">Failed to load news. Please try again later.</p>
              )}

              {!rssLoading && !rssError && latestNews.map((item, i) => (
                <div key={i} className="p-4 hover:bg-gray-50">
                  <div className="flex gap-4">

                    {/* Image — clicking goes to article page */}
                    <Link to="/news/article" search={articleSearch(item)} className="flex-shrink-0">
                      {item.img ? (
                        <img
                          src={item.img}
                          alt=""
                          className="w-28 h-20 object-cover rounded"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                        />
                      ) : (
                        <div className="w-28 h-20 bg-gray-100 rounded" />
                      )}
                    </Link>

                    {/* Text */}
                    <div className="flex-1 min-w-0">

                      {/* Category + date */}
                      <div className="flex items-center gap-2 mb-1">
                        {item.category && (
                          <span className="text-[11px] font-medium text-red-500 uppercase">{item.category}</span>
                        )}
                        <span className="text-[11px] text-gray-400">
                          {item.pubDate ? new Date(item.pubDate).toLocaleString('bn-BD') : ''}
                        </span>
                      </div>

                      {/* Title — clicking goes to article page */}
                      <Link to="/news/article" search={articleSearch(item)}>
                        <h3 className="text-sm font-semibold leading-snug mb-1 hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>
                      </Link>

                      {/* Description */}
                      {item.desc && (
                        <p className={`text-xs text-gray-500 leading-relaxed ${expanded[i] ? '' : 'line-clamp-2'}`}>
                          {item.desc}
                        </p>
                      )}

                      {/* Read more / Full article */}
                      <div className="flex items-center gap-3 mt-2">
                        {item.desc && item.desc.length > 120 && (
                          <button
                            onClick={() => toggleExpand(i)}
                            className="text-xs text-red-600 hover:text-red-700 font-medium"
                          >
                            {expanded[i] ? 'Read less ↑' : 'Read more ↓'}
                          </button>
                        )}
                        <Link
                          to="/news/article"
                          search={articleSearch(item)}
                          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Full article →
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Tags */}
          <div>
            <SectionLabel title="Tags" />
            <div className="flex gap-2 flex-wrap">
              {tags.map(tag => (
                <span key={tag} className="px-3 py-1 border text-xs">{tag}</span>
              ))}
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="w-72">
          <div className="bg-white border">
            <div className="p-3 font-semibold">Most Read</div>
            {mostRead.map((item, i) => (
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