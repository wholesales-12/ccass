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
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * AI Receptionist hero — light theme.
 * - LEFT: headline, subhead, KPIs (typographic, no boxes).
 * - RIGHT: a focused single-call story. One conversation rendered as a
 *   vertical typographic thread (no card/lane chrome), with caller and AI
 *   alternating, an animated waveform on the active turn, and a small
 *   secondary-feature teaser at the bottom (Outbound Voice AI · WhatsApp AI).
 */

type Side = "caller" | "ai"

type Turn = {
  id: number
  side: Side
  speaker: string
  lang: "HI" | "EN"
  primary: string
  translation: string
  meta?: string
}

const TURNS: Turn[] = [
  {
    id: 1,
    side: "caller",
    speaker: "Rahul Sharma",
    lang: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    translation: "I need to book an appointment for tomorrow at 11.",
    meta: "Intent · book_appointment   96%",
  },
  {
    id: 2,
    side: "ai",
    speaker: "Kedeyo AI",
    lang: "HI",
    primary: "11 बजे डॉ. शर्मा available हैं — confirm करूँ?",
    translation: "11 AM with Dr. Sharma is available — shall I confirm?",
    meta: "Calendar · slot 11:00 open",
  },
  {
    id: 3,
    side: "caller",
    speaker: "Rahul Sharma",
    lang: "HI",
    primary: "हाँ, please confirm कर दीजिए।",
    translation: "Yes, please go ahead and confirm.",
  },
  {
    id: 4,
    side: "ai",
    speaker: "Kedeyo AI",
    lang: "EN",
    primary: "Booked. SMS + WhatsApp confirmation sent.",
    translation: "कन्फर्मेशन भेज दिया है — कल 11 बजे मिलते हैं।",
    meta: "Action · CRM updated · 23s call",
  },
]

export function ReceptionistHero() {
  const [seconds, setSeconds] = useState(134)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  // Reveal turns one by one, then hold on the last and loop
  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % (TURNS.length + 1))
    }, 2200)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const resolved = activeIdx >= TURNS.length

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

          {/* ───────── RIGHT — Single live call ───────── */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Soft glow backdrop */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-6 -inset-y-10 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.85 0.12 295 / 0.32), transparent 70%)",
                }}
              />

              {/* Hairline header — live ticker */}
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

              {/* Caller identity */}
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fuchsia-600">
                    Sunshine Dental · Mumbai
                  </div>
                  <div className="mt-1 text-[26px] font-semibold leading-tight tracking-tight text-foreground">
                    Rahul Sharma
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    +91 98 ····2140 &nbsp;·&nbsp; picked up in 0.4 s
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-fuchsia-700">
                    <Globe2 className="h-3 w-3" />
                    HI ⇄ EN
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                    auto-detected
                  </span>
                </div>
              </div>

              {/* Conversation thread — vertical, no boxes */}
              <ol className="mt-7 space-y-5">
                {TURNS.map((t, i) => {
                  const revealed = activeIdx >= i
                  const active = activeIdx === i && !resolved
                  return (
                    <li key={t.id}>
                      <ThreadTurn turn={t} revealed={revealed} active={active} />
                    </li>
                  )
                })}
              </ol>

              {/* Outcome — appears on resolution */}
              <div
                className="mt-6 flex items-center gap-3 border-t border-border pt-4 transition-opacity duration-500"
                style={{ opacity: resolved ? 1 : 0.3 }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-[14px] font-semibold tracking-tight text-foreground">
                  Booked · 11 AM with Dr. Sharma
                </span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  SMS + WhatsApp sent
                </span>
              </div>

              {/* Secondary features — inline teasers, no boxes */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
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
        @keyframes hero-bar {
          0%, 100% { transform: scaleY(0.35) }
          50%      { transform: scaleY(1)    }
        }
        @keyframes hero-caret-blink {
          0%, 50%   { opacity: 1 }
          51%, 100% { opacity: 0 }
        }
        @keyframes hero-fade-in {
          from { opacity: 0; transform: translateY(6px) }
          to   { opacity: 1; transform: translateY(0)   }
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
      <span className="font-mono text-2xl font-semibold leading-none text-foreground">{value}</span>
      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-fuchsia-600">{icon}</span>
        {label}
      </span>
    </div>
  )
}

function ThreadTurn({
  turn,
  revealed,
  active,
}: {
  turn: Turn
  revealed: boolean
  active: boolean
}) {
  const isAi = turn.side === "ai"
  const monogram = isAi ? "K" : turn.speaker.charAt(0)
  return (
    <div
      className="grid grid-cols-[28px_1fr] gap-x-3 transition-opacity duration-500"
      style={{
        opacity: revealed ? 1 : 0.18,
        animation: active ? "hero-fade-in 360ms ease-out both" : undefined,
      }}
    >
      {/* Speaker monogram (no card around it) */}
      <div className="flex flex-col items-center pt-1">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold tracking-tight transition-all ${
            isAi
              ? "bg-gradient-to-br from-fuchsia-500 via-violet-500 to-pink-500 text-white shadow-[0_6px_16px_-8px_rgba(217,70,239,0.7)]"
              : "border border-border bg-white text-foreground/70"
          } ${active ? "ring-2 ring-fuchsia-300/60 ring-offset-2 ring-offset-white" : ""}`}
        >
          {monogram}
        </span>
        {/* Connector hairline to next turn */}
        <span aria-hidden className="mt-1 h-full w-px bg-border/70" />
      </div>

      {/* Content column — pure typography */}
      <div className="min-w-0 pb-2">
        <div className="flex items-center gap-2">
          <span
            className={`text-[12px] font-semibold tracking-tight ${
              isAi ? "text-fuchsia-700" : "text-foreground"
            }`}
          >
            {turn.speaker}
          </span>
          <span className="rounded-sm border border-border bg-white px-1 py-px font-mono text-[8.5px] font-semibold uppercase tracking-[0.16em] text-foreground/65">
            {turn.lang}
          </span>
          {active && (
            <span className="flex h-3 items-end gap-[2px]" aria-hidden>
              {[0, 1, 2, 3, 4].map((b) => (
                <span
                  key={b}
                  className="block w-[2px] origin-bottom rounded-full bg-gradient-to-t from-fuchsia-500 to-violet-500"
                  style={{
                    height: "100%",
                    animation: `hero-bar ${0.55 + b * 0.06}s ease-in-out ${b * 0.06}s infinite`,
                  }}
                />
              ))}
            </span>
          )}
          {active && (
            <span className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              speaking
            </span>
          )}
        </div>
        <p className="mt-1 text-[15.5px] font-medium leading-snug tracking-tight text-foreground">
          {turn.primary}
          {active && (
            <span
              aria-hidden
              className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[2px] bg-foreground align-baseline"
              style={{ animation: "hero-caret-blink 0.9s steps(1) infinite" }}
            />
          )}
        </p>
        <p className="mt-0.5 text-[12px] italic leading-snug text-muted-foreground">
          {turn.translation}
        </p>
        {turn.meta && (
          <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground/80">
            {turn.meta}
          </p>
        )}
      </div>
    </div>
  )
}
