import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/rss')({
  server: {
    handlers: {
      GET: async () => {
        const response = await fetch('https://www.prothomalo.com/stories.rss', {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; NewsReader/1.0)',
            'Accept': 'application/rss+xml, application/xml, text/xml',
          },
        })

        if (!response.ok) {
          return new Response(JSON.stringify({ error: 'Failed to fetch RSS' }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' },
          })
        }

        const xml = await response.text()

        return new Response(xml, {
          status: 200,
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=300',
          },
        })
      },
    },
  },
})