import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Article {
  title: string
  link: string
  desc: string
  pubDate: string
  category: string
  img: string
}

function parseRSS(xmlString: string): Article[] {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xmlString, 'text/xml')
  const items = [...doc.querySelectorAll('item')]
  return items.map(item => {
    const title = item.querySelector('title')?.textContent ?? ''
    const linkNode = item.querySelector('link')
    const link = linkNode?.nextSibling?.textContent?.trim() || linkNode?.textContent?.trim() || '#'
    const desc = (item.querySelector('description')?.textContent ?? '').replace(/<[^>]+>/g, '').trim()
    const pubDate = item.querySelector('pubDate')?.textContent ?? ''
    const category = item.querySelector('category')?.textContent ?? ''
    const thumbnail = item.querySelector('thumbnail')
    const mediaContent = item.querySelector('content[url]')
    const img = thumbnail?.getAttribute('url') || mediaContent?.getAttribute('url') || ''
    return { title, link, desc, pubDate, category, img }
  })
}

function articleSearch(item: Article) {
  return {
    url: item.link,
    title: item.title,
    img: item.img,
    category: item.category,
    pubDate: item.pubDate,
    desc: item.desc,
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    }).toUpperCase()
  } catch { return '' }
}

export default function Breaking() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/rss?category=breaking')
      .then(res => { if (!res.ok) throw new Error(); return res.text() })
      .then(xml => { setArticles(parseRSS(xml)); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  // article[0] = breaking hero, articles[1-4] = popular now grid
  const hero = articles[0]
  const popular = articles.slice(1, 5)

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10 font-sans bg-white text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ── LEFT: Breaking News ── */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-tight">Breaking News</h2>

          {loading || !hero ? (
            <div className="w-full h-[420px] bg-gray-200 animate-pulse rounded-sm" />
          ) : (
            <Link
              to="/news/article"
              search={articleSearch(hero)}
              className="relative rounded-sm overflow-hidden group cursor-pointer block"
            >
              {hero.img ? (
                <img
                  src={hero.img}
                  alt={hero.title}
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              ) : (
                <div className="w-full h-[420px] bg-gray-300" />
              )}

              {/* BREAKING badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-white text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                  BREAKING
                </span>
              </div>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pt-16 pb-5">
                {hero.category && (
                  <span className="inline-block bg-black/70 text-white text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm mb-3">
                    {hero.category}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white leading-snug mb-2 group-hover:text-orange-400 transition-colors duration-200">
                  {hero.title}
                </h3>
                <p className="text-xs text-gray-400 tracking-wide">{formatDate(hero.pubDate)}</p>
              </div>
            </Link>
          )}
        </div>

        {/* ── RIGHT: Popular Now ── */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-tight">Popular Now</h2>

          {loading ? (
            <div className="grid grid-cols-2 gap-5">
              {[0,1,2,3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="w-full h-[170px] bg-gray-200 rounded-sm mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5">
              {popular.map((article, i) => (
                <Link
                  key={i}
                  to="/news/article"
                  search={articleSearch(article)}
                  className="group cursor-pointer block"
                >
                  {/* Thumbnail */}
                  <div className="relative rounded-sm overflow-hidden mb-3">
                    {article.img ? (
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-[170px] object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    ) : (
                      <div className="w-full h-[170px] bg-gray-200" />
                    )}
                    {/* Category badge */}
                    {article.category && (
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-black/80 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                          {article.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <h3 className="text-sm font-bold leading-snug mb-1.5 group-hover:text-orange-500 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{article.desc}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}