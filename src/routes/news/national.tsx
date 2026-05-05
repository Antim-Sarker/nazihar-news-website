import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/national')({
  component: RouteComponent,
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface Article {
  id: number
  category: string
  title: string
  excerpt: string
  author: string
  time: string
  imageUrl: string
  featured?: boolean
  breaking?: boolean
}

interface TrendingTopic {
  rank: number
  label: string
  count: string
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const FEATURED_ARTICLE: Article = {
  id: 1,
  category: 'Politics',
  title: 'Senate Passes Historic Infrastructure Bill After Weeks of Negotiations',
  excerpt:
    "A landmark bipartisan deal clears the upper chamber with broad support, setting the stage for a major overhaul of the nation's roads, bridges, and broadband networks.",
  author: 'Marcus Webb',
  time: '42 min ago',
  imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80',
  featured: true,
}

const TOP_STORIES: Article[] = [
  {
    id: 2,
    category: 'Economy',
    title: 'Fed Holds Rates Steady Amid Mixed Inflation Signals',
    excerpt:
      'Central bank officials signal patience as conflicting data complicates the path toward potential cuts later this year.',
    author: 'Elena Choi',
    time: '1 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    breaking: true,
  },
  {
    id: 3,
    category: 'Justice',
    title: 'Supreme Court to Hear Landmark Voting Rights Case in Fall Term',
    excerpt:
      'The justices agreed to take up a challenge that could reshape how states draw congressional districts for the next decade.',
    author: 'Diana Frost',
    time: '2 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80',
  },
  {
    id: 4,
    category: 'Health',
    title: 'CDC Issues New Guidance on Summer Respiratory Illness Surge',
    excerpt:
      'Officials urge precautions ahead of what epidemiologists warn could be a difficult season for vulnerable populations.',
    author: 'James Okafor',
    time: '3 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600&q=80',
  },
]

const MORE_STORIES: Article[] = [
  {
    id: 5,
    category: 'Environment',
    title: 'Wildfires Burn Across Southwest as Drought Conditions Persist',
    author: 'Sofia Reyes',
    time: '4 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1623232786774-c3fb1beff4ee?w=400&q=80',
    excerpt: '',
  },
  {
    id: 6,
    category: 'Education',
    title: 'Student Loan Forgiveness Program Faces New Legal Challenges',
    author: 'Tom Ashford',
    time: '5 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
    excerpt: '',
  },
  {
    id: 7,
    category: 'Defense',
    title: 'Pentagon Announces Major Overhaul of Cybersecurity Strategy',
    author: 'Rita Nakamura',
    time: '6 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
    excerpt: '',
  },
  {
    id: 8,
    category: 'Immigration',
    title: 'Border Officials Report Shift in Crossing Patterns This Quarter',
    author: 'Carlos Vega',
    time: '7 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=400&q=80',
    excerpt: '',
  },
]

const TRENDING: TrendingTopic[] = [
  { rank: 1, label: 'Infrastructure Bill', count: '48.2K' },
  { rank: 2, label: 'Federal Reserve', count: '31.7K' },
  { rank: 3, label: 'Supreme Court', count: '27.4K' },
  { rank: 4, label: 'Wildfire Season', count: '19.1K' },
  { rank: 5, label: 'Student Loans', count: '14.8K' },
]

const CATEGORIES = [
  'All', 'Politics', 'Economy', 'Justice', 'Health',
  'Environment', 'Defense', 'Education', 'Immigration',
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    Politics: 'bg-blue-100 text-blue-800',
    Economy: 'bg-emerald-100 text-emerald-800',
    Justice: 'bg-violet-100 text-violet-800',
    Health: 'bg-rose-100 text-rose-800',
    Environment: 'bg-green-100 text-green-800',
    Defense: 'bg-slate-100 text-slate-700',
    Education: 'bg-amber-100 text-amber-800',
    Immigration: 'bg-orange-100 text-orange-800',
  }
  const cls = colorMap[label] ?? 'bg-gray-100 text-gray-700'
  return (
    <span
      className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm ${cls}`}
    >
      {label}
    </span>
  )
}

function BreakingBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-red-600">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      Breaking
    </span>
  )
}

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="relative group cursor-pointer overflow-hidden rounded-xl bg-black">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-[460px] object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-3 mb-3">
          <CategoryBadge label={article.category} />
          <span className="text-white/50 text-xs">{article.time}</span>
        </div>
        <h2 className="text-white text-3xl font-bold leading-tight mb-3 max-w-2xl group-hover:underline decoration-1 underline-offset-4">
          {article.title}
        </h2>
        <p className="text-white/70 text-sm leading-relaxed max-w-xl mb-4">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-white/50 text-xs">
          <span className="font-medium text-white/70">{article.author}</span>
          <span>·</span>
          <span>National Desk</span>
        </div>
      </div>
    </article>
  )
}

function TopStoryCard({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer flex flex-col gap-3">
      <div className="overflow-hidden rounded-lg aspect-video bg-gray-100">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          {article.breaking && <BreakingBadge />}
          <CategoryBadge label={article.category} />
        </div>
        <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-blue-700 transition-colors mb-2">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
          <span className="font-medium text-gray-600">{article.author}</span>
          <span>·</span>
          <span>{article.time}</span>
        </div>
      </div>
    </article>
  )
}

function ListStoryCard({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer flex gap-4 items-start py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <CategoryBadge label={article.category} />
        </div>
        <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
          <span className="font-medium text-gray-500">{article.author}</span>
          <span>·</span>
          <span>{article.time}</span>
        </div>
      </div>
      <div className="flex-shrink-0 w-20 h-16 rounded overflow-hidden bg-gray-100">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </article>
  )
}

function TrendingPanel() {
  return (
    <aside className="bg-gray-50 rounded-xl p-5 border border-gray-100">
      <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Trending Now</h2>
      <ol className="space-y-0">
        {TRENDING.map((topic) => (
          <li
            key={topic.rank}
            className="group cursor-pointer flex items-center gap-4 py-3 border-b border-gray-100 last:border-0"
          >
            <span className="text-2xl font-black text-gray-100 w-8 text-right leading-none">
              {topic.rank}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                {topic.label}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{topic.count} mentions</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  )
}

function NewsletterBanner() {
  return (
    <div className="bg-blue-700 rounded-xl px-6 py-5 text-white">
      <p className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-1">Daily Briefing</p>
      <h3 className="text-base font-bold mb-1">The top national stories, every morning.</h3>
      <p className="text-blue-200 text-sm mb-4">Join 2.4 million readers. Free, every weekday.</p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border-0 outline-none focus:ring-2 focus:ring-blue-300 min-w-0"
        />
        <button className="bg-white text-blue-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  )
}

function PageHeader({
  activeCategory,
  onCategory,
}: {
  activeCategory: string
  onCategory: (c: string) => void
}) {
  return (
    <header className="border-b border-gray-200 mb-8">
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">National</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          See all sections →
        </button>
      </div>

      <nav className="flex gap-1 overflow-x-auto pb-px">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategory(cat)}
            className={`flex-shrink-0 text-xs font-semibold px-3 py-2 rounded-md transition-colors ${
              activeCategory === cat
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>
    </header>
  )
}

// ─── Route Component ──────────────────────────────────────────────────────────

function RouteComponent() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTop =
    activeCategory === 'All'
      ? TOP_STORIES
      : TOP_STORIES.filter((a) => a.category === activeCategory)

  const filteredMore =
    activeCategory === 'All'
      ? MORE_STORIES
      : MORE_STORIES.filter((a) => a.category === activeCategory)

  const showFeatured =
    activeCategory === 'All' || FEATURED_ARTICLE.category === activeCategory

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <PageHeader activeCategory={activeCategory} onCategory={setActiveCategory} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Main column ── */}
        <div className="lg:col-span-2 space-y-10">
          {showFeatured && (
            <section>
              <FeaturedArticle article={FEATURED_ARTICLE} />
            </section>
          )}

          {filteredTop.length > 0 && (
            <section>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
                Top Stories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {filteredTop.map((article) => (
                  <TopStoryCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          )}

          <hr className="border-gray-100" />

          {filteredMore.length > 0 && (
            <section>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                More National News
              </h2>
              <div>
                {filteredMore.map((article) => (
                  <ListStoryCard key={article.id} article={article} />
                ))}
              </div>
              <button className="mt-6 w-full text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg py-3 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                Load more stories
              </button>
            </section>
          )}

          {filteredTop.length === 0 && filteredMore.length === 0 && activeCategory !== 'All' && (
            <div className="text-center py-20">
              <p className="text-lg font-semibold text-gray-600">No stories in {activeCategory}</p>
              <p className="text-sm mt-1 text-gray-400">Check back soon or browse all categories.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-sm text-blue-600 font-semibold hover:underline"
              >
                Show all national news
              </button>
            </div>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside className="space-y-6">
          <TrendingPanel />
          <NewsletterBanner />

          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
              Editor's Pick
            </h2>
            <article className="group cursor-pointer">
              <div className="rounded-lg overflow-hidden aspect-video bg-gray-100 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80"
                  alt="Editor's pick"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CategoryBadge label="Defense" />
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mt-2">
                How Cyber Warfare Is Reshaping National Security Doctrine
              </h3>
              <p className="text-xs text-gray-400 mt-2">In-depth · 12 min read</p>
            </article>
          </div>
        </aside>
      </div>
    </div>
  )
}