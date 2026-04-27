"use client"

import { useEffect, useRef, useState } from "react"
import { IndianRupee, PhoneOff, TrendingDown, UserX } from "lucide-react"

type Tone = "destructive" | "muted" | "success"

type Stat = {
  icon: React.ComponentType<{ className?: string }>
  value: number
  prefix?: string
  suffix: string
  label: string
  accent: string
  tone: Tone
}

const STATS: Stat[] = [
  {
    icon: PhoneOff,
    value: 62,
    suffix: "%",
    label: "of calls to small businesses",
    accent: "go unanswered",
    tone: "destructive",
  },
  {
    icon: UserX,
    value: 85,
    suffix: "%",
    label: "of those callers",
    accent: "never call back",
    tone: "destructive",
  },
  {
    icon: IndianRupee,
    value: 45,
    prefix: "₹",
    suffix: "k",
    label: "monthly cost of a",
    accent: "human receptionist",
    tone: "muted",
  },
  {
    icon: TrendingDown,
    value: 0,
    suffix: "%",
    label: "missed calls with",
    accent: "Kedeyo AI",
    tone: "success",
  },
]

export function MissedCallStats() {
  return (
    <section className="relative border-t border-border/60 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Editorial header — left aligned */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-destructive">
              The cost of a ringing phone
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[3rem]">
              Why small businesses lose customers to a{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                ringing phone
              </span>
              .
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 lg:pt-2">
            <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">
              You&apos;re juggling the counter, WhatsApp inquiries, a client in front of you, and three calls
              coming in. Something has to give &mdash; and it&apos;s usually the phone. Hiring a full-time receptionist
              costs <span className="font-semibold text-foreground">₹25,000–₹45,000/month</span> and they still
              clock out at 7&nbsp;PM. Voicemail trees frustrate callers. You need an answer that&apos;s instant,
              sounds human, and never sleeps.
            </p>
          </div>
        </div>

        {/* Stats — oversized typography, no cards, separated by hairlines */}
        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-12">
          {STATS.map((s, i) => (
            <StatRow key={s.accent} stat={s} delay={i * 120} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatRow({ stat, delay, index }: { stat: Stat; delay: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const start = setTimeout(() => {
      const dur = 1200
      const steps = 30
      const inc = Math.max(1, stat.value / steps)
      let cur = 0
      const t = setInterval(() => {
        cur += inc
        if (cur >= stat.value) {
          setCount(stat.value)
          clearInterval(t)
        } else {
          setCount(Math.floor(cur))
        }
      }, dur / steps)
    }, delay)
    return () => clearTimeout(start)
  }, [visible, stat.value, delay])

  const Icon = stat.icon
  const valueColor =
    stat.tone === "destructive"
      ? "text-destructive"
      : stat.tone === "success"
        ? "text-emerald-600"
        : "text-foreground"
  const iconColor =
    stat.tone === "destructive"
      ? "text-destructive/70"
      : stat.tone === "success"
        ? "text-emerald-600/80"
        : "text-muted-foreground"

  return (
    <div
      ref={ref}
      className="relative pt-6 lg:pt-0 lg:pl-6"
    >
      {/* Top hairline (mobile) / left hairline (desktop) */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-border lg:right-auto lg:bottom-0 lg:h-auto lg:w-px"
      />

      <div className="flex items-center gap-2">
        <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div
        className={`mt-3 font-mono font-semibold leading-none tabular-nums tracking-tight ${valueColor}`}
        style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
      >
        {stat.prefix}
        {stat.value === 0 ? "0" : count}
        <span className="text-[0.6em] tracking-tight">{stat.suffix}</span>
      </div>

      <p className="mt-3 text-[15px] leading-snug text-muted-foreground">
        {stat.label}{" "}
        <span className="font-semibold text-foreground">{stat.accent}</span>.
      </p>
    </div>
  )
}
