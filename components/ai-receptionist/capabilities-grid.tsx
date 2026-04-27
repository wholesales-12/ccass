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
    <section
      className="relative isolate overflow-hidden bg-[#0a0612] py-20 lg:py-24"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 65% 55% at 100% 0%, oklch(0.45 0.22 305 / 0.55), transparent 65%), radial-gradient(ellipse 60% 50% at 0% 100%, oklch(0.55 0.24 320 / 0.40), transparent 70%)",
      }}
    >
      {/* Ambient dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(217,70,239,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header — centered */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-fuchsia-300">
            <Sparkles className="h-3.5 w-3.5" />
            What it handles for you
          </span>
          <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[2.4rem] lg:text-[2.85rem]">
            Everything a great receptionist does &mdash;{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-pink-300 bg-clip-text text-transparent">
              only always on.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-white/55">
            Built for clinics, salons, consultants, retailers and service businesses. Set it up once and the AI
            handles every inbound call, 24/7/365.
          </p>
        </div>

        {/* Decorative connecting rail */}
        <div className="relative mt-16 lg:mt-20">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(217,70,239,0.25) 20%, rgba(167,139,250,0.25) 50%, rgba(244,114,182,0.25) 80%, transparent 100%)",
            }}
          />

          {/* 4-column constellation grid (no boxes, only typography + glow) */}
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16">
            {CAPS.map((c, i) => (
              <Item key={c.title} cap={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Item({ cap, index }: { cap: Capability; index: number }) {
  const Icon = cap.icon
  return (
    <div className="group relative">
      {/* Soft glow that lights up on hover — replaces a card surface */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217,70,239,0.18), transparent 70%)",
        }}
      />

      {/* Icon chip — small, ring-only, no fill */}
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-fuchsia-400/30 transition-all duration-300 group-hover:ring-fuchsia-300/70 group-hover:ring-2">
          <Icon className="h-3.5 w-3.5 text-fuchsia-300 transition-colors duration-300 group-hover:text-fuchsia-200" />
        </span>
        <span className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.22em] text-white/40">
          {String(index + 1).padStart(2, "0")} / {cap.metricLabel}
        </span>
      </div>

      {/* Oversized gradient metric */}
      <div
        className="mt-5 bg-gradient-to-br from-fuchsia-300 via-violet-300 to-pink-200 bg-clip-text font-semibold leading-[0.95] tracking-tight text-transparent transition-transform duration-500 group-hover:-translate-y-0.5"
        style={{ fontSize: "clamp(2.75rem, 4.5vw, 3.5rem)" }}
      >
        {cap.metric}
      </div>

      {/* Hairline accent under metric — fills on hover */}
      <span
        aria-hidden
        className="mt-2 block h-px w-10 bg-white/15 transition-all duration-500 group-hover:w-24"
        style={{
          background:
            "linear-gradient(90deg, rgba(217,70,239,0.7), rgba(167,139,250,0.5), transparent)",
        }}
      />

      {/* Title */}
      <h3 className="mt-4 text-pretty text-[16.5px] font-semibold leading-snug tracking-tight text-white">
        {cap.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">
        {cap.description}
      </p>
    </div>
  )
}
