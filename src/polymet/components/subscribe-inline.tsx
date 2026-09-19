import { FormEvent, useState } from "react";
import { CheckIcon, SendIcon, SparkleIcon } from "lucide-react";
import { requestSubscription } from "@/lib/subscribe";
import { trackEvent } from "@/lib/analytics";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string; fallbackUrl?: string };

export function SubscribeInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status.state === "sending") return;
    setStatus({ state: "sending" });
    const result = await requestSubscription(email.trim());
    if (result.ok) {
      trackEvent("subscribe");
      setStatus({ state: "success" });
    } else {
      setStatus({
        state: "error",
        message: result.error,
        fallbackUrl: result.fallbackUrl,
      });
    }
  };

  if (status.state === "success") {
    return (
      <div className="border border-green-400/40 bg-green-400/10 rounded p-5 text-left">
        <p className="font-mono text-sm text-green-300 uppercase tracking-widest mb-1 flex items-center gap-2">
          <CheckIcon className="w-4 h-4" /> Stamped. Filed. Sparkled.
        </p>
        <p className="text-white/70 text-sm">
          Check your inbox to confirm your subscription — the first stamp is
          yours once you do.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="subscribe-email"
          className="font-mono text-[10px] text-white/45 uppercase tracking-widest"
        >
          Email address
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="subscribe-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.org"
            aria-label="Email address"
            className="h-16 min-w-0 flex-1 border border-white/25 bg-white/5 px-5 font-mono text-base text-white placeholder:text-white/30 transition-colors focus:border-pink-400/70 focus:bg-white/10 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status.state === "sending"}
            className="group inline-flex h-16 w-full items-center justify-center border border-pink-300/40 bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 px-8 text-sm font-black uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] transition-all hover:from-pink-500 hover:via-pink-400 hover:to-purple-500 hover:shadow-[0_0_50px_rgba(236,72,153,0.55)] active:scale-[0.98] disabled:opacity-60 sm:w-auto sm:min-w-[13rem]"
          >
            <SparkleIcon className="w-4 h-4 mr-3 group-hover:rotate-12 transition-transform" />
            {status.state === "sending" ? "Filing…" : "Subscribe"}
            <SendIcon className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      {status.state === "error" && (
        <p className="mt-3 text-sm text-pink-300 text-left">
          {status.message}{" "}
          {status.fallbackUrl && (
            <a
              href={status.fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-pink-200"
            >
              Subscribe on Buttondown instead ↗
            </a>
          )}
        </p>
      )}
    </form>
  );
}
