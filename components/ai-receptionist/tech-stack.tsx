import { Brain, Cable, Lock, Phone, ShieldCheck } from "lucide-react"

const PILLARS = [
  {
    icon: Brain,
    title: "AI & NLP",
    description:
      "Large language models fine-tuned on Indian customer conversations for real intent understanding.",
    chips: ["Indian-first LLM", "Code-mixing", "Domain training"],
  },
  {
    icon: Phone,
    title: "Voice & telephony",
    description:
      "Carrier-grade SIP trunking with 99.95% uptime and continuous call quality monitoring.",
    chips: ["SIP trunking", "99.95% uptime", "QoS monitoring"],
  },
  {
    icon: Lock,
    title: "Security & compliance",
    description:
      "ISO 27001 practices, TRAI-compliant, DPDP-ready, end-to-end encryption on every call.",
    chips: ["DPDP", "TRAI", "ISO 27001", "E2E encryption"],
  },
  {
    icon: Cable,
    title: "Integrations",
    description:
      "Connects to your calendar, CRM, helpdesk and messaging tools without engineering work.",
    chips: ["Google Calendar", "Outlook", "Zoho", "HubSpot", "Salesforce", "WhatsApp", "Slack"],
  },
]

export function TechStack() {
  return (
    <section className="relative border-t border-border/60 bg-gradient-to-b from-muted/30 to-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Enterprise-grade · Small-business pricing
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[3rem]">
              The technology behind{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                every call.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">
              India-first AI, carrier-grade voice, and compliance that lets you sleep at night &mdash; assembled
              into a single platform you can deploy in an afternoon.
            </p>
          </div>
        </div>

        {/* Pillars — typographic, hairline-separated columns */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="group relative pt-6 lg:pl-8 lg:pt-0"
            >
              {/* Hairline rail */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-border lg:right-auto lg:bottom-0 lg:h-auto lg:w-px"
              />

              <div className="flex items-baseline justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.04] text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                  <p.icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(PILLARS.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.chips.map((c, idx) => (
                  <li key={c} className="flex items-center gap-3">
                    <span>{c}</span>
                    {idx < p.chips.length - 1 && (
                      <span aria-hidden className="h-3 w-px bg-border" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
