"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Activity,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — "Every Call Answered. By an AI Receptionist."
 * Right side: a "conversation thread on a wire" visualization.
 * A single luminous vertical line; caller turns left, AI turns right.
 * No card chrome, no boxes, no bubbles.
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

          {/* RIGHT — conversation thread on a wire */}
          <div className="lg:col-span-5">
            <ConversationThread />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────  Conversation Thread on a Wire  ───────────────── */

type Turn = {
  id: string
  side: "caller" | "ai"
  speaker: string
  langTag: string
  primary: string
  secondary: string
}

const TURNS: Turn[] = [
  {
    id: "t1",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "I want to book for tomorrow at 11.",
  },
  {
    id: "t2",
    side: "ai",
    speaker: "AI",
    langTag: "EN",
    primary: "11 AM tomorrow with Dr. Sharma is open — confirm?",
    secondary: "कल 11 बजे डॉ. शर्मा available है।",
  },
  {
    id: "t3",
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "हाँ, confirm कर दीजिए।",
    secondary: "Yes please.",
  },
  {
    id: "t4",
    side: "ai",
    speaker: "AI",
    langTag: "EN",
    primary: "Booked. SMS + WhatsApp sent.",
    secondary: "Resolved in 23s.",
  },
]

const TICK_MS = 1800

function ConversationThread() {
  const [seconds, setSeconds] = useState(14)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % (TURNS.length + 1))
    }, TICK_MS)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const resolved = active >= TURNS.length

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Soft ambient backdrop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.55 0.24 300 / 0.32), transparent 75%), radial-gradient(50% 60% at 80% 100%, oklch(0.55 0.24 320 / 0.20), transparent 75%)",
          filter: "blur(12px)",
        }}
      />

      {/* ── Identity wordmark ── */}
      <div className="text-center">
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
          style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)" }}
        >
          <span className="bg-gradient-to-r from-white via-fuchsia-200 to-violet-300 bg-clip-text text-transparent">
            AI Receptionist
          </span>
        </h2>
        <p className="mt-2 text-[11.5px] text-white/55">
          <span className="font-mono text-white/80">Call #2,341</span> · Mumbai · HI ⇄ EN · Inbound
        </p>
      </div>

      {/* ── Thread ── */}
      <div className="relative mt-10 pb-12">
        {/* Vertical wire */}
        <span
          aria-hidden
          className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(232,121,249,0.35) 12%, rgba(167,139,250,0.5) 50%, rgba(232,121,249,0.35) 88%, transparent 100%)",
          }}
        />
        {/* Traveling pulse on the wire */}
        <span
          aria-hidden
          className="absolute left-1/2 h-12 w-px -translate-x-1/2 rounded-full"
          style={{
            top: 0,
            background: "linear-gradient(to bottom, transparent, #f0abfc, transparent)",
            animation: "hero-thread-pulse 4.2s ease-in-out infinite",
            opacity: 0.9,
          }}
        />

        <ol className="relative space-y-5">
          {TURNS.map((t, i) => {
            const isActive = i === active
            const isPast = i < active
            return (
              <ThreadTurn
                key={t.id}
                turn={t}
                active={isActive}
                past={isPast}
              />
            )
          })}
        </ol>

        {/* ── Resolved outcome ── */}
        <div
          className={`mt-7 flex items-center justify-center transition-all duration-500 ${
            resolved ? "opacity-100 translate-y-0" : "opacity-50 translate-y-1"
          }`}
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300/80">
            ●  Booked · 11 AM · Confirmation sent
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes hero-thread-pulse {
          0%   { top: -8%; opacity: 0 }
          15%  { opacity: 0.95 }
          85%  { opacity: 0.95 }
          100% { top: 100%; opacity: 0 }
        }
        @keyframes hero-thread-dot {
          0%   { transform: scale(1); opacity: 0.9 }
          100% { transform: scale(2.6); opacity: 0 }
        }
        @keyframes hero-thread-eq {
          0%, 100% { transform: scaleY(0.3) }
          50%      { transform: scaleY(1) }
        }
        @keyframes hero-thread-caret {
          0%, 49%   { opacity: 1 }
          50%, 100% { opacity: 0 }
        }
      `}</style>
    </div>
  )
}

function ThreadTurn({
  turn,
  active,
  past,
}: {
  turn: Turn
  active: boolean
  past: boolean
}) {
  const isAi = turn.side === "ai"

  // Side alignment: caller → left, AI → right
  const sideCls = isAi
    ? "ml-auto pl-7 pr-0 text-left"
    : "mr-auto pr-7 pl-0 text-right"

  const accent = isAi ? "text-violet-300" : "text-fuchsia-300"
  const eqTone = isAi ? "violet" : "fuchsia"
  const dotInner = isAi ? "bg-violet-400" : "bg-fuchsia-400"
  const dotPing = isAi ? "bg-violet-400/60" : "bg-fuchsia-400/60"

  // Faded when not active and not past
  const opacity = active ? 1 : past ? 0.45 : 0.22

  return (
    <li
      className="relative grid grid-cols-2 transition-opacity duration-500"
      style={{ opacity }}
    >
      {/* Dot anchor on the wire */}
      <span className="absolute left-1/2 top-2.5 -translate-x-1/2">
        <span className="relative grid h-3 w-3 place-items-center">
          {active && (
            <span
              aria-hidden
              className={`absolute inset-0 rounded-full ${dotPing}`}
              style={{ animation: "hero-thread-dot 1.4s ease-out infinite" }}
            />
          )}
          <span
            className={`relative h-2 w-2 rounded-full ${dotInner}`}
            style={{
              boxShadow: active
                ? isAi
                  ? "0 0 0 2px rgba(167,139,250,0.25), 0 0 12px rgba(167,139,250,0.6)"
                  : "0 0 0 2px rgba(232,121,249,0.25), 0 0 12px rgba(232,121,249,0.6)"
                : "0 0 0 2px rgba(255,255,255,0.06)",
            }}
          />
        </span>
      </span>

      {/* Spacer for opposite side */}
      {isAi ? <span aria-hidden /> : null}

      {/* Content side */}
      <div className={sideCls}>
        <div
          className={`flex items-center gap-1.5 ${
            isAi ? "" : "flex-row-reverse"
          }`}
        >
          <span className={`text-[11px] font-bold uppercase tracking-[0.16em] ${accent}`}>
            {turn.speaker}
          </span>
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-white/35">
            · {turn.langTag}
          </span>
          {active && <SpeakingDots tone={eqTone} />}
        </div>

        <p className="mt-1 text-[14px] font-semibold leading-snug tracking-tight text-white">
          {turn.primary}
          {active && (
            <span
              aria-hidden
              className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/85 align-baseline"
              style={{ animation: "hero-thread-caret 0.9s steps(1) infinite" }}
            />
          )}
        </p>
        <p className="mt-0.5 text-[10.5px] italic leading-snug text-white/45">
          {turn.secondary}
        </p>
      </div>

      {/* Right-side spacer for caller */}
      {!isAi ? <span aria-hidden /> : null}
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
            height: "9px",
            animation: `hero-thread-eq ${600 + i * 80}ms ease-in-out ${i * 60}ms infinite`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </span>
  )
}
