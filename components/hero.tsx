"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Phone,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Lock,
  PhoneIncoming,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Compact, focused hero.
 * - Headline: "Every Call Answered. By an AI Receptionist."
 * - Heading uses clamp() so it scales smoothly without ever ballooning.
 * - Right column is a single, calm visual (not a busy dashboard).
 */

const TRUST_BADGES = [
  { icon: MapPin, label: "Made in India" },
  { icon: BadgeCheck, label: "TRAI Registered" },
  { icon: Lock, label: "DPDP Compliant" },
  { icon: ShieldCheck, label: "ISO 27001" },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background pt-20 lg:pt-24">
      {/* Backdrop — same brand wash as before */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-purple opacity-50 mask-radial-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 25% 0%, oklch(0.62 0.24 300 / 0.13), transparent 70%), radial-gradient(50% 50% at 90% 30%, oklch(0.45 0.22 295 / 0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
              <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground">
                NEW
              </span>
              AI Receptionist · Hindi &amp; English · 24×7
            </div>

            {/* H1 — fluid + clamped */}
            <h1
              className="mt-6 text-balance font-semibold leading-[1.05] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.75rem)" }}
            >
              Every Call Answered.{" "}
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                By an AI Receptionist.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Kedeyo&apos;s AI Receptionist picks up every inbound call in Hindi or English, qualifies callers, books
              appointments and routes hot leads — instantly, 24×7. Built on India&apos;s most complete AI contact center
              platform.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                  Talk to Sales
                </Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Live in 5 minutes · No credit card · Free 14-day trial
            </p>

            {/* Trust badges */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {TRUST_BADGES.map((b) => (
                <li key={b.label} className="flex items-center gap-1.5">
                  <b.icon className="h-3.5 w-3.5 text-primary/80" aria-hidden />
                  <span className="font-medium">{b.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — single, calm focal visual */}
          <div className="lg:col-span-5">
            <ReceptionistOrb />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────  Right column: single visual  ────────────────────── */

const TRANSCRIPT = [
  { lang: "HI", text: "नमस्ते, मुझे appointment book करनी है।" },
  { lang: "EN", text: "Sure — Friday at 4 PM works for you?" },
  { lang: "HI", text: "हाँ, perfect है।" },
  { lang: "EN", text: "Booked. Confirmation sent on WhatsApp." },
] as const

function ReceptionistOrb() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % TRANSCRIPT.length), 2600)
    return () => clearInterval(t)
  }, [])

  const line = TRANSCRIPT[i]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* Soft halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.35), transparent 70%), radial-gradient(40% 40% at 50% 65%, oklch(0.45 0.22 295 / 0.22), transparent 70%)",
        }}
      />

      {/* Pulse rings */}
      <div aria-hidden className="absolute inset-0 grid place-items-center">
        {[0, 1, 2].map((k) => (
          <span
            key={k}
            className="absolute aspect-square rounded-full border border-primary/20"
            style={{
              width: `${52 + k * 14}%`,
              animation: `heroPulse 3.6s ease-out ${k * 0.6}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Center orb */}
      <div className="absolute inset-[24%] grid place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/40">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/90 to-accent/90 ring-1 ring-white/20" />
        {/* Mini bars inside orb */}
        <div className="relative z-10 flex h-12 items-end gap-[3px]">
          {Array.from({ length: 9 }).map((_, k) => (
            <span
              key={k}
              className="block w-[3px] rounded-full bg-primary-foreground/95"
              style={{
                animation: `heroBar ${800 + (k % 4) * 120}ms ease-in-out ${k * 60}ms infinite alternate`,
                height: `${30 + ((k * 17) % 70)}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating top chip — Live status */}
      <div
        className="absolute left-1/2 top-2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-emerald-500/25 bg-card/90 px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-lg backdrop-blur"
        style={{ animation: "heroFloat 5s ease-in-out infinite" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Live · AI Receptionist
        <span className="font-mono tabular-nums text-muted-foreground">00:14</span>
      </div>

      {/* Floating left chip — Incoming */}
      <div
        className="absolute left-0 top-[38%] flex items-center gap-2 rounded-2xl border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur"
        style={{ animation: "heroFloat 6s ease-in-out 0.4s infinite" }}
      >
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-[11px] font-semibold text-primary-foreground">
          PS
        </div>
        <div className="leading-tight">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
            <PhoneIncoming className="h-3 w-3 text-emerald-500" />
            Priya Sharma
          </div>
          <div className="font-mono text-[10px] text-muted-foreground">+91 98xxx xxx21</div>
        </div>
      </div>

      {/* Floating right chip — Outcome */}
      <div
        className="absolute right-0 top-[32%] flex items-center gap-2 rounded-2xl border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur"
        style={{ animation: "heroFloat 6s ease-in-out 1.2s infinite" }}
      >
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <div className="leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Outcome</div>
          <div className="text-[11px] font-semibold text-foreground">Appointment booked</div>
        </div>
      </div>

      {/* Bottom transcript bubble */}
      <div className="absolute inset-x-2 bottom-0 sm:inset-x-4">
        <div className="mx-auto max-w-[92%] rounded-2xl border border-primary/15 bg-card/95 px-4 py-3 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
              Live transcript
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
              Pickup 0.4s
            </span>
          </div>
          <p
            key={i}
            className="mt-1.5 text-[13px] leading-snug text-foreground"
            style={{ animation: "heroFadeUp 320ms ease-out both" }}
          >
            <span className="mr-1.5 inline-block rounded bg-primary/10 px-1.5 py-0.5 align-middle text-[9px] font-bold text-primary">
              {line.lang}
            </span>
            {line.text}
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroPulse {
          0% {
            transform: scale(0.85);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }
        @keyframes heroBar {
          from {
            transform: scaleY(0.4);
          }
          to {
            transform: scaleY(1);
          }
        }
        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
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
      `}</style>
    </div>
  )
}
