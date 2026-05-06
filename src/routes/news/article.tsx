import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/news/article')({
  component: ArticlePage,
  validateSearch: (search: Record<string, unknown>) => ({
    url: (search.url as string) ?? '',
    title: (search.title as string) ?? '',
    img: (search.img as string) ?? '',
    category: (search.category as string) ?? '',
    pubDate: (search.pubDate as string) ?? '',
    desc: (search.desc as string) ?? '',
  }),
})

function ArticlePage() {
  const { url, title, img, category, pubDate, desc } = Route.useSearch()
  const navigate = useNavigate()

  const [article, setArticle] = useState<{
    title: string
    image: string
    description: string
    published: string
    paragraphs: string[]
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) { setError(true); setLoading(false); return }

    fetch(`/api/article?url=${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(data => {
        setArticle(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [url])

  const displayTitle = article?.title || title
  const displayImage = article?.image || img
  const displayDesc = article?.description || desc

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-5 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate({ to: '/news/breaking-news' })}
            className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
          >
            ← Back
          </button>
          {category && (
            <span className="text-[11px] font-medium text-red-500 uppercase">{category}</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-8">

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-72 bg-gray-200 rounded" />
            <div className="space-y-2">
              {[1,2,3,4,5].map(i => <div key={i} className="h-4 bg-gray-200 rounded" />)}
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">Could not load the full article.</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Read on Prothom Alo →
            </a>
          </div>
        )}

        {/* Article content */}
        {!loading && !error && (
          <article className="bg-white border p-6 md:p-10 space-y-6">

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">{displayTitle}</h1>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
              {category && (
                <span className="text-red-500 font-medium uppercase">{category}</span>
              )}
              {(article?.published || pubDate) && (
                <span>{new Date(article?.published || pubDate).toLocaleString('bn-BD')}</span>
              )}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-blue-500 hover:underline"
              >
                View on Prothom Alo ↗
              </a>
            </div>

            {/* Hero image */}
            {displayImage && (
              <img
                src={displayImage}
                alt=""
                className="w-full max-h-96 object-cover rounded"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            )}

            {/* Description lead */}
            {displayDesc && (
              <p className="text-base text-gray-600 font-medium leading-relaxed border-l-4 border-red-500 pl-4">
                {displayDesc}
              </p>
            )}

            {/* Article paragraphs */}
            {article?.paragraphs && article.paragraphs.length > 0 ? (
              <div className="space-y-4">
                {article.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm md:text-base text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            ) : (
              !loading && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  <p>Full article content could not be extracted.</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 inline-block"
                  >
                    Read full article on Prothom Alo →
                  </a>
                </div>
              )
            )}

          </article>
        )}
      </div>
    </div>
  )
}