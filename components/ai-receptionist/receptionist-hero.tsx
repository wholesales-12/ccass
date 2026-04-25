"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Mic,
  Phone,
  PhoneIncoming,
  Sparkles,
  Volume2,
  Waves,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TRANSCRIPT = [
  { role: "ai", text: "Thanks for calling Sharma Dental — how can I help?" },
  { role: "caller", text: "Hi, I&apos;d like to book a cleaning for tomorrow." },
  { role: "ai", text: "Sure! 4 PM with Dr. Sharma works. Shall I book it?" },
  { role: "caller", text: "Yes, please." },
  { role: "ai", text: "Done. SMS confirmation on its way." },
]

export function ReceptionistHero() {
  const [step, setStep] = useState(0)
  const [callTime, setCallTime] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s + 1) % (TRANSCRIPT.length + 1))
    }, 1800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setCallTime((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const visible = Math.min(step, TRANSCRIPT.length)
  const mm = String(Math.floor(callTime / 60)).padStart(2, "0")
  const ss = String(callTime % 60).padStart(2, "0")

  return (
    <section
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

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-12">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            AI Receptionist · 24/7 call answering
          </span>

          <h1 className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Answer every call.
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-fuchsia-200 bg-clip-text text-transparent">
                Never miss a customer
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
                  stroke="url(#rec-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 280,
                    strokeDashoffset: 280,
                    animation: "rec-draw 1.6s ease-out 0.3s forwards",
                  }}
                />
                <defs>
                  <linearGradient id="rec-underline" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e879f9" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
              <style>{`@keyframes rec-draw { to { stroke-dashoffset: 0 } }`}</style>
            </span>
            .
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
            Kedeyo&apos;s AI Receptionist picks up every call in natural Hindi or English — around the clock. It greets,
            answers, books appointments, qualifies leads, and routes urgent callers to your mobile, without a human on
            payroll.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-[#0a0612] shadow-[0_10px_40px_-10px_rgba(232,121,249,0.6)] hover:bg-white/90 sm:h-12 sm:px-6"
              asChild
            >
              <Link href="/demo">
                Book a Free Demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-white/20 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur hover:bg-white/10 hover:text-white sm:h-12 sm:px-6"
              asChild
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>

          <p className="mt-3 text-[11px] text-white/50">
            No credit card · 15-minute walk-through · Live on your number in 24 hours
          </p>

          {/* Quick value chips */}
          <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {[
              "Set up in under an hour",
              "Works with your existing number",
              "No hardware",
              "No coding",
            ].map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
              >
                <CheckCircle2 className="h-3 w-3 text-emerald-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Phone with live call */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <PhoneCall step={visible} mm={mm} ss={ss} />
        </div>
      </div>
    </section>
  )
}

function PhoneCall({ step, mm, ss }: { step: number; mm: string; ss: string }) {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[60px] opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.62 0.24 300 / 0.4), transparent 70%)",
        }}
      />

      {/* Frame */}
      <div className="relative w-[290px] rounded-[40px] border-[8px] border-white/10 bg-[#0f0a18] p-1 shadow-2xl sm:w-[310px]">
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0a0612]" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#1a1225] to-[#0f0a18] pt-10">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 text-[10px] text-white/60">
            <span className="font-mono">9:41</span>
            <div className="flex items-center gap-1">
              <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-emerald-400">Kedeyo Live</span>
            </div>
          </div>

          {/* Call header */}
          <div className="mt-3 flex items-center gap-3 px-5">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500">
                <PhoneIncoming className="h-5 w-5 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#0f0a18] bg-emerald-400" />
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">+91 98210 22140</div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/50">
                <span>Incoming · Sharma Dental</span>
              </div>
            </div>
            <div className="rounded-full bg-white/5 px-2 py-1 font-mono text-[10px] tabular-nums text-white/70">
              {mm}:{ss}
            </div>
          </div>

          {/* Waveform */}
          <div className="mt-3 flex items-end justify-center gap-[3px] px-5">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-fuchsia-500/40 to-fuchsia-300 animate-wave"
                style={{
                  height: `${8 + ((i * 11) % 18)}px`,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${0.8 + (i % 4) * 0.15}s`,
                }}
              />
            ))}
          </div>

          {/* Transcript */}
          <div className="mt-3 px-4">
            <div className="flex items-center gap-1.5 px-1 text-[9px] font-semibold uppercase tracking-wider text-white/50">
              <Waves className="h-3 w-3 text-fuchsia-300" />
              Live transcript
            </div>

            <div className="mt-2 h-[170px] space-y-1.5 overflow-hidden">
              {TRANSCRIPT.slice(0, step).map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex animate-in fade-in slide-in-from-bottom-1 duration-300",
                    m.role === "caller" && "justify-end",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3 py-1.5 text-[11px] leading-snug",
                      m.role === "ai"
                        ? "rounded-bl-sm bg-white/10 text-white"
                        : "rounded-br-sm bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white",
                    )}
                    dangerouslySetInnerHTML={{ __html: m.text }}
                  />
                </div>
              ))}
              {step < TRANSCRIPT.length && (
                <div className="flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-1.5 w-fit">
                  <span className="h-1 w-1 animate-bounce rounded-full bg-white/60" style={{ animationDelay: "0ms" }} />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-white/60" style={{ animationDelay: "150ms" }} />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-white/60" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>
          </div>

          {/* Action / outcome */}
          <div className="mx-4 mt-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-300" />
                <span className="text-[11px] font-medium text-white">Appointment booked</span>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-300">
                Tomorrow · 4:00 PM
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-3 flex items-center justify-center gap-3 border-t border-white/10 bg-white/[0.03] px-5 py-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70">
              <Mic className="h-4 w-4" />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg">
              <Phone className="h-5 w-5 rotate-[135deg]" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70">
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating: missed call counter */}
      <div className="absolute -left-4 top-24 hidden rounded-xl border border-white/10 bg-white/[0.08] p-2.5 backdrop-blur-xl animate-float-slow sm:block sm:-left-10">
        <div className="text-[9px] uppercase tracking-wider text-white/50">Calls today</div>
        <div className="mt-0.5 font-mono text-lg font-semibold text-white">142</div>
        <div className="mt-0.5 text-[10px] text-emerald-300">100% answered</div>
      </div>

      <div
        className="absolute -right-4 bottom-32 hidden rounded-xl border border-white/10 bg-white/[0.08] p-2.5 backdrop-blur-xl animate-float-slow sm:block sm:-right-10"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-white">Hindi + English</span>
        </div>
        <div className="mt-0.5 text-[10px] text-white/60">Code-mixed Hinglish</div>
      </div>
    </div>
  )
}
