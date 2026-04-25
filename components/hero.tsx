"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Activity,
  MapPin,
  Mic,
  PhoneOff,
  PhoneIncoming,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — Every Call Answered. By an AI Receptionist.
 * - Dark backdrop with subtle purple grid + radial wash.
 * - "Answered" highlighted with gradient text + gradient underline.
 * - Headline scales fluidly via clamp() so it never balloons.
 * - Right side: refined phone mockup with live AI Voice Bot transcript and floating tiles.
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

            {/* H1 — fluid */}
            <h1
              className="mt-6 font-semibold leading-[1.04] tracking-tight text-balance"
              style={{ fontSize: "clamp(2.25rem, 5.4vw, 4.5rem)" }}
            >
              Every Call{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  Answered
                </span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1.5 block h-[6px] rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500 opacity-90"
                />
              </span>
              .
              <br className="hidden sm:block" />
              <span className="text-white/95"> By an AI Receptionist.</span>
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

          {/* RIGHT — refined phone visual */}
          <div className="lg:col-span-5">
            <PhoneVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────  Phone visual  ────────────────────── */

const TRANSCRIPT = [
  { who: "user", lang: "HI", text: "मेरा ऑर्डर कब आएगा?", en: "When will my order arrive?" },
  { who: "ai", lang: "EN", text: "By 6 PM today.", en: "आज शाम 6 बजे तक।" },
  { who: "user", lang: "HI", text: "धन्यवाद!", en: "Thank you!" },
  { who: "ai", lang: "EN", text: "Confirmation sent on WhatsApp.", en: "WhatsApp पर भेज दिया।" },
] as const

function PhoneVisual() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 2400)
    return () => clearInterval(t)
  }, [])

  // show last 2 lines
  const show = [TRANSCRIPT[tick % TRANSCRIPT.length], TRANSCRIPT[(tick + 1) % TRANSCRIPT.length]] as const

  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.45), transparent 70%)",
        }}
      />

      {/* Phone frame */}
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#1a1126] to-[#0a0612] p-2 shadow-2xl shadow-black/60">
        {/* Inner screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#0d0817]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-medium text-white/60">
            <span>9:41</span>
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Kedeyo Live
            </span>
          </div>

          {/* Caller header */}
          <div className="mt-6 flex items-center gap-3 px-5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30">
              AI
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-semibold text-white">AI Voice Bot</div>
              <div className="flex items-center gap-1 text-[11px] text-white/50">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Active · 00:42
              </div>
            </div>
          </div>

          {/* Live waveform */}
          <div className="mt-4 flex items-end justify-center gap-[3px] px-5">
            {Array.from({ length: 28 }).map((_, k) => (
              <span
                key={k}
                className="block w-[3px] rounded-full bg-gradient-to-t from-fuchsia-500/40 via-violet-400 to-pink-400"
                style={{
                  height: `${10 + ((k * 13 + tick * 7) % 28)}px`,
                  animation: `phWave ${700 + (k % 5) * 90}ms ease-in-out ${k * 35}ms infinite alternate`,
                }}
              />
            ))}
          </div>

          {/* Transcript */}
          <div className="mt-5 px-4">
            <div className="mb-2 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              <Activity className="h-3 w-3" />
              Live Transcript
            </div>
            <div className="space-y-2">
              {show.map((m, idx) => (
                <div
                  key={`${tick}-${idx}`}
                  className={`flex ${m.who === "user" ? "justify-end" : "justify-start"}`}
                  style={{ animation: `phFade 320ms ease-out both` }}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12px] leading-snug ${
                      m.who === "user"
                        ? "bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white"
                        : "border border-white/10 bg-white/[0.05] text-white/85"
                    }`}
                  >
                    <div className="font-medium">{m.text}</div>
                    <div
                      className={`text-[10px] ${
                        m.who === "user" ? "text-white/75" : "text-white/45"
                      }`}
                    >
                      {m.en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intent badge */}
          <div className="absolute inset-x-4 bottom-24 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-2 backdrop-blur">
            <div className="flex items-center justify-between text-[11px]">
              <span className="inline-flex items-center gap-1.5 font-semibold text-amber-300">
                <Sparkles className="h-3 w-3" />
                Intent: Order tracking
              </span>
              <span className="font-mono font-semibold text-amber-200">94%</span>
            </div>
          </div>

          {/* Bottom controls */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-4">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70">
              <Mic className="h-4 w-4" />
            </button>
            <button className="grid h-12 w-12 place-items-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-500/40">
              <PhoneOff className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70">
              <Phone className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating tile — Today's calls */}
      <div
        className="absolute -left-6 top-20 hidden rounded-2xl border border-white/10 bg-[#16101f]/90 px-3 py-2.5 shadow-xl shadow-black/40 backdrop-blur sm:block"
        style={{ animation: "phFloat 5.5s ease-in-out infinite" }}
      >
        <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">Today&apos;s calls</div>
        <div className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-white">24,14,850</div>
      </div>

      {/* Floating tile — Incoming */}
      <div
        className="absolute -right-4 top-6 hidden items-center gap-2 rounded-full border border-white/10 bg-[#16101f]/90 px-3 py-1.5 shadow-xl shadow-black/40 backdrop-blur sm:inline-flex"
        style={{ animation: "phFloat 6s ease-in-out 0.7s infinite" }}
      >
        <PhoneIncoming className="h-3.5 w-3.5 text-emerald-400" />
        <span className="font-mono text-[12px] font-medium text-white">+91 98210 22140</span>
      </div>

      {/* Floating tile — Connected */}
      <div
        className="absolute -right-6 bottom-28 hidden rounded-xl border border-emerald-400/20 bg-[#0f1a14]/90 px-3 py-2 shadow-xl shadow-black/40 backdrop-blur sm:block"
        style={{ animation: "phFloat 6s ease-in-out 1.4s infinite" }}
      >
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Connected
        </div>
        <div className="mt-0.5 text-[10px] text-white/55">Latency: 280ms</div>
      </div>

      <style jsx global>{`
        @keyframes phWave {
          from {
            transform: scaleY(0.4);
          }
          to {
            transform: scaleY(1);
          }
        }
        @keyframes phFade {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes phFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}
