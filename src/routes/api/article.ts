import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/article')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url).searchParams.get('url')

        if (!url || !url.startsWith('https://www.prothomalo.com')) {
          return new Response(JSON.stringify({ error: 'Invalid URL' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          })
        }

        try {
          const response = await fetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; NewsReader/1.0)',
              'Accept': 'text/html',
            },
          })

          const html = await response.text()

          // Extract og:title, og:image, og:description meta tags
          const title = html.match(/]+property="og:title"[^>]+content="([^"]+)"/)?.[1] ?? ''
          const image = html.match(/]+property="og:image"[^>]+content="([^"]+)"/)?.[1] ?? ''
          const description = html.match(/]+property="og:description"[^>]+content="([^"]+)"/)?.[1] ?? ''
          const published = html.match(/]+property="article:published_time"[^>]+content="([^"]+)"/)?.[1] ?? ''

          // Extract article body paragraphs
          const paragraphs: string[] = []
          const pRegex = /]*class="[^"]*story-element[^"]*"[^>]*>([\s\S]*?)<\/p>/g
          let match
          while ((match = pRegex.exec(html)) !== null) {
            const text = match[1].replace(/<[^>]+>/g, '').trim()
            if (text.length > 30) paragraphs.push(text)
          }

          // Fallback: grab any  tags with decent content
          if (paragraphs.length === 0) {
            const fallback = /]*>([\s\S]*?)<\/p>/g
            while ((match = fallback.exec(html)) !== null) {
              const text = match[1].replace(/<[^>]+>/g, '').trim()
              if (text.length > 60) paragraphs.push(text)
            }
          }

          return new Response(
            JSON.stringify({ title, image, description, published, paragraphs }),
            {
              status: 200,
              headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=600',
              },
            }
          )
        } catch {
          return new Response(JSON.stringify({ error: 'Failed to fetch article' }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },
    },
  },
})