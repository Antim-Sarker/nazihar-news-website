import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/news/economy')({
  component: RouteComponent,
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface Article {
  title: string
  link: string
  desc: string
  pubDate: string
  category: string
  img: string
}

// ─── RSS Parser ───────────────────────────────────────────────────────────────

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

// ─── Helpers ──────────────────────────────────────────────────────────────────

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
      month: 'long', day: 'numeric', year: 'numeric'
    }).toUpperCase()
  } catch { return '' }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SocialIcons() {
  return (
    <div className="flex gap-1.5 mt-2">
      {['f', 't', 'in', 'g+', 'p'].map((s) => (
        <span key={s} className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-[9px] font-bold flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
          {s}
        </span>
      ))}
    </div>
  )
}

function CategoryBadge({ name }: { name: string }) {
  return (
    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 mr-2">
      {name}
    </span>
  )
}

function ArticleSkeleton({ large = false }: { large?: boolean }) {
  return (
    <div className="animate-pulse">
      <div className={`bg-gray-200 rounded-sm mb-3 ${large ? 'h-52' : 'h-44'}`} />
      <div className="h-3 bg-gray-200 rounded w-1/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-full mb-1" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  )
}

function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  return (
    <article className="group">
      <Link to="/news/article" search={articleSearch(article)}>
        <div className={`overflow-hidden rounded-sm mb-3 ${large ? 'h-52' : 'h-44'} bg-gray-100`}>
          {article.img ? (
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
      </Link>
      <div className="flex gap-1 mb-1">
        <CategoryBadge name={article.category || 'Economy'} />
      </div>
      <h2 className={`font-bold leading-snug mb-2 group-hover:text-amber-600 transition-colors ${large ? 'text-lg' : 'text-base'}`}>
        <Link to="/news/article" search={articleSearch(article)}>{article.title}</Link>
      </h2>
      <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-2">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        {formatDate(article.pubDate)}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{article.desc}</p>
      <div className="flex items-center justify-between mt-3">
        <Link to="/news/article" search={articleSearch(article)}
          className="text-xs font-semibold uppercase tracking-wider text-gray-700 hover:text-amber-600 transition-colors">
          Read More
        </Link>
        <SocialIcons />
      </div>
    </article>
  )
}

function FeaturedStrip({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return <div className="grid grid-cols-3 gap-px bg-gray-200 mb-1 h-24 animate-pulse" />
  }
  return (
    <div className="grid grid-cols-3 gap-px bg-gray-200 mb-1">
      {articles.slice(0, 3).map((a, i) => (
        <Link key={i} to="/news/article" search={articleSearch(a)}
          className="relative h-24 overflow-hidden group cursor-pointer bg-black block">
          {a.img && (
            <img src={a.img} alt={a.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          )}
          <div className="absolute inset-0 p-3 flex flex-col justify-end">
            <span className="text-[9px] text-amber-400 font-semibold uppercase tracking-wider mb-0.5">
              {formatDate(a.pubDate)}
            </span>
            <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2">{a.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

function Breadcrumb() {
  return (
    <nav className="text-xs text-gray-400 mb-4 flex gap-1 items-center">
      <Link to="/" className="hover:text-amber-600">Home</Link>
      <span>/</span>
      <Link to="/news" className="hover:text-amber-600">News</Link>
      <span>/</span>
      <span className="text-gray-700">Economy</span>
    </nav>
  )
}

function FooterWidgets({ articles }: { articles: Article[] }) {
  const recentPosts = articles.slice(0, 3)
  const popularPosts = articles.slice(3, 6)

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-3 gap-6 text-sm">

      {/* Recent Posts */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((p, i) => (
            <Link key={i} to="/news/article" search={articleSearch(p)}
              className="flex gap-2 items-start group cursor-pointer">
              {p.img ? (
                <img src={p.img} alt="" className="w-14 h-14 object-cover rounded-sm flex-shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              ) : (
                <div className="w-14 h-14 bg-gray-200 rounded-sm flex-shrink-0" />
              )}
              <div>
                <p className="text-xs text-amber-500 uppercase font-semibold">{p.category || 'Economy'}</p>
                <p className="text-xs font-semibold leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">{p.title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(p.pubDate)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">Popular Posts</h3>
        <div className="space-y-3">
          {popularPosts.map((p, i) => (
            <Link key={i} to="/news/article" search={articleSearch(p)}
              className="flex gap-2 items-start group cursor-pointer">
              {p.img ? (
                <img src={p.img} alt="" className="w-14 h-14 object-cover rounded-sm flex-shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              ) : (
                <div className="w-14 h-14 bg-gray-200 rounded-sm flex-shrink-0" />
              )}
              <div>
                <p className="text-xs font-semibold leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">{p.title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(p.pubDate)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Trending — latest article as hero */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">Trending</h3>
        {articles[0] && (
          <Link to="/news/article" search={articleSearch(articles[0])}
            className="relative h-48 overflow-hidden rounded-sm group cursor-pointer block">
            {articles[0].img && (
              <img src={articles[0].img} alt="Trending"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
              <p className="text-white text-xs font-semibold leading-snug line-clamp-3">{articles[0].title}</p>
            </div>
          </Link>
        )}
      </div>

    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

function RouteComponent() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/rss?category=economy')
      .then(res => { if (!res.ok) throw new Error(); return res.text() })
      .then(xml => { setArticles(parseRSS(xml)); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      <FeaturedStrip articles={articles} />

      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumb />
        <h1 className="text-2xl font-bold mb-6">Economy</h1>

        {error && (
          <p className="text-red-400 text-sm mb-6">Failed to load news. Please try again later.</p>
        )}

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {loading
            ? [0,1,2].map(i => <ArticleSkeleton key={i} large />)
            : articles.slice(0, 3).map((a, i) => <ArticleCard key={i} article={a} large />)
          }
        </div>

        {/* Row 2 — 2 cards */}
        <div className="grid grid-cols-2 gap-6">
          {loading
            ? [0,1].map(i => <ArticleSkeleton key={i} />)
            : articles.slice(3, 5).map((a, i) => <ArticleCard key={i} article={a} />)
          }
        </div>

        <FooterWidgets articles={articles} />
      </div>
    </div>
  )
}