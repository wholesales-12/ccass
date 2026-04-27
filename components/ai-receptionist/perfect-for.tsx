import { Briefcase, Building2, ShoppingBag, Stethoscope, UsersRound } from "lucide-react"

const FITS = [
  {
    icon: Stethoscope,
    title: "Clinics, salons & service",
    description:
      "Patients and clients expect instant booking. Kedeyo handles requests, reschedules and reminders so your front desk isn't chained to the phone.",
    examples: ["Dental", "Dermatology", "Salons", "Spas", "Physio"],
    color: "text-emerald-600",
  },
  {
    icon: UsersRound,
    title: "Solopreneurs & consultants",
    description:
      "When you're already on a client call, the AI qualifies every inbound lead and only pings you for the ones worth your time.",
    examples: ["Coaches", "Designers", "Tutors", "Trainers"],
    color: "text-violet-600",
  },
  {
    icon: ShoppingBag,
    title: "Small retail & e-commerce",
    description:
      "Reads from your system to answer order status, delivery time and product availability instantly — no more repetitive calls.",
    examples: ["D2C", "Bakeries", "Boutiques", "Repair shops"],
    color: "text-fuchsia-600",
  },
  {
    icon: Building2,
    title: "Real estate, law & finance",
    description:
      "High-value inquiries can't sit in voicemail. The AI captures, qualifies, and routes hot leads to you within seconds — even Sundays.",
    examples: ["Property", "CAs", "Lawyers", "Insurance"],
    color: "text-amber-600",
  },
]

export function PerfectFor() {
  return (
    <section className="relative bg-muted/30 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header — single line */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <Briefcase className="h-3.5 w-3.5" />
              Perfect for your business
            </span>
            <h2 className="mt-3 text-balance text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-[2.25rem] lg:text-[2.5rem]">
              Built for small businesses{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                across India.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
            From solo consultants to high-volume clinics &mdash; no new tools, no new processes, no new learning curve.
          </p>
        </div>

        {/* Compact 4-column grid — no boxes, hairline-divided */}
        <div className="mt-12 grid gap-x-10 gap-y-10 border-t border-border/70 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {FITS.map((f) => (
            <div key={f.title} className="group flex flex-col">
              <f.icon
                className={`h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 ${f.color}`}
                strokeWidth={1.75}
              />
              <h3 className="mt-4 text-[15.5px] font-semibold tracking-tight text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {f.description}
              </p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/85">
                {f.examples.map((e, idx) => (
                  <li key={e} className="flex items-center gap-2">
                    <span>{e}</span>
                    {idx < f.examples.length - 1 && (
                      <span aria-hidden className="h-2.5 w-px bg-border" />
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
