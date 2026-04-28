/**
 * Industry use cases — three industries, each one row of typographic stats.
 * No card chrome, hairline-divided.
 */

const CASES = [
  {
    industry: "BPO",
    headline: "120-agent BPO migrated in 2 days.",
    desc: "Replaced an aging on-prem dialer that crashed 3–4 times a week during peak hours. Migration took two business days, cut average wait by 73%, and freed up ₹1.44L every month.",
    stats: [
      { metric: "14s", caption: "avg wait", delta: "down from 52s" },
      { metric: "87%", caption: "first-call resolution", delta: "up from 71%" },
      { metric: "₹1.44L", caption: "monthly savings", delta: "120 agents" },
      { metric: "0", caption: "peak-hour crashes", delta: "was 3–4 / wk" },
    ],
  },
  {
    industry: "E-commerce",
    headline: "D2C brand handling 8,000 orders a day.",
    desc: "Shifted 60% of customer queries to WhatsApp, deployed a bot that resolves 42% without a human, and dropped agent headcount by 40% — without hurting CSAT.",
    stats: [
      { metric: "60%", caption: "queries on WhatsApp", delta: "up from 15%" },
      { metric: "42%", caption: "bot resolution rate", delta: "from zero" },
      { metric: "94%", caption: "CSAT score", delta: "up from 82%" },
      { metric: "−40%", caption: "agents needed", delta: "30 → 18" },
    ],
  },
  {
    industry: "Fintech",
    headline: "NBFC processing 50K calls a month.",
    desc: "Hit RBI&apos;s 100% recording mandate, eliminated ₹18L of CAPEX, and cut average handle time by 45% — all without taking the floor offline for a single afternoon.",
    stats: [
      { metric: "99.95%", caption: "platform uptime", delta: "up from 97.2%" },
      { metric: "100%", caption: "call recording rate", delta: "RBI compliant" },
      { metric: "3.2 min", caption: "avg handle time", delta: "down from 5.8 min" },
      { metric: "₹0", caption: "hardware spend", delta: "cut ₹18L CAPEX" },
    ],
  },
]

export function CCCUseCases() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-600">
              How Indian teams use Kedeyo
            </p>
            <h2
              className="mt-4 text-balance font-semibold leading-[1.06] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Three industries.{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                Real numbers.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pretty text-[15.5px] leading-relaxed text-muted-foreground">
              Outcomes from teams running Kedeyo today. Same platform, very different
              workloads — same results: more answered, faster resolved, less spent.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col">
          {CASES.map((c, idx) => (
            <article key={c.industry} className="border-t border-border py-10 first:pt-12 last:border-b">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")} · {c.industry}
                  </div>
                  <h3
                    className="mt-3 text-balance font-semibold leading-tight tracking-tight text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
                  >
                    {c.headline}
                  </h3>
                  <p
                    className="mt-3 text-pretty text-[14.5px] leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: c.desc }}
                  />
                </div>
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
                    {c.stats.map((s) => (
                      <div key={s.caption} className="flex flex-col">
                        <div
                          className="bg-gradient-to-br from-fuchsia-600 to-violet-600 bg-clip-text font-semibold leading-none tracking-tight text-transparent"
                          style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
                        >
                          {s.metric}
                        </div>
                        <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground">
                          {s.caption}
                        </div>
                        <div className="mt-1 text-[12px] text-foreground/70">{s.delta}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
