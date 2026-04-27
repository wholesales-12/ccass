import {
  MapPin,
  Zap,
  Sparkles,
  ShieldCheck,
  Wallet,
  HeadphonesIcon,
  ArrowUpRight,
  Quote,
  type LucideIcon,
} from "lucide-react"

type Reason = {
  icon: LucideIcon
  title: string
  desc: string
  metric: string
  metricLabel: string
  accent: string // tailwind text color
  bar: string // tailwind gradient classes for hover bar
}

const REASONS: Reason[] = [
  {
    icon: MapPin,
    title: "Genuinely Made for India",
    desc: "Hindi-English-Tamil voice bots, INR pricing, Indian carrier interconnect, and an India-based support team. Not a global product translated for India — designed in India for Indian conversations.",
    metric: "12+",
    metricLabel: "Indian languages",
    accent: "text-violet-600",
    bar: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Zap,
    title: "Five-Minute Setup, Zero Hardware",
    desc: "Sign up, port your number (or pick a fresh one), build your IVR in the drag-and-drop builder, add agents, go live. No PRI lines. No on-premise PBX. No CapEx.",
    metric: "5 min",
    metricLabel: "to live",
    accent: "text-amber-600",
    bar: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "AI That Pays For Itself",
    desc: "Voice bots deflect 40-70% of repetitive calls. AI auto-summaries cut after-call work by 60%. AI QA replaces a manual review team. The platform usually pays for itself in under 90 days.",
    metric: "40-70%",
    metricLabel: "calls deflected",
    accent: "text-fuchsia-600",
    bar: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-In",
    desc: "TRAI registered, DPDP compliant, ISO 27001 certified, with RBI and IRDAI-ready workflows. Encrypted SIP, role-based access, full audit trails and India-only data residency on by default.",
    metric: "4×",
    metricLabel: "frameworks covered",
    accent: "text-emerald-600",
    bar: "from-emerald-500 to-teal-500",
  },
  {
    icon: Wallet,
    title: "Honest, Per-Agent Pricing",
    desc: "No hidden minutes packs, no overage gotchas, no setup fees that triple the first invoice. One transparent per-agent price with the AI features included — not behind a 'premium' upsell.",
    metric: "₹0",
    metricLabel: "setup fees",
    accent: "text-sky-600",
    bar: "from-sky-500 to-blue-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Support That Actually Picks Up",
    desc: "Ticket SLAs in hours, WhatsApp support for admins, dedicated success manager from 25 agents up. Same time zone. Same language. Same urgency.",
    metric: "IST",
    metricLabel: "same time zone",
    accent: "text-rose-600",
    bar: "from-rose-500 to-pink-500",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-kedeyo" className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-10 h-[22rem] w-[22rem] rounded-full bg-violet-500/[0.05] blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — sticky manifesto pillar */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Why Kedeyo
              </span>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                Six reasons growing Indian teams{" "}
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                  switch to Kedeyo
                </span>{" "}
                <span className="text-muted-foreground/80">— and stay.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                No fluff. Every reason here is something teams told us after they moved off legacy CCaaS, voicebot
                point-tools or a pile of duct-taped scripts.
              </p>

              {/* Pull-quote */}
              <figure className="mt-10 border-l-2 border-primary/40 pl-5">
                <Quote className="h-4 w-4 text-primary/60" aria-hidden />
                <blockquote className="mt-2 text-[15px] font-medium leading-relaxed text-foreground">
                  &ldquo;We replaced three tools with Kedeyo and cut our cost per conversation by 40%. Setup took five
                  minutes, not five weeks.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-[12px] text-muted-foreground">
                  <span className="font-semibold text-foreground">QuickServ</span> · Mumbai · E-Commerce
                </figcaption>
              </figure>

              {/* Aggregate stats */}
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Teams</dt>
                  <dd className="mt-1 text-2xl font-bold tracking-tight text-foreground">5K+</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Calls / day</dt>
                  <dd className="mt-1 text-2xl font-bold tracking-tight text-foreground">2M+</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">AI resolved</dt>
                  <dd className="mt-1 text-2xl font-bold tracking-tight text-foreground">68%</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* RIGHT — vertical "ledger" of reasons */}
          <ol className="lg:col-span-7">
            {REASONS.map((r, i) => {
              const Icon = r.icon
              const num = String(i + 1).padStart(2, "0")
              const isLast = i === REASONS.length - 1
              return (
                <li key={r.title} className={`group relative ${isLast ? "" : "border-b border-border"}`}>
                  {/* Vertical hover bar on the left edge */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-gradient-to-b transition-transform duration-500 ease-out group-hover:scale-y-100 ${r.bar}`}
                  />

                  <div className="relative flex flex-col gap-4 py-8 pl-6 pr-2 sm:flex-row sm:items-start sm:gap-7 lg:py-9">
                    {/* Number + metric column */}
                    <div className="flex shrink-0 items-baseline gap-3 sm:w-[140px] sm:flex-col sm:items-start sm:gap-1">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                        {num}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className={`text-2xl font-bold tracking-tight sm:text-[1.75rem] ${r.accent}`}>
                          {r.metric}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                        {r.metricLabel}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="flex items-start gap-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        <span
                          className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md ring-1 ring-border transition-colors duration-300 group-hover:bg-muted ${r.accent}`}
                          aria-hidden
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="flex-1">{r.title}</span>
                        <ArrowUpRight
                          className={`mt-1.5 h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${r.accent}`}
                          aria-hidden
                        />
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{r.desc}</p>
                    </div>
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
