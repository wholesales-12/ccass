import { MapPin, Zap, Sparkles, ShieldCheck, type LucideIcon } from "lucide-react"

type Reason = {
  icon: LucideIcon
  title: string
  desc: string
  metric: string
  metricLabel: string
  accent: string
  glow: string
}

const REASONS: Reason[] = [
  {
    icon: MapPin,
    title: "Made for India",
    desc: "Hindi-English-Tamil voice bots, INR pricing, Indian carriers and a local support team.",
    metric: "12+",
    metricLabel: "Languages",
    accent: "text-violet-600",
    glow: "bg-violet-500/15",
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    desc: "Sign up, port your number, build the IVR, go live. No PRI lines, no PBX, no CapEx.",
    metric: "5 min",
    metricLabel: "To go live",
    accent: "text-amber-600",
    glow: "bg-amber-500/15",
  },
  {
    icon: Sparkles,
    title: "AI Pays For Itself",
    desc: "Voice bots deflect 40-70% of calls. AI summaries cut after-call work by 60%. ROI in 90 days.",
    metric: "40-70%",
    metricLabel: "Deflected",
    accent: "text-fuchsia-600",
    glow: "bg-fuchsia-500/15",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-In",
    desc: "TRAI, DPDP, ISO 27001, RBI / IRDAI ready. Encrypted SIP and India-only data residency.",
    metric: "4×",
    metricLabel: "Frameworks",
    accent: "text-emerald-600",
    glow: "bg-emerald-500/15",
  },
]

export function WhyChooseSection() {
  return (
    <section
      id="why-kedeyo"
      className="relative flex min-h-screen items-center overflow-hidden bg-background py-16 lg:py-20"
    >
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/4 h-[24rem] w-[24rem] rounded-full bg-violet-500/[0.06] blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column manifesto layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — sticky headline pillar */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Why Kedeyo
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.04]">
              Built different,{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                on purpose.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Four ideas that decide why a growing Indian team picks Kedeyo over a global suite — and why they stay.
            </p>

            {/* Inline aggregate proof */}
            <div className="mt-8 flex flex-wrap items-baseline gap-x-7 gap-y-3 border-t border-border/70 pt-6 text-sm">
              <span>
                <span className="text-2xl font-bold tracking-tight text-foreground">5K+</span>
                <span className="ml-1.5 text-xs uppercase tracking-wider text-muted-foreground">teams</span>
              </span>
              <span>
                <span className="text-2xl font-bold tracking-tight text-foreground">2M+</span>
                <span className="ml-1.5 text-xs uppercase tracking-wider text-muted-foreground">calls / day</span>
              </span>
              <span>
                <span className="text-2xl font-bold tracking-tight text-foreground">68%</span>
                <span className="ml-1.5 text-xs uppercase tracking-wider text-muted-foreground">AI resolved</span>
              </span>
            </div>
          </div>

          {/* RIGHT — 4 reasons as typographic items, no boxes, no dividers */}
          <ol className="lg:col-span-7 space-y-10 lg:space-y-12">
            {REASONS.map((r, i) => {
              const Icon = r.icon
              const num = String(i + 1).padStart(2, "0")
              return (
                <li key={r.title} className="group relative flex items-start gap-5 sm:gap-7">
                  {/* Floating glow + icon — no ring, no box */}
                  <div className="relative shrink-0 pt-1.5">
                    <span
                      aria-hidden
                      className={`absolute -inset-3 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 ${r.glow}`}
                    />
                    <span
                      className={`relative inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${r.accent}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    {/* Tiny metadata row */}
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-muted-foreground">
                        {num}
                      </span>
                      <span
                        aria-hidden
                        className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
                      />
                    </div>

                    {/* Big inline metric → title */}
                    <h3 className="mt-2 text-balance text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">
                      <span className={`mr-2 ${r.accent}`}>{r.metric}</span>
                      <span className="text-muted-foreground/60">·</span> <span>{r.title}</span>
                    </h3>

                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {r.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
