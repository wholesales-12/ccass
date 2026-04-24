"use client"

import { useState } from "react"
import {
  Activity,
  ArrowRight,
  Bot,
  GitBranch,
  LineChart,
  MessageCircle,
  PhoneOutgoing,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LiveMonitorMock } from "@/components/mocks/live-monitor"
import { AutoDialerMock } from "@/components/mocks/auto-dialer"
import { IvrMock } from "@/components/mocks/ivr"
import { VoiceBotMock } from "@/components/mocks/voice-bot"
import { WhatsAppMock } from "@/components/mocks/whatsapp"
import { ReportsMock } from "@/components/mocks/reports"

type Tab = {
  id: string
  label: string
  short: string
  icon: LucideIcon
  title: string
  description: string
  highlights: string[]
  stats: { value: string; label: string }[]
  href: string
  dot: string // bg color for the dot
  gradient: string // active tab gradient
  panelGlow: string // panel accent glow
  render: () => React.ReactNode
}

const TABS: Tab[] = [
  {
    id: "monitor",
    label: "Live Monitor",
    short: "Real-time supervision",
    icon: Activity,
    title: "Monitor every call in real time",
    description:
      "See who's on a call, who's idle, and jump in instantly. Barge, whisper, or listen — your supervisors stay in control at all times.",
    highlights: ["Live agent status", "Barge & whisper", "Queue dashboard", "SLA alerts"],
    stats: [
      { value: "<1s", label: "Dashboard refresh" },
      { value: "360°", label: "Supervisor view" },
      { value: "24/7", label: "Live tracking" },
    ],
    href: "/features/live-monitor",
    dot: "bg-violet-500",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-500",
    panelGlow: "from-violet-500/12 via-purple-500/8 to-transparent",
    render: () => <LiveMonitorMock />,
  },
  {
    id: "dialer",
    label: "Auto Dialer",
    short: "3× faster outbound",
    icon: PhoneOutgoing,
    title: "Dial 3× faster with smart Auto Dialer",
    description:
      "Upload your lead list and let Kedeyo dial automatically. Agents only connect to answered calls — zero manual dialing, zero dead air.",
    highlights: ["Predictive dialing", "CRM sync", "DND filtering", "Answer detection"],
    stats: [
      { value: "3×", label: "More dials/hour" },
      { value: "92%", label: "Agent utilization" },
      { value: "0", label: "Manual dialing" },
    ],
    href: "/features/auto-dialer",
    dot: "bg-fuchsia-500",
    gradient: "from-fuchsia-600 via-pink-600 to-rose-500",
    panelGlow: "from-fuchsia-500/12 via-pink-500/8 to-transparent",
    render: () => <AutoDialerMock />,
  },
  {
    id: "ivr",
    label: "IVR Designer",
    short: "Drag-and-drop flows",
    icon: GitBranch,
    title: "Build smart IVR flows in minutes",
    description:
      "Drag-and-drop IVR builder with multi-level menus, language selection, and intelligent routing. Go live without writing a single line of code.",
    highlights: ["Visual builder", "Multi-language", "TRAI compliant", "Time-based rules"],
    stats: [
      { value: "12+", label: "Languages" },
      { value: "5 min", label: "To go live" },
      { value: "100%", label: "TRAI compliant" },
    ],
    href: "/features/ivr",
    dot: "bg-purple-500",
    gradient: "from-purple-600 via-violet-600 to-indigo-500",
    panelGlow: "from-purple-500/12 via-indigo-500/8 to-transparent",
    render: () => <IvrMock />,
  },
  {
    id: "voicebot",
    label: "Voice Bot",
    short: "AI 24/7 agent",
    icon: Bot,
    title: "Handle incoming calls 24/7 with AI",
    description:
      "Zero missed calls. Your AI voice bot answers every call, resolves queries in Hindi, English or Tamil, and routes to human agents when needed.",
    highlights: ["Natural voice AI", "Hindi · EN · Tamil", "Auto escalation", "Barge-in ready"],
    stats: [
      { value: "68%", label: "Zero-agent resolve" },
      { value: "<280ms", label: "Response latency" },
      { value: "24/7", label: "Always on" },
    ],
    href: "/features/voice-bot",
    dot: "bg-indigo-500",
    gradient: "from-indigo-600 via-violet-600 to-purple-500",
    panelGlow: "from-indigo-500/12 via-violet-500/8 to-transparent",
    render: () => <VoiceBotMock />,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    short: "Broadcasts & 2-way",
    icon: MessageCircle,
    title: "Broadcast on WhatsApp at scale",
    description:
      "Send bulk campaigns, track delivery and read rates, and automate follow-ups for promotions, reminders, and order updates.",
    highlights: ["Bulk broadcasts", "Template messages", "Read tracking", "Click-to-call"],
    stats: [
      { value: "98%", label: "Open rate" },
      { value: "10k/s", label: "Broadcast speed" },
      { value: "∞", label: "Contacts" },
    ],
    href: "/features/whatsapp",
    dot: "bg-emerald-500",
    gradient: "from-emerald-600 via-teal-600 to-cyan-500",
    panelGlow: "from-emerald-500/12 via-teal-500/8 to-transparent",
    render: () => <WhatsAppMock />,
  },
  {
    id: "reports",
    label: "Reports",
    short: "50+ dashboards",
    icon: LineChart,
    title: "50+ reports with custom KPIs",
    description:
      "Track agent performance, campaign ROI, and customer satisfaction with real-time dashboards, scheduled exports, and custom alerts.",
    highlights: ["50+ dashboards", "Scheduled exports", "CSAT tracking", "Custom alerts"],
    stats: [
      { value: "50+", label: "Pre-built reports" },
      { value: "Live", label: "Real-time data" },
      { value: "CSV / PDF", label: "Export ready" },
    ],
    href: "/features/reports",
    dot: "bg-amber-500",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    panelGlow: "from-amber-500/12 via-orange-500/8 to-transparent",
    render: () => <ReportsMock />,
  },
]

export function PlatformExplorer() {
  const [active, setActive] = useState<string>(TABS[0].id)
  const current = TABS.find((t) => t.id === active) ?? TABS[0]
  const ActiveIcon = current.icon

  return (
    <section id="platform" className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Colorful ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[5%] h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute right-[6%] top-[10%] h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl" />
        <div className="absolute left-1/2 top-[55%] h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute right-[12%] bottom-[8%] h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Explore the platform
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            One command center for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                every conversation
              </span>
              <svg
                aria-hidden
                viewBox="0 0 320 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 80 2, 160 6 T 318 4"
                  stroke="url(#pl-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="pl-underline" x1="0" x2="1">
                    <stop offset="0%" stopColor="oklch(0.45 0.22 295)" />
                    <stop offset="50%" stopColor="oklch(0.65 0.25 320)" />
                    <stop offset="100%" stopColor="oklch(0.62 0.24 300)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Six modules, one unified platform — pick any capability to see it in action.
          </p>
        </div>

        {/* Colorful tab bar */}
        <div
          role="tablist"
          aria-label="Platform modules"
          className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-2 sm:gap-2.5"
        >
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
                  isActive
                    ? "border-transparent text-white shadow-lg shadow-primary/25 scale-[1.03]"
                    : "border-border bg-card text-foreground/75 hover:border-primary/30 hover:bg-secondary hover:text-foreground",
                )}
              >
                {/* Active gradient background */}
                {isActive && (
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-0 rounded-full bg-gradient-to-r",
                      tab.gradient,
                    )}
                  />
                )}
                {/* Color dot for inactive */}
                {!isActive && (
                  <span
                    aria-hidden
                    className={cn("relative h-1.5 w-1.5 shrink-0 rounded-full", tab.dot)}
                  />
                )}
                <Icon className={cn("relative h-4 w-4", isActive ? "text-white" : "text-foreground/60")} />
                <span className="relative">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <div className="relative mx-auto mt-10 max-w-6xl">
          {/* Animated gradient halo around card */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br opacity-60 blur-3xl transition-all duration-700",
              current.panelGlow,
            )}
          />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            {/* Thin gradient bar at top */}
            <div aria-hidden className={cn("h-1 w-full bg-gradient-to-r", current.gradient)} />

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg sm:h-14 sm:w-14",
                      current.gradient,
                    )}
                  >
                    <ActiveIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    {/* Subtle glow ping */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-0 animate-ping rounded-2xl bg-gradient-to-br opacity-40",
                        current.gradient,
                      )}
                      style={{ animationDuration: "2.6s" }}
                    />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      {current.label}
                    </div>
                    <h3 className="mt-1 text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live preview
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {current.description}
              </p>

              {/* Two-column body: highlights + mock */}
              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-8">
                {/* Highlights column */}
                <div className="flex flex-col gap-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    What you get
                  </div>
                  <ul className="grid gap-2.5">
                    {current.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm font-medium text-foreground"
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br text-white",
                            current.gradient,
                          )}
                        >
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                            <path
                              fillRule="evenodd"
                              d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stats block */}
                  <div className="mt-3 grid grid-cols-3 divide-x divide-border overflow-hidden rounded-xl border border-border bg-background">
                    {current.stats.map((s) => (
                      <div key={s.label} className="px-3 py-3 text-center">
                        <div
                          className={cn(
                            "bg-gradient-to-br bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl",
                            current.gradient,
                          )}
                        >
                          {s.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={current.href}
                    className={cn(
                      "group/cta mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]",
                      current.gradient,
                    )}
                  >
                    Explore {current.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                  </Link>
                </div>

                {/* Mock preview column */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background via-secondary/30 to-background p-4 shadow-inner sm:p-6">
                  {/* Decorative corner gradients */}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-25 blur-2xl",
                      current.gradient,
                    )}
                  />
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
                      current.gradient,
                    )}
                  />
                  <div className="relative">{current.render()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
