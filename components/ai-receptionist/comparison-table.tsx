import { Bot, Check, GitCompareArrows, Minus, User } from "lucide-react"

const ROWS = [
  {
    factor: "Availability",
    ai: "24/7/365 · no breaks",
    human: "Office hours only",
    aiWin: true,
  },
  {
    factor: "Monthly cost",
    ai: "Fraction of one salary",
    human: "₹25,000–₹45,000+",
    aiWin: true,
  },
  {
    factor: "Simultaneous calls",
    ai: "Unlimited",
    human: "One at a time",
    aiWin: true,
  },
  {
    factor: "Languages",
    ai: "Hindi + English + 10 more",
    human: "Depends on hire",
    aiWin: true,
  },
  {
    factor: "Appointment booking",
    ai: "Live calendar sync · instant confirmations",
    human: "Manual entry · prone to errors",
    aiWin: true,
  },
  {
    factor: "Call data & analytics",
    ai: "Full transcripts · sentiment · reports",
    human: "Hand-written notes",
    aiWin: true,
  },
  {
    factor: "Sick days & attrition",
    ai: "Never",
    human: "Ongoing hiring cost",
    aiWin: true,
  },
]

export function ComparisonTable() {
  return (
    <section className="relative border-y bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <GitCompareArrows className="h-3.5 w-3.5" />
            Compare
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI Receptionist vs.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Human Receptionist
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            A side-by-side look at how Kedeyo stacks up against a traditional front-desk hire.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border bg-card shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b">
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Factor
            </div>
            <div className="relative border-l border-primary/20 bg-gradient-to-b from-primary/5 to-transparent px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-sm">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Kedeyo AI</div>
                  <div className="text-[10px] text-muted-foreground">Recommended</div>
                </div>
              </div>
              <span className="absolute -top-2 right-4 rounded-full bg-gradient-to-r from-primary to-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                Best fit
              </span>
            </div>
            <div className="border-l px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <User className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Human</div>
                  <div className="text-[10px] text-muted-foreground">Traditional hire</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.factor}
              className={`grid grid-cols-[1.2fr_1fr_1fr] items-stretch ${
                i !== ROWS.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="px-5 py-4 text-sm font-medium text-foreground">{row.factor}</div>

              {/* AI cell */}
              <div className="relative flex items-start gap-2 border-l border-primary/10 bg-primary/[0.02] px-5 py-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-sm text-foreground">{row.ai}</span>
              </div>

              {/* Human cell */}
              <div className="flex items-start gap-2 border-l px-5 py-4">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                <span className="text-sm text-muted-foreground">{row.human}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Pricing starts well under the cost of a part-time receptionist and scales with call volume.
        </p>
      </div>
    </section>
  )
}
