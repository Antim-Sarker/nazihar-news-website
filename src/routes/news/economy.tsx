import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/economy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/news/economy"!</div>
}
