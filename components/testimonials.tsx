"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Featured-quote rotator.
 * - One large quote at a time on the section background — no boxes, no metrics.
 * - Watermarked giant quote glyph anchors the composition.
 * - Brand rail at the bottom doubles as navigation, with an animated
 *   underline tracking the auto-rotation progress.
 */

type Testimonial = {
  id: string
  brand: string
  industry: string
  city: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "quickserv",
    brand: "QuickServ",
    industry: "E-Commerce",
    city: "Mumbai",
    quote:
      "We replaced three tools with Kedeyo and cut cost per conversation dramatically. The voice bot now handles most of our inbound calls — setup took five minutes, not five weeks.",
  },
  {
    id: "lendfast",
    brand: "LendFast",
    industry: "NBFC",
    city: "Bengaluru",
    quote:
      "Our collections team is dialing far more accounts since we moved to Kedeyo's predictive dialer. The TRAI compliance and AI QA stack means we sleep better at audit time.",
  },
  {
    id: "healthbridge",
    brand: "HealthBridge",
    industry: "Healthcare",
    city: "Delhi",
    quote:
      "Appointment no-shows dropped sharply in two months. Patients get reminders on WhatsApp, confirm with one tap, and our front desk is finally not on the phone all day.",
  },
  {
    id: "edureach",
    brand: "EduReach",
    industry: "EdTech",
    city: "Hyderabad",
    quote:
      "Counselor productivity went up significantly. The AI receptionist qualifies inbound applicants in Hindi and English, and only the warm ones reach a human counselor.",
  },
  {
    id: "fastfleet",
    brand: "FastFleet",
    industry: "Logistics",
    city: "Pune",
    quote:
      "Driver-customer calls are masked, recorded and SLA-tracked. We deflect the bulk of \"where is my order\" calls automatically — drivers stay productive, customers stay informed.",
  },
  {
    id: "shieldbank",
    brand: "ShieldBank",
    industry: "Banking",
    city: "Chennai",
    quote:
      "DPDP-ready consent capture and AI QA are built in. Our regulator response window dropped from days to hours, and our compliance team finally trusts the call records.",
  },
  {
    id: "aksharprop",
    brand: "AksharProp",
    industry: "Real Estate",
    city: "Ahmedabad",
    quote:
      "Site-visit bookings doubled and our brokers stopped chasing dead leads. The AI re-engages every cold inquiry on WhatsApp without us lifting a finger.",
  },
  {
    id: "voyagein",
    brand: "VoyageIn",
    industry: "Travel",
    city: "Goa",
    quote:
      "Peak-season call abandonment went to near zero. Multilingual coverage, no extra hardware, and our agents only talk to travellers who are ready to book.",
  },
]

const ROTATE_MS = 7000

export function Testimonials() {
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
          setActive((i) => (i + 1) % TESTIMONIALS.length)
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
  }, [active])

  const goTo = (i: number) => {
    setActive(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length)
    startRef.current = performance.now()
    setProgress(0)
  }

  const t = TESTIMONIALS[active]

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 18% 25%, oklch(0.62 0.24 300 / 0.08), transparent 70%), radial-gradient(45% 45% at 85% 80%, oklch(0.55 0.24 320 / 0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + headline */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600">
              Real results
            </div>
            <h2
              className="mt-2 font-semibold leading-[1.05] tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
            >
              What teams say after they{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                make the switch
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-fuchsia-500 text-fuchsia-500" />
              ))}
              <span className="ml-1.5 text-sm font-semibold text-foreground">4.9 / 5</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              · 500+ teams
            </span>
          </div>
        </div>

        {/* Featured quote */}
        <div
          className="relative mt-14 lg:mt-20"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {/* Watermark glyph */}
          <Quote
            aria-hidden
            strokeWidth={1.25}
            className="pointer-events-none absolute -left-2 -top-12 -z-0 h-40 w-40 -scale-x-100 text-fuchsia-500/10 lg:-left-6 lg:-top-20 lg:h-56 lg:w-56"
          />

          {/* Min-height wrapper keeps layout steady through rotations */}
          <div className="relative min-h-[260px] sm:min-h-[240px] lg:min-h-[260px]">
            <figure
              key={t.id}
              className="relative max-w-4xl"
              style={{ animation: "quote-in 600ms cubic-bezier(.2,.7,.2,1) both" }}
            >
              <blockquote
                className="text-pretty font-medium leading-[1.25] tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)" }}
              >
                <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                  &ldquo;
                </span>
                {t.quote}
                <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                  &rdquo;
                </span>
              </blockquote>

              <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  aria-hidden
                  className="h-px w-10 bg-gradient-to-r from-fuchsia-500 to-violet-500"
                />
                <span className="text-[15px] font-semibold tracking-tight text-foreground">
                  {t.brand}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.industry} · {t.city}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Inline arrow nav (sits to the right on lg) */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-foreground">{String(active + 1).padStart(2, "0")}</span>
              <span className="mx-1.5 text-border">/</span>
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fuchsia-500/40 hover:text-fuchsia-600"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fuchsia-500/40 hover:text-fuchsia-600"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Brand rail — also doubles as nav */}
        <div className="mt-14 border-t border-border pt-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
            {TESTIMONIALS.map((row, i) => {
              const isActive = i === active
              return (
                <button
                  key={row.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${row.brand} testimonial`}
                  aria-pressed={isActive}
                  className="group relative pt-3 text-left transition-opacity"
                  style={{ opacity: isActive ? 1 : 0.55 }}
                >
                  {/* Top progress rail */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-border"
                  />
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-px bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500"
                      style={{ width: `${Math.round(progress * 100)}%` }}
                    />
                  )}

                  <div
                    className={
                      "text-[13px] font-semibold tracking-tight " +
                      (isActive
                        ? "text-foreground"
                        : "text-foreground/80 group-hover:text-foreground")
                    }
                  >
                    {row.brand}
                  </div>
                  <div className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                    {row.industry}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes quote-in {
          0%   { opacity: 0; transform: translateY(10px) }
          100% { opacity: 1; transform: translateY(0)    }
        }
      `}</style>
    </section>
  )
}
