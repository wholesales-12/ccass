"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Mic,
  Phone,
  PhoneIncoming,
  Bot,
  ShieldCheck,
  Activity,
  Waves,
  Globe2,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LANGS = ["हिन्दी", "English", "தமிழ்", "తెలుగు", "বাংলা", "मराठी", "ગુજરાતી", "ಕನ್ನಡ", "ਪੰਜਾਬੀ"]

const TRANSCRIPT = [
  { role: "customer", hi: "मेरा ऑर्डर कब आएगा?", en: "When will my order arrive?" },
  { role: "bot", hi: "आज शाम 6 बजे तक।", en: "By 6 PM today." },
  { role: "customer", hi: "धन्यवाद!", en: "Thanks!" },
]

export function Hero() {
  const [lang, setLang] = useState(0)
  const [line, setLine] = useState(0)
  const [count, setCount] = useState(2_412_884)

  useEffect(() => {
    const l = setInterval(() => setLang((i) => (i + 1) % LANGS.length), 1400)
    const t = setInterval(() => setLine((i) => (i + 1) % TRANSCRIPT.length), 2200)
    const c = setInterval(() => setCount((n) => n + Math.floor(Math.random() * 4) + 1), 900)
    return () => {
      clearInterval(l)
      clearInterval(t)
      clearInterval(c)
    }
  }, [])

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0a0612] pt-20 lg:pt-24"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.45 0.22 295 / 0.35), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 20%, oklch(0.62 0.24 300 / 0.25), transparent 65%)",
      }}
    >
      {/* Ambient grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-10">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <Link
            href="/features/ai-receptionist"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur transition-all hover:border-fuchsia-400/30 hover:bg-fuchsia-500/10 sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            New: AI Receptionist — 24/7 call answering
            <ArrowRight className="h-3 w-3 text-fuchsia-300" />
          </Link>

          <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Every call.
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-fuchsia-200 bg-clip-text text-transparent">
                Answered
              </span>
              <svg
                aria-hidden
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 240 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 C 60 2, 140 10, 238 4"
                  stroke="url(#underline-g)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ strokeDasharray: 280, strokeDashoffset: 280, animation: "hero-draw 2s ease-out 0.4s forwards" }}
                />
                <defs>
                  <linearGradient id="underline-g" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e879f9" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
              <style>{`@keyframes hero-draw { to { stroke-dashoffset: 0 } }`}</style>
            </span>{" "}
            by AI.
          </h1>

          <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
            Transform your contact center into an always-on AI workforce — fluent in{" "}
            <span className="font-semibold text-white">12+ Indian languages</span>, ready in minutes.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-[#0a0612] shadow-[0_10px_40px_-10px_rgba(232,121,249,0.6)] hover:bg-white/90 sm:h-12 sm:px-6"
              asChild
            >
              <Link href="#demo">
                Start free trial
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-white/20 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur hover:bg-white/10 hover:text-white sm:h-12 sm:px-6"
              asChild
            >
              <Link href="#workflow">
                <Phone className="mr-1 h-4 w-4" />
                See it in action
              </Link>
            </Button>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-white/50 sm:text-xs">
            <div className="flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5 text-fuchsia-300" />
              <span className="relative inline-block h-4 min-w-[60px] overflow-hidden">
                {LANGS.map((l, i) => (
                  <span
                    key={l}
                    className={cn(
                      "absolute inset-0 flex items-center font-semibold text-white transition-all duration-500",
                      i === lang ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    )}
                  >
                    {l}
                  </span>
                ))}
              </span>
            </div>
            <span className="h-3 w-px bg-white/15" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
              DPDP + TRAI
            </div>
            <span className="h-3 w-px bg-white/15" />
            <div className="flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-fuchsia-300" />
              99.99% uptime
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <div className="font-mono text-2xl font-semibold text-white sm:text-3xl">5K+</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/50">Businesses</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold text-white sm:text-3xl">2M+</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/50">Calls/day</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold text-white sm:text-3xl">68%</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/50">AI resolved</div>
            </div>
          </div>
        </div>

        {/* Right: Phone mockup with conversation */}
        <div className="relative mt-10 flex items-center justify-center lg:mt-0">
          <PhoneMockup count={count} line={line} />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup({ count, line }: { count: number; line: number }) {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[60px] opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.62 0.24 300 / 0.4), transparent 70%)",
        }}
      />

      {/* Phone frame */}
      <div className="relative w-[280px] rounded-[40px] border-[8px] border-white/10 bg-[#0f0a18] p-1 shadow-2xl sm:w-[300px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0a0612]" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#1a1225] to-[#0f0a18] pt-10">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 text-[10px] text-white/60">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-emerald-400">Kedeyo Live</span>
            </div>
          </div>

          {/* Call info header */}
          <div className="mt-4 px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 text-sm font-semibold text-white">
                AI
              </div>
              <div>
                <div className="text-sm font-semibold text-white">AI Voice Bot</div>
                <div className="flex items-center gap-1.5 text-[10px] text-white/50">
                  <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Active · 00:42
                </div>
              </div>
            </div>
          </div>

          {/* Waveform */}
          <div className="mt-4 flex items-end justify-center gap-0.5 px-5">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-fuchsia-500/40 to-fuchsia-300 animate-wave"
                style={{
                  height: `${8 + ((i * 7) % 20)}px`,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${0.8 + (i % 4) * 0.15}s`,
                }}
              />
            ))}
          </div>

          {/* Live transcript */}
          <div className="mt-4 px-5">
            <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/50">
              <Waves className="h-3 w-3 text-fuchsia-300" />
              Live transcript
            </div>

            <div className="relative mt-3 h-28 space-y-2.5">
              {TRANSCRIPT.map((t, i) => {
                const isVisible = i <= line
                return (
                  <div
                    key={i}
                    className={cn(
                      "transition-all duration-500",
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-3 py-2",
                        t.role === "customer"
                          ? "ml-auto rounded-br-md bg-gradient-to-r from-fuchsia-500 to-violet-500"
                          : "rounded-bl-md bg-white/10",
                      )}
                    >
                      <div className="text-xs text-white">{t.hi}</div>
                      <div className="mt-0.5 text-[10px] text-white/60">{t.en}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Intent detected */}
          <div className="mx-5 mt-2 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-medium text-white">Intent: Order tracking</span>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                94%
              </span>
            </div>
          </div>

          {/* Bottom action bar */}
          <div className="mt-4 flex items-center justify-center gap-4 border-t border-white/10 bg-white/5 px-5 py-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20">
              <Mic className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg">
              <Phone className="h-5 w-5 rotate-[135deg]" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20">
              <Bot className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-4 top-20 rounded-xl border border-white/10 bg-white/[0.08] p-2.5 backdrop-blur-xl animate-float-slow sm:-left-8">
        <div className="text-[9px] uppercase tracking-wider text-white/50">Today&apos;s calls</div>
        <div className="mt-0.5 font-mono text-lg font-semibold text-white">{count.toLocaleString("en-IN")}</div>
      </div>

      <div className="absolute -right-4 bottom-32 rounded-xl border border-white/10 bg-white/[0.08] p-2.5 backdrop-blur-xl animate-float-slow sm:-right-8" style={{ animationDelay: "1s" }}>
        <div className="flex items-center gap-1.5">
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-emerald-400">Connected</span>
        </div>
        <div className="mt-0.5 text-[10px] text-white/60">Latency: 280ms</div>
      </div>

      <div className="absolute -right-2 top-8 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 backdrop-blur-xl animate-float-slow sm:-right-6" style={{ animationDelay: "0.5s" }}>
        <div className="flex items-center gap-1.5 text-[10px]">
          <PhoneIncoming className="h-3 w-3 text-fuchsia-300" />
          <span className="text-white/80">+91 98210 22140</span>
        </div>
      </div>
    </div>
  )
}
