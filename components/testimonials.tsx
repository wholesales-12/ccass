"use client"

import { useState } from "react"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const TESTIMONIALS = [
  {
    quote:
      "We replaced three tools with Kedeyo and cut our cost per conversation by 40%. The Voice Bot now handles 60% of our inbound calls. Setup took five minutes, not five weeks.",
    metric: { value: "−40%", label: "Cost / conversation" },
    name: "QuickServ",
    role: "E-Commerce · Mumbai",
    initials: "QS",
  },
  {
    quote:
      "Our collections team is dialing 3× more accounts since we moved to Kedeyo's predictive dialer. The TRAI compliance and AI QA stack means we sleep better at audit time.",
    metric: { value: "3×", label: "Accounts dialed" },
    name: "LendFast",
    role: "NBFC · Bengaluru",
    initials: "LF",
  },
  {
    quote:
      "Appointment no-shows dropped by 30% in two months. Patients get reminders on WhatsApp, confirm with one tap, and our front desk is finally not on the phone all day.",
    metric: { value: "−30%", label: "No-shows" },
    name: "HealthBridge",
    role: "Healthcare · Delhi",
    initials: "HB",
  },
  {
    quote:
      "Counselor productivity went up 85%. The AI receptionist qualifies inbound applicants in Hindi and English, and only the warm ones reach a human counselor.",
    metric: { value: "+85%", label: "Counselor output" },
    name: "EduReach",
    role: "EdTech · Hyderabad",
    initials: "ER",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]
  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28">
      {/* Soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Real results
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted by India&apos;s fastest-growing teams
          </h2>
        </div>

        {/* Featured quote — no card chrome */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* Massive watermark quote glyph */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-[12rem] leading-none text-primary/10 sm:text-[16rem]"
          >
            &ldquo;
          </span>

          {/* Stars + metric pill */}
          <div className="relative flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="inline-flex items-center gap-2 text-sm">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
                {t.metric.value}
              </span>
              <span className="text-muted-foreground">{t.metric.label}</span>
            </div>
          </div>

          {/* The quote itself — typography-led, no border */}
          <blockquote
            key={t.name}
            className="relative mt-6 text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {t.quote}
            </span>
          </blockquote>

          {/* Author + nav */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <figcaption className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.62_0.24_300_/_0.6)]">
                {t.initials}
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-foreground text-background transition-all hover:scale-[1.04]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Brand strip — subtle dot rail */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border/60 pt-8">
            {TESTIMONIALS.map((item, idx) => {
              const isActive = idx === active
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={cn(
                    "group inline-flex items-center gap-2 text-sm font-medium tracking-tight transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground",
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all",
                      isActive
                        ? "scale-110 bg-gradient-to-r from-primary to-accent"
                        : "bg-muted-foreground/30 group-hover:bg-foreground",
                    )}
                  />
                  {item.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
