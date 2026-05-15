import { posts } from '@/data'
import { useNavigate, useParams } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams()
  const i = posts.findIndex(p => p.id === id)
  const post = posts[i] ?? posts[0]!
  const prev = posts[(i - 1 + posts.length) % posts.length]!
  const next = posts[(i + 1) % posts.length]!
  const navigate = useNavigate()

  return (
    <article className="post">
      <a className="back-link" onClick={() => navigate('/posts')}>← all posts</a>
      <div className="post-date">— {post.date}</div>
      <h1 className="post-title">{post.title}</h1>
      <div className="post-body">
        {post.content}
      </div>
      <div className="post-foot">
        <a onClick={() => navigate(`/posts/${prev.id}`)}>← {prev.title}</a>
        <a onClick={() => navigate(`/posts/${next.id}`)}>{next.title} →</a>
      </div>
    </article>
  )
}
