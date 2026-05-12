interface Props {
  stack: string[]
}

export default function StackRow({ stack }: Props) {
  return (
    <div className="stack">
      <span className="stack-label">stack</span>
      {stack.map(s => (
        <span key={s} className="stack-chip">
          {s}
        </span>
      ))}
    </div>
  )
}
