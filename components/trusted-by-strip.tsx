import { CheckCircle2 } from "lucide-react"

const COMPANIES = [
  "UrbanEats",
  "FinServe",
  "MediCare+",
  "EduPrime",
  "ShopMantra",
  "TravelZen",
  "PropHub",
  "CloudLogix",
  "BankWise",
  "LearnRight",
]

export function TrustedByStrip() {
  return (
    <section
      aria-label="Trusted by leading Indian companies"
      className="relative border-y border-primary/10 bg-background"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        {/* Left: label */}
        <div className="flex shrink-0 items-center gap-3 lg:max-w-[240px]">
          <span className="flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <p className="text-sm font-medium text-foreground">
            <span className="text-primary">5,000+</span> Indian teams
            <span className="mx-1 text-muted-foreground">trust Kedeyo</span>
          </p>
        </div>

        {/* Divider */}
        <div aria-hidden className="hidden h-8 w-px bg-border lg:block" />

        {/* Marquee */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-10">
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="text-lg font-semibold tracking-tight text-foreground/60 transition-colors hover:text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Right: compliance badges */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">
            <CheckCircle2 className="h-3 w-3" />
            DPDP
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">
            <CheckCircle2 className="h-3 w-3" />
            TRAI
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">
            <CheckCircle2 className="h-3 w-3" />
            ISO 27001
          </span>
        </div>
      </div>
    </section>
  )
}
