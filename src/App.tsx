import { Analytics } from '@vercel/analytics/react'

import Nav from '@/components/Nav'
import Landing from '@/pages/Landing'
import Work from '@/pages/Work'
import WorkDetail from '@/pages/WorkDetail'
// import Posts from '@/pages/Posts'
// import PostDetail from '@/pages/PostDetail'
import Activities from '@/pages/Activities'
import Moments from '@/pages/Moments'
import { socialLinks } from '@/data'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={isHome ? 'site is-home' : 'site'}>
      <Nav />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          {/* <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} /> */}
          <Route path="/activities" element={<Activities />} />
          <Route path="/moments" element={<Moments />} />
        </Routes>
      </main>
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
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
      <Analytics />
    </BrowserRouter>
  )
}
