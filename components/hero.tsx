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
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — "Every Call Answered. By an AI Receptionist."
 * - H1 forced to exactly two lines on >= sm.
 * - Right side: an OPEN, free-floating real-time conversation
 *   (no surrounding card) — orb + waveform + floating bubbles + chips.
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
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
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

          {/* RIGHT — open, free-flowing live conversation (no card) */}
          <div className="lg:col-span-5">
            <OpenConversation />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────  Open Conversation (no surrounding card) ──────────────────
 * A free-floating, real-time conversation visual:
 *  - Center AI orb with concentric pulse rings + radial waveform
 *  - Floating chat bubbles for caller & AI (no card chrome)
 *  - Floating intent / language / latency chips
 *  - Booked confirmation pops in at end of each cycle
 */

const STEP_DURATION = 2400 // ms per step
const STEPS = ["caller", "ai", "booked"] as const
type Step = (typeof STEPS)[number]

function OpenConversation() {
  const [seconds, setSeconds] = useState(42)
  const [step, setStep] = useState<Step>("caller")

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setStep((cur) => {
        const idx = STEPS.indexOf(cur)
        return STEPS[(idx + 1) % STEPS.length]
      })
    }, STEP_DURATION)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const callerSpeaking = step === "caller"
  const aiSpeaking = step === "ai"
  const booked = step === "booked"

  return (
    <div
      className="relative mx-auto h-[480px] w-full max-w-[480px] sm:h-[520px]"
      role="img"
      aria-label="Live AI receptionist conversation"
    >
      {/* Status strip — small, no box */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between text-[11px]">
        <span className="inline-flex items-center gap-2 font-semibold text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          LIVE · {mm}:{ss}
        </span>
        <span className="font-medium text-white/45">Inbound · +91 98210 ••••</span>
      </div>

      {/* Center AI orb */}
      <AiOrb speaking={aiSpeaking} listening={callerSpeaking} done={booked} />

      {/* Caller bubble — top-left */}
      <FloatingBubble
        position="top-left"
        active={callerSpeaking}
        side="caller"
        avatar="R"
        name="Rahul"
        meta="Speaking · Hindi"
        primary="मुझे कल 11 बजे appointment book करनी है।"
        secondary="I want to book an appointment for tomorrow at 11."
      />

      {/* AI bubble — bottom-right */}
      <FloatingBubble
        position="bottom-right"
        active={aiSpeaking}
        side="ai"
        avatar="AI"
        name="Kedeyo AI"
        meta="Replying · English"
        primary="Sure Rahul — 11 AM tomorrow with Dr. Sharma is available."
        secondary="कल 11 बजे डॉ. शर्मा के साथ available है।"
      />

      {/* Floating chips */}
      <FloatingChip
        position="top-right"
        icon={<Sparkles className="h-3 w-3" />}
        label="Intent"
        value="Booking"
        tone="violet"
        active={callerSpeaking || aiSpeaking}
      />
      <FloatingChip
        position="bottom-left"
        icon={<Languages className="h-3 w-3" />}
        label="Language"
        value="HI ⇄ EN"
        tone="fuchsia"
        active
      />

      {/* Booked confirmation — center bottom */}
      <div
        className={`absolute bottom-0 left-1/2 w-[260px] -translate-x-1/2 transition-all duration-500 ${
          booked ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2.5 text-[12px] font-semibold text-emerald-200 shadow-[0_8px_32px_-8px_rgba(16,185,129,0.4)] backdrop-blur">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/20 text-emerald-300">
            <CalendarCheck className="h-3.5 w-3.5" />
          </span>
          <div className="leading-tight">
            <div>Appointment booked</div>
            <div className="text-[10px] font-medium text-emerald-300/70">SMS + WhatsApp sent</div>
          </div>
          <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-300" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes hero-orb-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6 }
          50% { transform: scale(1.08); opacity: 1 }
        }
        @keyframes hero-orb-ring {
          0% { transform: scale(0.6); opacity: 0.7 }
          100% { transform: scale(2.2); opacity: 0 }
        }
        @keyframes hero-wave-bar {
          0%, 100% { transform: scaleY(0.35) }
          50% { transform: scaleY(1) }
        }
        @keyframes hero-bubble-in {
          0% { transform: translateY(8px) scale(0.97); opacity: 0 }
          15% { opacity: 1 }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }
        @keyframes hero-bubble-idle {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-3px) }
        }
      `}</style>
    </div>
  )
}

/* ─────────────  AI Orb (center)  ───────────── */

function AiOrb({
  speaking,
  listening,
  done,
}: {
  speaking: boolean
  listening: boolean
  done: boolean
}) {
  // 24 bars arranged in a circle around the orb
  const bars = Array.from({ length: 24 })
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-44 w-44">
        {/* Outer expanding rings (only when AI is talking/listening) */}
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden
            className="absolute inset-0 rounded-full border border-fuchsia-400/30"
            style={{
              animation: `hero-orb-ring 2.6s ease-out ${i * 0.7}s infinite`,
              opacity: done ? 0.15 : 0.6,
            }}
          />
        ))}

        {/* Radial waveform around the orb */}
        <div className="absolute inset-0">
          {bars.map((_, i) => {
            const angle = (i / bars.length) * 360
            const active = speaking || listening
            const base = 6
            const amp = active ? 8 + ((i * 7) % 14) : 4
            return (
              <span
                key={i}
                aria-hidden
                className="absolute left-1/2 top-1/2 block w-[2.5px] origin-bottom rounded-full"
                style={{
                  height: `${base + amp}px`,
                  background:
                    listening
                      ? "linear-gradient(to top, rgba(232,121,249,0.2), rgba(244,114,182,1))"
                      : speaking
                        ? "linear-gradient(to top, rgba(167,139,250,0.2), rgba(196,181,253,1))"
                        : "linear-gradient(to top, rgba(255,255,255,0.05), rgba(255,255,255,0.4))",
                  transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-78px)`,
                  transformOrigin: "bottom center",
                  animation: active
                    ? `hero-wave-bar ${700 + (i % 5) * 90}ms ease-in-out ${i * 25}ms infinite`
                    : undefined,
                  opacity: active ? 1 : 0.45,
                }}
              />
            )
          })}
        </div>

        {/* Inner orb */}
        <div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, oklch(0.85 0.15 320), oklch(0.55 0.25 295) 55%, oklch(0.32 0.2 290) 100%)",
            boxShadow:
              "0 0 60px 12px rgba(217,70,239,0.35), inset 0 0 30px rgba(255,255,255,0.15)",
            animation: "hero-orb-pulse 2.6s ease-in-out infinite",
          }}
        />

        {/* Center label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Kedeyo AI
          </div>
          <div className="mt-0.5 text-[10px] font-medium text-white/55">
            {listening ? "Listening…" : speaking ? "Replying…" : done ? "Resolved" : "Idle"}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────  Floating Bubble  ───────────── */

function FloatingBubble({
  position,
  active,
  side,
  avatar,
  name,
  meta,
  primary,
  secondary,
}: {
  position: "top-left" | "bottom-right"
  active: boolean
  side: "caller" | "ai"
  avatar: string
  name: string
  meta: string
  primary: string
  secondary: string
}) {
  const positionCls =
    position === "top-left"
      ? "top-10 left-0 sm:left-2 max-w-[260px]"
      : "bottom-16 right-0 sm:right-2 max-w-[280px]"
  const tone =
    side === "caller"
      ? "border-fuchsia-400/30 bg-fuchsia-500/[0.08]"
      : "border-violet-400/30 bg-violet-500/[0.08]"
  const avatarTone =
    side === "caller"
      ? "bg-fuchsia-500/25 text-fuchsia-200"
      : "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
  const dotTone = side === "caller" ? "bg-fuchsia-400" : "bg-violet-400"

  return (
    <div
      className={`absolute ${positionCls} transition-all duration-500 ${
        active ? "scale-100 opacity-100" : "scale-[0.96] opacity-50"
      }`}
      style={{
        animation: active
          ? "hero-bubble-in 420ms ease-out, hero-bubble-idle 4s ease-in-out infinite 420ms"
          : undefined,
      }}
    >
      <div
        className={`rounded-2xl border ${tone} px-3.5 py-2.5 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`grid h-7 w-7 place-items-center rounded-lg text-[11px] font-semibold ${avatarTone}`}
          >
            {avatar}
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold text-white">{name}</div>
            <div className="flex items-center gap-1 text-[9.5px] text-white/45">
              {active && (
                <span className={`inline-block h-1 w-1 rounded-full ${dotTone} animate-pulse`} />
              )}
              {meta}
            </div>
          </div>
        </div>
        <div className="mt-2 text-[12px] leading-snug text-white/90">{primary}</div>
        <div className="mt-0.5 text-[10.5px] leading-snug text-white/45">{secondary}</div>
      </div>
    </div>
  )
}

/* ─────────────  Floating Chip  ───────────── */

function FloatingChip({
  position,
  icon,
  label,
  value,
  tone,
  active,
}: {
  position: "top-right" | "bottom-left"
  icon: React.ReactNode
  label: string
  value: string
  tone: "violet" | "fuchsia"
  active?: boolean
}) {
  const positionCls =
    position === "top-right"
      ? "top-12 right-0 sm:right-2"
      : "bottom-32 left-0 sm:left-2"
  const toneCls =
    tone === "violet"
      ? "border-violet-400/30 bg-violet-500/10 text-violet-200"
      : "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200"
  return (
    <div
      className={`absolute ${positionCls} inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md transition-opacity duration-500 ${toneCls} ${
        active ? "opacity-100" : "opacity-55"
      }`}
      style={{ animation: "hero-bubble-idle 5s ease-in-out infinite" }}
    >
      {icon}
      <span className="text-white/45">{label}</span>
      <span>{value}</span>
    </div>
  )
}
