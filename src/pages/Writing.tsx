import { posts } from '@/data'
import { useNavigate } from 'react-router-dom';

export default function Writing() {
  const navigate = useNavigate();

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
            onClick={() => navigate(`/writing/${p.id}`)}
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
