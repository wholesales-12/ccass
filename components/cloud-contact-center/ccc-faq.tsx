"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQS = [
  {
    q: "What is a cloud contact center and how does it work?",
    a: "A cloud contact center runs your inbound and outbound conversations on remote servers instead of on-premise hardware. Agents log in via a web browser to handle voice, WhatsApp, email and chat from one screen. Kedeyo's AI router reads caller history, language and issue type, then connects each call to the agent most likely to resolve it on the first attempt.",
  },
  {
    q: "How long does Kedeyo take to set up?",
    a: "Most teams go live in under three minutes — sign up, configure departments and IVR, invite agents. Number porting takes 3–5 business days separately, but you can use new Kedeyo virtual numbers immediately while existing numbers transfer in the background.",
  },
  {
    q: "How is Kedeyo different from Ameyo, Genesys or NICE?",
    a: "Kedeyo is built for Indian businesses — TRAI compliant by default, hosted in AWS Mumbai and Chennai, priced in INR, supported by an India-based team in your time zone. Older Ameyo deployments still need on-premise hardware and paid upgrades for AI. Genesys and NICE are priced for North American enterprises and rarely make sense below 500 seats. Kedeyo is enterprise-grade infrastructure at India pricing, with same-day deployment.",
  },
  {
    q: "Can I port my existing phone numbers?",
    a: "Yes. Toll-free, local DIDs and virtual numbers all transfer within 3–5 business days across Indian carriers. Zero downtime — you can use new Kedeyo numbers immediately while the port runs in the background. Our team handles all carrier paperwork.",
  },
  {
    q: "Is Kedeyo TRAI compliant for outbound calls?",
    a: "Yes. Every outbound campaign automatically scrubs against the latest TRAI DND register before dialing. Daily violation reports are stored for two years. Number masking, time-of-day rules and consent capture are built in — TRAI compliance happens automatically, not as a manual checklist.",
  },
  {
    q: "How secure is the platform?",
    a: "Enterprise-grade end to end. TLS 1.3 in transit, AES-256 at rest. PCI-DSS Level 1, SOC 2 and ISO 27001 certified. Recordings sit in an encrypted vault with role-based access and full audit logs. Data residency is India only — AWS Mumbai (primary) and Chennai (failover). DPDP ready with audit logs that match what RBI, IRDAI and DPDP auditors look for.",
  },
  {
    q: "What is the uptime guarantee?",
    a: "99.95% uptime backed by a contractual SLA with service credits. Geo-redundant across AWS Mumbai and Chennai with automatic failover under 30 seconds. The 12-month rolling uptime across all customers is above 99.97%.",
  },
]

export function CCCFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-600">
              Frequently asked questions
            </p>
            <h2
              className="mt-4 text-balance font-semibold leading-[1.06] tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.6rem)" }}
            >
              Everything you ask before{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                you switch.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {FAQS.map((f, i) => {
                const isOpen = open === i
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-fuchsia-600"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] font-semibold leading-snug tracking-tight text-foreground">
                        {f.q}
                      </span>
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors">
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                    <div
                      className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="min-h-0">
                        <p className="pb-5 pr-12 text-[14.5px] leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
