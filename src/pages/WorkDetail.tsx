import { works } from '@/data'
import StackRow from '@/components/StackRow'
import type { Route } from '@/App'

interface Props {
  co: string
  onNav: (r: Route) => void
}

export default function WorkDetail({ co, onNav }: Props) {
  const company = works.find(c => c.id === co) ?? works[0]!

  return (
    <div className="page">
      <a className="back-link" onClick={() => onNav({ name: 'work' })}>← all work</a>
      <header className="co-header">
        <div className="co-meta">{company.startDate} - {company.endDate} · {company.position.toUpperCase()}</div>
        <h1 className="co-name">{company.company}</h1>
        <p className="co-summary">{company.description}</p>
      </header>

      {company.projects.map((p, i) => (
        <section key={i} className="tate-row">
          <div className="tate-left">
            <div className="tate-projectlabel">Project {String.fromCharCode(65 + i)}</div>
            <h2 className="tate-projectname">{p.name}</h2>
            <div className="tate-body">
              {p.description.split('\n\n').map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
            <StackRow stack={p.stack} />
          </div>
          <div className="tate-right">
            <div className="tate-card">
              <div className="card-noise" />
              <div className="card-label">{p.name.split(' ').slice(0, 3).join(' ')}</div>
            </div>
            {p.imageUrl && <div className="tate-cap">{p.imageUrl}</div>}
          </div>
        </section>
      ))}

    </div>
  )
}
