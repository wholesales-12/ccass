"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Activity,
  MapPin,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — "Every Call Answered. By an AI Receptionist."
 * Right side: a focused, breathing live-call visualization. No boxes.
 * Just an identity wordmark + a single rolling 2-turn conversation window
 * with an animated spotlight waveform on the active speaker.
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

          {/* RIGHT — focused live call visualization */}
          <div className="lg:col-span-5">
            <AIReceptionistConsole />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────  AI Receptionist Console  ─────────────────────
 * Identity wordmark + rolling 2-turn conversation spotlight.
 * No card chrome. Plenty of breathing room.
 */

type Turn = {
  id: string
  side: "caller" | "ai"
  speaker: string
  langTag: string
  primary: string
  secondary: string
  intel: { tag: string; value: string; conf?: string }
}

const TURNS: Turn[] = [
  {
    id: "caller-1",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "I want to book an appointment for tomorrow at 11.",
    intel: { tag: "Intent", value: "Booking", conf: "98%" },
  },
  {
    id: "ai-1",
    side: "ai",
    speaker: "Kedeyo AI",
    langTag: "EN",
    primary: "11 AM tomorrow with Dr. Sharma is available — shall I confirm?",
    secondary: "कल 11 बजे डॉ. शर्मा के साथ available है।",
    intel: { tag: "Calendar", value: "Slot found" },
  },
  {
    id: "caller-2",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "हाँ, confirm कर दीजिए।",
    secondary: "Yes, please confirm.",
    intel: { tag: "Action", value: "book(11:00)" },
  },
  {
    id: "ai-2",
    side: "ai",
    speaker: "Kedeyo AI",
    langTag: "EN",
    primary: "Booked. SMS + WhatsApp confirmation sent.",
    secondary: "Resolved in 23s.",
    intel: { tag: "Outcome", value: "Resolved" },
  },
]

const TICK = 2400

function AIReceptionistConsole() {
  const [seconds, setSeconds] = useState(14)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % TURNS.length)
    }, TICK)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  const previous = (active - 1 + TURNS.length) % TURNS.length
  const next = (active + 1) % TURNS.length
  const current = TURNS[active]
  const prevTurn = TURNS[previous]
  const nextTurn = TURNS[next]

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Ambient backdrop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.55 0.24 300 / 0.35), transparent 75%), radial-gradient(50% 60% at 80% 100%, oklch(0.55 0.24 320 / 0.22), transparent 75%)",
          filter: "blur(12px)",
        }}
      />

      {/* ── Identity wordmark ── */}
      <div className="flex items-end justify-between">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">
              Live · {mm}:{ss}
            </span>
          </div>
          <h2
            className="mt-2 font-semibold leading-none tracking-tight"
            style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.125rem)" }}
          >
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-violet-300 bg-clip-text text-transparent">
              AI Receptionist
            </span>
          </h2>
          <p className="mt-1.5 inline-flex items-center gap-2 text-[11.5px] text-white/55">
            <Sparkles className="h-3 w-3 text-fuchsia-300" />
            Picking up call <span className="font-mono text-white/80">#2,341</span> · Mumbai · HI ⇄ EN
          </p>
        </div>
      </div>

      {/* ── Spotlight: previous (small, dim) ── */}
      <div className="mt-10">
        <MiniTurn turn={prevTurn} />

        {/* Active turn — large, bright */}
        <div className="my-5">
          <ActiveTurn turn={current} />
        </div>

        {/* Next turn (small, dim, italic preview) */}
        <MiniTurn turn={nextTurn} dimmer />
      </div>

      <style jsx global>{`
        @keyframes hero-marker-ping {
          0% { transform: scale(1); opacity: 0.55 }
          100% { transform: scale(2.4); opacity: 0 }
        }
        @keyframes hero-eq {
          0%, 100% { transform: scaleY(0.3) }
          50% { transform: scaleY(1) }
        }
        @keyframes hero-caret {
          0%, 49% { opacity: 1 }
          50%, 100% { opacity: 0 }
        }
        @keyframes hero-spotlight-fade {
          from { opacity: 0; transform: translateY(6px) }
          to   { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </div>
  )
}

/* ── Active turn (spotlight) ── */
function ActiveTurn({ turn }: { turn: Turn }) {
  const isAi = turn.side === "ai"
  const langPill = isAi
    ? "bg-violet-500/15 text-violet-200 border-violet-400/30"
    : "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30"
  const monogramCls = isAi
    ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
    : "border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200"
  const accent = isAi ? "text-violet-300" : "text-fuchsia-300"
  const eqTone = isAi ? "violet" : "fuchsia"

  return (
    <div
      key={turn.id}
      className="relative pl-12"
      style={{ animation: "hero-spotlight-fade 500ms ease-out" }}
    >
      {/* Left accent rail */}
      <span
        aria-hidden
        className="absolute left-[14px] top-1.5 bottom-1.5 w-px"
        style={{
          background: isAi
            ? "linear-gradient(to bottom, transparent, oklch(0.7 0.22 295), transparent)"
            : "linear-gradient(to bottom, transparent, oklch(0.7 0.22 320), transparent)",
        }}
      />

      {/* Avatar marker */}
      <span className="absolute left-0 top-0 grid h-[30px] w-[30px] place-items-center">
        <span
          aria-hidden
          className={`absolute inset-0 rounded-full ${
            isAi ? "bg-violet-500/15" : "bg-fuchsia-500/15"
          }`}
          style={{ animation: "hero-marker-ping 1.6s ease-out infinite" }}
        />
        <span
          className={`relative grid h-[30px] w-[30px] place-items-center rounded-full text-[11px] font-bold ${monogramCls}`}
        >
          {isAi ? "AI" : turn.speaker.slice(0, 1)}
        </span>
      </span>

      {/* Header */}
      <div className="flex items-center gap-2">
        <span className={`text-[13px] font-semibold ${accent}`}>{turn.speaker}</span>
        <span
          className={`rounded-sm border px-1 py-px font-mono text-[9px] font-bold tracking-wider ${langPill}`}
        >
          {turn.langTag}
        </span>
        <SpeakingDots tone={eqTone} />
        <span className="ml-auto inline-flex items-baseline gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
          <span className="text-white/35">{turn.intel.tag}</span>
          <span className="text-pink-200">{turn.intel.value}</span>
          {turn.intel.conf && <span className="text-emerald-300/85">· {turn.intel.conf}</span>}
        </span>
      </div>

      {/* Speech — oversized */}
      <p className="mt-1.5 text-[16.5px] font-semibold leading-snug tracking-tight text-white">
        {turn.primary}
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/85 align-baseline"
          style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
        />
      </p>
      <p className="mt-1 text-[12px] italic leading-snug text-white/55">{turn.secondary}</p>
    </div>
  )
}

/* ── Compressed previous/next preview ── */
function MiniTurn({ turn, dimmer }: { turn: Turn; dimmer?: boolean }) {
  const isAi = turn.side === "ai"
  const accent = isAi ? "text-violet-300/70" : "text-fuchsia-300/70"
  return (
    <div
      className={`flex items-center gap-3 pl-12 ${dimmer ? "opacity-40" : "opacity-55"}`}
    >
      <span
        className={`text-[10.5px] font-semibold uppercase tracking-[0.16em] ${accent}`}
      >
        {turn.speaker}
      </span>
      <span aria-hidden className="h-px flex-1 bg-white/10" />
      <p className="max-w-[60%] truncate text-[11.5px] text-white/55">
        {dimmer ? `→ ${turn.primary}` : turn.primary}
      </p>
    </div>
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
            animation: `hero-eq ${600 + i * 80}ms ease-in-out ${i * 60}ms infinite`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </span>
  )
}
