import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/news/economy')({
  component: RouteComponent,
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  tags?: string[]
  image: string
  featured?: boolean
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const articles: Article[] = [
  {
    id: 1,
    title: 'Fed holds rates steady, signals one cut before year-end',
    excerpt:
      'The Federal Reserve kept its benchmark rate unchanged at its May meeting. Chair Powell emphasized policymakers remain data-dependent and are in no rush to ease given persistent inflation.',
    date: 'NOVEMBER 11, 2024',
    category: 'Fed',
    tags: ['Fed', 'Rates'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Leave for the far world of grammar',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    date: 'JUNE 7, 2024',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
  {
    id: 3,
    title: 'How to Improve Economy in 60 Minutes',
    excerpt:
      'Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    date: 'APRIL 23, 2024',
    category: 'Economy',
    tags: ['Design', 'Economy'],
    image: 'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=600&q=80',
    featured: true,
  },
  {
    id: 4,
    title: '10 Secret things you didn\'t know about markets',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts. One day however a small line of blind text decided to leave for the far World of Grammar.',
    date: 'NOVEMBER 11, 2024',
    category: 'Design',
    tags: ['Design', 'Markets', 'slides'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  },
  {
    id: 5,
    title: '15 unheard ways to achieve greater growth',
    excerpt:
      'She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline.',
    date: 'APRIL 23, 2024',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
]

const recentPosts = articles.slice(0, 3)

const popularPosts = [
  { title: 'The secrets to Fashion for Music', date: 'JUNE 7, 2024', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&q=60' },
  { title: 'Leave for the far world of grammar', date: 'JUNE 7, 2024', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&q=60' },
  { title: 'How to Improve Economy in 60 Minutes', date: 'JUNE 7, 2024', image: 'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=80&q=60' },
]

const categories = [
  { name: 'DESIGN', count: 6 },
  { name: 'FASHION', count: 3 },
  { name: 'LIFESTYLE', count: 3 },
  { name: 'UNIQUE', count: 1 },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SocialIcons() {
  return (
    <div className="flex gap-1.5 mt-2">
      {['f', 't', 'in', 'g+', 'p'].map((s) => (
        <span
          key={s}
          className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-[9px] font-bold flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
        >
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

function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  return (
    <article className="group">
      <div className={`overflow-hidden rounded-sm mb-3 ${large ? 'h-52' : 'h-44'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex gap-1 mb-1">
        {article.tags
          ? article.tags.map((t) => <CategoryBadge key={t} name={t} />)
          : <CategoryBadge name={article.category} />}
      </div>
      <h2 className={`font-bold leading-snug mb-2 group-hover:text-amber-600 transition-colors ${large ? 'text-lg' : 'text-base'}`}>
        <Link to=".">{article.title}</Link>
      </h2>
      <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-2">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
        {article.date}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
      <div className="flex items-center justify-between mt-3">
        <Link to="." className="text-xs font-semibold uppercase tracking-wider text-gray-700 hover:text-amber-600 transition-colors">
          Read More
        </Link>
        <SocialIcons />
      </div>
    </article>
  )
}

// ─── Header strip (3 featured articles at top) ────────────────────────────────

function FeaturedStrip() {
  const strip = articles.slice(0, 3)
  return (
    <div className="grid grid-cols-3 gap-px bg-gray-200 mb-1">
      {strip.map((a) => (
        <div key={a.id} className="relative h-24 overflow-hidden group cursor-pointer bg-black">
          <img src={a.image} alt={a.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="absolute inset-0 p-3 flex flex-col justify-end">
            <span className="text-[9px] text-amber-400 font-semibold uppercase tracking-wider mb-0.5">{a.date}</span>
            <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2">{a.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav className="text-xs text-gray-400 mb-4 flex gap-1 items-center">
      <Link to="/" className="hover:text-amber-600">Home</Link>
      <span>/</span>
      <Link to="/news" className="hover:text-amber-600">Blog</Link>
      <span>/</span>
      <span className="text-gray-700">Economy</span>
    </nav>
  )
}

// ─── Footer widgets ───────────────────────────────────────────────────────────

function FooterWidgets() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-4 gap-6 text-sm">

      {/* Recent Posts */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((p) => (
            <div key={p.id} className="flex gap-2 items-start group cursor-pointer">
              <img src={p.image} alt="" className="w-14 h-14 object-cover rounded-sm flex-shrink-0" />
              <div>
                <p className="text-xs text-amber-500 uppercase font-semibold">{p.category}</p>
                <p className="text-xs font-semibold leading-tight group-hover:text-amber-600 transition-colors">{p.title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{p.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">Popular Posts</h3>
        <div className="space-y-3">
          {popularPosts.map((p, i) => (
            <div key={i} className="flex gap-2 items-start group cursor-pointer">
              <img src={p.image} alt="" className="w-14 h-14 object-cover rounded-sm flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold leading-tight group-hover:text-amber-600 transition-colors">{p.title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{p.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">Categories</h3>
        <div className="space-y-2">
          {categories.map((c) => (
            <div key={c.name} className="flex items-center justify-between group cursor-pointer">
              <div className="flex-1 bg-gray-800 text-white text-xs font-bold py-1.5 px-3 group-hover:bg-amber-600 transition-colors">
                {c.name}
              </div>
              <div className="bg-gray-700 text-white text-xs py-1.5 px-2 min-w-[36px] text-center group-hover:bg-amber-700 transition-colors">
                {c.count} Post{c.count !== 1 ? 's' : ''}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">Trending</h3>
        <div className="relative h-48 overflow-hidden rounded-sm group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80"
            alt="Trending"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
            <p className="text-white text-xs font-semibold leading-snug">
              Drag and Drop Responsive WordPress Theme
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* Featured strip at top */}
      <FeaturedStrip />

      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumb />

        <h1 className="text-2xl font-bold mb-6">Economy</h1>

        {/* Article grid: 3-column CSS grid matching the screenshot */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Row 1: col 1 and 2 are regular, col 3 spans 1 with featured */}
          <ArticleCard article={articles[0]} large />
          <ArticleCard article={articles[1]} large />
          <ArticleCard article={articles[2]} large />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ArticleCard article={articles[3]} />
          <ArticleCard article={articles[4]} />
        </div>

        {/* Footer widget area */}
        <FooterWidgets />
      </div>
    </div>
  )
}