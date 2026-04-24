import Link from "next/link"
import {
  Bot,
  PhoneOutgoing,
  GitBranch,
  Activity,
  FileAudio,
  ShieldCheck,
  MessageCircle,
  Languages,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
  href: string
  span: string // tailwind col-span classes
  gradient: string // background gradient classes for visual
  accent: string // accent text / chip color
  visual: "waveform" | "dialer" | "tree" | "pulse" | "shield" | "chat" | "chart" | "languages"
}

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: "AI Voice Bot",
    desc: "Natural, human-like speech that qualifies leads, answers FAQs and books appointments — 24/7 in 12+ Indian languages.",
    tags: ["Natural Speech", "Lead Qualification", "Live Transcripts"],
    href: "/features/voice-bot",
    span: "lg:col-span-8",
    gradient: "from-violet-500/15 via-fuchsia-500/10 to-transparent",
    accent: "text-violet-600",
    visual: "waveform",
  },
  {
    icon: PhoneOutgoing,
    title: "Auto Dialer",
    desc: "Agents connect only to answered calls. Zero manual dialing, zero wait.",
    tags: ["Preview", "Progressive", "DNC"],
    href: "/features/auto-dialer",
    span: "lg:col-span-4",
    gradient: "from-fuchsia-500/15 via-rose-500/8 to-transparent",
    accent: "text-fuchsia-600",
    visual: "dialer",
  },
  {
    icon: GitBranch,
    title: "Smart IVR",
    desc: "Drag-and-drop multi-level flows with skill routing.",
    tags: ["Multi-Level", "Queues"],
    href: "/features/ivr",
    span: "lg:col-span-4",
    gradient: "from-indigo-500/12 via-violet-500/8 to-transparent",
    accent: "text-indigo-600",
    visual: "tree",
  },
  {
    icon: Activity,
    title: "Live Monitor",
    desc: "Track every active call. Barge, whisper or listen in real time.",
    tags: ["Barge", "Snoop", "Real-Time"],
    href: "/features/live-monitor",
    span: "lg:col-span-4",
    gradient: "from-emerald-500/12 via-teal-500/8 to-transparent",
    accent: "text-emerald-600",
    visual: "pulse",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Encrypted SIP, RBAC and TRAI-compliant audit logs.",
    tags: ["DPDP", "SOC 2", "ISO 27001"],
    href: "/features/security",
    span: "lg:col-span-4",
    gradient: "from-sky-500/12 via-indigo-500/8 to-transparent",
    accent: "text-sky-700",
    visual: "shield",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    desc: "Targeted broadcasts with delivery and read tracking.",
    tags: ["Bulk", "Templates"],
    href: "/features/whatsapp",
    span: "lg:col-span-4",
    gradient: "from-emerald-500/15 via-green-500/8 to-transparent",
    accent: "text-emerald-700",
    visual: "chat",
  },
  {
    icon: FileAudio,
    title: "Reports & Recording",
    desc: "Every call recorded, every KPI surfaced. Full audit trails for compliance teams with export to S3 and your BI.",
    tags: ["CDR", "Sentiment", "Export"],
    href: "/features/reports",
    span: "lg:col-span-8",
    gradient: "from-amber-500/15 via-rose-500/10 to-transparent",
    accent: "text-amber-700",
    visual: "chart",
  },
  {
    icon: Languages,
    title: "Multi-Language Native",
    desc: "Serve customers in the language they prefer — accent-tuned voices with natural code-switching across English and Indic scripts.",
    tags: ["12+ Languages", "Code-Switch", "Accent-Tuned"],
    href: "/features/multi-language",
    span: "lg:col-span-12",
    gradient: "from-fuchsia-500/12 via-violet-500/8 to-transparent",
    accent: "text-fuchsia-700",
    visual: "languages",
  },
]

/* ---------------- Visual primitives per card ---------------- */

function Waveform() {
  const bars = Array.from({ length: 28 })
  return (
    <div className="flex h-20 items-end gap-[3px]">
      {bars.map((_, i) => (
        <span
          key={i}
          className="block w-1 rounded-full bg-gradient-to-t from-violet-500 to-fuchsia-400"
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

function DialerVisual() {
  return (
    <div className="space-y-2">
      {[78, 62, 92].map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-fuchsia-500/10">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500"
              style={{ width: `${w}%`, animation: `feat-grow 2.4s ease-in-out ${i * 0.3}s infinite alternate` }}
            />
          </div>
          <span className="font-mono text-[10px] text-fuchsia-700">{w}%</span>
        </div>
      ))}
      <style>{`@keyframes feat-grow { from { transform: scaleX(0.6); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }`}</style>
    </div>
  )
}

function TreeVisual() {
  const nodes = [
    { x: 80, y: 10, color: "#8b5cf6", label: "IVR" },
    { x: 30, y: 55, color: "#06b6d4", label: "Sales" },
    { x: 80, y: 55, color: "#10b981", label: "Support" },
    { x: 130, y: 55, color: "#f59e0b", label: "Billing" },
  ]
  return (
    <svg viewBox="0 0 160 80" className="h-20 w-full">
      <defs>
        <linearGradient id="tree-line-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="tree-line-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="tree-line-3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <g strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M80 15 L30 50" stroke="url(#tree-line-1)" strokeDasharray="4 2" className="animate-pulse" />
        <path d="M80 15 L80 50" stroke="url(#tree-line-2)" strokeDasharray="4 2" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
        <path d="M80 15 L130 50" stroke="url(#tree-line-3)" strokeDasharray="4 2" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="12"
            fill={n.color}
            opacity={0.15}
            style={{ animation: `feat-ring 2s ease-in-out ${i * 0.2}s infinite` }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r="7"
            fill={n.color}
            style={{ animation: `feat-node 2s ease-in-out ${i * 0.25}s infinite` }}
          />
          <text x={n.x} y={n.y + 22} textAnchor="middle" className="fill-muted-foreground text-[8px] font-medium">
            {n.label}
          </text>
        </g>
      ))}
      <style>{`@keyframes feat-node { 0%,100% { r: 7; opacity: 0.8 } 50% { r: 8; opacity: 1 } } @keyframes feat-ring { 0%,100% { r: 12; opacity: 0.15 } 50% { r: 16; opacity: 0.25 } }`}</style>
    </svg>
  )
}

function PulseVisual() {
  const agents = [
    { id: 1, status: "active", color: "#10b981" },
    { id: 2, status: "active", color: "#10b981" },
    { id: 3, status: "busy", color: "#f59e0b" },
    { id: 4, status: "active", color: "#10b981" },
  ]
  return (
    <div className="flex items-center justify-between gap-3">
      {agents.map((agent, i) => (
        <div key={agent.id} className="flex flex-col items-center gap-2">
          <div className="relative">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: agent.color }}
            >
              {agent.id}
            </div>
            <span
              className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center"
            >
              <span
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: agent.color, animation: `feat-ping 1.8s ease-out ${i * 0.25}s infinite` }}
              />
              <span className="relative h-2 w-2 rounded-full bg-white" />
            </span>
          </div>
          <span className="font-mono text-[9px] text-muted-foreground">
            {agent.status === "active" ? "On call" : "Wrap-up"}
          </span>
        </div>
      ))}
      <style>{`@keyframes feat-ping { 0% { transform: scale(1); opacity: 0.7 } 100% { transform: scale(2.5); opacity: 0 } }`}</style>
    </div>
  )
}

function ShieldVisual() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700">
        <ShieldCheck className="h-6 w-6" />
        <span
          className="absolute inset-0 rounded-xl ring-2 ring-sky-500/30"
          style={{ animation: "feat-ring 2.2s ease-in-out infinite" }}
        />
      </div>
      <div className="flex flex-wrap gap-1">
        {["AES-256", "mTLS", "DPDP"].map((t) => (
          <span key={t} className="rounded-md border border-sky-500/20 bg-sky-500/5 px-1.5 py-0.5 font-mono text-[9px] text-sky-700">
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes feat-ring { 0%,100% { transform: scale(1); opacity: 0.5 } 50% { transform: scale(1.1); opacity: 0 } }`}</style>
    </div>
  )
}

function ChatVisual() {
  return (
    <div className="space-y-1.5">
      <div className="inline-block max-w-[80%] rounded-lg rounded-bl-sm bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-900">
        Order shipped — track here
      </div>
      <div className="ml-auto block w-fit max-w-[75%] rounded-lg rounded-br-sm bg-emerald-600 px-2.5 py-1 text-[11px] text-white">
        Thanks! Confirmed
      </div>
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
        <circle cx={w - 0.5} cy={h - (points[points.length - 1] / max) * (h - 10) - 5} r="4" fill="oklch(0.6 0.2 30)">
          <animate attributeName="r" values="4;6;4" dur="1.6s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="mt-1 flex justify-between font-mono text-[9px] text-amber-700/80">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
        <span>Sun</span>
      </div>
    </div>
  )
}

function LanguagesVisual() {
  const scripts = [
    "हिन्दी",
    "English",
    "தமிழ்",
    "বাংলা",
    "मराठी",
    "తెలుగు",
    "ગુજરાતી",
    "ಕನ್ನಡ",
    "ਪੰਜਾਬੀ",
    "മലയാളം",
    "اردو",
    "ଓଡ଼ିଆ",
  ]
  return (
    <div className="flex flex-wrap gap-1.5">
      {scripts.map((s, i) => (
        <span
          key={s}
          className="rounded-full border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-fuchsia-900"
          style={{ animation: `feat-pop 3.6s ease-in-out ${i * 0.2}s infinite` }}
        >
          {s}
        </span>
      ))}
      <style>{`@keyframes feat-pop { 0%,100% { transform: translateY(0); opacity: 0.75 } 50% { transform: translateY(-2px); opacity: 1 } }`}</style>
    </div>
  )
}

function FeatureVisual({ kind }: { kind: Feature["visual"] }) {
  switch (kind) {
    case "waveform":
      return <Waveform />
    case "dialer":
      return <DialerVisual />
    case "tree":
      return <TreeVisual />
    case "pulse":
      return <PulseVisual />
    case "shield":
      return <ShieldVisual />
    case "chat":
      return <ChatVisual />
    case "chart":
      return <ChartVisual />
    case "languages":
      return <LanguagesVisual />
    default:
      return null
  }
}

/* ---------------- Section ---------------- */

export function FeaturesGrid() {
  return (
    <section id="features" className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Ambient colored glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-32 h-[22rem] w-[22rem] rounded-full bg-violet-500/[0.07] blur-3xl" />
        <div className="absolute right-0 top-80 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/[0.06] blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-[18rem] w-[18rem] rounded-full bg-amber-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3 w-3" />
            Features
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Everything your contact{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                center needs
              </span>
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 80 2 150 6 T 298 7"
                  stroke="url(#feat-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="feat-underline" x1="0" x2="1">
                    <stop offset="0%" stopColor="oklch(0.5 0.24 295)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.22 20)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            From AI voice bots to real-time monitoring — every tool Indian businesses need to run world-class sales
            and support operations.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <Link
                key={f.title}
                href={f.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_-22px_oklch(0.45_0.22_295/0.3)] ${f.span}`}
              >
                {/* Gradient wash */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />
                {/* Top corner arrow */}
                <span className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-muted-foreground backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>

                {/* Header row */}
                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 shadow-sm ring-1 ring-border/60 backdrop-blur ${f.accent} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Module
                  </span>
                </div>

                {/* Title + desc */}
                <div className="relative mt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground lg:text-2xl">{f.title}</h3>
                  <p className="mt-2 max-w-prose text-[13px] leading-relaxed text-muted-foreground lg:text-sm">
                    {f.desc}
                  </p>
                </div>

                {/* Per-card visual */}
                <div className="relative mt-5 rounded-2xl border border-border/60 bg-background/70 p-4 backdrop-blur-sm">
                  <FeatureVisual kind={f.visual} />
                </div>

                {/* Tags + CTA */}
                <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {f.tags.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-0.5 text-[11px] font-medium text-foreground/80 ring-1 ring-border/60 backdrop-blur"
                      >
                        <CheckCircle2 className={`h-3 w-3 ${f.accent}`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${f.accent} opacity-80 transition-all group-hover:opacity-100`}
                  >
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
