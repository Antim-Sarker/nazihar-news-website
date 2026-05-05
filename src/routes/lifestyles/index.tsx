import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/lifestyles/')({
  component: LifestylesHome,
})

function LifestylesHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Lifestyles</h1>
      <p>Select a category:</p>

      <ul className="mt-4 space-y-2">
        <li><Link to="/lifestyles/health">Health</Link></li>
        <li><Link to="/lifestyles/travel">Travel</Link></li>
        
        
      </ul>
    </div>
  )
}

export default LifestylesHome