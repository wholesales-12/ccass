"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Activity,
  MapPin,
  Ear,
  Brain,
  MessageSquareText,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — "Every Call Answered. By an AI Receptionist."
 * Right side: centered AI Receptionist "Stage" — a glowing pulsing orb
 * surrounded by 4 floating capability labels with animated beam lines.
 * Below: a single live caption that rotates through caller / AI turns.
 * No card chrome, no containers, no boxes.
 */

const STATS = [
  { value: "5K+", label: "Businesses" },
  { value: "2M+", label: "Calls / Day" },
  { value: "68%", label: "AI Resolved" },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0a0612] pt-20 text-white lg:pt-24"
    >
      {/* Backdrop grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 18% 10%, oklch(0.62 0.24 300 / 0.28), transparent 70%), radial-gradient(45% 45% at 92% 30%, oklch(0.55 0.24 320 / 0.22), transparent 70%), radial-gradient(60% 60% at 50% 110%, oklch(0.45 0.22 295 / 0.20), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-white/85 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              </span>
              New: AI Receptionist — 24/7 call answering
              <ArrowRight className="h-3 w-3 text-white/60" />
            </div>

            <h1
              className="mt-6 font-semibold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
            >
              <span className="block">
                Every Call{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                    Answered
                  </span>
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-1.5 block h-[6px] rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500 opacity-90"
                  />
                </span>
                .
              </span>
              <span className="block text-white/95">By an AI Receptionist.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-white/65 sm:text-base">
              Kedeyo&apos;s AI Receptionist picks up every inbound call in{" "}
              <span className="font-semibold text-white/90">Hindi &amp; English</span>, qualifies callers, books
              appointments and routes hot leads — instantly, 24×7.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-6 text-[15px] font-semibold text-[#0a0612] shadow-lg shadow-black/40 transition-all hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-xl"
              >
                <Link href="/demo">
                  Start free trial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/[0.04] px-6 text-[15px] font-medium text-white backdrop-blur hover:border-white/25 hover:bg-white/[0.08]"
              >
                <Link href="#workflow">
                  <Phone className="mr-2 h-4 w-4" />
                  See it in action
                </Link>
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/55">
              <span className="inline-flex items-center gap-1.5 font-semibold text-white/75">
                <MapPin className="h-3.5 w-3.5 text-fuchsia-300" /> Made in India
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> DPDP + TRAI
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-violet-300" /> 99.99% uptime
              </span>
            </div>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-semibold leading-none tracking-tight text-white"
                    style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.875rem)" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — AI Receptionist Stage */}
          <div className="lg:col-span-5">
            <ReceptionistStage />
          </div>
        </div>
      </div>

      {/* Shared keyframes */}
      <style jsx global>{`
        @keyframes hero-orb-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1) }
          50%      { transform: scale(1.04); filter: brightness(1.15) }
        }
        @keyframes hero-orb-ring {
          0%   { transform: scale(0.55); opacity: 0.7 }
          100% { transform: scale(2.3);  opacity: 0   }
        }
        @keyframes hero-eq-bar {
          0%, 100% { transform: scaleY(0.35) }
          50%      { transform: scaleY(1)    }
        }
        @keyframes hero-beam {
          0%   { stroke-dashoffset: 80; opacity: 0   }
          15%  {                        opacity: 1   }
          85%  {                        opacity: 1   }
          100% { stroke-dashoffset: 0;  opacity: 0.2 }
        }
        @keyframes hero-cap-glow {
          0%, 100% { opacity: 0.55 }
          50%      { opacity: 1    }
        }
        @keyframes hero-caret {
          0%, 49%  { opacity: 1 }
          50%, 100%{ opacity: 0 }
        }
        @keyframes hero-caption-in {
          0%   { opacity: 0; transform: translateY(6px) }
          100% { opacity: 1; transform: translateY(0)   }
        }
      `}</style>
    </section>
  )
}

/* ─────────────  AI Receptionist Stage  ───────────── */

type Turn = {
  side: "caller" | "ai"
  speaker: string
  langTag: "HI" | "EN"
  primary: string
  secondary: string
  /** which capability is "lit up" during this turn */
  cap: "listen" | "understand" | "speak" | "act"
}

const TURNS: Turn[] = [
  {
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "I want to book for tomorrow at 11.",
    cap: "listen",
  },
  {
    side: "ai",
    speaker: "Kedeyo",
    langTag: "EN",
    primary: "11 AM tomorrow with Dr. Sharma is open — confirm?",
    secondary: "कल 11 बजे डॉ. शर्मा available है।",
    cap: "understand",
  },
  {
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "हाँ, confirm कर दीजिए।",
    secondary: "Yes, please confirm.",
    cap: "speak",
  },
  {
    side: "ai",
    speaker: "Kedeyo",
    langTag: "EN",
    primary: "Booked. SMS + WhatsApp sent.",
    secondary: "Resolved in 23s.",
    cap: "act",
  },
]

type CapId = "listen" | "understand" | "speak" | "act"

const CAPABILITIES: Array<{
  id: CapId
  label: string
  sub: string
  icon: typeof Ear
  /** percent positions inside the stage box */
  x: number
  y: number
  /** which side of the orb this capability sits, controls beam path */
  anchor: "tl" | "tr" | "bl" | "br"
}> = [
  { id: "listen",     label: "Listens",        sub: "Hi · En · Ta",     icon: Ear,                x: 6,  y: 8,  anchor: "tl" },
  { id: "understand", label: "Understands",    sub: "Intent · 98%",     icon: Brain,              x: 94, y: 8,  anchor: "tr" },
  { id: "speak",      label: "Speaks back",    sub: "Natural voice",    icon: MessageSquareText,  x: 6,  y: 92, anchor: "bl" },
  { id: "act",        label: "Books / Routes", sub: "Calendar · CRM",   icon: CalendarCheck,      x: 94, y: 92, anchor: "br" },
]

function ReceptionistStage() {
  const [seconds, setSeconds] = useState(46)
  const [turnIdx, setTurnIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setTurnIdx((i) => (i + 1) % TURNS.length), 3200)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const turn = TURNS[turnIdx]
  const activeCap = turn.cap
  const aiSpeaking = turn.side === "ai"
  const callerSpeaking = turn.side === "caller"
  const resolved = turnIdx === TURNS.length - 1

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Top status row — pure typography */}
      <div className="flex items-center justify-between text-[11px]">
        <span className="inline-flex items-center gap-2 font-mono font-semibold uppercase tracking-[0.2em] text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live · {mm}:{ss}
        </span>
        <span className="font-mono uppercase tracking-[0.18em] text-white/40">
          Hi <span className="text-white/30">⇄</span> En · Mumbai
        </span>
      </div>

      {/* Identity wordmark */}
      <div className="mt-3">
        <h3
          className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-300 bg-clip-text text-transparent font-semibold leading-[1] tracking-tight"
          style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.4rem)" }}
        >
          AI Receptionist
        </h3>
        <p className="mt-1.5 max-w-[420px] text-[12.5px] leading-snug text-white/55">
          Picks up, understands, qualifies and books — in your customer&apos;s language. Watch a live call.
        </p>
      </div>

      {/* Stage: orb + capabilities + beams */}
      <div className="relative mt-6 h-[300px] sm:h-[320px]">
        {/* SVG beam lines (under everything) */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beam-fuchsia" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(236,72,153,0)" />
              <stop offset="100%" stopColor="rgba(236,72,153,0.9)" />
            </linearGradient>
            <linearGradient id="beam-violet" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(167,139,250,0)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0.9)" />
            </linearGradient>
          </defs>

          {CAPABILITIES.map((c) => {
            const isActive = c.id === activeCap
            const grad = c.anchor === "tl" || c.anchor === "bl" ? "url(#beam-fuchsia)" : "url(#beam-violet)"
            return (
              <line
                key={c.id}
                x1={c.x}
                y1={c.y}
                x2={50}
                y2={50}
                stroke={grad}
                strokeWidth={isActive ? 0.5 : 0.25}
                strokeLinecap="round"
                strokeDasharray="2 1.5"
                vectorEffect="non-scaling-stroke"
                style={{
                  opacity: isActive ? 1 : 0.18,
                  transition: "opacity 400ms ease, stroke-width 400ms ease",
                }}
              />
            )
          })}
        </svg>

        {/* Capability labels — positioned at corners, no box */}
        {CAPABILITIES.map((c) => {
          const isActive = c.id === activeCap
          const Icon = c.icon
          const align =
            c.anchor === "tl"
              ? "items-start text-left"
              : c.anchor === "tr"
                ? "items-end text-right"
                : c.anchor === "bl"
                  ? "items-start text-left"
                  : "items-end text-right"
          return (
            <div
              key={c.id}
              className={`absolute flex w-[140px] flex-col gap-1 ${align}`}
              style={{
                left: c.x <= 50 ? 0 : "auto",
                right: c.x > 50 ? 0 : "auto",
                top: c.y <= 50 ? 0 : "auto",
                bottom: c.y > 50 ? 0 : "auto",
                transition: "all 400ms ease",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500"
                style={{
                  background: isActive
                    ? "radial-gradient(circle, rgba(236,72,153,0.35), rgba(167,139,250,0.18) 70%, transparent)"
                    : "rgba(255,255,255,0.04)",
                  boxShadow: isActive
                    ? "0 0 24px 6px rgba(217,70,239,0.45), inset 0 0 0 1px rgba(244,114,182,0.55)"
                    : "inset 0 0 0 1px rgba(255,255,255,0.10)",
                }}
              >
                <Icon
                  className={`h-4 w-4 transition-colors duration-500 ${
                    isActive ? "text-fuchsia-200" : "text-white/55"
                  }`}
                  strokeWidth={2}
                />
              </div>
              <div className={`text-[12px] font-semibold leading-tight transition-colors duration-500 ${isActive ? "text-white" : "text-white/70"}`}>
                {c.label}
              </div>
              <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/40">
                {c.sub}
              </div>
            </div>
          )
        })}

        {/* Center orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-[150px] w-[150px]">
            {/* Expanding rings */}
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden
                className="absolute inset-0 rounded-full border border-fuchsia-400/40"
                style={{ animation: `hero-orb-ring 2.6s ease-out ${i * 0.7}s infinite` }}
              />
            ))}

            {/* Radial waveform halo (24 bars in a circle) */}
            <div className="absolute inset-0">
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * 360
                const active = aiSpeaking || callerSpeaking
                return (
                  <span
                    key={i}
                    aria-hidden
                    className="absolute left-1/2 top-1/2 block w-[2.5px] origin-bottom rounded-full"
                    style={{
                      height: `${10 + (active ? (i * 7) % 14 : 4)}px`,
                      background: aiSpeaking
                        ? "linear-gradient(to top, rgba(167,139,250,0.2), rgba(196,181,253,1))"
                        : "linear-gradient(to top, rgba(232,121,249,0.2), rgba(244,114,182,1))",
                      transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-66px)`,
                      transformOrigin: "bottom center",
                      animation: active
                        ? `hero-eq-bar ${680 + (i % 5) * 90}ms ease-in-out ${i * 30}ms infinite`
                        : undefined,
                      opacity: active ? 1 : 0.45,
                    }}
                  />
                )
              })}
            </div>

            {/* Inner orb */}
            <div
              className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, oklch(0.86 0.16 320), oklch(0.55 0.25 295) 55%, oklch(0.30 0.18 290) 100%)",
                boxShadow:
                  "0 0 70px 14px rgba(217,70,239,0.40), inset 0 0 30px rgba(255,255,255,0.18)",
                animation: "hero-orb-pulse 2.6s ease-in-out infinite",
              }}
            />

            {/* Orb label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="font-mono text-[8.5px] font-bold uppercase tracking-[0.22em] text-white/85">
                Kedeyo
              </div>
              <div className="mt-0.5 text-[10px] font-semibold text-white/65">
                {callerSpeaking ? "Listening" : aiSpeaking ? "Replying" : "Resolved"}
              </div>
              {/* Mini eq when speaking */}
              <div className="mt-1.5 flex items-end justify-center gap-[2px]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span
                    key={k}
                    className="block w-[2px] rounded-full bg-white/85"
                    style={{
                      height: "8px",
                      animation: callerSpeaking || aiSpeaking
                        ? `hero-eq-bar 700ms ease-in-out ${k * 80}ms infinite`
                        : undefined,
                      transformOrigin: "bottom",
                      opacity: callerSpeaking || aiSpeaking ? 1 : 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live caption — single rotating line, pure typography */}
      <div className="mt-2 min-h-[88px]">
        <div className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              callerSpeaking ? "bg-fuchsia-400" : "bg-violet-400"
            } animate-pulse`}
          />
          <span className={callerSpeaking ? "text-fuchsia-300" : "text-violet-300"}>
            {turn.speaker}
          </span>
          <span className="text-white/30">·</span>
          <span className="text-white/45">{turn.langTag}</span>
        </div>
        <div
          key={turnIdx}
          className="text-[15px] font-medium leading-snug text-white"
          style={{ animation: "hero-caption-in 320ms ease-out both" }}
        >
          {turn.primary}
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/80 align-baseline"
            style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
          />
        </div>
        <div
          key={`s-${turnIdx}`}
          className="mt-1 text-[12px] italic leading-snug text-white/45"
          style={{ animation: "hero-caption-in 320ms ease-out 60ms both" }}
        >
          {turn.secondary}
        </div>
      </div>

      {/* Resolution ribbon */}
      <div
        className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-opacity duration-500"
        style={{ opacity: resolved ? 1 : 0.35 }}
      >
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
        <span className="text-emerald-300">Booked</span>
        <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/60 to-transparent" />
        <span className="text-white/55">11 AM · Conf. sent</span>
      </div>
    </div>
  )
}
