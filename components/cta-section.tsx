import Link from "next/link"
import { ArrowRight, PhoneCall, CheckCircle2, Sparkles, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const PROOF = [
  { value: "4.9/5", label: "G2 rating" },
  { value: "5,000+", label: "Indian teams" },
  { value: "< 24h", label: "Go-live" },
  { value: "24×7", label: "Support" },
]

export function CtaSection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0612] shadow-[0_30px_80px_-30px_oklch(0.45_0.22_295/0.55)]">
          {/* Layered background */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[oklch(0.55_0.28_300)]/40 blur-[100px]" />
            <div className="absolute -bottom-28 -right-16 h-96 w-96 rounded-full bg-[oklch(0.65_0.25_335)]/30 blur-[110px]" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-14">
            {/* LEFT: Copy */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 text-fuchsia-300" />
                Get Started
              </span>
              <h2 className="mt-4 text-balance font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-[2.5rem]">
                Answer every call with{" "}
                <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                  AI voice.
                </span>
              </h2>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-white/60">
                20-minute walkthrough. Live demo tuned to your use case. Transparent India-first pricing.
              </p>

              {/* Proof chips */}
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                {["No credit card", "Live in 5 min", "DPDP + TRAI"].map((p) => (
                  <span key={p} className="inline-flex items-center gap-1.5 text-[11px] text-white/50">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: Actions + stats */}
            <div className="flex w-full max-w-md shrink-0 flex-col gap-3 lg:w-[360px]">
              <Button
                asChild
                size="lg"
                className="group h-12 justify-between rounded-xl bg-white px-5 text-sm font-semibold text-[#0a0612] shadow-[0_10px_30px_-8px_rgba(255,255,255,0.35)] hover:bg-white/95"
              >
                <Link href="#book">
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
                      <CalendarCheck className="h-3.5 w-3.5" />
                    </span>
                    Book free demo
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/20 bg-white/5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <Link href="tel:+919999999999" className="flex items-center justify-center gap-2">
                  <PhoneCall className="h-4 w-4 text-fuchsia-300" />
                  Talk to sales
                </Link>
              </Button>

              {/* Compact stats row */}
              <div className="mt-1 grid grid-cols-4 divide-x divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                {PROOF.map((p) => (
                  <div key={p.label} className="px-2 py-2.5 text-center">
                    <div className="text-sm font-bold text-white">{p.value}</div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-white/40">
                      {p.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
