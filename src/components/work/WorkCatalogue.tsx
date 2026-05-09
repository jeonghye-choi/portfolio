import { COMPANIES } from '../../data'
import type { Route } from '../../App'

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
        {COMPANIES.map(c => (
          <a
            key={c.id}
            className="cat-row"
            onClick={() => onNav({ name: 'work-detail', co: c.id })}
          >
            <span className="cat-yr">{(c.period.match(/\d{4}/g) || []).join(' – ')}</span>
            <span className="cat-co">{c.name}</span>
            <span className="cat-rl">{c.role}</span>
            <span className="cat-summary">{c.summary}</span>
            <span className="cat-go">read →</span>
          </a>
        ))}
      </div>
    </div>
  )
}
