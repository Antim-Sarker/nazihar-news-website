import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/opinion/')({
  component: OpinionHome,
})

function OpinionHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Opinion</h1>
      <p>Select a category:</p>

      <ul className="mt-4 space-y-2">
        <li><Link to="/opinion/editorials">Editorials</Link></li>
        <li><Link to="/opinion/analysis">Analysis</Link></li>
        
        
      </ul>
    </div>
  )
}

export default OpinionHome