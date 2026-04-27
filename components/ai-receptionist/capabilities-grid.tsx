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
  detail: string
}

const CAPS: Capability[] = [
  {
    icon: PhoneForwarded,
    metric: "100%",
    metricLabel: "calls answered",
    title: "Picks up every call instantly",
    description:
      "No rings, no queues, no missed calls — even if 20 people call at the same time. Each one is greeted in under a second by a dedicated AI line.",
    detail: "Auto-scales with traffic · Zero missed",
  },
  {
    icon: Languages,
    metric: "12+",
    metricLabel: "languages",
    title: "Speaks Hindi, English, Tamil & 10 more",
    description:
      "Switches mid-call based on what the caller uses. Regional accents and code-mixed Hinglish handled natively.",
    detail: "हिन्दी · English · मराठी · தமிழ் · తెలుగు · বাংলা · ગુજરાતી · ಕನ್ನಡ · ਪੰਜਾਬੀ",
  },
  {
    icon: CalendarCheck,
    metric: "Live",
    metricLabel: "calendar sync",
    title: "Books appointments directly",
    description:
      "Syncs with Google Calendar, Outlook or your booking tool. Sends SMS and WhatsApp confirmations the moment a slot is locked in.",
    detail: "10:00 booked · 11:30 free · 12:00 booked · 16:00 booked",
  },
  {
    icon: UserCheck,
    metric: "Hot",
    metricLabel: "lead qualification",
    title: "Qualifies leads before they reach you",
    description:
      "Captures name, service, budget and urgency, then pings you with a structured summary so you only handle the conversations worth your time.",
    detail: "Anjali M. · Root canal · Urgency: high",
  },
  {
    icon: Headphones,
    metric: "FAQ",
    metricLabel: "trained on your docs",
    title: "Answers questions in your brand voice",
    description:
      "Pricing, hours, location, services, delivery status — answered instantly from documents and product data you upload.",
    detail: "Pricing · Hours · Location · Services · Order status",
  },
  {
    icon: PhoneForwarded,
    metric: "VIP",
    metricLabel: "smart escalation",
    title: "Routes urgent calls to your mobile",
    description:
      "Escalates VIP clients or emergencies to a live human in seconds, with full call context, intent and sentiment delivered alongside.",
    detail: "AI → VIP detected → Owner",
  },
  {
    icon: Inbox,
    metric: "Daily",
    metricLabel: "summary digest",
    title: "Sends a full call summary every morning",
    description:
      "Every call, every transcript, every booking — delivered to your inbox and WhatsApp first thing the next day.",
    detail: "142 calls · 38 bookings · 11 hot leads",
  },
  {
    icon: Zap,
    metric: "<1h",
    metricLabel: "to live",
    title: "Set up in under an hour",
    description:
      "Forward your existing landline, mobile or toll-free number into Kedeyo. No porting, no hardware, no engineering work required.",
    detail: "Connect number → Upload docs → Pick voice → Live",
  },
]

export function CapabilitiesGrid() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 0% 100%, oklch(0.94 0.06 295 / 0.5), transparent 60%), radial-gradient(ellipse 40% 30% at 100% 0%, oklch(0.95 0.05 220 / 0.4), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header — editorial, left-aligned */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              What it handles for you
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[3rem]">
              Everything a great receptionist does &mdash;{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                only always on.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">
              Built for clinics, salons, consultants, retailers and service businesses. Set it up once and the AI
              handles every inbound call, 24/7/365 &mdash; without rings, queues or voicemail.
            </p>
          </div>
        </div>

        {/* Editorial ledger — numbered rows, no cards */}
        <ol className="mt-16 lg:mt-20">
          {CAPS.map((c, i) => (
            <CapabilityRow key={c.title} cap={c} index={i} last={i === CAPS.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function CapabilityRow({
  cap,
  index,
  last,
}: {
  cap: Capability
  index: number
  last: boolean
}) {
  const Icon = cap.icon
  return (
    <li
      className={`group grid grid-cols-12 items-start gap-x-4 gap-y-2 border-t border-border/70 py-7 transition-colors hover:bg-muted/40 sm:gap-x-6 lg:py-8 ${
        last ? "border-b" : ""
      }`}
    >
      {/* 01 mono number */}
      <div className="col-span-2 flex items-baseline gap-2 sm:col-span-1">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Icon + metric anchor */}
      <div className="col-span-10 flex items-center gap-3 sm:col-span-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.04] text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-2xl font-semibold leading-none tracking-tight text-transparent sm:text-[1.75rem]">
            {cap.metric}
          </div>
          <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
            {cap.metricLabel}
          </div>
        </div>
      </div>

      {/* Title + body */}
      <div className="col-span-12 sm:col-span-8">
        <h3 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-lg">
          {cap.title}
        </h3>
        <p className="mt-1.5 max-w-2xl text-[14.5px] leading-relaxed text-muted-foreground">
          {cap.description}
        </p>
        <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground/80">
          {cap.detail}
        </p>
      </div>
    </li>
  )
}
