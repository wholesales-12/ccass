"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Languages,
  PhoneForwarded,
  PhoneIncoming,
  PlayCircle,
  Sparkles,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CallStage = "ringing" | "talking" | "resolved"

type LiveCall = {
  caller: string
  number: string
  intent: string
  intentIcon: typeof CalendarCheck
  language: string
  duration: string
  outcome: string
  outcomeColor: string
  stage: CallStage
  accent: string
}

const CALLS: LiveCall[] = [
  {
    caller: "Anjali Mehta",
    number: "+91 98210 ••• 140",
    intent: "Book appointment",
    intentIcon: CalendarCheck,
    language: "Hindi + English",
    duration: "01:42",
    outcome: "Booked · Tomorrow 4 PM",
    outcomeColor: "text-emerald-600",
    stage: "resolved",
    accent: "from-fuchsia-500 to-violet-500",
  },
  {
    caller: "Rahul Singh",
    number: "+91 99876 ••• 022",
    intent: "Pricing query",
    intentIcon: Sparkles,
    language: "English",
    duration: "00:38",
    outcome: "Answered from KB",
    outcomeColor: "text-emerald-600",
    stage: "talking",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    caller: "Priya Nair",
    number: "+91 90123 ••• 887",
    intent: "Hot lead",
    intentIcon: UserCheck,
    language: "English",
    duration: "00:14",
    outcome: "Routing to mobile…",
    outcomeColor: "text-amber-600",
    stage: "talking",
    accent: "from-amber-500 to-orange-500",
  },
  {
    caller: "Unknown caller",
    number: "+91 73489 ••• 015",
    intent: "Service hours",
    intentIcon: Clock,
    language: "Marathi",
    duration: "00:02",
    outcome: "Connecting…",
    outcomeColor: "text-violet-600",
    stage: "ringing",
    accent: "from-emerald-500 to-teal-500",
  },
]

export function ReceptionistHero() {
  const [tick, setTick] = useState(0)
  const [callsToday, setCallsToday] = useState(142)

  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 1500)
    const c = setInterval(() => setCallsToday((n) => n + 1), 4000)
    return () => {
      clearInterval(t)
      clearInterval(c)
    }
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-background pt-20 lg:pt-24">
      {/* Soft pastel mesh background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 15% 0%, oklch(0.92 0.08 305 / 0.6), transparent 60%), radial-gradient(ellipse 50% 35% at 85% 5%, oklch(0.94 0.06 220 / 0.5), transparent 60%), radial-gradient(ellipse 55% 35% at 50% 100%, oklch(0.95 0.05 30 / 0.4), transparent 60%)",
        }}
      />

      {/* Decorative dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.6 0.18 295 / 0.18) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        {/* Centered copy */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            AI Receptionist
          </span>

          <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Your business doesn&apos;t sleep.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Now your phone won&apos;t either.
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kedeyo&apos;s AI Receptionist answers every call in natural Hindi or English — books appointments,
            qualifies leads, and routes urgent callers to your mobile, 24/7. No human on payroll.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-11 rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:bg-foreground/90 sm:h-12 sm:px-6"
              asChild
            >
              <Link href="/demo">
                Book a free demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-border bg-background px-5 text-sm font-medium text-foreground hover:bg-muted sm:h-12 sm:px-6"
              asChild
            >
              <Link href="#how-it-works">
                <PlayCircle className="mr-1.5 h-4 w-4" />
                See it in action
              </Link>
            </Button>
          </div>

          <p className="mt-3 text-[11px] text-muted-foreground sm:text-xs">
            No credit card · 15-minute walk-through · Live on your number in 24 hours
          </p>
        </div>

        {/* Live control center */}
        <div className="relative mx-auto mt-12 max-w-6xl lg:mt-16">
          {/* Dashboard frame */}
          <div className="relative rounded-3xl border border-border bg-card/80 p-3 shadow-[0_30px_80px_-30px_oklch(0.45_0.22_295/0.35)] backdrop-blur-xl sm:p-4">
            {/* Window chrome */}
            <div className="flex items-center justify-between gap-3 border-b border-border/60 px-2 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 hidden font-mono text-[11px] text-muted-foreground sm:inline">
                  app.kedeyo.com / receptionist / live
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-medium text-emerald-600">Live</span>
                </div>
                <div className="hidden h-4 w-px bg-border sm:block" />
                <div className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                  <Clock className="h-3 w-3" />
                  <span className="font-mono">{new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} IST</span>
                </div>
              </div>
            </div>

            {/* Top KPI strip */}
            <div className="grid grid-cols-2 gap-2 px-2 pt-3 sm:grid-cols-4 sm:gap-3">
              <KpiTile label="Calls today" value={callsToday.toString()} delta="+12" tone="primary" icon={PhoneIncoming} />
              <KpiTile label="Answered" value="100%" delta="0 missed" tone="emerald" icon={CheckCircle2} />
              <KpiTile label="Avg pickup" value="0.6s" delta="<1s SLA" tone="violet" icon={Clock} />
              <KpiTile label="Bookings" value="38" delta="+9 today" tone="amber" icon={CalendarCheck} />
            </div>

            {/* Active call grid */}
            <div className="mt-3 px-2 pb-2">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
                  </span>
                  Active calls — handled in parallel
                </div>
                <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  4 concurrent
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {CALLS.map((c, i) => (
                  <CallCard key={c.caller} call={c} index={i} tick={tick} />
                ))}
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -left-3 top-24 hidden rounded-2xl border border-border bg-card p-3 shadow-lg lg:block lg:-left-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <PhoneForwarded className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Escalated</div>
                <div className="text-sm font-semibold text-foreground">Hot lead → owner&apos;s mobile</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 bottom-20 hidden rounded-2xl border border-border bg-card p-3 shadow-lg lg:block lg:-right-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <Languages className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Detected</div>
                <div className="text-sm font-semibold text-foreground">Hinglish → switching</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground sm:text-xs">
          {[
            "Set up in under an hour",
            "Works with your existing number",
            "No hardware",
            "No coding",
            "DPDP-compliant",
          ].map((item) => (
            <li key={item} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function KpiTile({
  label,
  value,
  delta,
  tone,
  icon: Icon,
}: {
  label: string
  value: string
  delta: string
  tone: "primary" | "emerald" | "violet" | "amber"
  icon: typeof PhoneIncoming
}) {
  const tones: Record<typeof tone, string> = {
    primary: "bg-primary/10 text-primary",
    emerald: "bg-emerald-100 text-emerald-700",
    violet: "bg-violet-100 text-violet-700",
    amber: "bg-amber-100 text-amber-700",
  }
  return (
    <div className="rounded-xl border border-border/70 bg-background/60 p-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className={cn("flex h-6 w-6 items-center justify-center rounded-md", tones[tone])}>
          <Icon className="h-3.5 w-3.5" />
        </span>
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-mono text-xl font-semibold tabular-nums text-foreground sm:text-2xl">{value}</span>
        <span className="text-[10px] font-medium text-emerald-600">{delta}</span>
      </div>
    </div>
  )
}

function CallCard({ call, index, tick }: { call: LiveCall; index: number; tick: number }) {
  const Icon = call.intentIcon
  const isActive = call.stage !== "ringing"
  const stageLabel: Record<CallStage, string> = {
    ringing: "Ringing",
    talking: "Talking",
    resolved: "Resolved",
  }
  const stageDot: Record<CallStage, string> = {
    ringing: "bg-violet-500",
    talking: "bg-fuchsia-500",
    resolved: "bg-emerald-500",
  }
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border/70 bg-background p-3 transition-shadow hover:shadow-md"
      style={{ animation: `rec-card-in 600ms ease-out ${index * 80}ms both` }}
    >
      {/* Top gradient bar */}
      <div className={cn("absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r", call.accent)} />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
          <span className={cn("relative flex h-1.5 w-1.5")}>
            <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", stageDot[call.stage])} />
            <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", stageDot[call.stage])} />
          </span>
          {stageLabel[call.stage]}
        </div>
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground">{call.duration}</span>
      </div>

      <div className="mt-2 flex items-start gap-2.5">
        <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white", call.accent)}>
          <PhoneIncoming className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-semibold text-foreground">{call.caller}</div>
          <div className="truncate font-mono text-[10px] text-muted-foreground">{call.number}</div>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5 rounded-md bg-muted/60 px-2 py-1.5">
        <Icon className="h-3.5 w-3.5 text-foreground/70" />
        <span className="text-[11px] font-medium text-foreground">{call.intent}</span>
      </div>

      {/* Mini waveform — only animate while talking */}
      <div className="mt-2 flex h-5 items-center gap-[2px]">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className={cn("w-[2px] rounded-full", isActive ? "bg-foreground/60" : "bg-foreground/20")}
            style={
              isActive
                ? {
                    height: `${4 + Math.abs(Math.sin((i + tick + index) * 0.7)) * 14}px`,
                    animation: `rec-bar 1s ease-in-out ${(i + index) * 0.05}s infinite`,
                  }
                : { height: `${3 + (i % 3)}px` }
            }
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="truncate text-[10px] text-muted-foreground">{call.language}</span>
        <span className={cn("truncate text-[11px] font-semibold", call.outcomeColor)}>{call.outcome}</span>
      </div>

      <style>{`
        @keyframes rec-card-in {
          from { opacity: 0; transform: translateY(8px) }
          to { opacity: 1; transform: translateY(0) }
        }
        @keyframes rec-bar {
          0%,100% { transform: scaleY(0.4); transform-origin: center }
          50% { transform: scaleY(1); transform-origin: center }
        }
      `}</style>
    </div>
  )
}
