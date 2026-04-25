"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Lock,
  Building2,
  Mic,
  Languages,
  CalendarCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Compact, responsive hero — same brand palette, fresher composition.
 * - H1 scales smoothly from mobile → desktop without ever ballooning.
 * - Two-column layout: copy on the left, focused AI Receptionist live-call card on the right.
 */

const TRUST_BADGES = [
  { icon: MapPin, label: "Made in India" },
  { icon: BadgeCheck, label: "TRAI Registered" },
  { icon: Lock, label: "DPDP Compliant" },
  { icon: ShieldCheck, label: "ISO 27001" },
  { icon: Building2, label: "RBI / IRDAI Ready" },
]

const STATS = [
  { value: "+45%", label: "Higher contact rate" },
  { value: "-35%", label: "Lower handle time" },
  { value: "-60%", label: "Fewer missed calls" },
  { value: "5 min", label: "Time to go live" },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background pt-20 lg:pt-24">
      {/* Backdrop: brand grid + radial wash, kept low-contrast */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-purple opacity-50 mask-radial-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 25% 0%, oklch(0.62 0.24 300 / 0.13), transparent 70%), radial-gradient(50% 50% at 90% 30%, oklch(0.45 0.22 295 / 0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
              <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground">
                NEW
              </span>
              AI Receptionist · Hindi &amp; English · 24×7
            </div>

            {/* H1 — properly responsive, clamped at the top end */}
            <h1 className="mt-5 text-balance font-semibold leading-[1.1] tracking-tight text-foreground text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem]">
              AI Contact Center Software in India —{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                With AI Receptionist Built In
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Kedeyo pairs an always-on AI Receptionist with voice bots, smart IVR, predictive dialers and live
              dashboards on a single cloud platform. Answer every call in Hindi or English, close more sales, and
              resolve support faster — without growing your team.
            </p>

            {/* AI Receptionist spotlight — compact, hover-active */}
            <Link
              href="/features/ai-receptionist"
              className="group mt-5 flex max-w-xl items-start gap-3 rounded-2xl border border-primary/15 bg-card/70 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_50px_-22px_oklch(0.45_0.22_295/0.45)]"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md">
                <Mic className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">Spotlight</span>
                  <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[9px] font-semibold text-accent">
                    NEW
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  <span className="font-semibold">AI Receptionist by Kedeyo</span> — Picks up every inbound call,
                  qualifies in natural Hindi or English, routes to the right agent. Trained on your business in minutes.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  See AI Receptionist in action
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-11 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
              >
                <Link href="/demo">
                  Book a Free Demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-border bg-card hover:border-primary/40 hover:bg-primary/5"
              >
                <Link href="tel:+917621073586">
                  <Phone className="mr-2 h-4 w-4" />
                  Talk to Sales — +91 76210 73586
                </Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              No credit card. No long contracts. AI Receptionist live in 5 minutes.
            </p>

            {/* Trust badges */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              {TRUST_BADGES.map((b) => (
                <li key={b.label} className="flex items-center gap-1.5">
                  <b.icon className="h-3.5 w-3.5 text-primary/80" aria-hidden />
                  <span className="font-medium">{b.label}</span>
                </li>
              ))}
            </ul>

            {/* Stat strip */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card/60 p-3 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-md"
                >
                  <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-bold tracking-tight text-transparent sm:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — focused product visual */}
          <div className="lg:col-span-5">
            <ReceptionistCallCard />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────  Right column visual  ─────────────────────────── */

function ReceptionistCallCard() {
  const lines = [
    { who: "caller" as const, lang: "hi" as const, text: "नमस्ते, मुझे appointment book करनी है।" },
    { who: "ai" as const, text: "Sure! May I have your name and preferred date?" },
    { who: "caller" as const, lang: "en" as const, text: "Priya Sharma, Friday at 4 PM works." },
    { who: "ai" as const, text: "Booked. Confirmation sent on WhatsApp." },
  ]

  const [step, setStep] = useState(1)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const t1 = setInterval(() => setStep((s) => (s >= lines.length ? 1 : s + 1)), 2200)
    const t2 = setInterval(() => setSeconds((x) => (x >= 600 ? 0 : x + 1)), 1000)
    return () => {
      clearInterval(t1)
      clearInterval(t2)
    }
  }, [lines.length])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 35%, oklch(0.62 0.24 300 / 0.30), transparent 70%), radial-gradient(40% 40% at 60% 80%, oklch(0.45 0.22 295 / 0.25), transparent 70%)",
        }}
      />

      <div className="rounded-3xl border border-primary/15 bg-card p-4 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-foreground">Live call · AI Receptionist</span>
          </div>
          <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] tabular-nums text-muted-foreground">
            {mm}:{ss}
          </span>
        </div>

        {/* Caller row */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
            PS
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-semibold text-foreground">Priya Sharma</p>
              <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                NEW
              </span>
            </div>
            <p className="truncate font-mono text-[11px] text-muted-foreground">+91 98xxx xxx21 · Mumbai</p>
          </div>
          <PhoneCall className="h-4 w-4 text-emerald-500" />
        </div>

        {/* Meta strip */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
          <Meta icon={Languages} label="Language" value="Hindi → English" />
          <Meta icon={Sparkles} label="Intent" value="Book appt" />
          <Meta icon={CalendarCheck} label="Outcome" value="Booked" />
        </div>

        {/* Live transcript */}
        <div className="mt-3 space-y-2">
          {lines.slice(0, step).map((l, i) => (
            <div
              key={i}
              className={`flex ${l.who === "ai" ? "justify-end" : "justify-start"}`}
              style={{ animation: "heroFadeUp 320ms ease-out both" }}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-[12px] leading-snug ${
                  l.who === "ai"
                    ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {l.who === "caller" && (
                  <span className="mr-1 align-middle text-[9px] font-bold uppercase tracking-wider opacity-60">
                    {l.lang === "hi" ? "HI" : "EN"}
                  </span>
                )}
                {l.text}
              </div>
            </div>
          ))}
          {step < lines.length && (
            <div className="flex justify-end">
              <div className="flex items-center gap-1 rounded-2xl bg-gradient-to-br from-primary to-accent px-3 py-2">
                <Dot delay="0ms" />
                <Dot delay="120ms" />
                <Dot delay="240ms" />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <div className="flex h-5 items-end gap-[2px]">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className="block w-[3px] rounded-full bg-gradient-to-t from-primary to-accent animate-wave"
                style={{
                  animationDelay: `${i * 60}ms`,
                  animationDuration: `${900 + (i % 4) * 120}ms`,
                  height: `${30 + ((i * 13) % 70)}%`,
                }}
              />
            ))}
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            Pickup 0.4s
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroBounceDot {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="rounded-lg border border-border bg-background/60 px-2 py-1.5">
      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="mt-0.5 truncate text-[11px] font-semibold text-foreground">{value}</div>
    </div>
  )
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="block h-1.5 w-1.5 rounded-full bg-primary-foreground/90"
      style={{ animation: `heroBounceDot 900ms ease-in-out ${delay} infinite` }}
    />
  )
}
