"use client"

import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    pull: "Cut cost per conversation by 40% and replaced three tools with one.",
    metric: "−40%",
    metricLabel: "cost / conversation",
    name: "QuickServ",
    role: "E-Commerce",
    city: "Mumbai",
  },
  {
    pull: "Our collections team is dialing 3× more accounts since moving to Kedeyo.",
    metric: "3×",
    metricLabel: "accounts dialed",
    name: "LendFast",
    role: "NBFC",
    city: "Bengaluru",
  },
  {
    pull: "No-shows dropped 30% in two months. The front desk isn't on the phone all day.",
    metric: "−30%",
    metricLabel: "no-shows",
    name: "HealthBridge",
    role: "Healthcare",
    city: "Delhi",
  },
  {
    pull: "Counselor productivity went up 85%. Only the warm leads reach a human.",
    metric: "+85%",
    metricLabel: "counselor output",
    name: "EduReach",
    role: "EdTech",
    city: "Hyderabad",
  },
  {
    pull: "Setup took five minutes, not five weeks. The Voice Bot now handles 60% of inbound calls.",
    metric: "60%",
    metricLabel: "calls deflected",
    name: "FastFleet",
    role: "Logistics",
    city: "Pune",
  },
  {
    pull: "TRAI compliance and AI QA built in — we sleep better at audit time.",
    metric: "0",
    metricLabel: "audit issues",
    name: "ShieldBank",
    role: "Banking",
    city: "Chennai",
  },
]

const ROTATE_MS = 6000

export function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length)
    }, ROTATE_MS)
    return () => clearInterval(t)
  }, [])

  const current = TESTIMONIALS[active]

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Soft glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[860px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* ── Header ── */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Real results
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              What teams say after they{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                make the switch
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9 / 5</span>
            <span className="text-xs text-muted-foreground">across 500+ teams</span>
          </div>
        </div>

        {/* ── Featured quote ── */}
        <div className="relative mt-16 lg:mt-20">
          {/* Big translucent quote glyph */}
          <Quote
            aria-hidden
            className="absolute -left-2 -top-8 h-20 w-20 -translate-y-1/2 -rotate-180 fill-primary/[0.08] text-primary/[0.08] sm:h-32 sm:w-32"
            strokeWidth={0}
          />

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Quote text — large editorial typography */}
            <div className="relative lg:col-span-8">
              <p
                key={current.name + active}
                className="text-balance text-2xl font-medium leading-[1.25] tracking-tight text-foreground sm:text-3xl lg:text-[2.4rem] lg:leading-[1.18]"
                style={{ animation: "testimonials-fade-in 600ms ease-out" }}
              >
                <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/65 bg-clip-text text-transparent">
                  &ldquo;{current.pull}&rdquo;
                </span>
              </p>

              {/* Attribution row */}
              <div
                key={`attr-${active}`}
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
                style={{ animation: "testimonials-fade-in 700ms ease-out" }}
              >
                <span className="text-base font-semibold tracking-tight text-foreground">
                  {current.name}
                </span>
                <span aria-hidden className="h-3 w-px bg-border" />
                <span className="text-sm text-muted-foreground">
                  {current.role} · {current.city}
                </span>
              </div>
            </div>

            {/* Metric — outsized typography on the right */}
            <div className="relative lg:col-span-4">
              <div
                key={`metric-${active}`}
                className="flex items-baseline gap-3 lg:flex-col lg:items-end lg:gap-1"
                style={{ animation: "testimonials-fade-in 800ms ease-out" }}
              >
                <span
                  className="bg-gradient-to-br from-primary via-primary to-accent bg-clip-text font-semibold leading-none tracking-tight text-transparent"
                  style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}
                >
                  {current.metric}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground lg:text-right">
                  {current.metricLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Brand selector rail ── */}
        <div className="relative mt-16 border-t border-border/60 pt-6">
          {/* Progress bar tied to active rotation */}
          <div className="absolute left-0 right-0 top-0 h-px overflow-hidden">
            <div
              key={`bar-${active}`}
              className="h-full bg-gradient-to-r from-primary via-primary to-accent"
              style={{
                animation: `testimonials-progress ${ROTATE_MS}ms linear`,
                transformOrigin: "left center",
              }}
            />
          </div>

          <ul
            role="tablist"
            aria-label="Customer stories"
            className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {TESTIMONIALS.map((t, i) => {
              const isActive = i === active
              return (
                <li key={t.name + i}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`group flex w-full flex-col items-start gap-0.5 text-left transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground/80 hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`text-[13px] font-semibold tracking-tight transition-all ${
                        isActive ? "tracking-tight" : "tracking-normal"
                      }`}
                    >
                      {t.name}
                    </span>
                    <span
                      className={`text-[10.5px] uppercase tracking-[0.18em] transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground/60"
                      }`}
                    >
                      {t.metric} · {t.role}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @keyframes testimonials-fade-in {
          from { opacity: 0; transform: translateY(6px) }
          to   { opacity: 1; transform: translateY(0) }
        }
        @keyframes testimonials-progress {
          from { transform: scaleX(0) }
          to   { transform: scaleX(1) }
        }
      `}</style>
    </section>
  )
}
