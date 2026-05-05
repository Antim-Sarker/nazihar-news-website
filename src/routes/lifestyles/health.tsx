import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lifestyles/health')({
  component: RouteComponent,
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface HealthArticle {
  id: number
  tag: string
  title: string
  excerpt: string
  author: string
  authorRole: string
  time: string
  readTime?: string
  imageUrl: string
  isNew?: boolean
  evidenceBased?: boolean
}

interface StatCard {
  icon: string
  value: string
  label: string
  delta: string
  positive: boolean
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const HERO: HealthArticle = {
  id: 1,
  tag: 'Research',
  title: 'The Seven-Hour Threshold: What Sleep Science Finally Agrees On',
  excerpt:
    'After decades of conflicting data, a sweeping meta-analysis of 1.3 million adults has settled the debate — and the answer is more nuanced than any headline suggests.',
  author: 'Dr. Sarah Okonkwo',
  authorRole: 'Sleep Medicine',
  time: '1 hr ago',
  readTime: '14 min',
  imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&q=85',
  evidenceBased: true,
}

const FEATURED_ROW: HealthArticle[] = [
  {
    id: 2,
    tag: 'Mental Health',
    title: 'Why Chronic Loneliness Is Now Being Treated as a Public Health Emergency',
    excerpt: 'Researchers are finding that sustained social isolation rewires the brain in measurable ways — and reversal is possible, but not passive.',
    author: 'Dr. James Patel',
    authorRole: 'Psychiatry',
    time: '3 hr ago',
    readTime: '10 min',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80',
    isNew: true,
    evidenceBased: true,
  },
  {
    id: 3,
    tag: 'Nutrition',
    title: 'Time-Restricted Eating: What the Latest Trials Actually Show',
    excerpt: 'A rigorous look at who benefits, who doesn\'t, and the one variable most studies have failed to control for.',
    author: 'Dr. Anika Müller',
    authorRole: 'Metabolic Health',
    time: '5 hr ago',
    readTime: '9 min',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    evidenceBased: true,
  },
  {
    id: 4,
    tag: 'Fitness',
    title: 'Zone 2 Training: The Boring Workout That Is Actually the Best One',
    excerpt: 'Elite athletes have trained this way for decades. Here\'s why the research now says everyone else should too.',
    author: 'Coach Malik Thomas',
    authorRole: 'Exercise Physiology',
    time: '7 hr ago',
    readTime: '8 min',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },
]

const LIST_ARTICLES: HealthArticle[] = [
  {
    id: 5,
    tag: 'Gut Health',
    title: 'The Microbiome Reset: What Probiotics Can and Cannot Do',
    author: 'Dr. Priya Nair',
    authorRole: 'Gastroenterology',
    time: '9 hr ago',
    readTime: '7 min',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
    excerpt: '',
    evidenceBased: true,
  },
  {
    id: 6,
    tag: 'Heart Health',
    title: 'Resting Heart Rate as a Longevity Marker: A Cardiologist Explains',
    author: 'Dr. Chen Wei',
    authorRole: 'Cardiology',
    time: '11 hr ago',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80',
    excerpt: '',
    evidenceBased: true,
  },
  {
    id: 7,
    tag: 'Hormones',
    title: 'Cortisol, Stress, and the Body\'s Hidden Alarm System',
    author: 'Dr. Leila Hassan',
    authorRole: 'Endocrinology',
    time: '1 day ago',
    readTime: '8 min',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
    excerpt: '',
  },
  {
    id: 8,
    tag: 'Longevity',
    title: 'Cold Exposure Therapy: Separating Signal From Noise',
    author: 'Dr. Anya Frost',
    authorRole: 'Sports Medicine',
    time: '1 day ago',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    excerpt: '',
    evidenceBased: true,
  },
  {
    id: 9,
    tag: 'Mental Health',
    title: 'How Breathwork Reaches the Parts Talk Therapy Can\'t',
    author: 'Dr. Marcus Reid',
    authorRole: 'Neuroscience',
    time: '2 days ago',
    readTime: '9 min',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
    excerpt: '',
  },
]

const STATS: StatCard[] = [
  { icon: '😴', value: '6.8h', label: 'Avg. sleep tracked', delta: '+12 min vs last month', positive: true },
  { icon: '🚶', value: '8,240', label: 'Daily steps avg.', delta: '+340 vs last month', positive: true },
  { icon: '💧', value: '1.9L', label: 'Hydration tracked', delta: '−0.1L vs goal', positive: false },
  { icon: '🧘', value: '18 min', label: 'Mindfulness daily', delta: '+4 min vs last month', positive: true },
]

const FILTER_TABS = [
  'All', 'Research', 'Mental Health', 'Nutrition', 'Fitness',
  'Gut Health', 'Heart Health', 'Hormones', 'Longevity',
]

const WEEKLY_TIPS = [
  { day: 'Mon', tip: 'Add a 10-min walk after dinner to blunt blood sugar spikes.', done: true },
  { day: 'Tue', tip: 'Try eating your largest meal before 3 PM.', done: true },
  { day: 'Wed', tip: 'Aim for 25g+ of fiber today from whole food sources.', done: false },
  { day: 'Thu', tip: 'Strength train at least one compound movement today.', done: false },
  { day: 'Fri', tip: 'Log your sleep time tonight and track your wake quality.', done: false },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function TagChip({ label }: { label: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    Research:      { bg: '#e8f0fb', color: '#1a4a8a' },
    'Mental Health': { bg: '#f0ebf8', color: '#5a2a8a' },
    Nutrition:     { bg: '#e8f6ee', color: '#1a6a3a' },
    Fitness:       { bg: '#fff0e8', color: '#8a3a10' },
    'Gut Health':  { bg: '#f5f0e8', color: '#7a5010' },
    'Heart Health':{ bg: '#fce8ea', color: '#8a1a2a' },
    Hormones:      { bg: '#e8f5f5', color: '#1a5a5a' },
    Longevity:     { bg: '#eef0e8', color: '#3a5a1a' },
  }
  const { bg, color } = map[label] ?? { bg: '#f0f0f0', color: '#444' }
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '9px', fontWeight: 800,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      padding: '3px 9px', borderRadius: '3px',
      background: bg, color,
    }}>
      {label}
    </span>
  )
}

function EvidenceBadge() {
  return (
    <span title="Evidence-based reporting" style={{
      display: 'inline-flex', alignItems: 'center', gap: '4px',
      fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: '#2a7a4a',
      border: '1px solid #2a7a4a', borderRadius: '3px',
      padding: '2px 7px',
    }}>
      ✓ Evidence-based
    </span>
  )
}

function AuthorLine({ author, role, time, readTime }: { author: string; role: string; time: string; readTime?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
      <div style={{
        width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
        background: 'linear-gradient(135deg, #4a8a6a, #2a5a8a)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '11px', color: '#fff', fontWeight: 700,
      }}>
        {author.replace('Dr. ', '').replace('Coach ', '').charAt(0)}
      </div>
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#2a4a3a', letterSpacing: '0.04em', lineHeight: 1 }}>
          {author}
        </p>
        <p style={{ fontSize: '10px', color: '#7a9a8a', marginTop: '1px' }}>{role}</p>
      </div>
      <span style={{ color: '#c8d8d0', fontSize: '10px' }}>·</span>
      <span style={{ fontSize: '10px', color: '#9ab8a8' }}>{time}</span>
      {readTime && <>
        <span style={{ color: '#c8d8d0', fontSize: '10px' }}>·</span>
        <span style={{ fontSize: '10px', color: '#9ab8a8' }}>{readTime} read</span>
      </>}
    </div>
  )
}

function HeroCard({ article }: { article: HealthArticle }) {
  return (
    <article style={{ cursor: 'pointer', position: 'relative', borderRadius: '8px', overflow: 'hidden', minHeight: '460px', background: '#0d1a14' }} className="health-hero">
      <img
        src={article.imageUrl}
        alt={article.title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, transition: 'transform 0.8s ease, opacity 0.5s ease' }}
        className="health-hero-img"
      />
      {/* Subtle grid overlay for clinical feel */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,16,0.98) 0%, rgba(10,22,16,0.5) 55%, transparent 100%)' }} />
      {/* Top-right stat decoration */}
      <div style={{
        position: 'absolute', top: 24, right: 24,
        background: 'rgba(42,122,74,0.15)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(42,122,74,0.3)', borderRadius: '6px',
        padding: '12px 16px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '22px', fontWeight: 800, color: '#5ad4a0', letterSpacing: '-0.02em', lineHeight: 1 }}>1.3M</p>
        <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px' }}>Adults studied</p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <TagChip label={article.tag} />
          {article.evidenceBased && <EvidenceBadge />}
        </div>
        <h2 style={{
          fontFamily: "'DM Serif Display', 'Georgia', serif",
          fontSize: '2.4rem', fontWeight: 400, lineHeight: 1.15,
          color: '#f0f8f4', marginBottom: '14px',
          maxWidth: '680px', letterSpacing: '-0.01em',
        }}>
          {article.title}
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(200,230,215,0.75)', lineHeight: 1.7, maxWidth: '580px', marginBottom: '22px' }}>
          {article.excerpt}
        </p>
        <AuthorLine author={article.author} role={article.authorRole} time={article.time} readTime={article.readTime} />
      </div>
    </article>
  )
}

function FeaturedCard({ article }: { article: HealthArticle }) {
  return (
    <article style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '12px', background: '#fff', borderRadius: '6px', border: '1px solid #e4ede8', overflow: 'hidden' }} className="feat-card">
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
          className="feat-img"
        />
        {article.isNew && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: '#1a6a8a', color: '#fff',
            fontSize: '9px', fontWeight: 800, letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '3px 8px', borderRadius: '3px',
          }}>
            New
          </div>
        )}
      </div>
      <div style={{ padding: '6px 18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <TagChip label={article.tag} />
          {article.evidenceBased && <EvidenceBadge />}
        </div>
        <h3 style={{
          fontFamily: "'DM Serif Display', 'Georgia', serif",
          fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.3,
          color: '#0d1a14', marginBottom: '8px', letterSpacing: '-0.01em',
          transition: 'color 0.2s',
        }} className="feat-title">
          {article.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#5a7a6a', lineHeight: 1.65, marginBottom: '14px' }}>
          {article.excerpt}
        </p>
        <AuthorLine author={article.author} role={article.authorRole} time={article.time} readTime={article.readTime} />
      </div>
    </article>
  )
}

function ListRow({ article }: { article: HealthArticle }) {
  return (
    <article style={{
      display: 'flex', gap: '16px', alignItems: 'flex-start',
      padding: '18px 0', borderBottom: '1px solid #e4ede8', cursor: 'pointer',
    }} className="health-list-row">
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px', flexWrap: 'wrap' }}>
          <TagChip label={article.tag} />
          {article.evidenceBased && <EvidenceBadge />}
        </div>
        <h3 style={{
          fontFamily: "'DM Serif Display', 'Georgia', serif",
          fontSize: '1rem', fontWeight: 400, color: '#0d1a14',
          lineHeight: 1.35, marginBottom: '8px', letterSpacing: '-0.005em',
          transition: 'color 0.2s',
        }} className="list-title">
          {article.title}
        </h3>
        <AuthorLine author={article.author} role={article.authorRole} time={article.time} readTime={article.readTime} />
      </div>
      <div style={{ flexShrink: 0, width: '84px', height: '68px', borderRadius: '4px', overflow: 'hidden', background: '#e4ede8' }}>
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

function StatsPanel() {
  return (
    <div style={{ background: '#0d1a14', borderRadius: '8px', padding: '22px', color: '#f0f8f4' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5ad4a0' }} />
        <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5ad4a0' }}>
          Community Trends
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '6px', padding: '14px',
          }}>
            <div style={{ fontSize: '18px', marginBottom: '6px' }}>{s.icon}</div>
            <p style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f0f8f4', letterSpacing: '-0.02em', lineHeight: 1 }}>
              {s.value}
            </p>
            <p style={{ fontSize: '10px', color: 'rgba(200,230,215,0.5)', marginTop: '3px', letterSpacing: '0.03em' }}>
              {s.label}
            </p>
            <p style={{
              fontSize: '9px', marginTop: '6px', fontWeight: 700,
              color: s.positive ? '#5ad4a0' : '#f4a460',
              letterSpacing: '0.03em',
            }}>
              {s.delta}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function WeeklyPlan() {
  const [checked, setChecked] = useState<Record<number, boolean>>({
    0: true, 1: true,
  })
  return (
    <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e4ede8', padding: '22px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
        <span style={{ fontSize: '14px' }}>📋</span>
        <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5a7a6a' }}>
          This Week's Plan
        </h2>
      </div>
      {WEEKLY_TIPS.map((item, i) => (
        <div
          key={i}
          onClick={() => setChecked(prev => ({ ...prev, [i]: !prev[i] }))}
          style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            padding: '11px 0',
            borderBottom: i < WEEKLY_TIPS.length - 1 ? '1px solid #f0f5f2' : 'none',
            cursor: 'pointer',
          }}
        >
          <div style={{
            flexShrink: 0,
            width: '18px', height: '18px', borderRadius: '50%', marginTop: '1px',
            border: checked[i] ? 'none' : '2px solid #c8d8d0',
            background: checked[i] ? '#2a7a4a' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            {checked[i] && <span style={{ color: '#fff', fontSize: '9px', fontWeight: 800 }}>✓</span>}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2a7a4a', marginBottom: '3px' }}>
              {item.day}
            </p>
            <p style={{
              fontSize: '12px', color: checked[i] ? '#9ab8a8' : '#2a4a3a',
              lineHeight: 1.5,
              textDecoration: checked[i] ? 'line-through' : 'none',
              transition: 'color 0.2s',
            }}>
              {item.tip}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

function NewsletterCard() {
  return (
    <div style={{
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #e8f5ee 0%, #e4eef8 100%)',
      border: '1px solid #c8ddd0',
      padding: '24px',
    }}>
      <p style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2a7a4a', marginBottom: '8px' }}>
        Health Dispatch
      </p>
      <h3 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: '1.15rem', fontWeight: 400, lineHeight: 1.3,
        color: '#0d1a14', marginBottom: '8px',
      }}>
        Science-backed health news, twice a week.
      </h3>
      <p style={{ fontSize: '12px', color: '#5a7a6a', lineHeight: 1.6, marginBottom: '18px' }}>
        Written by physicians and researchers. No supplements ads. No pseudoscience.
      </p>
      <input
        type="email"
        placeholder="your@email.com"
        style={{
          width: '100%', padding: '10px 14px', borderRadius: '4px',
          border: '1px solid #c8d8d0', background: '#fff',
          color: '#0d1a14', fontSize: '13px', marginBottom: '10px',
          boxSizing: 'border-box', outline: 'none', fontFamily: 'inherit',
        }}
      />
      <button style={{
        width: '100%', padding: '11px', borderRadius: '4px',
        border: 'none', background: '#0d1a14', color: '#5ad4a0',
        fontSize: '10px', fontWeight: 800, letterSpacing: '0.15em',
        textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
      }}>
        Subscribe Free
      </button>
    </div>
  )
}

function AskADoctor() {
  return (
    <div style={{
      background: '#fff', borderRadius: '8px',
      border: '1px solid #e4ede8', padding: '22px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <span style={{ fontSize: '16px' }}>🩺</span>
        <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5a7a6a' }}>
          Reader Q&A
        </h2>
      </div>
      {[
        { q: 'Is creatine safe for long-term use?', a: 'Dr. Malik Thomas', tag: 'Fitness' },
        { q: 'How do I know if I have a gut imbalance?', a: 'Dr. Priya Nair', tag: 'Gut Health' },
        { q: 'Should I get a continuous glucose monitor?', a: 'Dr. Anika Müller', tag: 'Nutrition' },
      ].map((item, i) => (
        <div key={i} style={{
          padding: '13px 0',
          borderBottom: i < 2 ? '1px solid #f0f5f2' : 'none',
          cursor: 'pointer',
        }} className="qa-row">
          <p style={{
            fontSize: '12px', fontWeight: 600, color: '#0d1a14',
            lineHeight: 1.4, marginBottom: '5px', transition: 'color 0.2s',
          }} className="qa-q">
            "{item.q}"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10px', color: '#2a7a4a', fontWeight: 700 }}>{item.a}</span>
            <TagChip label={item.tag} />
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Route Component ──────────────────────────────────────────────────────────

function RouteComponent() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredFeatured = activeFilter === 'All'
    ? FEATURED_ROW
    : FEATURED_ROW.filter(a => a.tag === activeFilter)

  const filteredList = activeFilter === 'All'
    ? LIST_ARTICLES
    : LIST_ARTICLES.filter(a => a.tag === activeFilter)

  const showHero = activeFilter === 'All' || HERO.tag === activeFilter
  const hasContent = showHero || filteredFeatured.length > 0 || filteredList.length > 0

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

        .health-hero:hover .health-hero-img { transform: scale(1.03); opacity: 0.55; }
        .feat-card:hover .feat-img { transform: scale(1.05); }
        .feat-card:hover .feat-title { color: #2a7a4a; }
        .health-list-row:hover { background: #f5faf7; margin: 0 -8px; padding: 18px 8px; }
        .health-list-row:hover .list-title { color: #2a7a4a; }
        .health-list-row:hover .list-img { transform: scale(1.07); }
        .qa-row:hover .qa-q { color: #2a7a4a; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu  { animation: fadeUp 0.5s ease both; }
        .d1  { animation-delay: 0.05s; }
        .d2  { animation-delay: 0.12s; }
        .d3  { animation-delay: 0.19s; }
        .d4  { animation-delay: 0.26s; }
        .d5  { animation-delay: 0.33s; }

        input::placeholder { color: #9ab8a8; }
        input:focus { border-color: #2a7a4a !important; }
        .filter-nav::-webkit-scrollbar { height: 0; }
      `}</style>

      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 24px 80px',
        fontFamily: "'Trebuchet MS', sans-serif",
        background: '#f5faf7',
        color: '#0d1a14',
      }}>

        {/* ── Masthead ── */}
        <header className="fu" style={{ paddingTop: '28px', marginBottom: '0' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            paddingBottom: '16px', marginBottom: '14px',
            borderBottom: '1px solid #c8d8d0',
          }}>
            <div>
              <p style={{
                fontSize: '9px', fontWeight: 800, letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#2a7a4a', marginBottom: '4px',
              }}>
                Lifestyles
              </p>
              <h1 style={{
                fontFamily: "'DM Serif Display', 'Georgia', serif",
                fontSize: '3.4rem', fontWeight: 400,
                letterSpacing: '-0.03em', lineHeight: 1,
                color: '#0d1a14',
              }}>
                Health & Wellness
              </h1>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '10px', color: '#7a9a8a', marginBottom: '4px', letterSpacing: '0.04em' }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#e8f5ee', border: '1px solid #b4d4c0', borderRadius: '4px', padding: '4px 10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2a7a4a' }} />
                <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2a7a4a' }}>
                  Science-first coverage
                </span>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <nav className="filter-nav" style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '14px' }}>
            {FILTER_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  flexShrink: 0, fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '6px 14px', borderRadius: '3px',
                  border: activeFilter === tab ? 'none' : '1px solid #c8d8d0',
                  cursor: 'pointer', transition: 'all 0.2s',
                  background: activeFilter === tab ? '#0d1a14' : 'transparent',
                  color: activeFilter === tab ? '#5ad4a0' : '#5a7a6a',
                  fontFamily: 'inherit',
                }}
              >
                {tab}
              </button>
            ))}
          </nav>
        </header>

        {/* ── Body Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 308px', gap: '44px', paddingTop: '24px' }}>

          {/* Main */}
          <main style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '44px' }}>

            {/* Hero */}
            {showHero && (
              <section className="fu d1">
                <HeroCard article={HERO} />
              </section>
            )}

            {/* Featured trio */}
            {filteredFeatured.length > 0 && (
              <section className="fu d2">
                <SectionHeading icon="🔬" label="In Depth" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
                  {filteredFeatured.map(a => <FeaturedCard key={a.id} article={a} />)}
                </div>
              </section>
            )}

            {/* Metric band */}
            {activeFilter === 'All' && (
              <div style={{
                background: '#fff', borderRadius: '6px',
                border: '1px solid #e4ede8',
                padding: '18px 24px',
                display: 'flex', gap: '0',
              }}>
                {[
                  { label: 'Studies cited this month', value: '214', icon: '📄' },
                  { label: 'Expert contributors', value: '38', icon: '👩‍⚕️' },
                  { label: 'Peer-reviewed sources', value: '91%', icon: '✓' },
                  { label: 'Articles fact-checked', value: '100%', icon: '🔎' },
                ].map((m, i) => (
                  <div key={i} style={{
                    flex: 1, textAlign: 'center',
                    padding: '0 16px',
                    borderRight: i < 3 ? '1px solid #e4ede8' : 'none',
                  }}>
                    <p style={{ fontSize: '16px', marginBottom: '4px' }}>{m.icon}</p>
                    <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d1a14', letterSpacing: '-0.02em', lineHeight: 1 }}>{m.value}</p>
                    <p style={{ fontSize: '10px', color: '#7a9a8a', marginTop: '4px', lineHeight: 1.4, letterSpacing: '0.02em' }}>{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* List */}
            {filteredList.length > 0 && (
              <section className="fu d3">
                <SectionHeading icon="📰" label="More in Health" />
                <div>
                  {filteredList.map(a => <ListRow key={a.id} article={a} />)}
                </div>
                <button
                  style={{
                    marginTop: '24px', width: '100%', padding: '14px',
                    borderRadius: '4px', border: '1px solid #c8d8d0',
                    background: 'transparent', color: '#5a7a6a',
                    fontSize: '10px', fontWeight: 800,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.borderColor = '#2a7a4a'; b.style.color = '#2a7a4a'
                  }}
                  onMouseLeave={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.borderColor = '#c8d8d0'; b.style.color = '#5a7a6a'
                  }}
                >
                  Load More Articles
                </button>
              </section>
            )}

            {/* Empty state */}
            {!hasContent && (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '36px', marginBottom: '14px' }}>🩺</div>
                <p style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.4rem', color: '#5a7a6a', marginBottom: '10px',
                }}>
                  No articles in {activeFilter} yet
                </p>
                <p style={{ fontSize: '13px', color: '#7a9a8a', marginBottom: '20px' }}>
                  Our physicians are reviewing the latest research.
                </p>
                <button
                  onClick={() => setActiveFilter('All')}
                  style={{
                    border: 'none', background: 'none',
                    color: '#2a7a4a', fontWeight: 800,
                    fontSize: '11px', letterSpacing: '0.12em',
                    textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Browse all health coverage →
                </button>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="fu d3" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <StatsPanel />
            <WeeklyPlan />
            <NewsletterCard />
            <AskADoctor />
          </aside>
        </div>
      </div>
    </>
  )
}

function SectionHeading({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
      <span style={{ fontSize: '13px' }}>{icon}</span>
      <h2 style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7a9a8a' }}>
        {label}
      </h2>
      <div style={{ flex: 1, height: '1px', background: '#dceae2' }} />
    </div>
  )
}