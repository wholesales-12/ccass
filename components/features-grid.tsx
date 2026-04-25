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
  Headphones,
  PhoneIncoming,
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
  visual: "waveform" | "dialer" | "tree" | "pulse" | "shield" | "chat" | "chart" | "languages" | "stack" | "recording" | "outbound"
}

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: "AI Receptionist",
    badge: "NEW",
    desc: "Always-on AI that picks up every inbound call, asks the right qualifying questions, and routes to the right agent. Handles peak-hour overflow, after-hours and weekends — without ever putting a customer on hold.",
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
    desc: "The core CCaaS platform — inbound, outbound, blended. Skill-based ACD, multi-level IVR, queue priorities, SLA timers and a unified agent desktop. Run 5 agents or 500 on the same login.",
    tags: ["Inbound + Outbound", "Skill ACD", "Unified Desktop"],
    href: "/features/cloud-contact-center",
    span: "lg:col-span-4",
    gradient: "from-indigo-500/12 via-violet-500/8 to-transparent",
    accent: "text-indigo-600",
    visual: "stack",
  },
  {
    icon: Headphones,
    title: "Voice Bot (Conversational AI)",
    desc: "Natural Hindi, English and Tamil voice bots that automate FAQs, lead qualification, payment reminders, OTP delivery and appointment confirmations — 24×7 at a fraction of agent cost.",
    tags: ["Hindi · English · Tamil", "FAQs · OTP · Booking", "Code-Switch"],
    href: "/features/voice-bot",
    span: "lg:col-span-4",
    gradient: "from-fuchsia-500/12 via-violet-500/8 to-transparent",
    accent: "text-fuchsia-700",
    visual: "languages",
  },
  {
    icon: PhoneOutgoing,
    title: "Auto Dialer",
    desc: "Reach 3× more leads with a dialer that skips voicemails, busy tones and DNCs, then drops live answers onto agent screens with full lead context.",
    tags: ["Predictive", "Power", "Preview"],
    href: "/features/auto-dialer",
    span: "lg:col-span-4",
    gradient: "from-fuchsia-500/15 via-rose-500/8 to-transparent",
    accent: "text-fuchsia-600",
    visual: "dialer",
  },
  {
    icon: GitBranch,
    title: "Smart IVR & Auto-Attendant",
    desc: "Drag-and-drop IVR builder with multilingual prompts (Hindi, English, Tamil and more), DTMF, speech recognition, time-of-day routing and dynamic menus that adapt to the caller.",
    tags: ["Drag-and-Drop", "Multilingual", "Dynamic Menus"],
    href: "/features/ivr-auto-attendant",
    span: "lg:col-span-4",
    gradient: "from-violet-500/12 via-indigo-500/8 to-transparent",
    accent: "text-violet-700",
    visual: "tree",
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Call Center",
    desc: "Skill-based, language-based and priority-based routing so the right agent picks up the right customer — every time. Built-in callback queues, IVR self-service and overflow rules.",
    tags: ["Smart ACD", "Callback Queues", "Overflow"],
    href: "/features/inbound-call-center",
    span: "lg:col-span-4",
    gradient: "from-emerald-500/12 via-teal-500/8 to-transparent",
    accent: "text-emerald-700",
    visual: "pulse",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Dialer",
    desc: "Run sales campaigns, collections drives and survey calls with list management, recycle rules, dispositions, AMD (answering machine detection) and full TRAI compliance.",
    tags: ["Campaigns", "AMD", "TRAI Compliant"],
    href: "/features/outbound-dialer",
    span: "lg:col-span-4",
    gradient: "from-rose-500/12 via-fuchsia-500/8 to-transparent",
    accent: "text-rose-700",
    visual: "outbound",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Broadcasting",
    desc: "Send approved templates, run drip campaigns, capture replies in agent desktop and convert WhatsApp into a real revenue channel — all DPDP-compliant.",
    tags: ["Templates", "Drip", "DPDP"],
    href: "/features/whatsapp-broadcasting",
    span: "lg:col-span-4",
    gradient: "from-emerald-500/15 via-green-500/8 to-transparent",
    accent: "text-emerald-700",
    visual: "chat",
  },
  {
    icon: Activity,
    title: "Live Monitor & Dashboards",
    desc: "Watch every agent, queue, IVR step and SLA in real time. Whisper, barge and coach mid-call. Wallboards for the floor. Mobile dashboards for managers on the move.",
    tags: ["Whisper · Barge", "Wallboards", "Mobile"],
    href: "/features/live-monitor-dashboard",
    span: "lg:col-span-4",
    gradient: "from-sky-500/12 via-indigo-500/8 to-transparent",
    accent: "text-sky-700",
    visual: "pulse",
  },
  {
    icon: BarChart3,
    title: "Reports & AI Analytics",
    desc: "Fifty-plus pre-built reports plus a custom report builder. AI-generated call summaries, sentiment scores and topic tags so you stop sampling and start measuring every conversation.",
    tags: ["50+ Reports", "AI Summaries", "Sentiment"],
    href: "/features/reports-analytics",
    span: "lg:col-span-8",
    gradient: "from-amber-500/15 via-rose-500/10 to-transparent",
    accent: "text-amber-700",
    visual: "chart",
  },
  {
    icon: FileAudio,
    title: "Call Recording & QA",
    desc: "100% recording with searchable transcripts, AI-driven QA scoring, screen recording and tamper-proof storage that keeps you audit-ready for RBI, IRDAI and ISO reviews.",
    tags: ["100% Recording", "AI QA", "Audit-Ready"],
    href: "/features/call-recording",
    span: "lg:col-span-4",
    gradient: "from-sky-500/12 via-violet-500/8 to-transparent",
    accent: "text-sky-700",
    visual: "recording",
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
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500"
              style={{ width: `${row.w}%`, animation: `feat-grow 2.4s ease-in-out ${i * 0.3}s infinite alternate` }}
            />
          </div>
        </div>
      ))}
      <style>{`@keyframes feat-grow { from { transform: scaleX(0.6); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }`}</style>
    </div>
  )
}

function OutboundVisual() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between rounded-lg border border-rose-500/20 bg-rose-500/5 px-2 py-1.5">
        <span className="text-[10px] font-semibold text-rose-700">Q3 Collections</span>
        <span className="rounded-md bg-rose-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-rose-700">RUNNING</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { l: "Lists", v: "12" },
          { l: "AMD", v: "ON" },
          { l: "DNC", v: "Clean" },
        ].map((s) => (
          <div key={s.l} className="rounded-md border border-border bg-background px-1.5 py-1">
            <div className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
            <div className="font-mono text-[10px] font-semibold text-foreground">{s.v}</div>
          </div>
        ))}
      </div>
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
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-500" />
          </span>
          Incoming
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
        <span className="rounded-md bg-violet-500 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white">IVR</span>
      </div>
      <div className="space-y-1">
        {branches.map((b, i) => (
          <div key={b.key} className="flex items-center gap-1.5" style={{ animation: `feat-row 3s ease-in-out ${i * 0.4}s infinite` }}>
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

function PulseVisual() {
  const agents = [
    { initial: "A", name: "Anita", duration: "02:14", action: "Listen", color: "bg-emerald-500", actionBg: "bg-emerald-500/10", actionText: "text-emerald-700", actionBorder: "border-emerald-500/30" },
    { initial: "R", name: "Rohit", duration: "05:42", action: "Whisper", color: "bg-emerald-500", actionBg: "bg-sky-500/10", actionText: "text-sky-700", actionBorder: "border-sky-500/30" },
    { initial: "P", name: "Priya", duration: "00:38", action: "Barge", color: "bg-amber-500", actionBg: "bg-rose-500/10", actionText: "text-rose-700", actionBorder: "border-rose-500/30" },
  ]
  return (
    <div className="space-y-1.5">
      {agents.map((a, i) => (
        <div key={a.name} className="flex items-center gap-2">
          <div className="relative shrink-0">
            <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white ${a.color}`}>
              {a.initial}
            </div>
            <span className="absolute -right-0.5 -bottom-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full border border-background bg-emerald-500" />
            </span>
          </div>
          <span className="text-[11px] font-medium text-foreground">{a.name}</span>
          <span className="font-mono text-[9px] tabular-nums text-muted-foreground">{a.duration}</span>
          <div className="flex flex-1 items-center justify-center gap-[1.5px]">
            {Array.from({ length: 10 }).map((_, j) => (
              <span
                key={j}
                className="block w-[2px] rounded-full bg-emerald-500/70"
                style={{
                  height: `${4 + Math.abs(Math.sin((j + i) * 0.9)) * 10}px`,
                  animation: `feat-mon-bar 1s ease-in-out ${(j + i) * 0.08}s infinite`,
                }}
              />
            ))}
          </div>
          <span className={`shrink-0 rounded-md border px-1.5 py-0.5 font-mono text-[9px] font-medium ${a.actionBg} ${a.actionText} ${a.actionBorder}`}>
            {a.action}
          </span>
        </div>
      ))}
      <style>{`@keyframes feat-mon-bar { 0%,100% { transform: scaleY(0.4); transform-origin: center } 50% { transform: scaleY(1); transform-origin: center } }`}</style>
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
          className={`flex items-center justify-between rounded-md border px-2 py-1 text-[10px] font-medium ${l.color}`}
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

function RecordingVisual() {
  return (
    <div className="space-y-2">
      {/* Timeline */}
      <div className="relative h-6 overflow-hidden rounded-md bg-sky-500/10">
        {[10, 28, 50, 72, 88].map((p, i) => (
          <span
            key={i}
            className="absolute top-1/2 h-3 w-1 -translate-y-1/2 rounded-full bg-sky-500"
            style={{ left: `${p}%`, animation: `feat-rec 2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
        <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-sky-500/30 to-sky-500/0" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-sky-700">QA · A+</span>
        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-700">100%</span>
        <span className="rounded-md border border-violet-500/30 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-violet-700">Audit-ready</span>
      </div>
      <style>{`@keyframes feat-rec { 0%,100% { transform: translateY(-50%) scaleY(0.6) } 50% { transform: translateY(-50%) scaleY(1) } }`}</style>
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
  const scripts = ["हिन्दी", "English", "தமிழ்", "বাংলা", "मराठी", "ગુજરાતી", "ಕನ್ನಡ", "ਪੰਜਾਬੀ"]
  return (
    <div className="flex flex-wrap gap-1.5">
      {scripts.map((s, i) => (
        <span
          key={s}
          className="rounded-full border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 px-2 py-0.5 text-[10.5px] font-medium text-fuchsia-900"
          style={{ animation: `feat-pop 3.6s ease-in-out ${i * 0.2}s infinite` }}
        >
          {s}
        </span>
      ))}
      <style>{`@keyframes feat-pop { 0%,100% { transform: translateY(0); opacity: 0.75 } 50% { transform: translateY(-2px); opacity: 1 } }`}</style>
    </div>
  )
}

function ShieldVisual() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700">
        <ShieldCheck className="h-5 w-5" />
        <span className="absolute inset-0 rounded-xl ring-2 ring-sky-500/30" style={{ animation: "feat-ring 2.2s ease-in-out infinite" }} />
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

function FeatureVisual({ kind }: { kind: Feature["visual"] }) {
  switch (kind) {
    case "waveform":
      return <Waveform />
    case "dialer":
      return <DialerVisual />
    case "outbound":
      return <OutboundVisual />
    case "tree":
      return <TreeVisual />
    case "pulse":
      return <PulseVisual />
    case "stack":
      return <StackVisual />
    case "recording":
      return <RecordingVisual />
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
            Eleven core modules
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Every AI Contact Center Feature Indian Teams Need —{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                In One Platform
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
            From the very first call to the last QA review, Kedeyo handles the entire conversation lifecycle. Eleven
            deeply integrated modules, designed to work the moment you log in.
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
