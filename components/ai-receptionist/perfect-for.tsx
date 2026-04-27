import { Briefcase, Building2, ShoppingBag, Stethoscope, UsersRound } from "lucide-react"

const FITS = [
  {
    icon: Stethoscope,
    title: "Clinics, salons & service businesses",
    description:
      "Patients and clients expect instant booking. Kedeyo handles appointment requests, reschedules, and reminders so your front desk is no longer chained to the phone.",
    examples: ["Dental clinics", "Dermatology", "Salons", "Spas", "Physio"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: UsersRound,
    title: "Solopreneurs & consultants",
    description:
      "Running a one-person business means you're either on a client call or missing the next one. Let the AI qualify every inbound lead and only ping you for the ones worth your time.",
    examples: ["Coaches", "Designers", "Tutors", "Freelancers", "Trainers"],
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: ShoppingBag,
    title: "Small retail & e-commerce",
    description:
      "Callers want to know order status, delivery time, or product availability. Kedeyo reads from your system and answers instantly &mdash; no more repetitive calls.",
    examples: ["D2C brands", "Local stores", "Bakeries", "Boutiques", "Repair shops"],
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Real estate, law & finance",
    description:
      "High-value inquiries can't sit in voicemail. The AI captures them, qualifies them, and routes hot leads to you within seconds &mdash; even on a Sunday.",
    examples: ["Property agents", "CAs", "Lawyers", "Insurance", "Wealth advisors"],
    accent: "from-amber-500 to-orange-500",
  },
]

export function PerfectFor() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <Briefcase className="h-3.5 w-3.5" />
              Perfect for your business
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[3rem]">
              Built for small businesses{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                across India.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">
              From solo consultants to high-volume clinics, Kedeyo plugs into the way you already work &mdash; no
              new tools, no new processes, no new learning curve.
            </p>
          </div>
        </div>

        {/* Editorial 4-row layout, no cards */}
        <ol className="mt-16 lg:mt-20">
          {FITS.map((f, i) => (
            <li
              key={f.title}
              className={`group grid grid-cols-12 items-start gap-x-4 gap-y-2 border-t border-border py-8 transition-colors hover:bg-muted/40 sm:gap-x-6 lg:py-10 ${
                i === FITS.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Index */}
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon */}
              <div className="col-span-10 sm:col-span-2">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${f.accent} text-white shadow-md transition-transform duration-300 group-hover:-translate-y-0.5`}
                >
                  <f.icon className="h-5 w-5" />
                </div>
              </div>

              {/* Title + description */}
              <div className="col-span-12 sm:col-span-9">
                <h3 className="text-[18px] font-semibold tracking-tight text-foreground sm:text-xl">
                  {f.title}
                </h3>
                <p
                  className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: f.description }}
                />
                <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                  {f.examples.map((e, idx) => (
                    <li key={e} className="flex items-center gap-3">
                      <span>{e}</span>
                      {idx < f.examples.length - 1 && (
                        <span aria-hidden className="h-3 w-px bg-border" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
