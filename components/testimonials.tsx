"use client"

import { Star } from "lucide-react"

/**
 * Compact testimonial layout — looks like a real testimonial section.
 * - 2x2 grid of short quotes
 * - Small monogram avatars, brand info, stars rating
 * - No card backgrounds, no borders — only a small gradient accent
 *   hairline above each item separating it from the next
 */

type Testimonial = {
  id: string
  brand: string
  industry: string
  city: string
  author: string
  role: string
  monogram: string
  quote: string
  gradient: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "quickserv",
    brand: "QuickServ",
    industry: "E-Commerce",
    city: "Mumbai",
    author: "Priya Sharma",
    role: "Head of Operations",
    monogram: "QS",
    quote:
      "Replaced three tools with Kedeyo and cut cost per conversation dramatically. The voice bot handles most inbound calls — setup took five minutes, not five weeks.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "lendfast",
    brand: "LendFast",
    industry: "NBFC",
    city: "Bengaluru",
    author: "Arjun Mehta",
    role: "VP, Collections",
    monogram: "LF",
    quote:
      "Our team is dialing far more accounts since we moved to Kedeyo's predictive dialer. TRAI compliance and AI QA built in — we sleep better at audit time.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "healthbridge",
    brand: "HealthBridge",
    industry: "Healthcare",
    city: "Delhi",
    author: "Dr. Anjali Rao",
    role: "Clinic Director",
    monogram: "HB",
    quote:
      "Appointment no-shows dropped sharply in two months. Patients confirm on WhatsApp with one tap, and our front desk is finally not on the phone all day.",
    gradient: "from-pink-500 to-violet-500",
  },
  {
    id: "edureach",
    brand: "EduReach",
    industry: "EdTech",
    city: "Hyderabad",
    author: "Vikram Singh",
    role: "Head of Admissions",
    monogram: "ER",
    quote:
      "Counselor productivity went up significantly. The AI qualifies inbound applicants in Hindi and English — only the warm ones reach a human counselor.",
    gradient: "from-violet-500 to-pink-500",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-background py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600">
              Real results
            </div>
            <h2
              className="mt-2 font-semibold leading-[1.1] tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
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

        {/* 2 x 2 testimonial grid — no boxes */}
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.id} className="group flex flex-col">
              {/* Accent hairline */}
              <span
                aria-hidden
                className="block h-px w-12 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-transparent transition-all duration-500 group-hover:w-20"
              />

              {/* Stars */}
              <div className="mt-4 inline-flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-fuchsia-500 text-fuchsia-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-3 text-pretty text-[15px] font-medium leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="mt-5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-sm`}
                >
                  {t.monogram}
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-semibold leading-tight text-foreground">
                    {t.author}
                    <span className="ml-1.5 font-normal text-muted-foreground">
                      · {t.role}
                    </span>
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t.brand} · {t.industry} · {t.city}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
