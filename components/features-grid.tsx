import Link from "next/link"
import {
  Bot,
  PhoneOutgoing,
  PhoneIncoming,
  GitBranch,
  Activity,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Headphones,
  Cloud,
  BarChart3,
  type LucideIcon,
} from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  badge?: string
  desc: string
  tags: string[]
  href: string
  span: string
  gradient: string
  accent: string
  visual: "waveform" | "stack" | "dialer" | "queue" | "modes" | "tree" | "chat" | "monitor" | "chart"
}

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: "AI Receptionist",
    badge: "NEW",
    desc: "The AI-powered virtual receptionist that handles calls, routes intelligently, and never sleeps. Picks up every inbound call, qualifies the caller and routes to the right agent — even at 2 AM.",
    tags: ["24×7 Pickup", "Hindi · English", "Smart Routing"],
    href: "/features/ai-receptionist",
    span: "lg:col-span-8",
    gradient: "from-violet-500/15 via-fuchsia-500/10 to-transparent",
    accent: "text-violet-600",
    visual: "waveform",
  },
  {
    icon: Cloud,
    title: "Cloud Contact Center",
    desc: "Full-featured cloud platform for inbound & outbound — skill-based ACD, multi-level IVR, queues, dispositions and a unified agent desktop. Run 5 agents or 500 on the same login.",
    tags: ["Inbound + Outbound", "Skill ACD", "Unified Desktop"],
    href: "/features/cloud-contact-center",
    span: "lg:col-span-4",
    gradient: "from-indigo-500/12 via-violet-500/8 to-transparent",
    accent: "text-indigo-600",
    visual: "stack",
  },
  {
    icon: PhoneOutgoing,
    title: "Auto Dialer",
    desc: "Maximize sales outreach with dialing automation. Skip voicemails, busy tones and DNCs, and drop only live answers onto agent screens with full lead context.",
    tags: ["Auto-Skip DND", "CRM Sync", "Live Answers Only"],
    href: "/features/auto-dialer",
    span: "lg:col-span-4",
    gradient: "from-fuchsia-500/15 via-rose-500/8 to-transparent",
    accent: "text-fuchsia-600",
    visual: "dialer",
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Call Center",
    desc: "Smart ACD with skill-based routing & queue management. Match every caller to the best-fit agent based on language, skill and history — no more transfers, no more hold music.",
    tags: ["Skill ACD", "Queues + SLA", "Smart Transfers"],
    href: "/features/inbound-call-center",
    span: "lg:col-span-4",
    gradient: "from-sky-500/12 via-indigo-500/8 to-transparent",
    accent: "text-sky-700",
    visual: "queue",
  },
  {
    icon: Headphones,
    title: "Outbound Dialer",
    desc: "Predictive, progressive & preview dialing modes — pick the strategy per campaign. Pace your dials, keep abandonment under 3% and adapt to compliance windows automatically.",
    tags: ["Predictive", "Progressive", "Preview"],
    href: "/features/outbound-dialer",
    span: "lg:col-span-4",
    gradient: "from-rose-500/12 via-fuchsia-500/8 to-transparent",
    accent: "text-rose-700",
    visual: "modes",
  },
  {
    icon: GitBranch,
    title: "IVR / Auto-Attendant",
    desc: "Drag-and-drop multilingual IVR builder with DTMF, speech recognition, time-of-day routing and dynamic menus that adapt to the caller — go live without writing a single line of code.",
    tags: ["Drag-and-Drop", "Multilingual", "Dynamic Menus"],
    href: "/features/ivr-auto-attendant",
    span: "lg:col-span-6",
    gradient: "from-violet-500/12 via-indigo-500/8 to-transparent",
    accent: "text-violet-700",
    visual: "tree",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Broadcasting",
    desc: "Bulk messaging & campaign automation on the channel India actually uses. Send approved templates, run drips, capture replies in agent desktop — all DPDP-compliant.",
    tags: ["Templates", "Drip Campaigns", "DPDP Ready"],
    href: "/features/whatsapp-broadcasting",
    span: "lg:col-span-6",
    gradient: "from-emerald-500/15 via-green-500/8 to-transparent",
    accent: "text-emerald-700",
    visual: "chat",
  },
  {
    icon: Activity,
    title: "Live Monitor",
    desc: "Real-time dashboards, whisper & barge-in. Watch every agent, queue and SLA in real time. Coach mid-call, jump in when it matters and keep the floor on track.",
    tags: ["Whisper · Barge", "Wallboards", "Live SLA"],
    href: "/features/live-monitor",
    span: "lg:col-span-4",
    gradient: "from-cyan-500/12 via-sky-500/8 to-transparent",
    accent: "text-cyan-700",
    visual: "monitor",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "50+ reports with custom KPIs & exports. AI-generated call summaries, sentiment scores and topic tags so you stop sampling and start measuring every conversation.",
    tags: ["50+ Reports", "AI Summaries", "Custom Exports"],
    href: "/features/reports-analytics",
    span: "lg:col-span-8",
    gradient: "from-amber-500/15 via-rose-500/10 to-transparent",
    accent: "text-amber-700",
    visual: "chart",
  },
]

/* Animations are paused by default and only run while the parent .group is hovered. */
const PAUSE = "[animation-play-state:paused] group-hover:[animation-play-state:running]"

/* ---------------- Visual primitives per card ---------------- */

function Waveform() {
  const bars = Array.from({ length: 28 })
  return (
    <div className="flex h-20 items-end gap-[3px]">
      {bars.map((_, i) => (
        <span
          key={i}
          className={`block w-1 rounded-full bg-gradient-to-t from-violet-500 to-fuchsia-400 ${PAUSE}`}
          style={{
            height: `${20 + Math.abs(Math.sin(i * 0.6)) * 70 + (i % 3) * 6}%`,
            animation: `feat-wave 1.4s ease-in-out ${i * 0.04}s infinite`,
            transformOrigin: "bottom",
          }}
        />
      ))}
      <style>{`@keyframes feat-wave { 0%,100% { transform: scaleY(0.4) } 50% { transform: scaleY(1) } }`}</style>
    </div>
  )
}

function StackVisual() {
  const layers = [
    { label: "Inbound · Outbound · Blended", color: "bg-indigo-500/20 text-indigo-700 border-indigo-500/30" },
    { label: "Skill ACD · Multi-level IVR", color: "bg-violet-500/15 text-violet-700 border-violet-500/30" },
    { label: "Queues · SLA · Dispositions", color: "bg-fuchsia-500/15 text-fuchsia-700 border-fuchsia-500/30" },
    { label: "Unified Agent Desktop", color: "bg-rose-500/15 text-rose-700 border-rose-500/30" },
  ]
  return (
    <div className="space-y-1">
      {layers.map((l, i) => (
        <div
          key={l.label}
          className={`flex items-center justify-between rounded-md border px-2 py-1 text-[10px] font-medium ${l.color} ${PAUSE}`}
          style={{ animation: `feat-stack 3.5s ease-in-out ${i * 0.25}s infinite` }}
        >
          <span>{l.label}</span>
          <CheckCircle2 className="h-3 w-3 opacity-70" />
        </div>
      ))}
      <style>{`@keyframes feat-stack { 0%,100% { transform: translateX(0); opacity: 0.85 } 50% { transform: translateX(2px); opacity: 1 } }`}</style>
    </div>
  )
}

function DialerVisual() {
  return (
    <div className="space-y-2">
      {[
        { label: "Dialed", w: 80, t: "4,820" },
        { label: "Connected", w: 62, t: "1,640" },
        { label: "Qualified", w: 28, t: "412" },
      ].map((row, i) => (
        <div key={i} className="space-y-0.5">
          <div className="flex items-center justify-between text-[9px]">
            <span className="text-muted-foreground">{row.label}</span>
            <span className="font-mono text-fuchsia-700">{row.t}</span>
          </div>
          <div className="relative h-1.5 overflow-hidden rounded-full bg-fuchsia-500/10">
            <span
              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 ${PAUSE}`}
              style={{ width: `${row.w}%`, animation: `feat-grow 2.4s ease-in-out ${i * 0.3}s infinite alternate` }}
            />
          </div>
        </div>
      ))}
      <style>{`@keyframes feat-grow { from { transform: scaleX(0.6); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }`}</style>
    </div>
  )
}

function QueueVisual() {
  const slots = [
    { name: "Sales", queue: 2, agents: 4, color: "text-sky-700", bar: "from-sky-500 to-indigo-500", bg: "bg-sky-500/10" },
    { name: "Support", queue: 5, agents: 6, color: "text-indigo-700", bar: "from-indigo-500 to-violet-500", bg: "bg-indigo-500/10" },
    { name: "Billing", queue: 1, agents: 3, color: "text-violet-700", bar: "from-violet-500 to-fuchsia-500", bg: "bg-violet-500/10" },
  ]
  return (
    <div className="space-y-1.5">
      {slots.map((s, i) => (
        <div
          key={s.name}
          className={`flex items-center gap-2 rounded-md ${s.bg} px-2 py-1 ${PAUSE}`}
          style={{ animation: `feat-queue 3s ease-in-out ${i * 0.25}s infinite` }}
        >
          <span className={`text-[10px] font-semibold ${s.color}`}>{s.name}</span>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/60">
            <span
              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${s.bar}`}
              style={{ width: `${(s.queue / 6) * 100}%` }}
            />
          </div>
          <span className="font-mono text-[9px] text-muted-foreground">
            {s.queue} q · {s.agents} live
          </span>
        </div>
      ))}
      <style>{`@keyframes feat-queue { 0%,100% { transform: translateX(0); opacity: 0.85 } 50% { transform: translateX(2px); opacity: 1 } }`}</style>
    </div>
  )
}

function ModesVisual() {
  const modes = [
    { name: "Predictive", desc: "AI pace", color: "bg-rose-500/12 text-rose-700 border-rose-500/30" },
    { name: "Progressive", desc: "1:1 pace", color: "bg-fuchsia-500/12 text-fuchsia-700 border-fuchsia-500/30" },
    { name: "Preview", desc: "Agent decides", color: "bg-violet-500/12 text-violet-700 border-violet-500/30" },
  ]
  return (
    <div className="space-y-1.5">
      <div className="flex gap-1.5">
        {modes.map((m, i) => (
          <div
            key={m.name}
            className={`flex flex-1 flex-col items-center rounded-md border px-1.5 py-1.5 ${m.color} ${PAUSE}`}
            style={{ animation: `feat-mode 3s ease-in-out ${i * 0.4}s infinite` }}
          >
            <span className="text-[10px] font-semibold">{m.name}</span>
            <span className="font-mono text-[8.5px] opacity-70">{m.desc}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 rounded-md border border-rose-500/20 bg-rose-500/5 px-2 py-1">
        <span className="font-mono text-[9px] text-rose-700">Abandon &lt; 3%</span>
        <div className="ml-auto flex items-center gap-[2px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className={`block h-2 w-[3px] rounded-sm bg-rose-500/70 ${PAUSE}`}
              style={{ animation: `feat-pulse-bar 1s ease-in-out ${i * 0.08}s infinite` }}
            />
          ))}
        </div>
      </div>
      <style>{`@keyframes feat-mode { 0%,100% { transform: translateY(0); opacity: 0.85 } 50% { transform: translateY(-2px); opacity: 1 } } @keyframes feat-pulse-bar { 0%,100% { transform: scaleY(0.4) } 50% { transform: scaleY(1) } }`}</style>
    </div>
  )
}

function TreeVisual() {
  const branches = [
    { key: "1", label: "Sales", queue: "2 free", bg: "bg-cyan-500/10", text: "text-cyan-700", border: "border-cyan-500/30" },
    { key: "2", label: "Support", queue: "1 in queue", bg: "bg-emerald-500/10", text: "text-emerald-700", border: "border-emerald-500/30" },
    { key: "3", label: "Billing", queue: "4 in queue", bg: "bg-amber-500/10", text: "text-amber-700", border: "border-amber-500/30" },
  ]
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-md border border-violet-500/30 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[9px] font-medium text-violet-700">
          <span className="relative flex h-1.5 w-1.5">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75 ${PAUSE}`} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-500" />
          </span>
          Incoming
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
        <span className="rounded-md bg-violet-500 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white">IVR</span>
      </div>
      <div className="space-y-1">
        {branches.map((b, i) => (
          <div
            key={b.key}
            className={`flex items-center gap-1.5 ${PAUSE}`}
            style={{ animation: `feat-row 3s ease-in-out ${i * 0.4}s infinite` }}
          >
            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${b.border} ${b.bg} font-mono text-[10px] font-bold ${b.text}`}>
              {b.key}
            </span>
            <span className={`text-[11px] font-semibold ${b.text}`}>{b.label}</span>
            <div className="h-px flex-1 border-t border-dashed border-border" />
            <span className="font-mono text-[9px] text-muted-foreground">{b.queue}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes feat-row { 0%,100% { opacity: 0.7 } 50% { opacity: 1 } }`}</style>
    </div>
  )
}

function ChatVisual() {
  return (
    <div className="space-y-1.5">
      <div className={`inline-block max-w-[80%] rounded-lg rounded-bl-sm bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-900 ${PAUSE}`} style={{ animation: "feat-chat-in 2.4s ease-in-out infinite" }}>
        Order shipped — track here
      </div>
      <div className={`ml-auto block w-fit max-w-[75%] rounded-lg rounded-br-sm bg-emerald-600 px-2.5 py-1 text-[11px] text-white ${PAUSE}`} style={{ animation: "feat-chat-out 2.4s ease-in-out 0.6s infinite" }}>
        Thanks! Confirmed
      </div>
      <style>{`@keyframes feat-chat-in { 0%,100% { transform: translateX(0); opacity: 0.85 } 50% { transform: translateX(2px); opacity: 1 } } @keyframes feat-chat-out { 0%,100% { transform: translateX(0); opacity: 0.85 } 50% { transform: translateX(-2px); opacity: 1 } }`}</style>
    </div>
  )
}

function MonitorVisual() {
  const tiles = [
    { label: "Live calls", value: "42", color: "from-cyan-500 to-sky-500" },
    { label: "In queue", value: "08", color: "from-sky-500 to-indigo-500" },
    { label: "Avg wait", value: "12s", color: "from-indigo-500 to-violet-500" },
  ]
  return (
    <div className="space-y-1.5">
      <div className="grid grid-cols-3 gap-1.5">
        {tiles.map((t, i) => (
          <div
            key={t.label}
            className={`rounded-md border border-cyan-500/20 bg-white/70 px-2 py-1 ${PAUSE}`}
            style={{ animation: `feat-tile 2.4s ease-in-out ${i * 0.2}s infinite` }}
          >
            <div className={`bg-gradient-to-br ${t.color} bg-clip-text font-mono text-sm font-bold text-transparent`}>
              {t.value}
            </div>
            <div className="text-[8.5px] uppercase tracking-wider text-muted-foreground">{t.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 rounded-md border border-cyan-500/20 bg-cyan-500/5 px-2 py-1">
        <span className="relative flex h-1.5 w-1.5">
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75 ${PAUSE}`} />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
        </span>
        <span className="font-mono text-[9px] text-cyan-700">Whisper · Barge · Listen</span>
      </div>
      <style>{`@keyframes feat-tile { 0%,100% { transform: translateY(0); opacity: 0.85 } 50% { transform: translateY(-1.5px); opacity: 1 } }`}</style>
    </div>
  )
}

function ChartVisual() {
  const points = [22, 30, 24, 38, 32, 46, 40, 54, 48, 62, 58, 72]
  const w = 320
  const h = 80
  const step = w / (points.length - 1)
  const max = Math.max(...points)
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * (h - 10) - 5}`)
    .join(" ")
  const area = `${path} L ${w} ${h} L 0 ${h} Z`
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-20 w-full">
        <defs>
          <linearGradient id="feat-chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.75 0.18 45)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.75 0.18 45)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#feat-chart-fill)" />
        <path d={path} stroke="oklch(0.6 0.2 30)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle
          cx={w - 0.5}
          cy={h - (points[points.length - 1] / max) * (h - 10) - 5}
          r="4"
          fill="oklch(0.6 0.2 30)"
          className={PAUSE}
          style={{ animation: "feat-chart-dot 1.6s ease-in-out infinite" }}
        />
      </svg>
      <div className="mt-1 flex justify-between font-mono text-[9px] text-amber-700/80">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
        <span>Sun</span>
      </div>
      <style>{`@keyframes feat-chart-dot { 0%,100% { r: 4 } 50% { r: 6 } }`}</style>
    </div>
  )
}

function FeatureVisual({ kind }: { kind: Feature["visual"] }) {
  switch (kind) {
    case "waveform":
      return <Waveform />
    case "stack":
      return <StackVisual />
    case "dialer":
      return <DialerVisual />
    case "queue":
      return <QueueVisual />
    case "modes":
      return <ModesVisual />
    case "tree":
      return <TreeVisual />
    case "chat":
      return <ChatVisual />
    case "monitor":
      return <MonitorVisual />
    case "chart":
      return <ChartVisual />
    default:
      return null
  }
}

/* ---------------- Section ---------------- */

export function FeaturesGrid() {
  return (
    <section id="features" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-32 h-[22rem] w-[22rem] rounded-full bg-violet-500/[0.07] blur-3xl" />
        <div className="absolute right-0 top-80 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/[0.06] blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-[18rem] w-[18rem] rounded-full bg-amber-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3 w-3" />
            Nine core modules
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Everything your contact center needs —{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                in one platform
              </span>
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-1 left-0 h-2.5 w-full" preserveAspectRatio="none">
                <path d="M2 8 Q 80 2 150 6 T 298 7" stroke="url(#feat-underline)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="feat-underline" x1="0" x2="1">
                    <stop offset="0%" stopColor="oklch(0.5 0.24 295)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.22 20)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">AI Receptionist</span>,{" "}
            <span className="font-medium text-foreground">Cloud Contact Center</span>,{" "}
            <span className="font-medium text-foreground">Auto Dialer</span>,{" "}
            <span className="font-medium text-foreground">Inbound Call Center</span>,{" "}
            <span className="font-medium text-foreground">Outbound Dialer</span>,{" "}
            <span className="font-medium text-foreground">IVR / Auto-Attendant</span>,{" "}
            <span className="font-medium text-foreground">WhatsApp Broadcasting</span>,{" "}
            <span className="font-medium text-foreground">Live Monitor</span> and{" "}
            <span className="font-medium text-foreground">Reports &amp; Analytics</span> — from the very first call to
            the last QA review, Kedeyo handles the entire conversation lifecycle.
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
            Hover any card to see it come alive
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <Link
                key={f.title}
                href={f.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_-22px_oklch(0.45_0.22_295/0.3)] ${f.span}`}
              >
                <span aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-70 transition-opacity duration-500 group-hover:opacity-100`} />
                <span className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-muted-foreground backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>

                <div className="relative flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 shadow-sm ring-1 ring-border/60 backdrop-blur ${f.accent} transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Module</span>
                  {f.badge && (
                    <span className="ml-auto mr-12 rounded-md bg-fuchsia-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-fuchsia-700">
                      {f.badge}
                    </span>
                  )}
                </div>

                <div className="relative mt-5">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">{f.title}</h3>
                  <p className="mt-2 max-w-prose text-[13px] leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>

                <div className="relative mt-5 rounded-2xl border border-border/60 bg-background/70 p-4 backdrop-blur-sm">
                  <FeatureVisual kind={f.visual} />
                </div>

                <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {f.tags.map((t) => (
                      <li key={t} className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-0.5 text-[11px] font-medium text-foreground/80 ring-1 ring-border/60 backdrop-blur">
                        <CheckCircle2 className={`h-3 w-3 ${f.accent}`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold ${f.accent} opacity-80 transition-all group-hover:opacity-100`}>
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
