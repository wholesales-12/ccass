"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Activity,
  MapPin,
  CheckCircle2,
  Sparkles,
  Languages,
  CalendarCheck,
  PhoneIncoming,
  Brain,
  Zap,
  MessageSquareText,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — "Every Call Answered. By an AI Receptionist."
 * Right side: a dense, free-flowing **live call feed** that narrates
 * the AI receptionist's lifecycle — no card chrome, no bubbles, no boxes.
 * Each lifecycle event reveals one after another, then loops.
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
      {/* Backdrop */}
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
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-white/85 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              </span>
              New: AI Receptionist — 24/7 call answering
              <ArrowRight className="h-3 w-3 text-white/60" />
            </div>

            {/* H1 — exactly two lines */}
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

            {/* Sub */}
            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-white/65 sm:text-base">
              Kedeyo&apos;s AI Receptionist picks up every inbound call in{" "}
              <span className="font-semibold text-white/90">Hindi &amp; English</span>, qualifies callers, books
              appointments and routes hot leads — instantly, 24×7.
            </p>

            {/* CTAs */}
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

            {/* Trust strip */}
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

            {/* Stat row */}
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

          {/* RIGHT — live call feed (no card, no boxes) */}
          <div className="lg:col-span-5">
            <LiveCallFeed />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────  LiveCallFeed  ─────────────────────────
 * Vertical, free-flowing narration of one AI receptionist call.
 * - No card chrome anywhere — only a timeline rail, typography, glows.
 * - Events progressively reveal, then loop.
 * - Each event explains a specific receptionist capability inline.
 */

type EventBase = { id: string }
type SystemEvent = EventBase & {
  kind: "system"
  icon: typeof PhoneIncoming
  tone: "fuchsia" | "violet" | "emerald" | "amber"
  label: string
  detail?: string
  meta?: string
}
type SpeechEvent = EventBase & {
  kind: "speech"
  side: "caller" | "ai"
  speaker: string
  langTag: string
  primary: string
  secondary: string
}
type AIEvent = EventBase & {
  kind: "ai-action"
  icon: typeof Brain
  tag: string
  value: string
  confidence?: string
}
type Event = SystemEvent | SpeechEvent | AIEvent

const EVENTS: Event[] = [
  {
    id: "ring",
    kind: "system",
    icon: PhoneIncoming,
    tone: "fuchsia",
    label: "Inbound call",
    detail: "+91 98210 ••••",
    meta: "Mumbai · 2:14 PM",
  },
  {
    id: "pickup",
    kind: "system",
    icon: Zap,
    tone: "violet",
    label: "Picked up in 0.4s",
    detail: "AI greeted in Hindi",
  },
  {
    id: "caller-1",
    kind: "speech",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "I want to book an appointment for tomorrow at 11.",
  },
  {
    id: "intent",
    kind: "ai-action",
    icon: Brain,
    tag: "Intent",
    value: "Booking",
    confidence: "98%",
  },
  {
    id: "calendar",
    kind: "ai-action",
    icon: CalendarCheck,
    tag: "Calendar",
    value: "Dr. Sharma · 11:00 free",
  },
  {
    id: "ai-1",
    kind: "speech",
    side: "ai",
    speaker: "Kedeyo AI",
    langTag: "EN",
    primary: "11 AM tomorrow with Dr. Sharma is available — shall I confirm?",
    secondary: "कल 11 बजे डॉ. शर्मा के साथ available है।",
  },
  {
    id: "caller-2",
    kind: "speech",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "हाँ, confirm कर दीजिए।",
    secondary: "Yes, please confirm.",
  },
  {
    id: "action",
    kind: "ai-action",
    icon: Send,
    tag: "Action",
    value: "book_appointment(11:00)",
  },
  {
    id: "resolved",
    kind: "system",
    icon: CheckCircle2,
    tone: "emerald",
    label: "Resolved in 23s",
    detail: "SMS + WhatsApp confirmation sent",
  },
]

const TICK = 900 // ms between event reveals
const HOLD = 2400 // ms to hold full feed before restarting

function LiveCallFeed() {
  const [seconds, setSeconds] = useState(0)
  const [revealed, setRevealed] = useState(0)

  // Live timer
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  // Progressive reveal then loop
  useEffect(() => {
    let cancelled = false
    let timeouts: ReturnType<typeof setTimeout>[] = []

    const run = () => {
      setRevealed(0)
      EVENTS.forEach((_, i) => {
        timeouts.push(
          setTimeout(() => {
            if (!cancelled) setRevealed(i + 1)
          }, (i + 1) * TICK),
        )
      })
      timeouts.push(setTimeout(run, EVENTS.length * TICK + HOLD))
    }
    run()
    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Ambient glow — pure backdrop, no surface */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.55 0.24 300 / 0.35), transparent 75%), radial-gradient(50% 50% at 80% 100%, oklch(0.55 0.24 320 / 0.22), transparent 75%)",
          filter: "blur(8px)",
        }}
      />

      {/* Header — typography only, no border, no fill */}
      <header className="flex items-baseline justify-between">
        <div className="inline-flex items-baseline gap-2">
          <span className="relative flex h-1.5 w-1.5 translate-y-[1px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300">
            Live Call
          </span>
          <span className="font-mono text-[11px] tabular-nums text-white/55">
            {mm}:{ss}
          </span>
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
          Hindi <span className="text-white/25">·</span> English
        </div>
      </header>

      {/* Title strip — what this is */}
      <div className="mt-2 flex items-baseline gap-2">
        <h2 className="text-[15px] font-semibold text-white/90">Kedeyo Receptionist</h2>
        <span className="text-[11px] text-white/45">/ inbound demo</span>
      </div>

      {/* Timeline */}
      <ol className="relative mt-6 space-y-5">
        {/* The timeline rail itself */}
        <span
          aria-hidden
          className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-fuchsia-400/0 via-fuchsia-400/30 to-emerald-400/30"
        />

        {EVENTS.map((ev, i) => {
          const isVisible = i < revealed
          const isActive = i === revealed - 1
          return (
            <li
              key={ev.id}
              className="relative pl-10 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(6px)",
              }}
            >
              {ev.kind === "system" && <SystemRow ev={ev} active={isActive} />}
              {ev.kind === "speech" && <SpeechRow ev={ev} active={isActive} />}
              {ev.kind === "ai-action" && <AIRow ev={ev} active={isActive} />}
            </li>
          )
        })}
      </ol>

      {/* Capability strip — "what just happened" footer */}
      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/10 pt-4 text-[11px] text-white/55">
        <span className="inline-flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-violet-300" />
          0.4s pickup
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Languages className="h-3.5 w-3.5 text-fuchsia-300" />
          Hi · En · Ta
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Brain className="h-3.5 w-3.5 text-pink-300" />
          Intent + sentiment
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
          Books · routes · escalates
        </span>
      </div>

      <style jsx global>{`
        @keyframes hero-marker-ping {
          0% { transform: scale(1); opacity: 0.6 }
          100% { transform: scale(2.4); opacity: 0 }
        }
        @keyframes hero-equalizer {
          0%, 100% { transform: scaleY(0.35) }
          50% { transform: scaleY(1) }
        }
        @keyframes hero-caret {
          0%, 49% { opacity: 1 }
          50%, 100% { opacity: 0 }
        }
      `}</style>
    </div>
  )
}

/* ─────────  Timeline row variants — all chrome-free  ───────── */

function Marker({
  Icon,
  tone,
  active,
}: {
  Icon: typeof PhoneIncoming
  tone: "fuchsia" | "violet" | "emerald" | "amber" | "pink"
  active: boolean
}) {
  const toneRing: Record<string, string> = {
    fuchsia: "border-fuchsia-400/60 text-fuchsia-300",
    violet: "border-violet-400/60 text-violet-300",
    emerald: "border-emerald-400/60 text-emerald-300",
    amber: "border-amber-400/60 text-amber-300",
    pink: "border-pink-400/60 text-pink-300",
  }
  const toneFill: Record<string, string> = {
    fuchsia: "bg-fuchsia-500/15",
    violet: "bg-violet-500/15",
    emerald: "bg-emerald-500/15",
    amber: "bg-amber-500/15",
    pink: "bg-pink-500/15",
  }
  return (
    <span className="absolute left-0 top-0 grid h-[30px] w-[30px] place-items-center">
      {active && (
        <span
          aria-hidden
          className={`absolute inset-0 rounded-full ${toneFill[tone]}`}
          style={{ animation: "hero-marker-ping 1.6s ease-out infinite" }}
        />
      )}
      <span
        className={`relative grid h-[30px] w-[30px] place-items-center rounded-full border ${toneRing[tone]} ${toneFill[tone]} backdrop-blur`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
    </span>
  )
}

function SystemRow({ ev, active }: { ev: SystemEvent; active: boolean }) {
  const toneText: Record<string, string> = {
    fuchsia: "text-fuchsia-200",
    violet: "text-violet-200",
    emerald: "text-emerald-200",
    amber: "text-amber-200",
  }
  return (
    <>
      <Marker Icon={ev.icon} tone={ev.tone} active={active} />
      <div className="flex items-baseline gap-2">
        <span className={`text-[13px] font-semibold ${toneText[ev.tone]}`}>{ev.label}</span>
        {ev.meta && (
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            {ev.meta}
          </span>
        )}
      </div>
      {ev.detail && <p className="mt-0.5 text-[12px] leading-relaxed text-white/60">{ev.detail}</p>}
    </>
  )
}

function SpeechRow({ ev, active }: { ev: SpeechEvent; active: boolean }) {
  const isAi = ev.side === "ai"
  const tone = isAi ? "violet" : "fuchsia"
  const accent = isAi ? "text-violet-300" : "text-fuchsia-300"
  const langPillTone = isAi
    ? "bg-violet-500/12 text-violet-200 border-violet-400/25"
    : "bg-fuchsia-500/12 text-fuchsia-200 border-fuchsia-400/25"

  return (
    <>
      {/* Avatar marker — circle with monogram, no card surface */}
      <span className="absolute left-0 top-0 grid h-[30px] w-[30px] place-items-center">
        {active && (
          <span
            aria-hidden
            className={`absolute inset-0 rounded-full ${
              isAi ? "bg-violet-500/15" : "bg-fuchsia-500/15"
            }`}
            style={{ animation: "hero-marker-ping 1.6s ease-out infinite" }}
          />
        )}
        <span
          className={`relative grid h-[30px] w-[30px] place-items-center rounded-full text-[10px] font-bold ${
            isAi
              ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
              : "border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200"
          }`}
        >
          {isAi ? "AI" : ev.speaker.slice(0, 1)}
        </span>
      </span>

      <div className="flex items-baseline gap-2">
        <span className={`text-[12px] font-semibold ${accent}`}>{ev.speaker}</span>
        <span
          className={`rounded-sm border px-1 py-px font-mono text-[9px] font-bold tracking-wider ${langPillTone}`}
        >
          {ev.langTag}
        </span>
        {active && <SpeakingDots tone={tone} />}
      </div>
      <p className="mt-1 text-[14px] font-medium leading-snug text-white/95">
        {ev.primary}
        {active && (
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/80 align-baseline"
            style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
          />
        )}
      </p>
      <p className="mt-0.5 text-[11.5px] italic leading-snug text-white/45">{ev.secondary}</p>
    </>
  )
}

function AIRow({ ev, active }: { ev: AIEvent; active: boolean }) {
  return (
    <>
      <Marker Icon={ev.icon} tone="pink" active={active} />
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
          AI · {ev.tag}
        </span>
        <span className="font-mono text-[12.5px] font-semibold text-pink-200">{ev.value}</span>
        {ev.confidence && (
          <span className="font-mono text-[10px] text-emerald-300/90">·  conf {ev.confidence}</span>
        )}
      </div>
    </>
  )
}

function SpeakingDots({ tone }: { tone: "violet" | "fuchsia" }) {
  const cls = tone === "violet" ? "bg-violet-300" : "bg-fuchsia-300"
  return (
    <span className="inline-flex items-end gap-[2px]">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`block w-[2px] rounded-full ${cls}`}
          style={{
            height: "10px",
            animation: `hero-equalizer ${600 + i * 80}ms ease-in-out ${i * 60}ms infinite`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </span>
  )
}

/* Note: the `MessageSquareText` import is reserved for future event types
 * (e.g. SMS / WhatsApp confirmation) — keeping it imported keeps the icon
 * tree-shake list complete for that capability strip. */
const _reservedIcons = { MessageSquareText }
void _reservedIcons
