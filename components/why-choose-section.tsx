import {
  MapPin,
  Zap,
  Sparkles,
  ShieldCheck,
  Wallet,
  HeadphonesIcon,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"

type Reason = {
  icon: LucideIcon
  title: string
  desc: string
  iconColor: string
  numberGradient: string
  ruleGradient: string
}

const REASONS: Reason[] = [
  {
    icon: MapPin,
    title: "Genuinely Made for India",
    desc: "Hindi-English-Tamil voice bots, INR pricing, Indian carrier interconnect, and an India-based support team. Not a global product translated for India — a product designed in India for Indian conversations.",
    iconColor: "text-violet-600",
    numberGradient: "from-violet-500/30 via-violet-500/10 to-transparent",
    ruleGradient: "from-violet-500 via-fuchsia-500 to-transparent",
  },
  {
    icon: Zap,
    title: "Five-Minute Setup, Zero Hardware",
    desc: "Sign up, port your number (or pick a fresh one), build your IVR in the drag-and-drop builder, add agents, go live. No PRI lines. No on-premise PBX. No CapEx.",
    iconColor: "text-amber-600",
    numberGradient: "from-amber-500/30 via-amber-500/10 to-transparent",
    ruleGradient: "from-amber-500 via-orange-500 to-transparent",
  },
  {
    icon: Sparkles,
    title: "AI That Pays For Itself",
    desc: "Voice bots deflect 40-70% of repetitive calls. AI auto-summaries cut after-call work by 60%. AI QA replaces a manual review team. The platform usually pays for itself in under 90 days.",
    iconColor: "text-fuchsia-600",
    numberGradient: "from-fuchsia-500/30 via-fuchsia-500/10 to-transparent",
    ruleGradient: "from-fuchsia-500 via-pink-500 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-In",
    desc: "TRAI registered, DPDP compliant, ISO 27001 certified, with RBI and IRDAI-ready workflows. Encrypted SIP, role-based access, full audit trails and India-only data residency are turned on by default.",
    iconColor: "text-emerald-600",
    numberGradient: "from-emerald-500/30 via-emerald-500/10 to-transparent",
    ruleGradient: "from-emerald-500 via-teal-500 to-transparent",
  },
  {
    icon: Wallet,
    title: "Honest, Per-Agent Pricing",
    desc: "No hidden minutes packs, no overage gotchas, no setup fees that triple the first invoice. One transparent per-agent price with the AI features included — not behind a 'premium' upsell.",
    iconColor: "text-sky-600",
    numberGradient: "from-sky-500/30 via-sky-500/10 to-transparent",
    ruleGradient: "from-sky-500 via-blue-500 to-transparent",
  },
  {
    icon: HeadphonesIcon,
    title: "Support That Actually Picks Up",
    desc: "Ticket SLAs in hours, WhatsApp support for admins, dedicated success manager from 25 agents up. Same time zone. Same language. Same urgency.",
    iconColor: "text-rose-600",
    numberGradient: "from-rose-500/30 via-rose-500/10 to-transparent",
    ruleGradient: "from-rose-500 via-pink-500 to-transparent",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-kedeyo" className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-3xl" />
        <div className="absolute -right-24 bottom-24 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Why Kedeyo
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Six reasons growing Indian teams{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              switch to Kedeyo (and stay)
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No fluff. Every reason below is something teams told us when they moved off legacy CCaaS, voicebot point-tools or a pile of duct-taped scripts.
          </p>
        </div>

        {/* Editorial split list — no boxes, just typography + dividers */}
        <ul className="mx-auto mt-20 grid gap-x-14 gap-y-2 md:grid-cols-2">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            const num = String(i + 1).padStart(2, "0")
            return (
              <li key={r.title} className="group relative">
                {/* Top hairline */}
                <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-border" />
                {/* Animated gradient rule that grows on hover */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-px w-0 bg-gradient-to-r ${r.ruleGradient} transition-all duration-500 ease-out group-hover:w-full`}
                />

                <div className="relative flex gap-6 py-8 md:gap-7 md:py-10">
                  {/* Left: oversized gradient numeral */}
                  <div className="relative shrink-0">
                    <span
                      className={`block bg-gradient-to-br ${r.numberGradient} bg-clip-text text-5xl font-extrabold tracking-tight text-transparent transition-transform duration-500 group-hover:-translate-y-0.5 sm:text-6xl`}
                      aria-hidden
                    >
                      {num}
                    </span>
                    {/* Icon under number */}
                    <span
                      className={`mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border transition-all duration-300 group-hover:ring-2 ${r.iconColor} group-hover:bg-white`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Right: copy */}
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-start gap-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      <span className="flex-1">{r.title}</span>
                      <ArrowUpRight
                        className={`mt-1 h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${r.iconColor}`}
                        aria-hidden
                      />
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
