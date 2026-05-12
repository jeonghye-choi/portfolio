import { posts } from '@/data'
import type { Route } from '@/App'

interface Props {
  onNav: (r: Route) => void
}

export default function WritingList({ onNav }: Props) {
  return (
    <div className="page page-narrow">
      <div className="page-label">writing</div>
      <p className="page-intro">
        Notes on engineering, design, and the gap between them.
      </p>
      <div className="writelist">
        {posts.map(p => (
          <a
            key={p.id}
            className="writerow"
            onClick={() => onNav({ name: 'post', slug: p.id })}
          >
            <span className="w-date">— {p.date}</span>
            <span>
              <span className="w-title">{p.title}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
