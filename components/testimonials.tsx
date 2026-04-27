"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

/**
 * Cinematic single-quote spotlight.
 * - One large editorial quote at a time, auto-rotating every 6s.
 * - Animated counter that ticks up to the metric on every change.
 * - Brand selector row with thin progress bar acts as nav.
 * - No card chrome, no boxes — only typography, motion, and a single hairline.
 */

type Metric = {
  prefix: string
  number: number
  suffix: string
  label: string
  isInteger?: boolean
}

type Testimonial = {
  id: string
  brand: string
  industry: string
  city: string
  quote: string
  metric: Metric
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "quickserv",
    brand: "QuickServ",
    industry: "E-Commerce",
    city: "Mumbai",
    quote:
      "We replaced three tools with Kedeyo and cut our cost per conversation by 40%. The Voice Bot now handles 60% of our inbound calls. Setup took five minutes, not five weeks.",
    metric: { prefix: "−", number: 40, suffix: "%", label: "Cost / conversation" },
  },
  {
    id: "lendfast",
    brand: "LendFast",
    industry: "NBFC",
    city: "Bengaluru",
    quote:
      "Our collections team is dialing 3× more accounts since we moved to Kedeyo's predictive dialer. The TRAI compliance and AI QA stack means we sleep better at audit time.",
    metric: { prefix: "", number: 3, suffix: "×", label: "Accounts dialed", isInteger: true },
  },
  {
    id: "healthbridge",
    brand: "HealthBridge",
    industry: "Healthcare",
    city: "Delhi",
    quote:
      "Appointment no-shows dropped 30% in two months. Patients get reminders on WhatsApp, confirm with one tap, and our front desk is finally not on the phone all day.",
    metric: { prefix: "−", number: 30, suffix: "%", label: "No-shows" },
  },
  {
    id: "edureach",
    brand: "EduReach",
    industry: "EdTech",
    city: "Hyderabad",
    quote:
      "Counselor productivity went up 85%. The AI receptionist qualifies inbound applicants in Hindi and English, and only the warm ones reach a human counselor.",
    metric: { prefix: "+", number: 85, suffix: "%", label: "Counselor output" },
  },
  {
    id: "fastfleet",
    brand: "FastFleet",
    industry: "Logistics",
    city: "Pune",
    quote:
      "Driver-customer calls are now masked and recorded. SLA visibility is real-time and we deflect 60% of \"where is my order\" calls automatically.",
    metric: { prefix: "", number: 60, suffix: "%", label: "Calls deflected" },
  },
  {
    id: "shieldbank",
    brand: "ShieldBank",
    industry: "Banking",
    city: "Chennai",
    quote:
      "TRAI compliance, DPDP-ready consent capture and AI QA are built in — we sleep better at audit time and our regulator response window dropped to hours.",
    metric: { prefix: "", number: 0, suffix: "", label: "Audit issues", isInteger: true },
  },
]

const ROTATE_MS = 6000

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const startRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    startRef.current = performance.now()
    const tick = (now: number) => {
      const elapsed = now - (startRef.current ?? now)
      const p = Math.min(1, elapsed / ROTATE_MS)
      setProgress(p)
      if (p >= 1) {
        setActive((i) => (i + 1) % TESTIMONIALS.length)
        startRef.current = now
        setProgress(0)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [active])

  const t = TESTIMONIALS[active]

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, oklch(0.62 0.24 300 / 0.08), transparent 70%), radial-gradient(50% 50% at 85% 80%, oklch(0.55 0.24 320 / 0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600">
              Real results
            </div>
            <h2
              className="mt-3 font-semibold leading-[1.05] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.5rem)" }}
            >
              What teams say after they{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                make the switch
              </span>
            </h2>
          </div>
          <div className="hidden shrink-0 text-right sm:block">
            <div className="inline-flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-fuchsia-500 text-fuchsia-500" />
              ))}
              <span className="ml-1 font-semibold text-foreground">4.9 / 5</span>
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Across 500+ teams
            </div>
          </div>
        </div>

        {/* Spotlight area */}
        <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-start">
          {/* Quote column */}
          <div className="md:col-span-8">
            <div
              aria-hidden
              className="font-serif text-7xl leading-none text-fuchsia-500/15 sm:text-8xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              &ldquo;
            </div>
            <blockquote
              key={t.id}
              className="mt-2 text-pretty font-semibold tracking-tight text-foreground"
              style={{
                fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
                lineHeight: 1.3,
                animation: "test-quote-in 600ms cubic-bezier(.2,.7,.2,1) both",
              }}
            >
              {t.quote}
            </blockquote>

            <div
              key={`att-${t.id}`}
              className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1"
              style={{ animation: "test-quote-in 600ms cubic-bezier(.2,.7,.2,1) 80ms both" }}
            >
              <span className="text-[18px] font-semibold tracking-tight text-foreground">
                {t.brand}
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.industry} · {t.city}
              </span>
            </div>
          </div>

          {/* Metric column — animated counter */}
          <div className="relative md:col-span-4 md:pl-8">
            <span
              aria-hidden
              className="absolute left-0 top-1 hidden h-[110px] w-px bg-gradient-to-b from-fuchsia-500/50 via-fuchsia-500/15 to-transparent md:block"
            />
            <CounterMetric metric={t.metric} keyId={t.id} />
          </div>
        </div>

        {/* Selector row + progress */}
        <div className="mt-16 border-t border-border pt-6">
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-6">
            {TESTIMONIALS.map((it, i) => {
              const isActive = i === active
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => {
                    setActive(i)
                    startRef.current = performance.now()
                    setProgress(0)
                  }}
                  aria-pressed={isActive}
                  className="group relative pt-3 text-left"
                >
                  <span aria-hidden className="absolute left-0 right-0 top-0 h-[2px] bg-border/70" />
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500"
                      style={{ width: `${Math.round(progress * 100)}%` }}
                    />
                  )}
                  <div
                    className={`text-[13px] font-semibold tracking-tight transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {it.brand}
                  </div>
                  <div
                    className={`mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors ${
                      isActive ? "text-fuchsia-600" : "text-muted-foreground/70"
                    }`}
                  >
                    {it.metric.prefix}
                    {it.metric.number}
                    {it.metric.suffix} · {it.industry}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes test-quote-in {
          0%   { opacity: 0; transform: translateY(10px) }
          100% { opacity: 1; transform: translateY(0)    }
        }
        @keyframes test-counter-in {
          0%   { opacity: 0; transform: translateY(8px) }
          100% { opacity: 1; transform: translateY(0)   }
        }
      `}</style>
    </section>
  )
}

/* ─────────  Animated counter  ───────── */

function CounterMetric({ metric, keyId }: { metric: Metric; keyId: string }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const dur = 900
    const target = metric.number
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      const v = target * eased
      setValue(metric.isInteger ? Math.round(v) : Math.round(v * 10) / 10)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [metric, keyId])

  const display = metric.isInteger
    ? String(value)
    : Number.isInteger(value)
      ? String(value)
      : value.toFixed(1)

  return (
    <div
      key={keyId}
      style={{ animation: "test-counter-in 600ms cubic-bezier(.2,.7,.2,1) both" }}
    >
      <div
        className="bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text font-semibold leading-none tracking-tight text-transparent tabular-nums"
        style={{ fontSize: "clamp(3.25rem, 7vw, 5.5rem)" }}
      >
        {metric.prefix}
        {display}
        {metric.suffix}
      </div>
      <div className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {metric.label}
      </div>
    </div>
  )
}
