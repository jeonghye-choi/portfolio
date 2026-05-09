import { EMAIL } from '../data'
import type { Route } from '../App'

interface Props {
  active: string
  onNav: (r: Route) => void
}

export default function Nav({ active, onNav }: Props) {
  const linkCls = (n: string) => 'navlink' + (active === n ? ' active' : '')

  return (
    <nav className="site-nav">
      <a className="brand" onClick={() => onNav({ name: 'home' })}>Jen Choi</a>
      <div className="navlinks">
        <a className={linkCls('work')} onClick={() => onNav({ name: 'work' })}>work</a>
        <a className={linkCls('writing')} onClick={() => onNav({ name: 'writing' })}>writing</a>
        <a className={linkCls('activities')} onClick={() => onNav({ name: 'activities' })}>activities</a>
        <a className={linkCls('dots')} onClick={() => onNav({ name: 'dots' })}>dots</a>
      </div>
      <div className="nav-icons">
        <a href={'mailto:' + EMAIL} className="nav-icon" title="Email" aria-label="Email">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
            <polyline points="1.5,3.5 8,9.5 14.5,3.5" />
          </svg>
        </a>
        <a href="#linkedin" className="nav-icon" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-1.25 4.5h2.5v7.5H2.25V6.5zM6.5 6.5h2.4v1.02c.35-.6 1.2-1.23 2.47-1.23 2.64 0 3.13 1.74 3.13 4v4.21h-2.5v-3.73c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97v3.79H6.5V6.5z" />
          </svg>
        </a>
        <a href="#github" className="nav-icon" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 .5A7.5 7.5 0 0 0 .5 8a7.5 7.5 0 0 0 5.13 7.13c.37.07.5-.16.5-.36v-1.27c-2.08.45-2.52-.99-2.52-.99-.34-.86-.83-1.09-.83-1.09-.68-.46.05-.45.05-.45.75.05 1.15.77 1.15.77.67 1.14 1.75.81 2.18.62.07-.48.26-.81.47-1-1.66-.19-3.4-.83-3.4-3.7 0-.82.29-1.49.77-2.01-.08-.19-.33-.95.07-1.98 0 0 .63-.2 2.06.77a7.18 7.18 0 0 1 1.88-.25 7.18 7.18 0 0 1 1.88.25c1.43-.97 2.06-.77 2.06-.77.4 1.03.15 1.79.07 1.98.48.52.77 1.19.77 2.01 0 2.88-1.75 3.51-3.42 3.7.27.23.51.69.51 1.39v2.06c0 .2.13.43.51.36A7.5 7.5 0 0 0 15.5 8 7.5 7.5 0 0 0 8 .5z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
