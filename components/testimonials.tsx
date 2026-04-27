"use client"

import { Star } from "lucide-react"

/**
 * Testimonials — editorial wall of pull quotes.
 * No card boxes, no borders, no rounded containers.
 * Every quote is laid out with an oversized gradient metric in the
 * left margin and the quote in large editorial type beside it,
 * separated only by whitespace.
 */

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

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Soft glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[860px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* ── Header ── */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Real results
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              What teams say after they{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                make the switch
              </span>
            </h2>
          </div>

          <div className="md:col-span-4 md:text-right">
            <div className="inline-flex flex-col gap-1 md:items-end">
              <div className="flex items-center gap-1.5 md:justify-end">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">4.9 / 5</span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                across 500+ teams
              </span>
            </div>
          </div>
        </div>

        {/* ── Wall of pull quotes ── */}
        <div className="mt-20 space-y-16 lg:mt-28 lg:space-y-20">
          {TESTIMONIALS.map((t, i) => {
            // Alternate left/right alignment of the metric for editorial rhythm.
            const flip = i % 2 === 1
            return (
              <article
                key={t.name}
                className="grid grid-cols-12 items-baseline gap-x-6 gap-y-4"
              >
                {/* Metric */}
                <div
                  className={`col-span-12 md:col-span-3 ${
                    flip ? "md:order-3 md:text-left" : "md:text-right"
                  }`}
                >
                  <span
                    className="inline-block bg-gradient-to-br from-primary via-primary to-accent bg-clip-text font-semibold leading-none tracking-tight text-transparent"
                    style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
                  >
                    {t.metric}
                  </span>
                  <div
                    className={`mt-1 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-muted-foreground ${
                      flip ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {t.metricLabel}
                  </div>
                </div>

                {/* Quote + attribution */}
                <div className={`col-span-12 md:col-span-9 ${flip ? "md:order-2" : ""}`}>
                  <p
                    className="text-balance font-medium leading-[1.25] tracking-tight text-foreground"
                    style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)" }}
                  >
                    <span className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/65 bg-clip-text text-transparent">
                      &ldquo;{t.pull}&rdquo;
                    </span>
                  </p>
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[15px] font-semibold tracking-tight text-foreground">
                      {t.name}
                    </span>
                    <span className="text-[12px] text-muted-foreground">
                      {t.role} · {t.city}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
