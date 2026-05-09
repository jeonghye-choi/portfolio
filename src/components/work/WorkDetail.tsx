import { COMPANIES } from '../../data'
import StackRow from './StackRow'
import type { Route } from '../../App'

interface Props {
  co: string
  onNav: (r: Route) => void
}

export default function WorkDetail({ co, onNav }: Props) {
  const company = COMPANIES.find(c => c.id === co) ?? COMPANIES[0]!

  return (
    <div className="page">
      <a className="back-link" onClick={() => onNav({ name: 'work' })}>← all work</a>
      <header className="co-header">
        <div className="co-meta">{company.period} · {company.role.toUpperCase()}</div>
        <h1 className="co-name">{company.name}</h1>
        <p className="co-summary">{company.summary}</p>
      </header>

      {company.projects.map((p, i) => (
        <section key={i} className="tate-row">
          <div className="tate-left">
            <div className="tate-projectlabel">Project {String.fromCharCode(65 + i)}</div>
            <h2 className="tate-projectname">{p.name}</h2>
            <p className="tate-impact">
              {p.impact.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
            </p>
            <div className="tate-body">
              {p.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
            </div>
            <StackRow stack={p.stack} />
          </div>
          <div className="tate-right">
            <div className="tate-card">
              <div className="card-noise" />
              <div className="card-label">{p.name.split(' ').slice(0, 3).join(' ')}</div>
            </div>
            <div className="tate-cap">— evidence · screenshot</div>
          </div>
        </section>
      ))}

    </div>
  )
}
