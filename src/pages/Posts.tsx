import { posts } from '@/data'
import { useNavigate } from 'react-router-dom';

export default function Posts() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-label">writing</div>
      <div className="writelist">
        {posts.map(p => (
          <a
            key={p.id}
            className="writerow"
            onClick={() => navigate(`/posts/${p.id}`)}
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
