"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  ArrowUpRight,
  Bot,
  Cloud,
  PhoneOutgoing,
  PhoneIncoming,
  Headphones,
  GitBranch,
  MessageCircle,
  Activity,
  BarChart3,
  type LucideIcon,
} from "lucide-react"

type Feature = {
  index: string
  icon: LucideIcon
  title: string
  highlight: string
  short: string
  blurb: string
  href: string
  diagram: () => React.ReactNode
}

/* ----------------- shared SVG defs ----------------- */
function GradDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f43f5e" />
      </linearGradient>
    </defs>
  )
}

/* ----------------- diagrams (kept, with small polish) ----------------- */

function DiagramReceptionist() {
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d1" />
      <path
        d="M 90 120 C 220 60, 380 180, 510 120"
        fill="none"
        stroke="url(#d1-grad)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.7"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2s" repeatCount="indefinite" />
      </path>
      <g>
        <circle cx="90" cy="120" r="32" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
        <circle cx="90" cy="120" r="6" fill="#d946ef" />
        <text x="90" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">
          Caller
        </text>
        <text x="90" y="195" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
          Mumbai · HI
        </text>
      </g>
      <g>
        <circle cx="300" cy="120" r="46" fill="url(#d1-grad)" opacity="0.18" />
        <circle cx="300" cy="120" r="32" fill="url(#d1-grad)" opacity="0.4">
          <animate attributeName="r" values="32;36;32" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="120" r="20" fill="url(#d1-grad)" />
        <text x="300" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">
          AI Receptionist
        </text>
        <text x="300" y="195" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
          Listens · decides · acts
        </text>
      </g>
      <g>
        <circle cx="510" cy="120" r="28" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.7" />
        <text x="510" y="125" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="700">
          ✓
        </text>
        <text x="510" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">
          Booked
        </text>
        <text x="510" y="195" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
          11 AM · SMS sent
        </text>
      </g>
    </svg>
  )
}

function DiagramCloud() {
  const channels = ["Voice", "WhatsApp", "Email", "Chat"]
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d2" />
      {channels.map((ch, i) => {
        const y = 40 + i * 50
        return (
          <g key={ch}>
            <text x="30" y={y + 4} className="fill-foreground" fontSize="11" fontWeight="600">
              {ch}
            </text>
            <path
              d={`M 110 ${y} Q 250 ${y}, 320 120`}
              fill="none"
              stroke="url(#d2-grad)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity={0.5 + i * 0.1}
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-30" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
            </path>
          </g>
        )
      })}
      <circle cx="320" cy="120" r="34" fill="url(#d2-grad)" opacity="0.25" />
      <circle cx="320" cy="120" r="20" fill="url(#d2-grad)" />
      <text x="320" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">
        Unified Desktop
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path d={`M 354 120 L ${480 + i * 30} ${70 + i * 50}`} stroke="url(#d2-grad)" strokeWidth="1" opacity="0.6" />
          <circle cx={480 + i * 30} cy={70 + i * 50} r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </g>
      ))}
      <text x="540" y="200" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        Agents · 3
      </text>
    </svg>
  )
}

function DiagramAutoDialer() {
  const numbers = [
    { n: "+91 98•••• 2140", state: "live" },
    { n: "+91 99•••• 8821", state: "skip" },
    { n: "+91 70•••• 1147", state: "skip" },
    { n: "+91 80•••• 0309", state: "live" },
    { n: "+91 91•••• 6655", state: "skip" },
    { n: "+91 88•••• 3244", state: "live" },
  ]
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d3" />
      {numbers.map((row, i) => {
        const y = 40 + i * 28
        const isLive = row.state === "live"
        return (
          <g key={i}>
            <text
              x="40"
              y={y}
              className={isLive ? "fill-foreground" : "fill-muted-foreground"}
              fontSize="11"
              fontFamily="monospace"
              opacity={isLive ? 1 : 0.4}
              style={{ textDecoration: isLive ? "none" : "line-through" }}
            >
              {row.n}
            </text>
            <text
              x="260"
              y={y}
              fill={isLive ? "#10b981" : "#f43f5e"}
              fontSize="10"
              fontWeight="700"
              fontFamily="monospace"
              opacity={isLive ? 1 : 0.6}
            >
              {isLive ? "ANSWERED" : "BUSY · DEAD"}
            </text>
          </g>
        )
      })}
      <defs>
        <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L0,8 L8,4 z" fill="#d946ef" />
        </marker>
      </defs>
      <path d="M 380 120 L 460 120" stroke="url(#d3-grad)" strokeWidth="1.5" markerEnd="url(#arr3)" />
      <circle cx="510" cy="120" r="32" fill="url(#d3-grad)" opacity="0.18" />
      <circle cx="510" cy="120" r="22" fill="url(#d3-grad)" />
      <text x="510" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">
        Live agent
      </text>
      <text x="510" y="195" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        3× more talks/hr
      </text>
    </svg>
  )
}

function DiagramInbound() {
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d4" />
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 40 + i * 35
        return (
          <g key={i}>
            <text x="50" y={y + 4} className="fill-muted-foreground" fontSize="10" fontFamily="monospace">
              call_{String(i + 1).padStart(3, "0")}
            </text>
            <path d={`M 150 ${y} L 270 120`} stroke="url(#d4-grad)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.6s" repeatCount="indefinite" />
            </path>
          </g>
        )
      })}
      <circle cx="300" cy="120" r="36" fill="url(#d4-grad)" opacity="0.22" />
      <text x="300" y="118" textAnchor="middle" className="fill-foreground" fontSize="9" fontWeight="700">
        ACD
      </text>
      <text x="300" y="130" textAnchor="middle" className="fill-foreground" fontSize="9">
        Skill-based
      </text>
      {["Sales · 4", "Support · 6", "VIP · 2"].map((lbl, i) => {
        const y = 60 + i * 50
        return (
          <g key={lbl}>
            <path d={`M 336 120 Q 410 120, 460 ${y}`} fill="none" stroke="url(#d4-grad)" strokeWidth="1" opacity="0.5" />
            <circle cx="460" cy={y} r="4" fill="#d946ef" />
            <text x="475" y={y + 4} className="fill-foreground" fontSize="11" fontWeight="600">
              {lbl}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function DiagramOutbound() {
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d5" />
      <circle cx="100" cy="120" r="36" fill="url(#d5-grad)" opacity="0.22" />
      <circle cx="100" cy="120" r="22" fill="url(#d5-grad)" />
      <text x="100" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">
        Campaign
      </text>
      <text x="100" y="195" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        Predictive · 24:1
      </text>
      {[
        { y: 40, lbl: "Lead · qualified" },
        { y: 90, lbl: "Lead · returning" },
        { y: 140, lbl: "Lead · cold" },
        { y: 190, lbl: "Lead · do-not-call" },
      ].map((row, i) => (
        <g key={i}>
          <path
            d={`M 136 120 Q 280 120, 360 ${row.y}`}
            fill="none"
            stroke="url(#d5-grad)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
            opacity={0.7 - i * 0.12}
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-30" dur={`${1.6 + i * 0.2}s`} repeatCount="indefinite" />
          </path>
          <circle cx="360" cy={row.y} r="4" fill="#d946ef" opacity={0.9 - i * 0.18} />
          <text x="375" y={row.y + 4} className="fill-foreground" fontSize="11" fontWeight="500" opacity={1 - i * 0.18}>
            {row.lbl}
          </text>
        </g>
      ))}
    </svg>
  )
}

function DiagramIVR() {
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d6" />
      <circle cx="80" cy="120" r="20" fill="url(#d6-grad)" />
      <text x="80" y="170" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="700">
        Welcome
      </text>
      {[
        { y: 50, lbl: "1 · Sales", color: "#a855f7" },
        { y: 120, lbl: "2 · Support", color: "#d946ef" },
        { y: 190, lbl: "3 · Pay bill", color: "#f43f5e" },
      ].map((b, i) => (
        <g key={i}>
          <path d={`M 100 120 Q 180 120, 240 ${b.y}`} fill="none" stroke={b.color} strokeWidth="1.4" />
          <circle cx="240" cy={b.y} r="12" fill="none" stroke={b.color} strokeWidth="1.4" />
          <text x="265" y={b.y + 4} className="fill-foreground" fontSize="11" fontWeight="600">
            {b.lbl}
          </text>
        </g>
      ))}
      <path d="M 252 50 Q 340 50, 420 30" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
      <path d="M 252 50 Q 340 50, 420 70" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
      <text x="430" y="34" className="fill-muted-foreground" fontSize="10">
        New customer
      </text>
      <text x="430" y="74" className="fill-muted-foreground" fontSize="10">
        Existing
      </text>
      <text x="80" y="220" className="fill-muted-foreground" fontSize="9" fontFamily="monospace">
        12+ languages · drag-and-drop
      </text>
    </svg>
  )
}

function DiagramWhatsApp() {
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d7" />
      <g>
        <rect x="40" y="100" rx="12" width="160" height="40" fill="url(#d7-grad)" opacity="0.22" />
        <rect x="40" y="100" rx="12" width="160" height="40" fill="none" stroke="url(#d7-grad)" strokeWidth="1" />
        <text x="120" y="124" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">
          Festive offer ↗
        </text>
      </g>
      {[35, 70, 105, 140, 175, 210].map((y, i) => (
        <g key={i}>
          <path d={`M 200 120 Q 300 120, 380 ${y}`} fill="none" stroke="url(#d7-grad)" strokeWidth="1" strokeDasharray="3 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="0" to="-25" dur="1.8s" repeatCount="indefinite" />
          </path>
          <rect x="385" y={y - 9} rx="6" width="50" height="18" fill="#10b981" opacity={0.18 + i * 0.04} />
          <text x="410" y={y + 3} textAnchor="middle" className="fill-foreground" fontSize="9" fontWeight="600">
            sent
          </text>
        </g>
      ))}
      <text x="500" y="125" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">
        50,000+
      </text>
      <text x="500" y="140" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        delivered
      </text>
    </svg>
  )
}

function DiagramLiveMonitor() {
  const bars = [60, 90, 45, 110, 75, 95, 50, 120, 70, 105]
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d8" />
      <line x1="40" y1="200" x2="560" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {bars.map((h, i) => {
        const x = 60 + i * 50
        return (
          <g key={i}>
            <rect x={x} y={200 - h} width="22" height={h} fill="url(#d8-grad)" opacity={0.3 + (i / bars.length) * 0.6} />
            <text x={x + 11} y={200 - h - 6} textAnchor="middle" className="fill-muted-foreground" fontSize="8" fontFamily="monospace">
              {h}
            </text>
          </g>
        )
      })}
      <g>
        <circle cx="60" cy="30" r="4" fill="#10b981">
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <text x="72" y="34" className="fill-foreground" fontSize="10" fontWeight="700" fontFamily="monospace">
          LIVE · WALLBOARD
        </text>
        <text x="430" y="34" className="fill-muted-foreground" fontSize="10" fontFamily="monospace">
          Whisper · Barge · Take-over
        </text>
      </g>
    </svg>
  )
}

function DiagramReports() {
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d9" />
      <path
        d="M 40 180 L 110 150 L 180 165 L 250 110 L 320 130 L 390 80 L 460 95 L 540 50"
        fill="none"
        stroke="url(#d9-grad)"
        strokeWidth="2"
      />
      <path
        d="M 40 180 L 110 150 L 180 165 L 250 110 L 320 130 L 390 80 L 460 95 L 540 50 L 540 200 L 40 200 Z"
        fill="url(#d9-grad)"
        opacity="0.12"
      />
      {[
        [40, 180],
        [110, 150],
        [180, 165],
        [250, 110],
        [320, 130],
        [390, 80],
        [460, 95],
        [540, 50],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#d946ef" />
      ))}
      <text x="40" y="220" className="fill-muted-foreground" fontSize="9" fontFamily="monospace">
        Mon
      </text>
      <text x="540" y="220" textAnchor="end" className="fill-muted-foreground" fontSize="9" fontFamily="monospace">
        Sun
      </text>
      <text x="40" y="30" className="fill-foreground" fontSize="11" fontWeight="700" fontFamily="monospace">
        AHT ↓ 22%
      </text>
      <text x="540" y="30" textAnchor="end" className="fill-foreground" fontSize="11" fontWeight="700" fontFamily="monospace">
        CSAT ↑ 4.7
      </text>
    </svg>
  )
}

/* ----------------- features data (concise copy) ----------------- */
const FEATURES: Feature[] = [
  {
    index: "01",
    icon: Bot,
    short: "AI Receptionist",
    title: "Picks up. Books.",
    highlight: "Resolves.",
    blurb: "Every call answered in under a second — booked, qualified, or routed in 12+ Indian languages.",
    href: "/features/ai-receptionist",
    diagram: DiagramReceptionist,
  },
  {
    index: "02",
    icon: Cloud,
    short: "Cloud Contact Center",
    title: "One desktop.",
    highlight: "Every channel.",
    blurb: "Voice, WhatsApp, email and chat unified for your agents — with carrier-grade voice underneath.",
    href: "/features/cloud-contact-center",
    diagram: DiagramCloud,
  },
  {
    index: "03",
    icon: PhoneOutgoing,
    short: "Auto Dialer",
    title: "Skip dead numbers.",
    highlight: "Talk to live answers.",
    blurb: "Predictive, progressive and preview modes — agents only meet live, scored leads.",
    href: "/features/auto-dialer",
    diagram: DiagramAutoDialer,
  },
  {
    index: "04",
    icon: PhoneIncoming,
    short: "Inbound",
    title: "The right caller,",
    highlight: "the right agent.",
    blurb: "Skill-based ACD, smart IVR and zero rings during peaks — no more lost lines.",
    href: "/features/inbound-call-center",
    diagram: DiagramInbound,
  },
  {
    index: "05",
    icon: Headphones,
    short: "Outbound",
    title: "From a list,",
    highlight: "to a conversation.",
    blurb: "Compliant outbound with DNC, calling-window guardrails and AI scripting.",
    href: "/features/outbound-dialer",
    diagram: DiagramOutbound,
  },
  {
    index: "06",
    icon: GitBranch,
    short: "IVR",
    title: "Self-serve,",
    highlight: "no menus to memorize.",
    blurb: "Conversational IVR that understands intent — not just key presses.",
    href: "/features/ivr-auto-attendant",
    diagram: DiagramIVR,
  },
  {
    index: "07",
    icon: MessageCircle,
    short: "WhatsApp",
    title: "Reach 1, or",
    highlight: "reach a million.",
    blurb: "Broadcasts, two-way support and an inbox shared with your call agents.",
    href: "/features/whatsapp-broadcasting",
    diagram: DiagramWhatsApp,
  },
  {
    index: "08",
    icon: Activity,
    short: "Live Monitor",
    title: "Every queue,",
    highlight: "every agent — live.",
    blurb: "Wallboards, live listen and real-time SLA alerts before things go red.",
    href: "/features/live-monitor",
    diagram: DiagramLiveMonitor,
  },
  {
    index: "09",
    icon: BarChart3,
    short: "Analytics",
    title: "Every call,",
    highlight: "in one chart.",
    blurb: "200+ metrics, custom dashboards, scheduled exports — straight to your inbox.",
    href: "/features/reports-analytics",
    diagram: DiagramReports,
  },
]

const ROTATION_MS = 5500

/* ----------------- main ----------------- */
export function FeaturesGrid() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const pausedRef = useRef(false)
  const stripRef = useRef<HTMLDivElement | null>(null)

  // Smooth auto-rotation with progress bar
  useEffect(() => {
    let raf = 0
    let start = performance.now()
    const tick = (now: number) => {
      if (!pausedRef.current) {
        const p = Math.min(1, (now - start) / ROTATION_MS)
        setProgress(p)
        if (p >= 1) {
          start = now
          setActive((i) => (i + 1) % FEATURES.length)
        }
      } else {
        start = now - progress * ROTATION_MS
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  // Scroll active tab into view (mobile)
  useEffect(() => {
    const el = stripRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`)
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }, [active])

  const handleSelect = (i: number) => {
    setActive(i)
    setProgress(0)
  }

  const f = FEATURES[active]
  const Diagram = f.diagram

  return (
    <section
      id="features"
      aria-label="Platform features"
      className="relative overflow-hidden bg-background"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* very subtle ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(217, 70, 239, 0.06), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(124, 58, 237, 0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* ---------------- Header ---------------- */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-fuchsia-500 to-violet-500" />
              <span>Features · 09 pillars</span>
            </div>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              One platform.{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                Nine moving parts.
              </span>
            </h2>
          </div>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:col-span-5">
            Switch any of them on or off. They&apos;re built to work together — they don&apos;t have to.
          </p>
        </div>

        {/* ---------------- Spotlight ---------------- */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left: editorial copy */}
          <div className="relative lg:col-span-5">
            {/* mono index + icon row */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Pillar {f.index} / 09
              </span>
              <span className="h-px flex-1 bg-border" />
              <f.icon className="h-4 w-4 text-fuchsia-500" strokeWidth={1.6} />
            </div>

            {/* Display title */}
            <h3
              key={`title-${active}`}
              className="mt-5 text-balance font-semibold leading-[1.02] tracking-tight text-foreground"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                animation: "feat-rise 600ms cubic-bezier(.22,.85,.28,1) both",
              }}
            >
              {f.title}{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                {f.highlight}
              </span>
            </h3>

            {/* Blurb */}
            <p
              key={`blurb-${active}`}
              className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground"
              style={{ animation: "feat-rise 600ms cubic-bezier(.22,.85,.28,1) 80ms both" }}
            >
              {f.blurb}
            </p>

            {/* CTA */}
            <Link
              href={f.href}
              key={`cta-${active}`}
              className="group mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground"
              style={{ animation: "feat-rise 600ms cubic-bezier(.22,.85,.28,1) 160ms both" }}
            >
              <span className="relative">
                Read the {f.short.toLowerCase()} story
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-gradient-to-r from-fuchsia-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-110"
                />
              </span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />
            </Link>
          </div>

          {/* Right: large diagram, no chrome */}
          <div className="relative lg:col-span-7">
            <div
              key={`diag-${active}`}
              className="relative mx-auto aspect-[5/2] w-full max-w-[680px]"
              style={{ animation: "feat-fade 700ms cubic-bezier(.22,.85,.28,1) both" }}
            >
              <Diagram />
            </div>
          </div>
        </div>

        {/* ---------------- Tab strip ---------------- */}
        <div className="mt-16 lg:mt-20">
          {/* Hairline above strip */}
          <div className="h-px w-full bg-border" />

          {/* Progress rail */}
          <div className="relative h-px w-full overflow-hidden">
            <span
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500"
              style={{
                width: `${((active + progress) / FEATURES.length) * 100}%`,
                transition: pausedRef.current ? "none" : "width 60ms linear",
              }}
            />
          </div>

          <div
            ref={stripRef}
            className="-mx-4 flex gap-1 overflow-x-auto px-4 pt-5 sm:gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {FEATURES.map((feat, i) => {
              const isActive = i === active
              const Icon = feat.icon
              return (
                <button
                  key={feat.index}
                  data-tab={i}
                  onClick={() => handleSelect(i)}
                  className="group relative flex shrink-0 items-center gap-2 px-3 py-2 text-left transition-colors"
                  aria-label={`Show ${feat.short}`}
                >
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-fuchsia-600" : "text-muted-foreground/70"
                    }`}
                  >
                    {feat.index}
                  </span>
                  <Icon
                    className={`h-3.5 w-3.5 transition-colors ${
                      isActive ? "text-fuchsia-600" : "text-muted-foreground/70 group-hover:text-foreground"
                    }`}
                    strokeWidth={1.6}
                  />
                  <span
                    className={`whitespace-nowrap text-sm font-medium tracking-tight transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {feat.short}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes feat-rise {
          0%   { opacity: 0; transform: translateY(14px) }
          100% { opacity: 1; transform: translateY(0)    }
        }
        @keyframes feat-fade {
          0%   { opacity: 0; transform: scale(0.985) }
          100% { opacity: 1; transform: scale(1)     }
        }
      `}</style>
    </section>
  )
}
