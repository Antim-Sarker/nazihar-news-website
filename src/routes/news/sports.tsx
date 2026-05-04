import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/sports')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/news/sports"!</div>
}
