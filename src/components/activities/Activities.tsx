import { useState } from 'react'
import { activities } from '../../data'

export default function Activities() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="page">
      <div className="page-label">activities</div>
      <p className="page-intro">
        Things I do that aren't a full-time role. The angle is different — not "what did I build" but "how do I grow."
      </p>
      <div className="actlist">
        {activities.map((a, i) => {
          const isOpen = open === i
          return (
            <div key={i} className={'actrow' + (isOpen ? ' is-open' : '')}>
              <button
                className="actrow-trigger"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="act-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="act-when">{a.startDate} - {a.endDate}</span>
                <span className="act-body">
                  <span className="act-title">{a.title}</span>
                  <span className="act-desc">{a.intro}</span>
                </span>
                <span className="act-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="act-detail">
                  {a.description.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
