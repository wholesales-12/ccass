import { Quote, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "We went from missing 30% of inbound calls to zero in two weeks. The voice bot handles 70% of queries without any agent involvement.",
    name: "Rahul Mehta",
    role: "Head of Support, ShopKart",
    initials: "RM",
  },
  {
    quote:
      "Our outbound team dials 3x faster with the predictive dialer. Contact rates jumped from 42% to 81% in the first month.",
    name: "Anita Kulkarni",
    role: "VP Sales, FinServe India",
    initials: "AK",
  },
  {
    quote:
      "The TRAI-compliant IVR and DNC filtering gave us peace of mind. Setup was genuinely 5 minutes — our IT team was shocked.",
    name: "Vikram Iyer",
    role: "COO, EduPrime",
    initials: "VI",
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Trusted by India</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Teams across India ship better conversations with Kedeyo
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
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
