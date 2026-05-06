import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/opinion/editorials')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/opinion/editorials"!</div>
}
