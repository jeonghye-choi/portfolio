import { posts } from '@/data'
import type { Route } from '@/App'

interface Props {
  slug: string
  onNav: (r: Route) => void
}

export default function Post({ slug, onNav }: Props) {
  const i = posts.findIndex(p => p.id === slug)
  const post = posts[i] ?? posts[0]!
  const prev = posts[(i - 1 + posts.length) % posts.length]!
  const next = posts[(i + 1) % posts.length]!

  return (
    <article className="post">
      <a className="back-link" onClick={() => onNav({ name: 'writing' })}>← all posts</a>
      <div className="post-date">— {post.date}</div>
      <h1 className="post-title">{post.title}</h1>
      <div className="post-body">
        {post.content}
      </div>
      <div className="post-foot">
        <a onClick={() => onNav({ name: 'post', slug: prev.id })}>← {prev.title}</a>
        <a onClick={() => onNav({ name: 'post', slug: next.id })}>{next.title} →</a>
      </div>
    </article>
  )
}
