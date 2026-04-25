import {
  MapPin,
  Zap,
  Sparkles,
  ShieldCheck,
  Wallet,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react"

type Reason = {
  icon: LucideIcon
  title: string
  desc: string
  accent: string
  bg: string
  border: string
}

const REASONS: Reason[] = [
  {
    icon: MapPin,
    title: "Genuinely Made for India",
    desc: "Hindi-English-Tamil voice bots, INR pricing, Indian carrier interconnect, and an India-based support team. Not a global product translated for India — a product designed in India for Indian conversations.",
    accent: "text-violet-700",
    bg: "from-violet-500/10 to-violet-500/0",
    border: "hover:border-violet-500/40",
  },
  {
    icon: Zap,
    title: "Five-Minute Setup, Zero Hardware",
    desc: "Sign up, port your number (or pick a fresh one), build your IVR in the drag-and-drop builder, add agents, go live. No PRI lines. No on-premise PBX. No CapEx.",
    accent: "text-amber-700",
    bg: "from-amber-500/10 to-amber-500/0",
    border: "hover:border-amber-500/40",
  },
  {
    icon: Sparkles,
    title: "AI That Pays For Itself",
    desc: "Voice bots deflect 40-70% of repetitive calls. AI auto-summaries cut after-call work by 60%. AI QA replaces a manual review team. The platform usually pays for itself in under 90 days.",
    accent: "text-fuchsia-700",
    bg: "from-fuchsia-500/10 to-fuchsia-500/0",
    border: "hover:border-fuchsia-500/40",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-In",
    desc: "TRAI registered, DPDP compliant, ISO 27001 certified, with RBI and IRDAI-ready workflows. Encrypted SIP, role-based access, full audit trails and India-only data residency are turned on by default.",
    accent: "text-emerald-700",
    bg: "from-emerald-500/10 to-emerald-500/0",
    border: "hover:border-emerald-500/40",
  },
  {
    icon: Wallet,
    title: "Honest, Per-Agent Pricing",
    desc: "No hidden minutes packs, no overage gotchas, no setup fees that triple the first invoice. One transparent per-agent price with the AI features included — not behind a 'premium' upsell.",
    accent: "text-sky-700",
    bg: "from-sky-500/10 to-sky-500/0",
    border: "hover:border-sky-500/40",
  },
  {
    icon: HeadphonesIcon,
    title: "Support That Actually Picks Up",
    desc: "Ticket SLAs in hours, WhatsApp support for admins, dedicated success manager from 25 agents up. Same time zone. Same language. Same urgency.",
    accent: "text-rose-700",
    bg: "from-rose-500/10 to-rose-500/0",
    border: "hover:border-rose-500/40",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-kedeyo" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-32 h-[18rem] w-[18rem] rounded-full bg-violet-500/[0.06] blur-3xl" />
        <div className="absolute right-0 bottom-32 h-[18rem] w-[18rem] rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Why Kedeyo
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Six Reasons Growing Indian Teams{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              Switch to Kedeyo (and Stay)
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-22px_oklch(0.45_0.22_295/0.25)] ${r.border}`}
              >
                {/* Gradient wash on hover */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${r.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                {/* Number marker */}
                <span className="absolute right-5 top-5 font-mono text-xs font-semibold tabular-nums text-muted-foreground/60">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 ring-1 ring-border/60 backdrop-blur ${r.accent} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title + desc */}
                <h3 className="relative mt-4 text-lg font-semibold tracking-tight text-foreground">{r.title}</h3>
                <p className="relative mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
