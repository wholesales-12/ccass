import { Briefcase, Building2, ShoppingBag, Stethoscope, UsersRound } from "lucide-react"

const FITS = [
  {
    icon: Stethoscope,
    title: "Clinics, salons & service businesses",
    description:
      "Patients and clients expect instant booking. Kedeyo handles appointment requests, reschedules, and reminders — so your front desk isn&apos;t chained to the phone.",
    examples: ["Dental clinics", "Dermatology", "Salons", "Spas", "Physio"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: UsersRound,
    title: "Solopreneurs & consultants",
    description:
      "Running a one-person business means you&apos;re either on a client call or missing the next one. Let the AI qualify every inbound lead and only ping you for the ones worth your time.",
    examples: ["Coaches", "Designers", "Tutors", "Freelancers", "Trainers"],
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: ShoppingBag,
    title: "Small retail & e-commerce",
    description:
      "Callers want to know order status, delivery time, or product availability. Kedeyo reads from your system and answers instantly — no more repetitive calls.",
    examples: ["D2C brands", "Local stores", "Bakeries", "Boutiques", "Repair shops"],
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Real estate, law & finance",
    description:
      "High-value inquiries can&apos;t sit in voicemail. The AI captures them, qualifies them, and routes hot leads to you within seconds — even on a Sunday.",
    examples: ["Property agents", "CAs", "Lawyers", "Insurance", "Wealth advisors"],
    accent: "from-amber-500 to-orange-500",
  },
]

export function PerfectFor() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Briefcase className="h-3.5 w-3.5" />
            Perfect for your business
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for small businesses{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">across India</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            From solo consultants to high-volume clinics, Kedeyo plugs into the way you already work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FITS.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Decorative gradient */}
              <div
                aria-hidden
                className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${f.accent} opacity-[0.08] blur-2xl transition-opacity group-hover:opacity-20`}
              />

              <div className="relative flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-md`}
                >
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: f.description }}
                  />

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {f.examples.map((e) => (
                      <li
                        key={e}
                        className="rounded-full border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
