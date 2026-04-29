import { createFileRoute } from '@tanstack/react-router'
import Video from '../components/VideoPortal'
import Sports from '../components/Sports'
import National from '../components/National'
import World from '../components/World'
import Breaking from '../components/Breaking'

export const Route = createFileRoute('/')({
  component: App,
})

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

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[11px] font-medium tracking-widest text-red-600 uppercase whitespace-nowrap">
        {title}
      </span>
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
      />
      <p className="text-[10px] text-red-600 tracking-widest uppercase mb-1">
        {item.category}
      </p>
      <h3 className="font-serif text-sm font-medium text-gray-900 leading-snug mb-2">
        {item.title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
      <p className="text-[11px] text-gray-400 mt-2">{item.time}</p>
    </div>
  )
}

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-5">

        <main className="w-full">

          {/* Breaking News */}
          <SectionLabel title="Breaking News" />
          <div className="mb-6">
            <Breaking />
          </div>

          {/* Around Nation */}
          <SectionLabel title="Around the Nation" />
            <div className="mb-6">
              <National />
            </div>
          {/* World */}
          <SectionLabel title="Around the Word" />
            <div className="mb-6">
              <World />
            </div>

          {/* VIDEO SECTION */}
          <SectionLabel title="Latest Videos" />
          <div className="mb-6">
            <Video />
          </div>

          {/* Business */}
          <SectionLabel title="Business & Markets" />
          <div className="grid grid-cols-1 md:grid-cols-3 border bg-white mb-6">
            {businessNews.map((item, i) => (
              <NewsCard key={i} item={item} />
            ))}
          </div>

          {/* Sports */}
          <SectionLabel title="Sports" />
          <div className="bg-white border p-4 mb-6">
            <Sports />
          </div>

        </main>
      </div>
    </div>
  )
}