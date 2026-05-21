import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
}

export function SparkleDecoration() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const colors = [
      "hsl(330, 100%, 60%)",  // pink
      "hsl(280, 100%, 70%)",  // purple
      "hsl(174, 100%, 55%)",  // teal
      "hsl(185, 100%, 55%)",  // teal-cyan
      "hsl(45, 100%, 60%)",   // yellow
      "hsl(0, 0%, 100%)",     // white
    ]

    const newSparkles: Sparkle[] = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 1.2,
      duration: 0.6 + Math.random() * 0.9,
    }))

    setSparkles(newSparkles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 0 4px currentColor)" }}
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill={sparkle.color}
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
