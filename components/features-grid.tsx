"use client"

import Link from "next/link"
import {
  Bot,
  PhoneOutgoing,
  PhoneIncoming,
  GitBranch,
  Activity,
  MessageCircle,
  ArrowUpRight,
  Headphones,
  Cloud,
  BarChart3,
  type LucideIcon,
} from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  blurb: string
  href: string
  badge?: string
  accent: string
}

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: "AI Receptionist",
    blurb: "Picks up every call, qualifies, books.",
    href: "/features/ai-receptionist",
    badge: "New",
    accent: "text-violet-600",
  },
  {
    icon: Cloud,
    title: "Cloud Contact Center",
    blurb: "Inbound, outbound and unified desktop.",
    href: "/features/cloud-contact-center",
    accent: "text-indigo-600",
  },
  {
    icon: PhoneOutgoing,
    title: "Auto Dialer",
    blurb: "Skip dead numbers — talk to live answers.",
    href: "/features/auto-dialer",
    accent: "text-fuchsia-600",
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Call Center",
    blurb: "Skill-based ACD with smart queues.",
    href: "/features/inbound-call-center",
    accent: "text-sky-700",
  },
  {
    icon: Headphones,
    title: "Outbound Dialer",
    blurb: "Predictive, progressive and preview modes.",
    href: "/features/outbound-dialer",
    accent: "text-rose-700",
  },
  {
    icon: GitBranch,
    title: "IVR / Auto-Attendant",
    blurb: "Drag-and-drop, multilingual, no code.",
    href: "/features/ivr-auto-attendant",
    accent: "text-violet-700",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Broadcasting",
    blurb: "Templates, drips and replies in one inbox.",
    href: "/features/whatsapp-broadcasting",
    accent: "text-emerald-700",
  },
  {
    icon: Activity,
    title: "Live Monitor",
    blurb: "Whisper, barge and real-time wallboards.",
    href: "/features/live-monitor",
    accent: "text-cyan-700",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    blurb: "50+ reports with AI summaries and exports.",
    href: "/features/reports-analytics",
    accent: "text-amber-700",
  },
]

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-20 lg:py-24"
    >
      {/* Soft ambient glow — no box shapes, only color washes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-violet-500/[0.06] blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Header — left-aligned editorial */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">Platform</span>
              <span className="mx-2 text-border">/</span>
              <span>Nine core features</span>
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.02]">
              One platform.{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                Every conversation.
              </span>
            </h2>
          </div>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground lg:col-span-4">
            From the first ring to the final QA — every channel, every workflow, in a single product.
          </p>
        </div>

        {/* Feature ledger — 3 columns × 3 rows, only hairlines and typography */}
        <ul
          className="mt-14 grid grid-cols-1 border-t border-border md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <li
                key={f.title}
                className={[
                  "relative",
                  // Right + bottom hairlines, removed on edges to avoid double borders
                  "border-b border-border",
                  "md:[&:nth-child(2n)]:border-r-0",
                  "lg:[&:nth-child(3n)]:border-r-0",
                  "md:border-r",
                ].join(" ")}
              >
                <Link
                  href={f.href}
                  className="group relative block px-2 py-7 transition-colors duration-300 hover:bg-foreground/[0.025] sm:px-4 lg:px-6 lg:py-8"
                >
                  {/* Top meta row: index + badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-muted-foreground/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.badge && (
                      <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-fuchsia-600">
                        {f.badge}
                      </span>
                    )}
                  </div>

                  {/* Title row with icon glyph */}
                  <div className="mt-5 flex items-start gap-3">
                    <Icon
                      className={`mt-1 h-5 w-5 shrink-0 ${f.accent} transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110`}
                      strokeWidth={1.6}
                    />
                    <h3 className="text-pretty text-[1.35rem] font-semibold leading-tight tracking-tight text-foreground">
                      {f.title}
                    </h3>
                  </div>

                  {/* Single-line blurb */}
                  <p className="mt-2 max-w-[34ch] text-[13.5px] leading-relaxed text-muted-foreground">
                    {f.blurb}
                  </p>

                  {/* Reveal CTA — arrow + animated underline */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="relative inline-flex items-center text-[12px] font-semibold tracking-tight text-foreground/80">
                      <span>Explore</span>
                      <span
                        aria-hidden
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 transition-transform duration-500 group-hover:scale-x-100"
                      />
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>

                  {/* Subtle accent line on the left edge that grows on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-7 h-8 w-[2px] origin-top scale-y-0 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-rose-500 transition-transform duration-500 group-hover:scale-y-100 lg:top-8"
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Footer note + CTA — pure typography */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Built for India · TRAI &amp; DPDP ready · 99.95% uptime
          </p>
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="relative">
              See all features
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-px w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500"
              />
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
