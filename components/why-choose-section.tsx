import { MapPin, Zap, Sparkles, ShieldCheck, type LucideIcon } from "lucide-react"

type Reason = {
  icon: LucideIcon
  title: string
  desc: string
  metric: string
  metricLabel: string
  accent: string
  bar: string
}

const REASONS: Reason[] = [
  {
    icon: MapPin,
    title: "Made for India",
    desc: "Hindi-English-Tamil voice bots, INR pricing, Indian carriers and a local support team.",
    metric: "12+",
    metricLabel: "Languages",
    accent: "text-violet-600",
    bar: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    desc: "Sign up, port your number, build the IVR, go live. No PRI lines, no PBX, no CapEx.",
    metric: "5 min",
    metricLabel: "To go live",
    accent: "text-amber-600",
    bar: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "AI Pays For Itself",
    desc: "Voice bots deflect 40-70% of calls. AI summaries cut after-call work by 60%. ROI in 90 days.",
    metric: "40-70%",
    metricLabel: "Calls deflected",
    accent: "text-fuchsia-600",
    bar: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-In",
    desc: "TRAI, DPDP, ISO 27001, RBI / IRDAI ready. Encrypted SIP and India-only data residency by default.",
    metric: "4×",
    metricLabel: "Frameworks",
    accent: "text-emerald-600",
    bar: "from-emerald-500 to-teal-500",
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
        <div className="absolute left-1/4 top-1/4 h-[20rem] w-[20rem] rounded-full bg-violet-500/[0.06] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Why Kedeyo
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.05]">
              Four reasons growing teams{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                switch to Kedeyo
              </span>
            </h2>
          </div>
          {/* Aggregate stats — inline, no card */}
          <dl className="flex shrink-0 items-baseline gap-8">
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Teams</dt>
              <dd className="mt-0.5 text-xl font-bold tracking-tight text-foreground">5K+</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Calls / day</dt>
              <dd className="mt-0.5 text-xl font-bold tracking-tight text-foreground">2M+</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">AI resolved</dt>
              <dd className="mt-0.5 text-xl font-bold tracking-tight text-foreground">68%</dd>
            </div>
          </dl>
        </div>

        {/* Horizontal divider above columns */}
        <div className="mt-10 border-t border-border" />

        {/* 4-up reasons — columns separated by vertical hairlines, no boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            const num = String(i + 1).padStart(2, "0")
            return (
              <div
                key={r.title}
                className={`group relative flex flex-col gap-4 px-2 py-8 lg:px-6 ${
                  i > 0 ? "border-t border-border sm:border-t-0 lg:border-l" : ""
                } ${i === 2 ? "sm:border-t lg:border-t-0" : ""}`}
              >
                {/* Top hover bar */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 ease-out group-hover:scale-x-100 ${r.bar}`}
                />

                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                    {num}
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border transition-all duration-300 group-hover:scale-110 group-hover:ring-current ${r.accent}`}
                    aria-hidden
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                {/* Metric */}
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold tracking-tight ${r.accent}`}>{r.metric}</span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {r.metricLabel}
                  </span>
                </div>

                {/* Title + desc */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{r.title}</h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom divider mirrors top */}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
