import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lifestyles/food')({
  component: RouteComponent,
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface FoodArticle {
  id: number
  tag: string
  title: string
  excerpt: string
  author: string
  time: string
  imageUrl: string
  readTime?: string
  isNew?: boolean
  recipe?: boolean
}

interface SeasonalItem {
  id: number
  name: string
  emoji: string
  tip: string
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const HERO: FoodArticle = {
  id: 1,
  tag: 'Feature',
  title: 'The Art of the Long, Slow Sunday Braise',
  excerpt:
    'There is no shortcut worth taking when a Dutch oven and six unhurried hours can transform the cheapest cut into something that silences the table.',
  author: 'Elena Marchand',
  time: '3 hr ago',
  readTime: '11 min',
  imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=85',
  recipe: true,
}

const SECONDARY: FoodArticle[] = [
  {
    id: 2,
    tag: 'Restaurants',
    title: 'The Ten Tables You Need to Book Before Summer Ends',
    excerpt: 'From a fire-pit omakase in the hills to a converted grain silo serving natural wine, our critics weighed in.',
    author: 'James Osei',
    time: '5 hr ago',
    readTime: '7 min',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    isNew: true,
  },
  {
    id: 3,
    tag: 'Recipe',
    title: 'Charred Leek & Feta Tart With a Rye Crust',
    excerpt: 'A weeknight dinner that feels like a quiet triumph — minimal effort, maximum texture.',
    author: 'Nadia Volkov',
    time: '8 hr ago',
    readTime: '4 min',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    recipe: true,
  },
]

const GRID_ARTICLES: FoodArticle[] = [
  {
    id: 4,
    tag: 'Culture',
    title: 'Why Fermentation Became the Language of Modern Cooking',
    excerpt: 'Chefs and home cooks alike are finding flavor, community, and a quiet form of patience in a jar.',
    author: 'Tom Lindqvist',
    time: '10 hr ago',
    readTime: '9 min',
    imageUrl: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?w=700&q=80',
  },
  {
    id: 5,
    tag: 'Recipe',
    title: 'Brown Butter Honey Cake with Cardamom Cream',
    excerpt: 'One bowl, one pan, and a patience for browning butter until it smells like caramel.',
    author: 'Sophie Larsen',
    time: '12 hr ago',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80',
    recipe: true,
  },
  {
    id: 6,
    tag: 'Travel',
    title: 'Eating Your Way Through Oaxaca, One Mole at a Time',
    excerpt: 'Seven distinct moles, three mezcal tastings, and a market that changed how we think about chili.',
    author: 'Carlos Vega',
    time: '1 day ago',
    readTime: '12 min',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80',
  },
]

const LIST_ARTICLES: FoodArticle[] = [
  {
    id: 7,
    tag: 'Drink',
    title: 'The Natural Wine Skeptic Conversion Story',
    author: 'Margot Bellamy',
    time: '1 day ago',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80',
    excerpt: '',
  },
  {
    id: 8,
    tag: 'Pantry',
    title: 'Twelve Ingredients That Changed How We Cook This Year',
    author: 'Kenji Tanaka',
    time: '2 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80',
    excerpt: '',
  },
  {
    id: 9,
    tag: 'Baking',
    title: 'Cold-Proofed Focaccia: The No-Stress Weekend Project',
    author: 'Lena Fischer',
    time: '2 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80',
    excerpt: '',
    recipe: true,
  },
  {
    id: 10,
    tag: 'Culture',
    title: 'The Return of the Dinner Party and What It Means',
    author: 'Amara Diallo',
    time: '3 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80',
    excerpt: '',
  },
]

const SEASONAL: SeasonalItem[] = [
  { id: 1, name: 'Stone Fruit', emoji: '🍑', tip: 'Peak for another 3 weeks — roast halved plums with thyme and honey.' },
  { id: 2, name: 'Corn', emoji: '🌽', tip: 'At its sweetest right off the stalk. Grill in the husk, then char bare.' },
  { id: 3, name: 'Basil', emoji: '🌿', tip: 'Before the first cool night — freeze in olive oil now.' },
  { id: 4, name: 'Heirloom Tomatoes', emoji: '🍅', tip: 'Never refrigerate. Salt only. That it.' },
  { id: 5, name: 'Figs', emoji: '🟤', tip: 'Early Black Mission just arrived. Pair with aged goat cheese.' },
]

const FILTER_TABS = ['All', 'Recipe', 'Restaurants', 'Culture', 'Baking', 'Drink', 'Pantry', 'Travel']

// ─── Sub-components ───────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    Recipe:      { bg: '#e8f0e4', color: '#3a6b2a' },
    Restaurants: { bg: '#fdf0e4', color: '#8a4a10' },
    Culture:     { bg: '#eae8f5', color: '#4a3a8a' },
    Baking:      { bg: '#f5e8e4', color: '#8a3a2a' },
    Drink:       { bg: '#e4eef5', color: '#1a5070' },
    Pantry:      { bg: '#f5f0e4', color: '#7a5a10' },
    Travel:      { bg: '#e4f5f0', color: '#1a6a50' },
    Feature:     { bg: '#2d2418', color: '#d4a853' },
  }
  const { bg, color } = colors[label] ?? { bg: '#f0ece6', color: '#6a5a44' }
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '9px',
      fontWeight: 800,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: '20px',
      background: bg,
      color,
    }}>
      {label}
    </span>
  )
}

function RecipeIcon() {
  return (
    <span title="Includes Recipe" style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: '#3a6b2a',
      fontSize: '10px',
      flexShrink: 0,
    }}>
      🥄
    </span>
  )
}

function HeroSection({ article }: { article: FoodArticle }) {
  return (
    <article style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderRadius: '8px', overflow: 'hidden', background: '#1c1510', minHeight: '420px' }} className="hero-wrap">
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.8s ease', minHeight: '420px' }}
          className="hero-img"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #1c1510 100%)' }} />
      </div>
      <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#1c1510' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Tag label={article.tag} />
          {article.recipe && <RecipeIcon />}
        </div>
        <h2 style={{
          fontFamily: "'Lora', 'Georgia', serif",
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#f2ece0',
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          {article.title}
        </h2>
        <p style={{ fontSize: '14px', color: '#9a8e7a', lineHeight: 1.75, marginBottom: '24px' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#3a6b2a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
            {article.author.charAt(0)}
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#d4a853', letterSpacing: '0.06em' }}>{article.author}</p>
            <p style={{ fontSize: '10px', color: '#6a5a44' }}>{article.time} · {article.readTime} read</p>
          </div>
        </div>
      </div>
    </article>
  )
}

function SecondaryCard({ article }: { article: FoodArticle }) {
  return (
    <article style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '12px' }} className="sec-card">
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', aspectRatio: '16/10', background: '#e8e0d4' }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
          className="sec-img"
        />
        {article.isNew && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: '#c84b2a', color: '#fff',
            fontSize: '9px', fontWeight: 800, letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '3px 8px', borderRadius: '20px',
          }}>
            New
          </div>
        )}
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Tag label={article.tag} />
          {article.recipe && <RecipeIcon />}
        </div>
        <h3 style={{
          fontFamily: "'Lora', 'Georgia', serif",
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#1c1510',
          lineHeight: 1.3,
          marginBottom: '8px',
          letterSpacing: '-0.01em',
          transition: 'color 0.2s',
        }} className="sec-title">
          {article.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#7a6a54', lineHeight: 1.65, marginBottom: '10px' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
          <span style={{ fontWeight: 700, color: '#d4a853', letterSpacing: '0.04em' }}>{article.author}</span>
          <span style={{ color: '#c8b89e' }}>·</span>
          <span style={{ color: '#9a8e7a' }}>{article.time}</span>
          {article.readTime && <>
            <span style={{ color: '#c8b89e' }}>·</span>
            <span style={{ color: '#9a8e7a' }}>{article.readTime}</span>
          </>}
        </div>
      </div>
    </article>
  )
}

function GridCard({ article }: { article: FoodArticle }) {
  return (
    <article style={{ cursor: 'pointer', borderRadius: '6px', overflow: 'hidden', background: '#fff', border: '1px solid #ede5d8' }} className="grid-card">
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/2' }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
          className="grid-img"
        />
      </div>
      <div style={{ padding: '16px 18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Tag label={article.tag} />
          {article.recipe && <RecipeIcon />}
        </div>
        <h3 style={{
          fontFamily: "'Lora', serif",
          fontSize: '1rem',
          fontWeight: 700,
          color: '#1c1510',
          lineHeight: 1.3,
          marginBottom: '8px',
          transition: 'color 0.2s',
        }} className="grid-title">
          {article.title}
        </h3>
        <p style={{ fontSize: '12px', color: '#7a6a54', lineHeight: 1.6, marginBottom: '12px' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
          <span style={{ fontWeight: 700, color: '#d4a853' }}>{article.author}</span>
          <span style={{ color: '#c8b89e' }}>·</span>
          <span style={{ color: '#9a8e7a' }}>{article.time}</span>
        </div>
      </div>
    </article>
  )
}

function ListRow({ article }: { article: FoodArticle }) {
  return (
    <article style={{
      display: 'flex', gap: '14px', alignItems: 'flex-start',
      padding: '16px 0', borderBottom: '1px solid #ede5d8', cursor: 'pointer',
    }} className="list-row">
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Tag label={article.tag} />
          {article.recipe && <RecipeIcon />}
        </div>
        <h3 style={{
          fontFamily: "'Lora', serif",
          fontSize: '0.95rem',
          fontWeight: 700,
          color: '#1c1510',
          lineHeight: 1.35,
          marginBottom: '6px',
          transition: 'color 0.2s',
        }} className="list-title">
          {article.title}
        </h3>
        <div style={{ display: 'flex', gap: '8px', fontSize: '11px', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, color: '#d4a853' }}>{article.author}</span>
          <span style={{ color: '#c8b89e' }}>·</span>
          <span style={{ color: '#9a8e7a' }}>{article.time}</span>
        </div>
      </div>
      <div style={{ flexShrink: 0, width: '76px', height: '60px', borderRadius: '4px', overflow: 'hidden' }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="list-img"
        />
      </div>
    </article>
  )
}

function SeasonalWhatsIn() {
  return (
    <div style={{
      background: '#1c1510',
      borderRadius: '8px',
      padding: '24px',
      color: '#f2ece0',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span style={{ fontSize: '16px' }}>🌾</span>
        <h2 style={{
          fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#d4a853',
        }}>
          What's in Season
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {SEASONAL.map((item, i) => (
          <div key={item.id} style={{
            padding: '14px 0',
            borderBottom: i < SEASONAL.length - 1 ? '1px solid #2e2418' : 'none',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '18px', lineHeight: 1, flexShrink: 0, marginTop: '1px' }}>{item.emoji}</span>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#f2ece0', marginBottom: '3px', letterSpacing: '0.03em' }}>
                {item.name}
              </p>
              <p style={{ fontSize: '11px', color: '#7a6a54', lineHeight: 1.5 }}>{item.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NewsletterCard() {
  return (
    <div style={{
      borderRadius: '8px',
      border: '2px dashed #c8b89e',
      padding: '24px',
      textAlign: 'center',
      background: '#fffdf8',
    }}>
      <div style={{ fontSize: '28px', marginBottom: '10px' }}>🍳</div>
      <p style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a853', marginBottom: '8px' }}>
        The Table
      </p>
      <h3 style={{
        fontFamily: "'Lora', serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '#1c1510',
        lineHeight: 1.3,
        marginBottom: '8px',
      }}>
        One recipe, one story, every Friday.
      </h3>
      <p style={{ fontSize: '12px', color: '#7a6a54', lineHeight: 1.6, marginBottom: '18px' }}>
        Seasonally driven, never repetitive. Trusted by 190,000 home cooks.
      </p>
      <input
        type="email"
        placeholder="your@email.com"
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: '4px',
          border: '1px solid #ede5d8',
          background: '#fff',
          color: '#1c1510',
          fontSize: '13px',
          marginBottom: '10px',
          boxSizing: 'border-box',
          outline: 'none',
          fontFamily: 'inherit',
        }}
      />
      <button style={{
        width: '100%',
        padding: '11px',
        borderRadius: '4px',
        border: 'none',
        background: '#3a6b2a',
        color: '#fff',
        fontSize: '10px',
        fontWeight: 800,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        fontFamily: 'inherit',
      }}>
        Subscribe Free
      </button>
    </div>
  )
}

function MostSaved() {
  const saved = [
    { n: 1, title: 'One-Pan Roasted Chicken Thighs with White Beans', tag: 'Recipe' },
    { n: 2, title: 'The Only Vinaigrette Recipe You ll Ever Need', tag: 'Pantry' },
    { n: 3, title: 'Sourdough Starter: A First Timers Honest Guide', tag: 'Baking' },
    { n: 4, title: 'The 12-Minute Pasta That Feeds Four for Almost Nothing', tag: 'Recipe' },
  ]
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <span style={{ fontSize: '14px' }}>🔖</span>
        <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9a8e7a' }}>
          Most Saved
        </h2>
      </div>
      {saved.map((item, i) => (
        <div key={item.n} style={{
          display: 'flex', gap: '14px', alignItems: 'flex-start',
          padding: '12px 0', borderBottom: i < saved.length - 1 ? '1px solid #ede5d8' : 'none',
          cursor: 'pointer',
        }} className="saved-row">
          <span style={{
            fontFamily: "'Lora', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#ede5d8',
            lineHeight: 1,
            minWidth: '28px',
          }}>
            {item.n}
          </span>
          <div>
            <p style={{
              fontFamily: "'Lora', serif",
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#1c1510',
              lineHeight: 1.3,
              marginBottom: '5px',
              transition: 'color 0.2s',
            }} className="saved-title">
              {item.title}
            </p>
            <Tag label={item.tag} />
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Route Component ──────────────────────────────────────────────────────────

function RouteComponent() {
  const [activeFilter, setActiveFilter] = useState('All')

  const allArticles = [...SECONDARY, ...GRID_ARTICLES, ...LIST_ARTICLES]

  const filteredSecondary = activeFilter === 'All'
    ? SECONDARY
    : SECONDARY.filter(a => a.tag === activeFilter)

  const filteredGrid = activeFilter === 'All'
    ? GRID_ARTICLES
    : GRID_ARTICLES.filter(a => a.tag === activeFilter)

  const filteredList = activeFilter === 'All'
    ? LIST_ARTICLES
    : LIST_ARTICLES.filter(a => a.tag === activeFilter)

  const showHero = activeFilter === 'All' || HERO.tag === activeFilter
  const hasContent = showHero || filteredSecondary.length > 0 || filteredGrid.length > 0 || filteredList.length > 0

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');

        .hero-wrap:hover .hero-img { transform: scale(1.04); }
        .sec-card:hover .sec-img { transform: scale(1.06); }
        .sec-card:hover .sec-title { color: #3a6b2a; }
        .grid-card:hover .grid-img { transform: scale(1.06); }
        .grid-card:hover .grid-title { color: #3a6b2a; }
        .list-row:hover { background: #fffdf8; margin: 0 -8px; padding: 16px 8px; }
        .list-row:hover .list-title { color: #3a6b2a; }
        .list-row:hover .list-img { transform: scale(1.08); }
        .saved-row:hover .saved-title { color: #3a6b2a; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu  { animation: fadeUp 0.55s ease both; }
        .d1  { animation-delay: 0.06s; }
        .d2  { animation-delay: 0.12s; }
        .d3  { animation-delay: 0.18s; }
        .d4  { animation-delay: 0.24s; }

        input::placeholder { color: #c8b89e; }
        input:focus { border-color: #3a6b2a !important; }

        .filter-nav::-webkit-scrollbar { height: 0; }
      `}</style>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px 80px',
        fontFamily: "'Georgia', serif",
        background: '#faf6ef',
        color: '#1c1510',
      }}>

        {/* ── Masthead ── */}
        <header className="fu" style={{ paddingTop: '28px', marginBottom: '0' }}>
          {/* Top strip */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingBottom: '14px', borderBottom: '3px double #c8b89e', marginBottom: '14px',
          }}>
            <div>
              <p style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9a8e7a', marginBottom: '2px' }}>
                Lifestyles
              </p>
              <h1 style={{
                fontFamily: "'Lora', 'Georgia', serif",
                fontSize: '3.2rem',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#1c1510',
              }}>
                Food & Drink
              </h1>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '10px', color: '#9a8e7a', letterSpacing: '0.04em', marginBottom: '4px' }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <p style={{ fontSize: '10px', fontWeight: 700, color: '#3a6b2a', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                🌿 Seasonal Edition
              </p>
            </div>
          </div>

          {/* Filter nav */}
          <nav className="filter-nav" style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '14px' }}>
            {FILTER_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  flexShrink: 0,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: activeFilter === tab ? 'none' : '1px solid #c8b89e',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeFilter === tab ? '#1c1510' : 'transparent',
                  color: activeFilter === tab ? '#f2ece0' : '#7a6a54',
                  fontFamily: 'inherit',
                }}
              >
                {tab}
              </button>
            ))}
          </nav>
        </header>

        {/* ── Body Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px', paddingTop: '24px' }}>

          {/* Main */}
          <main style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '44px' }}>

            {/* Hero */}
            {showHero && (
              <section className="fu d1">
                <HeroSection article={HERO} />
              </section>
            )}

            {/* Secondary pair */}
            {filteredSecondary.length > 0 && (
              <section className="fu d2">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                  <span style={{ fontSize: '13px' }}>🍴</span>
                  <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9a8e7a' }}>
                    Editors' Picks
                  </h2>
                  <div style={{ flex: 1, height: '1px', background: '#ede5d8' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
                  {filteredSecondary.map(a => <SecondaryCard key={a.id} article={a} />)}
                </div>
              </section>
            )}

            {/* Decorative band */}
            <div style={{
              background: '#f0ece2',
              borderRadius: '6px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
            }}>
              {['🫙 Ferment something', '🔥 Master the braise', '🌿 Cook seasonally', '🥖 Bake your first loaf'].map(item => (
                <span key={item} style={{ fontSize: '12px', color: '#7a6a54', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.02em' }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Grid */}
            {filteredGrid.length > 0 && (
              <section className="fu d3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                  <span style={{ fontSize: '13px' }}>✦</span>
                  <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9a8e7a' }}>
                    This Week
                  </h2>
                  <div style={{ flex: 1, height: '1px', background: '#ede5d8' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  {filteredGrid.map(a => <GridCard key={a.id} article={a} />)}
                </div>
              </section>
            )}

            {/* List */}
            {filteredList.length > 0 && (
              <section className="fu d4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px' }}>📖</span>
                  <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9a8e7a' }}>
                    More to Read
                  </h2>
                  <div style={{ flex: 1, height: '1px', background: '#ede5d8' }} />
                </div>
                <div>
                  {filteredList.map(a => <ListRow key={a.id} article={a} />)}
                </div>
                <button
                  style={{
                    marginTop: '24px',
                    width: '100%',
                    padding: '14px',
                    borderRadius: '4px',
                    border: '1px solid #c8b89e',
                    background: 'transparent',
                    color: '#7a6a54',
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.borderColor = '#3a6b2a'
                    b.style.color = '#3a6b2a'
                  }}
                  onMouseLeave={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.borderColor = '#c8b89e'
                    b.style.color = '#7a6a54'
                  }}
                >
                  Load More Stories
                </button>
              </section>
            )}

            {/* Empty state */}
            {!hasContent && (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🍽️</div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '1.4rem', color: '#7a6a54', marginBottom: '10px' }}>
                  Nothing here yet for {activeFilter}
                </p>
                <p style={{ fontSize: '13px', color: '#9a8e7a', marginBottom: '20px' }}>
                  Our writers are in the kitchen. Check back soon.
                </p>
                <button
                  onClick={() => setActiveFilter('All')}
                  style={{
                    border: 'none', background: 'none',
                    color: '#3a6b2a', fontWeight: 700,
                    fontSize: '12px', letterSpacing: '0.1em',
                    textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Browse all food & drink →
                </button>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="fu d2" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <SeasonalWhatsIn />
            <NewsletterCard />
            <div style={{ height: '1px', background: '#ede5d8' }} />
            <MostSaved />
          </aside>
        </div>
      </div>
    </>
  )
}