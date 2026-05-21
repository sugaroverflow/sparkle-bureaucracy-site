import { useEffect, useRef, useState } from "react"

interface TrailParticle {
  id: number
  x: number
  y: number
  size: number
  color: string
  rotation: number
  drift: number
}

const TRAIL_COLORS = [
  "hsl(330, 100%, 65%)",  // pink
  "hsl(280, 100%, 72%)",  // purple
  "hsl(174, 100%, 60%)",  // teal
  "hsl(185, 100%, 62%)",  // cyan
  "hsl(45, 100%, 62%)",   // yellow
  "hsl(0, 0%, 100%)",     // white
]

const PARTICLE_LIFETIME_MS = 750
const SPAWN_INTERVAL_MS = 20

export function CursorTrail() {
  const [particles, setParticles] = useState<TrailParticle[]>([])
  const nextId = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches
    if (isCoarsePointer) return

    const handleMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastSpawn.current < SPAWN_INTERVAL_MS) return
      lastSpawn.current = now

      const particle: TrailParticle = {
        id: nextId.current++,
        x: e.clientX,
        y: e.clientY,
        size: 6 + Math.random() * 10,
        color: TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)],
        rotation: Math.random() * 360,
        drift: (Math.random() - 0.5) * 40,
      }

      setParticles((prev) => [...prev, particle])

      window.setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id))
      }, PARTICLE_LIFETIME_MS)
    }

    window.addEventListener("mousemove", handleMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[60] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute will-change-transform"
          style={
            {
              left: 0,
              top: 0,
              width: p.size,
              height: p.size,
              transform: `translate(${p.x - p.size / 2}px, ${p.y - p.size / 2}px) rotate(${p.rotation}deg)`,
              animation: `cursor-trail-fade ${PARTICLE_LIFETIME_MS}ms ease-out forwards`,
              "--drift-x": `${p.drift}px`,
              "--drift-y": `${30 + Math.abs(p.drift)}px`,
            } as React.CSSProperties
          }
        >
          <svg
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            style={{ filter: `drop-shadow(0 0 6px ${p.color})` }}
            aria-hidden="true"
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill={p.color}
            />
          </svg>
        </span>
      ))}
      <style>{`
        @keyframes cursor-trail-fade {
          0% {
            opacity: 1;
            scale: 1;
            translate: 0 0;
          }
          100% {
            opacity: 0;
            scale: 0.2;
            translate: var(--drift-x, 0) var(--drift-y, 24px);
          }
        }
      `}</style>
    </div>
  )
}
