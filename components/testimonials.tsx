"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

/**
 * Editorial vertical column.
 * - Four testimonials flow down the page as pure typography.
 * - No grid cells, no card surfaces — only whitespace and a thin
 *   gradient stripe on the active item.
 * - Hover or scroll-into-view advances the "now reading" highlight.
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
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const itemRefs = useRef<Array<HTMLElement | null>>([])

  // Advance the highlight as the user scrolls through the column
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Number((entry.target as HTMLElement).dataset.idx)
            if (!Number.isNaN(idx)) setActive(idx)
          }
        })
      },
      {
        threshold: [0.5],
        rootMargin: "-20% 0px -20% 0px",
      },
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

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
            "radial-gradient(50% 40% at 18% 20%, oklch(0.62 0.24 300 / 0.07), transparent 70%), radial-gradient(45% 40% at 85% 85%, oklch(0.55 0.24 320 / 0.05), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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

        {/* Editorial column */}
        <div className="relative mt-14 lg:mt-20">
          {/* Faint vertical rail (left margin) */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-px bg-border lg:block"
          />

          <div className="flex flex-col gap-16 lg:gap-24 lg:pl-12">
            {TESTIMONIALS.map((t, i) => {
              const isActive = i === active
              return (
                <figure
                  key={t.id}
                  data-idx={i}
                  ref={(el) => {
                    itemRefs.current[i] = el
                  }}
                  onMouseEnter={() => setActive(i)}
                  className="group relative transition-opacity duration-700"
                  style={{ opacity: isActive ? 1 : 0.42 }}
                >
                  {/* Active accent stripe */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-12 top-1 hidden h-full w-px lg:block"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(217,70,239,0.9), rgba(167,139,250,0.9), transparent)",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 600ms ease",
                    }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-[57px] top-2 hidden h-2.5 w-2.5 rounded-full lg:block"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(244,114,182,1) 0%, rgba(167,139,250,1) 60%, transparent 80%)",
                      boxShadow: isActive
                        ? "0 0 0 4px rgba(244,114,182,0.18), 0 0 18px 2px rgba(217,70,239,0.45)"
                        : "none",
                      opacity: isActive ? 1 : 0.25,
                      transition: "all 600ms ease",
                    }}
                  />

                  {/* Index + brand line */}
                  <div className="flex items-baseline gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span
                      className={
                        isActive
                          ? "bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text font-bold text-transparent"
                          : "text-muted-foreground"
                      }
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 max-w-[60px] bg-border" />
                    <span className="font-semibold tracking-[0.18em] text-foreground">
                      {t.brand}
                    </span>
                    <span className="text-muted-foreground/80">
                      {t.industry} · {t.city}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="relative mt-4 max-w-3xl text-pretty font-medium leading-[1.3] tracking-tight text-foreground"
                    style={{ fontSize: "clamp(1.15rem, 2vw, 1.65rem)" }}
                  >
                    <Quote
                      aria-hidden
                      strokeWidth={1.5}
                      className="absolute -left-1 -top-2 h-6 w-6 -scale-x-100 text-fuchsia-500/30 lg:-left-3"
                    />
                    {t.quote}
                  </blockquote>
                </figure>
              )
            })}
          </div>

          {/* Footer note */}
          <div className="mt-16 flex items-center gap-3 text-[12px] text-muted-foreground lg:pl-12">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono uppercase tracking-[0.22em]">
              {String(active + 1).padStart(2, "0")} <span className="text-border">/</span>{" "}
              {String(TESTIMONIALS.length).padStart(2, "0")} stories
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
