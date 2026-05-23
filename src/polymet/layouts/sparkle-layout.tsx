import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { SparkleDecoration } from "@/polymet/components/sparkle-decoration"
import { SidebarNav } from "@/polymet/components/sidebar-nav"
import { CursorTrail } from "@/polymet/components/cursor-trail"

interface SparkleLayoutProps {
  children: ReactNode
}

export function SparkleLayout({ children }: SparkleLayoutProps) {
  return (
    <div className="relative min-h-screen bg-[#0a0e27] text-foreground">
      {/* Sparkle Background */}
      <SparkleDecoration />

      {/* Shooting-star cursor trail */}
      <CursorTrail />

      {/* Fixed sidebar navigation */}
      <SidebarNav />

      {/* Everything offset by sidebar width on md+ */}
      <div className="md:pl-[160px]">
        {/* Header */}
        <header className="relative z-20 border-b border-white/10 bg-[#0a0e27]/80 backdrop-blur-sm">
          <div className="px-4 sm:px-8 lg:px-14 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-sm font-mono text-white/60 uppercase tracking-wider truncate">
                  <span className="sm:hidden">SPARKLE BUREAUCRACY · TERMINAL 001</span>
                  <span className="hidden sm:inline">SPARKLE BUREAUCRACY · DEPT. OF CELESTIAL INGRESS · TERMINAL 001</span>
                </span>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <footer className="relative z-20 border-t border-white/10 bg-[#0a0e27]/80 backdrop-blur-sm mt-4">
          <div className="px-4 sm:px-8 lg:px-14 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-sm font-mono text-white mb-2">
                  © 2026 Sparkle Bureaucracy
                </p>
                <p className="text-xs font-mono text-teal-400/70">
                  Newspeak House | London | @sugaroverflow
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <p className="text-xs font-mono text-teal-400/70">
                  Research Prototype v1.0
                </p>
                <p className="text-xs font-mono text-white/50">
                  Built with optimism
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
