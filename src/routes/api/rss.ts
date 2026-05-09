import { createFileRoute } from '@tanstack/react-router'

// All supported category slugs → Prothom Alo RSS URLs
const RSS_FEEDS: Record<string, string> = {
  'breaking':      'https://www.prothomalo.com/stories.rss',
  'national':      'https://www.prothomalo.com/bangladesh.rss',
  'politics':      'https://www.prothomalo.com/politics.rss',
  'economy':       'https://www.prothomalo.com/economy.rss',
  'international': 'https://www.prothomalo.com/international.rss',
  'sports':        'https://www.prothomalo.com/sports.rss',
  'cricket':       'https://www.prothomalo.com/sports/cricket.rss',
  'football':      'https://www.prothomalo.com/sports/football.rss',
  'entertainment': 'https://www.prothomalo.com/entertainment.rss',
  'technology':    'https://www.prothomalo.com/technology.rss',
  'education':     'https://www.prothomalo.com/education.rss',
  'lifestyle':     'https://www.prothomalo.com/lifestyle.rss',
}

export const Route = createFileRoute('/api/rss')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // Read ?category= param, default to 'breaking'
        const category = new URL(request.url).searchParams.get('category') ?? 'breaking'
        const rssUrl = RSS_FEEDS[category] ?? RSS_FEEDS['breaking']

        const response = await fetch(rssUrl, {
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