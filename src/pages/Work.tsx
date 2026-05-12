import { works } from '@/data'
import { useNavigate } from 'react-router-dom';

export default function Work() {
  const navigate = useNavigate()

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
            onClick={() => navigate(`/work/${c.id}`)}
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
