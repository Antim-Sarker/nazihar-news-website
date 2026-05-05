
import { createFileRoute, Link } from '@tanstack/react-router'
import React, { useState } from 'react'
export const Route = createFileRoute('/lifestyles/travel')({

  component: RouteComponent,
})



// ─── Types ────────────────────────────────────────────────────────────────────

interface CatTag { label: string; color: 'amber' | 'blue' | 'red' }
interface Article {
  id: number
  title: string
  excerpt?: string
  date?: string
  author?: string
  readTime?: string
  image: string
  tags: CatTag[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

const popularTags = ['Adventure', 'Beaches', 'Hidden Gems', 'Solo Travel', 'Budget Trips']

const trendingBar = [
  "Japan's Hidden Ryokan Inns You've Never Heard Of",
  "Europe's 10 Most Underrated Cities for 2025",
  'How to Travel Southeast Asia on $30 a Day',
]

const heroArticle: Article = {
  id: 0,
  title: "Europe's 10 Most Underrated Cities — A Solo Traveler's Honest Take",
  date: '2 years ago',
  author: 'Travel Desk',
  readTime: '4 min read',
  image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=85',
  tags: [{ label: 'Beaches', color: 'amber' }, { label: 'Lifestyle', color: 'blue' }],
}

const leftArticles: Article[] = [
  { id: 1, title: "Patagonia in Winter — What Nobody Tells You Before You Go", image: '', tags: [{ label: 'Adventure', color: 'amber' }, { label: 'Hiking', color: 'blue' }, { label: 'Guides', color: 'red' }] },
  { id: 2, title: 'The Maldives Alternatives That Cost a Fraction of the Price', image: '', tags: [{ label: 'Beaches', color: 'amber' }, { label: 'Islands', color: 'blue' }, { label: 'Trends', color: 'red' }] },
  { id: 3, title: "Night Trains Are Back — And They're Better Than Flying", image: '', tags: [{ label: 'Adventure', color: 'amber' }, { label: 'Beaches', color: 'blue' }, { label: 'Trends', color: 'red' }] },
  { id: 4, title: "Japan's Hidden Ryokan Inns You've Never Heard Of", image: '', tags: [{ label: 'Beaches', color: 'blue' }, { label: 'Photography', color: 'amber' }] },
  { id: 5, title: "Europe's 10 Most Underrated Cities for 2025", image: '', tags: [{ label: 'Beaches', color: 'blue' }, { label: 'Lifestyle', color: 'amber' }] },
]

const latestArticles: Article[] = [
  { id: 10, title: "Japan's Hidden Ryokan Inns You've Never Heard Of", image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=60', tags: [{ label: 'Beaches', color: 'blue' }, { label: 'Photography', color: 'amber' }] },
  { id: 11, title: "Europe's 10 Most Underrated Cities for 2025", image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=120&q=60', tags: [{ label: 'Beaches', color: 'blue' }, { label: 'Lifestyle', color: 'amber' }] },
  { id: 12, title: 'Patagonia in Winter — What Nobody Tells You', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=120&q=60', tags: [{ label: 'Adventure', color: 'amber' }, { label: 'Hiking', color: 'blue' }, { label: 'Guides', color: 'red' }] },
  { id: 13, title: 'The Maldives Alternatives That Cost a Fraction', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&q=60', tags: [{ label: 'Beaches', color: 'amber' }, { label: 'Islands', color: 'blue' }, { label: 'Trends', color: 'red' }] },
  { id: 14, title: 'Night Trains Are Back — Better Than Flying', image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=120&q=60', tags: [{ label: 'Adventure', color: 'amber' }, { label: 'Beaches', color: 'blue' }, { label: 'Trends', color: 'red' }] },
]

const popularArticles: Article[] = [
  { id: 20, title: 'How to Travel Southeast Asia on $30 a Day', image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=120&q=60', tags: [{ label: 'Budget', color: 'amber' }, { label: 'Tips', color: 'blue' }] },
  { id: 21, title: 'Bali vs Thailand: Which Wins for Solo Travelers?', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&q=60', tags: [{ label: 'Beaches', color: 'blue' }, { label: 'Solo', color: 'red' }] },
  { id: 22, title: 'Eating Your Way Through Morocco in 10 Days', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=120&q=60', tags: [{ label: 'Culture', color: 'amber' }, { label: 'Food', color: 'blue' }] },
]

const exclusiveArticles: Article[] = [
  { id: 30, title: "Inside the World's Most Secluded Luxury Resorts", image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=120&q=60', tags: [{ label: 'Luxury', color: 'red' }, { label: 'Resorts', color: 'blue' }] },
  { id: 31, title: 'First Class Train Journeys Worth Every Penny', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&q=60', tags: [{ label: 'Exclusive', color: 'red' }, { label: 'VIP', color: 'amber' }] },
  { id: 32, title: 'Private Island Retreats: The 2025 Edit', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=120&q=60', tags: [{ label: 'Luxury', color: 'red' }, { label: 'Culture', color: 'blue' }] },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

const TAG_COLOR: Record<string, string> = {
  amber: 'text-amber-400',
  blue: 'text-blue-400',
  red: 'text-red-400',
}

function CatTags({ tags }: { tags: CatTag[] }) {
  return (
    <div className="flex gap-2 flex-wrap mb-1">
      {tags.map((t) => (
        <span key={t.label} className={`text-[9px] font-bold uppercase tracking-wider ${TAG_COLOR[t.color]}`}>
          {t.label}
        </span>
      ))}
    </div>
  )
}

function PopularTagsBar() {
  return (
    <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-3 text-xs border-b border-[#2a2a2a]">
      <span className="text-gray-500 font-semibold">Popular Tags</span>
      {popularTags.map((tag) => (
        <Link key={tag} to="." className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors">
          <span className="text-gray-500">#</span> {tag}
        </Link>
      ))}
    </div>
  )
}

function TrendingBar() {
  return (
    <div className="bg-[#1a1a1a] flex items-stretch border-b border-[#2a2a2a]">
      <div className="bg-rose-700 text-white font-bold text-[10px] tracking-widest uppercase px-4 flex items-center gap-2 flex-shrink-0">
        <span className="w-2 h-2 bg-white rounded-full inline-block" />
        TRENDING
      </div>
      <div className="flex overflow-hidden flex-1">
        {trendingBar.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 border-r border-[#2a2a2a] text-[11px] text-gray-300 whitespace-nowrap overflow-hidden">
            <span className="text-amber-400 font-bold flex-shrink-0">{i + 1}</span>
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LeftColumn() {
  return (
    <div className="bg-[#1c1c1c] border-r border-[#2a2a2a] flex flex-col">
      {leftArticles.map((a, i) => (
        <div key={a.id} className="px-3 py-3 border-b border-[#252525] last:border-0 cursor-pointer hover:bg-[#222] transition-colors group">
          <div className="w-6 h-6 bg-amber-400 text-[#1a0a00] font-bold text-[11px] flex items-center justify-center rounded mb-2">
            {i + 1}
          </div>
          <CatTags tags={a.tags} />
          <h3 className="text-[12px] font-bold leading-snug text-gray-200 group-hover:text-amber-400 transition-colors">
            {a.title}
          </h3>
        </div>
      ))}
    </div>
  )
}

function HeroCenter() {
  return (
    <div className="relative bg-black overflow-hidden" style={{ minHeight: 420 }}>
      <img
        src={heroArticle.image}
        alt={heroArticle.title}
        className="w-full h-full object-cover opacity-80"
        style={{ height: 420 }}
      />
      {/* Read time badge */}
      <div className="absolute bottom-20 left-4 bg-black/80 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
        {heroArticle.readTime}
      </div>
      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-5" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.88))' }}>
        <CatTags tags={heroArticle.tags} />
        <h2 className="text-xl font-bold text-white leading-snug mb-2">{heroArticle.title}</h2>
        <div className="flex items-center gap-4 text-[11px] text-gray-400">
          <span>● {heroArticle.date}</span>
          <span>✎ {heroArticle.author}</span>
        </div>
      </div>
    </div>
  )
}

function RightArticleItem({ article }: { article: Article }) {
  return (
    <div className="flex gap-2 px-2.5 py-2.5 border-b border-[#252525] last:border-0 cursor-pointer hover:bg-[#222] transition-colors group">
      <img src={article.image} alt="" className="w-[72px] h-[58px] object-cover rounded flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <CatTags tags={article.tags} />
        <h3 className="text-[11px] font-bold leading-snug text-gray-300 group-hover:text-amber-400 transition-colors">
          {article.title}
        </h3>
      </div>
    </div>
  )
}

function RightColumn() {
  type Tab = 'latest' | 'popular' | 'exclusive'
  const [tab, setTab] = useState<Tab>('latest')

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'latest', label: 'Latest', icon: '○' },
    { key: 'popular', label: 'Popular', icon: '↑' },
    { key: 'exclusive', label: 'Exclusive', icon: '⚡' },
  ]

  const articles: Record<Tab, Article[]> = {
    latest: latestArticles,
    popular: popularArticles,
    exclusive: exclusiveArticles,
  }

  return (
    <div className="bg-[#1c1c1c] border-l border-[#2a2a2a] flex flex-col">
      {/* Tab bar */}
      <div className="flex border-b border-[#2a2a2a]">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 border-b-2 transition-colors ${
              tab === t.key
                ? 'text-amber-400 border-amber-400'
                : 'text-gray-600 border-transparent hover:text-gray-400'
            }`}
          >
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>
      {/* Article list */}
      <div className="flex flex-col">
        {articles[tab].map((a) => <RightArticleItem key={a.id} article={a} />)}
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

function RouteComponent() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">
      <PopularTagsBar />
      <TrendingBar />

      {/* 3-column grid */}
      <div className="grid grid-cols-[200px_1fr_240px]" style={{ minHeight: 420 }}>
        <LeftColumn />
        <HeroCenter />
        <RightColumn />
      </div>
    </div>
  )
}