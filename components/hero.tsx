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
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Hero — "Every Call Answered. By an AI Receptionist."
 *
 * Right side: an editorial typographic poster — no orb, no boxes,
 * no orbiting tags. Composition driven entirely by oversized rotating
 * display verbs, giant multilingual script samples, a flowing SVG
 * waveform line, and a real call quote as freeform type. A small
 * inline footer also teases Outbound Voice AI + WhatsApp AI.
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

          {/* RIGHT — editorial typographic poster */}
          <div className="lg:col-span-5">
            <ReceptionistPoster />
          </div>
        </div>
      </div>

      {/* Shared keyframes */}
      <style jsx global>{`
        @keyframes hero-verb-in {
          0%   { opacity: 0; transform: translateY(14px) skewX(-2deg) }
          60%  { opacity: 1; transform: translateY(0)    skewX(0)     }
          100% { opacity: 1; transform: translateY(0)    skewX(0)     }
        }
        @keyframes hero-script-in {
          0%   { opacity: 0; transform: translateX(20px) }
          100% { opacity: 1; transform: translateX(0)    }
        }
        @keyframes hero-caret {
          0%, 49%  { opacity: 1 }
          50%, 100%{ opacity: 0 }
        }
        @keyframes hero-quote-in {
          0%   { opacity: 0; transform: translateY(8px) }
          100% { opacity: 1; transform: translateY(0)   }
        }
        @keyframes hero-wave-flow {
          0%   { stroke-dashoffset: 0    }
          100% { stroke-dashoffset: -120 }
        }
      `}</style>
    </section>
  )
}

/* ─────────────  Editorial poster (no orb, no boxes)  ───────────── */

const VERBS = ["Listens.", "Understands.", "Speaks back.", "Books.", "Routes."]

const SCRIPTS: { sample: string; tag: string; font: string }[] = [
  { sample: "हिन्दी",  tag: "Hindi",   font: "serif"     },
  { sample: "English", tag: "English", font: "sans-serif"},
  { sample: "தமிழ்",   tag: "Tamil",   font: "serif"     },
  { sample: "বাংলা",   tag: "Bangla",  font: "serif"     },
  { sample: "मराठी",   tag: "Marathi", font: "serif"     },
]

type Quote = {
  caller: string
  city: string
  langTag: string
  intent: string
  primary: string
  secondary: string
  outcome: string
}

const QUOTES: Quote[] = [
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

function ReceptionistPoster() {
  const [seconds, setSeconds] = useState(46)
  const [verbIdx, setVerbIdx] = useState(0)
  const [scriptIdx, setScriptIdx] = useState(0)
  const [quoteIdx, setQuoteIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    const t = setInterval(() => setVerbIdx((i) => (i + 1) % VERBS.length), 2000)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    const t = setInterval(() => setScriptIdx((i) => (i + 1) % SCRIPTS.length), 1600)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    const t = setInterval(() => setQuoteIdx((i) => (i + 1) % QUOTES.length), 5400)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const verb = VERBS[verbIdx]
  const script = SCRIPTS[scriptIdx]
  const quote = QUOTES[quoteIdx]

  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      {/* TOP META — pure typography on dark bg */}
      <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em]">
        <span className="inline-flex items-center gap-2 font-semibold text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live · {mm}:{ss}
        </span>
        <span className="text-white/40">AI Receptionist · v2.4</span>
      </div>

      {/* DISPLAY: rotating verb — massive, set against the column */}
      <div
        className="relative mt-3 select-none"
        style={{
          fontSize: "clamp(3.2rem, 7.5vw, 5.4rem)",
          lineHeight: 0.92,
        }}
      >
        <div className="font-semibold tracking-tight">
          <span className="text-white/45">It </span>
          <span
            key={verbIdx}
            className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-300 bg-clip-text text-transparent"
            style={{ animation: "hero-verb-in 600ms cubic-bezier(.2,.7,.2,1) both" }}
          >
            {verb}
          </span>
        </div>
        {/* Verb rail underneath — small inline mono list of all verbs */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em]">
          {VERBS.map((v, i) => (
            <span
              key={v}
              className={
                i === verbIdx
                  ? "text-fuchsia-300"
                  : "text-white/30"
              }
            >
              {v.replace(".", "")}
              {i < VERBS.length - 1 && (
                <span className="ml-3 text-white/15">/</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* FLOWING WAVEFORM — single horizontal SVG line cutting across */}
      <div className="relative mt-7 h-[60px]">
        <svg
          aria-hidden
          viewBox="0 0 540 60"
          width="100%"
          height="60"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="hero-wave-grad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%"  stopColor="rgba(244,114,182,0.0)" />
              <stop offset="20%" stopColor="rgba(244,114,182,1)" />
              <stop offset="50%" stopColor="rgba(167,139,250,1)" />
              <stop offset="80%" stopColor="rgba(232,121,249,1)" />
              <stop offset="100%" stopColor="rgba(232,121,249,0.0)" />
            </linearGradient>
          </defs>
          {/* Soft baseline */}
          <line x1="0" y1="30" x2="540" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {/* Animated sine wave */}
          <path
            d="M0,30 Q22,8 45,30 T90,30 T135,30 T180,30 T225,30 T270,30 T315,30 T360,30 T405,30 T450,30 T495,30 T540,30"
            fill="none"
            stroke="url(#hero-wave-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 6"
            style={{ animation: "hero-wave-flow 1.6s linear infinite" }}
          />
        </svg>
        {/* Rotating script samples — sit on the wave */}
        <div className="absolute inset-0 flex items-center justify-between px-1">
          <div
            key={scriptIdx}
            className="flex items-baseline gap-3"
            style={{ animation: "hero-script-in 480ms cubic-bezier(.2,.7,.2,1) both" }}
          >
            <span
              className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text font-semibold leading-none tracking-tight text-transparent"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.25rem)", fontFamily: script.font }}
            >
              {script.sample}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
              {script.tag}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            12+ langs
          </span>
        </div>
      </div>

      {/* LIVE QUOTE — caller meta + bilingual transcript, freeform type */}
      <div key={quoteIdx} style={{ animation: "hero-quote-in 520ms ease-out both" }}>
        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.2em]">
          <span className="font-semibold text-fuchsia-300">{quote.caller}</span>
          <span className="text-white/30">·</span>
          <span className="text-white/55">{quote.city}</span>
          <span className="text-white/30">·</span>
          <span className="text-fuchsia-200">{quote.langTag}</span>
          <span className="text-white/30">·</span>
          <span className="text-violet-200">{quote.intent}</span>
        </div>

        {/* Big editorial quote — open + close marks as oversized accents, no box */}
        <div className="relative mt-2">
          <span
            aria-hidden
            className="absolute -left-3 -top-2 select-none bg-gradient-to-br from-fuchsia-400 to-violet-400 bg-clip-text text-[40px] font-bold leading-none text-transparent"
          >
            &ldquo;
          </span>
          <p className="pl-5 text-pretty text-[17px] font-semibold leading-snug text-white sm:text-[18px]">
            {quote.primary}
            <span
              aria-hidden
              className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/85 align-baseline"
              style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
            />
          </p>
          <p className="mt-1 pl-5 text-[12px] italic leading-snug text-white/45">
            {quote.secondary}
          </p>
        </div>

        {/* Outcome — hairline + inline */}
        <div className="mt-4 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em]">
          <span className="h-px w-6 bg-emerald-400/70" />
          <span className="font-semibold text-emerald-300">{quote.outcome}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/40 via-emerald-400/10 to-transparent" />
          <span className="text-white/40">23s</span>
        </div>
      </div>

      {/* SECONDARY FEATURE TEASER — inline, hairline rule */}
      <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
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
