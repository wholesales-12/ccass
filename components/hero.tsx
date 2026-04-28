"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Activity,
  MapPin,
  PhoneOutgoing,
  MessageSquare,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Hero — "Every Call Answered. By an AI Receptionist."
 *
 * Right side: a premium product showcase featuring the AI Receptionist
 * as the centerpiece — a pulsing gradient orb with a 24-bar radial
 * waveform, four orbiting capability tags, an oversized rotating live
 * caption, KPI line, and an inline secondary-feature teaser
 * ("Outbound Voice AI · WhatsApp AI"). No card containers anywhere.
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

          {/* RIGHT — premium AI Receptionist showcase */}
          <div className="lg:col-span-5">
            <ReceptionistShowcase />
          </div>
        </div>
      </div>

      {/* Shared keyframes */}
      <style jsx global>{`
        @keyframes hero-orb-pulse {
          0%, 100% { transform: scale(1);    opacity: 1   }
          50%      { transform: scale(1.06); opacity: 0.92 }
        }
        @keyframes hero-ripple {
          0%   { transform: scale(0.6); opacity: 0.55 }
          100% { transform: scale(1.7); opacity: 0    }
        }
        @keyframes hero-bar {
          0%, 100% { transform: scaleY(0.30) }
          50%      { transform: scaleY(1)    }
        }
        @keyframes hero-caret {
          0%, 49%  { opacity: 1 }
          50%, 100%{ opacity: 0 }
        }
        @keyframes hero-caption-in {
          0%   { opacity: 0; transform: translateY(8px) }
          100% { opacity: 1; transform: translateY(0)   }
        }
        @keyframes hero-tag-float {
          0%, 100% { transform: translateY(0)    }
          50%      { transform: translateY(-4px) }
        }
      `}</style>
    </section>
  )
}

/* ─────────────  AI Receptionist Showcase (no boxes)  ───────────── */

type Scene = {
  caller: string
  city: string
  langTag: "HI" | "EN"
  intent: string
  primary: string
  secondary: string
  outcome: string
}

const SCENES: Scene[] = [
  {
    caller: "Rahul",
    city: "Mumbai",
    langTag: "HI",
    intent: "Booking · Dental",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "I want to book an appointment for tomorrow at 11.",
    outcome: "Booked · 11 AM with Dr. Sharma",
  },
  {
    caller: "Priya",
    city: "Bengaluru",
    langTag: "EN",
    intent: "Lead · Real Estate",
    primary: "Looking for a 2BHK in Whitefield, ready to move.",
    secondary: "Hot lead — qualified and routed to owner.",
    outcome: "Routed · Sales · 12s",
  },
  {
    caller: "Aman",
    city: "Delhi",
    langTag: "HI",
    intent: "Support · D2C",
    primary: "Order #4821 का status क्या है?",
    secondary: "What is the status of my order?",
    outcome: "Resolved · Order shipped today",
  },
]

function ReceptionistShowcase() {
  const [seconds, setSeconds] = useState(46)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % SCENES.length), 4400)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const scene = SCENES[active]

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Top status row */}
      <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em]">
        <span className="inline-flex items-center gap-2 font-semibold text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live · {mm}:{ss}
        </span>
        <span className="text-white/45">Call #2,341 · today</span>
      </div>

      {/* Identity */}
      <div className="mt-3">
        <h3
          className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-300 bg-clip-text font-semibold leading-[1] tracking-tight text-transparent"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}
        >
          AI Receptionist
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-snug text-white/55">
          Picks up in <span className="font-semibold text-white/85">0.4s</span> · Speaks{" "}
          <span className="font-semibold text-white/85">12+ Indian languages</span> · Books, qualifies, routes.
        </p>
      </div>

      {/* Centerpiece — pulsing orb + radial waveform + 4 orbiting tags */}
      <div className="relative mx-auto mt-5 flex h-[260px] w-full items-center justify-center sm:h-[280px]">
        {/* Soft glow halo behind orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(244,114,182,0.45) 0%, rgba(167,139,250,0.30) 40%, transparent 75%)",
          }}
        />

        {/* Concentric ripples */}
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden
            className="pointer-events-none absolute h-[140px] w-[140px] rounded-full border border-fuchsia-400/40"
            style={{
              animation: `hero-ripple 3.6s ease-out ${i * 1.2}s infinite`,
            }}
          />
        ))}

        {/* Radial 24-bar waveform */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2"
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * 360
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: 3,
                  height: `${10 + ((i * 5) % 14)}px`,
                  background: i % 2 === 0
                    ? "linear-gradient(to top, rgba(232,121,249,0.15), rgba(244,114,182,0.95))"
                    : "linear-gradient(to top, rgba(167,139,250,0.15), rgba(196,181,253,0.95))",
                  transformOrigin: "50% 100%",
                  transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-60px)`,
                  animation: `hero-bar 1.4s ease-in-out ${(i * 60) % 1400}ms infinite`,
                  borderRadius: 2,
                }}
              />
            )
          })}
        </div>

        {/* Central orb */}
        <div
          className="relative z-10 flex h-[124px] w-[124px] items-center justify-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95), rgba(244,114,182,0.85) 30%, rgba(167,139,250,0.85) 60%, rgba(120,57,177,0.95) 100%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.18), 0 24px 70px -10px rgba(167,139,250,0.55), inset 0 0 30px rgba(255,255,255,0.18)",
            animation: "hero-orb-pulse 2.6s ease-in-out infinite",
          }}
        >
          {/* Inner highlight */}
          <span
            aria-hidden
            className="absolute left-[18%] top-[14%] h-6 w-6 rounded-full bg-white/55 blur-md"
          />
          {/* Orb label */}
          <div className="relative text-center">
            <div className="font-mono text-[8.5px] font-bold uppercase tracking-[0.28em] text-white/90">
              Kedeyo
            </div>
            <div className="mt-0.5 text-[11px] font-semibold tracking-tight text-white drop-shadow">
              AI Voice
            </div>
            {/* Mini live equalizer */}
            <div className="mt-1 inline-flex items-end gap-[2px]">
              {[0, 1, 2, 3].map((k) => (
                <span
                  key={k}
                  className="block w-[2px] rounded-full bg-white"
                  style={{
                    height: 8,
                    transformOrigin: "bottom",
                    animation: `hero-bar 700ms ease-in-out ${k * 90}ms infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Orbiting capability tags — pure typography on dark bg */}
        <FloatingTag position="top-2 left-0" delay="0s" color="text-fuchsia-200">
          Hindi · English · Tamil
        </FloatingTag>
        <FloatingTag position="top-6 right-0" delay="0.6s" color="text-violet-200">
          Books appointments
        </FloatingTag>
        <FloatingTag position="bottom-6 left-2" delay="1.2s" color="text-emerald-200">
          Routes hot leads
        </FloatingTag>
        <FloatingTag position="bottom-2 right-2" delay="1.8s" color="text-pink-200">
          Qualifies callers
        </FloatingTag>
      </div>

      {/* Live caption — caller meta + bilingual speech, freeform typography */}
      <div key={active} style={{ animation: "hero-caption-in 460ms ease-out both" }}>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.2em]">
          <span className="font-semibold text-fuchsia-300">{scene.caller}</span>
          <span className="text-white/30">·</span>
          <span className="text-white/55">{scene.city}</span>
          <span className="text-white/30">·</span>
          <span className="rounded-sm bg-fuchsia-500/12 px-1.5 py-0.5 text-fuchsia-200">
            {scene.langTag}
          </span>
          <span className="text-white/30">·</span>
          <span className="text-violet-200">{scene.intent}</span>
        </div>
        <p className="mt-2 text-pretty text-[16px] font-semibold leading-snug text-white sm:text-[17px]">
          {scene.primary}
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/85 align-baseline"
            style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
          />
        </p>
        <p className="mt-1 text-[12px] italic leading-snug text-white/45">{scene.secondary}</p>
      </div>

      {/* Outcome rule */}
      <div className="mt-4 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em]">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
        <span key={`o-${active}`} className="font-semibold text-emerald-300" style={{ animation: "hero-caption-in 460ms ease-out both" }}>
          {scene.outcome}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/50 via-emerald-400/15 to-transparent" />
      </div>

      {/* Secondary feature teaser — inline, no box */}
      <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.22em] text-white/45">
          Also part of Kedeyo
        </span>
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] text-white/75">
          <Link
            href="/features/voice-bot"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <PhoneOutgoing className="h-3.5 w-3.5 text-violet-300" />
            <span className="font-semibold">Outbound Voice AI</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/features/whatsapp"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MessageSquare className="h-3.5 w-3.5 text-emerald-300" />
            <span className="font-semibold">WhatsApp AI</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function FloatingTag({
  children,
  position,
  delay,
  color,
}: {
  children: React.ReactNode
  position: string
  delay: string
  color: string
}) {
  return (
    <div
      className={`absolute ${position} z-20 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] ${color}`}
      style={{ animation: `hero-tag-float 4s ease-in-out ${delay} infinite` }}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {children}
    </div>
  )
}
