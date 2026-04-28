import { AlertTriangle, Banknote, Layers, FileWarning } from "lucide-react"

/**
 * Definition + Why teams switch — combined editorial section, no card chrome.
 * Layout: a wide intro paragraph followed by a 4-column problem ledger separated by hairlines.
 */

const PROBLEMS = [
  {
    Icon: AlertTriangle,
    title: "Peak-hour crashes",
    desc: "Aging on-premise dialers buckle under festive spikes and campaign bursts.",
    accent: "text-rose-600",
  },
  {
    Icon: Banknote,
    title: "Hardware CAPEX",
    desc: "₹15–40L upfront — depreciates the day it&apos;s installed, eats your margin for years.",
    accent: "text-amber-600",
  },
  {
    Icon: Layers,
    title: "Disconnected tools",
    desc: "WhatsApp, calls and email living in three tabs. No history, three logins, lost context.",
    accent: "text-fuchsia-600",
  },
  {
    Icon: FileWarning,
    title: "Compliance you can&apos;t audit",
    desc: "DND scrubbing and call-recording trails that auditors reject mid-review.",
    accent: "text-violet-600",
  },
]

export function CCCDefinition() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Definition */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-600">
              What is a cloud contact center?
            </p>
            <h2
              className="mt-4 text-balance font-semibold leading-[1.06] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Customer conversations,{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                without the box room.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-pretty text-[16px] leading-relaxed text-muted-foreground">
              A cloud contact center runs your customer conversations on remote servers
              instead of on-premise hardware. Agents log in through a web browser to handle
              voice, WhatsApp, email and chat from one screen — no PBX boxes, no telephony
              cards, no maintenance windows.
            </p>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground/85">
              Kedeyo is a cloud contact center built for Indian businesses: TRAI compliant,
              DPDP ready, hosted in AWS Mumbai and Chennai, and priced in INR.
            </p>
          </div>
        </div>

        {/* Why teams switch */}
        <div className="mt-20">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <h3
              className="text-balance font-semibold leading-tight tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}
            >
              Why Indian teams move to the cloud.
            </h3>
            <p className="max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              Most teams don&apos;t shop for a cloud contact center. They shop for a way out
              of one of these four problems.
            </p>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p, i) => (
              <div key={p.title} className="relative flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / 04
                </div>
                <p.Icon className={`mt-4 h-7 w-7 ${p.accent}`} strokeWidth={1.6} />
                <div
                  className="mt-3 text-[18px] font-semibold leading-tight tracking-tight text-foreground"
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p
                  className="mt-2 text-[14px] leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: p.desc }}
                />
              </div>
            ))}
          </div>

          <p className="mt-12 text-[14px] italic leading-relaxed text-muted-foreground">
            If two of these sound familiar, the math has already moved.
          </p>
        </div>
      </div>
    </section>
  )
}
