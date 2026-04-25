import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/politics')({
  component: PoliticsPage,
})

const featuredStory = {
  category: 'Politics',
  title: 'Parliament session opens amid sweeping calls for electoral reform across the nation',
  desc: 'Lawmakers gathered Tuesday as opposition parties presented a unified front demanding changes to the electoral commission before the next general election. The session, which drew record attendance, is expected to last through the week as multiple reform bills are tabled simultaneously.',
  author: 'Rafiq Ahmed',
  time: '2 hours ago',
  img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80',
  readTime: '5 min read',
}

const topStories = [
  {
    category: 'Politics',
    title: 'Opposition coalition finalises joint candidate list ahead of by-elections',
    desc: 'Three major opposition parties have reached a seat-sharing agreement covering 14 constituencies.',
    time: '1 hour ago',
    img: 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=400&q=80',
  },
  {
    category: 'Politics',
    title: 'President signs landmark constitutional amendment into law',
    desc: 'The amendment, passed with a two-thirds majority, expands judicial independence provisions.',
    time: '3 hours ago',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80',
  },
  {
    category: 'Politics',
    title: 'Local government reform bill draws fierce debate on parliament floor',
    desc: 'Analysts say the proposed changes could reshape how municipalities manage their own budgets.',
    time: '4 hours ago',
    img: 'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?w=400&q=80',
  },
]

const latestPolitics = [
  {
    title: 'Chief adviser meets with foreign diplomats amid regional tensions',
    time: '30 min ago',
    category: 'Diplomacy',
    img: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=300&q=80',
  },
  {
    title: 'BNP submits 10-point demand letter to election commission',
    time: '1 hour ago',
    category: 'Parties',
    img: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=300&q=80',
  },
  {
    title: 'Anti-corruption commission issues summons to former minister',
    time: '2 hours ago',
    category: 'Accountability',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&q=80',
  },
  {
    title: 'Voter registration drive to begin across all 64 districts next month',
    time: '3 hours ago',
    category: 'Elections',
    img: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=300&q=80',
  },
  {
    title: 'Interim cabinet reshuffled as two advisers resign amid controversy',
    time: '5 hours ago',
    category: 'Cabinet',
    img: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=300&q=80',
  },
]

const analysis = [
  {
    title: 'Why the electoral commission overhaul matters more than ever',
    author: 'Dr. Farhana Islam',
    role: 'Senior Political Analyst',
    time: 'Today',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    title: 'The fragile coalition: Can opposition unity survive until election day?',
    author: 'Tarek Hossain',
    role: 'Political Correspondent',
    time: 'Yesterday',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    title: 'Grassroots politics in Bangladesh: A changing landscape',
    author: 'Nasrin Akter',
    role: 'Field Reporter',
    time: '2 days ago',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
]

const mostRead = [
  { title: 'Will India hand over Hasina? Dhaka awaits official response', reads: '12.4k' },
  { title: 'Parliament passes emergency session on border security bill',  reads: '9.8k'  },
  { title: 'Opposition leader calls for immediate resignation of adviser', reads: '8.1k'  },
  { title: 'Electoral reform: What the proposed changes actually mean',    reads: '6.7k'  },
  { title: 'Former PM faces new graft charges filed by state prosecutor',  reads: '5.3k'  },
]

const tags = ['Elections', 'Parliament', 'Reform', 'Diplomacy', 'Parties', 'Cabinet', 'Accountability', 'Local Govt', 'Judiciary', 'Foreign Policy']

function SectionLabel({ title, hasArrow = false }: { title: string; hasArrow?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[11px] font-medium tracking-widest text-red-600 uppercase whitespace-nowrap">{title}</span>
      {hasArrow && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

function PoliticsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Category Header Banner */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-1 h-7 bg-red-600 rounded-full inline-block" />
            <h1 className="text-2xl font-serif font-semibold text-gray-900">Politics</h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['All', 'Parliament', 'Elections', 'Diplomacy', 'Parties'].map((tab, i) => (
              <button
                key={tab}
                className={`px-3 py-1 text-xs rounded-full border transition ${
                  i === 0
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800 bg-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-6 flex gap-6">

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0 space-y-8">

          {/* ── Featured Story ── */}
          <div className="bg-white border border-gray-100">
            <img
              src={featuredStory.img}
              alt={featuredStory.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <p className="text-[10px] text-red-600 tracking-widest uppercase mb-2">{featuredStory.category}</p>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 leading-snug mb-3">
                {featuredStory.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{featuredStory.desc}</p>
              <div className="flex items-center gap-3 text-[11px] text-gray-400">
                <span>By {featuredStory.author}</span>
                <span>·</span>
                <span>{featuredStory.time}</span>
                <span>·</span>
                <span>{featuredStory.readTime}</span>
              </div>
            </div>
          </div>

          {/* ── Top Stories ── */}
          <div>
            <SectionLabel title="Top Stories" />
            <div className="grid grid-cols-3 gap-4">
              {topStories.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 cursor-pointer group">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-red-600 tracking-widest uppercase mb-1">{item.category}</p>
                    <h3 className="font-serif text-sm font-semibold text-gray-900 leading-snug mb-2 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-[11px] text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Latest ── */}
          <div>
            <SectionLabel title="Latest in Politics" hasArrow />
            <div className="bg-white border border-gray-100 divide-y divide-gray-50">
              {latestPolitics.map((item, i) => (
                <div key={i} className="flex gap-3 p-4 items-start cursor-pointer group hover:bg-gray-50 transition-colors">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-14 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-red-600 tracking-widest uppercase mb-1">{item.category}</p>
                    <h3 className="font-serif text-sm font-medium text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Analysis & Opinion ── */}
          <div>
            <SectionLabel title="Analysis & Opinion" />
            <div className="grid grid-cols-3 gap-4">
              {analysis.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 p-4 cursor-pointer group hover:border-gray-200 transition">
                  <div className="flex items-center gap-2 mb-3">
                    <img src={item.img} alt={item.author} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-800">{item.author}</p>
                      <p className="text-[10px] text-gray-400">{item.role}</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-sm font-medium text-gray-900 leading-snug italic group-hover:text-red-600 transition-colors">
                    "{item.title}"
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-2">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tags ── */}
          <div>
            <SectionLabel title="Browse by Topic" />
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="px-3 py-1.5 text-xs border border-gray-200 text-gray-600 hover:border-red-400 hover:text-red-600 transition-colors rounded-sm bg-white"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="w-72 flex-shrink-0 space-y-5">

          {/* Most Read */}
          <div className="bg-white border border-gray-100">
            <div className="px-4 py-2.5 border-b-2 border-red-600 text-[11px] font-medium tracking-widest text-red-600 uppercase">
              Most Read
            </div>
            {mostRead.map((item, i) => (
              <div key={i} className="flex gap-3 px-4 py-3 border-b border-gray-50 last:border-b-0 items-start cursor-pointer group">
                <span className="text-xl font-medium text-gray-200 min-w-[20px] leading-none">{i + 1}</span>
                <div>
                  <p className="text-[13px] text-gray-800 leading-snug group-hover:text-red-600 transition-colors">{item.title}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{item.reads} reads</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="bg-red-600 p-5 text-white">
            <p className="text-[10px] uppercase tracking-widest mb-2 text-red-200">Stay Informed</p>
            <h3 className="font-serif text-base font-semibold mb-2 leading-snug">Get politics updates in your inbox</h3>
            <p className="text-xs text-red-100 mb-4 leading-relaxed">Daily briefings on what's happening in Bangladeshi politics.</p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-xs text-gray-900 bg-white rounded mb-2 outline-none"
            />
            <button className="w-full py-2 text-xs font-medium bg-white text-red-600 rounded hover:bg-red-50 transition">
              Subscribe
            </button>
          </div>

          {/* Ad placeholder */}
          <div className="bg-gray-50 border border-gray-100 p-6 text-center text-[11px] text-gray-300 tracking-widest uppercase">
            Advertisement
          </div>

        </aside>
      </div>
    </div>
  )
}