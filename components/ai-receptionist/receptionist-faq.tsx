"use client"

import { useState } from "react"
import { HelpCircle, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "Will my customers know they&apos;re talking to an AI?",
    a: "We recommend you keep it transparent. Kedeyo sounds natural enough that most callers don&apos;t notice — but being upfront builds trust. You control the greeting and can disclose the AI at the start if you prefer.",
  },
  {
    q: "What happens if the AI can&apos;t answer something?",
    a: "It gracefully escalates — either transferring the caller to your mobile, taking a detailed message, or scheduling a callback. You&apos;ll never have a caller hang up unresolved.",
  },
  {
    q: "Can I use my existing business number?",
    a: "Yes. We forward your existing landline, mobile, or toll-free number into Kedeyo. No number changes, no porting headaches.",
  },
  {
    q: "How long does setup take?",
    a: "Most small businesses are live within 24 hours. You give us your FAQs, services, hours, and calendar — we configure the AI and run a test call with you.",
  },
  {
    q: "Does it work for businesses outside India?",
    a: "Yes. Kedeyo is built for Indian businesses first but supports international numbers and English-only deployments globally.",
  },
  {
    q: "What does it cost?",
    a: "Pricing starts well under the cost of a part-time receptionist and scales with call volume. Book a demo for a quote tailored to your business.",
  },
]

export function ReceptionistFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Quick answers to the things small business owners ask before going live.
          </p>
        </div>

        <ul className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <li
                key={i}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card transition-all",
                  isOpen ? "border-primary/30 shadow-md" : "shadow-sm hover:border-primary/20",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-semibold text-foreground"
                    dangerouslySetInnerHTML={{ __html: faq.q }}
                  />
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all",
                      isOpen
                        ? "rotate-45 border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p
                      className="border-t bg-muted/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
