"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Compact 2×2 slideshow of testimonials.
 * - 8 testimonials split into 2 slides of 4 (2 rows × 2 cols).
 * - Slides cross-fade every 7s; dots + arrows let users navigate.
 * - No card chrome — items live on the section background, separated
 *   only by a single vertical + horizontal hairline that forms a "+".
 */

type Testimonial = {
  id: string
  brand: string
  industry: string
  city: string
  quote: string
  metric: string
  metricLabel: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "quickserv",
    brand: "QuickServ",
    industry: "E-Commerce",
    city: "Mumbai",
    quote:
      "We replaced three tools with Kedeyo and cut cost per conversation by 40%. Setup took five minutes.",
    metric: "−40%",
    metricLabel: "Cost / conversation",
  },
  {
    id: "lendfast",
    brand: "LendFast",
    industry: "NBFC",
    city: "Bengaluru",
    quote:
      "Our collections team is dialing 3× more accounts. TRAI and AI QA built in — we sleep better at audit time.",
    metric: "3×",
    metricLabel: "Accounts dialed",
  },
  {
    id: "healthbridge",
    brand: "HealthBridge",
    industry: "Healthcare",
    city: "Delhi",
    quote:
      "Appointment no-shows dropped 30% in two months. Our front desk is finally not on the phone all day.",
    metric: "−30%",
    metricLabel: "No-shows",
  },
  {
    id: "edureach",
    brand: "EduReach",
    industry: "EdTech",
    city: "Hyderabad",
    quote:
      "Counselor productivity went up 85%. Only the warm leads reach a human — the AI handles the rest in Hindi and English.",
    metric: "+85%",
    metricLabel: "Counselor output",
  },
  {
    id: "fastfleet",
    brand: "FastFleet",
    industry: "Logistics",
    city: "Pune",
    quote:
      "Driver-customer calls are masked, recorded and SLA-tracked. We deflect 60% of \"where is my order\" calls automatically.",
    metric: "60%",
    metricLabel: "Calls deflected",
  },
  {
    id: "shieldbank",
    brand: "ShieldBank",
    industry: "Banking",
    city: "Chennai",
    quote:
      "DPDP-ready consent capture and AI QA are built in. Our regulator response window dropped from days to hours.",
    metric: "0",
    metricLabel: "Audit issues",
  },
  {
    id: "aksharprop",
    brand: "AksharProp",
    industry: "Real Estate",
    city: "Ahmedabad",
    quote:
      "Site-visit bookings doubled and our brokers stopped chasing dead leads. The AI re-engages every cold inquiry on WhatsApp.",
    metric: "2×",
    metricLabel: "Site visits",
  },
  {
    id: "voyagein",
    brand: "VoyageIn",
    industry: "Travel",
    city: "Goa",
    quote:
      "Peak-season call abandonment went to near zero. Multilingual coverage, no extra hardware, agents only on what matters.",
    metric: "−92%",
    metricLabel: "Call abandonment",
  },
]

const PER_SLIDE = 4
const ROTATE_MS = 7000

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export function Testimonials() {
  const slides = chunk(TESTIMONIALS, PER_SLIDE)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const startRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    startRef.current = performance.now()
    const tick = (now: number) => {
      if (!pausedRef.current) {
        const elapsed = now - (startRef.current ?? now)
        const p = Math.min(1, elapsed / ROTATE_MS)
        setProgress(p)
        if (p >= 1) {
          setActive((i) => (i + 1) % slides.length)
          startRef.current = now
          setProgress(0)
        }
      } else {
        startRef.current = now - progress * ROTATE_MS
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, slides.length])

  const goTo = (i: number) => {
    setActive((i + slides.length) % slides.length)
    startRef.current = performance.now()
    setProgress(0)
  }

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-background py-20 lg:py-24"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 40% at 15% 20%, oklch(0.62 0.24 300 / 0.07), transparent 70%), radial-gradient(40% 40% at 85% 85%, oklch(0.55 0.24 320 / 0.05), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600">
              Real results
            </div>
            <h2
              className="mt-2 font-semibold leading-[1.1] tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
            >
              What teams say after they{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                make the switch
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right">
              <div className="inline-flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-fuchsia-500 text-fuchsia-500" />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-foreground">4.9 / 5</span>
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Across 500+ teams
              </div>
            </div>

            {/* Arrow nav */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous testimonials"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fuchsia-500/40 hover:text-fuchsia-600"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next testimonials"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fuchsia-500/40 hover:text-fuchsia-600"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow */}
        <div
          className="relative mt-12"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {slides.map((slide, sIdx) => (
            <div
              key={sIdx}
              aria-hidden={sIdx !== active}
              className="transition-opacity duration-700"
              style={{
                opacity: sIdx === active ? 1 : 0,
                pointerEvents: sIdx === active ? "auto" : "none",
                position: sIdx === active ? "relative" : "absolute",
                inset: sIdx === active ? "auto" : 0,
              }}
            >
              <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
                {slide.map((t, idx) => (
                  <Item key={t.id} t={t} index={idx} animate={sIdx === active} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dots + progress */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {slides.map((_, i) => {
            const isActive = i === active
            return (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-pressed={isActive}
                className="group relative h-1.5 overflow-hidden rounded-full bg-border/70 transition-all"
                style={{ width: isActive ? 64 : 24 }}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes test-item-in {
          0%   { opacity: 0; transform: translateY(8px) }
          100% { opacity: 1; transform: translateY(0)   }
        }
      `}</style>
    </section>
  )
}

/* ─────────  Single testimonial (no box)  ───────── */

function Item({
  t,
  index,
  animate,
}: {
  t: Testimonial
  index: number
  animate: boolean
}) {
  return (
    <figure
      className="group flex items-start gap-5"
      style={{
        animation: animate
          ? `test-item-in 600ms cubic-bezier(.2,.7,.2,1) ${index * 80}ms both`
          : undefined,
      }}
    >
      {/* Oversized metric — visual anchor on the left */}
      <div className="shrink-0 pt-1">
        <div
          className="bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text font-semibold leading-[0.95] tracking-tight text-transparent transition-transform duration-500 group-hover:-translate-y-0.5"
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
        >
          {t.metric}
        </div>
        <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
          {t.metricLabel}
        </div>
      </div>

      {/* Quote + attribution — flowing prose */}
      <div className="min-w-0 flex-1">
        <Quote
          aria-hidden
          className="h-4 w-4 -scale-x-100 text-fuchsia-500/60"
          strokeWidth={2}
        />
        <blockquote className="mt-2 text-pretty text-[15px] font-medium leading-relaxed text-foreground">
          {t.quote}
        </blockquote>
        <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-[13.5px] font-semibold tracking-tight text-foreground">
            {t.brand}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {t.industry} · {t.city}
          </span>
        </figcaption>
      </div>
    </figure>
  )
}
