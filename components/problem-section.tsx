import Link from "next/link"
import { AlertTriangle, ArrowRight, Sparkles, PhoneOff, EyeOff, Users, MessageSquareWarning, Layers, ShieldAlert } from "lucide-react"

const PAINS = [
  {
    icon: PhoneOff,
    text: "Your team is dialing leads manually and only reaches one in three.",
  },
  {
    icon: EyeOff,
    text: "Your IVR is a black box — you cannot tell where customers drop off.",
  },
  {
    icon: Users,
    text: "Inbound calls go to one agent while ten others sit idle, or the other way round.",
  },
  {
    icon: MessageSquareWarning,
    text: "You only find out about a poor customer interaction when it shows up on Twitter.",
  },
  {
    icon: Layers,
    text: "You want WhatsApp, voice, and calls in one place, but your tools live in three.",
  },
  {
    icon: ShieldAlert,
    text: "You need TRAI- and DPDP-compliance from day one, not after a security audit.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative overflow-hidden bg-secondary/30 py-20 lg:py-24">
      {/* Brand-aligned ambient washes (violet + amber, no pink) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_25%,oklch(0.45_0.22_295/0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_85%_75%,oklch(0.78_0.16_75/0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
            <AlertTriangle className="h-3 w-3" />
            The problem
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Indian Sales and Support Teams{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Lose Conversations Every Day
            </span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            Most Indian businesses still run conversations on a stack that wasn&apos;t designed for them — a desk phone,
            a CRM tab, a WhatsApp line, a spreadsheet of leads, and one agent juggling all of it. Calls get missed.
            Hot leads cool down. Customers wait on hold. Quality is invisible until a complaint shows up.
          </p>
        </div>

        {/* Pain list — numbered, brand-tinted cards with a left accent rail */}
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {PAINS.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-[0_18px_50px_-22px_oklch(0.45_0.22_295/0.35)]"
              >
                {/* Left accent rail */}
                <span
                  aria-hidden
                  className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-primary/40 via-accent/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Icon + number stack */}
                <div className="flex shrink-0 flex-col items-center gap-1.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.06] text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:scale-105">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[10px] font-semibold tabular-nums text-muted-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="pt-1 text-[14px] leading-relaxed text-foreground/85">{p.text}</p>
              </div>
            )
          })}
        </div>

        {/* Kedeyo answer card */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.05] via-accent/[0.04] to-transparent p-6 sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_8px_25px_-8px_oklch(0.55_0.25_300/0.6)]">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  The Kedeyo answer
                </span>
                <p className="mt-1 text-pretty text-base font-medium leading-relaxed text-foreground sm:text-[17px]">
                  Kedeyo replaces that stack with a single AI contact center platform. Voice, IVR, WhatsApp, dialers,
                  monitoring, recording, analytics — all under one login, priced for Indian businesses, secured for
                  Indian regulations.
                </p>
              </div>
            </div>
            <Link
              href="#features"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-[0_10px_30px_-8px_oklch(0.45_0.22_295/0.4)]"
            >
              See the platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
