import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

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
  const doc = parser.parseFromString(xmlString, "text/xml")
  const items = [...doc.querySelectorAll("item")]
  return items.map(item => {
    const title = item.querySelector("title")?.textContent ?? ""
    const linkNode = item.querySelector("link")
    const link = linkNode?.nextSibling?.textContent?.trim() || linkNode?.textContent?.trim() || "#"
    const desc = (item.querySelector("description")?.textContent ?? "").replace(/<[^>]+>/g, "").trim()
    const pubDate = item.querySelector("pubDate")?.textContent ?? ""
    const category = item.querySelector("category")?.textContent ?? ""
    const thumbnail = item.querySelector("thumbnail")
    const mediaContent = item.querySelector("content[url]")
    const img = thumbnail?.getAttribute("url") || mediaContent?.getAttribute("url") || ""
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

function timeAgo(dateStr: string) {
  if (!dateStr) return ""
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (diff < 3600) return Math.floor(diff / 60) + " min ago"
  if (diff < 86400) return Math.floor(diff / 3600) + " hrs ago"
  return Math.floor(diff / 86400) + " days ago"
}

const categoryStyles: Record<string, { badge: string; dot: string }> = {
  National:      { badge: "bg-red-50 text-red-700",       dot: "bg-red-600"    },
  Technology:    { badge: "bg-blue-50 text-blue-700",     dot: "bg-blue-600"   },
  Health:        { badge: "bg-green-50 text-green-700",   dot: "bg-green-600"  },
  Economy:       { badge: "bg-amber-50 text-amber-700",   dot: "bg-amber-500"  },
  Education:     { badge: "bg-purple-50 text-purple-700", dot: "bg-purple-600" },
  Sports:        { badge: "bg-orange-50 text-orange-700", dot: "bg-orange-500" },
  International: { badge: "bg-sky-50 text-sky-700",       dot: "bg-sky-500"    },
}

const CategoryBadge = ({ category, light = false }: { category: string; light?: boolean }) => {
  const s = categoryStyles[category] ?? { badge: "bg-gray-100 text-gray-600", dot: "bg-gray-400" }
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-widest uppercase ${light ? "bg-white/15 text-white" : s.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? "bg-white/80" : s.dot}`} />
      {category || "News"}
    </span>
  )
}

const SplashImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {!src || failed ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="4" fill="#e5e7eb" />
            <path d="M8 32L8 20L20 10L32 20L32 32Z" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
            <rect x="15" y="24" width="10" height="8" rx="1" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="17" r="3" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500 ease-in-out"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function HeroSkeleton() {
  return <div className="lg:col-span-3 rounded-2xl bg-gray-200 animate-pulse min-h-[380px]" />
}

function SideCardSkeleton() {
  return (
    <div className="flex-1 rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
      <div className="h-[120px] bg-gray-200" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  )
}

export default function AroundTheNation() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/rss?category=national")
      .then(res => { if (!res.ok) throw new Error(); return res.text() })
      .then(xml => { setArticles(parseRSS(xml)); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const featured = articles[0]
  const sideCards = articles.slice(1, 3)
  const extraStories = articles.slice(3, 6)

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">

      <div className="flex items-center gap-3 mb-7">
        <div className="w-9 h-0.5 bg-red-600 rounded-full flex-shrink-0" />
        <h2
          className="text-2xl font-black tracking-tight text-gray-900 dark:text-white whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Around the Nation
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

        {loading || !featured ? (
          <HeroSkeleton />
        ) : (
          <Link
            to="/news/article"
            search={articleSearch(featured)}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden cursor-pointer group min-h-[380px] flex flex-col justify-end shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-black block"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-600 z-10" />
            <SplashImage src={featured.img} alt={featured.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
            <div className="relative z-[2] flex flex-col gap-2.5 p-6">
              <CategoryBadge category={featured.category} light />
              <h3
                className="font-black text-xl md:text-2xl leading-snug text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {featured.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{featured.desc}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-white/50">{timeAgo(featured.pubDate)}</span>
                <span className="ml-auto text-xs font-semibold text-red-400 hover:text-red-300">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="lg:col-span-2 flex flex-col gap-4">
          {loading ? (
            <><SideCardSkeleton /><SideCardSkeleton /></>
          ) : (
            sideCards.map((item, i) => (
              <Link
                key={i}
                to="/news/article"
                search={articleSearch(item)}
                className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 flex-1 block"
              >
                <div className="relative h-[120px] flex-shrink-0 overflow-hidden bg-gray-100">
                  <SplashImage src={item.img} alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute bottom-2 left-3 z-10">
                    <CategoryBadge category={item.category} light />
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-4 gap-2">
                  <h3
                    className="font-bold text-sm leading-snug text-gray-900 dark:text-white line-clamp-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-2 border-t border-gray-100 flex items-center">
                    <span className="text-xs text-gray-400">{timeAgo(item.pubDate)}</span>
                    <span className="ml-auto text-xs font-semibold text-red-600 hover:text-red-500">Read →</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-1">
        {loading ? (
          [0,1,2].map(i => (
            <div key={i} className="flex gap-3 items-start p-3 animate-pulse">
              <div className="w-9 h-8 bg-gray-200 rounded" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))
        ) : (
          extraStories.map((story, i) => (
            <Link
              key={i}
              to="/news/article"
              search={articleSearch(story)}
              className="group flex gap-3 items-start p-3 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors block"
            >
              <span
                className="text-2xl font-black text-gray-200 dark:text-gray-700 leading-none flex-shrink-0 select-none group-hover:text-red-300 transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", minWidth: 36 }}
              >
                {String(i + 4).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                  {story.title}
                </span>
                <span className="text-[11px] text-gray-400">
                  {story.category || "News"} · {timeAgo(story.pubDate)}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>

    </section>
  )
}