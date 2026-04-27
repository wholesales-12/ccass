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
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * AI Receptionist hero.
 * - LEFT: headline, subhead, KPIs (no boxes — typographic + hairlines).
 * - RIGHT: live call lifecycle demo that mirrors the left copy
 *   (pickup time, language switching, intent, booking, confirmation).
 *   No card surfaces — everything floats on the gradient background,
 *   separated by hairlines and typography.
 */

type StageKey = "ring" | "pickup" | "listen" | "decide" | "speak" | "confirm" | "done"

type Event =
  | {
      kind: "system"
      ts: string
      stage: StageKey
      icon: "phone" | "lightning" | "check"
      text: string
      detail?: string
    }
  | {
      kind: "speech"
      ts: string
      stage: StageKey
      side: "caller" | "ai"
      lang: "HI" | "EN"
      primary: string
      translation: string
    }
  | {
      kind: "action"
      ts: string
      stage: StageKey
      lines: string[]
    }

const TIMELINE: Event[] = [
  {
    kind: "system",
    ts: "00:00",
    stage: "ring",
    icon: "phone",
    text: "Inbound · Mumbai",
    detail: "+91 98210 ••••",
  },
  {
    kind: "system",
    ts: "00:01",
    stage: "pickup",
    icon: "lightning",
    text: "Picked up in 0.4s",
    detail: "Greeted in Hindi",
  },
  {
    kind: "speech",
    ts: "00:02",
    stage: "listen",
    side: "caller",
    lang: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    translation: "I want to book an appointment for tomorrow at 11.",
  },
  {
    kind: "action",
    ts: "00:04",
    stage: "decide",
    lines: [
      "Language detected · Hindi",
      "Intent · Book appointment · 96%",
      "Calendar · 11:00 with Dr. Sharma is open",
    ],
  },
  {
    kind: "speech",
    ts: "00:06",
    stage: "speak",
    side: "ai",
    lang: "EN",
    primary: "Got it — 11 AM tomorrow with Dr. Sharma. Confirming on +91 98210 22140?",
    translation: "कल सुबह 11 बजे डॉ. शर्मा के साथ — confirm करूं?",
  },
  {
    kind: "speech",
    ts: "00:09",
    stage: "confirm",
    side: "caller",
    lang: "HI",
    primary: "हाँ, confirm कर दीजिए।",
    translation: "Yes, please confirm.",
  },
  {
    kind: "system",
    ts: "00:11",
    stage: "done",
    icon: "check",
    text: "Booked · Tue 11:00 · Dr. Sharma",
    detail: "SMS + WhatsApp sent · Lead tagged returning",
  },
]

const STAGES: { key: StageKey; label: string }[] = [
  { key: "ring", label: "Ring" },
  { key: "pickup", label: "Pickup" },
  { key: "listen", label: "Listen" },
  { key: "decide", label: "Decide" },
  { key: "speak", label: "Reply" },
  { key: "confirm", label: "Confirm" },
  { key: "done", label: "Done" },
]

const STEP_MS = 1500

export function ReceptionistHero() {
  const [step, setStep] = useState(0)
  const [seconds, setSeconds] = useState(18)
  const [bookings, setBookings] = useState(38)

  // Reveal timeline events one at a time, then loop.
  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s + 1) % (TIMELINE.length + 2)) // pause at end before loop
    }, STEP_MS)
    return () => clearInterval(t)
  }, [])

  // Live call timer.
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  // Bookings ticker.
  useEffect(() => {
    const t = setInterval(() => setBookings((n) => n + 1), 6800)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const visibleEvents = TIMELINE.slice(0, Math.min(step + 1, TIMELINE.length))
  const currentStage =
    step < TIMELINE.length ? TIMELINE[step].stage : TIMELINE[TIMELINE.length - 1].stage

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0a0612] pb-16 pt-24 lg:pb-24 lg:pt-28"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 0% 0%, oklch(0.45 0.22 295 / 0.55), transparent 65%), radial-gradient(ellipse 60% 50% at 100% 100%, oklch(0.62 0.24 300 / 0.35), transparent 70%)",
      }}
    >
      {/* Ambient grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ───────── LEFT ───────── */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-300/85">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              </span>
              <span>Live · 5-minute setup</span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[3.25rem] lg:text-[3.75rem]">
              Every call answered.
              <br />
              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                In a voice that sounds human.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-[17px]">
              An AI Receptionist that picks up in under a second, books appointments,
              qualifies leads and speaks{" "}
              <span className="font-semibold text-white">12+ Indian languages</span> &mdash; 24&times;7,
              every day of the year.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-[#0a0612] shadow-[0_10px_40px_-10px_rgba(232,121,249,0.6)] hover:bg-white/90"
                asChild
              >
                <Link href="#demo">
                  Start free trial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="#how-it-works"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
              >
                <PlayCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                Hear a sample call
                <span className="text-white/40 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            {/* KPI rail — typographic, no boxes, separated by hairlines */}
            <div className="mt-12 flex flex-wrap items-end gap-x-8 gap-y-5 border-t border-white/10 pt-6">
              <Kpi value="<1s" label="Pickup" icon={<Activity className="h-3 w-3" />} />
              <Kpi value="12+" label="Languages" icon={<Globe2 className="h-3 w-3" />} />
              <Kpi value="100%" label="Calls answered" icon={<Phone className="h-3 w-3" />} />
              <Kpi value="68%" label="AI resolved" icon={<Sparkles className="h-3 w-3" />} />
              <Kpi value="DPDP" label="Compliant" icon={<ShieldCheck className="h-3 w-3" />} />
            </div>
          </div>

          {/* ───────── RIGHT — live call lifecycle ───────── */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Glow backdrop */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-6 -inset-y-10 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.55 0.25 295 / 0.35), transparent 70%)",
                }}
              />

              {/* ── Header ── */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-semibold text-emerald-300">Live</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/60 tabular-nums">{mm}:{ss}</span>
                </div>
                <div className="text-right text-white/45">
                  <span className="text-white/70">AI Receptionist</span>{" "}
                  <span className="text-white/30">·</span>{" "}
                  <span>Inbound</span>
                </div>
              </div>

              {/* ── Stage rail — animated 7-stage progress ── */}
              <ol className="mt-5 grid grid-cols-7 items-center gap-1">
                {STAGES.map((s, i) => {
                  const stageIdx = STAGES.findIndex((x) => x.key === currentStage)
                  const reached = i <= stageIdx
                  const isCurrent = i === stageIdx
                  return (
                    <li key={s.key} className="flex flex-col items-center gap-1.5">
                      <span
                        className={`h-[3px] w-full rounded-full transition-all duration-500 ${
                          reached
                            ? "bg-gradient-to-r from-fuchsia-500 via-violet-400 to-fuchsia-400"
                            : "bg-white/10"
                        }`}
                        style={{
                          boxShadow: isCurrent
                            ? "0 0 14px 1px rgba(232,121,249,0.6)"
                            : undefined,
                        }}
                      />
                      <span
                        className={`text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                          isCurrent
                            ? "text-fuchsia-200"
                            : reached
                              ? "text-white/60"
                              : "text-white/30"
                        }`}
                      >
                        {s.label}
                      </span>
                    </li>
                  )
                })}
              </ol>

              {/* ── Conversation feed ── */}
              <div className="mt-7">
                <ol className="space-y-4">
                  {TIMELINE.map((ev, i) => {
                    const revealed = i < visibleEvents.length
                    const isLatest = i === visibleEvents.length - 1
                    return (
                      <li
                        key={i}
                        className="transition-all duration-500"
                        style={{
                          opacity: revealed ? 1 : 0.18,
                          transform: revealed ? "translateY(0)" : "translateY(4px)",
                        }}
                      >
                        <FeedRow event={ev} active={isLatest} />
                      </li>
                    )
                  })}
                </ol>
              </div>

              {/* ── Footer outcome rail ── */}
              <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-white/10 pt-4 font-mono text-[10.5px] uppercase tracking-[0.18em]">
                <span className="font-semibold text-emerald-300">Resolved · 23s</span>
                <span className="text-white/30">·</span>
                <span className="text-white/55">
                  <span className="font-semibold tabular-nums text-white">{bookings}</span> booked today
                </span>
                <span className="text-white/30">·</span>
                <span className="text-white/55">
                  <span className="font-semibold text-white">&lt;1s</span> avg pickup
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-row-in {
          from { opacity: 0; transform: translateY(6px) }
          to   { opacity: 1; transform: translateY(0)  }
        }
        @keyframes hero-caret-blink {
          0%, 50%   { opacity: 1 }
          51%, 100% { opacity: 0 }
        }
      `}</style>
    </section>
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
      <span className="font-mono text-2xl font-semibold leading-none text-white">{value}</span>
      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
        <span className="text-fuchsia-300/80">{icon}</span>
        {label}
      </span>
    </div>
  )
}

function FeedRow({ event, active }: { event: Event; active: boolean }) {
  if (event.kind === "system") {
    const Icon = event.icon
    return (
      <div className="flex items-start gap-3">
        <Stamp ts={event.ts} />
        <span
          className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-300"
          aria-hidden
        >
          {Icon === "phone" && <Phone className="h-2.5 w-2.5" />}
          {Icon === "lightning" && (
            <span className="text-[10px] font-bold leading-none">⚡</span>
          )}
          {Icon === "check" && (
            <span className="text-[10px] font-bold leading-none text-emerald-300">✓</span>
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold leading-snug text-white">{event.text}</p>
          {event.detail && (
            <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/45">
              {event.detail}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (event.kind === "action") {
    return (
      <div className="flex items-start gap-3">
        <Stamp ts={event.ts} />
        <span
          aria-hidden
          className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/15 text-violet-200"
        >
          <span className="text-[10px] font-bold leading-none">⚡</span>
        </span>
        <ul className="min-w-0 flex-1 space-y-1">
          {event.lines.map((line) => (
            <li
              key={line}
              className="font-mono text-[11.5px] leading-snug tracking-tight text-white/75"
            >
              <span className="text-violet-300/80">AI ·</span>{" "}
              {/* Highlight the value tail (after last separator " · ") */}
              {(() => {
                const parts = line.split(" · ")
                const head = parts.slice(0, -1).join(" · ")
                const tail = parts[parts.length - 1]
                return (
                  <>
                    <span className="text-white/55">{head}</span>
                    {head && <span className="text-white/30"> · </span>}
                    <span className="font-semibold text-white">{tail}</span>
                  </>
                )
              })()}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // speech
  const isAi = event.side === "ai"
  const accent = isAi ? "text-violet-300" : "text-fuchsia-300"
  const monogramCls = isAi
    ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
    : "border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200"
  const langCls = isAi
    ? "border-violet-400/30 bg-violet-500/10 text-violet-200"
    : "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200"

  return (
    <div className="flex items-start gap-3">
      <Stamp ts={event.ts} />
      <span
        aria-hidden
        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9.5px] font-bold leading-none ${monogramCls}`}
      >
        {isAi ? "AI" : "R"}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${accent}`}>
            {isAi ? "Kedeyo" : "Caller"}
          </span>
          <span
            className={`rounded-full border px-1.5 py-px font-mono text-[9px] font-semibold ${langCls}`}
          >
            {event.lang}
          </span>
        </div>
        <p className="mt-1 text-[13.5px] font-medium leading-snug text-white">
          {event.primary}
          {active && (
            <span
              aria-hidden
              className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[2px] bg-white align-baseline"
              style={{ animation: "hero-caret-blink 0.9s steps(1) infinite" }}
            />
          )}
        </p>
        <p className="mt-0.5 text-[11px] italic leading-snug text-white/45">{event.translation}</p>
      </div>
    </div>
  )
}

function Stamp({ ts }: { ts: string }) {
  return (
    <span className="mt-1 w-10 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
      {ts}
    </span>
  )
}
