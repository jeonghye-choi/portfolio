import { useState } from 'react'
import { moments } from '../../data'
import type { Moment as MomentType } from '../../types'

export default function Moments() {
  return (
    <div className="page">
      <div className="page-label">moments</div>
      <p className="page-intro page-intro-quiet">
        These are the moments I didn't plan.
      </p>
      <div className="moments">
        {moments.map((m) => (
          <MomentCard key={m.id} {...m} />
        ))}
      </div>
    </div>
  )
}

function MomentCard({ location, date, imageUrl }: MomentType) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <figure
      className="moment"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="moment-frame">
        <img className="moment-bw" src={imageUrl} alt={location} />
        <img
          className="moment-color"
          src={imageUrl}
          alt=""
          style={{ clipPath: isHovered ? 'circle(75% at 50% 50%)' : 'circle(0% at 50% 50%)' }}
        />
      </div>
      <figcaption className="moment-cap">
        <div className="moment-row">
          <span className="moment-city">{location}</span>
          <span className="moment-date">{date}</span>
        </div>
      </figcaption>
    </figure>
  )
}
