import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

const latestNews = [
  {
    category: 'Politics',
    title: 'Parliament session opens amid sweeping calls for electoral reform across the nation',
    desc: 'Lawmakers gathered Tuesday as opposition parties presented a unified front demanding changes to the electoral commission before the next general election.',
    author: 'Rafiq Ahmed',
    time: '2 hours ago',
    img: '/news1.jpg',
    featured: true,
  },
  { category: 'Economy',       title: 'Bangladesh trade surplus narrows sharply in first quarter',                      time: '1 hour ago',  img: '/news2.jpg' },
  { category: 'Climate',       title: 'El Niño may return, raising heat and flood concerns for this monsoon',           time: '3 hours ago', img: '/news3.jpg' },
  { category: 'International', title: 'India remains silent on Hasina extradition request from Dhaka',                  time: '4 hours ago', img: '/news4.jpg' },
  { category: 'Sports',        title: 'Tigers announce squad for upcoming home series against Sri Lanka',               time: '5 hours ago', img: '/news5.jpg' },
]

const aroundNation = [
  { 
    category: 'National',
    title: 'Dhaka metro rail ridership crosses 2 lakh daily for first time',
    desc: 'Commuters praise the service...',
    time: '6 hours ago',
    img: '/nation1.jpg'
  },
  { 
    category: 'Technology',
    title: 'Startup Bangladesh fund disburses Tk 50 crore...',
    desc: 'The latest round targets...',
    time: '7 hours ago',
    img: '/nation2.jpg'
  },
  { 
    category: 'Health',
    title: 'Government launches free dengue testing...',
    desc: 'Health officials warn...',
    time: '8 hours ago',
    img: '/nation3.jpg'
  },
]

const businessNews = [
  {
    category: 'Markets',
    title: 'DSEX rises 1.2% as foreign investors return to banking stocks',
    desc: 'Analysts attribute the rebound to easing inflation data and central bank signals.',
    time: 'Today, 10:30 AM',
    img: '/business1.jpg'
  },
  {
    category: 'Real Estate',
    title: 'Apartment prices in Gulshan stabilise after two years of sharp gains',
    desc: 'A new supply pipeline and higher mortgage rates are cooling demand in premium zones.',
    time: 'Today, 9:15 AM',
    img: '/business2.jpg'
  },
  {
    category: 'Finance',
    title: 'Bangladesh Bank keeps policy rate unchanged at 8.5% for third straight quarter',
    desc: 'The central bank cited steady inflation outlook and strong remittance inflows as key factors.',
    time: 'Yesterday',
    img: '/business3.jpg'
  },
]
const mostRead = [
  { title: 'Will India hand over Hasina? Dhaka awaits official response',   reads: '12.4k' },
  { title: 'Power cuts return to rural areas as summer demand surges',      reads: '9.1k'  },
  { title: 'Garments sector faces headwinds as EU orders soften',           reads: '7.8k'  },
  { title: 'Dhaka-Chattogram highway expansion to begin in June',           reads: '6.2k'  },
  { title: 'SSC results 2026: pass rate improves by 4% nationwide',         reads: '5.5k'  },
]

const opinions = [
  {
    author: 'Dr. Farhana Islam',
    role: 'Senior Columnist',
    quote: '"Electoral reform cannot wait another term — the window is now"',
    image: '/farhana-islam.jpg',
  },
  {
    author: 'Tarek Hossain',
    role: 'Economic Analyst',
    quote: '"Our garment sector needs a brand, not just a price advantage"',
    image: '/tarek-hossain.jpg',
  },
  {
    author: 'Nasrin Akter',
    role: 'Environment Correspondent',
    quote: '"The next climate battle will be fought in the Sundarbans"',
    image: '/nasrin-akter.jpg',
  },
];

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[11px] font-medium tracking-widest text-red-600 uppercase whitespace-nowrap">{title}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

function NewsCard({ item }: { item: typeof aroundNation[0] }) {
  return (
    <div className="p-4 border-r border-gray-100 last:border-r-0">
<img
  src={item.img || "/placeholder.jpg"}
  alt=""
  className="w-full h-28 object-cover bg-gray-200 mb-3"
/>      <p className="text-[10px] text-red-600 tracking-widest uppercase mb-1">{item.category}</p>
      <h3 className="font-serif text-sm font-medium text-gray-900 leading-snug mb-2">{item.title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
      <p className="text-[11px] text-gray-400 mt-2">{item.time}</p>
    </div>
  )
}

function App() {
  const [featured, ...sideItems] = latestNews

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-5 flex gap-6">

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0">

          {/* Latest News Hero */}
          <SectionLabel title="Latest News" />
          <div className="flex border border-gray-100 bg-white mb-6">

            {/* Featured */}
            <div className="flex-[1.6] border-r border-gray-100">
              <img src={featured.img} alt="" className="w-full h-64 object-cover bg-gray-200" />
              <div className="p-4">
                <p className="text-[10px] text-red-600 tracking-widest uppercase mb-1.5">{featured.category}</p>
                <h2 className="font-serif text-xl font-medium text-gray-900 leading-snug mb-2">{featured.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{featured.desc}</p>
                <span className="text-[11px] text-gray-400">By {featured.author} · {featured.time}</span>
              </div>
            </div>

            {/* Side stack */}
            <div className="flex-1 flex flex-col divide-y divide-gray-100">
              {sideItems.map((item, i) => (
                <div key={i} className="flex gap-2.5 p-3 items-start">
                  <img src={item.img} alt="" className="w-16 h-12 object-cover bg-gray-200 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-red-600 tracking-wide uppercase mb-1">{item.category}</p>
                    <p className="text-[13px] font-medium text-gray-800 leading-snug">{item.title}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Around the Nation */}
          <SectionLabel title="Around the Nation" />
          <div className="grid grid-cols-3 border border-gray-100 bg-white mb-6">
            {aroundNation.map((item, i) => <NewsCard key={i} item={item} />)}
          </div>

          {/* Business & Markets */}
          <SectionLabel title="Business & Markets" />
          <div className="grid grid-cols-3 border border-gray-100 bg-white mb-6">
            {businessNews.map((item, i) => <NewsCard key={i} item={item} />)}
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
              <div key={i} className="flex gap-3 px-4 py-3 border-b border-gray-50 last:border-b-0 items-start">
                <span className="text-xl font-medium text-gray-200 min-w-[20px] leading-none">{i + 1}</span>
                <div>
                  <p className="text-[13px] text-gray-800 leading-snug">{item.title}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{item.reads} reads</p>
                </div>
              </div>
            ))}
          </div>

          {/* Opinion */}
          <div className="bg-white border border-gray-100">
  <div className="px-4 py-2.5 border-b-2 border-red-600 text-[11px] font-medium tracking-widest text-red-600 uppercase">
    Opinion
  </div>

  {opinions.map((op, i) => (
    <div key={i} className="px-4 py-3 border-b border-gray-50 last:border-b-0">
      
      <div className="flex items-center gap-2 mb-2">
        {/* IMAGE */}
        <img
          src={op.image}
          alt={op.author}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
        />

        <div>
          <p className="text-xs font-medium text-gray-800">{op.author}</p>
          <p className="text-[10px] text-gray-400">{op.role}</p>
        </div>
      </div>

      <p className="text-[13px] text-gray-700 leading-snug italic">
        {op.quote}
      </p>
    </div>
  ))}
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