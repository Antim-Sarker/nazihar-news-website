import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/politics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/news/politics"!</div>
}
