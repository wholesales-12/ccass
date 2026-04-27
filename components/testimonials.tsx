import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    pull: "Cut cost per conversation by 40% and replaced three tools with one.",
    metric: "−40% cost",
    name: "QuickServ",
    role: "E-Commerce · Mumbai",
  },
  {
    pull: "Our collections team is dialing 3× more accounts since moving to Kedeyo.",
    metric: "3× dials",
    name: "LendFast",
    role: "NBFC · Bengaluru",
  },
  {
    pull: "No-shows dropped 30% in two months. The front desk isn't on the phone all day.",
    metric: "−30% no-shows",
    name: "HealthBridge",
    role: "Healthcare · Delhi",
  },
  {
    pull: "Counselor productivity went up 85%. Only the warm leads reach a human.",
    metric: "+85% output",
    name: "EduReach",
    role: "EdTech · Hyderabad",
  },
  {
    pull: "Setup took five minutes, not five weeks. The Voice Bot now handles 60% of inbound calls.",
    metric: "60% deflected",
    name: "QuickServ",
    role: "E-Commerce · Mumbai",
  },
  {
    pull: "TRAI compliance and AI QA built in — we sleep better at audit time.",
    metric: "0 audit issues",
    name: "LendFast",
    role: "NBFC · Bengaluru",
  },
]

// Two interleaved rows so the marquees feel naturally varied
const ROW_A = [TESTIMONIALS[0], TESTIMONIALS[2], TESTIMONIALS[4]]
const ROW_B = [TESTIMONIALS[1], TESTIMONIALS[3], TESTIMONIALS[5]]

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Soft top-and-bottom edge fades for the marquee */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[760px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header — left-aligned, editorial */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Real results
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              What teams say after they{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                make the switch
              </span>
            </h2>
          </div>

          {/* Star rating + count, no card */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-sm leading-tight">
              <div className="font-semibold text-foreground">4.9 / 5</div>
              <div className="text-xs text-muted-foreground">across 500+ teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee rows — full-width, edge-to-edge with side fades */}
      <div className="relative mt-16 space-y-10">
        {/* Side fade masks */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background via-background to-transparent sm:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background via-background to-transparent sm:w-40"
        />

        <MarqueeRow items={ROW_A} duration="48s" />
        <MarqueeRow items={ROW_B} duration="56s" reverse />
      </div>

      <style>{`
        @keyframes testimonials-scroll-left {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }
        @keyframes testimonials-scroll-right {
          from { transform: translate3d(-50%,0,0); }
          to   { transform: translate3d(0,0,0); }
        }
        .testimonials-track:hover > .testimonials-inner {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

function MarqueeRow({
  items,
  duration,
  reverse,
}: {
  items: typeof TESTIMONIALS
  duration: string
  reverse?: boolean
}) {
  // Duplicate the items so the loop is seamless
  const loop = [...items, ...items]
  return (
    <div className="testimonials-track group relative w-full overflow-hidden">
      <ul
        className="testimonials-inner flex w-max items-center gap-12 whitespace-nowrap pl-12 pr-12"
        style={{
          animation: `${reverse ? "testimonials-scroll-right" : "testimonials-scroll-left"} ${duration} linear infinite`,
        }}
      >
        {loop.map((item, idx) => (
          <li key={`${item.name}-${idx}`} className="flex items-center gap-12">
            {/* Quote — pure typography, no card */}
            <div className="flex max-w-[640px] items-center gap-5">
              <span
                aria-hidden
                className="select-none font-serif text-5xl leading-none text-primary/30"
              >
                &ldquo;
              </span>
              <div className="min-w-0">
                <p className="overflow-hidden text-ellipsis whitespace-normal text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg">
                  {item.pull}
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold tracking-tight text-transparent">
                    {item.metric}
                  </span>
                  <span aria-hidden className="h-3 w-px bg-border" />
                  <span className="font-semibold uppercase tracking-[0.14em] text-foreground">
                    {item.name}
                  </span>
                  <span className="text-muted-foreground">{item.role}</span>
                </div>
              </div>
            </div>

            {/* Vertical hairline divider between items */}
            <span aria-hidden className="h-16 w-px shrink-0 bg-border/60" />
          </li>
        ))}
      </ul>
    </div>
  )
}
