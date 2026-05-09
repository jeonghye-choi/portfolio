import { POSTS } from '../../data'
import type { Route } from '../../App'

interface Props {
  slug: string
  onNav: (r: Route) => void
}

export default function Post({ slug, onNav }: Props) {
  const i = POSTS.findIndex(p => p.slug === slug)
  const post = POSTS[i] ?? POSTS[0]!
  const prev = POSTS[(i - 1 + POSTS.length) % POSTS.length]!
  const next = POSTS[(i + 1) % POSTS.length]!

  return (
    <article className="post">
      <a className="back-link" onClick={() => onNav({ name: 'writing' })}>← all posts</a>
      <div className="post-date">— {post.date}</div>
      <h1 className="post-title">{post.title}</h1>
      <div className="post-body">
        {post.body.map((p, k) => <p key={k}>{p}</p>)}
      </div>
      <div className="post-foot">
        <a onClick={() => onNav({ name: 'post', slug: prev.slug })}>← {prev.title}</a>
        <a onClick={() => onNav({ name: 'post', slug: next.slug })}>{next.title} →</a>
      </div>
    </article>
  )
}
