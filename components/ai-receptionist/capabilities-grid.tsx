import {
  CalendarCheck,
  Headphones,
  Inbox,
  Languages,
  PhoneForwarded,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react"

type Capability = {
  icon: React.ComponentType<{ className?: string }>
  metric: string
  metricLabel: string
  title: string
  description: string
}

const CAPS: Capability[] = [
  {
    icon: PhoneForwarded,
    metric: "100%",
    metricLabel: "answered",
    title: "Picks up every call instantly",
    description:
      "No rings, no queues, no missed calls — even if 20 people call at once. Each one greeted in under a second.",
  },
  {
    icon: Languages,
    metric: "12+",
    metricLabel: "languages",
    title: "Hindi, English, Tamil & 10 more",
    description:
      "Switches mid-call based on what the caller uses. Regional accents and code-mixed Hinglish handled natively.",
  },
  {
    icon: CalendarCheck,
    metric: "Live",
    metricLabel: "calendar",
    title: "Books appointments directly",
    description:
      "Syncs with Google Calendar, Outlook or your booking tool. SMS + WhatsApp confirmations the moment a slot is locked.",
  },
  {
    icon: UserCheck,
    metric: "Hot",
    metricLabel: "leads",
    title: "Qualifies leads before they reach you",
    description:
      "Captures name, service, budget and urgency. Pings you with a structured summary so you only handle worthwhile calls.",
  },
  {
    icon: Headphones,
    metric: "FAQ",
    metricLabel: "trained",
    title: "Answers in your brand voice",
    description:
      "Pricing, hours, location, services, delivery status — answered instantly from documents and product data you upload.",
  },
  {
    icon: PhoneForwarded,
    metric: "VIP",
    metricLabel: "escalation",
    title: "Routes urgent calls to your mobile",
    description:
      "Escalates VIP clients or emergencies in seconds with full call context, intent and sentiment alongside.",
  },
  {
    icon: Inbox,
    metric: "Daily",
    metricLabel: "digest",
    title: "Sends a full call summary every morning",
    description:
      "Every call, every transcript, every booking — delivered to your inbox and WhatsApp first thing the next day.",
  },
  {
    icon: Zap,
    metric: "<1h",
    metricLabel: "to live",
    title: "Set up in under an hour",
    description:
      "Forward your existing landline, mobile or toll-free number into Kedeyo. No porting, no hardware, no engineering.",
  },
]

export function CapabilitiesGrid() {
  return (
    <section className="relative bg-background py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 0% 100%, oklch(0.94 0.06 295 / 0.5), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              What it handles for you
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.4rem] lg:text-[2.75rem]">
              Everything a great receptionist does &mdash;{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                only always on.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-pretty text-[15.5px] leading-relaxed text-muted-foreground">
              Built for clinics, salons, consultants, retailers and service businesses. Set it up once and the AI
              handles every inbound call, 24/7/365.
            </p>
          </div>
        </div>

        {/* 2-column staggered typographic flow */}
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:gap-x-16 lg:gap-y-12">
          {CAPS.map((c, i) => (
            <Item key={c.title} cap={c} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Item({ cap, flip }: { cap: Capability; flip: boolean }) {
  const Icon = cap.icon
  return (
    <div
      className={`group flex items-start gap-5 ${
        flip ? "sm:translate-y-10" : ""
      }`}
    >
      {/* Oversized metric — visual anchor */}
      <div className="shrink-0">
        <div
          className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text font-semibold leading-[0.95] tracking-tight text-transparent transition-transform duration-500 group-hover:-translate-y-0.5"
          style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)" }}
        >
          {cap.metric}
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
          <Icon className="h-3 w-3 text-primary/70" />
          {cap.metricLabel}
        </div>
      </div>

      {/* Title + body */}
      <div className="min-w-0 flex-1 pt-2">
        <h3 className="text-[16.5px] font-semibold tracking-tight text-foreground">
          {cap.title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
          {cap.description}
        </p>
      </div>
    </div>
  )
}
