import { Quote, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "We replaced three tools with Kedeyo and cut our cost per conversation by 40%. The Voice Bot now handles 60% of our inbound calls. Setup took five minutes, not five weeks.",
    name: "QuickServ",
    role: "Mumbai · E-Commerce",
    initials: "QS",
  },
  {
    quote:
      "Our collections team is dialing 3× more accounts since we moved to Kedeyo's predictive dialer. The TRAI compliance and AI QA stack means we sleep better at audit time.",
    name: "LendFast",
    role: "Bengaluru · NBFC",
    initials: "LF",
  },
  {
    quote:
      "Appointment no-shows dropped by 30% in two months. Patients get reminders on WhatsApp, confirm with one tap, and our front desk is finally not on the phone all day.",
    name: "HealthBridge",
    role: "Delhi · Healthcare",
    initials: "HB",
  },
  {
    quote:
      "Counselor productivity went up 85%. The AI receptionist qualifies inbound applicants in Hindi and English, and only the warm ones reach a human counselor.",
    name: "EduReach",
    role: "Hyderabad · EdTech",
    initials: "ER",
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Real results</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted by India&apos;s fastest-growing teams
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Real results from real Indian teams running their conversations on Kedeyo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-accent" />
              <div className="mt-3 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
