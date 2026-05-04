import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/news/')({
  component: NewsHome,
})

function NewsHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold">News</h1>
      <p>Select a category:</p>

      <ul className="mt-4 space-y-2">
        <li><Link to="/news/breaking-news">Breaking</Link></li>
        <li><Link to="/news/economy">Economy</Link></li>
        <li><Link to="/news/international">International</Link></li>
        <li><Link to="/news/politics">Politics</Link></li>
        <li><Link to="/news/technology">Technology</Link></li>
      </ul>
    </div>
  )
}

export default NewsHome