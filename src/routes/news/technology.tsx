import { createFileRoute, Link } from '@tanstack/react-router'
import React, { useState } from 'react'
export const Route = createFileRoute('/news/technology')({
  component: RouteComponent,
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface Article {
  id: number
  title: string
  excerpt?: string
  date: string
  category: string
  tags?: string[]
  image: string
  source?: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const featured: Article[] = [
  { id: 1, title: 'OpenAI launches o3 reasoning model for enterprise', date: '2h ago', category: 'AI', tags: ['AI', 'Robotics'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=75', source: 'TechCrunch' },
  { id: 2, title: "NVIDIA's GB300 GPU shatters benchmark records", date: '5h ago', category: 'Chips', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&q=75', source: 'The Verge' },
]

const mainStory: Article = {
  id: 3,
  title: 'Apple Intelligence goes fully on-device: end of cloud AI dependency?',
  excerpt: "Apple's new neural engine architecture promises entirely local inference for large language models on the iPhone 17 series, challenging the data-center supremacy of Google and Microsoft.",
  date: 'May 4, 2025',
  category: 'Artificial Intelligence',
  tags: ['Artificial Intelligence', 'Hardware'],
  image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80',
  source: 'Wired',
}

const trending: Article[] = [
  { id: 4, title: 'GPT-5 passes the Turing test in independent trials', date: 'May 3', category: 'AI', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=120&q=60' },
  { id: 5, title: "Meta's AR glasses ship to developers worldwide", date: 'May 3', category: 'AR', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&q=60' },
  { id: 6, title: 'Quantum computing hits 1,000 qubit milestone', date: 'May 2', category: 'Quantum', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&q=60' },
  { id: 7, title: 'Tesla FSD v13 goes fully autonomous in 50 states', date: 'May 1', category: 'EVs', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=120&q=60' },
  { id: 8, title: 'SpaceX Starlink Gen3 doubles global bandwidth', date: 'Apr 30', category: 'Space', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=120&q=60' },
]

const slider: Article[] = [
  { id: 9, title: 'Claude 4 Opus benchmarks leak ahead of launch', date: 'May 4, 2025', category: 'AI', tags: ['AI', 'LLM'], image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=250&q=70' },
  { id: 10, title: "ARM's new v10 architecture is 40% faster", date: 'May 3, 2025', category: 'Hardware', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=250&q=70' },
  { id: 11, title: 'Zero-day exploit found in 1.2B Android devices', date: 'May 3, 2025', category: 'Cyber', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=250&q=70' },
  { id: 12, title: 'AWS cuts prices across 40 global regions', date: 'May 2, 2025', category: 'Cloud', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=250&q=70' },
  { id: 13, title: 'Boston Dynamics Atlas learns to cook breakfast', date: 'May 1, 2025', category: 'Robotics', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=250&q=70' },
]

const latestPosts: Article[] = [
  { id: 14, title: 'OpenAI signs $2B deal with US Defense Dept', date: 'May 4', category: 'AI', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&q=60' },
  { id: 15, title: "Intel's new fab opens in Ohio, 3,000 jobs created", date: 'May 4', category: 'Chips', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=120&q=60' },
  { id: 16, title: 'Google DeepMind solves protein folding edge cases', date: 'May 3', category: 'AI', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=120&q=60' },
]

const bigFeature: Article = {
  id: 17,
  title: 'Humanoid robots hit factory floors: a universal passion regardless of industry',
  excerpt: "Manufacturers from BMW to TSMC are deploying bipedal robots alongside human workers. The convergence of AI vision, dexterous manipulation, and affordable actuators has finally made the sci-fi factory a reality.",
  date: 'May 4, 2025',
  category: 'Robotics',
  tags: ['Robotics', 'AI'],
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
  source: 'MIT Tech Review',
}

const dbl1Left: Article[] = [
  { id: 18, title: 'OpenAI signs $2B defense deal raising ethical alarms', date: 'May 4', category: 'AI', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=75', source: 'Wired' },
  { id: 19, title: "ARM's v10 brings 40% performance leap to mobile", date: 'May 3', category: 'Hardware', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=120&q=60' },
  { id: 20, title: "Intel's Ohio fab opens with 3nm process tech", date: 'May 2', category: 'Chips', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&q=60' },
]

const dbl1Right: Article[] = [
  { id: 21, title: 'Apple on-device AI beats GPT-4o on benchmark', date: 'May 4', category: 'AI', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&q=60' },
  { id: 22, title: 'EU mandates AI watermarking for all generated media', date: 'May 3', category: 'Policy', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&q=60' },
  { id: 23, title: 'Humanoid robots log 1M hours of factory work', date: 'May 2', category: 'Robotics', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=120&q=60' },
  { id: 24, title: 'SpaceX partners with NASA for lunar broadband grid', date: 'Apr 30', category: 'Space', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=120&q=60' },
]

// ─── Shared Primitives ────────────────────────────────────────────────────────

const TAG_COLORS: Record<string, string> = {
  AI: 'bg-sky-500', LLM: 'bg-indigo-500', Hardware: 'bg-indigo-500',
  Robotics: 'bg-indigo-500', Chips: 'bg-sky-500', Cyber: 'bg-indigo-500',
  Cloud: 'bg-sky-500', Space: 'bg-indigo-500', default: 'bg-sky-500',
}

function Tag({ name }: { name: string }) {
  const color = TAG_COLORS[name] ?? TAG_COLORS.default
  return (
    <span className={`inline-block text-[9px] font-bold tracking-widest uppercase text-white px-2 py-0.5 rounded-sm ${color} mr-1`}>
      {name}
    </span>
  )
}

function Meta({ source, date, comments = 0 }: { source?: string; date: string; comments?: number }) {
  return (
    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-1">
      {source && <><span>{source}</span><span className="w-1 h-1 rounded-full bg-gray-300 inline-block" /></>}
      <span>{date}</span>
      <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
      <span>{comments} comments</span>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-white bg-slate-900 px-2.5 py-1 mb-2">
      {children}
    </div>
  )
}

function ThumbRow({ article }: { article: Article }) {
  return (
    <div className="flex gap-2 items-start py-2 border-b border-gray-100 last:border-0 cursor-pointer group">
      <img src={article.image} alt="" className="w-[68px] h-[52px] object-cover rounded flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="text-[11px] font-bold leading-snug text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2">{article.title}</h3>
        <div className="text-[10px] text-gray-400 mt-0.5">{article.date}</div>
      </div>
    </div>
  )
}

// ─── Section Components ───────────────────────────────────────────────────────

function FeaturedColumn() {
  return (
    <div>
      <SectionTitle>Featured</SectionTitle>
      <div className="flex flex-col gap-2">
        {featured.map((a) => (
          <div key={a.id} className="bg-white border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
            <img src={a.image} alt="" className="w-full h-[72px] object-cover" />
            <div className="p-2">
              {(a.tags ?? [a.category]).map((t) => <Tag key={t} name={t} />)}
              <h3 className="text-[13px] font-bold leading-snug text-gray-800 group-hover:text-sky-600 transition-colors mt-1">{a.title}</h3>
              <Meta source={a.source} date={a.date} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MainStoryColumn() {
  return (
    <div>
      <SectionTitle>Main Story</SectionTitle>
      <div className="bg-white border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
        <img src={mainStory.image} alt="" className="w-full h-[155px] object-cover" />
        <div className="p-3">
          {(mainStory.tags ?? [mainStory.category]).map((t) => <Tag key={t} name={t} />)}
          <h2 className="text-[17px] font-bold leading-snug text-gray-900 group-hover:text-sky-600 transition-colors mt-1.5 mb-1.5">{mainStory.title}</h2>
          <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2 font-serif">{mainStory.excerpt}</p>
          <Meta source={mainStory.source} date={mainStory.date} />
        </div>
      </div>
    </div>
  )
}

function TrendingColumn() {
  return (
    <div>
      <SectionTitle>Trending</SectionTitle>
      <div>
        {trending.map((a, i) => (
          <div key={a.id} className="flex gap-2 items-start py-2 border-b border-gray-100 last:border-0 cursor-pointer group">
            <img src={a.image} alt="" className="w-[68px] h-[52px] object-cover rounded flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-sky-500 mb-0.5">{i + 1}</div>
              <h3 className="text-[11px] font-bold leading-snug text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2">{a.title}</h3>
              <div className="text-[10px] text-gray-400 mt-0.5">{a.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialLinks() {
  const socials = [
    { label: 'Facebook', bg: 'bg-blue-600' },
    { label: 'Twitter / X', bg: 'bg-black' },
    { label: 'LinkedIn', bg: 'bg-blue-700' },
    { label: 'Instagram', bg: 'bg-pink-500' },
    { label: 'Telegram', bg: 'bg-sky-500' },
  ]
  return (
    <div>
      <SectionTitle>Social Links</SectionTitle>
      <div className="flex flex-col gap-1.5">
        {socials.map((s) => (
          <button key={s.label} className={`${s.bg} text-white text-xs font-semibold py-1.5 px-3 rounded text-left`}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function PostsSlider() {
  const [offset, setOffset] = React.useState(0)
  const max = slider.length - 3
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <SectionTitle>Posts Slider</SectionTitle>
        <div className="flex gap-1">
          <button onClick={() => setOffset(Math.max(0, offset - 1))} className="w-6 h-6 bg-slate-900 text-white text-xs flex items-center justify-center rounded">‹</button>
          <button onClick={() => setOffset(Math.min(max, offset + 1))} className="w-6 h-6 bg-slate-900 text-white text-xs flex items-center justify-center rounded">›</button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-2.5 transition-transform duration-300"
          style={{ transform: `translateX(calc(-${offset} * (33.33% + 10px)))` }}
        >
          {slider.map((a) => (
            <div key={a.id} className="flex-none w-[calc(33.33%-7px)] bg-white border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
              <img src={a.image} alt="" className="w-full h-[90px] object-cover" />
              <div className="p-2">
                {(a.tags ?? [a.category]).map((t) => <Tag key={t} name={t} />)}
                <h3 className="text-[11px] font-bold leading-snug text-gray-800 group-hover:text-sky-600 transition-colors mt-1">{a.title}</h3>
                <div className="text-[10px] text-gray-400 mt-0.5">{a.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TabbedList() {
  const [tab, setTab] = React.useState<'latest' | 'popular' | 'trending'>('latest')
  const tabs = [
    { key: 'latest' as const, label: 'Latest', posts: latestPosts },
    { key: 'popular' as const, label: 'Popular', posts: latestPosts.slice(0, 3) },
    { key: 'trending' as const, label: 'Trending', posts: latestPosts.slice(0, 2) },
  ]
  const current = tabs.find((t) => t.key === tab)!
  return (
    <div>
      <div className="flex border-b-2 border-gray-200 mb-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 border-b-2 -mb-0.5 transition-colors ${
              tab === t.key ? 'text-sky-500 border-sky-500' : 'text-gray-400 border-transparent hover:text-gray-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>
        {current.posts.map((a) => <ThumbRow key={a.id} article={a} />)}
      </div>
    </div>
  )
}

function BigFeature() {
  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
      <img src={bigFeature.image} alt="" className="w-full h-[180px] object-cover" />
      <div className="p-3">
        {(bigFeature.tags ?? [bigFeature.category]).map((t) => <Tag key={t} name={t} />)}
        <h2 className="text-[17px] font-bold leading-snug text-gray-900 group-hover:text-sky-600 transition-colors mt-1.5 mb-1.5">{bigFeature.title}</h2>
        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2 font-serif">{bigFeature.excerpt}</p>
        <Meta source={bigFeature.source} date={bigFeature.date} />
      </div>
    </div>
  )
}

function DoubleGrid({ leftArticles, rightArticles }: { leftArticles: Article[]; rightArticles: Article[] }) {
  const [hero, ...rest] = leftArticles
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="flex flex-col gap-2">
        <div className="bg-white border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
          <img src={hero.image} alt="" className="w-full h-[100px] object-cover" />
          <div className="p-2">
            <Tag name={hero.category} />
            <h3 className="text-[13px] font-bold leading-snug text-gray-800 group-hover:text-sky-600 transition-colors mt-1">{hero.title}</h3>
            <Meta source={hero.source} date={hero.date} />
          </div>
        </div>
        {rest.map((a) => (
          <div key={a.id} className="bg-white border border-gray-200 rounded p-2 cursor-pointer hover:shadow-md transition-shadow group flex gap-2 items-start">
            <img src={a.image} alt="" className="w-[68px] h-[52px] object-cover rounded flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-[11px] font-bold leading-snug text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2">{a.title}</h3>
              <div className="text-[10px] text-gray-400 mt-0.5">{a.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {rightArticles.map((a) => (
          <div key={a.id} className="bg-white border border-gray-200 rounded p-2 cursor-pointer hover:shadow-md transition-shadow group flex gap-2 items-start">
            <img src={a.image} alt="" className="w-[68px] h-[52px] object-cover rounded flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-[11px] font-bold leading-snug text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2">{a.title}</h3>
              <div className="text-[10px] text-gray-400 mt-0.5">{a.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Route Component ──────────────────────────────────────────────────────────

function RouteComponent() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 py-4">
      <div className="max-w-5xl mx-auto px-4 space-y-4">

        {/* Row 1: Featured | Main Story | Trending */}
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-3">
          <FeaturedColumn />
          <MainStoryColumn />
          <TrendingColumn />
        </div>

        {/* Row 2: Social Links | Posts Slider */}
        <div className="grid grid-cols-[1fr_2fr] gap-3 items-start">
          <SocialLinks />
          <PostsSlider />
        </div>

        {/* Row 3: Tabbed List | Big Feature */}
        <div className="grid grid-cols-[1fr_2fr] gap-3 items-start">
          <TabbedList />
          <BigFeature />
        </div>

        {/* Row 4: Double Category Grid 1 */}
        <div>
          <SectionTitle>Double Category Posts 1</SectionTitle>
          <DoubleGrid leftArticles={dbl1Left} rightArticles={dbl1Right} />
        </div>

        {/* Row 5: Double Category Grid 2 */}
        <div>
          <SectionTitle>Double Category Posts 2</SectionTitle>
          <DoubleGrid
            leftArticles={[
              { id: 30, title: 'NVIDIA announces $3,000 consumer GPU with 192GB VRAM', date: 'May 4', category: 'Hardware', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=75' },
              { id: 31, title: 'Microsoft Copilot integrated into Windows kernel', date: 'May 3', category: 'Software', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=120&q=60' },
              { id: 32, title: "Google DeepMind's AlphaDev designs faster sorting algorithms", date: 'May 2', category: 'AI', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=120&q=60' },
            ]}
            rightArticles={[
              { id: 33, title: 'Samsung foldable laptop arrives with 20-hour battery', date: 'May 4', category: 'Hardware', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&q=60' },
              { id: 34, title: 'TSMC hits 1nm breakthrough in Arizona facility', date: 'May 3', category: 'Chips', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&q=60' },
              { id: 35, title: 'Starlink achieves 1ms latency with Gen3 satellites', date: 'Apr 30', category: 'Space', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=120&q=60' },
            ]}
          />
        </div>

      </div>
    </div>
  )
}