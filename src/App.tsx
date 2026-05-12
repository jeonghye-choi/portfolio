import { useCallback, useState } from 'react'
import Nav from '@/components/Nav'
import Landing from '@/pages/Landing'
import WorkCatalogue from '@/pages/WorkCatalogue'
import WorkDetail from '@/pages/WorkDetail'
import WritingList from '@/pages/WritingList'
import Post from '@/pages/Post'
import Activities from '@/pages/Activities'
import Moments from '@/pages/Moments'
import { socialLinks } from '@/data'

export type Route =
  | { name: 'home' }
  | { name: 'work' }
  | { name: 'work-detail'; co: string }
  | { name: 'writing' }
  | { name: 'post'; slug: string }
  | { name: 'activities' }
  | { name: 'moments' }

export default function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' })
  const [phase, setPhase] = useState<'in' | 'out'>('in')

  const navigate = useCallback((r: Route) => {
    setPhase('out')
    setTimeout(() => {
      setRoute(r)
      window.scrollTo(0, 0)
      setPhase('in')
    }, 220)
  }, [])

  const activeName =
    route.name === 'work-detail' ? 'work' :
    route.name === 'post' ? 'writing' :
    route.name

  return (
    <div className={'site' + (route.name === 'home' ? ' is-home' : '')}>
      <Nav active={activeName} onNav={navigate} />
      <main className={'site-main ' + (phase === 'out' ? 'is-out' : 'is-in')}>
        {route.name === 'home'        && <Landing onNav={navigate} />}
        {route.name === 'work'        && <WorkCatalogue onNav={navigate} />}
        {route.name === 'work-detail' && <WorkDetail co={route.co} onNav={navigate} />}
        {route.name === 'writing'     && <WritingList onNav={navigate} />}
        {route.name === 'post'        && <Post slug={route.slug} onNav={navigate} />}
        {route.name === 'activities'  && <Activities />}
        {route.name === 'moments'     && <Moments />}
      </main>
      {route.name !== 'home' && (
        <footer className="site-foot">
          <span>Jen Choi (Jeonghye Choi) · London</span>
          <span className="dot-sep">·</span>
          <a href={'mailto:' + socialLinks.email}>email</a>
          <span className="dot-sep">·</span>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="dot-sep">·</span>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </footer>
      )}
    </div>
  )
}
