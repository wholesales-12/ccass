import { Sparkles, Cpu, Flag, Layers, ArrowUpRight, type LucideIcon } from "lucide-react"

type Pillar = {
  icon: LucideIcon
  title: string
  desc: string
  proof: string[]
  gradient: string
  ring: string
  accent: string
}

const PILLARS: Pillar[] = [
  {
    icon: Cpu,
    title: "Genuinely AI-first",
    desc:
      "The AI Receptionist is built into the platform, not bolted on. Every inbound call is qualified by AI, every recording is summarised, every campaign is scored — automatically.",
    proof: ["AI Receptionist included", "AI call summaries", "Sentiment scoring"],
    gradient: "from-violet-600 via-purple-600 to-fuchsia-500",
    ring: "ring-violet-500/20",
    accent: "text-violet-700",
  },
  {
    icon: Flag,
    title: "Built for India",
    desc:
      "Hindi and English voice support, INR pricing, TRAI / DPDP compliance and Indian carrier interconnect — all baked into the core, never sold as a premium add-on.",
    proof: ["Hindi · English voice", "INR pricing", "TRAI · DPDP · ISO 27001"],
    gradient: "from-fuchsia-600 via-pink-600 to-rose-500",
    ring: "ring-fuchsia-500/20",
    accent: "text-fuchsia-700",
  },
  {
    icon: Layers,
    title: "Built for SMBs and growing teams",
    desc:
      "Run a 5-agent inside-sales squad or a 500-seat support floor on the same platform — without re-architecting, re-buying or re-training when you scale.",
    proof: ["5 to 500 agents", "Same platform, same login", "No re-architecture"],
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    ring: "ring-amber-500/20",
    accent: "text-amber-700",
  },
]

/* Animations only run while parent .group is hovered */
const PAUSE = "[animation-play-state:paused] group-hover:[animation-play-state:running]"

export function WhatKedeyoIs() {
  return (
    <section id="what-kedeyo-is" className="relative overflow-hidden bg-secondary/30 py-20 lg:py-28">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute right-[8%] bottom-[5%] h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            What Kedeyo is
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            One AI contact center platform.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                Every conversation.
              </span>
            </span>{" "}
            Anywhere in India.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kedeyo is an AI-powered cloud contact center platform purpose-built for Indian sales and support teams. We
            give you every channel your customers reach you on — voice, IVR, WhatsApp — and every tool your agents need
            to convert and resolve, on{" "}
            <span className="font-medium text-foreground">one cloud platform that works the day you switch it on</span>.
          </p>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
            Three things make Kedeyo different from a traditional call center system
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${p.ring}`}
              >
                {/* Gradient bar at top */}
                <div aria-hidden className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.gradient}`} />

                {/* Number badge */}
                <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  0{idx + 1}
                </span>

                {/* Icon */}
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${p.gradient} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="h-6 w-6" />
                  <span
                    aria-hidden
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-40 ${p.gradient} ${PAUSE}`}
                    style={{ animation: "wki-ping 2.4s ease-in-out infinite" }}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-balance text-xl font-semibold tracking-tight text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                {/* Proof chips */}
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.proof.map((tag, i) => (
                    <li
                      key={tag}
                      className={`inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium text-foreground/80 ${PAUSE}`}
                      style={{ animation: `wki-pop 3s ease-in-out ${i * 0.2}s infinite` }}
                    >
                      <ArrowUpRight className={`h-3 w-3 ${p.accent}`} />
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient blob */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-15 blur-2xl ${p.gradient}`}
                />
              </div>
            )
          })}
        </div>

        <style>{`@keyframes wki-ping { 0%,100% { transform: scale(1); opacity: 0.4 } 50% { transform: scale(1.18); opacity: 0.15 } } @keyframes wki-pop { 0%,100% { transform: translateY(0); opacity: 0.85 } 50% { transform: translateY(-2px); opacity: 1 } }`}</style>
      </div>
    </section>
  )
}
