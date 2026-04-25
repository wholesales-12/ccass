"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Brain, CheckCircle2, PhoneIncoming, Workflow, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  {
    n: "01",
    icon: PhoneIncoming,
    title: "Call received",
    description:
      "Your existing business number rings into Kedeyo. The AI picks up in under a second with a greeting you scripted.",
    sample: "&ldquo;Thanks for calling Sharma Dental — how can I help?&rdquo;",
    tag: "00:01",
    tagLabel: "Pickup time",
  },
  {
    n: "02",
    icon: Brain,
    title: "Intent detected",
    description:
      "Real-time NLU understands whether the caller wants to book, cancel, ask a question, or reach a person — and responds naturally.",
    sample: "Intent: <span class='text-foreground font-semibold'>Book appointment</span> · Confidence 96%",
    tag: "NLU",
    tagLabel: "Real-time",
  },
  {
    n: "03",
    icon: Zap,
    title: "Action taken",
    description:
      "The AI books, answers, routes or takes a message — and logs everything with transcript, sentiment and lead tag in your dashboard.",
    sample: "Action: <span class='text-foreground font-semibold'>Calendar event created</span> · SMS sent · Logged",
    tag: "Done",
    tagLabel: "Auto-completed",
  },
]

export function HowItWorks() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative border-y bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Workflow className="h-3.5 w-3.5" />
            How it works
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Three simple steps. Zero engineering.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            From the moment your phone rings to a booked appointment in your calendar — fully automated.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {STEPS.map((s, i) => {
            const isActive = i === active
            return (
              <div
                key={s.n}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-500",
                  isActive
                    ? "border-primary/30 shadow-[0_20px_60px_-20px_oklch(0.45_0.22_295/0.35)]"
                    : "shadow-sm hover:border-primary/20",
                )}
              >
                {/* Connector arrow (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-background shadow-sm">
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl transition-all",
                        isActive
                          ? "bg-gradient-to-br from-primary to-accent text-white shadow-md"
                          : "bg-muted text-foreground/70",
                      )}
                    >
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span
                      className={cn(
                        "font-mono text-xs font-semibold tracking-wider",
                        isActive ? "text-primary" : "text-muted-foreground/60",
                      )}
                    >
                      STEP {s.n}
                    </span>
                  </div>

                  <div className="text-right">
                    <div
                      className={cn(
                        "rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold",
                        isActive
                          ? "bg-emerald-500/10 text-emerald-600"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {s.tag}
                    </div>
                    <div className="mt-1 text-[10px] text-muted-foreground">{s.tagLabel}</div>
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

                {/* Sample line */}
                <div
                  className={cn(
                    "mt-5 rounded-xl border bg-background/60 p-3 transition-all",
                    isActive && "border-primary/20 bg-primary/[0.03]",
                  )}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    Example
                  </div>
                  <p
                    className="mt-1.5 text-xs leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: s.sample }}
                  />
                </div>

                {/* Active indicator pulse */}
                {isActive && (
                  <span className="absolute right-3 top-3 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
