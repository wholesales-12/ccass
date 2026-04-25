"use client"

import { useEffect, useRef, useState } from "react"
import { IndianRupee, PhoneOff, TrendingDown, UserX } from "lucide-react"

const STATS = [
  {
    icon: PhoneOff,
    value: 62,
    suffix: "%",
    label: "of calls to small businesses",
    accent: "go unanswered",
    tone: "destructive" as const,
  },
  {
    icon: UserX,
    value: 85,
    suffix: "%",
    label: "of those callers",
    accent: "never call back",
    tone: "destructive" as const,
  },
  {
    icon: IndianRupee,
    value: 45,
    suffix: "k",
    label: "monthly cost of a",
    accent: "human receptionist",
    tone: "muted" as const,
  },
  {
    icon: TrendingDown,
    value: 0,
    suffix: "%",
    label: "missed calls with",
    accent: "Kedeyo AI",
    tone: "success" as const,
  },
]

export function MissedCallStats() {
  return (
    <section className="relative border-b bg-muted/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-3 py-1 text-xs font-semibold text-destructive">
            <PhoneOff className="h-3.5 w-3.5" />
            The cost of a ringing phone
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why small businesses lose customers to a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ringing phone</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            You&apos;re juggling the counter, WhatsApp inquiries, a client in front of you, and three calls coming in.
            Something has to give — and it&apos;s usually the phone.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.accent} {...s} delay={i * 120} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Hiring a full-time receptionist costs <span className="font-semibold text-foreground">₹25,000–₹45,000/month</span> — and they
          still clock out at 7 PM. Voicemail trees frustrate callers. You need an answer that&apos;s instant, sounds human,
          and never sleeps.
        </p>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  accent,
  tone,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  accent: string
  tone: "destructive" | "muted" | "success"
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.4 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const start = setTimeout(() => {
      const dur = 1200
      const steps = 30
      const inc = Math.max(1, value / steps)
      let cur = 0
      const t = setInterval(() => {
        cur += inc
        if (cur >= value) {
          setCount(value)
          clearInterval(t)
        } else {
          setCount(Math.floor(cur))
        }
      }, dur / steps)
    }, delay)
    return () => clearTimeout(start)
  }, [visible, value, delay])

  const valueColor =
    tone === "destructive" ? "text-destructive" : tone === "success" ? "text-emerald-600" : "text-foreground"
  const iconBg =
    tone === "destructive"
      ? "bg-destructive/10 text-destructive"
      : tone === "success"
      ? "bg-emerald-500/10 text-emerald-600"
      : "bg-muted text-muted-foreground"

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className={`mt-4 font-mono text-3xl font-semibold tabular-nums sm:text-4xl ${valueColor}`}>
        {value === 0 ? "0" : count}
        <span className="text-2xl">{suffix}</span>
      </div>
      <p className="mt-2 text-xs leading-snug text-muted-foreground">
        {label}{" "}
        <span className="font-semibold text-foreground">{accent}</span>
      </p>
    </div>
  )
}
