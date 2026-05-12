import type { Route } from '@/App'
import { works } from '@/data'

interface Props {
  onNav: (r: Route) => void
}

export default function WorkCatalogue({ onNav }: Props) {
  return (
    <div className="page">
      <div className="page-label">work</div>
      <p className="page-intro">
        Four places, eight years, one practice. Click any role to read the full story.
      </p>
      <div className="catalogue">
        {works.map(c => (
          <a
            key={c.id}
            className="cat-row"
            onClick={() => onNav({ name: 'work-detail', co: c.id })}
          >
            <span className="cat-yr">{c.startDate} - {c.endDate}</span>
            <span className="cat-co">{c.company}</span>
            <span className="cat-rl">{c.position}</span>
            <span className="cat-summary">{c.description}</span>
            <span className="cat-go">read →</span>
          </a>
        ))}
      </div>
    </div>
  )
}
