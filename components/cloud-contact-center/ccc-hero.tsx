"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  MessagesSquare,
  Sparkles,
  Headphones,
  ShieldCheck,
} from "lucide-react"

/**
 * Cloud Contact Center — Hero
 *
 * Layout: editorial left column + animated SVG flow diagram on the right.
 * Diagram: 4 channels (Voice, WhatsApp, Email, Chat) → AI Router → Agent Desktop
 * - All nodes are icon glyphs in rings (no rectangular cards)
 * - Connectors are SVG paths with animated dashed flow
 * - Active channel cycles every 2.4s and lights up its lane
 */

const CHANNELS = [
  { id: "voice", label: "Voice", meta: "PSTN · SIP", Icon: Phone, color: "from-fuchsia-500 to-pink-500", ring: "ring-fuchsia-400/40" },
  { id: "wa", label: "WhatsApp", meta: "Official API", Icon: MessageSquare, color: "from-emerald-500 to-green-500", ring: "ring-emerald-400/40" },
  { id: "email", label: "Email", meta: "IMAP · SMTP", Icon: Mail, color: "from-amber-500 to-orange-500", ring: "ring-amber-400/40" },
  { id: "chat", label: "Web Chat", meta: "Site · App", Icon: MessagesSquare, color: "from-violet-500 to-indigo-500", ring: "ring-violet-400/40" },
]

const TRUST = [
  "99.95% uptime",
  "TRAI compliant",
  "DPDP ready",
  "AWS Mumbai + Chennai",
  "ISO 27001",
]

export function CCCHero() {
  const [active, setActive] = useState(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % CHANNELS.length), 2400)
    const t2 = setInterval(() => setTick((n) => n + 1), 1000)
    return () => {
      clearInterval(t)
      clearInterval(t2)
    }
  }, [])

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0a0612] pb-20 pt-24 lg:pb-24 lg:pt-32"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 75% 60% at 0% 0%, oklch(0.45 0.22 295 / 0.55), transparent 65%), radial-gradient(ellipse 60% 50% at 100% 100%, oklch(0.62 0.24 300 / 0.35), transparent 70%)",
      }}
    >
      {/* dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(217,70,239,0.45) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-12 lg:gap-10 lg:px-6">
        {/* LEFT — copy */}
        <div className="text-white lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            <Sparkles className="h-3 w-3 text-fuchsia-300" />
            <span>850+ Indian teams · live on Kedeyo</span>
          </div>

          <h1
            className="mt-5 text-balance font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.1rem)" }}
          >
            India&apos;s AI-powered{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
              cloud contact center
            </span>{" "}
            software.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-[15.5px] leading-relaxed text-white/70">
            One browser. Every channel. Every call answered. Voice, WhatsApp, email and chat
            unified in a single agent desktop — hosted on AWS Mumbai with 99.95% uptime.
            Sign-up to first call: under three minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-amber-400 px-5 font-semibold text-amber-950 transition-all hover:bg-amber-300 hover:shadow-[0_8px_30px_-8px_rgba(251,191,36,0.6)]"
            >
              Book a free demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get started in 3 minutes
            </Link>
          </div>

          {/* trust strip */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
            {TRUST.map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                <ShieldCheck className="h-3 w-3 text-emerald-300" />
                <span>{t}</span>
                {i < TRUST.length - 1 && <span aria-hidden className="ml-2 hidden h-3 w-px bg-white/15 sm:inline-block" />}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — diagram */}
        <div className="lg:col-span-6">
          <Diagram active={active} tick={tick} />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Diagram ---------------- */

function Diagram({ active, tick }: { active: number; tick: number }) {
  const seconds = String(Math.floor(tick % 60)).padStart(2, "0")
  const minutes = String(Math.floor(tick / 60)).padStart(2, "0")

  return (
    <div className="relative">
      {/* live header */}
      <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-emerald-300">Live</span>
          <span className="text-white/30">·</span>
          <span className="tabular-nums">{minutes}:{seconds}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Routing</span>
          <span className="text-white/30">·</span>
          <span>4 channels</span>
        </div>
      </div>

      {/* SVG diagram */}
      <div className="relative mt-4 h-[440px] sm:h-[480px]">
        {/* connectors */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 480" fill="none" aria-hidden>
          <defs>
            <linearGradient id="conn-g" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(217,70,239,0.0)" />
              <stop offset="50%" stopColor="rgba(217,70,239,0.85)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0.0)" />
            </linearGradient>
            <linearGradient id="conn-static" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
            </linearGradient>
          </defs>

          {/* channel → router (4 curves coming from left to center) */}
          {CHANNELS.map((c, i) => {
            const sourceY = 60 + i * 110
            const targetX = 360
            const targetY = 240
            const path = `M 80 ${sourceY} C 200 ${sourceY}, 240 ${targetY}, ${targetX} ${targetY}`
            const isActive = i === active
            return (
              <g key={c.id}>
                <path d={path} stroke="url(#conn-static)" strokeWidth="1" />
                {isActive && (
                  <path
                    d={path}
                    stroke="url(#conn-g)"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                    style={{ animation: "ccc-flow-l 1.4s linear infinite" }}
                  />
                )}
              </g>
            )
          })}

          {/* router → agent rows */}
          {[0, 1, 2].map((i) => {
            const sourceX = 400
            const sourceY = 240
            const targetX = 540
            const targetY = 150 + i * 90
            const path = `M ${sourceX} ${sourceY} C 460 ${sourceY}, 480 ${targetY}, ${targetX} ${targetY}`
            // First agent gets the active flow when "active" channel cycles
            const isActive = i === active % 3
            return (
              <g key={`out-${i}`}>
                <path d={path} stroke="url(#conn-static)" strokeWidth="1" />
                {isActive && (
                  <path
                    d={path}
                    stroke="url(#conn-g)"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                    style={{ animation: "ccc-flow-l 1.4s linear infinite" }}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* CHANNEL nodes (left column) */}
        {CHANNELS.map((c, i) => {
          const top = 60 + i * 110
          const Icon = c.Icon
          const isActive = i === active
          return (
            <div
              key={c.id}
              className="absolute flex items-center gap-3"
              style={{ left: 8, top: top - 22 }}
            >
              <div
                className={`relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${c.color} shadow-[0_8px_22px_-6px_rgba(0,0,0,0.6)] transition-transform duration-500 ${
                  isActive ? `ring-2 ${c.ring} ring-offset-2 ring-offset-[#0a0612] scale-110` : "scale-95 opacity-75"
                }`}
              >
                <Icon className="h-5 w-5 text-white" />
                {isActive && (
                  <span
                    aria-hidden
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${c.color} opacity-60`}
                    style={{ animation: "ccc-ping 1.6s ease-out infinite" }}
                  />
                )}
              </div>
              <div className="leading-tight">
                <div className={`text-[12.5px] font-semibold transition-colors ${isActive ? "text-white" : "text-white/55"}`}>
                  {c.label}
                </div>
                <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/40">
                  {c.meta}
                </div>
              </div>
            </div>
          )
        })}

        {/* AI ROUTER (center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Halo rings */}
            <span aria-hidden className="absolute inset-0 -m-6 rounded-full border border-fuchsia-400/15" style={{ animation: "ccc-halo 3.6s ease-out infinite" }} />
            <span aria-hidden className="absolute inset-0 -m-3 rounded-full border border-fuchsia-400/25" style={{ animation: "ccc-halo 3.6s ease-out 1.2s infinite" }} />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-fuchsia-600 to-violet-600 shadow-[0_20px_60px_-12px_rgba(217,70,239,0.6)]">
              <Sparkles className="h-9 w-9 text-white" />
            </div>
            <div className="mt-2.5 text-center">
              <div className="text-[12px] font-semibold text-white">Kedeyo Router</div>
              <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-fuchsia-200/70">
                AI · Skill · VIP
              </div>
            </div>
          </div>
        </div>

        {/* AGENT DESKTOPS (right column) */}
        {[
          { name: "Anita", role: "Sales · Hindi", status: "On call", tone: "text-emerald-300", dot: "bg-emerald-400" },
          { name: "Rohit", role: "Support · EN", status: "Available", tone: "text-fuchsia-300", dot: "bg-fuchsia-400" },
          { name: "Meera", role: "Billing · Tamil", status: "Wrap-up", tone: "text-violet-300", dot: "bg-violet-400" },
        ].map((a, i) => {
          const top = 150 + i * 90
          const isActive = i === active % 3
          return (
            <div
              key={a.name}
              className="absolute flex items-center gap-3"
              style={{ right: 8, top: top - 18 }}
            >
              <div className="text-right leading-tight">
                <div className={`text-[12.5px] font-semibold transition-colors ${isActive ? "text-white" : "text-white/55"}`}>
                  {a.name}
                </div>
                <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/40">
                  {a.role}
                </div>
                <div className={`mt-0.5 inline-flex items-center gap-1 font-mono text-[9.5px] ${a.tone}`}>
                  <span className={`inline-block h-1 w-1 rounded-full ${a.dot}`} />
                  <span className="uppercase tracking-[0.12em]">{a.status}</span>
                </div>
              </div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white/5 backdrop-blur transition-all ${
                  isActive
                    ? "border-fuchsia-400/60 shadow-[0_0_22px_-4px_rgba(217,70,239,0.65)]"
                    : "border-white/15"
                }`}
              >
                <Headphones className={`h-4 w-4 ${isActive ? "text-fuchsia-200" : "text-white/55"}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* footer rail */}
      <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
        <div className="flex items-center gap-2">
          <span className="text-fuchsia-300">{CHANNELS[active].label}</span>
          <span className="text-white/30">·</span>
          <span>routed in 8s</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <span>Avg wait <span className="text-white">14s</span></span>
          <span className="text-white/30">·</span>
          <span>FCR <span className="text-white">87%</span></span>
        </div>
      </div>

      <style>{`
        @keyframes ccc-flow-l {
          to { stroke-dashoffset: -28; }
        }
        @keyframes ccc-ping {
          0% { transform: scale(1); opacity: 0.6 }
          80%, 100% { transform: scale(1.9); opacity: 0 }
        }
        @keyframes ccc-halo {
          0% { transform: scale(0.85); opacity: 0.6 }
          100% { transform: scale(1.6); opacity: 0 }
        }
      `}</style>
    </div>
  )
}
