import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/opinion/analysis')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/opinion/analysis"!</div>
}
