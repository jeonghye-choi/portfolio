import { POSTS } from '../../data'
import type { Route } from '../../App'

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
        {POSTS.map(p => (
          <a
            key={p.slug}
            className="writerow"
            onClick={() => onNav({ name: 'post', slug: p.slug })}
          >
            <span className="w-date">— {p.date}</span>
            <span>
              <span className="w-title">{p.title}</span>
              <span className="w-desc">{p.desc}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
