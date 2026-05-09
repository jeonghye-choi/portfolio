import { useState } from 'react'
import { MOMENTS } from '../../data'
import type { Moment as MomentType } from '../../data'

export default function Dots() {
  return (
    <div className="page">
      <div className="page-label">dots</div>
      <p className="page-intro page-intro-quiet">
        These are the dots I didn't plan.
      </p>
      <div className="moments">
        {MOMENTS.map((m, i) => (
          <Moment key={i} {...m} />
        ))}
      </div>
    </div>
  )
}

function Moment({ city, date, img }: MomentType) {
  const [hover, setHover] = useState(false)

  return (
    <figure
      className="moment"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="moment-frame">
        <img className="moment-bw" src={img} alt={city} />
        <img
          className="moment-color"
          src={img}
          alt=""
          style={{ clipPath: hover ? 'circle(75% at 50% 50%)' : 'circle(0% at 50% 50%)' }}
        />
      </div>
      <figcaption className="moment-cap">
        <div className="moment-row">
          <span className="moment-city">{city}</span>
          <span className="moment-date">{date}</span>
        </div>
      </figcaption>
    </figure>
  )
}
