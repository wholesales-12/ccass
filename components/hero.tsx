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
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — "Every Call Answered. By an AI Receptionist."
 * Right side: a dense, no-box visualization of the AI Receptionist —
 *  - Bold "AI RECEPTIONIST" identity
 *  - Animated capability pipeline (Listen → Understand → Decide → Act → Confirm)
 *  - Live bilingual exchange with twin waveforms
 *  - Real-time intelligence readouts
 *  - Today's impact ticker
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
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
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

          {/* RIGHT — AI Receptionist visualization (no boxes) */}
          <div className="lg:col-span-5">
            <AIReceptionistConsole />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────  AI Receptionist Console  ─────────────────────
 * A dense, layered visualization that surfaces the AI Receptionist identity
 * and explains capabilities through a live capability pipeline + transcript.
 * No card backgrounds, no borders, no bubbles — pure typography + lines.
 */

const PIPELINE = [
  { id: "listen", label: "Listen", Icon: Ear },
  { id: "understand", label: "Understand", Icon: Brain },
  { id: "decide", label: "Decide", Icon: Sparkles },
  { id: "act", label: "Act", Icon: Send },
  { id: "confirm", label: "Confirm", Icon: CheckCircle2 },
] as const

type Turn = {
  id: string
  side: "caller" | "ai"
  speaker: string
  langTag: string
  primary: string
  secondary: string
  // pipeline stage that this turn corresponds to
  stage: number
  intel?: { tag: string; value: string; conf?: string }
}

const TURNS: Turn[] = [
  {
    id: "ring",
    side: "caller",
    speaker: "Inbound",
    langTag: "HI",
    primary: "📞 Ringing · +91 98210 ••••",
    secondary: "Mumbai · 2:14 PM",
    stage: 0,
    intel: { tag: "Pickup", value: "0.4s" },
  },
  {
    id: "caller-1",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "I want to book an appointment for tomorrow at 11.",
    stage: 1,
    intel: { tag: "Intent", value: "Booking", conf: "98%" },
  },
  {
    id: "ai-1",
    side: "ai",
    speaker: "Kedeyo AI",
    langTag: "EN",
    primary: "11 AM tomorrow with Dr. Sharma is available — shall I confirm?",
    secondary: "कल 11 बजे डॉ. शर्मा के साथ available है।",
    stage: 2,
    intel: { tag: "Calendar", value: "Slot found" },
  },
  {
    id: "caller-2",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "हाँ, confirm कर दीजिए।",
    secondary: "Yes, please confirm.",
    stage: 3,
    intel: { tag: "Action", value: "book_appointment(11:00)" },
  },
  {
    id: "resolved",
    side: "ai",
    speaker: "Kedeyo AI",
    langTag: "EN",
    primary: "Booked. SMS + WhatsApp confirmation sent.",
    secondary: "Resolved in 23s.",
    stage: 4,
    intel: { tag: "Outcome", value: "Resolved", conf: "23s" },
  },
]

const TICK = 1300
const HOLD = 2000

function AIReceptionistConsole() {
  const [seconds, setSeconds] = useState(0)
  const [activeTurn, setActiveTurn] = useState(-1) // -1 = idle, 0..n-1 = which turn is current

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const run = () => {
      setActiveTurn(-1)
      TURNS.forEach((_, i) => {
        timeouts.push(
          setTimeout(() => {
            if (!cancelled) setActiveTurn(i)
          }, (i + 1) * TICK),
        )
      })
      timeouts.push(setTimeout(run, TURNS.length * TICK + HOLD))
    }
    run()
    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const currentStage = activeTurn >= 0 ? TURNS[activeTurn].stage : -1
  const visibleTurns = TURNS.slice(0, Math.max(activeTurn + 1, 0))

  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Ambient backdrop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.55 0.24 300 / 0.35), transparent 75%), radial-gradient(50% 50% at 80% 100%, oklch(0.55 0.24 320 / 0.22), transparent 75%)",
          filter: "blur(12px)",
        }}
      />

      {/* ─── 1. Identity wordmark ─── */}
      <div className="flex items-end justify-between">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">
              Live · {mm}:{ss}
            </span>
          </div>
          <h2
            className="mt-1.5 font-semibold leading-none tracking-tight"
            style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.125rem)" }}
          >
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-violet-300 bg-clip-text text-transparent">
              AI Receptionist
            </span>
          </h2>
          <p className="mt-1 text-[12px] text-white/45">
            Picking up call <span className="font-mono text-white/70">#2,341</span> today
          </p>
        </div>
        <div className="text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
          <div>v2.4 · Mumbai</div>
          <div className="mt-1 text-fuchsia-300">HI ⇄ EN</div>
        </div>
      </div>

      {/* ─── 2. Capability pipeline ─── */}
      <div className="mt-7">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.22em] text-white/40">
            Capabilities running
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/30">
            real-time
          </span>
        </div>
        <Pipeline currentStage={currentStage} />
      </div>

      {/* ─── 3. Live exchange ─── */}
      <div className="mt-7">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.22em] text-white/40">
            Live exchange
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-emerald-300/80">
            Streaming
          </span>
        </div>
        <ol className="space-y-3.5">
          {visibleTurns.map((t, i) => (
            <TurnRow key={t.id} turn={t} active={i === visibleTurns.length - 1} />
          ))}
          {visibleTurns.length === 0 && (
            <li className="text-[12px] text-white/40">Waiting for inbound call…</li>
          )}
        </ol>
      </div>

      {/* ─── 4. Today's impact ticker ─── */}
      <div className="mt-7 border-t border-white/10 pt-4">
        <div className="mb-1.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.22em] text-white/40">
          Today
        </div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 text-[12px]">
          <span className="text-white/85">
            <span className="font-mono font-semibold text-fuchsia-300">2,341</span>{" "}
            <span className="text-white/50">answered</span>
          </span>
          <span className="text-white/85">
            <span className="font-mono font-semibold text-violet-300">412</span>{" "}
            <span className="text-white/50">booked</span>
          </span>
          <span className="text-white/85">
            <span className="font-mono font-semibold text-pink-300">196</span>{" "}
            <span className="text-white/50">qualified</span>
          </span>
          <span className="text-white/85">
            <span className="font-mono font-semibold text-emerald-300">0</span>{" "}
            <span className="text-white/50">missed</span>
          </span>
        </div>
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
        @keyframes hero-line-flow {
          0% { background-position: 0% 50% }
          100% { background-position: 200% 50% }
        }
      `}</style>
    </div>
  )
}

/* ─── Capability pipeline ─── */

function Pipeline({ currentStage }: { currentStage: number }) {
  return (
    <div className="relative">
      {/* Track */}
      <div className="absolute left-3 right-3 top-[15px] h-px bg-white/10" />
      {/* Active fill */}
      <div
        aria-hidden
        className="absolute left-3 top-[15px] h-px transition-all duration-700 ease-out"
        style={{
          width:
            currentStage < 0
              ? "0%"
              : `calc(${(currentStage / (PIPELINE.length - 1)) * 100}% * (100% - 24px) / 100%)`,
          background:
            "linear-gradient(90deg, oklch(0.65 0.25 320), oklch(0.7 0.22 295), oklch(0.75 0.2 200))",
          backgroundSize: "200% 100%",
          animation: "hero-line-flow 3s linear infinite",
        }}
      />
      <ol className="relative grid grid-cols-5 gap-1">
        {PIPELINE.map((p, i) => {
          const Icon = p.Icon
          const reached = currentStage >= i
          const isActive = currentStage === i
          return (
            <li key={p.id} className="flex flex-col items-center text-center">
              <span
                className={`relative grid h-[30px] w-[30px] place-items-center rounded-full border transition-all ${
                  reached
                    ? "border-fuchsia-400/60 bg-fuchsia-500/15 text-fuchsia-200"
                    : "border-white/10 bg-white/[0.02] text-white/35"
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-fuchsia-500/20"
                    style={{ animation: "hero-marker-ping 1.6s ease-out infinite" }}
                  />
                )}
                <Icon className="relative h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
              <span
                className={`mt-2 text-[10px] font-semibold tracking-wide transition-colors ${
                  reached ? "text-white/85" : "text-white/30"
                }`}
              >
                {p.label}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/* ─── Single turn row ─── */

function TurnRow({ turn, active }: { turn: Turn; active: boolean }) {
  const isAi = turn.side === "ai"
  const accent = isAi ? "text-violet-300" : "text-fuchsia-300"
  const langPill = isAi
    ? "bg-violet-500/12 text-violet-200 border-violet-400/25"
    : "bg-fuchsia-500/12 text-fuchsia-200 border-fuchsia-400/25"
  const monogramCls = isAi
    ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
    : "border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200"

  return (
    <li className="relative pl-9">
      {/* Avatar marker */}
      <span className="absolute left-0 top-0 grid h-[26px] w-[26px] place-items-center">
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
          className={`relative grid h-[26px] w-[26px] place-items-center rounded-full text-[10px] font-bold ${monogramCls}`}
        >
          {isAi ? "AI" : turn.speaker.slice(0, 1)}
        </span>
      </span>

      {/* Header line */}
      <div className="flex items-baseline gap-2">
        <span className={`text-[12px] font-semibold ${accent}`}>{turn.speaker}</span>
        <span
          className={`rounded-sm border px-1 py-px font-mono text-[9px] font-bold tracking-wider ${langPill}`}
        >
          {turn.langTag}
        </span>
        {active && <SpeakingDots tone={isAi ? "violet" : "fuchsia"} />}
        {turn.intel && (
          <span className="ml-auto inline-flex items-baseline gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/45">
            <span className="text-white/35">{turn.intel.tag}</span>
            <span className="text-pink-200">{turn.intel.value}</span>
            {turn.intel.conf && <span className="text-emerald-300/85">· {turn.intel.conf}</span>}
          </span>
        )}
      </div>

      {/* Speech */}
      <p className="mt-1 text-[13.5px] font-medium leading-snug text-white/95">
        {turn.primary}
        {active && (
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/80 align-baseline"
            style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
          />
        )}
      </p>
      <p className="mt-0.5 text-[11px] italic leading-snug text-white/45">{turn.secondary}</p>
    </li>
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
