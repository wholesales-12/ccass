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
  icon: LucideIcon
  title: string
  blurb: string
  href: string
  diagram: () => React.ReactNode
}

/* -----------------------------------------------------------
   Mini diagrams — simple, shared SVG language. No boxes.
   ----------------------------------------------------------- */

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

function DiagramReceptionist() {
  return (
    <svg viewBox="0 0 600 240" className="h-full w-full">
      <GradDefs id="d1" />
      {/* connector */}
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
      {/* caller node */}
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
      {/* center orb */}
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
      {/* outcome */}
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
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-30"
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        )
      })}
      {/* Hub */}
      <circle cx="320" cy="120" r="34" fill="url(#d2-grad)" opacity="0.25" />
      <circle cx="320" cy="120" r="20" fill="url(#d2-grad)" />
      <text x="320" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">
        Unified Desktop
      </text>
      {/* Agent rays */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path
            d={`M 354 120 L ${480 + i * 30} ${70 + i * 50}`}
            stroke="url(#d2-grad)"
            strokeWidth="1"
            opacity="0.6"
          />
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
      {/* Arrow into hub */}
      <path
        d="M 380 120 L 460 120"
        stroke="url(#d3-grad)"
        strokeWidth="1.5"
        markerEnd="url(#arr3)"
      />
      <defs>
        <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L0,8 L8,4 z" fill="#d946ef" />
        </marker>
      </defs>
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
      {/* incoming arrows */}
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 40 + i * 35
        return (
          <g key={i}>
            <text x="50" y={y + 4} className="fill-muted-foreground" fontSize="10" fontFamily="monospace">
              call_{String(i + 1).padStart(3, "0")}
            </text>
            <path
              d={`M 150 ${y} L 270 120`}
              stroke="url(#d4-grad)"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              opacity="0.6"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.6s" repeatCount="indefinite" />
            </path>
          </g>
        )
      })}
      {/* ACD hub */}
      <circle cx="300" cy="120" r="36" fill="url(#d4-grad)" opacity="0.22" />
      <text x="300" y="118" textAnchor="middle" className="fill-foreground" fontSize="9" fontWeight="700">
        ACD
      </text>
      <text x="300" y="130" textAnchor="middle" className="fill-foreground" fontSize="9">
        Skill-based
      </text>
      {/* skill queues */}
      {["Sales · 4", "Support · 6", "VIP · 2"].map((lbl, i) => {
        const y = 60 + i * 50
        return (
          <g key={lbl}>
            <path
              d={`M 336 120 Q 410 120, 460 ${y}`}
              fill="none"
              stroke="url(#d4-grad)"
              strokeWidth="1"
              opacity="0.5"
            />
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
      {/* Source */}
      <circle cx="100" cy="120" r="36" fill="url(#d5-grad)" opacity="0.22" />
      <circle cx="100" cy="120" r="22" fill="url(#d5-grad)" />
      <text x="100" y="180" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">
        Campaign
      </text>
      <text x="100" y="195" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        Predictive · 24:1
      </text>
      {/* fan out */}
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
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-30"
              dur={`${1.6 + i * 0.2}s`}
              repeatCount="indefinite"
            />
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
      {/* Root */}
      <circle cx="80" cy="120" r="20" fill="url(#d6-grad)" />
      <text x="80" y="170" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="700">
        Welcome
      </text>
      {/* Branches */}
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
      {/* Sub branches off "Sales" */}
      <path d="M 252 50 Q 340 50, 420 30" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
      <path d="M 252 50 Q 340 50, 420 70" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
      <text x="430" y="34" className="fill-muted-foreground" fontSize="10">
        New customer
      </text>
      <text x="430" y="74" className="fill-muted-foreground" fontSize="10">
        Existing
      </text>
      {/* Footer note */}
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
      {/* Source bubble */}
      <g>
        <rect x="40" y="100" rx="12" width="160" height="40" fill="url(#d7-grad)" opacity="0.22" />
        <rect x="40" y="100" rx="12" width="160" height="40" fill="none" stroke="url(#d7-grad)" strokeWidth="1" />
        <text x="120" y="124" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">
          Festive offer ↗
        </text>
      </g>
      {/* fan out */}
      {[35, 70, 105, 140, 175, 210].map((y, i) => (
        <g key={i}>
          <path
            d={`M 200 120 Q 300 120, 380 ${y}`}
            fill="none"
            stroke="url(#d7-grad)"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.6"
          >
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
      {/* axis */}
      <line x1="40" y1="200" x2="560" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {/* bars */}
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
      {/* live ticker */}
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
      {/* Trend line */}
      <path
        d="M 40 180 L 110 150 L 180 165 L 250 110 L 320 130 L 390 80 L 460 95 L 540 50"
        fill="none"
        stroke="url(#d9-grad)"
        strokeWidth="2"
      />
      {/* Area fill */}
      <path
        d="M 40 180 L 110 150 L 180 165 L 250 110 L 320 130 L 390 80 L 460 95 L 540 50 L 540 200 L 40 200 Z"
        fill="url(#d9-grad)"
        opacity="0.12"
      />
      {/* Dots */}
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
      {/* Labels */}
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

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: "AI Receptionist",
    blurb: "Picks up every call, qualifies and books — in 12+ Indian languages.",
    href: "/features/ai-receptionist",
    diagram: DiagramReceptionist,
  },
  {
    icon: Cloud,
    title: "Cloud Contact Center",
    blurb: "Voice, WhatsApp, email and chat in one unified agent desktop.",
    href: "/features/cloud-contact-center",
    diagram: DiagramCloud,
  },
  {
    icon: PhoneOutgoing,
    title: "Auto Dialer",
    blurb: "Skips dead numbers automatically — agents only talk to live answers.",
    href: "/features/auto-dialer",
    diagram: DiagramAutoDialer,
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Call Center",
    blurb: "Skill-based routing with smart queues, callbacks and SLAs.",
    href: "/features/inbound-call-center",
    diagram: DiagramInbound,
  },
  {
    icon: Headphones,
    title: "Outbound Dialer",
    blurb: "Predictive, progressive and preview campaigns with DNC enforcement.",
    href: "/features/outbound-dialer",
    diagram: DiagramOutbound,
  },
  {
    icon: GitBranch,
    title: "IVR / Auto-Attendant",
    blurb: "Drag-and-drop call flows in 12 languages — no code, no engineers.",
    href: "/features/ivr-auto-attendant",
    diagram: DiagramIVR,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Broadcasting",
    blurb: "Templates, drips and replies — all in one shared team inbox.",
    href: "/features/whatsapp-broadcasting",
    diagram: DiagramWhatsApp,
  },
  {
    icon: Activity,
    title: "Live Monitor",
    blurb: "Whisper, barge and take-over with a real-time wallboard.",
    href: "/features/live-monitor",
    diagram: DiagramLiveMonitor,
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    blurb: "50+ ready reports, AI summaries and one-click exports.",
    href: "/features/reports-analytics",
    diagram: DiagramReports,
  },
]

export function FeaturesGrid() {
  const [active, setActive] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((i) => (i + 1) % FEATURES.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  const current = FEATURES[active]
  const Diagram = current.diagram

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-20 lg:py-24"
    >
      {/* Soft ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-violet-500/[0.05] blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">Platform</span>
              <span className="mx-2 text-border">/</span>
              <span>Nine ways we move every call forward</span>
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.02]">
              One product.{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                Every conversation.
              </span>
            </h2>
          </div>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground lg:col-span-4">
            Hover any feature to see exactly how it moves a call forward.
          </p>
        </div>

        {/* Showcase */}
        <div
          className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {/* Left — feature list */}
          <ol className="lg:col-span-5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              const isActive = i === active
              return (
                <li
                  key={f.title}
                  className="border-t border-border last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group flex w-full items-center gap-4 py-4 text-left transition-colors"
                  >
                    {/* index */}
                    <span
                      className={[
                        "shrink-0 font-mono text-[10.5px] font-semibold tracking-[0.22em] transition-colors",
                        isActive ? "text-fuchsia-600" : "text-muted-foreground/60",
                      ].join(" ")}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* icon */}
                    <Icon
                      className={[
                        "h-4 w-4 shrink-0 transition-all duration-300",
                        isActive ? "text-fuchsia-600" : "text-muted-foreground/60 group-hover:text-foreground",
                      ].join(" ")}
                      strokeWidth={1.7}
                    />
                    {/* title with growing underline on active */}
                    <span className="relative flex-1">
                      <span
                        className={[
                          "block text-pretty text-[1.05rem] font-semibold tracking-tight transition-colors",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground/80",
                        ].join(" ")}
                      >
                        {f.title}
                      </span>
                      {/* gradient underline that grows when active */}
                      <span
                        aria-hidden
                        className="absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 transition-[width] duration-500"
                        style={{ width: isActive ? "32px" : "0px" }}
                      />
                    </span>
                    {/* arrow indicator */}
                    <ArrowUpRight
                      className={[
                        "h-4 w-4 shrink-0 transition-all duration-300",
                        isActive
                          ? "translate-x-0 -translate-y-0 opacity-100 text-foreground"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60",
                      ].join(" ")}
                    />
                  </button>
                </li>
              )
            })}
          </ol>

          {/* Right — sticky preview pane */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              {/* Eyebrow above preview */}
              <div className="flex items-center gap-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live preview</span>
                <span className="text-border">·</span>
                <span className="text-foreground">{String(active + 1).padStart(2, "0")} / {String(FEATURES.length).padStart(2, "0")}</span>
              </div>

              {/* Title that swaps */}
              <h3
                key={`title-${active}`}
                className="mt-3 text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                style={{ animation: "feat-fade-in 480ms cubic-bezier(.22,.9,.28,1.2) both" }}
              >
                {current.title}
              </h3>
              <p
                key={`blurb-${active}`}
                className="mt-2 max-w-[52ch] text-pretty text-[15px] leading-relaxed text-muted-foreground"
                style={{ animation: "feat-fade-in 480ms cubic-bezier(.22,.9,.28,1.2) 80ms both" }}
              >
                {current.blurb}
              </p>

              {/* Diagram */}
              <div
                key={`diag-${active}`}
                className="relative mt-8 h-[260px] w-full"
                style={{ animation: "feat-fade-in 600ms cubic-bezier(.22,.9,.28,1.2) 120ms both" }}
              >
                <Diagram />
              </div>

              {/* CTA */}
              <Link
                href={current.href}
                className="group mt-6 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-foreground"
              >
                <span className="relative">
                  Explore {current.title}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500"
                  />
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
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

      <style jsx global>{`
        @keyframes feat-fade-in {
          0%   { opacity: 0; transform: translateY(8px) }
          100% { opacity: 1; transform: translateY(0)  }
        }
      `}</style>
    </section>
  )
}
