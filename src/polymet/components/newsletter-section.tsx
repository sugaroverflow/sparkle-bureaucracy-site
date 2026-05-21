import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 4000)
    }, 1000)
  }

  return (
    <SectionWrapper id="dispatch">
      <div className="py-16">
        {/* Decorative top border */}
        <div className="h-px w-full bg-gradient-to-r from-teal-400/60 via-pink-500/40 to-transparent mb-12" />

        <div className="flex flex-col gap-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="font-mono text-xs text-teal-400 uppercase tracking-widest">
                Dispatches from the lab
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              TRACK THE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500">
                PROTOTYPE
              </span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Stay up to date on prototype progress, upcoming experiments, and
              fresh insights on organizational futures for the age of AI.
            </p>
          </div>

          {/* Form below copy for better vertical rhythm */}
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs text-white/40 uppercase tracking-widest">
                  Your email address
                </label>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 bg-[#0a0e27] border-white/30 text-white placeholder:text-white/30 font-mono text-sm h-11 focus-visible:ring-teal-400 focus-visible:border-teal-400"
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="bg-pink-600 hover:bg-pink-500 text-white h-11 px-5 transition-all"
                  >
                    <SendIcon className="w-4 h-4" />
                  </Button>
                </div>

                {status === "success" && (
                  <p className="text-teal-400 font-mono text-xs">
                    ✓ You’re in. First dispatch incoming.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 font-mono text-xs">
                    ✗ Something went wrong. Try again.
                  </p>
                )}
                {status === "idle" && (
                  <p className="text-white/30 font-mono text-xs">
                    Unsubscribe any time. No spam.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />
      </div>
    </SectionWrapper>
  )
}
