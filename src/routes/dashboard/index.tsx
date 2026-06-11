import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard,
})

type StoryStatus = 'published' | 'draft' | 'review'

interface Story {
  id: number
  title: string
  status: StoryStatus
  editorsPick?: boolean
  byline: string
  time: string
}

interface ActivityItem {
  initials: string
  color: 'teal' | 'coral' | 'purple' | 'amber' | 'blue'
  text: string
  highlight?: string
  time: string
}

interface Deadline {
  title: string
  due: string
  urgent?: boolean
}

interface Section {
  name: string
  count: number
  max: number
  color: string
}

const STORIES: Story[] = [
  { id: 1, title: 'Bangladesh garment sector braces for EU carbon tariff impact in Q3', status: 'published', editorsPick: true, byline: 'Nusrat Hossain', time: '2h ago' },
  { id: 2, title: 'Dhaka Metro Rail extension: delays push Phase 3 to late 2027', status: 'review', byline: 'Rafiqul Islam', time: '4h ago' },
  { id: 3, title: 'Farmers in Sylhet report record boro harvest despite erratic monsoon', status: 'published', byline: 'Parisa Begum', time: '5h ago' },
  { id: 4, title: 'Inside the push to revive Sundarbans ecotourism after cyclone Remal', status: 'draft', byline: 'Tanvir Ahmed', time: '8h ago' },
  { id: 5, title: 'Bangladesh cricket board announces new domestic T20 restructure for 2026', status: 'published', byline: 'Sumaiya Khan', time: 'Yesterday' },
  { id: 6, title: 'Health ministry expands community clinic network to 50 new upazilas', status: 'review', byline: 'Md. Karim', time: 'Yesterday' },
]

const ACTIVITY: ActivityItem[] = [
  { initials: 'NH', color: 'teal',   text: 'Nusrat published',  highlight: '"EU Carbon Tariff"',  time: '2 hours ago' },
  { initials: 'RI', color: 'coral',  text: 'Rafiqul submitted for review',                          time: '4 hours ago' },
  { initials: 'PB', color: 'purple', text: 'Parisa published',  highlight: '"Boro Harvest"',        time: '5 hours ago' },
  { initials: 'TA', color: 'amber',  text: 'Tanvir saved a draft',                                  time: '8 hours ago' },
  { initials: 'SK', color: 'blue',   text: 'Sumaiya published', highlight: '"BCB restructure"',     time: 'Yesterday' },
]

const DEADLINES: Deadline[] = [
  { title: 'Election results feature',  due: 'Due today · 6:00 PM',     urgent: true },
  { title: 'Budget analysis longform',  due: 'Due tomorrow · 9:00 AM' },
  { title: 'Quarterly print edition',   due: 'Due Jun 15 · All day' },
]

const SECTIONS: Section[] = [
  { name: 'National', count: 341, max: 341, color: '#1D9E75' },
  { name: 'Business', count: 280, max: 341, color: '#534AB7' },
  { name: 'World',    count: 224, max: 341, color: '#378ADD' },
  { name: 'Sports',   count: 155, max: 341, color: '#BA7517' },
  { name: 'Opinion',  count: 108, max: 341, color: '#D85A30' },
]

const STATUS_LABELS: Record<StoryStatus, string> = {
  published: 'Published',
  draft: 'Draft',
  review: 'In review',
}

const STATUS_STYLES: Record<StoryStatus, string> = {
  published: 'bg-green-100 text-green-800',
  draft:     'bg-amber-100 text-amber-800',
  review:    'bg-blue-100 text-blue-800',
}

const AVATAR_STYLES: Record<ActivityItem['color'], string> = {
  teal:   'bg-teal-100 text-teal-800',
  coral:  'bg-orange-100 text-orange-800',
  purple: 'bg-purple-100 text-purple-800',
  amber:  'bg-amber-100 text-amber-800',
  blue:   'bg-blue-100 text-blue-800',
}

type TabFilter = 'all' | StoryStatus

export default function Dashboard() {
  const [tab, setTab] = useState<TabFilter>('all')

  const filtered = tab === 'all' ? STORIES : STORIES.filter(s => s.status === tab)

  const metrics = [
    { label: 'Total stories', value: '1,284', sub: '+34 this month',  trend: 'up' },
    { label: 'Published',     value: '847',   sub: '+18 today',       trend: 'up' },
    { label: 'Drafts',        value: '312',   sub: '66 awaiting review', trend: 'neutral' },
    { label: "Editor's picks", value: '24',   sub: '3 expiring soon', trend: 'down' },
  ]

  const tabs: { key: TabFilter; label: string }[] = [
    { key: 'all',       label: 'All' },
    { key: 'published', label: 'Published' },
    { key: 'draft',     label: 'Drafts' },
    { key: 'review',    label: 'Review' },
  ]

  return (
    <div className="p-6 max-w-screen-xl mx-auto">

      {/* Top bar */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-xl font-medium tracking-tight">Editorial dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">Thursday, June 11 · Morning edition</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 text-sm px-3.5 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
            <FilterIcon /> Filter
          </button>
          <button className="flex items-center gap-1.5 text-sm px-3.5 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
            <PlusIcon /> New story
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-2.5 mb-6">
        {metrics.map(m => (
          <div key={m.label} className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">{m.label}</p>
            <p className="text-2xl font-medium leading-none">{m.value}</p>
            <p className={`text-xs mt-1.5 ${m.trend === 'up' ? 'text-green-700' : m.trend === 'down' ? 'text-red-700' : 'text-gray-400'}`}>
              {m.trend === 'up' ? '↑ ' : m.trend === 'down' ? '↓ ' : ''}{m.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Main columns */}
      <div className="grid grid-cols-[1fr_300px] gap-4 items-start">

        {/* Story list */}
        <div className="border border-gray-100 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Recent stories</span>
            <div className="flex gap-1">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`text-xs px-2.5 py-1 rounded-md border transition-colors ${
                    tab === t.key
                      ? 'border-gray-300 bg-gray-100 text-gray-900 font-medium'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-gray-50">
            {filtered.map((story, i) => (
              <div key={story.id} className="flex items-start gap-2.5 py-2.5">
                <span className="text-xs text-gray-300 font-medium pt-0.5 w-5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-snug mb-1">{story.title}</p>
                  <div className="flex items-center flex-wrap gap-1.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_STYLES[story.status]}`}>
                      {STATUS_LABELS[story.status]}
                    </span>
                    {story.editorsPick && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-purple-100 text-purple-800">
                        ★ Editor's pick
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{story.byline}</span>
                    <span className="text-xs text-gray-300">· {story.time}</span>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0 pt-0.5">
                  <button className="text-gray-400 hover:text-gray-700 p-0.5" title="Edit">
                    <EditIcon />
                  </button>
                  <button className="text-gray-400 hover:text-gray-700 p-0.5" title="More">
                    <DotsIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 text-center">
            <button className="text-xs text-gray-400 hover:text-gray-700 border border-gray-200 px-3 py-1.5 rounded-lg">
              View all stories
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">

          {/* Top sections */}
          <div className="border border-gray-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Top sections</span>
              <span className="text-xs text-gray-300">Last 7 days</span>
            </div>
            {SECTIONS.map(s => (
              <div key={s.name} className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs text-gray-400 text-right w-16 shrink-0">{s.name}</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(s.count / s.max) * 100}%`, background: s.color }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-7 shrink-0">{s.count}</span>
              </div>
            ))}
          </div>

          {/* Team activity */}
          <div className="border border-gray-100 rounded-xl p-4">
            <div className="mb-3.5">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Team activity</span>
            </div>
            <div className="divide-y divide-gray-50">
              {ACTIVITY.map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 py-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${AVATAR_STYLES[a.color]}`}>
                    {a.initials}
                  </div>
                  <div>
                    <p className="text-sm leading-snug">
                      {a.text}{' '}
                      {a.highlight && <span className="text-gray-400">{a.highlight}</span>}
                    </p>
                    <p className="text-xs text-gray-300 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deadlines */}
          <div className="border border-gray-100 rounded-xl p-4">
            <div className="mb-3.5">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Upcoming deadlines</span>
            </div>
            <div className="divide-y divide-gray-50">
              {DEADLINES.map((d, i) => (
                <div key={i} className="flex items-start gap-2.5 py-2">
                  <ClockIcon className="text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm">{d.title}</p>
                    <p className={`text-xs mt-0.5 ${d.urgent ? 'text-amber-700 font-medium' : 'text-gray-300'}`}>
                      {d.due}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

function DotsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="5" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}