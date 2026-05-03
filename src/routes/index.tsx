import { createFileRoute } from '@tanstack/react-router'
import Video from '../components/VideoPortal'
import Sports from '../components/Sports'
import National from '../components/National'
import World from '../components/World'
import Breaking from '../components/Breaking'
import Business from '../components/Business'
import Entertainment from '../components/Entertainment'
import Lifestyle from '#/components/Lifestyle'
export const Route = createFileRoute('/')({
  component: App,
})



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
          <SectionLabel title="Business" />
          <div className="mb-6">
            <Business />
          </div>

          {/* Sports */}
          <SectionLabel title="Sports" />
          <div className="bg-white border p-4 mb-6">
            <Sports />
          </div>
          {/* Entertainment */}
          <SectionLabel title="Entertainment" />
          <div className="bg-white border p-4 mb-6">
            <Entertainment />
          </div>
          {/* Lifestyle */}
          <SectionLabel title="Lifestyle" />
          <div className="bg-white border p-4 mb-6">
            <Lifestyle />
          </div>

        </main>
      </div>
    </div>
  )
}