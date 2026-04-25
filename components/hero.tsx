"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Phone,
  PhoneIncoming,
  ShieldCheck,
  Sparkles,
  Bot,
  PhoneCall,
  Headphones,
  MessageSquare,
  ListTree,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const LIVE_CALLS = [
  {
    id: 1,
    caller: "Aarav S.",
    number: "+91 98210 22140",
    lang: "हिन्दी",
    intent: "Loan inquiry",
    confidence: 94,
    line: "मुझे होम लोन के बारे में जानकारी चाहिए।",
    lineEn: "I need information about home loans.",
    action: "Routed to Sales",
    color: "fuchsia",
  },
  {
    id: 2,
    caller: "Priya M.",
    number: "+91 90876 41209",
    lang: "English",
    intent: "Order tracking",
    confidence: 97,
    line: "Where is my order #4421?",
    lineEn: "",
    action: "Self-served by AI",
    color: "violet",
  },
  {
    id: 3,
    caller: "Karthik R.",
    number: "+91 99452 83067",
    lang: "தமிழ்",
    intent: "Appointment booking",
    confidence: 91,
    line: "நாளை காலை அப்பாயிண்ட்மென்ட் வேண்டும்.",
    lineEn: "I need an appointment tomorrow morning.",
    action: "Booked · 10:30 AM",
    color: "fuchsia",
  },
  {
    id: 4,
    caller: "Neha T.",
    number: "+91 88260 71105",
    lang: "हिन्दी",
    intent: "Payment reminder",
    confidence: 96,
    line: "EMI की तारीख कब है?",
    lineEn: "When is the EMI date?",
    action: "Answered by AI",
    color: "violet",
  },
] as const

const TRUST = [
  { label: "Made in India", icon: "🇮🇳" },
  { label: "TRAI Registered" },
  { label: "DPDP Compliant" },
  { label: "ISO 27001" },
  { label: "RBI / IRDAI Ready" },
]

const STATS = [
  { value: "+45%", label: "Higher contact rate", detail: "Predictive dialing skips voicemails & DNCs", tone: "fuchsia" },
  { value: "-35%", label: "Lower handle time", detail: "AI agent assist + auto-summaries", tone: "violet" },
  { value: "-60%", label: "Fewer missed calls", detail: "AI Receptionist answers 24×7", tone: "fuchsia" },
  { value: "5 min", label: "Time to go live", detail: "No PRI lines · No on-prem PBX", tone: "violet" },
]

const FEATURE_CHIPS = [
  { id: "ai-recep", icon: Bot, label: "AI Receptionist", hint: "Answers every call, 24×7" },
  { id: "voice-bot", icon: Headphones, label: "Voice Bot", hint: "Hindi · English · Tamil" },
  { id: "auto-dial", icon: PhoneCall, label: "Auto Dialer", hint: "Predictive · Power · Preview" },
  { id: "smart-ivr", icon: ListTree, label: "Smart IVR", hint: "Drag-and-drop builder" },
  { id: "wa", icon: MessageSquare, label: "WhatsApp", hint: "DPDP-compliant broadcasting" },
  { id: "live", icon: Activity, label: "Live Monitor", hint: "Whisper · Barge · Coach" },
]

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.4 })
  const [activeCall, setActiveCall] = useState<number | null>(2)

  // Auto-cycle the active call when the user is not hovering
  useEffect(() => {
    if (activeCall !== null) return
    const id = setInterval(() => {
      setActiveCall(null)
    }, 1)
    return () => clearInterval(id)
  }, [activeCall])

  useEffect(() => {
    const t = setInterval(() => {
      setActiveCall((current) => {
        // If the user is currently hovering a card (handled via mouseenter), stay.
        if (current !== null && current !== -1) return current
        return current
      })
    }, 2200)
    return () => clearInterval(t)
  }, [])

  const onMove = (e: React.MouseEvent) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      id="top"
      className="relative isolate overflow-hidden bg-[#0a0612] pt-20 lg:pt-24"
    >
      {/* Layered backgrounds: base gradient + cursor spotlight + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.45 0.22 295 / 0.45), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 30%, oklch(0.62 0.24 300 / 0.30), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, oklch(0.62 0.24 300 / 0.18), transparent 65%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 40%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-10">
        {/* ---------------- LEFT: Copy ---------------- */}
        <div className="flex flex-col justify-center lg:col-span-7">
          {/* Eyebrow pill */}
          <Link
            href="/features/ai-receptionist"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:shadow-[0_8px_30px_-10px_oklch(0.62_0.24_300/0.7)] sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            <span className="font-semibold tracking-wider text-fuchsia-300">NEW</span>
            <span className="h-3 w-px bg-white/20" />
            AI Receptionist · Answers every call in Hindi & English, 24×7
            <ArrowRight className="h-3 w-3 text-fuchsia-300 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          {/* H1 with hover-highlightable phrases */}
          <h1 className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            <HoverHighlight>AI Contact Center</HoverHighlight> Software <span className="text-white/60">in India</span>
            <br />
            <span className="text-white/90">— With </span>
            <HoverHighlight gradient>AI Receptionist</HoverHighlight>
            <span className="text-white/90"> Built In.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
            Pair an always-on <span className="font-semibold text-white">AI Receptionist</span> with voice bots, smart
            IVR, predictive dialers and live dashboards — on a single cloud platform. Answer every customer call,
            close more sales, and resolve support faster, without growing your team.
          </p>

          {/* Feature chip rail (interactive on hover) */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {FEATURE_CHIPS.map((c) => {
              const Icon = c.icon
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    className="group/chip relative flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2.5 pr-3 text-[11px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-400/40 hover:bg-white/[0.09] hover:text-white sm:text-xs"
                  >
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover/chip:opacity-100" />
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-fuchsia-300 transition-transform duration-300 group-hover/chip:scale-110 group-hover/chip:bg-fuchsia-500/20">
                      <Icon className="h-3 w-3" />
                    </span>
                    <span>{c.label}</span>
                    <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[10px] text-white/50 transition-all duration-500 group-hover/chip:max-w-[160px] group-hover/chip:pl-1 sm:inline">
                      {c.hint}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="group/cta relative h-12 overflow-hidden rounded-full bg-white px-6 text-sm font-semibold text-[#0a0612] shadow-[0_10px_40px_-10px_rgba(232,121,249,0.6)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_50px_-10px_rgba(232,121,249,0.8)]"
              asChild
            >
              <Link href="#demo">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-fuchsia-100 via-white to-violet-100 opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group/cta2 h-12 rounded-full border-white/20 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-fuchsia-400/50 hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/features/ai-receptionist">
                <Headphones className="mr-1.5 h-4 w-4 text-fuchsia-300 transition-transform duration-300 group-hover/cta2:scale-110" />
                Hear the AI Receptionist
              </Link>
            </Button>
            <a
              href="tel:+917621073586"
              className="group flex items-center gap-2 rounded-full px-2 py-2 text-xs text-white/60 transition-colors duration-300 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12 group-hover:text-fuchsia-300" />
              <span className="font-mono">+91 76210 73586</span>
            </a>
          </div>
          <p className="mt-3 text-xs text-white/40">
            No credit card · No long contracts · AI Receptionist live in 5 minutes.
          </p>

          {/* Trust strip */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-6">
            {TRUST.map((t) => (
              <li key={t.label}>
                <span className="group/trust flex items-center gap-1.5 text-[11px] font-medium text-white/55 transition-colors duration-300 hover:text-white sm:text-xs">
                  {t.icon ? (
                    <span className="text-sm transition-transform duration-300 group-hover/trust:scale-110">
                      {t.icon}
                    </span>
                  ) : (
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/80 transition-all duration-300 group-hover/trust:scale-110 group-hover/trust:text-emerald-300" />
                  )}
                  {t.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- RIGHT: Live ops board ---------------- */}
        <div className="relative mt-12 lg:col-span-5 lg:mt-0">
          <LiveOpsBoard activeCall={activeCall} setActiveCall={setActiveCall} />
        </div>
      </div>

      {/* ---------------- Bottom: Stat strip ---------------- */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/[0.06] sm:grid-cols-4">
          {STATS.map((s, i) => (
            <StatTile key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  HoverHighlight — text that gets a gradient underline + glow on hover */
/* ------------------------------------------------------------------ */

function HoverHighlight({
  children,
  gradient = false,
}: {
  children: React.ReactNode
  gradient?: boolean
}) {
  return (
    <span className="group/hl relative inline-block cursor-default">
      <span
        className={cn(
          "transition-all duration-300",
          gradient
            ? "bg-gradient-to-r from-fuchsia-300 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent"
            : "text-white",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-fuchsia-300 transition-transform duration-500 ease-out group-hover/hl:scale-x-100"
      />
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Live Ops Board — stacked call cards with hover-to-expand           */
/* ------------------------------------------------------------------ */

function LiveOpsBoard({
  activeCall,
  setActiveCall,
}: {
  activeCall: number | null
  setActiveCall: (id: number | null) => void
}) {
  // Auto rotate when nothing hovered
  const [auto, setAuto] = useState(2)
  useEffect(() => {
    const id = setInterval(() => {
      setAuto((n) => (n % LIVE_CALLS.length) + 1)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  const focused = activeCall ?? auto

  return (
    <div className="relative">
      {/* Glow halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[60px] opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.62 0.24 300 / 0.35), transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Live AI Conversations
          </h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-white/60">
          {LIVE_CALLS.length} active
        </span>
      </div>

      {/* Cards */}
      <ul
        className="relative space-y-2.5"
        onMouseLeave={() => setActiveCall(null)}
      >
        {LIVE_CALLS.map((c) => {
          const isActive = focused === c.id
          return (
            <li
              key={c.id}
              onMouseEnter={() => setActiveCall(c.id)}
              className={cn(
                "group/card relative cursor-pointer overflow-hidden rounded-2xl border bg-white/[0.04] backdrop-blur-md transition-all duration-500",
                isActive
                  ? "border-fuchsia-400/40 bg-white/[0.07] shadow-[0_20px_60px_-20px_oklch(0.62_0.24_300/0.6)]"
                  : "border-white/10 hover:border-white/20",
              )}
              style={{
                transform: isActive ? "translateX(-6px)" : "translateX(0)",
              }}
            >
              {/* Sweeping gradient on hover */}
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/15 to-violet-500/0 opacity-0 transition-opacity duration-500",
                  isActive && "opacity-100",
                )}
              />

              {/* Compact row */}
              <div className="relative flex items-center gap-3 p-3">
                {/* Avatar */}
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white transition-transform duration-500",
                    c.color === "fuchsia"
                      ? "bg-gradient-to-br from-fuchsia-500 to-violet-500"
                      : "bg-gradient-to-br from-violet-500 to-indigo-500",
                    isActive && "scale-105",
                  )}
                >
                  {c.caller
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>

                {/* Caller info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-medium text-white">{c.caller}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
                      {c.lang}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/45">
                    <PhoneIncoming className="h-3 w-3" />
                    <span className="font-mono">{c.number}</span>
                  </div>
                </div>

                {/* Mini waveform - active only when focused */}
                <div className="flex h-6 items-end gap-[2px]">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "block w-[2px] rounded-full bg-fuchsia-400 transition-all",
                        isActive ? "animate-wave" : "opacity-30",
                      )}
                      style={{
                        height: `${6 + ((i * 5) % 16)}px`,
                        animationDelay: `${i * 0.07}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Confidence chip */}
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold transition-colors duration-300",
                    isActive
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-white/5 text-white/50",
                  )}
                >
                  {c.confidence}%
                </span>
              </div>

              {/* Expanded panel — reveals on hover/active */}
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-out",
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="space-y-2 border-t border-white/10 bg-black/20 px-3 py-2.5">
                    {/* Transcript */}
                    <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
                      <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/50">
                        <Sparkles className="h-3 w-3 text-fuchsia-300" />
                        Live transcript
                      </div>
                      <div className="mt-1 text-[12px] text-white">{c.line}</div>
                      {c.lineEn && (
                        <div className="mt-0.5 text-[10px] text-white/50">{c.lineEn}</div>
                      )}
                    </div>

                    {/* Intent + action */}
                    <div className="flex items-center justify-between gap-2 text-[11px]">
                      <span className="flex items-center gap-1.5 text-white/70">
                        <span className="text-white/40">Intent</span>
                        <span className="font-medium text-white">{c.intent}</span>
                      </span>
                      <span className="rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-[10px] font-medium text-fuchsia-200">
                        {c.action}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Footer hint */}
      <div className="relative mt-3 flex items-center justify-between text-[10px] text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-fuchsia-400" />
          Hover any call to inspect
        </span>
        <span className="font-mono">Latency · 280 ms</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  StatTile — hover lifts, animates accent border, reveals detail     */
/* ------------------------------------------------------------------ */

function StatTile({
  value,
  label,
  detail,
  tone,
}: {
  value: string
  label: string
  detail: string
  tone: "fuchsia" | "violet"
}) {
  return (
    <div className="group/stat relative isolate overflow-hidden bg-[#0a0612] px-5 py-6 transition-colors duration-300 hover:bg-white/[0.03] sm:px-6 sm:py-7">
      {/* Top accent line that fills on hover */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/stat:scale-x-100",
          tone === "fuchsia"
            ? "bg-gradient-to-r from-fuchsia-400 via-fuchsia-300 to-transparent"
            : "bg-gradient-to-r from-violet-400 via-violet-300 to-transparent",
        )}
      />
      {/* Glow on hover */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100",
          tone === "fuchsia"
            ? "bg-[radial-gradient(ellipse_at_top_left,oklch(0.7_0.25_320/0.25),transparent_70%)]"
            : "bg-[radial-gradient(ellipse_at_top_left,oklch(0.62_0.24_300/0.25),transparent_70%)]",
        )}
      />

      <div className="font-mono text-3xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover/stat:-translate-y-0.5 sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/55 sm:text-xs">
        {label}
      </div>
      {/* Detail – reveals on hover */}
      <div className="mt-2 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover/stat:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="text-[11px] leading-snug text-white/65">{detail}</div>
        </div>
      </div>
    </div>
  )
}
