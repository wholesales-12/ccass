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
  CalendarCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dark hero — "Every Call Answered. By an AI Receptionist."
 * - H1 forced to exactly two lines on >= sm.
 * - Right side simplified: a single "Live Call" card that clearly shows what the AI does.
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

          {/* RIGHT — clean Live Call card */}
          <div className="lg:col-span-5">
            <LiveCallCard />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────  Live Call Card (clean) ────────────────────── */

function LiveCallCard() {
  const [seconds, setSeconds] = useState(42)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  // Cycle through the conversation steps (0 = caller, 1 = AI, 2 = booked)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 3), 2200)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  const callerSpeaking = step === 0
  const aiSpeaking = step === 1
  const booked = step === 2

  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.45), transparent 70%)",
        }}
      />

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1126] to-[#120b1c] p-6 shadow-2xl shadow-black/60 backdrop-blur">
        {/* Top status bar */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Live call · {mm}:{ss}
          </div>
          <span className="text-[11px] font-medium text-white/45">Inbound · +91 98210 ••••</span>
        </div>

        {/* Caller / AI */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {/* Caller */}
          <div
            className={`rounded-2xl border p-4 transition-all ${
              callerSpeaking
                ? "border-fuchsia-400/40 bg-fuchsia-500/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-fuchsia-500/20 text-[12px] font-semibold text-fuchsia-200">
                R
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold text-white">Rahul (caller)</div>
                <div className="text-[10px] text-white/40">Speaking · Hindi</div>
              </div>
            </div>
            <Wave active={callerSpeaking} color="fuchsia" />
          </div>

          {/* AI */}
          <div
            className={`rounded-2xl border p-4 transition-all ${
              aiSpeaking
                ? "border-violet-400/40 bg-violet-500/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-[12px] font-semibold text-white">
                AI
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold text-white">Kedeyo AI</div>
                <div className="text-[10px] text-white/40">Replying · English</div>
              </div>
            </div>
            <Wave active={aiSpeaking} color="violet" />
          </div>
        </div>

        {/* Live transcript line */}
        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
            Live transcript
          </div>
          <div className="mt-1.5 min-h-[44px] text-[13px] leading-snug text-white/90">
            {callerSpeaking && (
              <span>
                <span className="text-white">मुझे कल 11 बजे appointment book करनी है।</span>{" "}
                <span className="text-white/45">/ I want to book an appointment for tomorrow at 11.</span>
              </span>
            )}
            {aiSpeaking && (
              <span>
                <span className="text-white">Sure Rahul — 11 AM tomorrow with Dr. Sharma is available.</span>{" "}
                <span className="text-white/45">/ कल 11 बजे डॉ. शर्मा के साथ available है।</span>
              </span>
            )}
            {booked && (
              <span className="inline-flex items-center gap-2 font-semibold text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Appointment booked. SMS + WhatsApp confirmation sent.
              </span>
            )}
          </div>
        </div>

        {/* Outcome row */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <Outcome label="Detected" value="Booking" tone="violet" active />
          <Outcome label="Language" value="HI · EN" tone="fuchsia" active />
          <Outcome
            label="Status"
            value={booked ? "Booked" : "In progress"}
            tone="emerald"
            active={booked}
          />
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="inline-flex items-center gap-2 text-[11px] text-white/55">
            <CalendarCheck className="h-3.5 w-3.5 text-emerald-400" />
            38 appointments booked today
          </div>
          <div className="text-[11px] font-medium text-white/45">Latency 280ms</div>
        </div>
      </div>
    </div>
  )
}

function Wave({ active, color }: { active: boolean; color: "fuchsia" | "violet" }) {
  const palette =
    color === "fuchsia"
      ? "from-fuchsia-500/30 via-fuchsia-400 to-pink-400"
      : "from-violet-500/30 via-violet-400 to-fuchsia-400"
  return (
    <div className="mt-3 flex h-7 items-end gap-[2px]">
      {Array.from({ length: 18 }).map((_, k) => (
        <span
          key={k}
          className={`block w-[3px] rounded-full bg-gradient-to-t ${palette} ${
            active ? "" : "opacity-25"
          }`}
          style={{
            height: `${active ? 6 + ((k * 11) % 22) : 4 + (k % 4) * 2}px`,
            animation: active
              ? `heroWave ${600 + (k % 5) * 80}ms ease-in-out ${k * 35}ms infinite alternate`
              : undefined,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes heroWave {
          from {
            transform: scaleY(0.4);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  )
}

function Outcome({
  label,
  value,
  tone,
  active,
}: {
  label: string
  value: string
  tone: "fuchsia" | "violet" | "emerald"
  active?: boolean
}) {
  const toneCls =
    tone === "fuchsia"
      ? "text-fuchsia-300"
      : tone === "violet"
        ? "text-violet-300"
        : "text-emerald-300"
  return (
    <div
      className={`rounded-xl border px-3 py-2 transition-colors ${
        active ? "border-white/15 bg-white/[0.04]" : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">{label}</div>
      <div className={`mt-0.5 text-[12px] font-semibold ${toneCls}`}>{value}</div>
    </div>
  )
}
