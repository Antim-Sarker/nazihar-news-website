// src/routes/news.tsx
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news')({
  component: NewsLayout,
})

function NewsLayout() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 🔥 Section Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            News
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Latest updates from politics, economy, technology and more
          </p>
        </div>
      </div>

      {/* 🔥 Content Area */}
      <div className="max-w-7xl mx-auto px-5 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
          <Outlet />
        </div>
      </div>

    </div>
  )
}