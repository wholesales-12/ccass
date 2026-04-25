import { Brain, Cable, Lock, Phone, ShieldCheck } from "lucide-react"

const PILLARS = [
  {
    icon: Brain,
    title: "AI & NLP",
    description: "Large language models fine-tuned on Indian customer conversations for real intent understanding.",
    chips: ["Indian-first LLM", "Code-mixing", "Domain training"],
  },
  {
    icon: Phone,
    title: "Voice & telephony",
    description: "Carrier-grade SIP trunking with 99.95% uptime and continuous call quality monitoring.",
    chips: ["SIP trunking", "99.95% uptime", "QoS monitoring"],
  },
  {
    icon: Lock,
    title: "Security & compliance",
    description: "ISO 27001 practices, TRAI-compliant, DPDP-ready, end-to-end encryption on every call.",
    chips: ["DPDP", "TRAI", "ISO 27001", "E2E encryption"],
  },
  {
    icon: Cable,
    title: "Integrations",
    description: "Connects to your calendar, CRM, helpdesk and messaging tools without engineering work.",
    chips: ["Google Calendar", "Outlook", "Zoho", "HubSpot", "Salesforce", "WhatsApp", "Slack"],
  },
]

export function TechStack() {
  return (
    <section className="relative border-t bg-gradient-to-b from-muted/30 to-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Enterprise-grade · Small-business pricing
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The technology behind every call
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            India-first AI, carrier-grade voice, and compliance that lets you sleep at night.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.chips.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {c}
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
