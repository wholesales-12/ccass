import { Bot, Check, GitCompareArrows, Minus, User } from "lucide-react"

const ROWS = [
  {
    factor: "Availability",
    ai: "24/7/365 · no breaks",
    human: "Office hours only",
  },
  {
    factor: "Monthly cost",
    ai: "Fraction of one salary",
    human: "₹25,000–₹45,000+",
  },
  {
    factor: "Simultaneous calls",
    ai: "Unlimited",
    human: "One at a time",
  },
  {
    factor: "Languages",
    ai: "Hindi + English + 10 more",
    human: "Depends on hire",
  },
  {
    factor: "Appointment booking",
    ai: "Live calendar sync · instant confirmations",
    human: "Manual entry · prone to errors",
  },
  {
    factor: "Call data & analytics",
    ai: "Full transcripts · sentiment · reports",
    human: "Hand-written notes",
  },
  {
    factor: "Sick days & attrition",
    ai: "Never",
    human: "Ongoing hiring cost",
  },
]

export function ComparisonTable() {
  return (
    <section className="relative border-y border-border/60 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <GitCompareArrows className="h-3.5 w-3.5" />
              Compare
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[3rem]">
              AI Receptionist vs.{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Human Receptionist
              </span>
              .
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">
              A side-by-side look at how Kedeyo stacks up against a traditional front-desk hire &mdash; on the
              metrics that actually move the business.
            </p>
          </div>
        </div>

        {/* Open ledger — no outer card, just hairlines */}
        <div className="mt-16 lg:mt-20">
          {/* Header */}
          <div className="grid grid-cols-12 items-end gap-x-4 border-b border-foreground/15 pb-3">
            <div className="col-span-4 sm:col-span-4">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Factor
              </span>
            </div>
            <div className="col-span-4 flex items-center gap-2 sm:col-span-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
                <Bot className="h-3 w-3" />
              </span>
              <div className="leading-tight">
                <div className="text-[12.5px] font-semibold text-foreground">Kedeyo AI</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary/80">
                  Recommended
                </div>
              </div>
            </div>
            <div className="col-span-4 flex items-center gap-2 sm:col-span-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-white text-muted-foreground">
                <User className="h-3 w-3" />
              </span>
              <div className="leading-tight">
                <div className="text-[12.5px] font-semibold text-foreground">Human</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  Traditional hire
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row) => (
            <div
              key={row.factor}
              className="grid grid-cols-12 items-start gap-x-4 border-b border-border py-5 transition-colors hover:bg-white"
            >
              <div className="col-span-4 text-[14.5px] font-semibold text-foreground">
                {row.factor}
              </div>
              <div className="col-span-4 flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-[14px] text-foreground">{row.ai}</span>
              </div>
              <div className="col-span-4 flex items-start gap-2">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                <span className="text-[14px] text-muted-foreground">{row.human}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-muted-foreground">
          Pricing starts well under the cost of a part-time receptionist and scales with call volume.
        </p>
      </div>
    </section>
  )
}
