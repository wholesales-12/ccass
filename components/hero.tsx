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
  CalendarCheck,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Hero — "Every Call Answered. By an AI Receptionist."
 * Right side: free-flowing live call transcript — pure typography,
 * no orb, no stage, no containers. Speaker dot + bilingual lines
 * stack vertically with the active turn lighting up.
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

          {/* RIGHT — live transcript */}
          <div className="lg:col-span-5">
            <ReceptionistTranscript />
          </div>
        </div>
      </div>

      {/* Shared keyframes */}
      <style jsx global>{`
        @keyframes hero-eq-bar {
          0%, 100% { transform: scaleY(0.35) }
          50%      { transform: scaleY(1)    }
        }
        @keyframes hero-caret {
          0%, 49%  { opacity: 1 }
          50%, 100%{ opacity: 0 }
        }
        @keyframes hero-turn-glow {
          0%, 100% { opacity: 0.55 }
          50%      { opacity: 1    }
        }
      `}</style>
    </section>
  )
}

/* ─────────────  Live Transcript (pure typography, no boxes)  ───────────── */

type Turn = {
  side: "caller" | "ai"
  speaker: string
  langTag: "HI" | "EN"
  primary: string
  secondary: string
}

const TURNS: Turn[] = [
  {
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "I want to book for tomorrow at 11.",
  },
  {
    side: "ai",
    speaker: "Kedeyo",
    langTag: "EN",
    primary: "11 AM tomorrow with Dr. Sharma is open — confirm?",
    secondary: "कल 11 बजे डॉ. शर्मा available है।",
  },
  {
    side: "caller",
    speaker: "Rahul",
    langTag: "HI",
    primary: "हाँ, confirm कर दीजिए।",
    secondary: "Yes, please confirm.",
  },
  {
    side: "ai",
    speaker: "Kedeyo",
    langTag: "EN",
    primary: "Booked. SMS + WhatsApp sent.",
    secondary: "Resolved in 23s.",
  },
]

function ReceptionistTranscript() {
  const [seconds, setSeconds] = useState(46)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % TURNS.length), 2800)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const resolved = active === TURNS.length - 1

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Status row */}
      <div className="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.22em]">
        <span className="inline-flex items-center gap-2 font-semibold text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live · {mm}:{ss}
        </span>
        <span className="text-white/45">Inbound · Mumbai · HI ⇄ EN</span>
      </div>

      {/* Identity wordmark */}
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3
          className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-300 bg-clip-text font-semibold leading-[1] tracking-tight text-transparent"
          style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.85rem)" }}
        >
          AI Receptionist
        </h3>
        <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.2em] text-white/35 sm:inline">
          Call #2,341 · today
        </span>
      </div>
      <p className="mt-1 text-[12px] leading-snug text-white/55">
        Real call, resolved in <span className="font-semibold text-white/80">23 seconds</span>.
      </p>

      {/* Transcript — speaker dot + bilingual lines, no containers */}
      <ol className="mt-6 space-y-4">
        {TURNS.map((t, i) => {
          const isActive = i === active
          const isPast = i < active
          const isAi = t.side === "ai"
          const dotColor = isAi ? "bg-violet-400" : "bg-fuchsia-400"
          const speakerColor = isAi ? "text-violet-300" : "text-fuchsia-300"

          return (
            <li
              key={i}
              className="grid grid-cols-[14px_1fr] gap-x-3 transition-opacity duration-500"
              style={{
                opacity: isActive ? 1 : isPast ? 0.55 : 0.28,
              }}
            >
              {/* Speaker dot column */}
              <div className="relative flex justify-center pt-1.5">
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${dotColor}`}
                  style={{
                    boxShadow: isActive
                      ? isAi
                        ? "0 0 0 3px rgba(167,139,250,0.18), 0 0 14px 2px rgba(167,139,250,0.5)"
                        : "0 0 0 3px rgba(244,114,182,0.18), 0 0 14px 2px rgba(244,114,182,0.5)"
                      : "none",
                  }}
                />
                {isActive && (
                  <span
                    aria-hidden
                    className={`absolute top-1.5 inline-flex h-2 w-2 animate-ping rounded-full ${dotColor} opacity-70`}
                  />
                )}
                {/* Connecting hairline to next turn */}
                {i < TURNS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-5 h-[calc(100%+8px)] w-px -translate-x-1/2 bg-white/8"
                  />
                )}
              </div>

              {/* Content column */}
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className={`font-semibold ${speakerColor}`}>{t.speaker}</span>
                  <span className="text-white/25">·</span>
                  <span className="text-white/45">{t.langTag}</span>
                  {isActive && (
                    <span className="ml-1 inline-flex items-end gap-[2px]">
                      {[0, 1, 2].map((k) => (
                        <span
                          key={k}
                          className={`block w-[2px] rounded-full ${isAi ? "bg-violet-300" : "bg-fuchsia-300"}`}
                          style={{
                            height: "8px",
                            transformOrigin: "bottom",
                            animation: `hero-eq-bar 700ms ease-in-out ${k * 90}ms infinite`,
                          }}
                        />
                      ))}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[14px] font-medium leading-snug text-white/95 sm:text-[14.5px]">
                  {t.primary}
                  {isActive && (
                    <span
                      aria-hidden
                      className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/85 align-baseline"
                      style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
                    />
                  )}
                </p>
                <p className="mt-0.5 text-[11.5px] italic leading-snug text-white/45">
                  {t.secondary}
                </p>
              </div>
            </li>
          )
        })}
      </ol>

      {/* Resolution hairline + outcome */}
      <div
        className="mt-5 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] transition-opacity duration-700"
        style={{ opacity: resolved ? 1 : 0.4 }}
      >
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
        <span className="font-semibold text-emerald-300">Booked · 11 AM</span>
        <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/50 via-emerald-400/15 to-transparent" />
        <span className="text-white/55">Conf. sent</span>
      </div>

      {/* Capability footer — pure typography row */}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
        <span className="inline-flex items-center gap-1.5">
          <Ear className="h-3 w-3 text-fuchsia-300" />
          0.4s pickup
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Brain className="h-3 w-3 text-violet-300" />
          12+ languages
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarCheck className="h-3 w-3 text-emerald-400" />
          Books · routes · resolves
        </span>
      </div>
    </div>
  )
}
