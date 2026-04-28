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
  CalendarCheck2,
  UserCheck,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Hero — "Every Call Answered. By an AI Receptionist."
 *
 * Right side: a compact, diagrammatic flow showing how the AI
 * Receptionist works.  Caller → AI Receptionist → branches to
 * Booked / Routed.  Pure icons + labels + animated SVG connectors,
 * no rectangular containers.
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

          {/* RIGHT — diagrammatic flow */}
          <div className="lg:col-span-5">
            <ReceptionistDiagram />
          </div>
        </div>
      </div>

      {/* Shared keyframes */}
      <style jsx global>{`
        @keyframes hero-flow-dash {
          0%   { stroke-dashoffset: 0   }
          100% { stroke-dashoffset: -48 }
        }
        @keyframes hero-pulse-ring {
          0%   { transform: scale(0.6); opacity: 0.55 }
          100% { transform: scale(1.6); opacity: 0    }
        }
        @keyframes hero-caret {
          0%, 49%  { opacity: 1 }
          50%, 100%{ opacity: 0 }
        }
        @keyframes hero-caption-in {
          0%   { opacity: 0; transform: translateY(6px) }
          100% { opacity: 1; transform: translateY(0)   }
        }
        @keyframes hero-node-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(217,70,239,0.0), 0 0 28px 0 rgba(217,70,239,0.45) }
          50%      { box-shadow: 0 0 0 3px rgba(217,70,239,0.08), 0 0 36px 4px rgba(217,70,239,0.55) }
        }
        @keyframes hero-bar {
          0%, 100% { transform: scaleY(0.4) }
          50%      { transform: scaleY(1)   }
        }
      `}</style>
    </section>
  )
}

/* ─────────────  Diagrammatic flow  ───────────── */

type Scene = {
  caller: string
  city: string
  langTag: string
  primary: string
  secondary: string
  outcome: "booked" | "routed"
  outcomeText: string
}

const SCENES: Scene[] = [
  {
    caller: "Rahul",
    city: "Mumbai",
    langTag: "HI",
    primary: "मुझे कल 11 बजे appointment book करनी है।",
    secondary: "Book me an appointment for 11 AM tomorrow.",
    outcome: "booked",
    outcomeText: "Booked · 11 AM · Dr. Sharma",
  },
  {
    caller: "Priya",
    city: "Bengaluru",
    langTag: "EN",
    primary: "Looking for a 2BHK in Whitefield, ready to move.",
    secondary: "Hot lead — qualified and routed.",
    outcome: "routed",
    outcomeText: "Routed · Sales · 12s",
  },
  {
    caller: "Aman",
    city: "Delhi",
    langTag: "HI",
    primary: "Order #4821 का status क्या है?",
    secondary: "What is the status of my order?",
    outcome: "booked",
    outcomeText: "Resolved · Order shipped",
  },
]

function ReceptionistDiagram() {
  const [seconds, setSeconds] = useState(46)
  const [sceneIdx, setSceneIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    const t = setInterval(() => setSceneIdx((i) => (i + 1) % SCENES.length), 4800)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")
  const scene = SCENES[sceneIdx]
  const bookedActive = scene.outcome === "booked"
  const routedActive = scene.outcome === "routed"

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* TOP META */}
      <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em]">
        <span className="inline-flex items-center gap-2 font-semibold text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live · {mm}:{ss}
        </span>
        <span className="text-white/40">How a call flows</span>
      </div>

      {/* ─────────────  The diagram  ─────────────
          Layout (relative, h-[260px]):
          - Left node:  Caller   (left:0,  top:50%)
          - Center node: AI      (left:50%, top:50%)
          - Right top: Booked    (right:0, top:18%)
          - Right bot: Routed    (right:0, top:82%)
          - SVG draws curved animated paths between them
      */}
      <div className="relative mt-4 h-[260px]">
        {/* SVG connector layer */}
        <svg
          aria-hidden
          viewBox="0 0 520 260"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="hero-conn-in" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%"  stopColor="rgba(244,114,182,0)" />
              <stop offset="20%" stopColor="rgba(244,114,182,0.9)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0.9)" />
            </linearGradient>
            <linearGradient id="hero-conn-booked" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%"  stopColor="rgba(167,139,250,0.9)" />
              <stop offset="100%" stopColor="rgba(52,211,153,0.9)" />
            </linearGradient>
            <linearGradient id="hero-conn-routed" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%"  stopColor="rgba(167,139,250,0.9)" />
              <stop offset="100%" stopColor="rgba(244,114,182,0.9)" />
            </linearGradient>
          </defs>

          {/* Caller → AI (curved horizontal) */}
          <path
            d="M 56 130 C 130 130, 170 130, 240 130"
            fill="none"
            stroke="url(#hero-conn-in)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="6 6"
            style={{ animation: "hero-flow-dash 1.4s linear infinite" }}
          />

          {/* AI → Booked (curve up) */}
          <path
            d="M 296 130 C 360 130, 400 80, 470 50"
            fill="none"
            stroke="url(#hero-conn-booked)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="6 6"
            style={{
              animation: "hero-flow-dash 1.4s linear infinite",
              opacity: bookedActive ? 1 : 0.18,
              transition: "opacity 400ms",
            }}
          />

          {/* AI → Routed (curve down) */}
          <path
            d="M 296 130 C 360 130, 400 180, 470 210"
            fill="none"
            stroke="url(#hero-conn-routed)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="6 6"
            style={{
              animation: "hero-flow-dash 1.4s linear infinite",
              opacity: routedActive ? 1 : 0.18,
              transition: "opacity 400ms",
            }}
          />
        </svg>

        {/* Caller node */}
        <Node
          className="absolute left-0 top-1/2 -translate-y-1/2"
          color="fuchsia"
          icon={<Phone className="h-4 w-4" />}
          title={scene.caller}
          meta={`${scene.city} · ${scene.langTag}`}
          tag="Caller"
          align="right"
          ping
        />

        {/* AI Receptionist (center) — pulsing primary node */}
        <CenterNode />

        {/* Booked node */}
        <Node
          className="absolute right-0 top-[18%]"
          color="emerald"
          icon={<CalendarCheck2 className="h-4 w-4" />}
          title="Calendar"
          meta="Booked"
          tag="Outcome"
          align="left"
          dim={!bookedActive}
        />

        {/* Routed node */}
        <Node
          className="absolute right-0 top-[82%] -translate-y-full"
          color="pink"
          icon={<UserCheck className="h-4 w-4" />}
          title="Owner"
          meta="Routed"
          tag="Outcome"
          align="left"
          dim={!routedActive}
        />
      </div>

      {/* TRANSCRIPT — small line under the diagram */}
      <div
        key={sceneIdx}
        className="mt-2"
        style={{ animation: "hero-caption-in 460ms ease-out both" }}
      >
        <p className="text-[14px] font-semibold leading-snug text-white">
          <span className="bg-gradient-to-br from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            &ldquo;
          </span>
          {scene.primary}
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/85 align-baseline"
            style={{ animation: "hero-caret 0.9s steps(1) infinite" }}
          />
        </p>
        <p className="mt-0.5 text-[11px] italic leading-snug text-white/45">
          {scene.secondary}
        </p>
        <div className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span className={`h-px w-5 ${bookedActive ? "bg-emerald-400/70" : "bg-fuchsia-400/70"}`} />
          <span className={bookedActive ? "font-semibold text-emerald-300" : "font-semibold text-fuchsia-300"}>
            {scene.outcomeText}
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-white/40">23s</span>
        </div>
      </div>

      {/* SECONDARY FEATURE TEASER */}
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

/* ─────────────  Diagram primitives  ───────────── */

function Node({
  className,
  color,
  icon,
  title,
  meta,
  tag,
  align = "right",
  ping = false,
  dim = false,
}: {
  className?: string
  color: "fuchsia" | "emerald" | "pink"
  icon: React.ReactNode
  title: string
  meta: string
  tag: string
  align?: "left" | "right"
  ping?: boolean
  dim?: boolean
}) {
  const colorMap = {
    fuchsia: { ring: "border-fuchsia-400/60", glow: "bg-fuchsia-500/15", text: "text-fuchsia-200", tag: "text-fuchsia-300" },
    emerald: { ring: "border-emerald-400/60", glow: "bg-emerald-500/15", text: "text-emerald-200", tag: "text-emerald-300" },
    pink:    { ring: "border-pink-400/60",    glow: "bg-pink-500/15",    text: "text-pink-200",    tag: "text-pink-300"    },
  }[color]

  return (
    <div
      className={`flex items-center gap-3 transition-opacity duration-500 ${className ?? ""}`}
      style={{
        opacity: dim ? 0.35 : 1,
        flexDirection: align === "left" ? "row" : "row-reverse",
      }}
    >
      {/* Label stack */}
      <div
        className={`flex flex-col leading-tight ${
          align === "left" ? "items-start" : "items-end text-right"
        }`}
      >
        <span className={`font-mono text-[9px] font-bold uppercase tracking-[0.22em] ${colorMap.tag}`}>
          {tag}
        </span>
        <span className="text-[13px] font-semibold text-white">{title}</span>
        <span className="text-[10.5px] text-white/50">{meta}</span>
      </div>

      {/* Icon glyph — circular ring, no filled card */}
      <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${colorMap.ring} ${colorMap.glow} ${colorMap.text}`}>
        {ping && (
          <>
            <span
              aria-hidden
              className={`absolute inset-0 rounded-full border ${colorMap.ring}`}
              style={{ animation: "hero-pulse-ring 2s ease-out infinite" }}
            />
            <span
              aria-hidden
              className={`absolute inset-0 rounded-full border ${colorMap.ring}`}
              style={{ animation: "hero-pulse-ring 2s ease-out 1s infinite" }}
            />
          </>
        )}
        {icon}
      </div>
    </div>
  )
}

function CenterNode() {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-pink-500 text-white"
        style={{ animation: "hero-node-glow 2.4s ease-in-out infinite" }}
      >
        <Sparkles className="h-6 w-6" />
        {/* Inner equalizer along the bottom edge */}
        <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-end gap-[3px]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-2 w-[3px] origin-bottom rounded-full bg-white/90"
              style={{ animation: `hero-bar 900ms ease-in-out ${i * 110}ms infinite` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 text-center">
        <div className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-violet-200">
          Kedeyo
        </div>
        <div className="text-[12.5px] font-semibold text-white">AI Receptionist</div>
        <div className="text-[10px] text-white/50">Listens · Decides · Acts</div>
      </div>
    </div>
  )
}
