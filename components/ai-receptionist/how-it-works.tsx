"use client"

import { useEffect, useState } from "react"
import { Brain, PhoneIncoming, Workflow, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  {
    n: "01",
    icon: PhoneIncoming,
    title: "Call received",
    description:
      "Your existing business number rings into Kedeyo. The AI picks up in under a second with a greeting you scripted.",
    sample: "&ldquo;Thanks for calling Sharma Dental — how can I help?&rdquo;",
    tag: "0.4s · pickup",
  },
  {
    n: "02",
    icon: Brain,
    title: "Intent detected",
    description:
      "Real-time NLU understands whether the caller wants to book, cancel, ask a question, or reach a person — and responds naturally.",
    sample:
      "Intent: <span class='font-semibold text-foreground'>Book appointment</span> &middot; Confidence 96%",
    tag: "Real-time NLU",
  },
  {
    n: "03",
    icon: Zap,
    title: "Action taken",
    description:
      "The AI books, answers, routes or takes a message — and logs everything with transcript, sentiment and lead tag in your dashboard.",
    sample:
      "Action: <span class='font-semibold text-foreground'>Calendar event created</span> &middot; SMS sent &middot; Logged",
    tag: "Auto-completed",
  },
]

export function HowItWorks() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="how-it-works"
      className="relative border-y border-border/60 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <Workflow className="h-3.5 w-3.5" />
              How it works
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[3rem]">
              Three steps.{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Zero engineering.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">
              From the moment your phone rings to a booked appointment in your calendar &mdash; fully automated.
              Hover any step to walk through what happens on a real inbound call.
            </p>
          </div>
        </div>

        {/* Steps — vertical flow on the left, animated rail on the right (no cards) */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-2 lg:mt-20 lg:grid-cols-12">
          {STEPS.map((s, i) => {
            const isActive = i === active
            return (
              <article
                key={s.n}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group relative grid cursor-pointer grid-cols-12 items-start gap-x-4 border-t border-border py-8 transition-colors lg:col-span-12",
                  i === STEPS.length - 1 && "border-b",
                  isActive && "bg-background/40",
                )}
              >
                {/* Animated left progress rail */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-0 h-px transition-all duration-700",
                    isActive
                      ? "w-full bg-gradient-to-r from-primary via-accent to-transparent"
                      : "w-12 bg-border",
                  )}
                />

                {/* Step number */}
                <div className="col-span-2 sm:col-span-1">
                  <div
                    className={cn(
                      "font-mono font-semibold leading-none tabular-nums tracking-tight transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground/40",
                    )}
                    style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
                  >
                    {s.n}
                  </div>
                </div>

                {/* Icon + title */}
                <div className="col-span-10 flex items-start gap-4 sm:col-span-4">
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all",
                      isActive
                        ? "border-primary/40 bg-gradient-to-br from-primary/15 to-accent/10 text-primary shadow-[0_8px_30px_-12px_rgba(168,85,247,0.6)]"
                        : "border-border bg-background text-muted-foreground",
                    )}
                  >
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-lg">
                      {s.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] transition-colors",
                        isActive ? "text-emerald-600" : "text-muted-foreground/70",
                      )}
                    >
                      {s.tag}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="col-span-12 mt-2 text-[15px] leading-relaxed text-muted-foreground sm:col-span-7 sm:mt-0">
                  {s.description}
                </p>

                {/* Sample line — full width, no card */}
                <p
                  className={cn(
                    "col-span-12 mt-4 max-w-3xl border-l-2 pl-4 text-[13.5px] leading-relaxed transition-all sm:col-start-2",
                    isActive
                      ? "border-primary text-foreground"
                      : "border-border text-muted-foreground",
                  )}
                  dangerouslySetInnerHTML={{ __html: s.sample }}
                />

                {/* Active indicator pulse on the right */}
                {isActive && (
                  <span className="absolute right-0 top-7 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
