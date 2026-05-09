import { useEffect, useRef, useState } from 'react'

interface DotDef {
  label: string
  desc: string
  route: string | null
  isMain?: boolean
  isCenter?: boolean
  isMicro?: boolean
  microParentLabel?: string
  parentLabel?: string
}

interface Particle extends DotDef {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
  delay: number
}

interface Props {
  width?: number
  height?: number
  interactive?: boolean
  onNavigate?: (route: string) => void
}

const JEN_R = 15
const MAIN_SIZES: Record<string, number> = { work: 40, writing: 36, activities: 33, dots: 30 }
const SUB_R = 5
const MICRO_R = 2

const DOT_DEFS: DotDef[] = [
  // ── main section dots
  { label: 'work',       desc: 'frontend engineering',    route: 'work',       isMain: true },
  { label: 'writing',    desc: 'thoughts & notes',         route: 'writing',    isMain: true },
  { label: 'activities', desc: 'beyond the job',          route: 'activities', isMain: true },
  { label: 'dots',       desc: 'places & moments',        route: 'dots',       isMain: true },
  // ── work sub-dots
  { label: 'TeamGRIT',   desc: 'robot control platform',  route: 'work',       parentLabel: 'work' },
  { label: 'Toss',       desc: 'fintech design system',   route: 'work',       parentLabel: 'work' },
  { label: 'GDSC',       desc: 'frontend study lead',     route: 'work',       parentLabel: 'work' },
  { label: 'Onad',       desc: 'twitch ad design',        route: 'work',       parentLabel: 'work' },
  // ── writing sub-dots
  { label: 'robots',     desc: 'perf lessons from robots',route: 'writing',    parentLabel: 'writing' },
  { label: 'london',     desc: 'job hunting notes',       route: 'writing',    parentLabel: 'writing' },
  { label: 'craft',      desc: 'works vs feels right',    route: 'writing',    parentLabel: 'writing' },
  // ── activities sub-dots
  { label: 'meetups',    desc: 'london frontend community',route: 'activities', parentLabel: 'activities' },
  { label: 'side proj',  desc: 'weekly experiments',      route: 'activities', parentLabel: 'activities' },
  // ── dots sub-dots
  { label: 'tokyo',      desc: '2023.04',                 route: 'dots',       parentLabel: 'dots' },
  { label: 'porto',      desc: '2024.06',                 route: 'dots',       parentLabel: 'dots' },
  { label: 'kyoto',      desc: '2023.04',                 route: 'dots',       parentLabel: 'dots' },
  { label: 'lisbon',     desc: '2024.06',                 route: 'dots',       parentLabel: 'dots' },
]

export default function DotAnimation({
  width = 800,
  height = 420,
  interactive = true,
  onNavigate,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef({
    particles: [] as Particle[],
    cursor: { x: -9999, y: -9999, active: false },
    raf: 0,
    hovered: null as Particle | null,
  })
  const [cursorStyle, setCursorStyle] = useState('default')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.scale(dpr, dpr)

    const ORBIT_DIST = width * 0.13
    const MICRO_ORBIT = width * 0.15

    // Build particle list
    const mainDefs = DOT_DEFS.filter(d => d.isMain)
    const mainDelays: Record<string, number> = {}

    const particles: Particle[] = []

    // Main dots — spread across upper canvas region
    mainDefs.forEach((d, i) => {
      const delay = i * 280
      mainDelays[d.label] = delay
      const angle = (i / mainDefs.length) * Math.PI * 2
      particles.push({
        ...d,
        x: width  * 0.5 + Math.cos(angle) * width  * 0.22 + (Math.random() - 0.5) * 30,
        y: height * 0.5 + Math.sin(angle) * height * 0.30 + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: MAIN_SIZES[d.label] ?? 36,
        alpha: 0,
        delay,
      })
    })

    // Sub-dots — grouped by parent
    const subsByParent: Record<string, DotDef[]> = {}
    DOT_DEFS.filter(d => d.parentLabel).forEach(d => {
      const p = d.parentLabel!
      if (!subsByParent[p]) subsByParent[p] = []
      subsByParent[p].push(d)
    })

    Object.entries(subsByParent).forEach(([parentLabel, subs]) => {
      const parentDel = mainDelays[parentLabel] ?? 0
      subs.forEach((d, j) => {
        const angle = (j / subs.length) * Math.PI * 2
        const parentParticle = particles.find(p => p.isMain && p.label === parentLabel)!
        particles.push({
          ...d,
          x: parentParticle.x + Math.cos(angle) * ORBIT_DIST,
          y: parentParticle.y + Math.sin(angle) * ORBIT_DIST,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: SUB_R,
          alpha: 0,
          delay: parentDel + 300 + j * 120,
        })
      })
    })

    // Micro dots — 2-3 per sub-dot
    const subParticles = particles.filter(p => !!p.parentLabel)
    subParticles.forEach(subP => {
      const count = Math.random() < 0.5 ? 3 : 2
      for (let k = 0; k < count; k++) {
        const angle = Math.random() * Math.PI * 2
        const dist = MICRO_ORBIT * (0.6 + Math.random() * 0.3)
        particles.push({
          label: '', desc: '', route: null,
          isMicro: true, microParentLabel: subP.label,
          x: subP.x + Math.cos(angle) * dist,
          y: subP.y + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: MICRO_R,
          alpha: 0,
          delay: subP.delay + 80 + k * 70,
        })
      }
    })

    particles.push({
      label: 'Jen', desc: '', route: null, isCenter: true,
      x: width * 0.5, y: height * 0.5,
      vx: 0, vy: 0,
      r: JEN_R,
      alpha: 0,
      delay: 0,
    })

    stateRef.current.particles = particles
    const jenParticle = particles.find(p => p.isCenter) ?? null
    const start = performance.now()

    // Physics constants
    const MAIN_MIN_DIST = width * 0.22
    const SUB_SIBLING_MIN = 40
    const MICRO_SIBLING_MIN = 15
    const CURSOR_R = 140
    const MAIN_MAX = 1.2
    const SUB_MAX = 1.5
    const SUB_HIT_R = 22

    // Build lookups for spring physics
    const mainMap = new Map<string, Particle>()
    particles.filter(p => p.isMain).forEach(p => mainMap.set(p.label, p))
    const subMap = new Map<string, Particle>()
    particles.filter(p => !!p.parentLabel).forEach(p => subMap.set(p.label, p))

    function step(now: number) {
      const t = now - start
      ctx.clearRect(0, 0, width, height)

      const cur = stateRef.current.cursor
      let hovered: Particle | null = null

      // ── Physics
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!
        if (t >= p.delay) p.alpha = Math.min(1, p.alpha + 0.018)

        // Ambient noise
        p.vx += (Math.random() - 0.5) * 0.03
        p.vy += (Math.random() - 0.5) * 0.03

        if (p.isCenter) {
          // Strong spring back to canvas center
          p.vx += (width * 0.5 - p.x) * 0.05
          p.vy += (height * 0.5 - p.y) * 0.05
        } else if (p.isMain) {
          // Very weak center gravity for main dots only
          p.vx += (width * 0.5 - p.x) * 0.0002
          p.vy += (height * 0.5 - p.y) * 0.0002
          // Main-main repulsion
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j]!
            if (!q.isMain) continue
            const dx = q.x - p.x, dy = q.y - p.y
            const d = Math.sqrt(dx * dx + dy * dy) || 0.01
            if (d < MAIN_MIN_DIST) {
              const k = 1 - d / MAIN_MIN_DIST
              const f = 0.18 * k * k + 0.02 * k
              p.vx -= dx / d * f; p.vy -= dy / d * f
              q.vx += dx / d * f; q.vy += dy / d * f
            }
          }
        } else if (p.isMicro) {
          const subParent = subMap.get(p.microParentLabel!)
          if (subParent) {
            const dx = subParent.x - p.x, dy = subParent.y - p.y
            const d = Math.sqrt(dx * dx + dy * dy) || 0.01
            const minDist = SUB_R + MICRO_R + 8
            if (d < minDist) {
              const f = (1 - d / minDist) * 0.1
              p.vx -= dx / d * f
              p.vy -= dy / d * f
            } else if (d > MICRO_ORBIT * 0.6) {
              const distErr = d - MICRO_ORBIT
              const f = distErr * 0.003
              p.vx += dx / d * f
              p.vy += dy / d * f
            }
          }
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j]!
            if (!q.isMicro || q.microParentLabel !== p.microParentLabel) continue
            const dx = q.x - p.x, dy = q.y - p.y
            const d = Math.sqrt(dx * dx + dy * dy) || 0.01
            if (d < MICRO_SIBLING_MIN) {
              const k = 1 - d / MICRO_SIBLING_MIN
              const f = 0.1 * k
              p.vx -= dx / d * f; p.vy -= dy / d * f
              q.vx += dx / d * f; q.vy += dy / d * f
            }
          }
        } else {
          // Sub-dot: spring toward parent
          const parent = mainMap.get(p.parentLabel!)
          if (parent) {
            const dx = parent.x - p.x, dy = parent.y - p.y
            const d = Math.sqrt(dx * dx + dy * dy) || 0.01
            const minDist = parent.r + SUB_R + 10
            if (d < minDist) {
              const f = (1 - d / minDist) * 0.1
              p.vx -= dx / d * f
              p.vy -= dy / d * f
            } else if (d > ORBIT_DIST * 0.6) {
              const distErr = d - ORBIT_DIST
              const f = distErr * 0.004
              p.vx += dx / d * f
              p.vy += dy / d * f
            }
          }

          // Sub-sibling repulsion
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j]!
            if (q.isMain || q.isCenter || q.parentLabel !== p.parentLabel) continue
            const dx = q.x - p.x, dy = q.y - p.y
            const d = Math.sqrt(dx * dx + dy * dy) || 0.01
            if (d < SUB_SIBLING_MIN) {
              const k = 1 - d / SUB_SIBLING_MIN
              const f = 0.1 * k
              p.vx -= dx / d * f; p.vy -= dy / d * f
              q.vx += dx / d * f; q.vy += dy / d * f
            }
          }
        }

        // Cursor attraction
        if (cur.active) {
          const dx = cur.x - p.x, dy = cur.y - p.y
          const d = Math.sqrt(dx * dx + dy * dy) || 0.01
          if (d < CURSOR_R) {
            const f = (1 - d / CURSOR_R) * 0.04
            p.vx += dx / d * f; p.vy += dy / d * f
            const hitR = p.isMain ? p.r + 6 : SUB_HIT_R
            if (d < hitR && p.alpha > 0.4 && p.isMain) hovered = p
          }
        }

        // Boundary push — keep sub-dots in bounds; main dots in upper region
        const m = p.isMain ? 80 : p.isCenter ? 40 : 20
        const yMax = p.isMain ? height * 0.88 : height - m
        if (p.x < m) p.vx += 0.07 * (1 - p.x / m)
        if (p.x > width - m) p.vx -= 0.07 * (1 - (width - p.x) / m)
        if (p.y < m) p.vy += 0.07 * (1 - p.y / m)
        if (p.y > yMax) p.vy -= 0.07 * (1 - (yMax - p.y) / m)

        // Friction
        p.vx *= 0.985; p.vy *= 0.985

        // Speed floor — never fully stop
        const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        const floor = p.isMain ? 0.18 : p.isMicro ? 0.08 : 0.12
        if (sp < floor && sp > 0.001) { p.vx *= floor / sp; p.vy *= floor / sp }

        // Speed cap
        const cap = p.isMain ? MAIN_MAX : SUB_MAX
        if (sp > cap) { p.vx *= cap / sp; p.vy *= cap / sp }

        p.x += p.vx; p.y += p.vy
      }

      // ── Elastic collision — immediate separation + impulse exchange
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]!
          const b = particles[j]!
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.01
          const minDist = a.r + b.r + 2
          if (dist < minDist) {
            const nx = dx / dist
            const ny = dy / dist

            const overlap = (minDist - dist) / 2
            a.x -= nx * overlap
            a.y -= ny * overlap
            b.x += nx * overlap
            b.y += ny * overlap

            const dvx = b.vx - a.vx
            const dvy = b.vy - a.vy
            const dot = dvx * nx + dvy * ny

            if (dot < 0) {
              const restitution = 0.55
              const impulse = -(1 + restitution) * dot / 2
              a.vx -= impulse * nx
              a.vy -= impulse * ny
              b.vx += impulse * nx
              b.vy += impulse * ny

              const capA = Math.sqrt(a.vx * a.vx + a.vy * a.vy)
              const capB = Math.sqrt(b.vx * b.vx + b.vy * b.vy)
              const MAX_SPEED = a.isMain ? 1.2 : 1.5
              if (capA > MAX_SPEED) { a.vx *= MAX_SPEED / capA; a.vy *= MAX_SPEED / capA }
              if (capB > MAX_SPEED) { b.vx *= MAX_SPEED / capB; b.vy *= MAX_SPEED / capB }
            }
          }
        }
      }

      // ── Draw micro → sub-dot connection lines
      ctx.lineWidth = 0.5
      for (const p of particles) {
        if (!p.isMicro || p.alpha < 0.1) continue
        const subParent = subMap.get(p.microParentLabel!)
        if (!subParent || subParent.alpha < 0.1) continue
        ctx.strokeStyle = `rgba(17,17,17,${Math.min(p.alpha, subParent.alpha) * 0.08})`
        ctx.beginPath()
        const mdx = p.x - subParent.x, mdy = p.y - subParent.y
        const md = Math.sqrt(mdx * mdx + mdy * mdy) || 0.01
        const mux = mdx / md, muy = mdy / md
        ctx.moveTo(subParent.x + mux * SUB_R, subParent.y + muy * SUB_R)
        ctx.lineTo(p.x - mux * MICRO_R, p.y - muy * MICRO_R)
        ctx.stroke()
      }

      // ── Draw parent-child connection lines (sub → parent)
      ctx.lineWidth = 0.8
      for (const p of particles) {
        if (p.isMain || p.isCenter || p.isMicro || p.alpha < 0.1) continue
        const parent = mainMap.get(p.parentLabel!)
        if (!parent || parent.alpha < 0.1) continue
        ctx.strokeStyle = `rgba(17,17,17,${Math.min(p.alpha, parent.alpha) * 0.13})`
        ctx.beginPath()
        const sdx = p.x - parent.x, sdy = p.y - parent.y
        const sd = Math.sqrt(sdx * sdx + sdy * sdy) || 0.01
        const sux = sdx / sd, suy = sdy / sd
        ctx.moveTo(parent.x + sux * parent.r, parent.y + suy * parent.r)
        ctx.lineTo(p.x - sux * SUB_R, p.y - suy * SUB_R)
        ctx.stroke()
      }

      // ── Draw Jen → main connection lines
      const mains = particles.filter(p => p.isMain)
      if (jenParticle && jenParticle.alpha > 0.1) {
        ctx.lineWidth = 1
        for (const mp of mains) {
          if (mp.alpha < 0.1) continue
          ctx.strokeStyle = `rgba(17,17,17,${Math.min(jenParticle.alpha, mp.alpha) * 0.15})`
          ctx.beginPath()
          const jdx = mp.x - jenParticle.x, jdy = mp.y - jenParticle.y
          const jd = Math.sqrt(jdx * jdx + jdy * jdy) || 0.01
          const jux = jdx / jd, juy = jdy / jd
          ctx.moveTo(jenParticle.x + jux * JEN_R, jenParticle.y + juy * JEN_R)
          ctx.lineTo(mp.x - jux * mp.r, mp.y - juy * mp.r)
          ctx.stroke()
        }
      }

      // ── Draw mesh lines between main dots
      const NAMED_R = MAIN_MIN_DIST * 1.4
      ctx.lineWidth = 1
      for (let i = 0; i < mains.length; i++) {
        const p = mains[i]!
        if (p.alpha < 0.2) continue
        for (let j = i + 1; j < mains.length; j++) {
          const q = mains[j]!
          if (q.alpha < 0.2) continue
          const dx = q.x - p.x, dy = q.y - p.y
          const d = Math.sqrt(dx * dx + dy * dy)
          const closeness = Math.max(0, 1 - d / (NAMED_R * 1.8))
          const a = (0.04 + closeness * 0.12) * Math.min(p.alpha, q.alpha)
          ctx.strokeStyle = `rgba(17,17,17,${a})`
          const ux = dx / d, uy = dy / d
          ctx.beginPath()
          ctx.moveTo(p.x + ux * p.r, p.y + uy * p.r)
          ctx.lineTo(q.x - ux * q.r, q.y - uy * q.r)
          ctx.stroke()
        }
      }

      // ── Draw particles
      for (const p of particles) {
        if (p.alpha <= 0) continue

        if (p.isCenter) {
          ctx.fillStyle = '#F9F9F7'
          ctx.beginPath()
          ctx.arc(p.x, p.y, JEN_R, 0, Math.PI * 2)
          ctx.fill()
          ctx.strokeStyle = `rgba(17,17,17,${p.alpha * 0.35})`
          ctx.lineWidth = 1.2
          ctx.beginPath()
          ctx.arc(p.x, p.y, JEN_R, 0, Math.PI * 2)
          ctx.stroke()
          if (p.alpha > 0.35) {
            ctx.fillStyle = `rgba(17,17,17,${p.alpha * 0.92})`
            ctx.font = "7px 'Space Mono', monospace"
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('jen', p.x, p.y)
          }
        } else if (p.isMicro) {
          ctx.fillStyle = `rgba(17,17,17,${p.alpha * 0.45})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, MICRO_R, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.isMain) {
          // Large dark circle with white label inside
          ctx.fillStyle = `rgba(17,17,17,${p.alpha})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fill()

          if (p.alpha > 0.35) {
            ctx.fillStyle = `rgba(249,249,247,${p.alpha * 0.92})`
            ctx.font = "10px 'Space Mono', monospace"
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(p.label, p.x, p.y)
          }
        } else {
          // Small sub-dot
          ctx.fillStyle = `rgba(17,17,17,${p.alpha * 0.65})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, SUB_R, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      // ── Static "next" indicator
      ctx.strokeStyle = `rgba(17,17,17,0.5)`
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.arc(width - 56, height * 0.5, SUB_R, 0, Math.PI * 2)
      ctx.stroke()
      ctx.fillStyle = `rgba(17,17,17,0.4)`
      ctx.font = "8px 'Space Mono', monospace"
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'
      ctx.fillText('next', width - 56, height * 0.5 + SUB_R + 4)

      // Reset text alignment for next frame
      ctx.textAlign = 'left'
      ctx.textBaseline = 'alphabetic'

      stateRef.current.hovered = hovered
      setCursorStyle(hovered ? 'pointer' : 'default')

      stateRef.current.raf = requestAnimationFrame(step)
    }

    stateRef.current.raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(stateRef.current.raf)
  }, [width, height])

  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!interactive || !canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    stateRef.current.cursor = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true }
  }

  const onLeave = () => {
    stateRef.current.cursor.active = false
    stateRef.current.cursor.x = -9999
    stateRef.current.cursor.y = -9999
    setCursorStyle('default')
  }

  const onClick = () => {
    const h = stateRef.current.hovered
    if (h && h.route && onNavigate) onNavigate(h.route)
  }

  return (
    <div style={{ position: 'relative', width, height }}>
      <canvas
        ref={canvasRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        style={{ display: 'block', cursor: cursorStyle }}
      />
    </div>
  )
}
