import Link from "next/link"
import { AlertTriangle, X, ArrowRight, Sparkles } from "lucide-react"

const PAINS = [
  "Your team is dialing leads manually and only reaches one in three.",
  "Your IVR is a black box — you cannot tell where customers drop off.",
  "Inbound calls go to one agent while ten others sit idle, or the other way round.",
  "You only find out about a poor customer interaction when it shows up on Twitter.",
  "You want WhatsApp, voice, and calls in one place, but your tools live in three.",
  "You need TRAI- and DPDP-compliance from day one, not after a security audit.",
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative overflow-hidden bg-secondary/30 py-20 lg:py-24">
      {/* Soft red/amber wash to convey "pain" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_30%,oklch(0.65_0.18_25/0.06),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_85%_70%,oklch(0.45_0.22_295/0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-700">
            <AlertTriangle className="h-3 w-3" />
            The problem
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Indian Sales and Support Teams{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-rose-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                Lose Conversations Every Day
              </span>
            </span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            Most Indian businesses still run conversations on a stack that wasn&apos;t designed for them — a desk phone,
            a CRM tab, a WhatsApp line, a spreadsheet of leads, and one agent juggling all of it. Calls get missed.
            Hot leads cool down. Customers wait on hold. Quality is invisible until a complaint shows up.
          </p>
        </div>

        {/* Pain list grid */}
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {PAINS.map((p, i) => (
            <div
              key={i}
              className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-500/30 hover:bg-card hover:shadow-[0_18px_50px_-22px_oklch(0.6_0.2_25/0.35)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-600 transition-colors duration-300 group-hover:border-rose-500/40 group-hover:bg-rose-500/15">
                <X className="h-4 w-4" />
              </span>
              <p className="text-[14px] leading-relaxed text-foreground/85">{p}</p>
            </div>
          ))}
        </div>

        {/* Kedeyo answer card */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-violet-500/[0.05] via-fuchsia-500/[0.04] to-transparent p-6 sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-[0_8px_25px_-8px_oklch(0.55_0.25_300/0.6)]">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  The Kedeyo answer
                </span>
                <p className="mt-1 text-pretty text-base font-medium leading-relaxed text-foreground sm:text-[17px]">
                  Kedeyo replaces that stack with a single AI contact center platform. Voice, IVR, WhatsApp, dialers,
                  monitoring, recording, analytics — all under one login, priced for Indian businesses, secured for
                  Indian regulations.
                </p>
              </div>
            </div>
            <Link
              href="#features"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-[0_10px_30px_-8px_oklch(0.45_0.22_295/0.4)]"
            >
              See the platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
