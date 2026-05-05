import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lifestyles/fashion')({
  component: RouteComponent,
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface FashionArticle {
  id: number
  tag: string
  title: string
  excerpt: string
  author: string
  time: string
  imageUrl: string
  featured?: boolean
  isNew?: boolean
  readTime?: string
}

interface StyleTrend {
  id: number
  label: string
  subtitle: string
  imageUrl: string
  color: string
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const HERO_ARTICLE: FashionArticle = {
  id: 1,
  tag: 'Cover Story',
  title: 'The Return of Quiet Luxury: Why Less Is the New More',
  excerpt:
    'As maximalism fades, designers are betting on restraint, quality, and timeless silhouettes to define the decade ahead.',
  author: 'Isabelle Fontaine',
  time: '2 hr ago',
  readTime: '8 min',
  imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=85',
  featured: true,
}

const EDITORIAL_PICKS: FashionArticle[] = [
  {
    id: 2,
    tag: 'Runway',
    title: 'Paris Fashion Week Most Daring Moments',
    excerpt: 'From sheer gowns to deconstructed tailoring, the season runways pushed boundaries in spectacular fashion.',
    author: 'Camille Durand',
    time: '4 hr ago',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80',
    isNew: true,
  },
  {
    id: 3,
    tag: 'Style',
    title: 'Dressing for the Office Reinvented',
    excerpt: 'The post-pandemic workplace has upended every assumption about what professional dressing means.',
    author: 'Naomi Ashford',
    time: '6 hr ago',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80',
  },
  {
    id: 4,
    tag: 'Sustainability',
    title: 'Can Fashion Ever Truly Be Green?',
    excerpt: 'A new wave of designers is rethinking every stage of production — from fiber to final stitch.',
    author: 'Leila Mora',
    time: '8 hr ago',
    readTime: '10 min',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
]

const MORE_ARTICLES: FashionArticle[] = [
  {
    id: 5,
    tag: 'Beauty',
    title: 'The Minimalist Skincare Edit for Every Season',
    author: 'Sophie Chen',
    time: '10 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
    excerpt: '',
  },
  {
    id: 6,
    tag: 'Accessories',
    title: 'Bags That Defined the Year — and Will Define the Next',
    author: 'Renee Petit',
    time: '12 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
    excerpt: '',
  },
  {
    id: 7,
    tag: 'Menswear',
    title: 'The New Masculine: Softness as Strength',
    author: 'Theo Blackwell',
    time: '14 hr ago',
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&q=80',
    excerpt: '',
  },
  {
    id: 8,
    tag: 'Vintage',
    title: 'How to Build a Wardrobe That Lasts Decades',
    author: 'Miriam Solis',
    time: '1 day ago',
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80',
    excerpt: '',
  },
]

const TRENDS: StyleTrend[] = [
  { id: 1, label: 'Coastal Grandmother', subtitle: '14.3K articles', imageUrl: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=300&q=80', color: '#e8e0d5' },
  { id: 2, label: 'Dark Academia', subtitle: '11.8K articles', imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80', color: '#2c2218' },
  { id: 3, label: 'Quiet Luxury', subtitle: '9.2K articles', imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=80', color: '#c8beb4' },
  { id: 4, label: 'Y2K Revival', subtitle: '8.5K articles', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80', color: '#d4a0c0' },
]

const FILTER_TABS = ['All', 'Runway', 'Style', 'Beauty', 'Accessories', 'Menswear', 'Sustainability', 'Vintage']

// ─── Sub-components ───────────────────────────────────────────────────────────

function TagPill({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '9px',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        padding: '3px 8px',
        borderRadius: '2px',
        background: accent ? '#1a1a1a' : 'transparent',
        color: accent ? '#f5f0eb' : '#8a7f74',
        border: accent ? 'none' : '1px solid #c8beb4',
      }}
    >
      {label}
    </span>
  )
}

function NewBadge() {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '9px',
        fontWeight: 800,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        padding: '2px 7px',
        borderRadius: '2px',
        background: '#c8502a',
        color: '#fff',
      }}
    >
      New
    </span>
  )
}

function HeroArticle({ article }: { article: FashionArticle }) {
  return (
    <article
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        cursor: 'pointer',
        background: '#0d0d0d',
        minHeight: '520px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      className="hero-article"
    >
      <img
        src={article.imageUrl}
        alt={article.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.55,
          transition: 'opacity 0.6s ease, transform 0.8s ease',
        }}
        className="hero-img"
      />
      {/* Vertical rule accent */}
      <div style={{
        position: 'absolute',
        top: 32,
        left: 32,
        width: '2px',
        height: '48px',
        background: '#c8a96e',
      }} />
      <div style={{
        position: 'absolute',
        top: 32,
        left: 44,
        padding: '0',
      }}>
        <TagPill label={article.tag} accent />
      </div>
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(5,4,3,0.97) 0%, rgba(5,4,3,0.5) 45%, transparent 100%)',
      }} />
      <div style={{ position: 'relative', padding: '0 40px 40px' }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: '2.6rem',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#f5f0eb',
            marginBottom: '16px',
            maxWidth: '680px',
            letterSpacing: '-0.01em',
          }}
        >
          {article.title}
        </h2>
        <p style={{ color: '#b8ad9e', fontSize: '15px', lineHeight: 1.65, maxWidth: '560px', marginBottom: '20px' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ color: '#c8a96e', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em' }}>
            {article.author}
          </span>
          <span style={{ color: '#5a5045', fontSize: '11px' }}>·</span>
          <span style={{ color: '#7a6f62', fontSize: '11px' }}>{article.time}</span>
          <span style={{ color: '#5a5045', fontSize: '11px' }}>·</span>
          <span style={{ color: '#7a6f62', fontSize: '11px' }}>{article.readTime} read</span>
        </div>
      </div>
    </article>
  )
}

function EditorialCard({ article, index }: { article: FashionArticle; index: number }) {
  return (
    <article
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '12px' }}
      className="editorial-card"
    >
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', aspectRatio: '4/3', background: '#1a1510' }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', display: 'block' }}
          className="card-img"
        />
        {/* Issue number overlay */}
        <div style={{
          position: 'absolute',
          top: 10,
          right: 10,
          fontFamily: "'Playfair Display', serif",
          fontSize: '11px',
          color: 'rgba(245,240,235,0.5)',
          letterSpacing: '0.1em',
        }}>
          0{index + 1}
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          {article.isNew && <NewBadge />}
          <TagPill label={article.tag} />
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: '1.1rem',
            fontWeight: 700,
            lineHeight: 1.3,
            color: '#1a1510',
            marginBottom: '8px',
            letterSpacing: '-0.01em',
          }}
          className="card-title"
        >
          {article.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#8a7f74', lineHeight: 1.6, marginBottom: '10px' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#c8a96e', letterSpacing: '0.06em' }}>
            {article.author}
          </span>
          <span style={{ color: '#d0c8be', fontSize: '11px' }}>·</span>
          <span style={{ fontSize: '11px', color: '#aba09a' }}>{article.time}</span>
          {article.readTime && (
            <>
              <span style={{ color: '#d0c8be', fontSize: '11px' }}>·</span>
              <span style={{ fontSize: '11px', color: '#aba09a' }}>{article.readTime}</span>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

function ListArticleRow({ article }: { article: FashionArticle }) {
  return (
    <article
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
        padding: '18px 0',
        borderBottom: '1px solid #ede8e1',
        cursor: 'pointer',
      }}
      className="list-row"
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: '6px' }}>
          <TagPill label={article.tag} />
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1rem',
            fontWeight: 700,
            color: '#1a1510',
            lineHeight: 1.35,
            marginBottom: '6px',
            letterSpacing: '-0.005em',
          }}
          className="list-title"
        >
          {article.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#c8a96e', letterSpacing: '0.06em' }}>
            {article.author}
          </span>
          <span style={{ color: '#d0c8be' }}>·</span>
          <span style={{ fontSize: '11px', color: '#aba09a' }}>{article.time}</span>
        </div>
      </div>
      <div style={{ flexShrink: 0, width: '80px', height: '64px', borderRadius: '2px', overflow: 'hidden', background: '#ede8e1' }}>
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

function TrendCard({ trend }: { trend: StyleTrend }) {
  const isDark = trend.id === 2
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '3px',
        cursor: 'pointer',
        aspectRatio: '3/4',
        background: trend.color,
      }}
      className="trend-card"
    >
      <img
        src={trend.imageUrl}
        alt={trend.label}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.7,
          transition: 'transform 0.7s ease, opacity 0.4s ease',
        }}
        className="trend-img"
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
      }} />
      <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.9rem',
          fontWeight: 700,
          color: '#f5f0eb',
          lineHeight: 1.2,
          marginBottom: '4px',
        }}>
          {trend.label}
        </p>
        <p style={{ fontSize: '10px', color: 'rgba(245,240,235,0.6)', letterSpacing: '0.06em' }}>
          {trend.subtitle}
        </p>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Trends */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '1px', background: '#c8a96e' }} />
          <h2 style={{
            fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#8a7f74',
          }}>
            Style Trends
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {TRENDS.map((t) => <TrendCard key={t.id} trend={t} />)}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#ede8e1' }} />

      {/* Newsletter */}
      <div style={{
        background: '#1a1510',
        borderRadius: '4px',
        padding: '28px 24px',
        color: '#f5f0eb',
      }}>
        <div style={{ width: '32px', height: '2px', background: '#c8a96e', marginBottom: '16px' }} />
        <p style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '10px' }}>
          The Edit
        </p>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          fontWeight: 700,
          lineHeight: 1.25,
          marginBottom: '10px',
          color: '#f5f0eb',
        }}>
          Fashion intelligence, curated weekly.
        </h3>
        <p style={{ fontSize: '13px', color: '#8a7f74', lineHeight: 1.6, marginBottom: '20px' }}>
          Runway reports, trend analysis, and the stories worth reading — delivered every Thursday.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '2px',
            border: '1px solid #3a3028',
            background: '#0d0d0d',
            color: '#f5f0eb',
            fontSize: '13px',
            marginBottom: '10px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        />
        <button style={{
          width: '100%',
          padding: '11px',
          borderRadius: '2px',
          border: 'none',
          background: '#c8a96e',
          color: '#1a1510',
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}>
          Subscribe
        </button>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#ede8e1' }} />

      {/* Most Read */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '1px', background: '#c8a96e' }} />
          <h2 style={{
            fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#8a7f74',
          }}>
            Most Read
          </h2>
        </div>
        {[
          { n: 1, title: "The Bag That Broke the Internet — Again", tag: 'Accessories' },
          { n: 2, title: "Why Designers Are Ditching Black", tag: 'Style' },
          { n: 3, title: "The $40 Dress That Looks Like $400", tag: 'Budget' },
          { n: 4, title: "Milan Street Style, Shot by Us", tag: 'Runway' },
        ].map((item) => (
          <div
            key={item.n}
            style={{
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
              padding: '12px 0',
              borderBottom: '1px solid #ede8e1',
              cursor: 'pointer',
            }}
            className="most-read-row"
          >
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ede8e1',
              lineHeight: 1,
              minWidth: '24px',
            }}>
              {item.n}
            </span>
            <div>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#1a1510',
                lineHeight: 1.3,
                marginBottom: '4px',
              }}
              className="most-read-title"
              >
                {item.title}
              </p>
              <TagPill label={item.tag} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

// ─── Route Component ──────────────────────────────────────────────────────────

function RouteComponent() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredMore =
    activeFilter === 'All'
      ? MORE_ARTICLES
      : MORE_ARTICLES.filter((a) => a.tag === activeFilter)

  const filteredEditorial =
    activeFilter === 'All'
      ? EDITORIAL_PICKS
      : EDITORIAL_PICKS.filter((a) => a.tag === activeFilter)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        .hero-article:hover .hero-img { opacity: 0.45; transform: scale(1.03); }
        .editorial-card:hover .card-img { transform: scale(1.06); }
        .editorial-card:hover .card-title { color: #c8a96e; }
        .list-row:hover { background: #faf8f5; }
        .list-row:hover .list-title { color: #c8a96e; }
        .list-row:hover .list-img { transform: scale(1.08); }
        .trend-card:hover .trend-img { transform: scale(1.08); opacity: 0.85; }
        .most-read-row:hover .most-read-title { color: #c8a96e; }

        /* Staggered fade-in on load */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .delay-1 { animation-delay: 0.08s; }
        .delay-2 { animation-delay: 0.16s; }
        .delay-3 { animation-delay: 0.24s; }
        .delay-4 { animation-delay: 0.32s; }

        input::placeholder { color: #5a5045; }
        input:focus { border-color: #c8a96e !important; }

        /* Thin scrollbar for filter nav */
        .filter-nav::-webkit-scrollbar { height: 0; }
      `}</style>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px 80px',
          fontFamily: "'Georgia', serif",
          background: '#faf8f5',
          color: '#1a1510',
        }}
      >
        {/* ── Masthead ── */}
        <header
          className="fade-up"
          style={{
            borderBottom: '2px solid #1a1510',
            padding: '28px 0 18px',
            marginBottom: '0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div>
              <p style={{
                fontSize: '9px', fontWeight: 800, letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#c8a96e', marginBottom: '4px',
              }}>
                Lifestyles
              </p>
              <h1 style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: '3.5rem',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#1a1510',
              }}>
                Fashion
              </h1>
            </div>
            <p style={{ fontSize: '11px', color: '#aba09a', letterSpacing: '0.04em', textAlign: 'right', lineHeight: 1.5 }}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              <br />
              <span style={{ color: '#c8a96e', fontWeight: 600 }}>Style Edition</span>
            </p>
          </div>

          {/* Filter nav */}
          <nav
            className="filter-nav"
            style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '2px' }}
          >
            {FILTER_TABS.map((tab) => (
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
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                  background: activeFilter === tab ? '#1a1510' : 'transparent',
                  color: activeFilter === tab ? '#f5f0eb' : '#8a7f74',
                }}
              >
                {tab}
              </button>
            ))}
          </nav>
        </header>

        {/* ── Body Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '48px',
            paddingTop: '40px',
          }}
        >
          {/* Main column */}
          <main style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* Hero */}
            <section className="fade-up delay-1">
              <HeroArticle article={HERO_ARTICLE} />
            </section>

            {/* Editorial picks */}
            {filteredEditorial.length > 0 && (
              <section className="fade-up delay-2">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ width: '24px', height: '1px', background: '#c8a96e' }} />
                  <h2 style={{
                    fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#8a7f74',
                  }}>
                    Editorial Picks
                  </h2>
                  <div style={{ flex: 1, height: '1px', background: '#ede8e1' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
                  {filteredEditorial.map((a, i) => (
                    <EditorialCard key={a.id} article={a} index={i} />
                  ))}
                </div>
              </section>
            )}

            {/* Decorative divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ flex: 1, height: '1px', background: '#ede8e1' }} />
              <div style={{ width: '6px', height: '6px', background: '#c8a96e', transform: 'rotate(45deg)' }} />
              <div style={{ flex: 1, height: '1px', background: '#ede8e1' }} />
            </div>

            {/* More stories */}
            {filteredMore.length > 0 && (
              <section className="fade-up delay-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                  <div style={{ width: '24px', height: '1px', background: '#c8a96e' }} />
                  <h2 style={{
                    fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#8a7f74',
                  }}>
                    More in Fashion
                  </h2>
                  <div style={{ flex: 1, height: '1px', background: '#ede8e1' }} />
                </div>
                <div>
                  {filteredMore.map((a) => <ListArticleRow key={a.id} article={a} />)}
                </div>
                <button
                  style={{
                    marginTop: '24px',
                    width: '100%',
                    padding: '14px',
                    borderRadius: '2px',
                    border: '1px solid #c8beb4',
                    background: 'transparent',
                    color: '#5a5045',
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#c8a96e'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#c8a96e'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#c8beb4'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#5a5045'
                  }}
                >
                  Load More Stories
                </button>
              </section>
            )}

            {/* Empty state */}
            {filteredEditorial.length === 0 && filteredMore.length === 0 && activeFilter !== 'All' && (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#8a7f74', marginBottom: '12px' }}>
                  No stories in {activeFilter}
                </p>
                <p style={{ fontSize: '13px', color: '#aba09a', marginBottom: '20px' }}>
                  Check back soon for the latest coverage.
                </p>
                <button
                  onClick={() => setActiveFilter('All')}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#c8a96e',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Browse all fashion →
                </button>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <div className="fade-up delay-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}