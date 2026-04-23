import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Latest News</h1>

      {/* News Card */}
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border">
        <img
          src="https://picsum.photos/400/200"
          alt="news"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">
            Breaking News Title Goes Here
          </h2>

          <p className="text-gray-600 text-sm">
            This is a dummy news description. You can replace it later with real API data from your backend.
          </p>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border">
        <img
          src="https://picsum.photos/400/200"
          alt="news"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">
            Breaking News Title Goes Here
          </h2>

          <p className="text-gray-600 text-sm">
            This is a dummy news description. You can replace it later with real API data from your backend.
          </p>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border">
        <img
          src="https://picsum.photos/400/200"
          alt="news"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">
            Breaking News Title Goes Here
          </h2>

          <p className="text-gray-600 text-sm">
            This is a dummy news description. You can replace it later with real API data from your backend.
          </p>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}