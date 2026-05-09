import { useEffect, useRef, useState } from 'react'
import DotAnimation from './DotAnimation'
import type { Route } from '../App'

interface Props {
  onNav: (r: Route) => void
}

export default function Landing({ onNav }: Props) {
  const [size, setSize] = useState({ w: 1200, h: 480 })
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fit = () => {
      if (!wrapRef.current) return
      const r = wrapRef.current.getBoundingClientRect()
      setSize({ w: Math.floor(r.width), h: Math.floor(r.height) })
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div className="page-landing">
      <div className="landing-text">
        <h1 className="landing-headline">
          <span className="headline-line1">Frontend developer</span>
          <span className="headline-line2">who engineers the moments users feel.</span>
        </h1>
        <div className="landing-sub">
          <span>Jen Choi · Based in London</span>
        </div>
      </div>
      <div className="landing-canvas" ref={wrapRef}>
        {size.w > 0 && (
          <DotAnimation
            width={size.w}
            height={size.h}
            onNavigate={(r) => onNav({ name: r } as Route)}
          />
        )}
      </div>
    </div>
  )
}
