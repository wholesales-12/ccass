"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  PlayCircle,
  Phone,
  Activity,
  Globe2,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  AudioLines,
  BrainCircuit,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * AI Receptionist hero — light theme.
 * RIGHT side: a 5-stage horizontal pipeline diagram (Pickup → Listen →
 * Understand → Decide → Act). Pure SVG connectors with an animated pulse,
 * icon-ring nodes (no rectangular cards), an active glow that walks the
 * pipeline, and a single compact live-caption line beneath the diagram.
 */

type Stage = {
  id: string
  label: string
  meta: string
  icon: React.ComponentType<{ className?: string }>
}

const STAGES: Stage[] = [
  { id: "pickup",    label: "Pickup",     meta: "<1s",          icon: Phone },
  { id: "listen",    label: "Listen",     meta: "HI · auto",    icon: AudioLines },
  { id: "understand",label: "Understand", meta: "Intent · 96%", icon: BrainCircuit },
  { id: "decide",    label: "Decide",     meta: "Slot · 11 AM", icon: Calendar },
  { id: "act",       label: "Act",        meta: "Booked",       icon: CheckCircle2 },
]

// Live caption rotates with the active stage so the diagram tells a story.
const CAPTIONS: Record<string, { hi: string; en: string; meta: string }> = {
  pickup: {
    hi: "Sunshine Dental — Mumbai · inbound call ringing",
    en: "Picked up in 0.4 s · greeted in caller's language",
    meta: "Caller · Rahul Sharma · +91 98 ····2140",
  },
  listen: {
    hi: "मुझे कल 11 बजे appointment book करनी है।",
    en: "I want to book an appointment for tomorrow at 11.",
    meta: "Language detected · Hindi (HI) ⇄ English",
  },
  understand: {
    hi: "Detecting intent · book_appointment",
    en: "Confidence 96% · entity: appointment, time: 11:00",
    meta: "Routing · receptionist skill · Sunshine Dental",
  },
  decide: {
    hi: "Calendar lookup · Dr. Sharma · 11:00 IST",
    en: "Slot is open · no conflicts · within working hours",
    meta: "Decision · confirm with caller before booking",
  },
  act: {
    hi: "Booked · Tue 11:00 · Dr. Sharma",
    en: "SMS + WhatsApp confirmation sent · CRM updated",
    meta: "Resolved in 23 s · zero human handoff",
  },
}

export function ReceptionistHero() {
  const [seconds, setSeconds] = useState(134)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  // Walk the pipeline
  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % STAGES.length)
    }, 2000)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const active = STAGES[activeIdx]
  const caption = CAPTIONS[active.id]

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pb-16 pt-24 lg:pb-20 lg:pt-28"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 55% at 100% 0%, oklch(0.78 0.16 320 / 0.18), transparent 65%), radial-gradient(ellipse 65% 55% at 0% 100%, oklch(0.80 0.14 285 / 0.16), transparent 70%)",
      }}
    >
      {/* Ambient dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(168,85,247,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.18) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ───────── LEFT ───────── */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
              </span>
              <span>Live · 5-minute setup</span>
            </div>

            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
              Every call answered.
              <br />
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                In a voice that sounds human.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              An AI Receptionist that picks up in under a second, books appointments,
              qualifies leads and speaks{" "}
              <span className="font-semibold text-foreground">12+ Indian languages</span> &mdash; 24&times;7,
              every day of the year.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-[0_10px_40px_-10px_rgba(232,121,249,0.45)] hover:bg-foreground/90"
                asChild
              >
                <Link href="#demo">
                  Start free trial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="#how-it-works"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-fuchsia-600"
              >
                <PlayCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                Hear a sample call
                <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-end gap-x-8 gap-y-5 border-t border-border pt-6">
              <Kpi value="<1s" label="Pickup" icon={<Activity className="h-3 w-3" />} />
              <Kpi value="12+" label="Languages" icon={<Globe2 className="h-3 w-3" />} />
              <Kpi value="100%" label="Calls answered" icon={<Phone className="h-3 w-3" />} />
              <Kpi value="68%" label="AI resolved" icon={<Sparkles className="h-3 w-3" />} />
              <Kpi value="DPDP" label="Compliant" icon={<ShieldCheck className="h-3 w-3" />} />
            </div>
          </div>

          {/* ───────── RIGHT — Pipeline diagram ───────── */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[600px]">
              {/* Soft ambient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-6 -inset-y-10 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.85 0.12 295 / 0.32), transparent 70%)",
                }}
              />

              {/* Live ticker */}
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Live
                  </span>
                  <span className="text-border">·</span>
                  <span className="font-mono text-[12px] tabular-nums text-foreground">
                    {mm}:{ss}
                  </span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Call #2,341 · Inbound
                </div>
              </div>

              {/* Diagram title */}
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fuchsia-600">
                    How the AI handles a call
                  </div>
                  <h3 className="mt-1 text-[20px] font-semibold leading-tight tracking-tight text-foreground sm:text-[22px]">
                    Pickup &rarr; Listen &rarr; Decide &rarr; Act
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-fuchsia-700">
                  <Globe2 className="h-3 w-3" />
                  HI &harr; EN
                </span>
              </div>

              {/* ── Pipeline diagram ── */}
              <Pipeline activeIdx={activeIdx} />

              {/* Live caption tied to the active stage */}
              <div
                key={active.id}
                className="mt-5 grid grid-cols-[auto_1fr] items-start gap-x-3 border-t border-border pt-4"
                style={{ animation: "hero-fade-in 360ms ease-out both" }}
              >
                <span className="mt-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600">
                  {active.label}
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                    {caption.hi}
                  </p>
                  <p className="mt-0.5 text-[12px] italic leading-snug text-muted-foreground">
                    {caption.en}
                  </p>
                  <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground/80">
                    {caption.meta}
                  </p>
                </div>
              </div>

              {/* Secondary feature teasers */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Also part of Kedeyo
                </span>
                <Link
                  href="/features/outbound-voice"
                  className="group inline-flex items-center gap-2 text-[12.5px] font-semibold text-foreground transition-colors hover:text-fuchsia-600"
                >
                  <PhoneOutgoing className="h-3.5 w-3.5 text-fuchsia-500" />
                  Outbound Voice AI
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/features/whatsapp-ai"
                  className="group inline-flex items-center gap-2 text-[12.5px] font-semibold text-foreground transition-colors hover:text-fuchsia-600"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-violet-500" />
                  WhatsApp AI
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <PhoneIncoming className="h-3 w-3" />
                  39 booked today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-fade-in {
          from { opacity: 0; transform: translateY(6px) }
          to   { opacity: 1; transform: translateY(0)   }
        }
        @keyframes pipe-flow {
          to { stroke-dashoffset: -36 }
        }
        @keyframes pipe-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.55 }
          50%      { transform: scale(1.18); opacity: 0    }
        }
        @keyframes pipe-bar {
          0%, 100% { transform: scaleY(0.35) }
          50%      { transform: scaleY(1)    }
        }
      `}</style>
    </section>
  )
}

/* ─────────── Pipeline diagram ─────────── */

function Pipeline({ activeIdx }: { activeIdx: number }) {
  // Layout maths — 5 nodes evenly distributed across a 560-unit-wide SVG
  const W = 560
  const H = 168
  const nodeY = 72
  const nodeR = 22
  const positions = STAGES.map((_, i) => {
    const pad = 36
    const step = (W - pad * 2) / (STAGES.length - 1)
    return { x: pad + step * i, y: nodeY }
  })

  return (
    <div className="mt-6">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full"
        role="img"
        aria-label="AI Receptionist call pipeline"
      >
        <defs>
          <linearGradient id="pipe-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"   stopColor="#d946ef" />
            <stop offset="50%"  stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="pipe-grad-active" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"   stopColor="#a855f7" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>

        {/* Connectors between consecutive nodes */}
        {positions.slice(0, -1).map((p, i) => {
          const next = positions[i + 1]
          const completed = i < activeIdx
          const isCurrent = i === activeIdx
          // Curved path between nodes (slight S-curve for visual interest)
          const midX = (p.x + next.x) / 2
          const offsetY = i % 2 === 0 ? -10 : 10
          const d = `M ${p.x + nodeR} ${p.y} C ${midX} ${p.y + offsetY}, ${midX} ${p.y + offsetY}, ${next.x - nodeR} ${p.y}`

          return (
            <g key={`c-${i}`}>
              {/* Base connector */}
              <path
                d={d}
                fill="none"
                stroke={completed || isCurrent ? "url(#pipe-grad)" : "rgba(168,85,247,0.18)"}
                strokeWidth={completed || isCurrent ? 1.6 : 1.2}
                strokeLinecap="round"
              />
              {/* Animated pulse only on the active connector */}
              {isCurrent && (
                <path
                  d={d}
                  fill="none"
                  stroke="url(#pipe-grad-active)"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeDasharray="5 7"
                  style={{
                    filter: "drop-shadow(0 0 5px rgba(217,70,239,0.55))",
                    animation: "pipe-flow 1.1s linear infinite",
                  }}
                />
              )}
            </g>
          )
        })}

        {/* Nodes */}
        {STAGES.map((s, i) => {
          const p = positions[i]
          const completed = i < activeIdx
          const active = i === activeIdx
          return (
            <g key={s.id}>
              {/* Halo for active node */}
              {active && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={nodeR + 6}
                  fill="none"
                  stroke="rgba(217,70,239,0.35)"
                  strokeWidth={1.5}
                  style={{
                    transformOrigin: `${p.x}px ${p.y}px`,
                    animation: "pipe-pulse 1.6s ease-out infinite",
                  }}
                />
              )}
              {/* Outer ring */}
              <circle
                cx={p.x}
                cy={p.y}
                r={nodeR}
                fill="white"
                stroke={
                  active
                    ? "url(#pipe-grad)"
                    : completed
                      ? "rgba(217,70,239,0.55)"
                      : "rgba(168,85,247,0.25)"
                }
                strokeWidth={active ? 2 : 1.4}
                style={
                  active
                    ? { filter: "drop-shadow(0 6px 14px rgba(217,70,239,0.35))" }
                    : undefined
                }
              />
              {/* Inner dot for completed steps */}
              {completed && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={3}
                  fill="url(#pipe-grad)"
                  opacity={0.9}
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Icon + label overlay (rendered as HTML so icons stay crisp) */}
      <div className="relative -mt-[168px] flex h-[168px]">
        {STAGES.map((s, i) => {
          const Icon = s.icon
          const completed = i < activeIdx
          const active = i === activeIdx
          const leftPct = (36 + (i * (560 - 72)) / (STAGES.length - 1)) / 5.6 // % of 560
          return (
            <div
              key={s.id}
              className="absolute flex -translate-x-1/2 flex-col items-center"
              style={{ left: `${leftPct}%`, top: "50px" }}
            >
              {/* Icon centered in the SVG node */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                  active
                    ? "text-fuchsia-600"
                    : completed
                      ? "text-fuchsia-500/80"
                      : "text-muted-foreground/55"
                }`}
              >
                {active && s.id === "listen" ? (
                  <span className="flex h-5 items-end gap-[2.5px]" aria-hidden>
                    {[0, 1, 2, 3, 4].map((b) => (
                      <span
                        key={b}
                        className="block w-[2.5px] origin-bottom rounded-full bg-gradient-to-t from-fuchsia-500 to-violet-500"
                        style={{
                          height: "100%",
                          animation: `pipe-bar ${0.55 + b * 0.06}s ease-in-out ${b * 0.06}s infinite`,
                        }}
                      />
                    ))}
                  </span>
                ) : (
                  <Icon className="h-[18px] w-[18px]" />
                )}
              </div>

              {/* Label below the node */}
              <div className="mt-3 text-center">
                <div
                  className={`text-[11.5px] font-semibold tracking-tight transition-colors ${
                    active
                      ? "text-foreground"
                      : completed
                        ? "text-foreground/85"
                        : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </div>
                <div className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.meta}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─────────── Sub-components ─────────── */

function Kpi({
  value,
  label,
  icon,
}: {
  value: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-mono text-2xl font-semibold leading-none text-foreground">{value}</span>
      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-fuchsia-600">{icon}</span>
        {label}
      </span>
    </div>
  )
}
