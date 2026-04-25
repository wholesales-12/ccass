import {
  CalendarCheck,
  CheckCheck,
  Headphones,
  Inbox,
  Languages,
  PhoneForwarded,
  Sparkles,
  UserCheck,
} from "lucide-react"

const CAPABILITIES = [
  {
    icon: PhoneForwarded,
    title: "Answers 100% of calls instantly",
    description:
      "No rings, no queues, no missed calls — even if 20 customers call at the same time. Picks up in under a second.",
    metric: "<1s pickup",
  },
  {
    icon: Languages,
    title: "Speaks natural Hindi & English",
    description:
      "Switches mid-call based on what the caller uses. Regional accents and code-mixed Hinglish supported.",
    metric: "12+ languages",
  },
  {
    icon: CalendarCheck,
    title: "Books appointments directly",
    description:
      "Syncs with Google Calendar, Outlook or your booking tool. Sends SMS & WhatsApp confirmations automatically.",
    metric: "Live calendar sync",
  },
  {
    icon: UserCheck,
    title: "Qualifies leads before they reach you",
    description:
      "Captures name, service, budget and urgency — then pings you with a structured summary so you only handle hot leads.",
    metric: "Hot-lead routing",
  },
  {
    icon: Headphones,
    title: "Answers FAQs from your knowledge base",
    description:
      "Pricing, hours, location, services, delivery status — all answered in your brand voice from documents you upload.",
    metric: "Trained on your docs",
  },
  {
    icon: PhoneForwarded,
    title: "Routes urgent calls to your mobile",
    description:
      "Escalates VIP clients or emergencies to a live human in seconds with full call context and intent.",
    metric: "Smart escalation",
  },
  {
    icon: Inbox,
    title: "Sends a daily call summary",
    description:
      "Every call, every transcript, every booking — delivered to your email or WhatsApp each morning.",
    metric: "Daily digest",
  },
  {
    icon: CheckCheck,
    title: "Set up in under an hour",
    description:
      "Forward your existing landline, mobile or toll-free number into Kedeyo. No porting, no hardware, no coding.",
    metric: "Live in 24 hours",
  },
]

export function CapabilitiesGrid() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            What it handles for you
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything a great receptionist does — only{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              always on
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Built for clinics, salons, consultants, retailers and service businesses. Set it up once — the AI handles
            calls 24/7/365.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c, i) => (
            <li
              key={c.title}
              className="group relative flex flex-col rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                  {c.metric}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
