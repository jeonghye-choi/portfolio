import { useState } from 'react'
import { STACK_NOTES } from '../../data'

interface Props {
  stack: string[]
}

export default function StackRow({ stack }: Props) {
  const [hover, setHover] = useState<string | null>(null)

  return (
    <div className="stack">
      <span className="stack-label">stack</span>
      {stack.map(s => (
        <span
          key={s}
          className="stack-chip"
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(v => (v === s ? null : v))}
        >
          {s}
          {hover === s && STACK_NOTES[s] && (
            <span className="stack-note">{STACK_NOTES[s]}</span>
          )}
        </span>
      ))}
    </div>
  )
}
