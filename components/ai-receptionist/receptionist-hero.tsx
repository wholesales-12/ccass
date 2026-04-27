"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  PlayCircle,
  Phone,
  Activity,
  Globe2,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  UserRound,
  PhoneForwarded,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * AI Receptionist hero (light theme).
 * - LEFT: headline, subhead, KPIs (typographic, no boxes).
 * - RIGHT: a *multi-call switchboard* — 4 calls happening in parallel,
 *   each a different industry / outcome (book, route, qualify, FAQ).
 */

type Outcome = "booked" | "routed" | "qualified" | "answered"
type Lang = "HI" | "EN" | "TA" | "MR"

type Lane = {
  id: number
  caller: string
  city: string
  lang: Lang
  industry: string
  industryIcon: React.ComponentType<{ className?: string }>
  caption: string
  captionTranslation?: string
  outcome: Outcome
  duration: string
  highlighted?: boolean
}

const LANES: Lane[] = [
  {
    id: 1,
    caller: "··2140",
    city: "Mumbai",
    lang: "HI",
    industry: "Dental",
    industryIcon: CalendarCheck,
    caption: "मुझे कल 11 बजे appointment book करनी है।",
    captionTranslation: "Booking 11 AM with Dr. Sharma",
    outcome: "booked",
    duration: "0:23",
    highlighted: true,
  },
  {
    id: 2,
    caller: "··8821",
    city: "Bengaluru",
    lang: "EN",
    industry: "Real estate",
    industryIcon: PhoneForwarded,
    caption: "Looking for 3BHK in Whitefield, budget 2.5 cr.",
    outcome: "routed",
    duration: "0:11",
  },
  {
    id: 3,
    caller: "··4477",
    city: "Chennai",
    lang: "TA",
    industry: "Salon",
    industryIcon: UserRound,
    caption: "நாளை மதியம் hair treatment slot இருக்கா?",
    captionTranslation: "Asking about tomorrow afternoon slot",
    outcome: "qualified",
    duration: "0:16",
  },
  {
    id: 4,
    caller: "··0309",
    city: "Pune",
    lang: "MR",
    industry: "D2C order",
    industryIcon: HelpCircle,
    caption: "Order #A92314 कुठे आहे?",
    captionTranslation: "Order status question",
    outcome: "answered",
    duration: "0:09",
  },
]

const OUTCOME_LABEL: Record<Outcome, string> = {
  booked: "Booked",
  routed: "Routed → owner",
  qualified: "Lead captured",
  answered: "Answered",
}

const OUTCOME_DOT: Record<Outcome, string> = {
  booked: "bg-emerald-500",
  routed: "bg-amber-500",
  qualified: "bg-fuchsia-500",
  answered: "bg-violet-500",
}

const OUTCOME_TXT: Record<Outcome, string> = {
  booked: "text-emerald-600",
  routed: "text-amber-600",
  qualified: "text-fuchsia-600",
  answered: "text-violet-600",
}

export function ReceptionistHero() {
  const [seconds, setSeconds] = useState(134)
  const [bookings, setBookings] = useState(38)
  const [activeLane, setActiveLane] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setBookings((n) => n + 1), 6800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActiveLane((i) => (i + 1) % LANES.length)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pb-16 pt-24 lg:pb-20 lg:pt-28"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 55% at 100% 0%, oklch(0.78 0.16 320 / 0.18), transparent 65%), radial-gradient(ellipse 65% 55% at 0% 100%, oklch(0.80 0.14 285 / 0.16), transparent 70%)",
      }}
    >
      {/* Ambient dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(168,85,247,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 80%)",
        }}
      />
      {/* Subtle horizon line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.18) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ───────── LEFT ───────── */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
              </span>
              <span>Live · 5-minute setup</span>
            </div>

            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
              Every call answered.
              <br />
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                In a voice that sounds human.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              An AI Receptionist that picks up in under a second, books appointments,
              qualifies leads and speaks{" "}
              <span className="font-semibold text-foreground">12+ Indian languages</span> &mdash; 24&times;7,
              every day of the year.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-[0_10px_40px_-10px_rgba(232,121,249,0.45)] hover:bg-foreground/90"
                asChild
              >
                <Link href="#demo">
                  Start free trial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="#how-it-works"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-fuchsia-600"
              >
                <PlayCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                Hear a sample call
                <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-end gap-x-8 gap-y-5 border-t border-border pt-6">
              <Kpi value="<1s" label="Pickup" icon={<Activity className="h-3 w-3" />} />
              <Kpi value="12+" label="Languages" icon={<Globe2 className="h-3 w-3" />} />
              <Kpi value="100%" label="Calls answered" icon={<Phone className="h-3 w-3" />} />
              <Kpi value="68%" label="AI resolved" icon={<Sparkles className="h-3 w-3" />} />
              <Kpi value="DPDP" label="Compliant" icon={<ShieldCheck className="h-3 w-3" />} />
            </div>
          </div>

          {/* ───────── RIGHT — Multi-call switchboard ───────── */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[600px]">
              {/* Soft glow backdrop */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-6 -inset-y-10 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.85 0.12 295 / 0.35), transparent 70%)",
                }}
              />

              {/* Header — switchboard identity */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Switchboard · Live
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-[28px] font-semibold leading-none tracking-tight text-foreground tabular-nums">
                      4
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                      calls active
                    </span>
                    <span className="text-border">·</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                      {mm}:{ss}
                    </span>
                  </div>
                </div>
                <div className="text-right text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  <div className="text-emerald-600">All answered &lt;1s</div>
                  <div className="mt-0.5">
                    <span className="font-semibold tabular-nums text-foreground">{bookings}</span>{" "}
                    booked today
                  </div>
                </div>
              </div>

              {/* Switchboard lanes */}
              <ol className="mt-7 space-y-4">
                {LANES.map((lane, i) => (
                  <li key={lane.id}>
                    <Lane lane={lane} active={i === activeLane} index={i} />
                  </li>
                ))}
              </ol>

              {/* Footer — load + capacity bar */}
              <div className="mt-8 border-t border-border pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Capacity · auto-scaling
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground tabular-nums">
                    4 / 50 lines
                  </span>
                </div>
                <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-foreground/[0.08]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-fuchsia-500"
                    style={{ width: "8%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-bar {
          0%, 100% { transform: scaleY(0.35) }
          50%      { transform: scaleY(1)    }
        }
        @keyframes hero-caret-blink {
          0%, 50%   { opacity: 1 }
          51%, 100% { opacity: 0 }
        }
        @keyframes hero-fade-in {
          from { opacity: 0; transform: translateY(4px) }
          to   { opacity: 1; transform: translateY(0)   }
        }
      `}</style>
    </section>
  )
}

/* ─────────── Sub-components ─────────── */

function Kpi({
  value,
  label,
  icon,
}: {
  value: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-mono text-2xl font-semibold leading-none text-foreground">{value}</span>
      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-fuchsia-600">{icon}</span>
        {label}
      </span>
    </div>
  )
}

function Lane({ lane, active, index }: { lane: Lane; active: boolean; index: number }) {
  const Icon = lane.industryIcon
  return (
    <div
      className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-4 transition-opacity duration-500"
      style={{ opacity: active ? 1 : 0.55 }}
    >
      {/* Left rail — industry + caller meta */}
      <div className="flex min-w-[112px] flex-col gap-1 pt-0.5">
        <div className="flex items-center gap-2">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-violet-600 transition-all ${
              active
                ? "bg-violet-500/15 ring-1 ring-violet-500/40"
                : "bg-violet-500/8"
            }`}
            aria-hidden
          >
            <Icon className="h-3 w-3" />
          </span>
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-foreground">
            {lane.industry}
          </span>
        </div>
        <div className="flex items-center gap-2 pl-8 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>{lane.city}</span>
          <span>·</span>
          <span className="text-foreground/65">{lane.caller}</span>
        </div>
      </div>

      {/* Center — waveform + caption */}
      <div className="min-w-0">
        <div className="flex h-5 items-center gap-[3px]" aria-hidden>
          {Array.from({ length: 28 }).map((_, b) => (
            <span
              key={b}
              className={`block w-[2px] origin-center rounded-full ${
                active
                  ? "bg-gradient-to-t from-fuchsia-500 to-violet-500"
                  : "bg-foreground/15"
              }`}
              style={{
                height: `${10 + ((b * 7 + index * 13) % 9)}px`,
                animation: active
                  ? `hero-bar ${0.6 + ((b % 5) * 0.08)}s ease-in-out ${(b % 7) * 0.04}s infinite`
                  : undefined,
              }}
            />
          ))}
        </div>
        <p
          key={`cap-${lane.id}-${active ? "a" : "i"}`}
          className="mt-1.5 truncate text-[13px] font-medium leading-snug text-foreground"
          style={{ animation: active ? "hero-fade-in 360ms ease-out both" : undefined }}
        >
          {lane.caption}
          {active && (
            <span
              aria-hidden
              className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[2px] bg-foreground align-baseline"
              style={{ animation: "hero-caret-blink 0.9s steps(1) infinite" }}
            />
          )}
        </p>
        {lane.captionTranslation && (
          <p className="truncate text-[10.5px] italic leading-snug text-muted-foreground">
            {lane.captionTranslation}
          </p>
        )}
      </div>

      {/* Right — language + outcome */}
      <div className="flex flex-col items-end gap-1.5 pt-0.5">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-foreground/[0.03] px-1.5 py-px font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground/70">
            {lane.lang}
          </span>
          <span className="font-mono text-[9.5px] tabular-nums text-muted-foreground">
            {lane.duration}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${OUTCOME_DOT[lane.outcome]} ${
              active ? "animate-pulse" : ""
            }`}
            aria-hidden
          />
          <span
            className={`font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${OUTCOME_TXT[lane.outcome]}`}
          >
            {OUTCOME_LABEL[lane.outcome]}
          </span>
        </div>
      </div>
    </div>
  )
}
