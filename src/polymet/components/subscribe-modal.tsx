import { useState, type ReactNode } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SparkleIcon, SendIcon } from "lucide-react"

interface SubscribeModalProps {
  trigger: ReactNode
}

export function SubscribeModal({ trigger }: SubscribeModalProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage(null)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        setErrorMessage(data?.error || "Something went wrong. Try again?")
        setStatus("error")
        return
      }
      setStatus("success")
      setEmail("")
    } catch {
      setErrorMessage("Network error. Check your connection and try again.")
      setStatus("error")
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setStatus("idle")
      setEmail("")
      setErrorMessage(null)
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="max-w-2xl w-[92vw] p-0 gap-0 border-2 border-pink-500/40 bg-[#0a0e27] shadow-[0_0_80px_rgba(236,72,153,0.25)] sm:rounded-none overflow-hidden"
      >
        {/* Top stamp band */}
        <div className="border-b border-white/15 bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-teal-400/10 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SparkleIcon className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="font-mono text-[10px] text-pink-300 uppercase tracking-[0.25em]">
              Form SB-002 · Dispatch Enrollment
            </span>
          </div>
          <span className="font-mono text-[10px] text-teal-300/70 uppercase tracking-widest">
            ✦ Class: Optimistic ✦
          </span>
        </div>

        {/* Body */}
        <div className="px-8 md:px-12 py-10 md:py-14 relative">
          {/* Floating sparkles */}
          <SparkleIcon className="absolute top-6 right-12 w-3 h-3 text-pink-400/60 animate-pulse" />
          <SparkleIcon
            className="absolute bottom-10 left-10 w-4 h-4 text-teal-400/40 animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
          <SparkleIcon
            className="absolute top-20 left-1/2 w-2.5 h-2.5 text-yellow-300/50 animate-pulse"
            style={{ animationDelay: "1.1s" }}
          />

          <h2 className="text-5xl md:text-6xl font-black leading-none mb-3">
            <span className="text-white">SUB</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-teal-400">
              SCRIBE
            </span>
          </h2>
          <p className="font-mono text-xs text-teal-300 uppercase tracking-widest mb-8">
            Dispatches from the lab · No spam · Unsubscribe whenever
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Receive regular dispatches on upcoming experiments in the lab,
            sparkle-adjacent projects, and bulletins from the Department of
            Celestial Sparkles.
          </p>

          {status === "success" ? (
            <div className="border border-teal-400/40 bg-teal-400/5 p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <SparkleIcon className="w-4 h-4 text-teal-400" />
                <span className="font-mono text-xs text-teal-300 uppercase tracking-widest">
                  Application Received
                </span>
              </div>
              <p className="text-white font-mono text-sm leading-relaxed">
                ✓ Stamped. Filed. Sparkled. Check your inbox for a confirmation
                email — click the link to complete enrollment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block font-mono text-[11px] text-white/40 uppercase tracking-widest mb-3">
                Citizen email address
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="flex-1 bg-[#0a0e27] border-white/30 text-white placeholder:text-white/30 font-mono text-base h-14 focus-visible:ring-pink-400 focus-visible:border-pink-400 rounded-none"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-14 px-8 bg-pink-600 hover:bg-pink-500 text-white font-mono uppercase tracking-widest text-sm rounded-none transition-all"
                >
                  {status === "loading" ? (
                    "Stamping..."
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Enroll
                      <SendIcon className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
              {status === "error" && errorMessage && (
                <p className="mt-3 font-mono text-[11px] text-pink-300 uppercase tracking-widest">
                  ✦ {errorMessage}
                </p>
              )}
              <p className="mt-4 font-mono text-[10px] text-white/30 uppercase tracking-widest">
                By enrolling you accept occasional sparkles in your inbox.
              </p>
            </form>
          )}
        </div>

        {/* Footer stamp */}
        <div className="border-t border-white/10 bg-white/[0.02] px-8 py-3 flex items-center justify-between">
          <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
            Dept. of Celestial Ingress · Bureau of Dispatches
          </span>
          <span className="font-mono text-[9px] text-pink-300/60 uppercase tracking-widest">
            ✦ Stardate 26142 ✦
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
