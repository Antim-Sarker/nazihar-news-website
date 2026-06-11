import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/create-news')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/create-news"!</div>
}
